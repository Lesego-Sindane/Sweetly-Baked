import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-padded grid min-h-[30rem] place-items-center py-14 text-center">
      <div>
        <h1 className="font-display text-5xl font-bold">Page not found</h1>
        <p className="mt-4 text-chocolate/70">That treat is not on the counter anymore.</p>
        <Button asChild className="mt-6"><Link href="/shop">Back to Shop</Link></Button>
      </div>
    </section>
  );
}
