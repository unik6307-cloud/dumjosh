import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandStorySection } from "@/components/home/BrandStorySection";
import { SignatureDishesSection } from "@/components/home/SignatureDishesSection";
import { CulinaryWorldsSection } from "@/components/home/CulinaryWorldsSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { CelebrationFeature } from "@/components/home/CelebrationFeature";
import { CorporateFeature } from "@/components/home/CorporateFeature";
import { GallerySection } from "@/components/home/GallerySection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { LocationMapSection } from "@/components/home/LocationMapSection";

export default function HomePage() {
  return (
    <>
      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Brand Story Section (DUM + JOSH) */}
      <BrandStorySection />

      {/* 03. Signature Dishes Section */}
      <SignatureDishesSection />

      {/* 04. Culinary Worlds (6 interactive cards) */}
      <CulinaryWorldsSection />

      {/* 05. Experience Section (4 moments) */}
      <ExperienceSection />

      {/* 06. Celebrations Feature */}
      <CelebrationFeature />

      {/* 07. Corporate Dining Feature */}
      <CorporateFeature />

      {/* 08. Gallery Showcase */}
      <GallerySection />

      {/* 09. Verified Guest Reviews */}
      <ReviewsSection />

      {/* 10. Location & Interactive Map */}
      <LocationMapSection />
    </>
  );
}
