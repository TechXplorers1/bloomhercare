import React from 'react';
import { ArrowRight } from 'lucide-react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const categories = [
    {
      title: 'Go With Your Flow Pads',
      description: 'Protection for every flow and every day.',
      variants: ['Lite', 'Balance', 'Strong', 'Dream'],
      cta: 'Explore Pads',
      color: 'var(--soft-lavender)'
    },
    {
      title: 'BloomHerCare Period Panties',
      description: 'Comfortable leak-proof protection designed for active girls.',
      variants: ['Light', 'Medium', 'Heavy', 'Overnight'],
      cta: 'Explore Panties',
      color: 'var(--pink-accent)'
    },
    {
      title: 'BloomWarm Heat Pads',
      description: 'Soothing warmth for cramps and all-day comfort.',
      variants: ['Air-activated', 'Up to 8 hours', 'Targeted relief'],
      cta: 'Explore Heat Pads',
      color: 'var(--mint-accent)'
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
          Shop By Category
        </h2>
        
        <div className="grid grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="product-category-card">
              <div className="product-visual-placeholder" style={{ backgroundColor: category.color }}>
                {/* Image Placeholder */}
              </div>
              <div className="product-category-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div className="variants-tags">
                  {category.variants.map((variant, i) => (
                    <span key={i} className="tag">{variant}</span>
                  ))}
                </div>
                <button className="btn btn-outline" style={{ width: '100%', marginTop: '1rem' }}>
                  {category.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
