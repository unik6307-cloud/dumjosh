"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_ITEMS } from "@/lib/data/gallery-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-brand-cream text-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Visual Journal"
          title="The Dumjosh Experience"
          subtitle="An intimate photographic glimpse into our culinary artistry, regal interiors, and lively celebrations."
          align="left"
          className="mb-0"
        />

        {/* Scroll Controls */}
        <div className="flex items-center space-x-3 self-end">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 border border-brand-gold/50 flex items-center justify-center text-brand-dark hover:bg-brand-burgundy hover:text-white transition-colors"
            aria-label="Scroll gallery left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 border border-brand-gold/50 flex items-center justify-center text-brand-dark hover:bg-brand-burgundy hover:text-white transition-colors"
            aria-label="Scroll gallery right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Carousel */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto pb-8 pt-4 px-4 sm:px-6 lg:px-8 no-scrollbar scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            className="shrink-0 w-80 sm:w-96 group relative border border-brand-gold/30 bg-brand-ebony overflow-hidden shadow-luxury"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="relative h-[380px] sm:h-[440px] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ebony via-brand-ebony/30 to-transparent" />
            </div>

            <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
              <span className="self-start text-[10px] uppercase tracking-widest text-brand-gold bg-brand-ebony/80 px-2.5 py-1 border border-brand-gold/30">
                {item.category}
              </span>

              <div className="space-y-1.5">
                <h4 className="font-serif text-xl text-brand-light uppercase group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-brand-cream/80 font-sans font-light line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Link to Full Gallery */}
      <div className="text-center pt-8">
        <Button variant="outline-gold" size="md" href="/gallery">
          View Complete High-Res Gallery
        </Button>
      </div>
    </section>
  );
}
