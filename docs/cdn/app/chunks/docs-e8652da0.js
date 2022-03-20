import {
  S as P,
  i as D,
  s as L,
  ac as y,
  e as f,
  c as k,
  a as d,
  d as c,
  b as M,
  g,
  K as v,
  t as C,
  k as w,
  w as R,
  h as N,
  m as E,
  x as b,
  J as m,
  y as j,
  q,
  o as B,
  B as I,
} from './vendor-f398e5e0.js';
import { D as K } from './index-9e15525f.js';
function z(p) {
  let s,
    a = y.parse(p[0]) + '';
  return {
    c() {
      (s = f('section')), this.h();
    },
    l(t) {
      s = k(t, 'SECTION', { class: !0 });
      var e = d(s);
      e.forEach(c), this.h();
    },
    h() {
      M(s, 'class', 'end-notes');
    },
    m(t, e) {
      g(t, s, e), (s.innerHTML = a);
    },
    p(t, [e]) {
      e & 1 && a !== (a = y.parse(t[0]) + '') && (s.innerHTML = a);
    },
    i: v,
    o: v,
    d(t) {
      t && c(s);
    },
  };
}
function A(p, s, a) {
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
class F extends P {
  constructor(s) {
    super();
    D(this, s, A, z, L, { text: 0 });
  }
}
function G(p) {
  let s, a;
  return (
    (s = new F({ props: { text: p[0] } })),
    {
      c() {
        R(s.$$.fragment);
      },
      l(t) {
        b(s.$$.fragment, t);
      },
      m(t, e) {
        j(s, t, e), (a = !0);
      },
      p: v,
      i(t) {
        a || (q(s.$$.fragment, t), (a = !0));
      },
      o(t) {
        B(s.$$.fragment, t), (a = !1);
      },
      d(t) {
        I(s, t);
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
    O = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    (r = new K({ props: { $$slots: { default: [G] }, $$scope: { ctx: p } } })),
    {
      c() {
        (s = f('section')),
          (a = f('h2')),
          (t = C(S)),
          (e = w()),
          (i = f('p')),
          (x = C(H)),
          ($ = w()),
          (l = f('pre')),
          (_ = w()),
          R(r.$$.fragment),
          this.h();
      },
      l(n) {
        s = k(n, 'SECTION', {});
        var o = d(s);
        a = k(o, 'H2', {});
        var u = d(a);
        (t = N(u, S)), u.forEach(c), (e = E(o)), (i = k(o, 'P', {}));
        var T = d(i);
        (x = N(T, H)),
          T.forEach(c),
          o.forEach(c),
          ($ = E(n)),
          (l = k(n, 'PRE', { class: !0 }));
        var J = d(l);
        J.forEach(c), (_ = E(n)), b(r.$$.fragment, n), this.h();
      },
      h() {
        M(l, 'class', 'language-svelte');
      },
      m(n, o) {
        g(n, s, o),
          m(s, a),
          m(a, t),
          m(s, e),
          m(s, i),
          m(i, x),
          g(n, $, o),
          g(n, l, o),
          (l.innerHTML = O),
          g(n, _, o),
          j(r, n, o),
          (h = !0);
      },
      p(n, [o]) {
        const u = {};
        o & 2 && (u.$$scope = { dirty: o, ctx: n }), r.$set(u);
      },
      i(n) {
        h || (q(r.$$.fragment, n), (h = !0));
      },
      o(n) {
        B(r.$$.fragment, n), (h = !1);
      },
      d(n) {
        n && c(s), n && c($), n && c(l), n && c(_), I(r, n);
      },
    }
  );
}
const U = {
    title: 'EndNotes',
    description: 'End notes section.',
    slug: 'end-notes',
  },
  { title: S, description: H, slug: Y } = U;
function V(p) {
  return [
    `### Source

Reuters research.

### Credits

People.`,
  ];
}
class Z extends P {
  constructor(s) {
    super();
    D(this, s, V, Q, L, {});
  }
}
export { Z as default, U as metadata };
