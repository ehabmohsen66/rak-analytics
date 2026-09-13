import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const publicAssets = [
  'favicon.png',
  'favicon.svg',
  'assets/Rak-analytics-logo.png',
  'assets/Rak-analytics-logo-white.png',
  'assets/team-analysts.png',
  'assets/rak-intelligence-hero.webp',
];

function copyPublicAssets() {
  return {
    name: 'copy-rak-public-assets',
    closeBundle() {
      for (const asset of publicAssets) {
        const destination = resolve('dist', asset);
        mkdirSync(resolve(destination, '..'), { recursive: true });
        copyFileSync(resolve('public', asset), destination);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyPublicAssets()],
  publicDir: false,
  server: {
    port: 3000,
    open: false,
    host: true
  }
});
