import {
  S as s,
  i as a,
  s as n,
  e as t,
  t as e,
  k as o,
  c,
  a as r,
  g as p,
  d as l,
  n as i,
  b as u,
  f,
  H as h,
  I as g,
  j as k,
  m,
  o as $,
  x as v,
  u as d,
  v as w,
} from './vendor-927c0fc0.js';
import { D as E } from './index-38e47fc4.js';
function y(s) {
  let a, n, k, m, $, v, d, w, E, y;
  return {
    c() {
      (a = t('footer')),
        (n = t('nav')),
        (k = t('a')),
        (m = e('Reuters.com')),
        ($ = o()),
        (v = t('a')),
        (d = e('Privacy Policy')),
        (w = o()),
        (E = t('a')),
        (y = e('Terms of Use')),
        this.h();
    },
    l(s) {
      a = c(s, 'FOOTER', {});
      var t = r(a);
      n = c(t, 'NAV', { class: !0 });
      var e = r(n);
      k = c(e, 'A', { class: !0, href: !0 });
      var o = r(k);
      (m = p(o, 'Reuters.com')),
        o.forEach(l),
        ($ = i(e)),
        (v = c(e, 'A', { class: !0, href: !0 }));
      var u = r(v);
      (d = p(u, 'Privacy Policy')),
        u.forEach(l),
        (w = i(e)),
        (E = c(e, 'A', { class: !0, href: !0 }));
      var f = r(E);
      (y = p(f, 'Terms of Use')),
        f.forEach(l),
        e.forEach(l),
        t.forEach(l),
        this.h();
    },
    h() {
      u(k, 'class', 'nav-link'),
        u(k, 'href', 'https://www.reuters.com/'),
        u(v, 'class', 'nav-link'),
        u(v, 'href', 'https://www.reuters.com/privacy-policy'),
        u(E, 'class', 'nav-link'),
        u(E, 'href', 'https://www.reuters.com/terms-of-use'),
        u(n, 'class', 'footer nav background-dark justify-content-center');
    },
    m(s, t) {
      f(s, a, t),
        h(a, n),
        h(n, k),
        h(k, m),
        h(n, $),
        h(n, v),
        h(v, d),
        h(n, w),
        h(n, E),
        h(E, y);
    },
    p: g,
    i: g,
    o: g,
    d(s) {
      s && l(a);
    },
  };
}
class x extends s {
  constructor(s) {
    super(), a(this, s, null, y, n, {});
  }
}
function P(s) {
  let a, n;
  return (
    (a = new x({})),
    {
      c() {
        k(a.$$.fragment);
      },
      l(s) {
        m(a.$$.fragment, s);
      },
      m(s, t) {
        $(a, s, t), (n = !0);
      },
      i(s) {
        n || (v(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        d(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        w(a, s);
      },
    }
  );
}
function j(s) {
  let a, n, g, y, x, j, A, F, R, H, O;
  return (
    (H = new E({ props: { $$slots: { default: [P] }, $$scope: { ctx: s } } })),
    {
      c() {
        (a = t('section')),
          (n = t('h2')),
          (g = e(T)),
          (y = o()),
          (x = t('p')),
          (j = e(b)),
          (A = o()),
          (F = t('pre')),
          (R = o()),
          k(H.$$.fragment),
          this.h();
      },
      l(s) {
        a = c(s, 'SECTION', {});
        var t = r(a);
        n = c(t, 'H2', {});
        var e = r(n);
        (g = p(e, T)), e.forEach(l), (y = i(t)), (x = c(t, 'P', {}));
        var o = r(x);
        (j = p(o, b)),
          o.forEach(l),
          t.forEach(l),
          (A = i(s)),
          (F = c(s, 'PRE', { class: !0 })),
          r(F).forEach(l),
          (R = i(s)),
          m(H.$$.fragment, s),
          this.h();
      },
      h() {
        u(F, 'class', 'language-svelte');
      },
      m(s, t) {
        f(s, a, t),
          h(a, n),
          h(n, g),
          h(a, y),
          h(a, x),
          h(x, j),
          f(s, A, t),
          f(s, F, t),
          (F.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Footer <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span> <span class="token punctuation">/></span></span></code>'),
          f(s, R, t),
          $(H, s, t),
          (O = !0);
      },
      p(s, [a]) {
        const n = {};
        1 & a && (n.$$scope = { dirty: a, ctx: s }), H.$set(n);
      },
      i(s) {
        O || (v(H.$$.fragment, s), (O = !0));
      },
      o(s) {
        d(H.$$.fragment, s), (O = !1);
      },
      d(s) {
        s && l(a), s && l(A), s && l(F), s && l(R), w(H, s);
      },
    }
  );
}
const A = {
    title: 'Footer',
    description: 'Add a bottom footer bar to the page.',
    slug: 'footer',
  },
  { title: T, description: b, slug: F } = A;
export default class extends s {
  constructor(s) {
    super(), a(this, s, null, j, n, {});
  }
}
export { A as metadata };
