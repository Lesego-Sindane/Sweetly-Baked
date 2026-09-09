import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CartProvider } from "@/hooks/cart-context";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://crispycrumbs.co.za"),
  title: {
    default: "Crispy Crumbs | Home Confectionery",
    template: "%s | Crispy Crumbs"
  },
  description: "Luxury homemade bakery treats including cinnamon rolls, brownies, cookies, Dikuku, cakes, and cupcakes from Crispy Crumbs.",
  keywords: ["bakery", "homemade treats", "cinnamon rolls", "brownies", "cakes", "cupcakes", "Crispy Crumbs"],
  icons: {
    icon: "/images/crispy crumbs logo bg removed.png"
  },
  openGraph: {
    title: "Crispy Crumbs",
    description: "Made with love. Baked for you.",
    url: "/",
    siteName: "Crispy Crumbs",
    images: [{ url: "/images/hero-bakery.png", width: 1792, height: 1024 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Crispy Crumbs",
    description: "Freshly baked treats made from quality ingredients for every special occasion.",
    images: ["/images/hero-bakery.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Crispy Crumbs",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://crispycrumbs.co.za",
    image: "/images/hero-bakery.png",
    servesCuisine: "Bakery",
    priceRange: "R20-R600",
    slogan: "Made with love. Baked for you."
  };

  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <Script id="crispycrumbs-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
