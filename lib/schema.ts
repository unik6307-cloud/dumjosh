import { RESTAURANT_INFO } from "./data/restaurant-info";

export function getRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    "@id": "https://dumjosh.com/#restaurant",
    name: RESTAURANT_INFO.name,
    description:
      "Dumjosh is a premium dining restaurant in Sector 104, Noida, combining modern Indian cuisine with Asian favourites, rooted in authentic slow-cooking techniques and memorable hospitality.",
    image: [
      "https://dumjosh.com/images/hero-interior.jpg",
      "https://dumjosh.com/images/biryani-hero.png",
    ],
    telephone: RESTAURANT_INFO.phone.raw,
    priceRange: "₹₹₹",
    servesCuisine: RESTAURANT_INFO.cuisines,
    menu: "https://dumjosh.com/menu",
    acceptsReservations: "True",
    address: {
      "@type": "PostalAddress",
      streetAddress: RESTAURANT_INFO.address.street,
      addressLocality: RESTAURANT_INFO.address.locality,
      addressRegion: RESTAURANT_INFO.address.state,
      postalCode: RESTAURANT_INFO.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: RESTAURANT_INFO.coordinates.lat,
      longitude: RESTAURANT_INFO.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "12:00",
        closes: "23:30",
      },
    ],
    hasMap: RESTAURANT_INFO.googleMapsUrl,
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI",
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
