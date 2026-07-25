export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  ingredients: string[];
  price: number;
  category: string;
  image: string;
  available: boolean;
  created_at?: string;
};

export type CartItem = Product & {
  quantity: number;
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
