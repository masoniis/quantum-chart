module.exports = {
  content: ['./src/**/*.{html,css,svelte}'],
  theme: {
    screens: {
      'xs': '460px',
      'sm': '640px',
      'md': '775px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

      'to-xs': [{'max': '460px'}],
      'to-sm': [{'max': '640px'}],
      'to-md': [{'max': '775px'}],
      'to-lg': [{'max': '1024px'}],
    },
    extend: {
      colors: {
        'mainbg': '#ffffff',
        'maintext': '#374151',
        'mainlink': '#6d28d9',
        'mainlinkhover': '#4c1d95',
        'lightbg': '#f5f5f4',
        'lighthover': '#030304',

        // ↓ Home Page ↓
        'topsection' : '#d2e683',

        // ↓ Navbar ↓
        'dropdown1' : '#f8e0ff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
