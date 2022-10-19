module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Droid Arabic Naskh'],
        lato: ['Lato'],
      },
      colors:{
        main:'#0B53A2',
        secondary:'#8BC9FF',
        extra:'#2DA38B'
      }
    },
  },
  plugins: [],
}
