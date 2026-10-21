/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          bg: '#FAF7EE',
          surface: '#FFFFFF',
          dark: '#121212',
          yellow: '#FFE600',
          orange: '#FF6B4A',
          green: '#22C55E',
          cyan: '#38BDF8',
          purple: '#A78BFA',
          pink: '#F472B6',
          lime: '#A3E635',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px #000000',
        'brutal': '4px 4px 0px 0px #000000',
        'brutal-lg': '6px 6px 0px 0px #000000',
        'brutal-xl': '8px 8px 0px 0px #000000',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
