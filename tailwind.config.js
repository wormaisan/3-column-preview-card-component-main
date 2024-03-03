/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'brightOrange': 'hsl(31, 77%, 52%)',
      'darkCyan': 'hsl(184, 100%, 22%)',
      'veryDarkCyan': 'hsl(179, 100%, 13%)',
      'transparentWhite': 'hsla(0, 0%, 100%, 0.75)',
      'veryLightGray': 'hsl(0, 0%, 95%)',
      'black' : '#000',
      'svg-sedans' : '#FFD473',
      'svg-suvs' : '#26B5C0',
      'svg-luxury' : '#19B89D'
    },
    fontFamily: {
      LexendDeca: ["LexendDeca", "sans-serif"],
      BigShouldersDisplay: ["BigShouldersDisplay", "sans-serif"],
    },
    container: {
      center: true,
    },
    maxWidth: {
      'container-san': '1480px',
    },
    extend: {
      height: {
        'card-height-san': '31.25rem',
      },
      minHeight: {
        'card-min-height-san' : '27.688rem',
      },
      width: {
        'card-width-san': '57.5rem',
      },
      fontSize: {
        'title-size-san': '2.5rem',
        'size-san': '0.9375rem'
      },
    },
  },
  plugins: [],
}