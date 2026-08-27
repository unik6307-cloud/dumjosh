"use client";

import React, { useState } from "react";
import type { Metadata } from "next";
import { RESTAURANT_INFO } from "@/lib/data/restaurant-info";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReservation } from "@/components/layout/ReservationContext";
import { MapPin, Phone, Clock, Mail, MessageSquare, Navigation, CheckCircle2, Calendar } from "lucide-react";

export default function ContactPage() {
  const { openModal } = useReservation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Dumjosh,\n\nI have an inquiry from your website:\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n✉️ Email: ${formData.email}\n📌 Subject: ${formData.subject}\n📝 Message: ${formData.message}`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp.number}?text=${text}`, "_blank");
  };

  return (
    <div className="pt-24 pb-20 bg-brand-cream text-brand-dark min-h-screen">
      {/* Hero */}
      <section className="py-14 sm:py-20 bg-brand-ebony text-brand-light text-center border-b border-brand-gold/30 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold">
            Sector 104 Noida • Uttar Pradesh
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide">
            Location &amp; Contact
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-brand-cream/80 font-sans font-light max-w-xl mx-auto">
            We look forward to welcoming you to the Dumjosh table. Reach out to our hospitality desk or visit us directly.
          </p>
          <div className="w-12 h-[1.5px] bg-brand-gold/60 mx-auto mt-2" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Address */}
          <div className="bg-white p-8 border border-brand-gold/30 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-brand-burgundy/10 border border-brand-gold/30 flex items-center justify-center text-brand-burgundy">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl uppercase text-brand-burgundy">
                Our Sanctuary
              </h3>
              <p className="text-sm text-brand-dark/80 font-sans leading-relaxed font-light">
                {RESTAURANT_INFO.address.full}
              </p>
            </div>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-brand-terracotta hover:text-brand-burgundy"
            >
              <Navigation className="w-3.5 h-3.5 mr-1" />
              <span>Get Driving Directions →</span>
            </a>
          </div>

          {/* Card 2: Phone & Desk */}
          <div className="bg-white p-8 border border-brand-gold/30 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-brand-burgundy/10 border border-brand-gold/30 flex items-center justify-center text-brand-burgundy">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl uppercase text-brand-burgundy">
                Call &amp; WhatsApp
              </h3>
              <div className="space-y-1 font-sans text-sm">
                <p className="text-brand-dark/70">Hospitality Desk:</p>
                <a
                  href={`tel:${RESTAURANT_INFO.phone.raw}`}
                  className="font-serif text-2xl text-brand-burgundy font-semibold block hover:text-brand-terracotta"
                >
                  {RESTAURANT_INFO.phone.display}
                </a>
              </div>
            </div>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp.number}?text=${encodeURIComponent(
                "Hello Dumjosh! I would like to speak with the desk."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-emerald-700 hover:text-emerald-800"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1" />
              <span>Direct WhatsApp Concierge →</span>
            </a>
          </div>

          {/* Card 3: Hours */}
          <div className="bg-white p-8 border border-brand-gold/30 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-brand-burgundy/10 border border-brand-gold/30 flex items-center justify-center text-brand-burgundy">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl uppercase text-brand-burgundy">
                Opening Hours
              </h3>
              <div className="space-y-1 font-sans text-xs text-brand-dark/80">
                <p className="font-semibold text-brand-dark text-sm">Open 7 Days a Week</p>
                <p>12:00 PM – 11:30 PM (Continuous)</p>
                <p className="text-brand-dark/60 pt-1">
                  Lunch: 12:00 PM – 4:00 PM
                  <br />
                  Dinner: 7:00 PM – 11:30 PM
                </p>
              </div>
            </div>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-brand-terracotta hover:text-brand-burgundy text-left"
            >
              <Calendar className="w-3.5 h-3.5 mr-1" />
              <span>Reserve a Table Online →</span>
            </button>
          </div>
        </div>

        {/* Map & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Map Side */}
          <div className="lg:col-span-6 min-h-[420px] border border-brand-gold/40 shadow-luxury overflow-hidden relative">
            <iframe
              title="Dumjosh Location Sector 104 Noida"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.434457492931!2d77.38883587629555!3d28.52668707572396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce79a32c25381%3A0xe54e3dbe726ec4fa!2sHazipur%2C%20Sector%20104%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Form Side */}
          <div className="lg:col-span-6 bg-white border border-brand-gold/30 p-8 sm:p-10 shadow-luxury">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-brand-gold/20 pb-3">
                  <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">
                    Direct Concierge
                  </span>
                  <h3 className="font-serif text-2xl uppercase text-brand-burgundy mt-1">
                    Send a Message
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-brand-cream/30 border border-brand-gold/30 px-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-brand-cream/30 border border-brand-gold/30 px-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-cream/30 border border-brand-gold/30 px-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-brand-cream/30 border border-brand-gold/30 px-3 py-2.5 text-sm text-brand-dark focus:border-brand-burgundy outline-none transition"
                    >
                      <option value="Table Reservation">Table Reservation</option>
                      <option value="Celebration / Event">Celebration / Party Enquiry</option>
                      <option value="Corporate Dining">Corporate Dining Packages</option>
                      <option value="Catering Service">Outdoor Catering Enquiry</option>
                      <option value="Feedback">Feedback / Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-brand-cream/30 border border-brand-gold/30 p-3 text-sm text-brand-dark focus:border-brand-burgundy outline-none transition resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button type="submit" variant="burgundy" size="md" className="flex-1">
                    Send Message
                  </Button>
                  <Button
                    type="button"
                    variant="outline-gold"
                    size="md"
                    onClick={handleWhatsAppDirect}
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-green-700" />
                    <span>Send via WhatsApp</span>
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-700">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl text-brand-burgundy uppercase">
                  Message Sent
                </h3>
                <p className="text-xs sm:text-sm text-brand-dark/80 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold">{formData.name}</span>. Our desk has received your message regarding &ldquo;{formData.subject}&rdquo; and will respond promptly.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <Button variant="gold" size="sm" onClick={handleWhatsAppDirect}>
                    Continue on WhatsApp
                  </Button>
                  <Button variant="outline-gold" size="sm" onClick={() => setSubmitted(false)}>
                    New Message
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
