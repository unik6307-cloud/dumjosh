import React from "react";
import type { Metadata } from "next";
import { RESTAURANT_INFO } from "@/lib/data/restaurant-info";
import { PACKAGE_TERMS } from "@/lib/data/packages-data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for table reservations and corporate packages at Dumjosh.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20 bg-brand-cream text-brand-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 sm:p-12 border border-brand-gold/30 shadow-luxury space-y-6">
          <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">
            Dining Policies
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-brand-burgundy uppercase">
            Terms &amp; Conditions
          </h1>
          <div className="w-12 h-[2px] bg-brand-gold" />

          <div className="space-y-4 text-xs sm:text-sm text-brand-dark/80 font-sans font-light leading-relaxed">
            <h2 className="font-serif text-xl text-brand-burgundy uppercase font-medium">
              1. Table Reservations &amp; Seating
            </h2>
            <p>
              Table reservations are held for 15 minutes beyond the requested time slot. If you are experiencing delays, please notify our reception desk at {RESTAURANT_INFO.phone.display}. Seating allocations are subject to dining hall availability, though every effort is made to accommodate booth and window requests.
            </p>

            <h2 className="font-serif text-xl text-brand-burgundy uppercase font-medium">
              2. Food Packages &amp; Group Dining
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              {PACKAGE_TERMS.map((term, i) => (
                <li key={i}>{term}</li>
              ))}
            </ul>

            <h2 className="font-serif text-xl text-brand-burgundy uppercase font-medium">
              3. Dietary Allergies &amp; Special Requests
            </h2>
            <p>
              Please inform our service staff in advance of any severe dietary allergies (nuts, dairy, gluten). While we exercise meticulous care in food preparation, our kitchen handles dairy, nuts, and diverse spices across our tandoor and curry stations.
            </p>

            <h2 className="font-serif text-xl text-brand-burgundy uppercase font-medium">
              4. Governing Law
            </h2>
            <p>
              These policies and dining engagements are governed by the laws applicable in Noida, Uttar Pradesh, India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
