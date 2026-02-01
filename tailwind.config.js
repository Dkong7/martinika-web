/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores nuevos (Hero y Navbar)
        'vhs-bone': '#f2eee0',
        'vhs-yellow': '#ffcc00',
        
        // Tus colores anteriores (mantenidos por seguridad)
        'martinika-green': '#ccff00',
        'vhs-black': '#08080a', // Ajustado al negro suave del diseño nuevo
        'vhs-gray': '#121212',
      },
      fontFamily: {
        // IMPORTANTE: Esto conecta la fuente Chakra Petch con 'font-sans'
        sans: ['"Chakra Petch"', 'sans-serif'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'breathing': 'breathing 4s ease-in-out infinite',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}