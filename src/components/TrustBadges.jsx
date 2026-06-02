import React from 'react';
import { ShieldCheck, Heart, Users, Star, ThumbsUp, Sparkles } from 'lucide-react';
import './TrustBadges.css';

const TrustBadges = () => {
  const badges = [
    { icon: <ShieldCheck size={32} />, text: 'Dermatologically Tested' },
    { icon: <Heart size={32} />, text: 'Safe For Sensitive Skin' },
    { icon: <ThumbsUp size={32} />, text: 'Parent Approved' },
    { icon: <Users size={32} />, text: 'Made For Growing Girls' },
    { icon: <Sparkles size={32} />, text: 'Premium Materials' },
  ];

  const metrics = [
    { value: '10,000+', label: 'Happy Families' },
    { value: '98%', label: 'Parent Satisfaction' },
    { value: 'Nationwide', label: 'Loved By Girls' },
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-item">
              <h3 className="metric-value gradient-text">{metric.value}</h3>
              <p className="metric-label">{metric.label}</p>
            </div>
          ))}
        </div>
        
        <div className="badges-scroller">
          <div className="badges-track">
            {[...badges, ...badges].map((badge, index) => (
              <div key={index} className="badge-item">
                <div className="badge-icon">{badge.icon}</div>
                <span className="badge-text">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
