import {
  M as e,
  N as t,
  S as n,
  i as s,
  s as a,
  e as r,
  O as o,
  l as i,
  P as c,
  c as l,
  a as p,
  d,
  Q as h,
  b as m,
  H as u,
  I as g,
  R as v,
  T as f,
  D as y,
  k as b,
  n as w,
  U as E,
  f as T,
  E as $,
  F as A,
  G as x,
  x as I,
  u as k,
  V as S,
  J as M,
  K as L,
  W as N,
  X as R,
  t as j,
  g as D,
  h as _,
  j as H,
  m as P,
  Y as F,
  o as G,
  v as V,
  L as K,
} from './vendor-927c0fc0.js';
import { a as q, b as z } from './paths-6758d194.js';
const B = (t = '') => e(q, t);
var O = {
  name: '@reuters-graphics/graphics-svelte-components',
  version: '0.1.39',
  type: 'module',
  private: !1,
  homepage: 'https://reuters-graphics.github.io/graphics-svelte-components',
  repository: 'https://github.com/reuters-graphics/graphics-svelte-components',
  scripts: {
    start: 'svelte-kit dev --open',
    package: 'svelte-kit package && svelte-kit build && npm run build:commit',
    'build:commit':
      'git add . && git commit -m build && git push origin master',
    postinstall: 'husky install',
    release: 'npm run package && npm publish dist',
    postversion:
      'git push origin master && git push origin master --tags && npm run release',
    prepublishOnly: 'echo "Did you mean to run \'yarn release\'?" && exit 1',
  },
  'lint-staged': {
    '*.js': 'eslint --cache --fix',
    '*.{js,css,md,svelte}': 'prettier --write',
  },
  devDependencies: {
    '@reuters-graphics/eslint-config': '^0.0.2',
    '@reuters-graphics/graphics-bin': '^0.0.17',
    '@reuters-graphics/graphics-kit-publisher': '^0.1.1',
    '@rollup/plugin-dsv': '^2.0.1',
    '@sveltejs/adapter-static': '1.0.0-next.19',
    '@sveltejs/kit': '1.0.0-next.169',
    autoprefixer: '^10.2.5',
    eslint: '^7.24.0',
    'eslint-plugin-svelte3': '^3.2.0',
    'front-matter': '^4.0.2',
    glob: '^7.1.6',
    husky: '>=6',
    'lint-staged': '>=10',
    mdsvex: '^0.9.8',
    'npm-run-all': '^4.1.5',
    prettier: '^2.3.2',
    'prettier-plugin-svelte': '^2.4.0',
    sass: '^1.0.0',
    svelte: '^3.42.5',
    'svelte-preprocess': '^4.9.4',
    vite: '^2.5.8',
  },
  engines: { node: '>= 14.16.0' },
  dependencies: {
    '@fortawesome/free-brands-svg-icons': '^5.15.4',
    '@fortawesome/free-regular-svg-icons': '^5.15.3',
    '@fortawesome/free-solid-svg-icons': '^5.15.3',
    '@reuters-graphics/style-theme-eisbaer': '^0.3.5',
    '@sveltejs/svelte-scroller': '^2.0.7',
    classnames: '^2.3.1',
    lodash: '^4.17.21',
    'lodash-es': '^4.17.21',
    'lottie-web': '^5.7.13',
    'prop-types': '^15.7.2',
    'proper-url-join': '^2.1.1',
    'pym.js': '^1.3.2',
    'svelte-fa': '^2.2.0',
    'svelte-i18n': '^3.3.9',
    'svelte-markdown': '^0.1.5',
    'ua-parser-js': '^0.7.27',
  },
};
const C = {
  subscribe: (e) =>
    (() => {
      const e = t('__svelte__');
      return {
        page: { subscribe: e.page.subscribe },
        navigating: { subscribe: e.navigating.subscribe },
        get preloading() {
          return (
            console.error(
              'stores.preloading is deprecated; use stores.navigating instead'
            ),
            { subscribe: e.navigating.subscribe }
          );
        },
        session: e.session,
      };
    })().page.subscribe(e),
};
var U = (e, t) => {
  var n, s, a, r, o, i, c;
  (n = window),
    (s = document),
    (a = 'script'),
    (r = 'https://www.google-analytics.com/analytics.js'),
    (o = 'ga'),
    (n.GoogleAnalyticsObject = o),
    (n[o] =
      n[o] ||
      function () {
        (n[o].q = n[o].q || []).push(arguments);
      }),
    (n[o].l = 1 * new Date()),
    (i = s.createElement(a)),
    (c = s.getElementsByTagName(a)[0]),
    (i.async = 1),
    (i.src = r),
    c.parentNode.insertBefore(i, c),
    window.ga('create', 'UA-41619329-3', { cookieDomain: 'auto' }),
    window.ga('require', 'linkid', 'linkid.js'),
    window.ga('send', 'pageview', { page: e, title: t }),
    (function () {
      try {
        return window.self !== window.top;
      } catch (e) {
        return !0;
      }
    })() || W.init({ reportInterval: 30 });
};
var W = (function () {
  var e,
    t,
    n,
    s,
    a,
    r,
    o,
    i,
    c = !1,
    l = !1,
    p = !1,
    d = 0,
    h = new Date(),
    m = null,
    u = null;
  function g(e, t) {
    var n,
      s,
      a,
      r = null,
      o = 0,
      i = function () {
        (o = new Date()), (r = null), (a = e.apply(n, s));
      };
    return function () {
      var c = new Date();
      o || (o = c);
      var l = t - (c - o);
      return (
        (n = this),
        (s = arguments),
        l <= 0
          ? (clearTimeout(r), (r = null), (o = c), (a = e.apply(n, s)))
          : r || (r = setTimeout(i, l)),
        a
      );
    };
  }
  function v(e, t, n) {
    e.addEventListener
      ? e.addEventListener(t, n, !1)
      : e.attachEvent
      ? e.attachEvent('on' + t, n)
      : (e['on' + t] = n);
  }
  function f() {
    clearTimeout(u), (l = !0), clearTimeout(m);
  }
  function y() {
    (document.hidden || document.webkitHidden) && f();
  }
  function b() {
    (d += 1) > 0 && d % n == 0 && e(d);
  }
  function w() {
    var e;
    p ||
      (c || ((e = new Date()), (c = !0), t(e - h), (m = setInterval(b, 1e3))),
      l && ((l = !1), clearTimeout(m), (m = setInterval(b, 1e3))),
      clearTimeout(u),
      (u = setTimeout(f, 1e3 * s + 100)));
  }
  return (
    (t = function (e) {
      i
        ? dataLayer.push({
            event: 'RivetedTiming',
            eventCategory: 'Riveted',
            timingVar: 'First Interaction',
            timingValue: e,
          })
        : (r && ga('send', 'timing', 'Riveted', 'First Interaction', e),
          o &&
            _gaq.push([
              '_trackTiming',
              'Riveted',
              'First Interaction',
              e,
              null,
              100,
            ]));
    }),
    (e = function (e) {
      i
        ? dataLayer.push({
            event: 'Riveted',
            eventCategory: 'Riveted',
            eventAction: 'Time Spent',
            eventLabel: e,
            eventValue: n,
            eventNonInteraction: a,
          })
        : (r &&
            ga('send', 'event', 'Riveted', 'Time Spent', e.toString(), n, {
              nonInteraction: a,
            }),
          o &&
            _gaq.push([
              '_trackEvent',
              'Riveted',
              'Time Spent',
              e.toString(),
              n,
              a,
            ]));
    }),
    {
      init: function (c) {
        'function' == typeof ga && (r = !0),
          'undefined' != typeof _gaq &&
            'function' == typeof _gaq.push &&
            (o = !0),
          'undefined' != typeof dataLayer &&
            'function' == typeof dataLayer.push &&
            (i = !0),
          (c = c || {}),
          (n = parseInt(c.reportInterval, 10) || 5),
          (s = parseInt(c.idleTimeout, 10) || 30),
          'function' == typeof c.eventHandler && (e = c.eventHandler),
          'function' == typeof c.userTimingHandler && (t = c.userTimingHandler),
          (a =
            !('nonInteraction' in c) ||
            (!1 !== c.nonInteraction && 'false' !== c.nonInteraction)),
          v(document, 'keydown', w),
          v(document, 'click', w),
          v(window, 'mousemove', g(w, 500)),
          v(window, 'scroll', g(w, 500)),
          v(document, 'visibilitychange', y),
          v(document, 'webkitvisibilitychange', y);
      },
      trigger: w,
      setIdle: f,
      on: function () {
        p = !1;
      },
      off: function () {
        f(), (p = !0);
      },
    }
  );
})();
function J(e) {
  let t,
    n,
    s,
    a,
    v,
    f,
    y,
    b,
    w,
    E,
    T,
    $,
    A,
    x,
    I,
    k,
    S,
    M,
    L,
    N,
    R,
    j,
    D,
    _,
    H,
    P,
    F,
    G,
    V,
    K,
    q,
    z;
  return (
    (document.title = n = e[0]),
    {
      c() {
        (t = r('html')),
          (s = r('meta')),
          (a = r('link')),
          (v = r('link')),
          (f = r('link')),
          (y = r('link')),
          (b = r('link')),
          (w = r('meta')),
          (E = r('meta')),
          (T = r('meta')),
          ($ = r('meta')),
          (A = r('meta')),
          (I = r('meta')),
          (k = r('meta')),
          (S = r('meta')),
          (M = r('meta')),
          (L = r('meta')),
          (R = r('meta')),
          (j = r('meta')),
          (D = r('meta')),
          (H = r('meta')),
          (P = r('meta')),
          (F = r('meta')),
          (G = r('meta')),
          (V = new o()),
          (K = i()),
          (q = new o()),
          (z = i()),
          this.h();
      },
      l(e) {
        const n = c('[data-svelte="svelte-157iplb"]', document.head);
        (t = l(n, 'HTML', { lang: !0 })),
          p(t).forEach(d),
          (s = l(n, 'META', { name: !0, content: !0 })),
          (a = l(n, 'LINK', { rel: !0, href: !0 })),
          (v = l(n, 'LINK', { rel: !0, type: !0, href: !0 })),
          (f = l(n, 'LINK', { rel: !0, type: !0, href: !0, sizes: !0 })),
          (y = l(n, 'LINK', { rel: !0, type: !0, href: !0, sizes: !0 })),
          (b = l(n, 'LINK', { rel: !0, type: !0, href: !0, sizes: !0 })),
          (w = l(n, 'META', { property: !0, content: !0 })),
          (E = l(n, 'META', { property: !0, content: !0 })),
          (T = l(n, 'META', { property: !0, content: !0, itemprop: !0 })),
          ($ = l(n, 'META', { property: !0, content: !0, itemprop: !0 })),
          (A = l(n, 'META', { property: !0, content: !0, itemprop: !0 })),
          (I = l(n, 'META', { property: !0, content: !0 })),
          (k = l(n, 'META', { name: !0, content: !0 })),
          (S = l(n, 'META', { name: !0, content: !0 })),
          (M = l(n, 'META', { name: !0, content: !0 })),
          (L = l(n, 'META', { name: !0, content: !0 })),
          (R = l(n, 'META', { name: !0, content: !0 })),
          (j = l(n, 'META', { name: !0, content: !0 })),
          (D = l(n, 'META', { name: !0, content: !0 })),
          (H = l(n, 'META', { property: !0, content: !0 })),
          (P = l(n, 'META', { property: !0, content: !0 })),
          (F = l(n, 'META', { property: !0, content: !0 })),
          (G = l(n, 'META', { property: !0, content: !0 })),
          (V = h(n)),
          (K = i()),
          (q = h(n)),
          (z = i()),
          n.forEach(d),
          this.h();
      },
      h() {
        m(t, 'lang', e[5]),
          m(s, 'name', 'description'),
          m(s, 'content', e[1]),
          m(a, 'rel', 'canonical'),
          m(a, 'href', e[7]),
          m(v, 'rel', 'shortcut icon'),
          m(v, 'type', 'image/x-icon'),
          m(
            v,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon.ico'
          ),
          m(f, 'rel', 'icon'),
          m(f, 'type', 'image/png'),
          m(
            f,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-16x16.png'
          ),
          m(f, 'sizes', '16x16'),
          m(y, 'rel', 'icon'),
          m(y, 'type', 'image/png'),
          m(
            y,
            'href',
            'https://s1.reutersmedia.net/resources_v2/images/favicon/favicon-32x32.png'
          ),
          m(y, 'sizes', '32x32'),
          m(b, 'rel', 'icon'),
          m(b, 'type', 'image/png'),
          m(
            b,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-96x96.png'
          ),
          m(b, 'sizes', '96x96'),
          m(w, 'property', 'og:url'),
          m(w, 'content', e[7]),
          m(E, 'property', 'og:type'),
          m(E, 'content', 'article'),
          m(T, 'property', 'og:title'),
          m(T, 'content', e[2]),
          m(T, 'itemprop', 'name'),
          m($, 'property', 'og:description'),
          m($, 'content', e[3]),
          m($, 'itemprop', 'description'),
          m(A, 'property', 'og:image'),
          m(A, 'content', (x = B(e[4]))),
          m(A, 'itemprop', 'image'),
          m(I, 'property', 'og:site_name'),
          m(I, 'content', 'Reuters'),
          m(k, 'name', 'twitter:card'),
          m(k, 'content', 'summary_large_image'),
          m(S, 'name', 'twitter:site'),
          m(S, 'content', '@ReutersGraphics'),
          m(M, 'name', 'twitter:creator'),
          m(M, 'content', '@ReutersGraphics'),
          m(L, 'name', 'twitter:domain'),
          m(L, 'content', (N = `https://${e[6]}`)),
          m(R, 'name', 'twitter:title'),
          m(R, 'content', e[2]),
          m(j, 'name', 'twitter:description'),
          m(j, 'content', e[3]),
          m(D, 'name', 'twitter:image:src'),
          m(D, 'content', (_ = B(e[4]))),
          m(H, 'property', 'fb:app_id'),
          m(H, 'content', '319194411438328'),
          m(P, 'property', 'fb:admins'),
          m(P, 'content', '616167736'),
          m(F, 'property', 'fb:admins'),
          m(F, 'content', '625796953'),
          m(G, 'property', 'fb:admins'),
          m(G, 'content', '571759798'),
          (V.a = K),
          (q.a = z);
      },
      m(e, n) {
        u(document.head, t),
          u(document.head, s),
          u(document.head, a),
          u(document.head, v),
          u(document.head, f),
          u(document.head, y),
          u(document.head, b),
          u(document.head, w),
          u(document.head, E),
          u(document.head, T),
          u(document.head, $),
          u(document.head, A),
          u(document.head, I),
          u(document.head, k),
          u(document.head, S),
          u(document.head, M),
          u(document.head, L),
          u(document.head, R),
          u(document.head, j),
          u(document.head, D),
          u(document.head, H),
          u(document.head, P),
          u(document.head, F),
          u(document.head, G),
          V.m(
            '<script type="application/ld+json" ✂prettier:content✂="JyArIEpTT04uc3RyaW5naWZ5KG9yZ0xkSnNvbikgKyAn" ✂prettier:content✂="e30=">{}</script>',
            document.head
          ),
          u(document.head, K),
          q.m(
            '<script type="application/ld+json" ✂prettier:content✂="JyArIEpTT04uc3RyaW5naWZ5KGFydGljbGVMZEpzb24pICsgJw==" ✂prettier:content✂="e30=">{}</script>',
            document.head
          ),
          u(document.head, z);
      },
      p(e, [a]) {
        32 & a && m(t, 'lang', e[5]),
          1 & a && n !== (n = e[0]) && (document.title = n),
          2 & a && m(s, 'content', e[1]),
          4 & a && m(T, 'content', e[2]),
          8 & a && m($, 'content', e[3]),
          16 & a && x !== (x = B(e[4])) && m(A, 'content', x),
          64 & a && N !== (N = `https://${e[6]}`) && m(L, 'content', N),
          4 & a && m(R, 'content', e[2]),
          8 & a && m(j, 'content', e[3]),
          16 & a && _ !== (_ = B(e[4])) && m(D, 'content', _);
      },
      i: g,
      o: g,
      d(e) {
        d(t),
          d(s),
          d(a),
          d(v),
          d(f),
          d(y),
          d(b),
          d(w),
          d(E),
          d(T),
          d($),
          d(A),
          d(I),
          d(k),
          d(S),
          d(M),
          d(L),
          d(R),
          d(j),
          d(D),
          d(H),
          d(P),
          d(F),
          d(G),
          d(K),
          e && V.d(),
          d(z),
          e && q.d();
      },
    }
  );
}
function Z(t, n, s) {
  let a;
  v(t, C, (e) => s(8, (a = e)));
  let { seoTitle: r } = n,
    { seoDescription: o } = n,
    { shareTitle: i } = n,
    { shareDescription: c } = n,
    { shareImgPath: l } = n,
    { lang: p = 'en' } = n,
    { hostname: d = 'graphics.reuters.com' } = n;
  const h = f(O, 'homepage')
    ? e(O.homepage, a.path, { trailingSlash: !0 })
    : f(O, 'reuters.preview')
    ? e(O.reuters.preview, a.path, { trailingSlash: !0 })
    : a.host
    ? e('https://' + a.host, a.path, { trailingSlash: !0 })
    : `https://${d}`;
  return (
    'graphics.reuters.com' === window.location.host &&
      (U(h, r),
      (() => {
        const e = window.googletag || {};
        (e.cmd = e.cmd || []),
          (function () {
            const e = document.createElement('script');
            (e.async = !0), (e.type = 'text/javascript');
            const t = 'https:' === document.location.protocol;
            e.src =
              (t ? 'https:' : 'http:') +
              '//www.googletagservices.com/tag/js/gpt.js';
            const n = document.getElementsByTagName('script')[0];
            n.parentNode.insertBefore(e, n);
          })(),
          e.cmd.push(function () {
            e
              .defineSlot(
                '/4735792/reuters_investigates',
                [[300, 250]],
                'div-gpt-ad-1441822201033-0'
              )
              .addService(e.pubads()),
              e.pubads().enableSingleRequest(),
              e.enableServices();
          });
      })()),
    B(l),
    B(l),
    new Date().getFullYear(),
    f(O, 'reuters.graphic.published'),
    f(O, 'reuters.graphic.published'),
    f(O, 'reuters.graphic.updated'),
    f(O, 'reuters.graphic.authors', []).map(({ name: e, url: t }) => ({
      '@type': 'Person',
      name: e,
      url: t,
    })),
    (t.$$set = (e) => {
      'seoTitle' in e && s(0, (r = e.seoTitle)),
        'seoDescription' in e && s(1, (o = e.seoDescription)),
        'shareTitle' in e && s(2, (i = e.shareTitle)),
        'shareDescription' in e && s(3, (c = e.shareDescription)),
        'shareImgPath' in e && s(4, (l = e.shareImgPath)),
        'lang' in e && s(5, (p = e.lang)),
        'hostname' in e && s(6, (d = e.hostname));
    }),
    [r, o, i, c, l, p, d, h]
  );
}
class Y extends n {
  constructor(e) {
    super(),
      s(this, e, Z, J, a, {
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
function Q(e) {
  let t, n, s, a, o, i, c, h;
  const g = e[1].default,
    v = y(g, e, e[0], null);
  return {
    c() {
      (t = r('nav')),
        (n = r('div')),
        (s = r('a')),
        (a = r('figure')),
        (o = r('img')),
        (c = b()),
        v && v.c(),
        this.h();
    },
    l(e) {
      t = l(e, 'NAV', { class: !0 });
      var r = p(t);
      n = l(r, 'DIV', { class: !0 });
      var i = p(n);
      s = l(i, 'A', { href: !0 });
      var h = p(s);
      a = l(h, 'FIGURE', { class: !0 });
      var m = p(a);
      (o = l(m, 'IMG', { class: !0, src: !0, alt: !0 })),
        m.forEach(d),
        h.forEach(d),
        i.forEach(d),
        (c = w(r)),
        v && v.l(r),
        r.forEach(d),
        this.h();
    },
    h() {
      m(o, 'class', 'logo reuters-graphics'),
        E(
          o.src,
          (i =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg')
        ) ||
          m(
            o,
            'src',
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg'
          ),
        m(o, 'alt', 'Reuters graphics logo'),
        m(a, 'class', 'navbar-brand'),
        m(s, 'href', `${z}/`),
        m(n, 'class', 'logo-container'),
        m(t, 'class', 'nav svelte-ca3v86');
    },
    m(e, r) {
      T(e, t, r),
        u(t, n),
        u(n, s),
        u(s, a),
        u(a, o),
        u(t, c),
        v && v.m(t, null),
        (h = !0);
    },
    p(e, [t]) {
      v &&
        v.p &&
        (!h || 1 & t) &&
        $(v, g, e, e[0], h ? x(g, e[0], t, null) : A(e[0]), null);
    },
    i(e) {
      h || (I(v, e), (h = !0));
    },
    o(e) {
      k(v, e), (h = !1);
    },
    d(e) {
      e && d(t), v && v.d(e);
    },
  };
}
function X(e, t, n) {
  let { $$slots: s = {}, $$scope: a } = t;
  return (
    (e.$$set = (e) => {
      '$$scope' in e && n(0, (a = e.$$scope));
    }),
    [a, s]
  );
}
class ee extends n {
  constructor(e) {
    super(), s(this, e, X, Q, a, {});
  }
}
function te(e, t, n) {
  const s = e.slice();
  return (s[4] = t[n]), s;
}
function ne(e) {
  let t, n, s;
  return {
    c() {
      (t = r('div')), this.h();
    },
    l(e) {
      (t = l(e, 'DIV', { id: !0, class: !0 })), p(t).forEach(d), this.h();
    },
    h() {
      m(t, 'id', 'overlay'), m(t, 'class', 'svelte-253v2x');
    },
    m(a, r) {
      T(a, t, r), n || ((s = S(t, 'click', e[2])), (n = !0));
    },
    p: g,
    d(e) {
      e && d(t), (n = !1), s();
    },
  };
}
function se(e) {
  let t,
    n,
    s,
    a,
    o = e[4].title + '';
  return {
    c() {
      (t = r('a')), (n = r('li')), (s = j(o)), this.h();
    },
    l(e) {
      t = l(e, 'A', { href: !0, class: !0 });
      var a = p(t);
      n = l(a, 'LI', { class: !0 });
      var r = p(n);
      (s = D(r, o)), r.forEach(d), a.forEach(d), this.h();
    },
    h() {
      m(n, 'class', 'svelte-253v2x'),
        m(t, 'href', (a = `${z}/components/${e[4].slug}/`)),
        m(t, 'class', 'svelte-253v2x');
    },
    m(e, a) {
      T(e, t, a), u(t, n), u(n, s);
    },
    p(e, n) {
      1 & n && o !== (o = e[4].title + '') && _(s, o),
        1 & n && a !== (a = `${z}/components/${e[4].slug}/`) && m(t, 'href', a);
    },
    d(e) {
      e && d(t);
    },
  };
}
function ae(e) {
  let t,
    n = e[4].title && e[4].slug && se(e);
  return {
    c() {
      n && n.c(), (t = i());
    },
    l(e) {
      n && n.l(e), (t = i());
    },
    m(e, s) {
      n && n.m(e, s), T(e, t, s);
    },
    p(e, s) {
      e[4].title && e[4].slug
        ? n
          ? n.p(e, s)
          : ((n = se(e)), n.c(), n.m(t.parentNode, t))
        : n && (n.d(1), (n = null));
    },
    d(e) {
      n && n.d(e), e && d(t);
    },
  };
}
function re(e) {
  let t,
    n,
    s,
    a,
    o,
    i,
    c,
    h,
    g,
    v,
    f,
    y,
    E,
    $,
    A,
    x,
    _,
    q,
    B,
    O,
    C,
    U,
    W = e[1] && ne(e);
  (o = new M({ props: { fw: !0, size: 'md', icon: L.faCog } })),
    (v = new M({ props: { fw: !0, icon: N.faHome } })),
    (A = new M({ props: { fw: !0, icon: R.faGithubAlt } }));
  let J = e[0],
    Z = [];
  for (let r = 0; r < J.length; r += 1) Z[r] = ae(te(e, J, r));
  return {
    c() {
      W && W.c(),
        (t = b()),
        (n = r('nav')),
        (s = r('div')),
        (a = r('button')),
        H(o.$$.fragment),
        (i = b()),
        (c = r('ul')),
        (h = r('li')),
        (g = r('a')),
        H(v.$$.fragment),
        (f = j(' Home')),
        (y = b()),
        (E = r('li')),
        ($ = r('a')),
        H(A.$$.fragment),
        (x = j(' Repo')),
        (_ = b()),
        (q = r('hr')),
        (B = b());
      for (let e = 0; e < Z.length; e += 1) Z[e].c();
      this.h();
    },
    l(e) {
      W && W.l(e), (t = w(e)), (n = l(e, 'NAV', { class: !0 }));
      var r = p(n);
      s = l(r, 'DIV', { class: !0 });
      var m = p(s);
      a = l(m, 'BUTTON', { class: !0 });
      var u = p(a);
      P(o.$$.fragment, u),
        u.forEach(d),
        (i = w(m)),
        (c = l(m, 'UL', { class: !0 }));
      var b = p(c);
      h = l(b, 'LI', { class: !0 });
      var T = p(h);
      g = l(T, 'A', { href: !0, rel: !0, class: !0 });
      var I = p(g);
      P(v.$$.fragment, I),
        (f = D(I, ' Home')),
        I.forEach(d),
        T.forEach(d),
        (y = w(b)),
        (E = l(b, 'LI', { class: !0 }));
      var k = p(E);
      $ = l(k, 'A', { href: !0, rel: !0, class: !0 });
      var S = p($);
      P(A.$$.fragment, S),
        (x = D(S, ' Repo')),
        S.forEach(d),
        k.forEach(d),
        (_ = w(b)),
        (q = l(b, 'HR', { class: !0 })),
        (B = w(b));
      for (let t = 0; t < Z.length; t += 1) Z[t].l(b);
      b.forEach(d), m.forEach(d), r.forEach(d), this.h();
    },
    h() {
      m(a, 'class', 'svelte-253v2x'),
        m(g, 'href', `${z}/`),
        m(g, 'rel', 'external'),
        m(g, 'class', 'svelte-253v2x'),
        m(h, 'class', 'stationary svelte-253v2x'),
        m(
          $,
          'href',
          'https://github.com/reuters-graphics/graphics-svelte-components'
        ),
        m($, 'rel', 'external'),
        m($, 'class', 'svelte-253v2x'),
        m(E, 'class', 'stationary svelte-253v2x'),
        m(q, 'class', 'svelte-253v2x'),
        m(c, 'class', 'svelte-253v2x'),
        m(s, 'class', 'nav-container svelte-253v2x'),
        m(n, 'class', 'svelte-253v2x'),
        F(n, 'open', e[1]);
    },
    m(r, l) {
      W && W.m(r, l),
        T(r, t, l),
        T(r, n, l),
        u(n, s),
        u(s, a),
        G(o, a, null),
        u(s, i),
        u(s, c),
        u(c, h),
        u(h, g),
        G(v, g, null),
        u(g, f),
        u(c, y),
        u(c, E),
        u(E, $),
        G(A, $, null),
        u($, x),
        u(c, _),
        u(c, q),
        u(c, B);
      for (let e = 0; e < Z.length; e += 1) Z[e].m(c, null);
      (O = !0), C || ((U = S(a, 'click', e[3])), (C = !0));
    },
    p(e, [s]) {
      if (
        (e[1]
          ? W
            ? W.p(e, s)
            : ((W = ne(e)), W.c(), W.m(t.parentNode, t))
          : W && (W.d(1), (W = null)),
        1 & s)
      ) {
        let t;
        for (J = e[0], t = 0; t < J.length; t += 1) {
          const n = te(e, J, t);
          Z[t] ? Z[t].p(n, s) : ((Z[t] = ae(n)), Z[t].c(), Z[t].m(c, null));
        }
        for (; t < Z.length; t += 1) Z[t].d(1);
        Z.length = J.length;
      }
      2 & s && F(n, 'open', e[1]);
    },
    i(e) {
      O ||
        (I(o.$$.fragment, e),
        I(v.$$.fragment, e),
        I(A.$$.fragment, e),
        (O = !0));
    },
    o(e) {
      k(o.$$.fragment, e), k(v.$$.fragment, e), k(A.$$.fragment, e), (O = !1);
    },
    d(e) {
      W && W.d(e),
        e && d(t),
        e && d(n),
        V(o),
        V(v),
        V(A),
        K(Z, e),
        (C = !1),
        U();
    },
  };
}
function oe(e, t, n) {
  let { components: s = [] } = t,
    a = !1;
  return (
    (e.$$set = (e) => {
      'components' in e && n(0, (s = e.components));
    }),
    [
      s,
      a,
      () => {
        n(1, (a = !1));
      },
      () => {
        n(1, (a = !a));
      },
    ]
  );
}
class ie extends n {
  constructor(e) {
    super(), s(this, e, oe, re, a, { components: 0 });
  }
}
var ce = [
  {
    title: 'Ai2svelte',
    description: 'A shortcut for ai2svelte graphics.',
    slug: 'ai2svelte',
    path: 'Ai2svelte',
  },
  {
    title: 'BodyText',
    description: 'Parse mardown-formatted text.',
    slug: 'body-text',
    path: 'BodyText',
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
export { ie as M, ee as N, Y as S, ce as c, B as g };
