"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/cart-context";
import { cn, formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { count, items, subtotal, removeItem } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);
  const drawer = (
    <div className={cn("fixed inset-0 z-[80] bg-chocolate/35 backdrop-blur-sm transition-opacity", open ? "opacity-100" : "pointer-events-none opacity-0")}>
      <aside className={cn("ml-auto h-full w-[24rem] max-w-[90vw] overflow-y-auto bg-cream p-6 shadow-lift transition-transform", open ? "translate-x-0" : "translate-x-full")}>
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl font-bold">Cart</h2>
          <Button variant="ghost" size="sm" aria-label="Close cart" onClick={() => setOpen(false)}><X className="h-5 w-5" /></Button>
        </div>
        <div className="mt-6 grid gap-4">
          {items.length === 0 ? <p className="text-sm text-chocolate/65">Your cart is empty.</p> : null}
          {items.map((item) => (
            <article key={item.id} className="grid grid-cols-[4rem_1fr] gap-3 rounded-lg border bg-warm p-3">
              <Image src={item.image} alt={item.name} width={96} height={96} className="aspect-square rounded-md object-cover" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm text-chocolate/65">{item.quantity} x {formatPrice(item.price)}</p>
                <button className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-caramel" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 border-t pt-5">
          <div className="flex justify-between font-bold"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <Button asChild className="mt-5 w-full" onClick={() => setOpen(false)}>
            <Link href="/checkout">Checkout</Link>
          </Button>
          <Button asChild variant="outline" className="mt-3 w-full" onClick={() => setOpen(false)}>
            <Link href="/cart">View Cart</Link>
          </Button>
        </div>
      </aside>
    </div>
  );

  return (
    <>
      <Button variant="ghost" size="sm" aria-label={`Cart with ${count} items`} className="relative" onClick={() => setOpen(true)}>
        <ShoppingBag className="h-5 w-5" />
        {count > 0 ? <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-caramel px-1 text-[0.65rem] text-white">{count}</span> : null}
      </Button>
      {mounted ? createPortal(drawer, document.body) : null}
    </>
  );
}
