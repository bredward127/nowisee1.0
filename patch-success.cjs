const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const target = `            <p className="font-sans text-sm text-emerald-800 max-w-lg">
              Your order for Toni Taylor's book has been safely processed. A confirmation email has been sent, and we will package your direct copy with personal care from our family.
            </p>`;

const newText = `            <p className="font-sans text-sm text-emerald-800 max-w-lg">
              Your order has been safely processed. A confirmation email has been sent. Physical items will be packaged with personal care from our family.
            </p>
            {purchasedItems.filter(item => item.product.category === 'PDF Study Guides').length > 0 && (
              <div className="w-full mt-4 p-4 bg-emerald-100 rounded text-left">
                <h4 className="font-bold text-emerald-900 mb-2">📥 Digital Downloads</h4>
                <p className="text-xs text-emerald-800 mb-3">Your PDF study guides are ready for immediate download:</p>
                <div className="space-y-2">
                  {purchasedItems.filter(item => item.product.category === 'PDF Study Guides').map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white p-2 rounded shadow-sm">
                      <span className="font-sans text-xs font-semibold text-zinc-800 truncate pr-4">{item.product.title}</span>
                      <a href="#" onClick={(e) => { e.preventDefault(); alert('In a live environment, this will trigger the PDF download.'); }} className="text-xs px-3 py-1 bg-emerald-600 text-white rounded font-bold hover:bg-emerald-700 transition">Download</a>
                    </div>
                  ))}
                </div>
              </div>
            )}`;

content = content.replace(target, newText);
fs.writeFileSync('src/App.tsx', content);
