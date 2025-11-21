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
        primary: {
          black: '#0A0A0A',
          white: '#FAFAFA',
        },
        accent: {
          lime: '#A8FF00',
          'lime-dark': '#7FCC00',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'Inter', 'sans-serif'],
        body: ['Inter', 'Metropolis', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.15em',
      },
    },
  },
  plugins: [],
}

