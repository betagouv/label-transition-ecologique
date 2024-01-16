const {preset} = require('@tet/ui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../packages/ui/src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        bf925: '#E3E3FD',
        bf975: '#f5f5fe',
      },
    },
  },
};
