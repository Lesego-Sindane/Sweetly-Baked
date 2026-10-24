"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = search.trim();
    router.push(query ? `/shop?search=${encodeURIComponent(query)}` : "/shop");
    setSearchOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-warm/92 backdrop-blur-xl">
      <nav className="container-padded flex h-20 items-center justify-between gap-2 sm:gap-4">
        <Link href="/" className="focus-ring rounded-sm" aria-label="Crispy Crumbs home">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative -my-1 h-[4.5rem] w-[4.5rem] shrink-0 sm:h-20 sm:w-20">
              <Image src="/images/crispy crumbs logo bg removed.png" alt="Crispy Crumbs logo" fill className="object-contain" />
            </div>
            <div className="pt-1 leading-none">
              <span className="block font-display text-lg font-bold text-chocolate sm:text-2xl">Crispy Crumbs</span>
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "focus-ring rounded-sm text-sm font-semibold text-charcoal transition-colors hover:text-caramel",
                link.subtle && "text-[0.7rem] uppercase tracking-[0.2em] text-chocolate/60"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {searchOpen ? (
            <form onSubmit={submitSearch} className="absolute left-4 right-4 top-[4.75rem] z-10 flex gap-2 rounded-md border bg-cream p-2 shadow-lift sm:static sm:flex sm:w-64 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
              <label className="sr-only" htmlFor="site-search">Search treats</label>
              <input
                id="site-search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search treats"
                autoFocus
                className="focus-ring h-10 min-w-0 flex-1 rounded-md border bg-warm px-3 text-sm"
              />
              <Button type="submit" size="sm" aria-label="Submit search">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          ) : null}
          <Button variant="ghost" size="sm" aria-label="Search" onClick={() => setSearchOpen(true)}>
            <Search className="h-5 w-5" />
          </Button>
          <CartDrawer />
          <Button variant="ghost" size="sm" className="md:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      <div className={cn("fixed inset-0 z-50 bg-chocolate/45 backdrop-blur-sm transition-opacity md:hidden", open ? "opacity-100" : "pointer-events-none opacity-0")}>
        <div className={cn("ml-auto h-full w-80 max-w-[85vw] border-l border-chocolate/10 bg-[#fff8f2] p-6 shadow-lift transition-transform", open ? "translate-x-0" : "translate-x-full")}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative -my-1 h-16 w-16 shrink-0">
                <Image src="/images/crispy crumbs logo bg removed.png" alt="Crispy Crumbs logo" fill className="object-contain" />
              </div>
              <span className="font-display text-2xl font-bold leading-none">Crispy Crumbs</span>
            </div>
            <Button variant="ghost" size="sm" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-8 grid gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-md border border-chocolate/10 bg-white/75 px-4 py-3 text-lg font-semibold text-chocolate shadow-sm transition-colors hover:bg-beige">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
