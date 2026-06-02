import React from 'react';
import './ForParentsPage.css';

const ageTips = [
  {
    age: 'Ages 8 - 10',
    title: 'Planting the Seeds Early',
    desc: 'Don’t wait for the first period to arrive! Focus on normal body changes, explain what a period is in simple terms, and make sure she knows she can ask you anything. Normalizing it early takes away the fear.',
    starters: [
      '“Have you noticed some of your friends at school talking about body changes or growing up?”',
      '“I wanted to share this cute starter pouch with you so we can talk about what happens when girls grow up.”'
    ]
  },
  {
    age: 'Ages 11 - 12',
    title: 'The Preparation Phase',
    desc: 'This is when most girls get their period. Talk about how to use a pad, pack a backpack emergency kit together, and explain vaginal discharge. Focus on practical preparation.',
    starters: [
      '“Let’s put together a small pouch for your backpack with a pad and spare underwear, just in case you ever need it at school.”',
      '“Did you know that vaginal discharge is like a friendly signal from your body that it’s growing up beautifully?”'
    ]
  },
  {
    age: 'When It Arrives',
    title: 'Celebrate & Support',
    desc: 'Make it a positive milestone, not something to be embarrassed about. Offer comfort (BloomWarm cramp patches, warm tea), reassure her that she is safe and healthy, and check in on how she feels.',
    starters: [
      '“I am so proud of you. Your body is doing exactly what it is designed to do. Let’s make some warm tea and get cozy.”',
      '“How are you feeling? Remember, I am always here to help you get whatever you need.”'
    ]
  }
];

const downloads = [
  { title: 'The Parent First Period Booklet', desc: 'A 12-page guide written by pediatricians and educators on navigating puberty conversations.', format: 'PDF (2.4 MB)' },
  { title: 'School Emergency Prep Sheet', desc: 'A quick-reference sheet she can keep in her bag with steps on what to do at school.', format: 'PDF (1.1 MB)' },
  { title: 'Puberty Sizing & Comfort Guide', desc: 'Tips on finding the right fit for period underwear and choosing absorbencies.', format: 'PDF (1.8 MB)' }
];

export default function ForParentsPage() {
  return (
    <div className="parents-page fade-up">
      {/* Editorial Hero */}
      <div className="parent-hero">
        <div className="wrap">
          <span className="tag tag-purple">👩‍👧 Parent Portal</span>
          <h1 className="parent-title">You Are Her Guide. <em>We Are Yours.</em></h1>
          <p className="parent-subtitle">
            Open, supportive conversations start here. We provide the tools, advice, and checklists to help you support your daughter with complete confidence.
          </p>
        </div>
      </div>

      {/* Checklist Grid */}
      <div className="wrap prep-checklist-sec">
        <div className="checklist-layout">
          <div className="checklist-copy">
            <span className="tag tag-pink">📋 Checklist</span>
            <h2>First Period Prep Checklist</h2>
            <p>Simple steps you can take to make sure she feels fully supported, prepared, and worry-free.</p>
            <ul className="parent-checklist">
              <li>
                <span className="check-bullet">✓</span>
                <div>
                  <strong>Purchase a Kit in Advance:</strong> Having the box in her closet before she needs it eliminates emergency pharmacy runs and panic.
                </div>
              </li>
              <li>
                <span className="check-bullet">✓</span>
                <div>
                  <strong>Talk About it Early:</strong> Explain that periods are normal, healthy, and a beautiful sign of growing up.
                </div>
              </li>
              <li>
                <span className="check-bullet">✓</span>
                <div>
                  <strong>Pack a School Emergency Bag:</strong> Put a Lite pad and a spare panty in a small cosmetic bag in her school backpack.
                </div>
              </li>
              <li>
                <span className="check-bullet">✓</span>
                <div>
                  <strong>Normalize the Conversation:</strong> Ensure she knows she can come to you (or another trusted adult) without any embarrassment.
                </div>
              </li>
            </ul>
          </div>
          <div className="checklist-visual float">
            <div className="interactive-checklist-box">
              <h3>🌸 First Period Box</h3>
              <ul>
                <li><span>✔</span> Go With Your Flow Kit</li>
                <li><span>✔</span> Prepared Pouch for School</li>
                <li><span>✔</span> Open &amp; Loving Chat</li>
                <li><span>✔</span> Reassurance &amp; Warmth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Age Guide & Conversation Starters */}
      <div className="age-guide-sec">
        <div className="wrap">
          <h2 className="section-title text-center">Conversation <em>Starters by Age</em></h2>
          <div className="age-tips-grid">
            {ageTips.map((tip, i) => (
              <div key={i} className="age-tip-card">
                <span className="age-badge">{tip.age}</span>
                <h3>{tip.title}</h3>
                <p className="age-tip-desc">{tip.desc}</p>
                <div className="starters-box">
                  <h4>Try saying:</h4>
                  {tip.starters.map((s, idx) => (
                    <p key={idx} className="starter-quote"><em>{s}</em></p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Downloads Section */}
      <div className="wrap downloads-sec">
        <h2 className="section-title text-center">Downloadable <em>Resources</em></h2>
        <div className="downloads-grid">
          {downloads.map((d, i) => (
            <div key={i} className="download-card">
              <span className="dl-icon">📄</span>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
              <div className="dl-footer">
                <span className="dl-format">{d.format}</span>
                <button className="btn btn-purple btn-sm" onClick={() => alert('Download starting in background...')}>Download Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
