/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure Tailwind scans your source files
  ],
  theme: {
    extend: {
      fontFamily: { 
        "work": ["Work Sans", 'sans-serif'] 
    },
    colors: {
      'tosca': '#0A91AB',
    },
    },
  },
  plugins: [],
}
