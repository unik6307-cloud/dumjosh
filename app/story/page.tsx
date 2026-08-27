import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BRAND_STORY, RESTAURANT_INFO } from "@/lib/data/restaurant-info";
import { Flame, Heart, Sparkles, Compass, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story • Dum + Josh Culinary Philosophy",
  description:
    "Discover the story behind Dumjosh Sector 104 Noida: the art of slow-cooking (Dum) meets vibrant culinary passion (Josh).",
};

export default function OurStoryPage() {
  return (
    <div className="pt-24 pb-20 bg-brand-cream text-brand-dark min-h-screen">
      {/* Editorial Page Hero */}
      <section className="relative py-16 md:py-24 bg-brand-ebony text-brand-light overflow-hidden border-b border-brand-gold/30">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/interior-hall.jpg"
            alt="Dumjosh Architectural Dining Hall Sector 104 Noida"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ebony via-brand-ebony/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold">
            Brand Book 2026 • Sector 104 Noida
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide">
            The Story Behind Dumjosh
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-brand-cream/80 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            A culinary identity built around slow cooking, regional Indian depth, progressive Asian staples, and warm, memorable hospitality.
          </p>
          <div className="w-16 h-[2px] bg-brand-gold/60 mx-auto mt-4" />
        </div>
      </section>

      {/* Chapter 1: The Duality of DUM and JOSH */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Creative Fusion"
          title="Two Words, One Soul"
          subtitle="Dumjosh is born from two evocative Hindi words that balance patience with passion."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* DUM Card */}
          <div className="bg-white p-8 sm:p-10 border border-brand-gold/30 shadow-luxury space-y-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-brand-burgundy/10 border border-brand-gold/40 flex items-center justify-center text-brand-burgundy font-serif font-bold text-xl">
                  द
                </div>
                <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">
                  Chapter I
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-brand-burgundy uppercase">
                What Dum Means
              </h2>

              <p className="text-base sm:text-lg font-serif italic text-brand-gold-dark font-normal mt-2">
                “The art of sealing flavour in dough and slow-simmering over low embers.”
              </p>

              <p className="text-sm sm:text-base text-brand-dark/80 font-sans font-light leading-relaxed mt-4">
                Derived from the Persian and royal Awadhi cooking style *Dum Pukht*, Dum translates to “breathing in”. Food is sealed in earthen handis with dough ribbons and placed over gentle embers. Steam cannot escape; instead, it condenses back into the grains, steeping the meat and saffron rice with an intensity unmatched by fast modern methods.
              </p>
            </div>

            <div className="pt-4 border-t border-brand-gold/20 flex items-center space-x-2 text-xs uppercase tracking-wider text-brand-forest font-medium">
              <Flame className="w-4 h-4 text-brand-gold" />
              <span>Patience • Sealing • Subtle Aromatics</span>
            </div>
          </div>

          {/* JOSH Card */}
          <div className="bg-white p-8 sm:p-10 border border-brand-gold/30 shadow-luxury space-y-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-brand-terracotta/10 border border-brand-gold/40 flex items-center justify-center text-brand-terracotta font-serif font-bold text-xl">
                  ज
                </div>
                <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">
                  Chapter II
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-brand-terracotta uppercase">
                What Josh Means
              </h2>

              <p className="text-base sm:text-lg font-serif italic text-brand-terracotta font-normal mt-2">
                “Intensity, vibrancy, spirited energy, and impassioned heart.”
              </p>

              <p className="text-sm sm:text-base text-brand-dark/80 font-sans font-light leading-relaxed mt-4">
                Josh signifies the fire in the belly, the effervescence of celebration, and the passionate vigor brought to life when guests break bread together. In our recipes, Josh appears as fiery stone-ground chillies, fresh coriander tempering, sizzling tandoor platters, and the welcoming warmth radiating from every team member.
              </p>
            </div>

            <div className="pt-4 border-t border-brand-gold/20 flex items-center space-x-2 text-xs uppercase tracking-wider text-brand-burgundy font-medium">
              <Heart className="w-4 h-4 text-brand-terracotta" />
              <span>Vibrancy • Passion • Generous Hospitality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Regional Depth & Culinary Heritage */}
      <section className="py-16 md:py-24 bg-brand-ebony text-brand-light border-y border-brand-gold/25">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Regional Origins"
            title="A Map of Indian Culinary Depth"
            subtitle="We do not serve homogenised curries. Each recipe pays homage to specific culinary sanctuaries."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-brand-ebony-soft border border-brand-gold/20 space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-medium">
                Maharashtra • Vidarbha
              </span>
              <h3 className="font-serif text-xl text-brand-light uppercase">
                Saoji Heritage
              </h3>
              <p className="text-xs sm:text-sm text-brand-cream/75 font-sans font-light leading-relaxed">
                Originating from the Halba Koshti weavers of Nagpur, Saoji cooking relies on complex black garam masalas, roasted coriander, poppy seeds, and stone flowers. Unapologetically bold and intensely rich.
              </p>
            </div>

            <div className="p-6 bg-brand-ebony-soft border border-brand-gold/20 space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-medium">
                Karnataka • Mangalore
              </span>
              <h3 className="font-serif text-xl text-brand-light uppercase">
                Kundapur Ghee Roast
              </h3>
              <p className="text-xs sm:text-sm text-brand-cream/75 font-sans font-light leading-relaxed">
                Slow-braised with pure desi cow ghee, tangy tamarind pulp, jaggery notes, and fiery Byadgi red chillies that grant our Ghee Roast preparations their signature crimson gloss.
              </p>
            </div>

            <div className="p-6 bg-brand-ebony-soft border border-brand-gold/20 space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-medium">
                Awadh &amp; Purani Dilli
              </span>
              <h3 className="font-serif text-xl text-brand-light uppercase">
                Mughlai &amp; Royal Dastarkhwan
              </h3>
              <p className="text-xs sm:text-sm text-brand-cream/75 font-sans font-light leading-relaxed">
                Charbagh mutton shami kebabs, overnight-simmered Dal Dumjosh Makhani, and Matia Mahal Chicken inspired by the timeless backstreets of Delhi 6.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Progressive Asian Staples */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">
              The Contemporary Counterpoint
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-burgundy uppercase leading-tight font-normal">
              Modern Indian + Progressive Asian
            </h2>
            <p className="text-sm sm:text-base text-brand-dark/80 font-sans font-light leading-relaxed">
              Why Asian flavours alongside modern Indian? Because dining today is about exploration and craving variety at the same table. We elevate beloved Indo-Chinese classics—crispy lotus stems glazed with honey chilli, charred wok noodles, and fiery chilli chicken—using culinary precision and Dumjosh flair.
            </p>
            <p className="text-sm text-brand-dark/70 font-sans font-light leading-relaxed">
              Whether you yearn for royal mutton biryani or a sizzling plate of wok-tossed starters, every member of your party discovers their craving.
            </p>
          </div>

          <div className="relative h-80 sm:h-96 border border-brand-gold/40 shadow-luxury overflow-hidden">
            <Image
              src="/images/dish-lotus-wok.jpg"
              alt="Progressive Asian Staples at Dumjosh"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Chapter 4: Brand Voice & Hospitality */}
      <section className="py-16 md:py-24 bg-brand-cream border-t border-brand-gold/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How Dumjosh Speaks"
            title="The Five Pillars of Dumjosh"
            subtitle="The core values that shape our service, kitchen demeanor, and guest relationships."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {BRAND_STORY.voice.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-6 border border-brand-gold/25 text-center space-y-2 shadow-sm"
              >
                <span className="text-xs font-serif text-brand-gold uppercase tracking-widest">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl uppercase text-brand-burgundy font-medium">
                  {pillar.title}
                </h3>
                <p className="text-xs text-brand-dark/70 font-sans leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-burgundy text-brand-light text-center border-t border-brand-gold/40">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl uppercase">
            Come Dine With Us
          </h2>
          <p className="text-sm sm:text-base text-brand-cream/85 font-sans font-light">
            Experience our story at your own table in Sector 104, Noida.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="gold" size="lg" href="/menu">
              Explore The Menu
            </Button>
            <Button variant="outline-light" size="lg" href="/contact">
              Visit Sector 104 Noida
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
