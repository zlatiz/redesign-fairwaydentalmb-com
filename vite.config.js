import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
    main: resolve(__dirname, 'index.html'),
    'index-page': resolve(__dirname, 'index-page/index.html'),
    'meet-dr-latham': resolve(__dirname, 'meet-dr-latham/index.html')
      },
    },
  },
});