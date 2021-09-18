import adapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import componentDocsPlugin from './bin/svelte-kit/plugins/component-docs/index.cjs';
import dsv from '@rollup/plugin-dsv';
import fs from 'fs-extra';
import { mdsvex } from 'mdsvex';
import svelteKitPagesPlugin from './bin/svelte-kit/plugins/svelte-kit-pages/index.cjs';
import sveltePreprocess from 'svelte-preprocess';
import url from 'url';

const getRootRelativePath = (homepageURL) => {
  if (!homepageURL) return '';
  const page = new url.URL(homepageURL);
  return homepageURL
    .replace(`${page.protocol}//${page.host}`, '')
    .replace(/\/$/, '');
};

const pkg = fs.readJSONSync(new URL('./package.json', import.meta.url));

process.env.VITE_DATELINE = new Date().toISOString();

export default {
  preprocess: [
    mdsvex(),
    sveltePreprocess({
      preserve: ['ld+json'],
      scss: {
        includePaths: ['src/', 'node_modules/bootstrap/scss/'],
        importer: [
          (url) => {
            // Redirect tilde-prefixed imports to node_modules
            if (/^~/.test(url))
              return { file: `node_modules/${url.replace('~', '')}` };
            return null;
          },
        ],
      },
      postcss: {
        plugins: [autoprefixer],
      },
    })
  ],
  extensions: ['.svelte', '.svx'],
  kit: {
    appDir: 'app',
    paths: {
      assets:
        process.env.NODE_ENV === 'production'
          ? pkg.homepage + '/cdn' : '',
      base:
        process.env.NODE_ENV === 'production'
          ? getRootRelativePath(pkg.homepage) : '',
    },
    adapter: adapter({
      pages: 'docs',
      assets: 'docs/cdn',
      fallback: null,
    }),
    files: {
      assets: 'src/statics',
      lib: 'src/lib',
      routes: 'pages',
      template: 'src/template.html',
    },
    target: '#svelte-app',
    package: {
      dir: 'dist',
      exports: {
				includes: ['**'],
				excludes: ['_*', '**/_*']
			},
			files: {
				includes: ['**'],
				excludes: ['_*', '**/_*', '**/*.svx']
			}
    },
    vite: {
      resolve: {
        alias: {
          $utils: '/src/utils',
          $pkg: '/package.json',
          $imgs: '/src/statics/images/manifest.json',
          $locales: '/locales',
          'reuters-components': '/src/FutureGraphicsComponentsLib',
        },
      },
      optimizeDeps: {
        exclude: ['svelte-fa'],
        include: ['marked', 'lodash-es'],
      },
      plugins: [dsv(), svelteKitPagesPlugin(), componentDocsPlugin()],
    },
  },
};
