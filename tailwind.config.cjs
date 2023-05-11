/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: '#AD1916',
      secondary: '#EBBB91',
      tertiary: '#785B48',
    },
    extend: {},
  },
  plugins: [],
};
