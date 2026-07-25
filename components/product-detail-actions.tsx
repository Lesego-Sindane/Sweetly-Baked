"use client";

import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/cart-context";
import type { Product } from "@/types";

export function ProductDetailActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <div className="flex h-12 items-center rounded-md border bg-warm">
        <button aria-label="Decrease quantity" className="focus-ring grid h-12 w-12 place-items-center" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
          <Minus className="h-4 w-4" />
        </button>
        <span className="min-w-10 text-center font-semibold">{quantity}</span>
        <button aria-label="Increase quantity" className="focus-ring grid h-12 w-12 place-items-center" onClick={() => setQuantity((value) => value + 1)}>
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <Button size="lg" onClick={() => addItem(product, quantity)}>
        <ShoppingBag className="h-4 w-4" /> Add to Cart
      </Button>
    </div>
  );
}
