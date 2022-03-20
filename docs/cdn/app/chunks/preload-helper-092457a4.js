const a = 'modulepreload',
  o = {},
  u = 'https://reuters-graphics.github.io/graphics-svelte-components/cdn/app/',
  f = function (s, n) {
    return !n || n.length === 0
      ? s()
      : Promise.all(
          n.map((e) => {
            if (((e = `${u}${e}`), e in o)) return;
            o[e] = !0;
            const t = e.endsWith('.css'),
              i = t ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${e}"]${i}`)) return;
            const r = document.createElement('link');
            if (
              ((r.rel = t ? 'stylesheet' : a),
              t || ((r.as = 'script'), (r.crossOrigin = '')),
              (r.href = e),
              document.head.appendChild(r),
              t)
            )
              return new Promise((c, l) => {
                r.addEventListener('load', c),
                  r.addEventListener('error', () =>
                    l(new Error(`Unable to preload CSS for ${e}`))
                  );
              });
          })
        ).then(() => s());
  };
export { f as _ };
