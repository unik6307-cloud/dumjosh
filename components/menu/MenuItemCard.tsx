import React from "react";
import Image from "next/image";
import { MenuItem } from "@/lib/data/menu-data";
import { DietaryBadge } from "@/components/ui/DietaryBadge";

export function MenuItemCard({ item }: { item: MenuItem }) {
  const formatPrice = (price: MenuItem["price"]) => {
    if (typeof price === "number") {
      return `₹${price}`;
    }
    if (price.piece8 && price.piece12) {
      return `₹${price.piece8} (8 pcs) / ₹${price.piece12} (12 pcs)`;
    }
    if (price.half && price.full) {
      return `₹${price.half} (Half) / ₹${price.full} (Full)`;
    }
    if (price.veg && price.nonVeg) {
      return `₹${price.veg} (Veg) / ₹${price.nonVeg} (Non-Veg)`;
    }
    return "";
  };

  return (
    <div className="bg-white border border-brand-gold/25 p-5 sm:p-6 flex flex-col justify-between hover:border-brand-gold hover:shadow-luxury transition-all duration-300 group">
      <div>
        {/* Top bar with dietary badge and price */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <DietaryBadge
            isVeg={item.isVeg}
            isSpicy={item.isSpicy}
            isChefSpecial={item.isChefSpecial}
            showText
          />
          <span className="font-serif text-lg sm:text-xl font-medium text-brand-burgundy whitespace-nowrap">
            {formatPrice(item.price)}
          </span>
        </div>

        {/* Dish Title */}
        <h3 className="font-serif text-xl sm:text-2xl text-brand-dark uppercase tracking-tight group-hover:text-brand-burgundy transition-colors leading-snug">
          {item.name}
        </h3>

        {/* Subcategory if applicable */}
        {item.subcategory && (
          <span className="text-[10px] uppercase tracking-widest text-brand-terracotta font-medium block mt-1">
            {item.subcategory}
          </span>
        )}

        {/* Description */}
        {item.description && (
          <p className="mt-2 text-xs sm:text-sm text-brand-dark/70 font-sans font-light leading-relaxed">
            {item.description}
          </p>
        )}
      </div>

      {/* Optional image thumbnail */}
      {item.image && (
        <div className="mt-4 relative w-full h-32 overflow-hidden border border-brand-gold/20">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
    </div>
  );
}
