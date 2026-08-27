export interface RestaurantInfo {
  name: string;
  tagline: string;
  eyebrow: string;
  signatureThought: string;
  address: {
    street: string;
    locality: string;
    sector: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    full: string;
  };
  phone: {
    display: string;
    raw: string;
    formatted: string;
  };
  whatsapp: {
    number: string;
    defaultMessage: string;
    messages: {
      reservation: string;
      celebration: string;
      corporate: string;
      menu: string;
    };
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: {
    allDays: string;
    lunch: string;
    dinner: string;
  };
  priceRange: string;
  cuisines: string[];
  googleMapsUrl: string;
  socials: {
    instagram?: string;
    facebook?: string;
    zomato?: string;
    swiggy?: string;
  };
}

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "Dumjosh",
  tagline: "Flavours sealed with energy and heart.",
  eyebrow: "PROGRESSIVE ASIAN • MODERN INDIAN • MEMORABLE HOSPITALITY",
  signatureThought: "FLAVOURS SEALED WITH ENERGY AND HEART.",
  address: {
    street: "104, Hazipur",
    locality: "Hazipur",
    sector: "Sector 104",
    city: "Noida",
    state: "Uttar Pradesh",
    postalCode: "201304",
    country: "India",
    full: "104, Hazipur, Sector 104, Noida, Uttar Pradesh 201304",
  },
  phone: {
    display: "085952 62617",
    raw: "+918595262617",
    formatted: "+91 85952 62617",
  },
  whatsapp: {
    number: "918595262617",
    defaultMessage: "Hello! I would like to know more about Dumjosh.",
    messages: {
      reservation: "Hello Dumjosh! I would like to reserve a table.",
      celebration: "Hello Dumjosh! I would like to enquire about hosting a celebration.",
      corporate: "Hello Dumjosh! I would like to enquire about corporate dining & food packages.",
      menu: "Hello Dumjosh! I would like to see today's recommendations and menu details.",
    },
  },
  coordinates: {
    lat: 28.5355,
    lng: 77.391,
  },
  hours: {
    allDays: "Monday to Sunday: 12:00 PM – 11:30 PM",
    lunch: "12:00 PM – 4:00 PM",
    dinner: "7:00 PM – 11:30 PM",
  },
  priceRange: "₹₹₹ (₹1,200 for two approx.)",
  cuisines: [
    "Modern Indian",
    "Progressive Asian",
    "Dum Biryani",
    "Mughlai",
    "Regional Indian (Saoji & Ghee Roast)",
    "Tandoor & Charcoal Grill",
  ],
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dumjosh+Sector+104+Noida+Uttar+Pradesh+201304",
  socials: {},
};

export const BRAND_STORY = {
  dum: {
    title: "DUM",
    meaning:
      "The art of sealing food and slow-cooking it over a low flame, allowing flavour, aroma, and richness to develop within the dish.",
    highlight: "Sealed Patience & Depth",
  },
  josh: {
    title: "JOSH",
    meaning:
      "Intensity, vibrancy, and spirited energy—the feeling that brings a dish, a room, and a celebration alive.",
    highlight: "Spirited Energy & Heart",
  },
  synthesis:
    "Together, Dum + Josh represents flavours sealed with energy and heart. A culinary identity built around slow cooking, regional Indian flavours, progressive Asian influences, and warm, memorable hospitality.",
  voice: [
    { title: "Warm", desc: "We make people feel welcome at every touchpoint." },
    { title: "Confident", desc: "We know our flavours, our heritage, and our story." },
    { title: "Energetic", desc: "There is life, colour, and Josh in the entire dining experience." },
    { title: "Rooted", desc: "We respect authentic techniques, culinary regions, and slow-cooking mastery." },
    { title: "Memorable", desc: "Every interaction should leave a lasting impression and taste behind." },
  ],
};
