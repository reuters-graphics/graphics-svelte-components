import {
  S as T,
  i as B,
  s as E,
  aa as j,
  e as m,
  c as k,
  a as d,
  d as p,
  b as H,
  f,
  I as b,
  t as C,
  k as v,
  j as S,
  g as D,
  n as y,
  m as I,
  H as g,
  o as L,
  x as M,
  u as P,
  v as F,
} from './vendor-a3a8e12b.js';
import { D as R } from './index-95908c5c.js';
function z(r) {
  let t,
    n = j.parse(r[0]) + '';
  return {
    c() {
      (t = m('section')), this.h();
    },
    l(s) {
      t = k(s, 'SECTION', { class: !0 });
      var e = d(t);
      e.forEach(p), this.h();
    },
    h() {
      H(t, 'class', 'body-text');
    },
    m(s, e) {
      f(s, t, e), (t.innerHTML = n);
    },
    p(s, [e]) {
      e & 1 && n !== (n = j.parse(s[0]) + '') && (t.innerHTML = n);
    },
    i: b,
    o: b,
    d(s) {
      s && p(t);
    },
  };
}
function A(r, t, n) {
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
class G extends T {
  constructor(t) {
    super();
    B(this, t, A, z, E, { text: 0 });
  }
}
function J(r) {
  let t, n;
  return (
    (t = new G({ props: { text: r[0] } })),
    {
      c() {
        S(t.$$.fragment);
      },
      l(s) {
        I(t.$$.fragment, s);
      },
      m(s, e) {
        L(t, s, e), (n = !0);
      },
      p: b,
      i(s) {
        n || (M(t.$$.fragment, s), (n = !0));
      },
      o(s) {
        P(t.$$.fragment, s), (n = !1);
      },
      d(s) {
        F(t, s);
      },
    }
  );
}
function K(r) {
  let t,
    n,
    s,
    e,
    i,
    _,
    h,
    l,
    V = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BodyText <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> markdownText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bacon ipsum **dolor amet** cow tongue tri-tip.
  
  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.
  
  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BodyText</span> <span class="token attr-name">text="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>markdownText<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>`,
    x,
    c,
    $;
  return (
    (c = new R({ props: { $$slots: { default: [J] }, $$scope: { ctx: r } } })),
    {
      c() {
        (t = m('section')),
          (n = m('h2')),
          (s = C(N)),
          (e = v()),
          (i = m('p')),
          (_ = C(O)),
          (h = v()),
          (l = m('pre')),
          (x = v()),
          S(c.$$.fragment),
          this.h();
      },
      l(a) {
        t = k(a, 'SECTION', {});
        var o = d(t);
        n = k(o, 'H2', {});
        var u = d(n);
        (s = D(u, N)), u.forEach(p), (e = y(o)), (i = k(o, 'P', {}));
        var w = d(i);
        (_ = D(w, O)),
          w.forEach(p),
          o.forEach(p),
          (h = y(a)),
          (l = k(a, 'PRE', { class: !0 }));
        var q = d(l);
        q.forEach(p), (x = y(a)), I(c.$$.fragment, a), this.h();
      },
      h() {
        H(l, 'class', 'language-svelte');
      },
      m(a, o) {
        f(a, t, o),
          g(t, n),
          g(n, s),
          g(t, e),
          g(t, i),
          g(i, _),
          f(a, h, o),
          f(a, l, o),
          (l.innerHTML = V),
          f(a, x, o),
          L(c, a, o),
          ($ = !0);
      },
      p(a, [o]) {
        const u = {};
        o & 2 && (u.$$scope = { dirty: o, ctx: a }), c.$set(u);
      },
      i(a) {
        $ || (M(c.$$.fragment, a), ($ = !0));
      },
      o(a) {
        P(c.$$.fragment, a), ($ = !1);
      },
      d(a) {
        a && p(t), a && p(h), a && p(l), a && p(x), F(c, a);
      },
    }
  );
}
const Q = {
    title: 'BodyText',
    description: 'Parse mardown-formatted text.',
    slug: 'body-text',
  },
  { title: N, description: O, slug: Y } = Q;
function U(r) {
  return [
    `Bacon ipsum **dolor amet** cow tongue tri-tip.
  
  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.
  
  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.`,
  ];
}
class Z extends T {
  constructor(t) {
    super();
    B(this, t, U, K, E, {});
  }
}
export { Z as default, Q as metadata };
