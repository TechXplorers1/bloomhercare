import React from 'react';
import { ArrowRight, Info } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero gradient-bg section">
      <div className="container hero-container grid grid-cols-2 items-center gap-6">
        <div className="hero-content flex flex-col gap-3">
          <h1 className="hero-title">
            <span className="gradient-text">Growing Up</span> Beautifully.
          </h1>
          <p className="hero-subtitle">
            Everything a girl needs for her period journey.
          </p>
          <p className="hero-description">
            Smart. Safe. Supportive. Thoughtfully designed period care products that help girls feel confident, prepared, and comfortable every step of the way.
          </p>
          <div className="hero-actions flex gap-2">
            <a href="#starter-kit" className="btn btn-primary">
              Shop Starter Kit <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
            <a href="#resources" className="btn btn-secondary">
              <Info size={20} style={{ marginRight: '0.5rem' }} /> Learn About First Periods
            </a>
          </div>
        </div>
        <div className="hero-visual relative flex justify-center items-center">
          {/* We use CSS shapes and placeholders for the premium visual since we don't have actual assets */}
          <div className="hero-image-placeholder animate-float">
            <div className="placeholder-box box-1">Starter Kit</div>
            <div className="placeholder-box box-2">BloomWarm Heat Pad</div>
            <div className="placeholder-box box-3">Pads</div>
            <div className="placeholder-box box-4">Panties</div>
          </div>
          {/* Decorative floating elements */}
          <div className="deco deco-1 animate-float" style={{ animationDelay: '1s' }}>🌸</div>
          <div className="deco deco-2 animate-float" style={{ animationDelay: '2s' }}>💖</div>
          <div className="deco deco-3 animate-float" style={{ animationDelay: '0.5s' }}>✨</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
