var A = (s, i, _) =>
  new Promise((o, c) => {
    var n = (a) => {
        try {
          t(_.next(a));
        } catch (d) {
          c(d);
        }
      },
      m = (a) => {
        try {
          t(_.throw(a));
        } catch (d) {
          c(d);
        }
      },
      t = (a) => (a.done ? o(a.value) : Promise.resolve(a.value).then(n, m));
    t((_ = _.apply(s, i)).next());
  });
import { _ as r } from '../../chunks/preload-helper-ade19073.js';
import {
  S as q,
  i as B,
  s as F,
  w as b,
  k as I,
  l as S,
  x as R,
  m as O,
  y as $,
  g as T,
  o as D,
  p as G,
  q as L,
  B as P,
  d as f,
  v as H,
  u as U,
  e as V,
  t as N,
  c as g,
  a as x,
  h as k,
  b as E,
  J as h,
  j,
  n as z,
} from '../../chunks/index-83a5d9f9.js';
import {
  c as M,
  S as J,
  N as K,
  M as Q,
  F as W,
} from '../../chunks/main-2a85cd42.js';
import '../../chunks/paths-396f020f.js';
var C = {};
(function (s) {
  Object.defineProperty(s, '__esModule', { value: !0 });
  var i = 'fas',
    _ = 'code',
    o = 640,
    c = 512,
    n = [],
    m = 'f121',
    t =
      'M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z';
  (s.definition = { prefix: i, iconName: _, icon: [o, c, n, m, t] }),
    (s.faCode = s.definition),
    (s.prefix = i),
    (s.iconName = _),
    (s.width = o),
    (s.height = c),
    (s.ligatures = n),
    (s.unicode = m),
    (s.svgPathData = t);
})(C);
function X(s) {
  switch (s) {
    case '../../src/lib/Ai2svelte/docs.svx':
      return r(
        () => import('../../chunks/docs-eedd2dae.js'),
        [
          'chunks/docs-eedd2dae.js',
          'assets/docs-f27f17c1.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/BeforeAfter/docs.svx':
      return r(
        () => import('../../chunks/docs-e8338158.js'),
        [
          'chunks/docs-e8338158.js',
          'assets/docs-ea1c5840.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/BodyText/docs.svx':
      return r(
        () => import('../../chunks/docs-1bc8483c.js'),
        [
          'chunks/docs-1bc8483c.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/DatawrapperChart/docs.svx':
      return r(
        () => import('../../chunks/docs-f5a0ba3c.js'),
        [
          'chunks/docs-f5a0ba3c.js',
          'chunks/index-83a5d9f9.js',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/EmbedPreviewerLink/docs.svx':
      return r(
        () => import('../../chunks/docs-1d5a5f9c.js'),
        ['chunks/docs-1d5a5f9c.js', 'chunks/index-83a5d9f9.js']
      );
    case '../../src/lib/EndNotes/docs.svx':
      return r(
        () => import('../../chunks/docs-19e53e54.js'),
        [
          'chunks/docs-19e53e54.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Footer/docs.svx':
      return r(
        () => import('../../chunks/docs-4565b5de.js'),
        [
          'chunks/docs-4565b5de.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/Framer/docs.svx':
      return r(
        () => import('../../chunks/docs-7e551d83.js'),
        [
          'chunks/docs-7e551d83.js',
          'assets/docs-8e82fbe2.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
          'chunks/index.es-99e9c10a.js',
          'chunks/index-5b18af3d.js',
        ]
      );
    case '../../src/lib/Headline/docs.svx':
      return r(
        () => import('../../chunks/docs-80659417.js'),
        [
          'chunks/docs-80659417.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Hero/docs.svx':
      return r(
        () => import('../../chunks/docs-77d34e0f.js'),
        [
          'chunks/docs-77d34e0f.js',
          'assets/docs-b2c6cc18.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Image/docs.svx':
      return r(
        () => import('../../chunks/docs-972d6a7c.js'),
        [
          'chunks/docs-972d6a7c.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/LottieScroller/docs.svx':
      return r(
        () => import('../../chunks/docs-42b190bf.js'),
        [
          'chunks/docs-42b190bf.js',
          'assets/docs-4a88ca0e.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Nav/docs.svx':
      return r(
        () => import('../../chunks/docs-9f91f03c.js'),
        [
          'chunks/docs-9f91f03c.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/PymChild/docs.svx':
      return r(
        () => import('../../chunks/docs-60841784.js'),
        ['chunks/docs-60841784.js', 'chunks/index-83a5d9f9.js']
      );
    case '../../src/lib/Referrals/docs.svx':
      return r(
        () => import('../../chunks/docs-7a4a6ec5.js'),
        [
          'chunks/docs-7a4a6ec5.js',
          'assets/docs-00bc6279.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/ReutersLogo/docs.svx':
      return r(
        () => import('../../chunks/docs-7df96030.js'),
        [
          'chunks/docs-7df96030.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-83a1f0ce.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/SEO/docs.svx':
      return r(
        () => import('../../chunks/docs-4c07f10b.js'),
        ['chunks/docs-4c07f10b.js', 'chunks/index-83a5d9f9.js']
      );
    case '../../src/lib/Scroller/docs.svx':
      return r(
        () => import('../../chunks/docs-e5a369c1.js'),
        [
          'chunks/docs-e5a369c1.js',
          'assets/docs-58c35654.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Sharer/docs.svx':
      return r(
        () => import('../../chunks/docs-b33cdb33.js'),
        ['chunks/docs-b33cdb33.js', 'chunks/index-83a5d9f9.js']
      );
    case '../../src/lib/SiteNav/docs.svx':
      return r(
        () => import('../../chunks/docs-b05c1f2e.js'),
        [
          'chunks/docs-b05c1f2e.js',
          'assets/docs-06bba01a.css',
          'chunks/index-83a5d9f9.js',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
          'chunks/index-5b18af3d.js',
          'chunks/index-83a1f0ce.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/Video/docs.svx':
      return r(
        () => import('../../chunks/docs-312cb759.js'),
        [
          'chunks/docs-312cb759.js',
          'assets/docs-fee898e6.css',
          'chunks/index-83a5d9f9.js',
          'chunks/paths-396f020f.js',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/index.es-99e9c10a.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    default:
      return new Promise(function (i, _) {
        (typeof queueMicrotask == 'function'
          ? queueMicrotask
          : setTimeout)(_.bind(null, new Error('Unknown variable dynamic import: ' + s)));
      });
  }
}
function Y(s) {
  switch (s) {
    case '../../src/lib/Ai2svelte/docs.svx':
      return r(
        () => import('../../chunks/docs-eedd2dae.js'),
        [
          'chunks/docs-eedd2dae.js',
          'assets/docs-f27f17c1.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/BeforeAfter/docs.svx':
      return r(
        () => import('../../chunks/docs-e8338158.js'),
        [
          'chunks/docs-e8338158.js',
          'assets/docs-ea1c5840.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/BodyText/docs.svx':
      return r(
        () => import('../../chunks/docs-1bc8483c.js'),
        [
          'chunks/docs-1bc8483c.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/DatawrapperChart/docs.svx':
      return r(
        () => import('../../chunks/docs-f5a0ba3c.js'),
        [
          'chunks/docs-f5a0ba3c.js',
          'chunks/index-83a5d9f9.js',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/EmbedPreviewerLink/docs.svx':
      return r(
        () => import('../../chunks/docs-1d5a5f9c.js'),
        ['chunks/docs-1d5a5f9c.js', 'chunks/index-83a5d9f9.js']
      );
    case '../../src/lib/EndNotes/docs.svx':
      return r(
        () => import('../../chunks/docs-19e53e54.js'),
        [
          'chunks/docs-19e53e54.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Footer/docs.svx':
      return r(
        () => import('../../chunks/docs-4565b5de.js'),
        [
          'chunks/docs-4565b5de.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/Framer/docs.svx':
      return r(
        () => import('../../chunks/docs-7e551d83.js'),
        [
          'chunks/docs-7e551d83.js',
          'assets/docs-8e82fbe2.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
          'chunks/index.es-99e9c10a.js',
          'chunks/index-5b18af3d.js',
        ]
      );
    case '../../src/lib/Headline/docs.svx':
      return r(
        () => import('../../chunks/docs-80659417.js'),
        [
          'chunks/docs-80659417.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Hero/docs.svx':
      return r(
        () => import('../../chunks/docs-77d34e0f.js'),
        [
          'chunks/docs-77d34e0f.js',
          'assets/docs-b2c6cc18.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Image/docs.svx':
      return r(
        () => import('../../chunks/docs-972d6a7c.js'),
        [
          'chunks/docs-972d6a7c.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/LottieScroller/docs.svx':
      return r(
        () => import('../../chunks/docs-42b190bf.js'),
        [
          'chunks/docs-42b190bf.js',
          'assets/docs-4a88ca0e.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Nav/docs.svx':
      return r(
        () => import('../../chunks/docs-9f91f03c.js'),
        [
          'chunks/docs-9f91f03c.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/PymChild/docs.svx':
      return r(
        () => import('../../chunks/docs-60841784.js'),
        ['chunks/docs-60841784.js', 'chunks/index-83a5d9f9.js']
      );
    case '../../src/lib/Referrals/docs.svx':
      return r(
        () => import('../../chunks/docs-7a4a6ec5.js'),
        [
          'chunks/docs-7a4a6ec5.js',
          'assets/docs-00bc6279.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/ReutersLogo/docs.svx':
      return r(
        () => import('../../chunks/docs-7df96030.js'),
        [
          'chunks/docs-7df96030.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-83a1f0ce.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/SEO/docs.svx':
      return r(
        () => import('../../chunks/docs-4c07f10b.js'),
        ['chunks/docs-4c07f10b.js', 'chunks/index-83a5d9f9.js']
      );
    case '../../src/lib/Scroller/docs.svx':
      return r(
        () => import('../../chunks/docs-e5a369c1.js'),
        [
          'chunks/docs-e5a369c1.js',
          'assets/docs-58c35654.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Sharer/docs.svx':
      return r(
        () => import('../../chunks/docs-b33cdb33.js'),
        ['chunks/docs-b33cdb33.js', 'chunks/index-83a5d9f9.js']
      );
    case '../../src/lib/SiteNav/docs.svx':
      return r(
        () => import('../../chunks/docs-b05c1f2e.js'),
        [
          'chunks/docs-b05c1f2e.js',
          'assets/docs-06bba01a.css',
          'chunks/index-83a5d9f9.js',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/paths-396f020f.js',
          'chunks/index-5b18af3d.js',
          'chunks/index-83a1f0ce.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/Video/docs.svx':
      return r(
        () => import('../../chunks/docs-312cb759.js'),
        [
          'chunks/docs-312cb759.js',
          'assets/docs-fee898e6.css',
          'chunks/index-83a5d9f9.js',
          'chunks/paths-396f020f.js',
          'chunks/main-2a85cd42.js',
          'assets/main-b099bd8c.css',
          'chunks/index.es-99e9c10a.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    default:
      return new Promise(function (i, _) {
        (typeof queueMicrotask == 'function'
          ? queueMicrotask
          : setTimeout)(_.bind(null, new Error('Unknown variable dynamic import: ' + s)));
      });
  }
}
function Z(s) {
  let i,
    _,
    o,
    c = s[0].title + '',
    n,
    m,
    t,
    a,
    d,
    v;
  return (
    (a = new W({ props: { fw: !0, icon: C.faCode } })),
    {
      c() {
        (i = V('div')),
          (_ = N('> ')),
          (o = V('span')),
          (n = N(c)),
          (m = I()),
          (t = V('a')),
          b(a.$$.fragment),
          this.h();
      },
      l(l) {
        i = g(l, 'DIV', { class: !0 });
        var e = x(i);
        (_ = k(e, '> ')), (o = g(e, 'SPAN', { class: !0 }));
        var u = x(o);
        (n = k(u, c)),
          u.forEach(f),
          (m = O(e)),
          (t = g(e, 'A', { href: !0, target: !0, title: !0, class: !0 }));
        var p = x(t);
        R(a.$$.fragment, p), p.forEach(f), e.forEach(f), this.h();
      },
      h() {
        E(o, 'class', 'svelte-1o0o1ns'),
          E(
            t,
            'href',
            (d = `https://github.com/reuters-graphics/graphics-svelte-components/tree/master/src/lib/${s[0].path}/index.svelte`)
          ),
          E(t, 'target', '_blank'),
          E(t, 'title', 'Source code'),
          E(t, 'class', 'svelte-1o0o1ns'),
          E(i, 'class', 'breadcrumb font-display svelte-1o0o1ns');
      },
      m(l, e) {
        T(l, i, e),
          h(i, _),
          h(i, o),
          h(o, n),
          h(i, m),
          h(i, t),
          $(a, t, null),
          (v = !0);
      },
      p(l, e) {
        (!v || e & 1) && c !== (c = l[0].title + '') && j(n, c),
          (!v ||
            (e & 1 &&
              d !==
                (d = `https://github.com/reuters-graphics/graphics-svelte-components/tree/master/src/lib/${l[0].path}/index.svelte`))) &&
            E(t, 'href', d);
      },
      i(l) {
        v || (L(a.$$.fragment, l), (v = !0));
      },
      o(l) {
        D(a.$$.fragment, l), (v = !1);
      },
      d(l) {
        l && f(i), P(a);
      },
    }
  );
}
function ee(s) {
  let i, _, o, c, n, m, t, a, d;
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
    v && (t = new v(l())),
    {
      c() {
        b(i.$$.fragment),
          (_ = I()),
          b(o.$$.fragment),
          (c = I()),
          b(n.$$.fragment),
          (m = I()),
          t && b(t.$$.fragment),
          (a = S());
      },
      l(e) {
        R(i.$$.fragment, e),
          (_ = O(e)),
          R(o.$$.fragment, e),
          (c = O(e)),
          R(n.$$.fragment, e),
          (m = O(e)),
          t && R(t.$$.fragment, e),
          (a = S());
      },
      m(e, u) {
        $(i, e, u),
          T(e, _, u),
          $(o, e, u),
          T(e, c, u),
          $(n, e, u),
          T(e, m, u),
          t && $(t, e, u),
          T(e, a, u),
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
          if (t) {
            z();
            const y = t;
            D(y.$$.fragment, 1, 0, () => {
              P(y, 1);
            }),
              G();
          }
          v
            ? ((t = new v(l())),
              b(t.$$.fragment),
              L(t.$$.fragment, 1),
              $(t, a.parentNode, a))
            : (t = null);
        }
      },
      i(e) {
        d ||
          (L(i.$$.fragment, e),
          L(o.$$.fragment, e),
          L(n.$$.fragment, e),
          t && L(t.$$.fragment, e),
          (d = !0));
      },
      o(e) {
        D(i.$$.fragment, e),
          D(o.$$.fragment, e),
          D(n.$$.fragment, e),
          t && D(t.$$.fragment, e),
          (d = !1);
      },
      d(e) {
        P(i, e),
          e && f(_),
          P(o, e),
          e && f(c),
          P(n, e),
          e && f(m),
          e && f(a),
          t && P(t, e);
      },
    }
  );
}
function ae(i) {
  return A(this, arguments, function* ({ params: s }) {
    return { props: { metadata: M.find((o) => o.slug === s.slug) } };
  });
}
function re(s, i, _) {
  let { metadata: o } = i,
    c;
  return (
    H(() =>
      A(this, null, function* () {
        _(1, (c = (yield Y(`../../src/lib/${o.path}/docs.svx`)).default));
      })
    ),
    U(() =>
      A(this, null, function* () {
        _(1, (c = (yield X(`../../src/lib/${o.path}/docs.svx`)).default));
      })
    ),
    (s.$$set = (n) => {
      'metadata' in n && _(0, (o = n.metadata));
    }),
    [o, c]
  );
}
class ce extends q {
  constructor(i) {
    super(), B(this, i, re, ee, F, { metadata: 0 });
  }
}
export { ce as default, ae as load };
