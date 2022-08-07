import autoprefixer from 'autoprefixer';
import sveltePreprocess from 'svelte-preprocess';

export const scss = {
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

export default sveltePreprocess({
  preserve: ['ld+json'],
  typescript: true,
  scss,
  postcss: {
    plugins: [autoprefixer],
  },
});