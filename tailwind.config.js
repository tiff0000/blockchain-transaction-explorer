/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts, tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: 'Nunito'
      },
      colors: {
        spacing: {
          1: '0.25rem',
          2: '0.5rem',
          3: '0.75rem',
          4: '1rem',
          5: '1.25rem',
          6: '1.5rem',
          8: '2rem',
          10: '2.5rem',
          12: '3rem',
          16: '4rem',
          20: '5rem',
          24: '6rem',
          32: '8rem',
          40: '10rem',
          48: '12rem',
          56: '14rem',
          64: '16rem'
        },
        cloud: {
          100: 'rgb(var(--cloud-100) / <alpha-value>)',
          200: 'rgb(var(--cloud-200) / <alpha-value>)',
          300: 'rgb(var(--cloud-300) / <alpha-value>)',
          400: 'rgb(var(--cloud-400) / <alpha-value>)',
          500: 'rgb(var(--cloud-500) / <alpha-value>)',
          600: 'rgb(var(--cloud-600) / <alpha-value>)',
          700: 'rgb(var(--cloud-700) / <alpha-value>)',
          800: 'rgb(var(--cloud-800) / <alpha-value>)',
          900: 'rgb(var(--cloud-900) / <alpha-value>)'
        },
        night: {
          100: 'rgb(var(--night-100) / <alpha-value>)',
          200: 'rgb(var(--night-200) / <alpha-value>)',
          300: 'rgb(var(--night-300) / <alpha-value>)',
          400: 'rgb(var(--night-400) / <alpha-value>)',
          500: 'rgb(var(--night-500) / <alpha-value>)',
          600: 'rgb(var(--night-600) / <alpha-value>)',
          700: 'rgb(var(--night-700) / <alpha-value>)',
          800: 'rgb(var(--night-800) / <alpha-value>)',
          900: 'rgb(var(--night-900) / <alpha-value>)'
        },
        yellow: 'rgb(var(--yellow) / <alpha-value>)',
        black: 'rgb(var(--black) / <alpha-value>)',
        white: 'rgb(var(--white) / <alpha-value>)',
        green: 'rgb(var(--text-primary) / <alpha-value>)',
        pink: 'rgb(var(--pink) / <alpha-value>)'
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: 'rgb(var(--bg-primary) / <alpha-value>)',
        secondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
        green: 'rgb(var(--green) / <alpha-value>)',
        pink: 'rgb(var(--pink) / <alpha-value>)'
      }),
      textColor: (theme) => ({
        ...theme('colors'),
        primary: 'rgb(var(--text-primary) / <alpha-value>)',
        secondary: 'rgb(var(--text-secondary) / <alpha-value>)'
      })
    }
  },
  plugins: [require('tailwindcss'), require('autoprefixer'), require('tailwindcss/plugin')]
}
