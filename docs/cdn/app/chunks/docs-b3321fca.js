import { _ as a } from './preload-helper-438f94a3.js';
import {
  S as s,
  i as n,
  s as t,
  E as e,
  F as p,
  G as o,
  x as l,
  u as c,
  e as i,
  k as r,
  j as u,
  c as g,
  a as f,
  n as d,
  m as h,
  d as k,
  b as v,
  f as m,
  H as z,
  o as y,
  r as x,
  w as E,
  v as b,
  Z as P,
  D as $,
  t as w,
  g as A,
  _ as I,
  I as D,
  $ as T,
  a0 as V,
  a1 as C,
  l as S,
  a2 as j,
} from './vendor-927c0fc0.js';
import { D as G } from './index-38e47fc4.js';
import { a as H } from './paths-6758d194.js';
const M = (a) => ({}),
  L = (a) => ({}),
  _ = (a) => ({}),
  N = (a) => ({});
function O(a) {
  let s;
  const n = a[5].title,
    t = $(n, a, a[4], N);
  return {
    c() {
      t && t.c();
    },
    l(a) {
      t && t.l(a);
    },
    m(a, n) {
      t && t.m(a, n), (s = !0);
    },
    p(a, l) {
      t &&
        t.p &&
        (!s || 16 & l) &&
        e(t, n, a, a[4], s ? o(n, a[4], l, _) : p(a[4]), N);
    },
    i(a) {
      s || (l(t, a), (s = !0));
    },
    o(a) {
      c(t, a), (s = !1);
    },
    d(a) {
      t && t.d(a);
    },
  };
}
function J(a) {
  let s;
  const n = a[5].notes,
    t = $(n, a, a[4], L);
  return {
    c() {
      t && t.c();
    },
    l(a) {
      t && t.l(a);
    },
    m(a, n) {
      t && t.m(a, n), (s = !0);
    },
    p(a, l) {
      t &&
        t.p &&
        (!s || 16 & l) &&
        e(t, n, a, a[4], s ? o(n, a[4], l, M) : p(a[4]), L);
    },
    i(a) {
      s || (l(t, a), (s = !0));
    },
    o(a) {
      c(t, a), (s = !1);
    },
    d(a) {
      t && t.d(a);
    },
  };
}
function R(a) {
  let s,
    n,
    t,
    e,
    p,
    o,
    P = a[3].title && O(a);
  var $ = a[0];
  $ && (t = new $({}));
  let w = a[3].notes && J(a);
  return {
    c() {
      (s = i('section')),
        P && P.c(),
        (n = r()),
        t && u(t.$$.fragment),
        (e = r()),
        w && w.c(),
        this.h();
    },
    l(a) {
      s = g(a, 'SECTION', { class: !0, id: !0 });
      var p = f(s);
      P && P.l(p),
        (n = d(p)),
        t && h(t.$$.fragment, p),
        (e = d(p)),
        w && w.l(p),
        p.forEach(k),
        this.h();
    },
    h() {
      v(s, 'class', (p = 'ai2svelte-container graphic ' + a[2])),
        v(s, 'id', a[1]);
    },
    m(a, p) {
      m(a, s, p),
        P && P.m(s, null),
        z(s, n),
        t && y(t, s, null),
        z(s, e),
        w && w.m(s, null),
        (o = !0);
    },
    p(a, [i]) {
      if (
        (a[3].title
          ? P
            ? (P.p(a, i), 8 & i && l(P, 1))
            : ((P = O(a)), P.c(), l(P, 1), P.m(s, n))
          : P &&
            (x(),
            c(P, 1, 1, () => {
              P = null;
            }),
            E()),
        $ !== ($ = a[0]))
      ) {
        if (t) {
          x();
          const a = t;
          c(a.$$.fragment, 1, 0, () => {
            b(a, 1);
          }),
            E();
        }
        $
          ? ((t = new $({})), u(t.$$.fragment), l(t.$$.fragment, 1), y(t, s, e))
          : (t = null);
      }
      a[3].notes
        ? w
          ? (w.p(a, i), 8 & i && l(w, 1))
          : ((w = J(a)), w.c(), l(w, 1), w.m(s, null))
        : w &&
          (x(),
          c(w, 1, 1, () => {
            w = null;
          }),
          E()),
        (!o || (4 & i && p !== (p = 'ai2svelte-container graphic ' + a[2]))) &&
          v(s, 'class', p),
        (!o || 2 & i) && v(s, 'id', a[1]);
    },
    i(a) {
      o || (l(P), t && l(t.$$.fragment, a), l(w), (o = !0));
    },
    o(a) {
      c(P), t && c(t.$$.fragment, a), c(w), (o = !1);
    },
    d(a) {
      a && k(s), P && P.d(), t && b(t), w && w.d();
    },
  };
}
function q(a, s, n) {
  let { $$slots: t = {}, $$scope: e } = s;
  const p = P(t);
  let { AiGraphic: o } = s,
    { id: l = '' } = s,
    { size: c = 'normal' } = s;
  return (
    (a.$$set = (a) => {
      'AiGraphic' in a && n(0, (o = a.AiGraphic)),
        'id' in a && n(1, (l = a.id)),
        'size' in a && n(2, (c = a.size)),
        '$$scope' in a && n(4, (e = a.$$scope));
    }),
    [o, l, c, p, e, t]
  );
}
class U extends s {
  constructor(a) {
    super(), n(this, a, q, R, t, { AiGraphic: 0, id: 1, size: 2 });
  }
}
function W(a) {
  let s,
    n,
    t,
    e,
    p,
    o,
    l,
    c,
    u,
    h,
    y,
    x,
    E,
    b,
    P,
    $,
    T,
    V,
    C,
    S,
    j,
    G,
    M,
    L,
    _,
    N,
    O,
    J,
    R,
    q,
    U,
    W,
    Y,
    B,
    F,
    Z,
    K,
    Q,
    X,
    aa,
    sa,
    na,
    ta,
    ea,
    pa,
    oa,
    la,
    ca,
    ia,
    ra,
    ua,
    ga,
    fa,
    da,
    ha,
    ka,
    va,
    ma,
    za,
    ya,
    xa,
    Ea,
    ba,
    Pa,
    $a,
    wa,
    Aa,
    Ia,
    Da,
    Ta,
    Va,
    Ca,
    Sa,
    ja,
    Ga,
    Ha,
    Ma,
    La,
    _a;
  return {
    c() {
      (s = i('div')),
        (n = i('div')),
        (t = r()),
        (e = i('div')),
        (o = r()),
        (l = i('div')),
        (c = i('p')),
        (u = w('Shake intensity')),
        (h = r()),
        (y = i('div')),
        (x = i('p')),
        (E = w('Light')),
        (b = r()),
        (P = i('div')),
        ($ = i('p')),
        (T = w('Moderate')),
        (V = r()),
        (C = i('div')),
        (S = i('p')),
        (j = w('Cap-Haitien')),
        (G = r()),
        (M = i('div')),
        (L = i('p')),
        (_ = w('Strong')),
        (N = r()),
        (O = i('div')),
        (J = i('p')),
        (R = w('Very strong')),
        (q = r()),
        (U = i('div')),
        (W = i('p')),
        (Y = w('Gonaïves')),
        (B = r()),
        (F = i('div')),
        (Z = i('p')),
        (K = w('Caribbean')),
        (Q = r()),
        (X = i('p')),
        (aa = w('Sea')),
        (sa = r()),
        (na = i('div')),
        (ta = i('p')),
        (ea = w('HAITI')),
        (pa = r()),
        (oa = i('div')),
        (la = i('p')),
        (ca = w('Jeremie')),
        (ia = r()),
        (ra = i('div')),
        (ua = i('p')),
        (ga = w('Port-au-Prince')),
        (fa = r()),
        (da = i('div')),
        (ha = i('p')),
        (ka = w('Epicenter')),
        (va = r()),
        (ma = i('div')),
        (za = i('p')),
        (ya = w('Jacmel')),
        (xa = r()),
        (Ea = i('div')),
        (ba = i('p')),
        (Pa = w('Les Cayes')),
        ($a = r()),
        (wa = i('div')),
        (Aa = i('p')),
        (Ia = w('50 mi')),
        (Da = r()),
        (Ta = i('div')),
        (Va = i('p')),
        (Ca = w('Dominican')),
        (Sa = r()),
        (ja = i('p')),
        (Ga = w('Republic')),
        (Ha = r()),
        (Ma = i('div')),
        (La = i('p')),
        (_a = w('50 km')),
        this.h();
    },
    l(a) {
      s = g(a, 'DIV', { id: !0, class: !0, style: !0 });
      var p = f(s);
      (n = g(p, 'DIV', { style: !0 })),
        f(n).forEach(k),
        (t = d(p)),
        (e = g(p, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        f(e).forEach(k),
        (o = d(p)),
        (l = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var i = f(l);
      c = g(i, 'P', { class: !0 });
      var r = f(c);
      (u = A(r, 'Shake intensity')),
        r.forEach(k),
        i.forEach(k),
        (h = d(p)),
        (y = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var v = f(y);
      x = g(v, 'P', { class: !0 });
      var m = f(x);
      (E = A(m, 'Light')),
        m.forEach(k),
        v.forEach(k),
        (b = d(p)),
        (P = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var z = f(P);
      $ = g(z, 'P', { class: !0 });
      var w = f($);
      (T = A(w, 'Moderate')),
        w.forEach(k),
        z.forEach(k),
        (V = d(p)),
        (C = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var I = f(C);
      S = g(I, 'P', { class: !0 });
      var D = f(S);
      (j = A(D, 'Cap-Haitien')),
        D.forEach(k),
        I.forEach(k),
        (G = d(p)),
        (M = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var H = f(M);
      L = g(H, 'P', { class: !0 });
      var Na = f(L);
      (_ = A(Na, 'Strong')),
        Na.forEach(k),
        H.forEach(k),
        (N = d(p)),
        (O = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Oa = f(O);
      J = g(Oa, 'P', { class: !0 });
      var Ja = f(J);
      (R = A(Ja, 'Very strong')),
        Ja.forEach(k),
        Oa.forEach(k),
        (q = d(p)),
        (U = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ra = f(U);
      W = g(Ra, 'P', { class: !0 });
      var qa = f(W);
      (Y = A(qa, 'Gonaïves')),
        qa.forEach(k),
        Ra.forEach(k),
        (B = d(p)),
        (F = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ua = f(F);
      Z = g(Ua, 'P', { class: !0 });
      var Wa = f(Z);
      (K = A(Wa, 'Caribbean')),
        Wa.forEach(k),
        (Q = d(Ua)),
        (X = g(Ua, 'P', { class: !0 }));
      var Ya = f(X);
      (aa = A(Ya, 'Sea')),
        Ya.forEach(k),
        Ua.forEach(k),
        (sa = d(p)),
        (na = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ba = f(na);
      ta = g(Ba, 'P', { class: !0 });
      var Fa = f(ta);
      (ea = A(Fa, 'HAITI')),
        Fa.forEach(k),
        Ba.forEach(k),
        (pa = d(p)),
        (oa = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Za = f(oa);
      la = g(Za, 'P', { class: !0 });
      var Ka = f(la);
      (ca = A(Ka, 'Jeremie')),
        Ka.forEach(k),
        Za.forEach(k),
        (ia = d(p)),
        (ra = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qa = f(ra);
      ua = g(Qa, 'P', { class: !0 });
      var Xa = f(ua);
      (ga = A(Xa, 'Port-au-Prince')),
        Xa.forEach(k),
        Qa.forEach(k),
        (fa = d(p)),
        (da = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var as = f(da);
      ha = g(as, 'P', { class: !0 });
      var ss = f(ha);
      (ka = A(ss, 'Epicenter')),
        ss.forEach(k),
        as.forEach(k),
        (va = d(p)),
        (ma = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var ns = f(ma);
      za = g(ns, 'P', { class: !0 });
      var ts = f(za);
      (ya = A(ts, 'Jacmel')),
        ts.forEach(k),
        ns.forEach(k),
        (xa = d(p)),
        (Ea = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var es = f(Ea);
      ba = g(es, 'P', { class: !0 });
      var ps = f(ba);
      (Pa = A(ps, 'Les Cayes')),
        ps.forEach(k),
        es.forEach(k),
        ($a = d(p)),
        (wa = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var os = f(wa);
      Aa = g(os, 'P', { class: !0 });
      var ls = f(Aa);
      (Ia = A(ls, '50 mi')),
        ls.forEach(k),
        os.forEach(k),
        (Da = d(p)),
        (Ta = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var cs = f(Ta);
      Va = g(cs, 'P', { class: !0 });
      var is = f(Va);
      (Ca = A(is, 'Dominican')),
        is.forEach(k),
        (Sa = d(cs)),
        (ja = g(cs, 'P', { class: !0 }));
      var rs = f(ja);
      (Ga = A(rs, 'Republic')),
        rs.forEach(k),
        cs.forEach(k),
        (Ha = d(p)),
        (Ma = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var us = f(Ma);
      La = g(us, 'P', { class: !0 });
      var gs = f(La);
      (_a = A(gs, '50 km')),
        gs.forEach(k),
        us.forEach(k),
        p.forEach(k),
        this.h();
    },
    h() {
      I(n, 'padding', '0 0 91.7004% 0'),
        v(e, 'id', 'g-_ai-chart-xs-img'),
        v(e, 'class', 'g-aiImg svelte-zofauz'),
        v(e, 'alt', ''),
        v(
          e,
          'style',
          (p = `background-image: url(${H}/images/graphics/ai-chart-xs.png);`)
        ),
        v(c, 'class', 'g-pstyle0 svelte-zofauz'),
        v(l, 'id', 'g-ai0-1'),
        v(l, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(l, 'top', '3.216%'),
        I(l, 'margin-top', '-7.7px'),
        I(l, 'left', '0.5952%'),
        I(l, 'width', '99px'),
        v(x, 'class', 'g-pstyle0 svelte-zofauz'),
        v(y, 'id', 'g-ai0-2'),
        v(y, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        I(y, 'top', '9.8251%'),
        I(y, 'margin-top', '-7.7px'),
        I(y, 'left', '4.9821%'),
        I(y, 'width', '47px'),
        v($, 'class', 'g-pstyle0 svelte-zofauz'),
        v(P, 'id', 'g-ai0-3'),
        v(P, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        I(P, 'top', '15.7733%'),
        I(P, 'margin-top', '-7.7px'),
        I(P, 'left', '4.9821%'),
        I(P, 'width', '69px'),
        v(S, 'class', 'g-pstyle0 svelte-zofauz'),
        v(C, 'id', 'g-ai0-4'),
        v(C, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(C, 'top', '16.4343%'),
        I(C, 'margin-top', '-7.7px'),
        I(C, 'left', '79.0675%'),
        I(C, 'width', '82px'),
        v(L, 'class', 'g-pstyle0 svelte-zofauz'),
        v(M, 'id', 'g-ai0-5'),
        v(M, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        I(M, 'top', '21.7216%'),
        I(M, 'margin-top', '-7.7px'),
        I(M, 'left', '4.9821%'),
        I(M, 'width', '55px'),
        v(J, 'class', 'g-pstyle0 svelte-zofauz'),
        v(O, 'id', 'g-ai0-6'),
        v(O, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        I(O, 'top', '28.0002%'),
        I(O, 'margin-top', '-7.7px'),
        I(O, 'left', '4.9821%'),
        I(O, 'width', '78px'),
        v(W, 'class', 'g-pstyle0 svelte-zofauz'),
        v(U, 'id', 'g-ai0-7'),
        v(U, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(U, 'top', '28.9916%'),
        I(U, 'margin-top', '-7.7px'),
        I(U, 'left', '62.2348%'),
        I(U, 'width', '68px'),
        v(Z, 'class', 'g-pstyle1 svelte-zofauz'),
        v(X, 'class', 'g-pstyle1 svelte-zofauz'),
        v(F, 'id', 'g-ai0-8'),
        v(F, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(F, 'top', '39.9449%'),
        I(F, 'margin-top', '-14.9px'),
        I(F, 'left', '28.714%'),
        I(F, 'margin-left', '-36.5px'),
        I(F, 'width', '73px'),
        v(ta, 'class', 'g-pstyle2 svelte-zofauz'),
        v(na, 'id', 'g-ai0-9'),
        v(na, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(na, 'top', '42.6579%'),
        I(na, 'margin-top', '-10.1px'),
        I(na, 'left', '68.5061%'),
        I(na, 'width', '77px'),
        v(la, 'class', 'g-pstyle0 svelte-zofauz'),
        v(oa, 'id', 'g-ai0-10'),
        v(oa, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(oa, 'top', '59.0632%'),
        I(oa, 'margin-top', '-7.7px'),
        I(oa, 'left', '11.2526%'),
        I(oa, 'width', '63px'),
        v(ua, 'class', 'g-pstyle3 svelte-zofauz'),
        v(ra, 'id', 'g-ai0-11'),
        v(ra, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(ra, 'top', '61.1155%'),
        I(ra, 'margin-top', '-8.9px'),
        I(ra, 'left', '70.5455%'),
        I(ra, 'width', '106px'),
        v(ha, 'class', 'g-pstyle3 svelte-zofauz'),
        v(da, 'id', 'g-ai0-12'),
        v(da, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(da, 'top', '62.1069%'),
        I(da, 'margin-top', '-8.9px'),
        I(da, 'left', '32.6015%'),
        I(da, 'width', '77px'),
        v(za, 'class', 'g-pstyle0 svelte-zofauz'),
        v(ma, 'id', 'g-ai0-13'),
        v(ma, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(ma, 'top', '78.8906%'),
        I(ma, 'margin-top', '-7.7px'),
        I(ma, 'left', '63.9138%'),
        I(ma, 'width', '58px'),
        v(ba, 'class', 'g-pstyle0 svelte-zofauz'),
        v(Ea, 'id', 'g-ai0-14'),
        v(Ea, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(Ea, 'top', '80.2124%'),
        I(Ea, 'margin-top', '-7.7px'),
        I(Ea, 'left', '22.5649%'),
        I(Ea, 'width', '71px'),
        v(Aa, 'class', 'g-pstyle0 svelte-zofauz'),
        v(wa, 'id', 'g-ai0-15'),
        v(wa, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(wa, 'top', '87.8129%'),
        I(wa, 'margin-top', '-7.7px'),
        I(wa, 'left', '0.6179%'),
        I(wa, 'width', '49px'),
        v(Va, 'class', 'g-pstyle4 svelte-zofauz'),
        v(ja, 'class', 'g-pstyle4 svelte-zofauz'),
        v(Ta, 'id', 'g-ai0-16'),
        v(Ta, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(Ta, 'top', '91.0202%'),
        I(Ta, 'margin-top', '-11.4px'),
        I(Ta, 'right', '10.4418%'),
        I(Ta, 'width', '70px'),
        v(La, 'class', 'g-pstyle0 svelte-zofauz'),
        v(Ma, 'id', 'g-ai0-17'),
        v(Ma, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(Ma, 'top', '93.7611%'),
        I(Ma, 'margin-top', '-7.7px'),
        I(Ma, 'left', '0.6179%'),
        I(Ma, 'width', '52px'),
        v(s, 'id', 'g-_ai-chart-xs'),
        v(s, 'class', 'g-artboard svelte-zofauz'),
        v(s, 'style', '');
    },
    m(a, p) {
      m(a, s, p),
        z(s, n),
        z(s, t),
        z(s, e),
        z(s, o),
        z(s, l),
        z(l, c),
        z(c, u),
        z(s, h),
        z(s, y),
        z(y, x),
        z(x, E),
        z(s, b),
        z(s, P),
        z(P, $),
        z($, T),
        z(s, V),
        z(s, C),
        z(C, S),
        z(S, j),
        z(s, G),
        z(s, M),
        z(M, L),
        z(L, _),
        z(s, N),
        z(s, O),
        z(O, J),
        z(J, R),
        z(s, q),
        z(s, U),
        z(U, W),
        z(W, Y),
        z(s, B),
        z(s, F),
        z(F, Z),
        z(Z, K),
        z(F, Q),
        z(F, X),
        z(X, aa),
        z(s, sa),
        z(s, na),
        z(na, ta),
        z(ta, ea),
        z(s, pa),
        z(s, oa),
        z(oa, la),
        z(la, ca),
        z(s, ia),
        z(s, ra),
        z(ra, ua),
        z(ua, ga),
        z(s, fa),
        z(s, da),
        z(da, ha),
        z(ha, ka),
        z(s, va),
        z(s, ma),
        z(ma, za),
        z(za, ya),
        z(s, xa),
        z(s, Ea),
        z(Ea, ba),
        z(ba, Pa),
        z(s, $a),
        z(s, wa),
        z(wa, Aa),
        z(Aa, Ia),
        z(s, Da),
        z(s, Ta),
        z(Ta, Va),
        z(Va, Ca),
        z(Ta, Sa),
        z(Ta, ja),
        z(ja, Ga),
        z(s, Ha),
        z(s, Ma),
        z(Ma, La),
        z(La, _a);
    },
    p: D,
    d(a) {
      a && k(s);
    },
  };
}
function Y(a) {
  let s,
    n,
    t,
    e,
    p,
    o,
    l,
    c,
    u,
    h,
    y,
    x,
    E,
    b,
    P,
    $,
    T,
    V,
    C,
    S,
    j,
    G,
    M,
    L,
    _,
    N,
    O,
    J,
    R,
    q,
    U,
    W,
    Y,
    B,
    F,
    Z,
    K,
    Q,
    X,
    aa,
    sa,
    na,
    ta,
    ea,
    pa,
    oa,
    la,
    ca,
    ia,
    ra,
    ua,
    ga,
    fa,
    da,
    ha,
    ka,
    va,
    ma,
    za,
    ya,
    xa,
    Ea,
    ba,
    Pa,
    $a,
    wa,
    Aa,
    Ia,
    Da,
    Ta,
    Va,
    Ca,
    Sa,
    ja,
    Ga,
    Ha,
    Ma,
    La,
    _a;
  return {
    c() {
      (s = i('div')),
        (n = i('div')),
        (t = r()),
        (e = i('div')),
        (o = r()),
        (l = i('div')),
        (c = i('p')),
        (u = w('Shake intensity')),
        (h = r()),
        (y = i('div')),
        (x = i('p')),
        (E = w('Light')),
        (b = r()),
        (P = i('div')),
        ($ = i('p')),
        (T = w('Moderate')),
        (V = r()),
        (C = i('div')),
        (S = i('p')),
        (j = w('Cap-Haitien')),
        (G = r()),
        (M = i('div')),
        (L = i('p')),
        (_ = w('Strong')),
        (N = r()),
        (O = i('div')),
        (J = i('p')),
        (R = w('Very strong')),
        (q = r()),
        (U = i('div')),
        (W = i('p')),
        (Y = w('Gonaïves')),
        (B = r()),
        (F = i('div')),
        (Z = i('p')),
        (K = w('Caribbean')),
        (Q = r()),
        (X = i('p')),
        (aa = w('Sea')),
        (sa = r()),
        (na = i('div')),
        (ta = i('p')),
        (ea = w('HAITI')),
        (pa = r()),
        (oa = i('div')),
        (la = i('p')),
        (ca = w('Jeremie')),
        (ia = r()),
        (ra = i('div')),
        (ua = i('p')),
        (ga = w('Port-au-Prince')),
        (fa = r()),
        (da = i('div')),
        (ha = i('p')),
        (ka = w('Epicenter')),
        (va = r()),
        (ma = i('div')),
        (za = i('p')),
        (ya = w('Dominican')),
        (xa = r()),
        (Ea = i('p')),
        (ba = w('Republic')),
        (Pa = r()),
        ($a = i('div')),
        (wa = i('p')),
        (Aa = w('Jacmel')),
        (Ia = r()),
        (Da = i('div')),
        (Ta = i('p')),
        (Va = w('Les Cayes')),
        (Ca = r()),
        (Sa = i('div')),
        (ja = i('p')),
        (Ga = w('50 mi')),
        (Ha = r()),
        (Ma = i('div')),
        (La = i('p')),
        (_a = w('50 km')),
        this.h();
    },
    l(a) {
      s = g(a, 'DIV', { id: !0, class: !0, style: !0 });
      var p = f(s);
      (n = g(p, 'DIV', { style: !0 })),
        f(n).forEach(k),
        (t = d(p)),
        (e = g(p, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        f(e).forEach(k),
        (o = d(p)),
        (l = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var i = f(l);
      c = g(i, 'P', { class: !0 });
      var r = f(c);
      (u = A(r, 'Shake intensity')),
        r.forEach(k),
        i.forEach(k),
        (h = d(p)),
        (y = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var v = f(y);
      x = g(v, 'P', { class: !0 });
      var m = f(x);
      (E = A(m, 'Light')),
        m.forEach(k),
        v.forEach(k),
        (b = d(p)),
        (P = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var z = f(P);
      $ = g(z, 'P', { class: !0 });
      var w = f($);
      (T = A(w, 'Moderate')),
        w.forEach(k),
        z.forEach(k),
        (V = d(p)),
        (C = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var I = f(C);
      S = g(I, 'P', { class: !0 });
      var D = f(S);
      (j = A(D, 'Cap-Haitien')),
        D.forEach(k),
        I.forEach(k),
        (G = d(p)),
        (M = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var H = f(M);
      L = g(H, 'P', { class: !0 });
      var Na = f(L);
      (_ = A(Na, 'Strong')),
        Na.forEach(k),
        H.forEach(k),
        (N = d(p)),
        (O = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Oa = f(O);
      J = g(Oa, 'P', { class: !0 });
      var Ja = f(J);
      (R = A(Ja, 'Very strong')),
        Ja.forEach(k),
        Oa.forEach(k),
        (q = d(p)),
        (U = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ra = f(U);
      W = g(Ra, 'P', { class: !0 });
      var qa = f(W);
      (Y = A(qa, 'Gonaïves')),
        qa.forEach(k),
        Ra.forEach(k),
        (B = d(p)),
        (F = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ua = f(F);
      Z = g(Ua, 'P', { class: !0 });
      var Wa = f(Z);
      (K = A(Wa, 'Caribbean')),
        Wa.forEach(k),
        (Q = d(Ua)),
        (X = g(Ua, 'P', { class: !0 }));
      var Ya = f(X);
      (aa = A(Ya, 'Sea')),
        Ya.forEach(k),
        Ua.forEach(k),
        (sa = d(p)),
        (na = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ba = f(na);
      ta = g(Ba, 'P', { class: !0 });
      var Fa = f(ta);
      (ea = A(Fa, 'HAITI')),
        Fa.forEach(k),
        Ba.forEach(k),
        (pa = d(p)),
        (oa = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Za = f(oa);
      la = g(Za, 'P', { class: !0 });
      var Ka = f(la);
      (ca = A(Ka, 'Jeremie')),
        Ka.forEach(k),
        Za.forEach(k),
        (ia = d(p)),
        (ra = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qa = f(ra);
      ua = g(Qa, 'P', { class: !0 });
      var Xa = f(ua);
      (ga = A(Xa, 'Port-au-Prince')),
        Xa.forEach(k),
        Qa.forEach(k),
        (fa = d(p)),
        (da = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var as = f(da);
      ha = g(as, 'P', { class: !0 });
      var ss = f(ha);
      (ka = A(ss, 'Epicenter')),
        ss.forEach(k),
        as.forEach(k),
        (va = d(p)),
        (ma = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var ns = f(ma);
      za = g(ns, 'P', { class: !0 });
      var ts = f(za);
      (ya = A(ts, 'Dominican')),
        ts.forEach(k),
        (xa = d(ns)),
        (Ea = g(ns, 'P', { class: !0 }));
      var es = f(Ea);
      (ba = A(es, 'Republic')),
        es.forEach(k),
        ns.forEach(k),
        (Pa = d(p)),
        ($a = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var ps = f($a);
      wa = g(ps, 'P', { class: !0 });
      var os = f(wa);
      (Aa = A(os, 'Jacmel')),
        os.forEach(k),
        ps.forEach(k),
        (Ia = d(p)),
        (Da = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var ls = f(Da);
      Ta = g(ls, 'P', { class: !0 });
      var cs = f(Ta);
      (Va = A(cs, 'Les Cayes')),
        cs.forEach(k),
        ls.forEach(k),
        (Ca = d(p)),
        (Sa = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var is = f(Sa);
      ja = g(is, 'P', { class: !0 });
      var rs = f(ja);
      (Ga = A(rs, '50 mi')),
        rs.forEach(k),
        is.forEach(k),
        (Ha = d(p)),
        (Ma = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var us = f(Ma);
      La = g(us, 'P', { class: !0 });
      var gs = f(La);
      (_a = A(gs, '50 km')),
        gs.forEach(k),
        us.forEach(k),
        p.forEach(k),
        this.h();
    },
    h() {
      I(n, 'padding', '0 0 82.703% 0'),
        v(e, 'id', 'g-_ai-chart-sm-img'),
        v(e, 'class', 'g-aiImg svelte-zofauz'),
        v(e, 'alt', ''),
        v(
          e,
          'style',
          (p = `background-image: url(${H}/images/graphics/ai-chart-sm.png);`)
        ),
        v(c, 'class', 'g-pstyle0 svelte-zofauz'),
        v(l, 'id', 'g-ai1-1'),
        v(l, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(l, 'top', '3.8773%'),
        I(l, 'margin-top', '-9.4px'),
        I(l, 'left', '0.3278%'),
        I(l, 'width', '111px'),
        v(x, 'class', 'g-pstyle0 svelte-zofauz'),
        v(y, 'id', 'g-ai1-2'),
        v(y, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        I(y, 'top', '9.0933%'),
        I(y, 'margin-top', '-9.4px'),
        I(y, 'left', '3.0258%'),
        I(y, 'width', '52px'),
        v($, 'class', 'g-pstyle0 svelte-zofauz'),
        v(P, 'id', 'g-ai1-3'),
        v(P, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        I(P, 'top', '13.5979%'),
        I(P, 'margin-top', '-9.4px'),
        I(P, 'left', '3.0259%'),
        I(P, 'width', '77px'),
        v(S, 'class', 'g-pstyle0 svelte-zofauz'),
        v(C, 'id', 'g-ai1-4'),
        v(C, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(C, 'top', '16.6801%'),
        I(C, 'margin-top', '-9.4px'),
        I(C, 'left', '70.3255%'),
        I(C, 'width', '92px'),
        v(L, 'class', 'g-pstyle0 svelte-zofauz'),
        v(M, 'id', 'g-ai1-5'),
        v(M, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        I(M, 'top', '18.3397%'),
        I(M, 'margin-top', '-9.4px'),
        I(M, 'left', '3.0258%'),
        I(M, 'width', '61px'),
        v(J, 'class', 'g-pstyle0 svelte-zofauz'),
        v(O, 'id', 'g-ai1-6'),
        v(O, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        I(O, 'top', '22.6073%'),
        I(O, 'margin-top', '-9.4px'),
        I(O, 'left', '3.0258%'),
        I(O, 'width', '88px'),
        v(W, 'class', 'g-pstyle0 svelte-zofauz'),
        v(U, 'id', 'g-ai1-7'),
        v(U, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(U, 'top', '28.5344%'),
        I(U, 'margin-top', '-9.4px'),
        I(U, 'left', '55.9181%'),
        I(U, 'width', '76px'),
        v(Z, 'class', 'g-pstyle1 svelte-zofauz'),
        v(X, 'class', 'g-pstyle1 svelte-zofauz'),
        v(F, 'id', 'g-ai1-8'),
        v(F, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(F, 'top', '38.8091%'),
        I(F, 'margin-top', '-17.7px'),
        I(F, 'left', '27.2818%'),
        I(F, 'margin-left', '-41px'),
        I(F, 'width', '82px'),
        v(ta, 'class', 'g-pstyle2 svelte-zofauz'),
        v(na, 'id', 'g-ai1-9'),
        v(na, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(na, 'top', '39.9724%'),
        I(na, 'margin-top', '-8.6px'),
        I(na, 'left', '61.2858%'),
        I(na, 'width', '67px'),
        v(la, 'class', 'g-pstyle0 svelte-zofauz'),
        v(oa, 'id', 'g-ai1-10'),
        v(oa, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(oa, 'top', '56.985%'),
        I(oa, 'margin-top', '-9.4px'),
        I(oa, 'left', '12.2815%'),
        I(oa, 'width', '69px'),
        v(ua, 'class', 'g-pstyle3 svelte-zofauz'),
        v(ra, 'id', 'g-ai1-11'),
        v(ra, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(ra, 'top', '59.1569%'),
        I(ra, 'margin-top', '-9.5px'),
        I(ra, 'left', '63.0314%'),
        I(ra, 'width', '112px'),
        v(ha, 'class', 'g-pstyle3 svelte-zofauz'),
        v(da, 'id', 'g-ai1-12'),
        v(da, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(da, 'top', '60.1053%'),
        I(da, 'margin-top', '-9.5px'),
        I(da, 'left', '30.5543%'),
        I(da, 'width', '81px'),
        v(za, 'class', 'g-pstyle4 svelte-zofauz'),
        v(Ea, 'class', 'g-pstyle4 svelte-zofauz'),
        v(ma, 'id', 'g-ai1-13'),
        v(ma, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(ma, 'top', '62.7194%'),
        I(ma, 'margin-top', '-16.5px'),
        I(ma, 'left', '91.2282%'),
        I(ma, 'margin-left', '-57px'),
        I(ma, 'width', '114px'),
        v(wa, 'class', 'g-pstyle0 svelte-zofauz'),
        v($a, 'id', 'g-ai1-14'),
        v($a, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I($a, 'top', '75.4778%'),
        I($a, 'margin-top', '-9.4px'),
        I($a, 'left', '57.3552%'),
        I($a, 'width', '64px'),
        v(Ta, 'class', 'g-pstyle0 svelte-zofauz'),
        v(Da, 'id', 'g-ai1-15'),
        v(Da, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(Da, 'top', '76.6632%'),
        I(Da, 'margin-top', '-9.4px'),
        I(Da, 'left', '21.9639%'),
        I(Da, 'width', '79px'),
        v(ja, 'class', 'g-pstyle5 svelte-zofauz'),
        v(Sa, 'id', 'g-ai1-16'),
        v(Sa, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(Sa, 'top', '85.5251%'),
        I(Sa, 'margin-top', '-7.7px'),
        I(Sa, 'left', '0.1344%'),
        I(Sa, 'width', '49px'),
        v(La, 'class', 'g-pstyle5 svelte-zofauz'),
        v(Ma, 'id', 'g-ai1-17'),
        v(Ma, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(Ma, 'top', '90.0297%'),
        I(Ma, 'margin-top', '-7.7px'),
        I(Ma, 'left', '0.1344%'),
        I(Ma, 'width', '52px'),
        v(s, 'id', 'g-_ai-chart-sm'),
        v(s, 'class', 'g-artboard svelte-zofauz'),
        v(s, 'style', '');
    },
    m(a, p) {
      m(a, s, p),
        z(s, n),
        z(s, t),
        z(s, e),
        z(s, o),
        z(s, l),
        z(l, c),
        z(c, u),
        z(s, h),
        z(s, y),
        z(y, x),
        z(x, E),
        z(s, b),
        z(s, P),
        z(P, $),
        z($, T),
        z(s, V),
        z(s, C),
        z(C, S),
        z(S, j),
        z(s, G),
        z(s, M),
        z(M, L),
        z(L, _),
        z(s, N),
        z(s, O),
        z(O, J),
        z(J, R),
        z(s, q),
        z(s, U),
        z(U, W),
        z(W, Y),
        z(s, B),
        z(s, F),
        z(F, Z),
        z(Z, K),
        z(F, Q),
        z(F, X),
        z(X, aa),
        z(s, sa),
        z(s, na),
        z(na, ta),
        z(ta, ea),
        z(s, pa),
        z(s, oa),
        z(oa, la),
        z(la, ca),
        z(s, ia),
        z(s, ra),
        z(ra, ua),
        z(ua, ga),
        z(s, fa),
        z(s, da),
        z(da, ha),
        z(ha, ka),
        z(s, va),
        z(s, ma),
        z(ma, za),
        z(za, ya),
        z(ma, xa),
        z(ma, Ea),
        z(Ea, ba),
        z(s, Pa),
        z(s, $a),
        z($a, wa),
        z(wa, Aa),
        z(s, Ia),
        z(s, Da),
        z(Da, Ta),
        z(Ta, Va),
        z(s, Ca),
        z(s, Sa),
        z(Sa, ja),
        z(ja, Ga),
        z(s, Ha),
        z(s, Ma),
        z(Ma, La),
        z(La, _a);
    },
    p: D,
    d(a) {
      a && k(s);
    },
  };
}
function B(a) {
  let s,
    n,
    t,
    e,
    p,
    o,
    l,
    c,
    u,
    h,
    y,
    x,
    E,
    b,
    P,
    $,
    T,
    V,
    C,
    S,
    j,
    G,
    M,
    L,
    _,
    N,
    O,
    J,
    R,
    q,
    U,
    W,
    Y,
    B,
    F,
    Z,
    K,
    Q,
    X,
    aa,
    sa,
    na,
    ta,
    ea,
    pa,
    oa,
    la,
    ca,
    ia,
    ra,
    ua,
    ga,
    fa,
    da,
    ha,
    ka,
    va,
    ma,
    za,
    ya,
    xa,
    Ea,
    ba,
    Pa,
    $a,
    wa,
    Aa,
    Ia,
    Da,
    Ta,
    Va,
    Ca,
    Sa,
    ja,
    Ga,
    Ha,
    Ma,
    La,
    _a;
  return {
    c() {
      (s = i('div')),
        (n = i('div')),
        (t = r()),
        (e = i('div')),
        (o = r()),
        (l = i('div')),
        (c = i('p')),
        (u = w('Shake intensity')),
        (h = r()),
        (y = i('div')),
        (x = i('p')),
        (E = w('Light')),
        (b = r()),
        (P = i('div')),
        ($ = i('p')),
        (T = w('Moderate')),
        (V = r()),
        (C = i('div')),
        (S = i('p')),
        (j = w('Cap-Haitien')),
        (G = r()),
        (M = i('div')),
        (L = i('p')),
        (_ = w('Strong')),
        (N = r()),
        (O = i('div')),
        (J = i('p')),
        (R = w('Very strong')),
        (q = r()),
        (U = i('div')),
        (W = i('p')),
        (Y = w('Gonaïves')),
        (B = r()),
        (F = i('div')),
        (Z = i('p')),
        (K = w('Caribbean')),
        (Q = r()),
        (X = i('p')),
        (aa = w('Sea')),
        (sa = r()),
        (na = i('div')),
        (ta = i('p')),
        (ea = w('HAITI')),
        (pa = r()),
        (oa = i('div')),
        (la = i('p')),
        (ca = w('Dominican')),
        (ia = r()),
        (ra = i('p')),
        (ua = w('Republic')),
        (ga = r()),
        (fa = i('div')),
        (da = i('p')),
        (ha = w('Jeremie')),
        (ka = r()),
        (va = i('div')),
        (ma = i('p')),
        (za = w('Epicenter')),
        (ya = r()),
        (xa = i('div')),
        (Ea = i('p')),
        (ba = w('Port-au-Prince')),
        (Pa = r()),
        ($a = i('div')),
        (wa = i('p')),
        (Aa = w('Jacmel')),
        (Ia = r()),
        (Da = i('div')),
        (Ta = i('p')),
        (Va = w('Les Cayes')),
        (Ca = r()),
        (Sa = i('div')),
        (ja = i('p')),
        (Ga = w('50 mi')),
        (Ha = r()),
        (Ma = i('div')),
        (La = i('p')),
        (_a = w('50 km')),
        this.h();
    },
    l(a) {
      s = g(a, 'DIV', { id: !0, class: !0, style: !0 });
      var p = f(s);
      (n = g(p, 'DIV', { style: !0 })),
        f(n).forEach(k),
        (t = d(p)),
        (e = g(p, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        f(e).forEach(k),
        (o = d(p)),
        (l = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var i = f(l);
      c = g(i, 'P', { class: !0 });
      var r = f(c);
      (u = A(r, 'Shake intensity')),
        r.forEach(k),
        i.forEach(k),
        (h = d(p)),
        (y = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var v = f(y);
      x = g(v, 'P', { class: !0 });
      var m = f(x);
      (E = A(m, 'Light')),
        m.forEach(k),
        v.forEach(k),
        (b = d(p)),
        (P = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var z = f(P);
      $ = g(z, 'P', { class: !0 });
      var w = f($);
      (T = A(w, 'Moderate')),
        w.forEach(k),
        z.forEach(k),
        (V = d(p)),
        (C = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var I = f(C);
      S = g(I, 'P', { class: !0 });
      var D = f(S);
      (j = A(D, 'Cap-Haitien')),
        D.forEach(k),
        I.forEach(k),
        (G = d(p)),
        (M = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var H = f(M);
      L = g(H, 'P', { class: !0 });
      var Na = f(L);
      (_ = A(Na, 'Strong')),
        Na.forEach(k),
        H.forEach(k),
        (N = d(p)),
        (O = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Oa = f(O);
      J = g(Oa, 'P', { class: !0 });
      var Ja = f(J);
      (R = A(Ja, 'Very strong')),
        Ja.forEach(k),
        Oa.forEach(k),
        (q = d(p)),
        (U = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ra = f(U);
      W = g(Ra, 'P', { class: !0 });
      var qa = f(W);
      (Y = A(qa, 'Gonaïves')),
        qa.forEach(k),
        Ra.forEach(k),
        (B = d(p)),
        (F = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ua = f(F);
      Z = g(Ua, 'P', { class: !0 });
      var Wa = f(Z);
      (K = A(Wa, 'Caribbean')),
        Wa.forEach(k),
        (Q = d(Ua)),
        (X = g(Ua, 'P', { class: !0 }));
      var Ya = f(X);
      (aa = A(Ya, 'Sea')),
        Ya.forEach(k),
        Ua.forEach(k),
        (sa = d(p)),
        (na = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ba = f(na);
      ta = g(Ba, 'P', { class: !0 });
      var Fa = f(ta);
      (ea = A(Fa, 'HAITI')),
        Fa.forEach(k),
        Ba.forEach(k),
        (pa = d(p)),
        (oa = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Za = f(oa);
      la = g(Za, 'P', { class: !0 });
      var Ka = f(la);
      (ca = A(Ka, 'Dominican')),
        Ka.forEach(k),
        (ia = d(Za)),
        (ra = g(Za, 'P', { class: !0 }));
      var Qa = f(ra);
      (ua = A(Qa, 'Republic')),
        Qa.forEach(k),
        Za.forEach(k),
        (ga = d(p)),
        (fa = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var Xa = f(fa);
      da = g(Xa, 'P', { class: !0 });
      var as = f(da);
      (ha = A(as, 'Jeremie')),
        as.forEach(k),
        Xa.forEach(k),
        (ka = d(p)),
        (va = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var ss = f(va);
      ma = g(ss, 'P', { class: !0 });
      var ns = f(ma);
      (za = A(ns, 'Epicenter')),
        ns.forEach(k),
        ss.forEach(k),
        (ya = d(p)),
        (xa = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var ts = f(xa);
      Ea = g(ts, 'P', { class: !0 });
      var es = f(Ea);
      (ba = A(es, 'Port-au-Prince')),
        es.forEach(k),
        ts.forEach(k),
        (Pa = d(p)),
        ($a = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var ps = f($a);
      wa = g(ps, 'P', { class: !0 });
      var os = f(wa);
      (Aa = A(os, 'Jacmel')),
        os.forEach(k),
        ps.forEach(k),
        (Ia = d(p)),
        (Da = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var ls = f(Da);
      Ta = g(ls, 'P', { class: !0 });
      var cs = f(Ta);
      (Va = A(cs, 'Les Cayes')),
        cs.forEach(k),
        ls.forEach(k),
        (Ca = d(p)),
        (Sa = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var is = f(Sa);
      ja = g(is, 'P', { class: !0 });
      var rs = f(ja);
      (Ga = A(rs, '50 mi')),
        rs.forEach(k),
        is.forEach(k),
        (Ha = d(p)),
        (Ma = g(p, 'DIV', { id: !0, class: !0, style: !0 }));
      var us = f(Ma);
      La = g(us, 'P', { class: !0 });
      var gs = f(La);
      (_a = A(gs, '50 km')),
        gs.forEach(k),
        us.forEach(k),
        p.forEach(k),
        this.h();
    },
    h() {
      I(n, 'padding', '0 0 79.6009% 0'),
        v(e, 'id', 'g-_ai-chart-md-img'),
        v(e, 'class', 'g-aiImg svelte-zofauz'),
        v(e, 'alt', ''),
        v(
          e,
          'style',
          (p = `background-image: url(${H}/images/graphics/ai-chart-md.png);`)
        ),
        v(c, 'class', 'g-pstyle0 svelte-zofauz'),
        v(l, 'id', 'g-ai2-1'),
        v(l, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(l, 'top', '2.3515%'),
        I(l, 'margin-top', '-9.4px'),
        I(l, 'left', '0.3608%'),
        I(l, 'width', '111px'),
        v(x, 'class', 'g-pstyle0 svelte-zofauz'),
        v(y, 'id', 'g-ai2-2'),
        v(y, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        I(y, 'top', '7.6811%'),
        I(y, 'margin-top', '-9.4px'),
        I(y, 'left', '2.6603%'),
        I(y, 'width', '52px'),
        v($, 'class', 'g-pstyle0 svelte-zofauz'),
        v(P, 'id', 'g-ai2-3'),
        v(P, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        I(P, 'top', '12.2494%'),
        I(P, 'margin-top', '-9.4px'),
        I(P, 'left', '2.6604%'),
        I(P, 'width', '77px'),
        v(S, 'class', 'g-pstyle0 svelte-zofauz'),
        v(C, 'id', 'g-ai2-4'),
        v(C, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(C, 'top', '15.4852%'),
        I(C, 'margin-top', '-9.4px'),
        I(C, 'left', '70.3606%'),
        I(C, 'width', '92px'),
        v(L, 'class', 'g-pstyle0 svelte-zofauz'),
        v(M, 'id', 'g-ai2-5'),
        v(M, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        I(M, 'top', '17.1983%'),
        I(M, 'margin-top', '-9.4px'),
        I(M, 'left', '2.6603%'),
        I(M, 'width', '61px'),
        v(J, 'class', 'g-pstyle0 svelte-zofauz'),
        v(O, 'id', 'g-ai2-6'),
        v(O, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        I(O, 'top', '21.7666%'),
        I(O, 'margin-top', '-9.4px'),
        I(O, 'left', '2.6603%'),
        I(O, 'width', '88px'),
        v(W, 'class', 'g-pstyle0 svelte-zofauz'),
        v(U, 'id', 'g-ai2-7'),
        v(U, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(U, 'top', '27.6672%'),
        I(U, 'margin-top', '-9.4px'),
        I(U, 'left', '55.993%'),
        I(U, 'width', '76px'),
        v(Z, 'class', 'g-pstyle1 svelte-zofauz'),
        v(X, 'class', 'g-pstyle1 svelte-zofauz'),
        v(F, 'id', 'g-ai2-8'),
        v(F, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(F, 'top', '38.0099%'),
        I(F, 'margin-top', '-17.7px'),
        I(F, 'left', '27.2388%'),
        I(F, 'margin-left', '-41px'),
        I(F, 'width', '82px'),
        v(ta, 'class', 'g-pstyle2 svelte-zofauz'),
        v(na, 'id', 'g-ai2-9'),
        v(na, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(na, 'top', '42.7626%'),
        I(na, 'margin-top', '-10.7px'),
        I(na, 'left', '62.8914%'),
        I(na, 'width', '80px'),
        v(la, 'class', 'g-pstyle3 svelte-zofauz'),
        v(ra, 'class', 'g-pstyle3 svelte-zofauz'),
        v(oa, 'id', 'g-ai2-10'),
        v(oa, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(oa, 'top', '50.0029%'),
        I(oa, 'margin-top', '-17.7px'),
        I(oa, 'left', '92.295%'),
        I(oa, 'margin-left', '-60.5px'),
        I(oa, 'width', '121px'),
        v(da, 'class', 'g-pstyle0 svelte-zofauz'),
        v(fa, 'id', 'g-ai2-11'),
        v(fa, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(fa, 'top', '57.3608%'),
        I(fa, 'margin-top', '-9.4px'),
        I(fa, 'left', '12.2815%'),
        I(fa, 'width', '69px'),
        v(ma, 'class', 'g-pstyle4 svelte-zofauz'),
        v(va, 'id', 'g-ai2-12'),
        v(va, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(va, 'top', '60.2742%'),
        I(va, 'margin-top', '-10.7px'),
        I(va, 'left', '30.6995%'),
        I(va, 'width', '89px'),
        v(Ea, 'class', 'g-pstyle4 svelte-zofauz'),
        v(xa, 'id', 'g-ai2-13'),
        v(xa, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(xa, 'top', '62.5583%'),
        I(xa, 'margin-top', '-10.7px'),
        I(xa, 'left', '66.3403%'),
        I(xa, 'width', '125px'),
        v(wa, 'class', 'g-pstyle0 svelte-zofauz'),
        v($a, 'id', 'g-ai2-14'),
        v($a, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I($a, 'top', '75.6338%'),
        I($a, 'margin-top', '-9.4px'),
        I($a, 'left', '57.8174%'),
        I($a, 'width', '64px'),
        v(Ta, 'class', 'g-pstyle0 svelte-zofauz'),
        v(Da, 'id', 'g-ai2-15'),
        v(Da, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(Da, 'top', '77.3469%'),
        I(Da, 'margin-top', '-9.4px'),
        I(Da, 'left', '22.5239%'),
        I(Da, 'width', '79px'),
        v(ja, 'class', 'g-pstyle5 svelte-zofauz'),
        v(Sa, 'id', 'g-ai2-16'),
        v(Sa, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(Sa, 'top', '86.936%'),
        I(Sa, 'margin-top', '-7.7px'),
        I(Sa, 'left', '0.1678%'),
        I(Sa, 'width', '49px'),
        v(La, 'class', 'g-pstyle5 svelte-zofauz'),
        v(Ma, 'id', 'g-ai2-17'),
        v(Ma, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        I(Ma, 'top', '91.5043%'),
        I(Ma, 'margin-top', '-7.7px'),
        I(Ma, 'left', '0.1678%'),
        I(Ma, 'width', '52px'),
        v(s, 'id', 'g-_ai-chart-md'),
        v(s, 'class', 'g-artboard svelte-zofauz'),
        v(s, 'style', '');
    },
    m(a, p) {
      m(a, s, p),
        z(s, n),
        z(s, t),
        z(s, e),
        z(s, o),
        z(s, l),
        z(l, c),
        z(c, u),
        z(s, h),
        z(s, y),
        z(y, x),
        z(x, E),
        z(s, b),
        z(s, P),
        z(P, $),
        z($, T),
        z(s, V),
        z(s, C),
        z(C, S),
        z(S, j),
        z(s, G),
        z(s, M),
        z(M, L),
        z(L, _),
        z(s, N),
        z(s, O),
        z(O, J),
        z(J, R),
        z(s, q),
        z(s, U),
        z(U, W),
        z(W, Y),
        z(s, B),
        z(s, F),
        z(F, Z),
        z(Z, K),
        z(F, Q),
        z(F, X),
        z(X, aa),
        z(s, sa),
        z(s, na),
        z(na, ta),
        z(ta, ea),
        z(s, pa),
        z(s, oa),
        z(oa, la),
        z(la, ca),
        z(oa, ia),
        z(oa, ra),
        z(ra, ua),
        z(s, ga),
        z(s, fa),
        z(fa, da),
        z(da, ha),
        z(s, ka),
        z(s, va),
        z(va, ma),
        z(ma, za),
        z(s, ya),
        z(s, xa),
        z(xa, Ea),
        z(Ea, ba),
        z(s, Pa),
        z(s, $a),
        z($a, wa),
        z(wa, Aa),
        z(s, Ia),
        z(s, Da),
        z(Da, Ta),
        z(Ta, Va),
        z(s, Ca),
        z(s, Sa),
        z(Sa, ja),
        z(ja, Ga),
        z(s, Ha),
        z(s, Ma),
        z(Ma, La),
        z(La, _a);
    },
    p: D,
    d(a) {
      a && k(s);
    },
  };
}
function F(a) {
  let s,
    n,
    t,
    e,
    p = a[0] && a[0] >= 0 && a[0] < 510 && W(),
    o = a[0] && a[0] >= 510 && a[0] < 660 && Y(),
    l = a[0] && a[0] >= 660 && B();
  return {
    c() {
      (s = i('div')),
        p && p.c(),
        (n = r()),
        o && o.c(),
        (t = r()),
        l && l.c(),
        this.h();
    },
    l(a) {
      s = g(a, 'DIV', { id: !0, class: !0 });
      var e = f(s);
      p && p.l(e),
        (n = d(e)),
        o && o.l(e),
        (t = d(e)),
        l && l.l(e),
        e.forEach(k),
        this.h();
    },
    h() {
      v(s, 'id', 'g-_ai-chart-box'),
        v(s, 'class', 'svelte-zofauz'),
        T(() => a[1].call(s));
    },
    m(c, i) {
      m(c, s, i),
        p && p.m(s, null),
        z(s, n),
        o && o.m(s, null),
        z(s, t),
        l && l.m(s, null),
        (e = V(s, a[1].bind(s)));
    },
    p(a, [e]) {
      a[0] && a[0] >= 0 && a[0] < 510
        ? p
          ? p.p(a, e)
          : ((p = W()), p.c(), p.m(s, n))
        : p && (p.d(1), (p = null)),
        a[0] && a[0] >= 510 && a[0] < 660
          ? o
            ? o.p(a, e)
            : ((o = Y()), o.c(), o.m(s, t))
          : o && (o.d(1), (o = null)),
        a[0] && a[0] >= 660
          ? l
            ? l.p(a, e)
            : ((l = B()), l.c(), l.m(s, null))
          : l && (l.d(1), (l = null));
    },
    i: D,
    o: D,
    d(a) {
      a && k(s), p && p.d(), o && o.d(), l && l.d(), e();
    },
  };
}
function Z(a, s, n) {
  let t = null;
  return [
    t,
    function () {
      (t = this.clientWidth), n(0, t);
    },
  ];
}
class K extends s {
  constructor(a) {
    super(), n(this, a, Z, F, t, {});
  }
}
var Q = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: K,
});
function X(a) {
  let s, n;
  return (
    (s = new U({ props: { AiGraphic: K } })),
    {
      c() {
        u(s.$$.fragment);
      },
      l(a) {
        h(s.$$.fragment, a);
      },
      m(a, t) {
        y(s, a, t), (n = !0);
      },
      p: D,
      i(a) {
        n || (l(s.$$.fragment, a), (n = !0));
      },
      o(a) {
        c(s.$$.fragment, a), (n = !1);
      },
      d(a) {
        b(s, a);
      },
    }
  );
}
function aa(a) {
  let s, n;
  return (
    (s = new U({ props: { AiGraphic: K, size: 'wide' } })),
    {
      c() {
        u(s.$$.fragment);
      },
      l(a) {
        h(s.$$.fragment, a);
      },
      m(a, t) {
        y(s, a, t), (n = !0);
      },
      p: D,
      i(a) {
        n || (l(s.$$.fragment, a), (n = !0));
      },
      o(a) {
        c(s.$$.fragment, a), (n = !1);
      },
      d(a) {
        b(s, a);
      },
    }
  );
}
function sa(a) {
  let s, n, t, e, p, o;
  return {
    c() {
      (s = i('div')),
        (n = i('h4')),
        (t = w('Earthquake in Haiti')),
        (e = r()),
        (p = i('p')),
        (o = w('A 7.0 magnitude earthquake struck the island on Tuesday.')),
        this.h();
    },
    l(a) {
      s = g(a, 'DIV', { slot: !0, class: !0 });
      var l = f(s);
      n = g(l, 'H4', { class: !0 });
      var c = f(n);
      (t = A(c, 'Earthquake in Haiti')),
        c.forEach(k),
        (e = d(l)),
        (p = g(l, 'P', {}));
      var i = f(p);
      (o = A(i, 'A 7.0 magnitude earthquake struck the island on Tuesday.')),
        i.forEach(k),
        l.forEach(k),
        this.h();
    },
    h() {
      v(n, 'class', 'svelte-xmoab3'),
        v(s, 'slot', 'title'),
        v(s, 'class', 'title svelte-xmoab3');
    },
    m(a, l) {
      m(a, s, l), z(s, n), z(n, t), z(s, e), z(s, p), z(p, o);
    },
    d(a) {
      a && k(s);
    },
  };
}
function na(a) {
  let s, n, t, e, p, o;
  return {
    c() {
      (s = i('aside')),
        (n = i('p')),
        (t = w('Note: Data current as of Wednesday.')),
        (e = r()),
        (p = i('p')),
        (o = w('Source: USGIS')),
        this.h();
    },
    l(a) {
      s = g(a, 'ASIDE', { slot: !0 });
      var l = f(s);
      n = g(l, 'P', { class: !0 });
      var c = f(n);
      (t = A(c, 'Note: Data current as of Wednesday.')),
        c.forEach(k),
        (e = d(l)),
        (p = g(l, 'P', { class: !0 }));
      var i = f(p);
      (o = A(i, 'Source: USGIS')), i.forEach(k), l.forEach(k), this.h();
    },
    h() {
      v(n, 'class', 'note'), v(p, 'class', 'source'), v(s, 'slot', 'notes');
    },
    m(a, l) {
      m(a, s, l), z(s, n), z(n, t), z(s, e), z(s, p), z(p, o);
    },
    d(a) {
      a && k(s);
    },
  };
}
function ta(a) {
  let s, n;
  return (
    (s = new U({
      props: {
        AiGraphic: K,
        id: 'ai-map',
        $$slots: { notes: [na], title: [sa] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        u(s.$$.fragment);
      },
      l(a) {
        h(s.$$.fragment, a);
      },
      m(a, t) {
        y(s, a, t), (n = !0);
      },
      p(a, n) {
        const t = {};
        4 & n && (t.$$scope = { dirty: n, ctx: a }), s.$set(t);
      },
      i(a) {
        n || (l(s.$$.fragment, a), (n = !0));
      },
      o(a) {
        c(s.$$.fragment, a), (n = !1);
      },
      d(a) {
        b(s, a);
      },
    }
  );
}
function ea(a) {
  return { c: D, l: D, m: D, p: D, i: D, o: D, d: D };
}
function pa(a) {
  let s, n;
  return (
    (s = new U({ props: { AiGraphic: a[1] } })),
    {
      c() {
        u(s.$$.fragment);
      },
      l(a) {
        h(s.$$.fragment, a);
      },
      m(a, t) {
        y(s, a, t), (n = !0);
      },
      p: D,
      i(a) {
        n || (l(s.$$.fragment, a), (n = !0));
      },
      o(a) {
        c(s.$$.fragment, a), (n = !1);
      },
      d(a) {
        b(s, a);
      },
    }
  );
}
function oa(a) {
  return { c: D, l: D, m: D, p: D, i: D, o: D, d: D };
}
function la(a) {
  let s,
    n,
    t = {
      ctx: a,
      current: null,
      token: null,
      hasCatch: !1,
      pending: oa,
      then: pa,
      catch: ea,
      value: 1,
      blocks: [, , ,],
    };
  return (
    C(a[0]('ai-chart'), t),
    {
      c() {
        (s = S()), t.block.c();
      },
      l(a) {
        (s = S()), t.block.l(a);
      },
      m(a, e) {
        m(a, s, e),
          t.block.m(a, (t.anchor = e)),
          (t.mount = () => s.parentNode),
          (t.anchor = s),
          (n = !0);
      },
      p(s, n) {
        j(t, (a = s), n);
      },
      i(a) {
        n || (l(t.block), (n = !0));
      },
      o(a) {
        for (let s = 0; s < 3; s += 1) {
          const a = t.blocks[s];
          c(a);
        }
        n = !1;
      },
      d(a) {
        a && k(s), t.block.d(a), (t.token = null), (t = null);
      },
    }
  );
}
function ca(a) {
  let s,
    n,
    t,
    e,
    p,
    o,
    x,
    E,
    P,
    $,
    I,
    D,
    T,
    V,
    C,
    S,
    j,
    H,
    M,
    L,
    _,
    N,
    O,
    J,
    R,
    q,
    U,
    W,
    Y,
    B,
    F,
    Z,
    K,
    Q,
    sa,
    na,
    ea,
    pa,
    oa,
    ca,
    ia,
    ua,
    ga,
    fa,
    da,
    ha,
    ka,
    va,
    ma,
    za,
    ya,
    xa,
    Ea,
    ba,
    Pa,
    $a,
    wa,
    Aa,
    Ia,
    Da,
    Ta,
    Va,
    Ca,
    Sa,
    ja;
  return (
    (T = new G({ props: { $$slots: { default: [X] }, $$scope: { ctx: a } } })),
    (K = new G({ props: { $$slots: { default: [aa] }, $$scope: { ctx: a } } })),
    (ia = new G({
      props: { $$slots: { default: [ta] }, $$scope: { ctx: a } },
    })),
    (Sa = new G({
      props: { $$slots: { default: [la] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        (s = i('section')),
          (n = i('h2')),
          (t = w(ra)),
          (e = r()),
          (p = i('p')),
          (o = w('Pass a component created by ')),
          (x = i('a')),
          (E = w('ai2svelte')),
          (P = w(
            ' to this component, which will wrap it in a graphics section tag.'
          )),
          ($ = r()),
          (I = i('pre')),
          (D = r()),
          u(T.$$.fragment),
          (V = r()),
          (C = i('section')),
          (S = i('p')),
          (j = w(
            'Adjust the size of the graphic by passing a class name corresponding to one of our well widths: '
          )),
          (H = i('code')),
          (M = w('wide')),
          (L = w(', ')),
          (_ = i('code')),
          (N = w('wider')),
          (O = w(', ')),
          (J = i('code')),
          (R = w('widest')),
          (q = w(' or ')),
          (U = i('code')),
          (W = w('fluid')),
          (Y = w('.')),
          (B = r()),
          (F = i('pre')),
          (Z = r()),
          u(K.$$.fragment),
          (Q = r()),
          (sa = i('section')),
          (na = i('p')),
          (ea = w('Add additional chart chatter through slots.')),
          (pa = r()),
          (oa = i('pre')),
          (ca = r()),
          u(ia.$$.fragment),
          (ua = r()),
          (ga = i('section')),
          (fa = i('p')),
          (da = w('You can use this component to layout AI graphics via an ')),
          (ha = i('a')),
          (ka = w('ArchieML')),
          (va = w(
            '-formatted Google doc by using the following pattern to dynamically import an ai2svelte component:'
          )),
          (ma = r()),
          (za = i('pre')),
          (ya = r()),
          (xa = i('pre')),
          (Ea = r()),
          (ba = i('section')),
          (Pa = i('p')),
          ($a = w('This comes with some restrictions, though. Be sure your ')),
          (wa = i('code')),
          (Aa = w('fetchComponent')),
          (Ia = w(' function follows ')),
          (Da = i('a')),
          (Ta = w('the limits on dynamic imports')),
          (Va = w('.')),
          (Ca = r()),
          u(Sa.$$.fragment),
          this.h();
      },
      l(a) {
        s = g(a, 'SECTION', {});
        var l = f(s);
        n = g(l, 'H2', {});
        var c = f(n);
        (t = A(c, ra)), c.forEach(k), (e = d(l)), (p = g(l, 'P', {}));
        var i = f(p);
        (o = A(i, 'Pass a component created by ')),
          (x = g(i, 'A', { href: !0, rel: !0 }));
        var r = f(x);
        (E = A(r, 'ai2svelte')),
          r.forEach(k),
          (P = A(
            i,
            ' to this component, which will wrap it in a graphics section tag.'
          )),
          i.forEach(k),
          l.forEach(k),
          ($ = d(a)),
          (I = g(a, 'PRE', { class: !0 })),
          f(I).forEach(k),
          (D = d(a)),
          h(T.$$.fragment, a),
          (V = d(a)),
          (C = g(a, 'SECTION', {}));
        var u = f(C);
        S = g(u, 'P', {});
        var v = f(S);
        (j = A(
          v,
          'Adjust the size of the graphic by passing a class name corresponding to one of our well widths: '
        )),
          (H = g(v, 'CODE', {}));
        var m = f(H);
        (M = A(m, 'wide')),
          m.forEach(k),
          (L = A(v, ', ')),
          (_ = g(v, 'CODE', {}));
        var z = f(_);
        (N = A(z, 'wider')),
          z.forEach(k),
          (O = A(v, ', ')),
          (J = g(v, 'CODE', {}));
        var y = f(J);
        (R = A(y, 'widest')),
          y.forEach(k),
          (q = A(v, ' or ')),
          (U = g(v, 'CODE', {}));
        var b = f(U);
        (W = A(b, 'fluid')),
          b.forEach(k),
          (Y = A(v, '.')),
          v.forEach(k),
          u.forEach(k),
          (B = d(a)),
          (F = g(a, 'PRE', { class: !0 })),
          f(F).forEach(k),
          (Z = d(a)),
          h(K.$$.fragment, a),
          (Q = d(a)),
          (sa = g(a, 'SECTION', {}));
        var w = f(sa);
        na = g(w, 'P', {});
        var G = f(na);
        (ea = A(G, 'Add additional chart chatter through slots.')),
          G.forEach(k),
          w.forEach(k),
          (pa = d(a)),
          (oa = g(a, 'PRE', { class: !0 })),
          f(oa).forEach(k),
          (ca = d(a)),
          h(ia.$$.fragment, a),
          (ua = d(a)),
          (ga = g(a, 'SECTION', {}));
        var X = f(ga);
        fa = g(X, 'P', {});
        var aa = f(fa);
        (da = A(
          aa,
          'You can use this component to layout AI graphics via an '
        )),
          (ha = g(aa, 'A', { href: !0, rel: !0 }));
        var ta = f(ha);
        (ka = A(ta, 'ArchieML')),
          ta.forEach(k),
          (va = A(
            aa,
            '-formatted Google doc by using the following pattern to dynamically import an ai2svelte component:'
          )),
          aa.forEach(k),
          X.forEach(k),
          (ma = d(a)),
          (za = g(a, 'PRE', { class: !0 })),
          f(za).forEach(k),
          (ya = d(a)),
          (xa = g(a, 'PRE', { class: !0 })),
          f(xa).forEach(k),
          (Ea = d(a)),
          (ba = g(a, 'SECTION', {}));
        var la = f(ba);
        Pa = g(la, 'P', {});
        var ja = f(Pa);
        ($a = A(
          ja,
          'This comes with some restrictions, though. Be sure your '
        )),
          (wa = g(ja, 'CODE', {}));
        var Ga = f(wa);
        (Aa = A(Ga, 'fetchComponent')),
          Ga.forEach(k),
          (Ia = A(ja, ' function follows ')),
          (Da = g(ja, 'A', { href: !0, rel: !0 }));
        var Ha = f(Da);
        (Ta = A(Ha, 'the limits on dynamic imports')),
          Ha.forEach(k),
          (Va = A(ja, '.')),
          ja.forEach(k),
          la.forEach(k),
          (Ca = d(a)),
          h(Sa.$$.fragment, a),
          this.h();
      },
      h() {
        v(x, 'href', 'https://github.com/reuters-graphics/ai2svelte'),
          v(x, 'rel', 'nofollow'),
          v(I, 'class', 'language-svelte'),
          v(F, 'class', 'language-svelte'),
          v(oa, 'class', 'language-svelte'),
          v(ha, 'href', 'http://archieml.org/'),
          v(ha, 'rel', 'nofollow'),
          v(za, 'class', 'language-bash'),
          v(xa, 'class', 'language-svelte'),
          v(
            Da,
            'href',
            'https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations'
          ),
          v(Da, 'rel', 'nofollow');
      },
      m(a, l) {
        m(a, s, l),
          z(s, n),
          z(n, t),
          z(s, e),
          z(s, p),
          z(p, o),
          z(p, x),
          z(x, E),
          z(p, P),
          m(a, $, l),
          m(a, I, l),
          (I.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> MyAiChart <span class="token keyword">from</span> <span class="token string">\'./some-chart.svelte\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span> <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>MyAiChart<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>'),
          m(a, D, l),
          y(T, a, l),
          m(a, V, l),
          m(a, C, l),
          z(C, S),
          z(S, j),
          z(S, H),
          z(H, M),
          z(S, L),
          z(S, _),
          z(_, N),
          z(S, O),
          z(S, J),
          z(J, R),
          z(S, q),
          z(S, U),
          z(U, W),
          z(S, Y),
          m(a, B, l),
          m(a, F, l),
          (F.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> MyAiChart <span class="token keyword">from</span> <span class="token string">\'./some-chart.svelte\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span> <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>MyAiChart<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wide<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>'),
          m(a, Z, l),
          y(K, a, l),
          m(a, Q, l),
          m(a, sa, l),
          z(sa, na),
          z(na, ea),
          m(a, pa, l),
          m(a, oa, l),
          (oa.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> MyAiChart <span class="token keyword">from</span> <span class="token string">\'./some-chart.svelte\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Add an ID and change the default width of your graphic --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span> <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>MyAiChart<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ai-map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- Add a title and/or notes with slots --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Earthquake in Haiti<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>A 7.0 magnitude earthquake struck the island on Tuesday.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>notes<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>note<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Note: Data current as of Wednesday.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>source<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Source: USGIS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Ai2svelte</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">// You can now style those elements!\n  h4</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> darkred<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>'),
          m(a, ca, l),
          y(ia, a, l),
          m(a, ua, l),
          m(a, ga, l),
          z(ga, fa),
          z(fa, da),
          z(fa, ha),
          z(ha, ka),
          z(fa, va),
          m(a, ma, l),
          m(a, za, l),
          (za.innerHTML =
            '<code class="language-bash"><span class="token comment"># In your Google doc...</span>\n<span class="token punctuation">[</span>blocks<span class="token punctuation">]</span>\n\n<span class="token comment"># ...</span>\nType: ai2svelte\nComponentName: my-chart\n\n<span class="token punctuation">[</span><span class="token punctuation">]</span></code>'),
          m(a, ya, l),
          m(a, xa, l),
          (xa.innerHTML =
            '<code class="language-svelte"><span class="token comment">&lt;!-- src/lib/Page.svelte --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> content <span class="token keyword">from</span> <span class="token string">\'$locales/en/content.json\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">fetchComponent</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">componentName</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">./ai2html/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>componentName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.svelte</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">content<span class="token punctuation">.</span>blocks </span><span class="token keyword">as</span> <span class="token language-javascript">block<span class="token punctuation">&#125;</span></span></span>\n  <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> block<span class="token punctuation">.</span>Type <span class="token operator">===</span> <span class="token string">\'ai2svelte\'</span><span class="token punctuation">&#125;</span></span>\n    <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">await</span> <span class="token function">fetchComponent</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>ComponentName<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>then component<span class="token punctuation">&#125;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span> <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>component<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span>\n    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>catch error<span class="token punctuation">&#125;</span></span>\n      <span class="token language-javascript"><span class="token punctuation">&#123;</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>\n        <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Error fetching component: ./ai2html/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>block<span class="token punctuation">.</span>ComponentName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.svelte</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>\n        error\n      <span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>\n    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">await</span><span class="token punctuation">&#125;</span></span>\n  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>\n<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span></code>'),
          m(a, Ea, l),
          m(a, ba, l),
          z(ba, Pa),
          z(Pa, $a),
          z(Pa, wa),
          z(wa, Aa),
          z(Pa, Ia),
          z(Pa, Da),
          z(Da, Ta),
          z(Pa, Va),
          m(a, Ca, l),
          y(Sa, a, l),
          (ja = !0);
      },
      p(a, [s]) {
        const n = {};
        4 & s && (n.$$scope = { dirty: s, ctx: a }), T.$set(n);
        const t = {};
        4 & s && (t.$$scope = { dirty: s, ctx: a }), K.$set(t);
        const e = {};
        4 & s && (e.$$scope = { dirty: s, ctx: a }), ia.$set(e);
        const p = {};
        4 & s && (p.$$scope = { dirty: s, ctx: a }), Sa.$set(p);
      },
      i(a) {
        ja ||
          (l(T.$$.fragment, a),
          l(K.$$.fragment, a),
          l(ia.$$.fragment, a),
          l(Sa.$$.fragment, a),
          (ja = !0));
      },
      o(a) {
        c(T.$$.fragment, a),
          c(K.$$.fragment, a),
          c(ia.$$.fragment, a),
          c(Sa.$$.fragment, a),
          (ja = !1);
      },
      d(a) {
        a && k(s),
          a && k($),
          a && k(I),
          a && k(D),
          b(T, a),
          a && k(V),
          a && k(C),
          a && k(B),
          a && k(F),
          a && k(Z),
          b(K, a),
          a && k(Q),
          a && k(sa),
          a && k(pa),
          a && k(oa),
          a && k(ca),
          b(ia, a),
          a && k(ua),
          a && k(ga),
          a && k(ma),
          a && k(za),
          a && k(ya),
          a && k(xa),
          a && k(Ea),
          a && k(ba),
          a && k(Ca),
          b(Sa, a);
      },
    }
  );
}
const ia = {
    title: 'Ai2svelte',
    description: 'A shortcut for ai2svelte graphics.',
    slug: 'ai2svelte',
  },
  { title: ra, description: ua, slug: ga } = ia;
function fa(s) {
  return [
    async (s) =>
      (
        await (function (s) {
          switch (s) {
            case './ai2html/ai-chart.exclude.svelte':
              return a(
                () =>
                  Promise.resolve().then(function () {
                    return Q;
                  }),
                void 0
              );
            default:
              return new Promise(function (a, n) {
                ('function' == typeof queueMicrotask
                  ? queueMicrotask
                  : setTimeout)(n.bind(null, new Error('Unknown variable dynamic import: ' + s)));
              });
          }
        })(`./ai2html/${s}.exclude.svelte`)
      ).default,
  ];
}
export default class extends s {
  constructor(a) {
    super(), n(this, a, fa, ca, t, {});
  }
}
export { ia as metadata };
