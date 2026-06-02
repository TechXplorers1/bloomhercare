import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustBanner from '../components/TrustBanner';
import ShopByCategory from '../components/ShopByCategory';
import StarterKitFeature from '../components/StarterKitFeature';
import SubscriptionSection from '../components/SubscriptionSection';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <TrustBanner />
      <ShopByCategory />
      <StarterKitFeature />
      <SubscriptionSection />
      <Testimonials />
      <div id="faq">
        <FAQSection />
      </div>
    </div>
  );
}
