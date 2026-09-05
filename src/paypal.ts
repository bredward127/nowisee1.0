// Single source of truth for the PayPal JS SDK.
//
// IMPORTANT — which credential belongs here:
// This must be the *Client ID* of a REST app from
// developer.paypal.com -> Apps & Credentials -> **Live** -> your app.
// It is ~80 characters and starts with "A" (e.g. "AeA1QIZX...").
//
// It is NOT the "BAA..." id that PayPal hands out from the no-code
// "Payment Buttons" / hosted-button tool. A BAA id only works with
// `&components=hosted-buttons` plus a `hostedButtonId`; passing it to the
// regular `paypal.Buttons({ createOrder })` flow renders a button that
// opens the PayPal window and closes it again immediately — the "flash and
// nothing happens" symptom.
//
// Set it at build time as VITE_PAYPAL_CLIENT_ID (Vite inlines VITE_* vars
// into the bundle, so this value is public by design — the app Secret must
// never appear in this file or anywhere else in src/).

export const PAYPAL_CLIENT_ID = (import.meta.env.VITE_PAYPAL_CLIENT_ID || '').trim();

/** A hosted-button ("Payment Buttons") id, which cannot drive paypal.Buttons(). */
export const isHostedButtonId = (id: string) => id.startsWith('BAA');

export type PayPalConfigError = 'missing' | 'hosted-button-id' | null;

export function getPayPalConfigError(): PayPalConfigError {
  if (!PAYPAL_CLIENT_ID) return 'missing';
  if (isHostedButtonId(PAYPAL_CLIENT_ID)) return 'hosted-button-id';
  return null;
}

const SDK_PARAMS = 'currency=USD&intent=capture&commit=true&components=buttons';

let sdkPromise: Promise<void> | null = null;

export function loadPayPalSdk(): Promise<void> {
  if (window.paypal) return Promise.resolve();
  if (sdkPromise) return sdkPromise;

  const configError = getPayPalConfigError();
  if (configError === 'missing') {
    return Promise.reject(new Error('VITE_PAYPAL_CLIENT_ID is not set for this build.'));
  }
  if (configError === 'hosted-button-id') {
    return Promise.reject(
      new Error(
        'VITE_PAYPAL_CLIENT_ID looks like a hosted-button id (starts with "BAA"). ' +
          'Use the Client ID from a Live REST app in Apps & Credentials instead.'
      )
    );
  }

  sdkPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-now-i-see-paypal-sdk]');
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('PayPal SDK failed to load.')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(PAYPAL_CLIENT_ID)}&${SDK_PARAMS}`;
    script.async = true;
    script.dataset.nowISeePaypalSdk = 'true';
    script.onload = () => resolve();
    // PayPal answers an unknown/blocked client-id with a non-JS error body,
    // which the browser reports here rather than as a working SDK.
    script.onerror = () => reject(new Error('PayPal SDK failed to load — check that the client id is a valid Live REST Client ID.'));
    document.head.appendChild(script);
  });

  // Let a later attempt retry rather than latch onto the failure forever.
  sdkPromise.catch(() => { sdkPromise = null; });

  return sdkPromise;
}
