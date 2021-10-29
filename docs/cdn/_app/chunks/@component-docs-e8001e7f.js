import {
  K as e,
  L as t,
  S as s,
  i as r,
  s as a,
  e as n,
  l as o,
  M as i,
  c,
  a as p,
  d as l,
  N as h,
  b as d,
  F as m,
  G as g,
  O as u,
  P as v,
  Q as y,
  f,
} from './vendor-edfb1eb4.js';
import { a as b, b as w } from './paths-2c73d5fe.js';
const T = (t = '') => e(b, t);
var E = {
  name: '@reuters-graphics/graphics-svelte-components',
  version: '0.0.1',
  type: 'module',
  private: !1,
  homepage: 'https://reuters-graphics.github.io/graphics-svelte-components',
  repository: 'https://github.com/reuters-graphics/graphics-svelte-components',
  scripts: {
    start: 'svelte-kit dev --open',
    build: 'svelte-kit package && svelte-kit build',
    postinstall: 'husky install',
    release: 'yarn build && yarn publish dist',
    prepublishOnly: 'echo "Did you mean to run \'yarn release\'?" && exit 1',
  },
  'lint-staged': {
    '*.js': 'eslint --cache --fix',
    '*.{js,css,md,svelte}': 'prettier --write',
  },
  devDependencies: {
    '@reuters-graphics/eslint-config': '^0.0.2',
    '@reuters-graphics/graphics-bin': '^0.0.17',
    '@reuters-graphics/graphics-kit-publisher': '^0.0.20',
    '@rollup/plugin-dsv': '^2.0.1',
    '@sveltejs/adapter-static': '1.0.0-next.13',
    '@sveltejs/kit': '1.0.0-next.120',
    autoprefixer: '^10.2.5',
    eslint: '^7.24.0',
    'eslint-plugin-svelte3': '^3.2.0',
    'front-matter': '^4.0.2',
    glob: '^7.1.6',
    husky: '>=6',
    'lint-staged': '>=10',
    mdsvex: '^0.9.8',
    'npm-run-all': '^4.1.5',
    prettier: '^2.2.1',
    'prettier-plugin-svelte': '^2.2.0',
    sass: '^1.0.0',
    svelte: '^3.38.3',
    'svelte-preprocess': '^4.7.3',
    vite: '^2.4.1',
  },
  engines: { node: '>= 14.16.0' },
  dependencies: {
    '@fortawesome/free-brands-svg-icons': '^5.15.3',
    '@fortawesome/free-regular-svg-icons': '^5.15.3',
    '@fortawesome/free-solid-svg-icons': '^5.15.3',
    '@reuters-graphics/style-theme-eisbaer': '^0.3.0',
    classnames: '^2.3.1',
    lodash: '^4.17.21',
    'lodash-es': '^4.17.21',
    'prop-types': '^15.7.2',
    'proper-url-join': '^2.1.1',
    'pym.js': '^1.3.2',
    'svelte-fa': '^2.2.0',
    'svelte-i18n': '^3.3.9',
    'svelte-markdown': '^0.1.5',
    'ua-parser-js': '^0.7.27',
  },
};
const A = {
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
var x = { 'reuters-graphics.jpg': { width: 1200, height: 675, size: 100 } };
var M = (e, t) => {
  var s, r, a, n, o, i, c;
  (s = window),
    (r = document),
    (a = 'script'),
    (n = 'https://www.google-analytics.com/analytics.js'),
    (o = 'ga'),
    (s.GoogleAnalyticsObject = o),
    (s[o] =
      s[o] ||
      function () {
        (s[o].q = s[o].q || []).push(arguments);
      }),
    (s[o].l = 1 * new Date()),
    (i = r.createElement(a)),
    (c = r.getElementsByTagName(a)[0]),
    (i.async = 1),
    (i.src = n),
    c.parentNode.insertBefore(i, c),
    window.ga('create', 'UA-41619329-3', { cookieDomain: 'auto' }),
    window.ga('require', 'linkid', 'linkid.js'),
    window.ga('send', 'pageview', { page: e, title: t });
};
function k(e) {
  let t,
    s,
    r,
    a,
    u,
    v,
    f,
    b,
    w,
    E,
    A,
    x,
    M,
    k,
    j,
    I,
    N,
    D,
    _,
    S,
    $,
    G,
    R,
    z,
    K,
    L,
    P,
    B,
    F,
    q,
    W,
    Z;
  return (
    (document.title = s = e[0]),
    {
      c() {
        (t = n('html')),
          (r = n('meta')),
          (a = n('link')),
          (u = n('link')),
          (v = n('link')),
          (f = n('link')),
          (b = n('link')),
          (w = n('meta')),
          (E = n('meta')),
          (A = n('meta')),
          (x = n('meta')),
          (M = n('meta')),
          (j = n('meta')),
          (I = n('meta')),
          (N = n('meta')),
          (D = n('meta')),
          (_ = n('meta')),
          ($ = n('meta')),
          (G = n('meta')),
          (R = n('meta')),
          (K = n('meta')),
          (L = n('meta')),
          (P = n('meta')),
          (B = n('meta')),
          (F = new y()),
          (q = o()),
          (W = new y()),
          (Z = o()),
          this.h();
      },
      l(e) {
        const s = i('[data-svelte="svelte-jzg17n"]', document.head);
        (t = c(s, 'HTML', { lang: !0 })),
          p(t).forEach(l),
          (r = c(s, 'META', { name: !0, content: !0 })),
          (a = c(s, 'LINK', { rel: !0, href: !0 })),
          (u = c(s, 'LINK', { rel: !0, type: !0, href: !0 })),
          (v = c(s, 'LINK', { rel: !0, type: !0, href: !0, sizes: !0 })),
          (f = c(s, 'LINK', { rel: !0, type: !0, href: !0, sizes: !0 })),
          (b = c(s, 'LINK', { rel: !0, type: !0, href: !0, sizes: !0 })),
          (w = c(s, 'META', { property: !0, content: !0 })),
          (E = c(s, 'META', { property: !0, content: !0 })),
          (A = c(s, 'META', { property: !0, content: !0, itemprop: !0 })),
          (x = c(s, 'META', { property: !0, content: !0, itemprop: !0 })),
          (M = c(s, 'META', { property: !0, content: !0, itemprop: !0 })),
          (j = c(s, 'META', { property: !0, content: !0 })),
          (I = c(s, 'META', { name: !0, content: !0 })),
          (N = c(s, 'META', { name: !0, content: !0 })),
          (D = c(s, 'META', { name: !0, content: !0 })),
          (_ = c(s, 'META', { name: !0, content: !0 })),
          ($ = c(s, 'META', { name: !0, content: !0 })),
          (G = c(s, 'META', { name: !0, content: !0 })),
          (R = c(s, 'META', { name: !0, content: !0 })),
          (K = c(s, 'META', { property: !0, content: !0 })),
          (L = c(s, 'META', { property: !0, content: !0 })),
          (P = c(s, 'META', { property: !0, content: !0 })),
          (B = c(s, 'META', { property: !0, content: !0 })),
          (F = h(s)),
          (q = o()),
          (W = h(s)),
          (Z = o()),
          s.forEach(l),
          this.h();
      },
      h() {
        d(t, 'lang', e[5]),
          d(r, 'name', 'description'),
          d(r, 'content', e[1]),
          d(a, 'rel', 'canonical'),
          d(a, 'href', e[7]),
          d(u, 'rel', 'shortcut icon'),
          d(u, 'type', 'image/x-icon'),
          d(
            u,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon.ico'
          ),
          d(v, 'rel', 'icon'),
          d(v, 'type', 'image/png'),
          d(
            v,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-16x16.png'
          ),
          d(v, 'sizes', '16x16'),
          d(f, 'rel', 'icon'),
          d(f, 'type', 'image/png'),
          d(
            f,
            'href',
            'https://s1.reutersmedia.net/resources_v2/images/favicon/favicon-32x32.png'
          ),
          d(f, 'sizes', '32x32'),
          d(b, 'rel', 'icon'),
          d(b, 'type', 'image/png'),
          d(
            b,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-96x96.png'
          ),
          d(b, 'sizes', '96x96'),
          d(w, 'property', 'og:url'),
          d(w, 'content', e[7]),
          d(E, 'property', 'og:type'),
          d(E, 'content', 'article'),
          d(A, 'property', 'og:title'),
          d(A, 'content', e[2]),
          d(A, 'itemprop', 'name'),
          d(x, 'property', 'og:description'),
          d(x, 'content', e[3]),
          d(x, 'itemprop', 'description'),
          d(M, 'property', 'og:image'),
          d(M, 'content', (k = `https://${e[6]}` + T(e[4]))),
          d(M, 'itemprop', 'image'),
          d(j, 'property', 'og:site_name'),
          d(j, 'content', 'Reuters'),
          d(I, 'name', 'twitter:card'),
          d(I, 'content', 'summary_large_image'),
          d(N, 'name', 'twitter:site'),
          d(N, 'content', '@ReutersGraphics'),
          d(D, 'name', 'twitter:creator'),
          d(D, 'content', '@ReutersGraphics'),
          d(_, 'name', 'twitter:domain'),
          d(_, 'content', (S = `https://${e[6]}`)),
          d($, 'name', 'twitter:title'),
          d($, 'content', e[2]),
          d(G, 'name', 'twitter:description'),
          d(G, 'content', e[3]),
          d(R, 'name', 'twitter:image:src'),
          d(R, 'content', (z = `https://${e[6]}` + T(e[4]))),
          d(K, 'property', 'fb:app_id'),
          d(K, 'content', '319194411438328'),
          d(L, 'property', 'fb:admins'),
          d(L, 'content', '616167736'),
          d(P, 'property', 'fb:admins'),
          d(P, 'content', '625796953'),
          d(B, 'property', 'fb:admins'),
          d(B, 'content', '571759798'),
          (F.a = q),
          (W.a = Z);
      },
      m(e, s) {
        m(document.head, t),
          m(document.head, r),
          m(document.head, a),
          m(document.head, u),
          m(document.head, v),
          m(document.head, f),
          m(document.head, b),
          m(document.head, w),
          m(document.head, E),
          m(document.head, A),
          m(document.head, x),
          m(document.head, M),
          m(document.head, j),
          m(document.head, I),
          m(document.head, N),
          m(document.head, D),
          m(document.head, _),
          m(document.head, $),
          m(document.head, G),
          m(document.head, R),
          m(document.head, K),
          m(document.head, L),
          m(document.head, P),
          m(document.head, B),
          F.m(
            '<script type="application/ld+json" ✂prettier:content✂="JyArIEpTT04uc3RyaW5naWZ5KG9yZ0xkSnNvbikgKyAn" ✂prettier:content✂="e30=">{}</script>',
            document.head
          ),
          m(document.head, q),
          W.m(
            '<script type="application/ld+json" ✂prettier:content✂="JyArIEpTT04uc3RyaW5naWZ5KGFydGljbGVMZEpzb24pICsgJw==" ✂prettier:content✂="e30=">{}</script>',
            document.head
          ),
          m(document.head, Z);
      },
      p(e, [a]) {
        32 & a && d(t, 'lang', e[5]),
          1 & a && s !== (s = e[0]) && (document.title = s),
          2 & a && d(r, 'content', e[1]),
          4 & a && d(A, 'content', e[2]),
          8 & a && d(x, 'content', e[3]),
          80 & a &&
            k !== (k = `https://${e[6]}` + T(e[4])) &&
            d(M, 'content', k),
          64 & a && S !== (S = `https://${e[6]}`) && d(_, 'content', S),
          4 & a && d($, 'content', e[2]),
          8 & a && d(G, 'content', e[3]),
          80 & a &&
            z !== (z = `https://${e[6]}` + T(e[4])) &&
            d(R, 'content', z);
      },
      i: g,
      o: g,
      d(e) {
        l(t),
          l(r),
          l(a),
          l(u),
          l(v),
          l(f),
          l(b),
          l(w),
          l(E),
          l(A),
          l(x),
          l(M),
          l(j),
          l(I),
          l(N),
          l(D),
          l(_),
          l($),
          l(G),
          l(R),
          l(K),
          l(L),
          l(P),
          l(B),
          l(q),
          e && F.d(),
          l(Z),
          e && W.d();
      },
    }
  );
}
function j(t, s, r) {
  let a;
  u(t, A, (e) => r(8, (a = e)));
  let { seoTitle: n } = s,
    { seoDescription: o } = s,
    { shareTitle: i } = s,
    { shareDescription: c } = s,
    { shareImgPath: p } = s,
    { lang: l = 'en' } = s,
    { hostname: h = 'graphics.reuters.com' } = s;
  const d = v(E, 'homepage')
    ? e(E.homepage, a.path, { trailingSlash: !0 })
    : v(E, 'reuters.preview')
    ? e(E.reuters.preview, a.path, { trailingSlash: !0 })
    : a.host
    ? e('https://' + a.host, a.path, { trailingSlash: !0 })
    : `https://${h}`;
  return (
    'graphics.reuters.com' === window.location.host &&
      (M(d, n),
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
            const s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(e, s);
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
    T(p),
    T(p),
    v(x, `${p}.width`, 1200),
    v(x, `${p}.height`, 600),
    new Date().getFullYear(),
    v(E, 'reuters.graphic.published'),
    v(E, 'reuters.graphic.published'),
    v(E, 'reuters.graphic.updated'),
    v(E, 'reuters.graphic.authors', []).map(({ name: e, url: t }) => ({
      '@type': 'Person',
      name: e,
      url: t,
    })),
    (t.$$set = (e) => {
      'seoTitle' in e && r(0, (n = e.seoTitle)),
        'seoDescription' in e && r(1, (o = e.seoDescription)),
        'shareTitle' in e && r(2, (i = e.shareTitle)),
        'shareDescription' in e && r(3, (c = e.shareDescription)),
        'shareImgPath' in e && r(4, (p = e.shareImgPath)),
        'lang' in e && r(5, (l = e.lang)),
        'hostname' in e && r(6, (h = e.hostname));
    }),
    [n, o, i, c, p, l, h, d]
  );
}
class I extends s {
  constructor(e) {
    super(),
      r(this, e, j, k, a, {
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
function N(e) {
  let t, s, r, a, o, i;
  return {
    c() {
      (t = n('nav')),
        (s = n('div')),
        (r = n('a')),
        (a = n('figure')),
        (o = n('img')),
        this.h();
    },
    l(e) {
      t = c(e, 'NAV', { class: !0 });
      var n = p(t);
      s = c(n, 'DIV', { class: !0 });
      var i = p(s);
      r = c(i, 'A', { href: !0 });
      var h = p(r);
      a = c(h, 'FIGURE', { class: !0 });
      var d = p(a);
      (o = c(d, 'IMG', { class: !0, src: !0, alt: !0 })),
        d.forEach(l),
        h.forEach(l),
        i.forEach(l),
        n.forEach(l),
        this.h();
    },
    h() {
      d(o, 'class', 'logo reuters-graphics'),
        o.src !==
          (i =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg') &&
          d(
            o,
            'src',
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg'
          ),
        d(o, 'alt', 'Reuters graphics logo'),
        d(a, 'class', 'navbar-brand'),
        d(r, 'href', `${w}/`),
        d(s, 'class', 'logo-container'),
        d(t, 'class', 'nav svelte-ca3v86');
    },
    m(e, n) {
      f(e, t, n), m(t, s), m(s, r), m(r, a), m(a, o);
    },
    p: g,
    i: g,
    o: g,
    d(e) {
      e && l(t);
    },
  };
}
class D extends s {
  constructor(e) {
    super(), r(this, e, null, N, a, {});
  }
}
var _ = [
  {
    title: 'BodyText',
    description: 'Parse mardown-formatted text.',
    slug: 'body-text',
    path: 'BodyText',
  },
  {
    title: 'Footer',
    description: 'Add a bottom footer bar to the page.',
    slug: 'footer',
    path: 'Footer',
  },
  {
    title: 'Nav',
    description: 'Add a top-level nav bar to the page.',
    slug: 'nav',
    path: 'Nav',
  },
  {
    title: 'Referrals',
    description: 'Add a referrals bar with recent graphics stories.',
    slug: 'referrals',
    path: 'Referrals',
  },
  {
    title: 'Sharer',
    description: 'Add share tools to a page.',
    slug: 'sharer',
    path: 'Sharer',
  },
];
export { D as N, I as S, _ as c };
