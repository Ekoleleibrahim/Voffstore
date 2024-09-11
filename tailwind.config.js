/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      transitionProperty:{
        'BackgroundColor': 'background-color',
        'Width': 'width',
        'Transform': 'transform',
      },
      backgroundImage:{
        'fond2': "url('../images/fond.webp')",
        'fond3': "url('../images/fond3.avif')",
        'fond4': "url('../images/fond4.avif')",
        'fond5': "url('../images/chemise-orange.webp')",
      },
      spacing:{
        '8xl': '100px'
      },
      colors:{
        clouds: '#ecf0f1'
      },
      animation:{
        load: 'load 12s ease-in-out infinite',
      },
      keyframes:{
        load:{
          '0%,25%': {backgroundImage: "url('../images/fond.webp')"},
          '30%,55%':{backgroundImage: "url('../images/fond3.avif')"},
          '60%,100%':{backgroundImage: "url('../images/fond4.avif')"}
        },
      }
    },
  },
  plugins: [
    'tailwindcss',
    'autoprefixer',
  ],
}

