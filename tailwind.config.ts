import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kinship: {
          maroon: "#4B0C1B",
          burgundy: "#8A1F42",
          accentBurgundy: "#971E49",
          cream: "#F8F2E8",
          creamLight: "#FCF9F3",
          blush: "#F0E0E3",
          blushSubtle: "#F9F3F4",
          gold: "#CDAE68",
          goldMuted: "#DEC793",
          text: "#251C1E",
          textMuted: "#6E6466",
          border: "#EADFD2",
          borderSoft: "#F2EBE1",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(37, 28, 30, 0.05), 0 1px 2px rgba(37, 28, 30, 0.03)",
        card: "0 4px 12px -2px rgba(75, 12, 27, 0.05), 0 2px 6px -1px rgba(75, 12, 27, 0.03)",
        elevated: "0 12px 24px -6px rgba(75, 12, 27, 0.08), 0 4px 8px -2px rgba(75, 12, 27, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
