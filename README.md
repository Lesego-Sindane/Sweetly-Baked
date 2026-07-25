# SweetlyBaked

Premium ecommerce bakery website built with Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn-style components, Framer Motion, Lucide React, and Supabase.

## Features

- Home, Shop, Product Details, About, Contact, Cart, Checkout, Admin Login, Admin Dashboard
- Generated premium bakery photography in `public/images`
- Animated sections, hover lift cards, image zooms, responsive mobile-first layout
- Cart state, quantity controls, checkout form, and Supabase order persistence
- Supabase Auth admin login with `admin_users` authorization table
- SEO metadata, Open Graph, Twitter cards, JSON-LD, `robots.txt`, and `sitemap.xml`

## Install

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Supabase Setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Create an Auth user for the admin.
4. Add that user's ID to `public.admin_users`:

```sql
insert into public.admin_users (user_id)
values ('YOUR_AUTH_USER_ID');
```

5. Copy `.env.example` to `.env.local` and add:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

The site uses demo products when env vars are missing, so it can preview before Supabase is configured.

## Vercel Deployment

1. Push the project to GitHub.
2. Import it in Vercel as a Next.js project.
3. Add the same environment variables in Vercel Project Settings.
4. Deploy.

## Notes

- Checkout currently stores orders only; payment is intentionally not implemented.
- Admin product forms are UI-ready scaffolding. Wire them to Supabase mutations and Storage uploads when final admin workflows are confirmed.
