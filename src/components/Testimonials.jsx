import React, { useState } from 'react';
import './Testimonials.css';

const reviews = [
  { initials:'PM', bg:'#F0E6FF', name:'Priya M.', role:'Parent of 2', stars:5, text:"I love that everything is in one kit. It made my daughter's first period so much easier. She felt so prepared and confident!" },
  { initials:'SR', bg:'#FFB5D0', name:'Sneha R.', role:'Parent', stars:5, text:'The quality is amazing and my daughter feels so confident using these. The affirmation cards were a lovely touch. We are hooked! 💜' },
  { initials:'AT', bg:'#B2F0E8', name:'Anjali T.', role:'Mum of a Bloomer', stars:5, text:"Finally a brand that actually understands girls! It's warm, educational, and makes periods feel completely normal. We are big fans!" },
];

const Stars = ({ n }) => (
  <div className="rev-stars">{Array.from({length:n}).map((_,i)=><span key={i}>★</span>)}</div>
);

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((active - 1 + reviews.length) % reviews.length);
  const next = () => setActive((active + 1) % reviews.length);

  return (
    <section className="testi section">
      <div className="wrap">
        <div className="testi-head tc">
          <span className="tag tag-gold">⭐ Reviews</span>
          <h2 className="testi-title">Loved by Parents.<br /><em>Trusted by Girls.</em></h2>
        </div>

        {/* Desktop: all 3 cards */}
        <div className="testi-grid">
          {reviews.map((r, i) => (
            <div key={i} className="rev-card" style={{ '--card-accent': r.bg }}>
              <Stars n={r.stars} />
              <p className="rev-text">"{r.text}"</p>
              <div className="rev-author">
                <div className="rev-av" style={{ background: r.bg }}>{r.initials}</div>
                <div>
                  <div className="rev-name">{r.name}</div>
                  <div className="rev-role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="testi-carousel">
          <button className="testi-arr" onClick={prev}>‹</button>
          <div className="rev-card rev-card-solo" style={{ '--card-accent': reviews[active].bg }}>
            <Stars n={reviews[active].stars} />
            <p className="rev-text">"{reviews[active].text}"</p>
            <div className="rev-author">
              <div className="rev-av" style={{ background: reviews[active].bg }}>{reviews[active].initials}</div>
              <div>
                <div className="rev-name">{reviews[active].name}</div>
                <div className="rev-role">{reviews[active].role}</div>
              </div>
            </div>
          </div>
          <button className="testi-arr" onClick={next}>›</button>
        </div>

        {/* Dots */}
        <div className="testi-dots">
          {reviews.map((_,i) => (
            <button key={i} className={`tdot ${i===active?'active':''}`} onClick={()=>setActive(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
