create extension if not exists "pgcrypto";

create table if not exists public.products (
  id text primary key,
  name text not null,
  description text not null,
  price numeric(10, 2) not null check (price >= 0),
  category text not null,
  image text not null,
  available boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  phone text not null,
  email text not null,
  address text not null,
  delivery_method text not null check (delivery_method in ('Collection', 'Delivery')),
  notes text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id text references public.products(id) on delete set null,
  quantity integer not null check (quantity > 0),
  price numeric(10, 2) not null check (price >= 0)
);

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.admin_users enable row level security;

create policy "Products are readable by everyone"
on public.products for select
to anon, authenticated
using (available = true);

create policy "Admins can manage products"
on public.products for all
to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())))
with check (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

create policy "Admins can read orders"
on public.orders for select
to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

create policy "Admins can update orders"
on public.orders for update
to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())))
with check (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

create policy "Admins can read order items"
on public.order_items for select
to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

create policy "Admins can manage admin list"
on public.admin_users for all
to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())))
with check (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

create index if not exists products_category_idx on public.products(category);
create index if not exists orders_created_at_idx on public.orders(created_at desc);
create index if not exists order_items_order_id_idx on public.order_items(order_id);

insert into public.products (id, name, description, price, category, image, available)
values
  ('cinnamon-rolls', 'Cinnamon Rolls', 'Soft, gooey spirals with cinnamon sugar and caramel glaze.', 40.00, 'Pastries', '/images/cinnamon-rolls.png', true),
  ('brownies', 'Brownies', 'Rich, fudgy brownies with crackled tops and chocolate chunks.', 35.00, 'Chocolate', '/images/brownies.png', true),
  ('cookies', 'Cookies', 'Crisp edges, soft centers, and pools of chocolate.', 20.00, 'Cookies', '/images/cookies.png', true),
  ('dikuku', 'Dikuku', 'Traditional, crunchy, golden baked bites full of flavour.', 25.00, 'Traditional', '/images/dikuku.png', true),
  ('cakes', 'Cakes', 'Moist layered cakes made for celebrations and quiet luxuries.', 300.00, 'Celebration', '/images/cakes.png', true),
  ('cupcakes', 'Cupcakes', 'Light, fluffy cupcakes topped with cream frosting.', 25.00, 'Celebration', '/images/cupcakes.png', true)
on conflict do nothing;
