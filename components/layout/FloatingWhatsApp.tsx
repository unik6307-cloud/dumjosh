"use client";

import React, { useState } from "react";
import { MessageCircle, X, ChevronRight, Utensils, Sparkles, Briefcase, Calendar } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/data/restaurant-info";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const triggers = [
    {
      label: "Reserve a Table",
      icon: Calendar,
      message: RESTAURANT_INFO.whatsapp.messages.reservation,
    },
    {
      label: "Enquire About a Celebration",
      icon: Sparkles,
      message: RESTAURANT_INFO.whatsapp.messages.celebration,
    },
    {
      label: "Corporate Dining & Packages",
      icon: Briefcase,
      message: RESTAURANT_INFO.whatsapp.messages.corporate,
    },
    {
      label: "Explore Menu Recommendations",
      icon: Utensils,
      message: RESTAURANT_INFO.whatsapp.messages.menu,
    },
  ];

  const handleOpenChat = (message: string) => {
    const url = `https://wa.me/${RESTAURANT_INFO.whatsapp.number}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-40">
      {/* Popover Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-brand-cream border border-brand-gold/40 shadow-2xl overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-brand-burgundy p-4 text-brand-light flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif text-sm font-semibold tracking-wide">Dumjosh Concierge</p>
                <p className="text-[10px] text-brand-gold">Online • Sector 104 Noida</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-brand-cream/80 hover:text-white"
              aria-label="Close WhatsApp concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 bg-white/50 text-xs text-brand-dark/80">
            <p className="mb-3 font-medium">How may our dining team assist you today?</p>
            <div className="space-y-2">
              {triggers.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => handleOpenChat(item.message)}
                    className="w-full text-left p-2.5 bg-white border border-brand-gold/20 hover:border-brand-gold hover:bg-brand-cream transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-2.5">
                      <IconComponent className="w-4 h-4 text-brand-terracotta group-hover:text-brand-burgundy" />
                      <span className="text-xs font-sans text-brand-dark font-medium">
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-brand-gold/60 group-hover:text-brand-gold" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-2.5 bg-brand-ebony text-center">
            <p className="text-[10px] text-brand-gold/80 tracking-wider uppercase font-sans">
              Instant Chat with Dumjosh Desk
            </p>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 border-2 border-brand-gold/60"
        aria-label="Open WhatsApp Chat"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">Open WhatsApp chat</span>
      </button>
    </div>
  );
}
