import React from 'react';
import { Link } from 'react-router-dom';
import './ShopByCategory.css';

const cats = [
  {
    id: 'pads',
    tag: '🌸 Best Seller',
    tagStyle: 'tag-pink',
    name: 'Go With Your Flow™ Pads',
    desc: 'Ultra-soft protection for every flow — Lite, Balance, Strong & Dream.',
    cta: 'Explore Pads',
    img: '/images/pads.jpg',
    accent: '#F0E6FF',
    to: '/products/pads'
  },
  {
    id: 'panties',
    tag: '💜 New Arrival',
    tagStyle: 'tag-purple',
    name: 'BloomHerCare™ Period Panties',
    desc: 'Comfortable, leak-proof protection designed for active girls.',
    cta: 'Explore Panties',
    img: '/images/panties.jpg',
    accent: '#FFB5D0',
    to: '/products/panties'
  },
  {
    id: 'kit',
    tag: '🎁 Perfect Gift',
    tagStyle: 'tag-gold',
    name: "Bloomer's Starter Kit",
    desc: 'Everything she needs for her first period — all in one beautiful box.',
    cta: 'Shop Starter Kit',
    img: '/images/kit-open-2.jpg',
    accent: '#E8FBF8',
    to: '/products/starter-kit'
  },
];

export default function ShopByCategory() {
  return (
    <section className="sbc section" id="pads">
      <div className="wrap">
        <div className="sbc-head tc">
          <h2 className="sbc-title">Shop by <em>Category</em></h2>
          <p className="sbc-sub">Everything she needs, beautifully designed for her.</p>
        </div>
        <div className="sbc-grid">
          {cats.map((c) => (
            <div key={c.id} className="sbc-card">
              <Link to={c.to}>
                <div className="sbc-img-wrap" style={{ background: c.accent }}>
                  <img src={c.img} alt={c.name} className="sbc-img" loading="lazy" />
                  <div className="sbc-img-overlay" />
                </div>
              </Link>
              <div className="sbc-body">
                <span className={`tag ${c.tagStyle}`}>{c.tag}</span>
                <h3 className="sbc-name">
                  <Link to={c.to}>{c.name}</Link>
                </h3>
                <p className="sbc-desc">{c.desc}</p>
                <Link to={c.to} className="btn btn-pink sbc-btn">{c.cta}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

