/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ef6000', // Brand Primary Amber
          600: '#dc5500',
          700: '#b84400',
          800: '#913500',
          900: '#6d2800',
          brand: '#ef6000',
        },
        slate: {
          850: '#1a1f26',
          900: '#212529', // Dark charcoal/slate
          950: '#14181d',
          navy: '#273140', // Deep sleek navy accent
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Sora', 'Manrope', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        'brand-sm': '8px',
        'brand-md': '12px',
        'brand-lg': '18px',
        'brand-xl': '28px',
      },
      boxShadow: {
        'brand-card': '0 16px 40px -22px rgba(20, 24, 29, 0.34)',
        'brand-elevated': '0 30px 80px -34px rgba(12, 15, 20, 0.52)',
        'brand-glow': '0 18px 42px -16px rgba(239, 96, 0, 0.68)',
      }
    },
  },
  plugins: [],
};
