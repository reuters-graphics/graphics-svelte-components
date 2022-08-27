var g = (t, s, _) =>
  new Promise((o, n) => {
    var c = (u) => {
        try {
          a(_.next(u));
        } catch (i) {
          n(i);
        }
      },
      v = (u) => {
        try {
          a(_.throw(u));
        } catch (i) {
          n(i);
        }
      },
      a = (u) => (u.done ? o(u.value) : Promise.resolve(u.value).then(c, v));
    a((_ = _.apply(t, s)).next());
  });
import { _ as r } from '../../chunks/preload-helper-ade19073.js';
import {
  S as B,
  i as H,
  s as G,
  w as b,
  k as O,
  l as N,
  x as R,
  m as h,
  y as $,
  g as A,
  o as D,
  p as U,
  q as L,
  B as P,
  d as f,
  v as j,
  u as z,
  e as x,
  t as M,
  c as w,
  a as S,
  h as C,
  b as E,
  J as V,
  j as J,
  n as K,
} from '../../chunks/index-83a5d9f9.js';
import {
  c as F,
  S as Q,
  A as W,
  N as X,
  M as Y,
  F as Z,
} from '../../chunks/main-92ce8c3f.js';
import '../../chunks/paths-396f020f.js';
var q = {};
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var s = 'fas',
    _ = 'code',
    o = 640,
    n = 512,
    c = [],
    v = 'f121',
    a =
      'M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z';
  (t.definition = { prefix: s, iconName: _, icon: [o, n, c, v, a] }),
    (t.faCode = t.definition),
    (t.prefix = s),
    (t.iconName = _),
    (t.width = o),
    (t.height = n),
    (t.ligatures = c),
    (t.unicode = v),
    (t.svgPathData = a);
})(q);
function ee(t) {
  switch (t) {
    case '../../src/lib/Ai2svelte/docs.svx':
      return r(
        () => import('../../chunks/docs-b96235fa.js'),
        [
          'chunks/docs-b96235fa.js',
          'assets/docs-f27f17c1.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/BeforeAfter/docs.svx':
      return r(
        () => import('../../chunks/docs-b31407c6.js'),
        [
          'chunks/docs-b31407c6.js',
          'assets/docs-ea1c5840.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/BodyText/docs.svx':
      return r(
        () => import('../../chunks/docs-35b457e8.js'),
        [
          'chunks/docs-35b457e8.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/DatawrapperChart/docs.svx':
      return r(
        () => import('../../chunks/docs-5e8d45d3.js'),
        [
          'chunks/docs-5e8d45d3.js',
          'chunks/index-83a5d9f9.js',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
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
        () => import('../../chunks/docs-e51877ea.js'),
        [
          'chunks/docs-e51877ea.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
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
        () => import('../../chunks/docs-1ec549a7.js'),
        [
          'chunks/docs-1ec549a7.js',
          'assets/docs-8e82fbe2.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
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
        () => import('../../chunks/docs-bf499ea3.js'),
        [
          'chunks/docs-bf499ea3.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/LottieScroller/docs.svx':
      return r(
        () => import('../../chunks/docs-6020b7f7.js'),
        [
          'chunks/docs-6020b7f7.js',
          'assets/docs-4a88ca0e.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
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
        () => import('../../chunks/docs-e15870a2.js'),
        [
          'chunks/docs-e15870a2.js',
          'assets/docs-00bc6279.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
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
        () => import('../../chunks/docs-f0f6f82a.js'),
        [
          'chunks/docs-f0f6f82a.js',
          'assets/docs-58c35654.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Sharer/docs.svx':
      return r(
        () => import('../../chunks/docs-b33cdb33.js'),
        ['chunks/docs-b33cdb33.js', 'chunks/index-83a5d9f9.js']
      );
    case '../../src/lib/SiteFooter/docs.svx':
      return r(
        () => import('../../chunks/docs-a51c439c.js'),
        [
          'chunks/docs-a51c439c.js',
          'assets/docs-73e61455.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-c889ff85.js',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/paths-396f020f.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/SiteHeader/docs.svx':
      return r(
        () => import('../../chunks/docs-1ebd63cf.js'),
        [
          'chunks/docs-1ebd63cf.js',
          'assets/docs-06bba01a.css',
          'chunks/index-83a5d9f9.js',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/paths-396f020f.js',
          'chunks/index-5b18af3d.js',
          'chunks/index-83a1f0ce.js',
          'chunks/index-c889ff85.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/Spinner/docs.svx':
      return r(
        () => import('../../chunks/docs-1544ed7e.js'),
        [
          'chunks/docs-1544ed7e.js',
          'chunks/index-83a5d9f9.js',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/paths-396f020f.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/Video/docs.svx':
      return r(
        () => import('../../chunks/docs-8cc4cded.js'),
        [
          'chunks/docs-8cc4cded.js',
          'assets/docs-fee898e6.css',
          'chunks/index-83a5d9f9.js',
          'chunks/paths-396f020f.js',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/index.es-99e9c10a.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/Visible/docs.svx':
      return r(
        () => import('../../chunks/docs-97e25811.js'),
        ['chunks/docs-97e25811.js', 'chunks/index-83a5d9f9.js']
      );
    default:
      return new Promise(function (s, _) {
        (typeof queueMicrotask == 'function'
          ? queueMicrotask
          : setTimeout)(_.bind(null, new Error('Unknown variable dynamic import: ' + t)));
      });
  }
}
function re(t) {
  switch (t) {
    case '../../src/lib/Ai2svelte/docs.svx':
      return r(
        () => import('../../chunks/docs-b96235fa.js'),
        [
          'chunks/docs-b96235fa.js',
          'assets/docs-f27f17c1.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/BeforeAfter/docs.svx':
      return r(
        () => import('../../chunks/docs-b31407c6.js'),
        [
          'chunks/docs-b31407c6.js',
          'assets/docs-ea1c5840.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/BodyText/docs.svx':
      return r(
        () => import('../../chunks/docs-35b457e8.js'),
        [
          'chunks/docs-35b457e8.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/DatawrapperChart/docs.svx':
      return r(
        () => import('../../chunks/docs-5e8d45d3.js'),
        [
          'chunks/docs-5e8d45d3.js',
          'chunks/index-83a5d9f9.js',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
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
        () => import('../../chunks/docs-e51877ea.js'),
        [
          'chunks/docs-e51877ea.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
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
        () => import('../../chunks/docs-1ec549a7.js'),
        [
          'chunks/docs-1ec549a7.js',
          'assets/docs-8e82fbe2.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
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
        () => import('../../chunks/docs-bf499ea3.js'),
        [
          'chunks/docs-bf499ea3.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/LottieScroller/docs.svx':
      return r(
        () => import('../../chunks/docs-6020b7f7.js'),
        [
          'chunks/docs-6020b7f7.js',
          'assets/docs-4a88ca0e.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
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
        () => import('../../chunks/docs-e15870a2.js'),
        [
          'chunks/docs-e15870a2.js',
          'assets/docs-00bc6279.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
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
        () => import('../../chunks/docs-f0f6f82a.js'),
        [
          'chunks/docs-f0f6f82a.js',
          'assets/docs-58c35654.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/Sharer/docs.svx':
      return r(
        () => import('../../chunks/docs-b33cdb33.js'),
        ['chunks/docs-b33cdb33.js', 'chunks/index-83a5d9f9.js']
      );
    case '../../src/lib/SiteFooter/docs.svx':
      return r(
        () => import('../../chunks/docs-a51c439c.js'),
        [
          'chunks/docs-a51c439c.js',
          'assets/docs-73e61455.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-c889ff85.js',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/paths-396f020f.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/SiteHeader/docs.svx':
      return r(
        () => import('../../chunks/docs-1ebd63cf.js'),
        [
          'chunks/docs-1ebd63cf.js',
          'assets/docs-06bba01a.css',
          'chunks/index-83a5d9f9.js',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/paths-396f020f.js',
          'chunks/index-5b18af3d.js',
          'chunks/index-83a1f0ce.js',
          'chunks/index-c889ff85.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/Spinner/docs.svx':
      return r(
        () => import('../../chunks/docs-1544ed7e.js'),
        [
          'chunks/docs-1544ed7e.js',
          'chunks/index-83a5d9f9.js',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/paths-396f020f.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/Video/docs.svx':
      return r(
        () => import('../../chunks/docs-8cc4cded.js'),
        [
          'chunks/docs-8cc4cded.js',
          'assets/docs-fee898e6.css',
          'chunks/index-83a5d9f9.js',
          'chunks/paths-396f020f.js',
          'chunks/main-92ce8c3f.js',
          'assets/main-845863b4.css',
          'chunks/index.es-99e9c10a.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/Visible/docs.svx':
      return r(
        () => import('../../chunks/docs-97e25811.js'),
        ['chunks/docs-97e25811.js', 'chunks/index-83a5d9f9.js']
      );
    default:
      return new Promise(function (s, _) {
        (typeof queueMicrotask == 'function'
          ? queueMicrotask
          : setTimeout)(_.bind(null, new Error('Unknown variable dynamic import: ' + t)));
      });
  }
}
function te(t) {
  let s,
    _,
    o,
    n = t[0].title + '',
    c,
    v,
    a,
    u,
    i,
    p;
  return (
    (u = new Z({ props: { fw: !0, icon: q.faCode } })),
    {
      c() {
        (s = x('div')),
          (_ = M('> ')),
          (o = x('span')),
          (c = M(n)),
          (v = O()),
          (a = x('a')),
          b(u.$$.fragment),
          this.h();
      },
      l(l) {
        s = w(l, 'DIV', { class: !0 });
        var m = S(s);
        (_ = C(m, '> ')), (o = w(m, 'SPAN', { class: !0 }));
        var T = S(o);
        (c = C(T, n)),
          T.forEach(f),
          (v = h(m)),
          (a = w(m, 'A', { href: !0, target: !0, title: !0, class: !0 }));
        var e = S(a);
        R(u.$$.fragment, e), e.forEach(f), m.forEach(f), this.h();
      },
      h() {
        E(o, 'class', 'svelte-1o0o1ns'),
          E(
            a,
            'href',
            (i = `https://github.com/reuters-graphics/graphics-svelte-components/tree/master/src/lib/${t[0].path}/index.svelte`)
          ),
          E(a, 'target', '_blank'),
          E(a, 'title', 'Source code'),
          E(a, 'class', 'svelte-1o0o1ns'),
          E(s, 'class', 'breadcrumb font-display svelte-1o0o1ns');
      },
      m(l, m) {
        A(l, s, m),
          V(s, _),
          V(s, o),
          V(o, c),
          V(s, v),
          V(s, a),
          $(u, a, null),
          (p = !0);
      },
      p(l, m) {
        (!p || m & 1) && n !== (n = l[0].title + '') && J(c, n),
          (!p ||
            (m & 1 &&
              i !==
                (i = `https://github.com/reuters-graphics/graphics-svelte-components/tree/master/src/lib/${l[0].path}/index.svelte`))) &&
            E(a, 'href', i);
      },
      i(l) {
        p || (L(u.$$.fragment, l), (p = !0));
      },
      o(l) {
        D(u.$$.fragment, l), (p = !1);
      },
      d(l) {
        l && f(s), P(u);
      },
    }
  );
}
function se(t) {
  let s, _, o, n, c, v, a, u, i, p, l;
  (s = new Q({
    props: {
      seoTitle: `Reuters Graphics components - ${t[0].title}`,
      seoDescription: t[0].description,
      shareTitle: `Reuters Graphics components - ${t[0].title}`,
      shareDescription: t[0].description,
      shareImgPath: 'images/reuters-graphics.jpg',
      lang: 'en',
      hostname: 'reuters-graphics.github.io',
    },
  })),
    (o = new W({})),
    (c = new X({ props: { $$slots: { default: [te] }, $$scope: { ctx: t } } })),
    (a = new Y({ props: { components: F } }));
  var m = t[1];
  function T(e) {
    return {};
  }
  return (
    m && (i = new m(T())),
    {
      c() {
        b(s.$$.fragment),
          (_ = O()),
          b(o.$$.fragment),
          (n = O()),
          b(c.$$.fragment),
          (v = O()),
          b(a.$$.fragment),
          (u = O()),
          i && b(i.$$.fragment),
          (p = N());
      },
      l(e) {
        R(s.$$.fragment, e),
          (_ = h(e)),
          R(o.$$.fragment, e),
          (n = h(e)),
          R(c.$$.fragment, e),
          (v = h(e)),
          R(a.$$.fragment, e),
          (u = h(e)),
          i && R(i.$$.fragment, e),
          (p = N());
      },
      m(e, d) {
        $(s, e, d),
          A(e, _, d),
          $(o, e, d),
          A(e, n, d),
          $(c, e, d),
          A(e, v, d),
          $(a, e, d),
          A(e, u, d),
          i && $(i, e, d),
          A(e, p, d),
          (l = !0);
      },
      p(e, [d]) {
        const I = {};
        d & 1 && (I.seoTitle = `Reuters Graphics components - ${e[0].title}`),
          d & 1 && (I.seoDescription = e[0].description),
          d & 1 &&
            (I.shareTitle = `Reuters Graphics components - ${e[0].title}`),
          d & 1 && (I.shareDescription = e[0].description),
          s.$set(I);
        const y = {};
        if (
          (d & 5 && (y.$$scope = { dirty: d, ctx: e }),
          c.$set(y),
          m !== (m = e[1]))
        ) {
          if (i) {
            K();
            const k = i;
            D(k.$$.fragment, 1, 0, () => {
              P(k, 1);
            }),
              U();
          }
          m
            ? ((i = new m(T())),
              b(i.$$.fragment),
              L(i.$$.fragment, 1),
              $(i, p.parentNode, p))
            : (i = null);
        }
      },
      i(e) {
        l ||
          (L(s.$$.fragment, e),
          L(o.$$.fragment, e),
          L(c.$$.fragment, e),
          L(a.$$.fragment, e),
          i && L(i.$$.fragment, e),
          (l = !0));
      },
      o(e) {
        D(s.$$.fragment, e),
          D(o.$$.fragment, e),
          D(c.$$.fragment, e),
          D(a.$$.fragment, e),
          i && D(i.$$.fragment, e),
          (l = !1);
      },
      d(e) {
        P(s, e),
          e && f(_),
          P(o, e),
          e && f(n),
          P(c, e),
          e && f(v),
          P(a, e),
          e && f(u),
          e && f(p),
          i && P(i, e);
      },
    }
  );
}
function ue(s) {
  return g(this, arguments, function* ({ params: t }) {
    return { props: { metadata: F.find((o) => o.slug === t.slug) } };
  });
}
function ie(t, s, _) {
  let { metadata: o } = s,
    n;
  return (
    j(() =>
      g(this, null, function* () {
        _(1, (n = (yield re(`../../src/lib/${o.path}/docs.svx`)).default));
      })
    ),
    z(() =>
      g(this, null, function* () {
        _(1, (n = (yield ee(`../../src/lib/${o.path}/docs.svx`)).default));
      })
    ),
    (t.$$set = (c) => {
      'metadata' in c && _(0, (o = c.metadata));
    }),
    [o, n]
  );
}
class le extends B {
  constructor(s) {
    super(), H(this, s, ie, se, G, { metadata: 0 });
  }
}
export { le as default, ue as load };
