"use server";

import { createClient } from "@supabase/supabase-js";
import type { OrderInput } from "@/types";
import { getSupabaseServiceRoleKey, getSupabaseUrl } from "@/lib/supabase/env";

function getServerSupabase() {
  const url = getSupabaseUrl();
  const key = getSupabaseServiceRoleKey();

  if (!url || !key) {
    return null;
  }

  return createClient(url, key, {
    auth: { persistSession: false }
  });
}

export async function createOrder(order: OrderInput) {
  if (!order.items.length) {
    return { ok: false, message: "Your cart is empty." };
  }

  const supabase = getServerSupabase();

  if (!supabase) {
    return {
      ok: true,
      message: "Demo order received. Add Supabase environment variables to store live orders."
    };
  }

  const { data, error } = await supabase
    .from("orders")
    .insert({
      customer_name: order.customer_name,
      phone: order.phone,
      email: order.email,
      address: order.address,
      delivery_method: order.delivery_method,
      notes: order.notes ?? "",
      status: "new"
    })
    .select("id")
    .single();

  if (error || !data) {
    return { ok: false, message: error?.message ?? "Could not create order." };
  }

  const { error: itemsError } = await supabase.from("order_items").insert(
    order.items.map((item) => ({
      order_id: data.id,
      product_id: item.product_id,
      quantity: item.quantity,
      price: item.price
    }))
  );

  if (itemsError) {
    return { ok: false, message: itemsError.message };
  }

  return { ok: true, message: "Order placed. We will contact you shortly." };
}
