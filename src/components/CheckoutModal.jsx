import React, { useState, useEffect } from 'react';
import {
  openWhatsApp,
  openEmail,
  openInstagram,
  copyToClipboard,
  buildOrderMessageWA,
  buildOrderMessage,
  buildSubscriptionMessageWA,
  buildSubscriptionMessage,
  BUSINESS,
} from '../utils/whatsapp';
import './CheckoutModal.css';

/**
 * CheckoutModal — shows multiple platform options.
 * Props:
 *   isOpen       : bool
 *   onClose      : fn
 *   mode         : 'order' | 'subscription'
 *   // for order mode:
 *   items        : array
 *   cartTotal    : number
 *   shipping     : number
 *   // for subscription mode:
 *   planName     : string
 *   planPrice    : string
 */
export default function CheckoutModal({
  isOpen, onClose,
  mode = 'order',
  items = [], cartTotal = 0, shipping = 0,
  planName = '', planPrice = '',
}) {
  const [copied, setCopied] = useState(false);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!isOpen) return null;

  // ── Build messages ──────────────────────────────────────────────────────
  const waMsg     = mode === 'order'
    ? buildOrderMessageWA(items, cartTotal, shipping)
    : buildSubscriptionMessageWA(planName, planPrice);

  const plainMsg  = mode === 'order'
    ? buildOrderMessage(items, cartTotal, shipping)
    : buildSubscriptionMessage(planName, planPrice);

  const emailSubject = mode === 'order'
    ? 'BloomHerCare Order Request'
    : `BloomHerCare Subscription Enquiry — ${planName}`;

  // ── Handlers ────────────────────────────────────────────────────────────
  const handleWhatsApp = () => { openWhatsApp(waMsg); onClose(); };

  const handleEmail = () => { openEmail(emailSubject, plainMsg); onClose(); };

  const handleInstagram = () => {
    // Open synchronously to prevent popup blocker, then copy in background
    openInstagram();
    copyToClipboard(plainMsg);
    onClose();
  };

  const handleCopy = async () => {
    const ok = await copyToClipboard(plainMsg);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const total = cartTotal + shipping;

  return (
    <>
      {/* Backdrop */}
      <div className="cm-backdrop" onClick={onClose} />

      {/* Modal */}
      <div className="cm-panel" role="dialog" aria-modal="true" aria-label="Choose checkout method">
        {/* Header */}
        <div className="cm-header">
          <div className="cm-header-left">
            <span className="cm-emoji">🌸</span>
            <div>
              <h2 className="cm-title">
                {mode === 'order' ? 'Complete Your Order' : 'Subscribe to Plan'}
              </h2>
              <p className="cm-subtitle">
                {mode === 'order'
                  ? `Total: $${total.toFixed(2)} — Choose how to send your order`
                  : `${planName} · ${planPrice} — Choose how to enquire`}
              </p>
            </div>
          </div>
          <button className="cm-close" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Platform Options */}
        <div className="cm-options">

          {/* WhatsApp */}
          <button className="cm-option cm-option-wa" onClick={handleWhatsApp} id="checkout-whatsapp-btn">
            <div className="cm-option-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.527 5.854L0 24l6.336-1.49A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.044-1.394l-.361-.214-3.762.885.949-3.617-.235-.375A9.818 9.818 0 1112 21.818z"/>
              </svg>
            </div>
            <div className="cm-option-text">
              <span className="cm-option-name">WhatsApp</span>
              <span className="cm-option-desc">Send order directly via chat</span>
            </div>
            <div className="cm-option-badge cm-badge-green">Fastest</div>
            <svg className="cm-option-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>

          {/* Email */}
          <button className="cm-option cm-option-email" onClick={handleEmail} id="checkout-email-btn">
            <div className="cm-option-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="cm-option-text">
              <span className="cm-option-name">Email</span>
              <span className="cm-option-desc">{BUSINESS.email}</span>
            </div>
            <svg className="cm-option-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>

          {/* Instagram DM */}
          <button className="cm-option cm-option-ig" onClick={handleInstagram} id="checkout-instagram-btn">
            <div className="cm-option-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>
            <div className="cm-option-text">
              <span className="cm-option-name">Instagram DM</span>
              <span className="cm-option-desc">@{BUSINESS.instagram} · Message copied automatically</span>
            </div>
            <svg className="cm-option-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>

          {/* Copy to Clipboard */}
          <button className={`cm-option cm-option-copy ${copied ? 'copied' : ''}`} onClick={handleCopy} id="checkout-copy-btn">
            <div className="cm-option-icon">
              {copied ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="28" height="28">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                </svg>
              )}
            </div>
            <div className="cm-option-text">
              <span className="cm-option-name">{copied ? 'Copied!' : 'Copy Order Details'}</span>
              <span className="cm-option-desc">{copied ? 'Paste it anywhere you like' : 'Copy text to paste anywhere'}</span>
            </div>
            {copied && <div className="cm-option-badge cm-badge-green">✓</div>}
            {!copied && (
              <svg className="cm-option-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            )}
          </button>
        </div>

        {/* Footer note */}
        <p className="cm-footer-note">
          💬 We typically respond within <strong>1–2 hours</strong> during business hours (9 AM – 7 PM IST)
        </p>
      </div>
    </>
  );
}
