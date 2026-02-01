/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c8a47e',
        'primary-hover': '#bb9976',
        'mono-1': '#303030',
        'mono-2': '#71717A',
        'mono-3': '#D4D4D8',
        'mono-4': '#FAFAF9',
        'contrast-light': '#FFFFFF',
        'contrast-dark': '#000000',
        base: '#FFFFFF',
        featured: '#44403C',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'cormorant-garamond': ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
