import { _ as s } from '../../chunks/preload-helper-438f94a3.js';
import {
  S as r,
  i as c,
  s as e,
  j as t,
  k as o,
  l as a,
  m as n,
  n as _,
  o as i,
  f as d,
  u,
  w as l,
  x as m,
  v as p,
  d as E,
  A as f,
  z as h,
  e as $,
  t as b,
  c as v,
  a as k,
  g as x,
  b as P,
  H as T,
  h as j,
  r as R,
} from '../../chunks/vendor-54feeb2f.js';
import {
  c as D,
  S as A,
  N as I,
  M as L,
} from '../../chunks/@component-docs-f1e600f2.js';
import '../../chunks/paths-6758d194.js';
function O(s) {
  let r,
    c,
    e,
    t,
    o = s[0].title + '';
  return {
    c() {
      (r = $('div')), (c = b('> ')), (e = $('span')), (t = b(o)), this.h();
    },
    l(s) {
      r = v(s, 'DIV', { class: !0 });
      var a = k(r);
      (c = x(a, '> ')), (e = v(a, 'SPAN', { class: !0 }));
      var n = k(e);
      (t = x(n, o)), n.forEach(E), a.forEach(E), this.h();
    },
    h() {
      P(e, 'class', 'svelte-e8adws'),
        P(r, 'class', 'breadcrumb font-display svelte-e8adws');
    },
    m(s, o) {
      d(s, r, o), T(r, c), T(r, e), T(e, t);
    },
    p(s, r) {
      1 & r && o !== (o = s[0].title + '') && j(t, o);
    },
    d(s) {
      s && E(r);
    },
  };
}
function V(s) {
  let r, c, e, f, h, $, b, v, k;
  (r = new A({
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
    (e = new I({ props: { $$slots: { default: [O] }, $$scope: { ctx: s } } })),
    (h = new L({ props: { components: D } }));
  var x = s[1];
  return (
    x && (b = new x({})),
    {
      c() {
        t(r.$$.fragment),
          (c = o()),
          t(e.$$.fragment),
          (f = o()),
          t(h.$$.fragment),
          ($ = o()),
          b && t(b.$$.fragment),
          (v = a());
      },
      l(s) {
        n(r.$$.fragment, s),
          (c = _(s)),
          n(e.$$.fragment, s),
          (f = _(s)),
          n(h.$$.fragment, s),
          ($ = _(s)),
          b && n(b.$$.fragment, s),
          (v = a());
      },
      m(s, t) {
        i(r, s, t),
          d(s, c, t),
          i(e, s, t),
          d(s, f, t),
          i(h, s, t),
          d(s, $, t),
          b && i(b, s, t),
          d(s, v, t),
          (k = !0);
      },
      p(s, [c]) {
        const o = {};
        1 & c && (o.seoTitle = `Reuters Graphics components - ${s[0].title}`),
          1 & c && (o.seoDescription = s[0].description),
          1 & c &&
            (o.shareTitle = `Reuters Graphics components - ${s[0].title}`),
          1 & c && (o.shareDescription = s[0].description),
          r.$set(o);
        const a = {};
        if (
          (5 & c && (a.$$scope = { dirty: c, ctx: s }),
          e.$set(a),
          x !== (x = s[1]))
        ) {
          if (b) {
            R();
            const s = b;
            u(s.$$.fragment, 1, 0, () => {
              p(s, 1);
            }),
              l();
          }
          x
            ? ((b = new x({})),
              t(b.$$.fragment),
              m(b.$$.fragment, 1),
              i(b, v.parentNode, v))
            : (b = null);
        }
      },
      i(s) {
        k ||
          (m(r.$$.fragment, s),
          m(e.$$.fragment, s),
          m(h.$$.fragment, s),
          b && m(b.$$.fragment, s),
          (k = !0));
      },
      o(s) {
        u(r.$$.fragment, s),
          u(e.$$.fragment, s),
          u(h.$$.fragment, s),
          b && u(b.$$.fragment, s),
          (k = !1);
      },
      d(s) {
        p(r, s),
          s && E(c),
          p(e, s),
          s && E(f),
          p(h, s),
          s && E($),
          s && E(v),
          b && p(b, s);
      },
    }
  );
}
async function g({ page: s }) {
  return { props: { metadata: D.find((r) => r.slug === s.params.slug) } };
}
function w(r, c, e) {
  let t,
    { metadata: o } = c;
  return (
    f(async () => {
      e(
        1,
        (t = (
          await (function (r) {
            switch (r) {
              case '../../src/lib/Ai2svelte/docs.svx':
                return s(
                  () => import('../../chunks/docs-ccf93991.js'),
                  [
                    'chunks/docs-ccf93991.js',
                    'assets/docs-d5f521bc.css',
                    'chunks/preload-helper-438f94a3.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/BodyText/docs.svx':
                return s(
                  () => import('../../chunks/docs-c7163491.js'),
                  [
                    'chunks/docs-c7163491.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                  ]
                );
              case '../../src/lib/EmbedPreviewerLink/docs.svx':
                return s(
                  () => import('../../chunks/docs-c634cdc9.js'),
                  [
                    'chunks/docs-c634cdc9.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              case '../../src/lib/EndNotes/docs.svx':
                return s(
                  () => import('../../chunks/docs-fd50cf81.js'),
                  [
                    'chunks/docs-fd50cf81.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                  ]
                );
              case '../../src/lib/Footer/docs.svx':
                return s(
                  () => import('../../chunks/docs-62300ad7.js'),
                  [
                    'chunks/docs-62300ad7.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                  ]
                );
              case '../../src/lib/Framer/docs.svx':
                return s(
                  () => import('../../chunks/docs-22c52ef0.js'),
                  [
                    'chunks/docs-22c52ef0.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              case '../../src/lib/Headline/docs.svx':
                return s(
                  () => import('../../chunks/docs-224b2903.js'),
                  [
                    'chunks/docs-224b2903.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/Hero/docs.svx':
                return s(
                  () => import('../../chunks/docs-31588329.js'),
                  [
                    'chunks/docs-31588329.js',
                    'assets/docs-b2c6cc18.css',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/Image/docs.svx':
                return s(
                  () => import('../../chunks/docs-8632c184.js'),
                  [
                    'chunks/docs-8632c184.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/@component-docs-f1e600f2.js',
                    'assets/@component-docs-a9ace93b.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/LottieScroller/docs.svx':
                return s(
                  () => import('../../chunks/docs-f941cb65.js'),
                  [
                    'chunks/docs-f941cb65.js',
                    'assets/docs-4a88ca0e.css',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/@component-docs-f1e600f2.js',
                    'assets/@component-docs-a9ace93b.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/Nav/docs.svx':
                return s(
                  () => import('../../chunks/docs-799658a6.js'),
                  [
                    'chunks/docs-799658a6.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                  ]
                );
              case '../../src/lib/PymChild/docs.svx':
                return s(
                  () => import('../../chunks/docs-53190118.js'),
                  [
                    'chunks/docs-53190118.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              case '../../src/lib/Referrals/docs.svx':
                return s(
                  () => import('../../chunks/docs-6a4f396c.js'),
                  [
                    'chunks/docs-6a4f396c.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/@component-docs-f1e600f2.js',
                    'assets/@component-docs-a9ace93b.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/SEO/docs.svx':
                return s(
                  () => import('../../chunks/docs-ac16f6bd.js'),
                  [
                    'chunks/docs-ac16f6bd.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              case '../../src/lib/Scroller/docs.svx':
                return s(
                  () => import('../../chunks/docs-220f8811.js'),
                  [
                    'chunks/docs-220f8811.js',
                    'assets/docs-58c35654.css',
                    'chunks/preload-helper-438f94a3.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/@component-docs-f1e600f2.js',
                    'assets/@component-docs-a9ace93b.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/Sharer/docs.svx':
                return s(
                  () => import('../../chunks/docs-72e11feb.js'),
                  [
                    'chunks/docs-72e11feb.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              default:
                return new Promise(function (s, c) {
                  ('function' == typeof queueMicrotask
                    ? queueMicrotask
                    : setTimeout)(c.bind(null, new Error('Unknown variable dynamic import: ' + r)));
                });
            }
          })(`../../src/lib/${o.path}/docs.svx`)
        ).default)
      );
    }),
    h(async () => {
      e(
        1,
        (t = (
          await (function (r) {
            switch (r) {
              case '../../src/lib/Ai2svelte/docs.svx':
                return s(
                  () => import('../../chunks/docs-ccf93991.js'),
                  [
                    'chunks/docs-ccf93991.js',
                    'assets/docs-d5f521bc.css',
                    'chunks/preload-helper-438f94a3.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/BodyText/docs.svx':
                return s(
                  () => import('../../chunks/docs-c7163491.js'),
                  [
                    'chunks/docs-c7163491.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                  ]
                );
              case '../../src/lib/EmbedPreviewerLink/docs.svx':
                return s(
                  () => import('../../chunks/docs-c634cdc9.js'),
                  [
                    'chunks/docs-c634cdc9.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              case '../../src/lib/EndNotes/docs.svx':
                return s(
                  () => import('../../chunks/docs-fd50cf81.js'),
                  [
                    'chunks/docs-fd50cf81.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                  ]
                );
              case '../../src/lib/Footer/docs.svx':
                return s(
                  () => import('../../chunks/docs-62300ad7.js'),
                  [
                    'chunks/docs-62300ad7.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                  ]
                );
              case '../../src/lib/Framer/docs.svx':
                return s(
                  () => import('../../chunks/docs-22c52ef0.js'),
                  [
                    'chunks/docs-22c52ef0.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              case '../../src/lib/Headline/docs.svx':
                return s(
                  () => import('../../chunks/docs-224b2903.js'),
                  [
                    'chunks/docs-224b2903.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/Hero/docs.svx':
                return s(
                  () => import('../../chunks/docs-31588329.js'),
                  [
                    'chunks/docs-31588329.js',
                    'assets/docs-b2c6cc18.css',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/Image/docs.svx':
                return s(
                  () => import('../../chunks/docs-8632c184.js'),
                  [
                    'chunks/docs-8632c184.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/@component-docs-f1e600f2.js',
                    'assets/@component-docs-a9ace93b.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/LottieScroller/docs.svx':
                return s(
                  () => import('../../chunks/docs-f941cb65.js'),
                  [
                    'chunks/docs-f941cb65.js',
                    'assets/docs-4a88ca0e.css',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/@component-docs-f1e600f2.js',
                    'assets/@component-docs-a9ace93b.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/Nav/docs.svx':
                return s(
                  () => import('../../chunks/docs-799658a6.js'),
                  [
                    'chunks/docs-799658a6.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                  ]
                );
              case '../../src/lib/PymChild/docs.svx':
                return s(
                  () => import('../../chunks/docs-53190118.js'),
                  [
                    'chunks/docs-53190118.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              case '../../src/lib/Referrals/docs.svx':
                return s(
                  () => import('../../chunks/docs-6a4f396c.js'),
                  [
                    'chunks/docs-6a4f396c.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/@component-docs-f1e600f2.js',
                    'assets/@component-docs-a9ace93b.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/SEO/docs.svx':
                return s(
                  () => import('../../chunks/docs-ac16f6bd.js'),
                  [
                    'chunks/docs-ac16f6bd.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              case '../../src/lib/Scroller/docs.svx':
                return s(
                  () => import('../../chunks/docs-220f8811.js'),
                  [
                    'chunks/docs-220f8811.js',
                    'assets/docs-58c35654.css',
                    'chunks/preload-helper-438f94a3.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-c7a36b9c.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/@component-docs-f1e600f2.js',
                    'assets/@component-docs-a9ace93b.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/Sharer/docs.svx':
                return s(
                  () => import('../../chunks/docs-72e11feb.js'),
                  [
                    'chunks/docs-72e11feb.js',
                    'chunks/vendor-54feeb2f.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              default:
                return new Promise(function (s, c) {
                  ('function' == typeof queueMicrotask
                    ? queueMicrotask
                    : setTimeout)(c.bind(null, new Error('Unknown variable dynamic import: ' + r)));
                });
            }
          })(`../../src/lib/${o.path}/docs.svx`)
        ).default)
      );
    }),
    (r.$$set = (s) => {
      'metadata' in s && e(0, (o = s.metadata));
    }),
    [o, t]
  );
}
export default class extends r {
  constructor(s) {
    super(), c(this, s, w, V, e, { metadata: 0 });
  }
}
export { g as load };
