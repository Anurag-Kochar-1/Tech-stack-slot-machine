/** @type {import('tailwindcss').Config} */

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
    },
  },
  plugins: [],
};
