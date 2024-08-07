/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'calc-full-minus-navbar': 'calc(100vh - 3rem)', // Adjust according to your navbar height
      },
      height: {
        'calc-full-minus-navbar': 'calc(100vh - 3rem)',
      },
      width: {
        'calc-full-minus-sidebar': 'calc(100vw - 3rem)',
      },
      fontFamily : {
        poppins : ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

