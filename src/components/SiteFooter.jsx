import React from 'react';
import { Link } from 'react-router-dom';
import './SiteFooter.css';

const cols = [
  {
    title: 'Shop',
    links: [
      { label: 'All Products', to: '/shop' },
      { label: 'Go With Your Flow Pads', to: '/products/pads' },
      { label: 'Period Panties', to: '/products/panties' },
      { label: 'BloomWarm Heat Pads', to: '/products/heat-pads' },
      { label: 'Starter Kit', to: '/products/starter-kit' }
    ]
  },
  {
    title: 'Help',
    links: [
      { label: 'FAQs', to: '/#faq' },
      { label: 'Shipping & Delivery', to: '#' },
      { label: 'Returns', to: '#' },
      { label: 'Track Order', to: '#' },
      { label: 'Contact Us', to: '#' }
    ]
  },
  {
    title: 'Learn',
    links: [
      { label: 'First Period Guide', to: '/first-period-guide' },
      { label: 'For Parents', to: '/for-parents' },
      { label: 'Blog', to: '#' },
      { label: 'Period Education', to: '#' },
      { label: 'Downloadables', to: '/for-parents' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Why BloomHerCare', to: '/about' },
      { label: 'Reviews', to: '/#reviews' },
      { label: 'Press & Media', to: '#' }
    ]
  }
];

const socials = [
  { label: 'Instagram', icon: '📸' },
  { label: 'Pinterest', icon: '📌' },
  { label: 'YouTube', icon: '▶️' },
  { label: 'TikTok', icon: '🎵' },
  { label: 'Facebook', icon: '👥' }
];

const payments = ['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay', 'G Pay'];

export default function SiteFooter() {
  return (
    <footer className="footer">
      {/* Pre-footer CTA */}
      <div className="footer-cta">
        <div className="footer-cta-orb footer-orb-1" />
        <div className="footer-cta-orb footer-orb-2" />
        <div className="wrap footer-cta-grid">
          {/* Left product showcase */}
          <div className="footer-cta-img-stack">
            <img src="/images/kit-open-1.jpg" alt="Bloomers Girl Stuff Kit open" className="fcta-img fcta-img-back float" />
            <img src="/images/starter-kit.jpg" alt="Go With Your Flow Starter Kit" className="fcta-img fcta-img-front floatB" />
          </div>
          {/* Right copy */}
          <div className="footer-cta-copy">
            <h2 className="fcta-h">
              Start Her Journey<br /><em>The Right Way.</em>
            </h2>
            <p className="fcta-p">
              Give her the confidence kit that thousands of families trust. Smart. Safe. Supportive — just like she deserves.
            </p>
            <div className="fcta-btns">
              <Link to="/products/starter-kit" className="btn btn-pink">Shop Starter Kit</Link>
              <Link to="/subscriptions" className="btn btn-outline-white">Subscribe & Save</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="footer-body">
        <div className="wrap footer-main-grid">
          {/* Brand col */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <span className="footer-logo-mark">🌸</span>
              <div>
                <div className="footer-logo-name">BloomHerCare™</div>
                <div className="footer-logo-tag">Growing Up Beautifully.</div>
              </div>
            </div>
            <p className="footer-brand-desc">
              Smart. Safe. Supportive. Period care thoughtfully designed for preteens and teens aged 8–16.
            </p>
            {/* Newsletter */}
            <div className="footer-nl">
              <p className="footer-nl-label">Stay in the loop 💌</p>
              <form className="footer-nl-form" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="your@email.com" required />
                <button className="btn btn-pink nl-btn" type="submit">→</button>
              </form>
            </div>
            {/* Social */}
            <div className="footer-social">
              {socials.map(s => (
                <a key={s.label} href="#" className="footer-social-btn" aria-label={s.label} title={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map(col => (
            <div key={col.title} className="footer-link-col">
              <h4 className="footer-link-title">{col.title}</h4>
              <ul className="footer-links">
                {col.links.map(l => (
                  <li key={l.label}>
                    {l.to.startsWith('#') || l.to === '#' ? (
                      <a href={l.to}>{l.label}</a>
                    ) : (
                      <Link to={l.to}>{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="wrap footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} BloomHerCare™. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
          <div className="footer-payments">
            {payments.map(p => <span key={p} className="payment-tag">{p}</span>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
