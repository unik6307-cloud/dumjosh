import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Briefcase, Building, Users2, Clock, Utensils } from "lucide-react";

export function CorporateFeature() {
  const services = [
    { title: "Lunch Buffets", desc: "Versatile menu format for office celebrations and hosted executive luncheons." },
    { title: "Corporate Parties", desc: "A warm, opulent environment for team milestones and annual company gatherings." },
    { title: "Business Meetings", desc: "Comfortable seating designed for seamless dialogue, privacy, and hospitality." },
    { title: "Corporate Deliveries", desc: "Flavour-forward food packaged to travel impeccably for executive boardrooms." },
    { title: "Team Meals", desc: "Generous sharing platters and biryanis to celebrate team wins." },
    { title: "Client Hospitality", desc: "Impress external delegates with authentic Mughlai and progressive Indian luxury." },
  ];

  return (
    <section className="py-20 md:py-32 bg-brand-ebony text-brand-light relative overflow-hidden border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Information & Packages */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-brand-gold font-medium">
              <Building className="w-3.5 h-3.5" />
              <span>Dumjosh for Business • Noida Sector 104</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-light uppercase leading-tight font-normal">
              Bring Your Team to the Table
            </h2>

            <p className="text-base sm:text-lg text-brand-cream/80 font-sans font-light leading-relaxed">
              Thoughtful multi-course packages, generous royal hospitality, and a setting engineered for meaningful conversations and team milestones.
            </p>

            {/* Corporate Package Highlight Box */}
            <div className="p-6 bg-brand-ebony-soft border border-brand-gold/40 shadow-luxury space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-gold/20 pb-4">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-brand-gold">
                    Curated Food Packages
                  </span>
                  <h4 className="font-serif text-xl text-brand-light uppercase">
                    All-Inclusive Group Dining
                  </h4>
                </div>
                <div className="text-right sm:text-right">
                  <span className="text-xs text-brand-cream/60">Min. Guarantee:</span>
                  <span className="font-semibold text-brand-gold ml-1.5">20 People</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-brand-ebony/60 border border-brand-gold/20">
                  <span className="text-[10px] uppercase tracking-widest text-green-400 font-medium block">
                    Vegetarian Package
                  </span>
                  <p className="font-serif text-2xl text-brand-light mt-1">₹1,299*</p>
                  <p className="text-[11px] text-brand-cream/70 mt-1">
                    + taxes per person • 3 Starters, 3 Mains, Dal, Breads, Mocktails, Desserts
                  </p>
                </div>

                <div className="p-4 bg-brand-ebony/60 border border-brand-gold/20">
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-medium block">
                    Royal Non-Veg Package
                  </span>
                  <p className="font-serif text-2xl text-brand-light mt-1">₹1,599*</p>
                  <p className="text-[11px] text-brand-cream/70 mt-1">
                    + taxes per person • 3 Non-Veg + 3 Veg Starters, Chicken Rara/Mughlai, Mains, Desserts
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-brand-cream/60 italic">
                *Package duration: 3 hours with exclusive designated dining hall section.
              </p>
            </div>

            {/* Services bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {services.slice(0, 6).map((srv, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-brand-cream/80">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                  <span>{srv.title}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="md" href="/corporate">
                View Corporate Packages
              </Button>
              <Button variant="outline-light" size="md" href="/corporate#enquiry">
                Request Corporate Quote
              </Button>
            </div>
          </div>

          {/* Right Column: Visual of banquet / corporate hall */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-96 sm:h-[480px] w-full border border-brand-gold/40 shadow-2xl overflow-hidden">
              <Image
                src="/images/corporate-dining-hall.jpg"
                alt="Dumjosh Corporate Banquet and Team Dining Sector 104 Noida"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ebony via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
