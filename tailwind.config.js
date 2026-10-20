/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        segoe: ['"Segoe UI Variable"', '"Segoe UI"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Roboto', '"Helvetica Neue"', 'sans-serif'],
      },
      // Fluent 2 design tokens, defined as CSS variables in index.css
      colors: {
        primary: {
          DEFAULT: '#003366',
          light: '#006699',
        },
        fl: {
          canvas: 'var(--fl-canvas)',
          rail: 'var(--fl-rail)',
          card: 'var(--fl-card)',
          hover: 'var(--fl-hover)',
          stroke: 'var(--fl-stroke)',
          fg: 'var(--fl-fg)',
          fg2: 'var(--fl-fg2)',
          fg3: 'var(--fl-fg3)',
          brand: 'var(--fl-brand)',
          'brand-hover': 'var(--fl-brand-hover)',
          'brand-subtle': 'var(--fl-brand-subtle)',
          success: 'var(--fl-success)',
        },
      },
      boxShadow: {
        fl2: '0 0 2px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.14)',
        fl4: '0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.14)',
        fl8: '0 0 2px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.14)',
        fl16: '0 0 2px rgba(0,0,0,.12), 0 8px 16px rgba(0,0,0,.14)',
        fl28: '0 0 8px rgba(0,0,0,.12), 0 14px 28px rgba(0,0,0,.14)',
      },
    },
  },
  plugins: [],
}
