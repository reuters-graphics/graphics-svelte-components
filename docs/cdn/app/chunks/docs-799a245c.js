var n = Object.defineProperty,
  s = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  t = Object.prototype.propertyIsEnumerable,
  o = (s, a, t) =>
    a in s
      ? n(s, a, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (s[a] = t),
  e = (n, e) => {
    for (var p in e || (e = {})) a.call(e, p) && o(n, p, e[p]);
    if (s) for (var p of s(e)) t.call(e, p) && o(n, p, e[p]);
    return n;
  };
'undefined' != typeof require && require;
import { _ as p } from './preload-helper-438f94a3.js';
import {
  S as c,
  i as r,
  s as l,
  l as u,
  f as i,
  x as k,
  e as d,
  k as g,
  c as f,
  a as h,
  n as m,
  d as $,
  b as v,
  Y as b,
  H as y,
  p as w,
  q as E,
  r as x,
  u as S,
  v as P,
  w as C,
  j as I,
  o as L,
  L as O,
  B as D,
  m as T,
  I as j,
  a3 as z,
  O as B,
  Q as G,
  a8 as N,
  a6 as M,
  a9 as R,
  aa as A,
  t as U,
  g as V,
  V as _,
  h as H,
  a1 as F,
  a2 as q,
} from './vendor-927c0fc0.js';
import { D as Q } from './index-38e47fc4.js';
import './@component-docs-73e95ca8.js';
import './paths-6758d194.js';
function Y(n, s, a) {
  const t = n.slice();
  return (t[4] = s[a]), (t[6] = a), t;
}
function J(n) {
  let s, a, t, o;
  const e = [n[4].backgroundProps || {}];
  var p = n[4].background;
  function c(n) {
    let s = {};
    for (let a = 0; a < e.length; a += 1) s = D(s, e[a]);
    return { props: s };
  }
  return (
    p && (a = new p(c())),
    {
      c() {
        (s = d('div')), a && I(a.$$.fragment), (t = g()), this.h();
      },
      l(n) {
        s = f(n, 'DIV', { class: !0 });
        var o = h(s);
        a && T(a.$$.fragment, o), (t = m(o)), o.forEach($), this.h();
      },
      h() {
        v(s, 'class', 'step-background step-' + (n[6] + 1) + ' svelte-va4hxg'),
          b(s, 'visible', n[3] ? n[6] <= n[0] : n[6] === n[0]),
          b(s, 'hidden', n[3] ? n[6] > n[0] : n[6] !== n[0]);
      },
      m(n, e) {
        i(n, s, e), a && L(a, s, null), y(s, t), (o = !0);
      },
      p(n, o) {
        const r = 2 & o ? w(e, [E(n[4].backgroundProps || {})]) : {};
        if (p !== (p = n[4].background)) {
          if (a) {
            x();
            const n = a;
            S(n.$$.fragment, 1, 0, () => {
              P(n, 1);
            }),
              C();
          }
          p
            ? ((a = new p(c())),
              I(a.$$.fragment),
              k(a.$$.fragment, 1),
              L(a, s, t))
            : (a = null);
        } else p && a.$set(r);
        9 & o && b(s, 'visible', n[3] ? n[6] <= n[0] : n[6] === n[0]),
          9 & o && b(s, 'hidden', n[3] ? n[6] > n[0] : n[6] !== n[0]);
      },
      i(n) {
        o || (a && k(a.$$.fragment, n), (o = !0));
      },
      o(n) {
        a && S(a.$$.fragment, n), (o = !1);
      },
      d(n) {
        n && $(s), a && P(a);
      },
    }
  );
}
function K(n) {
  let s,
    a,
    t = (0 === n[2] || (n[6] >= n[0] - n[2] && n[6] <= n[0] + n[2])) && J(n);
  return {
    c() {
      t && t.c(), (s = u());
    },
    l(n) {
      t && t.l(n), (s = u());
    },
    m(n, o) {
      t && t.m(n, o), i(n, s, o), (a = !0);
    },
    p(n, a) {
      0 === n[2] || (n[6] >= n[0] - n[2] && n[6] <= n[0] + n[2])
        ? t
          ? (t.p(n, a), 5 & a && k(t, 1))
          : ((t = J(n)), t.c(), k(t, 1), t.m(s.parentNode, s))
        : t &&
          (x(),
          S(t, 1, 1, () => {
            t = null;
          }),
          C());
    },
    i(n) {
      a || (k(t), (a = !0));
    },
    o(n) {
      S(t), (a = !1);
    },
    d(n) {
      t && t.d(n), n && $(s);
    },
  };
}
function W(n) {
  let s,
    a,
    t = n[1],
    o = [];
  for (let p = 0; p < t.length; p += 1) o[p] = K(Y(n, t, p));
  const e = (n) =>
    S(o[n], 1, 1, () => {
      o[n] = null;
    });
  return {
    c() {
      for (let n = 0; n < o.length; n += 1) o[n].c();
      s = u();
    },
    l(n) {
      for (let s = 0; s < o.length; s += 1) o[s].l(n);
      s = u();
    },
    m(n, t) {
      for (let s = 0; s < o.length; s += 1) o[s].m(n, t);
      i(n, s, t), (a = !0);
    },
    p(n, [a]) {
      if (15 & a) {
        let p;
        for (t = n[1], p = 0; p < t.length; p += 1) {
          const e = Y(n, t, p);
          o[p]
            ? (o[p].p(e, a), k(o[p], 1))
            : ((o[p] = K(e)), o[p].c(), k(o[p], 1), o[p].m(s.parentNode, s));
        }
        for (x(), p = t.length; p < o.length; p += 1) e(p);
        C();
      }
    },
    i(n) {
      if (!a) {
        for (let n = 0; n < t.length; n += 1) k(o[n]);
        a = !0;
      }
    },
    o(n) {
      o = o.filter(Boolean);
      for (let s = 0; s < o.length; s += 1) S(o[s]);
      a = !1;
    },
    d(n) {
      O(o, n), n && $(s);
    },
  };
}
function X(n, s, a) {
  let { index: t } = s,
    { steps: o = [] } = s,
    { preload: e = 1 } = s,
    { stackBackground: p = !0 } = s;
  return (
    (n.$$set = (n) => {
      'index' in n && a(0, (t = n.index)),
        'steps' in n && a(1, (o = n.steps)),
        'preload' in n && a(2, (e = n.preload)),
        'stackBackground' in n && a(3, (p = n.stackBackground));
    }),
    [t, o, e, p]
  );
}
class Z extends c {
  constructor(n) {
    super(),
      r(this, n, X, W, l, {
        index: 0,
        steps: 1,
        preload: 2,
        stackBackground: 3,
      });
  }
}
function nn(n, s, a) {
  const t = n.slice();
  return (t[1] = s[a]), (t[3] = a), t;
}
function sn(n) {
  let s, a, t, o;
  const e = [on, tn],
    p = [];
  function c(n, s) {
    return 'string' == typeof n[1].foreground ? 0 : 1;
  }
  return (
    (a = c(n)),
    (t = p[a] = e[a](n)),
    {
      c() {
        (s = d('div')), t.c(), this.h();
      },
      l(n) {
        s = f(n, 'DIV', { class: !0 });
        var a = h(s);
        t.l(a), a.forEach($), this.h();
      },
      h() {
        v(s, 'class', 'step-foreground step-' + (n[3] + 1) + ' svelte-20kuyz');
      },
      m(n, t) {
        i(n, s, t), p[a].m(s, null), (o = !0);
      },
      p(n, o) {
        let r = a;
        (a = c(n)),
          a === r
            ? p[a].p(n, o)
            : (x(),
              S(p[r], 1, 1, () => {
                p[r] = null;
              }),
              C(),
              (t = p[a]),
              t ? t.p(n, o) : ((t = p[a] = e[a](n)), t.c()),
              k(t, 1),
              t.m(s, null));
      },
      i(n) {
        o || (k(t), (o = !0));
      },
      o(n) {
        S(t), (o = !1);
      },
      d(n) {
        n && $(s), p[a].d();
      },
    }
  );
}
function an(n) {
  let s;
  return {
    c() {
      (s = d('div')), this.h();
    },
    l(n) {
      (s = f(n, 'DIV', { class: !0 })), h(s).forEach($), this.h();
    },
    h() {
      v(
        s,
        'class',
        'empty-step-foreground step-' + (n[3] + 1) + ' svelte-20kuyz'
      );
    },
    m(n, a) {
      i(n, s, a);
    },
    p: j,
    i: j,
    o: j,
    d(n) {
      n && $(s);
    },
  };
}
function tn(n) {
  let s, a, t;
  const o = [n[1].foregroundProps || {}];
  var e = n[1].foreground;
  function p(n) {
    let s = {};
    for (let a = 0; a < o.length; a += 1) s = D(s, o[a]);
    return { props: s };
  }
  return (
    e && (s = new e(p())),
    {
      c() {
        s && I(s.$$.fragment), (a = u());
      },
      l(n) {
        s && T(s.$$.fragment, n), (a = u());
      },
      m(n, o) {
        s && L(s, n, o), i(n, a, o), (t = !0);
      },
      p(n, t) {
        const c = 1 & t ? w(o, [E(n[1].foregroundProps || {})]) : {};
        if (e !== (e = n[1].foreground)) {
          if (s) {
            x();
            const n = s;
            S(n.$$.fragment, 1, 0, () => {
              P(n, 1);
            }),
              C();
          }
          e
            ? ((s = new e(p())),
              I(s.$$.fragment),
              k(s.$$.fragment, 1),
              L(s, a.parentNode, a))
            : (s = null);
        } else e && s.$set(c);
      },
      i(n) {
        t || (s && k(s.$$.fragment, n), (t = !0));
      },
      o(n) {
        s && S(s.$$.fragment, n), (t = !1);
      },
      d(n) {
        n && $(a), s && P(s, n);
      },
    }
  );
}
function on(n) {
  let s,
    a,
    t = z(n[1].foreground) + '';
  return {
    c() {
      (s = new B()), (a = u()), this.h();
    },
    l(n) {
      (s = G(n)), (a = u()), this.h();
    },
    h() {
      s.a = a;
    },
    m(n, o) {
      s.m(t, n, o), i(n, a, o);
    },
    p(n, a) {
      1 & a && t !== (t = z(n[1].foreground) + '') && s.p(t);
    },
    i: j,
    o: j,
    d(n) {
      n && $(a), n && s.d();
    },
  };
}
function en(n) {
  let s, a, t, o, e;
  const p = [an, sn],
    c = [];
  function r(n, s) {
    return '' !== n[1].foreground && n[1].foreground ? 1 : 0;
  }
  return (
    (a = r(n)),
    (t = c[a] = p[a](n)),
    {
      c() {
        (s = d('section')), t.c(), (o = g()), this.h();
      },
      l(n) {
        s = f(n, 'SECTION', { class: !0 });
        var a = h(s);
        t.l(a), (o = m(a)), a.forEach($), this.h();
      },
      h() {
        v(s, 'class', 'step-foreground-container svelte-20kuyz');
      },
      m(n, t) {
        i(n, s, t), c[a].m(s, null), y(s, o), (e = !0);
      },
      p(n, e) {
        let l = a;
        (a = r(n)),
          a === l
            ? c[a].p(n, e)
            : (x(),
              S(c[l], 1, 1, () => {
                c[l] = null;
              }),
              C(),
              (t = c[a]),
              t ? t.p(n, e) : ((t = c[a] = p[a](n)), t.c()),
              k(t, 1),
              t.m(s, o));
      },
      i(n) {
        e || (k(t), (e = !0));
      },
      o(n) {
        S(t), (e = !1);
      },
      d(n) {
        n && $(s), c[a].d();
      },
    }
  );
}
function pn(n) {
  let s,
    a,
    t = n[0],
    o = [];
  for (let p = 0; p < t.length; p += 1) o[p] = en(nn(n, t, p));
  const e = (n) =>
    S(o[n], 1, 1, () => {
      o[n] = null;
    });
  return {
    c() {
      for (let n = 0; n < o.length; n += 1) o[n].c();
      s = u();
    },
    l(n) {
      for (let s = 0; s < o.length; s += 1) o[s].l(n);
      s = u();
    },
    m(n, t) {
      for (let s = 0; s < o.length; s += 1) o[s].m(n, t);
      i(n, s, t), (a = !0);
    },
    p(n, [a]) {
      if (1 & a) {
        let p;
        for (t = n[0], p = 0; p < t.length; p += 1) {
          const e = nn(n, t, p);
          o[p]
            ? (o[p].p(e, a), k(o[p], 1))
            : ((o[p] = en(e)), o[p].c(), k(o[p], 1), o[p].m(s.parentNode, s));
        }
        for (x(), p = t.length; p < o.length; p += 1) e(p);
        C();
      }
    },
    i(n) {
      if (!a) {
        for (let n = 0; n < t.length; n += 1) k(o[n]);
        a = !0;
      }
    },
    o(n) {
      o = o.filter(Boolean);
      for (let s = 0; s < o.length; s += 1) S(o[s]);
      a = !1;
    },
    d(n) {
      O(o, n), n && $(s);
    },
  };
}
function cn(n, s, a) {
  let { steps: t = [] } = s;
  return (
    (n.$$set = (n) => {
      'steps' in n && a(0, (t = n.steps));
    }),
    [t]
  );
}
class rn extends c {
  constructor(n) {
    super(), r(this, n, cn, pn, l, { steps: 0 });
  }
}
function ln(n) {
  let s, a, t, o, e, p, c;
  const r = [n[0].backgroundProps || {}];
  var l = n[0].background;
  function u(n) {
    let s = {};
    for (let a = 0; a < r.length; a += 1) s = D(s, r[a]);
    return { props: s };
  }
  return (
    l && (t = new l(u())),
    {
      c() {
        (s = d('section')), (a = d('div')), t && I(t.$$.fragment), this.h();
      },
      l(n) {
        s = f(n, 'SECTION', { class: !0, step: !0 });
        var o = h(s);
        a = f(o, 'DIV', { class: !0 });
        var e = h(a);
        t && T(t.$$.fragment, e), e.forEach($), o.forEach($), this.h();
      },
      h() {
        v(a, 'class', (o = 'embedded-background step-' + (n[2] + 1))),
          v(s, 'class', (e = 'background-container graphic ' + n[1])),
          v(s, 'step', (p = n[2] + 1));
      },
      m(n, o) {
        i(n, s, o), y(s, a), t && L(t, a, null), (c = !0);
      },
      p(n, [i]) {
        const d = 1 & i ? w(r, [E(n[0].backgroundProps || {})]) : {};
        if (l !== (l = n[0].background)) {
          if (t) {
            x();
            const n = t;
            S(n.$$.fragment, 1, 0, () => {
              P(n, 1);
            }),
              C();
          }
          l
            ? ((t = new l(u())),
              I(t.$$.fragment),
              k(t.$$.fragment, 1),
              L(t, a, null))
            : (t = null);
        } else l && t.$set(d);
        (!c ||
          (4 & i && o !== (o = 'embedded-background step-' + (n[2] + 1)))) &&
          v(a, 'class', o),
          (!c ||
            (2 & i && e !== (e = 'background-container graphic ' + n[1]))) &&
            v(s, 'class', e),
          (!c || (4 & i && p !== (p = n[2] + 1))) && v(s, 'step', p);
      },
      i(n) {
        c || (t && k(t.$$.fragment, n), (c = !0));
      },
      o(n) {
        t && S(t.$$.fragment, n), (c = !1);
      },
      d(n) {
        n && $(s), t && P(t);
      },
    }
  );
}
function un(n, s, a) {
  let { step: t } = s,
    { backgroundSize: o } = s,
    { index: e } = s;
  return (
    (n.$$set = (n) => {
      'step' in n && a(0, (t = n.step)),
        'backgroundSize' in n && a(1, (o = n.backgroundSize)),
        'index' in n && a(2, (e = n.index));
    }),
    [t, o, e]
  );
}
class kn extends c {
  constructor(n) {
    super(), r(this, n, un, ln, l, { step: 0, backgroundSize: 1, index: 2 });
  }
}
function dn(n) {
  let s, a, t, o;
  const e = [n[0].foregroundProps || {}];
  var p = n[0].foreground;
  function c(n) {
    let s = {};
    for (let a = 0; a < e.length; a += 1) s = D(s, e[a]);
    return { props: s };
  }
  return (
    p && (a = new p(c())),
    {
      c() {
        (s = d('div')), a && I(a.$$.fragment), this.h();
      },
      l(n) {
        s = f(n, 'DIV', { class: !0 });
        var t = h(s);
        a && T(a.$$.fragment, t), t.forEach($), this.h();
      },
      h() {
        v(
          s,
          'class',
          (t = 'embedded-foreground step-' + (n[1] + 1) + ' svelte-kywsd6')
        );
      },
      m(n, t) {
        i(n, s, t), a && L(a, s, null), (o = !0);
      },
      p(n, r) {
        const l = 1 & r ? w(e, [E(n[0].foregroundProps || {})]) : {};
        if (p !== (p = n[0].foreground)) {
          if (a) {
            x();
            const n = a;
            S(n.$$.fragment, 1, 0, () => {
              P(n, 1);
            }),
              C();
          }
          p
            ? ((a = new p(c())),
              I(a.$$.fragment),
              k(a.$$.fragment, 1),
              L(a, s, null))
            : (a = null);
        } else p && a.$set(l);
        (!o ||
          (2 & r &&
            t !==
              (t =
                'embedded-foreground step-' +
                (n[1] + 1) +
                ' svelte-kywsd6'))) &&
          v(s, 'class', t);
      },
      i(n) {
        o || (a && k(a.$$.fragment, n), (o = !0));
      },
      o(n) {
        a && S(a.$$.fragment, n), (o = !1);
      },
      d(n) {
        n && $(s), a && P(a);
      },
    }
  );
}
function gn(n) {
  let s,
    a,
    t,
    o,
    e = z(n[0].foreground) + '';
  return {
    c() {
      (s = d('section')), (a = d('div')), this.h();
    },
    l(n) {
      s = f(n, 'SECTION', { class: !0, step: !0 });
      var t = h(s);
      (a = f(t, 'DIV', { class: !0 })), h(a).forEach($), t.forEach($), this.h();
    },
    h() {
      v(
        a,
        'class',
        (t = 'embedded-foreground step-' + (n[1] + 1) + ' svelte-kywsd6')
      ),
        v(s, 'class', 'body-text'),
        v(s, 'step', (o = n[1] + 1));
    },
    m(n, t) {
      i(n, s, t), y(s, a), (a.innerHTML = e);
    },
    p(n, p) {
      1 & p && e !== (e = z(n[0].foreground) + '') && (a.innerHTML = e),
        2 & p &&
          t !==
            (t = 'embedded-foreground step-' + (n[1] + 1) + ' svelte-kywsd6') &&
          v(a, 'class', t),
        2 & p && o !== (o = n[1] + 1) && v(s, 'step', o);
    },
    i: j,
    o: j,
    d(n) {
      n && $(s);
    },
  };
}
function fn(n) {
  let s, a;
  return {
    c() {
      (s = d('div')), this.h();
    },
    l(n) {
      (s = f(n, 'DIV', { class: !0 })), h(s).forEach($), this.h();
    },
    h() {
      v(
        s,
        'class',
        (a = 'empty-step-foreground step-' + (n[1] + 1) + ' svelte-kywsd6')
      );
    },
    m(n, a) {
      i(n, s, a);
    },
    p(n, t) {
      2 & t &&
        a !==
          (a = 'empty-step-foreground step-' + (n[1] + 1) + ' svelte-kywsd6') &&
        v(s, 'class', a);
    },
    i: j,
    o: j,
    d(n) {
      n && $(s);
    },
  };
}
function hn(n) {
  let s, a, t, o;
  const e = [fn, gn, dn],
    p = [];
  function c(n, s) {
    return '' !== n[0].foreground && n[0].foreground
      ? 'string' == typeof n[0].foreground
        ? 1
        : 2
      : 0;
  }
  return (
    (s = c(n)),
    (a = p[s] = e[s](n)),
    {
      c() {
        a.c(), (t = u());
      },
      l(n) {
        a.l(n), (t = u());
      },
      m(n, a) {
        p[s].m(n, a), i(n, t, a), (o = !0);
      },
      p(n, [o]) {
        let r = s;
        (s = c(n)),
          s === r
            ? p[s].p(n, o)
            : (x(),
              S(p[r], 1, 1, () => {
                p[r] = null;
              }),
              C(),
              (a = p[s]),
              a ? a.p(n, o) : ((a = p[s] = e[s](n)), a.c()),
              k(a, 1),
              a.m(t.parentNode, t));
      },
      i(n) {
        o || (k(a), (o = !0));
      },
      o(n) {
        S(a), (o = !1);
      },
      d(n) {
        p[s].d(n), n && $(t);
      },
    }
  );
}
function mn(n, s, a) {
  let { step: t } = s,
    { index: o } = s;
  return (
    (n.$$set = (n) => {
      'step' in n && a(0, (t = n.step)), 'index' in n && a(1, (o = n.index));
    }),
    [t, o]
  );
}
class $n extends c {
  constructor(n) {
    super(), r(this, n, mn, hn, l, { step: 0, index: 1 });
  }
}
function vn(n, s, a) {
  const t = n.slice();
  return (t[3] = s[a]), (t[5] = a), t;
}
function bn(n) {
  let s, a, t, o;
  return (
    (s = new $n({ props: { step: n[3], index: n[5] } })),
    (t = new kn({ props: { step: n[3], index: n[5], backgroundSize: n[2] } })),
    {
      c() {
        I(s.$$.fragment), (a = g()), I(t.$$.fragment);
      },
      l(n) {
        T(s.$$.fragment, n), (a = m(n)), T(t.$$.fragment, n);
      },
      m(n, e) {
        L(s, n, e), i(n, a, e), L(t, n, e), (o = !0);
      },
      p(n, a) {
        const o = {};
        1 & a && (o.step = n[3]), s.$set(o);
        const e = {};
        1 & a && (e.step = n[3]), 4 & a && (e.backgroundSize = n[2]), t.$set(e);
      },
      i(n) {
        o || (k(s.$$.fragment, n), k(t.$$.fragment, n), (o = !0));
      },
      o(n) {
        S(s.$$.fragment, n), S(t.$$.fragment, n), (o = !1);
      },
      d(n) {
        P(s, n), n && $(a), P(t, n);
      },
    }
  );
}
function yn(n) {
  let s, a, t, o, e;
  return (
    (s = new kn({ props: { step: n[3], index: n[5], backgroundSize: n[2] } })),
    (t = new $n({ props: { step: n[3], index: n[5] } })),
    {
      c() {
        I(s.$$.fragment), (a = g()), I(t.$$.fragment), (o = g());
      },
      l(n) {
        T(s.$$.fragment, n), (a = m(n)), T(t.$$.fragment, n), (o = m(n));
      },
      m(n, p) {
        L(s, n, p), i(n, a, p), L(t, n, p), i(n, o, p), (e = !0);
      },
      p(n, a) {
        const o = {};
        1 & a && (o.step = n[3]), 4 & a && (o.backgroundSize = n[2]), s.$set(o);
        const e = {};
        1 & a && (e.step = n[3]), t.$set(e);
      },
      i(n) {
        e || (k(s.$$.fragment, n), k(t.$$.fragment, n), (e = !0));
      },
      o(n) {
        S(s.$$.fragment, n), S(t.$$.fragment, n), (e = !1);
      },
      d(n) {
        P(s, n), n && $(a), P(t, n), n && $(o);
      },
    }
  );
}
function wn(n) {
  let s, a, t, o;
  const e = [yn, bn],
    p = [];
  function c(n, s) {
    return 'bf' === n[1] ? 0 : 1;
  }
  return (
    (s = c(n)),
    (a = p[s] = e[s](n)),
    {
      c() {
        a.c(), (t = u());
      },
      l(n) {
        a.l(n), (t = u());
      },
      m(n, a) {
        p[s].m(n, a), i(n, t, a), (o = !0);
      },
      p(n, o) {
        let r = s;
        (s = c(n)),
          s === r
            ? p[s].p(n, o)
            : (x(),
              S(p[r], 1, 1, () => {
                p[r] = null;
              }),
              C(),
              (a = p[s]),
              a ? a.p(n, o) : ((a = p[s] = e[s](n)), a.c()),
              k(a, 1),
              a.m(t.parentNode, t));
      },
      i(n) {
        o || (k(a), (o = !0));
      },
      o(n) {
        S(a), (o = !1);
      },
      d(n) {
        p[s].d(n), n && $(t);
      },
    }
  );
}
function En(n) {
  let s,
    a,
    t = n[0],
    o = [];
  for (let p = 0; p < t.length; p += 1) o[p] = wn(vn(n, t, p));
  const e = (n) =>
    S(o[n], 1, 1, () => {
      o[n] = null;
    });
  return {
    c() {
      for (let n = 0; n < o.length; n += 1) o[n].c();
      s = u();
    },
    l(n) {
      for (let s = 0; s < o.length; s += 1) o[s].l(n);
      s = u();
    },
    m(n, t) {
      for (let s = 0; s < o.length; s += 1) o[s].m(n, t);
      i(n, s, t), (a = !0);
    },
    p(n, [a]) {
      if (7 & a) {
        let p;
        for (t = n[0], p = 0; p < t.length; p += 1) {
          const e = vn(n, t, p);
          o[p]
            ? (o[p].p(e, a), k(o[p], 1))
            : ((o[p] = wn(e)), o[p].c(), k(o[p], 1), o[p].m(s.parentNode, s));
        }
        for (x(), p = t.length; p < o.length; p += 1) e(p);
        C();
      }
    },
    i(n) {
      if (!a) {
        for (let n = 0; n < t.length; n += 1) k(o[n]);
        a = !0;
      }
    },
    o(n) {
      o = o.filter(Boolean);
      for (let s = 0; s < o.length; s += 1) S(o[s]);
      a = !1;
    },
    d(n) {
      O(o, n), n && $(s);
    },
  };
}
function xn(n, s, a) {
  let { steps: t } = s,
    { embeddedLayout: o = 'fb' } = s,
    { backgroundSize: e } = s;
  return (
    (n.$$set = (n) => {
      'steps' in n && a(0, (t = n.steps)),
        'embeddedLayout' in n && a(1, (o = n.embeddedLayout)),
        'backgroundSize' in n && a(2, (e = n.backgroundSize));
    }),
    [t, o, e]
  );
}
class Sn extends c {
  constructor(n) {
    super(),
      r(this, n, xn, En, l, { steps: 0, embeddedLayout: 1, backgroundSize: 2 });
  }
}
function Pn(n) {
  let s, a, t;
  return (
    (a = new Sn({
      props: { steps: n[1], embeddedLayout: n[7], backgroundSize: n[2] },
    })),
    {
      c() {
        (s = d('section')), I(a.$$.fragment), this.h();
      },
      l(n) {
        s = f(n, 'SECTION', { class: !0, id: !0 });
        var t = h(s);
        T(a.$$.fragment, t), t.forEach($), this.h();
      },
      h() {
        v(s, 'class', 'scroller-container embedded svelte-5wwrxt'),
          v(s, 'id', n[0]);
      },
      m(n, o) {
        i(n, s, o), L(a, s, null), (t = !0);
      },
      p(n, o) {
        const e = {};
        2 & o && (e.steps = n[1]),
          128 & o && (e.embeddedLayout = n[7]),
          4 & o && (e.backgroundSize = n[2]),
          a.$set(e),
          (!t || 1 & o) && v(s, 'id', n[0]);
      },
      i(n) {
        t || (k(a.$$.fragment, n), (t = !0));
      },
      o(n) {
        S(a.$$.fragment, n), (t = !1);
      },
      d(n) {
        n && $(s), P(a);
      },
    }
  );
}
function Cn(n) {
  let s, a, t, o, e, p;
  function c(s) {
    n[15](s);
  }
  function r(s) {
    n[16](s);
  }
  function l(s) {
    n[17](s);
  }
  let u = {
    threshold: n[8],
    top: n[9],
    bottom: n[10],
    parallax: n[11],
    query: 'section.step-foreground-container',
    $$slots: { foreground: [Ln], background: [In] },
    $$scope: { ctx: n },
  };
  return (
    void 0 !== n[12] && (u.index = n[12]),
    void 0 !== n[13] && (u.offset = n[13]),
    void 0 !== n[14] && (u.progress = n[14]),
    (a = new N({ props: u })),
    M.push(() => R(a, 'index', c)),
    M.push(() => R(a, 'offset', r)),
    M.push(() => R(a, 'progress', l)),
    {
      c() {
        (s = d('section')), I(a.$$.fragment), this.h();
      },
      l(n) {
        s = f(n, 'SECTION', { class: !0, id: !0 });
        var t = h(s);
        T(a.$$.fragment, t), t.forEach($), this.h();
      },
      h() {
        v(s, 'class', 'scroller-container svelte-5wwrxt'), v(s, 'id', n[0]);
      },
      m(n, t) {
        i(n, s, t), L(a, s, null), (p = !0);
      },
      p(n, c) {
        const r = {};
        256 & c && (r.threshold = n[8]),
          512 & c && (r.top = n[9]),
          1024 & c && (r.bottom = n[10]),
          2048 & c && (r.parallax = n[11]),
          266302 & c && (r.$$scope = { dirty: c, ctx: n }),
          !t && 4096 & c && ((t = !0), (r.index = n[12]), A(() => (t = !1))),
          !o && 8192 & c && ((o = !0), (r.offset = n[13]), A(() => (o = !1))),
          !e &&
            16384 & c &&
            ((e = !0), (r.progress = n[14]), A(() => (e = !1))),
          a.$set(r),
          (!p || 1 & c) && v(s, 'id', n[0]);
      },
      i(n) {
        p || (k(a.$$.fragment, n), (p = !0));
      },
      o(n) {
        S(a.$$.fragment, n), (p = !1);
      },
      d(n) {
        n && $(s), P(a);
      },
    }
  );
}
function In(n) {
  let s, a, t, o, e, p, c;
  return (
    (o = new Z({
      props: {
        index: n[12],
        steps: n[1],
        preload: n[5],
        stackBackground: n[4],
      },
    })),
    {
      c() {
        (s = d('div')),
          (a = d('div')),
          (t = d('section')),
          I(o.$$.fragment),
          this.h();
      },
      l(n) {
        s = f(n, 'DIV', { slot: !0, class: !0 });
        var e = h(s);
        a = f(e, 'DIV', { class: !0 });
        var p = h(a);
        t = f(p, 'SECTION', { class: !0, step: !0 });
        var c = h(t);
        T(o.$$.fragment, c), c.forEach($), p.forEach($), e.forEach($), this.h();
      },
      h() {
        v(
          t,
          'class',
          (e = 'background-container graphic ' + n[2] + ' svelte-5wwrxt')
        ),
          v(t, 'step', (p = n[12] + 1)),
          v(a, 'class', 'scroller-graphic-well svelte-5wwrxt'),
          v(s, 'slot', 'background'),
          v(s, 'class', 'background svelte-5wwrxt'),
          b(s, 'right', 'left opposite' === n[3]),
          b(s, 'left', 'right opposite' === n[3]);
      },
      m(n, e) {
        i(n, s, e), y(s, a), y(a, t), L(o, t, null), (c = !0);
      },
      p(n, a) {
        const r = {};
        4096 & a && (r.index = n[12]),
          2 & a && (r.steps = n[1]),
          32 & a && (r.preload = n[5]),
          16 & a && (r.stackBackground = n[4]),
          o.$set(r),
          (!c ||
            (4 & a &&
              e !==
                (e =
                  'background-container graphic ' +
                  n[2] +
                  ' svelte-5wwrxt'))) &&
            v(t, 'class', e),
          (!c || (4096 & a && p !== (p = n[12] + 1))) && v(t, 'step', p),
          8 & a && b(s, 'right', 'left opposite' === n[3]),
          8 & a && b(s, 'left', 'right opposite' === n[3]);
      },
      i(n) {
        c || (k(o.$$.fragment, n), (c = !0));
      },
      o(n) {
        S(o.$$.fragment, n), (c = !1);
      },
      d(n) {
        n && $(s), P(o);
      },
    }
  );
}
function Ln(n) {
  let s, a, t, o;
  return (
    (a = new rn({ props: { steps: n[1] } })),
    {
      c() {
        (s = d('div')), I(a.$$.fragment), this.h();
      },
      l(n) {
        s = f(n, 'DIV', { slot: !0, class: !0 });
        var t = h(s);
        T(a.$$.fragment, t), t.forEach($), this.h();
      },
      h() {
        v(s, 'slot', 'foreground'),
          v(s, 'class', (t = 'foreground ' + n[3] + ' svelte-5wwrxt'));
      },
      m(n, t) {
        i(n, s, t), L(a, s, null), (o = !0);
      },
      p(n, e) {
        const p = {};
        2 & e && (p.steps = n[1]),
          a.$set(p),
          (!o ||
            (8 & e && t !== (t = 'foreground ' + n[3] + ' svelte-5wwrxt'))) &&
            v(s, 'class', t);
      },
      i(n) {
        o || (k(a.$$.fragment, n), (o = !0));
      },
      o(n) {
        S(a.$$.fragment, n), (o = !1);
      },
      d(n) {
        n && $(s), P(a);
      },
    }
  );
}
function On(n) {
  let s, a, t, o;
  const e = [Cn, Pn],
    p = [];
  function c(n, s) {
    return n[6] ? 1 : 0;
  }
  return (
    (s = c(n)),
    (a = p[s] = e[s](n)),
    {
      c() {
        a.c(), (t = u());
      },
      l(n) {
        a.l(n), (t = u());
      },
      m(n, a) {
        p[s].m(n, a), i(n, t, a), (o = !0);
      },
      p(n, [o]) {
        let r = s;
        (s = c(n)),
          s === r
            ? p[s].p(n, o)
            : (x(),
              S(p[r], 1, 1, () => {
                p[r] = null;
              }),
              C(),
              (a = p[s]),
              a ? a.p(n, o) : ((a = p[s] = e[s](n)), a.c()),
              k(a, 1),
              a.m(t.parentNode, t));
      },
      i(n) {
        o || (k(a), (o = !0));
      },
      o(n) {
        S(a), (o = !1);
      },
      d(n) {
        p[s].d(n), n && $(t);
      },
    }
  );
}
function Dn(n, s, a) {
  let t,
    o,
    { id: e = '' } = s,
    { steps: p = [] } = s,
    { backgroundSize: c = 'fluid' } = s,
    { foregroundPosition: r = 'middle' } = s,
    { stackBackground: l = !0 } = s,
    { preload: u = 1 } = s,
    { embedded: i = !1 } = s,
    { embeddedLayout: k = 'fb' } = s,
    { threshold: d = 0.5 } = s,
    { top: g = 0 } = s,
    { bottom: f = 1 } = s,
    { parallax: h = !1 } = s,
    m = 0;
  return (
    (n.$$set = (n) => {
      'id' in n && a(0, (e = n.id)),
        'steps' in n && a(1, (p = n.steps)),
        'backgroundSize' in n && a(2, (c = n.backgroundSize)),
        'foregroundPosition' in n && a(3, (r = n.foregroundPosition)),
        'stackBackground' in n && a(4, (l = n.stackBackground)),
        'preload' in n && a(5, (u = n.preload)),
        'embedded' in n && a(6, (i = n.embedded)),
        'embeddedLayout' in n && a(7, (k = n.embeddedLayout)),
        'threshold' in n && a(8, (d = n.threshold)),
        'top' in n && a(9, (g = n.top)),
        'bottom' in n && a(10, (f = n.bottom)),
        'parallax' in n && a(11, (h = n.parallax));
    }),
    [
      e,
      p,
      c,
      r,
      l,
      u,
      i,
      k,
      d,
      g,
      f,
      h,
      m,
      t,
      o,
      function (n) {
        (m = n), a(12, m);
      },
      function (n) {
        (t = n), a(13, t);
      },
      function (n) {
        (o = n), a(14, o);
      },
    ]
  );
}
class Tn extends c {
  constructor(n) {
    super(),
      r(this, n, Dn, On, l, {
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
function jn(n) {
  let s, a, t, o, e, p, c, r, l, u, k;
  return {
    c() {
      (s = d('h4')),
        (a = U('Interactive step')),
        (t = g()),
        (o = d('p')),
        (e = U('The count is ')),
        (p = U(n[0])),
        (c = g()),
        (r = d('button')),
        (l = U('Click Me'));
    },
    l(u) {
      s = f(u, 'H4', {});
      var i = h(s);
      (a = V(i, 'Interactive step')),
        i.forEach($),
        (t = m(u)),
        (o = f(u, 'P', {}));
      var k = h(o);
      (e = V(k, 'The count is ')),
        (p = V(k, n[0])),
        k.forEach($),
        (c = m(u)),
        (r = f(u, 'BUTTON', {}));
      var d = h(r);
      (l = V(d, 'Click Me')), d.forEach($);
    },
    m(d, g) {
      i(d, s, g),
        y(s, a),
        i(d, t, g),
        i(d, o, g),
        y(o, e),
        y(o, p),
        i(d, c, g),
        i(d, r, g),
        y(r, l),
        u || ((k = _(r, 'click', n[1])), (u = !0));
    },
    p(n, [s]) {
      1 & s && H(p, n[0]);
    },
    i: j,
    o: j,
    d(n) {
      n && $(s), n && $(t), n && $(o), n && $(c), n && $(r), (u = !1), k();
    },
  };
}
function zn(n, s, a) {
  let { count: t = 0 } = s;
  return (
    (n.$$set = (n) => {
      'count' in n && a(0, (t = n.count));
    }),
    [
      t,
      () => {
        a(0, (t += 1));
      },
    ]
  );
}
class Bn extends c {
  constructor(n) {
    super(), r(this, n, zn, jn, l, { count: 0 });
  }
}
function Gn(n) {
  let s, a, t;
  return {
    c() {
      (s = d('div')), (a = d('div')), this.h();
    },
    l(n) {
      s = f(n, 'DIV', { class: !0 });
      var t = h(s);
      (a = f(t, 'DIV', { class: !0, style: !0 })),
        h(a).forEach($),
        t.forEach($),
        this.h();
    },
    h() {
      v(a, 'class', 'step svelte-1e3wp2r'),
        v(
          a,
          'style',
          (t = `\n      background: ${n[0]};\n      height: ${
            400 / n[2]
          }px;\n      top: ${n[1] * (400 / n[2])}px;\n  `)
        ),
        v(s, 'class', 'step-cont svelte-1e3wp2r');
    },
    m(n, t) {
      i(n, s, t), y(s, a);
    },
    p(n, [s]) {
      7 & s &&
        t !==
          (t = `\n      background: ${n[0]};\n      height: ${
            400 / n[2]
          }px;\n      top: ${n[1] * (400 / n[2])}px;\n  `) &&
        v(a, 'style', t);
    },
    i: j,
    o: j,
    d(n) {
      n && $(s);
    },
  };
}
function Nn(n, s, a) {
  let { colour: t = 'lightblue' } = s,
    { i: o = 0 } = s,
    { steps: e = 3 } = s;
  return (
    (n.$$set = (n) => {
      'colour' in n && a(0, (t = n.colour)),
        'i' in n && a(1, (o = n.i)),
        'steps' in n && a(2, (e = n.steps));
    }),
    [t, o, e]
  );
}
class Mn extends c {
  constructor(n) {
    super(), r(this, n, Nn, Gn, l, { colour: 0, i: 1, steps: 2 });
  }
}
function Rn(n) {
  let s, a;
  return {
    c() {
      (s = d('div')), this.h();
    },
    l(n) {
      (s = f(n, 'DIV', { class: !0, style: !0 })), h(s).forEach($), this.h();
    },
    h() {
      v(s, 'class', 'step svelte-13llgxe'),
        v(s, 'style', (a = `background: ${n[0]};`));
    },
    m(n, a) {
      i(n, s, a);
    },
    p(n, [t]) {
      1 & t && a !== (a = `background: ${n[0]};`) && v(s, 'style', a);
    },
    i: j,
    o: j,
    d(n) {
      n && $(s);
    },
  };
}
function An(n, s, a) {
  let { colour: t = 'lightblue' } = s;
  return (
    (n.$$set = (n) => {
      'colour' in n && a(0, (t = n.colour));
    }),
    [t]
  );
}
class Un extends c {
  constructor(n) {
    super(), r(this, n, An, Rn, l, { colour: 0 });
  }
}
function Vn(n) {
  let s, a;
  return (
    (s = new Tn({
      props: { steps: n[0], backgroundSize: 'wide', id: 'example1' },
    })),
    {
      c() {
        I(s.$$.fragment);
      },
      l(n) {
        T(s.$$.fragment, n);
      },
      m(n, t) {
        L(s, n, t), (a = !0);
      },
      p: j,
      i(n) {
        a || (k(s.$$.fragment, n), (a = !0));
      },
      o(n) {
        S(s.$$.fragment, n), (a = !1);
      },
      d(n) {
        P(s, n);
      },
    }
  );
}
function _n(n) {
  let s, a;
  return (
    (s = new Tn({
      props: {
        steps: n[0],
        foregroundPosition: 'right opposite',
        backgroundSize: 'normal',
        id: 'example2',
      },
    })),
    {
      c() {
        I(s.$$.fragment);
      },
      l(n) {
        T(s.$$.fragment, n);
      },
      m(n, t) {
        L(s, n, t), (a = !0);
      },
      p: j,
      i(n) {
        a || (k(s.$$.fragment, n), (a = !0));
      },
      o(n) {
        S(s.$$.fragment, n), (a = !1);
      },
      d(n) {
        P(s, n);
      },
    }
  );
}
function Hn(n) {
  let s, a;
  return (
    (s = new Tn({
      props: {
        steps: n[1],
        foregroundPosition: 'middle',
        backgroundSize: 'normal',
        preload: 0,
        id: 'example-stack',
      },
    })),
    {
      c() {
        I(s.$$.fragment);
      },
      l(n) {
        T(s.$$.fragment, n);
      },
      m(n, t) {
        L(s, n, t), (a = !0);
      },
      p: j,
      i(n) {
        a || (k(s.$$.fragment, n), (a = !0));
      },
      o(n) {
        S(s.$$.fragment, n), (a = !1);
      },
      d(n) {
        P(s, n);
      },
    }
  );
}
function Fn(n) {
  let s, a;
  return (
    (s = new Tn({
      props: { steps: n[2], backgroundSize: 'widest', id: 'example3' },
    })),
    {
      c() {
        I(s.$$.fragment);
      },
      l(n) {
        T(s.$$.fragment, n);
      },
      m(n, t) {
        L(s, n, t), (a = !0);
      },
      p: j,
      i(n) {
        a || (k(s.$$.fragment, n), (a = !0));
      },
      o(n) {
        S(s.$$.fragment, n), (a = !1);
      },
      d(n) {
        P(s, n);
      },
    }
  );
}
function qn(n) {
  let s, a;
  return (
    (s = new Tn({
      props: {
        steps: n[0],
        backgroundSize: 'widest',
        id: 'scroller-example-4',
      },
    })),
    {
      c() {
        I(s.$$.fragment);
      },
      l(n) {
        T(s.$$.fragment, n);
      },
      m(n, t) {
        L(s, n, t), (a = !0);
      },
      p: j,
      i(n) {
        a || (k(s.$$.fragment, n), (a = !0));
      },
      o(n) {
        S(s.$$.fragment, n), (a = !1);
      },
      d(n) {
        P(s, n);
      },
    }
  );
}
function Qn(n) {
  return { c: j, l: j, m: j, p: j, i: j, o: j, d: j };
}
function Yn(n) {
  let s, a;
  return (
    (s = new Tn({
      props: { steps: n[6], backgroundSize: 'fluid', id: 'example-5' },
    })),
    {
      c() {
        I(s.$$.fragment);
      },
      l(n) {
        T(s.$$.fragment, n);
      },
      m(n, t) {
        L(s, n, t), (a = !0);
      },
      p: j,
      i(n) {
        a || (k(s.$$.fragment, n), (a = !0));
      },
      o(n) {
        S(s.$$.fragment, n), (a = !1);
      },
      d(n) {
        P(s, n);
      },
    }
  );
}
function Jn(n) {
  return { c: j, l: j, m: j, p: j, i: j, o: j, d: j };
}
function Kn(n) {
  let s,
    a,
    t = {
      ctx: n,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Jn,
      then: Yn,
      catch: Qn,
      value: 6,
      blocks: [, , ,],
    };
  return (
    F(n[4](n[3]), t),
    {
      c() {
        (s = u()), t.block.c();
      },
      l(n) {
        (s = u()), t.block.l(n);
      },
      m(n, o) {
        i(n, s, o),
          t.block.m(n, (t.anchor = o)),
          (t.mount = () => s.parentNode),
          (t.anchor = s),
          (a = !0);
      },
      p(s, a) {
        q(t, (n = s), a);
      },
      i(n) {
        a || (k(t.block), (a = !0));
      },
      o(n) {
        for (let s = 0; s < 3; s += 1) {
          const n = t.blocks[s];
          S(n);
        }
        a = !1;
      },
      d(n) {
        n && $(s), t.block.d(n), (t.token = null), (t = null);
      },
    }
  );
}
function Wn(n) {
  return { c: j, l: j, m: j, p: j, i: j, o: j, d: j };
}
function Xn(n) {
  let s, a;
  return (
    (s = new Tn({
      props: {
        steps: n[6],
        backgroundSize: 'fluid',
        id: 'example6',
        embedded: 'true',
      },
    })),
    {
      c() {
        I(s.$$.fragment);
      },
      l(n) {
        T(s.$$.fragment, n);
      },
      m(n, t) {
        L(s, n, t), (a = !0);
      },
      p: j,
      i(n) {
        a || (k(s.$$.fragment, n), (a = !0));
      },
      o(n) {
        S(s.$$.fragment, n), (a = !1);
      },
      d(n) {
        P(s, n);
      },
    }
  );
}
function Zn(n) {
  return { c: j, l: j, m: j, p: j, i: j, o: j, d: j };
}
function ns(n) {
  let s,
    a,
    t = {
      ctx: n,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Zn,
      then: Xn,
      catch: Wn,
      value: 6,
      blocks: [, , ,],
    };
  return (
    F(n[4](n[3]), t),
    {
      c() {
        (s = u()), t.block.c();
      },
      l(n) {
        (s = u()), t.block.l(n);
      },
      m(n, o) {
        i(n, s, o),
          t.block.m(n, (t.anchor = o)),
          (t.mount = () => s.parentNode),
          (t.anchor = s),
          (a = !0);
      },
      p(s, a) {
        q(t, (n = s), a);
      },
      i(n) {
        a || (k(t.block), (a = !0));
      },
      o(n) {
        for (let s = 0; s < 3; s += 1) {
          const n = t.blocks[s];
          S(n);
        }
        a = !1;
      },
      d(n) {
        n && $(s), t.block.d(n), (t.token = null), (t = null);
      },
    }
  );
}
function ss(n) {
  let s,
    a,
    t,
    o,
    e,
    p,
    c,
    r,
    l,
    u,
    b,
    w,
    E,
    x,
    C,
    O,
    D,
    j,
    z,
    B,
    G,
    N,
    M,
    R,
    A,
    _,
    H,
    F,
    q,
    Y,
    J,
    K,
    W,
    X,
    Z,
    nn,
    sn,
    an,
    tn,
    on,
    en,
    pn,
    cn,
    rn,
    ln,
    un,
    kn,
    dn,
    gn,
    fn,
    hn,
    mn,
    $n,
    vn,
    bn,
    yn,
    wn,
    En,
    xn,
    Sn,
    Pn,
    Cn,
    In,
    Ln,
    On,
    Dn,
    Tn,
    jn,
    zn,
    Bn,
    Gn,
    Nn,
    Mn,
    Rn,
    An,
    Un,
    Qn,
    Yn,
    Jn,
    Wn,
    Xn,
    Zn,
    ss,
    as,
    os,
    es,
    ps,
    cs,
    rs,
    ls,
    us,
    is,
    ks,
    ds,
    gs,
    fs,
    hs,
    ms,
    $s,
    vs,
    bs,
    ys,
    ws,
    Es,
    xs,
    Ss,
    Ps,
    Cs,
    Is,
    Ls,
    Os,
    Ds,
    Ts,
    js,
    zs,
    Bs,
    Gs,
    Ns,
    Ms,
    Rs,
    As,
    Us,
    Vs,
    _s,
    Hs,
    Fs,
    qs,
    Qs,
    Ys,
    Js,
    Ks,
    Ws,
    Xs,
    Zs,
    na,
    sa,
    aa,
    ta,
    oa,
    ea,
    pa,
    ca,
    ra,
    la,
    ua,
    ia,
    ka,
    da,
    ga,
    fa,
    ha,
    ma,
    $a,
    va,
    ba,
    ya,
    wa,
    Ea,
    xa,
    Sa,
    Pa,
    Ca,
    Ia,
    La,
    Oa,
    Da,
    Ta,
    ja,
    za,
    Ba,
    Ga,
    Na,
    Ma,
    Ra,
    Aa,
    Ua,
    Va,
    _a,
    Ha,
    Fa,
    qa,
    Qa,
    Ya,
    Ja,
    Ka,
    Wa,
    Xa,
    Za,
    nt,
    st,
    at,
    tt,
    ot,
    et,
    pt,
    ct,
    rt,
    lt,
    ut,
    it,
    kt,
    dt,
    gt,
    ft,
    ht,
    mt,
    $t,
    vt,
    bt,
    yt,
    wt,
    Et,
    xt,
    St,
    Pt,
    Ct,
    It,
    Lt,
    Ot,
    Dt,
    Tt,
    jt,
    zt,
    Bt,
    Gt,
    Nt,
    Mt,
    Rt,
    At,
    Ut,
    Vt,
    _t,
    Ht,
    Ft,
    qt,
    Qt,
    Yt,
    Jt,
    Kt,
    Wt,
    Xt,
    Zt,
    no,
    so,
    ao,
    to,
    oo,
    eo,
    po,
    co,
    ro,
    lo,
    uo,
    io,
    ko,
    go,
    fo,
    ho,
    mo,
    $o,
    vo,
    bo,
    yo,
    wo,
    Eo,
    xo,
    So,
    Po,
    Co,
    Io,
    Lo,
    Oo,
    Do,
    To,
    jo,
    zo,
    Bo,
    Go,
    No,
    Mo,
    Ro,
    Ao,
    Uo,
    Vo,
    _o,
    Ho,
    Fo,
    qo,
    Qo;
  return (
    (Nn = new Q({
      props: { fluid: !0, $$slots: { default: [Vn] }, $$scope: { ctx: n } },
    })),
    (Ws = new Q({
      props: { fluid: !0, $$slots: { default: [_n] }, $$scope: { ctx: n } },
    })),
    (Va = new Q({
      props: { fluid: !0, $$slots: { default: [Hn] }, $$scope: { ctx: n } },
    })),
    (et = new Q({
      props: { fluid: !0, $$slots: { default: [Fn] }, $$scope: { ctx: n } },
    })),
    (Pt = new Q({
      props: { fluid: !0, $$slots: { default: [qn] }, $$scope: { ctx: n } },
    })),
    (eo = new Q({
      props: { fluid: !0, $$slots: { default: [Kn] }, $$scope: { ctx: n } },
    })),
    (qo = new Q({
      props: { fluid: !0, $$slots: { default: [ns] }, $$scope: { ctx: n } },
    })),
    {
      c() {
        (s = d('section')),
          (a = d('h2')),
          (t = U(ts)),
          (o = g()),
          (e = d('p')),
          (p = U('Easy scrollytelling.')),
          (c = g()),
          (r = d('section')),
          (l = d('p')),
          (u = U(
            'This component is designed to handle most common layouts for scrollytelling. If you need something more complex, though, you should use '
          )),
          (b = d('a')),
          (w = U('svelte-scroller')),
          (E = U(
            ', which is a lower level component you can more easily customize.'
          )),
          (x = g()),
          (C = d('p')),
          (O = d('code')),
          (D = U('steps')),
          (j = g()),
          (z = d('em')),
          (B = U('an array of objects')),
          (G = g()),
          (N = d('ul')),
          (M = d('li')),
          (R = d('code')),
          (A = U('background')),
          (_ = U(' A background component ')),
          (H = d('strong')),
          (F = U('REQUIRED')),
          (q = g()),
          (Y = d('li')),
          (J = d('code')),
          (K = U('backgroundProps')),
          (W = U(' An object of props given to background component')),
          (X = g()),
          (Z = d('li')),
          (nn = d('code')),
          (sn = U('foreground')),
          (an = U(' Either a markdown string or a foreground component ')),
          (tn = d('strong')),
          (on = U('REQUIRED')),
          (en = g()),
          (pn = d('li')),
          (cn = d('code')),
          (rn = U('foregroundProps')),
          (ln = U(' An object of props given to foreground component')),
          (un = g()),
          (kn = d('p')),
          (dn = d('code')),
          (gn = U('backgroundSize')),
          (fn = g()),
          (hn = d('ul')),
          (mn = d('li')),
          ($n = U(
            'Adjusts the size of the background graphic by passing a class name corresponding to one of our well widths: '
          )),
          (vn = d('code')),
          (bn = U('normal')),
          (yn = U(', ')),
          (wn = d('code')),
          (En = U('wide')),
          (xn = U(', ')),
          (Sn = d('code')),
          (Pn = U('wider')),
          (Cn = U(', ')),
          (In = d('code')),
          (Ln = U('widest')),
          (On = U(' or ')),
          (Dn = d('code')),
          (Tn = U('fluid')),
          (jn = U('.')),
          (zn = g()),
          (Bn = d('pre')),
          (Gn = g()),
          I(Nn.$$.fragment),
          (Mn = g()),
          (Rn = d('section')),
          (An = d('p')),
          (Un = U('Control the layout of your component with the ')),
          (Qn = d('code')),
          (Yn = U('foregroundPosition')),
          (Jn = U(' prop.')),
          (Wn = g()),
          (Xn = d('p')),
          (Zn = d('code')),
          (ss = U('foregroundPosition')),
          (as = g()),
          (os = d('ul')),
          (es = d('li')),
          (ps = d('code')),
          (cs = U('middle')),
          (rs = U(' Text and graphic middle ')),
          (ls = d('em')),
          (us = U('default')),
          (is = g()),
          (ks = d('li')),
          (ds = d('code')),
          (gs = U('left')),
          (fs = U(' Text to left, graphic stays middle')),
          (hs = g()),
          (ms = d('li')),
          ($s = d('code')),
          (vs = U('right')),
          (bs = U(' Text to right, graphic stays middle')),
          (ys = g()),
          (ws = d('li')),
          (Es = d('code')),
          (xs = U('left opposite')),
          (Ss = U(' Text to left, graphic to right')),
          (Ps = g()),
          (Cs = d('li')),
          (Is = d('code')),
          (Ls = U('right opposite')),
          (Os = U(' Text to right, graphic to left')),
          (Ds = g()),
          (Ts = d('p')),
          (js = U(
            'Both text and graphic will revert to the middle when the window drops below 1200px.'
          )),
          (zs = g()),
          (Bs = d('p')),
          (Gs = d('strong')),
          (Ns = U('Note:')),
          (Ms = U(' Make sure your ')),
          (Rs = d('code')),
          (As = U('backgroundSize')),
          (Us = U(' prop is ')),
          (Vs = d('em')),
          (_s = U('not')),
          (Hs = U(' set to ')),
          (Fs = d('code')),
          (qs = U('fluid')),
          (Qs = U(' if using either left or right opposite option.')),
          (Ys = g()),
          (Js = d('pre')),
          (Ks = g()),
          I(Ws.$$.fragment),
          (Xs = g()),
          (Zs = d('section')),
          (na = d('p')),
          (sa = d('code')),
          (aa = U('stackBackground')),
          (ta = g()),
          (oa = d('ul')),
          (ea = d('li')),
          (pa = U(
            'Determines whether previous background step graphics will stack below current one.'
          )),
          (ca = g()),
          (ra = d('li')),
          (la = d('code')),
          (ua = U('true')),
          (ia = g()),
          (ka = d('em')),
          (da = U('default')),
          (ga = U(
            ' Background graphics from previous steps will remain visible below active one, allowing you to stack graphics with transparent backgrounds.'
          )),
          (fa = g()),
          (ha = d('li')),
          (ma = d('code')),
          ($a = U('false')),
          (va = U(
            ' Only the background graphic from the current step will show and backgrounds from previous steps are hidden.'
          )),
          (ba = g()),
          (ya = d('p')),
          (wa = d('code')),
          (Ea = U('preload')),
          (xa = g()),
          (Sa = d('ul')),
          (Pa = d('li')),
          (Ca = U(
            'Determines how many background steps to load before and after the currently active one. This prop basically lazyloads backgrounds, which is useful for making sure you’re not loading too many images at once for long scrolls.'
          )),
          (Ia = g()),
          (La = d('li')),
          (Oa = U('Default is ')),
          (Da = d('code')),
          (Ta = U('1')),
          (ja = U(
            ', which loads one background before and one after the currently active one.'
          )),
          (za = g()),
          (Ba = d('li')),
          (Ga = d('code')),
          (Na = U('0')),
          (Ma = U(' disables lazyloading and loads all backgrounds at once.')),
          (Ra = g()),
          (Aa = d('pre')),
          (Ua = g()),
          I(Va.$$.fragment),
          (_a = g()),
          (Ha = d('section')),
          (Fa = d('p')),
          (qa = U('Pass a component to ')),
          (Qa = d('code')),
          (Ya = U('foreground')),
          (Ja = U(' and use ')),
          (Ka = d('code')),
          (Wa = U('backgroundProps')),
          (Xa = U(' and ')),
          (Za = d('code')),
          (nt = U('foregroundProps')),
          (st = U(' to pass data to your components.')),
          (at = g()),
          (tt = d('pre')),
          (ot = g()),
          I(et.$$.fragment),
          (pt = g()),
          (ct = d('section')),
          (rt = d('p')),
          (lt = U('Add an ID to your scroller and use SCSS ')),
          (ut = d('code')),
          (it = U(':global')),
          (kt = U(' rules to override any styles.')),
          (dt = g()),
          (gt = d('section')),
          (ft = d('p')),
          (ht = U(
            'This is the main way you should customise this component for any layouts not covered by the props we’ve already mentioned. Most small layout shifts can be handled with simple SCSS. Check out the component in your browser’s inspector to find which elements you want to target with custom styles.'
          )),
          (mt = g()),
          ($t = d('p')),
          (vt = U(
            'If you’re still struggling to make this component work for your design, it may be a good sign you should reach for '
          )),
          (bt = d('a')),
          (yt = U('svelte-scroller')),
          (wt = U(' instead.')),
          (Et = g()),
          (xt = d('pre')),
          (St = g()),
          I(Pt.$$.fragment),
          (Ct = g()),
          (It = d('section')),
          (Lt = d('p')),
          (Ot = U(
            'You can also use this component to layout an AI-based graphics scroller via an '
          )),
          (Dt = d('a')),
          (Tt = U('ArchieML')),
          (jt = U(
            '-formatted Google doc by using the following pattern to dynamically import '
          )),
          (zt = d('a')),
          (Bt = U('ai2svelte')),
          (Gt = U(' components for the background:')),
          (Nt = g()),
          (Mt = d('section')),
          (Rt = d('p')),
          (At = U('If you’re using the ')),
          (Ut = d('a')),
          (Vt = U('graphics kit')),
          (_t = U(
            ', this pattern is already wired up in the boilerplate included in the Page.svelte component. Free money!'
          )),
          (Ht = g()),
          (Ft = d('pre')),
          (qt = g()),
          (Qt = d('pre')),
          (Yt = g()),
          (Jt = d('section')),
          (Kt = d('p')),
          (Wt = U(
            'This pattern comes with some restrictions, though. Be sure your '
          )),
          (Xt = d('code')),
          (Zt = U('fetchComponent')),
          (no = U(' function follows ')),
          (so = d('a')),
          (ao = U('the limits on dynamic imports')),
          (to = U('.')),
          (oo = g()),
          I(eo.$$.fragment),
          (po = g()),
          (co = d('section')),
          (ro = d('p')),
          (lo = U(
            'This component can also unravel the scrolling experience into a flat, linear layout. Use this when the graphic will be embedded in an iframe.'
          )),
          (uo = g()),
          (io = d('p')),
          (ko = d('code')),
          (go = U('embedded')),
          (fo = g()),
          (ho = d('ul')),
          (mo = d('li')),
          ($o = U('Setting to ')),
          (vo = d('code')),
          (bo = U('true')),
          (yo = U(' will unroll the scroll experience into a flat layout. ')),
          (wo = d('code')),
          (Eo = U('true')),
          (xo = U(' will also cause the ')),
          (So = d('code')),
          (Po = U('foregroundPosition')),
          (Co = U(
            ' prop to be ignored. (Use global SCSS to adjust the style of foreground text.)'
          )),
          (Io = g()),
          (Lo = d('p')),
          (Oo = d('code')),
          (Do = U('embeddedLayout')),
          (To = g()),
          (jo = d('ul')),
          (zo = d('li')),
          (Bo = d('code')),
          (Go = U('fb')),
          (No = U(
            ' (default) will layout the foreground before the background in each step.'
          )),
          (Mo = g()),
          (Ro = d('li')),
          (Ao = d('code')),
          (Uo = U('bf')),
          (Vo = U(' will lead with the background in each step.')),
          (_o = g()),
          (Ho = d('pre')),
          (Fo = g()),
          I(qo.$$.fragment),
          this.h();
      },
      l(n) {
        s = f(n, 'SECTION', {});
        var i = h(s);
        a = f(i, 'H2', {});
        var k = h(a);
        (t = V(k, ts)), k.forEach($), (o = m(i)), (e = f(i, 'P', {}));
        var d = h(e);
        (p = V(d, 'Easy scrollytelling.')),
          d.forEach($),
          (c = m(i)),
          (r = f(i, 'SECTION', { class: !0 }));
        var g = h(r);
        l = f(g, 'P', {});
        var v = h(l);
        (u = V(
          v,
          'This component is designed to handle most common layouts for scrollytelling. If you need something more complex, though, you should use '
        )),
          (b = f(v, 'A', { href: !0, rel: !0 }));
        var y = h(b);
        (w = V(y, 'svelte-scroller')),
          y.forEach($),
          (E = V(
            v,
            ', which is a lower level component you can more easily customize.'
          )),
          v.forEach($),
          g.forEach($),
          (x = m(i)),
          (C = f(i, 'P', {}));
        var S = h(C);
        O = f(S, 'CODE', {});
        var P = h(O);
        (D = V(P, 'steps')), P.forEach($), (j = m(S)), (z = f(S, 'EM', {}));
        var I = h(z);
        (B = V(I, 'an array of objects')),
          I.forEach($),
          S.forEach($),
          (G = m(i)),
          (N = f(i, 'UL', {}));
        var L = h(N);
        M = f(L, 'LI', {});
        var U = h(M);
        R = f(U, 'CODE', {});
        var Q = h(R);
        (A = V(Q, 'background')),
          Q.forEach($),
          (_ = V(U, ' A background component ')),
          (H = f(U, 'STRONG', {}));
        var Vn = h(H);
        (F = V(Vn, 'REQUIRED')),
          Vn.forEach($),
          U.forEach($),
          (q = m(L)),
          (Y = f(L, 'LI', {}));
        var _n = h(Y);
        J = f(_n, 'CODE', {});
        var Hn = h(J);
        (K = V(Hn, 'backgroundProps')),
          Hn.forEach($),
          (W = V(_n, ' An object of props given to background component')),
          _n.forEach($),
          (X = m(L)),
          (Z = f(L, 'LI', {}));
        var Fn = h(Z);
        nn = f(Fn, 'CODE', {});
        var qn = h(nn);
        (sn = V(qn, 'foreground')),
          qn.forEach($),
          (an = V(Fn, ' Either a markdown string or a foreground component ')),
          (tn = f(Fn, 'STRONG', {}));
        var Kn = h(tn);
        (on = V(Kn, 'REQUIRED')),
          Kn.forEach($),
          Fn.forEach($),
          (en = m(L)),
          (pn = f(L, 'LI', {}));
        var ns = h(pn);
        cn = f(ns, 'CODE', {});
        var Qo = h(cn);
        (rn = V(Qo, 'foregroundProps')),
          Qo.forEach($),
          (ln = V(ns, ' An object of props given to foreground component')),
          ns.forEach($),
          L.forEach($),
          (un = m(i)),
          (kn = f(i, 'P', {}));
        var Yo = h(kn);
        dn = f(Yo, 'CODE', {});
        var Jo = h(dn);
        (gn = V(Jo, 'backgroundSize')),
          Jo.forEach($),
          Yo.forEach($),
          (fn = m(i)),
          (hn = f(i, 'UL', {}));
        var Ko = h(hn);
        mn = f(Ko, 'LI', {});
        var Wo = h(mn);
        ($n = V(
          Wo,
          'Adjusts the size of the background graphic by passing a class name corresponding to one of our well widths: '
        )),
          (vn = f(Wo, 'CODE', {}));
        var Xo = h(vn);
        (bn = V(Xo, 'normal')),
          Xo.forEach($),
          (yn = V(Wo, ', ')),
          (wn = f(Wo, 'CODE', {}));
        var Zo = h(wn);
        (En = V(Zo, 'wide')),
          Zo.forEach($),
          (xn = V(Wo, ', ')),
          (Sn = f(Wo, 'CODE', {}));
        var ne = h(Sn);
        (Pn = V(ne, 'wider')),
          ne.forEach($),
          (Cn = V(Wo, ', ')),
          (In = f(Wo, 'CODE', {}));
        var se = h(In);
        (Ln = V(se, 'widest')),
          se.forEach($),
          (On = V(Wo, ' or ')),
          (Dn = f(Wo, 'CODE', {}));
        var ae = h(Dn);
        (Tn = V(ae, 'fluid')),
          ae.forEach($),
          (jn = V(Wo, '.')),
          Wo.forEach($),
          Ko.forEach($),
          i.forEach($),
          (zn = m(n)),
          (Bn = f(n, 'PRE', { class: !0 })),
          h(Bn).forEach($),
          (Gn = m(n)),
          T(Nn.$$.fragment, n),
          (Mn = m(n)),
          (Rn = f(n, 'SECTION', {}));
        var te = h(Rn);
        An = f(te, 'P', {});
        var oe = h(An);
        (Un = V(oe, 'Control the layout of your component with the ')),
          (Qn = f(oe, 'CODE', {}));
        var ee = h(Qn);
        (Yn = V(ee, 'foregroundPosition')),
          ee.forEach($),
          (Jn = V(oe, ' prop.')),
          oe.forEach($),
          (Wn = m(te)),
          (Xn = f(te, 'P', {}));
        var pe = h(Xn);
        Zn = f(pe, 'CODE', {});
        var ce = h(Zn);
        (ss = V(ce, 'foregroundPosition')),
          ce.forEach($),
          pe.forEach($),
          (as = m(te)),
          (os = f(te, 'UL', {}));
        var re = h(os);
        es = f(re, 'LI', {});
        var le = h(es);
        ps = f(le, 'CODE', {});
        var ue = h(ps);
        (cs = V(ue, 'middle')),
          ue.forEach($),
          (rs = V(le, ' Text and graphic middle ')),
          (ls = f(le, 'EM', {}));
        var ie = h(ls);
        (us = V(ie, 'default')),
          ie.forEach($),
          le.forEach($),
          (is = m(re)),
          (ks = f(re, 'LI', {}));
        var ke = h(ks);
        ds = f(ke, 'CODE', {});
        var de = h(ds);
        (gs = V(de, 'left')),
          de.forEach($),
          (fs = V(ke, ' Text to left, graphic stays middle')),
          ke.forEach($),
          (hs = m(re)),
          (ms = f(re, 'LI', {}));
        var ge = h(ms);
        $s = f(ge, 'CODE', {});
        var fe = h($s);
        (vs = V(fe, 'right')),
          fe.forEach($),
          (bs = V(ge, ' Text to right, graphic stays middle')),
          ge.forEach($),
          (ys = m(re)),
          (ws = f(re, 'LI', {}));
        var he = h(ws);
        Es = f(he, 'CODE', {});
        var me = h(Es);
        (xs = V(me, 'left opposite')),
          me.forEach($),
          (Ss = V(he, ' Text to left, graphic to right')),
          he.forEach($),
          (Ps = m(re)),
          (Cs = f(re, 'LI', {}));
        var $e = h(Cs);
        Is = f($e, 'CODE', {});
        var ve = h(Is);
        (Ls = V(ve, 'right opposite')),
          ve.forEach($),
          (Os = V($e, ' Text to right, graphic to left')),
          $e.forEach($),
          re.forEach($),
          (Ds = m(te)),
          (Ts = f(te, 'P', {}));
        var be = h(Ts);
        (js = V(
          be,
          'Both text and graphic will revert to the middle when the window drops below 1200px.'
        )),
          be.forEach($),
          (zs = m(te)),
          (Bs = f(te, 'P', {}));
        var ye = h(Bs);
        Gs = f(ye, 'STRONG', {});
        var we = h(Gs);
        (Ns = V(we, 'Note:')),
          we.forEach($),
          (Ms = V(ye, ' Make sure your ')),
          (Rs = f(ye, 'CODE', {}));
        var Ee = h(Rs);
        (As = V(Ee, 'backgroundSize')),
          Ee.forEach($),
          (Us = V(ye, ' prop is ')),
          (Vs = f(ye, 'EM', {}));
        var xe = h(Vs);
        (_s = V(xe, 'not')),
          xe.forEach($),
          (Hs = V(ye, ' set to ')),
          (Fs = f(ye, 'CODE', {}));
        var Se = h(Fs);
        (qs = V(Se, 'fluid')),
          Se.forEach($),
          (Qs = V(ye, ' if using either left or right opposite option.')),
          ye.forEach($),
          te.forEach($),
          (Ys = m(n)),
          (Js = f(n, 'PRE', { class: !0 })),
          h(Js).forEach($),
          (Ks = m(n)),
          T(Ws.$$.fragment, n),
          (Xs = m(n)),
          (Zs = f(n, 'SECTION', {}));
        var Pe = h(Zs);
        na = f(Pe, 'P', {});
        var Ce = h(na);
        sa = f(Ce, 'CODE', {});
        var Ie = h(sa);
        (aa = V(Ie, 'stackBackground')),
          Ie.forEach($),
          Ce.forEach($),
          (ta = m(Pe)),
          (oa = f(Pe, 'UL', {}));
        var Le = h(oa);
        ea = f(Le, 'LI', {});
        var Oe = h(ea);
        (pa = V(
          Oe,
          'Determines whether previous background step graphics will stack below current one.'
        )),
          Oe.forEach($),
          (ca = m(Le)),
          (ra = f(Le, 'LI', {}));
        var De = h(ra);
        la = f(De, 'CODE', {});
        var Te = h(la);
        (ua = V(Te, 'true')),
          Te.forEach($),
          (ia = m(De)),
          (ka = f(De, 'EM', {}));
        var je = h(ka);
        (da = V(je, 'default')),
          je.forEach($),
          (ga = V(
            De,
            ' Background graphics from previous steps will remain visible below active one, allowing you to stack graphics with transparent backgrounds.'
          )),
          De.forEach($),
          (fa = m(Le)),
          (ha = f(Le, 'LI', {}));
        var ze = h(ha);
        ma = f(ze, 'CODE', {});
        var Be = h(ma);
        ($a = V(Be, 'false')),
          Be.forEach($),
          (va = V(
            ze,
            ' Only the background graphic from the current step will show and backgrounds from previous steps are hidden.'
          )),
          ze.forEach($),
          Le.forEach($),
          (ba = m(Pe)),
          (ya = f(Pe, 'P', {}));
        var Ge = h(ya);
        wa = f(Ge, 'CODE', {});
        var Ne = h(wa);
        (Ea = V(Ne, 'preload')),
          Ne.forEach($),
          Ge.forEach($),
          (xa = m(Pe)),
          (Sa = f(Pe, 'UL', {}));
        var Me = h(Sa);
        Pa = f(Me, 'LI', {});
        var Re = h(Pa);
        (Ca = V(
          Re,
          'Determines how many background steps to load before and after the currently active one. This prop basically lazyloads backgrounds, which is useful for making sure you’re not loading too many images at once for long scrolls.'
        )),
          Re.forEach($),
          (Ia = m(Me)),
          (La = f(Me, 'LI', {}));
        var Ae = h(La);
        (Oa = V(Ae, 'Default is ')), (Da = f(Ae, 'CODE', {}));
        var Ue = h(Da);
        (Ta = V(Ue, '1')),
          Ue.forEach($),
          (ja = V(
            Ae,
            ', which loads one background before and one after the currently active one.'
          )),
          Ae.forEach($),
          (za = m(Me)),
          (Ba = f(Me, 'LI', {}));
        var Ve = h(Ba);
        Ga = f(Ve, 'CODE', {});
        var _e = h(Ga);
        (Na = V(_e, '0')),
          _e.forEach($),
          (Ma = V(
            Ve,
            ' disables lazyloading and loads all backgrounds at once.'
          )),
          Ve.forEach($),
          Me.forEach($),
          Pe.forEach($),
          (Ra = m(n)),
          (Aa = f(n, 'PRE', { class: !0 })),
          h(Aa).forEach($),
          (Ua = m(n)),
          T(Va.$$.fragment, n),
          (_a = m(n)),
          (Ha = f(n, 'SECTION', {}));
        var He = h(Ha);
        Fa = f(He, 'P', {});
        var Fe = h(Fa);
        (qa = V(Fe, 'Pass a component to ')), (Qa = f(Fe, 'CODE', {}));
        var qe = h(Qa);
        (Ya = V(qe, 'foreground')),
          qe.forEach($),
          (Ja = V(Fe, ' and use ')),
          (Ka = f(Fe, 'CODE', {}));
        var Qe = h(Ka);
        (Wa = V(Qe, 'backgroundProps')),
          Qe.forEach($),
          (Xa = V(Fe, ' and ')),
          (Za = f(Fe, 'CODE', {}));
        var Ye = h(Za);
        (nt = V(Ye, 'foregroundProps')),
          Ye.forEach($),
          (st = V(Fe, ' to pass data to your components.')),
          Fe.forEach($),
          He.forEach($),
          (at = m(n)),
          (tt = f(n, 'PRE', { class: !0 })),
          h(tt).forEach($),
          (ot = m(n)),
          T(et.$$.fragment, n),
          (pt = m(n)),
          (ct = f(n, 'SECTION', {}));
        var Je = h(ct);
        rt = f(Je, 'P', {});
        var Ke = h(rt);
        (lt = V(Ke, 'Add an ID to your scroller and use SCSS ')),
          (ut = f(Ke, 'CODE', {}));
        var We = h(ut);
        (it = V(We, ':global')),
          We.forEach($),
          (kt = V(Ke, ' rules to override any styles.')),
          Ke.forEach($),
          (dt = m(Je)),
          (gt = f(Je, 'SECTION', { class: !0 }));
        var Xe = h(gt);
        ft = f(Xe, 'P', {});
        var Ze = h(ft);
        (ht = V(
          Ze,
          'This is the main way you should customise this component for any layouts not covered by the props we’ve already mentioned. Most small layout shifts can be handled with simple SCSS. Check out the component in your browser’s inspector to find which elements you want to target with custom styles.'
        )),
          Ze.forEach($),
          (mt = m(Xe)),
          ($t = f(Xe, 'P', {}));
        var np = h($t);
        (vt = V(
          np,
          'If you’re still struggling to make this component work for your design, it may be a good sign you should reach for '
        )),
          (bt = f(np, 'A', { href: !0, rel: !0 }));
        var sp = h(bt);
        (yt = V(sp, 'svelte-scroller')),
          sp.forEach($),
          (wt = V(np, ' instead.')),
          np.forEach($),
          Xe.forEach($),
          Je.forEach($),
          (Et = m(n)),
          (xt = f(n, 'PRE', { class: !0 })),
          h(xt).forEach($),
          (St = m(n)),
          T(Pt.$$.fragment, n),
          (Ct = m(n)),
          (It = f(n, 'SECTION', {}));
        var ap = h(It);
        Lt = f(ap, 'P', {});
        var tp = h(Lt);
        (Ot = V(
          tp,
          'You can also use this component to layout an AI-based graphics scroller via an '
        )),
          (Dt = f(tp, 'A', { href: !0, rel: !0 }));
        var op = h(Dt);
        (Tt = V(op, 'ArchieML')),
          op.forEach($),
          (jt = V(
            tp,
            '-formatted Google doc by using the following pattern to dynamically import '
          )),
          (zt = f(tp, 'A', { href: !0, rel: !0 }));
        var ep = h(zt);
        (Bt = V(ep, 'ai2svelte')),
          ep.forEach($),
          (Gt = V(tp, ' components for the background:')),
          tp.forEach($),
          (Nt = m(ap)),
          (Mt = f(ap, 'SECTION', { class: !0 }));
        var pp = h(Mt);
        Rt = f(pp, 'P', {});
        var cp = h(Rt);
        (At = V(cp, 'If you’re using the ')),
          (Ut = f(cp, 'A', { href: !0, rel: !0 }));
        var rp = h(Ut);
        (Vt = V(rp, 'graphics kit')),
          rp.forEach($),
          (_t = V(
            cp,
            ', this pattern is already wired up in the boilerplate included in the Page.svelte component. Free money!'
          )),
          cp.forEach($),
          pp.forEach($),
          ap.forEach($),
          (Ht = m(n)),
          (Ft = f(n, 'PRE', { class: !0 })),
          h(Ft).forEach($),
          (qt = m(n)),
          (Qt = f(n, 'PRE', { class: !0 })),
          h(Qt).forEach($),
          (Yt = m(n)),
          (Jt = f(n, 'SECTION', {}));
        var lp = h(Jt);
        Kt = f(lp, 'P', {});
        var up = h(Kt);
        (Wt = V(
          up,
          'This pattern comes with some restrictions, though. Be sure your '
        )),
          (Xt = f(up, 'CODE', {}));
        var ip = h(Xt);
        (Zt = V(ip, 'fetchComponent')),
          ip.forEach($),
          (no = V(up, ' function follows ')),
          (so = f(up, 'A', { href: !0, rel: !0 }));
        var kp = h(so);
        (ao = V(kp, 'the limits on dynamic imports')),
          kp.forEach($),
          (to = V(up, '.')),
          up.forEach($),
          lp.forEach($),
          (oo = m(n)),
          T(eo.$$.fragment, n),
          (po = m(n)),
          (co = f(n, 'SECTION', {}));
        var dp = h(co);
        ro = f(dp, 'P', {});
        var gp = h(ro);
        (lo = V(
          gp,
          'This component can also unravel the scrolling experience into a flat, linear layout. Use this when the graphic will be embedded in an iframe.'
        )),
          gp.forEach($),
          (uo = m(dp)),
          (io = f(dp, 'P', {}));
        var fp = h(io);
        ko = f(fp, 'CODE', {});
        var hp = h(ko);
        (go = V(hp, 'embedded')),
          hp.forEach($),
          fp.forEach($),
          (fo = m(dp)),
          (ho = f(dp, 'UL', {}));
        var mp = h(ho);
        mo = f(mp, 'LI', {});
        var $p = h(mo);
        ($o = V($p, 'Setting to ')), (vo = f($p, 'CODE', {}));
        var vp = h(vo);
        (bo = V(vp, 'true')),
          vp.forEach($),
          (yo = V(
            $p,
            ' will unroll the scroll experience into a flat layout. '
          )),
          (wo = f($p, 'CODE', {}));
        var bp = h(wo);
        (Eo = V(bp, 'true')),
          bp.forEach($),
          (xo = V($p, ' will also cause the ')),
          (So = f($p, 'CODE', {}));
        var yp = h(So);
        (Po = V(yp, 'foregroundPosition')),
          yp.forEach($),
          (Co = V(
            $p,
            ' prop to be ignored. (Use global SCSS to adjust the style of foreground text.)'
          )),
          $p.forEach($),
          mp.forEach($),
          (Io = m(dp)),
          (Lo = f(dp, 'P', {}));
        var wp = h(Lo);
        Oo = f(wp, 'CODE', {});
        var Ep = h(Oo);
        (Do = V(Ep, 'embeddedLayout')),
          Ep.forEach($),
          wp.forEach($),
          (To = m(dp)),
          (jo = f(dp, 'UL', {}));
        var xp = h(jo);
        zo = f(xp, 'LI', {});
        var Sp = h(zo);
        Bo = f(Sp, 'CODE', {});
        var Pp = h(Bo);
        (Go = V(Pp, 'fb')),
          Pp.forEach($),
          (No = V(
            Sp,
            ' (default) will layout the foreground before the background in each step.'
          )),
          Sp.forEach($),
          (Mo = m(xp)),
          (Ro = f(xp, 'LI', {}));
        var Cp = h(Ro);
        Ao = f(Cp, 'CODE', {});
        var Ip = h(Ao);
        (Uo = V(Ip, 'bf')),
          Ip.forEach($),
          (Vo = V(Cp, ' will lead with the background in each step.')),
          Cp.forEach($),
          xp.forEach($),
          dp.forEach($),
          (_o = m(n)),
          (Ho = f(n, 'PRE', { class: !0 })),
          h(Ho).forEach($),
          (Fo = m(n)),
          T(qo.$$.fragment, n),
          this.h();
      },
      h() {
        v(b, 'href', 'https://github.com/sveltejs/svelte-scroller'),
          v(b, 'rel', 'nofollow'),
          v(r, 'class', 'note'),
          v(Bn, 'class', 'language-svelte'),
          v(Js, 'class', 'language-svelte'),
          v(Aa, 'class', 'language-svelte'),
          v(tt, 'class', 'language-svelte'),
          v(bt, 'href', 'https://github.com/sveltejs/svelte-scroller'),
          v(bt, 'rel', 'nofollow'),
          v(gt, 'class', 'note'),
          v(xt, 'class', 'language-svelte'),
          v(Dt, 'href', 'http://archieml.org/'),
          v(Dt, 'rel', 'nofollow'),
          v(zt, 'href', 'https://github.com/reuters-graphics/ai2svelte'),
          v(zt, 'rel', 'nofollow'),
          v(
            Ut,
            'href',
            'https://github.com/reuters-graphics/bluprint_graphics-kit'
          ),
          v(Ut, 'rel', 'nofollow'),
          v(Mt, 'class', 'note'),
          v(Ft, 'class', 'language-bash'),
          v(Qt, 'class', 'language-svelte'),
          v(
            so,
            'href',
            'https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations'
          ),
          v(so, 'rel', 'nofollow'),
          v(Ho, 'class', 'language-svelte');
      },
      m(n, k) {
        i(n, s, k),
          y(s, a),
          y(a, t),
          y(s, o),
          y(s, e),
          y(e, p),
          y(s, c),
          y(s, r),
          y(r, l),
          y(l, u),
          y(l, b),
          y(b, w),
          y(l, E),
          y(s, x),
          y(s, C),
          y(C, O),
          y(O, D),
          y(C, j),
          y(C, z),
          y(z, B),
          y(s, G),
          y(s, N),
          y(N, M),
          y(M, R),
          y(R, A),
          y(M, _),
          y(M, H),
          y(H, F),
          y(N, q),
          y(N, Y),
          y(Y, J),
          y(J, K),
          y(Y, W),
          y(N, X),
          y(N, Z),
          y(Z, nn),
          y(nn, sn),
          y(Z, an),
          y(Z, tn),
          y(tn, on),
          y(N, en),
          y(N, pn),
          y(pn, cn),
          y(cn, rn),
          y(pn, ln),
          y(s, un),
          y(s, kn),
          y(kn, dn),
          y(dn, gn),
          y(s, fn),
          y(s, hn),
          y(hn, mn),
          y(mn, $n),
          y(mn, vn),
          y(vn, bn),
          y(mn, yn),
          y(mn, wn),
          y(wn, En),
          y(mn, xn),
          y(mn, Sn),
          y(Sn, Pn),
          y(mn, Cn),
          y(mn, In),
          y(In, Ln),
          y(mn, On),
          y(mn, Dn),
          y(Dn, Tn),
          y(mn, jn),
          i(n, zn, k),
          i(n, Bn, k),
          (Bn.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Scroller <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> RedGraphic <span class="token keyword">from</span> <span class="token string">\'./RedGraphic.svelte\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> BlueGraphic <span class="token keyword">from</span> <span class="token string">\'./BlueGraphic.svelte\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> GreenGraphic <span class="token keyword">from</span> <span class="token string">\'./GreenGraphic.svelte\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> steps <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">&#123;</span>\n      background<span class="token operator">:</span> RedGraphic<span class="token punctuation">,</span>\n      foreground<span class="token operator">:</span> <span class="token string">\'#### Step 1&#92;n&#92;nLorem ipsum red\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span>\n      background<span class="token operator">:</span> BlueGraphic<span class="token punctuation">,</span>\n      foreground<span class="token operator">:</span> <span class="token string">\'#### Step 2&#92;n&#92;nLorem ipsum blue\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span>\n      background<span class="token operator">:</span> GreenGraphic<span class="token punctuation">,</span>\n      foreground<span class="token operator">:</span> <span class="token string">\'#### Step 3&#92;n&#92;nLorem ipsum green\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> backgroundSize <span class="token operator">=</span> <span class="token string">\'wide\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span> <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">backgroundSize="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>backgroundSize<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>'),
          i(n, Gn, k),
          L(Nn, n, k),
          i(n, Mn, k),
          i(n, Rn, k),
          y(Rn, An),
          y(An, Un),
          y(An, Qn),
          y(Qn, Yn),
          y(An, Jn),
          y(Rn, Wn),
          y(Rn, Xn),
          y(Xn, Zn),
          y(Zn, ss),
          y(Rn, as),
          y(Rn, os),
          y(os, es),
          y(es, ps),
          y(ps, cs),
          y(es, rs),
          y(es, ls),
          y(ls, us),
          y(os, is),
          y(os, ks),
          y(ks, ds),
          y(ds, gs),
          y(ks, fs),
          y(os, hs),
          y(os, ms),
          y(ms, $s),
          y($s, vs),
          y(ms, bs),
          y(os, ys),
          y(os, ws),
          y(ws, Es),
          y(Es, xs),
          y(ws, Ss),
          y(os, Ps),
          y(os, Cs),
          y(Cs, Is),
          y(Is, Ls),
          y(Cs, Os),
          y(Rn, Ds),
          y(Rn, Ts),
          y(Ts, js),
          y(Rn, zs),
          y(Rn, Bs),
          y(Bs, Gs),
          y(Gs, Ns),
          y(Bs, Ms),
          y(Bs, Rs),
          y(Rs, As),
          y(Bs, Us),
          y(Bs, Vs),
          y(Vs, _s),
          y(Bs, Hs),
          y(Bs, Fs),
          y(Fs, qs),
          y(Bs, Qs),
          i(n, Ys, k),
          i(n, Js, k),
          (Js.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Scroller <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> RedGraphic <span class="token keyword">from</span> <span class="token string">\'./RedGraphic.svelte\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> BlueGraphic <span class="token keyword">from</span> <span class="token string">\'./BlueGraphic.svelte\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> GreenGraphic <span class="token keyword">from</span> <span class="token string">\'./GreenGraphic.svelte\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> steps <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">&#123;</span>\n      background<span class="token operator">:</span> RedGraphic<span class="token punctuation">,</span>\n      foreground<span class="token operator">:</span> <span class="token string">\'#### Step 1&#92;n&#92;nLorem ipsum\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span>\n      background<span class="token operator">:</span> BlueGraphic<span class="token punctuation">,</span>\n      foreground<span class="token operator">:</span> <span class="token string">\'#### Step 2&#92;n&#92;nLorem ipsum\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span>\n      background<span class="token operator">:</span> GreenGraphic<span class="token punctuation">,</span>\n      foreground<span class="token operator">:</span> <span class="token string">\'#### Step 3&#92;n&#92;nLorem ipsum\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span>\n  <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">foregroundPosition</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right opposite<span class="token punctuation">"</span></span>\n  <span class="token attr-name">backgroundSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>normal<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span></code>'),
          i(n, Ks, k),
          L(Ws, n, k),
          i(n, Xs, k),
          i(n, Zs, k),
          y(Zs, na),
          y(na, sa),
          y(sa, aa),
          y(Zs, ta),
          y(Zs, oa),
          y(oa, ea),
          y(ea, pa),
          y(oa, ca),
          y(oa, ra),
          y(ra, la),
          y(la, ua),
          y(ra, ia),
          y(ra, ka),
          y(ka, da),
          y(ra, ga),
          y(oa, fa),
          y(oa, ha),
          y(ha, ma),
          y(ma, $a),
          y(ha, va),
          y(Zs, ba),
          y(Zs, ya),
          y(ya, wa),
          y(wa, Ea),
          y(Zs, xa),
          y(Zs, Sa),
          y(Sa, Pa),
          y(Pa, Ca),
          y(Sa, Ia),
          y(Sa, La),
          y(La, Oa),
          y(La, Da),
          y(Da, Ta),
          y(La, ja),
          y(Sa, za),
          y(Sa, Ba),
          y(Ba, Ga),
          y(Ga, Na),
          y(Ba, Ma),
          i(n, Ra, k),
          i(n, Aa, k),
          (Aa.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span> <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">stackBackground="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">preload="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>'),
          i(n, Ua, k),
          L(Va, n, k),
          i(n, _a, k),
          i(n, Ha, k),
          y(Ha, Fa),
          y(Fa, qa),
          y(Fa, Qa),
          y(Qa, Ya),
          y(Fa, Ja),
          y(Fa, Ka),
          y(Ka, Wa),
          y(Fa, Xa),
          y(Fa, Za),
          y(Za, nt),
          y(Fa, st),
          i(n, at, k),
          i(n, tt, k),
          (tt.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Scroller <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> MultiColourGraphic <span class="token keyword">from</span> <span class="token string">\'./MultiColourGraphic.svelte\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> InteractiveText <span class="token keyword">from</span> <span class="token string">\'./InteractiveText.svelte\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> steps <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">&#123;</span>\n      background<span class="token operator">:</span> MultiColourGraphic<span class="token punctuation">,</span>\n      backgroundProps<span class="token operator">:</span> <span class="token punctuation">&#123;</span> colour<span class="token operator">:</span> <span class="token string">\'red\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token comment">// 👈</span>\n      foreground<span class="token operator">:</span> InteractiveText<span class="token punctuation">,</span> <span class="token comment">// 👈</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span>\n      background<span class="token operator">:</span> MultiColourGraphic<span class="token punctuation">,</span>\n      backgroundProps<span class="token operator">:</span> <span class="token punctuation">&#123;</span> colour<span class="token operator">:</span> <span class="token string">\'blue\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n      foreground<span class="token operator">:</span> <span class="token string">\'#### Step 2&#92;n&#92;nLorem ipsum blue\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span>\n      background<span class="token operator">:</span> MultiColourGraphic<span class="token punctuation">,</span>\n      backgroundProps<span class="token operator">:</span> <span class="token punctuation">&#123;</span> colour<span class="token operator">:</span> <span class="token string">\'green\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n      foreground<span class="token operator">:</span> InteractiveText<span class="token punctuation">,</span>\n      foregroundProps<span class="token operator">:</span> <span class="token punctuation">&#123;</span> count<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token comment">// 👈</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span> <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">backgroundSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>widest<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>'),
          i(n, ot, k),
          L(et, n, k),
          i(n, pt, k),
          i(n, ct, k),
          y(ct, rt),
          y(rt, lt),
          y(rt, ut),
          y(ut, it),
          y(rt, kt),
          y(ct, dt),
          y(ct, gt),
          y(gt, ft),
          y(ft, ht),
          y(gt, mt),
          y(gt, $t),
          y($t, vt),
          y($t, bt),
          y(bt, yt),
          y($t, wt),
          i(n, Et, k),
          i(n, xt, k),
          (xt.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span> <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">backgroundSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>widest<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-scroller<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token comment">&lt;!-- svelte-ignore css-unused-selector --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">// 👇 Go global!\n  :global</span> <span class="token punctuation">&#123;</span>\n    <span class="token selector">#my-scroller</span> <span class="token punctuation">&#123;</span>\n      <span class="token selector">.step-foreground</span> <span class="token punctuation">&#123;</span>\n        <span class="token property">max-width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>\n        <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>\n        <span class="token selector">h4,\n        p</span> <span class="token punctuation">&#123;</span>\n          <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n        <span class="token punctuation">&#125;</span>\n      <span class="token punctuation">&#125;</span>\n    <span class="token punctuation">&#125;</span>\n  <span class="token punctuation">&#125;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>'),
          i(n, St, k),
          L(Pt, n, k),
          i(n, Ct, k),
          i(n, It, k),
          y(It, Lt),
          y(Lt, Ot),
          y(Lt, Dt),
          y(Dt, Tt),
          y(Lt, jt),
          y(Lt, zt),
          y(zt, Bt),
          y(Lt, Gt),
          y(It, Nt),
          y(It, Mt),
          y(Mt, Rt),
          y(Rt, At),
          y(Rt, Ut),
          y(Ut, Vt),
          y(Rt, _t),
          i(n, Ht, k),
          i(n, Ft, k),
          (Ft.innerHTML =
            '<code class="language-bash"><span class="token comment"># In your Google doc...</span>\n<span class="token punctuation">[</span>blocks<span class="token punctuation">]</span>\n\n<span class="token comment"># ...</span>\nType: ai-scroller\nID: my-scroller\nBackgroundSize: fluid\nForegroundPosition: middle\n\n<span class="token punctuation">[</span>.steps<span class="token punctuation">]</span>\nBackground: ai-scroller-1\nForeground: <span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span># Step <span class="token number">1</span>\n\nLorem ipsum<span class="token punctuation">..</span>.\n:end\n\nBackground: ai-scroller-2\nForeground: <span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span># Step <span class="token number">2</span>\n\nLorem ipsum<span class="token punctuation">..</span>.\n:end\n\nBackground: ai-scroller-3\nForeground: <span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span># Step <span class="token number">3</span>\n\nLorem ipsum<span class="token punctuation">..</span>.\n:end\n\n<span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n<span class="token punctuation">[</span><span class="token punctuation">]</span></code>'),
          i(n, qt, k),
          i(n, Qt, k),
          (Qt.innerHTML =
            '<code class="language-svelte"><span class="token comment">&lt;!-- src/lib/Page.svelte --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'$app/paths\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> content <span class="token keyword">from</span> <span class="token string">\'$locales/en/content.json\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Scroller <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">fetchComponent</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">componentName</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">./ai2svelte/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>componentName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.svelte</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">makeSteps</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">steps</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">const</span> scrollerSteps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> step <span class="token keyword">of</span> steps<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n      <span class="token keyword">const</span> background <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchComponent</span><span class="token punctuation">(</span>step<span class="token punctuation">.</span>Background<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      scrollerSteps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n        background<span class="token punctuation">,</span>\n        backgroundProps<span class="token operator">:</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n        foreground<span class="token operator">:</span> step<span class="token punctuation">.</span>Foreground<span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n    <span class="token keyword">return</span> scrollerSteps<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">content<span class="token punctuation">.</span>blocks </span><span class="token keyword">as</span> <span class="token language-javascript">block<span class="token punctuation">&#125;</span></span></span>\n  <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> block<span class="token punctuation">.</span>Type <span class="token operator">===</span> <span class="token string">\'ai-scroller\'</span><span class="token punctuation">&#125;</span></span>\n    <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">await</span> <span class="token function">makeSteps</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>steps<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>then steps<span class="token punctuation">&#125;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span>\n        <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n        <span class="token attr-name">backgroundSize="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span>BackgroundSize<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n        <span class="token attr-name">foregroundPosition="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span>ForegroundPosition<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n        <span class="token attr-name">id="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span><span class="token constant">ID</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n      <span class="token punctuation">/></span></span>\n    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>catch error<span class="token punctuation">&#125;</span></span>\n      <span class="token language-javascript"><span class="token punctuation">&#123;</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">\'Error making steps for scroller\'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>\n    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">await</span><span class="token punctuation">&#125;</span></span>\n  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>\n<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span></code>'),
          i(n, Yt, k),
          i(n, Jt, k),
          y(Jt, Kt),
          y(Kt, Wt),
          y(Kt, Xt),
          y(Xt, Zt),
          y(Kt, no),
          y(Kt, so),
          y(so, ao),
          y(Kt, to),
          i(n, oo, k),
          L(eo, n, k),
          i(n, po, k),
          i(n, co, k),
          y(co, ro),
          y(ro, lo),
          y(co, uo),
          y(co, io),
          y(io, ko),
          y(ko, go),
          y(co, fo),
          y(co, ho),
          y(ho, mo),
          y(mo, $o),
          y(mo, vo),
          y(vo, bo),
          y(mo, yo),
          y(mo, wo),
          y(wo, Eo),
          y(mo, xo),
          y(mo, So),
          y(So, Po),
          y(mo, Co),
          y(co, Io),
          y(co, Lo),
          y(Lo, Oo),
          y(Oo, Do),
          y(co, To),
          y(co, jo),
          y(jo, zo),
          y(zo, Bo),
          y(Bo, Go),
          y(zo, No),
          y(jo, Mo),
          y(jo, Ro),
          y(Ro, Ao),
          y(Ao, Uo),
          y(Ro, Vo),
          i(n, _o, k),
          i(n, Ho, k),
          (Ho.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroller</span>\n  <span class="token attr-name">steps="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">backgroundSize</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fluid<span class="token punctuation">"</span></span>\n  <span class="token attr-name">embedded="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>\n  <span class="token attr-name">embeddedLayout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fb<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span></code>'),
          i(n, Fo, k),
          L(qo, n, k),
          (Qo = !0);
      },
      p(n, [s]) {
        const a = {};
        128 & s && (a.$$scope = { dirty: s, ctx: n }), Nn.$set(a);
        const t = {};
        128 & s && (t.$$scope = { dirty: s, ctx: n }), Ws.$set(t);
        const o = {};
        128 & s && (o.$$scope = { dirty: s, ctx: n }), Va.$set(o);
        const e = {};
        128 & s && (e.$$scope = { dirty: s, ctx: n }), et.$set(e);
        const p = {};
        128 & s && (p.$$scope = { dirty: s, ctx: n }), Pt.$set(p);
        const c = {};
        128 & s && (c.$$scope = { dirty: s, ctx: n }), eo.$set(c);
        const r = {};
        128 & s && (r.$$scope = { dirty: s, ctx: n }), qo.$set(r);
      },
      i(n) {
        Qo ||
          (k(Nn.$$.fragment, n),
          k(Ws.$$.fragment, n),
          k(Va.$$.fragment, n),
          k(et.$$.fragment, n),
          k(Pt.$$.fragment, n),
          k(eo.$$.fragment, n),
          k(qo.$$.fragment, n),
          (Qo = !0));
      },
      o(n) {
        S(Nn.$$.fragment, n),
          S(Ws.$$.fragment, n),
          S(Va.$$.fragment, n),
          S(et.$$.fragment, n),
          S(Pt.$$.fragment, n),
          S(eo.$$.fragment, n),
          S(qo.$$.fragment, n),
          (Qo = !1);
      },
      d(n) {
        n && $(s),
          n && $(zn),
          n && $(Bn),
          n && $(Gn),
          P(Nn, n),
          n && $(Mn),
          n && $(Rn),
          n && $(Ys),
          n && $(Js),
          n && $(Ks),
          P(Ws, n),
          n && $(Xs),
          n && $(Zs),
          n && $(Ra),
          n && $(Aa),
          n && $(Ua),
          P(Va, n),
          n && $(_a),
          n && $(Ha),
          n && $(at),
          n && $(tt),
          n && $(ot),
          P(et, n),
          n && $(pt),
          n && $(ct),
          n && $(Et),
          n && $(xt),
          n && $(St),
          P(Pt, n),
          n && $(Ct),
          n && $(It),
          n && $(Ht),
          n && $(Ft),
          n && $(qt),
          n && $(Qt),
          n && $(Yt),
          n && $(Jt),
          n && $(oo),
          P(eo, n),
          n && $(po),
          n && $(co),
          n && $(_o),
          n && $(Ho),
          n && $(Fo),
          P(qo, n);
      },
    }
  );
}
const as = {
    title: 'Scroller',
    description: 'Easy scrollytelling with layout options.',
    slug: 'scroller',
  },
  { title: ts, description: os, slug: es } = as;
function ps(n) {
  const s = async (n) =>
    (
      await (function (n) {
        switch (n) {
          case './demos/ai2html/ai-scroller-1.exclude.svelte':
            return p(
              () => import('./ai-scroller-1.exclude-0b9bd8cf.js'),
              [
                'chunks/ai-scroller-1.exclude-0b9bd8cf.js',
                'assets/ai-scroller-1.exclude-bf4133bf.css',
                'chunks/vendor-927c0fc0.js',
                'assets/vendor-ba67f73c.css',
                'chunks/paths-6758d194.js',
              ]
            );
          case './demos/ai2html/ai-scroller-2.exclude.svelte':
            return p(
              () => import('./ai-scroller-2.exclude-514a6269.js'),
              [
                'chunks/ai-scroller-2.exclude-514a6269.js',
                'assets/ai-scroller-2.exclude-d46570e4.css',
                'chunks/vendor-927c0fc0.js',
                'assets/vendor-ba67f73c.css',
                'chunks/paths-6758d194.js',
              ]
            );
          case './demos/ai2html/ai-scroller-3.exclude.svelte':
            return p(
              () => import('./ai-scroller-3.exclude-4ea8e7cd.js'),
              [
                'chunks/ai-scroller-3.exclude-4ea8e7cd.js',
                'assets/ai-scroller-3.exclude-9076ea09.css',
                'chunks/vendor-927c0fc0.js',
                'assets/vendor-ba67f73c.css',
                'chunks/paths-6758d194.js',
              ]
            );
          default:
            return new Promise(function (s, a) {
              ('function' == typeof queueMicrotask
                ? queueMicrotask
                : setTimeout)(a.bind(null, new Error('Unknown variable dynamic import: ' + n)));
            });
        }
      })(`./demos/ai2html/${n}.exclude.svelte`)
    ).default;
  return [
    [
      {
        background: Un,
        backgroundProps: { colour: 'red' },
        foreground: '#### Step 1\n\nLorem ipsum red',
      },
      {
        background: Un,
        backgroundProps: { colour: 'blue' },
        foreground: '#### Step 2\n\nLorem ipsum blue',
      },
      {
        background: Un,
        backgroundProps: { colour: 'green' },
        foreground: '#### Step 3\n\nLorem ipsum green',
      },
    ],
    [
      {
        background: Mn,
        backgroundProps: { colour: 'red', i: 0 },
        foreground: '#### Step 1\n\nLorem ipsum red',
      },
      {
        background: Mn,
        backgroundProps: { colour: 'blue', i: 1 },
        foreground: '#### Step 2\n\nLorem ipsum blue',
      },
      {
        background: Mn,
        backgroundProps: { colour: 'green', i: 2 },
        foreground: '#### Step 3\n\nLorem ipsum green',
      },
    ],
    [
      { background: Un, backgroundProps: { colour: 'red' }, foreground: Bn },
      {
        background: Un,
        backgroundProps: { colour: 'blue' },
        foreground: '#### Step 2\n\nLorem ipsum blue',
      },
      {
        background: Un,
        backgroundProps: { colour: 'green' },
        foreground: Bn,
        foregroundProps: { count: 100 },
      },
    ],
    [
      { background: 'ai-scroller-1', foreground: '#### Step 1\n\nLorem ipsum' },
      { background: 'ai-scroller-2', foreground: '#### Step 2\n\nLorem ipsum' },
      { background: 'ai-scroller-3', foreground: '#### Step 3\n\nLorem ipsum' },
    ],
    async (n) => {
      const a = [];
      for (const t of n) {
        const n = await s(t.background);
        a.push(e(e({}, t), { background: n }));
      }
      return a;
    },
  ];
}
export default class extends c {
  constructor(n) {
    super(), r(this, n, ps, ss, l, {});
  }
}
export { as as metadata };
