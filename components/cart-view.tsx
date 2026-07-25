"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/cart-context";
import { formatPrice } from "@/lib/utils";

export function CartView() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  return (
    <section className="container-padded min-h-[34rem] py-14">
      <h1 className="font-display text-5xl font-bold">Cart</h1>
      {items.length === 0 ? (
        <div className="mt-10 rounded-lg border bg-warm p-8 shadow-soft">
          <p className="text-chocolate/70">Your cart is empty.</p>
          <Button asChild className="mt-6">
            <Link href="/shop">Shop Treats</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_24rem]">
          <div className="grid gap-4">
            {items.map((item) => (
              <article key={item.id} className="grid gap-4 rounded-lg border bg-warm p-4 shadow-soft sm:grid-cols-[7rem_1fr_auto]">
                <Image src={item.image} alt={item.name} width={180} height={180} className="aspect-square rounded-md object-cover" />
                <div>
                  <h2 className="font-display text-2xl font-bold">{item.name}</h2>
                  <p className="mt-2 text-sm text-chocolate/70">{formatPrice(item.price)}</p>
                  <div className="mt-4 flex w-fit items-center rounded-md border">
                    <button className="focus-ring grid h-10 w-10 place-items-center" aria-label="Decrease quantity" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus className="h-4 w-4" /></button>
                    <span className="min-w-10 text-center">{item.quantity}</span>
                    <button className="focus-ring grid h-10 w-10 place-items-center" aria-label="Increase quantity" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus className="h-4 w-4" /></button>
                  </div>
                </div>
                <Button variant="ghost" size="sm" aria-label={`Remove ${item.name}`} onClick={() => removeItem(item.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </article>
            ))}
          </div>
          <aside className="h-fit rounded-lg border bg-warm p-6 shadow-soft">
            <div className="flex items-center justify-between text-lg font-bold">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-chocolate/65">Delivery is confirmed after your order is reviewed.</p>
            <Button asChild className="mt-6 w-full">
              <Link href="/checkout">Checkout</Link>
            </Button>
          </aside>
        </div>
      )}
    </section>
  );
}
