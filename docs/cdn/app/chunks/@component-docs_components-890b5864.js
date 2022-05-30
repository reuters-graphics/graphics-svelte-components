import {
  O as W,
  P as ye,
  S as oe,
  i as ce,
  s as ue,
  e as m,
  Q as pe,
  l as J,
  R as be,
  c as h,
  a as D,
  d as c,
  T as de,
  b as e,
  J as u,
  K as se,
  U as we,
  V as U,
  F as Te,
  k as V,
  m as $,
  W as Ee,
  g as Y,
  G as ke,
  H as Ae,
  I as Ie,
  q as Q,
  o as X,
  X as _e,
  L as ee,
  M as Se,
  Y as Le,
  Z as Me,
  t as ie,
  h as le,
  j as Re,
  w as te,
  x as re,
  _ as me,
  y as ne,
  B as ae,
  N as De,
} from './vendor-f398e5e0.js';
import { a as Ne, b as Z } from './paths-396f020f.js';
const K = (r = '') => W(Ne, r);
const je = '@reuters-graphics/graphics-svelte-components',
  He = '0.3.8',
  xe = 'module',
  Oe = 'https://reuters-graphics.github.io/graphics-svelte-components',
  Pe = 'https://github.com/reuters-graphics/graphics-svelte-components',
  Fe = {
    start: 'svelte-kit dev --open',
    package: 'svelte-kit package && npm run build:commit',
    'build:docs': 'svelte-kit build && touch docs/.nojekyll',
    'build:commit':
      'npm run build:docs && git add . && git commit -m build && git push origin master',
    postinstall: 'husky install',
    release: 'npm run package && npm publish dist',
    postversion:
      'git push origin master && git push origin master --tags && npm run release',
    prepublishOnly: `echo "Did you mean to run 'yarn release'?" && exit 1`,
  },
  Ce = {
    '@reuters-graphics/eslint-config': '^0.0.2',
    '@rollup/plugin-dsv': '^2.0.1',
    '@sveltejs/adapter-static': '1.0.0-next.29',
    '@sveltejs/kit': '1.0.0-next.301',
    autoprefixer: '^10.2.5',
    eslint: '^7.24.0',
    'eslint-plugin-svelte3': '^3.2.0',
    'front-matter': '^4.0.2',
    'fs-extra': '^10.0.0',
    glob: '^7.1.6',
    husky: '>=6',
    'lint-staged': '>=10',
    mdsvex: '^0.9.8',
    micromatch: '^4.0.4',
    'npm-run-all': '^4.1.5',
    prettier: '^2.3.2',
    'prettier-plugin-svelte': '^2.4.0',
    sass: '^1.45.0',
    svelte: '^3.46.4',
    'svelte-preprocess': '^4.10.4',
  },
  qe = { node: '>= 14.17.0' },
  Ge = {
    '@fortawesome/free-brands-svg-icons': '^5.15.4',
    '@fortawesome/free-regular-svg-icons': '^5.15.3',
    '@fortawesome/free-solid-svg-icons': '^5.15.3',
    '@reuters-graphics/style-theme-eisbaer': '^0.3.5',
    '@sveltejs/svelte-scroller': '^2.0.7',
    classnames: '^2.3.1',
    'lodash-es': '^4.17.21',
    'lottie-web': '^5.7.13',
    marked: '^4.0.8',
    'proper-url-join': '^2.1.1',
    'pym.js': '^1.3.2',
    'svelte-fa': '^2.2.0',
    'ua-parser-js': '^0.7.27',
  };
var z = {
  name: je,
  version: He,
  type: xe,
  private: !1,
  homepage: Oe,
  repository: Pe,
  scripts: Fe,
  'lint-staged': {
    '*.js': 'eslint --cache --fix',
    '*.{js,css,md,svelte}': 'prettier --write',
  },
  devDependencies: Ce,
  engines: qe,
  dependencies: Ge,
};
const Be = () => {
    const r = ye('__svelte__');
    return {
      page: { subscribe: r.page.subscribe },
      navigating: { subscribe: r.navigating.subscribe },
      get preloading() {
        return (
          console.error(
            'stores.preloading is deprecated; use stores.navigating instead'
          ),
          { subscribe: r.navigating.subscribe }
        );
      },
      session: r.session,
      updated: r.updated,
    };
  },
  ze = {
    subscribe(r) {
      return Be().page.subscribe(r);
    },
  },
  Ue = function (r, t, n, a, s, i, f) {
    (r.GoogleAnalyticsObject = s),
      (r[s] =
        r[s] ||
        function () {
          (r[s].q = r[s].q || []).push(arguments);
        }),
      (r[s].l = 1 * new Date()),
      (i = t.createElement(n)),
      (f = t.getElementsByTagName(n)[0]),
      (i.async = 1),
      (i.src = a),
      f.parentNode.insertBefore(i, f);
  };
var Ve = (r, t) => {
  Ue(
    window,
    document,
    'script',
    'https://www.google-analytics.com/analytics.js',
    'ga'
  ),
    window.ga('create', 'UA-41619329-3', { cookieDomain: 'auto' }),
    window.ga('require', 'linkid', 'linkid.js'),
    window.ga('send', 'pageview', { page: r, title: t }),
    $e() || Je.init({ reportInterval: 30 });
};
function $e() {
  try {
    return window.self !== window.top;
  } catch {
    return !0;
  }
}
var Je = (function () {
    var r = !1,
      t = !1,
      n = !1,
      a = 0,
      s = new Date(),
      i = null,
      f = null,
      p,
      b,
      T,
      y,
      v,
      w,
      A,
      I;
    function g(o) {
      typeof ga == 'function' && (w = !0),
        typeof _gaq != 'undefined' &&
          typeof _gaq.push == 'function' &&
          (A = !0),
        typeof dataLayer != 'undefined' &&
          typeof dataLayer.push == 'function' &&
          (I = !0),
        (o = o || {}),
        (T = parseInt(o.reportInterval, 10) || 5),
        (y = parseInt(o.idleTimeout, 10) || 30),
        typeof o.eventHandler == 'function' && (p = o.eventHandler),
        typeof o.userTimingHandler == 'function' && (b = o.userTimingHandler),
        'nonInteraction' in o &&
        (o.nonInteraction === !1 || o.nonInteraction === 'false')
          ? (v = !1)
          : (v = !0),
        M(document, 'keydown', l),
        M(document, 'click', l),
        M(window, 'mousemove', N(l, 500)),
        M(window, 'scroll', N(l, 500)),
        M(document, 'visibilitychange', H),
        M(document, 'webkitvisibilitychange', H),
        p(0);
    }
    function N(o, _) {
      var L,
        x,
        q,
        j = null,
        B = 0,
        G = function () {
          (B = new Date()), (j = null), (q = o.apply(L, x));
        };
      return function () {
        var S = new Date();
        B || (B = S);
        var d = _ - (S - B);
        return (
          (L = this),
          (x = arguments),
          d <= 0
            ? (clearTimeout(j), (j = null), (B = S), (q = o.apply(L, x)))
            : j || (j = setTimeout(G, d)),
          q
        );
      };
    }
    function M(o, _, L) {
      o.addEventListener
        ? o.addEventListener(_, L, !1)
        : o.attachEvent
        ? o.attachEvent('on' + _, L)
        : (o['on' + _] = L);
    }
    (b = function (o) {
      I
        ? dataLayer.push({
            event: 'RivetedTiming',
            eventCategory: 'Riveted',
            timingVar: 'First Interaction',
            timingValue: o,
          })
        : (w && ga('send', 'timing', 'Riveted', 'First Interaction', o),
          A &&
            _gaq.push([
              '_trackTiming',
              'Riveted',
              'First Interaction',
              o,
              null,
              100,
            ]));
    }),
      (p = function (o) {
        I
          ? dataLayer.push({
              event: 'Riveted',
              eventCategory: 'Riveted',
              eventAction: 'Time Spent',
              eventLabel: o,
              eventValue: T,
              eventNonInteraction: v,
            })
          : (w &&
              ga('send', 'event', 'Riveted', 'Time Spent', o.toString(), T, {
                nonInteraction: v,
              }),
            A &&
              _gaq.push([
                '_trackEvent',
                'Riveted',
                'Time Spent',
                o.toString(),
                T,
                v,
              ]));
      });
    function R() {
      clearTimeout(f), O();
    }
    function H() {
      (document.hidden || document.webkitHidden) && R();
    }
    function F() {
      (a += 1), a > 0 && a % T === 0 && p(a);
    }
    function O() {
      (t = !0), clearTimeout(i);
    }
    function C() {
      R(), (n = !0);
    }
    function E() {
      n = !1;
    }
    function P() {
      (t = !1), clearTimeout(i), (i = setInterval(F, 1e3));
    }
    function k() {
      var o = new Date(),
        _ = o - s;
      (r = !0), b(_), (i = setInterval(F, 1e3));
    }
    function l() {
      n ||
        (r || k(),
        t && P(),
        clearTimeout(f),
        (f = setTimeout(R, y * 1e3 + 100)));
    }
    return { init: g, trigger: l, setIdle: R, on: E, off: C };
  })(),
  Ke = () => {
    const r = window.googletag || {};
    (r.cmd = r.cmd || []),
      (function () {
        const t = document.createElement('script');
        (t.async = !0), (t.type = 'text/javascript');
        const n = document.location.protocol === 'https:';
        t.src =
          (n ? 'https:' : 'http:') +
          '//www.googletagservices.com/tag/js/gpt.js';
        const a = document.getElementsByTagName('script')[0];
        a.parentNode.insertBefore(t, a);
      })(),
      r.cmd.push(function () {
        r
          .defineSlot(
            '/4735792/reuters_investigates',
            [[300, 250]],
            'div-gpt-ad-1441822201033-0'
          )
          .addService(r.pubads()),
          r.pubads().enableSingleRequest(),
          r.enableServices();
      });
  };
function Ye(r) {
  let t,
    n,
    a,
    s,
    i,
    f,
    p,
    b,
    T,
    y,
    v,
    w,
    A,
    I,
    g,
    N,
    M,
    R,
    H,
    F,
    O,
    C,
    E,
    P,
    k,
    l,
    o,
    _,
    L,
    x = `<script type="application/ld+json">${JSON.stringify(r[8])}<\/script>`,
    q,
    j,
    B = `<script type="application/ld+json">${JSON.stringify(r[9])}<\/script>`,
    G;
  return (
    (document.title = n = r[0]),
    {
      c() {
        (t = m('html')),
          (a = m('meta')),
          (s = m('link')),
          (i = m('link')),
          (f = m('link')),
          (p = m('link')),
          (b = m('link')),
          (T = m('meta')),
          (y = m('meta')),
          (v = m('meta')),
          (w = m('meta')),
          (A = m('meta')),
          (g = m('meta')),
          (N = m('meta')),
          (M = m('meta')),
          (R = m('meta')),
          (H = m('meta')),
          (O = m('meta')),
          (C = m('meta')),
          (E = m('meta')),
          (k = m('meta')),
          (l = m('meta')),
          (o = m('meta')),
          (_ = m('meta')),
          (L = new pe()),
          (q = J()),
          (j = new pe()),
          (G = J()),
          this.h();
      },
      l(S) {
        const d = be('[data-svelte="svelte-zl7wm1"]', document.head);
        (t = h(d, 'HTML', { lang: !0 })),
          D(t).forEach(c),
          (a = h(d, 'META', { name: !0, content: !0 })),
          (s = h(d, 'LINK', { rel: !0, href: !0 })),
          (i = h(d, 'LINK', { rel: !0, type: !0, href: !0 })),
          (f = h(d, 'LINK', { rel: !0, type: !0, href: !0, sizes: !0 })),
          (p = h(d, 'LINK', { rel: !0, type: !0, href: !0, sizes: !0 })),
          (b = h(d, 'LINK', { rel: !0, type: !0, href: !0, sizes: !0 })),
          (T = h(d, 'META', { property: !0, content: !0 })),
          (y = h(d, 'META', { property: !0, content: !0 })),
          (v = h(d, 'META', { property: !0, content: !0, itemprop: !0 })),
          (w = h(d, 'META', { property: !0, content: !0, itemprop: !0 })),
          (A = h(d, 'META', { property: !0, content: !0, itemprop: !0 })),
          (g = h(d, 'META', { property: !0, content: !0 })),
          (N = h(d, 'META', { name: !0, content: !0 })),
          (M = h(d, 'META', { name: !0, content: !0 })),
          (R = h(d, 'META', { name: !0, content: !0 })),
          (H = h(d, 'META', { name: !0, content: !0 })),
          (O = h(d, 'META', { name: !0, content: !0 })),
          (C = h(d, 'META', { name: !0, content: !0 })),
          (E = h(d, 'META', { name: !0, content: !0 })),
          (k = h(d, 'META', { property: !0, content: !0 })),
          (l = h(d, 'META', { property: !0, content: !0 })),
          (o = h(d, 'META', { property: !0, content: !0 })),
          (_ = h(d, 'META', { property: !0, content: !0 })),
          (L = de(d)),
          (q = J()),
          (j = de(d)),
          (G = J()),
          d.forEach(c),
          this.h();
      },
      h() {
        e(t, 'lang', r[5]),
          e(a, 'name', 'description'),
          e(a, 'content', r[1]),
          e(s, 'rel', 'canonical'),
          e(s, 'href', r[7]),
          e(i, 'rel', 'shortcut icon'),
          e(i, 'type', 'image/x-icon'),
          e(
            i,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon.ico'
          ),
          e(f, 'rel', 'icon'),
          e(f, 'type', 'image/png'),
          e(
            f,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-16x16.png'
          ),
          e(f, 'sizes', '16x16'),
          e(p, 'rel', 'icon'),
          e(p, 'type', 'image/png'),
          e(
            p,
            'href',
            'https://s1.reutersmedia.net/resources_v2/images/favicon/favicon-32x32.png'
          ),
          e(p, 'sizes', '32x32'),
          e(b, 'rel', 'icon'),
          e(b, 'type', 'image/png'),
          e(
            b,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-96x96.png'
          ),
          e(b, 'sizes', '96x96'),
          e(T, 'property', 'og:url'),
          e(T, 'content', r[7]),
          e(y, 'property', 'og:type'),
          e(y, 'content', 'article'),
          e(v, 'property', 'og:title'),
          e(v, 'content', r[2]),
          e(v, 'itemprop', 'name'),
          e(w, 'property', 'og:description'),
          e(w, 'content', r[3]),
          e(w, 'itemprop', 'description'),
          e(A, 'property', 'og:image'),
          e(A, 'content', (I = K(r[4]))),
          e(A, 'itemprop', 'image'),
          e(g, 'property', 'og:site_name'),
          e(g, 'content', 'Reuters'),
          e(N, 'name', 'twitter:card'),
          e(N, 'content', 'summary_large_image'),
          e(M, 'name', 'twitter:site'),
          e(M, 'content', '@ReutersGraphics'),
          e(R, 'name', 'twitter:creator'),
          e(R, 'content', '@ReutersGraphics'),
          e(H, 'name', 'twitter:domain'),
          e(H, 'content', (F = `https://${r[6]}`)),
          e(O, 'name', 'twitter:title'),
          e(O, 'content', r[2]),
          e(C, 'name', 'twitter:description'),
          e(C, 'content', r[3]),
          e(E, 'name', 'twitter:image:src'),
          e(E, 'content', (P = K(r[4]))),
          e(k, 'property', 'fb:app_id'),
          e(k, 'content', '319194411438328'),
          e(l, 'property', 'fb:admins'),
          e(l, 'content', '616167736'),
          e(o, 'property', 'fb:admins'),
          e(o, 'content', '625796953'),
          e(_, 'property', 'fb:admins'),
          e(_, 'content', '571759798'),
          (L.a = q),
          (j.a = G);
      },
      m(S, d) {
        u(document.head, t),
          u(document.head, a),
          u(document.head, s),
          u(document.head, i),
          u(document.head, f),
          u(document.head, p),
          u(document.head, b),
          u(document.head, T),
          u(document.head, y),
          u(document.head, v),
          u(document.head, w),
          u(document.head, A),
          u(document.head, g),
          u(document.head, N),
          u(document.head, M),
          u(document.head, R),
          u(document.head, H),
          u(document.head, O),
          u(document.head, C),
          u(document.head, E),
          u(document.head, k),
          u(document.head, l),
          u(document.head, o),
          u(document.head, _),
          L.m(x, document.head),
          u(document.head, q),
          j.m(B, document.head),
          u(document.head, G);
      },
      p(S, [d]) {
        d & 32 && e(t, 'lang', S[5]),
          d & 1 && n !== (n = S[0]) && (document.title = n),
          d & 2 && e(a, 'content', S[1]),
          d & 4 && e(v, 'content', S[2]),
          d & 8 && e(w, 'content', S[3]),
          d & 16 && I !== (I = K(S[4])) && e(A, 'content', I),
          d & 64 && F !== (F = `https://${S[6]}`) && e(H, 'content', F),
          d & 4 && e(O, 'content', S[2]),
          d & 8 && e(C, 'content', S[3]),
          d & 16 && P !== (P = K(S[4])) && e(E, 'content', P);
      },
      i: se,
      o: se,
      d(S) {
        c(t),
          c(a),
          c(s),
          c(i),
          c(f),
          c(p),
          c(b),
          c(T),
          c(y),
          c(v),
          c(w),
          c(A),
          c(g),
          c(N),
          c(M),
          c(R),
          c(H),
          c(O),
          c(C),
          c(E),
          c(k),
          c(l),
          c(o),
          c(_),
          c(q),
          S && L.d(),
          c(G),
          S && j.d();
      },
    }
  );
}
function We(r, t, n) {
  let a;
  we(r, ze, (g) => n(10, (a = g)));
  let { seoTitle: s } = t,
    { seoDescription: i } = t,
    { shareTitle: f } = t,
    { shareDescription: p } = t,
    { shareImgPath: b } = t,
    { lang: T = 'en' } = t,
    { hostname: y = 'graphics.reuters.com' } = t;
  const v = (g) => {
      try {
        return new URL(g);
      } catch {
        return {};
      }
    },
    w = U(z, 'homepage')
      ? W(v(z.homepage).origin, a.url.pathname, { trailingSlash: !0 })
      : U(z, 'reuters.preview')
      ? W(v(z.reuters.preview).origin, a.url.pathname, { trailingSlash: !0 })
      : a.host
      ? W('https://' + a.host, a.url.pathname, { trailingSlash: !0 })
      : `https://${y}`;
  window.location.host === 'graphics.reuters.com' && (Ve(w, s), Ke());
  const A = {
      '@context': 'http://schema.org',
      '@type': 'NewsMediaOrganization',
      '@id': 'https://www.reuters.com/#publisher',
      name: 'Reuters',
      logo: {
        '@type': 'ImageObject',
        url: 'https://s3.reutersmedia.net/resources_v2/images/reuters_social_logo.png',
        width: '200',
        height: '200',
      },
      url: 'https://www.reuters.com/',
    },
    I = {
      '@context': 'http://schema.org',
      '@type': 'NewsArticle',
      headline: s,
      url: w,
      mainEntityOfPage: { '@type': 'WebPage', '@id': w },
      thumbnailUrl: K(b),
      image: [
        { '@context': 'http://schema.org', '@type': 'ImageObject', url: K(b) },
      ],
      publisher: { '@id': 'https://www.reuters.com/#publisher' },
      copyrightHolder: { '@id': 'https://www.reuters.com/#publisher' },
      sourceOrganization: { '@id': 'https://www.reuters.com/#publisher' },
      copyrightYear: new Date().getFullYear(),
      dateCreated: U(z, 'reuters.graphic.published'),
      datePublished: U(z, 'reuters.graphic.published'),
      dateModified: U(z, 'reuters.graphic.updated'),
      author: U(z, 'reuters.graphic.authors', []).map(
        ({ name: g, url: N }) => ({ '@type': 'Person', name: g, url: N })
      ),
      articleSection: 'Graphics',
      isAccessibleForFree: !0,
      creator: ['Reuters Graphics'],
      keywords: ['Reuters graphics', 'Reuters', 'graphics', 'Interactives'],
    };
  return (
    (r.$$set = (g) => {
      'seoTitle' in g && n(0, (s = g.seoTitle)),
        'seoDescription' in g && n(1, (i = g.seoDescription)),
        'shareTitle' in g && n(2, (f = g.shareTitle)),
        'shareDescription' in g && n(3, (p = g.shareDescription)),
        'shareImgPath' in g && n(4, (b = g.shareImgPath)),
        'lang' in g && n(5, (T = g.lang)),
        'hostname' in g && n(6, (y = g.hostname));
    }),
    [s, i, f, p, b, T, y, w, A, I]
  );
}
class nt extends oe {
  constructor(t) {
    super();
    ce(this, t, We, Ye, ue, {
      seoTitle: 0,
      seoDescription: 1,
      shareTitle: 2,
      shareDescription: 3,
      shareImgPath: 4,
      lang: 5,
      hostname: 6,
    });
  }
}
function Qe(r) {
  let t, n, a, s, i, f, p, b;
  const T = r[1].default,
    y = Te(T, r, r[0], null);
  return {
    c() {
      (t = m('nav')),
        (n = m('div')),
        (a = m('a')),
        (s = m('figure')),
        (i = m('img')),
        (p = V()),
        y && y.c(),
        this.h();
    },
    l(v) {
      t = h(v, 'NAV', { class: !0 });
      var w = D(t);
      n = h(w, 'DIV', { class: !0 });
      var A = D(n);
      a = h(A, 'A', { href: !0 });
      var I = D(a);
      s = h(I, 'FIGURE', { class: !0 });
      var g = D(s);
      (i = h(g, 'IMG', { class: !0, src: !0, alt: !0 })),
        g.forEach(c),
        I.forEach(c),
        A.forEach(c),
        (p = $(w)),
        y && y.l(w),
        w.forEach(c),
        this.h();
    },
    h() {
      e(i, 'class', 'logo reuters-graphics'),
        Ee(
          i.src,
          (f =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg')
        ) || e(i, 'src', f),
        e(i, 'alt', 'Reuters graphics logo'),
        e(s, 'class', 'navbar-brand'),
        e(a, 'href', `${Z}/`),
        e(n, 'class', 'logo-container'),
        e(t, 'class', 'nav svelte-ca3v86');
    },
    m(v, w) {
      Y(v, t, w),
        u(t, n),
        u(n, a),
        u(a, s),
        u(s, i),
        u(t, p),
        y && y.m(t, null),
        (b = !0);
    },
    p(v, [w]) {
      y &&
        y.p &&
        (!b || w & 1) &&
        ke(y, T, v, v[0], b ? Ie(T, v[0], w, null) : Ae(v[0]), null);
    },
    i(v) {
      b || (Q(y, v), (b = !0));
    },
    o(v) {
      X(y, v), (b = !1);
    },
    d(v) {
      v && c(t), y && y.d(v);
    },
  };
}
function Xe(r, t, n) {
  let { $$slots: a = {}, $$scope: s } = t;
  return (
    (r.$$set = (i) => {
      '$$scope' in i && n(0, (s = i.$$scope));
    }),
    [s, a]
  );
}
class at extends oe {
  constructor(t) {
    super();
    ce(this, t, Xe, Qe, ue, {});
  }
}
function he(r, t, n) {
  const a = r.slice();
  return (a[4] = t[n]), a;
}
function ge(r) {
  let t, n, a;
  return {
    c() {
      (t = m('div')), this.h();
    },
    l(s) {
      t = h(s, 'DIV', { id: !0, class: !0 });
      var i = D(t);
      i.forEach(c), this.h();
    },
    h() {
      e(t, 'id', 'overlay'), e(t, 'class', 'svelte-253v2x');
    },
    m(s, i) {
      Y(s, t, i), n || ((a = _e(t, 'click', r[2])), (n = !0));
    },
    p: se,
    d(s) {
      s && c(t), (n = !1), a();
    },
  };
}
function fe(r) {
  let t,
    n,
    a = r[4].title + '',
    s,
    i;
  return {
    c() {
      (t = m('a')), (n = m('li')), (s = ie(a)), this.h();
    },
    l(f) {
      t = h(f, 'A', { href: !0, class: !0 });
      var p = D(t);
      n = h(p, 'LI', { class: !0 });
      var b = D(n);
      (s = le(b, a)), b.forEach(c), p.forEach(c), this.h();
    },
    h() {
      e(n, 'class', 'svelte-253v2x'),
        e(t, 'href', (i = `${Z}/components/${r[4].slug}/`)),
        e(t, 'class', 'svelte-253v2x');
    },
    m(f, p) {
      Y(f, t, p), u(t, n), u(n, s);
    },
    p(f, p) {
      p & 1 && a !== (a = f[4].title + '') && Re(s, a),
        p & 1 && i !== (i = `${Z}/components/${f[4].slug}/`) && e(t, 'href', i);
    },
    d(f) {
      f && c(t);
    },
  };
}
function ve(r) {
  let t,
    n = r[4].title && r[4].slug && fe(r);
  return {
    c() {
      n && n.c(), (t = J());
    },
    l(a) {
      n && n.l(a), (t = J());
    },
    m(a, s) {
      n && n.m(a, s), Y(a, t, s);
    },
    p(a, s) {
      a[4].title && a[4].slug
        ? n
          ? n.p(a, s)
          : ((n = fe(a)), n.c(), n.m(t.parentNode, t))
        : n && (n.d(1), (n = null));
    },
    d(a) {
      n && n.d(a), a && c(t);
    },
  };
}
function Ze(r) {
  let t,
    n,
    a,
    s,
    i,
    f,
    p,
    b,
    T,
    y,
    v,
    w,
    A,
    I,
    g,
    N,
    M,
    R,
    H,
    F,
    O,
    C,
    E = r[1] && ge(r);
  (i = new ee({ props: { fw: !0, size: 'md', icon: Se.faCog } })),
    (y = new ee({ props: { fw: !0, icon: Le.faHome } })),
    (g = new ee({ props: { fw: !0, icon: Me.faGithubAlt } }));
  let P = r[0],
    k = [];
  for (let l = 0; l < P.length; l += 1) k[l] = ve(he(r, P, l));
  return {
    c() {
      E && E.c(),
        (t = V()),
        (n = m('nav')),
        (a = m('div')),
        (s = m('button')),
        te(i.$$.fragment),
        (f = V()),
        (p = m('ul')),
        (b = m('li')),
        (T = m('a')),
        te(y.$$.fragment),
        (v = ie(' Home')),
        (w = V()),
        (A = m('li')),
        (I = m('a')),
        te(g.$$.fragment),
        (N = ie(' Repo')),
        (M = V()),
        (R = m('hr')),
        (H = V());
      for (let l = 0; l < k.length; l += 1) k[l].c();
      this.h();
    },
    l(l) {
      E && E.l(l), (t = $(l)), (n = h(l, 'NAV', { class: !0 }));
      var o = D(n);
      a = h(o, 'DIV', { class: !0 });
      var _ = D(a);
      s = h(_, 'BUTTON', { class: !0 });
      var L = D(s);
      re(i.$$.fragment, L),
        L.forEach(c),
        (f = $(_)),
        (p = h(_, 'UL', { class: !0 }));
      var x = D(p);
      b = h(x, 'LI', { class: !0 });
      var q = D(b);
      T = h(q, 'A', { href: !0, rel: !0, class: !0 });
      var j = D(T);
      re(y.$$.fragment, j),
        (v = le(j, ' Home')),
        j.forEach(c),
        q.forEach(c),
        (w = $(x)),
        (A = h(x, 'LI', { class: !0 }));
      var B = D(A);
      I = h(B, 'A', { href: !0, rel: !0, class: !0 });
      var G = D(I);
      re(g.$$.fragment, G),
        (N = le(G, ' Repo')),
        G.forEach(c),
        B.forEach(c),
        (M = $(x)),
        (R = h(x, 'HR', { class: !0 })),
        (H = $(x));
      for (let S = 0; S < k.length; S += 1) k[S].l(x);
      x.forEach(c), _.forEach(c), o.forEach(c), this.h();
    },
    h() {
      e(s, 'class', 'svelte-253v2x'),
        e(T, 'href', `${Z}/`),
        e(T, 'rel', 'external'),
        e(T, 'class', 'svelte-253v2x'),
        e(b, 'class', 'stationary svelte-253v2x'),
        e(
          I,
          'href',
          'https://github.com/reuters-graphics/graphics-svelte-components'
        ),
        e(I, 'rel', 'external'),
        e(I, 'class', 'svelte-253v2x'),
        e(A, 'class', 'stationary svelte-253v2x'),
        e(R, 'class', 'svelte-253v2x'),
        e(p, 'class', 'svelte-253v2x'),
        e(a, 'class', 'nav-container svelte-253v2x'),
        e(n, 'class', 'svelte-253v2x'),
        me(n, 'open', r[1]);
    },
    m(l, o) {
      E && E.m(l, o),
        Y(l, t, o),
        Y(l, n, o),
        u(n, a),
        u(a, s),
        ne(i, s, null),
        u(a, f),
        u(a, p),
        u(p, b),
        u(b, T),
        ne(y, T, null),
        u(T, v),
        u(p, w),
        u(p, A),
        u(A, I),
        ne(g, I, null),
        u(I, N),
        u(p, M),
        u(p, R),
        u(p, H);
      for (let _ = 0; _ < k.length; _ += 1) k[_].m(p, null);
      (F = !0), O || ((C = _e(s, 'click', r[3])), (O = !0));
    },
    p(l, [o]) {
      if (
        (l[1]
          ? E
            ? E.p(l, o)
            : ((E = ge(l)), E.c(), E.m(t.parentNode, t))
          : E && (E.d(1), (E = null)),
        o & 1)
      ) {
        P = l[0];
        let _;
        for (_ = 0; _ < P.length; _ += 1) {
          const L = he(l, P, _);
          k[_] ? k[_].p(L, o) : ((k[_] = ve(L)), k[_].c(), k[_].m(p, null));
        }
        for (; _ < k.length; _ += 1) k[_].d(1);
        k.length = P.length;
      }
      o & 2 && me(n, 'open', l[1]);
    },
    i(l) {
      F ||
        (Q(i.$$.fragment, l),
        Q(y.$$.fragment, l),
        Q(g.$$.fragment, l),
        (F = !0));
    },
    o(l) {
      X(i.$$.fragment, l), X(y.$$.fragment, l), X(g.$$.fragment, l), (F = !1);
    },
    d(l) {
      E && E.d(l),
        l && c(t),
        l && c(n),
        ae(i),
        ae(y),
        ae(g),
        De(k, l),
        (O = !1),
        C();
    },
  };
}
function et(r, t, n) {
  let { components: a = [] } = t,
    s = !1;
  const i = () => {
      n(1, (s = !1));
    },
    f = () => {
      n(1, (s = !s));
    };
  return (
    (r.$$set = (p) => {
      'components' in p && n(0, (a = p.components));
    }),
    [a, s, i, f]
  );
}
class st extends oe {
  constructor(t) {
    super();
    ce(this, t, et, Ze, ue, { components: 0 });
  }
}
var it = [
  {
    title: 'Ai2svelte',
    description: 'A shortcut for ai2svelte graphics.',
    slug: 'ai2svelte',
    path: 'Ai2svelte',
  },
  {
    title: 'BeforeAfter',
    description: 'A before and after image comparison component.',
    slug: 'before-after',
    path: 'BeforeAfter',
  },
  {
    title: 'BodyText',
    description: 'Parse mardown-formatted text.',
    slug: 'body-text',
    path: 'BodyText',
  },
  {
    title: 'DatawrapperChart',
    description: 'Easily add a responsive Datawrapper embed on your page.',
    slug: 'datawrapper-chart',
    path: 'DatawrapperChart',
  },
  {
    title: 'EmbedPreviewerLink',
    description: 'An embed tool for development in graphics-kit.',
    slug: 'embed-previewer-link',
    path: 'EmbedPreviewerLink',
  },
  {
    title: 'EndNotes',
    description: 'End notes section.',
    slug: 'end-notes',
    path: 'EndNotes',
  },
  {
    title: 'Footer',
    description: 'Add a bottom footer bar to the page.',
    slug: 'footer',
    path: 'Footer',
  },
  {
    title: 'Framer',
    description: 'An embed tool for development in the graphics kit.',
    slug: 'framer',
    path: 'Framer',
  },
  {
    title: 'Headline',
    description: 'Titles & bylines & datelines, oh my!',
    slug: 'headline',
    path: 'Headline',
  },
  {
    title: 'Hero',
    description: 'A headline over a hero image',
    slug: 'hero',
    path: 'Hero',
  },
  {
    title: 'Image',
    description: 'A full-width image inside the text well.',
    slug: 'image',
    path: 'Image',
  },
  {
    title: 'LottieScroller',
    description: 'Easy scrolly-telling with lottie',
    slug: 'lottie-scroller',
    path: 'LottieScroller',
  },
  {
    title: 'Nav',
    description: 'Add a top-level nav bar to the page.',
    slug: 'nav',
    path: 'Nav',
  },
  {
    title: 'PymChild',
    description: 'A Pym.js child instance for embeddables.',
    slug: 'pym-child',
    path: 'PymChild',
  },
  {
    title: 'Referrals',
    description: 'Add a referrals bar with recent graphics stories.',
    slug: 'referrals',
    path: 'Referrals',
  },
  {
    title: 'Scroller',
    description: 'Easy scrollytelling with layout options.',
    slug: 'scroller',
    path: 'Scroller',
  },
  {
    title: 'SEO',
    description: 'Add SEO to the page.',
    slug: 'seo',
    path: 'SEO',
  },
  {
    title: 'Sharer',
    description: 'Add share tools to a page.',
    slug: 'sharer',
    path: 'Sharer',
  },
];
export { st as M, at as N, nt as S, it as c, K as g };
