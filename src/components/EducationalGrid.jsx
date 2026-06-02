import React from 'react';
import './EducationalGrid.css';

const articles = [
  { emoji: '🩸', bg: '#F0E6FF', color: '#4B1A6F', title: 'What Is A Period?', cat: 'Basics', desc: 'A friendly guide to understanding periods, cycles, and what to expect.' },
  { emoji: '📆', bg: '#FFB5D0', color: '#9B1A4F', title: 'Signs Your First Period Is Coming', cat: 'Preparation', desc: 'Body changes and signals that tell you your first period is near.' },
  { emoji: '🛍️', bg: '#E8FBF8', color: '#1a7560', title: 'How To Choose the Right Pad', cat: 'Products', desc: 'Lite, Balance, Strong or Dream — find the perfect match for your flow.' },
  { emoji: '🌡️', bg: '#FFF0F5', color: '#9B1A4F', title: 'Managing Period Cramps', cat: 'Wellness', desc: 'Easy tips and BloomWarm heat patches to stay comfortable every day.' },
  { emoji: '👩‍👧', bg: '#FFF8EC', color: '#7A4A10', title: 'Talking to Your Daughter', cat: 'For Parents', desc: 'A practical guide to having an open, supportive first-period conversation.' },
  { emoji: '💡', bg: '#F0E6FF', color: '#4B1A6F', title: 'Period Myths Debunked', cat: 'Education', desc: "Let's bust the myths and talk real facts — because knowledge is power." },
];

export default function EducationalGrid() {
  return (
    <section className="edu section" id="resources">
      <div className="wrap">
        <div className="edu-head tc">
          <span className="tag tag-purple">📚 Learn & Grow</span>
          <h2 className="edu-title">
            Knowledge Is <em>Power</em>
          </h2>
          <p className="edu-sub">Articles, guides & expert advice — for her and for you.</p>
        </div>
        <div className="edu-grid">
          {articles.map((a, i) => (
            <article key={i} className="edu-card">
              <div className="edu-visual" style={{ background: a.bg }}>
                <span className="edu-emoji">{a.emoji}</span>
              </div>
              <div className="edu-body">
                <span className={`tag ${i % 3 === 0 ? 'tag-purple' : i % 3 === 1 ? 'tag-pink' : 'tag-mint'}`}>{a.cat}</span>
                <h3 className="edu-card-title" style={{ color: a.color }}>{a.title}</h3>
                <p className="edu-card-desc">{a.desc}</p>
                <a href="#" className="edu-link" style={{ color: a.color }}>
                  Read Article →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
