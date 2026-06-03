import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CheckoutModal from '../components/CheckoutModal';
import './CartPage.css';

export default function CartPage() {
  const { items, cartTotal, cartCount, removeFromCart, updateQty, clearCart } = useCart();
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  const shipping = cartTotal >= 35 || cartTotal === 0 ? 0 : 4.99;
  const total = cartTotal + shipping;

  const handleCheckoutClick = () => {
    setCheckoutModalOpen(true);
  };

  if (items.length === 0) {
    return (
      <div className="cart-page fade-up">
        <div className="wrap">
          <div className="cart-page-empty">
            <div className="cpe-icon">🛒</div>
            <h1 className="cpe-title">Your cart is empty</h1>
            <p className="cpe-sub">Looks like you haven't added anything yet. Browse our collection and find the perfect products for her!</p>
            <Link to="/shop" className="btn btn-pink">Browse Products</Link>
            <Link to="/" className="btn btn-ghost">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page fade-up">
      <div className="wrap">
        {/* Header */}
        <div className="cart-page-header">
          <h1 className="cart-page-title">Your Cart <span className="cp-count">({cartCount} {cartCount === 1 ? 'item' : 'items'})</span></h1>
          <button className="cart-clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <div className="cart-page-layout">
          {/* Items Column */}
          <div className="cart-page-items">
            {/* Free Shipping Bar */}
            {cartTotal < 35 && (
              <div className="cp-ship-bar">
                <p>
                  <span className="ship-emoji">🚚</span>
                  Add <strong>${(35 - cartTotal).toFixed(2)}</strong> more for <strong className="ship-free-text">FREE shipping!</strong>
                </p>
                <div className="cp-ship-track">
                  <div className="cp-ship-fill" style={{ width: `${Math.min(100, (cartTotal / 35) * 100)}%` }} />
                </div>
              </div>
            )}
            {cartTotal >= 35 && (
              <div className="cp-ship-bar ship-unlocked-bar">
                <p>🎉 You've unlocked <strong>FREE shipping!</strong></p>
              </div>
            )}

            {/* Cart Items */}
            <div className="cp-items-list">
              {items.map((item) => (
                <div key={item.cartKey} className="cp-item">
                  <div className="cp-item-img-wrap">
                    <img src={item.img} alt={item.name} className="cp-item-img" />
                  </div>

                  <div className="cp-item-details">
                    <div className="cp-item-top">
                      <div>
                        <h3 className="cp-item-name">{item.name}</h3>
                        {item.variant && <p className="cp-item-meta">{item.variant}</p>}
                        {item.size && <p className="cp-item-meta">Size: {item.size}</p>}
                        {item.color && <p className="cp-item-meta">Color: {item.color}</p>}
                        <p className="cp-item-unit-price">${item.price.toFixed(2)} each</p>
                      </div>
                      <button
                        className="cp-remove-btn"
                        onClick={() => removeFromCart(item.cartKey)}
                        aria-label={`Remove ${item.name}`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
                        </svg>
                      </button>
                    </div>

                    <div className="cp-item-bottom">
                      <div className="cp-qty-ctrl">
                        <button
                          className="cp-qty-btn"
                          onClick={() => updateQty(item.cartKey, item.qty - 1)}
                          aria-label="Decrease quantity"
                        >−</button>
                        <span className="cp-qty-num">{item.qty}</span>
                        <button
                          className="cp-qty-btn"
                          onClick={() => updateQty(item.cartKey, item.qty + 1)}
                          aria-label="Increase quantity"
                        >+</button>
                      </div>
                      <span className="cp-item-total">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cp-continue-row">
              <Link to="/shop" className="cp-continue-link">
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary Column */}
          <div className="cart-page-summary">
            <div className="cp-summary-card">
              <h2 className="cp-summary-title">Order Summary</h2>

              <div className="cp-summary-lines">
                <div className="cp-summary-line">
                  <span>Subtotal ({cartCount} items)</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="cp-summary-line">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'free-ship' : ''}>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="cp-summary-line">
                  <span>Tax</span>
                  <span className="cp-tax-note">Calculated at checkout</span>
                </div>
              </div>

              <div className="cp-summary-total">
                <span>Estimated Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>

              <button className="btn btn-pink cp-checkout-btn" onClick={handleCheckoutClick}>
                Proceed to Checkout
              </button>

              <div className="cp-security-badges">
                <span>🔒 Secure Checkout</span>
                <span>🍃 100% Organic</span>
                <span>📦 Easy Returns</span>
              </div>
            </div>

            {/* Trust Info */}
            <div className="cp-trust-note">
              <p>🌿 <strong>Free shipping</strong> on orders over $35</p>
              <p>✨ <strong>Easy 30-day returns</strong> — no questions asked</p>
              <p>🩺 <strong>Dermatologist approved</strong> & hypoallergenic</p>
            </div>
          </div>
        </div>
      </div>
      {/* Multi-Platform Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        mode="order"
        items={items}
        cartTotal={cartTotal}
        shipping={shipping}
      />
    </div>
  );
}
