import { COMPONENTS, LIB } from './../locations.js';

import fs from 'fs-extra';
import path from 'path';
import { preprocess } from 'svelte/compiler';
import sveltePreprocess from '../../preprocess/index.js';

const stripLangTags = (content) => 
  content
    .replace(/(<!--[^]*?-->)|(<script[^>]*?)\s(?:type|lang)=(["']).*?\3/g, '$1$2')
    .replace(/(<!--[^]*?-->)|(<style[^>]*?)\s(?:type|lang)=(["']).*?\3/g, '$1$2');

export default async (file) => {
  const filename = path.join(LIB, file);
  const content = fs.readFileSync(filename, 'utf8');
  const code = (await preprocess(content, sveltePreprocess, { filename })).code
  const writePath = path.join(COMPONENTS, file);
  fs.ensureDirSync(path.dirname(writePath));
  fs.writeFileSync(writePath, stripLangTags(code));
}