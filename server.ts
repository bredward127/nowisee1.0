import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser middleware
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Reddit Conversions API (server-side events)
  //
  // The browser pixel is blocked for a meaningful share of visitors, so the
  // same events are also sent from here. Reddit de-duplicates a server event
  // against the pixel event when both carry the same conversion_id, so the
  // client sends the id it already used (the PayPal order id for purchases).
  app.post("/api/reddit/conversion", async (req, res) => {
    const accessToken = process.env.REDDIT_CONVERSIONS_ACCESS_TOKEN;
    const pixelId = process.env.REDDIT_PIXEL_ID || "a2_jfpt0cc0tbxd";

    if (!accessToken) {
      // Not configured yet: report success so checkout is never affected.
      return res.json({ sent: false, reason: "REDDIT_CONVERSIONS_ACCESS_TOKEN not set" });
    }

    try {
      const crypto = await import("crypto");
      const sha256 = (value?: string) => value
        ? crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex")
        : undefined;

      const {
        trackingType,
        customEventName,
        conversionId,
        value,
        itemCount,
        currency = "USD",
        email,
        products,
        rdtUuid,
        clickId,
        eventAt
      } = req.body || {};

      if (!trackingType) {
        return res.status(400).json({ error: "trackingType is required" });
      }

      const forwardedFor = (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim();
      const ipAddress = forwardedFor || req.socket.remoteAddress || undefined;

      const event: Record<string, any> = {
        // Reddit rejects events older than seven days.
        event_at: typeof eventAt === "number" ? eventAt : Date.now(),
        action_source: "WEBSITE",
        type: customEventName
          ? { tracking_type: "CUSTOM", custom_event_name: customEventName }
          : { tracking_type: trackingType },
        user: {
          email: sha256(email),
          ip_address: sha256(ipAddress),
          user_agent: req.headers["user-agent"],
          uuid: rdtUuid
        },
        event_metadata: {
          conversion_id: conversionId,
          currency,
          value_decimal: typeof value === "number" ? value : undefined,
          item_count: typeof itemCount === "number" ? itemCount : undefined,
          products
        }
      };
      if (clickId) event.click_id = clickId;

      const response = await fetch(`https://ads-api.reddit.com/api/v3/pixels/${pixelId}/conversion_events`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: { events: [event] },
          test_mode: process.env.REDDIT_CONVERSIONS_TEST_MODE === "true"
        })
      });

      const body = await response.text();
      if (!response.ok) {
        console.error("Reddit Conversions API error:", response.status, body);
        return res.status(502).json({ sent: false, status: response.status, body });
      }

      res.json({ sent: true, status: response.status });
    } catch (error: any) {
      console.error("Reddit Conversions API request failed:", error);
      res.status(500).json({ sent: false, error: error.message });
    }
  });

  // AliExpress OAuth Login Helper
  app.get("/api/aliexpress/login", (req, res) => {
    const appKey = process.env.ALIEXPRESS_APP_KEY;
    const callbackUrl = process.env.ALIEXPRESS_CALLBACK_URL;
    
    if (!appKey || !callbackUrl) {
      return res.status(500).send("Missing AliExpress configuration in environment variables.");
    }

    // Standard AliExpress OAuth URL
    const authUrl = `https://api-sg.aliexpress.com/oauth/authorize?response_type=code&client_id=${appKey}&redirect_uri=${encodeURIComponent(callbackUrl)}&force_auth=true`;
    
    res.redirect(authUrl);
  });

  // AliExpress API Callback Route (OAuth)
  app.get("/api/aliexpress/callback", async (req, res) => {
    const authorizationCode = req.query.code || req.query.auth_code;
    
    if (authorizationCode) {
      console.log("Received AliExpress Authorization Code:", authorizationCode);
      
      try {
        const appKey = process.env.ALIEXPRESS_APP_KEY;
        const appSecret = process.env.ALIEXPRESS_APP_SECRET;

        if (!appKey || !appSecret) {
          throw new Error("Missing appKey or appSecret");
        }

        // Exchange code for token using fixed ae_sdk client
        const { DropshipperClient } = await import('ae_sdk');
        
        class FixedDropshipperClient extends DropshipperClient {
          async execute(method: string, params: any): Promise<any> {
            const parameters = {
              ...params,
              method,
              app_key: this.app_key,
              simplify: true,
              sign_method: this.sign_method,
              timestamp: Date.now()
            } as any;
            if (this.session) parameters.session = this.session;
            parameters.sign = this.sign(parameters);
            return await this.call(parameters);
          }
        }

        const client = new FixedDropshipperClient({
          app_key: appKey,
          app_secret: appSecret
        } as any);

        const tokenResponse = await client.generateToken({
          code: authorizationCode.toString()
        }) as any;

        console.log("Token Response:", tokenResponse.data || tokenResponse);
        
        if (tokenResponse.ok && tokenResponse.data && tokenResponse.data.access_token) {
          // Append to .env file
          const envPath = path.resolve(process.cwd(), '.env');
          const fs = await import('fs');
          
          let envContent = '';
          if (fs.existsSync(envPath)) {
            envContent = fs.readFileSync(envPath, 'utf8');
          }
          
          // Remove old token if exists
          envContent = envContent.replace(/ALIEXPRESS_ACCESS_TOKEN=.*\n?/g, '');
          envContent += `\nALIEXPRESS_ACCESS_TOKEN=${tokenResponse.data.access_token}\n`;
          
          fs.writeFileSync(envPath, envContent.trim() + '\n');
          console.log("Access token saved to .env file.");

          res.send(`
            <html>
              <body>
                <h2>AliExpress Authorization Successful!</h2>
                <p>Successfully generated access token from code.</p>
                <p><strong>The token has been automatically saved to your .env file!</strong></p>
                <p>You can close this window now and return to the app.</p>
              </body>
            </html>
          `);
        } else {
          res.status(400).send(`
            <html>
              <body>
                <h2>AliExpress Authorization Failed</h2>
                <p>Could not generate access token.</p>
                <pre>${JSON.stringify(tokenResponse.data || tokenResponse, null, 2)}</pre>
                <p>You can close this window and try again.</p>
              </body>
            </html>
          `);
        }
      } catch (error: any) {
        console.error("Error exchanging token:", error);
        res.status(500).send(`
          <html>
            <body>
              <h2>Error Exchanging Token</h2>
              <pre>${error instanceof Error ? error.message : JSON.stringify(error)}</pre>
            </body>
          </html>
        `);
      }
    } else {
      console.error("AliExpress Callback received without code. Query params:", req.query);
      res.status(400).send(`
        <html>
          <body>
            <h2>Authorization code not found in request.</h2>
            <p>Query parameters received:</p>
            <pre>${JSON.stringify(req.query, null, 2)}</pre>
          </body>
        </html>
      `);
    }
  });

  // AliExpress API Test Route
  app.get("/api/aliexpress/test", async (req, res) => {
    try {
      const appKey = process.env.ALIEXPRESS_APP_KEY;
      const appSecret = process.env.ALIEXPRESS_APP_SECRET;
      const accessToken = process.env.ALIEXPRESS_ACCESS_TOKEN;

      if (!appKey || !appSecret || !accessToken) {
        return res.status(400).json({ error: "Missing AliExpress credentials in environment variables." });
      }

      const { DropshipperClient } = await import('ae_sdk');
      
      class FixedDropshipperClient extends DropshipperClient {
        async execute(method: string, params: any): Promise<any> {
          const parameters = {
            ...params,
            method,
            app_key: this.app_key,
            simplify: true,
            sign_method: this.sign_method,
            timestamp: Date.now()
          } as any;
          if (this.session) parameters.session = this.session;
          parameters.sign = this.sign(parameters);
          return await this.call(parameters);
        }
      }

      const client = new FixedDropshipperClient({
        app_key: appKey,
        app_secret: appSecret,
        session: accessToken
      } as any);

      // Fetch promos to test connection
      const testResponse = await client.execute("aliexpress.ds.feedname.get", {}) as any;
      
      if (testResponse.ok) {
        res.json({
          success: true,
          message: "AliExpress Connection Successful!",
          promos_count: testResponse.data?.aliexpress_ds_feedname_get_response?.resp_result?.result?.current_record_count || 0,
          sample_data: testResponse.data?.aliexpress_ds_feedname_get_response?.resp_result?.result?.promos?.promo?.slice(0, 3) || []
        });
      } else {
        res.status(500).json({
          success: false,
          error: testResponse.message || "Failed to fetch data from AliExpress",
          details: testResponse
        });
      }
    } catch (error: any) {
      console.error("Error testing AliExpress connection:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Support client-side routing for SPA
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
