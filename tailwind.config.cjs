/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      colors: {
        "brand-primary-white": "hsl(0, 0%, 100%)",
        "brand-primary-black": "hsl(0, 0%, 0%)",
        "brand-primary-gray-1": "hsl(0, 0%, 55%)",
        "brand-primary-gray-2": "hsl(0, 0%, 41%)",
      },
      fontSize: {
        base: "15px",
      },
      fontFamily: {
        Alata: ["Alata", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
