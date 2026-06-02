import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const steps = [
    { title: 'Body Changes', desc: 'Understanding the first signs.' },
    { title: 'First Period', desc: 'Being prepared and confident.' },
    { title: 'Understanding Flow', desc: 'Learning what is normal for you.' },
    { title: 'Building Confidence', desc: 'Navigating school and sports.' },
    { title: 'Healthy Habits', desc: 'Self-care and hygiene.' },
    { title: 'Blooming Beautifully', desc: 'Embracing growing up.' }
  ];

  return (
    <section className="section gradient-bg">
      <div className="container text-center">
        <h2 style={{ fontSize: '3rem', marginBottom: '4rem' }}>
          Every Bloom <span className="gradient-text">Begins Somewhere</span>
        </h2>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-steps">
            {steps.map((step, idx) => (
              <div key={idx} className="timeline-step">
                <div className="timeline-dot"></div>
                <div className="timeline-content card">
                  <h3 style={{ color: 'var(--primary-purple)', marginBottom: '0.5rem' }}>{step.title}</h3>
                  <p style={{ color: '#555' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
