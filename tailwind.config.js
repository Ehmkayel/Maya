/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },

    fontFamily: {
      'montserrat': 'Montserrat, sans-serif',
      'poppins': 'Poppins, sans-serif',

    },
    extend: {
      colors: {
        orange: '#FFA500',
        veryDarkOrange: '#FF7A01',
        lightGreen: '#60B86D',
        deepGreen: '#489E5C',
        veryLightGreen: '#CADDD3',
        lightBlue: '#2CAAC2',
        deepBlue: '#0000FF',
        veryDarkBlue: '#051C3B',
        grey: '#31405F',
        white: '#FFFFFF',
        black: '#000000',
        
      },
    },
  },
  plugins: [],
}

