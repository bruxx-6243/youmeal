/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFAB08",
        orange: "#FF7020",
        black: "#000000",
        gray: "#F9F9F9",
        gray_alt: "#F2F2F3",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        "hero-bg-large": "url('./src/assets/images/hero-bg.png')",
        "hero-bg-medium": "url('./src/assets/images/hero-medium-screen.png')",
        "hero-bg-small": "url('./src/assets/images/small-screen-bg.png')",
      },
    },
  },
  plugins: [],
};
