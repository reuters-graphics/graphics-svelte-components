var g = (s, i, a) =>
  new Promise((o, c) => {
    var n = (_) => {
        try {
          r(a.next(_));
        } catch (d) {
          c(d);
        }
      },
      m = (_) => {
        try {
          r(a.throw(_));
        } catch (d) {
          c(d);
        }
      },
      r = (_) => (_.done ? o(_.value) : Promise.resolve(_.value).then(n, m));
    r((a = a.apply(s, i)).next());
  });
import { _ as t } from '../../chunks/preload-helper-ade19073.js';
import {
  S as q,
  i as B,
  s as F,
  w as $,
  k as A,
  l as S,
  x as R,
  m as I,
  y as b,
  g as T,
  o as h,
  p as G,
  q as D,
  B as P,
  d as f,
  v as H,
  u as U,
  e as O,
  t as k,
  c as V,
  a as x,
  h as N,
  b as E,
  J as L,
  j,
  n as z,
} from '../../chunks/index-044d379f.js';
import {
  c as M,
  S as J,
  N as K,
  M as Q,
  F as W,
} from '../../chunks/main-fdca696c.js';
import '../../chunks/paths-396f020f.js';
var C = {};
(function (s) {
  Object.defineProperty(s, '__esModule', { value: !0 });
  var i = 'fas',
    a = 'code',
    o = 640,
    c = 512,
    n = [],
    m = 'f121',
    r =
      'M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z';
  (s.definition = { prefix: i, iconName: a, icon: [o, c, n, m, r] }),
    (s.faCode = s.definition),
    (s.prefix = i),
    (s.iconName = a),
    (s.width = o),
    (s.height = c),
    (s.ligatures = n),
    (s.unicode = m),
    (s.svgPathData = r);
})(C);
function X(s) {
  switch (s) {
    case '../../src/lib/Ai2svelte/docs.svx':
      return t(
        () => import('../../chunks/docs-171dd763.js'),
        [
          'chunks/docs-171dd763.js',
          'assets/docs-f27f17c1.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/BeforeAfter/docs.svx':
      return t(
        () => import('../../chunks/docs-8613cd50.js'),
        [
          'chunks/docs-8613cd50.js',
          'assets/docs-ea1c5840.css',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/BodyText/docs.svx':
      return t(
        () => import('../../chunks/docs-6eb3588f.js'),
        [
          'chunks/docs-6eb3588f.js',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/DatawrapperChart/docs.svx':
      return t(
        () => import('../../chunks/docs-4bfae2b8.js'),
        [
          'chunks/docs-4bfae2b8.js',
          'chunks/index-044d379f.js',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/EmbedPreviewerLink/docs.svx':
      return t(
        () => import('../../chunks/docs-e6b73825.js'),
        ['chunks/docs-e6b73825.js', 'chunks/index-044d379f.js']
      );
    case '../../src/lib/EndNotes/docs.svx':
      return t(
        () => import('../../chunks/docs-dcd41b9b.js'),
        [
          'chunks/docs-dcd41b9b.js',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Footer/docs.svx':
      return t(
        () => import('../../chunks/docs-bc40f87d.js'),
        [
          'chunks/docs-bc40f87d.js',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/Framer/docs.svx':
      return t(
        () => import('../../chunks/docs-995cff14.js'),
        [
          'chunks/docs-995cff14.js',
          'assets/docs-8e82fbe2.css',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
          'chunks/index-315a5013.js',
        ]
      );
    case '../../src/lib/Headline/docs.svx':
      return t(
        () => import('../../chunks/docs-3299ec8e.js'),
        [
          'chunks/docs-3299ec8e.js',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Hero/docs.svx':
      return t(
        () => import('../../chunks/docs-8d28b0c9.js'),
        [
          'chunks/docs-8d28b0c9.js',
          'assets/docs-b2c6cc18.css',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Image/docs.svx':
      return t(
        () => import('../../chunks/docs-3165917f.js'),
        [
          'chunks/docs-3165917f.js',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/LottieScroller/docs.svx':
      return t(
        () => import('../../chunks/docs-6cf33999.js'),
        [
          'chunks/docs-6cf33999.js',
          'assets/docs-4a88ca0e.css',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Nav/docs.svx':
      return t(
        () => import('../../chunks/docs-210c3874.js'),
        [
          'chunks/docs-210c3874.js',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/PymChild/docs.svx':
      return t(
        () => import('../../chunks/docs-d67be19e.js'),
        ['chunks/docs-d67be19e.js', 'chunks/index-044d379f.js']
      );
    case '../../src/lib/Referrals/docs.svx':
      return t(
        () => import('../../chunks/docs-3a445866.js'),
        [
          'chunks/docs-3a445866.js',
          'assets/docs-00bc6279.css',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/SEO/docs.svx':
      return t(
        () => import('../../chunks/docs-2e5fb2f6.js'),
        ['chunks/docs-2e5fb2f6.js', 'chunks/index-044d379f.js']
      );
    case '../../src/lib/Scroller/docs.svx':
      return t(
        () => import('../../chunks/docs-4dee0205.js'),
        [
          'chunks/docs-4dee0205.js',
          'assets/docs-58c35654.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Sharer/docs.svx':
      return t(
        () => import('../../chunks/docs-f5638650.js'),
        ['chunks/docs-f5638650.js', 'chunks/index-044d379f.js']
      );
    default:
      return new Promise(function (i, a) {
        (typeof queueMicrotask == 'function'
          ? queueMicrotask
          : setTimeout)(a.bind(null, new Error('Unknown variable dynamic import: ' + s)));
      });
  }
}
function Y(s) {
  switch (s) {
    case '../../src/lib/Ai2svelte/docs.svx':
      return t(
        () => import('../../chunks/docs-171dd763.js'),
        [
          'chunks/docs-171dd763.js',
          'assets/docs-f27f17c1.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/BeforeAfter/docs.svx':
      return t(
        () => import('../../chunks/docs-8613cd50.js'),
        [
          'chunks/docs-8613cd50.js',
          'assets/docs-ea1c5840.css',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/BodyText/docs.svx':
      return t(
        () => import('../../chunks/docs-6eb3588f.js'),
        [
          'chunks/docs-6eb3588f.js',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/DatawrapperChart/docs.svx':
      return t(
        () => import('../../chunks/docs-4bfae2b8.js'),
        [
          'chunks/docs-4bfae2b8.js',
          'chunks/index-044d379f.js',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/EmbedPreviewerLink/docs.svx':
      return t(
        () => import('../../chunks/docs-e6b73825.js'),
        ['chunks/docs-e6b73825.js', 'chunks/index-044d379f.js']
      );
    case '../../src/lib/EndNotes/docs.svx':
      return t(
        () => import('../../chunks/docs-dcd41b9b.js'),
        [
          'chunks/docs-dcd41b9b.js',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Footer/docs.svx':
      return t(
        () => import('../../chunks/docs-bc40f87d.js'),
        [
          'chunks/docs-bc40f87d.js',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/Framer/docs.svx':
      return t(
        () => import('../../chunks/docs-995cff14.js'),
        [
          'chunks/docs-995cff14.js',
          'assets/docs-8e82fbe2.css',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
          'chunks/index-315a5013.js',
        ]
      );
    case '../../src/lib/Headline/docs.svx':
      return t(
        () => import('../../chunks/docs-3299ec8e.js'),
        [
          'chunks/docs-3299ec8e.js',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Hero/docs.svx':
      return t(
        () => import('../../chunks/docs-8d28b0c9.js'),
        [
          'chunks/docs-8d28b0c9.js',
          'assets/docs-b2c6cc18.css',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Image/docs.svx':
      return t(
        () => import('../../chunks/docs-3165917f.js'),
        [
          'chunks/docs-3165917f.js',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/LottieScroller/docs.svx':
      return t(
        () => import('../../chunks/docs-6cf33999.js'),
        [
          'chunks/docs-6cf33999.js',
          'assets/docs-4a88ca0e.css',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Nav/docs.svx':
      return t(
        () => import('../../chunks/docs-210c3874.js'),
        [
          'chunks/docs-210c3874.js',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/PymChild/docs.svx':
      return t(
        () => import('../../chunks/docs-d67be19e.js'),
        ['chunks/docs-d67be19e.js', 'chunks/index-044d379f.js']
      );
    case '../../src/lib/Referrals/docs.svx':
      return t(
        () => import('../../chunks/docs-3a445866.js'),
        [
          'chunks/docs-3a445866.js',
          'assets/docs-00bc6279.css',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/SEO/docs.svx':
      return t(
        () => import('../../chunks/docs-2e5fb2f6.js'),
        ['chunks/docs-2e5fb2f6.js', 'chunks/index-044d379f.js']
      );
    case '../../src/lib/Scroller/docs.svx':
      return t(
        () => import('../../chunks/docs-4dee0205.js'),
        [
          'chunks/docs-4dee0205.js',
          'assets/docs-58c35654.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-044d379f.js',
          'chunks/index-42cc7f4d.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-fdca696c.js',
          'assets/main-00a60df9.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Sharer/docs.svx':
      return t(
        () => import('../../chunks/docs-f5638650.js'),
        ['chunks/docs-f5638650.js', 'chunks/index-044d379f.js']
      );
    default:
      return new Promise(function (i, a) {
        (typeof queueMicrotask == 'function'
          ? queueMicrotask
          : setTimeout)(a.bind(null, new Error('Unknown variable dynamic import: ' + s)));
      });
  }
}
function Z(s) {
  let i,
    a,
    o,
    c = s[0].title + '',
    n,
    m,
    r,
    _,
    d,
    v;
  return (
    (_ = new W({ props: { fw: !0, icon: C.faCode } })),
    {
      c() {
        (i = O('div')),
          (a = k('> ')),
          (o = O('span')),
          (n = k(c)),
          (m = A()),
          (r = O('a')),
          $(_.$$.fragment),
          this.h();
      },
      l(l) {
        i = V(l, 'DIV', { class: !0 });
        var e = x(i);
        (a = N(e, '> ')), (o = V(e, 'SPAN', { class: !0 }));
        var u = x(o);
        (n = N(u, c)),
          u.forEach(f),
          (m = I(e)),
          (r = V(e, 'A', { href: !0, target: !0, title: !0, class: !0 }));
        var p = x(r);
        R(_.$$.fragment, p), p.forEach(f), e.forEach(f), this.h();
      },
      h() {
        E(o, 'class', 'svelte-1o0o1ns'),
          E(
            r,
            'href',
            (d = `https://github.com/reuters-graphics/graphics-svelte-components/tree/master/src/lib/${s[0].path}/index.svelte`)
          ),
          E(r, 'target', '_blank'),
          E(r, 'title', 'Source code'),
          E(r, 'class', 'svelte-1o0o1ns'),
          E(i, 'class', 'breadcrumb font-display svelte-1o0o1ns');
      },
      m(l, e) {
        T(l, i, e),
          L(i, a),
          L(i, o),
          L(o, n),
          L(i, m),
          L(i, r),
          b(_, r, null),
          (v = !0);
      },
      p(l, e) {
        (!v || e & 1) && c !== (c = l[0].title + '') && j(n, c),
          (!v ||
            (e & 1 &&
              d !==
                (d = `https://github.com/reuters-graphics/graphics-svelte-components/tree/master/src/lib/${l[0].path}/index.svelte`))) &&
            E(r, 'href', d);
      },
      i(l) {
        v || (D(_.$$.fragment, l), (v = !0));
      },
      o(l) {
        h(_.$$.fragment, l), (v = !1);
      },
      d(l) {
        l && f(i), P(_);
      },
    }
  );
}
function ee(s) {
  let i, a, o, c, n, m, r, _, d;
  (i = new J({
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
    (o = new K({ props: { $$slots: { default: [Z] }, $$scope: { ctx: s } } })),
    (n = new Q({ props: { components: M } }));
  var v = s[1];
  function l(e) {
    return {};
  }
  return (
    v && (r = new v(l())),
    {
      c() {
        $(i.$$.fragment),
          (a = A()),
          $(o.$$.fragment),
          (c = A()),
          $(n.$$.fragment),
          (m = A()),
          r && $(r.$$.fragment),
          (_ = S());
      },
      l(e) {
        R(i.$$.fragment, e),
          (a = I(e)),
          R(o.$$.fragment, e),
          (c = I(e)),
          R(n.$$.fragment, e),
          (m = I(e)),
          r && R(r.$$.fragment, e),
          (_ = S());
      },
      m(e, u) {
        b(i, e, u),
          T(e, a, u),
          b(o, e, u),
          T(e, c, u),
          b(n, e, u),
          T(e, m, u),
          r && b(r, e, u),
          T(e, _, u),
          (d = !0);
      },
      p(e, [u]) {
        const p = {};
        u & 1 && (p.seoTitle = `Reuters Graphics components - ${e[0].title}`),
          u & 1 && (p.seoDescription = e[0].description),
          u & 1 &&
            (p.shareTitle = `Reuters Graphics components - ${e[0].title}`),
          u & 1 && (p.shareDescription = e[0].description),
          i.$set(p);
        const w = {};
        if (
          (u & 5 && (w.$$scope = { dirty: u, ctx: e }),
          o.$set(w),
          v !== (v = e[1]))
        ) {
          if (r) {
            z();
            const y = r;
            h(y.$$.fragment, 1, 0, () => {
              P(y, 1);
            }),
              G();
          }
          v
            ? ((r = new v(l())),
              $(r.$$.fragment),
              D(r.$$.fragment, 1),
              b(r, _.parentNode, _))
            : (r = null);
        }
      },
      i(e) {
        d ||
          (D(i.$$.fragment, e),
          D(o.$$.fragment, e),
          D(n.$$.fragment, e),
          r && D(r.$$.fragment, e),
          (d = !0));
      },
      o(e) {
        h(i.$$.fragment, e),
          h(o.$$.fragment, e),
          h(n.$$.fragment, e),
          r && h(r.$$.fragment, e),
          (d = !1);
      },
      d(e) {
        P(i, e),
          e && f(a),
          P(o, e),
          e && f(c),
          P(n, e),
          e && f(m),
          e && f(_),
          r && P(r, e);
      },
    }
  );
}
function _e(i) {
  return g(this, arguments, function* ({ params: s }) {
    return { props: { metadata: M.find((o) => o.slug === s.slug) } };
  });
}
function re(s, i, a) {
  let { metadata: o } = i,
    c;
  return (
    H(() =>
      g(this, null, function* () {
        a(1, (c = (yield Y(`../../src/lib/${o.path}/docs.svx`)).default));
      })
    ),
    U(() =>
      g(this, null, function* () {
        a(1, (c = (yield X(`../../src/lib/${o.path}/docs.svx`)).default));
      })
    ),
    (s.$$set = (n) => {
      'metadata' in n && a(0, (o = n.metadata));
    }),
    [o, c]
  );
}
class ce extends q {
  constructor(i) {
    super(), B(this, i, re, ee, F, { metadata: 0 });
  }
}
export { ce as default, _e as load };
