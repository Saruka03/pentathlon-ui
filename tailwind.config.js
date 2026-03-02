/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "luna-ink": "#0B1020",
        "luna-night": "#11182B",
        "luna-slate": "#1C2541",
        "luna-mist": "#A8B2D1",
        "luna-ice": "#E6EEFF",
        "luna-cyan": "#6EE7F8",
        "luna-lilac": "#9AA7FF",
        "luna-glow": "#4BA3FF",
        "luna-warning": "#F5C26B",
        "luna-danger": "#FF6B6B",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}
