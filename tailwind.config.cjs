module.exports = {
  content: ['./src/**/*.{html,css,svelte}'],
  theme: {
    screens: {
      'xs': '460px',
      '0-xs': {'min': '0px', 'max': '459px'},

      'sm': '640px',
      'xs-sm': {'min': '460px', 'max': '639px'},

      'md': '775px',
      'sm-md': {'min': '640px', 'max': '774px'},

      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
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
        'topsection' : '#a39d8b',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
