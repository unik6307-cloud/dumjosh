"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/data/gallery-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/Button";

const CATEGORIES = [
  "All",
  "Restaurant Interior",
  "Signature Dishes",
  "Dining Experience",
  "Table Settings",
  "Celebrations",
  "Corporate Dining",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredPhotos =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-24 pb-20 bg-brand-cream text-brand-dark min-h-screen">
      {/* Hero */}
      <section className="py-14 sm:py-20 bg-brand-ebony text-brand-light text-center border-b border-brand-gold/30 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold">
            Visual Storytelling • Sector 104 Noida
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide">
            The Gallery
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-brand-cream/80 font-serif italic max-w-xl mx-auto">
            “An intimate photographic journey into our regal rooms, fire-grilled creations, and lively celebrations.”
          </p>
          <div className="w-12 h-[1.5px] bg-brand-gold/60 mx-auto mt-2" />
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center space-x-2 overflow-x-auto no-scrollbar py-2 border-b border-brand-gold/25 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 text-xs uppercase tracking-luxury font-sans font-medium transition-all ${
                activeCategory === cat
                  ? "bg-brand-burgundy text-brand-light shadow-sm"
                  : "bg-white/80 text-brand-dark hover:bg-white border border-brand-gold/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-8">
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative h-80 sm:h-96 border border-brand-gold/30 bg-brand-ebony overflow-hidden shadow-luxury cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ebony via-brand-ebony/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none">
                <span className="self-start text-[10px] uppercase tracking-widest text-brand-gold bg-brand-ebony/85 px-2.5 py-1 border border-brand-gold/40">
                  {item.category}
                </span>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl text-brand-light uppercase group-hover:text-brand-gold transition-colors">
                      {item.title}
                    </h3>
                    <ZoomIn className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-brand-cream/80 font-sans font-light line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-ebony/95 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-brand-ebony border border-brand-gold/50 shadow-2xl overflow-hidden">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 text-brand-cream hover:text-brand-gold z-20"
              aria-label="Close photo preview"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-[60vh] sm:h-[70vh]">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 bg-brand-ebony-soft border-t border-brand-gold/30">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-sans">
                {selectedPhoto.category}
              </span>
              <h3 className="font-serif text-2xl text-brand-light uppercase mt-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-cream/80 font-sans font-light mt-1">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
