import type { Metadata } from "next";
import { MotionSection } from "@/components/motion-section";
import { ProductGrid } from "@/components/product-grid";
import { getProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop premium homemade bakery treats from SweetlyBaked."
};

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <MotionSection className="container-padded py-14">
      <div className="mb-9 max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-caramel">Shop</p>
        <h1 className="mt-3 font-display text-5xl font-bold">Premium bakery treats</h1>
        <p className="mt-4 leading-7 text-chocolate/70">Browse fresh bakes, filter by category, and add favourites to your cart.</p>
      </div>
      <ProductGrid products={products} />
    </MotionSection>
  );
}
