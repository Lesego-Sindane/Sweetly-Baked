import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { ProductDetailActions } from "@/components/product-detail-actions";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { getProduct, getRelatedProducts, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) notFound();

  return (
    <div className="container-padded py-14">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-lg border bg-warm shadow-soft">
            <Image src={product.image} alt={product.name} width={1200} height={1200} priority className="aspect-square w-full object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[product.image, "/images/hero-bakery.png", "/images/cookies.png"].map((image) => (
              <Image key={image} src={image} alt={`${product.name} gallery image`} width={400} height={300} className="aspect-[4/3] rounded-lg object-cover" />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-caramel">{product.category}</p>
          <h1 className="mt-3 font-display text-5xl font-bold">{product.name}</h1>
          <p className="mt-4 text-2xl font-bold">{formatPrice(product.price)}</p>
          <p className="mt-6 leading-8 text-chocolate/75">{product.longDescription}</p>
          <div className="mt-7">
            <h2 className="font-semibold">Ingredients</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.ingredients.map((item) => (
                <span key={item} className="rounded-full bg-beige px-3 py-1 text-sm">{item}</span>
              ))}
            </div>
          </div>
          <ProductDetailActions product={product} />
          <Button asChild variant="outline" className="mt-4">
            <Link href="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="font-display text-3xl font-bold">Related products</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {getRelatedProducts(product).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
