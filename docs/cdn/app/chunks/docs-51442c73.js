import {
  C as ce,
  S as Y,
  i as Q,
  s as Z,
  a0 as pe,
  J as x,
  ac as ue,
  ad as se,
  e as D,
  t as G,
  k as F,
  j as S,
  c as I,
  a as q,
  g as L,
  d as u,
  n as A,
  m as W,
  b as h,
  $ as X,
  f as z,
  H as v,
  o as T,
  V,
  h as te,
  x as U,
  u as H,
  v as P,
  a6 as fe,
  R as ae,
  aa as de,
  Y as ne,
  U as me,
  L as he,
  A as ve,
  z as _e,
  ae as ge,
  M as ke,
  I as be,
} from './vendor-ea6fad36.js';
import { D as we } from './index-3fe6324c.js';
import './@component-docs_components-2b64be7c.js';
import './paths-6758d194.js';
const C = ce(650);
function $e(t) {
  let e,
    s,
    a,
    f = (t[5] || t[1]) + '',
    o,
    d,
    E,
    r,
    i,
    _,
    $,
    g,
    l,
    m,
    b,
    M,
    c,
    n,
    k,
    w,
    R;
  return (
    pe(t[17]),
    (_ = new x({ props: { icon: ue, fw: !0 } })),
    (n = new x({ props: { icon: se, fw: !0 } })),
    {
      c() {
        (e = D('div')),
          (s = D('div')),
          (a = D('div')),
          (o = G(f)),
          (d = G('px')),
          (r = F()),
          (i = D('div')),
          S(_.$$.fragment),
          ($ = F()),
          (g = D('div')),
          (l = D('div')),
          (m = F()),
          (b = D('div')),
          (M = F()),
          (c = D('div')),
          S(n.$$.fragment),
          this.h();
      },
      l(y) {
        e = I(y, 'DIV', { id: !0, class: !0 });
        var j = q(e);
        s = I(j, 'DIV', { class: !0 });
        var p = q(s);
        a = I(p, 'DIV', { class: !0, style: !0 });
        var N = q(a);
        (o = L(N, f)),
          (d = L(N, 'px')),
          N.forEach(u),
          (r = A(p)),
          (i = I(p, 'DIV', { tabindex: !0, class: !0 }));
        var B = q(i);
        W(_.$$.fragment, B),
          B.forEach(u),
          ($ = A(p)),
          (g = I(p, 'DIV', { class: !0 }));
        var K = q(g);
        (l = I(K, 'DIV', { class: !0 })),
          q(l).forEach(u),
          (m = A(K)),
          (b = I(K, 'DIV', { class: !0, tabindex: !0, style: !0 })),
          q(b).forEach(u),
          K.forEach(u),
          (M = A(p)),
          (c = I(p, 'DIV', { tabindex: !0, class: !0 }));
        var ee = q(c);
        W(n.$$.fragment, ee),
          ee.forEach(u),
          p.forEach(u),
          j.forEach(u),
          this.h();
      },
      h() {
        h(a, 'class', 'label svelte-ic1kpi'),
          h(a, 'style', (E = `opacity: ${t[3] || t[4] ? 1 : 0};`)),
          h(i, 'tabindex', '0'),
          h(i, 'class', 'icon left svelte-ic1kpi'),
          h(l, 'class', 'track svelte-ic1kpi'),
          h(b, 'class', 'handle svelte-ic1kpi'),
          h(b, 'tabindex', '0'),
          X(b, 'left', 'calc(' + t[6] * 100 + '% - 5px)'),
          h(g, 'class', 'slider-container svelte-ic1kpi'),
          h(c, 'tabindex', '0'),
          h(c, 'class', 'icon right svelte-ic1kpi'),
          h(s, 'class', 'slider svelte-ic1kpi'),
          h(e, 'id', 'resizer'),
          h(e, 'class', 'svelte-ic1kpi');
      },
      m(y, j) {
        z(y, e, j),
          v(e, s),
          v(s, a),
          v(a, o),
          v(a, d),
          v(s, r),
          v(s, i),
          T(_, i, null),
          v(s, $),
          v(s, g),
          v(g, l),
          v(g, m),
          v(g, b),
          t[18](g),
          v(s, M),
          v(s, c),
          T(n, c, null),
          (k = !0),
          w ||
            ((R = [
              V(window, 'mousemove', t[7]),
              V(window, 'mouseup', t[10]),
              V(window, 'keydown', t[8]),
              V(window, 'resize', t[17]),
              V(i, 'click', t[14]),
              V(i, 'focus', t[11]),
              V(i, 'mouseover', t[11]),
              V(i, 'mouseleave', t[12]),
              V(b, 'mousedown', t[9]),
              V(b, 'focus', t[11]),
              V(b, 'blur', t[12]),
              V(c, 'click', t[13]),
              V(c, 'focus', t[11]),
              V(c, 'mouseover', t[11]),
              V(c, 'mouseleave', t[12]),
            ]),
            (w = !0));
      },
      p(y, [j]) {
        (!k || j & 34) && f !== (f = (y[5] || y[1]) + '') && te(o, f),
          (!k || (j & 24 && E !== (E = `opacity: ${y[3] || y[4] ? 1 : 0};`))) &&
            h(a, 'style', E),
          (!k || j & 64) && X(b, 'left', 'calc(' + y[6] * 100 + '% - 5px)');
      },
      i(y) {
        k || (U(_.$$.fragment, y), U(n.$$.fragment, y), (k = !0));
      },
      o(y) {
        H(_.$$.fragment, y), H(n.$$.fragment, y), (k = !1);
      },
      d(y) {
        y && u(e), P(_), t[18](null), P(n), (w = !1), fe(R);
      },
    }
  );
}
const O = 90,
  J = 320;
function Ee(t, e, s) {
  let a, f, o, d;
  ae(t, C, (p) => s(1, (d = p)));
  let E,
    r = 1200,
    i = !1,
    _ = !1;
  const $ = (p) => Math.ceil(p / 5) * 5,
    g = () => Math.round(f * o + J);
  let l = null;
  const m = (p) => {
      if (!i || !E) return;
      const { left: N } = E.getBoundingClientRect();
      s(6, (o = Math.min(Math.max(0, p.pageX - N), O) / O)), s(5, (l = $(g())));
    },
    b = (p) => {
      if (!_) return;
      const { keyCode: N } = p,
        B = O / f;
      N === 39
        ? s(6, (o = Math.min(1, o + B / O)))
        : N === 37 && s(6, (o = Math.max(0, o - B / O))),
        C.set(g());
    },
    M = (p) => {
      s(3, (i = !0)), m(p);
    },
    c = () => {
      s(3, (i = !1)), s(5, (l = null)), C.set($(g()));
    },
    n = () => {
      s(4, (_ = !0));
    },
    k = () => {
      s(4, (_ = !1));
    },
    w = () => {
      d + 10 < a ? C.update((p) => p + 10) : C.set(a);
    },
    R = () => {
      d - 10 > J ? C.update((p) => p - 10) : C.set(J);
    };
  function y() {
    s(0, (r = window.innerWidth));
  }
  function j(p) {
    de[p ? 'unshift' : 'push'](() => {
      (E = p), s(2, E);
    });
  }
  return (
    (t.$$.update = () => {
      t.$$.dirty & 1 && s(15, (a = Math.min(r - 70, 1200))),
        t.$$.dirty & 32768 && s(16, (f = a - J)),
        t.$$.dirty & 32770 && d > a && C.set(a),
        t.$$.dirty & 65538 && s(6, (o = (d - J) / f));
    }),
    [r, d, E, i, _, l, o, m, b, M, c, n, k, w, R, a, f, y, j]
  );
}
class ye extends Y {
  constructor(e) {
    super();
    Q(this, e, Ee, $e, Z, {});
  }
}
function re(t, e, s) {
  const a = t.slice();
  return (a[6] = e[s]), a;
}
function le(t) {
  let e,
    s = t[6].replace('/embeds/', '') + '',
    a,
    f,
    o,
    d;
  function E() {
    return t[3](t[6]);
  }
  return {
    c() {
      (e = D('button')), (a = G(s)), (f = F()), this.h();
    },
    l(r) {
      e = I(r, 'BUTTON', { class: !0 });
      var i = q(e);
      (a = L(i, s)), (f = A(i)), i.forEach(u), this.h();
    },
    h() {
      h(e, 'class', 'svelte-1oq98q'), ne(e, 'active', t[1] === t[6]);
    },
    m(r, i) {
      z(r, e, i), v(e, a), v(e, f), o || ((d = V(e, 'click', E)), (o = !0));
    },
    p(r, i) {
      (t = r),
        i & 1 && s !== (s = t[6].replace('/embeds/', '') + '') && te(a, s),
        i & 3 && ne(e, 'active', t[1] === t[6]);
    },
    d(r) {
      r && u(e), (o = !1), d();
    },
  };
}
function De(t) {
  let e,
    s,
    a,
    f,
    o,
    d,
    E,
    r,
    i,
    _,
    $,
    g,
    l,
    m,
    b,
    M = t[0],
    c = [];
  for (let n = 0; n < M.length; n += 1) c[n] = le(re(t, M, n));
  return (
    (g = new x({ props: { icon: se } })),
    (m = new ye({})),
    {
      c() {
        (e = D('div')),
          (s = D('header')),
          (a = D('img')),
          (o = F()),
          (d = D('nav'));
        for (let n = 0; n < c.length; n += 1) c[n].c();
        (E = F()),
          (r = D('div')),
          (i = F()),
          (_ = D('div')),
          ($ = D('a')),
          S(g.$$.fragment),
          (l = F()),
          S(m.$$.fragment),
          this.h();
      },
      l(n) {
        e = I(n, 'DIV', { class: !0 });
        var k = q(e);
        s = I(k, 'HEADER', { class: !0 });
        var w = q(s);
        (a = I(w, 'IMG', { src: !0, alt: !0 })),
          w.forEach(u),
          (o = A(k)),
          (d = I(k, 'NAV', { class: !0 }));
        var R = q(d);
        for (let p = 0; p < c.length; p += 1) c[p].l(R);
        R.forEach(u),
          (E = A(k)),
          (r = I(k, 'DIV', { id: !0, style: !0, class: !0 })),
          q(r).forEach(u),
          k.forEach(u),
          (i = A(n)),
          (_ = I(n, 'DIV', { id: !0, class: !0 }));
        var y = q(_);
        $ = I(y, 'A', { rel: !0, href: !0, class: !0 });
        var j = q($);
        W(g.$$.fragment, j),
          j.forEach(u),
          y.forEach(u),
          (l = A(n)),
          W(m.$$.fragment, n),
          this.h();
      },
      h() {
        me(
          a.src,
          (f =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg')
        ) || h(a, 'src', f),
          h(a, 'alt', ''),
          h(s, 'class', 'svelte-1oq98q'),
          h(d, 'class', 'svelte-1oq98q'),
          h(r, 'id', 'frame-parent'),
          X(r, 'width', t[2] + 'px'),
          h(r, 'class', 'svelte-1oq98q'),
          h(e, 'class', 'container'),
          h($, 'rel', 'external'),
          h($, 'href', '/'),
          h($, 'class', 'svelte-1oq98q'),
          h(_, 'id', 'home-link'),
          h(_, 'class', 'svelte-1oq98q');
      },
      m(n, k) {
        z(n, e, k), v(e, s), v(s, a), v(e, o), v(e, d);
        for (let w = 0; w < c.length; w += 1) c[w].m(d, null);
        v(e, E),
          v(e, r),
          z(n, i, k),
          z(n, _, k),
          v(_, $),
          T(g, $, null),
          z(n, l, k),
          T(m, n, k),
          (b = !0);
      },
      p(n, [k]) {
        if (k & 3) {
          M = n[0];
          let w;
          for (w = 0; w < M.length; w += 1) {
            const R = re(n, M, w);
            c[w] ? c[w].p(R, k) : ((c[w] = le(R)), c[w].c(), c[w].m(d, null));
          }
          for (; w < c.length; w += 1) c[w].d(1);
          c.length = M.length;
        }
        (!b || k & 4) && X(r, 'width', n[2] + 'px');
      },
      i(n) {
        b || (U(g.$$.fragment, n), U(m.$$.fragment, n), (b = !0));
      },
      o(n) {
        H(g.$$.fragment, n), H(m.$$.fragment, n), (b = !1);
      },
      d(n) {
        n && u(e), he(c, n), n && u(i), n && u(_), P(g), n && u(l), P(m, n);
      },
    }
  );
}
function Ie(t, e, s) {
  let a;
  ae(t, C, (r) => s(2, (a = r)));
  let { embeds: f } = e,
    o = f[0];
  const d = (r) => {
    new ge.Parent(
      'frame-parent',
      /^http/.test(r) ? r : ke(window.location.origin, r)
    );
  };
  ve(() => {
    d(o);
  }),
    _e(() => {
      d(o);
    });
  const E = (r) => {
    s(1, (o = r));
  };
  return (
    (t.$$set = (r) => {
      'embeds' in r && s(0, (f = r.embeds));
    }),
    [f, o, a, E]
  );
}
class qe extends Y {
  constructor(e) {
    super();
    Q(this, e, Ie, De, Z, { embeds: 0 });
  }
}
function Ve(t) {
  let e, s;
  return (
    (e = new qe({ props: { embeds: t[0] } })),
    {
      c() {
        S(e.$$.fragment);
      },
      l(a) {
        W(e.$$.fragment, a);
      },
      m(a, f) {
        T(e, a, f), (s = !0);
      },
      p: be,
      i(a) {
        s || (U(e.$$.fragment, a), (s = !0));
      },
      o(a) {
        H(e.$$.fragment, a), (s = !1);
      },
      d(a) {
        P(e, a);
      },
    }
  );
}
function Me(t) {
  let e,
    s,
    a,
    f,
    o,
    d,
    E,
    r,
    i = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Framer <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> embeds <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'/embeds/my-chart/index.html'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Framer</span> <span class="token attr-name">embeds=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>embeds<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,
    _,
    $,
    g;
  return (
    ($ = new we({
      props: { fluid: !0, $$slots: { default: [Ve] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        (e = D('section')),
          (s = D('h2')),
          (a = G(oe)),
          (f = F()),
          (o = D('p')),
          (d = G(ie)),
          (E = F()),
          (r = D('pre')),
          (_ = F()),
          S($.$$.fragment),
          this.h();
      },
      l(l) {
        e = I(l, 'SECTION', {});
        var m = q(e);
        s = I(m, 'H2', {});
        var b = q(s);
        (a = L(b, oe)), b.forEach(u), (f = A(m)), (o = I(m, 'P', {}));
        var M = q(o);
        (d = L(M, ie)),
          M.forEach(u),
          m.forEach(u),
          (E = A(l)),
          (r = I(l, 'PRE', { class: !0 }));
        var c = q(r);
        c.forEach(u), (_ = A(l)), W($.$$.fragment, l), this.h();
      },
      h() {
        h(r, 'class', 'language-svelte');
      },
      m(l, m) {
        z(l, e, m),
          v(e, s),
          v(s, a),
          v(e, f),
          v(e, o),
          v(o, d),
          z(l, E, m),
          z(l, r, m),
          (r.innerHTML = i),
          z(l, _, m),
          T($, l, m),
          (g = !0);
      },
      p(l, [m]) {
        const b = {};
        m & 2 && (b.$$scope = { dirty: m, ctx: l }), $.$set(b);
      },
      i(l) {
        g || (U($.$$.fragment, l), (g = !0));
      },
      o(l) {
        H($.$$.fragment, l), (g = !1);
      },
      d(l) {
        l && u(e), l && u(E), l && u(r), l && u(_), P($, l);
      },
    }
  );
}
const je = {
    title: 'Framer',
    description: 'An embed tool for development in the graphics kit.',
    slug: 'framer',
  },
  { title: oe, description: ie, slug: Ne } = je;
function Fe(t) {
  return [
    [
      'https://graphics.reuters.com/USA-CONGRESS/FUNDRAISING/zjvqkawjlvx/embeds/en/embed/',
    ],
  ];
}
class Se extends Y {
  constructor(e) {
    super();
    Q(this, e, Fe, Me, Z, {});
  }
}
export { Se as default, je as metadata };
