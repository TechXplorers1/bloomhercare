import React, { useState } from 'react';
import './HeatPadsPage.css';

const steps = [
  { step: '1', title: 'Open Packet', desc: 'Tear open the wrapper. The air-activated patch will begin warming up on its own.' },
  { step: '2', title: 'Peel Adhesive', desc: 'Remove the protective backing to reveal the gentle adhesive strip.' },
  { step: '3', title: 'Stick to Clothes', desc: 'Apply the patch adhesive-side down on the outside of her panties or undershirt. Do not apply directly to skin.' }
];

const perks = [
  { icon: '💨', name: 'Air-Activated', desc: 'Heats up immediately on exposure to air.' },
  { icon: '🕒', name: '8-Hour Relief', desc: 'Lasts all school day so she can focus on learning, not cramps.' },
  { icon: '🌸', name: 'Odor-Free & Clean', desc: '100% scent-free and drug-free natural mineral warmth.' },
  { icon: '👁️', name: 'Discreet Comfort', desc: 'So thin it is completely invisible under school uniforms or jeans.' }
];

const reviews = [
  { name: 'Kiran T.', date: 'May 18, 2026', stars: 5, comment: 'My daughter started using these when she gets severe cramps on her first day. She keeps one in her school bag, super easy to use!' },
  { name: 'Megha L.', date: 'April 09, 2026', stars: 5, comment: 'Safe, natural, and actually works. Better than taking painkillers every month. Highly recommended!' }
];

export default function HeatPadsPage() {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-page heat-pads-page fade-up">
      <div className="wrap">
        <div className="product-layout">
          {/* Gallery */}
          <div className="product-gallery">
            <div className="gallery-main">
              <img src="/images/kit-open-2.jpg" alt="BloomWarm Cramp Relief Heat Pads" className="main-img" />
            </div>
            <div className="gallery-thumbs">
              <img src="/images/kit-open-2.jpg" alt="Heat Pads Thumbnail 1" className="thumb active" />
              <img src="/images/starter-kit.jpg" alt="Heat Pads Thumbnail 2" className="thumb" />
            </div>
          </div>

          {/* Details */}
          <div className="product-details">
            <div className="details-header">
              <span className="tag tag-gold">🔥 Natural Cramp Relief</span>
              <h1 className="product-title">BloomWarm™ Cramp Relief Heat Pads</h1>
              <div className="product-rating">
                <span className="stars">★★★★★</span>
                <span className="count">(324 reviews)</span>
              </div>
              <div className="product-price">$12.99 <span className="price-pack-qty">(Pack of 5 patches)</span></div>
            </div>

            <p className="product-desc">
              Comforting, cozy warmth wherever she goes. Air-activated heat patches provide up to 8 hours of gentle, therapeutic warmth. Super-thin, drug-free, and sticks safely and securely to the outside of undergarments. Perfect to keep in her backpack for active school days.
            </p>

            <div className="product-config">
              {/* Quantity */}
              <div className="config-group">
                <label className="config-label">Quantity:</label>
                <div className="qty-picker">
                  <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                  <span className="qty-num">{qty}</span>
                  <button className="qty-btn" onClick={() => setQty(qty + 1)}>+</button>
                </div>
              </div>
            </div>

            <button className="btn btn-pink add-to-cart-btn" onClick={handleAddToCart}>
              {added ? '✓ Added to Cart!' : 'Add to Cart — $12.99'}
            </button>
          </div>
        </div>

        {/* How to use */}
        <div className="product-section how-to-section">
          <h2 className="section-title text-center">How to Use <em>BloomWarm™</em></h2>
          <div className="how-grid">
            {steps.map((s) => (
              <div key={s.step} className="how-card">
                <div className="how-step-num">{s.step}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Perks Grid */}
        <div className="product-section perks-section">
          <h2 className="section-title text-center">Natural, Drug-Free Cramp Relief</h2>
          <div className="perks-grid">
            {perks.map((p, i) => (
              <div key={i} className="perk-card">
                <span className="perk-icon">{p.icon}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="product-section reviews-section">
          <h2 className="section-title">What Parents Say</h2>
          <div className="reviews-list">
            {reviews.map((r, i) => (
              <div key={i} className="review-item">
                <div className="review-meta">
                  <strong>{r.name}</strong>
                  <span className="review-date">{r.date}</span>
                </div>
                <div className="review-stars">{"★".repeat(r.stars)}</div>
                <p className="review-comment">"{r.comment}"</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
