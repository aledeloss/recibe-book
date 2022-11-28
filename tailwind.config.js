/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'pr-blue': '#23395b',
      turquoise: '#B9E3C6',
      green: '#2d8b6d',
      ruby: '#D81E5B',
      canary: '#FFFD98',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      orange: '#ff7849',
      yellow: '#ffc82c',
      'gray-dark': '#273444'
    },
    extend: {}
  },
  plugins: []
};
