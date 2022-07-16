import {
  S as H,
  i as S,
  s as D,
  e as k,
  c as f,
  a as d,
  d as p,
  b as L,
  g,
  E as w,
  t as T,
  k as y,
  w as M,
  h as B,
  m as b,
  x as P,
  J as m,
  y as q,
  q as F,
  o as I,
  B as N,
} from './index-83a5d9f9.js';
import { D as J } from './index-16ec1060.js';
import { m as E } from './main-899ce102.js';
import './paths-396f020f.js';
function R(r) {
  let t,
    a = E.parse(r[0]) + '';
  return {
    c() {
      (t = k('section')), this.h();
    },
    l(s) {
      t = f(s, 'SECTION', { class: !0 });
      var e = d(t);
      e.forEach(p), this.h();
    },
    h() {
      L(t, 'class', 'body-text');
    },
    m(s, e) {
      g(s, t, e), (t.innerHTML = a);
    },
    p(s, [e]) {
      e & 1 && a !== (a = E.parse(s[0]) + '') && (t.innerHTML = a);
    },
    i: w,
    o: w,
    d(s) {
      s && p(t);
    },
  };
}
function z(r, t, a) {
  let { text: s } = t;
  if (!s)
    throw new Error(
      '"text" prop must be defined as a string for BodyText components'
    );
  return (
    (r.$$set = (e) => {
      'text' in e && a(0, (s = e.text));
    }),
    [s]
  );
}
class A extends H {
  constructor(t) {
    super(), S(this, t, z, R, D, { text: 0 });
  }
}
function G(r) {
  let t, a;
  return (
    (t = new A({ props: { text: r[0] } })),
    {
      c() {
        M(t.$$.fragment);
      },
      l(s) {
        P(t.$$.fragment, s);
      },
      m(s, e) {
        q(t, s, e), (a = !0);
      },
      p: w,
      i(s) {
        a || (F(t.$$.fragment, s), (a = !0));
      },
      o(s) {
        I(t.$$.fragment, s), (a = !1);
      },
      d(s) {
        N(t, s);
      },
    }
  );
}
function K(r) {
  let t,
    a,
    s,
    e,
    i,
    _,
    h,
    l,
    O = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BodyText <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> markdownText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bacon ipsum **dolor amet** cow tongue tri-tip.
  
  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.
  
  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BodyText</span> <span class="token attr-name">text="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>markdownText<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>`,
    $,
    c,
    x;
  return (
    (c = new J({ props: { $$slots: { default: [G] }, $$scope: { ctx: r } } })),
    {
      c() {
        (t = k('section')),
          (a = k('h2')),
          (s = T(j)),
          (e = y()),
          (i = k('p')),
          (_ = T(C)),
          (h = y()),
          (l = k('pre')),
          ($ = y()),
          M(c.$$.fragment),
          this.h();
      },
      l(n) {
        t = f(n, 'SECTION', {});
        var o = d(t);
        a = f(o, 'H2', {});
        var u = d(a);
        (s = B(u, j)), u.forEach(p), (e = b(o)), (i = f(o, 'P', {}));
        var v = d(i);
        (_ = B(v, C)),
          v.forEach(p),
          o.forEach(p),
          (h = b(n)),
          (l = f(n, 'PRE', { class: !0 }));
        var V = d(l);
        V.forEach(p), ($ = b(n)), P(c.$$.fragment, n), this.h();
      },
      h() {
        L(l, 'class', 'language-svelte');
      },
      m(n, o) {
        g(n, t, o),
          m(t, a),
          m(a, s),
          m(t, e),
          m(t, i),
          m(i, _),
          g(n, h, o),
          g(n, l, o),
          (l.innerHTML = O),
          g(n, $, o),
          q(c, n, o),
          (x = !0);
      },
      p(n, [o]) {
        const u = {};
        o & 2 && (u.$$scope = { dirty: o, ctx: n }), c.$set(u);
      },
      i(n) {
        x || (F(c.$$.fragment, n), (x = !0));
      },
      o(n) {
        I(c.$$.fragment, n), (x = !1);
      },
      d(n) {
        n && p(t), n && p(h), n && p(l), n && p($), N(c, n);
      },
    }
  );
}
const Q = {
    title: 'BodyText',
    description: 'Parse mardown-formatted text.',
    slug: 'body-text',
  },
  { title: j, description: C, slug: tt } = Q;
function U(r) {
  return [
    `Bacon ipsum **dolor amet** cow tongue tri-tip.
  
  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.
  
  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.`,
  ];
}
class st extends H {
  constructor(t) {
    super(), S(this, t, U, K, D, {});
  }
}
export { st as default, Q as metadata };
