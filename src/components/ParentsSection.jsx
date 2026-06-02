import React from 'react';
import { Download, Users, HelpCircle, FileText } from 'lucide-react';
import './ParentsSection.css';

const ParentsSection = () => {
  const resources = [
    { icon: <FileText />, text: 'Parent Guides' },
    { icon: <HelpCircle />, text: 'FAQs' },
    { icon: <Download />, text: 'Downloadable Resources' },
    { icon: <Users />, text: 'Expert Advice' }
  ];

  return (
    <section className="section bg-primary text-white parents-section">
      <div className="container grid grid-cols-2 items-center gap-6">
        <div className="parents-content">
          <h2 style={{ fontSize: '3rem', color: 'var(--white)', marginBottom: '1rem' }}>
            Helping Parents Navigate This Journey Too.
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--soft-lavender)', marginBottom: '2rem' }}>
            You're not alone. We provide the tools, guides, and expert advice to help you support her with confidence.
          </p>
          
          <div className="grid grid-cols-2 gap-2" style={{ marginBottom: '2rem' }}>
            {resources.map((res, idx) => (
              <div key={idx} className="flex items-center gap-1 text-lavender">
                {res.icon} {res.text}
              </div>
            ))}
          </div>
          
          <button className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary-purple)' }}>
            Explore Parent Resources
          </button>
        </div>
        
        <div className="parents-visual flex justify-center">
          <div className="parents-placeholder">
            {/* Visual Placeholder */}
            <div className="checklist-card animate-float">
              <h4>First Period Checklist</h4>
              <ul>
                <li><span></span> BloomHerCare Kit</li>
                <li><span></span> Open Conversation</li>
                <li><span></span> Reassurance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;
