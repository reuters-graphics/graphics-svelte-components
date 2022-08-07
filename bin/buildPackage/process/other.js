import { COMPONENTS, LIB } from './../locations.js';

import fs from 'fs-extra';
import path from 'path';

export default async (file) => {
  const filename = path.join(LIB, file);
  const content = fs.readFileSync(filename, 'utf8');
  const writePath = path.join(COMPONENTS, file);
  fs.ensureDirSync(path.dirname(writePath));
  fs.writeFileSync(writePath, content);
}