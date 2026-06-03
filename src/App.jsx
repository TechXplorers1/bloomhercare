import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import AnnouncementBar from './components/AnnouncementBar';
import Navbar          from './components/Navbar';
import SiteFooter      from './components/SiteFooter';
import ScrollToTop     from './components/ScrollToTop';
import CartDrawer      from './components/CartDrawer';

import HomePage             from './pages/HomePage';
import ShopPage             from './pages/ShopPage';
import StarterKitPage       from './pages/StarterKitPage';
import PadsPage             from './pages/PadsPage';
import PantiesPage          from './pages/PantiesPage';
import HeatPadsPage         from './pages/HeatPadsPage';
import SubscriptionsPage    from './pages/SubscriptionsPage';
import FirstPeriodGuidePage from './pages/FirstPeriodGuidePage';
import ForParentsPage       from './pages/ForParentsPage';
import AboutPage            from './pages/AboutPage';
import CartPage             from './pages/CartPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />
      <CartDrawer />
      <main>
        <Routes>
          <Route path="/"                    element={<HomePage />} />
          <Route path="/shop"                element={<ShopPage />} />
          <Route path="/products/starter-kit"element={<StarterKitPage />} />
          <Route path="/products/pads"       element={<PadsPage />} />
          <Route path="/products/panties"    element={<PantiesPage />} />
          <Route path="/products/heat-pads"  element={<HeatPadsPage />} />
          <Route path="/subscriptions"       element={<SubscriptionsPage />} />
          <Route path="/first-period-guide"  element={<FirstPeriodGuidePage />} />
          <Route path="/for-parents"         element={<ForParentsPage />} />
          <Route path="/about"               element={<AboutPage />} />
          <Route path="/cart"                element={<CartPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
