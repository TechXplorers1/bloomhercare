import React from 'react';
import './TrustBanner.css';

const items = [
  { icon:'🔬', label:'Dermatologically Tested' },
  { icon:'🌿', label:'Safe for Sensitive Skin' },
  { icon:'✅', label:'Parent Approved' },
  { icon:'🌸', label:'Made for Growing Girls' },
  { icon:'💜', label:'Supportive Care' },
  { icon:'👨‍👩‍👧', label:'10,000+ Happy Families' },
  { icon:'⭐', label:'98% Parent Satisfaction' },
];

const all = [...items, ...items];

export default function TrustBanner() {
  return (
    <div className="tb">
      <div className="tb-track">
        {all.map((item, i) => (
          <span key={i} className="tb-item">
            <span className="tb-icon">{item.icon}</span>
            <span className="tb-label">{item.label}</span>
            <span className="tb-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
