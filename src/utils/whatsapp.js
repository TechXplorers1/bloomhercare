/**
 * whatsapp.js → contacts.js — Utility to build share/contact links
 * WhatsApp : +91 9618108329
 * Email    : chaveenreddy11@gmail.com
 * Instagram: @chaveen_reddy11
 */

export const BUSINESS = {
  whatsapp: '919618108329',
  email: 'chaveenreddy11@gmail.com',
  instagram: 'sapare_sandeep',
};

/** Opens WhatsApp with a pre-filled message */
export function openWhatsApp(message) {
  const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/** Opens default mail client with a pre-filled subject + body */
export function openEmail(subject, body) {
  const url = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/** Opens Instagram DM (web) — user pastes message manually */
export function openInstagram() {
  window.open(`https://ig.me/m/${BUSINESS.instagram}`, '_blank', 'noopener,noreferrer');
}

/** Copies text to clipboard, returns a Promise<boolean> */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  }
}

// ─── MESSAGE BUILDERS ──────────────────────────────────────────────────────

/**
 * Cart checkout message — from customer to business.
 */
export function buildOrderMessage(items, cartTotal, shipping) {
  const total = cartTotal + shipping;
  const shippingText = shipping === 0 ? 'FREE 🎉' : `$${shipping.toFixed(2)}`;

  const lines = items.map((item, i) => {
    let variantLine = '';
    if (item.variant) variantLine += `\n     • Type: ${item.variant}`;
    if (item.size) variantLine += `\n     • Size: ${item.size}`;
    if (item.color) variantLine += `\n     • Color: ${item.color}`;
    const lineTotal = (item.price * item.qty).toFixed(2);
    return `${i + 1}. ${item.name}${variantLine}\n     • Qty: ${item.qty}  |  $${item.price.toFixed(2)} each\n     • Subtotal: $${lineTotal}`;
  });

  return `Hi BloomHerCare! 🌸 I'd like to place an order.

My Order Details:
──────────────────────
${lines.join('\n\n')}

──────────────────────
Order Summary:
  • Items Subtotal : $${cartTotal.toFixed(2)}
  • Shipping       : ${shippingText}
  • Total          : $${total.toFixed(2)}

──────────────────────
Could you please confirm my order and let me know the payment and delivery details? Thank you! 💜`;
}

/** Markdown-bold version for WhatsApp */
export function buildOrderMessageWA(items, cartTotal, shipping) {
  const total = cartTotal + shipping;
  const shippingText = shipping === 0 ? 'FREE 🎉' : `$${shipping.toFixed(2)}`;

  const lines = items.map((item, i) => {
    let variantLine = '';
    if (item.variant) variantLine += `\n     • Type: ${item.variant}`;
    if (item.size) variantLine += `\n     • Size: ${item.size}`;
    if (item.color) variantLine += `\n     • Color: ${item.color}`;
    const lineTotal = (item.price * item.qty).toFixed(2);
    return `${i + 1}. *${item.name}*${variantLine}\n     • Qty: ${item.qty}  |  $${item.price.toFixed(2)} each\n     • Subtotal: $${lineTotal}`;
  });

  return `Hi BloomHerCare! 🌸 I'd like to place an order.

🛍️ *My Order Details:*
━━━━━━━━━━━━━━━━━━━━
${lines.join('\n\n')}

━━━━━━━━━━━━━━━━━━━━
💰 *Order Summary:*
   • Items Subtotal : $${cartTotal.toFixed(2)}
   • Shipping       : ${shippingText}
   • *Total         : $${total.toFixed(2)}*

━━━━━━━━━━━━━━━━━━━━
Could you please confirm my order and let me know the payment and delivery details? Thank you! 💜`;
}

/**
 * Subscription enquiry — from customer to business.
 */
export function buildSubscriptionMessage(planName, planPrice) {
  return `Hi BloomHerCare! 🌸 I'm interested in subscribing to your service.

Plan I'd like: ${planName}
Plan Price: ${planPrice}

──────────────────────
Could you please guide me through the next steps — payment, shipping address, and delivery details?

Thank you! 💜`;
}

/** WhatsApp markdown version */
export function buildSubscriptionMessageWA(planName, planPrice) {
  return `Hi BloomHerCare! 🌸 I'm interested in subscribing to your service.

📦 *Plan I'd like:* ${planName}
💰 *Plan Price:* ${planPrice}

━━━━━━━━━━━━━━━━━━━━
Could you please guide me through the next steps — payment, shipping address, and delivery details?

Thank you! 💜`;
}
