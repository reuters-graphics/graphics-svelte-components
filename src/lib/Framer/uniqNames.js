export default (embeds) => {
  const nakedEmbeds = embeds
    .map((e) => e.replace(/index\.html$/, ''))
    .map((e) => e.replace(/^http[s]*:\/\/[\w.]+\.com/, ''));

  // If just one, get the last path part
  if (nakedEmbeds.length === 1) {
    return [
      nakedEmbeds[0]
        .split('/')
        .filter((d) => d)
        .slice(-1)[0],
    ];
  }

  // If many, test each path part for unique-ness
  const test = nakedEmbeds[0];
  let replacement = 0;
  for (const i in test.split('/')) {
    const pathPart = test.split('/')[i];
    const notUniq = nakedEmbeds.every((e) => e.split('/')[i] === pathPart);
    if (notUniq) {
      replacement += 1;
    } else {
      break;
    }
  }

  if (replacement === test.split('/').length) return nakedEmbeds;
  return nakedEmbeds.map((e) => e.split('/').slice(replacement).join('/'));
};
