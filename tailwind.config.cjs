module.exports = {
  content: ['./src/**/*.{html,css,svelte}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a1929',
        'dark-text': '#a8a29e',
        'dark-hover': '#f4ebe5',

        'mainbg': '#ffffff',
        'maintext': '#374151',
        'mainlink': '#6d28d9',
        'mainlinkhover': '#4c1d95',
        'lightbg': '#f5f5f4',
        'lighthover': '#030304'
      },
      screens: {
          'xs': '450px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
