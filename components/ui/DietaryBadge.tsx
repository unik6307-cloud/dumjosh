import React from "react";

interface DietaryBadgeProps {
  isVeg: boolean;
  isSpicy?: boolean;
  isChefSpecial?: boolean;
  showText?: boolean;
  className?: string;
}

export function DietaryBadge({
  isVeg,
  isSpicy = false,
  isChefSpecial = false,
  showText = false,
  className = "",
}: DietaryBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {/* Standard Indian Veg / Non-Veg Indicator */}
      <div
        className={`w-4 h-4 border flex items-center justify-center p-[2px] ${
          isVeg ? "border-green-700 bg-green-50/50" : "border-red-800 bg-red-50/50"
        }`}
        title={isVeg ? "Vegetarian" : "Non-Vegetarian"}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isVeg ? "bg-green-700" : "bg-red-800"
          }`}
        />
      </div>

      {showText && (
        <span
          className={`text-[10px] uppercase tracking-wider font-semibold ${
            isVeg ? "text-green-800" : "text-red-900"
          }`}
        >
          {isVeg ? "Veg" : "Non-Veg"}
        </span>
      )}

      {/* Spicy Indicator */}
      {isSpicy && (
        <span
          className="inline-flex items-center text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 border border-amber-200 uppercase tracking-widest font-medium"
          title="Spicy Specialty"
        >
          🌶️ Spicy
        </span>
      )}

      {/* Chef's Special Indicator */}
      {isChefSpecial && (
        <span
          className="inline-flex items-center text-[10px] text-brand-gold bg-brand-burgundy px-1.5 py-0.5 border border-brand-gold/40 uppercase tracking-widest font-medium"
          title="Chef's Special Recommendation"
        >
          👑 Chef Special
        </span>
      )}
    </div>
  );
}
