const glob = require('glob');
const path = require('path');
const fs = require('fs');
const fm = require('front-matter');

const getPkgRoot = () => {
  const PKG_PATH = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(PKG_PATH)) throw new Error('Unable to find package.json in your current working directory. Are you running from the root of your project?');
  return process.cwd();
};

const getDocsMetadata = () => {
  const ROOT = getPkgRoot();
  const DOCS_DIR = path.resolve(ROOT, 'src/lib');
  const docs = glob.sync('*/docs.svx', { cwd: DOCS_DIR });
  const docsData = docs.map((doc) => {
    const metadata = fm(fs.readFileSync(path.join(DOCS_DIR, doc), 'utf8')).attributes;
    metadata.path = doc.replace('/docs.svx', '');
    return metadata;
  });
  return `export default ${JSON.stringify(docsData)};`;
};

module.exports = function svelteKitComponentDocsPlugin() {
  const virtualModuleId = '@component-docs';

  return {
    name: 'svelte-kit-component-docs-plugin',
    resolveId(id) {
      if (id === virtualModuleId) {
        return virtualModuleId;
      }
    },
    load(id) {
      if (id === virtualModuleId) {
        return getDocsMetadata();
      }
    },
  };
};
