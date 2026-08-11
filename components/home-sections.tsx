import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/motion-section";
import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/lib/products";

export async function FeaturedProducts() {
  const products = await getProducts();

  return (
    <MotionSection className="container-padded py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-bold text-chocolate">Our Treats</h2>
        <p className="mt-3 text-chocolate/70">Something sweet for every craving.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button asChild>
          <Link href="/shop">View All Products <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>
    </MotionSection>
  );
}

export function AboutPreview() {
  return (
    <MotionSection className="bg-warm py-16">
      <div className="container-padded grid items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg shadow-soft">
          <Image src="/images/cakes.png" alt="Layered SweetlyBaked cake" width={1200} height={900} className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-caramel">Our Story</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-chocolate">Our passion is creating baked goods that bring people together.</h2>
          <p className="mt-5 leading-8 text-chocolate/75">SweetlyBaked blends careful technique with the comfort of homemade baking. Every batch is prepared with quality ingredients, slow attention, and a little ceremony.</p>
          <div className="mt-6 grid gap-3 text-sm font-semibold text-chocolate/80">
            {["Small-batch freshness", "Custom celebration orders", "Collection and local delivery"].map((item) => (
              <span key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-caramel" /> {item}</span>
            ))}
          </div>
          <Button asChild className="mt-8">
            <Link href="/about">About Us</Link>
          </Button>
        </div>
      </div>
    </MotionSection>
  );
}

export function Testimonials() {
  const quotes = [
    "The brownies tasted like a private little celebration.",
    "Beautiful packaging, rich flavour, and everything arrived fresh.",
    "The cake was elegant, moist, and exactly what we wanted."
  ];

  return (
    <MotionSection className="container-padded py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {quotes.map((quote) => (
          <article key={quote} className="rounded-lg border bg-warm p-6 shadow-soft">
            <p className="font-display text-2xl leading-9 text-chocolate">"{quote}"</p>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-caramel">SweetlyBaked Customer</p>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}

export function FAQNewsletter() {
  return (
    <MotionSection className="bg-beige/70 py-16">
      <div className="container-padded grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold">FAQ</h2>
          <div className="mt-6 grid gap-4">
            {[
              ["How far ahead should I order?", "Two days is ideal for standard treats. Cakes may need one week."],
              ["Do you deliver?", "Yes. Choose collection or delivery at checkout and we will confirm timing."],
              ["Can I request custom flavours?", "Yes. Add notes at checkout and we will follow up."]
            ].map(([question, answer]) => (
              <div key={question} className="rounded-lg border bg-warm p-5 shadow-soft">
                <h3 className="font-semibold">{question}</h3>
                <p className="mt-2 text-sm leading-6 text-chocolate/70">{answer}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-chocolate p-8 text-cream shadow-lift">
          <h2 className="font-display text-4xl font-bold">Fresh drops, early tastings.</h2>
          <p className="mt-4 text-cream/75">Join the newsletter for seasonal boxes and limited bakes.</p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input aria-label="Email address" placeholder="Email address" className="focus-ring h-12 flex-1 rounded-md border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/60" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </MotionSection>
  );
}
