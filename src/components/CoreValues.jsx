import React from 'react';
import './CoreValues.css';

const vals = [
  { emoji:'📚', bg:'#F0E6FF', title:'Smart Choices',   desc:'Educational resources that help girls understand their bodies and changes.' },
  { emoji:'🌿', bg:'#E8FBF8', title:'Safe Always',     desc:'Gentle, high-quality materials designed for sensitive skin and comfort.' },
  { emoji:'💜', bg:'#FFB5D0', title:'Supportive Care', desc:'Products and guidance that empower confidence and emotional well-being.' },
  { emoji:'🌸', bg:'#FFF0F5', title:'Made for Girls',  desc:'Designed specifically for growing girls, their bodies, and their needs.' },
];

export default function CoreValues() {
  return (
    <section className="cv-section section">
      <div className="wrap">
        <div className="cv-head tc">
          <span className="tag tag-purple">Our Promise</span>
          <h2 className="cv-h2">Designed With <em>Care</em></h2>
          <p className="cv-sub">Every product built on four core commitments to her.</p>
        </div>
        <div className="cv-grid">
          {vals.map((v, i) => (
            <div key={i} className="cv-card">
              <div className="cv-icon-ring" style={{ background: v.bg }}>
                <span className="cv-emoji">{v.emoji}</span>
              </div>
              <h3 className="cv-card-h">{v.title}</h3>
              <p className="cv-card-p">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
