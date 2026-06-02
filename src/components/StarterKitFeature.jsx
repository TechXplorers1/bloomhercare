import React from 'react';
import './StarterKitFeature.css';

const includes = [
  { icon: '🌸', label: '5 Lite Pads' },
  { icon: '🌺', label: '8 Balance Pads' },
  { icon: '💪', label: '5 Strong Pads' },
  { icon: '🌙', label: '2 Dream Overnight Pads' },
  { icon: '📖', label: 'BloomGuide™ First Period Booklet' },
  { icon: '💼', label: 'Emergency Carry Pouch' },
  { icon: '💜', label: 'Positive Affirmation Card' },
  { icon: '🔥', label: 'BloomWarm Heating Patch' },
];

const sideBadges = [
  { e: '🎀', t: 'Discreet & Cute', s: 'Designed to fit her lifestyle' },
  { e: '💪', t: 'Confidence Boosting', s: 'Empowering from day one' },
  { e: '👩‍👧', t: 'Parent Approved', s: 'Trusted by thousands of families' },
  { e: '🎁', t: 'Perfect Gift', s: 'A meaningful first period gift' },
];

export default function StarterKitFeature() {
  return (
    <section className="skf section" id="starter-kit">
      {/* Full-width editorial banner first */}
      <div className="skf-banner">
        <div className="wrap skf-banner-inner">
          <div className="skf-banner-text">
            <span className="tag tag-pink">✨ Featured Product</span>
            <h2 className="skf-banner-h">
              Everything She Needs.<br />
              <em>Nothing She Doesn't.</em>
            </h2>
            <p className="skf-banner-sub">
              The Go With Your Flow™ Starter Kit is the ultimate first period companion — everything in one beautiful, ready-to-gift box.
            </p>
            <button className="btn btn-pink skf-cta">
              Shop Starter Kit — $49.99
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
          <div className="skf-banner-imgs">
            <div className="skf-img-main float">
              <img src="/images/starter-kit.jpg" alt="Go With Your Flow Starter Kit bundle showing all pad variants and carry pouch" />
            </div>
            <div className="skf-img-second floatB">
              <img src="/images/kit-open-1.jpg" alt="Bloomers Girl Stuff Kit open box showing all contents including BloomWarm, period panty and affirmation cards" />
            </div>
          </div>
        </div>
      </div>

      {/* Includes grid + side badges */}
      <div className="wrap skf-details">
        <div className="skf-includes">
          <h3 className="skf-includes-title">What's Inside 💜</h3>
          <div className="skf-includes-grid">
            {includes.map((item, i) => (
              <div key={i} className="skf-include">
                <span className="skf-include-icon">{item.icon}</span>
                <span className="skf-include-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skf-side-badges">
          {sideBadges.map((b, i) => (
            <div key={i} className="skf-badge">
              <span className="skf-badge-e">{b.e}</span>
              <div>
                <div className="skf-badge-t">{b.t}</div>
                <div className="skf-badge-s">{b.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
