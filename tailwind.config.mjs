/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        border: "#27272A",
        background: "#09090B",
        foreground: "#FAFAFA",
        primary: {
          DEFAULT: "#fafafa",
          foreground: "#1a1b1e",
        },
        secondary: {
          DEFAULT: "#27272A",
          foreground: "#FAFAFA",
        },
        destructive: {
          DEFAULT: "#AC0000",
          foreground: "#fafafa",
        },
        muted: {
          DEFAULT: "#27272A",
          foreground: "#FAFAFA",
        },
      },
      fontFamily: {
        sans: ["Bowlby One", ...defaultTheme.fontFamily.sans],
        inter: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
