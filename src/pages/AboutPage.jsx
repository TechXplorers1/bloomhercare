import React from 'react';
import './AboutPage.css';

const values = [
  { emoji: '🧠', title: 'Smart Design', desc: 'Sized and shaped specifically for younger, growing bodies. No bulky adult pads, no sliding around — just a perfect, active fit.' },
  { emoji: '🛡️', title: 'Safe Ingredients', desc: '100% organic cotton topsheets, hypoallergenic cores, and zero synthetic fragrances, chlorine, or harsh toxins.' },
  { emoji: '💜', title: 'Supportive Guides', desc: 'Period care isn’t just about products; it’s about education. We empower girls and parents with resources for every step of the journey.' }
];

export default function AboutPage() {
  return (
    <div className="about-page fade-up">
      {/* Editorial Hero */}
      <div className="about-hero">
        <div className="wrap">
          <span className="tag tag-pink">🌸 Our Mission</span>
          <h1 className="about-title">Sincere Care for <em>Growing Bodies</em></h1>
          <p className="about-subtitle">
            We believe that growing up should be met with warmth, celebration, and absolute confidence.
          </p>
        </div>
      </div>

      {/* Brand Story Section */}
      <div className="wrap story-sec">
        <div className="story-grid">
          <div className="story-visual floatB">
            <div className="story-card">
              <h2>🌿 Toxin-Free</h2>
              <h2>🩺 Dermatologist Tested</h2>
              <h2>🧬 Organic Cotton</h2>
            </div>
          </div>
          <div className="story-copy">
            <span className="tag tag-purple">Our Story</span>
            <h2>Why We Started BloomHerCare</h2>
            <p>
              Every girl deserves to feel prepared and supported when her first period arrives. Yet, for generations, period care has been treated with generic, chemical-laden drugstore options and hushed, embarrassed conversations.
            </p>
            <p>
              We set out to change that. We started BloomHerCare to create a brand that speaks directly to preteens and teens with warmth, respect, and fun, while giving parents the peace of mind that comes from using clean, organic materials.
            </p>
            <p>
              From our ultra-soft organic cotton pads to our leak-proof period panties and warm cramp patches, every product is dermatologically tested, chemical-free, and designed to support her body and lifestyle.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="values-sec">
        <div className="wrap">
          <h2 className="section-title text-center">Our Core <em>Values</em></h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <span className="value-emoji">{v.emoji}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="wrap commitment-sec">
        <div className="commitment-banner">
          <h2>Our Pure Care Promise 🌸</h2>
          <p>
            We are committed to full ingredient transparency. We promise to never use chlorine bleaching, artificial fragrances, synthetic dyes, parabens, or plastic topsheets in our products. Only clean, pure care for her body.
          </p>
        </div>
      </div>
    </div>
  );
}
