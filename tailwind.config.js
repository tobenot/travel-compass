/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f4ff',
          100: '#edebff',
          200: '#dcd5ff',
          300: '#c3b2ff',
          400: '#a385ff',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        gold: {
          50: '#fdfbed',
          100: '#fdf6d6',
          200: '#f9e8a9',
          300: '#f5d675',
          400: '#f1c440',
          500: '#dba520',
          600: '#bb8a18',
          700: '#976c15',
          800: '#7c5717',
          900: '#674818',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        dark: {
          100: '#CFD1D9',
          200: '#A5A8B3',
          300: '#7B7F8C',
          400: '#525766',
          500: '#2d2438',
          600: '#241c2f',
          700: '#1c1526',
          800: '#150f1f',
          900: '#0d0a14',
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-10px) translateX(5px)' },
        },
        glow: {
          '0%, 100%': { 
            'box-shadow': '0 0 20px 10px rgba(255,255,255,0.1)',
            'border-color': 'rgba(255,255,255,0.2)'
          },
          '50%': { 
            'box-shadow': '0 0 30px 15px rgba(255,255,255,0.2)',
            'border-color': 'rgba(255,255,255,0.4)'
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
} 