import React from 'react';
import { Check, Package, Gift, Clock } from 'lucide-react';
import './Subscription.css';

const Subscription = () => {
  const plans = [
    { name: 'Pads Only', price: '$15/mo' },
    { name: 'Pads + Panties', price: '$25/mo', recommended: true },
    { name: 'Complete Care Kit', price: '$35/mo' }
  ];

  const benefits = [
    { icon: <Package />, text: 'Monthly delivery straight to your door' },
    { icon: <Clock />, text: 'Flexible subscription - pause or cancel anytime' },
    { icon: <Gift />, text: 'Exclusive discounts & special surprise gifts' }
  ];

  return (
    <section className="section gradient-bg">
      <div className="container text-center">
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Never Run Out Of <span className="gradient-text">Confidence.</span>
        </h2>
        <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Subscribe and save. Get exactly what she needs, exactly when she needs it.
        </p>

        <div className="benefits-row flex justify-center gap-6" style={{ marginBottom: '3rem' }}>
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1" style={{ maxWidth: '200px' }}>
              <div style={{ color: 'var(--primary-purple)', marginBottom: '0.5rem' }}>{benefit.icon}</div>
              <p style={{ fontSize: '0.875rem', fontWeight: '500' }}>{benefit.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 plans-grid">
          {plans.map((plan, idx) => (
            <div key={idx} className={`plan-card card ${plan.recommended ? 'recommended' : ''}`}>
              {plan.recommended && <div className="recommended-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="plan-price">{plan.price}</div>
              <ul className="plan-features">
                <li><Check size={16} /> Customized absorbencies</li>
                <li><Check size={16} /> Free shipping</li>
                <li><Check size={16} /> Modify anytime</li>
              </ul>
              <button className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', marginTop: 'auto' }}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
