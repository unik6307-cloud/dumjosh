"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useReservation } from "@/components/layout/ReservationContext";
import { MapPin, Phone, Clock } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/data/restaurant-info";

export function HeroSection() {
  const { openModal } = useReservation();

  return (
    <section className="relative min-h-[95vh] sm:min-h-screen flex items-end sm:items-center justify-center overflow-hidden bg-brand-ebony">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-interior.jpg"
          alt="Dumjosh Royal Indian Dining Atmosphere Sector 104 Noida"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered luxury gradient: clear dining room view at top, deep ebony at bottom for text clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ebony via-brand-ebony/60 to-black/40 sm:to-brand-ebony/80" />
        <div className="absolute inset-0 bg-brand-burgundy/25 mix-blend-multiply" />
      </div>

      {/* Hero Content - Center Bottom on mobile, Centered on desktop */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-14 sm:pb-16">
        {/* Main Headline - Balanced line breaks */}
        <h1 className="font-serif text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-brand-light uppercase tracking-wide leading-[1.25] sm:leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
          <span className="block">Flavours Sealed With</span>
          <span className="block mt-1 sm:mt-2">
            <span className="italic font-light text-brand-gold font-display lowercase mr-1.5 sm:mr-2">
              energy
            </span>
            &amp; Heart
          </span>
        </h1>

        {/* Subtitle / Promise */}
        <p className="mt-3 sm:mt-6 max-w-xl mx-auto text-xs sm:text-base md:text-lg text-brand-cream/90 font-sans font-light leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)] px-4">
          Where slow-cooking traditions meet vibrant regional Indian depth and progressive Asian favourites in Sector 104, Noida.
        </p>

        {/* Dual Primary Call-to-Actions - Hidden on mobile, visible on sm and up */}
        <div className="hidden sm:flex items-center justify-center gap-4 sm:gap-6 mt-10">
          <Button
            variant="gold"
            size="lg"
            onClick={() => openModal()}
            className="w-full sm:w-auto"
          >
            Reserve Your Table
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            href="/menu"
            className="w-full sm:w-auto"
          >
            Explore The Menu
          </Button>
        </div>

        {/* Quick Trust / Info Badges at bottom - Hidden on mobile, visible on sm and up */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-14 pt-8 border-t border-brand-gold/25 text-xs text-brand-cream/80 font-sans">
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="w-4 h-4 text-brand-gold" />
            <span>Hazipur, Sector 104, Noida</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Clock className="w-4 h-4 text-brand-gold" />
            <span>Daily: 12:00 PM – 11:30 PM</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Phone className="w-4 h-4 text-brand-gold" />
            <a
              href={`tel:${RESTAURANT_INFO.phone.raw}`}
              className="hover:text-brand-gold transition-colors font-medium"
            >
              {RESTAURANT_INFO.phone.display}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative scroll prompt indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase tracking-widest text-brand-gold font-sans mb-2">
          Scroll to discover
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-brand-gold to-transparent" />
      </div>
    </section>
  );
}
