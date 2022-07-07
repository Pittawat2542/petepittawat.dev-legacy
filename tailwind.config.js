module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Noto Sans Thai', 'ui-sans-serif', 'system-ui'],
      'serif': ['Noto Serif Thai', 'ui-serif']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
