"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getBrowserSupabase } from "@/lib/supabase/client";

export function AdminLogin() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function login(formData: FormData) {
    startTransition(async () => {
      const supabase = getBrowserSupabase();
      if (!supabase) {
        setMessage("Add Supabase env vars to enable admin authentication.");
        return;
      }
      const { error } = await supabase.auth.signInWithPassword({
        email: String(formData.get("email") ?? ""),
        password: String(formData.get("password") ?? "")
      });
      if (error) {
        setMessage(error.message);
        return;
      }
      router.push("/admin/dashboard");
    });
  }

  return (
    <form action={login} className="w-full max-w-md rounded-lg border bg-warm p-8 shadow-soft">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-beige text-caramel">
        <LockKeyhole className="h-5 w-5" />
      </div>
      <h1 className="mt-5 font-display text-4xl font-bold">Admin Login</h1>
      <p className="mt-2 text-sm leading-6 text-chocolate/65">Email login for SweetlyBaked administrators.</p>
      <div className="mt-6 grid gap-4">
        <Input name="email" type="email" required placeholder="Admin email" aria-label="Admin email" />
        <Input name="password" type="password" required placeholder="Password" aria-label="Password" />
        <Button type="submit" disabled={isPending}>{isPending ? "Signing in..." : "Sign In"}</Button>
      </div>
      {message ? <p className="mt-4 rounded-md bg-beige p-3 text-sm font-semibold">{message}</p> : null}
    </form>
  );
}
