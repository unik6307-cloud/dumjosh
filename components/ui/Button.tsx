import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";

type ButtonBaseProps = {
  variant?: "gold" | "burgundy" | "outline-gold" | "outline-light" | "text-gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "gold",
  size = "md",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans tracking-luxury uppercase font-medium transition-all duration-300 rounded-none text-center cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-brand-gold/50 whitespace-nowrap";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 space-x-1.5",
    md: "text-xs md:text-sm px-6 py-3 space-x-2",
    lg: "text-sm md:text-base px-8 py-4 space-x-2.5",
  };

  const variantStyles = {
    gold: "bg-brand-gold text-brand-ebony hover:bg-brand-gold-light border border-brand-gold shadow-gold font-semibold",
    burgundy:
      "bg-brand-burgundy text-brand-light hover:bg-brand-burgundy-light border border-brand-burgundy/80 shadow-luxury",
    "outline-gold":
      "bg-transparent text-brand-gold border border-brand-gold/70 hover:bg-brand-gold hover:text-brand-ebony",
    "outline-light":
      "bg-transparent text-brand-light border border-brand-light/40 hover:bg-brand-light hover:text-brand-ebony",
    "text-gold":
      "bg-transparent text-brand-gold hover:text-brand-gold-light underline underline-offset-8 decoration-brand-gold/40 hover:decoration-brand-gold p-0",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("https://wa.me");
    if (isExternal) {
      return (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={combinedClasses}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
