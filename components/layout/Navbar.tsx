"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X, Phone, Calendar } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/data/restaurant-info";
import { useReservation } from "./ReservationContext";

const NAV_LINKS = [
  { label: "Our Story", href: "/story" },
  { label: "Menu", href: "/menu" },
  { label: "Experience", href: "/experience" },
  { label: "Celebrations", href: "/celebrations" },
  { label: "Corporate", href: "/corporate" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useReservation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          scrolled
            ? "bg-[#181311]/95 backdrop-blur-md py-3.5 border-b border-[#B7955B]/30 shadow-2xl"
            : "bg-[#181311]/90 backdrop-blur-sm py-4 border-b border-[#B7955B]/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
          >
            {/* Transparent Royal Handi Emblem */}
            <div className="relative w-8 h-9 sm:w-9 sm:h-10 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/emblem-handi.png"
                alt="Dumjosh Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Typography */}
            <div className="flex flex-col justify-center">
              <span className="font-serif text-xl sm:text-2xl font-medium tracking-[0.16em] text-[#F7F1E7] uppercase leading-none">
                Dum<span className="text-[#B7955B]">Josh</span>
              </span>
              <span className="text-[8px] sm:text-[9px] font-sans uppercase tracking-[0.26em] text-[#B7955B]/85 mt-1 font-semibold whitespace-nowrap">
                Sector 104 • Noida
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 shrink-0">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] xl:text-xs uppercase tracking-[0.18em] xl:tracking-[0.22em] font-sans font-medium transition-colors relative py-1.5 whitespace-nowrap ${
                    isActive
                      ? "text-[#B7955B] font-semibold"
                      : "text-[#F4EDE2]/80 hover:text-[#B7955B]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B7955B]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3 xl:gap-5 shrink-0">
            {/* Phone link: Full number on xl+, icon pill on lg */}
            <a
              href={`tel:${RESTAURANT_INFO.phone.raw}`}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F4EDE2]/80 hover:text-[#B7955B] transition-colors whitespace-nowrap group"
              title={`Call ${RESTAURANT_INFO.phone.display}`}
            >
              <span className="w-8 h-8 rounded-full border border-[#B7955B]/40 flex items-center justify-center text-[#B7955B] group-hover:bg-[#B7955B] group-hover:text-[#181311] transition-all">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span className="hidden xl:inline font-sans text-xs tracking-wider">
                {RESTAURANT_INFO.phone.display}
              </span>
            </a>

            {/* Vertical hairline divider */}
            <span className="hidden xl:block w-[1px] h-5 bg-[#B7955B]/30" />

            {/* Primary Reserve Button */}
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2 px-4 xl:px-5 py-2.5 bg-[#B7955B] hover:bg-[#d4b37f] text-[#181311] font-sans font-semibold text-xs uppercase tracking-[0.18em] whitespace-nowrap shadow-gold transition-all duration-300 focus:outline-none"
            >
              <Calendar className="w-3.5 h-3.5 text-[#181311]" />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openModal()}
              className="px-3 py-1.5 bg-[#B7955B] text-[#181311] text-[11px] font-sans font-semibold uppercase tracking-wider whitespace-nowrap sm:hidden"
            >
              Reserve
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F4EDE2] hover:text-[#B7955B] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-4/5 max-w-sm h-full bg-[#181311] border-l border-[#B7955B]/30 p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
            <div>
              {/* Drawer Brand Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#B7955B]/20">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <div className="relative w-8 h-8">
                    <Image
                      src="/images/emblem-handi.png"
                      alt="Dumjosh"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif text-xl font-medium text-[#F7F1E7] uppercase tracking-wider">
                      Dum<span className="text-[#B7955B]">Josh</span>
                    </span>
                    <span className="text-[8px] uppercase tracking-widest text-[#B7955B]/80">
                      Sector 104 • Noida
                    </span>
                  </div>
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#F4EDE2]/80 hover:text-[#B7955B] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="py-6 flex flex-col space-y-3">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-xs uppercase tracking-[0.2em] font-sans py-2.5 border-b border-white/5 flex items-center justify-between ${
                        isActive
                          ? "text-[#B7955B] font-semibold pl-2 border-l-2 border-l-[#B7955B]"
                          : "text-[#F4EDE2]/80 hover:text-[#B7955B]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-[#B7955B]/50">→</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-[#B7955B]/20 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full py-3 bg-[#B7955B] hover:bg-[#d4b37f] text-[#181311] font-sans font-semibold text-xs uppercase tracking-widest text-center shadow-gold transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve a Table</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phone.raw}`}
                className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#F4EDE2]/90 hover:text-[#B7955B] py-2.5 border border-[#B7955B]/30 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B7955B]" />
                <span>Call {RESTAURANT_INFO.phone.display}</span>
              </a>

              <p className="text-[10px] text-center text-[#F4EDE2]/50 tracking-widest uppercase font-sans pt-1">
                104, Hazipur, Sector 104, Noida
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
