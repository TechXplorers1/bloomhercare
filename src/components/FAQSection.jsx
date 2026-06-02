import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
  { q:'Are the products safe for my daughter?', a:'All BloomHerCare products are dermatologically tested, free from chlorine, harsh chemicals and fragrances — designed specifically for sensitive, growing skin.' },
  { q:'What is included in the Starter Kit?', a:'The Go With Your Flow Starter Kit includes: 5 Lite Pads, 8 Balance Pads, 5 Strong Pads, 2 Dream Overnight Pads, a BloomGuide™ First Period Booklet, Emergency Carry Pouch, Positive Affirmation Card, and a BloomWarm Heating Patch.' },
  { q:'How do I choose the right period panty size?', a:'We provide a sizing guide based on waist measurements: XS (6–8), S (8–10), M (10–12), L (12–14), XL (14–16), XXL (16–18). When in doubt, size up for comfort.' },
  { q:'How does the subscription work?', a:"Choose your plan, pick your products and absorbency mix, set a delivery frequency. You can skip, pause, change quantities or cancel anytime — no fees and no commitment." },
  { q:'What age are these products for?', a:'BloomHerCare is designed for preteens and teens aged 8–16. Everything is sized and designed with younger, growing bodies in mind.' },
  { q:'How long do period panties last?', a:'With proper care — machine wash cold, hang to dry — BloomGuard period panties retain full absorbency and shape for up to 2 years.' },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq-section section">
      <div className="wrap faq-grid">
        <div className="faq-left">
          <span className="tag tag-purple">FAQs</span>
          <h2 className="faq-h">Got Questions?<br /><em>We've Got Answers.</em></h2>
          <p className="faq-p">Everything you need to know to feel confident about BloomHerCare.</p>
          <button className="btn btn-purple" style={{ marginTop:'1rem', alignSelf:'flex-start' }}>
            Contact Us
          </button>
        </div>
        <div className="faq-right">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item ${open===i?'open':''}`}>
              <button className="faq-q" onClick={() => setOpen(open===i ? null : i)}>
                <span>{f.q}</span>
                <span className="faq-icon">{open===i ? '−' : '+'}</span>
              </button>
              <div className="faq-ans"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
