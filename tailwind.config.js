module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--tertiary-color)',
        neutral: 'var(--neutral-color)',
        primaryLight: 'var(--primary-light-color)',
      },
    },
  },
  plugins: [],
};