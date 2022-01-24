var Ur = Object.defineProperty,
  Vr = Object.defineProperties;
var Hr = Object.getOwnPropertyDescriptors;
var pr = Object.getOwnPropertySymbols;
var Fr = Object.prototype.hasOwnProperty,
  qr = Object.prototype.propertyIsEnumerable;
var cr = (r, n, e) =>
    n in r
      ? Ur(r, n, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (r[n] = e),
  ur = (r, n) => {
    for (var e in n || (n = {})) Fr.call(n, e) && cr(r, e, n[e]);
    if (pr) for (var e of pr(n)) qr.call(n, e) && cr(r, e, n[e]);
    return r;
  },
  ir = (r, n) => Vr(r, Hr(n));
import { _ as qo } from './preload-helper-438f94a3.js';
import {
  S as x,
  i as nn,
  s as sn,
  l as B,
  f as b,
  x as P,
  e as f,
  k as y,
  c as d,
  a as k,
  n as $,
  d as p,
  b as E,
  Y as $n,
  H as a,
  p as pt,
  q as ct,
  r as V,
  u as C,
  v as O,
  w as H,
  j as T,
  o as j,
  L as Qo,
  B as ut,
  m as z,
  I,
  aa as it,
  O as Qr,
  Q as Yr,
  ac as Jr,
  a9 as Yo,
  ad as Jo,
  ae as Ko,
  t as m,
  g as h,
  V as Kr,
  h as Wr,
  a1 as fr,
  a2 as dr,
} from './vendor-b82e5b83.js';
import { D as Xn } from './index-75ffd758.js';
import './@component-docs-989e6ca0.js';
import './paths-6758d194.js';
function kr(r, n, e) {
  const s = r.slice();
  return (s[4] = n[e]), (s[6] = e), s;
}
function gr(r) {
  let n, e, s, t;
  const c = [r[4].backgroundProps || {}];
  var o = r[4].background;
  function u(l) {
    let g = {};
    for (let v = 0; v < c.length; v += 1) g = ut(g, c[v]);
    return { props: g };
  }
  return (
    o && (e = new o(u())),
    {
      c() {
        (n = f('div')), e && T(e.$$.fragment), (s = y()), this.h();
      },
      l(l) {
        n = d(l, 'DIV', { class: !0 });
        var g = k(n);
        e && z(e.$$.fragment, g), (s = $(g)), g.forEach(p), this.h();
      },
      h() {
        E(n, 'class', 'step-background step-' + (r[6] + 1) + ' svelte-va4hxg'),
          $n(n, 'visible', r[3] ? r[6] <= r[0] : r[6] === r[0]),
          $n(n, 'hidden', r[3] ? r[6] > r[0] : r[6] !== r[0]);
      },
      m(l, g) {
        b(l, n, g), e && j(e, n, null), a(n, s), (t = !0);
      },
      p(l, g) {
        const v = g & 2 ? pt(c, [ct(l[4].backgroundProps || {})]) : {};
        if (o !== (o = l[4].background)) {
          if (e) {
            V();
            const w = e;
            C(w.$$.fragment, 1, 0, () => {
              O(w, 1);
            }),
              H();
          }
          o
            ? ((e = new o(u())),
              T(e.$$.fragment),
              P(e.$$.fragment, 1),
              j(e, n, s))
            : (e = null);
        } else o && e.$set(v);
        g & 9 && $n(n, 'visible', l[3] ? l[6] <= l[0] : l[6] === l[0]),
          g & 9 && $n(n, 'hidden', l[3] ? l[6] > l[0] : l[6] !== l[0]);
      },
      i(l) {
        t || (e && P(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        e && C(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && p(n), e && O(e);
      },
    }
  );
}
function mr(r) {
  let n,
    e,
    s = (r[2] === 0 || (r[6] >= r[0] - r[2] && r[6] <= r[0] + r[2])) && gr(r);
  return {
    c() {
      s && s.c(), (n = B());
    },
    l(t) {
      s && s.l(t), (n = B());
    },
    m(t, c) {
      s && s.m(t, c), b(t, n, c), (e = !0);
    },
    p(t, c) {
      t[2] === 0 || (t[6] >= t[0] - t[2] && t[6] <= t[0] + t[2])
        ? s
          ? (s.p(t, c), c & 5 && P(s, 1))
          : ((s = gr(t)), s.c(), P(s, 1), s.m(n.parentNode, n))
        : s &&
          (V(),
          C(s, 1, 1, () => {
            s = null;
          }),
          H());
    },
    i(t) {
      e || (P(s), (e = !0));
    },
    o(t) {
      C(s), (e = !1);
    },
    d(t) {
      s && s.d(t), t && p(n);
    },
  };
}
function Xr(r) {
  let n,
    e,
    s = r[1],
    t = [];
  for (let o = 0; o < s.length; o += 1) t[o] = mr(kr(r, s, o));
  const c = (o) =>
    C(t[o], 1, 1, () => {
      t[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < t.length; o += 1) t[o].c();
      n = B();
    },
    l(o) {
      for (let u = 0; u < t.length; u += 1) t[u].l(o);
      n = B();
    },
    m(o, u) {
      for (let l = 0; l < t.length; l += 1) t[l].m(o, u);
      b(o, n, u), (e = !0);
    },
    p(o, [u]) {
      if (u & 15) {
        s = o[1];
        let l;
        for (l = 0; l < s.length; l += 1) {
          const g = kr(o, s, l);
          t[l]
            ? (t[l].p(g, u), P(t[l], 1))
            : ((t[l] = mr(g)), t[l].c(), P(t[l], 1), t[l].m(n.parentNode, n));
        }
        for (V(), l = s.length; l < t.length; l += 1) c(l);
        H();
      }
    },
    i(o) {
      if (!e) {
        for (let u = 0; u < s.length; u += 1) P(t[u]);
        e = !0;
      }
    },
    o(o) {
      t = t.filter(Boolean);
      for (let u = 0; u < t.length; u += 1) C(t[u]);
      e = !1;
    },
    d(o) {
      Qo(t, o), o && p(n);
    },
  };
}
function Zr(r, n, e) {
  let { index: s } = n,
    { steps: t = [] } = n,
    { preload: c = 1 } = n,
    { stackBackground: o = !0 } = n;
  return (
    (r.$$set = (u) => {
      'index' in u && e(0, (s = u.index)),
        'steps' in u && e(1, (t = u.steps)),
        'preload' in u && e(2, (c = u.preload)),
        'stackBackground' in u && e(3, (o = u.stackBackground));
    }),
    [s, t, c, o]
  );
}
class xr extends x {
  constructor(n) {
    super();
    nn(this, n, Zr, Xr, sn, {
      index: 0,
      steps: 1,
      preload: 2,
      stackBackground: 3,
    });
  }
}
function hr(r, n, e) {
  const s = r.slice();
  return (s[1] = n[e]), (s[3] = e), s;
}
function np(r) {
  let n, e, s, t;
  const c = [tp, ep],
    o = [];
  function u(l, g) {
    return typeof l[1].foreground == 'string' ? 0 : 1;
  }
  return (
    (e = u(r)),
    (s = o[e] = c[e](r)),
    {
      c() {
        (n = f('div')), s.c(), this.h();
      },
      l(l) {
        n = d(l, 'DIV', { class: !0 });
        var g = k(n);
        s.l(g), g.forEach(p), this.h();
      },
      h() {
        E(n, 'class', 'step-foreground step-' + (r[3] + 1) + ' svelte-20kuyz');
      },
      m(l, g) {
        b(l, n, g), o[e].m(n, null), (t = !0);
      },
      p(l, g) {
        let v = e;
        (e = u(l)),
          e === v
            ? o[e].p(l, g)
            : (V(),
              C(o[v], 1, 1, () => {
                o[v] = null;
              }),
              H(),
              (s = o[e]),
              s ? s.p(l, g) : ((s = o[e] = c[e](l)), s.c()),
              P(s, 1),
              s.m(n, null));
      },
      i(l) {
        t || (P(s), (t = !0));
      },
      o(l) {
        C(s), (t = !1);
      },
      d(l) {
        l && p(n), o[e].d();
      },
    }
  );
}
function sp(r) {
  let n;
  return {
    c() {
      (n = f('div')), this.h();
    },
    l(e) {
      (n = d(e, 'DIV', { class: !0 })), k(n).forEach(p), this.h();
    },
    h() {
      E(
        n,
        'class',
        'empty-step-foreground step-' + (r[3] + 1) + ' svelte-20kuyz'
      );
    },
    m(e, s) {
      b(e, n, s);
    },
    p: I,
    i: I,
    o: I,
    d(e) {
      e && p(n);
    },
  };
}
function ep(r) {
  let n, e, s;
  const t = [r[1].foregroundProps || {}];
  var c = r[1].foreground;
  function o(u) {
    let l = {};
    for (let g = 0; g < t.length; g += 1) l = ut(l, t[g]);
    return { props: l };
  }
  return (
    c && (n = new c(o())),
    {
      c() {
        n && T(n.$$.fragment), (e = B());
      },
      l(u) {
        n && z(n.$$.fragment, u), (e = B());
      },
      m(u, l) {
        n && j(n, u, l), b(u, e, l), (s = !0);
      },
      p(u, l) {
        const g = l & 1 ? pt(t, [ct(u[1].foregroundProps || {})]) : {};
        if (c !== (c = u[1].foreground)) {
          if (n) {
            V();
            const v = n;
            C(v.$$.fragment, 1, 0, () => {
              O(v, 1);
            }),
              H();
          }
          c
            ? ((n = new c(o())),
              T(n.$$.fragment),
              P(n.$$.fragment, 1),
              j(n, e.parentNode, e))
            : (n = null);
        } else c && n.$set(g);
      },
      i(u) {
        s || (n && P(n.$$.fragment, u), (s = !0));
      },
      o(u) {
        n && C(n.$$.fragment, u), (s = !1);
      },
      d(u) {
        u && p(e), n && O(n, u);
      },
    }
  );
}
function tp(r) {
  let n,
    e = it.parse(r[1].foreground) + '',
    s;
  return {
    c() {
      (n = new Qr()), (s = B()), this.h();
    },
    l(t) {
      (n = Yr(t)), (s = B()), this.h();
    },
    h() {
      n.a = s;
    },
    m(t, c) {
      n.m(e, t, c), b(t, s, c);
    },
    p(t, c) {
      c & 1 && e !== (e = it.parse(t[1].foreground) + '') && n.p(e);
    },
    i: I,
    o: I,
    d(t) {
      t && p(s), t && n.d();
    },
  };
}
function _r(r) {
  let n, e, s, t, c;
  const o = [sp, np],
    u = [];
  function l(g, v) {
    return g[1].foreground === '' || !g[1].foreground ? 0 : 1;
  }
  return (
    (e = l(r)),
    (s = u[e] = o[e](r)),
    {
      c() {
        (n = f('section')), s.c(), (t = y()), this.h();
      },
      l(g) {
        n = d(g, 'SECTION', { class: !0 });
        var v = k(n);
        s.l(v), (t = $(v)), v.forEach(p), this.h();
      },
      h() {
        E(n, 'class', 'step-foreground-container svelte-20kuyz');
      },
      m(g, v) {
        b(g, n, v), u[e].m(n, null), a(n, t), (c = !0);
      },
      p(g, v) {
        let w = e;
        (e = l(g)),
          e === w
            ? u[e].p(g, v)
            : (V(),
              C(u[w], 1, 1, () => {
                u[w] = null;
              }),
              H(),
              (s = u[e]),
              s ? s.p(g, v) : ((s = u[e] = o[e](g)), s.c()),
              P(s, 1),
              s.m(n, t));
      },
      i(g) {
        c || (P(s), (c = !0));
      },
      o(g) {
        C(s), (c = !1);
      },
      d(g) {
        g && p(n), u[e].d();
      },
    }
  );
}
function ap(r) {
  let n,
    e,
    s = r[0],
    t = [];
  for (let o = 0; o < s.length; o += 1) t[o] = _r(hr(r, s, o));
  const c = (o) =>
    C(t[o], 1, 1, () => {
      t[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < t.length; o += 1) t[o].c();
      n = B();
    },
    l(o) {
      for (let u = 0; u < t.length; u += 1) t[u].l(o);
      n = B();
    },
    m(o, u) {
      for (let l = 0; l < t.length; l += 1) t[l].m(o, u);
      b(o, n, u), (e = !0);
    },
    p(o, [u]) {
      if (u & 1) {
        s = o[0];
        let l;
        for (l = 0; l < s.length; l += 1) {
          const g = hr(o, s, l);
          t[l]
            ? (t[l].p(g, u), P(t[l], 1))
            : ((t[l] = _r(g)), t[l].c(), P(t[l], 1), t[l].m(n.parentNode, n));
        }
        for (V(), l = s.length; l < t.length; l += 1) c(l);
        H();
      }
    },
    i(o) {
      if (!e) {
        for (let u = 0; u < s.length; u += 1) P(t[u]);
        e = !0;
      }
    },
    o(o) {
      t = t.filter(Boolean);
      for (let u = 0; u < t.length; u += 1) C(t[u]);
      e = !1;
    },
    d(o) {
      Qo(t, o), o && p(n);
    },
  };
}
function op(r, n, e) {
  let { steps: s = [] } = n;
  return (
    (r.$$set = (t) => {
      'steps' in t && e(0, (s = t.steps));
    }),
    [s]
  );
}
class lp extends x {
  constructor(n) {
    super();
    nn(this, n, op, ap, sn, { steps: 0 });
  }
}
function rp(r) {
  let n, e, s, t, c, o, u;
  const l = [r[0].backgroundProps || {}];
  var g = r[0].background;
  function v(w) {
    let S = {};
    for (let L = 0; L < l.length; L += 1) S = ut(S, l[L]);
    return { props: S };
  }
  return (
    g && (s = new g(v())),
    {
      c() {
        (n = f('section')), (e = f('div')), s && T(s.$$.fragment), this.h();
      },
      l(w) {
        n = d(w, 'SECTION', { class: !0, step: !0 });
        var S = k(n);
        e = d(S, 'DIV', { class: !0 });
        var L = k(e);
        s && z(s.$$.fragment, L), L.forEach(p), S.forEach(p), this.h();
      },
      h() {
        E(e, 'class', (t = 'embedded-background step-' + (r[2] + 1))),
          E(n, 'class', (c = 'background-container graphic ' + r[1])),
          E(n, 'step', (o = r[2] + 1));
      },
      m(w, S) {
        b(w, n, S), a(n, e), s && j(s, e, null), (u = !0);
      },
      p(w, [S]) {
        const L = S & 1 ? pt(l, [ct(w[0].backgroundProps || {})]) : {};
        if (g !== (g = w[0].background)) {
          if (s) {
            V();
            const A = s;
            C(A.$$.fragment, 1, 0, () => {
              O(A, 1);
            }),
              H();
          }
          g
            ? ((s = new g(v())),
              T(s.$$.fragment),
              P(s.$$.fragment, 1),
              j(s, e, null))
            : (s = null);
        } else g && s.$set(L);
        (!u ||
          (S & 4 && t !== (t = 'embedded-background step-' + (w[2] + 1)))) &&
          E(e, 'class', t),
          (!u ||
            (S & 2 && c !== (c = 'background-container graphic ' + w[1]))) &&
            E(n, 'class', c),
          (!u || (S & 4 && o !== (o = w[2] + 1))) && E(n, 'step', o);
      },
      i(w) {
        u || (s && P(s.$$.fragment, w), (u = !0));
      },
      o(w) {
        s && C(s.$$.fragment, w), (u = !1);
      },
      d(w) {
        w && p(n), s && O(s);
      },
    }
  );
}
function pp(r, n, e) {
  let { step: s } = n,
    { backgroundSize: t } = n,
    { index: c } = n;
  return (
    (r.$$set = (o) => {
      'step' in o && e(0, (s = o.step)),
        'backgroundSize' in o && e(1, (t = o.backgroundSize)),
        'index' in o && e(2, (c = o.index));
    }),
    [s, t, c]
  );
}
class br extends x {
  constructor(n) {
    super();
    nn(this, n, pp, rp, sn, { step: 0, backgroundSize: 1, index: 2 });
  }
}
function cp(r) {
  let n, e, s, t;
  const c = [r[0].foregroundProps || {}];
  var o = r[0].foreground;
  function u(l) {
    let g = {};
    for (let v = 0; v < c.length; v += 1) g = ut(g, c[v]);
    return { props: g };
  }
  return (
    o && (e = new o(u())),
    {
      c() {
        (n = f('div')), e && T(e.$$.fragment), this.h();
      },
      l(l) {
        n = d(l, 'DIV', { class: !0 });
        var g = k(n);
        e && z(e.$$.fragment, g), g.forEach(p), this.h();
      },
      h() {
        E(
          n,
          'class',
          (s = 'embedded-foreground step-' + (r[1] + 1) + ' svelte-kywsd6')
        );
      },
      m(l, g) {
        b(l, n, g), e && j(e, n, null), (t = !0);
      },
      p(l, g) {
        const v = g & 1 ? pt(c, [ct(l[0].foregroundProps || {})]) : {};
        if (o !== (o = l[0].foreground)) {
          if (e) {
            V();
            const w = e;
            C(w.$$.fragment, 1, 0, () => {
              O(w, 1);
            }),
              H();
          }
          o
            ? ((e = new o(u())),
              T(e.$$.fragment),
              P(e.$$.fragment, 1),
              j(e, n, null))
            : (e = null);
        } else o && e.$set(v);
        (!t ||
          (g & 2 &&
            s !==
              (s =
                'embedded-foreground step-' +
                (l[1] + 1) +
                ' svelte-kywsd6'))) &&
          E(n, 'class', s);
      },
      i(l) {
        t || (e && P(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        e && C(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && p(n), e && O(e);
      },
    }
  );
}
function up(r) {
  let n,
    e,
    s = it.parse(r[0].foreground) + '',
    t,
    c;
  return {
    c() {
      (n = f('section')), (e = f('div')), this.h();
    },
    l(o) {
      n = d(o, 'SECTION', { class: !0, step: !0 });
      var u = k(n);
      e = d(u, 'DIV', { class: !0 });
      var l = k(e);
      l.forEach(p), u.forEach(p), this.h();
    },
    h() {
      E(
        e,
        'class',
        (t = 'embedded-foreground step-' + (r[1] + 1) + ' svelte-kywsd6')
      ),
        E(n, 'class', 'body-text'),
        E(n, 'step', (c = r[1] + 1));
    },
    m(o, u) {
      b(o, n, u), a(n, e), (e.innerHTML = s);
    },
    p(o, u) {
      u & 1 && s !== (s = it.parse(o[0].foreground) + '') && (e.innerHTML = s),
        u & 2 &&
          t !==
            (t = 'embedded-foreground step-' + (o[1] + 1) + ' svelte-kywsd6') &&
          E(e, 'class', t),
        u & 2 && c !== (c = o[1] + 1) && E(n, 'step', c);
    },
    i: I,
    o: I,
    d(o) {
      o && p(n);
    },
  };
}
function ip(r) {
  let n, e;
  return {
    c() {
      (n = f('div')), this.h();
    },
    l(s) {
      (n = d(s, 'DIV', { class: !0 })), k(n).forEach(p), this.h();
    },
    h() {
      E(
        n,
        'class',
        (e = 'empty-step-foreground step-' + (r[1] + 1) + ' svelte-kywsd6')
      );
    },
    m(s, t) {
      b(s, n, t);
    },
    p(s, t) {
      t & 2 &&
        e !==
          (e = 'empty-step-foreground step-' + (s[1] + 1) + ' svelte-kywsd6') &&
        E(n, 'class', e);
    },
    i: I,
    o: I,
    d(s) {
      s && p(n);
    },
  };
}
function fp(r) {
  let n, e, s, t;
  const c = [ip, up, cp],
    o = [];
  function u(l, g) {
    return l[0].foreground === '' || !l[0].foreground
      ? 0
      : typeof l[0].foreground == 'string'
      ? 1
      : 2;
  }
  return (
    (n = u(r)),
    (e = o[n] = c[n](r)),
    {
      c() {
        e.c(), (s = B());
      },
      l(l) {
        e.l(l), (s = B());
      },
      m(l, g) {
        o[n].m(l, g), b(l, s, g), (t = !0);
      },
      p(l, [g]) {
        let v = n;
        (n = u(l)),
          n === v
            ? o[n].p(l, g)
            : (V(),
              C(o[v], 1, 1, () => {
                o[v] = null;
              }),
              H(),
              (e = o[n]),
              e ? e.p(l, g) : ((e = o[n] = c[n](l)), e.c()),
              P(e, 1),
              e.m(s.parentNode, s));
      },
      i(l) {
        t || (P(e), (t = !0));
      },
      o(l) {
        C(e), (t = !1);
      },
      d(l) {
        o[n].d(l), l && p(s);
      },
    }
  );
}
function dp(r, n, e) {
  let { step: s } = n,
    { index: t } = n;
  return (
    (r.$$set = (c) => {
      'step' in c && e(0, (s = c.step)), 'index' in c && e(1, (t = c.index));
    }),
    [s, t]
  );
}
class vr extends x {
  constructor(n) {
    super();
    nn(this, n, dp, fp, sn, { step: 0, index: 1 });
  }
}
function wr(r, n, e) {
  const s = r.slice();
  return (s[3] = n[e]), (s[5] = e), s;
}
function kp(r) {
  let n, e, s, t;
  return (
    (n = new vr({ props: { step: r[3], index: r[5] } })),
    (s = new br({ props: { step: r[3], index: r[5], backgroundSize: r[2] } })),
    {
      c() {
        T(n.$$.fragment), (e = y()), T(s.$$.fragment);
      },
      l(c) {
        z(n.$$.fragment, c), (e = $(c)), z(s.$$.fragment, c);
      },
      m(c, o) {
        j(n, c, o), b(c, e, o), j(s, c, o), (t = !0);
      },
      p(c, o) {
        const u = {};
        o & 1 && (u.step = c[3]), n.$set(u);
        const l = {};
        o & 1 && (l.step = c[3]), o & 4 && (l.backgroundSize = c[2]), s.$set(l);
      },
      i(c) {
        t || (P(n.$$.fragment, c), P(s.$$.fragment, c), (t = !0));
      },
      o(c) {
        C(n.$$.fragment, c), C(s.$$.fragment, c), (t = !1);
      },
      d(c) {
        O(n, c), c && p(e), O(s, c);
      },
    }
  );
}
function gp(r) {
  let n, e, s, t, c;
  return (
    (n = new br({ props: { step: r[3], index: r[5], backgroundSize: r[2] } })),
    (s = new vr({ props: { step: r[3], index: r[5] } })),
    {
      c() {
        T(n.$$.fragment), (e = y()), T(s.$$.fragment), (t = y());
      },
      l(o) {
        z(n.$$.fragment, o), (e = $(o)), z(s.$$.fragment, o), (t = $(o));
      },
      m(o, u) {
        j(n, o, u), b(o, e, u), j(s, o, u), b(o, t, u), (c = !0);
      },
      p(o, u) {
        const l = {};
        u & 1 && (l.step = o[3]), u & 4 && (l.backgroundSize = o[2]), n.$set(l);
        const g = {};
        u & 1 && (g.step = o[3]), s.$set(g);
      },
      i(o) {
        c || (P(n.$$.fragment, o), P(s.$$.fragment, o), (c = !0));
      },
      o(o) {
        C(n.$$.fragment, o), C(s.$$.fragment, o), (c = !1);
      },
      d(o) {
        O(n, o), o && p(e), O(s, o), o && p(t);
      },
    }
  );
}
function Er(r) {
  let n, e, s, t;
  const c = [gp, kp],
    o = [];
  function u(l, g) {
    return l[1] === 'bf' ? 0 : 1;
  }
  return (
    (n = u(r)),
    (e = o[n] = c[n](r)),
    {
      c() {
        e.c(), (s = B());
      },
      l(l) {
        e.l(l), (s = B());
      },
      m(l, g) {
        o[n].m(l, g), b(l, s, g), (t = !0);
      },
      p(l, g) {
        let v = n;
        (n = u(l)),
          n === v
            ? o[n].p(l, g)
            : (V(),
              C(o[v], 1, 1, () => {
                o[v] = null;
              }),
              H(),
              (e = o[n]),
              e ? e.p(l, g) : ((e = o[n] = c[n](l)), e.c()),
              P(e, 1),
              e.m(s.parentNode, s));
      },
      i(l) {
        t || (P(e), (t = !0));
      },
      o(l) {
        C(e), (t = !1);
      },
      d(l) {
        o[n].d(l), l && p(s);
      },
    }
  );
}
function mp(r) {
  let n,
    e,
    s = r[0],
    t = [];
  for (let o = 0; o < s.length; o += 1) t[o] = Er(wr(r, s, o));
  const c = (o) =>
    C(t[o], 1, 1, () => {
      t[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < t.length; o += 1) t[o].c();
      n = B();
    },
    l(o) {
      for (let u = 0; u < t.length; u += 1) t[u].l(o);
      n = B();
    },
    m(o, u) {
      for (let l = 0; l < t.length; l += 1) t[l].m(o, u);
      b(o, n, u), (e = !0);
    },
    p(o, [u]) {
      if (u & 7) {
        s = o[0];
        let l;
        for (l = 0; l < s.length; l += 1) {
          const g = wr(o, s, l);
          t[l]
            ? (t[l].p(g, u), P(t[l], 1))
            : ((t[l] = Er(g)), t[l].c(), P(t[l], 1), t[l].m(n.parentNode, n));
        }
        for (V(), l = s.length; l < t.length; l += 1) c(l);
        H();
      }
    },
    i(o) {
      if (!e) {
        for (let u = 0; u < s.length; u += 1) P(t[u]);
        e = !0;
      }
    },
    o(o) {
      t = t.filter(Boolean);
      for (let u = 0; u < t.length; u += 1) C(t[u]);
      e = !1;
    },
    d(o) {
      Qo(t, o), o && p(n);
    },
  };
}
function hp(r, n, e) {
  let { steps: s } = n,
    { embeddedLayout: t = 'fb' } = n,
    { backgroundSize: c } = n;
  return (
    (r.$$set = (o) => {
      'steps' in o && e(0, (s = o.steps)),
        'embeddedLayout' in o && e(1, (t = o.embeddedLayout)),
        'backgroundSize' in o && e(2, (c = o.backgroundSize));
    }),
    [s, t, c]
  );
}
class _p extends x {
  constructor(n) {
    super();
    nn(this, n, hp, mp, sn, { steps: 0, embeddedLayout: 1, backgroundSize: 2 });
  }
}
function bp(r) {
  let n, e, s;
  return (
    (e = new _p({
      props: { steps: r[1], embeddedLayout: r[7], backgroundSize: r[2] },
    })),
    {
      c() {
        (n = f('section')), T(e.$$.fragment), this.h();
      },
      l(t) {
        n = d(t, 'SECTION', { class: !0, id: !0 });
        var c = k(n);
        z(e.$$.fragment, c), c.forEach(p), this.h();
      },
      h() {
        E(n, 'class', 'scroller-container embedded svelte-5wwrxt'),
          E(n, 'id', r[0]);
      },
      m(t, c) {
        b(t, n, c), j(e, n, null), (s = !0);
      },
      p(t, c) {
        const o = {};
        c & 2 && (o.steps = t[1]),
          c & 128 && (o.embeddedLayout = t[7]),
          c & 4 && (o.backgroundSize = t[2]),
          e.$set(o),
          (!s || c & 1) && E(n, 'id', t[0]);
      },
      i(t) {
        s || (P(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        t && p(n), O(e);
      },
    }
  );
}
function vp(r) {
  let n, e, s, t, c, o;
  function u(w) {
    r[15](w);
  }
  function l(w) {
    r[16](w);
  }
  function g(w) {
    r[17](w);
  }
  let v = {
    threshold: r[8],
    top: r[9],
    bottom: r[10],
    parallax: r[11],
    query: 'section.step-foreground-container',
    $$slots: { foreground: [Ep], background: [wp] },
    $$scope: { ctx: r },
  };
  return (
    r[12] !== void 0 && (v.index = r[12]),
    r[13] !== void 0 && (v.offset = r[13]),
    r[14] !== void 0 && (v.progress = r[14]),
    (e = new Jr({ props: v })),
    Yo.push(() => Jo(e, 'index', u)),
    Yo.push(() => Jo(e, 'offset', l)),
    Yo.push(() => Jo(e, 'progress', g)),
    {
      c() {
        (n = f('section')), T(e.$$.fragment), this.h();
      },
      l(w) {
        n = d(w, 'SECTION', { class: !0, id: !0 });
        var S = k(n);
        z(e.$$.fragment, S), S.forEach(p), this.h();
      },
      h() {
        E(n, 'class', 'scroller-container svelte-5wwrxt'), E(n, 'id', r[0]);
      },
      m(w, S) {
        b(w, n, S), j(e, n, null), (o = !0);
      },
      p(w, S) {
        const L = {};
        S & 256 && (L.threshold = w[8]),
          S & 512 && (L.top = w[9]),
          S & 1024 && (L.bottom = w[10]),
          S & 2048 && (L.parallax = w[11]),
          S & 266302 && (L.$$scope = { dirty: S, ctx: w }),
          !s && S & 4096 && ((s = !0), (L.index = w[12]), Ko(() => (s = !1))),
          !t && S & 8192 && ((t = !0), (L.offset = w[13]), Ko(() => (t = !1))),
          !c &&
            S & 16384 &&
            ((c = !0), (L.progress = w[14]), Ko(() => (c = !1))),
          e.$set(L),
          (!o || S & 1) && E(n, 'id', w[0]);
      },
      i(w) {
        o || (P(e.$$.fragment, w), (o = !0));
      },
      o(w) {
        C(e.$$.fragment, w), (o = !1);
      },
      d(w) {
        w && p(n), O(e);
      },
    }
  );
}
function wp(r) {
  let n, e, s, t, c, o, u;
  return (
    (t = new xr({
      props: {
        index: r[12],
        steps: r[1],
        preload: r[5],
        stackBackground: r[4],
      },
    })),
    {
      c() {
        (n = f('div')),
          (e = f('div')),
          (s = f('section')),
          T(t.$$.fragment),
          this.h();
      },
      l(l) {
        n = d(l, 'DIV', { slot: !0, class: !0 });
        var g = k(n);
        e = d(g, 'DIV', { class: !0 });
        var v = k(e);
        s = d(v, 'SECTION', { class: !0, step: !0 });
        var w = k(s);
        z(t.$$.fragment, w), w.forEach(p), v.forEach(p), g.forEach(p), this.h();
      },
      h() {
        E(
          s,
          'class',
          (c = 'background-container graphic ' + r[2] + ' svelte-5wwrxt')
        ),
          E(s, 'step', (o = r[12] + 1)),
          E(e, 'class', 'scroller-graphic-well svelte-5wwrxt'),
          E(n, 'slot', 'background'),
          E(n, 'class', 'background svelte-5wwrxt'),
          $n(n, 'right', r[3] === 'left opposite'),
          $n(n, 'left', r[3] === 'right opposite');
      },
      m(l, g) {
        b(l, n, g), a(n, e), a(e, s), j(t, s, null), (u = !0);
      },
      p(l, g) {
        const v = {};
        g & 4096 && (v.index = l[12]),
          g & 2 && (v.steps = l[1]),
          g & 32 && (v.preload = l[5]),
          g & 16 && (v.stackBackground = l[4]),
          t.$set(v),
          (!u ||
            (g & 4 &&
              c !==
                (c =
                  'background-container graphic ' +
                  l[2] +
                  ' svelte-5wwrxt'))) &&
            E(s, 'class', c),
          (!u || (g & 4096 && o !== (o = l[12] + 1))) && E(s, 'step', o),
          g & 8 && $n(n, 'right', l[3] === 'left opposite'),
          g & 8 && $n(n, 'left', l[3] === 'right opposite');
      },
      i(l) {
        u || (P(t.$$.fragment, l), (u = !0));
      },
      o(l) {
        C(t.$$.fragment, l), (u = !1);
      },
      d(l) {
        l && p(n), O(t);
      },
    }
  );
}
function Ep(r) {
  let n, e, s, t;
  return (
    (e = new lp({ props: { steps: r[1] } })),
    {
      c() {
        (n = f('div')), T(e.$$.fragment), this.h();
      },
      l(c) {
        n = d(c, 'DIV', { slot: !0, class: !0 });
        var o = k(n);
        z(e.$$.fragment, o), o.forEach(p), this.h();
      },
      h() {
        E(n, 'slot', 'foreground'),
          E(n, 'class', (s = 'foreground ' + r[3] + ' svelte-5wwrxt'));
      },
      m(c, o) {
        b(c, n, o), j(e, n, null), (t = !0);
      },
      p(c, o) {
        const u = {};
        o & 2 && (u.steps = c[1]),
          e.$set(u),
          (!t ||
            (o & 8 && s !== (s = 'foreground ' + c[3] + ' svelte-5wwrxt'))) &&
            E(n, 'class', s);
      },
      i(c) {
        t || (P(e.$$.fragment, c), (t = !0));
      },
      o(c) {
        C(e.$$.fragment, c), (t = !1);
      },
      d(c) {
        c && p(n), O(e);
      },
    }
  );
}
function yp(r) {
  let n, e, s, t;
  const c = [vp, bp],
    o = [];
  function u(l, g) {
    return l[6] ? 1 : 0;
  }
  return (
    (n = u(r)),
    (e = o[n] = c[n](r)),
    {
      c() {
        e.c(), (s = B());
      },
      l(l) {
        e.l(l), (s = B());
      },
      m(l, g) {
        o[n].m(l, g), b(l, s, g), (t = !0);
      },
      p(l, [g]) {
        let v = n;
        (n = u(l)),
          n === v
            ? o[n].p(l, g)
            : (V(),
              C(o[v], 1, 1, () => {
                o[v] = null;
              }),
              H(),
              (e = o[n]),
              e ? e.p(l, g) : ((e = o[n] = c[n](l)), e.c()),
              P(e, 1),
              e.m(s.parentNode, s));
      },
      i(l) {
        t || (P(e), (t = !0));
      },
      o(l) {
        C(e), (t = !1);
      },
      d(l) {
        o[n].d(l), l && p(s);
      },
    }
  );
}
function $p(r, n, e) {
  let { id: s = '' } = n,
    { steps: t = [] } = n,
    { backgroundSize: c = 'fluid' } = n,
    { foregroundPosition: o = 'middle' } = n,
    { stackBackground: u = !0 } = n,
    { preload: l = 1 } = n,
    { embedded: g = !1 } = n,
    { embeddedLayout: v = 'fb' } = n,
    { threshold: w = 0.5 } = n,
    { top: S = 0 } = n,
    { bottom: L = 1 } = n,
    { parallax: A = !1 } = n,
    N = 0,
    en,
    Sn;
  function hs(D) {
    (N = D), e(12, N);
  }
  function Pn(D) {
    (en = D), e(13, en);
  }
  function _s(D) {
    (Sn = D), e(14, Sn);
  }
  return (
    (r.$$set = (D) => {
      'id' in D && e(0, (s = D.id)),
        'steps' in D && e(1, (t = D.steps)),
        'backgroundSize' in D && e(2, (c = D.backgroundSize)),
        'foregroundPosition' in D && e(3, (o = D.foregroundPosition)),
        'stackBackground' in D && e(4, (u = D.stackBackground)),
        'preload' in D && e(5, (l = D.preload)),
        'embedded' in D && e(6, (g = D.embedded)),
        'embeddedLayout' in D && e(7, (v = D.embeddedLayout)),
        'threshold' in D && e(8, (w = D.threshold)),
        'top' in D && e(9, (S = D.top)),
        'bottom' in D && e(10, (L = D.bottom)),
        'parallax' in D && e(11, (A = D.parallax));
    }),
    [s, t, c, o, u, l, g, v, w, S, L, A, N, en, Sn, hs, Pn, _s]
  );
}
class Zn extends x {
  constructor(n) {
    super();
    nn(this, n, $p, yp, sn, {
      id: 0,
      steps: 1,
      backgroundSize: 2,
      foregroundPosition: 3,
      stackBackground: 4,
      preload: 5,
      embedded: 6,
      embeddedLayout: 7,
      threshold: 8,
      top: 9,
      bottom: 10,
      parallax: 11,
    });
  }
}
function Sp(r) {
  let n, e, s, t, c, o, u, l, g, v, w;
  return {
    c() {
      (n = f('h4')),
        (e = m('Interactive step')),
        (s = y()),
        (t = f('p')),
        (c = m('The count is ')),
        (o = m(r[0])),
        (u = y()),
        (l = f('button')),
        (g = m('Click Me'));
    },
    l(S) {
      n = d(S, 'H4', {});
      var L = k(n);
      (e = h(L, 'Interactive step')),
        L.forEach(p),
        (s = $(S)),
        (t = d(S, 'P', {}));
      var A = k(t);
      (c = h(A, 'The count is ')),
        (o = h(A, r[0])),
        A.forEach(p),
        (u = $(S)),
        (l = d(S, 'BUTTON', {}));
      var N = k(l);
      (g = h(N, 'Click Me')), N.forEach(p);
    },
    m(S, L) {
      b(S, n, L),
        a(n, e),
        b(S, s, L),
        b(S, t, L),
        a(t, c),
        a(t, o),
        b(S, u, L),
        b(S, l, L),
        a(l, g),
        v || ((w = Kr(l, 'click', r[1])), (v = !0));
    },
    p(S, [L]) {
      L & 1 && Wr(o, S[0]);
    },
    i: I,
    o: I,
    d(S) {
      S && p(n), S && p(s), S && p(t), S && p(u), S && p(l), (v = !1), w();
    },
  };
}
function Pp(r, n, e) {
  let { count: s = 0 } = n;
  const t = () => {
    e(0, (s += 1));
  };
  return (
    (r.$$set = (c) => {
      'count' in c && e(0, (s = c.count));
    }),
    [s, t]
  );
}
class yr extends x {
  constructor(n) {
    super();
    nn(this, n, Pp, Sp, sn, { count: 0 });
  }
}
function Cp(r) {
  let n, e, s;
  return {
    c() {
      (n = f('div')), (e = f('div')), this.h();
    },
    l(t) {
      n = d(t, 'DIV', { class: !0 });
      var c = k(n);
      (e = d(c, 'DIV', { class: !0, style: !0 })),
        k(e).forEach(p),
        c.forEach(p),
        this.h();
    },
    h() {
      E(e, 'class', 'step svelte-1e3wp2r'),
        E(
          e,
          'style',
          (s = `
      background: ${r[0]};
      height: ${400 / r[2]}px;
      top: ${r[1] * (400 / r[2])}px;
  `)
        ),
        E(n, 'class', 'step-cont svelte-1e3wp2r');
    },
    m(t, c) {
      b(t, n, c), a(n, e);
    },
    p(t, [c]) {
      c & 7 &&
        s !==
          (s = `
      background: ${t[0]};
      height: ${400 / t[2]}px;
      top: ${t[1] * (400 / t[2])}px;
  `) &&
        E(e, 'style', s);
    },
    i: I,
    o: I,
    d(t) {
      t && p(n);
    },
  };
}
function Ip(r, n, e) {
  let { colour: s = 'lightblue' } = n,
    { i: t = 0 } = n,
    { steps: c = 3 } = n;
  return (
    (r.$$set = (o) => {
      'colour' in o && e(0, (s = o.colour)),
        'i' in o && e(1, (t = o.i)),
        'steps' in o && e(2, (c = o.steps));
    }),
    [s, t, c]
  );
}
class Wo extends x {
  constructor(n) {
    super();
    nn(this, n, Ip, Cp, sn, { colour: 0, i: 1, steps: 2 });
  }
}
function Lp(r) {
  let n, e;
  return {
    c() {
      (n = f('div')), this.h();
    },
    l(s) {
      (n = d(s, 'DIV', { class: !0, style: !0 })), k(n).forEach(p), this.h();
    },
    h() {
      E(n, 'class', 'step svelte-13llgxe'),
        E(n, 'style', (e = `background: ${r[0]};`));
    },
    m(s, t) {
      b(s, n, t);
    },
    p(s, [t]) {
      t & 1 && e !== (e = `background: ${s[0]};`) && E(n, 'style', e);
    },
    i: I,
    o: I,
    d(s) {
      s && p(n);
    },
  };
}
function Dp(r, n, e) {
  let { colour: s = 'lightblue' } = n;
  return (
    (r.$$set = (t) => {
      'colour' in t && e(0, (s = t.colour));
    }),
    [s]
  );
}
class ms extends x {
  constructor(n) {
    super();
    nn(this, n, Dp, Lp, sn, { colour: 0 });
  }
}
function Op(r) {
  switch (r) {
    case './demos/ai2html/ai-scroller-1.exclude.svelte':
      return qo(
        () => import('./ai-scroller-1.exclude-40da6cd4.js'),
        [
          'chunks/ai-scroller-1.exclude-40da6cd4.js',
          'assets/ai-scroller-1.exclude-74bdcb73.css',
          'chunks/vendor-b82e5b83.js',
          'assets/vendor-c9bf64b2.css',
          'chunks/paths-6758d194.js',
        ]
      );
    case './demos/ai2html/ai-scroller-2.exclude.svelte':
      return qo(
        () => import('./ai-scroller-2.exclude-1f4b3f36.js'),
        [
          'chunks/ai-scroller-2.exclude-1f4b3f36.js',
          'assets/ai-scroller-2.exclude-7d0e85bf.css',
          'chunks/vendor-b82e5b83.js',
          'assets/vendor-c9bf64b2.css',
          'chunks/paths-6758d194.js',
        ]
      );
    case './demos/ai2html/ai-scroller-3.exclude.svelte':
      return qo(
        () => import('./ai-scroller-3.exclude-2aa23049.js'),
        [
          'chunks/ai-scroller-3.exclude-2aa23049.js',
          'assets/ai-scroller-3.exclude-e5d75c9d.css',
          'chunks/vendor-b82e5b83.js',
          'assets/vendor-c9bf64b2.css',
          'chunks/paths-6758d194.js',
        ]
      );
    default:
      return new Promise(function (n, e) {
        (typeof queueMicrotask == 'function'
          ? queueMicrotask
          : setTimeout)(e.bind(null, new Error('Unknown variable dynamic import: ' + r)));
      });
  }
}
function Tp(r) {
  let n, e;
  return (
    (n = new Zn({
      props: { steps: r[0], backgroundSize: 'wide', id: 'example1' },
    })),
    {
      c() {
        T(n.$$.fragment);
      },
      l(s) {
        z(n.$$.fragment, s);
      },
      m(s, t) {
        j(n, s, t), (e = !0);
      },
      p: I,
      i(s) {
        e || (P(n.$$.fragment, s), (e = !0));
      },
      o(s) {
        C(n.$$.fragment, s), (e = !1);
      },
      d(s) {
        O(n, s);
      },
    }
  );
}
function jp(r) {
  let n, e;
  return (
    (n = new Zn({
      props: {
        steps: r[0],
        foregroundPosition: 'right opposite',
        backgroundSize: 'normal',
        id: 'example2',
      },
    })),
    {
      c() {
        T(n.$$.fragment);
      },
      l(s) {
        z(n.$$.fragment, s);
      },
      m(s, t) {
        j(n, s, t), (e = !0);
      },
      p: I,
      i(s) {
        e || (P(n.$$.fragment, s), (e = !0));
      },
      o(s) {
        C(n.$$.fragment, s), (e = !1);
      },
      d(s) {
        O(n, s);
      },
    }
  );
}
function zp(r) {
  let n, e;
  return (
    (n = new Zn({
      props: {
        steps: r[1],
        foregroundPosition: 'middle',
        backgroundSize: 'normal',
        preload: 0,
        id: 'example-stack',
      },
    })),
    {
      c() {
        T(n.$$.fragment);
      },
      l(s) {
        z(n.$$.fragment, s);
      },
      m(s, t) {
        j(n, s, t), (e = !0);
      },
      p: I,
      i(s) {
        e || (P(n.$$.fragment, s), (e = !0));
      },
      o(s) {
        C(n.$$.fragment, s), (e = !1);
      },
      d(s) {
        O(n, s);
      },
    }
  );
}
function Bp(r) {
  let n, e;
  return (
    (n = new Zn({
      props: { steps: r[2], backgroundSize: 'widest', id: 'example3' },
    })),
    {
      c() {
        T(n.$$.fragment);
      },
      l(s) {
        z(n.$$.fragment, s);
      },
      m(s, t) {
        j(n, s, t), (e = !0);
      },
      p: I,
      i(s) {
        e || (P(n.$$.fragment, s), (e = !0));
      },
      o(s) {
        C(n.$$.fragment, s), (e = !1);
      },
      d(s) {
        O(n, s);
      },
    }
  );
}
function Gp(r) {
  let n, e;
  return (
    (n = new Zn({
      props: {
        steps: r[0],
        backgroundSize: 'widest',
        id: 'scroller-example-4',
      },
    })),
    {
      c() {
        T(n.$$.fragment);
      },
      l(s) {
        z(n.$$.fragment, s);
      },
      m(s, t) {
        j(n, s, t), (e = !0);
      },
      p: I,
      i(s) {
        e || (P(n.$$.fragment, s), (e = !0));
      },
      o(s) {
        C(n.$$.fragment, s), (e = !1);
      },
      d(s) {
        O(n, s);
      },
    }
  );
}
function Np(r) {
  return { c: I, l: I, m: I, p: I, i: I, o: I, d: I };
}
function Mp(r) {
  let n, e;
  return (
    (n = new Zn({
      props: { steps: r[6], backgroundSize: 'fluid', id: 'example-5' },
    })),
    {
      c() {
        T(n.$$.fragment);
      },
      l(s) {
        z(n.$$.fragment, s);
      },
      m(s, t) {
        j(n, s, t), (e = !0);
      },
      p: I,
      i(s) {
        e || (P(n.$$.fragment, s), (e = !0));
      },
      o(s) {
        C(n.$$.fragment, s), (e = !1);
      },
      d(s) {
        O(n, s);
      },
    }
  );
}
function Rp(r) {
  return { c: I, l: I, m: I, p: I, i: I, o: I, d: I };
}
function Ap(r) {
  let n,
    e,
    s = {
      ctx: r,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Rp,
      then: Mp,
      catch: Np,
      value: 6,
      blocks: [, , ,],
    };
  return (
    fr(r[4](r[3]), s),
    {
      c() {
        (n = B()), s.block.c();
      },
      l(t) {
        (n = B()), s.block.l(t);
      },
      m(t, c) {
        b(t, n, c),
          s.block.m(t, (s.anchor = c)),
          (s.mount = () => n.parentNode),
          (s.anchor = n),
          (e = !0);
      },
      p(t, c) {
        (r = t), dr(s, r, c);
      },
      i(t) {
        e || (P(s.block), (e = !0));
      },
      o(t) {
        for (let c = 0; c < 3; c += 1) {
          const o = s.blocks[c];
          C(o);
        }
        e = !1;
      },
      d(t) {
        t && p(n), s.block.d(t), (s.token = null), (s = null);
      },
    }
  );
}
function Up(r) {
  return { c: I, l: I, m: I, p: I, i: I, o: I, d: I };
}
function Vp(r) {
  let n, e;
  return (
    (n = new Zn({
      props: {
        steps: r[6],
        backgroundSize: 'fluid',
        id: 'example6',
        embedded: 'true',
      },
    })),
    {
      c() {
        T(n.$$.fragment);
      },
      l(s) {
        z(n.$$.fragment, s);
      },
      m(s, t) {
        j(n, s, t), (e = !0);
      },
      p: I,
      i(s) {
        e || (P(n.$$.fragment, s), (e = !0));
      },
      o(s) {
        C(n.$$.fragment, s), (e = !1);
      },
      d(s) {
        O(n, s);
      },
    }
  );
}
function Hp(r) {
  return { c: I, l: I, m: I, p: I, i: I, o: I, d: I };
}
function Fp(r) {
  let n,
    e,
    s = {
      ctx: r,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Hp,
      then: Vp,
      catch: Up,
      value: 6,
      blocks: [, , ,],
    };
  return (
    fr(r[4](r[3]), s),
    {
      c() {
        (n = B()), s.block.c();
      },
      l(t) {
        (n = B()), s.block.l(t);
      },
      m(t, c) {
        b(t, n, c),
          s.block.m(t, (s.anchor = c)),
          (s.mount = () => n.parentNode),
          (s.anchor = n),
          (e = !0);
      },
      p(t, c) {
        (r = t), dr(s, r, c);
      },
      i(t) {
        e || (P(s.block), (e = !0));
      },
      o(t) {
        for (let c = 0; c < 3; c += 1) {
          const o = s.blocks[c];
          C(o);
        }
        e = !1;
      },
      d(t) {
        t && p(n), s.block.d(t), (s.token = null), (s = null);
      },
    }
  );
}
function qp(r) {
  let n,
    e,
    s,
    t,
    c,
    o,
    u,
    l,
    g,
    v,
    w,
    S,
    L,
    A,
    N,
    en,
    Sn,
    hs,
    Pn,
    _s,
    D,
    Y,
    Cn,
    bs,
    ft,
    dt,
    vs,
    kt,
    gt,
    xn,
    ws,
    mt,
    ht,
    _t,
    In,
    Es,
    bt,
    vt,
    ys,
    wt,
    Et,
    ns,
    $s,
    yt,
    $t,
    St,
    Ss,
    Ps,
    Pt,
    Ct,
    Cs,
    G,
    It,
    Is,
    Lt,
    Dt,
    Ls,
    Ot,
    Tt,
    Ds,
    jt,
    zt,
    Os,
    Bt,
    Gt,
    Ts,
    Nt,
    Mt,
    Ce,
    Ln,
    Sr = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Scroller <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> RedGraphic <span class="token keyword">from</span> <span class="token string">'./RedGraphic.svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> BlueGraphic <span class="token keyword">from</span> <span class="token string">'./BlueGraphic.svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> GreenGraphic <span class="token keyword">from</span> <span class="token string">'./GreenGraphic.svelte'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> steps <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      background<span class="token operator">:</span> RedGraphic<span class="token punctuation">,</span>
      foreground<span class="token operator">:</span> <span class="token string">'#### Step 1&#92;n&#92;nLorem ipsum red'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      background<span class="token operator">:</span> BlueGraphic<span class="token punctuation">,</span>
      foreground<span class="token operator">:</span> <span class="token string">'#### Step 2&#92;n&#92;nLorem ipsum blue'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      background<span class="token operator">:</span> GreenGraphic<span class="token punctuation">,</span>
      foreground<span class="token operator">:</span> <span class="token string">'#### Step 3&#92;n&#92;nLorem ipsum green'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> backgroundSize <span class="token operator">=</span> <span class="token string">'wide'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span> <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">backgroundSize="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>backgroundSize<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>`,
    Ie,
    pn,
    Le,
    M,
    Dn,
    Rt,
    js,
    At,
    Ut,
    Vt,
    zs,
    Bs,
    Ht,
    Ft,
    U,
    On,
    Gs,
    qt,
    Qt,
    Ns,
    Yt,
    Jt,
    ss,
    Ms,
    Kt,
    Wt,
    Xt,
    es,
    Rs,
    Zt,
    xt,
    na,
    ts,
    As,
    sa,
    ea,
    ta,
    as,
    Us,
    aa,
    oa,
    la,
    Vs,
    ra,
    pa,
    F,
    Hs,
    ca,
    ua,
    Fs,
    ia,
    fa,
    qs,
    da,
    ka,
    Qs,
    ga,
    ma,
    De,
    Tn,
    Pr = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Scroller <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> RedGraphic <span class="token keyword">from</span> <span class="token string">'./RedGraphic.svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> BlueGraphic <span class="token keyword">from</span> <span class="token string">'./BlueGraphic.svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> GreenGraphic <span class="token keyword">from</span> <span class="token string">'./GreenGraphic.svelte'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> steps <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      background<span class="token operator">:</span> RedGraphic<span class="token punctuation">,</span>
      foreground<span class="token operator">:</span> <span class="token string">'#### Step 1&#92;n&#92;nLorem ipsum'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      background<span class="token operator">:</span> BlueGraphic<span class="token punctuation">,</span>
      foreground<span class="token operator">:</span> <span class="token string">'#### Step 2&#92;n&#92;nLorem ipsum'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      background<span class="token operator">:</span> GreenGraphic<span class="token punctuation">,</span>
      foreground<span class="token operator">:</span> <span class="token string">'#### Step 3&#92;n&#92;nLorem ipsum'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span>
  <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">foregroundPosition</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right opposite<span class="token punctuation">"</span></span>
  <span class="token attr-name">backgroundSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>normal<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span></code>`,
    Oe,
    cn,
    Te,
    q,
    Ys,
    Js,
    ha,
    _a,
    tn,
    Ks,
    ba,
    va,
    un,
    Ws,
    wa,
    Ea,
    Xs,
    ya,
    $a,
    Sa,
    os,
    Zs,
    Pa,
    Ca,
    Ia,
    xs,
    ne,
    La,
    Da,
    an,
    se,
    Oa,
    Ta,
    jn,
    ja,
    ee,
    za,
    Ba,
    Ga,
    ls,
    te,
    Na,
    Ma,
    je,
    zn,
    Cr =
      '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span> <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">stackBackground="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">preload="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>',
    ze,
    fn,
    Be,
    rs,
    J,
    Ra,
    ae,
    Aa,
    Ua,
    oe,
    Va,
    Ha,
    le,
    Fa,
    qa,
    Ge,
    Bn,
    Ir = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Scroller <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MultiColourGraphic <span class="token keyword">from</span> <span class="token string">'./MultiColourGraphic.svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> InteractiveText <span class="token keyword">from</span> <span class="token string">'./InteractiveText.svelte'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> steps <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      background<span class="token operator">:</span> MultiColourGraphic<span class="token punctuation">,</span>
      backgroundProps<span class="token operator">:</span> <span class="token punctuation">&#123;</span> colour<span class="token operator">:</span> <span class="token string">'red'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token comment">// \u{1F448}</span>
      foreground<span class="token operator">:</span> InteractiveText<span class="token punctuation">,</span> <span class="token comment">// \u{1F448}</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      background<span class="token operator">:</span> MultiColourGraphic<span class="token punctuation">,</span>
      backgroundProps<span class="token operator">:</span> <span class="token punctuation">&#123;</span> colour<span class="token operator">:</span> <span class="token string">'blue'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      foreground<span class="token operator">:</span> <span class="token string">'#### Step 2&#92;n&#92;nLorem ipsum blue'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      background<span class="token operator">:</span> MultiColourGraphic<span class="token punctuation">,</span>
      backgroundProps<span class="token operator">:</span> <span class="token punctuation">&#123;</span> colour<span class="token operator">:</span> <span class="token string">'green'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      foreground<span class="token operator">:</span> InteractiveText<span class="token punctuation">,</span>
      foregroundProps<span class="token operator">:</span> <span class="token punctuation">&#123;</span> count<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token comment">// \u{1F448}</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span> <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">backgroundSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>widest<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>`,
    Ne,
    dn,
    Me,
    kn,
    Gn,
    Qa,
    re,
    Ya,
    Ja,
    Ka,
    gn,
    pe,
    Wa,
    Xa,
    Nn,
    Za,
    Mn,
    xa,
    no,
    Re,
    Rn,
    Lr = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span> <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">backgroundSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>widest<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-scroller<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- svelte-ignore css-unused-selector --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">// \u{1F447} Go global!
  :global</span> <span class="token punctuation">&#123;</span>
    <span class="token selector">#my-scroller</span> <span class="token punctuation">&#123;</span>
      <span class="token selector">.step-foreground</span> <span class="token punctuation">&#123;</span>
        <span class="token property">max-width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
        <span class="token selector">h4,
        p</span> <span class="token punctuation">&#123;</span>
          <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,
    Ae,
    mn,
    Ue,
    hn,
    on,
    so,
    An,
    eo,
    to,
    Un,
    ao,
    oo,
    lo,
    ps,
    Vn,
    ro,
    Hn,
    po,
    co,
    Ve,
    Fn,
    Dr = `<code class="language-bash"><span class="token comment"># In your Google doc...</span>
<span class="token punctuation">[</span>blocks<span class="token punctuation">]</span>

<span class="token comment"># ...</span>
Type: ai-scroller
ID: my-scroller
BackgroundSize: fluid
ForegroundPosition: middle

<span class="token punctuation">[</span>.steps<span class="token punctuation">]</span>
Background: ai-scroller-1
Foreground: <span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span># Step <span class="token number">1</span>

Lorem ipsum<span class="token punctuation">..</span>.
:end

Background: ai-scroller-2
Foreground: <span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span># Step <span class="token number">2</span>

Lorem ipsum<span class="token punctuation">..</span>.
:end

Background: ai-scroller-3
Foreground: <span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span># Step <span class="token number">3</span>

Lorem ipsum<span class="token punctuation">..</span>.
:end

<span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token punctuation">[</span><span class="token punctuation">]</span></code>`,
    He,
    qn,
    Or = `<code class="language-svelte"><span class="token comment">&lt;!-- src/lib/Page.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> content <span class="token keyword">from</span> <span class="token string">'$locales/en/content.json'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Scroller <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">fetchComponent</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">componentName</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">./ai2svelte/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>componentName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.svelte</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">makeSteps</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">steps</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> scrollerSteps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> step <span class="token keyword">of</span> steps<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">const</span> background <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchComponent</span><span class="token punctuation">(</span>step<span class="token punctuation">.</span>Background<span class="token punctuation">)</span><span class="token punctuation">;</span>
      scrollerSteps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
        background<span class="token punctuation">,</span>
        backgroundProps<span class="token operator">:</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        foreground<span class="token operator">:</span> step<span class="token punctuation">.</span>Foreground<span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">return</span> scrollerSteps<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">content<span class="token punctuation">.</span>blocks </span><span class="token keyword">as</span> <span class="token language-javascript">block<span class="token punctuation">&#125;</span></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> block<span class="token punctuation">.</span>Type <span class="token operator">===</span> <span class="token string">'ai-scroller'</span><span class="token punctuation">&#125;</span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">await</span> <span class="token function">makeSteps</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>steps<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>then steps<span class="token punctuation">&#125;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span>
        <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
        <span class="token attr-name">backgroundSize="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span>BackgroundSize<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
        <span class="token attr-name">foregroundPosition="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span>ForegroundPosition<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
        <span class="token attr-name">id="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span><span class="token constant">ID</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
      <span class="token punctuation">/></span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>catch error<span class="token punctuation">&#125;</span></span>
      <span class="token language-javascript"><span class="token punctuation">&#123;</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error making steps for scroller'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">await</span><span class="token punctuation">&#125;</span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span></code>`,
    Fe,
    cs,
    ln,
    uo,
    ce,
    io,
    fo,
    Qn,
    ko,
    go,
    qe,
    _n,
    Qe,
    R,
    ue,
    mo,
    ho,
    ie,
    fe,
    _o,
    bo,
    de,
    K,
    vo,
    ke,
    wo,
    Eo,
    ge,
    yo,
    $o,
    me,
    So,
    Po,
    Co,
    he,
    _e,
    Io,
    Lo,
    Yn,
    us,
    be,
    Do,
    Oo,
    To,
    is,
    ve,
    jo,
    zo,
    Ye,
    Jn,
    Tr = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span>
  <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">backgroundSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fluid<span class="token punctuation">"</span></span>
  <span class="token attr-name">embedded="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">embeddedLayout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fb<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span></code>`,
    Je,
    bn,
    Ke;
  return (
    (pn = new Xn({
      props: { fluid: !0, $$slots: { default: [Tp] }, $$scope: { ctx: r } },
    })),
    (cn = new Xn({
      props: { fluid: !0, $$slots: { default: [jp] }, $$scope: { ctx: r } },
    })),
    (fn = new Xn({
      props: { fluid: !0, $$slots: { default: [zp] }, $$scope: { ctx: r } },
    })),
    (dn = new Xn({
      props: { fluid: !0, $$slots: { default: [Bp] }, $$scope: { ctx: r } },
    })),
    (mn = new Xn({
      props: { fluid: !0, $$slots: { default: [Gp] }, $$scope: { ctx: r } },
    })),
    (_n = new Xn({
      props: { fluid: !0, $$slots: { default: [Ap] }, $$scope: { ctx: r } },
    })),
    (bn = new Xn({
      props: { fluid: !0, $$slots: { default: [Fp] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        (n = f('section')),
          (e = f('h2')),
          (s = m($r)),
          (t = y()),
          (c = f('p')),
          (o = m('Easy scrollytelling.')),
          (u = y()),
          (l = f('section')),
          (g = f('p')),
          (v = m(
            'This component is designed to handle most common layouts for scrollytelling. If you need something more complex, though, you should use '
          )),
          (w = f('a')),
          (S = m('svelte-scroller')),
          (L = m(
            ', which is a lower level component you can more easily customize.'
          )),
          (A = y()),
          (N = f('p')),
          (en = f('code')),
          (Sn = m('steps')),
          (hs = y()),
          (Pn = f('em')),
          (_s = m('an array of objects')),
          (D = y()),
          (Y = f('ul')),
          (Cn = f('li')),
          (bs = f('code')),
          (ft = m('background')),
          (dt = m(' A background component ')),
          (vs = f('strong')),
          (kt = m('REQUIRED')),
          (gt = y()),
          (xn = f('li')),
          (ws = f('code')),
          (mt = m('backgroundProps')),
          (ht = m(' An object of props given to background component')),
          (_t = y()),
          (In = f('li')),
          (Es = f('code')),
          (bt = m('foreground')),
          (vt = m(' Either a markdown string or a foreground component ')),
          (ys = f('strong')),
          (wt = m('REQUIRED')),
          (Et = y()),
          (ns = f('li')),
          ($s = f('code')),
          (yt = m('foregroundProps')),
          ($t = m(' An object of props given to foreground component')),
          (St = y()),
          (Ss = f('p')),
          (Ps = f('code')),
          (Pt = m('backgroundSize')),
          (Ct = y()),
          (Cs = f('ul')),
          (G = f('li')),
          (It = m(
            'Adjusts the size of the background graphic by passing a class name corresponding to one of our well widths: '
          )),
          (Is = f('code')),
          (Lt = m('normal')),
          (Dt = m(', ')),
          (Ls = f('code')),
          (Ot = m('wide')),
          (Tt = m(', ')),
          (Ds = f('code')),
          (jt = m('wider')),
          (zt = m(', ')),
          (Os = f('code')),
          (Bt = m('widest')),
          (Gt = m(' or ')),
          (Ts = f('code')),
          (Nt = m('fluid')),
          (Mt = m('.')),
          (Ce = y()),
          (Ln = f('pre')),
          (Ie = y()),
          T(pn.$$.fragment),
          (Le = y()),
          (M = f('section')),
          (Dn = f('p')),
          (Rt = m('Control the layout of your component with the ')),
          (js = f('code')),
          (At = m('foregroundPosition')),
          (Ut = m(' prop.')),
          (Vt = y()),
          (zs = f('p')),
          (Bs = f('code')),
          (Ht = m('foregroundPosition')),
          (Ft = y()),
          (U = f('ul')),
          (On = f('li')),
          (Gs = f('code')),
          (qt = m('middle')),
          (Qt = m(' Text and graphic middle ')),
          (Ns = f('em')),
          (Yt = m('default')),
          (Jt = y()),
          (ss = f('li')),
          (Ms = f('code')),
          (Kt = m('left')),
          (Wt = m(' Text to left, graphic stays middle')),
          (Xt = y()),
          (es = f('li')),
          (Rs = f('code')),
          (Zt = m('right')),
          (xt = m(' Text to right, graphic stays middle')),
          (na = y()),
          (ts = f('li')),
          (As = f('code')),
          (sa = m('left opposite')),
          (ea = m(' Text to left, graphic to right')),
          (ta = y()),
          (as = f('li')),
          (Us = f('code')),
          (aa = m('right opposite')),
          (oa = m(' Text to right, graphic to left')),
          (la = y()),
          (Vs = f('p')),
          (ra = m(
            'Both text and graphic will revert to the middle when the window drops below 1200px.'
          )),
          (pa = y()),
          (F = f('p')),
          (Hs = f('strong')),
          (ca = m('Note:')),
          (ua = m(' Make sure your ')),
          (Fs = f('code')),
          (ia = m('backgroundSize')),
          (fa = m(' prop is ')),
          (qs = f('em')),
          (da = m('not')),
          (ka = m(' set to ')),
          (Qs = f('code')),
          (ga = m('fluid')),
          (ma = m(' if using either left or right opposite option.')),
          (De = y()),
          (Tn = f('pre')),
          (Oe = y()),
          T(cn.$$.fragment),
          (Te = y()),
          (q = f('section')),
          (Ys = f('p')),
          (Js = f('code')),
          (ha = m('stackBackground')),
          (_a = y()),
          (tn = f('ul')),
          (Ks = f('li')),
          (ba = m(
            'Determines whether previous background step graphics will stack below current one.'
          )),
          (va = y()),
          (un = f('li')),
          (Ws = f('code')),
          (wa = m('true')),
          (Ea = y()),
          (Xs = f('em')),
          (ya = m('default')),
          ($a = m(
            ' Background graphics from previous steps will remain visible below active one, allowing you to stack graphics with transparent backgrounds.'
          )),
          (Sa = y()),
          (os = f('li')),
          (Zs = f('code')),
          (Pa = m('false')),
          (Ca = m(
            ' Only the background graphic from the current step will show and backgrounds from previous steps are hidden.'
          )),
          (Ia = y()),
          (xs = f('p')),
          (ne = f('code')),
          (La = m('preload')),
          (Da = y()),
          (an = f('ul')),
          (se = f('li')),
          (Oa = m(
            'Determines how many background steps to load before and after the currently active one. This prop basically lazyloads backgrounds, which is useful for making sure you\u2019re not loading too many images at once for long scrolls.'
          )),
          (Ta = y()),
          (jn = f('li')),
          (ja = m('Default is ')),
          (ee = f('code')),
          (za = m('1')),
          (Ba = m(
            ', which loads one background before and one after the currently active one.'
          )),
          (Ga = y()),
          (ls = f('li')),
          (te = f('code')),
          (Na = m('0')),
          (Ma = m(' disables lazyloading and loads all backgrounds at once.')),
          (je = y()),
          (zn = f('pre')),
          (ze = y()),
          T(fn.$$.fragment),
          (Be = y()),
          (rs = f('section')),
          (J = f('p')),
          (Ra = m('Pass a component to ')),
          (ae = f('code')),
          (Aa = m('foreground')),
          (Ua = m(' and use ')),
          (oe = f('code')),
          (Va = m('backgroundProps')),
          (Ha = m(' and ')),
          (le = f('code')),
          (Fa = m('foregroundProps')),
          (qa = m(' to pass data to your components.')),
          (Ge = y()),
          (Bn = f('pre')),
          (Ne = y()),
          T(dn.$$.fragment),
          (Me = y()),
          (kn = f('section')),
          (Gn = f('p')),
          (Qa = m('Add an ID to your scroller and use SCSS ')),
          (re = f('code')),
          (Ya = m(':global')),
          (Ja = m(' rules to override any styles.')),
          (Ka = y()),
          (gn = f('section')),
          (pe = f('p')),
          (Wa = m(
            'This is the main way you should customise this component for any layouts not covered by the props we\u2019ve already mentioned. Most small layout shifts can be handled with simple SCSS. Check out the component in your browser\u2019s inspector to find which elements you want to target with custom styles.'
          )),
          (Xa = y()),
          (Nn = f('p')),
          (Za = m(
            'If you\u2019re still struggling to make this component work for your design, it may be a good sign you should reach for '
          )),
          (Mn = f('a')),
          (xa = m('svelte-scroller')),
          (no = m(' instead.')),
          (Re = y()),
          (Rn = f('pre')),
          (Ae = y()),
          T(mn.$$.fragment),
          (Ue = y()),
          (hn = f('section')),
          (on = f('p')),
          (so = m(
            'You can also use this component to layout an AI-based graphics scroller via an '
          )),
          (An = f('a')),
          (eo = m('ArchieML')),
          (to = m(
            '-formatted Google doc by using the following pattern to dynamically import '
          )),
          (Un = f('a')),
          (ao = m('ai2svelte')),
          (oo = m(' components for the background:')),
          (lo = y()),
          (ps = f('section')),
          (Vn = f('p')),
          (ro = m('If you\u2019re using the ')),
          (Hn = f('a')),
          (po = m('graphics kit')),
          (co = m(
            ', this pattern is already wired up in the boilerplate included in the Page.svelte component. Free money!'
          )),
          (Ve = y()),
          (Fn = f('pre')),
          (He = y()),
          (qn = f('pre')),
          (Fe = y()),
          (cs = f('section')),
          (ln = f('p')),
          (uo = m(
            'This pattern comes with some restrictions, though. Be sure your '
          )),
          (ce = f('code')),
          (io = m('fetchComponent')),
          (fo = m(' function follows ')),
          (Qn = f('a')),
          (ko = m('the limits on dynamic imports')),
          (go = m('.')),
          (qe = y()),
          T(_n.$$.fragment),
          (Qe = y()),
          (R = f('section')),
          (ue = f('p')),
          (mo = m(
            'This component can also unravel the scrolling experience into a flat, linear layout. Use this when the graphic will be embedded in an iframe.'
          )),
          (ho = y()),
          (ie = f('p')),
          (fe = f('code')),
          (_o = m('embedded')),
          (bo = y()),
          (de = f('ul')),
          (K = f('li')),
          (vo = m('Setting to ')),
          (ke = f('code')),
          (wo = m('true')),
          (Eo = m(' will unroll the scroll experience into a flat layout. ')),
          (ge = f('code')),
          (yo = m('true')),
          ($o = m(' will also cause the ')),
          (me = f('code')),
          (So = m('foregroundPosition')),
          (Po = m(
            ' prop to be ignored. (Use global SCSS to adjust the style of foreground text.)'
          )),
          (Co = y()),
          (he = f('p')),
          (_e = f('code')),
          (Io = m('embeddedLayout')),
          (Lo = y()),
          (Yn = f('ul')),
          (us = f('li')),
          (be = f('code')),
          (Do = m('fb')),
          (Oo = m(
            ' (default) will layout the foreground before the background in each step.'
          )),
          (To = y()),
          (is = f('li')),
          (ve = f('code')),
          (jo = m('bf')),
          (zo = m(' will lead with the background in each step.')),
          (Ye = y()),
          (Jn = f('pre')),
          (Je = y()),
          T(bn.$$.fragment),
          this.h();
      },
      l(i) {
        n = d(i, 'SECTION', {});
        var _ = k(n);
        e = d(_, 'H2', {});
        var we = k(e);
        (s = h(we, $r)), we.forEach(p), (t = $(_)), (c = d(_, 'P', {}));
        var Ee = k(c);
        (o = h(Ee, 'Easy scrollytelling.')),
          Ee.forEach(p),
          (u = $(_)),
          (l = d(_, 'SECTION', { class: !0 }));
        var ye = k(l);
        g = d(ye, 'P', {});
        var Kn = k(g);
        (v = h(
          Kn,
          'This component is designed to handle most common layouts for scrollytelling. If you need something more complex, though, you should use '
        )),
          (w = d(Kn, 'A', { href: !0, rel: !0 }));
        var $e = k(w);
        (S = h($e, 'svelte-scroller')),
          $e.forEach(p),
          (L = h(
            Kn,
            ', which is a lower level component you can more easily customize.'
          )),
          Kn.forEach(p),
          ye.forEach(p),
          (A = $(_)),
          (N = d(_, 'P', {}));
        var Wn = k(N);
        en = d(Wn, 'CODE', {});
        var Se = k(en);
        (Sn = h(Se, 'steps')),
          Se.forEach(p),
          (hs = $(Wn)),
          (Pn = d(Wn, 'EM', {}));
        var Xo = k(Pn);
        (_s = h(Xo, 'an array of objects')),
          Xo.forEach(p),
          Wn.forEach(p),
          (D = $(_)),
          (Y = d(_, 'UL', {}));
        var vn = k(Y);
        Cn = d(vn, 'LI', {});
        var We = k(Cn);
        bs = d(We, 'CODE', {});
        var Zo = k(bs);
        (ft = h(Zo, 'background')),
          Zo.forEach(p),
          (dt = h(We, ' A background component ')),
          (vs = d(We, 'STRONG', {}));
        var xo = k(vs);
        (kt = h(xo, 'REQUIRED')),
          xo.forEach(p),
          We.forEach(p),
          (gt = $(vn)),
          (xn = d(vn, 'LI', {}));
        var Bo = k(xn);
        ws = d(Bo, 'CODE', {});
        var nl = k(ws);
        (mt = h(nl, 'backgroundProps')),
          nl.forEach(p),
          (ht = h(Bo, ' An object of props given to background component')),
          Bo.forEach(p),
          (_t = $(vn)),
          (In = d(vn, 'LI', {}));
        var Xe = k(In);
        Es = d(Xe, 'CODE', {});
        var sl = k(Es);
        (bt = h(sl, 'foreground')),
          sl.forEach(p),
          (vt = h(Xe, ' Either a markdown string or a foreground component ')),
          (ys = d(Xe, 'STRONG', {}));
        var el = k(ys);
        (wt = h(el, 'REQUIRED')),
          el.forEach(p),
          Xe.forEach(p),
          (Et = $(vn)),
          (ns = d(vn, 'LI', {}));
        var Go = k(ns);
        $s = d(Go, 'CODE', {});
        var tl = k($s);
        (yt = h(tl, 'foregroundProps')),
          tl.forEach(p),
          ($t = h(Go, ' An object of props given to foreground component')),
          Go.forEach(p),
          vn.forEach(p),
          (St = $(_)),
          (Ss = d(_, 'P', {}));
        var al = k(Ss);
        Ps = d(al, 'CODE', {});
        var ol = k(Ps);
        (Pt = h(ol, 'backgroundSize')),
          ol.forEach(p),
          al.forEach(p),
          (Ct = $(_)),
          (Cs = d(_, 'UL', {}));
        var ll = k(Cs);
        G = d(ll, 'LI', {});
        var Q = k(G);
        (It = h(
          Q,
          'Adjusts the size of the background graphic by passing a class name corresponding to one of our well widths: '
        )),
          (Is = d(Q, 'CODE', {}));
        var rl = k(Is);
        (Lt = h(rl, 'normal')),
          rl.forEach(p),
          (Dt = h(Q, ', ')),
          (Ls = d(Q, 'CODE', {}));
        var pl = k(Ls);
        (Ot = h(pl, 'wide')),
          pl.forEach(p),
          (Tt = h(Q, ', ')),
          (Ds = d(Q, 'CODE', {}));
        var cl = k(Ds);
        (jt = h(cl, 'wider')),
          cl.forEach(p),
          (zt = h(Q, ', ')),
          (Os = d(Q, 'CODE', {}));
        var ul = k(Os);
        (Bt = h(ul, 'widest')),
          ul.forEach(p),
          (Gt = h(Q, ' or ')),
          (Ts = d(Q, 'CODE', {}));
        var il = k(Ts);
        (Nt = h(il, 'fluid')),
          il.forEach(p),
          (Mt = h(Q, '.')),
          Q.forEach(p),
          ll.forEach(p),
          _.forEach(p),
          (Ce = $(i)),
          (Ln = d(i, 'PRE', { class: !0 }));
        var jr = k(Ln);
        jr.forEach(p),
          (Ie = $(i)),
          z(pn.$$.fragment, i),
          (Le = $(i)),
          (M = d(i, 'SECTION', {}));
        var W = k(M);
        Dn = d(W, 'P', {});
        var Ze = k(Dn);
        (Rt = h(Ze, 'Control the layout of your component with the ')),
          (js = d(Ze, 'CODE', {}));
        var fl = k(js);
        (At = h(fl, 'foregroundPosition')),
          fl.forEach(p),
          (Ut = h(Ze, ' prop.')),
          Ze.forEach(p),
          (Vt = $(W)),
          (zs = d(W, 'P', {}));
        var dl = k(zs);
        Bs = d(dl, 'CODE', {});
        var kl = k(Bs);
        (Ht = h(kl, 'foregroundPosition')),
          kl.forEach(p),
          dl.forEach(p),
          (Ft = $(W)),
          (U = d(W, 'UL', {}));
        var X = k(U);
        On = d(X, 'LI', {});
        var xe = k(On);
        Gs = d(xe, 'CODE', {});
        var gl = k(Gs);
        (qt = h(gl, 'middle')),
          gl.forEach(p),
          (Qt = h(xe, ' Text and graphic middle ')),
          (Ns = d(xe, 'EM', {}));
        var ml = k(Ns);
        (Yt = h(ml, 'default')),
          ml.forEach(p),
          xe.forEach(p),
          (Jt = $(X)),
          (ss = d(X, 'LI', {}));
        var No = k(ss);
        Ms = d(No, 'CODE', {});
        var hl = k(Ms);
        (Kt = h(hl, 'left')),
          hl.forEach(p),
          (Wt = h(No, ' Text to left, graphic stays middle')),
          No.forEach(p),
          (Xt = $(X)),
          (es = d(X, 'LI', {}));
        var Mo = k(es);
        Rs = d(Mo, 'CODE', {});
        var _l = k(Rs);
        (Zt = h(_l, 'right')),
          _l.forEach(p),
          (xt = h(Mo, ' Text to right, graphic stays middle')),
          Mo.forEach(p),
          (na = $(X)),
          (ts = d(X, 'LI', {}));
        var Ro = k(ts);
        As = d(Ro, 'CODE', {});
        var bl = k(As);
        (sa = h(bl, 'left opposite')),
          bl.forEach(p),
          (ea = h(Ro, ' Text to left, graphic to right')),
          Ro.forEach(p),
          (ta = $(X)),
          (as = d(X, 'LI', {}));
        var Ao = k(as);
        Us = d(Ao, 'CODE', {});
        var vl = k(Us);
        (aa = h(vl, 'right opposite')),
          vl.forEach(p),
          (oa = h(Ao, ' Text to right, graphic to left')),
          Ao.forEach(p),
          X.forEach(p),
          (la = $(W)),
          (Vs = d(W, 'P', {}));
        var wl = k(Vs);
        (ra = h(
          wl,
          'Both text and graphic will revert to the middle when the window drops below 1200px.'
        )),
          wl.forEach(p),
          (pa = $(W)),
          (F = d(W, 'P', {}));
        var rn = k(F);
        Hs = d(rn, 'STRONG', {});
        var El = k(Hs);
        (ca = h(El, 'Note:')),
          El.forEach(p),
          (ua = h(rn, ' Make sure your ')),
          (Fs = d(rn, 'CODE', {}));
        var yl = k(Fs);
        (ia = h(yl, 'backgroundSize')),
          yl.forEach(p),
          (fa = h(rn, ' prop is ')),
          (qs = d(rn, 'EM', {}));
        var $l = k(qs);
        (da = h($l, 'not')),
          $l.forEach(p),
          (ka = h(rn, ' set to ')),
          (Qs = d(rn, 'CODE', {}));
        var Sl = k(Qs);
        (ga = h(Sl, 'fluid')),
          Sl.forEach(p),
          (ma = h(rn, ' if using either left or right opposite option.')),
          rn.forEach(p),
          W.forEach(p),
          (De = $(i)),
          (Tn = d(i, 'PRE', { class: !0 }));
        var zr = k(Tn);
        zr.forEach(p),
          (Oe = $(i)),
          z(cn.$$.fragment, i),
          (Te = $(i)),
          (q = d(i, 'SECTION', {}));
        var wn = k(q);
        Ys = d(wn, 'P', {});
        var Pl = k(Ys);
        Js = d(Pl, 'CODE', {});
        var Cl = k(Js);
        (ha = h(Cl, 'stackBackground')),
          Cl.forEach(p),
          Pl.forEach(p),
          (_a = $(wn)),
          (tn = d(wn, 'UL', {}));
        var fs = k(tn);
        Ks = d(fs, 'LI', {});
        var Il = k(Ks);
        (ba = h(
          Il,
          'Determines whether previous background step graphics will stack below current one.'
        )),
          Il.forEach(p),
          (va = $(fs)),
          (un = d(fs, 'LI', {}));
        var Pe = k(un);
        Ws = d(Pe, 'CODE', {});
        var Ll = k(Ws);
        (wa = h(Ll, 'true')),
          Ll.forEach(p),
          (Ea = $(Pe)),
          (Xs = d(Pe, 'EM', {}));
        var Dl = k(Xs);
        (ya = h(Dl, 'default')),
          Dl.forEach(p),
          ($a = h(
            Pe,
            ' Background graphics from previous steps will remain visible below active one, allowing you to stack graphics with transparent backgrounds.'
          )),
          Pe.forEach(p),
          (Sa = $(fs)),
          (os = d(fs, 'LI', {}));
        var Uo = k(os);
        Zs = d(Uo, 'CODE', {});
        var Ol = k(Zs);
        (Pa = h(Ol, 'false')),
          Ol.forEach(p),
          (Ca = h(
            Uo,
            ' Only the background graphic from the current step will show and backgrounds from previous steps are hidden.'
          )),
          Uo.forEach(p),
          fs.forEach(p),
          (Ia = $(wn)),
          (xs = d(wn, 'P', {}));
        var Tl = k(xs);
        ne = d(Tl, 'CODE', {});
        var jl = k(ne);
        (La = h(jl, 'preload')),
          jl.forEach(p),
          Tl.forEach(p),
          (Da = $(wn)),
          (an = d(wn, 'UL', {}));
        var ds = k(an);
        se = d(ds, 'LI', {});
        var zl = k(se);
        (Oa = h(
          zl,
          'Determines how many background steps to load before and after the currently active one. This prop basically lazyloads backgrounds, which is useful for making sure you\u2019re not loading too many images at once for long scrolls.'
        )),
          zl.forEach(p),
          (Ta = $(ds)),
          (jn = d(ds, 'LI', {}));
        var nt = k(jn);
        (ja = h(nt, 'Default is ')), (ee = d(nt, 'CODE', {}));
        var Bl = k(ee);
        (za = h(Bl, '1')),
          Bl.forEach(p),
          (Ba = h(
            nt,
            ', which loads one background before and one after the currently active one.'
          )),
          nt.forEach(p),
          (Ga = $(ds)),
          (ls = d(ds, 'LI', {}));
        var Vo = k(ls);
        te = d(Vo, 'CODE', {});
        var Gl = k(te);
        (Na = h(Gl, '0')),
          Gl.forEach(p),
          (Ma = h(
            Vo,
            ' disables lazyloading and loads all backgrounds at once.'
          )),
          Vo.forEach(p),
          ds.forEach(p),
          wn.forEach(p),
          (je = $(i)),
          (zn = d(i, 'PRE', { class: !0 }));
        var Br = k(zn);
        Br.forEach(p),
          (ze = $(i)),
          z(fn.$$.fragment, i),
          (Be = $(i)),
          (rs = d(i, 'SECTION', {}));
        var Nl = k(rs);
        J = d(Nl, 'P', {});
        var En = k(J);
        (Ra = h(En, 'Pass a component to ')), (ae = d(En, 'CODE', {}));
        var Ml = k(ae);
        (Aa = h(Ml, 'foreground')),
          Ml.forEach(p),
          (Ua = h(En, ' and use ')),
          (oe = d(En, 'CODE', {}));
        var Rl = k(oe);
        (Va = h(Rl, 'backgroundProps')),
          Rl.forEach(p),
          (Ha = h(En, ' and ')),
          (le = d(En, 'CODE', {}));
        var Al = k(le);
        (Fa = h(Al, 'foregroundProps')),
          Al.forEach(p),
          (qa = h(En, ' to pass data to your components.')),
          En.forEach(p),
          Nl.forEach(p),
          (Ge = $(i)),
          (Bn = d(i, 'PRE', { class: !0 }));
        var Gr = k(Bn);
        Gr.forEach(p),
          (Ne = $(i)),
          z(dn.$$.fragment, i),
          (Me = $(i)),
          (kn = d(i, 'SECTION', {}));
        var st = k(kn);
        Gn = d(st, 'P', {});
        var et = k(Gn);
        (Qa = h(et, 'Add an ID to your scroller and use SCSS ')),
          (re = d(et, 'CODE', {}));
        var Ul = k(re);
        (Ya = h(Ul, ':global')),
          Ul.forEach(p),
          (Ja = h(et, ' rules to override any styles.')),
          et.forEach(p),
          (Ka = $(st)),
          (gn = d(st, 'SECTION', { class: !0 }));
        var tt = k(gn);
        pe = d(tt, 'P', {});
        var Vl = k(pe);
        (Wa = h(
          Vl,
          'This is the main way you should customise this component for any layouts not covered by the props we\u2019ve already mentioned. Most small layout shifts can be handled with simple SCSS. Check out the component in your browser\u2019s inspector to find which elements you want to target with custom styles.'
        )),
          Vl.forEach(p),
          (Xa = $(tt)),
          (Nn = d(tt, 'P', {}));
        var at = k(Nn);
        (Za = h(
          at,
          'If you\u2019re still struggling to make this component work for your design, it may be a good sign you should reach for '
        )),
          (Mn = d(at, 'A', { href: !0, rel: !0 }));
        var Hl = k(Mn);
        (xa = h(Hl, 'svelte-scroller')),
          Hl.forEach(p),
          (no = h(at, ' instead.')),
          at.forEach(p),
          tt.forEach(p),
          st.forEach(p),
          (Re = $(i)),
          (Rn = d(i, 'PRE', { class: !0 }));
        var Nr = k(Rn);
        Nr.forEach(p),
          (Ae = $(i)),
          z(mn.$$.fragment, i),
          (Ue = $(i)),
          (hn = d(i, 'SECTION', {}));
        var ot = k(hn);
        on = d(ot, 'P', {});
        var ks = k(on);
        (so = h(
          ks,
          'You can also use this component to layout an AI-based graphics scroller via an '
        )),
          (An = d(ks, 'A', { href: !0, rel: !0 }));
        var Fl = k(An);
        (eo = h(Fl, 'ArchieML')),
          Fl.forEach(p),
          (to = h(
            ks,
            '-formatted Google doc by using the following pattern to dynamically import '
          )),
          (Un = d(ks, 'A', { href: !0, rel: !0 }));
        var ql = k(Un);
        (ao = h(ql, 'ai2svelte')),
          ql.forEach(p),
          (oo = h(ks, ' components for the background:')),
          ks.forEach(p),
          (lo = $(ot)),
          (ps = d(ot, 'SECTION', { class: !0 }));
        var Ql = k(ps);
        Vn = d(Ql, 'P', {});
        var lt = k(Vn);
        (ro = h(lt, 'If you\u2019re using the ')),
          (Hn = d(lt, 'A', { href: !0, rel: !0 }));
        var Yl = k(Hn);
        (po = h(Yl, 'graphics kit')),
          Yl.forEach(p),
          (co = h(
            lt,
            ', this pattern is already wired up in the boilerplate included in the Page.svelte component. Free money!'
          )),
          lt.forEach(p),
          Ql.forEach(p),
          ot.forEach(p),
          (Ve = $(i)),
          (Fn = d(i, 'PRE', { class: !0 }));
        var Mr = k(Fn);
        Mr.forEach(p), (He = $(i)), (qn = d(i, 'PRE', { class: !0 }));
        var Rr = k(qn);
        Rr.forEach(p), (Fe = $(i)), (cs = d(i, 'SECTION', {}));
        var Jl = k(cs);
        ln = d(Jl, 'P', {});
        var gs = k(ln);
        (uo = h(
          gs,
          'This pattern comes with some restrictions, though. Be sure your '
        )),
          (ce = d(gs, 'CODE', {}));
        var Kl = k(ce);
        (io = h(Kl, 'fetchComponent')),
          Kl.forEach(p),
          (fo = h(gs, ' function follows ')),
          (Qn = d(gs, 'A', { href: !0, rel: !0 }));
        var Wl = k(Qn);
        (ko = h(Wl, 'the limits on dynamic imports')),
          Wl.forEach(p),
          (go = h(gs, '.')),
          gs.forEach(p),
          Jl.forEach(p),
          (qe = $(i)),
          z(_n.$$.fragment, i),
          (Qe = $(i)),
          (R = d(i, 'SECTION', {}));
        var Z = k(R);
        ue = d(Z, 'P', {});
        var Xl = k(ue);
        (mo = h(
          Xl,
          'This component can also unravel the scrolling experience into a flat, linear layout. Use this when the graphic will be embedded in an iframe.'
        )),
          Xl.forEach(p),
          (ho = $(Z)),
          (ie = d(Z, 'P', {}));
        var Zl = k(ie);
        fe = d(Zl, 'CODE', {});
        var xl = k(fe);
        (_o = h(xl, 'embedded')),
          xl.forEach(p),
          Zl.forEach(p),
          (bo = $(Z)),
          (de = d(Z, 'UL', {}));
        var nr = k(de);
        K = d(nr, 'LI', {});
        var yn = k(K);
        (vo = h(yn, 'Setting to ')), (ke = d(yn, 'CODE', {}));
        var sr = k(ke);
        (wo = h(sr, 'true')),
          sr.forEach(p),
          (Eo = h(
            yn,
            ' will unroll the scroll experience into a flat layout. '
          )),
          (ge = d(yn, 'CODE', {}));
        var er = k(ge);
        (yo = h(er, 'true')),
          er.forEach(p),
          ($o = h(yn, ' will also cause the ')),
          (me = d(yn, 'CODE', {}));
        var tr = k(me);
        (So = h(tr, 'foregroundPosition')),
          tr.forEach(p),
          (Po = h(
            yn,
            ' prop to be ignored. (Use global SCSS to adjust the style of foreground text.)'
          )),
          yn.forEach(p),
          nr.forEach(p),
          (Co = $(Z)),
          (he = d(Z, 'P', {}));
        var ar = k(he);
        _e = d(ar, 'CODE', {});
        var or = k(_e);
        (Io = h(or, 'embeddedLayout')),
          or.forEach(p),
          ar.forEach(p),
          (Lo = $(Z)),
          (Yn = d(Z, 'UL', {}));
        var rt = k(Yn);
        us = d(rt, 'LI', {});
        var Ho = k(us);
        be = d(Ho, 'CODE', {});
        var lr = k(be);
        (Do = h(lr, 'fb')),
          lr.forEach(p),
          (Oo = h(
            Ho,
            ' (default) will layout the foreground before the background in each step.'
          )),
          Ho.forEach(p),
          (To = $(rt)),
          (is = d(rt, 'LI', {}));
        var Fo = k(is);
        ve = d(Fo, 'CODE', {});
        var rr = k(ve);
        (jo = h(rr, 'bf')),
          rr.forEach(p),
          (zo = h(Fo, ' will lead with the background in each step.')),
          Fo.forEach(p),
          rt.forEach(p),
          Z.forEach(p),
          (Ye = $(i)),
          (Jn = d(i, 'PRE', { class: !0 }));
        var Ar = k(Jn);
        Ar.forEach(p), (Je = $(i)), z(bn.$$.fragment, i), this.h();
      },
      h() {
        E(w, 'href', 'https://github.com/sveltejs/svelte-scroller'),
          E(w, 'rel', 'nofollow'),
          E(l, 'class', 'note'),
          E(Ln, 'class', 'language-svelte'),
          E(Tn, 'class', 'language-svelte'),
          E(zn, 'class', 'language-svelte'),
          E(Bn, 'class', 'language-svelte'),
          E(Mn, 'href', 'https://github.com/sveltejs/svelte-scroller'),
          E(Mn, 'rel', 'nofollow'),
          E(gn, 'class', 'note'),
          E(Rn, 'class', 'language-svelte'),
          E(An, 'href', 'http://archieml.org/'),
          E(An, 'rel', 'nofollow'),
          E(Un, 'href', 'https://github.com/reuters-graphics/ai2svelte'),
          E(Un, 'rel', 'nofollow'),
          E(
            Hn,
            'href',
            'https://github.com/reuters-graphics/bluprint_graphics-kit'
          ),
          E(Hn, 'rel', 'nofollow'),
          E(ps, 'class', 'note'),
          E(Fn, 'class', 'language-bash'),
          E(qn, 'class', 'language-svelte'),
          E(
            Qn,
            'href',
            'https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations'
          ),
          E(Qn, 'rel', 'nofollow'),
          E(Jn, 'class', 'language-svelte');
      },
      m(i, _) {
        b(i, n, _),
          a(n, e),
          a(e, s),
          a(n, t),
          a(n, c),
          a(c, o),
          a(n, u),
          a(n, l),
          a(l, g),
          a(g, v),
          a(g, w),
          a(w, S),
          a(g, L),
          a(n, A),
          a(n, N),
          a(N, en),
          a(en, Sn),
          a(N, hs),
          a(N, Pn),
          a(Pn, _s),
          a(n, D),
          a(n, Y),
          a(Y, Cn),
          a(Cn, bs),
          a(bs, ft),
          a(Cn, dt),
          a(Cn, vs),
          a(vs, kt),
          a(Y, gt),
          a(Y, xn),
          a(xn, ws),
          a(ws, mt),
          a(xn, ht),
          a(Y, _t),
          a(Y, In),
          a(In, Es),
          a(Es, bt),
          a(In, vt),
          a(In, ys),
          a(ys, wt),
          a(Y, Et),
          a(Y, ns),
          a(ns, $s),
          a($s, yt),
          a(ns, $t),
          a(n, St),
          a(n, Ss),
          a(Ss, Ps),
          a(Ps, Pt),
          a(n, Ct),
          a(n, Cs),
          a(Cs, G),
          a(G, It),
          a(G, Is),
          a(Is, Lt),
          a(G, Dt),
          a(G, Ls),
          a(Ls, Ot),
          a(G, Tt),
          a(G, Ds),
          a(Ds, jt),
          a(G, zt),
          a(G, Os),
          a(Os, Bt),
          a(G, Gt),
          a(G, Ts),
          a(Ts, Nt),
          a(G, Mt),
          b(i, Ce, _),
          b(i, Ln, _),
          (Ln.innerHTML = Sr),
          b(i, Ie, _),
          j(pn, i, _),
          b(i, Le, _),
          b(i, M, _),
          a(M, Dn),
          a(Dn, Rt),
          a(Dn, js),
          a(js, At),
          a(Dn, Ut),
          a(M, Vt),
          a(M, zs),
          a(zs, Bs),
          a(Bs, Ht),
          a(M, Ft),
          a(M, U),
          a(U, On),
          a(On, Gs),
          a(Gs, qt),
          a(On, Qt),
          a(On, Ns),
          a(Ns, Yt),
          a(U, Jt),
          a(U, ss),
          a(ss, Ms),
          a(Ms, Kt),
          a(ss, Wt),
          a(U, Xt),
          a(U, es),
          a(es, Rs),
          a(Rs, Zt),
          a(es, xt),
          a(U, na),
          a(U, ts),
          a(ts, As),
          a(As, sa),
          a(ts, ea),
          a(U, ta),
          a(U, as),
          a(as, Us),
          a(Us, aa),
          a(as, oa),
          a(M, la),
          a(M, Vs),
          a(Vs, ra),
          a(M, pa),
          a(M, F),
          a(F, Hs),
          a(Hs, ca),
          a(F, ua),
          a(F, Fs),
          a(Fs, ia),
          a(F, fa),
          a(F, qs),
          a(qs, da),
          a(F, ka),
          a(F, Qs),
          a(Qs, ga),
          a(F, ma),
          b(i, De, _),
          b(i, Tn, _),
          (Tn.innerHTML = Pr),
          b(i, Oe, _),
          j(cn, i, _),
          b(i, Te, _),
          b(i, q, _),
          a(q, Ys),
          a(Ys, Js),
          a(Js, ha),
          a(q, _a),
          a(q, tn),
          a(tn, Ks),
          a(Ks, ba),
          a(tn, va),
          a(tn, un),
          a(un, Ws),
          a(Ws, wa),
          a(un, Ea),
          a(un, Xs),
          a(Xs, ya),
          a(un, $a),
          a(tn, Sa),
          a(tn, os),
          a(os, Zs),
          a(Zs, Pa),
          a(os, Ca),
          a(q, Ia),
          a(q, xs),
          a(xs, ne),
          a(ne, La),
          a(q, Da),
          a(q, an),
          a(an, se),
          a(se, Oa),
          a(an, Ta),
          a(an, jn),
          a(jn, ja),
          a(jn, ee),
          a(ee, za),
          a(jn, Ba),
          a(an, Ga),
          a(an, ls),
          a(ls, te),
          a(te, Na),
          a(ls, Ma),
          b(i, je, _),
          b(i, zn, _),
          (zn.innerHTML = Cr),
          b(i, ze, _),
          j(fn, i, _),
          b(i, Be, _),
          b(i, rs, _),
          a(rs, J),
          a(J, Ra),
          a(J, ae),
          a(ae, Aa),
          a(J, Ua),
          a(J, oe),
          a(oe, Va),
          a(J, Ha),
          a(J, le),
          a(le, Fa),
          a(J, qa),
          b(i, Ge, _),
          b(i, Bn, _),
          (Bn.innerHTML = Ir),
          b(i, Ne, _),
          j(dn, i, _),
          b(i, Me, _),
          b(i, kn, _),
          a(kn, Gn),
          a(Gn, Qa),
          a(Gn, re),
          a(re, Ya),
          a(Gn, Ja),
          a(kn, Ka),
          a(kn, gn),
          a(gn, pe),
          a(pe, Wa),
          a(gn, Xa),
          a(gn, Nn),
          a(Nn, Za),
          a(Nn, Mn),
          a(Mn, xa),
          a(Nn, no),
          b(i, Re, _),
          b(i, Rn, _),
          (Rn.innerHTML = Lr),
          b(i, Ae, _),
          j(mn, i, _),
          b(i, Ue, _),
          b(i, hn, _),
          a(hn, on),
          a(on, so),
          a(on, An),
          a(An, eo),
          a(on, to),
          a(on, Un),
          a(Un, ao),
          a(on, oo),
          a(hn, lo),
          a(hn, ps),
          a(ps, Vn),
          a(Vn, ro),
          a(Vn, Hn),
          a(Hn, po),
          a(Vn, co),
          b(i, Ve, _),
          b(i, Fn, _),
          (Fn.innerHTML = Dr),
          b(i, He, _),
          b(i, qn, _),
          (qn.innerHTML = Or),
          b(i, Fe, _),
          b(i, cs, _),
          a(cs, ln),
          a(ln, uo),
          a(ln, ce),
          a(ce, io),
          a(ln, fo),
          a(ln, Qn),
          a(Qn, ko),
          a(ln, go),
          b(i, qe, _),
          j(_n, i, _),
          b(i, Qe, _),
          b(i, R, _),
          a(R, ue),
          a(ue, mo),
          a(R, ho),
          a(R, ie),
          a(ie, fe),
          a(fe, _o),
          a(R, bo),
          a(R, de),
          a(de, K),
          a(K, vo),
          a(K, ke),
          a(ke, wo),
          a(K, Eo),
          a(K, ge),
          a(ge, yo),
          a(K, $o),
          a(K, me),
          a(me, So),
          a(K, Po),
          a(R, Co),
          a(R, he),
          a(he, _e),
          a(_e, Io),
          a(R, Lo),
          a(R, Yn),
          a(Yn, us),
          a(us, be),
          a(be, Do),
          a(us, Oo),
          a(Yn, To),
          a(Yn, is),
          a(is, ve),
          a(ve, jo),
          a(is, zo),
          b(i, Ye, _),
          b(i, Jn, _),
          (Jn.innerHTML = Tr),
          b(i, Je, _),
          j(bn, i, _),
          (Ke = !0);
      },
      p(i, [_]) {
        const we = {};
        _ & 128 && (we.$$scope = { dirty: _, ctx: i }), pn.$set(we);
        const Ee = {};
        _ & 128 && (Ee.$$scope = { dirty: _, ctx: i }), cn.$set(Ee);
        const ye = {};
        _ & 128 && (ye.$$scope = { dirty: _, ctx: i }), fn.$set(ye);
        const Kn = {};
        _ & 128 && (Kn.$$scope = { dirty: _, ctx: i }), dn.$set(Kn);
        const $e = {};
        _ & 128 && ($e.$$scope = { dirty: _, ctx: i }), mn.$set($e);
        const Wn = {};
        _ & 128 && (Wn.$$scope = { dirty: _, ctx: i }), _n.$set(Wn);
        const Se = {};
        _ & 128 && (Se.$$scope = { dirty: _, ctx: i }), bn.$set(Se);
      },
      i(i) {
        Ke ||
          (P(pn.$$.fragment, i),
          P(cn.$$.fragment, i),
          P(fn.$$.fragment, i),
          P(dn.$$.fragment, i),
          P(mn.$$.fragment, i),
          P(_n.$$.fragment, i),
          P(bn.$$.fragment, i),
          (Ke = !0));
      },
      o(i) {
        C(pn.$$.fragment, i),
          C(cn.$$.fragment, i),
          C(fn.$$.fragment, i),
          C(dn.$$.fragment, i),
          C(mn.$$.fragment, i),
          C(_n.$$.fragment, i),
          C(bn.$$.fragment, i),
          (Ke = !1);
      },
      d(i) {
        i && p(n),
          i && p(Ce),
          i && p(Ln),
          i && p(Ie),
          O(pn, i),
          i && p(Le),
          i && p(M),
          i && p(De),
          i && p(Tn),
          i && p(Oe),
          O(cn, i),
          i && p(Te),
          i && p(q),
          i && p(je),
          i && p(zn),
          i && p(ze),
          O(fn, i),
          i && p(Be),
          i && p(rs),
          i && p(Ge),
          i && p(Bn),
          i && p(Ne),
          O(dn, i),
          i && p(Me),
          i && p(kn),
          i && p(Re),
          i && p(Rn),
          i && p(Ae),
          O(mn, i),
          i && p(Ue),
          i && p(hn),
          i && p(Ve),
          i && p(Fn),
          i && p(He),
          i && p(qn),
          i && p(Fe),
          i && p(cs),
          i && p(qe),
          O(_n, i),
          i && p(Qe),
          i && p(R),
          i && p(Ye),
          i && p(Jn),
          i && p(Je),
          O(bn, i);
      },
    }
  );
}
const Qp = {
    title: 'Scroller',
    description: 'Easy scrollytelling with layout options.',
    slug: 'scroller',
  },
  { title: $r, description: nc, slug: sc } = Qp;
function Yp(r) {
  const n = [
      {
        background: ms,
        backgroundProps: { colour: 'red' },
        foreground: `#### Step 1

Lorem ipsum red`,
      },
      {
        background: ms,
        backgroundProps: { colour: 'blue' },
        foreground: `#### Step 2

Lorem ipsum blue`,
      },
      {
        background: ms,
        backgroundProps: { colour: 'green' },
        foreground: `#### Step 3

Lorem ipsum green`,
      },
    ],
    e = [
      {
        background: Wo,
        backgroundProps: { colour: 'red', i: 0 },
        foreground: `#### Step 1

Lorem ipsum red`,
      },
      {
        background: Wo,
        backgroundProps: { colour: 'blue', i: 1 },
        foreground: `#### Step 2

Lorem ipsum blue`,
      },
      {
        background: Wo,
        backgroundProps: { colour: 'green', i: 2 },
        foreground: `#### Step 3

Lorem ipsum green`,
      },
    ],
    s = [
      { background: ms, backgroundProps: { colour: 'red' }, foreground: yr },
      {
        background: ms,
        backgroundProps: { colour: 'blue' },
        foreground: `#### Step 2

Lorem ipsum blue`,
      },
      {
        background: ms,
        backgroundProps: { colour: 'green' },
        foreground: yr,
        foregroundProps: { count: 100 },
      },
    ],
    t = [
      {
        background: 'ai-scroller-1',
        foreground: `#### Step 1

Lorem ipsum`,
      },
      {
        background: 'ai-scroller-2',
        foreground: `#### Step 2

Lorem ipsum`,
      },
      {
        background: 'ai-scroller-3',
        foreground: `#### Step 3

Lorem ipsum`,
      },
    ],
    c = async (u) => (await Op(`./demos/ai2html/${u}.exclude.svelte`)).default;
  return [
    n,
    e,
    s,
    t,
    async (u) => {
      const l = [];
      for (const g of u) {
        const v = await c(g.background);
        l.push(ir(ur({}, g), { background: v }));
      }
      return l;
    },
  ];
}
class ec extends x {
  constructor(n) {
    super();
    nn(this, n, Yp, qp, sn, {});
  }
}
export { ec as default, Qp as metadata };
