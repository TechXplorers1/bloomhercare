import React, { useState } from 'react';
import { Droplets, Moon, Shield, Wind } from 'lucide-react';
import './ProductTabs.css';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('Lite');

  const tabs = [
    {
      id: 'Lite',
      title: 'Lite',
      subtitle: 'Light Flow Days',
      icon: <Wind size={24} />,
      features: ['Ultra-thin comfort', 'Soft materials', 'Breathable protection'],
      color: 'var(--soft-lavender)'
    },
    {
      id: 'Balance',
      title: 'Balance',
      subtitle: 'Medium Flow Days',
      icon: <Droplets size={24} />,
      features: ['School-friendly', 'Sports-friendly', 'Reliable protection'],
      color: 'var(--pink-accent)'
    },
    {
      id: 'Strong',
      title: 'Strong',
      subtitle: 'Heavy Flow Days',
      icon: <Shield size={24} />,
      features: ['Maximum absorbency', 'Leak protection', 'Active day confidence'],
      color: 'var(--primary-purple)'
    },
    {
      id: 'Dream',
      title: 'Dream',
      subtitle: 'Overnight Protection',
      icon: <Moon size={24} />,
      features: ['Extra-long coverage', 'Peaceful sleep', 'Night protection'],
      color: 'var(--dark-text)'
    }
  ];

  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
          Pads For Every Flow
        </h2>
        
        <div className="tabs-container">
          <div className="tabs-header">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  borderBottomColor: activeTab === tab.id ? tab.color : 'transparent',
                  color: activeTab === tab.id ? tab.color : 'var(--dark-text)'
                }}
              >
                {tab.title}
              </button>
            ))}
          </div>
          
          <div className="tab-content card" style={{ borderColor: activeContent.color }}>
            <div className="tab-visual" style={{ backgroundColor: activeContent.color, opacity: activeTab === 'Dream' ? 0.8 : 0.2 }}>
              {activeContent.icon}
            </div>
            <div className="tab-details">
              <h3 style={{ color: activeContent.color === 'var(--dark-text)' ? 'var(--primary-purple)' : activeContent.color, fontSize: '2rem' }}>
                {activeContent.title}
              </h3>
              <p className="tab-subtitle">{activeContent.subtitle}</p>
              
              <ul className="tab-features">
                {activeContent.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-dot" style={{ backgroundColor: activeContent.color }}></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
