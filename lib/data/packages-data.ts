export interface PackageCourse {
  title: string;
  selectLimit: string;
  options: string[];
}

export interface FoodPackage {
  id: string;
  name: string;
  pricePerPerson: number;
  priceFormatted: string;
  minimumGuarantee: number;
  duration: string;
  tagline: string;
  courses: PackageCourse[];
}

export const FOOD_PACKAGES: FoodPackage[] = [
  {
    id: "veg-corporate",
    name: "Executive Vegetarian Celebration Package",
    pricePerPerson: 1299,
    priceFormatted: "₹1,299 + taxes per person",
    minimumGuarantee: 20,
    duration: "3 Hours Exclusive Dining",
    tagline: "A lavish multi-course spread crafted for corporate teams and family milestones.",
    courses: [
      {
        title: "Soft Beverages",
        selectLimit: "Any 03",
        options: ["Coke", "Sprite", "Soda", "Fresh Lime Water / Soda"],
      },
      {
        title: "Signature Mocktails",
        selectLimit: "Any 02",
        options: [
          "Virgin Mojito",
          "Masala Mint Cooler",
          "Blue Sparkle",
          "Lemon Iced Tea",
          "Peach Iced Tea",
          "Masala Coke",
        ],
      },
      {
        title: "Vegetarian Starters",
        selectLimit: "Any 03",
        options: [
          "Chutney Wala Paneer Tikka",
          "Dhuniwala Paneer Tikka",
          "Tandoori Soya Chaap",
          "Makhmali Malai Soya Chaap",
          "Palak Patta-e-Zaika",
          "Palak Corn Cheese Spring Roll",
          "Hara Bhara Kebab",
          "Beetroot Kebab",
          "Dahi Ke Kebab",
          "Crispy Lotus Stem in Honey Chilli Sauce",
          "Veg Salt & Pepper",
          "Chilli Paneer Dry",
          "Chilli Mushroom",
          "Aloo Chana Chaat",
          "Chinese Bhel",
          "French Fries (Peri Peri or Plain)",
          "Crispy Corn",
        ],
      },
      {
        title: "Main Course Vegetarian",
        selectLimit: "Any 03",
        options: [
          "Paneer Butter Masala",
          "Kadai Paneer",
          "Paneer Makhani",
          "Paneer Do Pyaza",
          "Paneer Tikka Masala",
          "Spicy Saoji Paneer",
          "Kofta E Khaas",
          "Palak E Kamal",
          "Subz Diwani Handi",
          "Mushroom Do Pyaza",
          "Aloo Gobhi Masala",
          "Aloo E Dum Josh",
          "Chilli Paneer Gravy",
          "Veg Manchurian Gravy",
        ],
      },
      {
        title: "Signature Dal",
        selectLimit: "Any 01",
        options: [
          "Dumjosh Dal Makhani (Overnight slow-cooked black dal)",
          "Handi Dal Tadka (Clay pot yellow dal)",
          "Muradabadi Dal (Aromatic light dal)",
        ],
      },
      {
        title: "Rice & Noodles",
        selectLimit: "Any 01",
        options: [
          "Subz-E-Mehekti Biryani",
          "Jeera Rice",
          "Peas Pulao",
          "Plain Steamed Rice",
          "Veg Fried Rice",
          "Hakka Noodles Veg",
          "Chilli Garlic Noodles Veg",
          "Penne Pasta Veg (Red / White / Pink Sauce)",
        ],
      },
      {
        title: "Artisanal Breads",
        selectLimit: "Assorted Included",
        options: [
          "Tandoori Roti (Plain & Butter)",
          "Naan (Plain & Butter)",
          "Lachcha Paratha",
          "Missi Roti",
        ],
      },
      {
        title: "Salads & Accompaniments",
        selectLimit: "Any 01 Salad + Any 01 Raita",
        options: [
          "Garden Green Salad",
          "Pasta Salad",
          "Potato & Chickpea Salad",
          "Russian Salad",
          "Mix Veg Raita",
          "Boondi Raita",
          "Pineapple Raita",
        ],
      },
      {
        title: "Desserts",
        selectLimit: "Any 01",
        options: [
          "Kesar Phirni",
          "Warm Gulab Jamun",
          "Chocolate Walnut Brownie",
          "Vanilla Ice Cream with Hot Chocolate",
        ],
      },
    ],
  },
  {
    id: "nonveg-corporate",
    name: "Royal Non-Vegetarian Celebration Package",
    pricePerPerson: 1599,
    priceFormatted: "₹1,599 + taxes per person",
    minimumGuarantee: 20,
    duration: "3 Hours Exclusive Dining",
    tagline: "An opulent feast featuring royal kebabs, tandoori grills, slow-cooked curries and desserts.",
    courses: [
      {
        title: "Soft Beverages",
        selectLimit: "Any 03",
        options: ["Coke", "Sprite", "Soda", "Fresh Lime Water / Soda"],
      },
      {
        title: "Signature Mocktails",
        selectLimit: "Any 02",
        options: [
          "Virgin Mojito",
          "Masala Mint Cooler",
          "Blue Sparkle",
          "Lemon Iced Tea",
          "Peach Iced Tea",
          "Masala Coke",
        ],
      },
      {
        title: "Starters (Veg & Non-Veg)",
        selectLimit: "Any 03 Non-Veg + Any 03 Veg",
        options: [
          "Angaare Tandoori Murgh",
          "Dhuniwala Murgh Tikka",
          "Dhaniya Murgh Cheese Tikka",
          "Reshmi Chicken Tikka",
          "Crispy Chicken",
          "Chicken Seekh Kebab",
          "Mutton Seekh Kebab",
          "Charbagh Mutton Ke Shami Kebab",
          "Maharaja Club Fish Tikka",
          "Amritsari Crunchy Fish Fry",
          "Chilli Chicken Dry",
          "Chicken 65",
          "Chilli Fish",
          "Plus All Vegetarian Starters Selection",
        ],
      },
      {
        title: "Main Course Non-Vegetarian",
        selectLimit: "Any 01",
        options: [
          "Dumjosh Chicken Rara (Chef Special)",
          "Butter Chicken (Delhi's Classic)",
          "Matia Mahal Chicken Mughlai",
          "Chicken Nihar Josh",
          "Kadai Chicken",
          "Cooker Wala Kukkad",
          "Saoji Chicken (Nagpur Spiced)",
          "Chilli Chicken Gravy",
          "Egg Curry",
        ],
      },
      {
        title: "Main Course Vegetarian",
        selectLimit: "Any 03",
        options: [
          "Paneer Butter Masala",
          "Kadai Paneer",
          "Paneer Makhani",
          "Paneer Do Pyaza",
          "Paneer Tikka Masala",
          "Kofta E Khaas",
          "Palak E Kamal",
          "Subz Diwani Handi",
          "Mushroom Do Pyaza",
          "Aloo Gobhi Masala",
          "Veg Manchurian Gravy",
        ],
      },
      {
        title: "Signature Dal",
        selectLimit: "Any 01",
        options: [
          "Dumjosh Dal Makhani (Overnight slow-cooked black dal)",
          "Handi Dal Tadka (Clay pot yellow dal)",
          "Muradabadi Dal (Aromatic light dal)",
        ],
      },
      {
        title: "Rice & Noodles",
        selectLimit: "Any 01",
        options: [
          "Subz-E-Mehekti Biryani",
          "Jeera Rice",
          "Peas Pulao",
          "Plain Steamed Rice",
          "Veg Fried Rice",
          "Hakka Noodles Veg",
          "Chilli Garlic Noodles Veg",
        ],
      },
      {
        title: "Artisanal Breads",
        selectLimit: "Assorted Included",
        options: [
          "Tandoori Roti (Plain & Butter)",
          "Naan (Plain & Butter)",
          "Lachcha Paratha",
          "Missi Roti",
        ],
      },
      {
        title: "Salads & Accompaniments",
        selectLimit: "Any 01 Salad + Any 01 Raita",
        options: [
          "Garden Green Salad",
          "Pasta Salad",
          "Potato & Chickpea Salad",
          "Russian Salad",
          "Mix Veg Raita",
          "Boondi Raita",
          "Pineapple Raita",
        ],
      },
      {
        title: "Desserts",
        selectLimit: "Any 01",
        options: [
          "Kesar Phirni",
          "Warm Gulab Jamun",
          "Chocolate Walnut Brownie",
          "Vanilla Ice Cream with Hot Chocolate",
        ],
      },
    ],
  },
];

export const PACKAGE_TERMS = [
  "Package will be applicable for a comfortable 3-hour dining window.",
  "Exclusive reserved area designated specifically for your party or corporate delegation.",
  "Drinks and starters will be offered as per package; extra orders charged on an à la carte basis.",
  "Rates are based on a minimum guarantee of 20 guests; if the count decreases, package rates may be adjusted accordingly.",
  "Kids below 5 years are complimentary; kids between 5 to 10 years are charged at 50% of the package price.",
  "Above 10 years will be charged at the standard package price.",
  "Government taxes as applicable.",
];
