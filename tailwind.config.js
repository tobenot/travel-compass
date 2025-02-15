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
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9e0fe',
          300: '#7cc6fd',
          400: '#36a7fa',
          500: '#0c89eb',
          600: '#006dc9',
          700: '#0057a3',
          800: '#004a86',
          900: '#003f70',
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
          500: '#282B33',
          600: '#21232A',
          700: '#1A1C22',
          800: '#131519',
          900: '#0D0E11',
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