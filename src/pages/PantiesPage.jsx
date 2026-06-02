import React, { useState } from 'react';
import './PantiesPage.css';

const techLayers = [
  { step: '1', name: 'Moisture-Wicking Topsheet', desc: 'Sucks moisture away instantly, keeping her skin dry and fresh.' },
  { step: '2', name: 'Super Absorbent Layer', desc: 'Locks in liquid equivalent to 4 pads, prevent swelling or bulkiness.' },
  { step: '3', name: 'Waterproof Shield', desc: 'Double-guard membrane that blocks leaks from getting onto clothes.' },
  { step: '4', name: 'Silky Outer Shell', desc: 'Breathable, premium organic cotton fabric for active, all-day comfort.' }
];

const reviews = [
  { name: 'Nisha K.', date: 'May 11, 2026', stars: 5, comment: 'Game changer for gym class! My daughter was so anxious about leaking, but these panties have given her full confidence.' },
  { name: 'Rohini S.', date: 'April 22, 2026', stars: 5, comment: 'We bought 3 pairs. They wash really well, super soft, and she says they look exactly like her regular cute underwear.' }
];

export default function PantiesPage() {
  const [size, setSize] = useState('S');
  const [color, setColor] = useState('Lavender');
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-page panties-page fade-up">
      <div className="wrap">
        <div className="product-layout">
          {/* Gallery */}
          <div className="product-gallery">
            <div className="gallery-main">
              <img src="/images/panties.jpg" alt="BloomHerCare Period Panties" className="main-img" />
            </div>
            <div className="gallery-thumbs">
              <img src="/images/panties.jpg" alt="Panties Thumbnail 1" className="thumb active" />
              <img src="/images/kit-open-1.jpg" alt="Panties Thumbnail 2" className="thumb" />
            </div>
          </div>

          {/* Details */}
          <div className="product-details">
            <div className="details-header">
              <span className="tag tag-mint">⚡ Leak-Proof Protection</span>
              <h1 className="product-title">BloomHerCare™ Period Panties</h1>
              <div className="product-rating">
                <span className="stars">★★★★★</span>
                <span className="count">(512 reviews)</span>
              </div>
              <div className="product-price">$16.99</div>
            </div>

            <p className="product-desc">
              Feels exactly like regular, premium cotton underwear, but works like magic. Featuring built-in 4-layer leak-proof tech that absorbs up to 4 standard pads of flow. Machine washable, reusable, and designed for maximum comfort during school, sports, and sleep.
            </p>

            <div className="product-config">
              {/* Color Picker */}
              <div className="config-group">
                <label className="config-label">Select Color:</label>
                <div className="color-options">
                  {['Lavender', 'Soft Pink', 'Midnight Black'].map(c => (
                    <button
                      key={c}
                      className={`color-btn ${color === c ? 'selected' : ''}`}
                      onClick={() => setColor(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="config-group">
                <div className="config-label-row">
                  <label className="config-label">Select Size:</label>
                  <a href="#size-chart" className="size-guide-link">Sizing Guide</a>
                </div>
                <div className="size-options">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(s => (
                    <button
                      key={s}
                      className={`size-btn ${size === s ? 'selected' : ''}`}
                      onClick={() => setSize(s)}
                    >
                      {s}
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
              {added ? '✓ Added to Cart!' : `Add ${color} (${size}) to Cart — $16.99`}
            </button>
          </div>
        </div>

        {/* Tech Diagram */}
        <div className="product-section tech-section">
          <h2 className="section-title text-center">4-Layer Leak-Proof <em>Technology</em></h2>
          <div className="tech-grid">
            {techLayers.map((l) => (
              <div key={l.step} className="tech-card">
                <div className="tech-step-badge">{l.step}</div>
                <h3>{l.name}</h3>
                <p>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sizing Chart Section */}
        <div id="size-chart" className="product-section size-chart-section">
          <h2 className="section-title">Panty Size Chart</h2>
          <div className="size-table-container">
            <table className="size-table">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Age (Approx)</th>
                  <th>Waist (Inches)</th>
                  <th>Hips (Inches)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>XS</strong></td>
                  <td>6 - 8</td>
                  <td>22" - 23"</td>
                  <td>24" - 26"</td>
                </tr>
                <tr>
                  <td><strong>S</strong></td>
                  <td>8 - 10</td>
                  <td>23.5" - 24.5"</td>
                  <td>26.5" - 28.5"</td>
                </tr>
                <tr>
                  <td><strong>M</strong></td>
                  <td>10 - 12</td>
                  <td>25" - 26"</td>
                  <td>29" - 31"</td>
                </tr>
                <tr>
                  <td><strong>L</strong></td>
                  <td>12 - 14</td>
                  <td>26.5" - 27.5"</td>
                  <td>31.5" - 33.5"</td>
                </tr>
                <tr>
                  <td><strong>XL</strong></td>
                  <td>14 - 16</td>
                  <td>28" - 29"</td>
                  <td>34" - 36"</td>
                </tr>
                <tr>
                  <td><strong>XXL</strong></td>
                  <td>16 - 18</td>
                  <td>29.5" - 31"</td>
                  <td>36.5" - 38.5"</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="size-disclaimer">💡 <strong>Tip:</strong> Sized for younger, growing bodies. If she is in between sizes, size up for comfort.</p>
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
