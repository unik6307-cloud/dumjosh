import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          burgundy: "#4A1820",
          "burgundy-dark": "#361016",
          "burgundy-light": "#61232c",
          terracotta: "#7A4B34",
          "terracotta-light": "#965e43",
          cream: "#F4EDE2",
          "cream-light": "#FAF6F0",
          "cream-dark": "#E7DCShared",
          ebony: "#211C19",
          "ebony-soft": "#2A2420",
          gold: "#B7955B",
          "gold-light": "#D4B37F",
          "gold-dark": "#9A7B45",
          forest: "#34453A",
          dark: "#241F1C",
          light: "#F7F1E7",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
        luxury: ".18em",
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(33, 28, 25, 0.25)",
        gold: "0 10px 30px -10px rgba(183, 149, 91, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
