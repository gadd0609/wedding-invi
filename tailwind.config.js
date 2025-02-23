/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
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