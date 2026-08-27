import React, { Suspense } from "react";
import type { Metadata } from "next";
import { MenuExplorer } from "@/components/menu/MenuExplorer";

export const metadata: Metadata = {
  title: "The Menu • Modern Indian & Progressive Asian Cuisine",
  description:
    "Explore the complete Dumjosh menu in Sector 104, Noida. Handcrafted dum biryanis, slow-cooked gravies, tandoori grills, and Indo-Chinese specialties with transparent pricing.",
};

export default function MenuPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  return (
    <div className="pt-24 pb-20 bg-brand-cream text-brand-dark min-h-screen">
      {/* Page Header */}
      <section className="py-14 sm:py-18 bg-brand-ebony text-brand-light text-center border-b border-brand-gold/30 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold">
            Authentic Recipes • Sector 104 Noida
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide">
            The Menu
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-brand-cream/80 font-serif italic max-w-xl mx-auto">
            “A menu with a point of view.”
          </p>
          <div className="w-12 h-[1.5px] bg-brand-gold/60 mx-auto mt-2" />
        </div>
      </section>

      {/* Main Menu Explorer with Suspense for URL search params */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Suspense fallback={<div className="text-center py-20 font-serif text-xl">Loading culinary collection...</div>}>
          <MenuExplorer initialCategory={searchParams.category} />
        </Suspense>
      </div>
    </div>
  );
}
