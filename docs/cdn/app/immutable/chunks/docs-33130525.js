import {
  S as P,
  i as D,
  s as L,
  e as f,
  c as k,
  a as d,
  d as r,
  b as M,
  g,
  E as v,
  t as y,
  k as E,
  w as R,
  h as C,
  m as w,
  x as b,
  J as m,
  y as j,
  q,
  o as B,
  B as I,
} from './index-83a5d9f9.js';
import { D as z } from './index-16ec1060.js';
import { m as N } from './main-ccba51e0.js';
import './paths-396f020f.js';
function A(p) {
  let s,
    a = N.parse(p[0]) + '';
  return {
    c() {
      (s = f('section')), this.h();
    },
    l(t) {
      s = k(t, 'SECTION', { class: !0 });
      var e = d(s);
      e.forEach(r), this.h();
    },
    h() {
      M(s, 'class', 'end-notes');
    },
    m(t, e) {
      g(t, s, e), (s.innerHTML = a);
    },
    p(t, [e]) {
      e & 1 && a !== (a = N.parse(t[0]) + '') && (s.innerHTML = a);
    },
    i: v,
    o: v,
    d(t) {
      t && r(s);
    },
  };
}
function F(p, s, a) {
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
class G extends P {
  constructor(s) {
    super(), D(this, s, F, A, L, { text: 0 });
  }
}
function K(p) {
  let s, a;
  return (
    (s = new G({ props: { text: p[0] } })),
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
    c,
    h;
  return (
    (c = new z({ props: { $$slots: { default: [K] }, $$scope: { ctx: p } } })),
    {
      c() {
        (s = f('section')),
          (a = f('h2')),
          (t = y(S)),
          (e = E()),
          (i = f('p')),
          (x = y(H)),
          ($ = E()),
          (l = f('pre')),
          (_ = E()),
          R(c.$$.fragment),
          this.h();
      },
      l(n) {
        s = k(n, 'SECTION', {});
        var o = d(s);
        a = k(o, 'H2', {});
        var u = d(a);
        (t = C(u, S)), u.forEach(r), (e = w(o)), (i = k(o, 'P', {}));
        var T = d(i);
        (x = C(T, H)),
          T.forEach(r),
          o.forEach(r),
          ($ = w(n)),
          (l = k(n, 'PRE', { class: !0 }));
        var J = d(l);
        J.forEach(r), (_ = w(n)), b(c.$$.fragment, n), this.h();
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
          j(c, n, o),
          (h = !0);
      },
      p(n, [o]) {
        const u = {};
        o & 2 && (u.$$scope = { dirty: o, ctx: n }), c.$set(u);
      },
      i(n) {
        h || (q(c.$$.fragment, n), (h = !0));
      },
      o(n) {
        B(c.$$.fragment, n), (h = !1);
      },
      d(n) {
        n && r(s), n && r($), n && r(l), n && r(_), I(c, n);
      },
    }
  );
}
const U = {
    title: 'EndNotes',
    description: 'End notes section.',
    slug: 'end-notes',
  },
  { title: S, description: H, slug: ss } = U;
function V(p) {
  return [
    `### Source

Reuters research.

### Credits

People.`,
  ];
}
class ts extends P {
  constructor(s) {
    super(), D(this, s, V, Q, L, {});
  }
}
export { ts as default, U as metadata };
