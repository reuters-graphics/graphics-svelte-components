import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess, { scss } from './bin/preprocess';

const scss = {
  includePaths: ['src/', 'node_modules/bootstrap/scss/'],
  importer: [
    (url) => {
      // Redirect tilde-prefixed imports to node_modules
      if (/^~/.test(url)) { return { file: `node_modules/${url.replace('~', '')}` }; }
      return null;
    },
  ],
  quietDeps: true,
};

/** @type {import('vite').UserConfig} */
const config = {
  base: 'https://reuters-graphics.github.io/graphics-svelte-components/',
  css: {
    preprocessorOptions: { scss },
  },
  resolve: {
    alias: {
      '@reuters-graphics/graphics-svelte-components': './src',
      $utils: './src/utils',
    },
  },
  plugins: [
    svelte({
      configFile: false,
      preprocess: sveltePreprocess,
    }),
  ],
};

export default config;
