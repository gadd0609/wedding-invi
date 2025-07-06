/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'green-custom': '#807E65', 
          'brown-custom': '#b88b6a',
          'blue-custom': '#799297',
          'orange-custom': '#D69235',
          'beige': '#E8DCCE',
          'brown-custom-strong': '#C78764',
        },
      },
    },
    variants: {
      extend: {},
    },
    // resolve: {
    //     alias: {
    //       'components': path.resolve(__dirname, './src/components'),
    //       'assets': path.resolve(__dirname, './src/assets')
    //     },
    //   },
    plugins: [],
  }