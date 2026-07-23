const { DropshipperClient } = require('ae_sdk');

const client = new DropshipperClient({
  app_key: process.env.ALIEXPRESS_APP_KEY,
  app_secret: process.env.ALIEXPRESS_APP_SECRET
});

console.log(typeof client.generateToken);
