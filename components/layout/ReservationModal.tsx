"use client";

import React, { useState, useEffect } from "react";
import { useReservation } from "./ReservationContext";
import { RESTAURANT_INFO } from "@/lib/data/restaurant-info";
import { X, Calendar, Clock, Users, Phone, Mail, User, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ReservationModal() {
  const { isOpen, preset, closeModal } = useReservation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "19:30",
    guests: 2,
    occasion: "Dinner",
    specialRequests: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preset) {
      setFormData((prev) => ({
        ...prev,
        date: preset.date || prev.date,
        guests: preset.guests || prev.guests,
        occasion: preset.occasion || prev.occasion,
      }));
    }
  }, [preset]);

  // Set default date to today or tomorrow if empty
  useEffect(() => {
    if (!formData.date) {
      const today = new Date().toISOString().split("T")[0];
      setFormData((prev) => ({ ...prev, date: today }));
    }
  }, [formData.date]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Dumjosh, I would like to reserve a table:\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📅 Date: ${formData.date}\n⏰ Time: ${formData.time}\n👥 Guests: ${formData.guests}\n🥂 Occasion: ${formData.occasion}\n📝 Notes: ${formData.specialRequests || "None"}`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp.number}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-ebony/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-brand-cream border border-brand-gold/40 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header decoration bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-brand-burgundy via-brand-gold to-brand-terracotta" />

        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 text-brand-dark/70 hover:text-brand-dark transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8 overflow-y-auto">
          {!submitted ? (
            <>
              <div className="text-center mb-6">
                <span className="text-[11px] font-sans uppercase tracking-widest text-brand-terracotta font-semibold">
                  Hospitality at Dumjosh
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-brand-burgundy uppercase mt-1">
                  Reserve Your Table
                </h3>
                <p className="text-xs md:text-sm text-brand-dark/70 font-sans mt-2">
                  Sector 104, Noida • Experiential Dining & Handcrafted Flavours
                </p>
                <div className="w-12 h-[1.5px] bg-brand-gold/60 mx-auto mt-3" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-brand-dark/80 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-brand-gold" />
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-brand-gold/30 pl-9 pr-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-brand-dark/80 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-brand-gold" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-brand-gold/30 pl-9 pr-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-brand-dark/80 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-brand-gold" />
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-brand-gold/30 pl-9 pr-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Occasion */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-brand-dark/80 mb-1">
                      Occasion
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full bg-white border border-brand-gold/30 px-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
                    >
                      <option value="Casual Dining">Casual Dining / Leisurely Meal</option>
                      <option value="Birthday Celebration">Birthday Celebration</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Family Gathering">Family Gathering</option>
                      <option value="Corporate Dining">Corporate Dinner / Team Meeting</option>
                      <option value="Quick Coffee & Bites">Quick Coffee & Bites</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Date */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-brand-dark/80 mb-1">
                      Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-2.5 top-3 w-4 h-4 text-brand-gold" />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-white border border-brand-gold/30 pl-8 pr-2 py-2.5 text-xs text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-brand-dark/80 mb-1">
                      Time Slot *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-2.5 top-3 w-4 h-4 text-brand-gold" />
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-white border border-brand-gold/30 pl-8 pr-2 py-2.5 text-xs text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
                      >
                        <optgroup label="Lunch Slots">
                          <option value="12:30">12:30 PM</option>
                          <option value="13:00">01:00 PM</option>
                          <option value="13:30">01:30 PM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="14:30">02:30 PM</option>
                          <option value="15:00">03:00 PM</option>
                        </optgroup>
                        <optgroup label="Dinner Slots">
                          <option value="19:00">07:00 PM</option>
                          <option value="19:30">07:30 PM</option>
                          <option value="20:00">08:00 PM</option>
                          <option value="20:30">08:30 PM</option>
                          <option value="21:00">09:00 PM</option>
                          <option value="21:30">09:30 PM</option>
                          <option value="22:00">10:00 PM</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-brand-dark/80 mb-1">
                      Guests *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-2.5 top-3 w-4 h-4 text-brand-gold" />
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                        className="w-full bg-white border border-brand-gold/30 pl-8 pr-2 py-2.5 text-xs text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20, "25+"].map((num) => (
                          <option key={num} value={num}>
                            {num} {Number(num) === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-brand-dark/80 mb-1">
                    Special Requests & Dietary Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Seating preference, dietary allergies, birthday cake arrangement, or corporate requirements..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full bg-white border border-brand-gold/30 p-2.5 text-xs text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Button type="submit" variant="burgundy" size="md" className="flex-1">
                    Confirm Reservation Request
                  </Button>
                  <Button
                    type="button"
                    variant="outline-gold"
                    size="md"
                    onClick={handleWhatsAppBooking}
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-green-700" />
                    Reserve via WhatsApp
                  </Button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-[11px] text-brand-dark/60 font-sans">
                    Prefer to speak directly? Call{" "}
                    <a
                      href={`tel:${RESTAURANT_INFO.phone.raw}`}
                      className="font-semibold text-brand-burgundy hover:underline"
                    >
                      {RESTAURANT_INFO.phone.display}
                    </a>
                  </p>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-700">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-3xl text-brand-burgundy uppercase">
                Reservation Received
              </h3>
              <p className="text-sm text-brand-dark/80 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-brand-dark">{formData.name}</span>. Your reservation request for{" "}
                <span className="font-semibold text-brand-dark">{formData.guests} guests</span> on{" "}
                <span className="font-semibold text-brand-dark">{formData.date} at {formData.time}</span> has been noted by our team.
              </p>
              <div className="p-4 bg-brand-light/70 border border-brand-gold/40 text-left text-xs text-brand-dark/80 space-y-1 max-w-sm mx-auto">
                <p>
                  <strong>Location:</strong> {RESTAURANT_INFO.address.full}
                </p>
                <p>
                  <strong>Table Contact:</strong> {RESTAURANT_INFO.phone.display}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <Button variant="gold" size="md" onClick={handleWhatsAppBooking}>
                  Instant WhatsApp Confirmation
                </Button>
                <Button variant="outline-gold" size="md" onClick={closeModal}>
                  Done
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
