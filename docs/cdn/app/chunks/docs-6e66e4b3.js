import {
  S as y,
  i as C,
  s as N,
  aa as S,
  e as m,
  c as f,
  a as d,
  d as c,
  b as j,
  f as k,
  I as v,
  t as H,
  k as E,
  j as P,
  g as b,
  n as w,
  m as D,
  H as g,
  o as I,
  x as L,
  u as M,
  v as R,
} from './vendor-a3a8e12b.js';
import { D as A } from './index-95908c5c.js';
function F(p) {
  let s,
    a = S.parse(p[0]) + '';
  return {
    c() {
      (s = m('section')), this.h();
    },
    l(t) {
      s = f(t, 'SECTION', { class: !0 });
      var e = d(s);
      e.forEach(c), this.h();
    },
    h() {
      j(s, 'class', 'end-notes');
    },
    m(t, e) {
      k(t, s, e), (s.innerHTML = a);
    },
    p(t, [e]) {
      e & 1 && a !== (a = S.parse(t[0]) + '') && (s.innerHTML = a);
    },
    i: v,
    o: v,
    d(t) {
      t && c(s);
    },
  };
}
function G(p, s, a) {
  let { text: t } = s;
  if (!t)
    throw new Error(
      '"text" prop must be defined as a string for BodyText components'
    );
  return (
    (p.$$set = (e) => {
      'text' in e && a(0, (t = e.text));
    }),
    [t]
  );
}
class J extends y {
  constructor(s) {
    super();
    C(this, s, G, F, N, { text: 0 });
  }
}
function K(p) {
  let s, a;
  return (
    (s = new J({ props: { text: p[0] } })),
    {
      c() {
        P(s.$$.fragment);
      },
      l(t) {
        D(s.$$.fragment, t);
      },
      m(t, e) {
        I(s, t, e), (a = !0);
      },
      p: v,
      i(t) {
        a || (L(s.$$.fragment, t), (a = !0));
      },
      o(t) {
        M(s.$$.fragment, t), (a = !1);
      },
      d(t) {
        R(s, t);
      },
    }
  );
}
function Q(p) {
  let s,
    a,
    t,
    e,
    i,
    x,
    $,
    l,
    B = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> EndNotes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> markdownText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">### Source

Reuters research.

### Credits

People.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EndNotes</span> <span class="token attr-name">text="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>markdownText<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>`,
    _,
    r,
    h;
  return (
    (r = new A({ props: { $$slots: { default: [K] }, $$scope: { ctx: p } } })),
    {
      c() {
        (s = m('section')),
          (a = m('h2')),
          (t = H(O)),
          (e = E()),
          (i = m('p')),
          (x = H(q)),
          ($ = E()),
          (l = m('pre')),
          (_ = E()),
          P(r.$$.fragment),
          this.h();
      },
      l(n) {
        s = f(n, 'SECTION', {});
        var o = d(s);
        a = f(o, 'H2', {});
        var u = d(a);
        (t = b(u, O)), u.forEach(c), (e = w(o)), (i = f(o, 'P', {}));
        var T = d(i);
        (x = b(T, q)),
          T.forEach(c),
          o.forEach(c),
          ($ = w(n)),
          (l = f(n, 'PRE', { class: !0 }));
        var z = d(l);
        z.forEach(c), (_ = w(n)), D(r.$$.fragment, n), this.h();
      },
      h() {
        j(l, 'class', 'language-svelte');
      },
      m(n, o) {
        k(n, s, o),
          g(s, a),
          g(a, t),
          g(s, e),
          g(s, i),
          g(i, x),
          k(n, $, o),
          k(n, l, o),
          (l.innerHTML = B),
          k(n, _, o),
          I(r, n, o),
          (h = !0);
      },
      p(n, [o]) {
        const u = {};
        o & 2 && (u.$$scope = { dirty: o, ctx: n }), r.$set(u);
      },
      i(n) {
        h || (L(r.$$.fragment, n), (h = !0));
      },
      o(n) {
        M(r.$$.fragment, n), (h = !1);
      },
      d(n) {
        n && c(s), n && c($), n && c(l), n && c(_), R(r, n);
      },
    }
  );
}
const U = {
    title: 'EndNotes',
    description: 'End notes section.',
    slug: 'end-notes',
  },
  { title: O, description: q, slug: Y } = U;
function V(p) {
  return [
    `### Source

Reuters research.

### Credits

People.`,
  ];
}
class Z extends y {
  constructor(s) {
    super();
    C(this, s, V, Q, N, {});
  }
}
export { Z as default, U as metadata };
