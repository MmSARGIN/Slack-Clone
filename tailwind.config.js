/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'first' : '#1f57e7'
      },
      width: {
        '128': '42%',
        '129': '27%',
        '130' : '28%',
        '131': '19%',
        '132': '81%',
        '133':'96%',
        '134': '99%',
        '135' :'10%',
      
      },
      height: {
        'of':'32.760rem'
      }
    },
    fontSize: {
      'ms':'.75rem',
      'xs': '.60rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [],
 
}
