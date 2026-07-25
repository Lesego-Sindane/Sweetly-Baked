import type { Metadata } from "next";
import { CheckoutForm } from "@/components/checkout-form";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Place a SweetlyBaked order for collection or delivery."
};

export default function CheckoutPage() {
  return (
    <section className="container-padded py-14">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-caramel">Checkout</p>
        <h1 className="mt-3 font-display text-5xl font-bold">Place your order</h1>
      </div>
      <CheckoutForm />
    </section>
  );
}
