import {
  S as y,
  i as C,
  s as N,
  a3 as S,
  e as m,
  c as f,
  a as d,
  d as r,
  b as j,
  f as k,
  I as v,
  t as H,
  k as E,
  j as P,
  g as D,
  n as w,
  m as I,
  H as g,
  o as L,
  x as M,
  u as R,
  v as b,
} from './vendor-7ea24681.js';
import { D as A } from './index-457577f8.js';
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
      e.forEach(r), this.h();
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
      t && r(s);
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
        I(s.$$.fragment, t);
      },
      m(t, e) {
        L(s, t, e), (a = !0);
      },
      p: v,
      i(t) {
        a || (M(s.$$.fragment, t), (a = !0));
      },
      o(t) {
        R(s.$$.fragment, t), (a = !1);
      },
      d(t) {
        b(s, t);
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
    c,
    h;
  return (
    (c = new A({ props: { $$slots: { default: [K] }, $$scope: { ctx: p } } })),
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
          P(c.$$.fragment),
          this.h();
      },
      l(n) {
        s = f(n, 'SECTION', {});
        var o = d(s);
        a = f(o, 'H2', {});
        var u = d(a);
        (t = D(u, O)), u.forEach(r), (e = w(o)), (i = f(o, 'P', {}));
        var T = d(i);
        (x = D(T, q)),
          T.forEach(r),
          o.forEach(r),
          ($ = w(n)),
          (l = f(n, 'PRE', { class: !0 }));
        var z = d(l);
        z.forEach(r), (_ = w(n)), I(c.$$.fragment, n), this.h();
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
          L(c, n, o),
          (h = !0);
      },
      p(n, [o]) {
        const u = {};
        o & 2 && (u.$$scope = { dirty: o, ctx: n }), c.$set(u);
      },
      i(n) {
        h || (M(c.$$.fragment, n), (h = !0));
      },
      o(n) {
        R(c.$$.fragment, n), (h = !1);
      },
      d(n) {
        n && r(s), n && r($), n && r(l), n && r(_), b(c, n);
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
