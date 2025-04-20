/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // This specifies where to look for Tailwind CSS classes
    ],
    darkMode: 'class', // Enables dark mode using a class (instead of media-query)
    theme: {
      extend: {
        fontFamily: {
          display: ['Open Sans', 'sans-serif'],
          body: ['Open Sans', 'sans-serif'],
        },
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#FAFBFB',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        borderWidth: {
          1: '1px', // Custom border width
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)', // Custom border color
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px', // Custom height value
        },
        minHeight: {
          590: '590px', // Custom min-height value
        },
        backgroundImage: {
          'hero-pattern': "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')", // Custom background image
        },
      },
    },
    plugins: [],
  };
  