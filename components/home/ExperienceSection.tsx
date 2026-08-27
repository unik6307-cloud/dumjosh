import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Coffee, UtensilsCrossed, Briefcase, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const EXPERIENCES = [
  {
    icon: Coffee,
    title: "Quick Coffee & Bites",
    subtitle: "A Relaxed Pause",
    description:
      "A relaxed pause, a conversation, and something delicious to accompany the moment. Artisanal beverages, comforting savouries, and a serene ambiance.",
    image: "/images/dish-cocktail-mango.jpg",
    link: "/experience#coffee",
  },
  {
    icon: UtensilsCrossed,
    title: "Leisurely Meals",
    subtitle: "Discovery & Sharing",
    description:
      "Warm, flavour-forward dining made for discovery, sharing, and unhurried conversations. Generous biryanis, tandoori platters, and authentic curries.",
    image: "/images/interior-round-booth.jpg",
    link: "/experience#leisurely",
  },
  {
    icon: Briefcase,
    title: "Corporate Dining",
    subtitle: "Business Hospitality",
    description:
      "A premium destination for executive lunches, team milestone meals, and hosted business gatherings with dedicated package pricing.",
    image: "/images/corporate-dining-hall.jpg",
    link: "/corporate",
  },
  {
    icon: Sparkles,
    title: "Special Celebrations",
    subtitle: "Moments That Matter",
    description:
      "A warm, opulent setting for birthdays, anniversaries, and family reunions with custom menus, cake service, and personalized hospitality.",
    image: "/images/interior-dining-2.jpg",
    link: "/celebrations",
  },
];

export function ExperienceSection() {
  return (
    <section className="py-20 md:py-32 bg-brand-ebony text-brand-light relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-terracotta/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dining Occasions"
          title="Made For Every Kind of Moment"
          subtitle="A menu and atmosphere built to encourage discovery, sharing, and unhurried hospitality."
          theme="dark"
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {EXPERIENCES.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="bg-brand-ebony-soft border border-brand-gold/25 p-6 sm:p-7 flex flex-col justify-between hover:border-brand-gold transition-all duration-300 group"
              >
                <div>
                  <div className="relative w-full h-44 mb-6 overflow-hidden border border-white/5">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="w-10 h-10 rounded-none bg-brand-burgundy/60 border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-4 group-hover:bg-brand-gold group-hover:text-brand-ebony transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] uppercase tracking-widest text-brand-gold font-sans block mb-1">
                    {exp.subtitle}
                  </span>

                  <h3 className="font-serif text-xl text-brand-light uppercase group-hover:text-brand-gold transition-colors mb-3">
                    {exp.title}
                  </h3>

                  <p className="text-xs text-brand-cream/75 font-sans font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-brand-gold/15">
                  <Link
                    href={exp.link}
                    className="inline-flex items-center text-xs uppercase tracking-luxury text-brand-gold hover:text-brand-light transition-colors group-hover:translate-x-1 duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Book Quote Callout */}
        <div className="p-8 sm:p-12 border border-brand-gold/40 bg-gradient-to-r from-brand-ebony via-brand-burgundy/40 to-brand-ebony text-center max-w-4xl mx-auto">
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-brand-light tracking-wide leading-snug">
            “At Dumjosh, hospitality is not an afterthought. It is part of the dish.”
          </p>
          <div className="w-16 h-[1.5px] bg-brand-gold/60 mx-auto mt-6" />
          <p className="text-xs uppercase tracking-widest text-brand-gold font-sans mt-3">
            Dumjosh Brand Manifesto
          </p>
        </div>
      </div>
    </section>
  );
}
