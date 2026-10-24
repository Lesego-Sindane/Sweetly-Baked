"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/types";

const collectionLabels = ["All Products", "Tea Time Delicacies", "Biscuits", "Mix and Match", "Scones", "Muffins", "Bread", "Sweet Treats"];
const collectionHeroImages: Record<string, { src: string; alt: string }> = {
  Biscuits: { src: "/images/Biscuits.jpg", alt: "Crispy Crumbs biscuits in a sharing bucket" },
  "Mix and Match": { src: "/images/Tea Time Box open.jpg", alt: "Open Crispy Crumbs Tea Time Box" }
};

export function ProductGrid({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [collection, setCollection] = useState("All Products");
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nextQuery = params.get("search") ?? "";
    const nextCollection = params.get("collection") ?? "";

    setQuery(nextQuery);
    if (nextCollection && collectionLabels.includes(nextCollection)) {
      setCollection(nextCollection);
    }
  }, []);

  const filtered = useMemo(() => {
    const next = products.filter((product) => {
      const matchesCollection = collection === "All Products" || product.collections.includes(collection) || product.category === collection;
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase()) || product.description.toLowerCase().includes(query.toLowerCase());
      return matchesCollection && matchesQuery;
    });

    if (sort === "price-asc") return [...next].sort((a, b) => (a.variants.find((variant) => variant.status === "confirmed")?.price ?? Number.MAX_SAFE_INTEGER) - (b.variants.find((variant) => variant.status === "confirmed")?.price ?? Number.MAX_SAFE_INTEGER));
    if (sort === "price-desc") return [...next].sort((a, b) => (b.variants.find((variant) => variant.status === "confirmed")?.price ?? 0) - (a.variants.find((variant) => variant.status === "confirmed")?.price ?? 0));
    return next;
  }, [collection, products, query, sort]);

  const groups = useMemo(() => {
    if (collection === "All Products") {
      return [{ title: "ALL PRODUCTS", items: filtered }];
    }

    return [{ title: collection.toUpperCase(), items: filtered }].filter((group) => group.items.length > 0);
  }, [collection, filtered]);
  const collectionHero = collectionHeroImages[collection];

  return (
    <div>
      <div className="grid gap-3 rounded-lg border bg-warm p-4 shadow-soft md:grid-cols-[1fr_auto_auto]">
        <label className="relative block">
          <span className="sr-only">Search products</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-chocolate/45" />
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search treats" className="pl-9" />
        </label>
        <select aria-label="Filter by collection" value={collection} onChange={(event) => setCollection(event.target.value)} className="focus-ring h-11 rounded-md border bg-warm px-3 text-sm">
          {collectionLabels.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        <select aria-label="Sort products" value={sort} onChange={(event) => setSort(event.target.value)} className="focus-ring h-11 rounded-md border bg-warm px-3 text-sm">
          <option value="featured">Featured</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
        </select>
      </div>

      <div className="mt-10 space-y-12">
        {collectionHero ? (
          <div className="relative mb-8 aspect-[16/7] overflow-hidden rounded-lg bg-beige sm:aspect-[21/7]">
            <Image src={collectionHero.src} alt={collectionHero.alt} fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-chocolate/60 via-chocolate/15 to-transparent" />
            <h2 className="absolute bottom-5 left-5 font-display text-3xl font-bold text-white sm:bottom-8 sm:left-8 sm:text-4xl">{collection}</h2>
          </div>
        ) : null}
        {groups.map((group) => (
          <section key={group.title}>
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-chocolate/10 pb-3">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-caramel">{group.title}</p>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-chocolate/45">{group.items.length} items</span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
