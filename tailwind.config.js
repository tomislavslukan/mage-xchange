module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors:{
        'orange': '#FFBC00',
        'turquoise': '#09A8D6',
        'dark-gray': '#333',
        'light-gray': '#4B545C',
      },
      fontFamily:{
        amaranth: ['Amaranth'],
        inter: ['Inter'],
        raleway: ['Raleway'],
      },
      fontWeight:{
        'regular': '400',
        'medium': '500',
        'bold': '700',
      },
      fontSize: {
        'h1': '2.986rem',
        'h2': '2.488rem',
        'h3': '2.074rem',
        'p': '1rem',
        'small': '0.833rem',
      },
      spacing: {
        '6': '0.375rem',
        '12': '0.75rem',
        '18': '1.125rem',
        '24': '1.5rem',
        '30': '1.875rem',
        '48': '1.875rem',
      },
      backgroundImage: {
        'hero': "url('../static/images/header-bg.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
