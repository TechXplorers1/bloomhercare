import React from 'react';
import { BookOpen, Shield, HeartHandshake, Smile } from 'lucide-react';
import './WhyBloom.css';

const WhyBloom = () => {
  const features = [
    {
      icon: <BookOpen size={40} />,
      title: 'Smart Choices',
      description: 'Educational resources that help girls understand their bodies.',
      color: 'var(--soft-lavender)'
    },
    {
      icon: <Shield size={40} />,
      title: 'Safe Always',
      description: 'Gentle materials designed for sensitive skin.',
      color: 'var(--mint-accent)'
    },
    {
      icon: <HeartHandshake size={40} />,
      title: 'Supportive Care',
      description: 'Products that empower confidence and comfort.',
      color: '#FFE4E1' /* soft pink */
    },
    {
      icon: <Smile size={40} />,
      title: 'Made For Girls',
      description: 'Designed specifically for growing girls.',
      color: '#FFF0BA' /* soft yellow */
    }
  ];

  return (
    <section className="section gradient-bg">
      <div className="container text-center">
        <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Why <span className="gradient-text">BloomHerCare</span></h2>
        
        <div className="grid grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="card why-card">
              <div className="icon-wrapper" style={{ backgroundColor: feature.color }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBloom;
