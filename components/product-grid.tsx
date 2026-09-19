"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/types";

export function ProductGrid({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const normalizedProducts = useMemo(
    () =>
      products.map((product) => ({
        ...product,
        category: /apron/i.test(product.name) || product.category === "Aprons" ? "Aprons" : "Baked Goods"
      })),
    [products]
  );

  const categories = useMemo(() => ["All", "Baked Goods", "Aprons"], []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nextQuery = params.get("search") ?? "";
    const nextCategory = params.get("category") ?? "";

    setQuery(nextQuery);

    if (nextCategory === "aprons") {
      setCategory("Aprons");
    } else if (nextCategory === "baked-goods" || nextCategory === "baked goods") {
      setCategory("Baked Goods");
    }
  }, []);

  const filtered = useMemo(() => {
    const next = normalizedProducts
      .filter((product) => category === "All" || product.category === category)
      .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));

    if (sort === "price-asc") return [...next].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") return [...next].sort((a, b) => b.price - a.price);
    return next;
  }, [category, normalizedProducts, query, sort]);

  const groupedProducts = useMemo(
    () => [
      { title: "BAKED GOODS", items: filtered.filter((product) => product.category === "Baked Goods") },
      { title: "APRONS", items: filtered.filter((product) => product.category === "Aprons") }
    ],
    [filtered]
  );

  return (
    <div>
      <div className="grid gap-3 rounded-lg border bg-warm p-4 shadow-soft md:grid-cols-[1fr_auto_auto]">
        <label className="relative block">
          <span className="sr-only">Search products</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-chocolate/45" />
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search treats" className="pl-9" />
        </label>
        <select aria-label="Filter by category" value={category} onChange={(event) => setCategory(event.target.value)} className="focus-ring h-11 rounded-md border bg-warm px-3 text-sm">
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select aria-label="Sort products" value={sort} onChange={(event) => setSort(event.target.value)} className="focus-ring h-11 rounded-md border bg-warm px-3 text-sm">
          <option value="featured">Featured</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
        </select>
      </div>

      <div className="mt-10 space-y-12">
        {groupedProducts.map((group) => {
          if (!group.items.length) return null;

          return (
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
          );
        })}
      </div>
    </div>
  );
}
