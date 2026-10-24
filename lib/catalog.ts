import type { Product } from "@/types";

const products: Product[] = [
  {
    id: "biscuits",
    slug: "biscuits",
    name: "Biscuits",
    category: "Biscuits",
    collections: ["All Products", "Biscuits"],
    description: "Choose Plain Biscuits or Melting Moments Biscuits in convenient 5 L, 10 L, and 20 L buckets.",
    longDescription:
      "Choose between Plain Biscuits and unfilled Melting Moments Biscuits. Both options are available in 5 L, 10 L, and 20 L buckets for sharing and serving.",
    image: "/images/Biscuits.jpg",
    images: ["/images/Biscuits.jpg"],
    altText: "Biscuits from Crispy Crumbs",
    available: true,
    flavours: ["Plain Biscuits", "Melting Moments Biscuits"],
    variants: [
      { id: "biscuits-plain-5l", flavour: "Plain Biscuits", optionLabel: "5 L bucket", size: "5 L bucket", price: 250, status: "confirmed", available: true },
      { id: "biscuits-plain-10l", flavour: "Plain Biscuits", optionLabel: "10 L bucket", size: "10 L bucket", price: 480, status: "confirmed", available: true },
      { id: "biscuits-plain-20l", flavour: "Plain Biscuits", optionLabel: "20 L bucket", size: "20 L bucket", price: 850, status: "confirmed", available: true },
      { id: "biscuits-melting-moments-5l", flavour: "Melting Moments Biscuits", optionLabel: "5 L bucket", size: "5 L bucket", price: 380, status: "confirmed", available: true },
      { id: "biscuits-melting-moments-10l", flavour: "Melting Moments Biscuits", optionLabel: "10 L bucket", size: "10 L bucket", price: 700, status: "confirmed", available: true },
      { id: "biscuits-melting-moments-20l", flavour: "Melting Moments Biscuits", optionLabel: "20 L bucket", size: "20 L bucket", price: 1150, status: "confirmed", available: true }
    ],
    seo: {
      title: "Biscuits in Bulk Buckets | Crispy Crumbs",
      description: "Choose Plain Biscuits or Melting Moments Biscuits in 5 L, 10 L, and 20 L buckets from Crispy Crumbs.",
      canonical: "/products/biscuits",
      keyword: "biscuits in bulk",
      keywords: ["biscuits in bulk", "plain biscuits", "melting moments biscuits", "biscuits South Africa"],
      ogTitle: "Biscuits in Bulk Buckets | Crispy Crumbs",
      ogDescription: "Plain Biscuits and Melting Moments Biscuits in three bucket sizes.",
      ogImage: "/images/Biscuits.jpg",
      alt: "Biscuits from Crispy Crumbs",
      h1: "Biscuits",
      h2: ["Bucket sizes", "Bulk ordering", "Serving options"]
    }
  },
  {
    id: "standard-muffins",
    slug: "muffins",
    name: "Standard Muffins",
    category: "Muffins",
    collections: ["All Products", "Muffins"],
    description: "Tender muffin buckets in vanilla, chocolate, blueberry, and lemon and poppy seed flavours.",
    longDescription:
      "Standard muffin buckets are available in a range of flavour options and bucket sizes. These are current provisional bucket prices and should be treated as pricing estimates until cost verification is complete.",
    image: "/images/hero-bakery.png",
    images: ["/images/hero-bakery.png", "/images/cookies.png", "/images/cupcakes.png"],
    altText: "Muffin bucket assortment from Crispy Crumbs",
    available: true,
    flavours: ["Vanilla", "Chocolate", "Blueberry", "Lemon and poppy seed"],
    variants: [
      { id: "muffins-vanilla-2.5l", flavour: "Vanilla", optionLabel: "2.5 L bucket", size: "2.5 L bucket", price: 180, status: "provisional", available: true },
      { id: "muffins-vanilla-5l", flavour: "Vanilla", optionLabel: "5 L bucket", size: "5 L bucket", price: 320, status: "provisional", available: true },
      { id: "muffins-vanilla-10l", flavour: "Vanilla", optionLabel: "10 L bucket", size: "10 L bucket", price: 520, status: "provisional", available: true },
      { id: "muffins-vanilla-20l", flavour: "Vanilla", optionLabel: "20 L bucket", size: "20 L bucket", price: 900, status: "provisional", available: true },
      { id: "muffins-chocolate-2.5l", flavour: "Chocolate", optionLabel: "2.5 L bucket", size: "2.5 L bucket", price: 195, status: "provisional", available: true },
      { id: "muffins-chocolate-5l", flavour: "Chocolate", optionLabel: "5 L bucket", size: "5 L bucket", price: 350, status: "provisional", available: true },
      { id: "muffins-chocolate-10l", flavour: "Chocolate", optionLabel: "10 L bucket", size: "10 L bucket", price: 570, status: "provisional", available: true },
      { id: "muffins-chocolate-20l", flavour: "Chocolate", optionLabel: "20 L bucket", size: "20 L bucket", price: 980, status: "provisional", available: true },
      { id: "muffins-blueberry-2.5l", flavour: "Blueberry", optionLabel: "2.5 L bucket", size: "2.5 L bucket", price: 210, status: "provisional", available: true },
      { id: "muffins-blueberry-5l", flavour: "Blueberry", optionLabel: "5 L bucket", size: "5 L bucket", price: 370, status: "provisional", available: true },
      { id: "muffins-blueberry-10l", flavour: "Blueberry", optionLabel: "10 L bucket", size: "10 L bucket", price: 600, status: "provisional", available: true },
      { id: "muffins-blueberry-20l", flavour: "Blueberry", optionLabel: "20 L bucket", size: "20 L bucket", price: 1050, status: "provisional", available: true },
      { id: "muffins-lemon-poppy-seed-2.5l", flavour: "Lemon and poppy seed", optionLabel: "2.5 L bucket", size: "2.5 L bucket", price: 195, status: "provisional", available: true },
      { id: "muffins-lemon-poppy-seed-5l", flavour: "Lemon and poppy seed", optionLabel: "5 L bucket", size: "5 L bucket", price: 350, status: "provisional", available: true },
      { id: "muffins-lemon-poppy-seed-10l", flavour: "Lemon and poppy seed", optionLabel: "10 L bucket", size: "10 L bucket", price: 570, status: "provisional", available: true },
      { id: "muffins-lemon-poppy-seed-20l", flavour: "Lemon and poppy seed", optionLabel: "20 L bucket", size: "20 L bucket", price: 980, status: "provisional", available: true }
    ],
    seo: {
      title: "Muffin Buckets in South Africa | Crispy Crumbs",
      description: "Explore standard muffin buckets from Crispy Crumbs in vanilla, chocolate, blueberry, and lemon and poppy seed flavours. Choose from 2.5 L to 20 L options.",
      canonical: "/products/muffins",
      keyword: "muffin buckets",
      keywords: ["muffin buckets", "standard muffins South Africa", "vanilla muffin bucket", "blueberry muffin bucket"],
      ogTitle: "Muffin Buckets in South Africa | Crispy Crumbs",
      ogDescription: "Browse standard muffin buckets in vanilla, chocolate, blueberry and lemon and poppy seed flavours.",
      ogImage: "/images/hero-bakery.png",
      alt: "Standard muffin buckets from Crispy Crumbs",
      h1: "Standard Muffins",
      h2: ["Flavour options", "Bucket sizes", "Bulk ordering"]
    }
  },
  {
    id: "scones",
    slug: "scones",
    name: "Scones",
    category: "Scones",
    collections: ["All Products", "Tea Time Delicacies", "Scones"],
    description: "Scones in plain, blueberry, and custard flavours, available in 5 L, 10 L, and 20 L buckets.",
    longDescription:
      "Choose plain, blueberry, or custard scones, then select a 5 L, 10 L, or 20 L bucket. Scones are also known as dikuku in the Crispy Crumbs range.",
    image: "/images/Blueberry Scones.jpg",
    images: ["/images/Blueberry Scones.jpg"],
    altText: "Freshly baked blueberry scones",
    available: true,
    flavours: ["Plain", "Blueberry", "Custard"],
    variants: [
      { id: "scones-plain-5l", flavour: "Plain", optionLabel: "5 L bucket", size: "5 L bucket", price: 250, status: "confirmed", available: true },
      { id: "scones-plain-10l", flavour: "Plain", optionLabel: "10 L bucket", size: "10 L bucket", price: 480, status: "confirmed", available: true },
      { id: "scones-plain-20l", flavour: "Plain", optionLabel: "20 L bucket", size: "20 L bucket", price: 800, status: "confirmed", available: true },
      { id: "scones-blueberry-5l", flavour: "Blueberry", optionLabel: "5 L bucket", size: "5 L bucket", price: 400, status: "confirmed", available: true },
      { id: "scones-blueberry-10l", flavour: "Blueberry", optionLabel: "10 L bucket", size: "10 L bucket", price: 700, status: "confirmed", available: true },
      { id: "scones-blueberry-20l", flavour: "Blueberry", optionLabel: "20 L bucket", size: "20 L bucket", price: 1150, status: "confirmed", available: true },
      { id: "scones-custard-5l", flavour: "Custard", optionLabel: "5 L bucket", size: "5 L bucket", price: 380, status: "confirmed", available: true },
      { id: "scones-custard-10l", flavour: "Custard", optionLabel: "10 L bucket", size: "10 L bucket", price: 600, status: "confirmed", available: true },
      { id: "scones-custard-20l", flavour: "Custard", optionLabel: "20 L bucket", size: "20 L bucket", price: 1000, status: "confirmed", available: true }
    ],
    seo: {
      title: "Freshly Baked Scones in Buckets | Crispy Crumbs",
      description: "Explore scones from Crispy Crumbs, including blueberry scones. Browse available bucket sizes and choose the option that suits your gathering or catering needs.",
      canonical: "/products/scones",
      keyword: "blueberry scones",
      keywords: ["blueberry scones", "scones in buckets", "tea time delicacies South Africa"],
      ogTitle: "Freshly Baked Scones in Buckets | Crispy Crumbs",
      ogDescription: "Blueberry scones and available bucket sizes from Crispy Crumbs.",
      ogImage: "/images/Blueberry Scones.jpg",
      alt: "Fresh blueberry scones from Crispy Crumbs",
      h1: "Freshly Baked Scones",
      h2: ["Blueberry scones", "Bucket sizes", "Tea time ordering"]
    }
  },
  {
    id: "sourdough",
    slug: "sourdough",
    name: "Sourdough Bread",
    category: "Bread",
    collections: ["All Products", "Bread"],
    description: "Artisan sourdough loaves in three previously discussed flavour variations.",
    longDescription:
      "Crispy Crumbs offers sourdough bread in plain, olives and rosemary, and jalapeño and cheddar variations. These are loaf products rather than bucket items and should be ordered by size or loaf selection, pending final catalogue confirmation.",
    image: "/images/jalapeno and cheddar sourdough.jpeg",
    images: ["/images/jalapeno and cheddar sourdough.jpeg", "/images/banana bread.jpeg", "/images/hero-bakery.png"],
    altText: "Fresh sourdough bread loaves",
    available: true,
    flavours: ["Plain", "Olives and rosemary", "Jalapeño and cheddar"],
    variants: [
      { id: "sourdough-plain-loaf", flavour: "Plain", optionLabel: "Loaf", size: "Loaf", price: undefined, status: "needs_confirmation", available: true, internalNotes: "Previous proposed price is historical only." },
      { id: "sourdough-olives-rosemary-loaf", flavour: "Olives and rosemary", optionLabel: "Loaf", size: "Loaf", price: undefined, status: "needs_confirmation", available: true, internalNotes: "Previous proposed price is historical only." },
      { id: "sourdough-jalapeno-cheddar-loaf", flavour: "Jalapeño and cheddar", optionLabel: "Loaf", size: "Loaf", price: undefined, status: "needs_confirmation", available: true, internalNotes: "Previous proposed price is historical only." }
    ],
    seo: {
      title: "Artisan Sourdough Bread | Crispy Crumbs",
      description: "Explore sourdough bread from Crispy Crumbs, with plain, olives and rosemary, and jalapeño and cheddar options. Browse the available loaves and prices.",
      canonical: "/products/sourdough",
      keyword: "sourdough bread",
      keywords: ["sourdough bread", "artisan loaves", "jalapeño and cheddar sourdough", "olive rosemary sourdough"],
      ogTitle: "Artisan Sourdough Bread | Crispy Crumbs",
      ogDescription: "Plain, olives and rosemary, and jalapeño and cheddar sourdough loaves.",
      ogImage: "/images/jalapeno and cheddar sourdough.jpeg",
      alt: "Sourdough bread loaves from Crispy Crumbs",
      h1: "Sourdough Bread",
      h2: ["Flavour options", "Loaf selection", "Ordering details"]
    }
  },
  {
    id: "cinnamon-rolls",
    slug: "cinnamon-rolls",
    name: "Cinnamon Rolls",
    category: "Sweet Treats",
    collections: ["All Products", "Sweet Treats"],
    description: "Soft cinnamon rolls with cream cheese frosting in four favourites: cheesecake, chocolate chip, Oreo, and Biscoff.",
    longDescription:
      "Cinnamon rolls with cream cheese frosting are a customer favourite, served as a pack of four. Each variation is finished with indulgent toppings and a soft, bakery-fresh texture.",
    image: "/images/cinnamon-rolls.png",
    images: ["/images/cinnamon-rolls.png", "/images/Cinnamon rolls/Cinnamon rolls hero.png", "/images/Cinnamon rolls/Cinnamon rolls plain.png"],
    altText: "Cream cheese frosted cinnamon rolls",
    available: true,
    flavours: ["Cheesecake", "Chocolate chip", "Oreo", "Biscoff"],
    variants: [
      { id: "cinnamon-rolls-cheesecake-pack", flavour: "Cheesecake", optionLabel: "Pack of four", size: "Pack of four", price: undefined, status: "needs_confirmation", available: true, internalNotes: "Historical pricing is not confirmed current pricing." },
      { id: "cinnamon-rolls-chocolate-chip-pack", flavour: "Chocolate chip", optionLabel: "Pack of four", size: "Pack of four", price: undefined, status: "needs_confirmation", available: true, internalNotes: "Historical pricing is not confirmed current pricing." },
      { id: "cinnamon-rolls-oreo-pack", flavour: "Oreo", optionLabel: "Pack of four", size: "Pack of four", price: undefined, status: "needs_confirmation", available: true, internalNotes: "Historical pricing is not confirmed current pricing." },
      { id: "cinnamon-rolls-biscoff-pack", flavour: "Biscoff", optionLabel: "Pack of four", size: "Pack of four", price: undefined, status: "needs_confirmation", available: true, internalNotes: "Historical pricing is not confirmed current pricing." }
    ],
    seo: {
      title: "Cinnamon Rolls with Cream Cheese Frosting | Crispy Crumbs",
      description: "Discover cinnamon rolls from Crispy Crumbs, with cheesecake, chocolate chip, Oreo, and Biscoff variations. Explore available packs and ordering options.",
      canonical: "/products/cinnamon-rolls",
      keyword: "cinnamon rolls with cream cheese frosting",
      keywords: ["cinnamon rolls with cream cheese frosting", "cheesecake cinnamon rolls", "Oreo cinnamon rolls", "Biscoff cinnamon rolls"],
      ogTitle: "Cinnamon Rolls with Cream Cheese Frosting | Crispy Crumbs",
      ogDescription: "Cream cheese frosted cinnamon rolls in cheesecake, chocolate chip, Oreo and Biscoff flavours.",
      ogImage: "/images/cinnamon-rolls.png",
      alt: "Cinnamon rolls with cream cheese frosting",
      h1: "Cinnamon Rolls",
      h2: ["Flavour variations", "Pack size", "Sweet treat ordering"]
    }
  },
  {
    id: "jam-tarts",
    slug: "jam-tarts",
    name: "Jam Tarts",
    category: "Tea Time Delicacies",
    collections: ["All Products", "Tea Time Delicacies"],
    description: "South African-style jam tarts with apricot and fruit mince fillings in a classic six-tart pack.",
    longDescription:
      "Jam tarts are presented in classic South African bakery style, with apricot and fruit mince options. Each pack contains six tarts and is ideal for tea breaks, gifting, and small sharing platters.",
    image: "/images/hero-bakery.png",
    images: ["/images/hero-bakery.png", "/images/cookies.png", "/images/scones 1.jpeg"],
    altText: "Jam tarts with apricot and fruit mince fillings",
    available: true,
    flavours: ["Apricot", "Fruit mince"],
    variants: [
      { id: "jam-tarts-apricot-6", flavour: "Apricot", optionLabel: "Pack of six", size: "Pack of six", price: undefined, status: "needs_confirmation", available: true, internalNotes: "Historical proposed pricing requires validation against current catalogue." },
      { id: "jam-tarts-fruit-mince-6", flavour: "Fruit mince", optionLabel: "Pack of six", size: "Pack of six", price: undefined, status: "needs_confirmation", available: true, internalNotes: "Historical proposed pricing requires validation against current catalogue." }
    ],
    seo: {
      title: "South African Jam Tarts | Crispy Crumbs",
      description: "Explore South African-style jam tarts from Crispy Crumbs, with apricot and fruit mince options. Browse available packs and ordering details.",
      canonical: "/products/jam-tarts",
      keyword: "South African jam tarts",
      keywords: ["South African jam tarts", "apricot jam tarts", "fruit mince tarts", "tea time sweets"],
      ogTitle: "South African Jam Tarts | Crispy Crumbs",
      ogDescription: "Classic apricot and fruit mince jam tarts in six-tart packs.",
      ogImage: "/images/hero-bakery.png",
      alt: "South African style jam tarts",
      h1: "Jam Tarts",
      h2: ["Flavour options", "Pack size", "Tea time serving"]
    }
  },
  {
    id: "mix-and-match",
    slug: "mix-and-match",
    name: "Mix and Match",
    category: "Mix and Match",
    collections: ["All Products", "Mix and Match"],
    description: "Choose the Tea Time Box from the Crispy Crumbs Mix and Match range.",
    longDescription: "The Tea Time Box brings together an assortment of Crispy Crumbs baked treats in one box for sharing.",
    image: "/images/Tea Time Box open.jpg",
    images: ["/images/Tea Time Box open.jpg", "/images/Tea Time Box.jpg"],
    altText: "Open Crispy Crumbs Tea Time Box filled with baked treats",
    available: true,
    flavours: ["Tea Time Box"],
    variants: [
      { id: "mix-and-match-tea-time-box", flavour: "Tea Time Box", optionLabel: "Tea Time Box", size: "Tea Time Box", price: 250, status: "confirmed", available: true }
    ],
    seo: {
      title: "Mix and Match | Crispy Crumbs",
      description: "Explore Mix and Match from Crispy Crumbs and choose the Tea Time Box, priced at R250.",
      canonical: "/products/mix-and-match",
      keyword: "mix and match bakery box",
      keywords: ["mix and match", "tea time box", "bakery treat box", "Crispy Crumbs tea time"],
      ogTitle: "Mix and Match | Crispy Crumbs",
      ogDescription: "A Crispy Crumbs bakery assortment for sharing.",
      ogImage: "/images/Tea Time Box open.jpg",
      alt: "Open Crispy Crumbs Tea Time Box filled with baked treats",
      h1: "Mix and Match",
      h2: ["Tea time treats", "Box details", "Ordering"]
    }
  },
  {
    id: "brownies",
    slug: "brownies",
    name: "Brownies",
    category: "Sweet Treats",
    collections: ["All Products", "Sweet Treats"],
    description: "Rich, fudgy brownies with a classic crackle top and deep chocolate finish.",
    longDescription:
      "Brownies remain a core bakery staple, with a dense, fudgy texture and a satisfyingly crisp top. The exact flavour and box offerings should follow the confirmed catalogue version already in use on the website.",
    image: "/images/brownies.png",
    images: ["/images/brownies.png", "/images/hero-bakery.png", "/images/cookies.png"],
    altText: "Fudgy brownie slices from Crispy Crumbs",
    available: true,
    flavours: ["Classic"],
    variants: [
      { id: "brownies-classic", flavour: "Classic", optionLabel: "Classic box", size: "Classic box", price: undefined, status: "needs_confirmation", available: true, internalNotes: "Existing catalogue should be checked for confirmed box sizes and pricing." }
    ],
    seo: {
      title: "Brownies | Crispy Crumbs",
      description: "Explore brownies from Crispy Crumbs. Browse the available options, check pricing and select the product that suits your occasion.",
      canonical: "/products/brownies",
      keyword: "brownies",
      keywords: ["brownies", "fudgy brownies", "bakery brownies"],
      ogTitle: "Brownies | Crispy Crumbs",
      ogDescription: "Rich, fudgy brownies baked for gifting and sharing.",
      ogImage: "/images/brownies.png",
      alt: "Brownies from Crispy Crumbs",
      h1: "Brownies",
      h2: ["Available brownies", "Box options", "Ordering details"]
    }
  },
  {
    id: "cookies",
    slug: "cookies",
    name: "Cookies",
    category: "Sweet Treats",
    collections: ["All Products", "Sweet Treats"],
    description: "Classic cookies in the bakery's range, including the existing confirmed flavours and sizes already listed on the website.",
    longDescription:
      "Cookies are an established bakery favourite, with the current catalogue continuing to carry the site-approved flavours, sizes, and prices already in use. New variation assumptions should be avoided unless confirmed.",
    image: "/images/cookies.png",
    images: ["/images/cookies.png", "/images/hero-bakery.png", "/images/brownies.png"],
    altText: "Freshly baked cookies from Crispy Crumbs",
    available: true,
    flavours: ["Classic"],
    variants: [
      { id: "cookies-classic", flavour: "Classic", optionLabel: "Standard pack", size: "Standard pack", price: undefined, status: "needs_confirmation", available: true, internalNotes: "Use the confirmed website catalogue instead of guessing sizes or pricing." }
    ],
    seo: {
      title: "Cookies | Crispy Crumbs",
      description: "Browse cookies from Crispy Crumbs and explore the available varieties, pack sizes and ordering options.",
      canonical: "/products/cookies",
      keyword: "cookies",
      keywords: ["cookies", "bakery cookies", "bulk cookies"],
      ogTitle: "Cookies | Crispy Crumbs",
      ogDescription: "Fresh, bakery-made cookies from Crispy Crumbs.",
      ogImage: "/images/cookies.png",
      alt: "Cookies from Crispy Crumbs",
      h1: "Cookies",
      h2: ["Available varieties", "Pack options", "Ordering details"]
    }
  },
  {
    id: "cakes",
    slug: "cakes",
    name: "Cakes",
    category: "Cakes and Cupcakes",
    collections: ["All Products", "Cakes and Cupcakes"],
    description: "Celebration cakes and artisan cake options for special moments, family gatherings, and larger events.",
    longDescription:
      "The cake range is kept aligned to confirmed details already present in the bakery catalogue. Size, serving, and pricing decisions should follow the current approved records rather than generic bucket assumptions.",
    image: "/images/cakes.png",
    images: ["/images/cakes.png", "/images/cupcakes.png", "/images/hero-bakery.png"],
    altText: "Celebration cake from Crispy Crumbs",
    available: true,
    flavours: ["Classic"],
    variants: [
      { id: "cakes-standard", flavour: "Classic", optionLabel: "Confirmed cake option", size: "Confirmed cake option", price: undefined, status: "needs_confirmation", available: true, internalNotes: "Reviewed against the website catalogue before publishing final pricing." }
    ],
    seo: {
      title: "Cakes | Crispy Crumbs",
      description: "Explore cakes from Crispy Crumbs and browse available options for your celebration or special occasion. View confirmed sizes and ordering details.",
      canonical: "/products/cakes",
      keyword: "cakes",
      keywords: ["cakes", "celebration cakes", "bakery cakes"],
      ogTitle: "Cakes | Crispy Crumbs",
      ogDescription: "Celebrate with cakes from Crispy Crumbs.",
      ogImage: "/images/cakes.png",
      alt: "Cakes from Crispy Crumbs",
      h1: "Cakes",
      h2: ["Cake options", "Occasion sizing", "Ordering details"]
    }
  },
  {
    id: "cupcakes",
    slug: "cupcakes",
    name: "Cupcakes",
    category: "Cakes and Cupcakes",
    collections: ["All Products", "Cakes and Cupcakes"],
    description: "Cupcakes from the bakery's existing range, preserving the confirmed flavours and available pack options.",
    longDescription:
      "Cupcakes remain part of the bakery's range, preserving the flavours and pack sizes already approved in the current catalogue and website. No new cupcake flavours or pricing should be introduced without confirmation.",
    image: "/images/cupcakes.png",
    images: ["/images/cupcakes.png", "/images/hero-bakery.png", "/images/cakes.png"],
    altText: "Cupcakes from Crispy Crumbs",
    available: true,
    flavours: ["Classic"],
    variants: [
      { id: "cupcakes-standard", flavour: "Classic", optionLabel: "Pack option", size: "Pack option", price: undefined, status: "needs_confirmation", available: true, internalNotes: "Confirm pack size and final pricing before publication." }
    ],
    seo: {
      title: "Cupcakes | Crispy Crumbs",
      description: "Discover cupcakes from Crispy Crumbs and browse the available varieties, pack options and ordering details.",
      canonical: "/products/cupcakes",
      keyword: "cupcakes",
      keywords: ["cupcakes", "bakery cupcakes", "party cupcakes"],
      ogTitle: "Cupcakes | Crispy Crumbs",
      ogDescription: "Cupcakes from Crispy Crumbs with confirmed offering details.",
      ogImage: "/images/cupcakes.png",
      alt: "Cupcakes from Crispy Crumbs",
      h1: "Cupcakes",
      h2: ["Cupcake varieties", "Pack options", "Ordering details"]
    }
  }
];

export const catalogue: Product[] = products.filter((product) => !["cakes", "cupcakes", "cookies"].includes(product.id));
