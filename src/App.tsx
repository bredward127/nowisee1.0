import { useState } from 'react';
import { BookOpen, Star, ShieldCheck, Heart, Award, ArrowRight, Book, Flame, Compass, MessageSquare, ShoppingCart, Menu, X } from 'lucide-react';
import BookMockup from './components/BookMockup';
import ChapterPreview from './components/ChapterPreview';
import ReviewSection from './components/ReviewSection';
import MeetAuthor from './components/MeetAuthor';
import FaqSection from './components/FaqSection';
import PayPalButton from './components/PayPalButton';
import StickyCTA from './components/StickyCTA';
import StoreView from './components/StoreView';
import NewsletterPopup from './components/NewsletterPopup';
import { Product, CartItem } from './types';

export default function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'store'>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Accessibility States
  const [largeText, setLargeText] = useState(() => localStorage.getItem('acc-large-text') === 'true');
  const [highContrast, setHighContrast] = useState(() => localStorage.getItem('acc-high-contrast') === 'true');
  const [sansSerif, setSansSerif] = useState(() => localStorage.getItem('acc-sans-serif') === 'true');

  const handleSetLargeText = (val: boolean) => {
    setLargeText(val);
    localStorage.setItem('acc-large-text', String(val));
  };
  const handleSetHighContrast = (val: boolean) => {
    setHighContrast(val);
    localStorage.setItem('acc-high-contrast', String(val));
  };
  const handleSetSansSerif = (val: boolean) => {
    setSansSerif(val);
    localStorage.setItem('acc-sans-serif', String(val));
  };

  const handlePurchaseSuccess = (payerName: string) => {
    setPurchaseSuccess(payerName);
    // Smooth scroll to top to show confirmation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToHomeAndScroll = (id: string) => {
    setActiveTab('home');
    setTimeout(() => {
      scrollToSection(id);
    }, 100);
  };

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQuantity = item.quantity + delta;
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`min-h-screen flex flex-col relative transition-all duration-300 selection:bg-editorial-gold selection:text-white
      ${highContrast ? 'bg-white text-black contrast-125' : 'bg-[#F5F2ED] text-[#1A1A1A]'}
      ${sansSerif ? '!font-sans' : 'font-serif'}
      ${largeText ? 'text-lg md:text-xl [&_p]:text-lg [&_p]:leading-relaxed [&_h1]:text-6xl sm:[&_h1]:text-7xl lg:[&_h1]:text-8xl [&_h2]:text-3xl [&_h3]:text-2xl [&_button]:text-sm' : 'text-base'}
    `}>
      {/* Background Ornamental Element */}
      <div className="absolute top-[-100px] right-[-150px] text-[400px] font-black leading-none text-black/[0.015] select-none pointer-events-none z-0">
        2026
      </div>

      {/* Top Banner for Faith Announcement */}
      <div className="bg-[#8B0000] text-[#F5F2ED] font-sans py-2.5 px-4 text-center text-xs font-semibold tracking-[0.15em] uppercase z-10 shadow-sm">
        <span>A STORY OF FAITH, FAMILY, & SPIRITUAL AWAKENING — NEWLY REPUBLISHED</span>
      </div>

      {/* Navigation */}
      <nav className="h-20 px-6 md:px-12 flex justify-between items-center border-b border-black/5 bg-[#F5F2ED] z-30 sticky top-0 backdrop-blur-sm bg-opacity-95">
        <button 
          onClick={() => { setActiveTab('home'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-xl md:text-2xl font-bold tracking-tighter uppercase font-serif text-left cursor-pointer hover:opacity-80 transition"
        >
          Toni <span className="italic font-light text-editorial-gold">Taylor</span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-sans font-semibold">
          <button onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`hover:text-editorial-gold transition ${activeTab === 'home' ? 'text-editorial-gold border-b-2 border-editorial-gold pb-1' : ''}`}>Home</button>
          <button onClick={() => setActiveTab('store')} className={`hover:text-editorial-gold transition ${activeTab === 'store' ? 'text-editorial-gold border-b-2 border-editorial-gold pb-1' : ''}`}>Store</button>
          <button onClick={() => navigateToHomeAndScroll('the-story')} className="hover:text-editorial-gold transition">The Testimony</button>
          <button onClick={() => navigateToHomeAndScroll('meet-toni')} className="hover:text-editorial-gold transition">Meet Toni</button>
          <button onClick={() => navigateToHomeAndScroll('reviews')} className="hover:text-editorial-gold transition">Reviews</button>
        </div>

        {/* Navigation Action Area */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Cart trigger in nav */}
          <button
            onClick={() => { setActiveTab('store'); setIsMobileMenuOpen(false); }}
            className="relative p-2 text-zinc-700 hover:text-editorial-gold transition"
            title="Open Bookstore Cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalCartItems > 0 && (
              <span className="absolute top-0 right-0 bg-[#8B0000] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-mono font-bold">
                {totalCartItems}
              </span>
            )}
          </button>

          {/* Desktop Free Preview Button */}
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="hidden md:block border border-black px-5 py-2 text-[10px] font-sans uppercase tracking-[0.15em] font-bold hover:bg-black hover:text-white transition"
          >
            Free Preview
          </button>

          {/* Mobile Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-700 hover:text-editorial-gold transition focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Sliding Menu Dropdown */}
      <div className="relative">
        {isMobileMenuOpen && (
          <div
            className="md:hidden w-full bg-[#F5F2ED] border-b border-black/10 shadow-lg z-20 fixed top-20 left-0 right-0 font-sans animate-slide-down"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-sm uppercase tracking-[0.15em] font-bold">
              <button 
                onClick={() => { 
                  setActiveTab('home'); 
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' }); 
                }} 
                className={`text-left py-2 hover:text-editorial-gold transition border-b border-black/5 ${activeTab === 'home' ? 'text-editorial-gold' : 'text-zinc-800'}`}
              >
                Home
              </button>
              <button 
                onClick={() => { 
                  setActiveTab('store'); 
                  setIsMobileMenuOpen(false); 
                }} 
                className={`text-left py-2 hover:text-editorial-gold transition border-b border-black/5 flex justify-between items-center ${activeTab === 'store' ? 'text-editorial-gold' : 'text-zinc-800'}`}
              >
                <span>Store</span>
                {totalCartItems > 0 && (
                  <span className="bg-[#8B0000] text-white text-[10px] px-2.5 py-0.5 rounded-full font-mono">
                    {totalCartItems} {totalCartItems === 1 ? 'item' : 'items'}
                  </span>
                )}
              </button>
              <button 
                onClick={() => { 
                  navigateToHomeAndScroll('the-story'); 
                  setIsMobileMenuOpen(false); 
                }} 
                className="text-left py-2 text-zinc-800 hover:text-editorial-gold transition border-b border-black/5"
              >
                The Testimony
              </button>
              <button 
                onClick={() => { 
                  navigateToHomeAndScroll('meet-toni'); 
                  setIsMobileMenuOpen(false); 
                }} 
                className="text-left py-2 text-zinc-800 hover:text-editorial-gold transition border-b border-black/5"
              >
                Meet Toni
              </button>
              <button 
                onClick={() => { 
                  navigateToHomeAndScroll('reviews'); 
                  setIsMobileMenuOpen(false); 
                }} 
                className="text-left py-2 text-zinc-800 hover:text-editorial-gold transition border-b border-black/5"
              >
                Reviews
              </button>
              
              <div className="pt-2 flex flex-col gap-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsPreviewOpen(true);
                  }}
                  className="w-full text-center py-3.5 border border-black text-[10px] font-sans uppercase tracking-[0.15em] font-bold hover:bg-black hover:text-white transition"
                >
                  Free Preview
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Success Alert */}
        {purchaseSuccess && (
          <div className="max-w-4xl mx-auto mt-6 mx-4 p-6 bg-emerald-50 border border-emerald-800/10 rounded-md text-emerald-950 flex flex-col items-center text-center gap-2 shadow-sm animate-fade-in relative z-20">
            <ShieldCheck className="w-10 h-10 text-emerald-600" />
            <h3 className="font-serif text-xl font-bold">Thank You, {purchaseSuccess}!</h3>
            <p className="font-sans text-sm text-emerald-800 max-w-lg">
              Your order for Toni Taylor's book has been safely processed. A confirmation email has been sent, and we will package your direct copy with personal care from our family.
            </p>
            <button
              onClick={() => setPurchaseSuccess(null)}
              className="mt-2 text-xs font-sans font-semibold underline hover:text-emerald-700"
            >
              Dismiss
            </button>
          </div>
        )}

        {activeTab === 'home' ? (
          <>
            {/* Hero Section */}
            <section className="py-12 md:py-20 px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 max-w-7xl mx-auto items-center relative z-10">
              {/* Left Hero Text */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#8B0000] font-bold block mb-3">
                  A True Story of Faith
                </span>
                <h1 className="text-[52px] sm:text-[76px] lg:text-[84px] leading-none tracking-tight font-serif text-[#1A1A1A] mb-3">
                  Now I <span className="italic font-light text-[#8B0000]">See</span>
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-sans tracking-widest text-editorial-gold font-semibold uppercase mb-6 leading-relaxed">
                  America. My Testimony. God and Me.
                </h2>
                <div className="font-sans text-[11px] text-zinc-500 font-bold tracking-[0.2em] uppercase mb-4">
                  By <span className="text-[#1A1A1A]">Toni ME Taylor</span>
                </div>
                <p className="text-base sm:text-lg leading-relaxed text-zinc-700 mb-8 max-w-2xl font-serif">
                  A powerful, raw, and deeply inspiring testimony of overcoming trials, healing from brokenness, and discovering an unshakeable connection to God.
                </p>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => scrollToSection('order-now')}
                    className="bg-[#1A1A1A] text-white px-8 py-4.5 text-[11px] font-sans uppercase tracking-[0.25em] font-bold hover:bg-[#8B0000] transition duration-300 text-center shadow-lg hover:shadow-xl"
                  >
                    Order Your Copy
                  </button>
                  <button
                    onClick={() => setIsPreviewOpen(true)}
                    className="flex items-center justify-center gap-2 border border-black/20 bg-white/50 backdrop-blur-sm px-8 py-4.5 text-[11px] font-sans uppercase tracking-[0.25em] font-bold hover:bg-black/5 transition duration-300 text-center"
                  >
                    <BookOpen className="w-4 h-4 text-editorial-gold" /> Read Free Excerpt
                  </button>
                </div>

                {/* Quick trust strip */}
                <div className="mt-8 pt-6 border-t border-black/5 flex flex-wrap items-center gap-6 text-xs text-zinc-500 font-sans font-medium">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#8B0000]" /> Secure PayPal Express Checkout</span>
                  <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-editorial-gold" /> Signed Copies Available</span>
                </div>
              </div>

              {/* Right Hero Image / Mockup */}
              <div className="md:col-span-5 flex flex-col items-center justify-center relative">
                <BookMockup />
                <p className="text-xs text-zinc-400 font-sans tracking-widest mt-2 uppercase">
                  ▲ Drag book to rotate and explore cover
                </p>
              </div>
            </section>

            {/* Divider line */}
            <div className="w-full h-px bg-black/5" />

            {/* Book Quotes Bar (Toni's voice) */}
            <section className="bg-[#EAE7E0] py-10 px-6 text-center border-b border-black/5 relative z-10">
              <div className="max-w-4xl mx-auto">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-40 block mb-2">Toni's Testimony</span>
                <p className="font-serif italic text-2xl sm:text-3xl text-[#8B0000] leading-snug">
                  &ldquo;The adversarial bell clanging throughout this great nation cannot be &ldquo;unrung&rdquo;! But, a United America can reclaim, reestablish, reignite, and reaffirm America&rsquo;s Core Values.&rdquo;
                </p>
              </div>
            </section>

            {/* Core Themes (Bento grid style) */}
            <section id="the-story" className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <span className="font-sans text-xs font-bold tracking-[0.4em] text-editorial-gold uppercase">THE HEART OF THE memoir</span>
                <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1A1A] mt-3">Spiritual Sight & Unveiling</h2>
                <div className="h-[2px] w-24 bg-[#8B0000] mx-auto mt-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
                  <div>
                    <Heart className="w-8 h-8 text-[#8B0000] mb-6" />
                    <h3 className="font-serif text-xl font-bold mb-4">Gracefully Broken</h3>
                    <p className="font-serif text-zinc-600 leading-relaxed text-[15px]">
                      &ldquo;The world broke me from the inside out. Having no further need of me, it gathered up my broken pieces, took me to an abandoned landfill, and threw me atop a garbage heap.&rdquo; Discover how God found Toni, wrapped her in mercy, and made her whole again.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-black/5 mt-6 font-sans text-xs tracking-wider uppercase text-editorial-gold font-bold">
                    Spiritual Sight Overcoming
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
                  <div>
                    <Flame className="w-8 h-8 text-editorial-gold mb-6" />
                    <h3 className="font-serif text-xl font-bold mb-4">We are God's Lighthouses</h3>
                    <p className="font-serif text-zinc-600 leading-relaxed text-[15px]">
                      &ldquo;We are God’s lighthouses standing amid the world’s raging storms! We pave, light, and secure the way! We are sword! We are shield!&rdquo; An inspiring, patriotic call to return to America's core values of Truth, Justice, Liberty, and Freedom.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-black/5 mt-6 font-sans text-xs tracking-wider uppercase text-editorial-gold font-bold">
                    Faith and Sanctuary
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
                  <div>
                    <Compass className="w-8 h-8 text-indigo-900 mb-6" />
                    <h3 className="font-serif text-xl font-bold mb-4">Different Yet The Same</h3>
                    <p className="font-serif text-zinc-600 leading-relaxed text-[15px]">
                      Through deep scriptural revelations and personal dreams, Toni reflects on her shared spiritual purpose. She looks past skin color and outer differences, showing how we are all identical beneath the skin—conjointly authored and beautifully designed by our Father.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-black/5 mt-6 font-sans text-xs tracking-wider uppercase text-editorial-gold font-bold">
                    A Shared Divine Purpose
                  </div>
                </div>
              </div>
            </section>

            {/* Meet the Author Section */}
            <section id="meet-toni" className="bg-[#EAE7E0] py-20 px-6 md:px-12 border-t border-b border-black/5">
              <div className="max-w-7xl mx-auto">
                <MeetAuthor />
              </div>
            </section>

            {/* Reader Testimonials Section */}
            <section id="reviews" className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
              <ReviewSection />
            </section>

            {/* Order Editions Section */}
            <section id="order-now" className="bg-white py-20 px-6 md:px-12 border-t border-b border-black/5 relative z-10">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <span className="font-sans text-xs font-bold tracking-[0.4em] text-editorial-gold uppercase">ORDER YOUR COPY</span>
                  <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1A1A] mt-3">Select Your Edition</h2>
                  <p className="text-sm text-zinc-500 font-sans mt-2">
                    Order directly from our personal family stock or instantly on Amazon.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
                  {/* Hardcover Edition Card */}
                  <div className="p-8 border-2 border-editorial-gold rounded bg-[#F5F2ED]/30 relative flex flex-col justify-between">
                    <div className="absolute top-4 right-4 bg-[#8B0000] text-white text-[9px] font-sans font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm">
                      MOST CHERISHED
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-1">Hardcover</h3>
                      <p className="text-xs text-zinc-500 font-sans uppercase tracking-wider mb-4">Signed by Toni ME Taylor</p>
                      <p className="font-serif text-zinc-600 text-sm leading-relaxed mb-6">
                        A beautiful, durable, premium addition to your home library. Features shimmering foil lettering and robust binding. Perfect for a lasting gift of faith.
                      </p>
                    </div>
                    <div>
                      <div className="text-3xl font-serif font-black text-[#1A1A1A] mb-2">
                        $24.99 <span className="text-xs font-sans text-zinc-500 font-normal tracking-wide">+ shipping</span>
                      </div>
                      <div className="h-px bg-black/5 my-4" />
                      <PayPalButton
                        editionId="hardcover"
                        price={24.99}
                        onSuccess={handlePurchaseSuccess}
                      />
                    </div>
                  </div>

                  {/* Paperback Edition Card */}
                  <div className="p-8 border border-black/10 rounded relative flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-1">Paperback</h3>
                      <p className="text-xs text-zinc-500 font-sans uppercase tracking-wider mb-4">Direct Family Stock</p>
                      <p className="font-serif text-zinc-600 text-sm leading-relaxed mb-6">
                        The classic lightweight edition. Easy to carry, annotate, and pass along to friends or study groups as a beautiful reminder of hope.
                      </p>
                    </div>
                    <div>
                      <div className="text-3xl font-serif font-black text-[#1A1A1A] mb-2">
                        $14.99 <span className="text-xs font-sans text-zinc-500 font-normal tracking-wide">+ shipping</span>
                      </div>
                      <div className="h-px bg-black/5 my-4" />
                      <PayPalButton
                        editionId="paperback"
                        price={14.99}
                        onSuccess={handlePurchaseSuccess}
                      />
                    </div>
                  </div>
                </div>

                {/* Direct Shipping note vs Amazon Prime options */}
                <div className="bg-[#EAE7E0]/60 border border-black/5 rounded p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8">
                    <h4 className="font-serif text-lg font-bold mb-2 text-[#8B0000]">Why 10-day Direct Shipping?</h4>
                    <p className="font-serif text-zinc-600 text-[14.5px] leading-relaxed">
                      We maintain a small personal supply of <em>Now I See</em> directly in our home rather than a warehouse. Every order placed directly here is hand-packed and shipped with love from our family.
                    </p>
                    <p className="font-serif text-zinc-600 text-[14.5px] leading-relaxed mt-2">
                      If you prefer <strong>instant delivery or fast Prime 2-day shipping</strong>, you are welcome to order through Amazon as well!
                    </p>
                  </div>
                  <div className="md:col-span-4 flex flex-col gap-3">
                    <a
                      href="https://www.amazon.com/dp/B0FCQ1B86T?tag=drainguru-20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FF9900] text-zinc-950 font-sans text-xs font-bold text-center uppercase tracking-wider py-3.5 px-4 rounded shadow-md hover:brightness-105 active:scale-98 transition flex items-center justify-center gap-1.5"
                    >
                      Buy Paperback on Amazon
                    </a>
                    <a
                      href="https://www.amazon.com/dp/B0FCQ1B86T?tag=drainguru-20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-800 text-white font-sans text-xs font-bold text-center uppercase tracking-wider py-3 px-4 rounded hover:bg-zinc-950 transition flex items-center justify-center gap-1.5"
                    >
                      Buy Kindle E-Book Edition
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
              <FaqSection />
            </section>
          </>
        ) : (
          <StoreView
            onBackToHome={() => setActiveTab('home')}
            cart={cart}
            onAddToCart={handleAddToCart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveFromCart={handleRemoveFromCart}
            onClearCart={handleClearCart}
            onPurchaseSuccess={handlePurchaseSuccess}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-zinc-400 py-12 px-6 md:px-12 border-t border-black/10 text-center font-sans text-xs tracking-wider uppercase">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif normal-case text-base text-white font-bold tracking-normal">
            NOW I SEE <span className="text-zinc-500 font-light font-sans text-xs tracking-widest ml-1 uppercase">BY TONI ME TAYLOR</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Toni ME Taylor. All rights reserved.
          </div>
        </div>
        <div className="max-w-3xl mx-auto mt-6 pt-6 border-t border-zinc-800 text-[10px] text-zinc-500 normal-case leading-relaxed font-sans">
          Disclosure: This website contains affiliate links to Amazon. As an Amazon Associate, the webhost may earn a small commission from qualifying purchases made through these links at no additional cost to you.
        </div>
      </footer>

      {/* Excerpt Overlay Modal */}
      <ChapterPreview
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />

      {/* Mobile & Desktop Sticky CTA / Accessibility Deck / Scroll-to-Top */}
      <StickyCTA
        onBuyBook={() => {
          if (activeTab !== 'home') {
            setActiveTab('home');
          }
          setTimeout(() => {
            scrollToSection('order-now');
          }, 100);
        }}
        largeText={largeText}
        setLargeText={handleSetLargeText}
        highContrast={highContrast}
        setHighContrast={handleSetHighContrast}
        sansSerif={sansSerif}
        setSansSerif={handleSetSansSerif}
      />

      {/* 5-Second Scroll Triggered Newsletter Popup */}
      <NewsletterPopup />
    </div>
  );
}
