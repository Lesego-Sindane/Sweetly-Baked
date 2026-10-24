import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { ProductDetailClient } from "@/components/product-detail-client";
import { Button } from "@/components/ui/button";
import { fallbackProducts, getProduct, getProducts, getRelatedProducts } from "@/lib/products";

export function generateStaticParams() {
  return fallbackProducts.filter((product) => product.available).map((product) => ({ id: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return {};
  }

  const canonical = `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://crispycrumbs.co.za"}${product.seo.canonical}`;

  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: {
      canonical
    },
    keywords: product.seo.keywords,
    openGraph: {
      title: product.seo.ogTitle,
      description: product.seo.ogDescription,
      url: canonical,
      images: [{ url: product.seo.ogImage, width: 1200, height: 900 }],
      siteName: "Crispy Crumbs"
    },
    twitter: {
      card: "summary_large_image",
      title: product.seo.ogTitle,
      description: product.seo.ogDescription,
      images: [product.seo.ogImage]
    }
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) notFound();

  const products = getProducts();

  return (
    <div className="container-padded py-14">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-chocolate/70">
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-caramel">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-caramel">Shop</Link>
          <span>/</span>
          <span className="text-chocolate">{product.name}</span>
        </div>
      </nav>

      <ProductDetailClient product={product} />

      {product.ingredients && product.ingredients.length > 0 ? (
        <div className="mt-7">
          <h2 className="font-semibold">Ingredients</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.ingredients.map((item) => (
              <span key={item} className="rounded-full bg-beige px-3 py-1 text-sm">{item}</span>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-8 flex gap-3">
        <Button asChild variant="outline">
          <Link href="/shop">Back to Shop</Link>
        </Button>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-3xl font-bold">Related products</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {getRelatedProducts(product, products).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
