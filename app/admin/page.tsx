import type { Metadata } from "next";
import { AdminLogin } from "@/components/admin-login";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "SweetlyBaked admin login."
};

export default function AdminPage() {
  return (
    <section className="container-padded grid min-h-[34rem] place-items-center py-14">
      <AdminLogin />
    </section>
  );
}
