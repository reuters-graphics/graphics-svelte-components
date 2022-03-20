import {
  S as H,
  i as S,
  s as D,
  ac as T,
  e as k,
  c as d,
  a as f,
  d as p,
  b as L,
  g,
  K as w,
  t as B,
  k as y,
  w as M,
  h as E,
  m as b,
  x as P,
  J as m,
  y as q,
  q as F,
  o as I,
  B as N,
} from './vendor-5176a1fc.js';
import { D as J } from './index-9949a7c2.js';
function K(r) {
  let t,
    n = T.parse(r[0]) + '';
  return {
    c() {
      (t = k('section')), this.h();
    },
    l(s) {
      t = d(s, 'SECTION', { class: !0 });
      var e = f(t);
      e.forEach(p), this.h();
    },
    h() {
      L(t, 'class', 'body-text');
    },
    m(s, e) {
      g(s, t, e), (t.innerHTML = n);
    },
    p(s, [e]) {
      e & 1 && n !== (n = T.parse(s[0]) + '') && (t.innerHTML = n);
    },
    i: w,
    o: w,
    d(s) {
      s && p(t);
    },
  };
}
function R(r, t, n) {
  let { text: s } = t;
  if (!s)
    throw new Error(
      '"text" prop must be defined as a string for BodyText components'
    );
  return (
    (r.$$set = (e) => {
      'text' in e && n(0, (s = e.text));
    }),
    [s]
  );
}
class z extends H {
  constructor(t) {
    super();
    S(this, t, R, K, D, { text: 0 });
  }
}
function A(r) {
  let t, n;
  return (
    (t = new z({ props: { text: r[0] } })),
    {
      c() {
        M(t.$$.fragment);
      },
      l(s) {
        P(t.$$.fragment, s);
      },
      m(s, e) {
        q(t, s, e), (n = !0);
      },
      p: w,
      i(s) {
        n || (F(t.$$.fragment, s), (n = !0));
      },
      o(s) {
        I(t.$$.fragment, s), (n = !1);
      },
      d(s) {
        N(t, s);
      },
    }
  );
}
function G(r) {
  let t,
    n,
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
    (c = new J({ props: { $$slots: { default: [A] }, $$scope: { ctx: r } } })),
    {
      c() {
        (t = k('section')),
          (n = k('h2')),
          (s = B(j)),
          (e = y()),
          (i = k('p')),
          (_ = B(C)),
          (h = y()),
          (l = k('pre')),
          ($ = y()),
          M(c.$$.fragment),
          this.h();
      },
      l(a) {
        t = d(a, 'SECTION', {});
        var o = f(t);
        n = d(o, 'H2', {});
        var u = f(n);
        (s = E(u, j)), u.forEach(p), (e = b(o)), (i = d(o, 'P', {}));
        var v = f(i);
        (_ = E(v, C)),
          v.forEach(p),
          o.forEach(p),
          (h = b(a)),
          (l = d(a, 'PRE', { class: !0 }));
        var V = f(l);
        V.forEach(p), ($ = b(a)), P(c.$$.fragment, a), this.h();
      },
      h() {
        L(l, 'class', 'language-svelte');
      },
      m(a, o) {
        g(a, t, o),
          m(t, n),
          m(n, s),
          m(t, e),
          m(t, i),
          m(i, _),
          g(a, h, o),
          g(a, l, o),
          (l.innerHTML = O),
          g(a, $, o),
          q(c, a, o),
          (x = !0);
      },
      p(a, [o]) {
        const u = {};
        o & 2 && (u.$$scope = { dirty: o, ctx: a }), c.$set(u);
      },
      i(a) {
        x || (F(c.$$.fragment, a), (x = !0));
      },
      o(a) {
        I(c.$$.fragment, a), (x = !1);
      },
      d(a) {
        a && p(t), a && p(h), a && p(l), a && p($), N(c, a);
      },
    }
  );
}
const Q = {
    title: 'BodyText',
    description: 'Parse mardown-formatted text.',
    slug: 'body-text',
  },
  { title: j, description: C, slug: Y } = Q;
function U(r) {
  return [
    `Bacon ipsum **dolor amet** cow tongue tri-tip.
  
  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.
  
  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.`,
  ];
}
class Z extends H {
  constructor(t) {
    super();
    S(this, t, U, G, D, {});
  }
}
export { Z as default, Q as metadata };
