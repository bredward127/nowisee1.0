import { useState } from 'react';
import PayPalButton from './components/PayPalButton';
import authenticCover from './assets/images/now_i_see_authentic_cover.png';

const amazonUrl = 'https://amzn.to/4cYuQUX';

function Arrow() {
  return <span aria-hidden="true" className="arrow">→</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState<string | null>(null);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="top-note">Free U.S. shipping included · Direct preorders ship in approximately 4 weeks</div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Now I See home" onClick={closeMenu}><span>NOW</span><i>I SEE</i></a>
        <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span>{menuOpen ? 'Close' : 'Menu'}</span><span className="menu-mark" aria-hidden="true">{menuOpen ? '×' : '+'}</span>
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#the-book" onClick={closeMenu}>The book</a><a href="#preorder" onClick={closeMenu}>Preorder</a><a href="#inside" onClick={closeMenu}>Inside</a><a href="#faq" onClick={closeMenu}>FAQ</a>
          <a className="nav-amazon" href={amazonUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Amazon <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        {purchaseSuccess && <section className="success-banner" aria-live="polite"><p><strong>Thank you, {purchaseSuccess}.</strong> Your preorder is reserved. We will send your copy with free U.S. shipping after the next publisher case order arrives—approximately four weeks.</p><button type="button" onClick={() => setPurchaseSuccess(null)} aria-label="Dismiss confirmation">×</button></section>}

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
          <div className="hero-art" aria-label="Now I See authentic book cover">
            <div className="light-halo" /><div className="hero-frame frame-one" /><div className="hero-frame frame-two" /><div className="cover-shadow" />
            <img src={authenticCover} alt="Now I See: America, My Testimony, God and Me by Toni ME Taylor" className="book-cover hero-cover" />
            <div className="hero-label">Faith.<br />Purpose.<br />Sight.</div>
          </div>
        </section>

        <section className="statement section-pad" aria-label="Book statement"><p>“Amid blindness<br /><span>I become sight.”</span></p><div className="statement-rule" /><p className="statement-caption">A testimony of restoration, a reflection on America, and a call to see one another with greater clarity.</p></section>

        <section id="preorder" className="preorder-wrap section-pad" aria-labelledby="preorder-title">
          <div className="preorder-heading"><p className="eyebrow">Direct preorder · free U.S. shipping</p><h2 id="preorder-title">Choose your edition.</h2><p>Order directly for an author-supporting, delivered price. Your preorder reserves a copy from the next publisher case order; the price includes the book, secure payment processing, packaging, and standard U.S. shipping.</p></div>
          <div className="edition-grid">
            <article className="edition-card paperback-card">
              <p className="card-kicker">Paperback</p><h3>The message<br /><em>within reach.</em></h3><p className="card-description">A flexible, easy-to-share edition for readers, study groups, and meaningful gifts.</p>
              <div className="price-line"><strong>$18.99</strong><span>delivered in the U.S.</span></div><p className="savings-note">Free U.S. shipping included · Direct orders help fund the next case of 12</p>
              <div className="paypal-slot"><PayPalButton editionId="paperback" price={18.99} onSuccess={setPurchaseSuccess} /></div><p className="checkout-caption">This is a preorder. Publisher orders are placed in cases of 12; please allow approximately four weeks for fulfillment.</p>
            </article>
            <article className="edition-card hardcover-card">
              <div className="collector-badge">Collector’s edition</div><p className="card-kicker">Hardcover</p><h3>A lasting<br /><em>testimony.</em></h3><p className="card-description">A durable keepsake edition for the home library, a loved one, or a meaningful occasion.</p>
              <div className="price-line"><strong>$29.99</strong><span>delivered in the U.S.</span></div><p className="savings-note">Free U.S. shipping included · $1.00 below the stated Amazon hardcover price</p>
              <div className="paypal-slot"><PayPalButton editionId="hardcover" price={29.99} onSuccess={setPurchaseSuccess} /></div><p className="checkout-caption">This is a preorder. Publisher orders are placed in cases of 12; please allow approximately four weeks for fulfillment.</p>
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

        <section className="why-direct section-pad" aria-labelledby="why-direct-title"><div><p className="eyebrow">A transparent preorder</p><h2 id="why-direct-title">A little patience. A personal route.</h2></div><div className="why-direct-copy"><p>The publisher supplies direct copies in cases of 12. Your preorder helps fill the next case, and its price already includes free U.S. shipping once the books arrive.</p><p>After the case is received, each copy is prepared and shipped directly to you. Please allow approximately four weeks from your preorder.</p><a className="button button-wine" href="#preorder">Reserve my copy <Arrow /></a></div></section>

        <section id="faq" className="faq section-pad" aria-labelledby="faq-title"><p className="eyebrow">Before you order</p><h2 id="faq-title">Common questions.</h2><div className="faq-list">
          <details open><summary>When will a direct preorder ship?<span aria-hidden="true">+</span></summary><p>Direct copies are purchased from the publisher in cases of 12. Please allow approximately four weeks for the next case to arrive and for your copy to be sent with free U.S. shipping.</p></details>
          <details><summary>Is shipping included in the direct preorder price?<span aria-hidden="true">+</span></summary><p>Yes. The direct paperback and hardcover prices include standard shipping within the United States. International shipping is not offered through this direct preorder checkout.</p></details>
          <details><summary>Can I buy the book through Amazon instead?<span aria-hidden="true">+</span></summary><p>Yes. The Amazon option is available throughout this page for readers who prefer Amazon checkout, pricing, or fulfillment.</p></details>
          <details><summary>Does using the Amazon button cost me more?<span aria-hidden="true">+</span></summary><p>No. The Amazon button is an Amazon Associate link. This site may earn a small commission from qualifying purchases, at no additional cost to you.</p></details>
        </div></section>
      </main>

      <footer className="site-footer"><div className="footer-top section-pad"><a className="footer-wordmark" href="#top">NOW <i>I SEE</i></a><p>America. My Testimony. God and Me.</p><div className="footer-actions"><a href="#preorder">Preorder direct <Arrow /></a><a href={amazonUrl} target="_blank" rel="noopener noreferrer">Shop Amazon <Arrow /></a></div></div><div className="footer-bottom section-pad"><p>© {new Date().getFullYear()} Toni ME Taylor. All rights reserved.</p><p>As an Amazon Associate, this site may earn from qualifying purchases.</p></div></footer>
    </div>
  );
}
