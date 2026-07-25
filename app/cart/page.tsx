import type { Metadata } from "next";
import { CartView } from "@/components/cart-view";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your SweetlyBaked cart."
};

export default function CartPage() {
  return <CartView />;
}
