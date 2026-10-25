import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sungdomo.github.io',
  output: 'static',
  build: {
    format: 'directory',
  },
});
