import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Specify the paths to all of the template files
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#FFB74D', // Light orange for accents
          DEFAULT: '#FF9800', // Main orange color
          dark: '#F57C00', // Darker orange for hover states
        },
        white: '#FFFFFF', // White for backgrounds and text
      },
      boxShadow: {
        'luxury': '0 4px 30px rgba(0, 0, 0, 0.1)', // Luxury shadow effect
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'], // Elegant serif font
      },
      // Add 3D effects here if needed
    },
  },
  plugins: [],
};

export default config;