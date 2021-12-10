// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./src/**/*.tsx"
  ],
  purge: [
    './pages/**/*.tsx',
    '.src/**/*.tsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
