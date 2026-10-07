import { useEffect, useMemo, useRef, useState } from 'react';
import CartPayPalButton, { type CartCheckoutItem, type CartEdition } from './components/CartPayPalButton';
import cleanBookCover from './assets/images/now_i_see_book_only_clean.webp';
import heroVisual from './assets/images/now_i_see_hero_visual.webp';
import { identifyReddit, newConversionId, registerOrderForEmails, sendRedditConversion, trackMeta, trackReddit } from './analytics';

const amazonUrl = 'https://amzn.to/4cYuQUX';
const products: Record<CartEdition, { name: string; price: number }> = {
  paperback: { name: 'Paperback', price: 22.99 },
  hardcover: { name: 'Hardcover', price: 31.99 }
};

// Reader reviews render in their own section once real ones are added here.
// Only add reviews from actual readers, with their permission.
const readerReviews: { name: string; detail: string; text: string }[] = [];

type CartPanel = 'closed' | 'mini' | 'checkout';

type ConfirmedOrder = {
  name: string;
  email?: string;
  orderId?: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
};

const CONFIRMATION_PATH = '/order-confirmed';
const ORDER_STORAGE_KEY = 'now-i-see-confirmed-order';

// Keeps the confirmation on screen if the buyer refreshes /order-confirmed.
function readStoredOrder(): ConfirmedOrder | null {
  if (typeof window === 'undefined' || window.location.pathname !== CONFIRMATION_PATH) return null;
  try {
    const raw = window.sessionStorage.getItem(ORDER_STORAGE_KEY);
    return raw ? JSON.parse(raw) as ConfirmedOrder : null;
  } catch {
    return null;
  }
}

function OrderConfirmation({ order, onDone }: { order: ConfirmedOrder; onDone: () => void }) {
  return (
    <main id="top" className="confirmation" aria-labelledby="confirmation-title">
      <section className="confirmation-hero">
        <div className="confirmation-mark" aria-hidden="true"><Check /></div>
        <p className="eyebrow eyebrow-gold">Order confirmed</p>
        <h1 id="confirmation-title">Thank you, {order.name}. <em>Your copy is reserved.</em></h1>
        <p className="confirmation-lede">Your payment went through and your preorder is in.{order.email ? <> PayPal has emailed your receipt to <strong>{order.email}</strong>.</> : ' PayPal has emailed your receipt.'}</p>
      </section>
      <section className="section section-cream">
        <div className="confirmation-card">
          <div className="confirmation-row"><span>Order number</span><strong>{order.orderId || 'See your PayPal receipt'}</strong></div>
          {order.items.map((item) => <div className="confirmation-row" key={item.name}><span>Now I See — {item.name} × {item.quantity}</span><strong>${(item.price * item.quantity).toFixed(2)}</strong></div>)}
          <div className="confirmation-row"><span>Standard U.S. shipping</span><strong>Included</strong></div>
          <div className="confirmation-row confirmation-total"><span>Total paid</span><strong>${order.total.toFixed(2)}</strong></div>
        </div>
        <div className="narrow">
          <h2 className="confirmation-next-title">What happens next</h2>
          <ol className="steps">
            <li><span className="step-number">01</span><div><h3>Your copy joins the next case</h3><p>Direct copies come from the publisher in cases of 12. Yours is set aside in the next one.</p></div></li>
            <li><span className="step-number">02</span><div><h3>We prepare and ship it</h3><p>Once the case arrives, your book is packed and sent to the shipping address on your PayPal order.</p></div></li>
            <li><span className="step-number">03</span><div><h3>At your door in about four weeks</h3><p>Keep your PayPal receipt; it has your order number if you need to reach us.</p></div></li>
          </ol>
          <button type="button" className="button button-gold button-wide" onClick={onDone}>Back to Now I See <Arrow /></button>
        </div>
      </section>
    </main>
  );
}

function Arrow() {
  return <span aria-hidden="true" className="arrow">→</span>;
}

function Check() {
  return <svg viewBox="0 0 20 20" aria-hidden="true" className="check-icon"><path d="M4.5 10.5l3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CartIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l1.5 10.2a2 2 0 0 0 2 1.7h8.7a2 2 0 0 0 1.9-1.5L21 7H7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="9" cy="20" r="1.25" fill="currentColor" /><circle cx="18" cy="20" r="1.25" fill="currentColor" /></svg>;
}

const tickerItems = ['Faith-centered memoir', 'Free U.S. shipping', 'Paperback & hardcover', 'A call to see one another', 'Ships direct in about 4 weeks'];

export default function App() {
  const [cartPanel, setCartPanel] = useState<CartPanel>('closed');
  const [cart, setCart] = useState<Record<CartEdition, number>>({ paperback: 0, hardcover: 0 });
  const [confirmedOrder, setConfirmedOrder] = useState<ConfirmedOrder | null>(readStoredOrder);
  const [selectedEdition, setSelectedEdition] = useState<CartEdition>('hardcover');
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [trailerMuted, setTrailerMuted] = useState(true);
  const [trailerPaused, setTrailerPaused] = useState(false);
  const trailerRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const offerRef = useRef<HTMLElement>(null);

  // The sticky bar appears once the hero is out of view and hides while the offer box is on screen.
  useEffect(() => {
    const visible = { hero: true, offer: false };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === heroRef.current) visible.hero = entry.isIntersecting;
        if (entry.target === offerRef.current) visible.offer = entry.isIntersecting;
      });
      setShowStickyBar(!visible.hero && !visible.offer);
    });
    if (heroRef.current) observer.observe(heroRef.current);
    if (offerRef.current) observer.observe(offerRef.current);
    return () => observer.disconnect();
  }, [confirmedOrder]);

  // The browser back button leaves the confirmation view.
  useEffect(() => {
    const onPopState = () => { if (window.location.pathname !== CONFIRMATION_PATH) setConfirmedOrder(null); };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const leaveConfirmation = () => {
    try { window.sessionStorage.removeItem(ORDER_STORAGE_KEY); } catch { /* storage unavailable */ }
    window.history.pushState({}, '', '/');
    setConfirmedOrder(null);
    window.scrollTo(0, 0);
  };

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
    const conversionId = newConversionId('add-to-cart');
    const cartProducts = [{ id: edition, name: products[edition].name, category: 'Book' }];
    trackReddit('AddToCart', {
      conversionId,
      currency: 'USD',
      value: products[edition].price,
      itemCount: 1,
      products: cartProducts
    });
    trackMeta('AddToCart', { value: products[edition].price, contentIds: [edition], numItems: 1 }, conversionId);
    sendRedditConversion({
      trackingType: 'AddToCart',
      conversionId,
      value: products[edition].price,
      itemCount: 1,
      products: cartProducts
    });
  };

  const setQuantity = (edition: CartEdition, quantity: number) => {
    setCart((current) => ({ ...current, [edition]: Math.max(0, quantity) }));
  };

  const handleCheckoutSuccess = (payerName: string, payerEmail?: string, orderId?: string) => {
    identifyReddit({ email: payerEmail });
    // The PayPal order id keeps this stable if the buyer reloads the
    // confirmation, so one order is never counted twice — and it lets Reddit
    // merge the pixel event with the server-side one below.
    const conversionId = orderId || newConversionId('purchase');
    const purchasedProducts = cartItems.map((item) => ({ id: item.edition, name: item.name, category: 'Book' }));
    trackReddit('Purchase', {
      conversionId,
      currency: 'USD',
      value: cartTotal,
      itemCount: cartQuantity,
      products: purchasedProducts
    });
    trackMeta('Purchase', { value: cartTotal, contentIds: cartItems.map((item) => item.edition), numItems: cartQuantity }, conversionId);
    sendRedditConversion({
      trackingType: 'Purchase',
      conversionId,
      value: cartTotal,
      itemCount: cartQuantity,
      email: payerEmail,
      products: purchasedProducts
    });
    registerOrderForEmails(orderId);
    const order: ConfirmedOrder = {
      name: payerName,
      email: payerEmail,
      orderId,
      items: cartItems.map((item) => ({ name: item.name, quantity: item.quantity, price: item.price })),
      total: cartTotal
    };
    try { window.sessionStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(order)); } catch { /* storage unavailable */ }
    window.history.pushState({}, '', CONFIRMATION_PATH);
    setConfirmedOrder(order);
    setCart({ paperback: 0, hardcover: 0 });
    setCartPanel('closed');
    window.scrollTo(0, 0);
  };

  const openCart = () => setCartPanel('mini');
  const openCheckout = () => {
    setCartPanel('checkout');
    const conversionId = newConversionId('initiate-checkout');
    trackReddit('Custom', {
      customEventName: 'InitiateCheckout',
      conversionId,
      currency: 'USD',
      value: cartTotal,
      itemCount: cartQuantity
    });
    trackMeta('InitiateCheckout', { value: cartTotal, contentIds: cartItems.map((item) => item.edition), numItems: cartQuantity }, conversionId);
    sendRedditConversion({
      trackingType: 'CUSTOM',
      customEventName: 'InitiateCheckout',
      conversionId,
      value: cartTotal,
      itemCount: cartQuantity
    });
  };

  const goToOffer = () => {
    setCartPanel('closed');
    document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <div className="top-note">Free U.S. shipping on every direct preorder · Ships in about 4 weeks</div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Now I See home"><span>NOW</span><span>I SEE</span></a>
        <div className="header-actions">
          <button type="button" className="cart-trigger" onClick={openCart} aria-label={`Open cart with ${cartQuantity} ${cartQuantity === 1 ? 'item' : 'items'}`}>
            <CartIcon /><span className="cart-count">{cartQuantity}</span>
          </button>
          <a className="button button-gold button-small" href="#preorder">Preorder my copy</a>
        </div>
      </header>

      {confirmedOrder ? <OrderConfirmation order={confirmedOrder} onDone={leaveConfirmation} /> : <main id="top">

        <section ref={heroRef} className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-gold">A memoir by Toni ME Taylor</p>
              <h1 id="hero-title">A testimony of sight restored. <em>Written for a divided America.</em></h1>
              <p className="hero-lede"><em>Now I See</em> is a faith-centered memoir of trials mended by grace, and a call to see one another clearly beyond race, origin, and political division.</p>
              <a className="button button-gold button-wide" href="#preorder">Preorder my copy · from $22.99 <Arrow /></a>
              <ul className="hero-assurances">
                <li><Check /> Free U.S. shipping</li>
                <li><Check /> Paperback or hardcover</li>
                <li><Check /> Secure PayPal checkout</li>
              </ul>
            </div>
            <div className={`hero-media ${trailerPaused ? 'is-paused' : ''}`} aria-label="Now I See book trailer">
              <img src={cleanBookCover} alt="Now I See: America, My Testimony, God and Me by Toni ME Taylor" className="hero-video-fallback" />
              <video ref={trailerRef} className="hero-trailer" autoPlay muted playsInline controls preload="metadata" poster={cleanBookCover} onPlay={() => setTrailerPaused(false)} onPause={() => setTrailerPaused(true)} onEnded={() => setTrailerPaused(true)}>
                <source src="/media/now-i-see-trailer.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              {!trailerPaused && trailerMuted && <button type="button" className="sound-enable-prompt" onClick={enableTrailerSound}>Tap for sound <span aria-hidden="true">↗</span></button>}
              {trailerPaused && <button type="button" className="trailer-resume-prompt" onClick={resumeTrailer}><span className="play-mark" aria-hidden="true">▶</span><span>Play the trailer</span></button>}
              <span className="media-badge">Watch the trailer</span>
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">{[...tickerItems, ...tickerItems].map((item, index) => <span key={index}>{item}<i>◆</i></span>)}</div>
        </div>

        <section className="section section-cream">
          <div className="quote-card" style={{ backgroundImage: `linear-gradient(180deg, rgba(14,19,33,.55), rgba(14,19,33,.92)), url(${heroVisual})` }}>
            <p className="quote-card-mark" aria-hidden="true">“</p>
            <p className="quote-card-text">Amid blindness, <em>I become sight.</em></p>
            <p className="quote-card-caption">From <em>Now I See</em> by Toni ME Taylor</p>
          </div>
        </section>

        <section id="the-book" className="section section-cream" aria-labelledby="problem-title">
          <div className="narrow">
            <p className="eyebrow">The real problem</p>
            <h2 id="problem-title">We look at each other every day. <em>We rarely see.</em></h2>
            <p>Race, origin, party, and gender become the lines that decide who we notice and who we pass by. The division feels permanent, and the noise makes it louder.</p>
            <p><em>Now I See</em> holds a faith-centered reflection on America, conscience, and spiritual awakening. Through personal trials and conviction, Toni ME Taylor asks what changes when we choose to see one another clearly.</p>
            <aside className="callout"><strong>The book’s conviction:</strong> blindness is not only of the eyes. Sight can be restored, and it begins with faith.</aside>
          </div>
        </section>

        <section className="section section-cream section-tight" aria-labelledby="inside-title">
          <div className="narrow">
            <p className="eyebrow">Inside the book</p>
            <h2 id="inside-title">America. My Testimony. <em>God and Me.</em></h2>
            <p>Three threads run through one testimony, written in direct, spiritual language.</p>
          </div>
          <div className="feature-image narrow"><img src={heroVisual} alt="Now I See hardcover on a wooden stand in warm light" loading="lazy" /></div>
          <div className="phase-list narrow">
            <article className="phase-card"><p className="phase-label">Theme 01 · Faith</p><h3>Faith that mends</h3><p>Reflections on grace, mercy, endurance, and the possibility of being made whole after the deepest trials.</p></article>
            <article className="phase-card"><p className="phase-label">Theme 02 · Humanity</p><h3>One humanity</h3><p>A plea to recognize shared dignity beyond race, gender, origin, and political division.</p></article>
            <article className="phase-card"><p className="phase-label">Theme 03 · America</p><h3>America’s promise</h3><p>A meditation on truth, justice, liberty, freedom, and the responsibility we carry forward together.</p></article>
          </div>
        </section>

        <section className="section section-white" aria-labelledby="ritual-title">
          <div className="narrow">
            <p className="eyebrow">How your preorder works</p>
            <h2 id="ritual-title">Order today. <em>On your doorstep in about four weeks.</em></h2>
            <ol className="steps">
              <li><span className="step-number">01</span><div><h3>Choose your edition</h3><p>Paperback for reading and sharing, hardcover as a lasting keepsake. Mix both in one cart.</p></div></li>
              <li><span className="step-number">02</span><div><h3>Your copy joins the next case</h3><p>The publisher supplies direct copies in cases of 12. Your preorder reserves a copy in the next one.</p></div></li>
              <li><span className="step-number">03</span><div><h3>Shipped to your door</h3><p>Each copy is prepared and shipped directly to you. Standard U.S. shipping is already included in the price.</p></div></li>
            </ol>
            <p className="steps-note">No shipping fees at checkout. No surprises.</p>
          </div>
        </section>

        <section className="section section-cream" aria-labelledby="numbers-title">
          <div className="narrow">
            <p className="eyebrow">The preorder at a glance</p>
            <h2 id="numbers-title">Simple, direct, <em>and shipping included.</em></h2>
          </div>
          <div className="stat-list narrow">
            <div className="stat"><span className="stat-ring">$0</span><p>shipping on every direct U.S. preorder. The price you see is the price you pay.</p></div>
            <div className="stat"><span className="stat-ring">2</span><p>editions: a $22.99 paperback and a $31.99 collector’s hardcover.</p></div>
            <div className="stat"><span className="stat-ring">~4<small>wks</small></span><p>from preorder to your door, once the next publisher case arrives.</p></div>
          </div>
        </section>

        <section className="section section-navy" aria-labelledby="compare-title">
          <div className="narrow">
            <p className="eyebrow eyebrow-gold">Your options</p>
            <h2 id="compare-title">Two ways to get your copy. <em>Here’s the difference.</em></h2>
            <div className="compare-table" role="table" aria-label="Direct preorder compared with Amazon">
              <div className="compare-row compare-head" role="row"><span role="columnheader" /><span role="columnheader" className="compare-us">Direct</span><span role="columnheader">Amazon</span></div>
              <div className="compare-row" role="row"><span role="rowheader">Shipping included in price</span><span role="cell" className="compare-us"><Check /></span><span role="cell">Per Amazon</span></div>
              <div className="compare-row" role="row"><span role="rowheader">Collector’s hardcover</span><span role="cell" className="compare-us"><Check /></span><span role="cell">See listing</span></div>
              <div className="compare-row" role="row"><span role="rowheader">Mix editions in one order</span><span role="cell" className="compare-us"><Check /></span><span role="cell"><Check /></span></div>
              <div className="compare-row" role="row"><span role="rowheader">Checkout</span><span role="cell" className="compare-us">PayPal</span><span role="cell">Amazon account</span></div>
              <div className="compare-row" role="row"><span role="rowheader">Delivery</span><span role="cell" className="compare-us">~4 weeks</span><span role="cell">Amazon estimate</span></div>
            </div>
            <p className="compare-note">Prefer Amazon? <a href={amazonUrl} target="_blank" rel="noopener noreferrer">Shop the listing</a>. It is an Amazon Associate link at no extra cost to you.</p>
          </div>
        </section>

        {readerReviews.length > 0 ? (
          <section className="section section-cream" aria-labelledby="reviews-title">
            <div className="narrow">
              <p className="eyebrow">Reader reviews</p>
              <h2 id="reviews-title">What readers <em>are saying.</em></h2>
              <div className="review-list">{readerReviews.map((review) => <figure className="review-card" key={review.name}><p className="review-stars" aria-label="5 out of 5 stars">★★★★★</p><blockquote>“{review.text}”</blockquote><figcaption><strong>{review.name}</strong><span>{review.detail}</span></figcaption></figure>)}</div>
            </div>
          </section>
        ) : (
          <section id="inside" className="section section-cream" aria-labelledby="excerpt-title">
            <div className="narrow excerpt">
              <p className="eyebrow">From the pages</p>
              <h2 id="excerpt-title"><em>“It takes courage to love.”</em></h2>
              <p>In direct, spiritual language, Toni ME Taylor writes about revelation, restoration, and the resolve to move through a divided world with faith and purpose.</p>
            </div>
          </section>
        )}

        <section className="section section-navy promise" aria-labelledby="promise-title">
          <div className="narrow center">
            <p className="eyebrow eyebrow-gold">The preorder promise</p>
            <h2 id="promise-title">Your copy, reserved. <em>Shipped straight to you.</em></h2>
            <p>Your delivered price already includes standard U.S. shipping. Your copy is set aside in the next publisher case and sent to you as soon as it arrives, about four weeks from your order.</p>
            <a className="button button-gold button-wide" href="#preorder">Reserve my copy <Arrow /></a>
          </div>
        </section>

        <section ref={offerRef} id="preorder" className="section section-cream" aria-labelledby="offer-title">
          <div className="offer-box">
            <div className="offer-media"><img src={cleanBookCover} alt="Now I See book cover" /></div>
            <p className="eyebrow">Direct preorder</p>
            <h2 id="offer-title">Now I See</h2>
            <p className="offer-sub">America. My Testimony. God and Me. · Toni ME Taylor</p>
            <div className="tier-list" role="radiogroup" aria-label="Choose your edition">
              <button type="button" role="radio" aria-checked={selectedEdition === 'hardcover'} className={`tier ${selectedEdition === 'hardcover' ? 'is-selected' : ''}`} onClick={() => setSelectedEdition('hardcover')}>
                <span className="tier-flag">Collector’s edition</span>
                <span className="tier-radio" aria-hidden="true" />
                <span className="tier-body"><strong>Hardcover</strong><span>A durable keepsake for the home library or a meaningful gift.</span></span>
                <span className="tier-price">$31.99</span>
              </button>
              <button type="button" role="radio" aria-checked={selectedEdition === 'paperback'} className={`tier ${selectedEdition === 'paperback' ? 'is-selected' : ''}`} onClick={() => setSelectedEdition('paperback')}>
                <span className="tier-radio" aria-hidden="true" />
                <span className="tier-body"><strong>Paperback</strong><span>Easy to carry and share with readers and study groups.</span></span>
                <span className="tier-price">$22.99</span>
              </button>
            </div>
            <ul className="offer-list">
              <li><Check /> Free standard U.S. shipping included</li>
              <li><Check /> Mix editions and quantities in one checkout</li>
              <li><Check /> Ships in about 4 weeks</li>
            </ul>
            <button type="button" className="button button-gold button-block" onClick={() => addToCart(selectedEdition)}>Add {products[selectedEdition].name.toLowerCase()} to cart · ${products[selectedEdition].price.toFixed(2)} <CartIcon /></button>
            <p className="offer-foot">Secure checkout with PayPal · <a href={amazonUrl} target="_blank" rel="noopener noreferrer">Or buy on Amazon</a></p>
          </div>
        </section>

        <section id="faq" className="section section-cream section-tight" aria-labelledby="faq-title">
          <div className="narrow">
            <p className="eyebrow">Before you order</p>
            <h2 id="faq-title">Fair questions, <em>straight answers.</em></h2>
            <div className="faq-list">
              <details><summary>When will a direct preorder ship?<span aria-hidden="true">+</span></summary><p>Direct copies are purchased from the publisher in cases of 12. Please allow approximately four weeks for the next case to arrive and for your copy to be prepared for shipment.</p></details>
              <details><summary>Can I buy more than one copy?<span aria-hidden="true">+</span></summary><p>Yes. Add any number of paperback and hardcover copies to your cart, adjust quantities there, and complete one combined checkout.</p></details>
              <details><summary>Is shipping included in the price?<span aria-hidden="true">+</span></summary><p>Yes. The direct paperback and hardcover prices include standard shipping within the United States. International shipping is not offered through this direct preorder checkout.</p></details>
              <details><summary>Can I buy the book through Amazon instead?<span aria-hidden="true">+</span></summary><p>Yes. The Amazon listing is available for readers who prefer Amazon checkout, pricing, or fulfillment.</p></details>
            </div>
          </div>
        </section>
      </main>}

      <footer className="site-footer">
        <a className="footer-wordmark" href="#top">NOW I SEE</a>
        <p>America. My Testimony. God and Me.</p>
        <p className="footer-fine">© {new Date().getFullYear()} Toni ME Taylor. All rights reserved. As an Amazon Associate, this site may earn from qualifying purchases.</p>
      </footer>

      <div className={`sticky-bar ${showStickyBar && cartPanel === 'closed' && !confirmedOrder ? 'is-visible' : ''}`} aria-hidden={!showStickyBar}>
        <img src={cleanBookCover} alt="" />
        <div><strong>Now I See</strong><span>From $22.99 · free U.S. shipping</span></div>
        <a className="button button-gold button-small" href="#preorder" tabIndex={showStickyBar ? 0 : -1}>Preorder</a>
      </div>

      {cartPanel === 'mini' && <aside className="mini-cart" aria-live="polite" aria-label="Cart updated">
        <div className="mini-cart-head"><div><p className="eyebrow">Your cart</p><h2>{cartItems.length ? 'Added to cart.' : 'Your cart is empty.'}</h2></div><button type="button" className="mini-cart-close" onClick={() => setCartPanel('closed')} aria-label="Close cart preview">×</button></div>
        {cartItems.length ? <><p className="mini-cart-summary">{cartQuantity} {cartQuantity === 1 ? 'book' : 'books'} · ${cartTotal.toFixed(2)} total</p><div className="mini-cart-actions"><button type="button" className="button button-quiet" onClick={() => setCartPanel('closed')}>Keep shopping</button><button type="button" className="button button-gold" onClick={openCheckout}>Checkout <Arrow /></button></div></> : <button type="button" className="button button-gold button-block" onClick={goToOffer}>Choose an edition <Arrow /></button>}
      </aside>}

      {cartPanel === 'checkout' && <div className="cart-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setCartPanel('closed'); }}>
        <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
          <div className="cart-header"><div><p className="eyebrow">Complete your preorder</p><h2 id="cart-title">Checkout.</h2></div><button type="button" className="cart-close" onClick={() => setCartPanel('closed')} aria-label="Close checkout">×</button></div>
          {cartItems.length === 0 ? <div className="cart-empty"><p>Your cart is empty.</p><button type="button" className="button button-gold" onClick={goToOffer}>Choose an edition <Arrow /></button></div> : <>
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
