"use client";

import React, { useState } from "react";
import { RESTAURANT_INFO } from "@/lib/data/restaurant-info";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Building2, Phone, Mail, User, Calendar, Users, MessageSquare } from "lucide-react";

export function CorporateEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    eventType: "Lunch Buffet",
    guests: "25",
    preferredDate: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Dumjosh Corporate Desk,\n\nI would like to submit a Corporate Event Enquiry:\n\n👤 Name: ${formData.name}\n🏢 Company: ${formData.company}\n📞 Phone: ${formData.phone}\n✉️ Email: ${formData.email}\n🎯 Event Type: ${formData.eventType}\n👥 Estimated Guests: ${formData.guests}\n📅 Preferred Date: ${formData.preferredDate}\n📝 Notes: ${formData.message || "None"}`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp.number}?text=${text}`, "_blank");
  };

  return (
    <div id="enquiry" className="bg-white border border-brand-gold/30 p-6 sm:p-10 shadow-luxury scroll-mt-28">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-brand-gold/20 pb-4">
            <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">
              Dumjosh for Business
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-burgundy uppercase mt-1">
              Request Corporate Proposal
            </h3>
            <p className="text-xs sm:text-sm text-brand-dark/70 font-sans mt-1">
              Fill in your details below to receive custom menus, dietary customizations, and package dates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
                Contact Person Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-brand-gold" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Khurana"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-brand-cream/30 border border-brand-gold/30 pl-9 pr-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
                Company / Organization Name *
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3 w-4 h-4 text-brand-gold" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Adobe Noida, HCL, Paytm"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-brand-cream/30 border border-brand-gold/30 pl-9 pr-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
                Mobile Number *
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

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
                Corporate Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-brand-gold" />
                <input
                  type="email"
                  required
                  placeholder="rajesh@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-brand-cream/30 border border-brand-gold/30 pl-9 pr-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Event Type */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
                Event Type *
              </label>
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full bg-brand-cream/30 border border-brand-gold/30 px-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition"
              >
                <option value="Lunch Buffet">Lunch Buffet</option>
                <option value="Corporate Dinner Party">Corporate Dinner Party</option>
                <option value="Business Meeting with Lunch">Business Meeting with Lunch</option>
                <option value="Team Milestone Celebration">Team Milestone Celebration</option>
                <option value="Corporate Boardroom Delivery">Corporate Boardroom Delivery</option>
                <option value="Client Hospitality">Client Hospitality</option>
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
                  min={10}
                  max={500}
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

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
              Event Details / Specific Requirements
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about audio-visual requirements, dietary restrictions (Jain/Vegan), seating style, or billing instructions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-brand-cream/30 border border-brand-gold/30 p-3 text-sm text-brand-dark focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy outline-none transition resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button type="submit" variant="burgundy" size="lg" className="flex-1">
              Submit Corporate Enquiry
            </Button>
            <Button
              type="button"
              variant="outline-gold"
              size="lg"
              onClick={handleWhatsAppSend}
              className="flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-green-700" />
              Connect via Corporate WhatsApp
            </Button>
          </div>
        </form>
      ) : (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-700">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-serif text-3xl text-brand-burgundy uppercase">
            Corporate Enquiry Received
          </h3>
          <p className="text-sm text-brand-dark/80 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold">{formData.name}</span> from{" "}
            <span className="font-semibold">{formData.company}</span>. Our Corporate Hospitality Manager will review your requirements for{" "}
            <span className="font-semibold">{formData.guests} guests</span> on{" "}
            <span className="font-semibold">{formData.preferredDate}</span> and contact you shortly with formal pricing and customized menu choices.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <Button variant="gold" size="md" onClick={handleWhatsAppSend}>
              Forward Details on WhatsApp
            </Button>
            <Button variant="outline-gold" size="md" onClick={() => setSubmitted(false)}>
              Send Another Enquiry
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
