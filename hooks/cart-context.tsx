"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { CartItem, Product } from "@/types";

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return {
      items,
      count,
      subtotal,
      addItem(product, quantity = 1) {
        setItems((current) => {
          const existing = current.find((item) => item.id === product.id);
          if (existing) {
            return current.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
          }
          return [...current, { ...product, quantity }];
        });
      },
      updateQuantity(id, quantity) {
        setItems((current) => current.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item)));
      },
      removeItem(id) {
        setItems((current) => current.filter((item) => item.id !== id));
      },
      clearCart() {
        setItems([]);
      }
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
