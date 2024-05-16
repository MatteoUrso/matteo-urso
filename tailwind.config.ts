import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      textColor: {
        primary: "var(--gray-12)",
        secondary: "var(--gray-11)",
        tertiary: "var(--gray-9)",
        // link: "var(--blue-10)",
      },
      backgroundColor: {
        // contrast: "var(--contrast-color)",
        primary: "var(--gray-1)",
        secondary: "var(--gray-2)",
        tertiary: "var(--gray-3)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
