/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#333333',
          'text-color': '#ffffff',
        },
        light: {
          background: '#ffffff',
          'text-color': '#333333',
        },
      },
    },
  },
  plugins: [],
}
