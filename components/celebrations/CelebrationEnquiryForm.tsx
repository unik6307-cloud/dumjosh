"use client";

import React, { useState } from "react";
import { RESTAURANT_INFO } from "@/lib/data/restaurant-info";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Phone, Mail, User, Calendar, Users, Sparkles, MessageSquare } from "lucide-react";

export function CelebrationEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    occasion: "Birthday Celebration",
    guests: "15",
    preferredDate: "",
    specialRequests: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Dumjosh Celebrations Team,\n\nI would like to enquire about hosting a special occasion:\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n✉️ Email: ${formData.email}\n🥂 Occasion: ${formData.occasion}\n👥 Guests: ${formData.guests}\n📅 Date: ${formData.preferredDate}\n✨ Special Requests: ${formData.specialRequests || "None"}`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp.number}?text=${text}`, "_blank");
  };

  return (
    <div id="celebration-form" className="bg-white border border-brand-gold/30 p-6 sm:p-10 shadow-luxury scroll-mt-28">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-brand-gold/20 pb-4">
            <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">
              Host Your Gathering
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-burgundy uppercase mt-1">
              Plan Your Celebration
            </h3>
            <p className="text-xs sm:text-sm text-brand-dark/70 font-sans mt-1">
              Whether an intimate milestone or a lively family feast, let our team craft an extraordinary memory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
                Your Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-brand-gold" />
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-brand-cream/30 border border-brand-gold/30 pl-9 pr-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
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
                  className="w-full bg-brand-cream/30 border border-brand-gold/30 pl-9 pr-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Occasion */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
                Occasion *
              </label>
              <select
                value={formData.occasion}
                onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                className="w-full bg-brand-cream/30 border border-brand-gold/30 px-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
              >
                <option value="Birthday Celebration">Birthday Celebration</option>
                <option value="Anniversary Dinner">Anniversary Dinner</option>
                <option value="Family Gathering">Family Gathering</option>
                <option value="Private Dinner">Private Dinner</option>
                <option value="Engagement / Roka Dinner">Engagement / Roka Gathering</option>
                <option value="Group Reunion">Group Reunion</option>
              </select>
            </div>

            {/* Number of Guests */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
                Number of Guests *
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-3 w-4 h-4 text-brand-gold" />
                <input
                  type="number"
                  min={2}
                  max={150}
                  required
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-brand-cream/30 border border-brand-gold/30 pl-9 pr-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
                />
              </div>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
                Preferred Date *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-4 h-4 text-brand-gold" />
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-brand-cream/30 border border-brand-gold/30 pl-9 pr-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-brand-gold" />
              <input
                type="email"
                placeholder="you@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-brand-cream/30 border border-brand-gold/30 pl-9 pr-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
              Celebration Details (Decor, Cake, Special Table Setting)
            </label>
            <textarea
              rows={3}
              placeholder="Would you like assistance with custom celebratory cakes, candle decor, floral arrangements, or dietary preferences for your guests?"
              value={formData.specialRequests}
              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              className="w-full bg-brand-cream/30 border border-brand-gold/30 p-3 text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button type="submit" variant="burgundy" size="lg" className="flex-1">
              Send Event Enquiry
            </Button>
            <Button
              type="button"
              variant="outline-gold"
              size="lg"
              onClick={handleWhatsAppSend}
              className="flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-green-700" />
              Chat on WhatsApp
            </Button>
          </div>
        </form>
      ) : (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-700">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-serif text-3xl text-brand-burgundy uppercase">
            Celebration Enquiry Sent
          </h3>
          <p className="text-sm text-brand-dark/80 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold">{formData.name}</span>. Your celebration enquiry for{" "}
            <span className="font-semibold">{formData.occasion}</span> with {formData.guests} guests on{" "}
            <span className="font-semibold">{formData.preferredDate}</span> has been received. Our team will contact you to curate a splendid experience.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <Button variant="gold" size="md" onClick={handleWhatsAppSend}>
              Open in WhatsApp
            </Button>
            <Button variant="outline-gold" size="md" onClick={() => setSubmitted(false)}>
              Submit Another Request
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
