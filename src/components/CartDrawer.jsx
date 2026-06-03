import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CheckoutModal from './CheckoutModal';
import './CartDrawer.css';

export default function CartDrawer() {
  const { items, cartTotal, cartCount, drawerOpen, setDrawerOpen, removeFromCart, updateQty } = useCart();
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const freeShippingThreshold = 35;
  const remaining = Math.max(0, freeShippingThreshold - cartTotal);
  const progressPct = Math.min(100, (cartTotal / freeShippingThreshold) * 100);
  const shipping = cartTotal >= 35 ? 0 : 4.99;

  const handleCheckoutClick = () => {
    setCheckoutModalOpen(true);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cart-backdrop ${drawerOpen ? 'visible' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside className={`cart-drawer ${drawerOpen ? 'open' : ''}`} aria-label="Shopping Cart">
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="cart-drawer-title">
            <span className="cart-icon-emoji">🛒</span>
            <h2>Your Cart</h2>
            {cartCount > 0 && <span className="cart-header-badge">{cartCount}</span>}
          </div>
          <button className="cart-close-btn" onClick={() => setDrawerOpen(false)} aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Free Shipping Progress */}
        {cartCount > 0 && (
          <div className="cart-shipping-progress">
            {remaining > 0 ? (
              <p className="ship-msg">
                Add <strong>${remaining.toFixed(2)}</strong> more for <span className="ship-free">FREE shipping</span> 🎉
              </p>
            ) : (
              <p className="ship-msg ship-unlocked">🎊 You've unlocked <strong>FREE shipping!</strong></p>
            )}
            <div className="ship-bar-track">
              <div className="ship-bar-fill" style={{ width: `${progressPct}%` }} />
            </div>
          </div>
        )}

        {/* Items or Empty State */}
        <div className="cart-items-area">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🌸</div>
              <h3>Your cart is empty</h3>
              <p>Add some products to get started on your self-care journey!</p>
              <Link
                to="/shop"
                className="btn btn-pink"
                onClick={() => setDrawerOpen(false)}
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <ul className="cart-item-list">
              {items.map((item) => (
                <li key={item.cartKey} className="cart-item">
                  <div className="cart-item-img-wrap">
                    <img src={item.img} alt={item.name} className="cart-item-img" />
                  </div>
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    {item.variant && <p className="cart-item-variant">{item.variant}</p>}
                    {item.size && <p className="cart-item-variant">Size: {item.size}</p>}
                    {item.color && <p className="cart-item-variant">Color: {item.color}</p>}
                    <div className="cart-item-row">
                      <div className="cart-qty-ctrl">
                        <button
                          className="cart-qty-btn"
                          onClick={() => updateQty(item.cartKey, item.qty - 1)}
                          aria-label="Decrease quantity"
                        >−</button>
                        <span className="cart-qty-num">{item.qty}</span>
                        <button
                          className="cart-qty-btn"
                          onClick={() => updateQty(item.cartKey, item.qty + 1)}
                          aria-label="Increase quantity"
                        >+</button>
                      </div>
                      <span className="cart-item-price">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.cartKey)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-subtotal-row">
              <span>Subtotal</span>
              <strong>${cartTotal.toFixed(2)}</strong>
            </div>
            <p className="cart-footer-note">Taxes and shipping calculated at checkout</p>
            <Link
              to="/cart"
              className="btn btn-purple cart-view-btn"
              onClick={() => setDrawerOpen(false)}
            >
              View Cart
            </Link>
            <button className="btn btn-pink cart-checkout-btn" onClick={handleCheckoutClick}>
              Checkout
            </button>
          </div>
        )}
      </aside>

      {/* Multi-Platform Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        mode="order"
        items={items}
        cartTotal={cartTotal}
        shipping={shipping}
      />
    </>
  );
}
