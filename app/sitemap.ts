import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/products";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sweetlybaked.vercel.app";
  const products = await getProducts();
  const routes = ["", "/shop", "/about", "/contact", "/cart", "/checkout"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  return [
    ...routes,
    ...products.map((product) => ({
      url: `${baseUrl}/products/${product.id}`,
      lastModified: new Date()
    }))
  ];
}
