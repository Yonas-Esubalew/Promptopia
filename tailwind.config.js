/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ['var(--font-inter)', 'sans-serif'],
          satoshi: ['var(--font-satoshi)', 'sans-serif'], // if you use these
          geist: ['var(--font-geist-sans)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  