/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",   // Indigo (Nova-like)
        secondary: "#22D3EE", // Cyan accent
        dark: "#0B0E14",      // Deep background
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}
