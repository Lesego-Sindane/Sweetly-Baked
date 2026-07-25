import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Package, Plus, ShoppingBag, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { products } from "@/lib/products";
import { getServerSupabase } from "@/lib/supabase/server";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Manage SweetlyBaked products and orders."
};

export default async function AdminDashboardPage() {
  const supabase = await getServerSupabase();
  if (supabase) {
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      redirect("/admin");
    }
    const { data: admin } = await supabase.from("admin_users").select("user_id").eq("user_id", data.user.id).maybeSingle();
    if (!admin) {
      redirect("/admin");
    }
  }

  const stats = [
    { label: "Open Orders", value: "12", icon: ShoppingBag },
    { label: "Products", value: products.length.toString(), icon: Package },
    { label: "Available", value: products.filter((product) => product.available).length.toString(), icon: Plus }
  ];

  return (
    <section className="container-padded py-14">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-caramel">Admin</p>
          <h1 className="mt-3 font-display text-5xl font-bold">Dashboard</h1>
        </div>
        <Button><Upload className="h-4 w-4" /> Upload Images</Button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-lg border bg-warm p-5 shadow-soft">
            <stat.icon className="h-5 w-5 text-caramel" />
            <p className="mt-4 text-3xl font-bold">{stat.value}</p>
            <p className="text-sm text-chocolate/65">{stat.label}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_24rem]">
        <div className="rounded-lg border bg-warm p-5 shadow-soft">
          <h2 className="font-display text-3xl font-bold">Products</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b text-chocolate/60">
                <tr>
                  <th className="py-3">Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Available</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b last:border-0">
                    <td className="flex items-center gap-3 py-3">
                      <Image src={product.image} alt={product.name} width={56} height={56} className="h-14 w-14 rounded-md object-cover" />
                      <span className="font-semibold">{product.name}</span>
                    </td>
                    <td>{product.category}</td>
                    <td>{formatPrice(product.price)}</td>
                    <td>{product.available ? "Yes" : "No"}</td>
                    <td className="text-right">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="rounded-lg border bg-warm p-5 shadow-soft">
          <h2 className="font-display text-3xl font-bold">Add Product</h2>
          <form className="mt-5 grid gap-3">
            <Input placeholder="Product name" aria-label="Product name" />
            <Textarea placeholder="Description" aria-label="Description" />
            <Input placeholder="Price" aria-label="Price" type="number" />
            <Input placeholder="Category" aria-label="Category" />
            <Input placeholder="Image URL" aria-label="Image URL" />
            <label className="flex items-center gap-2 text-sm font-semibold">
              <input type="checkbox" defaultChecked /> Mark available
            </label>
            <Button type="button">Save Product</Button>
          </form>
        </aside>
      </div>

      <div className="mt-8 rounded-lg border bg-warm p-5 shadow-soft">
        <h2 className="font-display text-3xl font-bold">Orders</h2>
        <div className="mt-5 grid gap-3">
          {["New cake order for Friday", "Brownie box delivery", "Cupcake collection"].map((order) => (
            <div key={order} className="flex items-center justify-between rounded-md border bg-cream p-4">
              <span className="font-semibold">{order}</span>
              <Button variant="outline" size="sm">Mark Complete</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
