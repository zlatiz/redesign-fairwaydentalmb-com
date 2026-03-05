import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
    main: resolve(__dirname, 'index.html'),
    'index-page': resolve(__dirname, 'index-page/index.html'),
    'meet-dr-latham': resolve(__dirname, 'meet-dr-latham/index.html'),
    'meet-the-team': resolve(__dirname, 'meet-the-team/index.html'),
    'blog': resolve(__dirname, 'blog/index.html'),
    'testimonials': resolve(__dirname, 'testimonials/index.html'),
    'smile-gallery': resolve(__dirname, 'smile-gallery/index.html'),
    'first-visit': resolve(__dirname, 'first-visit/index.html')
      },
    },
  },
});