/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "circle": "url('https://propage.com/imports/images/ellipses-m-n.svg')",
        "logo": "url('https://propage.com/imports/images/tilt-plus2.svg')",
        "services": "url('https://propage.com/imports/images/bg-affiche-bureau.jpg')",
        "about": "url('https://propage.com/imports/images/entete-nous.jpg')",
        "since": "url('https://propage.com/imports/images/1988-en.gif')",
        "curves": "url('https://propage.com/imports/images/cercle-b2b.png')",
        "complience-2": "url('https://propage.com/imports/images/bg-complice2.png')",
        "complience-1": "url('https://propage.com/imports/images/bg-complice1.png')",
        "confidence-logo": "url('https://propage.com/imports/images/confidence.png')",
        "methode": "url('https://propage.com/imports/images/bg-methode.jpg')",
      },
      fontSize: {
        "10xl": "10rem",
        "15xl": "15rem",
      }
    },
  },
  plugins: [],
}