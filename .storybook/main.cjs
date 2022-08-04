const { mergeConfig } = require('vite');
const sveltePreprocess = require('svelte-preprocess');
const autoprefixer = require('autoprefixer');

const scss = {
  includePaths: ['src/', 'node_modules/bootstrap/scss/'],
  importer: [
    (url) => {
      // Redirect tilde-prefixed imports to node_modules
      if (/^~/.test(url))
        return { file: `node_modules/${url.replace('~', '')}` };
      return null;
    },
  ],
  quietDeps: true,
};


module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.svelte"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": false,
    "previewMdx2": true,
  },
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      base: configType === 'PRODUCTION' ? 'https://reuters-graphics.github.io/graphics-svelte-components/' : '/',
      css: {
        preprocessorOptions: { scss },
      },
      resolve: {
        alias: {
          '@reuters-graphics/svelte-charts': './src',
          '$utils': './src/utils',
        },
      },
    });
  },
  svelteOptions: {
    preprocess: sveltePreprocess({
      preserve: ['ld+json'],
      typescript: true,
      scss,
      postcss: {
        plugins: [autoprefixer],
      },
    }),
  },
}