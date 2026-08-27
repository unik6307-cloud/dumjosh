"use client";

import React from "react";
import Link from "next/link";
import { Utensils, Phone, MessageSquare, Calendar } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/data/restaurant-info";
import { useReservation } from "./ReservationContext";

export function MobileBottomBar() {
  const { openModal } = useReservation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-ebony/95 backdrop-blur-lg border-t border-brand-gold/30 lg:hidden shadow-2xl safe-area-pb">
      <div className="grid grid-cols-4 h-16">
        {/* Menu */}
        <Link
          href="/menu"
          className="flex flex-col items-center justify-center text-brand-cream/80 hover:text-brand-gold transition-colors"
        >
          <Utensils className="w-4 h-4 mb-1 text-brand-gold" />
          <span className="text-[10px] uppercase tracking-wider font-medium">Menu</span>
        </Link>

        {/* Call */}
        <a
          href={`tel:${RESTAURANT_INFO.phone.raw}`}
          className="flex flex-col items-center justify-center text-brand-cream/80 hover:text-brand-gold transition-colors"
        >
          <Phone className="w-4 h-4 mb-1 text-brand-gold" />
          <span className="text-[10px] uppercase tracking-wider font-medium">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsapp.number}?text=${encodeURIComponent(
            RESTAURANT_INFO.whatsapp.messages.reservation
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-brand-cream/80 hover:text-brand-gold transition-colors"
        >
          <MessageSquare className="w-4 h-4 mb-1 text-emerald-400" />
          <span className="text-[10px] uppercase tracking-wider font-medium">WhatsApp</span>
        </a>

        {/* Reserve */}
        <button
          onClick={() => openModal()}
          className="flex flex-col items-center justify-center bg-brand-gold text-brand-ebony font-semibold hover:bg-brand-gold-light transition-colors"
        >
          <Calendar className="w-4 h-4 mb-1 text-brand-ebony" />
          <span className="text-[10px] uppercase tracking-wider font-bold">Reserve</span>
        </button>
      </div>
    </div>
  );
}
