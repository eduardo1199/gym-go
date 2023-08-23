/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#000125',
        'secondary-blue': '#080D53',
        'primary-purple': '#767EFA',
        'second-purple': '#A1A7F9',
        'tertiary-purple': '#CDD0F9',
        'primary-gray': '#3D4268',
        'secondary-gray': '#93ABC7',
        'tertiary-gray': '#9BB1D6',
        'primary-white': '#E5E5E5',
      },
      keyframes: {
        visible: {
          '0%': {
            opacity: 0,
          },
          '25%': {
            opacity: 0.2,
          },
          '75%': {
            opacity: 0.7,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        visible: 'visible 2s linear',
      },
    },
  },
  plugins: [],
}
