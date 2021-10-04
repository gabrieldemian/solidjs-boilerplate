module.exports = {
  corePlugins: {
    container: false,
  },
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    display: ['Corben', 'system-ui', 'sans-serif'],
    body: ['Poppins', 'system-ui', 'sans-serif'],
    extend: {
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        accent: 'var(--red-violet)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        accent: 'var(--red-violet)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          xl: '0rem',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
