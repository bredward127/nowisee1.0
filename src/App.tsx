import { useState } from 'react';
import PayPalButton from './components/PayPalButton';
import coverImage from './assets/images/now_i_see_cover_1784594781418.jpg';

const amazonUrl = 'https://amzn.to/4cYuQUX';

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState<string | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="top-note">Direct paperback preorders ship in approximately 4 weeks</div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Now I See home" onClick={closeMenu}>
          <span>NOW</span><i>I SEE</i>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <span className="menu-mark" aria-hidden="true">{menuOpen ? '×' : '+'}</span>
        </button>

        <nav id="primary-navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#the-book" onClick={closeMenu}>The book</a>
          <a href="#preorder" onClick={closeMenu}>Preorder</a>
          <a href="#inside" onClick={closeMenu}>Inside</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a className="nav-amazon" href={amazonUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Amazon <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        {purchaseSuccess && (
          <section className="success-banner" aria-live="polite">
            <p><strong>Thank you, {purchaseSuccess}.</strong> Your preorder has been received. Please allow approximately four weeks for your paperback to ship.</p>
            <button type="button" onClick={() => setPurchaseSuccess(null)} aria-label="Dismiss confirmation">×</button>
          </section>
        )}

        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">A memoir by Toni ME Taylor</p>
            <h1 id="hero-title">Now<br /><em>I See.</em></h1>
            <p className="hero-intro">A faith-centered reflection on America, conscience, and the work of seeing one another clearly.</p>
            <p className="hero-detail">A newly rebranded edition of a message that asks us to look beyond division and toward truth, justice, liberty, and freedom for all.</p>
            <div className="hero-actions">
              <a className="button button-pink" href="#preorder">Preorder direct <Arrow /></a>
              <a className="text-link" href={amazonUrl} target="_blank" rel="noopener noreferrer">Or shop on Amazon <Arrow /></a>
            </div>
            <p className="shipping-line"><span className="shipping-dot" aria-hidden="true" /> Direct paperback preorders ship in about 4 weeks</p>
          </div>

          <div className="hero-art" aria-label="Now I See book cover">
            <div className="ray ray-one" />
            <div className="ray ray-two" />
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="cover-shadow" />
            <img src={coverImage} alt="Now I See, a memoir by Toni ME Taylor" className="book-cover hero-cover" />
            <div className="hero-label">Light for<br />the way forward</div>
          </div>
        </section>

        <section className="statement section-pad" aria-label="Book statement">
          <p>“Ask not for whom the bell tolls.<br /><span>It tolls for us.”</span></p>
          <div className="statement-rule" />
          <p className="statement-caption">A call to see America—and each other—with conscience, faith, and courage.</p>
        </section>

        <section id="preorder" className="preorder-wrap section-pad" aria-labelledby="preorder-title">
          <div className="preorder-heading">
            <p className="eyebrow">Choose your path</p>
            <h2 id="preorder-title">Get your copy.</h2>
            <p>Preorder directly to support the family’s upcoming bulk order, or choose Amazon checkout. Either way, your order helps this message find its readers.</p>
          </div>

          <div className="buy-grid">
            <article className="buy-card direct-card">
              <div className="card-sticker">Family preorder</div>
              <p className="card-kicker">Direct paperback</p>
              <h3>Reserve a copy<br /><em>from the next order.</em></h3>
              <p className="card-description">Your copy will be included in the next family bulk order. That means a little more patience—and a direct way to support the book.</p>
              <div className="price-line"><strong>$14.99</strong><span>plus shipping</span></div>
              <div className="fulfillment-note"><span aria-hidden="true">✓</span> Estimated to ship in approximately 4 weeks</div>
              <div className="paypal-slot">
                <PayPalButton editionId="paperback" price={14.99} onSuccess={setPurchaseSuccess} />
              </div>
              <p className="checkout-caption">Secure checkout through PayPal. Your order is a preorder and will ship when the bulk order arrives.</p>
            </article>

            <article className="buy-card amazon-card">
              <div className="amazon-sun" aria-hidden="true">A</div>
              <p className="card-kicker">Amazon option</p>
              <h3>Prefer Amazon<br /><em>checkout?</em></h3>
              <p className="card-description">Use the Amazon listing if you would rather shop through Amazon. This page uses an Amazon Associate link at no extra cost to you.</p>
              <a className="button button-ink amazon-button" href={amazonUrl} target="_blank" rel="noopener noreferrer">Shop Now I See on Amazon <Arrow /></a>
              <p className="checkout-caption">Amazon availability, fulfillment, and pricing are shown on its listing.</p>
            </article>
          </div>
        </section>

        <section id="the-book" className="book-story" aria-labelledby="story-title">
          <div className="story-heading section-pad">
            <p className="eyebrow">What you will find inside</p>
            <h2 id="story-title">A deeply personal call to look again.</h2>
            <p><em>Now I See</em> looks at a fractured nation through faith, personal conviction, and a great-grandmother’s eyes. It asks hard questions about how we see one another—and what it means to choose a more truthful, compassionate path.</p>
          </div>

          <div className="theme-grid section-pad">
            <article className="theme-card theme-gold">
              <span className="theme-number">01</span>
              <h3>Spiritual sight</h3>
              <p>Reflections on faith, grace, mercy, and the possibility of being made whole.</p>
            </article>
            <article className="theme-card theme-purple">
              <span className="theme-number">02</span>
              <h3>One people</h3>
              <p>A plea to recognize shared humanity beyond race, gender, origin, or political division.</p>
            </article>
            <article className="theme-card theme-ink">
              <span className="theme-number">03</span>
              <h3>America’s promise</h3>
              <p>A meditation on truth, justice, liberty, freedom, and the responsibility we carry forward.</p>
            </article>
          </div>
        </section>

        <section id="inside" className="excerpt section-pad" aria-labelledby="excerpt-title">
          <div className="excerpt-mark" aria-hidden="true">“</div>
          <div className="excerpt-copy">
            <p className="eyebrow">From the pages</p>
            <h2 id="excerpt-title">“Amid blindness I become sight.”</h2>
            <p>In language that is poetic, direct, and deeply spiritual, Toni ME Taylor turns toward the possibility of revelation, restoration, and a more united future.</p>
            <a className="text-link" href="#preorder">Begin with a preorder <Arrow /></a>
          </div>
          <div className="excerpt-cover-wrap">
            <img src={coverImage} alt="Now I See book cover" className="book-cover excerpt-cover" />
          </div>
        </section>

        <section className="why-direct section-pad" aria-labelledby="why-direct-title">
          <div>
            <p className="eyebrow">Why preorder direct?</p>
            <h2 id="why-direct-title">A small wait for a more personal route.</h2>
          </div>
          <div className="why-direct-copy">
            <p>Physical direct orders are being collected for a family bulk order. Your preorder is reserved now and will be sent after the shipment arrives—estimated at approximately four weeks.</p>
            <p>If that timing does not work for you, the Amazon option remains available at every purchase point on this page.</p>
            <a className="button button-pink" href="#preorder">Reserve my copy <Arrow /></a>
          </div>
        </section>

        <section id="faq" className="faq section-pad" aria-labelledby="faq-title">
          <p className="eyebrow">Before you order</p>
          <h2 id="faq-title">Common questions.</h2>
          <div className="faq-list">
            <details open>
              <summary>When will a direct preorder ship?<span aria-hidden="true">+</span></summary>
              <p>Direct paperback preorders are included in the next family bulk order. Please allow approximately four weeks for the books to arrive and ship out to you.</p>
            </details>
            <details>
              <summary>Can I buy the book through Amazon instead?<span aria-hidden="true">+</span></summary>
              <p>Yes. The Amazon option is available throughout this page for readers who prefer Amazon checkout, availability, or fulfillment.</p>
            </details>
            <details>
              <summary>Does using the Amazon button cost me more?<span aria-hidden="true">+</span></summary>
              <p>No. The Amazon button is an Amazon Associate link. The site may earn a small commission from qualifying purchases, at no additional cost to you.</p>
            </details>
            <details>
              <summary>What is this book about?<span aria-hidden="true">+</span></summary>
              <p>Now I See is Toni ME Taylor’s faith-centered memoir and reflection on America, conscience, unity, liberty, and seeing one another with greater clarity.</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top section-pad">
          <a className="footer-wordmark" href="#top">NOW <i>I SEE</i></a>
          <p>A memoir by Toni ME Taylor.</p>
          <div className="footer-actions">
            <a href="#preorder">Preorder direct <Arrow /></a>
            <a href={amazonUrl} target="_blank" rel="noopener noreferrer">Shop Amazon <Arrow /></a>
          </div>
        </div>
        <div className="footer-bottom section-pad">
          <p>© {new Date().getFullYear()} Toni ME Taylor. All rights reserved.</p>
          <p>As an Amazon Associate, this site may earn from qualifying purchases.</p>
        </div>
      </footer>
    </div>
  );
}
