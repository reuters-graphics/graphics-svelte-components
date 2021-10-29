import {
  M as e,
  N as t,
  S as s,
  i as r,
  s as a,
  e as n,
  O as o,
  l as i,
  P as c,
  c as l,
  a as p,
  d as h,
  Q as m,
  b as d,
  H as g,
  I as u,
  R as v,
  T as f,
  D as y,
  k as b,
  n as w,
  U as E,
  f as $,
  E as A,
  F as x,
  G as T,
  x as k,
  u as I,
  V as M,
  J as j,
  K as N,
  W as S,
  X as D,
  t as L,
  g as R,
  h as _,
  j as P,
  m as G,
  Y as H,
  o as K,
  v as z,
  L as F,
} from './vendor-927c0fc0.js';
import { a as B, b as O } from './paths-6758d194.js';
const V = (t = '') => e(B, t);
var U = {
  name: '@reuters-graphics/graphics-svelte-components',
  version: '0.1.37',
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
const W = {
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
var q = (e, t) => {
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
function C(e) {
  let t,
    s,
    r,
    a,
    v,
    f,
    y,
    b,
    w,
    E,
    $,
    A,
    x,
    T,
    k,
    I,
    M,
    j,
    N,
    S,
    D,
    L,
    R,
    _,
    P,
    G,
    H,
    K,
    z,
    F,
    B,
    O;
  return (
    (document.title = s = e[0]),
    {
      c() {
        (t = n('html')),
          (r = n('meta')),
          (a = n('link')),
          (v = n('link')),
          (f = n('link')),
          (y = n('link')),
          (b = n('link')),
          (w = n('meta')),
          (E = n('meta')),
          ($ = n('meta')),
          (A = n('meta')),
          (x = n('meta')),
          (k = n('meta')),
          (I = n('meta')),
          (M = n('meta')),
          (j = n('meta')),
          (N = n('meta')),
          (D = n('meta')),
          (L = n('meta')),
          (R = n('meta')),
          (P = n('meta')),
          (G = n('meta')),
          (H = n('meta')),
          (K = n('meta')),
          (z = new o()),
          (F = i()),
          (B = new o()),
          (O = i()),
          this.h();
      },
      l(e) {
        const s = c('[data-svelte="svelte-157iplb"]', document.head);
        (t = l(s, 'HTML', { lang: !0 })),
          p(t).forEach(h),
          (r = l(s, 'META', { name: !0, content: !0 })),
          (a = l(s, 'LINK', { rel: !0, href: !0 })),
          (v = l(s, 'LINK', { rel: !0, type: !0, href: !0 })),
          (f = l(s, 'LINK', { rel: !0, type: !0, href: !0, sizes: !0 })),
          (y = l(s, 'LINK', { rel: !0, type: !0, href: !0, sizes: !0 })),
          (b = l(s, 'LINK', { rel: !0, type: !0, href: !0, sizes: !0 })),
          (w = l(s, 'META', { property: !0, content: !0 })),
          (E = l(s, 'META', { property: !0, content: !0 })),
          ($ = l(s, 'META', { property: !0, content: !0, itemprop: !0 })),
          (A = l(s, 'META', { property: !0, content: !0, itemprop: !0 })),
          (x = l(s, 'META', { property: !0, content: !0, itemprop: !0 })),
          (k = l(s, 'META', { property: !0, content: !0 })),
          (I = l(s, 'META', { name: !0, content: !0 })),
          (M = l(s, 'META', { name: !0, content: !0 })),
          (j = l(s, 'META', { name: !0, content: !0 })),
          (N = l(s, 'META', { name: !0, content: !0 })),
          (D = l(s, 'META', { name: !0, content: !0 })),
          (L = l(s, 'META', { name: !0, content: !0 })),
          (R = l(s, 'META', { name: !0, content: !0 })),
          (P = l(s, 'META', { property: !0, content: !0 })),
          (G = l(s, 'META', { property: !0, content: !0 })),
          (H = l(s, 'META', { property: !0, content: !0 })),
          (K = l(s, 'META', { property: !0, content: !0 })),
          (z = m(s)),
          (F = i()),
          (B = m(s)),
          (O = i()),
          s.forEach(h),
          this.h();
      },
      h() {
        d(t, 'lang', e[5]),
          d(r, 'name', 'description'),
          d(r, 'content', e[1]),
          d(a, 'rel', 'canonical'),
          d(a, 'href', e[7]),
          d(v, 'rel', 'shortcut icon'),
          d(v, 'type', 'image/x-icon'),
          d(
            v,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon.ico'
          ),
          d(f, 'rel', 'icon'),
          d(f, 'type', 'image/png'),
          d(
            f,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-16x16.png'
          ),
          d(f, 'sizes', '16x16'),
          d(y, 'rel', 'icon'),
          d(y, 'type', 'image/png'),
          d(
            y,
            'href',
            'https://s1.reutersmedia.net/resources_v2/images/favicon/favicon-32x32.png'
          ),
          d(y, 'sizes', '32x32'),
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
          d($, 'property', 'og:title'),
          d($, 'content', e[2]),
          d($, 'itemprop', 'name'),
          d(A, 'property', 'og:description'),
          d(A, 'content', e[3]),
          d(A, 'itemprop', 'description'),
          d(x, 'property', 'og:image'),
          d(x, 'content', (T = V(e[4]))),
          d(x, 'itemprop', 'image'),
          d(k, 'property', 'og:site_name'),
          d(k, 'content', 'Reuters'),
          d(I, 'name', 'twitter:card'),
          d(I, 'content', 'summary_large_image'),
          d(M, 'name', 'twitter:site'),
          d(M, 'content', '@ReutersGraphics'),
          d(j, 'name', 'twitter:creator'),
          d(j, 'content', '@ReutersGraphics'),
          d(N, 'name', 'twitter:domain'),
          d(N, 'content', (S = `https://${e[6]}`)),
          d(D, 'name', 'twitter:title'),
          d(D, 'content', e[2]),
          d(L, 'name', 'twitter:description'),
          d(L, 'content', e[3]),
          d(R, 'name', 'twitter:image:src'),
          d(R, 'content', (_ = V(e[4]))),
          d(P, 'property', 'fb:app_id'),
          d(P, 'content', '319194411438328'),
          d(G, 'property', 'fb:admins'),
          d(G, 'content', '616167736'),
          d(H, 'property', 'fb:admins'),
          d(H, 'content', '625796953'),
          d(K, 'property', 'fb:admins'),
          d(K, 'content', '571759798'),
          (z.a = F),
          (B.a = O);
      },
      m(e, s) {
        g(document.head, t),
          g(document.head, r),
          g(document.head, a),
          g(document.head, v),
          g(document.head, f),
          g(document.head, y),
          g(document.head, b),
          g(document.head, w),
          g(document.head, E),
          g(document.head, $),
          g(document.head, A),
          g(document.head, x),
          g(document.head, k),
          g(document.head, I),
          g(document.head, M),
          g(document.head, j),
          g(document.head, N),
          g(document.head, D),
          g(document.head, L),
          g(document.head, R),
          g(document.head, P),
          g(document.head, G),
          g(document.head, H),
          g(document.head, K),
          z.m(
            '<script type="application/ld+json" ✂prettier:content✂="JyArIEpTT04uc3RyaW5naWZ5KG9yZ0xkSnNvbikgKyAn" ✂prettier:content✂="e30=">{}</script>',
            document.head
          ),
          g(document.head, F),
          B.m(
            '<script type="application/ld+json" ✂prettier:content✂="JyArIEpTT04uc3RyaW5naWZ5KGFydGljbGVMZEpzb24pICsgJw==" ✂prettier:content✂="e30=">{}</script>',
            document.head
          ),
          g(document.head, O);
      },
      p(e, [a]) {
        32 & a && d(t, 'lang', e[5]),
          1 & a && s !== (s = e[0]) && (document.title = s),
          2 & a && d(r, 'content', e[1]),
          4 & a && d($, 'content', e[2]),
          8 & a && d(A, 'content', e[3]),
          16 & a && T !== (T = V(e[4])) && d(x, 'content', T),
          64 & a && S !== (S = `https://${e[6]}`) && d(N, 'content', S),
          4 & a && d(D, 'content', e[2]),
          8 & a && d(L, 'content', e[3]),
          16 & a && _ !== (_ = V(e[4])) && d(R, 'content', _);
      },
      i: u,
      o: u,
      d(e) {
        h(t),
          h(r),
          h(a),
          h(v),
          h(f),
          h(y),
          h(b),
          h(w),
          h(E),
          h($),
          h(A),
          h(x),
          h(k),
          h(I),
          h(M),
          h(j),
          h(N),
          h(D),
          h(L),
          h(R),
          h(P),
          h(G),
          h(H),
          h(K),
          h(F),
          e && z.d(),
          h(O),
          e && B.d();
      },
    }
  );
}
function J(t, s, r) {
  let a;
  v(t, W, (e) => r(8, (a = e)));
  let { seoTitle: n } = s,
    { seoDescription: o } = s,
    { shareTitle: i } = s,
    { shareDescription: c } = s,
    { shareImgPath: l } = s,
    { lang: p = 'en' } = s,
    { hostname: h = 'graphics.reuters.com' } = s;
  const m = f(U, 'homepage')
    ? e(U.homepage, a.path, { trailingSlash: !0 })
    : f(U, 'reuters.preview')
    ? e(U.reuters.preview, a.path, { trailingSlash: !0 })
    : a.host
    ? e('https://' + a.host, a.path, { trailingSlash: !0 })
    : `https://${h}`;
  return (
    'graphics.reuters.com' === window.location.host &&
      (q(m, n),
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
    V(l),
    V(l),
    new Date().getFullYear(),
    f(U, 'reuters.graphic.published'),
    f(U, 'reuters.graphic.published'),
    f(U, 'reuters.graphic.updated'),
    f(U, 'reuters.graphic.authors', []).map(({ name: e, url: t }) => ({
      '@type': 'Person',
      name: e,
      url: t,
    })),
    (t.$$set = (e) => {
      'seoTitle' in e && r(0, (n = e.seoTitle)),
        'seoDescription' in e && r(1, (o = e.seoDescription)),
        'shareTitle' in e && r(2, (i = e.shareTitle)),
        'shareDescription' in e && r(3, (c = e.shareDescription)),
        'shareImgPath' in e && r(4, (l = e.shareImgPath)),
        'lang' in e && r(5, (p = e.lang)),
        'hostname' in e && r(6, (h = e.hostname));
    }),
    [n, o, i, c, l, p, h, m]
  );
}
class Z extends s {
  constructor(e) {
    super(),
      r(this, e, J, C, a, {
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
function Y(e) {
  let t, s, r, a, o, i, c, m;
  const u = e[1].default,
    v = y(u, e, e[0], null);
  return {
    c() {
      (t = n('nav')),
        (s = n('div')),
        (r = n('a')),
        (a = n('figure')),
        (o = n('img')),
        (c = b()),
        v && v.c(),
        this.h();
    },
    l(e) {
      t = l(e, 'NAV', { class: !0 });
      var n = p(t);
      s = l(n, 'DIV', { class: !0 });
      var i = p(s);
      r = l(i, 'A', { href: !0 });
      var m = p(r);
      a = l(m, 'FIGURE', { class: !0 });
      var d = p(a);
      (o = l(d, 'IMG', { class: !0, src: !0, alt: !0 })),
        d.forEach(h),
        m.forEach(h),
        i.forEach(h),
        (c = w(n)),
        v && v.l(n),
        n.forEach(h),
        this.h();
    },
    h() {
      d(o, 'class', 'logo reuters-graphics'),
        E(
          o.src,
          (i =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg')
        ) ||
          d(
            o,
            'src',
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg'
          ),
        d(o, 'alt', 'Reuters graphics logo'),
        d(a, 'class', 'navbar-brand'),
        d(r, 'href', `${O}/`),
        d(s, 'class', 'logo-container'),
        d(t, 'class', 'nav svelte-ca3v86');
    },
    m(e, n) {
      $(e, t, n),
        g(t, s),
        g(s, r),
        g(r, a),
        g(a, o),
        g(t, c),
        v && v.m(t, null),
        (m = !0);
    },
    p(e, [t]) {
      v &&
        v.p &&
        (!m || 1 & t) &&
        A(v, u, e, e[0], m ? T(u, e[0], t, null) : x(e[0]), null);
    },
    i(e) {
      m || (k(v, e), (m = !0));
    },
    o(e) {
      I(v, e), (m = !1);
    },
    d(e) {
      e && h(t), v && v.d(e);
    },
  };
}
function Q(e, t, s) {
  let { $$slots: r = {}, $$scope: a } = t;
  return (
    (e.$$set = (e) => {
      '$$scope' in e && s(0, (a = e.$$scope));
    }),
    [a, r]
  );
}
class X extends s {
  constructor(e) {
    super(), r(this, e, Q, Y, a, {});
  }
}
function ee(e, t, s) {
  const r = e.slice();
  return (r[4] = t[s]), r;
}
function te(e) {
  let t, s, r;
  return {
    c() {
      (t = n('div')), this.h();
    },
    l(e) {
      (t = l(e, 'DIV', { id: !0, class: !0 })), p(t).forEach(h), this.h();
    },
    h() {
      d(t, 'id', 'overlay'), d(t, 'class', 'svelte-253v2x');
    },
    m(a, n) {
      $(a, t, n), s || ((r = M(t, 'click', e[2])), (s = !0));
    },
    p: u,
    d(e) {
      e && h(t), (s = !1), r();
    },
  };
}
function se(e) {
  let t,
    s,
    r,
    a,
    o = e[4].title + '';
  return {
    c() {
      (t = n('a')), (s = n('li')), (r = L(o)), this.h();
    },
    l(e) {
      t = l(e, 'A', { href: !0, class: !0 });
      var a = p(t);
      s = l(a, 'LI', { class: !0 });
      var n = p(s);
      (r = R(n, o)), n.forEach(h), a.forEach(h), this.h();
    },
    h() {
      d(s, 'class', 'svelte-253v2x'),
        d(t, 'href', (a = `${O}/components/${e[4].slug}/`)),
        d(t, 'class', 'svelte-253v2x');
    },
    m(e, a) {
      $(e, t, a), g(t, s), g(s, r);
    },
    p(e, s) {
      1 & s && o !== (o = e[4].title + '') && _(r, o),
        1 & s && a !== (a = `${O}/components/${e[4].slug}/`) && d(t, 'href', a);
    },
    d(e) {
      e && h(t);
    },
  };
}
function re(e) {
  let t,
    s = e[4].title && e[4].slug && se(e);
  return {
    c() {
      s && s.c(), (t = i());
    },
    l(e) {
      s && s.l(e), (t = i());
    },
    m(e, r) {
      s && s.m(e, r), $(e, t, r);
    },
    p(e, r) {
      e[4].title && e[4].slug
        ? s
          ? s.p(e, r)
          : ((s = se(e)), s.c(), s.m(t.parentNode, t))
        : s && (s.d(1), (s = null));
    },
    d(e) {
      s && s.d(e), e && h(t);
    },
  };
}
function ae(e) {
  let t,
    s,
    r,
    a,
    o,
    i,
    c,
    m,
    u,
    v,
    f,
    y,
    E,
    A,
    x,
    T,
    _,
    B,
    V,
    U,
    W,
    q,
    C = e[1] && te(e);
  (o = new j({ props: { fw: !0, size: 'md', icon: N.faCog } })),
    (v = new j({ props: { fw: !0, icon: S.faHome } })),
    (x = new j({ props: { fw: !0, icon: D.faGithubAlt } }));
  let J = e[0],
    Z = [];
  for (let n = 0; n < J.length; n += 1) Z[n] = re(ee(e, J, n));
  return {
    c() {
      C && C.c(),
        (t = b()),
        (s = n('nav')),
        (r = n('div')),
        (a = n('button')),
        P(o.$$.fragment),
        (i = b()),
        (c = n('ul')),
        (m = n('li')),
        (u = n('a')),
        P(v.$$.fragment),
        (f = L(' Home')),
        (y = b()),
        (E = n('li')),
        (A = n('a')),
        P(x.$$.fragment),
        (T = L(' Repo')),
        (_ = b()),
        (B = n('hr')),
        (V = b());
      for (let e = 0; e < Z.length; e += 1) Z[e].c();
      this.h();
    },
    l(e) {
      C && C.l(e), (t = w(e)), (s = l(e, 'NAV', { class: !0 }));
      var n = p(s);
      r = l(n, 'DIV', { class: !0 });
      var d = p(r);
      a = l(d, 'BUTTON', { class: !0 });
      var g = p(a);
      G(o.$$.fragment, g),
        g.forEach(h),
        (i = w(d)),
        (c = l(d, 'UL', { class: !0 }));
      var b = p(c);
      m = l(b, 'LI', { class: !0 });
      var $ = p(m);
      u = l($, 'A', { href: !0, rel: !0, class: !0 });
      var k = p(u);
      G(v.$$.fragment, k),
        (f = R(k, ' Home')),
        k.forEach(h),
        $.forEach(h),
        (y = w(b)),
        (E = l(b, 'LI', { class: !0 }));
      var I = p(E);
      A = l(I, 'A', { href: !0, rel: !0, class: !0 });
      var M = p(A);
      G(x.$$.fragment, M),
        (T = R(M, ' Repo')),
        M.forEach(h),
        I.forEach(h),
        (_ = w(b)),
        (B = l(b, 'HR', { class: !0 })),
        (V = w(b));
      for (let t = 0; t < Z.length; t += 1) Z[t].l(b);
      b.forEach(h), d.forEach(h), n.forEach(h), this.h();
    },
    h() {
      d(a, 'class', 'svelte-253v2x'),
        d(u, 'href', `${O}/`),
        d(u, 'rel', 'external'),
        d(u, 'class', 'svelte-253v2x'),
        d(m, 'class', 'stationary svelte-253v2x'),
        d(
          A,
          'href',
          'https://github.com/reuters-graphics/graphics-svelte-components'
        ),
        d(A, 'rel', 'external'),
        d(A, 'class', 'svelte-253v2x'),
        d(E, 'class', 'stationary svelte-253v2x'),
        d(B, 'class', 'svelte-253v2x'),
        d(c, 'class', 'svelte-253v2x'),
        d(r, 'class', 'nav-container svelte-253v2x'),
        d(s, 'class', 'svelte-253v2x'),
        H(s, 'open', e[1]);
    },
    m(n, l) {
      C && C.m(n, l),
        $(n, t, l),
        $(n, s, l),
        g(s, r),
        g(r, a),
        K(o, a, null),
        g(r, i),
        g(r, c),
        g(c, m),
        g(m, u),
        K(v, u, null),
        g(u, f),
        g(c, y),
        g(c, E),
        g(E, A),
        K(x, A, null),
        g(A, T),
        g(c, _),
        g(c, B),
        g(c, V);
      for (let e = 0; e < Z.length; e += 1) Z[e].m(c, null);
      (U = !0), W || ((q = M(a, 'click', e[3])), (W = !0));
    },
    p(e, [r]) {
      if (
        (e[1]
          ? C
            ? C.p(e, r)
            : ((C = te(e)), C.c(), C.m(t.parentNode, t))
          : C && (C.d(1), (C = null)),
        1 & r)
      ) {
        let t;
        for (J = e[0], t = 0; t < J.length; t += 1) {
          const s = ee(e, J, t);
          Z[t] ? Z[t].p(s, r) : ((Z[t] = re(s)), Z[t].c(), Z[t].m(c, null));
        }
        for (; t < Z.length; t += 1) Z[t].d(1);
        Z.length = J.length;
      }
      2 & r && H(s, 'open', e[1]);
    },
    i(e) {
      U ||
        (k(o.$$.fragment, e),
        k(v.$$.fragment, e),
        k(x.$$.fragment, e),
        (U = !0));
    },
    o(e) {
      I(o.$$.fragment, e), I(v.$$.fragment, e), I(x.$$.fragment, e), (U = !1);
    },
    d(e) {
      C && C.d(e),
        e && h(t),
        e && h(s),
        z(o),
        z(v),
        z(x),
        F(Z, e),
        (W = !1),
        q();
    },
  };
}
function ne(e, t, s) {
  let { components: r = [] } = t,
    a = !1;
  return (
    (e.$$set = (e) => {
      'components' in e && s(0, (r = e.components));
    }),
    [
      r,
      a,
      () => {
        s(1, (a = !1));
      },
      () => {
        s(1, (a = !a));
      },
    ]
  );
}
class oe extends s {
  constructor(e) {
    super(), r(this, e, ne, ae, a, { components: 0 });
  }
}
var ie = [
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
export { oe as M, X as N, Z as S, ie as c, V as g };
