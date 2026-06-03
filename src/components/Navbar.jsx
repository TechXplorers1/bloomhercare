import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
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
  const { cartCount, setDrawerOpen } = useCart();

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

          {/* Cart Icon */}
          <button
            id="navbar-cart-btn"
            className="nav-cart-btn"
            onClick={() => setDrawerOpen(true)}
            aria-label={`Open cart, ${cartCount} item${cartCount !== 1 ? 's' : ''}`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span className="nav-cart-badge" key={cartCount}>
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </button>

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
