"use client";

import React, { useState, useMemo } from "react";
import { MENU_CATEGORIES, MENU_ITEMS, MenuCategory } from "@/lib/data/menu-data";
import { MenuItemCard } from "./MenuItemCard";
import { Search, Filter, Sparkles, Flame, Check } from "lucide-react";
import { useReservation } from "@/components/layout/ReservationContext";
import { Button } from "@/components/ui/Button";

export function MenuExplorer({ initialCategory }: { initialCategory?: string }) {
  const [activeCategory, setActiveCategory] = useState<string>(
    initialCategory || "all"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [dietaryFilter, setDietaryFilter] = useState<
    "all" | "veg" | "non-veg" | "chef" | "spicy"
  >("all");
  const { openModal } = useReservation();

  // Filtered items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }

      // Dietary filter
      if (dietaryFilter === "veg" && !item.isVeg) return false;
      if (dietaryFilter === "non-veg" && item.isVeg) return false;
      if (dietaryFilter === "chef" && !item.isChefSpecial) return false;
      if (dietaryFilter === "spicy" && !item.isSpicy) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description?.toLowerCase().includes(q);
        const matchesCat = item.category.toLowerCase().includes(q);
        const matchesSub = item.subcategory?.toLowerCase().includes(q);
        return matchesName || matchesDesc || matchesCat || matchesSub;
      }

      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  // Group by category
  const groupedCategories = useMemo(() => {
    const map = new Map<MenuCategory, typeof filteredItems>();
    MENU_CATEGORIES.forEach((cat) => {
      const itemsInCat = filteredItems.filter((i) => i.category === cat.key);
      if (itemsInCat.length > 0) {
        map.set(cat.key, itemsInCat);
      }
    });
    return map;
  }, [filteredItems]);

  return (
    <div className="space-y-10">
      {/* Search and Dietary Filter Bar */}
      <div className="bg-white border border-brand-gold/30 p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-brand-gold" />
            <input
              type="text"
              placeholder="Search dishes (e.g. Biryani, Saoji, Paneer, Kebab)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-cream/40 border border-brand-gold/30 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs text-brand-dark/50 hover:text-brand-dark"
              >
                Clear
              </button>
            )}
          </div>

          {/* Dietary Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end">
            <button
              onClick={() => setDietaryFilter("all")}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-all ${
                dietaryFilter === "all"
                  ? "bg-brand-burgundy text-brand-light"
                  : "bg-brand-cream/60 text-brand-dark hover:bg-brand-cream"
              }`}
            >
              All Items
            </button>

            <button
              onClick={() => setDietaryFilter("veg")}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium flex items-center space-x-1.5 transition-all ${
                dietaryFilter === "veg"
                  ? "bg-green-700 text-white"
                  : "bg-green-50 text-green-800 border border-green-200 hover:bg-green-100"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-green-600" />
              <span>Veg Only</span>
            </button>

            <button
              onClick={() => setDietaryFilter("non-veg")}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium flex items-center space-x-1.5 transition-all ${
                dietaryFilter === "non-veg"
                  ? "bg-red-800 text-white"
                  : "bg-red-50 text-red-900 border border-red-200 hover:bg-red-100"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-700" />
              <span>Non-Veg</span>
            </button>

            <button
              onClick={() => setDietaryFilter("chef")}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium flex items-center space-x-1.5 transition-all ${
                dietaryFilter === "chef"
                  ? "bg-brand-gold text-brand-ebony font-semibold"
                  : "bg-brand-cream text-brand-dark border border-brand-gold/40 hover:bg-brand-gold/20"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Chef's Special</span>
            </button>

            <button
              onClick={() => setDietaryFilter("spicy")}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium flex items-center space-x-1.5 transition-all ${
                dietaryFilter === "spicy"
                  ? "bg-amber-600 text-white"
                  : "bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100"
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-600" />
              <span>Spicy</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Category Navigation Bar */}
      <div className="sticky top-[60px] md:top-[68px] z-30 bg-brand-cream/95 backdrop-blur-md py-3 border-y border-brand-gold/30 shadow-sm -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 px-4 py-2 text-xs uppercase tracking-luxury font-sans font-medium transition-all ${
              activeCategory === "all"
                ? "bg-brand-burgundy text-brand-light shadow-sm"
                : "bg-white/80 text-brand-dark hover:bg-white border border-brand-gold/20"
            }`}
          >
            All Categories
          </button>

          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`shrink-0 px-4 py-2 text-xs uppercase tracking-luxury font-sans font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-brand-burgundy text-brand-light shadow-sm"
                    : "bg-white/80 text-brand-dark hover:bg-white border border-brand-gold/20"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dishes Sections by Category */}
      {groupedCategories.size > 0 ? (
        <div className="space-y-16">
          {Array.from(groupedCategories.entries()).map(([catKey, items]) => {
            const catMeta = MENU_CATEGORIES.find((c) => c.key === catKey);
            return (
              <div key={catKey} id={`section-${catKey}`} className="scroll-mt-32">
                {/* Category Header */}
                <div className="border-b border-brand-gold/40 pb-3 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-brand-burgundy uppercase tracking-wide">
                      {catMeta?.label || catKey}
                    </h3>
                    {catMeta?.description && (
                      <p className="text-xs sm:text-sm text-brand-dark/70 font-sans font-light mt-1">
                        {catMeta.description}
                      </p>
                    )}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-brand-terracotta font-medium">
                    {items.length} {items.length === 1 ? "Dish" : "Dishes"}
                  </span>
                </div>

                {/* Grid of Dishes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((dish) => (
                    <MenuItemCard key={dish.id} item={dish} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-brand-gold/30 p-8 space-y-4">
          <p className="font-serif text-2xl text-brand-dark">No dishes match your filters</p>
          <p className="text-sm text-brand-dark/60 font-sans">
            Try adjusting your search query or dietary filters to view our full selection.
          </p>
          <Button
            variant="outline-gold"
            size="sm"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
              setDietaryFilter("all");
            }}
          >
            Reset All Filters
          </Button>
        </div>
      )}

      {/* Floating or Bottom Table Reservation Callout */}
      <div className="p-8 sm:p-12 bg-gradient-to-r from-brand-ebony via-brand-burgundy to-brand-ebony text-brand-light text-center border border-brand-gold/40 shadow-luxury space-y-4">
        <span className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold">
          Experience These Flavours In Person
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl uppercase tracking-wide">
          Reserve Your Table Today
        </h3>
        <p className="text-sm sm:text-base text-brand-cream/80 max-w-xl mx-auto font-sans font-light">
          Join us at Sector 104, Noida for a memorable meal sealed with energy and heart.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="gold" size="lg" onClick={() => openModal()}>
            Reserve a Table
          </Button>
          <Button
            variant="outline-light"
            size="lg"
            href={`https://wa.me/918595262617?text=${encodeURIComponent(
              "Hello Dumjosh, I would like to order or ask about the menu."
            )}`}
          >
            Order / Enquire on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
