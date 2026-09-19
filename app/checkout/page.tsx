import type { Metadata } from "next";
import { CheckoutForm } from "@/components/checkout-form";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Place a Crispy Crumbs order for collection or delivery."
};

export default function CheckoutPage() {
  return (
    <section className="container-padded py-14">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-caramel">Checkout</p>
        <h1 className="mt-3 font-display text-5xl font-bold">Place your order</h1>
        <div className="mt-6 rounded-lg border border-caramel/30 bg-beige p-4 text-sm leading-6 text-chocolate shadow-soft">
          Checkout will be completed via WhatsApp for now. We are so excited to fulfill your crispy and crumbly wishes!
        </div>
      </div>
      <CheckoutForm />
    </section>
  );
}
