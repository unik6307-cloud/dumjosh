import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BrandStorySection() {
  return (
    <section className="py-20 md:py-32 bg-brand-cream text-brand-dark relative overflow-hidden">
      {/* Background motif decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-terracotta/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Dumjosh Philosophy"
          title="Dum + Josh"
          subtitle="The name Dumjosh is a creative fusion of two powerful culinary ideals that define every recipe we craft."
        />

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: DUM */}
          <div className="lg:col-span-5 space-y-6 bg-white/70 p-8 sm:p-10 border border-brand-gold/30 shadow-sm relative group hover:border-brand-gold transition-colors">
            <div className="flex items-baseline space-x-3">
              <span className="font-serif text-5xl sm:text-6xl font-normal text-brand-burgundy tracking-tight">
                DUM
              </span>
              <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">
                The Slow Art
              </span>
            </div>

            <div className="w-12 h-[2px] bg-brand-gold" />

            <p className="text-base sm:text-lg font-sans text-brand-dark/80 leading-relaxed font-light">
              The time-honoured technique of sealing food in dough-wrapped vessels and slow-cooking it over a gentle, smouldering flame. This allows every drop of moisture, saffron aroma, and essential spice to circulate within, developing unforgettable depth and tenderness.
            </p>

            <div className="pt-2">
              <span className="inline-block text-xs uppercase tracking-widest text-brand-forest font-semibold bg-brand-forest/10 px-3 py-1">
                Sealed Depth • Patience • Authenticity
              </span>
            </div>
          </div>

          {/* Center Column: Iconic Handi Image & Plus Symbol */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center my-4 lg:my-0">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/biryani-hero.png"
                alt="Dumjosh Sealed Clay Handi"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
            <div className="w-10 h-10 rounded-full border border-brand-gold/60 flex items-center justify-center font-serif text-2xl text-brand-burgundy bg-white shadow-sm mt-4">
              +
            </div>
          </div>

          {/* Right Column: JOSH */}
          <div className="lg:col-span-5 space-y-6 bg-white/70 p-8 sm:p-10 border border-brand-gold/30 shadow-sm relative group hover:border-brand-gold transition-colors">
            <div className="flex items-baseline space-x-3">
              <span className="font-serif text-5xl sm:text-6xl font-normal text-brand-terracotta tracking-tight">
                JOSH
              </span>
              <span className="text-xs uppercase tracking-widest text-brand-burgundy font-semibold">
                The Spirited Pulse
              </span>
            </div>

            <div className="w-12 h-[2px] bg-brand-gold" />

            <p className="text-base sm:text-lg font-sans text-brand-dark/80 leading-relaxed font-light">
              Intensity, vibrancy, spirited energy, and impassioned heart—the unmistakable feeling that brings a sizzling dish, an opulent dining room, and an extraordinary celebration alive. It is the joy of eating together and leaving with a lasting memory.
            </p>

            <div className="pt-2">
              <span className="inline-block text-xs uppercase tracking-widest text-brand-burgundy font-semibold bg-brand-burgundy/10 px-3 py-1">
                Vibrancy • Spirited Energy • Royal Warmth
              </span>
            </div>
          </div>
        </div>

        {/* Synthesis Banner */}
        <div className="mt-14 p-8 sm:p-10 bg-brand-burgundy text-brand-light border border-brand-gold/40 text-center relative overflow-hidden shadow-luxury">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-sans font-medium">
              Our Core Promise
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide">
              Flavours Sealed With Energy and Heart
            </h3>
            <p className="text-sm sm:text-base text-brand-cream/80 font-sans font-light leading-relaxed">
              Dumjosh is not just a restaurant; it is an unhurried celebration of culinary depth, progressive Asian staples, regional Indian mastery, and attentive hospitality in Sector 104, Noida.
            </p>
            <div className="pt-4">
              <Button variant="gold" size="md" href="/story">
                Read Our Complete Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
