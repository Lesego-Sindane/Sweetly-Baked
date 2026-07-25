"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="grid gap-4 rounded-lg border bg-warm p-6 shadow-soft"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Input required placeholder="Name" aria-label="Name" />
        <Input required type="email" placeholder="Email" aria-label="Email" />
      </div>
      <Input placeholder="Phone" aria-label="Phone" />
      <Textarea required placeholder="How can we help?" aria-label="Message" />
      <Button type="submit">Send Message</Button>
      {sent ? <p className="rounded-md bg-beige p-3 text-sm font-semibold">Message received. Connect this form to email or Supabase for production delivery.</p> : null}
    </form>
  );
}
