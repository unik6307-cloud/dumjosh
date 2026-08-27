import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left" | "right";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const alignClass = {
    center: "text-center items-center mx-auto",
    left: "text-left items-start",
    right: "text-right items-end ml-auto",
  }[align];

  const eyebrowColor = theme === "dark" ? "text-brand-gold" : "text-brand-terracotta";
  const titleColor = theme === "dark" ? "text-brand-light" : "text-brand-dark";
  const subtitleColor = theme === "dark" ? "text-brand-cream/80" : "text-brand-dark/70";

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <div className="flex items-center space-x-3 mb-3">
          <span className="w-6 h-[1px] bg-brand-gold/60"></span>
          <span
            className={`text-xs md:text-sm font-sans uppercase tracking-widest font-semibold ${eyebrowColor}`}
          >
            {eyebrow}
          </span>
          <span className="w-6 h-[1px] bg-brand-gold/60"></span>
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal leading-tight tracking-tight uppercase ${titleColor}`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg font-sans leading-relaxed font-light ${subtitleColor} max-w-2xl`}
        >
          {subtitle}
        </p>
      )}

      <div className={`w-16 h-[2px] bg-brand-gold/50 mt-6 ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
