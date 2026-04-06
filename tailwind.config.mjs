/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#f53136',
          blue: '#044d9a',
          'blue-dark': '#033166',
          navy: '#022247',
          cream: '#faf6f0',
          sand: '#f0e8db',
          gold: '#c9953c',
          warm: '#f7f2ea',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
