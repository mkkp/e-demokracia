import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rollupPluginEsmer from './rollup/rollup-plugin-esmer.js';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  define: {
    "process.env.NODE_ENV": mode === 'reckless' ? `"production"` : `"${mode}"`, // treat reckless as production
  },
  base: '',
  resolve: {
    alias: [
      { find: '~', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: mode !== 'reckless' ? {
          '@mui/material': ['@mui/material'],
          '@mui/x-data-grid': ['@mui/x-data-grid'],
          '@mui/x-date-pickers': ['@mui/x-date-pickers'],
      } : {},
    },
    },
  },
  plugins: [
    rollupPluginEsmer({
      enabled: mode === 'reckless',
    }),
    react(),
  ],
}));
