/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#00413D',
        secondary: '#E5745D'
      },
       fontFamily: {
      'jost': ["Jost"],
      'voll': ["Vollkorn", "serif"]
    },
    maxWidth: {
      'container': '1170px'
    }
    },
  },
  plugins: [],
}