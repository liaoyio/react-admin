import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss';

import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  presets: [
    presetUno({ dark: 'media' }),
    presetAttributify({ strict: true }),
    presetIcons({
      autoInstall: true,
      extraProperties: { display: 'inline-block', 'vertical-align': 'middle' },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup(), transformerAttributifyJsx()],
  theme: {
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1600px',
    },
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
    },
    colors: {
      black: '#000000',
      green: '#00A76F',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      yellow: '#ffc82c',
      gray: '#637381',
      'gray-100': '#F9FAFB',
      'gray-200': '#F4F6F8',
      'gray-300': '#DFE3E8',
      'gray-400': '#C4CDD5',
      'gray-500': '#F9FAFB',
      'gray-600': '#637381',
      'gray-700': '#454F5B',
      'gray-800': '#212B36',
      'gray-900': '#161C24',

      hover: '#63738114',
      'primary-lighter': '#C8FAD6',
      'primary-light': '#5BE49B',
      primary: '#00A76F',
      'primary-dark': '#007867',
      'primary-darker': '#004B50',
    },
    extend: {
      transitionProperty: {
        height: 'height',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
});
