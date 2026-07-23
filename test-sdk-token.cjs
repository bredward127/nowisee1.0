const { DropshipperClient } = require('ae_sdk');
const dotenv = require('dotenv');
dotenv.config();

async function test() {
  console.log("App Key:", process.env.ALIEXPRESS_APP_KEY);
  const client = new DropshipperClient({
    app_key: process.env.ALIEXPRESS_APP_KEY,
    app_secret: process.env.ALIEXPRESS_APP_SECRET,
    session: ''
  });
  // we can use a fake code to see if it reaches the server properly without signature error
  const res = await client.generateToken({
    code: 'fake_code_123'
  });
  console.log(JSON.stringify(res, null, 2));
}
test();
