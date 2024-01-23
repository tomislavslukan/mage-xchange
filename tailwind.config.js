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
