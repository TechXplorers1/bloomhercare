import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';

// ─── Context ──────────────────────────────────────────────────────────────────
const CartContext = createContext(null);

// ─── Reducer ──────────────────────────────────────────────────────────────────
function cartReducer(state, action) {
  switch (action.type) {

    case 'ADD': {
      const { item } = action;
      const key = item.cartKey; // unique key per variant combo
      const existing = state.find(i => i.cartKey === key);
      if (existing) {
        return state.map(i =>
          i.cartKey === key ? { ...i, qty: i.qty + item.qty } : i
        );
      }
      return [...state, item];
    }

    case 'UPDATE_QTY': {
      const { cartKey, qty } = action;
      if (qty < 1) return state.filter(i => i.cartKey !== cartKey);
      return state.map(i => i.cartKey === cartKey ? { ...i, qty } : i);
    }

    case 'REMOVE':
      return state.filter(i => i.cartKey !== action.cartKey);

    case 'CLEAR':
      return [];

    case 'INIT':
      return action.payload;

    default:
      return state;
  }
}

// ─── Provider ─────────────────────────────────────────────────────────────────
export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('bhc_cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          dispatch({ type: 'INIT', payload: parsed });
        }
      }
    } catch (e) {
      console.warn('Cart restore failed:', e);
    }
    setInitialized(true);
  }, []);

  // Persist to localStorage whenever items change (after init)
  useEffect(() => {
    if (!initialized) return;
    localStorage.setItem('bhc_cart', JSON.stringify(items));
  }, [items, initialized]);

  // ── Actions ──
  const addToCart = (item) => {
    dispatch({ type: 'ADD', item });
    setDrawerOpen(true);
  };

  const removeFromCart = (cartKey) => {
    dispatch({ type: 'REMOVE', cartKey });
  };

  const updateQty = (cartKey, qty) => {
    dispatch({ type: 'UPDATE_QTY', cartKey, qty });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR' });
  };

  // ── Computed ──
  const cartCount = items.reduce((sum, i) => sum + i.qty, 0);
  const cartTotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{
      items,
      cartCount,
      cartTotal,
      drawerOpen,
      setDrawerOpen,
      addToCart,
      removeFromCart,
      updateQty,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within <CartProvider>');
  return ctx;
}
