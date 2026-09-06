import Link from "next/link";
import { Facebook, Instagram, Mail, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-[#2d1b19] text-cream">
      <div className="container-padded grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <h2 className="font-display text-3xl font-bold">Crispy Crumbs</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-cream/75">Luxury homemade bakes for celebrations, gifting, and everyday sweetness.</p>
        </div>
        <div>
          <h3 className="font-semibold">Navigation</h3>
          <div className="mt-4 grid gap-2 text-sm text-cream/75">
            <Link href="/shop">Shop</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/admin">Admin</Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-cream/75">
            <a href="mailto:Hellocrispycrumbs@gmail.com" className="flex items-center gap-2 transition-opacity hover:text-white">
              <Mail className="h-4 w-4" /> Hellocrispycrumbs@gmail.com
            </a>
            <a href="https://www.facebook.com/share/1ErG1Qt4Dg/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-opacity hover:text-white">
              <Facebook className="h-4 w-4" /> Facebook
            </a>
            <a href="https://www.instagram.com/crispycrumbs_za?stkn=OHpmcjRmMmF5bWhq&utm_source=qr" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-opacity hover:text-white">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a href="https://www.tiktok.com/@crispycrumbs_za?_r=1&_t=ZS-99Vx5CETi4o" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-opacity hover:text-white">
              <Music2 className="h-4 w-4" /> TikTok
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Business Hours</h3>
          <p className="mt-4 text-sm leading-6 text-cream/75">Mon to Fri: 08:00 - 17:00<br />Saturday: 09:00 - 14:00<br />Sunday: Custom orders only</p>
        </div>
      </div>
    </footer>
  );
}
