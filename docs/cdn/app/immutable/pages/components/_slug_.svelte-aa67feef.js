var I = (s, i, _) =>
  new Promise((o, c) => {
    var n = (a) => {
        try {
          t(_.next(a));
        } catch (m) {
          c(m);
        }
      },
      d = (a) => {
        try {
          t(_.throw(a));
        } catch (m) {
          c(m);
        }
      },
      t = (a) => (a.done ? o(a.value) : Promise.resolve(a.value).then(n, d));
    t((_ = _.apply(s, i)).next());
  });
import { _ as r } from '../../chunks/preload-helper-ade19073.js';
import {
  S as F,
  i as q,
  s as B,
  w as b,
  k as V,
  l as y,
  x as T,
  m as h,
  y as D,
  g as A,
  o as L,
  p as H,
  q as P,
  B as R,
  d as E,
  v as G,
  u as U,
  e as O,
  t as k,
  c as g,
  a as x,
  h as N,
  b as f,
  J as $,
  j,
  n as z,
} from '../../chunks/index-83a5d9f9.js';
import {
  c as M,
  S as J,
  N as K,
  M as Q,
  F as W,
} from '../../chunks/main-08bea4b0.js';
import '../../chunks/paths-396f020f.js';
var C = {};
(function (s) {
  Object.defineProperty(s, '__esModule', { value: !0 });
  var i = 'fas',
    _ = 'code',
    o = 640,
    c = 512,
    n = [],
    d = 'f121',
    t =
      'M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z';
  (s.definition = { prefix: i, iconName: _, icon: [o, c, n, d, t] }),
    (s.faCode = s.definition),
    (s.prefix = i),
    (s.iconName = _),
    (s.width = o),
    (s.height = c),
    (s.ligatures = n),
    (s.unicode = d),
    (s.svgPathData = t);
})(C);
function X(s) {
  switch (s) {
    case '../../src/lib/Ai2svelte/docs.svx':
      return r(
        () => import('../../chunks/docs-b3e5c1ff.js'),
        [
          'chunks/docs-b3e5c1ff.js',
          'assets/docs-f27f17c1.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/BeforeAfter/docs.svx':
      return r(
        () => import('../../chunks/docs-f9f7ce76.js'),
        [
          'chunks/docs-f9f7ce76.js',
          'assets/docs-ea1c5840.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/BodyText/docs.svx':
      return r(
        () => import('../../chunks/docs-7eed4ffc.js'),
        [
          'chunks/docs-7eed4ffc.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/DatawrapperChart/docs.svx':
      return r(
        () => import('../../chunks/docs-4126a2b1.js'),
        [
          'chunks/docs-4126a2b1.js',
          'chunks/index-83a5d9f9.js',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
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
        () => import('../../chunks/docs-f1b1c377.js'),
        [
          'chunks/docs-f1b1c377.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
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
        () => import('../../chunks/docs-c953d11e.js'),
        [
          'chunks/docs-c953d11e.js',
          'assets/docs-8e82fbe2.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
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
        () => import('../../chunks/docs-84cc2fb3.js'),
        [
          'chunks/docs-84cc2fb3.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/LottieScroller/docs.svx':
      return r(
        () => import('../../chunks/docs-57464e87.js'),
        [
          'chunks/docs-57464e87.js',
          'assets/docs-4a88ca0e.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
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
        () => import('../../chunks/docs-76cadc9f.js'),
        [
          'chunks/docs-76cadc9f.js',
          'assets/docs-00bc6279.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
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
        () => import('../../chunks/docs-7ca98614.js'),
        [
          'chunks/docs-7ca98614.js',
          'assets/docs-58c35654.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
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
        () => import('../../chunks/docs-9e03bfa8.js'),
        [
          'chunks/docs-9e03bfa8.js',
          'assets/docs-73e61455.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-c889ff85.js',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
          'chunks/paths-396f020f.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/SiteHeader/docs.svx':
      return r(
        () => import('../../chunks/docs-e6eba659.js'),
        [
          'chunks/docs-e6eba659.js',
          'assets/docs-06bba01a.css',
          'chunks/index-83a5d9f9.js',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
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
        () => import('../../chunks/docs-db80af71.js'),
        [
          'chunks/docs-db80af71.js',
          'chunks/index-83a5d9f9.js',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
          'chunks/paths-396f020f.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/Video/docs.svx':
      return r(
        () => import('../../chunks/docs-ee524d1f.js'),
        [
          'chunks/docs-ee524d1f.js',
          'assets/docs-fee898e6.css',
          'chunks/index-83a5d9f9.js',
          'chunks/paths-396f020f.js',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
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
        () => import('../../chunks/docs-b3e5c1ff.js'),
        [
          'chunks/docs-b3e5c1ff.js',
          'assets/docs-f27f17c1.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/BeforeAfter/docs.svx':
      return r(
        () => import('../../chunks/docs-f9f7ce76.js'),
        [
          'chunks/docs-f9f7ce76.js',
          'assets/docs-ea1c5840.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/BodyText/docs.svx':
      return r(
        () => import('../../chunks/docs-7eed4ffc.js'),
        [
          'chunks/docs-7eed4ffc.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/DatawrapperChart/docs.svx':
      return r(
        () => import('../../chunks/docs-4126a2b1.js'),
        [
          'chunks/docs-4126a2b1.js',
          'chunks/index-83a5d9f9.js',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
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
        () => import('../../chunks/docs-f1b1c377.js'),
        [
          'chunks/docs-f1b1c377.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
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
        () => import('../../chunks/docs-c953d11e.js'),
        [
          'chunks/docs-c953d11e.js',
          'assets/docs-8e82fbe2.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
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
        () => import('../../chunks/docs-84cc2fb3.js'),
        [
          'chunks/docs-84cc2fb3.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
          'chunks/paths-396f020f.js',
        ]
      );
    case '../../src/lib/LottieScroller/docs.svx':
      return r(
        () => import('../../chunks/docs-57464e87.js'),
        [
          'chunks/docs-57464e87.js',
          'assets/docs-4a88ca0e.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
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
        () => import('../../chunks/docs-76cadc9f.js'),
        [
          'chunks/docs-76cadc9f.js',
          'assets/docs-00bc6279.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
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
        () => import('../../chunks/docs-7ca98614.js'),
        [
          'chunks/docs-7ca98614.js',
          'assets/docs-58c35654.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-83a5d9f9.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
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
        () => import('../../chunks/docs-9e03bfa8.js'),
        [
          'chunks/docs-9e03bfa8.js',
          'assets/docs-73e61455.css',
          'chunks/index-83a5d9f9.js',
          'chunks/index-c889ff85.js',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
          'chunks/paths-396f020f.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/SiteHeader/docs.svx':
      return r(
        () => import('../../chunks/docs-e6eba659.js'),
        [
          'chunks/docs-e6eba659.js',
          'assets/docs-06bba01a.css',
          'chunks/index-83a5d9f9.js',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
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
        () => import('../../chunks/docs-db80af71.js'),
        [
          'chunks/docs-db80af71.js',
          'chunks/index-83a5d9f9.js',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
          'chunks/paths-396f020f.js',
          'chunks/index-16ec1060.js',
          'assets/index-2df4dd7a.css',
        ]
      );
    case '../../src/lib/Video/docs.svx':
      return r(
        () => import('../../chunks/docs-ee524d1f.js'),
        [
          'chunks/docs-ee524d1f.js',
          'assets/docs-fee898e6.css',
          'chunks/index-83a5d9f9.js',
          'chunks/paths-396f020f.js',
          'chunks/main-08bea4b0.js',
          'assets/main-0ce3135d.css',
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
    d,
    t,
    a,
    m,
    v;
  return (
    (a = new W({ props: { fw: !0, icon: C.faCode } })),
    {
      c() {
        (i = O('div')),
          (_ = k('> ')),
          (o = O('span')),
          (n = k(c)),
          (d = V()),
          (t = O('a')),
          b(a.$$.fragment),
          this.h();
      },
      l(l) {
        i = g(l, 'DIV', { class: !0 });
        var e = x(i);
        (_ = N(e, '> ')), (o = g(e, 'SPAN', { class: !0 }));
        var u = x(o);
        (n = N(u, c)),
          u.forEach(E),
          (d = h(e)),
          (t = g(e, 'A', { href: !0, target: !0, title: !0, class: !0 }));
        var p = x(t);
        T(a.$$.fragment, p), p.forEach(E), e.forEach(E), this.h();
      },
      h() {
        f(o, 'class', 'svelte-1o0o1ns'),
          f(
            t,
            'href',
            (m = `https://github.com/reuters-graphics/graphics-svelte-components/tree/master/src/lib/${s[0].path}/index.svelte`)
          ),
          f(t, 'target', '_blank'),
          f(t, 'title', 'Source code'),
          f(t, 'class', 'svelte-1o0o1ns'),
          f(i, 'class', 'breadcrumb font-display svelte-1o0o1ns');
      },
      m(l, e) {
        A(l, i, e),
          $(i, _),
          $(i, o),
          $(o, n),
          $(i, d),
          $(i, t),
          D(a, t, null),
          (v = !0);
      },
      p(l, e) {
        (!v || e & 1) && c !== (c = l[0].title + '') && j(n, c),
          (!v ||
            (e & 1 &&
              m !==
                (m = `https://github.com/reuters-graphics/graphics-svelte-components/tree/master/src/lib/${l[0].path}/index.svelte`))) &&
            f(t, 'href', m);
      },
      i(l) {
        v || (P(a.$$.fragment, l), (v = !0));
      },
      o(l) {
        L(a.$$.fragment, l), (v = !1);
      },
      d(l) {
        l && E(i), R(a);
      },
    }
  );
}
function ee(s) {
  let i, _, o, c, n, d, t, a, m;
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
          (_ = V()),
          b(o.$$.fragment),
          (c = V()),
          b(n.$$.fragment),
          (d = V()),
          t && b(t.$$.fragment),
          (a = y());
      },
      l(e) {
        T(i.$$.fragment, e),
          (_ = h(e)),
          T(o.$$.fragment, e),
          (c = h(e)),
          T(n.$$.fragment, e),
          (d = h(e)),
          t && T(t.$$.fragment, e),
          (a = y());
      },
      m(e, u) {
        D(i, e, u),
          A(e, _, u),
          D(o, e, u),
          A(e, c, u),
          D(n, e, u),
          A(e, d, u),
          t && D(t, e, u),
          A(e, a, u),
          (m = !0);
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
            const S = t;
            L(S.$$.fragment, 1, 0, () => {
              R(S, 1);
            }),
              H();
          }
          v
            ? ((t = new v(l())),
              b(t.$$.fragment),
              P(t.$$.fragment, 1),
              D(t, a.parentNode, a))
            : (t = null);
        }
      },
      i(e) {
        m ||
          (P(i.$$.fragment, e),
          P(o.$$.fragment, e),
          P(n.$$.fragment, e),
          t && P(t.$$.fragment, e),
          (m = !0));
      },
      o(e) {
        L(i.$$.fragment, e),
          L(o.$$.fragment, e),
          L(n.$$.fragment, e),
          t && L(t.$$.fragment, e),
          (m = !1);
      },
      d(e) {
        R(i, e),
          e && E(_),
          R(o, e),
          e && E(c),
          R(n, e),
          e && E(d),
          e && E(a),
          t && R(t, e);
      },
    }
  );
}
function ae(i) {
  return I(this, arguments, function* ({ params: s }) {
    return { props: { metadata: M.find((o) => o.slug === s.slug) } };
  });
}
function re(s, i, _) {
  let { metadata: o } = i,
    c;
  return (
    G(() =>
      I(this, null, function* () {
        _(1, (c = (yield Y(`../../src/lib/${o.path}/docs.svx`)).default));
      })
    ),
    U(() =>
      I(this, null, function* () {
        _(1, (c = (yield X(`../../src/lib/${o.path}/docs.svx`)).default));
      })
    ),
    (s.$$set = (n) => {
      'metadata' in n && _(0, (o = n.metadata));
    }),
    [o, c]
  );
}
class ce extends F {
  constructor(i) {
    super(), q(this, i, re, ee, B, { metadata: 0 });
  }
}
export { ce as default, ae as load };
