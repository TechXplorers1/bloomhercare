import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Decorative shapes */}
      <div className="hero-shape hero-shape-1" />
      <div className="hero-shape hero-shape-2" />
      <div className="hero-shape hero-shape-3" />

      <div className="wrap hero-grid">
        {/* ── LEFT COLUMN ── */}
        <div className="hero-left fade-up">
          <div className="hero-eyebrow">
            <span className="tag tag-pink">🌸 Period Care Reimagined</span>
          </div>

          <h1 className="hero-h1">
            Growing Up<br />
            <em className="hero-italic">Beautifully.</em>
          </h1>

          <p className="hero-lead">
            Everything a girl needs for her period journey — thoughtfully designed so she feels <strong>confident, prepared &amp; supported</strong>.
          </p>

          <div className="hero-trust-chips">
            {['🧠 Smart', '🛡️ Safe', '💜 Supportive'].map((c) => (
              <span key={c} className="trust-chip">{c}</span>
            ))}
          </div>

          <div className="hero-ctas">
            <Link to="/products/starter-kit" className="btn btn-pink hero-cta-main">
              Shop Starter Kit
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link to="/first-period-guide" className="btn btn-ghost">Learn More</Link>
          </div>

          {/* Social proof */}
          <div className="hero-proof">
            <div className="proof-avatars">
              {['#F0E6FF','#FFB5D0','#E8FBF8'].map((bg, i) => (
                <div key={i} className="proof-av" style={{ background: bg }}>
                  {['👩','👧','👩'][i]}
                </div>
              ))}
            </div>
            <div className="proof-copy">
              <span className="proof-stars">★★★★★</span>
              <span className="proof-text">Loved by <strong>10,000+</strong> families</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — REAL PRODUCT IMAGE ── */}
        <div className="hero-right">
          {/* Floating badges around the image */}
          <div className="hero-float-badge badge-made-for float">
            <span>🌸</span>
            <div>
              <div className="hbadge-title">Made for Girls</div>
              <div className="hbadge-sub">Ages 8–16</div>
            </div>
          </div>

          <div className="hero-float-badge badge-parent floatB">
            <span>✅</span>
            <div>
              <div className="hbadge-title">Parent Approved</div>
              <div className="hbadge-sub">Trusted nationwide</div>
            </div>
          </div>

          <div className="hero-img-wrap float" style={{ animationDelay: '0.4s' }}>
            <img
              src="/images/starter-kit.jpg"
              alt="Bloomer's Go With Your Flow Starter Kit — includes Lite, Balance, Strong, Dream pads, BloomGuide, carry pouch and affirmation cards"
              className="hero-img"
            />
            <div className="hero-img-glow" />
          </div>

          {/* Small floating label */}
          <div className="hero-kit-tag floatB" style={{ animationDelay: '1s' }}>
            🎁 The #1 First Period Kit
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="scroll-pill">
          <div className="scroll-ball" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
