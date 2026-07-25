import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { MotionSection } from "@/components/motion-section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SweetlyBaked for bakery orders and custom treats."
};

export default function ContactPage() {
  return (
    <MotionSection className="container-padded py-14">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-caramel">Contact</p>
          <h1 className="mt-3 font-display text-5xl font-bold">Let us bake for your next moment.</h1>
          <p className="mt-5 leading-8 text-chocolate/70">Ask about custom cakes, event boxes, delivery, or bulk orders. We will reply with availability and a quote.</p>
        </div>
        <ContactForm />
      </div>
    </MotionSection>
  );
}
