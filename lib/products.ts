import type { Product } from "@/types";
import { getServerSupabase } from "@/lib/supabase/server";

export const fallbackProducts: Product[] = [
  {
    id: "cinnamon-rolls",
    name: "Cinnamon Rolls",
    description: "Soft, gooey spirals with cinnamon sugar and caramel glaze.",
    longDescription: "Hand-rolled dough layered with cinnamon sugar, baked until pillowy, then finished with a glossy caramel glaze and vanilla icing.",
    ingredients: ["Flour", "Butter", "Cinnamon", "Brown sugar", "Vanilla icing"],
    price: 40,
    category: "Pastries",
    image: "/images/cinnamon-rolls.png",
    available: true
  },
  {
    id: "brownies",
    name: "Brownies",
    description: "Rich, fudgy brownies with crackled tops and chocolate chunks.",
    longDescription: "Deep chocolate brownies baked dense and fudgy with a delicate crackled top, generous chocolate chunks, and a clean cocoa finish.",
    ingredients: ["Dark chocolate", "Cocoa", "Butter", "Eggs", "Flour"],
    price: 35,
    category: "Chocolate",
    image: "/images/brownies.png",
    available: true
  },
  {
    id: "cookies",
    name: "Cookies",
    description: "Crisp edges, soft centers, and pools of chocolate.",
    longDescription: "Golden chocolate chip cookies with crisp edges, chewy centers, and balanced sweetness for everyday gifting or late-night cravings.",
    ingredients: ["Flour", "Butter", "Chocolate chips", "Brown sugar", "Vanilla"],
    price: 20,
    category: "Cookies",
    image: "/images/cookies.png",
    available: true
  },
  {
    id: "dikuku",
    name: "Dikuku",
    description: "Traditional, crunchy, golden baked bites full of flavour.",
    longDescription: "A nostalgic tray of small golden Dikuku, baked with a rustic crumb and satisfying crunch for sharing with tea or coffee.",
    ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Vanilla"],
    price: 25,
    category: "Traditional",
    image: "/images/dikuku.png",
    available: true
  },
  {
    id: "amagwinya",
    name: "Amagwinya",
    description: "Soft, golden fatcakes with a warm, fluffy crumb.",
    longDescription: "Traditional South African-style fatcakes, fried to a golden finish and served warm for a comforting treat with tea or coffee.",
    ingredients: ["Flour", "Yeast", "Sugar", "Salt", "Water", "Oil"],
    price: 20,
    category: "Amagwinya",
    image: "/images/fatcake%201.jpeg",
    available: true
  },
  {
    id: "cakes",
    name: "Cakes",
    description: "Moist layered cakes made for celebrations and quiet luxuries.",
    longDescription: "Premium celebration cakes with soft layers, silky frosting, caramel accents, and chocolate shavings. Custom notes can be added at checkout.",
    ingredients: ["Cake flour", "Butter", "Cream", "Chocolate", "Caramel"],
    price: 300,
    category: "Celebration",
    image: "/images/cakes.png",
    available: true
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    description: "Light, fluffy cupcakes topped with cream frosting.",
    longDescription: "Tender vanilla cupcakes in chocolate wrappers, piped with cream frosting and finished with caramel drizzle for a refined bakery box.",
    ingredients: ["Flour", "Butter", "Eggs", "Vanilla", "Cream frosting"],
    price: 25,
    category: "Celebration",
    image: "/images/cupcakes.png",
    available: true
  }
];

function normalizeProduct(product: Product): Product {
  return {
    ...product,
    price: Number(product.price),
    longDescription: product.longDescription || product.description,
    ingredients: product.ingredients ?? []
  };
}

function mergeProducts(remoteProducts: Product[]): Product[] {
  const merged = [...remoteProducts];

  fallbackProducts.forEach((fallbackProduct) => {
    if (!merged.some((product) => product.id === fallbackProduct.id)) {
      merged.push(fallbackProduct);
    }
  });

  return merged;
}

export async function getProducts() {
  const supabase = await getServerSupabase();

  if (!supabase) {
    return fallbackProducts;
  }

  const { data, error } = await supabase
    .from("products")
    .select("id,name,description,longDescription:long_description,ingredients,price,category,image,available,created_at")
    .eq("available", true)
    .order("created_at", { ascending: true });

  if (error || !data?.length) {
    return fallbackProducts;
  }

  const remoteProducts = data.map((product) => normalizeProduct(product as Product));
  return mergeProducts(remoteProducts).filter((product) => product.available);
}

export async function getAdminProducts() {
  const supabase = await getServerSupabase();

  if (!supabase) {
    return fallbackProducts;
  }

  const { data, error } = await supabase
    .from("products")
    .select("id,name,description,longDescription:long_description,ingredients,price,category,image,available,created_at")
    .order("created_at", { ascending: true });

  if (error || !data?.length) {
    return fallbackProducts;
  }

  const remoteProducts = data.map((product) => normalizeProduct(product as Product));
  return mergeProducts(remoteProducts);
}

export async function getProduct(id: string) {
  const supabase = await getServerSupabase();

  if (!supabase) {
    return fallbackProducts.find((product) => product.id === id);
  }

  const { data, error } = await supabase
    .from("products")
    .select("id,name,description,longDescription:long_description,ingredients,price,category,image,available,created_at")
    .eq("id", id)
    .eq("available", true)
    .maybeSingle();

  if (error || !data) {
    return fallbackProducts.find((product) => product.id === id);
  }

  return normalizeProduct(data as Product);
}

export function getRelatedProducts(product: Product, products: Product[]) {
  return products.filter((item) => item.id !== product.id).slice(0, 3);
}
