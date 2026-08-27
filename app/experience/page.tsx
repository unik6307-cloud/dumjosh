import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Coffee, UtensilsCrossed, Briefcase, Sparkles, Clock, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "The Dumjosh Experience • Dining Occasions in Noida Sector 104",
  description:
    "Discover the Dumjosh experience in Sector 104, Noida: from unhurried coffee moments to royal leisurely feasts, business lunches, and milestone celebrations.",
};

export default function ExperiencePage() {
  const experiences = [
    {
      id: "coffee",
      icon: Coffee,
      title: "Quick Coffee & Savoury Bites",
      eyebrow: "The Midday Pause",
      headline: "A Relaxed Pause & Engaging Conversations",
      description:
        "Whether you are stepping away from the desk for an afternoon recharge or connecting with a friend over handcrafted brews, Dumjosh provides a tranquil retreat. Pair your cup with crisp Kurkure Nadru, Palak Patta-e-Zaika, or light chaats crafted with artisanal finesse.",
      image: "/images/dish-cocktail-mango.jpg",
      bullets: [
        "Quiet ambient seating with soft background instrumental acoustics.",
        "Quick daytime savory nibbles and refreshing signature mocktails.",
        "Complimentary high-speed connectivity for working pauses.",
      ],
    },
    {
      id: "leisurely",
      icon: UtensilsCrossed,
      title: "Leisurely Meals",
      eyebrow: "The Sacred Ritual",
      headline: "Discovery, Generous Sharing & Unhurried Dining",
      description:
        "Food tastes better when eaten together without checking the clock. Our leisurely dining experience is designed around sharing platters, dough-sealed handis of biryani brought smoking to the table, and fragrant curries scooped up with blistered tandoori naans.",
      image: "/images/interior-round-booth.jpg",
      bullets: [
        "Plush velvet booths designed for complete comfort.",
        "Courses paced thoughtfully by our attentive captains.",
        "Generous sharing portions celebrating the spirit of Indian hospitality.",
      ],
    },
    {
      id: "corporate",
      icon: Briefcase,
      title: "Corporate Dining",
      eyebrow: "Business Hospitality",
      headline: "A Premium Destination for Executive Teams",
      description:
        "Hospitality is an investment in human connection. We assist Noida’s corporate leadership with private banquet halls, express lunch buffets, and multi-course dining packages tailored for team wins and client entertaining.",
      image: "/images/corporate-dining-hall.jpg",
      bullets: [
        "Dedicated corporate packages starting from ₹1,299+ taxes.",
        "Exclusive reserved dining hall sections for 20 to 100+ attendees.",
        "Flawless corporate invoicing, GST compliance, and event coordination.",
      ],
    },
    {
      id: "celebrations",
      icon: Sparkles,
      title: "Special Celebrations",
      eyebrow: "Milestone Memories",
      headline: "Occasions That Deserve to be Remembered",
      description:
        "Birthdays, wedding anniversaries, family reunions, and promotions require more than just good food—they require heart. Our celebrations team curates floral arrangements, celebratory desserts, and personalized menus.",
      image: "/images/interior-dining-2.jpg",
      bullets: [
        "Dedicated event coordination and custom menu tastings.",
        "Celebratory cake presentation and custom table decor.",
        "Family-friendly seating accommodating all generations.",
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-brand-cream text-brand-dark min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-brand-ebony text-brand-light text-center border-b border-brand-gold/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold">
            The Ambiance &amp; Hospitality
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide">
            The Dumjosh Experience
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-brand-cream/80 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            We do not simply serve food; we choreograph atmosphere, warmth, and memorable encounters in Sector 104, Noida.
          </p>
          <div className="w-16 h-[2px] bg-brand-gold/60 mx-auto mt-4" />
        </div>
      </section>

      {/* 4 Deep Experience Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">
        {experiences.map((exp, idx) => {
          const isReversed = idx % 2 !== 0;
          const Icon = exp.icon;
          return (
            <div
              key={exp.id}
              id={exp.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center scroll-mt-32 ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div
                className={`lg:col-span-6 relative h-80 sm:h-[420px] border border-brand-gold/40 shadow-luxury overflow-hidden ${
                  isReversed ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ebony/60 via-transparent to-transparent" />
              </div>

              {/* Text Side */}
              <div className={`lg:col-span-6 space-y-5 ${isReversed ? "lg:order-1" : ""}`}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-none bg-brand-burgundy/10 border border-brand-gold/40 flex items-center justify-center text-brand-burgundy">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">
                    {exp.eyebrow}
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-brand-burgundy uppercase leading-tight font-normal">
                  {exp.headline}
                </h2>

                <p className="text-sm sm:text-base text-brand-dark/80 font-sans font-light leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-brand-dark/75 font-sans">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-brand-gold font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  {exp.id === "corporate" ? (
                    <Button variant="burgundy" size="md" href="/corporate">
                      View Corporate Packages
                    </Button>
                  ) : exp.id === "celebrations" ? (
                    <Button variant="burgundy" size="md" href="/celebrations">
                      Plan Your Celebration
                    </Button>
                  ) : (
                    <Button variant="gold" size="md" href="/menu">
                      Explore Related Menu
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Manifesto Callout */}
      <section className="py-16 bg-brand-burgundy text-brand-light text-center border-t border-brand-gold/40">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <p className="font-serif italic text-2xl sm:text-3xl text-brand-cream leading-relaxed font-light">
            “To create an experience where the food feels generous, the flavours feel alive, and every guest leaves with a reason to come back.”
          </p>
          <p className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold mt-2">
            The Dumjosh Brand Promise
          </p>
        </div>
      </section>
    </div>
  );
}
