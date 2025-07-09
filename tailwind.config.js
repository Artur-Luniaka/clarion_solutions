/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#020a18",
        "primary-black": "#1e1e1e",
        "primary-white": "#fff",
        "title-green": "#ceff50",
        "btn-green": "#d0ff59",
      },
      screens: {
        xs: "360px",
        md: "768px",
        lg: "1280px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          md: "40px",
          lg: "60px",
        },
      },
      fontFamily: {
        "actay-wide": ["var(--font-actay-wide)"],
        urbanist: ["var(--font-urbanist)"],
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
        raleway: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [],
};
