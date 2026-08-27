export interface GalleryItem {
  id: string;
  title: string;
  category:
    | "Restaurant Interior"
    | "Signature Dishes"
    | "Dining Experience"
    | "Table Settings"
    | "Celebrations"
    | "Corporate Dining";
  image: string;
  description: string;
  featured?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "The Regal Dining Salon",
    category: "Restaurant Interior",
    image: "/images/hero-interior.jpg",
    description: "Opulent velvet seating, artisan patterned armchairs, and heritage floor tiles creating a royal sanctuary.",
    featured: true,
  },
  {
    id: "g2",
    title: "Signature Dumjosh Biryani Handi",
    category: "Signature Dishes",
    image: "/images/biryani-hero.png",
    description: "Traditional clay and copper vessel sealed with dough to capture aromatic saffron basmati steam.",
    featured: true,
  },
  {
    id: "g3",
    title: "Private Alcove & Circular Booths",
    category: "Table Settings",
    image: "/images/interior-round-booth.jpg",
    description: "Intimate circular booths beneath arched windows designed for unhurried conversations.",
    featured: true,
  },
  {
    id: "g4",
    title: "Wok-Tossed Lotus Stem Delicacy",
    category: "Signature Dishes",
    image: "/images/dish-lotus-wok.jpg",
    description: "Crispy lotus stem infused with honey chilli glaze and Asian spices.",
    featured: false,
  },
  {
    id: "g5",
    title: "The Grand Banquet Hall",
    category: "Corporate Dining",
    image: "/images/corporate-dining-hall.jpg",
    description: "Spacious luxury setting configured for executive teams, milestone dinners, and meetings.",
    featured: true,
  },
  {
    id: "g6",
    title: "Royal Awadhi & Mughlai Thali",
    category: "Dining Experience",
    image: "/images/dish-thali-spread.jpg",
    description: "A lavish presentation of slow-cooked curries, warm breads, aromatic rice, and accompaniments.",
    featured: true,
  },
  {
    id: "g7",
    title: "Slow-Simmered Dal Dumjosh Makhani",
    category: "Signature Dishes",
    image: "/images/dish-dal-makhani.jpg",
    description: "Black lentils slow-cooked overnight in Dum Pukht tradition with white butter.",
    featured: false,
  },
  {
    id: "g8",
    title: "Celebration Table Ready for Guests",
    category: "Celebrations",
    image: "/images/interior-dining-2.jpg",
    description: "Immaculate crystal glassware, custom linen, and vibrant warmth for memorable family gatherings.",
    featured: true,
  },
  {
    id: "g9",
    title: "Bhatti-Smoked Tandoori Breads",
    category: "Signature Dishes",
    image: "/images/dish-bread-basket.jpg",
    description: "Freshly pulled naan and lachha paranthas straight from the clay tandoor.",
    featured: false,
  },
  {
    id: "g10",
    title: "Sunlit Window Dining Pavilion",
    category: "Restaurant Interior",
    image: "/images/interior-dining-3.jpg",
    description: "Warm daylight illuminating plush burgundy banquettes and antique brass chandeliers.",
    featured: false,
  },
  {
    id: "g11",
    title: "Kashmiri Mutton Nihar Josh",
    category: "Signature Dishes",
    image: "/images/dish-mutton-gravy.jpg",
    description: "Tender shanks slow-simmered with bone marrow, Kashmiri chillies, and mace.",
    featured: true,
  },
  {
    id: "g12",
    title: "Handcrafted Artisan Coolers",
    category: "Dining Experience",
    image: "/images/dish-cocktail-red.jpg",
    description: "Refreshing botanical mocktails infused with mint, pomegranate, and citrus notes.",
    featured: false,
  },
  {
    id: "g13",
    title: "Architectural Main Dining Hall",
    category: "Restaurant Interior",
    image: "/images/interior-hall.jpg",
    description: "Contemporary luxury dining architecture complemented by royal Indian warmth.",
    featured: false,
  },
  {
    id: "g14",
    title: "Royal Paneer in Velvet Cream Gravy",
    category: "Signature Dishes",
    image: "/images/dish-paneer-cream.jpg",
    description: "Cottage cheese swirls simmered in creamy makhani reduction.",
    featured: false,
  },
];
