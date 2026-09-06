import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <main className="container-padded flex min-h-[calc(100vh-12rem)] items-center justify-center py-20">
      <div className="max-w-xl rounded-2xl border bg-warm p-10 text-center shadow-soft">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-caramel">Order Received</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-chocolate sm:text-5xl">Thank you for your order!</h1>
        <p className="mt-5 text-base leading-7 text-chocolate/75">
          Your Crispy Crumbs order has been received and our team will be in touch shortly to confirm the next steps.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/shop">Continue Shopping</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Back Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
