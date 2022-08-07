import { DIST, LIB, TYPES } from './locations.js';

import { createRequire } from 'module';
import { emitDts } from 'svelte2tsx';
import fs from 'fs-extra';
import glob from 'tiny-glob';
import picomatch from 'picomatch';
import processOther from './process/other.js';
import processSvelte from './process/svelte.js';
import processTypescript from './process/typescript.js';
import rimraf from 'rimraf';

const require = createRequire(import.meta.url);

const excludePatterns = [
  '**/stories/**/*',
  '**/*.exclude.*',
  '**/*.stories.svelte',
];

const run = async () => {
  if (fs.existsSync(DIST)) rimraf.sync(DIST);

  // Extract types
  await emitDts({
		libRoot: LIB,
		svelteShimsPath: require.resolve('svelte2tsx/svelte-shims.d.ts'),
		declarationDir: TYPES,
	});

  const files = await glob('**/*.{js,json,ts,svelte}', { cwd: LIB, filesOnly: true });
  for (const file of files) {
    if(picomatch.isMatch(file, excludePatterns)) continue;
    if (file.endsWith('.svelte')) {
      await processSvelte(file);
    } else if(file.endsWith('.ts') && !file.endsWith('.d.ts')) {
      await processTypescript(file);
    } else {
      await processOther(file);
    }
  }
}

run();