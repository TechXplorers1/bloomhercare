import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const shopItems = [
  { label: 'All Products',        to: '/shop' },
  { label: 'Starter Kit',         to: '/products/starter-kit' },
  { label: 'Go With Your Flow Pads', to: '/products/pads' },
  { label: 'Period Panties',      to: '/products/panties' },
  { label: 'BloomWarm Heat Pads', to: '/products/heat-pads' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [shopOpen,  setShopOpen]  = useState(false);
  const dropRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setShopOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setShopOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-inner">

        {/* ── LOGO ── */}
        <Link to="/" className="nav-logo">
          <span className="logo-bloom">🌸</span>
          <div className="logo-copy">
            <span className="logo-name">BloomHerCare</span>
            <span className="logo-tag">Growing Up Beautifully.</span>
          </div>
        </Link>

        {/* ── DESKTOP LINKS ── */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>

          {/* Shop dropdown */}
          <div className="nav-dd" ref={dropRef}>
            <button
              className={`nav-link nav-dd-trigger ${shopOpen ? 'active' : ''}`}
              onClick={() => setShopOpen(!shopOpen)}
              aria-expanded={shopOpen}
            >
              Shop
              <svg className={`dd-chevron ${shopOpen ? 'flipped' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            {shopOpen && (
              <div className="nav-dropdown">
                <div className="dropdown-head">Browse Products</div>
                {shopItems.map((item) => (
                  <Link key={item.to} to={item.to} className="dropdown-item" onClick={() => setShopOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/subscriptions"       className={({isActive}) => `nav-link ${isActive ? 'active-link' : ''}`}>Subscriptions</NavLink>
          <NavLink to="/first-period-guide"  className={({isActive}) => `nav-link ${isActive ? 'active-link' : ''}`}>First Period Guide</NavLink>
          <NavLink to="/for-parents"         className={({isActive}) => `nav-link ${isActive ? 'active-link' : ''}`}>For Parents</NavLink>
          <NavLink to="/about"               className={({isActive}) => `nav-link ${isActive ? 'active-link' : ''}`}>About Us</NavLink>
        </div>

        {/* ── ACTIONS ── */}
        <div className="nav-actions">
          <Link to="/products/starter-kit" className="btn btn-pink nav-shop-btn">Shop Now</Link>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
