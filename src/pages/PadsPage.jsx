import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './PadsPage.css';

const variants = [
  {
    id: 'lite',
    name: 'Lite Pads',
    subtitle: 'For Light Flow Days',
    desc: 'Ultra-thin, flexible protection. Ideal for the beginning or end of her cycle, or as a back-up for active sports days.',
    icon: '🍃',
    color: '#F0E6FF',
    absorbency: 1
  },
  {
    id: 'balance',
    name: 'Balance Pads',
    subtitle: 'For Medium Flow Days',
    desc: 'The perfect day-to-day pad. Featuring an instant dry-lock core to stay dry through hours of classes and activities.',
    icon: '💧',
    color: '#FFB5D0',
    absorbency: 2
  },
  {
    id: 'strong',
    name: 'Strong Pads',
    subtitle: 'For Heavy Flow Days',
    desc: 'Extra absorbency for the heaviest flow days. Double side leak-guards provide maximum protection during movement.',
    icon: '🛡️',
    color: '#E8FBF8',
    absorbency: 3
  },
  {
    id: 'dream',
    name: 'Dream Pads',
    subtitle: 'For Overnight Protection',
    desc: 'Extra-long length and wider back coverage to prevent leaks during sleep. Keeps her comfortable for a full night’s sleep.',
    icon: '🌙',
    color: '#FFF0F5',
    absorbency: 4
  }
];

const reviews = [
  { name: 'Kavita S.', date: 'May 20, 2026', stars: 5, comment: 'These are the only pads my daughter will wear. She says they don’t feel plastic-y or itchy like the store brands.' },
  { name: 'Aditi G.', date: 'May 04, 2026', stars: 5, comment: 'Dermatologist recommended these because my daughter kept getting rashes. No issues at all since we switched to Bloom!' },
  { name: 'Ritu M.', date: 'April 11, 2026', stars: 5, comment: 'The mix of absorbencies is great. We subscribe to get a pack delivered every month and it has saved us so much hassle.' }
];

export default function PadsPage() {
  const [activeVariant, setActiveVariant] = useState('balance');
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const selected = variants.find(v => v.id === activeVariant);

  const handleAddToCart = () => {
    addToCart({
      cartKey: `pads-${activeVariant}`,
      id: `pads-${activeVariant}`,
      name: `Go With Your Flow™ Pads`,
      variant: selected.name,
      price: 9.99,
      img: '/images/pads.jpg',
      qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-page pads-page fade-up">
      <div className="wrap">
        <div className="product-layout">
          {/* Gallery */}
          <div className="product-gallery">
            <div className="gallery-main">
              <img src="/images/pads.jpg" alt="Go With Your Flow Pads" className="main-img" />
            </div>
            <div className="gallery-thumbs">
              <img src="/images/pads.jpg" alt="Pads Thumbnail 1" className="thumb active" />
              <img src="/images/kit-open-2.jpg" alt="Pads Thumbnail 2" className="thumb" />
            </div>
          </div>

          {/* Details */}
          <div className="product-details">
            <div className="details-header">
              <span className="tag tag-purple">🌿 100% Organic Cotton</span>
              <h1 className="product-title">Go With Your Flow™ Pads</h1>
              <div className="product-rating">
                <span className="stars">★★★★★</span>
                <span className="count">(892 reviews)</span>
              </div>
              <div className="product-price">$9.99 <span className="price-sub-note">or $8.99 with Subscription</span></div>
            </div>

            <p className="product-desc">
              Thoughtfully sized for growing bodies and active lifestyles. Crafted with an organic cotton topsheet that is hypoallergenic and breathable. Zero chlorine, toxins, artificial fragrances, or dyes — just pure, supportive protection.
            </p>

            <div className="product-config">
              {/* Absorbency Picker */}
              <div className="config-group">
                <label className="config-label">Select Absorbency Style:</label>
                <div className="variant-options">
                  {variants.map(v => (
                    <button
                      key={v.id}
                      className={`variant-option-btn ${activeVariant === v.id ? 'selected' : ''}`}
                      onClick={() => setActiveVariant(v.id)}
                      style={{ '--variant-accent': v.color }}
                    >
                      <span className="variant-icon">{v.icon}</span>
                      <span className="variant-name">{v.name}</span>
                    </button>
                  ))}
                </div>
              </div>

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
              {added ? '✓ Added to Cart!' : `Add ${selected.name} to Cart — $9.99`}
            </button>
          </div>
        </div>

        {/* Selected Variant Detail Feature */}
        <div className="product-section variant-detail-section" style={{ backgroundColor: selected.color + '33' }}>
          <div className="v-detail-box">
            <span className="v-detail-icon">{selected.icon}</span>
            <div className="v-detail-text">
              <h2>Deep Dive: <em>{selected.name}</em></h2>
              <p className="v-detail-subtitle">{selected.subtitle}</p>
              <p className="v-detail-desc">{selected.desc}</p>
              <div className="v-absorbency-bar">
                <span>Absorbency Level:</span>
                <div className="abs-dots">
                  {[1, 2, 3, 4].map(dot => (
                    <span
                      key={dot}
                      className={`abs-dot ${dot <= selected.absorbency ? 'filled' : ''}`}
                      style={{ backgroundColor: dot <= selected.absorbency ? 'var(--purple-deep)' : '#ddd' }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="product-section pads-ingredients-section">
          <h2 className="section-title text-center">Pure &amp; Simple Ingredients</h2>
          <div className="ingredients-grid">
            <div className="ing-card">
              <span className="ing-icon">🌱</span>
              <h3>Organic Cotton Topsheet</h3>
              <p>Oeko-Tex certified organic cotton that is incredibly gentle on sensitive, growing skin.</p>
            </div>
            <div className="ing-card">
              <h3>Super Absorbent Core</h3>
              <p>Toxin-free pulpy core that traps liquids instantly and locks it in for hours.</p>
            </div>
            <div className="ing-card">
              <span className="ing-icon">💨</span>
              <h3>Breathable Backsheet</h3>
              <p>Allows airflow while preventing leaks, keeping her fresh and dry all day.</p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="product-section reviews-section">
          <h2 className="section-title">What Families Say</h2>
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
