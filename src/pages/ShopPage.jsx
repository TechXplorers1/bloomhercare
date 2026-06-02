import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShopPage.css';

const products = [
  {
    id: 'starter-kit',
    name: "Go With Your Flow™ Starter Kit",
    category: 'Bundles',
    price: '$49.99',
    tag: '⭐ Best Seller',
    tagStyle: 'tag-pink',
    img: '/images/starter-kit.jpg',
    desc: 'The ultimate first period companion. Includes pads, BloomGuide™, pouch, heat patch & affirmation cards.',
    link: '/products/starter-kit'
  },
  {
    id: 'pads',
    name: 'Go With Your Flow™ Pads',
    category: 'Protection',
    price: '$9.99',
    tag: '🌿 100% Organic Cotton',
    tagStyle: 'tag-purple',
    img: '/images/pads.jpg',
    desc: 'Ultra-soft, toxic-free protection for every day of her cycle. Sized for growing bodies.',
    link: '/products/pads'
  },
  {
    id: 'panties',
    name: 'BloomHerCare™ Period Panties',
    category: 'Protection',
    price: '$16.99',
    tag: '⚡ Leak-Proof',
    tagStyle: 'tag-mint',
    img: '/images/panties.jpg',
    desc: 'Super soft, breathable, and holds up to 4 pads of flow. Feels just like regular underwear.',
    link: '/products/panties'
  },
  {
    id: 'heat-pads',
    name: 'BloomWarm™ Heat Pads',
    category: 'Comfort',
    price: '$12.99',
    tag: '🔥 Soothing Relief',
    tagStyle: 'tag-gold',
    img: '/images/kit-open-2.jpg',
    desc: 'Air-activated warm patches that stick to clothing to soothe cramps for up to 8 hours.',
    link: '/products/heat-pads'
  }
];

export default function ShopPage() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <div className="shop-page fade-up">
      {/* Editorial Header */}
      <div className="shop-hero">
        <div className="wrap">
          <span className="tag tag-pink">🌸 The Shop</span>
          <h1 className="shop-title">Gentle Care for <em>Her Cycle</em></h1>
          <p className="shop-subtitle">
            Dermatologist-tested, toxin-free, and designed with ultra-soft materials for growing bodies.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="wrap">
        <div className="shop-filters">
          {['All', 'Protection', 'Comfort', 'Bundles'].map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="shop-grid">
          {filtered.map(p => (
            <div key={p.id} className="shop-card">
              <Link to={p.link} className="shop-img-link">
                <div className="shop-img-wrap">
                  <img src={p.img} alt={p.name} className="shop-img" />
                  <div className="shop-img-hover-overlay">
                    <span className="btn btn-pink">View Details</span>
                  </div>
                </div>
              </Link>
              <div className="shop-card-body">
                <div className="shop-card-tag-row">
                  <span className={`tag ${p.tagStyle}`}>{p.tag}</span>
                </div>
                <h3 className="shop-product-name">
                  <Link to={p.link}>{p.name}</Link>
                </h3>
                <p className="shop-product-desc">{p.desc}</p>
                <div className="shop-card-footer">
                  <span className="shop-product-price">{p.price}</span>
                  <Link to={p.link} className="btn btn-purple btn-sm">Buy Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Banner */}
      <div className="shop-benefits-banner">
        <div className="wrap benefits-flex">
          <div className="benefit-col">
            <span className="b-icon">📦</span>
            <h4>Free Shipping</h4>
            <p>On all subscriptions and orders over $35</p>
          </div>
          <div className="benefit-col">
            <span className="b-icon">🍃</span>
            <h4>Pure & Clean</h4>
            <p>Hypoallergenic, organic cotton, no chemicals</p>
          </div>
          <div className="benefit-col">
            <span className="b-icon">✨</span>
            <h4>Cancel Anytime</h4>
            <p>No commitments, easy control over subscription</p>
          </div>
        </div>
      </div>
    </div>
  );
}
