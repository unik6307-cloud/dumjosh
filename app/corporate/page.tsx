import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CorporateCalculator } from "@/components/corporate/CorporateCalculator";
import { CorporateEnquiryForm } from "@/components/corporate/CorporateEnquiryForm";
import { FOOD_PACKAGES, PACKAGE_TERMS } from "@/lib/data/packages-data";
import { Check, ShieldCheck, Building2, Users2, Clock, Utensils, Receipt } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Corporate Dining & Food Packages • Sector 104 Noida",
  description:
    "Explore Dumjosh corporate dining packages in Sector 104, Noida. Executive lunch buffets, team parties, and conference hospitality from ₹1,299+ taxes per person.",
};

export default function CorporatePage() {
  const businessPillars = [
    {
      title: "Business Meetings",
      desc: "Quiet, refined setting for confidential negotiations, director lunches, and client relationship building.",
    },
    {
      title: "Team Meals & Milestones",
      desc: "Celebrate quarterly victories and project completions with opulent sharing platters and biryani handis.",
    },
    {
      title: "Corporate Lunch Buffets",
      desc: "Paced for executive workdays with prompt live service, multiple starters, and diverse dietary options.",
    },
    {
      title: "Executive Deliveries",
      desc: "Bespoke meal boxes and hot chafing-dish deliveries directly to Noida corporate boardrooms.",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-brand-cream text-brand-dark min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-brand-ebony text-brand-light text-center border-b border-brand-gold/30 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/corporate-dining-hall.jpg"
            alt="Dumjosh Corporate Dining Hall Sector 104 Noida"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ebony via-brand-ebony/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold">
            Dumjosh For Business • Sector 104 Noida
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide">
            Bring Your Team to the Table
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-brand-cream/80 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Thoughtful multi-course menus, generous hospitality, and a setting engineered for meaningful conversations and executive partnerships.
          </p>
          <div className="w-16 h-[2px] bg-brand-gold/60 mx-auto mt-4" />
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-20">
        {/* Why Dumjosh for Business */}
        <section>
          <SectionHeading
            eyebrow="Corporate Hospitality"
            title="Why Leading Teams Choose Dumjosh"
            subtitle="We understand corporate dining requires uncompromising punctuality, dietary variety, and seamless invoicing."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessPillars.map((p, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-brand-gold/30 shadow-sm space-y-2.5 hover:border-brand-gold transition-colors"
              >
                <div className="w-8 h-8 rounded-none bg-brand-burgundy/10 border border-brand-gold/40 flex items-center justify-center text-brand-burgundy font-serif font-semibold">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-xl uppercase text-brand-burgundy font-medium">
                  {p.title}
                </h3>
                <p className="text-xs text-brand-dark/70 font-sans leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Estimator Calculator */}
        <section id="calculator" className="scroll-mt-28">
          <CorporateCalculator />
        </section>

        {/* Detailed Package Comparison Table */}
        <section id="packages" className="scroll-mt-28 space-y-8">
          <SectionHeading
            eyebrow="Official Package Specification"
            title="Detailed Food Packages"
            subtitle="Extracted directly from our verified Food Packages specification. Customized menu selections made prior to event."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FOOD_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white border border-brand-gold/35 shadow-luxury flex flex-col justify-between"
              >
                <div>
                  {/* Header */}
                  <div className="p-6 bg-brand-ebony text-brand-light border-b border-brand-gold/30">
                    <span className="text-[10px] uppercase tracking-widest text-brand-gold font-sans font-semibold">
                      {pkg.duration}
                    </span>
                    <h3 className="font-serif text-2xl uppercase tracking-wide mt-1">
                      {pkg.name}
                    </h3>
                    <p className="font-serif text-3xl text-brand-gold font-bold mt-2">
                      ₹{pkg.pricePerPerson}{" "}
                      <span className="text-xs font-sans font-normal text-brand-cream/60">
                        + taxes per person
                      </span>
                    </p>
                    <p className="text-xs text-brand-cream/70 font-sans mt-1 italic">
                      Minimum Guarantee: {pkg.minimumGuarantee} Guests
                    </p>
                  </div>

                  {/* Course Details List */}
                  <div className="p-6 space-y-4">
                    {pkg.courses.map((course, cIdx) => (
                      <div key={cIdx} className="border-b border-brand-gold/15 pb-3">
                        <div className="flex justify-between items-baseline mb-1.5">
                          <h4 className="font-serif text-base text-brand-burgundy uppercase font-medium">
                            {course.title}
                          </h4>
                          <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-gold-dark bg-brand-cream px-2 py-0.5 border border-brand-gold/30">
                            {course.selectLimit}
                          </span>
                        </div>
                        <p className="text-xs text-brand-dark/70 font-sans leading-relaxed">
                          {course.options.join(" • ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-brand-cream/40 border-t border-brand-gold/20">
                  <Button variant="burgundy" size="md" href="#enquiry" className="w-full">
                    Select {pkg.name.split(" ")[0]} Package
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Package Terms & Conditions */}
          <div className="p-6 bg-white border border-brand-gold/30 shadow-sm space-y-3">
            <h4 className="font-serif text-lg text-brand-burgundy uppercase font-medium">
              Terms &amp; Conditions for Food Packages:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-brand-dark/75 font-sans">
              {PACKAGE_TERMS.map((term, tIdx) => (
                <li key={tIdx} className="flex items-start space-x-2">
                  <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Lead Capture Form */}
        <section>
          <CorporateEnquiryForm />
        </section>
      </div>
    </div>
  );
}
