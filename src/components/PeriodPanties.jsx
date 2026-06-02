import React from 'react';
import { Droplet, Ruler, Shield, Sparkles } from 'lucide-react';
import './PeriodPanties.css';

const PeriodPanties = () => {
  const absorbencies = [
    { level: 'Light', color: 'var(--soft-lavender)' },
    { level: 'Medium', color: 'var(--pink-accent)' },
    { level: 'Heavy', color: 'var(--primary-purple)' },
    { level: 'Overnight', color: 'var(--dark-text)' }
  ];

  const benefits = [
    { icon: <Shield />, text: 'Built-in leak protection' },
    { icon: <Sparkles />, text: 'Super soft & breathable materials' },
    { icon: <Droplet />, text: 'Replaces pads & tampons' },
    { icon: <Ruler />, text: 'Sizes for every growing body' }
  ];

  return (
    <section className="section gradient-bg">
      <div className="container grid grid-cols-2 items-center gap-6">
        <div className="panties-content">
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Confidence From <span className="gradient-text">The Inside Out</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '2rem' }}>
            Comfortable, protective, and perfect for everyday wear. Our period panties feel like regular underwear but work like magic.
          </p>
          
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-item">
                <div className="benefit-icon">{benefit.icon}</div>
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>
          
          <div className="absorbency-indicator">
            <h4 style={{ marginBottom: '1rem' }}>Available in 4 Absorbency Levels:</h4>
            <div className="levels-flex">
              {absorbencies.map((abs, idx) => (
                <div key={idx} className="level-item">
                  <div className="level-color" style={{ backgroundColor: abs.color }}></div>
                  <span>{abs.level}</span>
                </div>
              ))}
            </div>
          </div>
          
          <button className="btn btn-primary" style={{ marginTop: '2rem' }}>
            Shop Period Panties
          </button>
        </div>
        
        <div className="panties-visual">
          <div className="panties-stack animate-float">
            <div className="panty-layer layer-4"></div>
            <div className="panty-layer layer-3"></div>
            <div className="panty-layer layer-2"></div>
            <div className="panty-layer layer-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeriodPanties;
