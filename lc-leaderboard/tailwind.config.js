/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js,jsx}",
  "./components/*.{js,ts,jsx,tsx}",
],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 480px) { ... }

      'smd': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'mdl': '1000px',
      // => @media (min-width: 1000px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1180px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
