"use client";

import React, { useState } from "react";
import { FOOD_PACKAGES, PACKAGE_TERMS } from "@/lib/data/packages-data";
import { Button } from "@/components/ui/Button";
import { Users, Calculator, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/data/restaurant-info";

export function CorporateCalculator() {
  const [selectedPkgId, setSelectedPkgId] = useState<string>("nonveg-corporate");
  const [guestCount, setGuestCount] = useState<number>(25);

  const currentPkg =
    FOOD_PACKAGES.find((p) => p.id === selectedPkgId) || FOOD_PACKAGES[0];

  // Calculations
  const effectivePax = Math.max(guestCount, currentPkg.minimumGuarantee);
  const baseTotal = effectivePax * currentPkg.pricePerPerson;
  const gst = Math.round(baseTotal * 0.05); // 5% GST for restaurant food services
  const grandTotal = baseTotal + gst;

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hello Dumjosh Corporate Desk,\n\nI am requesting an estimate for Corporate Dining:\n🏢 Package: ${currentPkg.name}\n👥 Guests: ${guestCount} (Min. guarantee ${currentPkg.minimumGuarantee})\n💰 Estimated Base: ₹${baseTotal.toLocaleString("en-IN")}\n💵 Total (approx. incl. 5% GST): ₹${grandTotal.toLocaleString("en-IN")}\n\nPlease share availability and booking procedure.`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp.number}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white border border-brand-gold/30 p-6 sm:p-10 shadow-luxury">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Configuration */}
        <div className="lg:w-7/12 space-y-6">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-brand-terracotta font-semibold">
            <Calculator className="w-4 h-4 text-brand-gold" />
            <span>Interactive Package Estimator</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-brand-burgundy uppercase">
            Customize Your Dining Package
          </h3>

          <p className="text-xs sm:text-sm text-brand-dark/70 font-sans font-light leading-relaxed">
            Select your preferred menu package and guest delegation size to see an instant per-person and total cost breakdown.
          </p>

          {/* Package Selector Toggle */}
          <div className="space-y-3">
            <label className="block text-xs uppercase tracking-wider font-semibold text-brand-dark/80">
              Select Package Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FOOD_PACKAGES.map((pkg) => {
                const isSelected = selectedPkgId === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-4 text-left border transition-all ${
                      isSelected
                        ? "border-brand-burgundy bg-brand-cream/60 shadow-sm ring-1 ring-brand-burgundy"
                        : "border-brand-gold/30 hover:border-brand-gold bg-white"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-terracotta">
                        {pkg.id.includes("nonveg") ? "Non-Veg & Veg" : "Vegetarian"}
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-brand-burgundy" />}
                    </div>
                    <h4 className="font-serif text-base text-brand-dark uppercase font-medium">
                      {pkg.name}
                    </h4>
                    <p className="font-serif text-xl text-brand-burgundy mt-2 font-semibold">
                      ₹{pkg.pricePerPerson}{" "}
                      <span className="text-xs font-sans font-normal text-brand-dark/60">
                        + taxes / person
                      </span>
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Guest Count Slider / Buttons */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-xs uppercase tracking-wider font-semibold text-brand-dark/80">
                Number of Guests
              </label>
              <span className="font-serif text-xl font-bold text-brand-burgundy">
                {guestCount} Guests
              </span>
            </div>

            <input
              type="range"
              min={20}
              max={150}
              step={5}
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="w-full h-2 bg-brand-cream-dark rounded-lg appearance-none cursor-pointer accent-brand-burgundy"
            />

            <div className="flex justify-between text-[10px] text-brand-dark/60 font-sans">
              <span>Min. 20 Guests</span>
              <span>50 Guests</span>
              <span>100 Guests</span>
              <span>150+ Guests</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {[20, 25, 30, 40, 50, 75, 100].map((num) => (
                <button
                  key={num}
                  onClick={() => setGuestCount(num)}
                  className={`px-3 py-1 text-xs border ${
                    guestCount === num
                      ? "bg-brand-burgundy text-white border-brand-burgundy"
                      : "bg-white text-brand-dark border-brand-gold/30 hover:border-brand-gold"
                  }`}
                >
                  {num} Pax
                </button>
              ))}
            </div>
          </div>

          {/* Inclusions summary */}
          <div className="pt-2 border-t border-brand-gold/20 space-y-2 text-xs text-brand-dark/80 font-sans">
            <span className="font-semibold uppercase tracking-wider text-brand-terracotta block">
              Package Inclusions:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>3 Soft Beverages + 2 Mocktails</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>
                  {selectedPkgId.includes("nonveg")
                    ? "3 Non-Veg + 3 Veg Starters"
                    : "3 Gourmet Veg Starters"}
                </span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>
                  {selectedPkgId.includes("nonveg")
                    ? "1 Non-Veg Main + 3 Veg Mains"
                    : "3 Signature Veg Mains"}
                </span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Slow-Cooked Dal + Rice/Noodle</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Assorted Breads, Salad &amp; Raita</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Indulgent Dessert Finish</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Instant Calculation Summary Card */}
        <div className="lg:w-5/12 bg-brand-ebony text-brand-light p-6 sm:p-8 border border-brand-gold/40 flex flex-col justify-between shadow-2xl">
          <div className="space-y-6">
            <div className="border-b border-brand-gold/20 pb-4">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-sans font-semibold">
                Estimate Breakdown
              </span>
              <h4 className="font-serif text-xl text-brand-light uppercase mt-1">
                {currentPkg.name}
              </h4>
              <p className="text-xs text-brand-cream/70 font-sans mt-1">
                Duration: 3 Hours Exclusive Section
              </p>
            </div>

            <div className="space-y-3 font-sans text-xs">
              <div className="flex justify-between text-brand-cream/80">
                <span>Rate per Guest:</span>
                <span className="font-semibold text-brand-light">₹{currentPkg.pricePerPerson}</span>
              </div>

              <div className="flex justify-between text-brand-cream/80">
                <span>Guest Count:</span>
                <span className="font-semibold text-brand-light">{effectivePax} Guests</span>
              </div>

              <div className="flex justify-between text-brand-cream/80">
                <span>Base Subtotal:</span>
                <span className="font-semibold text-brand-light">₹{baseTotal.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex justify-between text-brand-cream/80">
                <span>Estimated GST (5%):</span>
                <span className="font-semibold text-brand-light">₹{gst.toLocaleString("en-IN")}</span>
              </div>

              <div className="pt-3 border-t border-brand-gold/30 flex justify-between items-baseline">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-brand-gold block">
                    Estimated Total
                  </span>
                  <span className="text-[10px] text-brand-cream/50">Subject to actual headcount</span>
                </div>
                <span className="font-serif text-3xl text-brand-gold font-bold">
                  ₹{grandTotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <div className="p-3 bg-white/5 border border-brand-gold/20 text-[11px] text-brand-cream/70 space-y-1">
              <div className="flex items-center space-x-1.5 text-brand-gold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase tracking-wider">Dumjosh Guarantee</span>
              </div>
              <p>Exclusive dining section, dedicated hospitality captain, and custom table setup included.</p>
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <Button
              variant="gold"
              size="md"
              onClick={handleWhatsAppQuote}
              className="w-full"
            >
              Get Instant WhatsApp Quote
            </Button>

            <Button
              variant="outline-light"
              size="sm"
              href="#enquiry"
              className="w-full text-xs"
            >
              Submit Corporate Enquiry Form
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
