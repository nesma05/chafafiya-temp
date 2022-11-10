module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Droid Arabic Naskh'],
        arabic_menu : ['Noto Kufi Arabic'],
        lato: ['Lato'],
      },
      colors:{
        main:'#0B53A2',
        main_dark:'#0a2f66',
        secondary:'#8BC9FF',
        extra:'#2DA38B'
      }
    },
  },
  plugins: [],
}
