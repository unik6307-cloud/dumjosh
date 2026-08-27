"use client";

import React from "react";
import { RESTAURANT_INFO } from "@/lib/data/restaurant-info";
import { Button } from "@/components/ui/Button";
import { useReservation } from "@/components/layout/ReservationContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Phone, Clock, Navigation, Calendar } from "lucide-react";

export function LocationMapSection() {
  const { openModal } = useReservation();

  return (
    <section className="py-20 md:py-32 bg-brand-cream text-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Find Your Way"
          title="Come Experience Dumjosh"
          subtitle="Located conveniently in the heart of Sector 104, Noida's premier culinary boulevard."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Details & Primary Actions */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 border border-brand-gold/30 shadow-luxury flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-widest text-brand-terracotta font-semibold">
                  Address &amp; Location
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-brand-burgundy uppercase">
                  Dumjosh Noida
                </h3>
                <p className="text-sm font-sans text-brand-dark/80 leading-relaxed font-light flex items-start space-x-2 pt-1">
                  <MapPin className="w-4 h-4 text-brand-terracotta shrink-0 mt-1" />
                  <span>{RESTAURANT_INFO.address.full}</span>
                </p>
              </div>

              <div className="space-y-2 border-t border-brand-gold/20 pt-4">
                <span className="text-[11px] uppercase tracking-widest text-brand-terracotta font-semibold">
                  Telephone &amp; Desk
                </span>
                <div className="flex items-center space-x-2 text-sm font-sans">
                  <Phone className="w-4 h-4 text-brand-terracotta shrink-0" />
                  <a
                    href={`tel:${RESTAURANT_INFO.phone.raw}`}
                    className="font-serif text-xl text-brand-burgundy hover:text-brand-terracotta font-semibold"
                  >
                    {RESTAURANT_INFO.phone.display}
                  </a>
                </div>
              </div>

              <div className="space-y-2 border-t border-brand-gold/20 pt-4">
                <span className="text-[11px] uppercase tracking-widest text-brand-terracotta font-semibold">
                  Operating Hours
                </span>
                <div className="flex items-start space-x-2 text-xs font-sans text-brand-dark/80">
                  <Clock className="w-4 h-4 text-brand-terracotta shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-brand-dark">Monday – Sunday</p>
                    <p>12:00 PM – 11:30 PM (Continuous Service)</p>
                    <p className="text-[11px] text-brand-dark/60 mt-0.5">
                      Lunch: 12:00 PM – 4:00 PM | Dinner: 7:00 PM – 11:30 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-brand-gold/20 pt-4 space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-brand-terracotta font-semibold">
                  Parking &amp; Access
                </span>
                <p className="text-xs text-brand-dark/70 font-sans leading-relaxed">
                  Valet parking assistance available on site. Wheelchair accessible ground floor entrance.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-brand-gold/30 flex flex-col sm:flex-row gap-3">
              <Button
                variant="gold"
                size="md"
                onClick={() => openModal()}
                className="flex items-center justify-center gap-1.5 flex-1"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </Button>

              <Button
                variant="burgundy"
                size="md"
                href={`tel:${RESTAURANT_INFO.phone.raw}`}
                className="flex items-center justify-center gap-1.5 flex-1"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </Button>

              <Button
                variant="outline-gold"
                size="md"
                href={RESTAURANT_INFO.googleMapsUrl}
                className="flex items-center justify-center gap-1.5 flex-1"
              >
                <Navigation className="w-4 h-4" />
                <span>Directions</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[400px] border border-brand-gold/40 shadow-luxury relative overflow-hidden bg-brand-ebony">
            <iframe
              title="Dumjosh Sector 104 Noida Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.434457492931!2d77.38883587629555!3d28.52668707572396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce79a32c25381%3A0xe54e3dbe726ec4fa!2sHazipur%2C%20Sector%20104%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.15) contrast(1.05)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
