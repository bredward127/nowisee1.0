const { DropshipperClient } = require('ae_sdk');
const dotenv = require('dotenv');
dotenv.config();

// Monkey patch DropshipperClient to not send empty session
class FixedDropshipperClient extends DropshipperClient {
  async execute(method, params) {
    const parameters = {
      ...params,
      method,
      app_key: this.app_key,
      simplify: true,
      sign_method: this.sign_method,
      timestamp: Date.now()
    };
    if (this.session) parameters.session = this.session;
    parameters.sign = this.sign(parameters);
    return await this.call(parameters);
  }
}

async function test() {
  const client = new FixedDropshipperClient({
    app_key: process.env.ALIEXPRESS_APP_KEY,
    app_secret: process.env.ALIEXPRESS_APP_SECRET
  });
  
  const res = await client.generateToken({
    code: 'fake_code_123'
  });
  console.log(JSON.stringify(res, null, 2));
}
test();
