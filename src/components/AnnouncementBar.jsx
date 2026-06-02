import React from 'react';
import './AnnouncementBar.css';

const msgs = [
  '💜 Loved by 10,000+ Families',
  '🚚 Free Shipping on Orders $50+',
  '⭐ 98% Parent Satisfaction',
  '🌸 Dermatologically Tested & Safe',
  '🎁 The Perfect First Period Gift',
  '💜 Loved by 10,000+ Families',
  '🚚 Free Shipping on Orders $50+',
  '⭐ 98% Parent Satisfaction',
  '🌸 Dermatologically Tested & Safe',
  '🎁 The Perfect First Period Gift',
];

export default function AnnouncementBar() {
  return (
    <div className="ann-bar">
      <div className="ann-track-wrap">
        <div className="ann-track">
          {msgs.map((m, i) => (
            <span key={i} className="ann-item">
              <span className="ann-dot" />
              <span className="ann-text">{m}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
