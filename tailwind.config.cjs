module.exports = {
  content: ['./src/**/*.{html,css,svelte}'],
  theme: {
    screens: {
      '2xs': '320px',
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
        'topsection' : '#e0cf9b',

        // ↓ Navbar ↓
        'dropdown1' : '#eae9f2',
        'mobilemenu': '#f9e9d2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
