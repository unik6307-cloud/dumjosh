import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Sparkles, Heart, Gift, Users } from "lucide-react";

export function CelebrationFeature() {
  const occasions = [
    { title: "Milestone Birthdays", icon: Gift, text: "Curated feasts, cake ceremonies & bespoke table settings." },
    { title: "Anniversaries", icon: Heart, text: "Intimate circular booths with candlelit ambiance & private dining." },
    { title: "Family Gatherings", icon: Users, text: "Grand sharing platters, biryanis & multi-generational comfort." },
    { title: "Special Milestones", icon: Sparkles, text: "Graduations, promotions, and momentous gatherings with colleagues." },
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-cream text-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Mosaic */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[500px] w-full border border-brand-gold/40 shadow-2xl overflow-hidden">
              <Image
                src="/images/interior-dining-2.jpg"
                alt="Dumjosh Celebration Table Setting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ebony/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-sm border border-brand-gold/30">
                <p className="font-serif text-lg text-brand-burgundy uppercase">
                  Memorable Gatherings in Sector 104
                </p>
                <p className="text-xs text-brand-dark/75 font-sans mt-1">
                  Private sections available for intimate parties and large delegations.
                </p>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-brand-burgundy text-brand-gold border border-brand-gold p-4 shadow-xl">
              <p className="text-xs uppercase tracking-widest font-sans font-semibold">
                Celebration Desk
              </p>
              <p className="font-serif text-sm text-brand-light mt-0.5">
                Bespoke Arrangements
              </p>
            </div>
          </div>

          {/* Right Column: Copy & Occasions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-brand-terracotta font-semibold">
              <span>Occasions &amp; Gatherings</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-burgundy uppercase leading-tight font-normal">
              Make The Table A Little More Special
            </h2>

            <p className="text-base sm:text-lg text-brand-dark/80 font-sans font-light leading-relaxed">
              Create memorable moments with thoughtful food, warm hospitality, and a premium dining environment designed to bring people together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {occasions.map((occ, idx) => {
                const Icon = occ.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-white/80 border border-brand-gold/25 space-y-1.5"
                  >
                    <div className="flex items-center space-x-2 text-brand-terracotta">
                      <Icon className="w-4 h-4 text-brand-gold" />
                      <h4 className="font-serif text-sm uppercase text-brand-dark font-medium">
                        {occ.title}
                      </h4>
                    </div>
                    <p className="text-xs text-brand-dark/70 font-sans leading-relaxed">
                      {occ.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button variant="burgundy" size="lg" href="/celebrations">
                Plan Your Celebration
              </Button>
              <Button variant="outline-gold" size="lg" href="/contact">
                Enquire for Private Dining
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
