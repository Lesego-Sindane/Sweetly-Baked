import type { CartItem } from "@/types";

const whatsappNumber = "27679836954";

export function getWhatsAppCheckoutUrl(items: CartItem[]) {
  const itemLines = items.map((item) => `${item.quantity} x ${item.name}`).join("\n");
  const message = `hey I would like to purchase\n${itemLines}`;
  const baseUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "https://api.whatsapp.com/send";

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}