import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

const WORLDS = [
  {
    title: "Biryani & Dum",
    subtitle: "Aged Basmati • Dough-Sealed Handis",
    description:
      "Fragrant rice, carefully layered ingredients and the timeless art of dum cooking. Choose from Lucknowi, Hyderabadi, and Kolkata styles freshly dum for you.",
    image: "/images/biryani-hero.png",
    link: "/menu?category=Biryani+Region",
  },
  {
    title: "Regional Indian",
    subtitle: "Saoji • Ghee Roast • Awadhi Heritage",
    description:
      "Bold, deep, and unapologetically authentic. Spices stone-ground to preserve heritage recipes from Vidarbha, coastal Mangalore, Rampur, and Old Delhi.",
    image: "/images/dish-roganjosh-bowl.jpg",
    link: "/menu?category=Slow-Cooked+Curries",
  },
  {
    title: "Asian Favourites",
    subtitle: "Indo-Chinese Wok Specialities",
    description:
      "Crispy lotus stem in honey chilli glaze, wok-tossed noodles, and fiery Manchurian classics served with vibrant Dumjosh energy.",
    image: "/images/dish-lotus-wok.jpg",
    link: "/menu?category=Indo-Chinese",
  },
  {
    title: "Tandoor & Grill",
    subtitle: "Coal-Fired Bhatti Kebabs & Tikkas",
    description:
      "Smoky, charred, and bhatti-inspired sharing platters. From Dhuniwala Paneer to Mutton Shami Kebabs and Amritsari fish fry.",
    image: "/images/dish-kadai-curry.jpg",
    link: "/menu?category=Savory+Bites",
  },
  {
    title: "Slow-Cooked Curries",
    subtitle: "Rich Gravies • Overnight Dal",
    description:
      "Rich, aromatic gravies and signature preparations built around patience and depth. Overnight slow-cooked black dal, Mutton Nihar Josh, and Paneer Makhani.",
    image: "/images/dish-mutton-gravy.jpg",
    link: "/menu?category=Slow-Cooked+Curries",
  },
  {
    title: "The Celebration Table",
    subtitle: "Sharing Platters • Family Dining",
    description:
      "Plates designed for coffee conversations, leisurely meals, family dining, executive luncheons, and milestones that deserve to be celebrated.",
    image: "/images/dish-thali-spread.jpg",
    link: "/celebrations",
  },
];

export function CulinaryWorldsSection() {
  return (
    <section className="py-20 md:py-32 bg-brand-cream text-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Culinary Worlds"
          title="A Journey Through Flavour"
          subtitle="Explore the distinct worlds that unite under the Dumjosh banner in Sector 104, Noida."
        />

        {/* 6 Interactive Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WORLDS.map((world, idx) => (
            <Link
              key={idx}
              href={world.link}
              className="group relative h-96 sm:h-[420px] overflow-hidden border border-brand-gold/30 bg-brand-ebony block shadow-luxury"
            >
              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0">
                <Image
                  src={world.image}
                  alt={world.title}
                  fill
                  className="object-cover object-center transform group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ebony via-brand-ebony/60 to-transparent" />
              </div>

              {/* Card Content Overlay */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-widest text-brand-gold bg-brand-ebony/80 px-2.5 py-1 border border-brand-gold/40">
                    World 0{idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold bg-brand-ebony/60 group-hover:bg-brand-gold group-hover:text-brand-ebony transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-luxury text-brand-gold/90 font-sans block">
                    {world.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-light uppercase group-hover:text-brand-gold transition-colors">
                    {world.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-cream/80 font-sans font-light leading-relaxed pt-2 line-clamp-3">
                    {world.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
