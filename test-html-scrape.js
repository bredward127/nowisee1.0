const https = require('https');

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function test() {
  const html = await fetchHtml('https://www.aliexpress.com/item/1005009660092115.html');
  const match = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
  if (match) {
    console.log("Found image:", match[1]);
  } else {
    console.log("No og:image found");
  }
}
test();
