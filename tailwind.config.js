/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bases
        "vhs-bone": "#f4f1ea", 
        "vhs-black": "#050505", 
        "vhs-gray": "#1a1a1a",
        
        // Colores existentes
        "vhs-yellow": "#ffcc00",
        "vhs-neon-green": "#00ff00",
        "martinika-green": "#ccff00",
        
        // Colores de la Barra Espectral (Rainbow)
        "spec-purple": "#9d00ff",
        "spec-pink": "#ff0055",
        "spec-orange": "#ffaa00",
        "spec-yellow": "#eeff00",
        "spec-green": "#00ff55",
        "spec-cyan": "#00ffff",
      },
      fontFamily: {
        sans: ["Chakra Petch", "sans-serif"],
        serif: ["Playfair Display", "serif"], // <--- NUEVA FUENTE SERIF
        mono: ["VT323", "monospace"],
      },
      // Box Shadow para el efecto neón
      boxShadow: {
        'neon-purple': '0 0 15px #9d00ff',
        'neon-pink': '0 0 15px #ff0055',
        'neon-orange': '0 0 15px #ffaa00',
        'neon-yellow': '0 0 15px #eeff00',
        'neon-green': '0 0 15px #00ff55',
        'neon-cyan': '0 0 15px #00ffff',
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "breathing": "breathing 4s ease-in-out infinite",
        "spin-reels": "spin-reels 2s linear infinite",
        "chromatic": "chromatic-burst 4s infinite linear",
      },
      keyframes: {
        breathing: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "spin-reels": {
          "from": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(360deg)" }
        },
        "chromatic-burst": {
          "0%, 92%": { filter: "drop-shadow(0 0 0 transparent)", transform: "translate(0)" },
          "94%": { filter: "drop-shadow(2px 0 0 #ff0055) drop-shadow(-2px 0 0 #39ff14)", transform: "translate(-1px, 1px)" },
          "96%": { filter: "drop-shadow(-2px 0 0 #ffcc00) drop-shadow(2px 0 0 #ff0033)", transform: "translate(1px, -1px)" },
          "100%": { filter: "drop-shadow(0 0 0 transparent)", transform: "translate(0)" }
        }
      }
    }
  },
  plugins: [],
};