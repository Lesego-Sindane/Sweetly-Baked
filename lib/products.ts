import { catalogue } from "@/lib/catalog";
import type { Product } from "@/types";

export const fallbackProducts: Product[] = catalogue;

export function getProducts() {
  return catalogue.filter((product) => product.available);
}

export function getAdminProducts() {
  return catalogue;
}

export function getProduct(id: string) {
  return catalogue.find((product) => product.available && (product.id === id || product.slug === id)) ?? null;
}

export function getRelatedProducts(product: Product, products: Product[]) {
  return products.filter((item) => item.id !== product.id).slice(0, 3);
}
