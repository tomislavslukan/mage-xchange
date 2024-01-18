module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      width: {
        '360': '360px',
        '512': '512px',
        '845': '845px',
        '720': '720px',
      },
      screens: {
        'mobile': '360px',
        'tablet': '768px',
        'desktop': '1024px',
      },
      colors:{
        'orange': '#FFBC00',
        'turquoise': '#09A8D6',
        'dark-gray': '#333',
        'light-gray': '#4B545C',
        'light-gray-100': '#EEE',
        'light-gray-50': '#F4F5F5',
        'light-gray-25': '#BABABA',
      },
      fontFamily:{
        amaranth: ['Amaranth'],
        inter: ['Inter'],
        raleway: ['Raleway'],
      },
      fontWeight:{
        'regular': '400',
        'medium': '500',
        'medium-2': '600',
        'bold': '700',
      },
      fontSize: {
        '48': '2.986rem',
        '40': '2.488rem',
        '33': '2.074rem',
        '24': '1.5rem',
        '28': '1.75rem',
        '17': '1.063rem',
        '16': '1rem',
        '14': '0.833rem',
      },
      spacing: {
        '6': '0.375rem',
        '12': '0.75rem',
        '18': '1.125rem',
        '24': '1.5rem',
        '30': '1.875rem',
        '36': '2.25rem',
        '42': '2.50rem',
        '48': '1.875rem',
        '60': '3.75rem',
      },
      backgroundImage: {
        'hero': "url('../static/images/header-bg.svg')",
        'companies': "url('../static/images/bg-companies.svg')",
        'lines': "url('../static/images/lines.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
