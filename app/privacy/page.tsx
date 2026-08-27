import React from "react";
import type { Metadata } from "next";
import { RESTAURANT_INFO } from "@/lib/data/restaurant-info";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Dumjosh restaurant website and table reservation inquiries.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 bg-brand-cream text-brand-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 sm:p-12 border border-brand-gold/30 shadow-luxury space-y-6">
          <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">
            Legal &amp; Transparency
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-brand-burgundy uppercase">
            Privacy Policy
          </h1>
          <div className="w-12 h-[2px] bg-brand-gold" />

          <div className="space-y-4 text-xs sm:text-sm text-brand-dark/80 font-sans font-light leading-relaxed">
            <p>
              At <strong>{RESTAURANT_INFO.name}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), located at {RESTAURANT_INFO.address.full}, we respect your privacy and are committed to protecting any personal data you share with us through our website.
            </p>

            <h2 className="font-serif text-xl text-brand-burgundy uppercase pt-2 font-medium">
              1. Information We Collect
            </h2>
            <p>
              When you submit a table reservation, corporate inquiry, or celebration form, we collect information such as your name, telephone number, email address, guest count, and dining preferences. This information is strictly used to fulfill your reservation and provide attentive hospitality.
            </p>

            <h2 className="font-serif text-xl text-brand-burgundy uppercase pt-2 font-medium">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To confirm table bookings and event arrangements.</li>
              <li>To communicate reservation updates via telephone or WhatsApp.</li>
              <li>To provide corporate food package quotes and invoicing.</li>
              <li>To improve our digital menu experience and dining operations.</li>
            </ul>

            <h2 className="font-serif text-xl text-brand-burgundy uppercase pt-2 font-medium">
              3. Data Security &amp; Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties or aggregators. We only share details with trusted service providers who assist us in operating our direct website and reservation system.
            </p>

            <h2 className="font-serif text-xl text-brand-burgundy uppercase pt-2 font-medium">
              4. Contact Our Desk
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us at {RESTAURANT_INFO.phone.display} or visit us in Sector 104, Noida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
