import React from 'react';
import { BookOpen } from 'lucide-react';
import './ResourceHub.css';

const ResourceHub = () => {
  const articles = [
    { title: 'What Is A Period?', category: 'Basics' },
    { title: 'Signs Your First Period Is Coming', category: 'Preparation' },
    { title: 'How To Choose The Right Pad', category: 'Products' },
    { title: 'Managing Period Cramps', category: 'Wellness' },
    { title: 'Talking To Your Daughter About Periods', category: 'For Parents' },
    { title: 'Period Myths Debunked', category: 'Education' }
  ];

  return (
    <section id="resources" className="section bg-white">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '3rem' }}>Resource Center</h2>
          <p style={{ fontSize: '1.25rem', color: '#555', marginTop: '1rem' }}>
            Empowering education for girls and parents.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {articles.map((article, idx) => (
            <div key={idx} className="article-card card">
              <div className="article-visual"></div>
              <div className="article-content">
                <span className="tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                  {article.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{article.title}</h3>
                <a href="#" className="read-more">
                  Read Article <BookOpen size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceHub;
