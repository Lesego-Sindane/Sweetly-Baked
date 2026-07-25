"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { CartDrawer } from "@/components/cart-drawer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About Us" },
  { href: "/checkout", label: "Order" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-warm/92 backdrop-blur-xl">
      <nav className="container-padded flex h-20 items-center justify-between gap-4">
        <Link href="/" className="focus-ring rounded-sm" aria-label="SweetlyBaked home">
          <span className="block font-display text-3xl font-bold leading-none text-chocolate">SweetlyBaked</span>
          <span className="mt-1 block text-[0.68rem] font-bold uppercase tracking-[0.22em] text-caramel">Made with love. Baked for you.</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring rounded-sm text-sm font-semibold text-charcoal transition-colors hover:text-caramel">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <CartDrawer />
          <Button variant="ghost" size="sm" className="md:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      <div className={cn("fixed inset-0 z-50 bg-chocolate/35 backdrop-blur-sm transition-opacity md:hidden", open ? "opacity-100" : "pointer-events-none opacity-0")}>
        <div className={cn("ml-auto h-full w-80 max-w-[85vw] bg-cream p-6 shadow-lift transition-transform", open ? "translate-x-0" : "translate-x-full")}>
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-bold">SweetlyBaked</span>
            <Button variant="ghost" size="sm" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-8 grid gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-3 text-lg font-semibold hover:bg-beige">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
