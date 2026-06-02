import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Final CTA Section */}
      <div className="final-cta text-center">
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--white)' }}>
          Supporting Every Step Of Her Journey.
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Because every girl deserves to feel confident, comfortable, and empowered.
        </p>
        <div className="flex gap-2 justify-center">
          <button className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary-purple)' }}>
            Shop BloomHerCare
          </button>
          <button className="btn" style={{ border: '2px solid var(--white)', color: 'var(--white)' }}>
            Learn More
          </button>
        </div>
      </div>

      <div className="container footer-content">
        <div className="grid grid-cols-4 gap-6 footer-grid">
          <div className="footer-brand">
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-purple)', marginBottom: '1rem' }}>
              BloomHerCare
            </h3>
            <p style={{ color: '#555', marginBottom: '1.5rem' }}>
              Growing Up Beautifully. Everything a girl needs for her period journey.
            </p>
            <div className="social-links flex gap-2">
              <a href="#" style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>IG</a>
              <a href="#" style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>FB</a>
              <a href="#" style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>TW</a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Shop</h4>
            <ul>
              <li><a href="#">Pads</a></li>
              <li><a href="#">Panties</a></li>
              <li><a href="#">Heat Pads</a></li>
              <li><a href="#">Starter Kit</a></li>
              <li><a href="#">Subscriptions</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Educational Hub</a></li>
              <li><a href="#">For Parents</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Connected</h4>
            <p style={{ color: '#555', marginBottom: '1rem', fontSize: '0.875rem' }}>
              Join our community for tips, stories, and exclusive offers.
            </p>
            <form className="newsletter-form flex">
              <input type="email" placeholder="Email address" required />
              <button type="submit" className="btn-primary">Sign Up</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} BloomHerCare. All rights reserved.</p>
          <div className="legal-links flex gap-3">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
