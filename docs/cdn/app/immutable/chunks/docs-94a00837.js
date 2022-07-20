import {
  S as G,
  i as K,
  s as Q,
  e as f,
  c as k,
  a as m,
  d as i,
  b as V,
  f as r,
  g as u,
  J as d,
  E as B,
  t as R,
  k as E,
  w as j,
  h as b,
  m as S,
  x as q,
  y,
  q as L,
  o as M,
  B as N,
} from './index-83a5d9f9.js';
import './main-357f7a10.js';
import { D as A } from './index-16ec1060.js';
import './paths-396f020f.js';
function sn(l) {
  let n, t, a;
  return {
    c() {
      (n = f('div')), (t = f('div')), (a = f('div')), this.h();
    },
    l(e) {
      n = k(e, 'DIV', { style: !0 });
      var o = m(n);
      t = k(o, 'DIV', { class: !0 });
      var g = m(t);
      (a = k(g, 'DIV', { class: !0 })),
        m(a).forEach(i),
        g.forEach(i),
        o.forEach(i),
        this.h();
    },
    h() {
      V(a, 'class', 'spinner svelte-1ocn09'),
        V(t, 'class', 'spinner-container svelte-1ocn09'),
        r(n, '--spinner-colour', l[0]),
        r(n, '--spinner-ring-width', l[2] + 'px'),
        r(n, '--spinner-ring-offset', '-' + l[2] + 'px'),
        r(n, '--spinner-speed', l[3] + 's'),
        r(n, 'width', l[1] + 'px'),
        r(n, 'height', l[1] + 'px'),
        r(n, 'margin', '0 auto');
    },
    m(e, o) {
      u(e, n, o), d(n, t), d(t, a);
    },
    p(e, [o]) {
      o & 1 && r(n, '--spinner-colour', e[0]),
        o & 4 && r(n, '--spinner-ring-width', e[2] + 'px'),
        o & 4 && r(n, '--spinner-ring-offset', '-' + e[2] + 'px'),
        o & 8 && r(n, '--spinner-speed', e[3] + 's'),
        o & 2 && r(n, 'width', e[1] + 'px'),
        o & 2 && r(n, 'height', e[1] + 'px');
    },
    i: B,
    o: B,
    d(e) {
      e && i(n);
    },
  };
}
function an(l, n, t) {
  let { colour: a = '#666' } = n,
    { width: e = 40 } = n,
    { ringWidth: o = 6 } = n,
    { speed: g = 0.8 } = n;
  return (
    (l.$$set = (c) => {
      'colour' in c && t(0, (a = c.colour)),
        'width' in c && t(1, (e = c.width)),
        'ringWidth' in c && t(2, (o = c.ringWidth)),
        'speed' in c && t(3, (g = c.speed));
    }),
    [a, e, o, g]
  );
}
class U extends G {
  constructor(n) {
    super(),
      K(this, n, an, sn, Q, { colour: 0, width: 1, ringWidth: 2, speed: 3 });
  }
}
function tn(l) {
  let n, t;
  return (
    (n = new U({})),
    {
      c() {
        j(n.$$.fragment);
      },
      l(a) {
        q(n.$$.fragment, a);
      },
      m(a, e) {
        y(n, a, e), (t = !0);
      },
      i(a) {
        t || (L(n.$$.fragment, a), (t = !0));
      },
      o(a) {
        M(n.$$.fragment, a), (t = !1);
      },
      d(a) {
        N(n, a);
      },
    }
  );
}
function en(l) {
  let n, t;
  return (
    (n = new U({
      props: { colour: 'purple', width: '60', ringWidth: '16', speed: '1.4' },
    })),
    {
      c() {
        j(n.$$.fragment);
      },
      l(a) {
        q(n.$$.fragment, a);
      },
      m(a, e) {
        y(n, a, e), (t = !0);
      },
      p: B,
      i(a) {
        t || (L(n.$$.fragment, a), (t = !0));
      },
      o(a) {
        M(n.$$.fragment, a), (t = !1);
      },
      d(a) {
        N(n, a);
      },
    }
  );
}
function pn(l) {
  let n,
    t,
    a,
    e,
    o,
    g,
    c,
    v,
    X = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Spinner <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spinner</span> <span class="token punctuation">/></span></span></code>`,
    I,
    h,
    x,
    w,
    C,
    O,
    P,
    $,
    Y = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Spinner <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spinner</span> <span class="token attr-name">colour</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>purple<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span> <span class="token attr-name">ringWidth</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>16<span class="token punctuation">"</span></span> <span class="token attr-name">speed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1.4<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>`,
    T,
    _,
    H;
  return (
    (h = new A({ props: { $$slots: { default: [tn] }, $$scope: { ctx: l } } })),
    (_ = new A({ props: { $$slots: { default: [en] }, $$scope: { ctx: l } } })),
    {
      c() {
        (n = f('section')),
          (t = f('h2')),
          (a = R(F)),
          (e = E()),
          (o = f('p')),
          (g = R('Simple loading spinner.')),
          (c = E()),
          (v = f('pre')),
          (I = E()),
          j(h.$$.fragment),
          (x = E()),
          (w = f('section')),
          (C = f('p')),
          (O = R('Customise it!')),
          (P = E()),
          ($ = f('pre')),
          (T = E()),
          j(_.$$.fragment),
          this.h();
      },
      l(s) {
        n = k(s, 'SECTION', {});
        var p = m(n);
        t = k(p, 'H2', {});
        var D = m(t);
        (a = b(D, F)), D.forEach(i), (e = S(p)), (o = k(p, 'P', {}));
        var W = m(o);
        (g = b(W, 'Simple loading spinner.')),
          W.forEach(i),
          p.forEach(i),
          (c = S(s)),
          (v = k(s, 'PRE', { class: !0 }));
        var Z = m(v);
        Z.forEach(i),
          (I = S(s)),
          q(h.$$.fragment, s),
          (x = S(s)),
          (w = k(s, 'SECTION', {}));
        var J = m(w);
        C = k(J, 'P', {});
        var z = m(C);
        (O = b(z, 'Customise it!')),
          z.forEach(i),
          J.forEach(i),
          (P = S(s)),
          ($ = k(s, 'PRE', { class: !0 }));
        var nn = m($);
        nn.forEach(i), (T = S(s)), q(_.$$.fragment, s), this.h();
      },
      h() {
        V(v, 'class', 'language-svelte'), V($, 'class', 'language-svelte');
      },
      m(s, p) {
        u(s, n, p),
          d(n, t),
          d(t, a),
          d(n, e),
          d(n, o),
          d(o, g),
          u(s, c, p),
          u(s, v, p),
          (v.innerHTML = X),
          u(s, I, p),
          y(h, s, p),
          u(s, x, p),
          u(s, w, p),
          d(w, C),
          d(C, O),
          u(s, P, p),
          u(s, $, p),
          ($.innerHTML = Y),
          u(s, T, p),
          y(_, s, p),
          (H = !0);
      },
      p(s, [p]) {
        const D = {};
        p & 1 && (D.$$scope = { dirty: p, ctx: s }), h.$set(D);
        const W = {};
        p & 1 && (W.$$scope = { dirty: p, ctx: s }), _.$set(W);
      },
      i(s) {
        H || (L(h.$$.fragment, s), L(_.$$.fragment, s), (H = !0));
      },
      o(s) {
        M(h.$$.fragment, s), M(_.$$.fragment, s), (H = !1);
      },
      d(s) {
        s && i(n),
          s && i(c),
          s && i(v),
          s && i(I),
          N(h, s),
          s && i(x),
          s && i(w),
          s && i(P),
          s && i($),
          s && i(T),
          N(_, s);
      },
    }
  );
}
const on = {
    title: 'Spinner',
    description: 'Spinner component.',
    slug: 'spinner',
  },
  { title: F, description: fn, slug: kn } = on;
class mn extends G {
  constructor(n) {
    super(), K(this, n, null, pn, Q, {});
  }
}
export { mn as default, on as metadata };
