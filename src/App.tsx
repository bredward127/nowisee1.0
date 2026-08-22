import { useMemo, useRef, useState } from 'react';
import CartPayPalButton, { type CartCheckoutItem, type CartEdition } from './components/CartPayPalButton';
import authenticCover from './assets/images/now_i_see_authentic_cover.png';
import heroVisual from './assets/images/now_i_see_hero_visual.png';

const amazonUrl = 'https://amzn.to/4cYuQUX';
const products: Record<CartEdition, { name: string; price: number }> = {
  paperback: { name: 'Paperback', price: 22.99 },
  hardcover: { name: 'Hardcover', price: 31.99 }
};

type CartPanel = 'closed' | 'mini' | 'checkout';

function Arrow() {
  return <span aria-hidden="true" className="arrow">→</span>;
}

function CartIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l1.5 10.2a2 2 0 0 0 2 1.7h8.7a2 2 0 0 0 1.9-1.5L21 7H7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="9" cy="20" r="1.25" fill="currentColor" /><circle cx="18" cy="20" r="1.25" fill="currentColor" /></svg>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartPanel, setCartPanel] = useState<CartPanel>('closed');
  const [cart, setCart] = useState<Record<CartEdition, number>>({ paperback: 0, hardcover: 0 });
  const [purchaseSuccess, setPurchaseSuccess] = useState<string | null>(null);
  const [trailerMuted, setTrailerMuted] = useState(true);
  const [trailerPaused, setTrailerPaused] = useState(false);
  const trailerRef = useRef<HTMLVideoElement>(null);
  const closeMenu = () => setMenuOpen(false);

  const enableTrailerSound = () => {
    const trailer = trailerRef.current;
    if (!trailer) return;
    trailer.muted = false;
    trailer.volume = 0.85;
    setTrailerMuted(false);
    trailer.play().catch(() => setTrailerPaused(true));
  };

  const resumeTrailer = () => {
    const trailer = trailerRef.current;
    if (!trailer) return;
    if (trailer.ended) trailer.currentTime = 0;
    trailer.play().then(() => setTrailerPaused(false)).catch(() => setTrailerPaused(true));
  };

  const cartItems = useMemo<CartCheckoutItem[]>(() => (Object.keys(products) as CartEdition[])
    .filter((edition) => cart[edition] > 0)
    .map((edition) => ({ edition, ...products[edition], quantity: cart[edition] })), [cart]);
  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartShipping = 0;
  const cartTotal = cartSubtotal + cartShipping;

  const addToCart = (edition: CartEdition) => {
    setCart((current) => ({ ...current, [edition]: current[edition] + 1 }));
    setCartPanel('mini');
  };

  const setQuantity = (edition: CartEdition, quantity: number) => {
    setCart((current) => ({ ...current, [edition]: Math.max(0, quantity) }));
  };

  const handleCheckoutSuccess = (payerName: string) => {
    setPurchaseSuccess(payerName);
    setCart({ paperback: 0, hardcover: 0 });
    setCartPanel('closed');
  };

  const openCart = () => setCartPanel('mini');
  const openCheckout = () => setCartPanel('checkout');

  return (
    <div className="site-shell">
      <div className="top-note">Free U.S. shipping included · Direct preorders ship in approximately 4 weeks</div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Now I See home" onClick={closeMenu}><span>NOW</span><span>I SEE</span></a>
        <div className="header-actions">
          <button type="button" className="cart-trigger" onClick={openCart} aria-label={`Open cart with ${cartQuantity} ${cartQuantity === 1 ? 'item' : 'items'}`}>
            <CartIcon /><span className="cart-count">{cartQuantity}</span>
          </button>
          <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
            <span>{menuOpen ? 'Close' : 'Menu'}</span><span className="menu-mark" aria-hidden="true">{menuOpen ? '×' : '+'}</span>
          </button>
        </div>
        <nav id="primary-navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#the-book" onClick={closeMenu}>The book</a><a href="#preorder" onClick={closeMenu}>Preorder</a><a href="#inside" onClick={closeMenu}>Inside</a><a href="#faq" onClick={closeMenu}>FAQ</a>
          <a className="nav-amazon" href={amazonUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Amazon <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        {purchaseSuccess && <section className="success-banner" aria-live="polite"><p><strong>Thank you, {purchaseSuccess}.</strong> Your preorder is reserved. We will send your copy after the next publisher case order arrives—approximately four weeks.</p><button type="button" onClick={() => setPurchaseSuccess(null)} aria-label="Dismiss confirmation">×</button></section>}

        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">A memoir by Toni ME Taylor</p>
            <h1 id="hero-title">Now<br /><em>I See.</em></h1>
            <p className="hero-subtitle">America. My Testimony. God and Me.</p>
            <p className="hero-intro">Witness how the mending of deepest trials reveals a masterpiece of faith and purpose.</p>
            <p className="hero-detail">A moving invitation to look beyond division, embrace shared humanity, and find the light that leads us forward.</p>
            <div className="hero-actions"><a className="button button-wine" href="#preorder">Preorder direct <Arrow /></a><a className="text-link" href={amazonUrl} target="_blank" rel="noopener noreferrer">Shop on Amazon <Arrow /></a></div>
            <p className="shipping-line"><span className="shipping-dot" aria-hidden="true" /> Free U.S. shipping is included with every direct preorder</p>
          </div>
          <div className={`hero-art hero-video-shell ${trailerPaused ? 'is-paused' : ''}`} aria-label="Now I See book trailer">
            <img src={heroVisual} alt="Now I See book displayed in a burgundy and midnight navy editorial studio setting" className="hero-video-fallback" />
            <video ref={trailerRef} className="hero-trailer" autoPlay muted playsInline controls preload="metadata" poster={heroVisual} onPlay={() => setTrailerPaused(false)} onPause={() => setTrailerPaused(true)} onEnded={() => setTrailerPaused(true)}>
              <source src="/media/now-i-see-trailer.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
            {!trailerPaused && trailerMuted && <button type="button" className="sound-enable-prompt" onClick={enableTrailerSound}>Click to enable sound <span aria-hidden="true">↗</span></button>}
            {trailerPaused && <button type="button" className="trailer-resume-prompt" onClick={resumeTrailer}><span className="play-mark" aria-hidden="true">▶</span><span>Press play to resume trailer</span></button>}
          </div>
        </section>

        <section className="statement section-pad" aria-label="Book statement"><p>“Amid blindness<br /><span>I become sight.”</span></p><div className="statement-rule" /><p className="statement-caption">A testimony of restoration, a reflection on America, and a call to see one another with greater clarity.</p></section>

        <section id="preorder" className="preorder-wrap section-pad" aria-labelledby="preorder-title">
          <div className="preorder-heading"><p className="eyebrow">Direct preorder · free U.S. shipping</p><h2 id="preorder-title">Choose your edition.</h2><p>Add paperbacks, hardcovers, or both. Your direct preorder includes standard U.S. shipping and is fulfilled after the next publisher case order arrives.</p></div>
          <div className="edition-grid">
            <article className="edition-card paperback-card">
              <p className="card-kicker">Paperback</p><h3>The message<br /><em>within reach.</em></h3><p className="card-description">A flexible, easy-to-share edition for readers, study groups, and meaningful gifts.</p>
              <div className="price-line"><strong>$22.99</strong><span>delivered in the U.S.</span></div><p className="savings-note">Free standard U.S. shipping included</p>
              <button type="button" className="add-cart-button" onClick={() => addToCart('paperback')}>Add to cart <CartIcon /></button><p className="checkout-caption">Add more than one copy, mix editions, or continue shopping before checkout.</p>
            </article>
            <article className="edition-card hardcover-card">
              <div className="collector-badge">Collector’s edition</div><p className="card-kicker">Hardcover</p><h3>A lasting<br /><em>testimony.</em></h3><p className="card-description">A durable keepsake edition for the home library, a loved one, or a meaningful occasion.</p>
              <div className="price-line"><strong>$31.99</strong><span>delivered in the U.S.</span></div><p className="savings-note">Free standard U.S. shipping included</p>
              <button type="button" className="add-cart-button add-cart-button-light" onClick={() => addToCart('hardcover')}>Add to cart <CartIcon /></button><p className="checkout-caption">Add more than one copy, mix editions, or continue shopping before checkout.</p>
            </article>
          </div>
          <aside className="amazon-route"><div><p className="eyebrow">Prefer Amazon checkout?</p><h3>Shop the listing at any time.</h3><p>Amazon availability and price are shown on its listing. The link below is an Amazon Associate link at no extra cost to you.</p></div><a className="button button-stone" href={amazonUrl} target="_blank" rel="noopener noreferrer">Shop Now I See on Amazon <Arrow /></a></aside>
        </section>

        <section id="the-book" className="book-story" aria-labelledby="story-title">
          <div className="story-heading section-pad"><p className="eyebrow">What you will find inside</p><h2 id="story-title">A testimony that asks us to look again.</h2><p><em>Now I See</em> holds a faith-centered reflection on America, conscience, and spiritual awakening. Through personal trials and conviction, Toni ME Taylor asks what changes when we choose to see one another clearly.</p></div>
          <div className="theme-grid section-pad">
            <article className="theme-card theme-stone"><span className="theme-number">01</span><h3>Faith that mends</h3><p>Reflections on grace, mercy, endurance, and the possibility of being made whole.</p></article>
            <article className="theme-card theme-wine"><span className="theme-number">02</span><h3>One humanity</h3><p>A plea to recognize shared dignity beyond race, gender, origin, and political division.</p></article>
            <article className="theme-card theme-navy"><span className="theme-number">03</span><h3>America’s promise</h3><p>A meditation on truth, justice, liberty, freedom, and the responsibility we carry forward.</p></article>
          </div>
        </section>

        <section id="inside" className="excerpt section-pad" aria-labelledby="excerpt-title"><div className="excerpt-mark" aria-hidden="true">“</div><div className="excerpt-copy"><p className="eyebrow">From the pages</p><h2 id="excerpt-title">“It takes courage to love.”</h2><p>In direct, spiritual language, Toni ME Taylor writes about revelation, restoration, and the resolve to move through a divided world with faith and purpose.</p><a className="text-link" href="#preorder">Reserve your copy <Arrow /></a></div><div className="excerpt-cover-wrap"><img src={authenticCover} alt="Now I See authentic book cover" className="book-cover excerpt-cover" /></div></section>

        <section className="why-direct section-pad" aria-labelledby="why-direct-title"><div><p className="eyebrow">A direct preorder</p><h2 id="why-direct-title">A little patience. A personal route.</h2></div><div className="why-direct-copy"><p>The publisher supplies direct copies in cases of 12. Your preorder helps fill the next case, and its delivered price includes standard shipping to your U.S. address.</p><p>After the case is received, each copy is prepared and shipped directly to you. Please allow approximately four weeks from your preorder.</p><a className="button button-wine" href="#preorder">Reserve my copy <Arrow /></a></div></section>

        <section id="faq" className="faq section-pad" aria-labelledby="faq-title"><p className="eyebrow">Before you order</p><h2 id="faq-title">Common questions.</h2><div className="faq-list">
          <details open><summary>When will a direct preorder ship?<span aria-hidden="true">+</span></summary><p>Direct copies are purchased from the publisher in cases of 12. Please allow approximately four weeks for the next case to arrive and for your copy to be prepared for shipment.</p></details>
          <details><summary>Can I buy more than one copy?<span aria-hidden="true">+</span></summary><p>Yes. Add any number of paperback and hardcover copies to your cart, adjust quantities there, and complete one combined checkout.</p></details>
          <details><summary>Is shipping included in the direct preorder price?<span aria-hidden="true">+</span></summary><p>Yes. The direct paperback and hardcover prices include standard shipping within the United States. International shipping is not offered through this direct preorder checkout.</p></details>
          <details><summary>Can I buy the book through Amazon instead?<span aria-hidden="true">+</span></summary><p>Yes. The Amazon option is available throughout this page for readers who prefer Amazon checkout, pricing, or fulfillment.</p></details>
        </div></section>
      </main>

      <footer className="site-footer"><div className="footer-top section-pad"><a className="footer-wordmark" href="#top">NOW I SEE</a><p>America. My Testimony. God and Me.</p><div className="footer-actions"><a href="#preorder">Preorder direct <Arrow /></a><a href={amazonUrl} target="_blank" rel="noopener noreferrer">Shop Amazon <Arrow /></a></div></div><div className="footer-bottom section-pad"><p>© {new Date().getFullYear()} Toni ME Taylor. All rights reserved.</p><p>As an Amazon Associate, this site may earn from qualifying purchases.</p></div></footer>

      {cartPanel === 'mini' && <aside className="mini-cart" aria-live="polite" aria-label="Cart updated">
        <div className="mini-cart-head"><div><p className="eyebrow">Your cart</p><h2>{cartItems.length ? 'Added to cart.' : 'Your cart is empty.'}</h2></div><button type="button" className="mini-cart-close" onClick={() => setCartPanel('closed')} aria-label="Close cart preview">×</button></div>
        {cartItems.length ? <><p className="mini-cart-summary">{cartQuantity} {cartQuantity === 1 ? 'book' : 'books'} · ${cartTotal.toFixed(2)} total</p><div className="mini-cart-actions"><button type="button" className="button button-quiet" onClick={() => setCartPanel('closed')}>Continue shopping</button><button type="button" className="button button-wine" onClick={openCheckout}>Checkout <Arrow /></button></div></> : <button type="button" className="button button-wine" onClick={() => { setCartPanel('closed'); document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth' }); }}>Choose an edition <Arrow /></button>}
      </aside>}

      {cartPanel === 'checkout' && <div className="cart-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setCartPanel('closed'); }}>
        <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
          <div className="cart-header"><div><p className="eyebrow">Complete your preorder</p><h2 id="cart-title">Checkout.</h2></div><button type="button" className="cart-close" onClick={() => setCartPanel('closed')} aria-label="Close checkout">×</button></div>
          {cartItems.length === 0 ? <div className="cart-empty"><p>Your cart is empty.</p><button type="button" className="button button-wine" onClick={() => { setCartPanel('closed'); document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth' }); }}>Choose an edition <Arrow /></button></div> : <>
            <div className="cart-lines">{cartItems.map((item) => <div className="cart-line" key={item.edition}><div><p className="cart-line-name">Now I See — {item.name}</p><p className="cart-line-price">${item.price.toFixed(2)} each</p><button type="button" className="remove-line" onClick={() => setQuantity(item.edition, 0)}>Remove</button></div><div className="quantity-control" aria-label={`${item.name} quantity`}><button type="button" onClick={() => setQuantity(item.edition, item.quantity - 1)} aria-label={`Decrease ${item.name} quantity`}>−</button><span>{item.quantity}</span><button type="button" onClick={() => setQuantity(item.edition, item.quantity + 1)} aria-label={`Increase ${item.name} quantity`}>+</button></div></div>)}</div>
            <div className="cart-summary"><div><span>Books ({cartQuantity})</span><strong>${cartSubtotal.toFixed(2)}</strong></div><div><span>Standard U.S. shipping</span><strong>Included</strong></div><div className="cart-total"><span>Total</span><strong>${cartTotal.toFixed(2)}</strong></div></div>
            <p className="cart-disclosure">Review your order here, then complete payment securely through PayPal. Direct preorders ship in approximately four weeks to U.S. addresses.</p>
            <CartPayPalButton items={cartItems} subtotal={cartSubtotal} shipping={cartShipping} total={cartTotal} onSuccess={handleCheckoutSuccess} />
          </>}
        </aside>
      </div>}
    </div>
  );
}
