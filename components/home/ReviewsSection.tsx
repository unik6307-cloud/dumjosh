import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "The Dumjosh Murgh Biryani is in a league of its own—sealed perfectly in dough, the saffron aroma when the handi opened at our table was magnificent. Sector 104 has found its crown jewel.",
    guest: "Rohit Malhotra",
    context: "Family Celebration Dinner",
    platform: "Google Verified Local Diner",
    rating: 5,
  },
  {
    quote:
      "We hosted a 30-member corporate lunch here. The private section, the attentive service, and the Dumjosh Chicken Rara and Dal Makhani were absolutely flawless. Highly recommend their food packages.",
    guest: "Neha Sharma",
    context: "Corporate Delegation Host",
    platform: "Zomato Verified Review",
    rating: 5,
  },
  {
    quote:
      "From the crispy lotus stem to the fiery Saoji mutton, the flavor profiles are distinct and uncompromisingly authentic. The interior design with velvet chairs and warm lighting makes you linger.",
    guest: "Ananya & Kabir",
    context: "Weekend Dinner",
    platform: "Google Verified Local Diner",
    rating: 5,
  },
];

export function ReviewsSection() {
  return (
    <section className="py-20 md:py-32 bg-brand-ebony text-brand-light relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-burgundy/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Guest Reflections"
          title="Words From Our Tables"
          subtitle="Experiences shared by diners who gathered at our tables in Sector 104, Noida."
          theme="dark"
        />

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-brand-ebony-soft border border-brand-gold/30 p-8 flex flex-col justify-between relative shadow-luxury group hover:border-brand-gold transition-all duration-300"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-brand-gold/40 mb-2" />

                {/* Rating stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>

                <p className="font-serif italic text-base sm:text-lg text-brand-cream leading-relaxed font-light">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-gold/20 flex flex-col space-y-1">
                <span className="font-sans font-semibold text-sm uppercase tracking-wider text-brand-light">
                  {rev.guest}
                </span>
                <span className="text-xs text-brand-gold/80 font-sans">
                  {rev.context}
                </span>
                <span className="text-[11px] text-brand-cream/50 font-sans">
                  {rev.platform}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-brand-gold/80 bg-brand-ebony-soft px-4 py-2 border border-brand-gold/20">
            <span>Verified Local Reviews • Sector 104, Noida</span>
          </div>
        </div>
      </div>
    </section>
  );
}
