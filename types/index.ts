export type PriceStatus = "confirmed" | "provisional" | "needs_confirmation" | "unavailable";

export type ProductVariant = {
  id: string;
  flavour?: string;
  optionLabel?: string;
  size?: string;
  pack?: string;
  price?: number;
  status: PriceStatus;
  available: boolean;
  internalNotes?: string;
};

export type ProductSEO = {
  title: string;
  description: string;
  canonical: string;
  keyword: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  alt: string;
  h1: string;
  h2: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  ingredients?: string[];
  price?: number;
  category: string;
  collections: string[];
  image: string;
  images: string[];
  altText: string;
  available: boolean;
  flavours: string[];
  variants: ProductVariant[];
  seo: ProductSEO;
  created_at?: string;
};

export type CartItem = Product & {
  quantity: number;
  cartKey: string;
  productId: string;
  variantId: string;
  flavour?: string;
  size?: string;
  unitPrice?: number;
  priceStatus?: PriceStatus;
  productSlug: string;
};

export type OrderInput = {
  customer_name: string;
  phone: string;
  email: string;
  address: string;
  delivery_method: "Collection" | "Delivery";
  notes?: string;
  items: {
    product_id: string;
    quantity: number;
    price: number;
  }[];
};
