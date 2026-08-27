import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DietaryBadge } from "@/components/ui/DietaryBadge";

const SIGNATURES = [
  {
    title: "Dumjosh Murgh Biryani",
    category: "Dum Pukht Basmati",
    price: "₹699",
    isVeg: false,
    isChefSpecial: true,
    description:
      "Fragrant aged basmati and tender marinated chicken slow-cooked in sealed clay handis with pure saffron, browned onions, and royal spices.",
    image: "/images/biryani-hero.png",
    featured: true,
  },
  {
    title: "Dumjosh Chicken Rara",
    category: "Slow-Cooked Curries",
    price: "₹699",
    isVeg: false,
    isChefSpecial: true,
    description:
      "Succulent boneless chicken pieces slow-simmered in an indulgent roasted keema gravy with whole spices.",
    image: "/images/dish-kadai-curry.jpg",
  },
  {
    title: "Dumjosh Gosht Biryani",
    category: "Awadhi Legacy",
    price: "₹799",
    isVeg: false,
    isChefSpecial: true,
    description:
      "Succulent mutton pieces slow-cooked on dum in sealed pots with aromatic long-grain rice until meltingly tender.",
    image: "/images/dish-curry-copper.jpg",
  },
  {
    title: "Saoji Preparations (Chicken / Mutton / Paneer)",
    category: "Regional Indian • Vidarbha",
    price: "From ₹599",
    isVeg: false,
    isSpicy: true,
    description:
      "The fiery, stone-ground black masala heritage of Nagpur, celebrating unapologetic rustic spices and depth.",
    image: "/images/dish-roganjosh-bowl.jpg",
  },
  {
    title: "Ghee Roast Preparations",
    category: "Regional Indian • Mangalore",
    price: "From ₹599",
    isVeg: false,
    isChefSpecial: true,
    description:
      "Coastal Karnataka's crown recipe, braised in pure fragrant desi ghee and freshly roasted whole Byadgi chillies.",
    image: "/images/dish-lotus-wok.jpg",
  },
];

export function SignatureDishesSection() {
  const mainFeature = SIGNATURES[0];
  const supportingDishes = SIGNATURES.slice(1);

  return (
    <section className="py-20 md:py-32 bg-brand-ebony text-brand-light relative overflow-hidden">
      {/* Decorative radial gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-brand-burgundy/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Culinary Showstoppers"
          title="A Table Worth Remembering"
          subtitle="Signature flavours created with depth, technique, and Dumjosh energy."
          theme="dark"
        />

        {/* Large Editorial Feature + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Main Hero Card (Dumjosh Murgh Biryani) */}
          <div className="lg:col-span-6 bg-brand-ebony-soft border border-brand-gold/40 p-8 sm:p-10 flex flex-col justify-between group hover:border-brand-gold transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-sans uppercase tracking-widest text-brand-gold">
                  {mainFeature.category}
                </span>
                <span className="font-serif text-2xl text-brand-gold font-normal">
                  {mainFeature.price}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-brand-light uppercase tracking-wide group-hover:text-brand-gold transition-colors">
                {mainFeature.title}
              </h3>

              <div className="my-4">
                <DietaryBadge
                  isVeg={mainFeature.isVeg}
                  isChefSpecial={mainFeature.isChefSpecial}
                  showText
                />
              </div>

              <p className="text-sm sm:text-base text-brand-cream/75 font-sans font-light leading-relaxed mb-6">
                {mainFeature.description}
              </p>
            </div>

            <div className="relative w-full h-72 sm:h-80 overflow-hidden mt-4">
              <Image
                src={mainFeature.image}
                alt={mainFeature.title}
                fill
                className="object-contain transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Supporting Dishes 2x2 Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {supportingDishes.map((dish, idx) => (
              <div
                key={idx}
                className="bg-brand-ebony-soft/80 border border-brand-gold/20 p-6 flex flex-col justify-between hover:border-brand-gold/60 transition-all duration-300 group"
              >
                <div>
                  <div className="relative w-full h-36 mb-4 overflow-hidden border border-white/5">
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-brand-gold mb-1">
                    <span className="uppercase tracking-wider font-sans text-[10px]">
                      {dish.category}
                    </span>
                    <span className="font-serif font-medium">{dish.price}</span>
                  </div>

                  <h4 className="font-serif text-lg text-brand-light uppercase group-hover:text-brand-gold transition-colors leading-snug">
                    {dish.title}
                  </h4>

                  <div className="my-2">
                    <DietaryBadge
                      isVeg={dish.isVeg}
                      isSpicy={dish.isSpicy}
                      isChefSpecial={dish.isChefSpecial}
                    />
                  </div>

                  <p className="text-xs text-brand-cream/70 font-sans line-clamp-3 leading-relaxed mt-2">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action button */}
        <div className="text-center pt-4">
          <Button variant="gold" size="lg" href="/menu">
            View Full Menu (All 12 Categories)
          </Button>
        </div>
      </div>
    </section>
  );
}
