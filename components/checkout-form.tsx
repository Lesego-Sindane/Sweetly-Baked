"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/hooks/cart-context";
import { formatPrice } from "@/lib/utils";
import { createOrder } from "@/services/orders";

export function CheckoutForm() {
  const { items, subtotal, clearCart } = useCart();
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function submit(formData: FormData) {
    startTransition(async () => {
      const result = await createOrder({
        customer_name: String(formData.get("customer_name") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        email: String(formData.get("email") ?? ""),
        address: String(formData.get("address") ?? ""),
        delivery_method: String(formData.get("delivery_method") ?? "Collection") as "Collection" | "Delivery",
        notes: String(formData.get("notes") ?? ""),
        items: items.map((item) => ({ product_id: item.id, quantity: item.quantity, price: item.price }))
      });
      setMessage(result.message);
      if (result.ok) clearCart();
    });
  }

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_24rem]">
      <form action={submit} className="grid gap-4 rounded-lg border bg-warm p-6 shadow-soft">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input name="customer_name" required placeholder="Customer name" aria-label="Customer name" />
          <Input name="phone" required placeholder="Phone number" aria-label="Phone number" />
        </div>
        <Input name="email" required type="email" placeholder="Email address" aria-label="Email address" />
        <Textarea name="address" required placeholder="Delivery address" aria-label="Delivery address" />
        <div className="grid gap-3 sm:grid-cols-2">
          {["Collection", "Delivery"].map((method) => (
            <label key={method} className="flex cursor-pointer items-center gap-3 rounded-md border bg-cream p-4 text-sm font-semibold">
              <input type="radio" name="delivery_method" value={method} defaultChecked={method === "Collection"} />
              {method}
            </label>
          ))}
        </div>
        <Textarea name="notes" placeholder="Order notes" aria-label="Order notes" />
        <Button type="submit" disabled={isPending || items.length === 0}>{isPending ? "Placing order..." : "Place Order"}</Button>
        {message ? <p className="rounded-md bg-beige p-3 text-sm font-semibold">{message}</p> : null}
      </form>
      <aside className="h-fit rounded-lg border bg-warm p-6 shadow-soft">
        <h2 className="font-display text-2xl font-bold">Order summary</h2>
        <div className="mt-5 grid gap-3 text-sm">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between gap-4">
              <span>{item.quantity} x {item.name}</span>
              <span>{formatPrice(item.quantity * item.price)}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 border-t pt-5 font-bold">
          <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
        </div>
      </aside>
    </div>
  );
}
