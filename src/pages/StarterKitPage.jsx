import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './StarterKitPage.css';


const includes = [
  { icon: '🌸', name: '5 Lite Pads', desc: 'For lighter flow or transition days.' },
  { icon: '🌺', name: '8 Balance Pads', desc: 'Perfect absorbency for active school days.' },
  { icon: '💪', name: '5 Strong Pads', desc: 'High absorbency for heavy flow days.' },
  { icon: '🌙', name: '2 Dream Pads', desc: 'Overnight length for clean, worry-free sleep.' },
  { icon: '🩲', name: 'BloomGuard™ Period Panty', desc: 'Durable, double leak-proof layer.' },
  { icon: '📖', name: 'BloomGuide™ Booklet', desc: 'Helpful first period guidance and tips.' },
  { icon: '💼', name: 'Emergency Carry Pouch', desc: 'Discreet pouch fits easily in a school backpack.' },
  { icon: '🔥', name: 'BloomWarm Heating Patch', desc: 'Air-activated warm patch for cramp relief.' }
];

const reviews = [
  { name: 'Sarah M.', date: 'May 15, 2026', stars: 5, comment: 'I bought this in advance for my 11-year-old daughter. When she got her first period last week, there was no panic! She knew exactly what to do thanks to the BloomGuide, and loved the cute carry pouch.' },
  { name: 'Jessica K.', date: 'April 29, 2026', stars: 5, comment: 'Highly recommend! The period panties fit perfectly and she said they are the softest underwear she owns. The packaging is absolutely beautiful.' },
  { name: 'Meera P.', date: 'March 12, 2026', stars: 5, comment: 'The affirmation cards made her smile on a day she was feeling a bit down. Such a thoughtful product.' }
];

export default function StarterKitPage() {
  const [size, setSize] = useState('S');
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      cartKey: `starter-kit-${size}`,
      id: 'starter-kit',
      name: 'Go With Your Flow™ Starter Kit',
      price: 49.99,
      img: '/images/starter-kit.jpg',
      size,
      qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-page starter-kit-page fade-up">
      <div className="wrap">
        <div className="product-layout">
          {/* Left Column: Images */}
          <div className="product-gallery">
            <div className="gallery-main">
              <img src="/images/starter-kit.jpg" alt="Go With Your Flow Starter Kit" className="main-img" />
            </div>
            <div className="gallery-thumbs">
              <img src="/images/starter-kit.jpg" alt="Kit Thumbnail 1" className="thumb active" />
              <img src="/images/kit-open-1.jpg" alt="Kit Thumbnail 2" className="thumb" />
              <img src="/images/kit-open-2.jpg" alt="Kit Thumbnail 3" className="thumb" />
            </div>
          </div>

          {/* Right Column: Specs */}
          <div className="product-details">
            <div className="details-header">
              <span className="tag tag-pink">🎁 Best Seller</span>
              <h1 className="product-title">Go With Your Flow™ Starter Kit</h1>
              <div className="product-rating">
                <span className="stars">★★★★★</span>
                <span className="count">(142 customer reviews)</span>
              </div>
              <div className="product-price">$49.99</div>
            </div>

            <p className="product-desc">
              Designed to take the worry and surprise out of her first cycle. Formulated with dermatologist-tested, hypoallergenic organic pads and comfortable period panties, this box equips her with both essential products and empowering education. Perfect to prepare in advance or to gift when the time comes.
            </p>

            <div className="product-config">
              {/* Size Selector */}
              <div className="config-group">
                <div className="config-label-row">
                  <label className="config-label">Select Period Panty Size:</label>
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
              {added ? '✓ Added to Cart!' : 'Add to Cart — $49.99'}
            </button>

            <div className="product-meta-perks">
              <div className="m-perk">🌿 Hypoallergenic &amp; Toxin-Free</div>
              <div className="m-perk">🩺 Dermatologist Approved</div>
              <div className="m-perk">🩹 Designed for Ages 8–16</div>
            </div>
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
          <p className="size-disclaimer">💡 <strong>Tip:</strong> If measuring between sizes, we recommend choosing the larger size for maximum comfort during her cycle.</p>
        </div>

        {/* What's Inside details */}
        <div className="product-section inside-box-section">
          <h2 className="section-title text-center">What's Inside <em>The Box</em></h2>
          <div className="inside-grid">
            {includes.map((item, i) => (
              <div key={i} className="inside-item">
                <span className="inside-icon">{item.icon}</span>
                <div className="inside-text">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="product-section reviews-section">
          <h2 className="section-title">Family Reviews</h2>
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
