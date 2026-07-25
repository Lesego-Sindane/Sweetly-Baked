import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CartProvider } from "@/hooks/cart-context";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://sweetlybaked.vercel.app"),
  title: {
    default: "SweetlyBaked | Premium Homemade Bakery",
    template: "%s | SweetlyBaked"
  },
  description: "Luxury homemade bakery treats including cinnamon rolls, brownies, cookies, Dikuku, cakes, and cupcakes.",
  keywords: ["bakery", "homemade treats", "cinnamon rolls", "brownies", "cakes", "cupcakes"],
  openGraph: {
    title: "SweetlyBaked",
    description: "Made with love. Baked for you.",
    url: "/",
    siteName: "SweetlyBaked",
    images: [{ url: "/images/hero-bakery.png", width: 1792, height: 1024 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SweetlyBaked",
    description: "Freshly baked treats made from quality ingredients for every special occasion.",
    images: ["/images/hero-bakery.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "SweetlyBaked",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sweetlybaked.vercel.app",
    image: "/images/hero-bakery.png",
    servesCuisine: "Bakery",
    priceRange: "R20-R600",
    slogan: "Made with love. Baked for you."
  };

  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <Script id="sweetlybaked-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
