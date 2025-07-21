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
      'jost': ["Jost"]
    
    }
    },
  },
  plugins: [],
}