"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/cart-context";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="group overflow-hidden rounded-lg border bg-warm shadow-soft">
      <Link href={`/products/${product.id}`} className="block overflow-hidden" aria-label={`View ${product.name}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={800}
          height={800}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-bold text-chocolate">{product.name}</h3>
            <p className="mt-2 min-h-12 text-sm leading-6 text-chocolate/75">{product.description}</p>
          </div>
          <span className="shrink-0 rounded-full bg-beige px-3 py-1 text-sm font-bold text-chocolate">{formatPrice(product.price)}</span>
        </div>
        <div className="mt-5 flex gap-2">
          <Button asChild variant="outline" className="flex-1">
            <Link href={`/products/${product.id}`}>View Details</Link>
          </Button>
          <Button aria-label={`Add ${product.name} to cart`} onClick={() => addItem(product)}>
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
