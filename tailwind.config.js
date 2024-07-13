/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        baloo2: ["'Baloo 2'", 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },

      colors: {
        yellow: {
          dark: '#C47F17',
          normal: '#DBAC2C',
          light: '#F1E9C9',
        },
        purple: {
          dark: '#4B2995',
          normal: '#8047F8',
          light: '#EBE5F9',
        },
        base: {
          card: '#f3f2f2',
          button: '#E6E5E5',
          title: '#272221',
          subtitle: '#403937',
          text: '#574F4f',
          label: '#8D8686',
          hover: '#D7D5D5  ',
        },
      },
    },
  },
  plugins: [],
};
