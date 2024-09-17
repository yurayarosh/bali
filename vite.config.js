import { resolve } from 'path';
import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import HtmlExtFallbackPlugin from './plugins/html-ext-fallback';

export default defineConfig({
  plugins: [
    nunjucks(),
    HtmlExtFallbackPlugin(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // main_ru: resolve(__dirname, 'ru/index.html'),
      },
    },
  },
});
