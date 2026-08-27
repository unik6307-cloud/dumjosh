import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RESTAURANT_INFO } from "@/lib/data/restaurant-info";
import { MapPin, Phone, Clock, ArrowUpRight, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-ebony text-brand-cream border-t border-brand-gold/25 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-burgundy/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Signature Banner */}
      <div className="border-b border-brand-gold/20 py-10 md:py-14 bg-gradient-to-r from-brand-ebony via-brand-burgundy/30 to-brand-ebony text-center px-4">
        <span className="text-xs uppercase tracking-widest text-brand-gold/90 font-sans block mb-2">
          {RESTAURANT_INFO.eyebrow}
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-light uppercase tracking-wide">
          Flavours Sealed with Energy and Heart
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="Dumjosh"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-normal text-brand-light tracking-wider uppercase">
                  Dum<span className="text-brand-gold">Josh</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-brand-gold/80">
                  Sector 104 • Noida
                </span>
              </div>
            </Link>

            <p className="text-sm font-sans text-brand-cream/70 leading-relaxed max-w-sm font-light">
              A premium dining concept combining modern Indian cuisine with Asian favourites, rooted in authentic slow-cooking techniques, regional depth, and memorable hospitality.
            </p>

            <div className="pt-2 text-xs text-brand-gold/90 space-y-1 font-sans">
              <p className="font-semibold tracking-wider uppercase">Dum + Josh Philosophy</p>
              <p className="text-brand-cream/60 leading-relaxed font-light">
                Dum: The art of sealing food and slow-cooking over a low flame.
                <br />
                Josh: Intensity, vibrancy, and spirited celebration.
              </p>
            </div>
          </div>

          {/* Explore Col */}
          <div>
            <h4 className="font-serif text-lg text-brand-gold uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-luxury font-sans">
              <li>
                <Link
                  href="/story"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors inline-flex items-center group"
                >
                  <span>Our Story</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors inline-flex items-center group"
                >
                  <span>The Menu</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors inline-flex items-center group"
                >
                  <span>Dining Experience</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors inline-flex items-center group"
                >
                  <span>Photo Gallery</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors inline-flex items-center group"
                >
                  <span>Location & Contact</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Occasions Col */}
          <div>
            <h4 className="font-serif text-lg text-brand-gold uppercase tracking-wider mb-4">
              Occasions
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-luxury font-sans">
              <li>
                <Link
                  href="/celebrations"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors inline-flex items-center group"
                >
                  <span>Celebrations & Events</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors inline-flex items-center group"
                >
                  <span>Corporate Dining</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate#packages"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors inline-flex items-center group"
                >
                  <span>Food Packages</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/experience#coffee"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors inline-flex items-center group"
                >
                  <span>Quick Coffee & Bites</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-serif text-lg text-brand-gold uppercase tracking-wider mb-4">
              Visit Us
            </h4>
            <div className="space-y-3.5 text-xs text-brand-cream/80 font-sans font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  104, Hazipur, Sector 104, Noida, Uttar Pradesh 201304
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phone.raw}`}
                  className="hover:text-brand-gold transition-colors font-medium text-brand-light"
                >
                  {RESTAURANT_INFO.phone.display}
                </a>
              </div>

              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-brand-light">Daily 12:00 PM – 11:30 PM</p>
                  <p className="text-[11px] text-brand-cream/60">Lunch & Dinner Service</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-gold hover:underline text-xs tracking-wider uppercase font-medium"
                >
                  <span>Get Driving Directions</span>
                  <ArrowUpRight className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Legal and Copyright */}
        <div className="mt-14 pt-8 border-t border-brand-gold/15 flex flex-col md:flex-row items-center justify-between text-xs text-brand-cream/60 font-sans gap-4">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Dumjosh. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Sector 104 Noida</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-gold transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap.xml" className="hover:text-brand-gold transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
