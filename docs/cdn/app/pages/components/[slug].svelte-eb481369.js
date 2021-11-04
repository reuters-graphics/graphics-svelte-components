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
  e as b,
  t as $,
  c as v,
  a as k,
  g as x,
  b as P,
  H as T,
  h as j,
  r as R,
} from '../../chunks/vendor-927c0fc0.js';
import {
  c as D,
  S as A,
  N as I,
  M as L,
} from '../../chunks/@component-docs-51cb096e.js';
import '../../chunks/paths-6758d194.js';
function O(s) {
  let r,
    c,
    e,
    t,
    o = s[0].title + '';
  return {
    c() {
      (r = b('div')), (c = $('> ')), (e = b('span')), (t = $(o)), this.h();
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
  let r, c, e, f, h, b, $, v, k;
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
    x && ($ = new x({})),
    {
      c() {
        t(r.$$.fragment),
          (c = o()),
          t(e.$$.fragment),
          (f = o()),
          t(h.$$.fragment),
          (b = o()),
          $ && t($.$$.fragment),
          (v = a());
      },
      l(s) {
        n(r.$$.fragment, s),
          (c = _(s)),
          n(e.$$.fragment, s),
          (f = _(s)),
          n(h.$$.fragment, s),
          (b = _(s)),
          $ && n($.$$.fragment, s),
          (v = a());
      },
      m(s, t) {
        i(r, s, t),
          d(s, c, t),
          i(e, s, t),
          d(s, f, t),
          i(h, s, t),
          d(s, b, t),
          $ && i($, s, t),
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
          if ($) {
            R();
            const s = $;
            u(s.$$.fragment, 1, 0, () => {
              p(s, 1);
            }),
              l();
          }
          x
            ? (($ = new x({})),
              t($.$$.fragment),
              m($.$$.fragment, 1),
              i($, v.parentNode, v))
            : ($ = null);
        }
      },
      i(s) {
        k ||
          (m(r.$$.fragment, s),
          m(e.$$.fragment, s),
          m(h.$$.fragment, s),
          $ && m($.$$.fragment, s),
          (k = !0));
      },
      o(s) {
        u(r.$$.fragment, s),
          u(e.$$.fragment, s),
          u(h.$$.fragment, s),
          $ && u($.$$.fragment, s),
          (k = !1);
      },
      d(s) {
        p(r, s),
          s && E(c),
          p(e, s),
          s && E(f),
          p(h, s),
          s && E(b),
          s && E(v),
          $ && p($, s);
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
                  () => import('../../chunks/docs-b3321fca.js'),
                  [
                    'chunks/docs-b3321fca.js',
                    'assets/docs-d5f521bc.css',
                    'chunks/preload-helper-438f94a3.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/BodyText/docs.svx':
                return s(
                  () => import('../../chunks/docs-1c3cbb16.js'),
                  [
                    'chunks/docs-1c3cbb16.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                  ]
                );
              case '../../src/lib/EmbedPreviewerLink/docs.svx':
                return s(
                  () => import('../../chunks/docs-3f4923b9.js'),
                  [
                    'chunks/docs-3f4923b9.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              case '../../src/lib/EndNotes/docs.svx':
                return s(
                  () => import('../../chunks/docs-1e64186a.js'),
                  [
                    'chunks/docs-1e64186a.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                  ]
                );
              case '../../src/lib/Footer/docs.svx':
                return s(
                  () => import('../../chunks/docs-5d7153cf.js'),
                  [
                    'chunks/docs-5d7153cf.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                  ]
                );
              case '../../src/lib/Framer/docs.svx':
                return s(
                  () => import('../../chunks/docs-48565cd5.js'),
                  [
                    'chunks/docs-48565cd5.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              case '../../src/lib/Headline/docs.svx':
                return s(
                  () => import('../../chunks/docs-adbfc8ac.js'),
                  [
                    'chunks/docs-adbfc8ac.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/Hero/docs.svx':
                return s(
                  () => import('../../chunks/docs-384ff0d4.js'),
                  [
                    'chunks/docs-384ff0d4.js',
                    'assets/docs-b2c6cc18.css',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/Image/docs.svx':
                return s(
                  () => import('../../chunks/docs-407ea254.js'),
                  [
                    'chunks/docs-407ea254.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/@component-docs-51cb096e.js',
                    'assets/@component-docs-81b417d4.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/LottieScroller/docs.svx':
                return s(
                  () => import('../../chunks/docs-b069af7d.js'),
                  [
                    'chunks/docs-b069af7d.js',
                    'assets/docs-b39641d0.css',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/@component-docs-51cb096e.js',
                    'assets/@component-docs-81b417d4.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/Nav/docs.svx':
                return s(
                  () => import('../../chunks/docs-156283ab.js'),
                  [
                    'chunks/docs-156283ab.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                  ]
                );
              case '../../src/lib/PymChild/docs.svx':
                return s(
                  () => import('../../chunks/docs-b51b7d37.js'),
                  [
                    'chunks/docs-b51b7d37.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              case '../../src/lib/Referrals/docs.svx':
                return s(
                  () => import('../../chunks/docs-7803c970.js'),
                  [
                    'chunks/docs-7803c970.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/@component-docs-51cb096e.js',
                    'assets/@component-docs-81b417d4.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/SEO/docs.svx':
                return s(
                  () => import('../../chunks/docs-ebe144d8.js'),
                  [
                    'chunks/docs-ebe144d8.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              case '../../src/lib/Scroller/docs.svx':
                return s(
                  () => import('../../chunks/docs-c894844b.js'),
                  [
                    'chunks/docs-c894844b.js',
                    'assets/docs-58c35654.css',
                    'chunks/preload-helper-438f94a3.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/@component-docs-51cb096e.js',
                    'assets/@component-docs-81b417d4.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/Sharer/docs.svx':
                return s(
                  () => import('../../chunks/docs-539c06ff.js'),
                  [
                    'chunks/docs-539c06ff.js',
                    'chunks/vendor-927c0fc0.js',
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
                  () => import('../../chunks/docs-b3321fca.js'),
                  [
                    'chunks/docs-b3321fca.js',
                    'assets/docs-d5f521bc.css',
                    'chunks/preload-helper-438f94a3.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/BodyText/docs.svx':
                return s(
                  () => import('../../chunks/docs-1c3cbb16.js'),
                  [
                    'chunks/docs-1c3cbb16.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                  ]
                );
              case '../../src/lib/EmbedPreviewerLink/docs.svx':
                return s(
                  () => import('../../chunks/docs-3f4923b9.js'),
                  [
                    'chunks/docs-3f4923b9.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              case '../../src/lib/EndNotes/docs.svx':
                return s(
                  () => import('../../chunks/docs-1e64186a.js'),
                  [
                    'chunks/docs-1e64186a.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                  ]
                );
              case '../../src/lib/Footer/docs.svx':
                return s(
                  () => import('../../chunks/docs-5d7153cf.js'),
                  [
                    'chunks/docs-5d7153cf.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                  ]
                );
              case '../../src/lib/Framer/docs.svx':
                return s(
                  () => import('../../chunks/docs-48565cd5.js'),
                  [
                    'chunks/docs-48565cd5.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              case '../../src/lib/Headline/docs.svx':
                return s(
                  () => import('../../chunks/docs-adbfc8ac.js'),
                  [
                    'chunks/docs-adbfc8ac.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/Hero/docs.svx':
                return s(
                  () => import('../../chunks/docs-384ff0d4.js'),
                  [
                    'chunks/docs-384ff0d4.js',
                    'assets/docs-b2c6cc18.css',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/Image/docs.svx':
                return s(
                  () => import('../../chunks/docs-407ea254.js'),
                  [
                    'chunks/docs-407ea254.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/@component-docs-51cb096e.js',
                    'assets/@component-docs-81b417d4.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/LottieScroller/docs.svx':
                return s(
                  () => import('../../chunks/docs-b069af7d.js'),
                  [
                    'chunks/docs-b069af7d.js',
                    'assets/docs-b39641d0.css',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/@component-docs-51cb096e.js',
                    'assets/@component-docs-81b417d4.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/Nav/docs.svx':
                return s(
                  () => import('../../chunks/docs-156283ab.js'),
                  [
                    'chunks/docs-156283ab.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                  ]
                );
              case '../../src/lib/PymChild/docs.svx':
                return s(
                  () => import('../../chunks/docs-b51b7d37.js'),
                  [
                    'chunks/docs-b51b7d37.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              case '../../src/lib/Referrals/docs.svx':
                return s(
                  () => import('../../chunks/docs-7803c970.js'),
                  [
                    'chunks/docs-7803c970.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/@component-docs-51cb096e.js',
                    'assets/@component-docs-81b417d4.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/SEO/docs.svx':
                return s(
                  () => import('../../chunks/docs-ebe144d8.js'),
                  [
                    'chunks/docs-ebe144d8.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                  ]
                );
              case '../../src/lib/Scroller/docs.svx':
                return s(
                  () => import('../../chunks/docs-c894844b.js'),
                  [
                    'chunks/docs-c894844b.js',
                    'assets/docs-58c35654.css',
                    'chunks/preload-helper-438f94a3.js',
                    'chunks/vendor-927c0fc0.js',
                    'assets/vendor-ba67f73c.css',
                    'chunks/index-38e47fc4.js',
                    'assets/index-2df4dd7a.css',
                    'chunks/@component-docs-51cb096e.js',
                    'assets/@component-docs-81b417d4.css',
                    'chunks/paths-6758d194.js',
                  ]
                );
              case '../../src/lib/Sharer/docs.svx':
                return s(
                  () => import('../../chunks/docs-539c06ff.js'),
                  [
                    'chunks/docs-539c06ff.js',
                    'chunks/vendor-927c0fc0.js',
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
