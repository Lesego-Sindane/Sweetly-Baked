import type { Product } from "@/types";
import { getServerSupabase } from "@/lib/supabase/server";

const normalizeProductCategory = (productName: string, category?: string) => {
  const value = `${productName} ${category ?? ""}`.toLowerCase();
  return value.includes("apron") ? "Aprons" : "Baked Goods";
};

export const fallbackProducts: Product[] = [
  {
    id: "cinnamon-rolls",
    name: "Cinnamon Rolls",
    description: "Soft, gooey spirals with cinnamon sugar and caramel glaze.",
    longDescription: "Hand-rolled dough layered with cinnamon sugar, baked until pillowy, then finished with a glossy caramel glaze and vanilla icing.",
    ingredients: ["Flour", "Butter", "Cinnamon", "Brown sugar", "Vanilla icing"],
    price: 40,
    category: "Baked Goods",
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
    category: "Baked Goods",
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
    category: "Baked Goods",
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
    category: "Baked Goods",
    image: "/images/scones%201.jpeg",
    available: true
  },
  {
    id: "cakes",
    name: "Cakes",
    description: "Moist layered cakes made for celebrations and quiet luxuries.",
    longDescription: "Premium celebration cakes with soft layers, silky frosting, caramel accents, and chocolate shavings. Custom notes can be added at checkout.",
    ingredients: ["Cake flour", "Butter", "Cream", "Chocolate", "Caramel"],
    price: 300,
    category: "Baked Goods",
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
    category: "Baked Goods",
    image: "/images/cupcakes.png",
    available: true
  },
  {
    id: "muffins",
    name: "Muffins",
    description: "Tender, bakery-fresh muffins with comforting sweetness and a golden crumb.",
    longDescription: "Soft, fluffy muffins baked with a tender crumb and just enough sweetness for a dreamy morning treat or an easy afternoon bite.",
    ingredients: ["Flour", "Butter", "Eggs", "Sugar", "Vanilla"],
    price: 22,
    category: "Baked Goods",
    image: "/images/hero-bakery.png",
    available: true
  },
  {
    id: "simple-aprons",
    name: "Simple Aprons",
    description: "A classic kitchen apron in soft, practical linen-inspired cotton.",
    longDescription: "A refined everyday apron designed for baking, cooking and all the little kitchen rituals in between. Easy to wear, beautifully made, and designed with the same thoughtful care as our bakes.",
    ingredients: ["Cotton blend", "Linen feel", "Soft straps", "Utility pockets"],
    price: 120,
    category: "Aprons",
    image: "/images/hero-bakery.png",
    available: true
  },
  {
    id: "new-age-aprons",
    name: "New Age aprons",
    description: "A modern apron with a timeless feel for cooks who love beautiful tools.",
    longDescription: "Our New Age apron brings a little more style to the everyday kitchen — thoughtful lines, wrap-ready comfort, and a polished finish that feels as good as it looks.",
    ingredients: ["Cotton blend", "Linen texture", "Adjustable fit", "Functional pockets"],
    price: 140,
    category: "Aprons",
    image: "/images/hero-bakery.png",
    available: true
  }
];

function normalizeProduct(product: Product): Product {
  return {
    ...product,
    category: normalizeProductCategory(product.name, product.category),
    price: Number(product.price),
    longDescription: product.longDescription || product.description,
    ingredients: product.ingredients ?? []
  };
}

function mergeProducts(remoteProducts: Product[]): Product[] {
  const mergedById = new Map<string, Product>();

  fallbackProducts.forEach((fallbackProduct) => {
    mergedById.set(fallbackProduct.id, { ...fallbackProduct });
  });

  remoteProducts.forEach((product) => {
    const fallbackProduct = mergedById.get(product.id);

    if (fallbackProduct) {
      mergedById.set(product.id, {
        ...product,
        ...fallbackProduct,
        image: fallbackProduct.image || product.image,
        category: fallbackProduct.category || product.category,
        name: fallbackProduct.name || product.name,
        description: fallbackProduct.description || product.description,
        longDescription: fallbackProduct.longDescription || product.longDescription || product.description,
        ingredients: fallbackProduct.ingredients?.length ? fallbackProduct.ingredients : product.ingredients ?? [],
        price: Number(fallbackProduct.price ?? product.price),
        available: fallbackProduct.available ?? product.available
      });
    } else {
      mergedById.set(product.id, product);
    }
  });

  return Array.from(mergedById.values());
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
