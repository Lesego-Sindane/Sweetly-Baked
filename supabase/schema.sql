create extension if not exists "pgcrypto";

create table if not exists public.products (
  id text primary key,
  name text not null,
  description text not null,
  long_description text not null default '',
  ingredients text[] not null default '{}',
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

alter table public.products add column if not exists long_description text not null default '';
alter table public.products add column if not exists ingredients text[] not null default '{}';

alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.admin_users enable row level security;

revoke all on public.products from anon, authenticated;
revoke all on public.orders from anon, authenticated;
revoke all on public.order_items from anon, authenticated;
revoke all on public.admin_users from anon, authenticated;

grant usage on schema public to anon, authenticated;
grant select on public.products to anon, authenticated;
grant insert, update, delete on public.products to authenticated;
grant select, update on public.orders to authenticated;
grant select on public.order_items to authenticated;
grant select, insert, update, delete on public.admin_users to authenticated;

drop policy if exists "Products are readable by everyone" on public.products;
create policy "Products are readable by everyone"
on public.products for select
to anon, authenticated
using (available = true);

drop policy if exists "Admins can manage products" on public.products;
create policy "Admins can manage products"
on public.products for all
to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())))
with check (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

drop policy if exists "Admins can read orders" on public.orders;
create policy "Admins can read orders"
on public.orders for select
to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

drop policy if exists "Admins can update orders" on public.orders;
create policy "Admins can update orders"
on public.orders for update
to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())))
with check (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

drop policy if exists "Admins can read order items" on public.order_items;
create policy "Admins can read order items"
on public.order_items for select
to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

drop policy if exists "Admins can manage admin list" on public.admin_users;
create policy "Admins can manage admin list"
on public.admin_users for all
to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())))
with check (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

create index if not exists products_category_idx on public.products(category);
create index if not exists orders_created_at_idx on public.orders(created_at desc);
create index if not exists order_items_order_id_idx on public.order_items(order_id);

insert into public.products (id, name, description, long_description, ingredients, price, category, image, available)
values
  ('cinnamon-rolls', 'Cinnamon Rolls', 'Soft, gooey spirals with cinnamon sugar and caramel glaze.', 'Hand-rolled dough layered with cinnamon sugar, baked until pillowy, then finished with a glossy caramel glaze and vanilla icing.', array['Flour', 'Butter', 'Cinnamon', 'Brown sugar', 'Vanilla icing'], 40.00, 'Pastries', '/images/cinnamon-rolls.png', true),
  ('brownies', 'Brownies', 'Rich, fudgy brownies with crackled tops and chocolate chunks.', 'Deep chocolate brownies baked dense and fudgy with a delicate crackled top, generous chocolate chunks, and a clean cocoa finish.', array['Dark chocolate', 'Cocoa', 'Butter', 'Eggs', 'Flour'], 35.00, 'Chocolate', '/images/brownies.png', true),
  ('cookies', 'Cookies', 'Crisp edges, soft centers, and pools of chocolate.', 'Golden chocolate chip cookies with crisp edges, chewy centers, and balanced sweetness for everyday gifting or late-night cravings.', array['Flour', 'Butter', 'Chocolate chips', 'Brown sugar', 'Vanilla'], 20.00, 'Cookies', '/images/cookies.png', true),
  ('dikuku', 'Dikuku', 'Traditional, crunchy, golden baked bites full of flavour.', 'A nostalgic tray of small golden Dikuku, baked with a rustic crumb and satisfying crunch for sharing with tea or coffee.', array['Flour', 'Sugar', 'Butter', 'Eggs', 'Vanilla'], 25.00, 'Traditional', '/images/dikuku.png', true),
  ('cakes', 'Cakes', 'Moist layered cakes made for celebrations and quiet luxuries.', 'Premium celebration cakes with soft layers, silky frosting, caramel accents, and chocolate shavings. Custom notes can be added at checkout.', array['Cake flour', 'Butter', 'Cream', 'Chocolate', 'Caramel'], 300.00, 'Celebration', '/images/cakes.png', true),
  ('cupcakes', 'Cupcakes', 'Light, fluffy cupcakes topped with cream frosting.', 'Tender vanilla cupcakes in chocolate wrappers, piped with cream frosting and finished with caramel drizzle for a refined bakery box.', array['Flour', 'Butter', 'Eggs', 'Vanilla', 'Cream frosting'], 25.00, 'Celebration', '/images/cupcakes.png', true)
on conflict (id) do update set
  name = excluded.name,
  description = excluded.description,
  long_description = excluded.long_description,
  ingredients = excluded.ingredients,
  price = excluded.price,
  category = excluded.category,
  image = excluded.image,
  available = excluded.available;
