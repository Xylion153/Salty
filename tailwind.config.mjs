/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#c1443e',
          blue: '#2a5f8f',
          'blue-dark': '#1e4468',
          navy: '#1a2d3d',
          cream: '#faf6f0',
          sand: '#f0e8db',
          gold: '#c9953c',
          warm: '#f7f2ea',
          brown: '#5c3d2e',
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
