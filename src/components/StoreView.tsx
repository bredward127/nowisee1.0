import { useState } from 'react';
import { ShoppingCart, ArrowLeft, Trash2, Plus, Minus, CreditCard, Sparkles, Check, Bookmark } from 'lucide-react';
import { Product, CartItem } from '../types';
import { PRODUCTS } from '../data';
import PayPalCartButton from './PayPalCartButton';

interface StoreViewProps {
  onBackToHome: () => void;
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveFromCart: (productId: string) => void;
  onClearCart: () => void;
  onPurchaseSuccess: (payerName: string) => void;
  viewingCart: boolean;
  setViewingCart: (view: boolean) => void;
}

export default function StoreView({
  onBackToHome,
  cart,
  onAddToCart,
  onUpdateQuantity,
  onRemoveFromCart,
  onClearCart,
  onPurchaseSuccess,
  viewingCart,
  setViewingCart
}: StoreViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category))).sort()];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const handleAddClick = (product: Product) => {
    onAddToCart(product);
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1200);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 3.99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="py-8 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto font-serif relative z-10 animate-fade-in">
      {/* Header breadcrumb bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-black/5 font-sans text-xs">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-2 text-zinc-600 hover:text-editorial-gold font-bold tracking-widest uppercase transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Sanctuary Home
        </button>
        
        <div className="flex items-center gap-4">
          <span className="text-zinc-500 uppercase tracking-widest font-semibold">Toni's Study Bookstore</span>
          <button
            onClick={() => setViewingCart(!viewingCart)}
            className="flex items-center gap-2.5 bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full font-bold hover:bg-[#8B0000] tracking-wider uppercase transition shadow-md relative"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Cart ({totalItems})</span>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#F5F2ED] font-mono">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Cart side panel or overview */}
      {viewingCart && (
        <div className="mb-10 p-6 md:p-8 bg-white border border-editorial-gold/30 rounded-lg shadow-lg max-w-4xl mx-auto animate-slide-down">
          <div className="flex justify-between items-center pb-4 mb-6 border-b border-black/5 font-sans">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-editorial-gold" />
              <h3 className="font-serif text-xl font-bold">Your Selection Cart ({totalItems} items)</h3>
            </div>
            <button
              onClick={() => setViewingCart(false)}
              className="text-xs text-zinc-500 underline hover:text-zinc-800"
            >
              Hide Cart
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-10 font-serif">
              <p className="text-zinc-500 italic mb-4">Your shopping cart is currently empty.</p>
              <button
                onClick={() => setViewingCart(false)}
                className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded text-xs font-sans font-bold tracking-widest uppercase hover:bg-editorial-gold transition"
              >
                Browse Bookstore products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-serif">
              {/* Cart items list */}
              <div className="lg:col-span-7 space-y-4">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-4 p-4 border border-black/5 rounded bg-zinc-50/50">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-16 h-20 object-cover rounded shadow border border-zinc-200"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-sm leading-snug text-[#1A1A1A]">{item.product.title}</h4>
                        <p className="text-xs text-zinc-500 font-sans mt-0.5">${item.product.price.toFixed(2)} each</p>
                      </div>
                      
                      {/* Quantity selectors */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-black/10 rounded overflow-hidden bg-white text-xs">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1.5 hover:bg-zinc-50 transition"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 font-sans font-bold text-zinc-800">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="p-1.5 hover:bg-zinc-50 transition"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => onRemoveFromCart(item.product.id)}
                          className="text-zinc-400 hover:text-red-600 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-right flex flex-col justify-between">
                      <span className="font-bold text-sm text-[#1A1A1A]">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
                
                <button
                  onClick={onClearCart}
                  className="text-xs text-red-700 underline font-sans font-medium hover:text-red-900 transition"
                >
                  Clear all selections
                </button>
              </div>

              {/* Cart summary and dynamic PayPal Checkout */}
              <div className="lg:col-span-5 p-6 bg-[#F5F2ED]/60 border border-editorial-stone rounded-lg flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-base border-b border-black/5 pb-2 mb-4">Summary</h4>
                  <div className="space-y-2 text-sm font-sans text-zinc-700">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span className="font-bold text-zinc-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping & Care Packing:</span>
                      <span className="font-bold text-zinc-900">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="h-px bg-black/5 my-3" />
                    <div className="flex justify-between text-base font-serif font-black text-zinc-950">
                      <span>Total Price:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Informational checkout safety strip */}
                  <div className="mt-4 p-3 bg-white/70 border border-editorial-gold/15 rounded text-[11px] text-zinc-600 font-sans leading-relaxed">
                    <p className="font-semibold text-[#8B0000] mb-0.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-editorial-gold" /> Personal Packing & Care
                    </p>
                    All items are hand-packed at Toni’s family home with a personal prayer & bookmark. Please allow 10 days to your door.
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 space-y-3">
                  <div className="text-xs font-sans text-zinc-500 uppercase tracking-widest text-center font-bold mb-2">
                    🔒 SECURE checkout with PayPal
                  </div>
                  <PayPalCartButton
                    totalPrice={total}
                    cartItems={cart}
                    onSuccess={(name) => {
                      onClearCart();
                      setViewingCart(false);
                      onPurchaseSuccess(name);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Bookstore Showcase */}
      <div className="text-center mb-12">
        <span className="font-sans text-xs font-bold tracking-[0.3em] text-[#8B0000] uppercase">Toni ME Taylor Bookstore</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1A1A] mt-2">Study Guide & Faith Keepsakes</h2>
        <p className="text-sm text-zinc-600 font-sans mt-2 max-w-xl mx-auto leading-relaxed">
          Complement Grandma Toni’s story with companion guided materials, quiet-time prayer merchandise, and beautiful copies designed to inspire faith.
        </p>

        {/* Category filter tabs */}
        <div className="flex overflow-x-auto pb-3 gap-2 mt-8 font-sans text-xs justify-start md:justify-center -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none snap-x">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 border rounded-full font-bold uppercase tracking-wider transition whitespace-nowrap snap-center ${
                selectedCategory === cat
                  ? 'bg-[#1A1A1A] text-[#F5F2ED] border-transparent shadow'
                  : 'bg-white text-zinc-600 border-editorial-stone hover:border-editorial-gold/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => {
          const itemInCart = cart.find(item => item.product.id === product.id);
          const quantityInCart = itemInCart ? itemInCart.quantity : 0;
          const isJustAdded = justAddedId === product.id;

          return (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-black/5 shadow-sm hover:shadow-md hover:border-editorial-gold/25 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Image container */}
              <div className="aspect-[4/5] overflow-hidden bg-[#F5F2ED]/30 relative border-b border-black/5">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Category badge */}
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-zinc-700 text-[10px] font-sans font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm shadow-sm border border-zinc-100">
                  {product.category}
                </span>

                {quantityInCart > 0 && (
                  <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-sans font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm shadow-sm flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> In Cart ({quantityInCart})
                  </span>
                )}
              </div>

              {/* Product Info content */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1A1A1A] group-hover:text-editorial-gold transition leading-snug mb-2">
                    {product.title}
                  </h3>
                  
                  <div className="text-xl font-serif text-[#8B0000] font-black mb-4">
                    ${product.price.toFixed(2)}
                  </div>
                  
                  <p className="font-serif text-sm text-zinc-600 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  {/* Features list bullet points */}
                  <ul className="space-y-1.5 font-sans text-xs text-zinc-500 border-t border-black/5 pt-4 mb-6">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Bookmark className="w-3.5 h-3.5 text-editorial-gold mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add to cart / Action CTA */}
                <button
                  onClick={() => handleAddClick(product)}
                  className={`w-full py-3.5 font-sans text-xs font-bold uppercase tracking-widest transition duration-300 ${
                    isJustAdded
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-[#1A1A1A] text-white hover:bg-editorial-gold hover:text-white'
                  }`}
                >
                  {isJustAdded ? (
                    <span className="flex items-center justify-center gap-1.5">
                      <Check className="w-4 h-4" /> Added to selection!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-1.5">
                      <ShoppingCart className="w-4 h-4" /> Add to selection
                    </span>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Secondary beautiful quote from the book */}
      <div className="mt-20 p-8 md:p-12 border border-editorial-gold/25 rounded bg-white text-center shadow-sm relative overflow-hidden max-w-4xl mx-auto">
        <div className="absolute top-0 left-0 bottom-0 w-2.5 bg-gradient-to-b from-editorial-gold via-[#8B0000] to-editorial-gold" />
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-editorial-gold font-bold block mb-3">Toni’s Vision for Humankind</span>
        <p className="font-serif text-zinc-700 italic text-lg sm:text-xl leading-relaxed">
          &ldquo;What you hold in your hands is a ‘Universal Unveiling of Truth, Love, Forgiveness, Unity, Empathy, Compassion, and Hope.’ In Jesus’ Name, I pray you, too, shall see.&rdquo;
        </p>
        <div className="mt-4 font-sans text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
          — Toni ME Taylor, <em>Now I See</em> Memoir
        </div>
      </div>
    </div>
  );
}
