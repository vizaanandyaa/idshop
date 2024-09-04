/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure Tailwind scans your source files
  ],
  theme: {
    extend: {
      fontFamily: { 
        "work": ["Work Sans", 'sans-serif'] 
    }
    },
  },
  plugins: [],
}
