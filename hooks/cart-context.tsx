"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { CartItem, Product, ProductVariant } from "@/types";

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (product: Product, quantity?: number, variant?: ProductVariant) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce((total, item) => total + Number(item.unitPrice ?? item.price ?? 0) * item.quantity, 0);

    return {
      items,
      count,
      subtotal,
      addItem(product, quantity = 1, variant) {
        if (!variant || !variant.available || variant.status !== "confirmed" || typeof variant.price !== "number") {
          return;
        }

        const itemKey = `${product.id}:${variant.id}`;

        setItems((current) => {
          const existing = current.find((item) => item.cartKey === itemKey);
          if (existing) {
            return current.map((item) => (item.cartKey === itemKey ? { ...item, quantity: item.quantity + quantity, unitPrice: variant.price } : item));
          }

          return [
            ...current,
            {
              ...product,
              id: itemKey,
              cartKey: itemKey,
              productId: product.id,
              quantity,
              variantId: variant.id,
              flavour: variant.flavour,
              size: variant.size ?? variant.optionLabel,
              unitPrice: variant.price,
              priceStatus: variant.status,
              productSlug: product.slug,
              price: variant.price,
              image: product.image
            }
          ];
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
