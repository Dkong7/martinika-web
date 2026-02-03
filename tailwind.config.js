/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "vhs-bone": "#f2eee0",
        "vhs-yellow": "#ffcc00",
        "vhs-neon-green": "#00ff00",
        "martinika-green": "#ccff00",
        "vhs-black": "#08080a",
        "vhs-gray": "#121212",
      },
      fontFamily: {
        sans: ["Chakra Petch", "sans-serif"],
        mono: ["VT323", "monospace"],
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "breathing": "breathing 4s ease-in-out infinite",
        "spin-reels": "spin-reels 2s linear infinite",
      },
      keyframes: {
        breathing: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "spin-reels": {
          "from": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(360deg)" }
        }
      }
    }
  },
  plugins: [],
};