/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00FFFF",
        "secondary": "#D900FF",
        "background-dark": "#050505",
        "card-dark": "#10101A",
        "text-light": "#FFFFFF"
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "monospace"]
      },
      borderRadius: {
        "DEFAULT": "0rem",
        "lg": "0rem",
        "xl": "0rem",
        "full": "0rem"
      },
      boxShadow: {
        'glow-blue': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF',
        'glow-purple': '0 0 5px #D900FF, 0 0 10px #D900FF, 0 0 15px #D900FF',
      }
    },
  },
  plugins: [],
}