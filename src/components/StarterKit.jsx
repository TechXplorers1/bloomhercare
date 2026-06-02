import React from 'react';
import { CheckCircle } from 'lucide-react';
import './StarterKit.css';

const StarterKit = () => {
  const contents = [
    'Pads (Lite, Balance, Strong, Dream)',
    'Period Panties',
    'BloomWarm Heat Pad',
    'First Period Guide',
    'Carry Pouch',
    'Positive Affirmation Cards'
  ];

  return (
    <section id="starter-kit" className="section starter-kit-section">
      <div className="container grid grid-cols-2 items-center gap-6">
        <div className="kit-visual">
          <div className="box-presentation">
            <div className="box-lid animate-float"></div>
            <div className="box-base">
              <span className="kit-label">Go With Your Flow Kit</span>
            </div>
            {/* Abstract items popping out */}
            <div className="kit-item item-1">Pads</div>
            <div className="kit-item item-2">Panties</div>
            <div className="kit-item item-3">Guide</div>
          </div>
        </div>
        
        <div className="kit-content flex flex-col gap-4">
          <h2 style={{ fontSize: '3rem' }}>
            Everything She Needs.<br />
            <span className="gradient-text">Nothing She Doesn't.</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '1rem' }}>
            The ultimate first period companion kit designed to help girls feel prepared, confident, and supported.
          </p>
          
          <ul className="kit-includes">
            {contents.map((item, index) => (
              <li key={index}>
                <CheckCircle className="text-primary-purple" size={24} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div style={{ marginTop: '2rem' }}>
            <button className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem' }}>
              Shop The Starter Kit - $49
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarterKit;
