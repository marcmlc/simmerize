import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.tsx'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          main: {
            50: { value: '#DAEEE8' },
            100: { value: '#ADD9CD' },
            200: { value: '#86C7B5' },
            300: { value: '#65B8A1' },
            400: { value: '#428E79' },
            500: { value: '#377664' },
            600: { value: '#2D6253' },
            700: { value: '#265145' },
            800: { value: '#1F4339' },
            900: { value: '#1A3830' },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
