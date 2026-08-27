import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CelebrationEnquiryForm } from "@/components/celebrations/CelebrationEnquiryForm";
import { Sparkles, Gift, Heart, Users, CheckCircle, Cake } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Celebrations & Private Events • Dumjosh Sector 104 Noida",
  description:
    "Host your birthday parties, anniversaries, family gatherings, and milestone celebrations at Dumjosh Sector 104 Noida. Custom party packages and royal hospitality.",
};

export default function CelebrationsPage() {
  const occasions = [
    {
      title: "Milestone Birthdays",
      icon: Cake,
      desc: "Turn another year into an occasion with candlelit tables, celebratory desserts, and personalized menus.",
    },
    {
      title: "Anniversary Evenings",
      icon: Heart,
      desc: "Romantic alcove seating, bespoke beverage pairings, and intimate Awadhi culinary creations.",
    },
    {
      title: "Family Feasts & Reunions",
      icon: Users,
      desc: "Generous handi biryanis and sharing platters that make grandparents, parents, and kids feel at home.",
    },
    {
      title: "Private Group Dining",
      icon: Sparkles,
      desc: "Dedicated sections closed off for private gatherings of 15 to 60+ guests with personalized staff.",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-brand-cream text-brand-dark min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-brand-ebony text-brand-light text-center border-b border-brand-gold/30 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/interior-dining-2.jpg"
            alt="Dumjosh Celebrations Hall Sector 104 Noida"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ebony via-brand-ebony/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold">
            Occasions &amp; Banquets
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide">
            Celebrate at Dumjosh
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-brand-cream/80 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            From intimate anniversary toasts to grand multi-generational family milestones, we turn your cherished occasions into regal memories in Sector 104, Noida.
          </p>
          <div className="w-16 h-[2px] bg-brand-gold/60 mx-auto mt-4" />
        </div>
      </section>

      {/* Occasions Showcase */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <SectionHeading
          eyebrow="Curated Occasions"
          title="Make Every Gathering Unforgettable"
          subtitle="Discover how our dedicated hospitality staff prepares your table for the moments that matter."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {occasions.map((occ, idx) => {
            const Icon = occ.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white border border-brand-gold/30 shadow-sm space-y-3 hover:border-brand-gold transition-colors"
              >
                <div className="w-10 h-10 bg-brand-burgundy/10 border border-brand-gold/30 flex items-center justify-center text-brand-burgundy">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl uppercase text-brand-burgundy font-medium">
                  {occ.title}
                </h3>
                <p className="text-xs text-brand-dark/70 font-sans leading-relaxed font-light">
                  {occ.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Celebration Perks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-ebony text-brand-light p-8 sm:p-12 border border-brand-gold/40 shadow-luxury mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold">
              The Celebration Advantage
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl uppercase leading-tight font-normal">
              Hospitality Tailored for Joy
            </h3>
            <p className="text-xs sm:text-sm text-brand-cream/80 font-sans font-light leading-relaxed">
              We handle every minute detail so that the hosts can unwind and celebrate alongside their guests.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-brand-cream/90 font-sans">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Dedicated private or semi-private seating section reserved for your group.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Customized multi-course food packages with live starter circulation.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Celebratory cake presentation and custom decorative arrangements on request.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Complimentary kids hospitality (under 5 years) and flexible group seating.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-72 sm:h-80 border border-brand-gold/30 overflow-hidden">
            <Image
              src="/images/interior-round-booth.jpg"
              alt="Private Booths for Celebrations"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Enquiry Form */}
        <CelebrationEnquiryForm />
      </div>
    </div>
  );
}
