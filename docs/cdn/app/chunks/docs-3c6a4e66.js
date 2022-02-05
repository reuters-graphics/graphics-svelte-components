import {
  S as T,
  i as B,
  s as E,
  ab as j,
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
} from './vendor-ea6fad36.js';
import { D as R } from './index-3fe6324c.js';
function z(r) {
  let t,
    a = j.parse(r[0]) + '';
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
      f(s, t, e), (t.innerHTML = a);
    },
    p(s, [e]) {
      e & 1 && a !== (a = j.parse(s[0]) + '') && (t.innerHTML = a);
    },
    i: b,
    o: b,
    d(s) {
      s && p(t);
    },
  };
}
function A(r, t, a) {
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
class G extends T {
  constructor(t) {
    super();
    B(this, t, A, z, E, { text: 0 });
  }
}
function J(r) {
  let t, a;
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
        L(t, s, e), (a = !0);
      },
      p: b,
      i(s) {
        a || (M(t.$$.fragment, s), (a = !0));
      },
      o(s) {
        P(t.$$.fragment, s), (a = !1);
      },
      d(s) {
        F(t, s);
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
          (a = m('h2')),
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
      l(n) {
        t = k(n, 'SECTION', {});
        var o = d(t);
        a = k(o, 'H2', {});
        var u = d(a);
        (s = D(u, N)), u.forEach(p), (e = y(o)), (i = k(o, 'P', {}));
        var w = d(i);
        (_ = D(w, O)),
          w.forEach(p),
          o.forEach(p),
          (h = y(n)),
          (l = k(n, 'PRE', { class: !0 }));
        var q = d(l);
        q.forEach(p), (x = y(n)), I(c.$$.fragment, n), this.h();
      },
      h() {
        H(l, 'class', 'language-svelte');
      },
      m(n, o) {
        f(n, t, o),
          g(t, a),
          g(a, s),
          g(t, e),
          g(t, i),
          g(i, _),
          f(n, h, o),
          f(n, l, o),
          (l.innerHTML = V),
          f(n, x, o),
          L(c, n, o),
          ($ = !0);
      },
      p(n, [o]) {
        const u = {};
        o & 2 && (u.$$scope = { dirty: o, ctx: n }), c.$set(u);
      },
      i(n) {
        $ || (M(c.$$.fragment, n), ($ = !0));
      },
      o(n) {
        P(c.$$.fragment, n), ($ = !1);
      },
      d(n) {
        n && p(t), n && p(h), n && p(l), n && p(x), F(c, n);
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
