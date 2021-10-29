import { _ as s } from '../../chunks/preload-helper-9f12a5fd.js';
import {
  S as e,
  i as t,
  s as r,
  j as a,
  k as n,
  l as o,
  m as c,
  n as i,
  o as m,
  f as p,
  u as f,
  w as u,
  x as $,
  v as d,
  d as l,
  A as h,
  r as _,
} from '../../chunks/vendor-edfb1eb4.js';
import {
  c as g,
  S as b,
  N as j,
} from '../../chunks/@component-docs-e8001e7f.js';
import '../../chunks/paths-2c73d5fe.js';
function k(s) {
  let e, t, r, h, g, k, v;
  (e = new b({
    props: {
      seoTitle: `Reuters Graphics components - ${s[0].title}`,
      seoDescription: s[0].description,
      shareTitle: `Reuters Graphics components - ${s[0].title}`,
      shareDescription: s[0].description,
      shareImgPath: 'images/reuters-graphics.jpg',
      lang: 'en',
      hostname: 'reuters-graphics.github.io',
    },
  })),
    (r = new j({}));
  var x = s[1];
  return (
    x && (g = new x({})),
    {
      c() {
        a(e.$$.fragment),
          (t = n()),
          a(r.$$.fragment),
          (h = n()),
          g && a(g.$$.fragment),
          (k = o());
      },
      l(s) {
        c(e.$$.fragment, s),
          (t = i(s)),
          c(r.$$.fragment, s),
          (h = i(s)),
          g && c(g.$$.fragment, s),
          (k = o());
      },
      m(s, a) {
        m(e, s, a),
          p(s, t, a),
          m(r, s, a),
          p(s, h, a),
          g && m(g, s, a),
          p(s, k, a),
          (v = !0);
      },
      p(s, [t]) {
        const r = {};
        if (
          (1 & t &&
            (r.seoTitle = `Reuters Graphics components - ${s[0].title}`),
          1 & t && (r.seoDescription = s[0].description),
          1 & t &&
            (r.shareTitle = `Reuters Graphics components - ${s[0].title}`),
          1 & t && (r.shareDescription = s[0].description),
          e.$set(r),
          x !== (x = s[1]))
        ) {
          if (g) {
            _();
            const s = g;
            f(s.$$.fragment, 1, 0, () => {
              d(s, 1);
            }),
              u();
          }
          x
            ? ((g = new x({})),
              a(g.$$.fragment),
              $(g.$$.fragment, 1),
              m(g, k.parentNode, k))
            : (g = null);
        }
      },
      i(s) {
        v ||
          ($(e.$$.fragment, s),
          $(r.$$.fragment, s),
          g && $(g.$$.fragment, s),
          (v = !0));
      },
      o(s) {
        f(e.$$.fragment, s),
          f(r.$$.fragment, s),
          g && f(g.$$.fragment, s),
          (v = !1);
      },
      d(s) {
        d(e, s), s && l(t), d(r, s), s && l(h), s && l(k), g && d(g, s);
      },
    }
  );
}
async function v({ page: s }) {
  return { props: { metadata: g.find((e) => e.slug === s.params.slug) } };
}
function x(e, t, r) {
  let a,
    { metadata: n } = t;
  return (
    h(async () => {
      r(
        1,
        (a = (
          await (function (e) {
            switch (e) {
              case '../../src/lib/BodyText/docs.svx':
                return s(
                  () => import('../../chunks/docs-ba29e380.js'),
                  [
                    '/graphics-svelte-components/cdn/_app/chunks/docs-ba29e380.js',
                    '/graphics-svelte-components/cdn/_app/chunks/vendor-edfb1eb4.js',
                  ]
                );
              case '../../src/lib/Footer/docs.svx':
                return s(
                  () => import('../../chunks/docs-6befabff.js'),
                  [
                    '/graphics-svelte-components/cdn/_app/chunks/docs-6befabff.js',
                    '/graphics-svelte-components/cdn/_app/chunks/vendor-edfb1eb4.js',
                  ]
                );
              case '../../src/lib/Nav/docs.svx':
                return s(
                  () => import('../../chunks/docs-36f43188.js'),
                  [
                    '/graphics-svelte-components/cdn/_app/chunks/docs-36f43188.js',
                    '/graphics-svelte-components/cdn/_app/chunks/vendor-edfb1eb4.js',
                  ]
                );
              case '../../src/lib/Referrals/docs.svx':
                return s(
                  () => import('../../chunks/docs-11289f38.js'),
                  [
                    '/graphics-svelte-components/cdn/_app/chunks/docs-11289f38.js',
                    '/graphics-svelte-components/cdn/_app/chunks/vendor-edfb1eb4.js',
                  ]
                );
              case '../../src/lib/Sharer/docs.svx':
                return s(
                  () => import('../../chunks/docs-20750df4.js'),
                  [
                    '/graphics-svelte-components/cdn/_app/chunks/docs-20750df4.js',
                    '/graphics-svelte-components/cdn/_app/chunks/vendor-edfb1eb4.js',
                  ]
                );
              default:
                return Promise.reject(
                  new Error('Unknown variable dynamic import: ' + e)
                );
            }
          })(`../../src/lib/${n.path}/docs.svx`)
        ).default)
      );
    }),
    (e.$$set = (s) => {
      'metadata' in s && r(0, (n = s.metadata));
    }),
    [n, a]
  );
}
export default class extends e {
  constructor(s) {
    super(), t(this, s, x, k, r, { metadata: 0 });
  }
}
export { v as load };
