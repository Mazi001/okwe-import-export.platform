/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        chalk: {
          50: '#F1F3F1',
          100: '#E6EAE7',
          200: '#D8DDD9',
          300: '#C3CAC5',
          400: '#A6AFA9',
          500: '#8A948E',
        },
        cyanotype: {
          100: '#DEEAEF',
          200: '#BDD5DE',
          300: '#86B6C7',
          400: '#4E90A9',
          500: '#2A6E8C',
          600: '#1A5570',
          700: '#123F52',
          800: '#0B2B3A',
          900: '#05161F',
        },
        sulphur: {
          100: '#F7F0C4',
          300: '#EEDD6A',
          400: '#E3CB2A',
          500: '#B9A419',
          600: '#8F7F14',
        },
        verdigris: {
          100: '#DCEAE7',
          300: '#7FB8AE',
          500: '#2C8C7E',
          600: '#1E6E63',
          700: '#124A44',
        },
        stamp: {
          100: '#F3D9DB',
          400: '#C9505A',
          600: '#A8202C',
          700: '#7E1620',
        },
      },
      fontFamily: {
        display: ['Archivo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        read: ['Literata', 'Georgia', 'serif'],
        ui: ['Archivo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Martian Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        display: '-0.03em',
        label: '0.14em',
        call: '0.08em',
      },
    },
  },
  plugins: [],
}
