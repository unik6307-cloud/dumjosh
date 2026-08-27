import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { ReservationProvider } from "@/components/layout/ReservationContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { ReservationModal } from "@/components/layout/ReservationModal";
import { RESTAURANT_INFO } from "@/lib/data/restaurant-info";
import { getRestaurantSchema } from "@/lib/schema";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dumjosh.com"),
  title: {
    default: "Dumjosh | Progressive Asian • Modern Indian • Sector 104 Noida",
    template: "%s | Dumjosh Sector 104 Noida",
  },
  description:
    "Dumjosh is a premium dining restaurant in Sector 104, Noida. Experience authentic slow-cooked dum biryanis, regional Indian curries, and progressive Asian favourites.",
  keywords: [
    "Dumjosh",
    "Dumjosh Noida",
    "restaurant in Sector 104 Noida",
    "best restaurant Sector 104 Noida",
    "Indian restaurant Sector 104 Noida",
    "biryani restaurant Noida",
    "Mughlai restaurant Noida",
    "North Indian restaurant Noida",
    "corporate dining Noida",
    "corporate party restaurant Noida",
    "birthday restaurant Sector 104 Noida",
  ],
  authors: [{ name: "Dumjosh Hospitality" }],
  openGraph: {
    title: "Dumjosh | Flavours Sealed With Energy and Heart",
    description:
      "Modern Indian cuisine, regional depth, and progressive Asian favourites in Sector 104, Noida. Reserve a table or explore our menu.",
    url: "https://dumjosh.com",
    siteName: "Dumjosh",
    images: [
      {
        url: "/images/hero-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Dumjosh Premium Dining Salon Sector 104 Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dumjosh | Premium Dining in Sector 104 Noida",
    description: "Flavours sealed with energy and heart. Authentic dum cooking and royal hospitality.",
    images: ["/images/hero-interior.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getRestaurantSchema();

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${manrope.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-brand-cream text-brand-dark antialiased flex flex-col selection:bg-brand-burgundy selection:text-brand-gold pb-16 lg:pb-0">
        <ReservationProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <MobileBottomBar />
          <ReservationModal />
        </ReservationProvider>
      </body>
    </html>
  );
}
