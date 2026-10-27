import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative paths work for GitHub Pages deployment out of the box
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
