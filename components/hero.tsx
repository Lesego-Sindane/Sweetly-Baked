import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/motion-section";

export function Hero() {
  return (
    <MotionSection className="relative overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bakery.png"
          alt="Cinnamon rolls, brownies, and cookies on polished black granite"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/25 to-transparent" />
      </div>
      <div className="container-padded relative grid min-h-[32rem] items-center py-16 lg:min-h-[38rem]">
        <div className="max-w-xl">
          <h1 className="font-display text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">Made with love. Baked for you.</h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-white/88">Freshly baked treats made from quality ingredients for every special occasion.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/shop">Shop Now <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10">
              <Link href="/shop">View Menu</Link>
            </Button>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
