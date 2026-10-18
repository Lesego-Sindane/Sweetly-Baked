"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ProductDetailActions } from "@/components/product-detail-actions";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

export function ProductDetailClient({ product }: { product: Product }) {
  const flavourOptions = product.flavours.length ? product.flavours : ["Standard"];
  const [selectedFlavour, setSelectedFlavour] = useState(flavourOptions[0]);

  const matchingVariants = useMemo(
    () =>
      product.variants.filter((variant) => {
        if (!product.flavours.length) return true;
        return variant.flavour === selectedFlavour;
      }),
    [product.flavours.length, product.variants, selectedFlavour]
  );

  const [selectedVariantId, setSelectedVariantId] = useState(matchingVariants[0]?.id ?? product.variants[0]?.id ?? "");

  const selectedVariant = product.variants.find((variant) => variant.id === selectedVariantId) ?? matchingVariants[0] ?? product.variants[0];

  function handleFlavourChange(value: string) {
    const nextVariants = product.variants.filter((variant) => variant.flavour === value || (!product.flavours.length && !variant.flavour));
    const fallbackVariant = nextVariants.find((variant) => variant.available) ?? nextVariants[0] ?? product.variants[0];
    setSelectedFlavour(value);
    setSelectedVariantId(fallbackVariant?.id ?? "");
  }

  const priceText = selectedVariant && typeof selectedVariant.price === "number" && selectedVariant.status === "confirmed" ? formatPrice(selectedVariant.price) : "Price to be confirmed";

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="grid gap-4">
        <div className="overflow-hidden rounded-lg border bg-warm shadow-soft">
          <Image src={product.image} alt={product.altText || product.name} width={1200} height={1200} priority className="aspect-square w-full object-cover" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {product.images.map((image) => (
            <Image key={image} src={image} alt={`${product.name} gallery image`} width={400} height={300} className="aspect-[4/3] rounded-lg object-cover" />
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-caramel">{product.category}</p>
        <h1 className="mt-3 font-display text-5xl font-bold">{product.name}</h1>
        <p className="mt-4 text-2xl font-bold">{priceText}</p>
        <p className="mt-6 leading-8 text-chocolate/75">{product.longDescription}</p>

        <div className="mt-7 space-y-5">
          {product.flavours.length > 0 ? (
            <label className="block">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-chocolate/65">Choose your flavour</span>
              <select value={selectedFlavour} onChange={(event) => handleFlavourChange(event.target.value)} className="w-full rounded-md border bg-warm px-3 py-3 text-base">
                {flavourOptions.map((flavour) => (
                  <option key={flavour} value={flavour}>{flavour}</option>
                ))}
              </select>
            </label>
          ) : null}

          {matchingVariants.length > 0 ? (
            <label className="block">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-chocolate/65">Choose your size or pack</span>
              <select value={selectedVariantId} onChange={(event) => setSelectedVariantId(event.target.value)} className="w-full rounded-md border bg-warm px-3 py-3 text-base">
                {matchingVariants.map((variant) => (
                  <option key={variant.id} value={variant.id} disabled={!variant.available || variant.status === "unavailable"}>
                    {variant.optionLabel ?? variant.size ?? variant.pack ?? "Option"}
                    {typeof variant.price === "number" && variant.status === "confirmed" ? ` — ${formatPrice(variant.price)}` : variant.status === "unavailable" ? " — unavailable" : " — price to be confirmed"}
                  </option>
                ))}
              </select>
            </label>
          ) : null}
        </div>

        <ProductDetailActions product={product} selectedVariant={selectedVariant} />
        <div className="mt-6 text-sm text-chocolate/70">
          {selectedVariant && selectedVariant.status === "confirmed" && typeof selectedVariant.price === "number" ? (
            <p>Selected option: {selectedVariant.flavour ?? product.name} · {selectedVariant.size ?? selectedVariant.optionLabel ?? selectedVariant.pack}</p>
          ) : (
            <p>Selected option is currently awaiting pricing confirmation.</p>
          )}
        </div>
      </div>
    </div>
  );
}
