const { DropshipperClient } = require('ae_sdk');
const dotenv = require('dotenv');
dotenv.config();

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
    app_secret: process.env.ALIEXPRESS_APP_SECRET,
    session: process.env.ALIEXPRESS_ACCESS_TOKEN
  });
  
  console.log("Testing DS with FR...");
  const res1 = await client.execute('aliexpress.ds.product.get', {
    product_id: 1005006364595887,
    target_currency: 'USD',
    target_language: 'en',
    ship_to_country: 'FR'
  });
  console.log("FR result:", res1.ok ? "Success" : res1.data?.aliexpress_ds_product_get_response?.rsp_msg);

  console.log("Testing Affiliate API...");
  const res2 = await client.execute('aliexpress.affiliate.productdetail.get', {
    product_ids: '1005006364595887',
    target_currency: 'USD',
    target_language: 'en'
  });
  console.log("Affiliate result:", res2.ok ? "Success" : JSON.stringify(res2));
}
test();
