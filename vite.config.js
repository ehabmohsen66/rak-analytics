import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const publicAssets = [
  'favicon.png',
  'favicon.svg',
  'assets/Rak-analytics-logo.png',
  'assets/Rak-analytics-logo-white.png',
  'assets/rak-logo.png',
  'assets/team-analysts.png',
  'assets/rak-intelligence-hero.webp',
  'assets/clients-strip.png',
  'assets/product-datapulse.jpg',
  'assets/product-fieldspark.png',
  'assets/product-intellix.png',
  'assets/product-procurevision.png',
  'assets/product-saleslogic.png',
  'assets/product-woodpecker.png',
  'assets/whatsapp-icon.png',
  'assets/about-banner.png',
  'assets/contact-banner.png',
  'assets/partners-banner.png',
  'assets/services-banner.png',
  'assets/woodpecker-banner.png',
  'assets/dashboard-mockup.png',
  'assets/solutions-mockup.png',
  'assets/hero-slide-1.jpg',
  'assets/hero-slide-2.jpg',
  'assets/hero-slide-3.jpg',
  'assets/hero-slide-4.jpg',
  'assets/assessment-band.jpg',
  'assets/gif/Banner-1-v1.gif',
  'assets/gif/Banner-1-poster.jpg',
  'assets/gif/Banner-2-v1.gif',
  'assets/gif/Banner-2-poster.jpg',
  'assets/gif/Futuristic-Port-Logistics-and-Global-Trade-v1.gif',
  'assets/gif/Futuristic-Port-Logistics-poster.jpg',
  'assets/gif/Banner-4-v1.gif',
  'assets/gif/Banner-4-poster.jpg',
  'assets/gif/Banner-5-v1.gif',
  'assets/gif/Banner-5-poster.jpg',
  'assets/gif/Banner-6-v1.gif',
  'assets/gif/Banner-6-poster.jpg',
  'assets/logos/datapulse.svg',
  'assets/logos/intellix.svg',
  'assets/logos/woodpecker.svg',
  'assets/logos/fieldspark.svg',
  'assets/logos/procurevision.svg',
  'assets/logos/saleslogic.svg',
  'assets/industry-pharma.jpg',
  'assets/industry-industrial.jpg',
  'assets/industry-retail.jpg',
  'assets/industry-shipping.jpg',
  'assets/industry-ship.jpg',
  'assets/industry-insurance.jpg',
  'assets/industry-banking.jpg',
  'assets/industry-distribution.jpg',
  'assets/industry-beauty.jpg',
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

export default defineConfig(({ command }) => ({
  plugins: [react(), ...(command === 'build' ? [copyPublicAssets()] : [])],
  // In development, serve the public directory so all images, logos, and favicons load
  publicDir: command === 'build' ? false : 'public',
  server: {
    port: 3000,
    open: false,
    host: true
  }
}));
