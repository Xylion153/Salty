/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#e2572c',
          'red-dark': '#c1431c',
          blue: '#2f8f8a',
          'blue-dark': '#206e6a',
          teal: '#2f8f8a',
          'teal-dark': '#206e6a',
          navy: '#0d2a40',
          'navy-dark': '#081b29',
          cream: '#fbf6ee',
          sand: '#f0e4d2',
          gold: '#d9a441',
          warm: '#f8f1e7',
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
