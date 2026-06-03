import React, { useState } from 'react';
import CheckoutModal from '../components/CheckoutModal';
import './SubscriptionsPage.css';

const faqs = [
  { q: 'Can I change my absorbency mix later?', a: 'Yes, absolutely! Log in to your parent dashboard anytime before your next billing date to customize the exact number of Lite, Balance, Strong, or Dream pads in your box.' },
  { q: 'How do I pause or cancel?', a: 'There are no contracts or cancellation fees. You can pause, skip a month, or cancel your subscription directly from your online account settings with one click.' },
  { q: 'When will my card be charged and shipped?', a: 'Your card is charged on the same day you initially signed up, and packages are shipped via expedited mail within 24 hours of payment processing.' },
  { q: 'What is included in the surprise gifts?', a: 'Surprise gifts vary each month! They might be fun stickers, face masks, cozy socks, or sweet treats designed to brighten her day.' }
];

export default function SubscriptionsPage() {
  const [activePlan, setActivePlan] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);
  
  // Checkout Modal state
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlanDetails, setSelectedPlanDetails] = useState({ name: '', price: '' });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubscribe = (planName, planPrice) => {
    setSelectedPlanDetails({ name: planName, price: planPrice });
    setCheckoutModalOpen(true);
  };

  return (
    <div className="subscriptions-page fade-up">
      {/* Editorial Hero */}
      <div className="sub-hero">
        <div className="wrap">
          <span className="tag tag-purple">📦 Subscribe &amp; Save</span>
          <h1 className="sub-title">Never Run Out of <em>Confidence</em></h1>
          <p className="sub-subtitle">
            Flexible monthly deliveries of pure, toxin-free period care. Sized for her body, customized for her flow, and shipped straight to your door.
          </p>
        </div>
      </div>

      {/* Plan Selection Cards */}
      <div className="wrap">
        <div className="plans-grid">
          {/* Plan 1 */}
          <div className={`plan-card ${activePlan === 0 ? 'selected' : ''}`} onClick={() => setActivePlan(0)}>
            <div className="plan-image-wrapper">
              <img src="/images/pads.jpg" alt="Pads Only" className="plan-image" />
            </div>
            <div className="plan-badge">Basic</div>
            <h3 className="plan-name">Pads Only</h3>
            <p className="plan-desc">For every flow, every day of her cycle. Clean, organic comfort.</p>
            <div className="plan-price">$9.99 <span>/ month</span></div>
            <ul className="plan-features">
              <li>✓ 18 Organic Cotton Pads</li>
              <li>✓ Customize absorbency levels</li>
              <li>✓ Free shipping every month</li>
              <li>✓ Modify, pause, or cancel anytime</li>
            </ul>
            <button
              className="btn btn-purple plan-btn"
              onClick={(e) => { e.stopPropagation(); handleSubscribe('Pads Only', '$9.99 / month'); }}
            >
              Subscribe Now
            </button>
          </div>

          {/* Plan 2 */}
          <div className={`plan-card popular ${activePlan === 1 ? 'selected' : ''}`} onClick={() => setActivePlan(1)}>
            <div className="popular-tag">Most Popular</div>
            <div className="plan-image-wrapper">
              <img src="/images/panties.jpg" alt="Pads and Panties" className="plan-image" />
            </div>
            <div className="plan-badge">Complete Care</div>
            <h3 className="plan-name">Pads + Panties</h3>
            <p className="plan-desc">Double-guard protection for active school days and peaceful nights.</p>
            <div className="plan-price">$16.99 <span>/ month</span></div>
            <ul className="plan-features">
              <li>✓ 18 Organic Cotton Pads</li>
              <li>✓ 1 Reusable Period Panty / month</li>
              <li>✓ Customize absorbency & sizing</li>
              <li>✓ Exclusive surprise subscriber gifts</li>
              <li>✓ Free shipping & cancel anytime</li>
            </ul>
            <button
              className="btn btn-pink plan-btn"
              onClick={(e) => { e.stopPropagation(); handleSubscribe('Pads + Panties', '$16.99 / month'); }}
            >
              Subscribe Now
            </button>
          </div>

          {/* Plan 3 */}
          <div className={`plan-card ${activePlan === 2 ? 'selected' : ''}`} onClick={() => setActivePlan(2)}>
            <div className="plan-image-wrapper">
              <img src="/images/starter-kit.jpg" alt="Complete Care Kit" className="plan-image" />
            </div>
            <div className="plan-badge">Premium</div>
            <h3 className="plan-name">Complete Care Kit</h3>
            <p className="plan-desc">The ultimate comfort and cramp-relief package for total wellness.</p>
            <div className="plan-price">$24.99 <span>/ month</span></div>
            <ul className="plan-features">
              <li>✓ 18 Organic Cotton Pads</li>
              <li>✓ 1 Reusable Period Panty / month</li>
              <li>✓ Pack of 5 Cramp-Relief Heat Patches</li>
              <li>✓ Premium subscriber gift every quarter</li>
              <li>✓ Free shipping & cancel anytime</li>
            </ul>
            <button
              className="btn btn-purple plan-btn"
              onClick={(e) => { e.stopPropagation(); handleSubscribe('Complete Care Kit', '$24.99 / month'); }}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Cost Savings Section */}
      <div className="wrap savings-sec">
        <div className="savings-layout">
          <div className="savings-copy">
            <span className="tag tag-gold">💰 The Value</span>
            <h2 className="section-title">Why Subscribing is <em>Smarter</em></h2>
            <p className="savings-intro">
              Beyond the convenience of never running to the pharmacy at 9 PM, subscribing saves you real money. 
              By cutting out the middlemen and shipping directly to you, we pass the savings on.
            </p>
            <div className="savings-bars">
              <div className="saving-bar-group">
                <span className="saving-label">Buying Retail (Average)</span>
                <div className="saving-bar retail-bar">
                  <span>$25/mo</span>
                </div>
              </div>
              <div className="saving-bar-group">
                <span className="saving-label">BloomHerCare Subscription</span>
                <div className="saving-bar sub-bar">
                  <span>$16.99/mo</span>
                </div>
              </div>
            </div>
            <p className="savings-conclusion"><strong>Save over $96 a year</strong> on premium, organic period care.</p>
          </div>
          <div className="savings-perks">
            <div className="s-perk-card">
              <span className="s-perk-icon">📦</span>
              <h4>Never Run Out</h4>
              <p>Predictable delivery perfectly synced to her cycle.</p>
            </div>
            <div className="s-perk-card">
              <span className="s-perk-icon">🎁</span>
              <h4>Free Gifts</h4>
              <p>Special surprises included to brighten her day.</p>
            </div>
            <div className="s-perk-card">
              <span className="s-perk-icon">💸</span>
              <h4>Locked-In Pricing</h4>
              <p>Subscribers never face price hikes or inflation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Unboxing Preview */}
      <div className="unboxing-sec">
        <div className="wrap">
          <div className="unboxing-layout">
            <div className="unboxing-visual">
              <img src="/images/kit-open-1.jpg" alt="Unboxing BloomHerCare" className="unboxing-img" />
              <div className="floating-badge badge-1">Discreet Packaging</div>
              <div className="floating-badge badge-2">Eco-Friendly Box</div>
            </div>
            <div className="unboxing-copy">
              <span className="tag tag-pink">✨ The Experience</span>
              <h2 className="section-title">What's In The <em>Box?</em></h2>
              <p>We believe receiving period care should feel like a gift, not a medical supply delivery.</p>
              <ul className="unboxing-list">
                <li><strong>Discreet Outer Mailer:</strong> Arrives in plain packaging so her privacy is always respected.</li>
                <li><strong>Beautiful Inner Box:</strong> A gorgeous, uplifting design that she'll be excited to open.</li>
                <li><strong>Organized Compartments:</strong> Pads are neatly stacked by absorbency for easy access.</li>
                <li><strong>Monthly Surprises:</strong> A little extra joy tucked inside every month (Pads + Panties and Complete Kit plans).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs (Interactive Accordion) */}
      <div className="wrap sub-faq-sec">
        <h2 className="section-title text-center">Subscription <em>FAQ</em></h2>
        <div className="accordion-list">
          {faqs.map((f, i) => (
            <div key={i} className={`accordion-item ${openFaq === i ? 'open' : ''}`}>
              <button className="accordion-header" onClick={() => toggleFaq(i)}>
                <h3>{f.q}</h3>
                <span className="accordion-icon">{openFaq === i ? '−' : '+'}</span>
              </button>
              <div className="accordion-body">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        mode="subscription"
        planName={selectedPlanDetails.name}
        planPrice={selectedPlanDetails.price}
      />
    </div>
  );
}
