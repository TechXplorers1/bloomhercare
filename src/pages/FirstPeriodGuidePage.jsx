import React, { useState } from 'react';
import './FirstPeriodGuidePage.css';

const journeySteps = [
  { stage: 'Stage 1', title: 'Body Changes', desc: 'About 1-2 years before your first period, you might notice your breasts starting to develop, growing taller, and seeing soft hair under your arms and in your pubic area. This is all completely normal!', icon: '🌱' },
  { stage: 'Stage 2', title: 'Discharge', desc: 'You might start seeing a thin white or clear fluid on your underwear. This is vaginal discharge, and it means your body is getting ready for your period. It usually starts 6 to 12 months before.', icon: '💧' },
  { stage: 'Stage 3', title: 'Your First Period', desc: 'The average age for a first period is 12, but it can happen anywhere between 9 and 16. It might look red, pink, or brownish. It might only last a couple of days, and that is totally fine.', icon: '🩸' },
  { stage: 'Stage 4', title: 'Tracking Your Cycle', desc: 'Your cycle is the number of days from the start of one period to the start of the next (usually 21 to 35 days). In the first couple of years, it can be very irregular. Tracking helps you know when to expect it!', icon: '🗓️' },
  { stage: 'Stage 5', title: 'Self-Care & Hygiene', desc: 'Change your pad every 4-6 hours to stay fresh and comfortable. Wash your body with warm water, wear comfy clothes, and be kind to yourself. You are doing great!', icon: '🛁' }
];

const myths = [
  { myth: "I can't go swimming on my period.", fact: "You definitely can! Many girls use period swimwear or a tampon. If you're not ready for that, you can always lounge by the pool in a cute cover-up and period panties." },
  { myth: "Everyone will know I have my period.", fact: "Nope! Pads are super thin and discreet. Plus, period panties look just like regular underwear. No one can tell unless you decide to tell them." },
  { myth: "Periods are supposed to hurt really badly.", fact: "Mild cramps are normal, but severe pain isn't. Warm baths and BloomWarm heat patches can help a lot with mild cramps!" }
];

const glossary = [
  { term: 'Menstruation', def: 'The scientific name for your period. It is when the lining of your uterus sheds because a pregnancy didn’t happen.' },
  { term: 'Ovulation', def: 'When an ovary releases an egg. This usually happens about two weeks before your period starts.' },
  { term: 'Uterus', def: 'A strong, pear-shaped organ inside your lower belly where a baby can grow. This is where period blood comes from.' },
  { term: 'Discharge', def: 'A normal, healthy fluid produced by your vagina to keep it clean and infection-free.' }
];

export default function FirstPeriodGuidePage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="guide-page first-period-guide-page fade-up">
      {/* Editorial Hero */}
      <div className="guide-hero">
        <div className="wrap guide-hero-inner">
          <div className="guide-hero-copy">
            <span className="tag tag-pink">🌸 Girl Talk</span>
            <h1 className="guide-title">Your Guide to <em>Flowing</em> Confidently</h1>
            <p className="guide-subtitle">
              Everything you need to know about growing up, body changes, and your first period — explained simply and supportively.
            </p>
          </div>
          <div className="guide-hero-visual">
            <img src="/images/wa1.jpg" alt="Girls chatting" className="hero-chat-img" />
            <div className="chat-bubble bubble-1 float">Is it normal to feel moody?</div>
            <div className="chat-bubble bubble-2 floatB">Totally normal! 💕</div>
          </div>
        </div>
      </div>

      {/* Interactive Timeline */}
      <div className="timeline-section">
        <div className="wrap">
          <div className="timeline-layout">
            <div className="timeline-intro">
              <span className="tag tag-purple">The Journey</span>
              <h2 className="section-title">Your Growing Up <em>Timeline</em></h2>
              <p>Every body is unique, so your timeline might look a little different than your friends'. Click through the stages to learn what to expect.</p>
            </div>
            <div className="timeline-interactive">
              <div className="timeline-nav-vertical">
                {journeySteps.map((step, idx) => (
                  <button
                    key={idx}
                    className={`t-nav-btn ${activeStep === idx ? 'active' : ''}`}
                    onClick={() => setActiveStep(idx)}
                  >
                    <span className="t-icon">{step.icon}</span>
                    <span className="t-label">{step.stage}</span>
                  </button>
                ))}
              </div>
              <div className="timeline-display-card">
                <div className="t-card-badge">{journeySteps[activeStep].stage}</div>
                <h3>{journeySteps[activeStep].title}</h3>
                <p>{journeySteps[activeStep].desc}</p>
                {activeStep === 2 && (
                  <div className="timeline-product-tip">
                    <strong>💡 Pro Tip:</strong> Keep a <em>BloomHerCare Starter Kit</em> pouch in your backpack so you're ready when Stage 3 happens!
                  </div>
                )}
                {activeStep === 4 && (
                  <div className="timeline-product-tip">
                    <strong>💡 Pro Tip:</strong> Try our <em>Period Panties</em> for worry-free school days and sleepovers.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Myths vs Facts */}
      <div className="myths-section">
        <div className="wrap">
          <h2 className="section-title text-center">Myths vs. <em>Facts</em></h2>
          <div className="myths-grid">
            {myths.map((m, i) => (
              <div key={i} className="myth-card">
                <div className="myth-box">
                  <span className="myth-label">Myth</span>
                  <p>"{m.myth}"</p>
                </div>
                <div className="fact-box">
                  <span className="fact-label">Fact</span>
                  <p>{m.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glossary */}
      <div className="glossary-section">
        <div className="wrap glossary-layout">
          <div className="glossary-header">
            <h2 className="section-title">Period <em>Dictionary</em></h2>
            <p>Sometimes the words doctors and teachers use can be confusing. Here is a quick guide to what they actually mean.</p>
          </div>
          <div className="glossary-grid">
            {glossary.map((g, i) => (
              <div key={i} className="glossary-item">
                <h4>{g.term}</h4>
                <p>{g.def}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Starter Kit CTA Banner */}
      <div className="wrap guide-cta-banner">
        <div className="cta-content">
          <h2>Be 100% Prepared.</h2>
          <p>Get the Go With Your Flow™ Starter Kit with everything you need, packed in a cute ready-to-use bag.</p>
          <a href="/products/starter-kit" className="btn btn-pink">Get the Starter Kit</a>
        </div>
        <div className="cta-visual">
          <img src="/images/starter-kit.jpg" alt="Starter Kit" className="cta-img" />
        </div>
      </div>
    </div>
  );
}
