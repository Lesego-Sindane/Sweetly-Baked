"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/product-card";
import { categories } from "@/lib/products";
import type { Product } from "@/types";

export function ProductGrid({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    const next = products
      .filter((product) => category === "All" || product.category === category)
      .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));

    if (sort === "price-asc") return [...next].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") return [...next].sort((a, b) => b.price - a.price);
    return next;
  }, [category, products, query, sort]);

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
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
