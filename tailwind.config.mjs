/** @type {import('tailwindcss').Config} */
import relumeTailwind from '@relume_io/relume-tailwind';

// config file is removed on tailwind v4
// but since we need the preset from relume-tailwind, we need to keep it
// we just import this file to the css file

// if any configuration is needed, use the styles.css file
const config = {
  content: [
    './src/**/*.{tsx}',
    './node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}'
  ],
  presets: [relumeTailwind],
  plugins: [require('@tailwindcss/typography')]
};

export default config;
