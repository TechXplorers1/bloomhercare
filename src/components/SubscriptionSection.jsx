import React, { useState } from 'react';
import './SubscriptionSection.css';

const plans = [
  { name:'Pads Only', desc:'For every flow, every day.', price:'$9.99', feats:['Customized absorbency levels','Free shipping every month','Modify or skip anytime'] },
  { name:'Pads + Panties', desc:'Complete period protection.', price:'$16.99', popular:true, feats:['All Pads Only perks','BloomGuard period panty','Exclusive subscriber discounts','Monthly surprise gifts'] },
  { name:'Complete Care Kit', desc:'The full bloom experience.', price:'$24.99', feats:['All Pads + Panties perks','BloomWarm heat patches','Early access to new products','Premium gift every quarter'] },
];

export default function SubscriptionSection() {
  const [sel, setSel] = useState(1);
  return (
    <section className="sub-sec section" id="subscriptions">
      <div className="sub-bg-blob sub-blob-1" />
      <div className="sub-bg-blob sub-blob-2" />
      <div className="wrap sub-inner">
        <div className="sub-head tc">
          <span className="tag" style={{ background:'rgba(255,255,255,0.15)', color:'#fff', border:'1px solid rgba(255,255,255,0.25)' }}>💜 Subscribe & Save</span>
          <h2 className="sub-title">Never Run Out of <em>Confidence.</em></h2>
          <p className="sub-subtitle">Flexible monthly delivery. Pause or cancel anytime — no hassle.</p>
        </div>
        <div className="sub-plans">
          {plans.map((p, i) => (
            <div key={i} className={`sub-plan ${p.popular?'popular':''} ${sel===i?'selected':''}`} onClick={()=>setSel(i)}>
              {p.popular && <div className="pop-badge">Most Popular</div>}
              <div className="plan-top">
                <h3 className="plan-n">{p.name}</h3>
                <p className="plan-d">{p.desc}</p>
              </div>
              <div className="plan-price">
                <span className="price-num">{p.price}</span>
                <span className="price-mo">/ month</span>
              </div>
              <ul className="plan-feats">
                {p.feats.map((f,fi)=>(
                  <li key={fi}><span className="feat-check">✓</span>{f}</li>
                ))}
              </ul>
              <button className={`btn ${p.popular ? 'btn-pink' : 'sub-btn-ghost'} plan-btn`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
        <div className="sub-perks-row">
          {['📦 Delivered before her period','⚡ Skip or cancel anytime','🎁 Exclusive discounts','✨ Special gifts & surprises'].map((perk,i)=>(
            <div key={i} className="sub-perk">
              <span>{perk}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
