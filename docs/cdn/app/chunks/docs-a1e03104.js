import { _ as Qt } from './preload-helper-438f94a3.js';
import {
  S as Vt,
  i as Ct,
  s as St,
  E as Ht,
  F as Lt,
  G as Nt,
  x as _s,
  u as As,
  e as l,
  k,
  j as pt,
  c as o,
  a as p,
  n as h,
  m as rt,
  d as n,
  b as e,
  f as U,
  H as s,
  o as it,
  r as Mt,
  w as jt,
  v as ct,
  _ as Xt,
  D as Ot,
  t as g,
  g as v,
  $ as a,
  I as cs,
  a0 as Zt,
  a1 as sa,
  a2 as ta,
  l as Rt,
  a3 as aa,
} from './vendor-d23a7629.js';
import { D as It } from './index-ab2656dc.js';
import { a as Gt } from './paths-6758d194.js';
const ea = (y) => ({}),
  Jt = (y) => ({}),
  na = (y) => ({}),
  qt = (y) => ({});
function Ut(y) {
  let t;
  const f = y[6].title,
    i = Ot(f, y, y[5], qt);
  return {
    c() {
      i && i.c();
    },
    l(u) {
      i && i.l(u);
    },
    m(u, m) {
      i && i.m(u, m), (t = !0);
    },
    p(u, m) {
      i &&
        i.p &&
        (!t || m & 32) &&
        Ht(i, f, u, u[5], t ? Nt(f, u[5], m, na) : Lt(u[5]), qt);
    },
    i(u) {
      t || (_s(i, u), (t = !0));
    },
    o(u) {
      As(i, u), (t = !1);
    },
    d(u) {
      i && i.d(u);
    },
  };
}
function Wt(y) {
  let t;
  const f = y[6].notes,
    i = Ot(f, y, y[5], Jt);
  return {
    c() {
      i && i.c();
    },
    l(u) {
      i && i.l(u);
    },
    m(u, m) {
      i && i.m(u, m), (t = !0);
    },
    p(u, m) {
      i &&
        i.p &&
        (!t || m & 32) &&
        Ht(i, f, u, u[5], t ? Nt(f, u[5], m, ea) : Lt(u[5]), Jt);
    },
    i(u) {
      t || (_s(i, u), (t = !0));
    },
    o(u) {
      As(i, u), (t = !1);
    },
    d(u) {
      i && i.d(u);
    },
  };
}
function la(y) {
  let t,
    f,
    i,
    u,
    m,
    P,
    d = y[4].title && Ut(y);
  var _ = y[0];
  function $(z) {
    return { props: { onAiMounted: z[3] } };
  }
  _ && (i = new _($(y)));
  let E = y[4].notes && Wt(y);
  return {
    c() {
      (t = l('section')),
        d && d.c(),
        (f = k()),
        i && pt(i.$$.fragment),
        (u = k()),
        E && E.c(),
        this.h();
    },
    l(z) {
      t = o(z, 'SECTION', { class: !0, id: !0 });
      var T = p(t);
      d && d.l(T),
        (f = h(T)),
        i && rt(i.$$.fragment, T),
        (u = h(T)),
        E && E.l(T),
        T.forEach(n),
        this.h();
    },
    h() {
      e(t, 'class', (m = 'ai2svelte-container graphic ' + y[2])),
        e(t, 'id', y[1]);
    },
    m(z, T) {
      U(z, t, T),
        d && d.m(t, null),
        s(t, f),
        i && it(i, t, null),
        s(t, u),
        E && E.m(t, null),
        (P = !0);
    },
    p(z, [T]) {
      z[4].title
        ? d
          ? (d.p(z, T), T & 16 && _s(d, 1))
          : ((d = Ut(z)), d.c(), _s(d, 1), d.m(t, f))
        : d &&
          (Mt(),
          As(d, 1, 1, () => {
            d = null;
          }),
          jt());
      const vs = {};
      if ((T & 8 && (vs.onAiMounted = z[3]), _ !== (_ = z[0]))) {
        if (i) {
          Mt();
          const os = i;
          As(os.$$.fragment, 1, 0, () => {
            ct(os, 1);
          }),
            jt();
        }
        _
          ? ((i = new _($(z))),
            pt(i.$$.fragment),
            _s(i.$$.fragment, 1),
            it(i, t, u))
          : (i = null);
      } else _ && i.$set(vs);
      z[4].notes
        ? E
          ? (E.p(z, T), T & 16 && _s(E, 1))
          : ((E = Wt(z)), E.c(), _s(E, 1), E.m(t, null))
        : E &&
          (Mt(),
          As(E, 1, 1, () => {
            E = null;
          }),
          jt()),
        (!P || (T & 4 && m !== (m = 'ai2svelte-container graphic ' + z[2]))) &&
          e(t, 'class', m),
        (!P || T & 2) && e(t, 'id', z[1]);
    },
    i(z) {
      P || (_s(d), i && _s(i.$$.fragment, z), _s(E), (P = !0));
    },
    o(z) {
      As(d), i && As(i.$$.fragment, z), As(E), (P = !1);
    },
    d(z) {
      z && n(t), d && d.d(), i && ct(i), E && E.d();
    },
  };
}
function oa(y, t, f) {
  let { $$slots: i = {}, $$scope: u } = t;
  const m = Xt(i);
  let { AiGraphic: P } = t,
    { id: d = '' } = t,
    { size: _ = 'normal' } = t,
    { onAiMounted: $ = () => {} } = t;
  return (
    (y.$$set = (E) => {
      'AiGraphic' in E && f(0, (P = E.AiGraphic)),
        'id' in E && f(1, (d = E.id)),
        'size' in E && f(2, (_ = E.size)),
        'onAiMounted' in E && f(3, ($ = E.onAiMounted)),
        '$$scope' in E && f(5, (u = E.$$scope));
    }),
    [P, d, _, $, m, u, i]
  );
}
class Dt extends Vt {
  constructor(t) {
    super();
    Ct(this, t, oa, la, St, { AiGraphic: 0, id: 1, size: 2, onAiMounted: 3 });
  }
}
function Yt(y) {
  let t,
    f,
    i,
    u,
    m,
    P,
    d,
    _,
    $,
    E,
    z,
    T,
    vs,
    os,
    I,
    K,
    Z,
    Ss,
    A,
    as,
    Ms,
    bs,
    V,
    es,
    ws,
    js,
    C,
    X,
    Gs,
    Hs,
    D,
    Y,
    qs,
    $s,
    b,
    ss,
    zs,
    Ps,
    ns,
    Is,
    ks,
    j,
    ts,
    fs,
    Ds,
    x,
    B,
    Ls,
    hs,
    L,
    rs,
    Ts,
    Q,
    O,
    is,
    ms,
    us,
    S,
    ls,
    ds,
    ps,
    J,
    ys,
    Ns,
    H,
    W,
    Es,
    Vs,
    G,
    R,
    r,
    w,
    N,
    F,
    xs,
    Cs,
    M,
    q,
    Rs;
  return {
    c() {
      (t = l('div')),
        (f = l('div')),
        (i = k()),
        (u = l('div')),
        (P = k()),
        (d = l('div')),
        (_ = l('p')),
        ($ = g('Shake intensity')),
        (E = k()),
        (z = l('div')),
        (T = l('p')),
        (vs = g('Light')),
        (os = k()),
        (I = l('div')),
        (K = l('p')),
        (Z = g('Moderate')),
        (Ss = k()),
        (A = l('div')),
        (as = l('p')),
        (Ms = g('Cap-Haitien')),
        (bs = k()),
        (V = l('div')),
        (es = l('p')),
        (ws = g('Strong')),
        (js = k()),
        (C = l('div')),
        (X = l('p')),
        (Gs = g('Very strong')),
        (Hs = k()),
        (D = l('div')),
        (Y = l('p')),
        (qs = g('Gona\xEFves')),
        ($s = k()),
        (b = l('div')),
        (ss = l('p')),
        (zs = g('Caribbean')),
        (Ps = k()),
        (ns = l('p')),
        (Is = g('Sea')),
        (ks = k()),
        (j = l('div')),
        (ts = l('p')),
        (fs = g('HAITI')),
        (Ds = k()),
        (x = l('div')),
        (B = l('p')),
        (Ls = g('Jeremie')),
        (hs = k()),
        (L = l('div')),
        (rs = l('p')),
        (Ts = g('Port-au-Prince')),
        (Q = k()),
        (O = l('div')),
        (is = l('p')),
        (ms = g('Epicenter')),
        (us = k()),
        (S = l('div')),
        (ls = l('p')),
        (ds = g('Jacmel')),
        (ps = k()),
        (J = l('div')),
        (ys = l('p')),
        (Ns = g('Les Cayes')),
        (H = k()),
        (W = l('div')),
        (Es = l('p')),
        (Vs = g('50 mi')),
        (G = k()),
        (R = l('div')),
        (r = l('p')),
        (w = g('Dominican')),
        (N = k()),
        (F = l('p')),
        (xs = g('Republic')),
        (Cs = k()),
        (M = l('div')),
        (q = l('p')),
        (Rs = g('50 km')),
        this.h();
    },
    l(gs) {
      t = o(gs, 'DIV', { id: !0, class: !0, style: !0 });
      var c = p(t);
      (f = o(c, 'DIV', { style: !0 })),
        p(f).forEach(n),
        (i = h(c)),
        (u = o(c, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        p(u).forEach(n),
        (P = h(c)),
        (d = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ws = p(d);
      _ = o(Ws, 'P', { class: !0 });
      var st = p(_);
      ($ = v(st, 'Shake intensity')),
        st.forEach(n),
        Ws.forEach(n),
        (E = h(c)),
        (z = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ys = p(z);
      T = o(Ys, 'P', { class: !0 });
      var Bs = p(T);
      (vs = v(Bs, 'Light')),
        Bs.forEach(n),
        Ys.forEach(n),
        (os = h(c)),
        (I = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var tt = p(I);
      K = o(tt, 'P', { class: !0 });
      var Fs = p(K);
      (Z = v(Fs, 'Moderate')),
        Fs.forEach(n),
        tt.forEach(n),
        (Ss = h(c)),
        (A = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Us = p(A);
      as = o(Us, 'P', { class: !0 });
      var Ks = p(as);
      (Ms = v(Ks, 'Cap-Haitien')),
        Ks.forEach(n),
        Us.forEach(n),
        (bs = h(c)),
        (V = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var at = p(V);
      es = o(at, 'P', { class: !0 });
      var et = p(es);
      (ws = v(et, 'Strong')),
        et.forEach(n),
        at.forEach(n),
        (js = h(c)),
        (C = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qs = p(C);
      X = o(Qs, 'P', { class: !0 });
      var Os = p(X);
      (Gs = v(Os, 'Very strong')),
        Os.forEach(n),
        Qs.forEach(n),
        (Hs = h(c)),
        (D = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Xs = p(D);
      Y = o(Xs, 'P', { class: !0 });
      var Zs = p(Y);
      (qs = v(Zs, 'Gona\xEFves')),
        Zs.forEach(n),
        Xs.forEach(n),
        ($s = h(c)),
        (b = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Js = p(b);
      ss = o(Js, 'P', { class: !0 });
      var ut = p(ss);
      (zs = v(ut, 'Caribbean')),
        ut.forEach(n),
        (Ps = h(Js)),
        (ns = o(Js, 'P', { class: !0 }));
      var dt = p(ns);
      (Is = v(dt, 'Sea')),
        dt.forEach(n),
        Js.forEach(n),
        (ks = h(c)),
        (j = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var ft = p(j);
      ts = o(ft, 'P', { class: !0 });
      var gt = p(ts);
      (fs = v(gt, 'HAITI')),
        gt.forEach(n),
        ft.forEach(n),
        (Ds = h(c)),
        (x = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var nt = p(x);
      B = o(nt, 'P', { class: !0 });
      var vt = p(B);
      (Ls = v(vt, 'Jeremie')),
        vt.forEach(n),
        nt.forEach(n),
        (hs = h(c)),
        (L = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var kt = p(L);
      rs = o(kt, 'P', { class: !0 });
      var ht = p(rs);
      (Ts = v(ht, 'Port-au-Prince')),
        ht.forEach(n),
        kt.forEach(n),
        (Q = h(c)),
        (O = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var mt = p(O);
      is = o(mt, 'P', { class: !0 });
      var _t = p(is);
      (ms = v(_t, 'Epicenter')),
        _t.forEach(n),
        mt.forEach(n),
        (us = h(c)),
        (S = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var lt = p(S);
      ls = o(lt, 'P', { class: !0 });
      var zt = p(ls);
      (ds = v(zt, 'Jacmel')),
        zt.forEach(n),
        lt.forEach(n),
        (ps = h(c)),
        (J = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var yt = p(J);
      ys = o(yt, 'P', { class: !0 });
      var Et = p(ys);
      (Ns = v(Et, 'Les Cayes')),
        Et.forEach(n),
        yt.forEach(n),
        (H = h(c)),
        (W = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var bt = p(W);
      Es = o(bt, 'P', { class: !0 });
      var wt = p(Es);
      (Vs = v(wt, '50 mi')),
        wt.forEach(n),
        bt.forEach(n),
        (G = h(c)),
        (R = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var ot = p(R);
      r = o(ot, 'P', { class: !0 });
      var Pt = p(r);
      (w = v(Pt, 'Dominican')),
        Pt.forEach(n),
        (N = h(ot)),
        (F = o(ot, 'P', { class: !0 }));
      var xt = p(F);
      (xs = v(xt, 'Republic')),
        xt.forEach(n),
        ot.forEach(n),
        (Cs = h(c)),
        (M = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var At = p(M);
      q = o(At, 'P', { class: !0 });
      var $t = p(q);
      (Rs = v($t, '50 km')),
        $t.forEach(n),
        At.forEach(n),
        c.forEach(n),
        this.h();
    },
    h() {
      a(f, 'padding', '0 0 91.7004% 0'),
        e(u, 'id', 'g-_ai-chart-xs-img'),
        e(u, 'class', 'g-aiImg svelte-zofauz'),
        e(u, 'alt', ''),
        e(
          u,
          'style',
          (m = `background-image: url(${Gt}/images/graphics/ai-chart-xs.png);`)
        ),
        e(_, 'class', 'g-pstyle0 svelte-zofauz'),
        e(d, 'id', 'g-ai0-1'),
        e(d, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(d, 'top', '3.216%'),
        a(d, 'margin-top', '-7.7px'),
        a(d, 'left', '0.5952%'),
        a(d, 'width', '99px'),
        e(T, 'class', 'g-pstyle0 svelte-zofauz'),
        e(z, 'id', 'g-ai0-2'),
        e(z, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(z, 'top', '9.8251%'),
        a(z, 'margin-top', '-7.7px'),
        a(z, 'left', '4.9821%'),
        a(z, 'width', '47px'),
        e(K, 'class', 'g-pstyle0 svelte-zofauz'),
        e(I, 'id', 'g-ai0-3'),
        e(I, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(I, 'top', '15.7733%'),
        a(I, 'margin-top', '-7.7px'),
        a(I, 'left', '4.9821%'),
        a(I, 'width', '69px'),
        e(as, 'class', 'g-pstyle0 svelte-zofauz'),
        e(A, 'id', 'g-ai0-4'),
        e(A, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(A, 'top', '16.4343%'),
        a(A, 'margin-top', '-7.7px'),
        a(A, 'left', '79.0675%'),
        a(A, 'width', '82px'),
        e(es, 'class', 'g-pstyle0 svelte-zofauz'),
        e(V, 'id', 'g-ai0-5'),
        e(V, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(V, 'top', '21.7216%'),
        a(V, 'margin-top', '-7.7px'),
        a(V, 'left', '4.9821%'),
        a(V, 'width', '55px'),
        e(X, 'class', 'g-pstyle0 svelte-zofauz'),
        e(C, 'id', 'g-ai0-6'),
        e(C, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(C, 'top', '28.0002%'),
        a(C, 'margin-top', '-7.7px'),
        a(C, 'left', '4.9821%'),
        a(C, 'width', '78px'),
        e(Y, 'class', 'g-pstyle0 svelte-zofauz'),
        e(D, 'id', 'g-ai0-7'),
        e(D, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(D, 'top', '28.9916%'),
        a(D, 'margin-top', '-7.7px'),
        a(D, 'left', '62.2348%'),
        a(D, 'width', '68px'),
        e(ss, 'class', 'g-pstyle1 svelte-zofauz'),
        e(ns, 'class', 'g-pstyle1 svelte-zofauz'),
        e(b, 'id', 'g-ai0-8'),
        e(b, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(b, 'top', '39.9449%'),
        a(b, 'margin-top', '-14.9px'),
        a(b, 'left', '28.714%'),
        a(b, 'margin-left', '-36.5px'),
        a(b, 'width', '73px'),
        e(ts, 'class', 'g-pstyle2 svelte-zofauz'),
        e(j, 'id', 'g-ai0-9'),
        e(j, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(j, 'top', '42.6579%'),
        a(j, 'margin-top', '-10.1px'),
        a(j, 'left', '68.5061%'),
        a(j, 'width', '77px'),
        e(B, 'class', 'g-pstyle0 svelte-zofauz'),
        e(x, 'id', 'g-ai0-10'),
        e(x, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(x, 'top', '59.0632%'),
        a(x, 'margin-top', '-7.7px'),
        a(x, 'left', '11.2526%'),
        a(x, 'width', '63px'),
        e(rs, 'class', 'g-pstyle3 svelte-zofauz'),
        e(L, 'id', 'g-ai0-11'),
        e(L, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(L, 'top', '61.1155%'),
        a(L, 'margin-top', '-8.9px'),
        a(L, 'left', '70.5455%'),
        a(L, 'width', '106px'),
        e(is, 'class', 'g-pstyle3 svelte-zofauz'),
        e(O, 'id', 'g-ai0-12'),
        e(O, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(O, 'top', '62.1069%'),
        a(O, 'margin-top', '-8.9px'),
        a(O, 'left', '32.6015%'),
        a(O, 'width', '77px'),
        e(ls, 'class', 'g-pstyle0 svelte-zofauz'),
        e(S, 'id', 'g-ai0-13'),
        e(S, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(S, 'top', '78.8906%'),
        a(S, 'margin-top', '-7.7px'),
        a(S, 'left', '63.9138%'),
        a(S, 'width', '58px'),
        e(ys, 'class', 'g-pstyle0 svelte-zofauz'),
        e(J, 'id', 'g-ai0-14'),
        e(J, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(J, 'top', '80.2124%'),
        a(J, 'margin-top', '-7.7px'),
        a(J, 'left', '22.5649%'),
        a(J, 'width', '71px'),
        e(Es, 'class', 'g-pstyle0 svelte-zofauz'),
        e(W, 'id', 'g-ai0-15'),
        e(W, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(W, 'top', '87.8129%'),
        a(W, 'margin-top', '-7.7px'),
        a(W, 'left', '0.6179%'),
        a(W, 'width', '49px'),
        e(r, 'class', 'g-pstyle4 svelte-zofauz'),
        e(F, 'class', 'g-pstyle4 svelte-zofauz'),
        e(R, 'id', 'g-ai0-16'),
        e(R, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(R, 'top', '91.0202%'),
        a(R, 'margin-top', '-11.4px'),
        a(R, 'right', '10.4418%'),
        a(R, 'width', '70px'),
        e(q, 'class', 'g-pstyle0 svelte-zofauz'),
        e(M, 'id', 'g-ai0-17'),
        e(M, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(M, 'top', '93.7611%'),
        a(M, 'margin-top', '-7.7px'),
        a(M, 'left', '0.6179%'),
        a(M, 'width', '52px'),
        e(t, 'id', 'g-_ai-chart-xs'),
        e(t, 'class', 'g-artboard svelte-zofauz'),
        e(t, 'style', '');
    },
    m(gs, c) {
      U(gs, t, c),
        s(t, f),
        s(t, i),
        s(t, u),
        s(t, P),
        s(t, d),
        s(d, _),
        s(_, $),
        s(t, E),
        s(t, z),
        s(z, T),
        s(T, vs),
        s(t, os),
        s(t, I),
        s(I, K),
        s(K, Z),
        s(t, Ss),
        s(t, A),
        s(A, as),
        s(as, Ms),
        s(t, bs),
        s(t, V),
        s(V, es),
        s(es, ws),
        s(t, js),
        s(t, C),
        s(C, X),
        s(X, Gs),
        s(t, Hs),
        s(t, D),
        s(D, Y),
        s(Y, qs),
        s(t, $s),
        s(t, b),
        s(b, ss),
        s(ss, zs),
        s(b, Ps),
        s(b, ns),
        s(ns, Is),
        s(t, ks),
        s(t, j),
        s(j, ts),
        s(ts, fs),
        s(t, Ds),
        s(t, x),
        s(x, B),
        s(B, Ls),
        s(t, hs),
        s(t, L),
        s(L, rs),
        s(rs, Ts),
        s(t, Q),
        s(t, O),
        s(O, is),
        s(is, ms),
        s(t, us),
        s(t, S),
        s(S, ls),
        s(ls, ds),
        s(t, ps),
        s(t, J),
        s(J, ys),
        s(ys, Ns),
        s(t, H),
        s(t, W),
        s(W, Es),
        s(Es, Vs),
        s(t, G),
        s(t, R),
        s(R, r),
        s(r, w),
        s(R, N),
        s(R, F),
        s(F, xs),
        s(t, Cs),
        s(t, M),
        s(M, q),
        s(q, Rs);
    },
    p: cs,
    d(gs) {
      gs && n(t);
    },
  };
}
function Bt(y) {
  let t,
    f,
    i,
    u,
    m,
    P,
    d,
    _,
    $,
    E,
    z,
    T,
    vs,
    os,
    I,
    K,
    Z,
    Ss,
    A,
    as,
    Ms,
    bs,
    V,
    es,
    ws,
    js,
    C,
    X,
    Gs,
    Hs,
    D,
    Y,
    qs,
    $s,
    b,
    ss,
    zs,
    Ps,
    ns,
    Is,
    ks,
    j,
    ts,
    fs,
    Ds,
    x,
    B,
    Ls,
    hs,
    L,
    rs,
    Ts,
    Q,
    O,
    is,
    ms,
    us,
    S,
    ls,
    ds,
    ps,
    J,
    ys,
    Ns,
    H,
    W,
    Es,
    Vs,
    G,
    R,
    r,
    w,
    N,
    F,
    xs,
    Cs,
    M,
    q,
    Rs;
  return {
    c() {
      (t = l('div')),
        (f = l('div')),
        (i = k()),
        (u = l('div')),
        (P = k()),
        (d = l('div')),
        (_ = l('p')),
        ($ = g('Shake intensity')),
        (E = k()),
        (z = l('div')),
        (T = l('p')),
        (vs = g('Light')),
        (os = k()),
        (I = l('div')),
        (K = l('p')),
        (Z = g('Moderate')),
        (Ss = k()),
        (A = l('div')),
        (as = l('p')),
        (Ms = g('Cap-Haitien')),
        (bs = k()),
        (V = l('div')),
        (es = l('p')),
        (ws = g('Strong')),
        (js = k()),
        (C = l('div')),
        (X = l('p')),
        (Gs = g('Very strong')),
        (Hs = k()),
        (D = l('div')),
        (Y = l('p')),
        (qs = g('Gona\xEFves')),
        ($s = k()),
        (b = l('div')),
        (ss = l('p')),
        (zs = g('Caribbean')),
        (Ps = k()),
        (ns = l('p')),
        (Is = g('Sea')),
        (ks = k()),
        (j = l('div')),
        (ts = l('p')),
        (fs = g('HAITI')),
        (Ds = k()),
        (x = l('div')),
        (B = l('p')),
        (Ls = g('Jeremie')),
        (hs = k()),
        (L = l('div')),
        (rs = l('p')),
        (Ts = g('Port-au-Prince')),
        (Q = k()),
        (O = l('div')),
        (is = l('p')),
        (ms = g('Epicenter')),
        (us = k()),
        (S = l('div')),
        (ls = l('p')),
        (ds = g('Dominican')),
        (ps = k()),
        (J = l('p')),
        (ys = g('Republic')),
        (Ns = k()),
        (H = l('div')),
        (W = l('p')),
        (Es = g('Jacmel')),
        (Vs = k()),
        (G = l('div')),
        (R = l('p')),
        (r = g('Les Cayes')),
        (w = k()),
        (N = l('div')),
        (F = l('p')),
        (xs = g('50 mi')),
        (Cs = k()),
        (M = l('div')),
        (q = l('p')),
        (Rs = g('50 km')),
        this.h();
    },
    l(gs) {
      t = o(gs, 'DIV', { id: !0, class: !0, style: !0 });
      var c = p(t);
      (f = o(c, 'DIV', { style: !0 })),
        p(f).forEach(n),
        (i = h(c)),
        (u = o(c, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        p(u).forEach(n),
        (P = h(c)),
        (d = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ws = p(d);
      _ = o(Ws, 'P', { class: !0 });
      var st = p(_);
      ($ = v(st, 'Shake intensity')),
        st.forEach(n),
        Ws.forEach(n),
        (E = h(c)),
        (z = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ys = p(z);
      T = o(Ys, 'P', { class: !0 });
      var Bs = p(T);
      (vs = v(Bs, 'Light')),
        Bs.forEach(n),
        Ys.forEach(n),
        (os = h(c)),
        (I = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var tt = p(I);
      K = o(tt, 'P', { class: !0 });
      var Fs = p(K);
      (Z = v(Fs, 'Moderate')),
        Fs.forEach(n),
        tt.forEach(n),
        (Ss = h(c)),
        (A = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Us = p(A);
      as = o(Us, 'P', { class: !0 });
      var Ks = p(as);
      (Ms = v(Ks, 'Cap-Haitien')),
        Ks.forEach(n),
        Us.forEach(n),
        (bs = h(c)),
        (V = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var at = p(V);
      es = o(at, 'P', { class: !0 });
      var et = p(es);
      (ws = v(et, 'Strong')),
        et.forEach(n),
        at.forEach(n),
        (js = h(c)),
        (C = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qs = p(C);
      X = o(Qs, 'P', { class: !0 });
      var Os = p(X);
      (Gs = v(Os, 'Very strong')),
        Os.forEach(n),
        Qs.forEach(n),
        (Hs = h(c)),
        (D = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Xs = p(D);
      Y = o(Xs, 'P', { class: !0 });
      var Zs = p(Y);
      (qs = v(Zs, 'Gona\xEFves')),
        Zs.forEach(n),
        Xs.forEach(n),
        ($s = h(c)),
        (b = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Js = p(b);
      ss = o(Js, 'P', { class: !0 });
      var ut = p(ss);
      (zs = v(ut, 'Caribbean')),
        ut.forEach(n),
        (Ps = h(Js)),
        (ns = o(Js, 'P', { class: !0 }));
      var dt = p(ns);
      (Is = v(dt, 'Sea')),
        dt.forEach(n),
        Js.forEach(n),
        (ks = h(c)),
        (j = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var ft = p(j);
      ts = o(ft, 'P', { class: !0 });
      var gt = p(ts);
      (fs = v(gt, 'HAITI')),
        gt.forEach(n),
        ft.forEach(n),
        (Ds = h(c)),
        (x = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var nt = p(x);
      B = o(nt, 'P', { class: !0 });
      var vt = p(B);
      (Ls = v(vt, 'Jeremie')),
        vt.forEach(n),
        nt.forEach(n),
        (hs = h(c)),
        (L = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var kt = p(L);
      rs = o(kt, 'P', { class: !0 });
      var ht = p(rs);
      (Ts = v(ht, 'Port-au-Prince')),
        ht.forEach(n),
        kt.forEach(n),
        (Q = h(c)),
        (O = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var mt = p(O);
      is = o(mt, 'P', { class: !0 });
      var _t = p(is);
      (ms = v(_t, 'Epicenter')),
        _t.forEach(n),
        mt.forEach(n),
        (us = h(c)),
        (S = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var lt = p(S);
      ls = o(lt, 'P', { class: !0 });
      var zt = p(ls);
      (ds = v(zt, 'Dominican')),
        zt.forEach(n),
        (ps = h(lt)),
        (J = o(lt, 'P', { class: !0 }));
      var yt = p(J);
      (ys = v(yt, 'Republic')),
        yt.forEach(n),
        lt.forEach(n),
        (Ns = h(c)),
        (H = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Et = p(H);
      W = o(Et, 'P', { class: !0 });
      var bt = p(W);
      (Es = v(bt, 'Jacmel')),
        bt.forEach(n),
        Et.forEach(n),
        (Vs = h(c)),
        (G = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var wt = p(G);
      R = o(wt, 'P', { class: !0 });
      var ot = p(R);
      (r = v(ot, 'Les Cayes')),
        ot.forEach(n),
        wt.forEach(n),
        (w = h(c)),
        (N = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Pt = p(N);
      F = o(Pt, 'P', { class: !0 });
      var xt = p(F);
      (xs = v(xt, '50 mi')),
        xt.forEach(n),
        Pt.forEach(n),
        (Cs = h(c)),
        (M = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var At = p(M);
      q = o(At, 'P', { class: !0 });
      var $t = p(q);
      (Rs = v($t, '50 km')),
        $t.forEach(n),
        At.forEach(n),
        c.forEach(n),
        this.h();
    },
    h() {
      a(f, 'padding', '0 0 82.703% 0'),
        e(u, 'id', 'g-_ai-chart-sm-img'),
        e(u, 'class', 'g-aiImg svelte-zofauz'),
        e(u, 'alt', ''),
        e(
          u,
          'style',
          (m = `background-image: url(${Gt}/images/graphics/ai-chart-sm.png);`)
        ),
        e(_, 'class', 'g-pstyle0 svelte-zofauz'),
        e(d, 'id', 'g-ai1-1'),
        e(d, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(d, 'top', '3.8773%'),
        a(d, 'margin-top', '-9.4px'),
        a(d, 'left', '0.3278%'),
        a(d, 'width', '111px'),
        e(T, 'class', 'g-pstyle0 svelte-zofauz'),
        e(z, 'id', 'g-ai1-2'),
        e(z, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(z, 'top', '9.0933%'),
        a(z, 'margin-top', '-9.4px'),
        a(z, 'left', '3.0258%'),
        a(z, 'width', '52px'),
        e(K, 'class', 'g-pstyle0 svelte-zofauz'),
        e(I, 'id', 'g-ai1-3'),
        e(I, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(I, 'top', '13.5979%'),
        a(I, 'margin-top', '-9.4px'),
        a(I, 'left', '3.0259%'),
        a(I, 'width', '77px'),
        e(as, 'class', 'g-pstyle0 svelte-zofauz'),
        e(A, 'id', 'g-ai1-4'),
        e(A, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(A, 'top', '16.6801%'),
        a(A, 'margin-top', '-9.4px'),
        a(A, 'left', '70.3255%'),
        a(A, 'width', '92px'),
        e(es, 'class', 'g-pstyle0 svelte-zofauz'),
        e(V, 'id', 'g-ai1-5'),
        e(V, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(V, 'top', '18.3397%'),
        a(V, 'margin-top', '-9.4px'),
        a(V, 'left', '3.0258%'),
        a(V, 'width', '61px'),
        e(X, 'class', 'g-pstyle0 svelte-zofauz'),
        e(C, 'id', 'g-ai1-6'),
        e(C, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(C, 'top', '22.6073%'),
        a(C, 'margin-top', '-9.4px'),
        a(C, 'left', '3.0258%'),
        a(C, 'width', '88px'),
        e(Y, 'class', 'g-pstyle0 svelte-zofauz'),
        e(D, 'id', 'g-ai1-7'),
        e(D, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(D, 'top', '28.5344%'),
        a(D, 'margin-top', '-9.4px'),
        a(D, 'left', '55.9181%'),
        a(D, 'width', '76px'),
        e(ss, 'class', 'g-pstyle1 svelte-zofauz'),
        e(ns, 'class', 'g-pstyle1 svelte-zofauz'),
        e(b, 'id', 'g-ai1-8'),
        e(b, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(b, 'top', '38.8091%'),
        a(b, 'margin-top', '-17.7px'),
        a(b, 'left', '27.2818%'),
        a(b, 'margin-left', '-41px'),
        a(b, 'width', '82px'),
        e(ts, 'class', 'g-pstyle2 svelte-zofauz'),
        e(j, 'id', 'g-ai1-9'),
        e(j, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(j, 'top', '39.9724%'),
        a(j, 'margin-top', '-8.6px'),
        a(j, 'left', '61.2858%'),
        a(j, 'width', '67px'),
        e(B, 'class', 'g-pstyle0 svelte-zofauz'),
        e(x, 'id', 'g-ai1-10'),
        e(x, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(x, 'top', '56.985%'),
        a(x, 'margin-top', '-9.4px'),
        a(x, 'left', '12.2815%'),
        a(x, 'width', '69px'),
        e(rs, 'class', 'g-pstyle3 svelte-zofauz'),
        e(L, 'id', 'g-ai1-11'),
        e(L, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(L, 'top', '59.1569%'),
        a(L, 'margin-top', '-9.5px'),
        a(L, 'left', '63.0314%'),
        a(L, 'width', '112px'),
        e(is, 'class', 'g-pstyle3 svelte-zofauz'),
        e(O, 'id', 'g-ai1-12'),
        e(O, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(O, 'top', '60.1053%'),
        a(O, 'margin-top', '-9.5px'),
        a(O, 'left', '30.5543%'),
        a(O, 'width', '81px'),
        e(ls, 'class', 'g-pstyle4 svelte-zofauz'),
        e(J, 'class', 'g-pstyle4 svelte-zofauz'),
        e(S, 'id', 'g-ai1-13'),
        e(S, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(S, 'top', '62.7194%'),
        a(S, 'margin-top', '-16.5px'),
        a(S, 'left', '91.2282%'),
        a(S, 'margin-left', '-57px'),
        a(S, 'width', '114px'),
        e(W, 'class', 'g-pstyle0 svelte-zofauz'),
        e(H, 'id', 'g-ai1-14'),
        e(H, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(H, 'top', '75.4778%'),
        a(H, 'margin-top', '-9.4px'),
        a(H, 'left', '57.3552%'),
        a(H, 'width', '64px'),
        e(R, 'class', 'g-pstyle0 svelte-zofauz'),
        e(G, 'id', 'g-ai1-15'),
        e(G, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(G, 'top', '76.6632%'),
        a(G, 'margin-top', '-9.4px'),
        a(G, 'left', '21.9639%'),
        a(G, 'width', '79px'),
        e(F, 'class', 'g-pstyle5 svelte-zofauz'),
        e(N, 'id', 'g-ai1-16'),
        e(N, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(N, 'top', '85.5251%'),
        a(N, 'margin-top', '-7.7px'),
        a(N, 'left', '0.1344%'),
        a(N, 'width', '49px'),
        e(q, 'class', 'g-pstyle5 svelte-zofauz'),
        e(M, 'id', 'g-ai1-17'),
        e(M, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(M, 'top', '90.0297%'),
        a(M, 'margin-top', '-7.7px'),
        a(M, 'left', '0.1344%'),
        a(M, 'width', '52px'),
        e(t, 'id', 'g-_ai-chart-sm'),
        e(t, 'class', 'g-artboard svelte-zofauz'),
        e(t, 'style', '');
    },
    m(gs, c) {
      U(gs, t, c),
        s(t, f),
        s(t, i),
        s(t, u),
        s(t, P),
        s(t, d),
        s(d, _),
        s(_, $),
        s(t, E),
        s(t, z),
        s(z, T),
        s(T, vs),
        s(t, os),
        s(t, I),
        s(I, K),
        s(K, Z),
        s(t, Ss),
        s(t, A),
        s(A, as),
        s(as, Ms),
        s(t, bs),
        s(t, V),
        s(V, es),
        s(es, ws),
        s(t, js),
        s(t, C),
        s(C, X),
        s(X, Gs),
        s(t, Hs),
        s(t, D),
        s(D, Y),
        s(Y, qs),
        s(t, $s),
        s(t, b),
        s(b, ss),
        s(ss, zs),
        s(b, Ps),
        s(b, ns),
        s(ns, Is),
        s(t, ks),
        s(t, j),
        s(j, ts),
        s(ts, fs),
        s(t, Ds),
        s(t, x),
        s(x, B),
        s(B, Ls),
        s(t, hs),
        s(t, L),
        s(L, rs),
        s(rs, Ts),
        s(t, Q),
        s(t, O),
        s(O, is),
        s(is, ms),
        s(t, us),
        s(t, S),
        s(S, ls),
        s(ls, ds),
        s(S, ps),
        s(S, J),
        s(J, ys),
        s(t, Ns),
        s(t, H),
        s(H, W),
        s(W, Es),
        s(t, Vs),
        s(t, G),
        s(G, R),
        s(R, r),
        s(t, w),
        s(t, N),
        s(N, F),
        s(F, xs),
        s(t, Cs),
        s(t, M),
        s(M, q),
        s(q, Rs);
    },
    p: cs,
    d(gs) {
      gs && n(t);
    },
  };
}
function Ft(y) {
  let t,
    f,
    i,
    u,
    m,
    P,
    d,
    _,
    $,
    E,
    z,
    T,
    vs,
    os,
    I,
    K,
    Z,
    Ss,
    A,
    as,
    Ms,
    bs,
    V,
    es,
    ws,
    js,
    C,
    X,
    Gs,
    Hs,
    D,
    Y,
    qs,
    $s,
    b,
    ss,
    zs,
    Ps,
    ns,
    Is,
    ks,
    j,
    ts,
    fs,
    Ds,
    x,
    B,
    Ls,
    hs,
    L,
    rs,
    Ts,
    Q,
    O,
    is,
    ms,
    us,
    S,
    ls,
    ds,
    ps,
    J,
    ys,
    Ns,
    H,
    W,
    Es,
    Vs,
    G,
    R,
    r,
    w,
    N,
    F,
    xs,
    Cs,
    M,
    q,
    Rs;
  return {
    c() {
      (t = l('div')),
        (f = l('div')),
        (i = k()),
        (u = l('div')),
        (P = k()),
        (d = l('div')),
        (_ = l('p')),
        ($ = g('Shake intensity')),
        (E = k()),
        (z = l('div')),
        (T = l('p')),
        (vs = g('Light')),
        (os = k()),
        (I = l('div')),
        (K = l('p')),
        (Z = g('Moderate')),
        (Ss = k()),
        (A = l('div')),
        (as = l('p')),
        (Ms = g('Cap-Haitien')),
        (bs = k()),
        (V = l('div')),
        (es = l('p')),
        (ws = g('Strong')),
        (js = k()),
        (C = l('div')),
        (X = l('p')),
        (Gs = g('Very strong')),
        (Hs = k()),
        (D = l('div')),
        (Y = l('p')),
        (qs = g('Gona\xEFves')),
        ($s = k()),
        (b = l('div')),
        (ss = l('p')),
        (zs = g('Caribbean')),
        (Ps = k()),
        (ns = l('p')),
        (Is = g('Sea')),
        (ks = k()),
        (j = l('div')),
        (ts = l('p')),
        (fs = g('HAITI')),
        (Ds = k()),
        (x = l('div')),
        (B = l('p')),
        (Ls = g('Dominican')),
        (hs = k()),
        (L = l('p')),
        (rs = g('Republic')),
        (Ts = k()),
        (Q = l('div')),
        (O = l('p')),
        (is = g('Jeremie')),
        (ms = k()),
        (us = l('div')),
        (S = l('p')),
        (ls = g('Epicenter')),
        (ds = k()),
        (ps = l('div')),
        (J = l('p')),
        (ys = g('Port-au-Prince')),
        (Ns = k()),
        (H = l('div')),
        (W = l('p')),
        (Es = g('Jacmel')),
        (Vs = k()),
        (G = l('div')),
        (R = l('p')),
        (r = g('Les Cayes')),
        (w = k()),
        (N = l('div')),
        (F = l('p')),
        (xs = g('50 mi')),
        (Cs = k()),
        (M = l('div')),
        (q = l('p')),
        (Rs = g('50 km')),
        this.h();
    },
    l(gs) {
      t = o(gs, 'DIV', { id: !0, class: !0, style: !0 });
      var c = p(t);
      (f = o(c, 'DIV', { style: !0 })),
        p(f).forEach(n),
        (i = h(c)),
        (u = o(c, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        p(u).forEach(n),
        (P = h(c)),
        (d = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ws = p(d);
      _ = o(Ws, 'P', { class: !0 });
      var st = p(_);
      ($ = v(st, 'Shake intensity')),
        st.forEach(n),
        Ws.forEach(n),
        (E = h(c)),
        (z = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ys = p(z);
      T = o(Ys, 'P', { class: !0 });
      var Bs = p(T);
      (vs = v(Bs, 'Light')),
        Bs.forEach(n),
        Ys.forEach(n),
        (os = h(c)),
        (I = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var tt = p(I);
      K = o(tt, 'P', { class: !0 });
      var Fs = p(K);
      (Z = v(Fs, 'Moderate')),
        Fs.forEach(n),
        tt.forEach(n),
        (Ss = h(c)),
        (A = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Us = p(A);
      as = o(Us, 'P', { class: !0 });
      var Ks = p(as);
      (Ms = v(Ks, 'Cap-Haitien')),
        Ks.forEach(n),
        Us.forEach(n),
        (bs = h(c)),
        (V = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var at = p(V);
      es = o(at, 'P', { class: !0 });
      var et = p(es);
      (ws = v(et, 'Strong')),
        et.forEach(n),
        at.forEach(n),
        (js = h(c)),
        (C = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qs = p(C);
      X = o(Qs, 'P', { class: !0 });
      var Os = p(X);
      (Gs = v(Os, 'Very strong')),
        Os.forEach(n),
        Qs.forEach(n),
        (Hs = h(c)),
        (D = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Xs = p(D);
      Y = o(Xs, 'P', { class: !0 });
      var Zs = p(Y);
      (qs = v(Zs, 'Gona\xEFves')),
        Zs.forEach(n),
        Xs.forEach(n),
        ($s = h(c)),
        (b = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Js = p(b);
      ss = o(Js, 'P', { class: !0 });
      var ut = p(ss);
      (zs = v(ut, 'Caribbean')),
        ut.forEach(n),
        (Ps = h(Js)),
        (ns = o(Js, 'P', { class: !0 }));
      var dt = p(ns);
      (Is = v(dt, 'Sea')),
        dt.forEach(n),
        Js.forEach(n),
        (ks = h(c)),
        (j = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var ft = p(j);
      ts = o(ft, 'P', { class: !0 });
      var gt = p(ts);
      (fs = v(gt, 'HAITI')),
        gt.forEach(n),
        ft.forEach(n),
        (Ds = h(c)),
        (x = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var nt = p(x);
      B = o(nt, 'P', { class: !0 });
      var vt = p(B);
      (Ls = v(vt, 'Dominican')),
        vt.forEach(n),
        (hs = h(nt)),
        (L = o(nt, 'P', { class: !0 }));
      var kt = p(L);
      (rs = v(kt, 'Republic')),
        kt.forEach(n),
        nt.forEach(n),
        (Ts = h(c)),
        (Q = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var ht = p(Q);
      O = o(ht, 'P', { class: !0 });
      var mt = p(O);
      (is = v(mt, 'Jeremie')),
        mt.forEach(n),
        ht.forEach(n),
        (ms = h(c)),
        (us = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var _t = p(us);
      S = o(_t, 'P', { class: !0 });
      var lt = p(S);
      (ls = v(lt, 'Epicenter')),
        lt.forEach(n),
        _t.forEach(n),
        (ds = h(c)),
        (ps = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var zt = p(ps);
      J = o(zt, 'P', { class: !0 });
      var yt = p(J);
      (ys = v(yt, 'Port-au-Prince')),
        yt.forEach(n),
        zt.forEach(n),
        (Ns = h(c)),
        (H = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Et = p(H);
      W = o(Et, 'P', { class: !0 });
      var bt = p(W);
      (Es = v(bt, 'Jacmel')),
        bt.forEach(n),
        Et.forEach(n),
        (Vs = h(c)),
        (G = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var wt = p(G);
      R = o(wt, 'P', { class: !0 });
      var ot = p(R);
      (r = v(ot, 'Les Cayes')),
        ot.forEach(n),
        wt.forEach(n),
        (w = h(c)),
        (N = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Pt = p(N);
      F = o(Pt, 'P', { class: !0 });
      var xt = p(F);
      (xs = v(xt, '50 mi')),
        xt.forEach(n),
        Pt.forEach(n),
        (Cs = h(c)),
        (M = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var At = p(M);
      q = o(At, 'P', { class: !0 });
      var $t = p(q);
      (Rs = v($t, '50 km')),
        $t.forEach(n),
        At.forEach(n),
        c.forEach(n),
        this.h();
    },
    h() {
      a(f, 'padding', '0 0 79.6009% 0'),
        e(u, 'id', 'g-_ai-chart-md-img'),
        e(u, 'class', 'g-aiImg svelte-zofauz'),
        e(u, 'alt', ''),
        e(
          u,
          'style',
          (m = `background-image: url(${Gt}/images/graphics/ai-chart-md.png);`)
        ),
        e(_, 'class', 'g-pstyle0 svelte-zofauz'),
        e(d, 'id', 'g-ai2-1'),
        e(d, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(d, 'top', '2.3515%'),
        a(d, 'margin-top', '-9.4px'),
        a(d, 'left', '0.3608%'),
        a(d, 'width', '111px'),
        e(T, 'class', 'g-pstyle0 svelte-zofauz'),
        e(z, 'id', 'g-ai2-2'),
        e(z, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(z, 'top', '7.6811%'),
        a(z, 'margin-top', '-9.4px'),
        a(z, 'left', '2.6603%'),
        a(z, 'width', '52px'),
        e(K, 'class', 'g-pstyle0 svelte-zofauz'),
        e(I, 'id', 'g-ai2-3'),
        e(I, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(I, 'top', '12.2494%'),
        a(I, 'margin-top', '-9.4px'),
        a(I, 'left', '2.6604%'),
        a(I, 'width', '77px'),
        e(as, 'class', 'g-pstyle0 svelte-zofauz'),
        e(A, 'id', 'g-ai2-4'),
        e(A, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(A, 'top', '15.4852%'),
        a(A, 'margin-top', '-9.4px'),
        a(A, 'left', '70.3606%'),
        a(A, 'width', '92px'),
        e(es, 'class', 'g-pstyle0 svelte-zofauz'),
        e(V, 'id', 'g-ai2-5'),
        e(V, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(V, 'top', '17.1983%'),
        a(V, 'margin-top', '-9.4px'),
        a(V, 'left', '2.6603%'),
        a(V, 'width', '61px'),
        e(X, 'class', 'g-pstyle0 svelte-zofauz'),
        e(C, 'id', 'g-ai2-6'),
        e(C, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(C, 'top', '21.7666%'),
        a(C, 'margin-top', '-9.4px'),
        a(C, 'left', '2.6603%'),
        a(C, 'width', '88px'),
        e(Y, 'class', 'g-pstyle0 svelte-zofauz'),
        e(D, 'id', 'g-ai2-7'),
        e(D, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(D, 'top', '27.6672%'),
        a(D, 'margin-top', '-9.4px'),
        a(D, 'left', '55.993%'),
        a(D, 'width', '76px'),
        e(ss, 'class', 'g-pstyle1 svelte-zofauz'),
        e(ns, 'class', 'g-pstyle1 svelte-zofauz'),
        e(b, 'id', 'g-ai2-8'),
        e(b, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(b, 'top', '38.0099%'),
        a(b, 'margin-top', '-17.7px'),
        a(b, 'left', '27.2388%'),
        a(b, 'margin-left', '-41px'),
        a(b, 'width', '82px'),
        e(ts, 'class', 'g-pstyle2 svelte-zofauz'),
        e(j, 'id', 'g-ai2-9'),
        e(j, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(j, 'top', '42.7626%'),
        a(j, 'margin-top', '-10.7px'),
        a(j, 'left', '62.8914%'),
        a(j, 'width', '80px'),
        e(B, 'class', 'g-pstyle3 svelte-zofauz'),
        e(L, 'class', 'g-pstyle3 svelte-zofauz'),
        e(x, 'id', 'g-ai2-10'),
        e(x, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(x, 'top', '50.0029%'),
        a(x, 'margin-top', '-17.7px'),
        a(x, 'left', '92.295%'),
        a(x, 'margin-left', '-60.5px'),
        a(x, 'width', '121px'),
        e(O, 'class', 'g-pstyle0 svelte-zofauz'),
        e(Q, 'id', 'g-ai2-11'),
        e(Q, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(Q, 'top', '57.3608%'),
        a(Q, 'margin-top', '-9.4px'),
        a(Q, 'left', '12.2815%'),
        a(Q, 'width', '69px'),
        e(S, 'class', 'g-pstyle4 svelte-zofauz'),
        e(us, 'id', 'g-ai2-12'),
        e(us, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(us, 'top', '60.2742%'),
        a(us, 'margin-top', '-10.7px'),
        a(us, 'left', '30.6995%'),
        a(us, 'width', '89px'),
        e(J, 'class', 'g-pstyle4 svelte-zofauz'),
        e(ps, 'id', 'g-ai2-13'),
        e(ps, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(ps, 'top', '62.5583%'),
        a(ps, 'margin-top', '-10.7px'),
        a(ps, 'left', '66.3403%'),
        a(ps, 'width', '125px'),
        e(W, 'class', 'g-pstyle0 svelte-zofauz'),
        e(H, 'id', 'g-ai2-14'),
        e(H, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(H, 'top', '75.6338%'),
        a(H, 'margin-top', '-9.4px'),
        a(H, 'left', '57.8174%'),
        a(H, 'width', '64px'),
        e(R, 'class', 'g-pstyle0 svelte-zofauz'),
        e(G, 'id', 'g-ai2-15'),
        e(G, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(G, 'top', '77.3469%'),
        a(G, 'margin-top', '-9.4px'),
        a(G, 'left', '22.5239%'),
        a(G, 'width', '79px'),
        e(F, 'class', 'g-pstyle5 svelte-zofauz'),
        e(N, 'id', 'g-ai2-16'),
        e(N, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(N, 'top', '86.936%'),
        a(N, 'margin-top', '-7.7px'),
        a(N, 'left', '0.1678%'),
        a(N, 'width', '49px'),
        e(q, 'class', 'g-pstyle5 svelte-zofauz'),
        e(M, 'id', 'g-ai2-17'),
        e(M, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(M, 'top', '91.5043%'),
        a(M, 'margin-top', '-7.7px'),
        a(M, 'left', '0.1678%'),
        a(M, 'width', '52px'),
        e(t, 'id', 'g-_ai-chart-md'),
        e(t, 'class', 'g-artboard svelte-zofauz'),
        e(t, 'style', '');
    },
    m(gs, c) {
      U(gs, t, c),
        s(t, f),
        s(t, i),
        s(t, u),
        s(t, P),
        s(t, d),
        s(d, _),
        s(_, $),
        s(t, E),
        s(t, z),
        s(z, T),
        s(T, vs),
        s(t, os),
        s(t, I),
        s(I, K),
        s(K, Z),
        s(t, Ss),
        s(t, A),
        s(A, as),
        s(as, Ms),
        s(t, bs),
        s(t, V),
        s(V, es),
        s(es, ws),
        s(t, js),
        s(t, C),
        s(C, X),
        s(X, Gs),
        s(t, Hs),
        s(t, D),
        s(D, Y),
        s(Y, qs),
        s(t, $s),
        s(t, b),
        s(b, ss),
        s(ss, zs),
        s(b, Ps),
        s(b, ns),
        s(ns, Is),
        s(t, ks),
        s(t, j),
        s(j, ts),
        s(ts, fs),
        s(t, Ds),
        s(t, x),
        s(x, B),
        s(B, Ls),
        s(x, hs),
        s(x, L),
        s(L, rs),
        s(t, Ts),
        s(t, Q),
        s(Q, O),
        s(O, is),
        s(t, ms),
        s(t, us),
        s(us, S),
        s(S, ls),
        s(t, ds),
        s(t, ps),
        s(ps, J),
        s(J, ys),
        s(t, Ns),
        s(t, H),
        s(H, W),
        s(W, Es),
        s(t, Vs),
        s(t, G),
        s(G, R),
        s(R, r),
        s(t, w),
        s(t, N),
        s(N, F),
        s(F, xs),
        s(t, Cs),
        s(t, M),
        s(M, q),
        s(q, Rs);
    },
    p: cs,
    d(gs) {
      gs && n(t);
    },
  };
}
function pa(y) {
  let t,
    f,
    i,
    u,
    m = y[0] && y[0] >= 0 && y[0] < 510 && Yt(),
    P = y[0] && y[0] >= 510 && y[0] < 660 && Bt(),
    d = y[0] && y[0] >= 660 && Ft();
  return {
    c() {
      (t = l('div')),
        m && m.c(),
        (f = k()),
        P && P.c(),
        (i = k()),
        d && d.c(),
        this.h();
    },
    l(_) {
      t = o(_, 'DIV', { id: !0, class: !0 });
      var $ = p(t);
      m && m.l($),
        (f = h($)),
        P && P.l($),
        (i = h($)),
        d && d.l($),
        $.forEach(n),
        this.h();
    },
    h() {
      e(t, 'id', 'g-_ai-chart-box'),
        e(t, 'class', 'svelte-zofauz'),
        Zt(() => y[1].call(t));
    },
    m(_, $) {
      U(_, t, $),
        m && m.m(t, null),
        s(t, f),
        P && P.m(t, null),
        s(t, i),
        d && d.m(t, null),
        (u = sa(t, y[1].bind(t)));
    },
    p(_, [$]) {
      _[0] && _[0] >= 0 && _[0] < 510
        ? m
          ? m.p(_, $)
          : ((m = Yt()), m.c(), m.m(t, f))
        : m && (m.d(1), (m = null)),
        _[0] && _[0] >= 510 && _[0] < 660
          ? P
            ? P.p(_, $)
            : ((P = Bt()), P.c(), P.m(t, i))
          : P && (P.d(1), (P = null)),
        _[0] && _[0] >= 660
          ? d
            ? d.p(_, $)
            : ((d = Ft()), d.c(), d.m(t, null))
          : d && (d.d(1), (d = null));
    },
    i: cs,
    o: cs,
    d(_) {
      _ && n(t), m && m.d(), P && P.d(), d && d.d(), u();
    },
  };
}
function ia(y, t, f) {
  let i = null;
  function u() {
    (i = this.clientWidth), f(0, i);
  }
  return [i, u];
}
class Tt extends Vt {
  constructor(t) {
    super();
    Ct(this, t, ia, pa, St, {});
  }
}
var ca = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: Tt,
});
function ra(y) {
  switch (y) {
    case './ai2html/ai-chart.exclude.svelte':
      return Qt(
        () =>
          Promise.resolve().then(function () {
            return ca;
          }),
        void 0
      );
    default:
      return new Promise(function (t, f) {
        (typeof queueMicrotask == 'function'
          ? queueMicrotask
          : setTimeout)(f.bind(null, new Error('Unknown variable dynamic import: ' + y)));
      });
  }
}
function ua(y) {
  let t, f;
  return (
    (t = new Dt({ props: { AiGraphic: Tt } })),
    {
      c() {
        pt(t.$$.fragment);
      },
      l(i) {
        rt(t.$$.fragment, i);
      },
      m(i, u) {
        it(t, i, u), (f = !0);
      },
      p: cs,
      i(i) {
        f || (_s(t.$$.fragment, i), (f = !0));
      },
      o(i) {
        As(t.$$.fragment, i), (f = !1);
      },
      d(i) {
        ct(t, i);
      },
    }
  );
}
function da(y) {
  let t, f;
  return (
    (t = new Dt({ props: { AiGraphic: Tt, size: 'wide' } })),
    {
      c() {
        pt(t.$$.fragment);
      },
      l(i) {
        rt(t.$$.fragment, i);
      },
      m(i, u) {
        it(t, i, u), (f = !0);
      },
      p: cs,
      i(i) {
        f || (_s(t.$$.fragment, i), (f = !0));
      },
      o(i) {
        As(t.$$.fragment, i), (f = !1);
      },
      d(i) {
        ct(t, i);
      },
    }
  );
}
function fa(y) {
  let t, f, i, u, m, P;
  return {
    c() {
      (t = l('div')),
        (f = l('h4')),
        (i = g('Earthquake in Haiti')),
        (u = k()),
        (m = l('p')),
        (P = g('A 7.0 magnitude earthquake struck the island on Tuesday.')),
        this.h();
    },
    l(d) {
      t = o(d, 'DIV', { slot: !0, class: !0 });
      var _ = p(t);
      f = o(_, 'H4', { class: !0 });
      var $ = p(f);
      (i = v($, 'Earthquake in Haiti')),
        $.forEach(n),
        (u = h(_)),
        (m = o(_, 'P', {}));
      var E = p(m);
      (P = v(E, 'A 7.0 magnitude earthquake struck the island on Tuesday.')),
        E.forEach(n),
        _.forEach(n),
        this.h();
    },
    h() {
      e(f, 'class', 'svelte-xmoab3'),
        e(t, 'slot', 'title'),
        e(t, 'class', 'title svelte-xmoab3');
    },
    m(d, _) {
      U(d, t, _), s(t, f), s(f, i), s(t, u), s(t, m), s(m, P);
    },
    d(d) {
      d && n(t);
    },
  };
}
function ga(y) {
  let t, f, i, u, m, P;
  return {
    c() {
      (t = l('aside')),
        (f = l('p')),
        (i = g('Note: Data current as of Wednesday.')),
        (u = k()),
        (m = l('p')),
        (P = g('Source: USGIS')),
        this.h();
    },
    l(d) {
      t = o(d, 'ASIDE', { slot: !0 });
      var _ = p(t);
      f = o(_, 'P', { class: !0 });
      var $ = p(f);
      (i = v($, 'Note: Data current as of Wednesday.')),
        $.forEach(n),
        (u = h(_)),
        (m = o(_, 'P', { class: !0 }));
      var E = p(m);
      (P = v(E, 'Source: USGIS')), E.forEach(n), _.forEach(n), this.h();
    },
    h() {
      e(f, 'class', 'note'), e(m, 'class', 'source'), e(t, 'slot', 'notes');
    },
    m(d, _) {
      U(d, t, _), s(t, f), s(f, i), s(t, u), s(t, m), s(m, P);
    },
    d(d) {
      d && n(t);
    },
  };
}
function va(y) {
  let t, f;
  return (
    (t = new Dt({
      props: {
        AiGraphic: Tt,
        id: 'ai-map',
        $$slots: { notes: [ga], title: [fa] },
        $$scope: { ctx: y },
      },
    })),
    {
      c() {
        pt(t.$$.fragment);
      },
      l(i) {
        rt(t.$$.fragment, i);
      },
      m(i, u) {
        it(t, i, u), (f = !0);
      },
      p(i, u) {
        const m = {};
        u & 4 && (m.$$scope = { dirty: u, ctx: i }), t.$set(m);
      },
      i(i) {
        f || (_s(t.$$.fragment, i), (f = !0));
      },
      o(i) {
        As(t.$$.fragment, i), (f = !1);
      },
      d(i) {
        ct(t, i);
      },
    }
  );
}
function ka(y) {
  return { c: cs, l: cs, m: cs, p: cs, i: cs, o: cs, d: cs };
}
function ha(y) {
  let t, f;
  return (
    (t = new Dt({ props: { AiGraphic: y[1] } })),
    {
      c() {
        pt(t.$$.fragment);
      },
      l(i) {
        rt(t.$$.fragment, i);
      },
      m(i, u) {
        it(t, i, u), (f = !0);
      },
      p: cs,
      i(i) {
        f || (_s(t.$$.fragment, i), (f = !0));
      },
      o(i) {
        As(t.$$.fragment, i), (f = !1);
      },
      d(i) {
        ct(t, i);
      },
    }
  );
}
function ma(y) {
  return { c: cs, l: cs, m: cs, p: cs, i: cs, o: cs, d: cs };
}
function _a(y) {
  let t,
    f,
    i = {
      ctx: y,
      current: null,
      token: null,
      hasCatch: !1,
      pending: ma,
      then: ha,
      catch: ka,
      value: 1,
      blocks: [, , ,],
    };
  return (
    ta(y[0]('ai-chart'), i),
    {
      c() {
        (t = Rt()), i.block.c();
      },
      l(u) {
        (t = Rt()), i.block.l(u);
      },
      m(u, m) {
        U(u, t, m),
          i.block.m(u, (i.anchor = m)),
          (i.mount = () => t.parentNode),
          (i.anchor = t),
          (f = !0);
      },
      p(u, m) {
        (y = u), aa(i, y, m);
      },
      i(u) {
        f || (_s(i.block), (f = !0));
      },
      o(u) {
        for (let m = 0; m < 3; m += 1) {
          const P = i.blocks[m];
          As(P);
        }
        f = !1;
      },
      d(u) {
        u && n(t), i.block.d(u), (i.token = null), (i = null);
      },
    }
  );
}
function za(y) {
  let t,
    f,
    i,
    u,
    m,
    P,
    d,
    _,
    $,
    E,
    z,
    T = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MyAiChart <span class="token keyword">from</span> <span class="token string">'./some-chart.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span> <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>MyAiChart<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>`,
    vs,
    os,
    I,
    K,
    Z,
    Ss,
    A,
    as,
    Ms,
    bs,
    V,
    es,
    ws,
    js,
    C,
    X,
    Gs,
    Hs,
    D,
    Y,
    qs = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MyAiChart <span class="token keyword">from</span> <span class="token string">'./some-chart.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span> <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>MyAiChart<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wide<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>`,
    $s,
    b,
    ss,
    zs,
    Ps,
    ns,
    Is,
    ks,
    j = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MyAiChart <span class="token keyword">from</span> <span class="token string">'./some-chart.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Add an ID and change the default width of your graphic --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span> <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>MyAiChart<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ai-map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- Add a title and/or notes with slots --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Earthquake in Haiti<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>A 7.0 magnitude earthquake struck the island on Tuesday.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>notes<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>note<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Note: Data current as of Wednesday.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>source<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Source: USGIS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Ai2svelte</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">// You can now style those elements!
  h4</span> <span class="token punctuation">&#123;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> darkred<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,
    ts,
    fs,
    Ds,
    x,
    B,
    Ls,
    hs,
    L,
    rs,
    Ts,
    Q,
    O = `<code class="language-bash"><span class="token comment"># In your Google doc...</span>
<span class="token punctuation">[</span>blocks<span class="token punctuation">]</span>

<span class="token comment"># ...</span>
Type: ai2svelte
ComponentName: my-chart

<span class="token punctuation">[</span><span class="token punctuation">]</span></code>`,
    is,
    ms,
    us = `<code class="language-svelte"><span class="token comment">&lt;!-- src/lib/Page.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> content <span class="token keyword">from</span> <span class="token string">'$locales/en/content.json'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">fetchComponent</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">componentName</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">./ai2html/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>componentName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.svelte</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">content<span class="token punctuation">.</span>blocks </span><span class="token keyword">as</span> <span class="token language-javascript">block<span class="token punctuation">&#125;</span></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> block<span class="token punctuation">.</span>Type <span class="token operator">===</span> <span class="token string">'ai2svelte'</span><span class="token punctuation">&#125;</span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">await</span> <span class="token function">fetchComponent</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>ComponentName<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>then component<span class="token punctuation">&#125;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span> <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>component<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>catch error<span class="token punctuation">&#125;</span></span>
      <span class="token language-javascript"><span class="token punctuation">&#123;</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Error fetching component: ./ai2html/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>block<span class="token punctuation">.</span>ComponentName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.svelte</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
        error
      <span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">await</span><span class="token punctuation">&#125;</span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span></code>`,
    S,
    ls,
    ds,
    ps,
    J,
    ys,
    Ns,
    H,
    W,
    Es,
    Vs,
    G,
    R;
  return (
    (os = new It({
      props: { $$slots: { default: [ua] }, $$scope: { ctx: y } },
    })),
    (b = new It({
      props: { $$slots: { default: [da] }, $$scope: { ctx: y } },
    })),
    (fs = new It({
      props: { $$slots: { default: [va] }, $$scope: { ctx: y } },
    })),
    (G = new It({
      props: { $$slots: { default: [_a] }, $$scope: { ctx: y } },
    })),
    {
      c() {
        (t = l('section')),
          (f = l('h2')),
          (i = g(Kt)),
          (u = k()),
          (m = l('p')),
          (P = g('Pass a component created by ')),
          (d = l('a')),
          (_ = g('ai2svelte')),
          ($ = g(
            ' to this component, which will wrap it in a graphics section tag.'
          )),
          (E = k()),
          (z = l('pre')),
          (vs = k()),
          pt(os.$$.fragment),
          (I = k()),
          (K = l('section')),
          (Z = l('p')),
          (Ss = g(
            'Adjust the size of the graphic by passing a class name corresponding to one of our well widths: '
          )),
          (A = l('code')),
          (as = g('wide')),
          (Ms = g(', ')),
          (bs = l('code')),
          (V = g('wider')),
          (es = g(', ')),
          (ws = l('code')),
          (js = g('widest')),
          (C = g(' or ')),
          (X = l('code')),
          (Gs = g('fluid')),
          (Hs = g('.')),
          (D = k()),
          (Y = l('pre')),
          ($s = k()),
          pt(b.$$.fragment),
          (ss = k()),
          (zs = l('section')),
          (Ps = l('p')),
          (ns = g('Add additional chart chatter through slots.')),
          (Is = k()),
          (ks = l('pre')),
          (ts = k()),
          pt(fs.$$.fragment),
          (Ds = k()),
          (x = l('section')),
          (B = l('p')),
          (Ls = g('You can use this component to layout AI graphics via an ')),
          (hs = l('a')),
          (L = g('ArchieML')),
          (rs = g(
            '-formatted Google doc by using the following pattern to dynamically import an ai2svelte component:'
          )),
          (Ts = k()),
          (Q = l('pre')),
          (is = k()),
          (ms = l('pre')),
          (S = k()),
          (ls = l('section')),
          (ds = l('p')),
          (ps = g('This comes with some restrictions, though. Be sure your ')),
          (J = l('code')),
          (ys = g('fetchComponent')),
          (Ns = g(' function follows ')),
          (H = l('a')),
          (W = g('the limits on dynamic imports')),
          (Es = g('.')),
          (Vs = k()),
          pt(G.$$.fragment),
          this.h();
      },
      l(r) {
        t = o(r, 'SECTION', {});
        var w = p(t);
        f = o(w, 'H2', {});
        var N = p(f);
        (i = v(N, Kt)), N.forEach(n), (u = h(w)), (m = o(w, 'P', {}));
        var F = p(m);
        (P = v(F, 'Pass a component created by ')),
          (d = o(F, 'A', { href: !0, rel: !0 }));
        var xs = p(d);
        (_ = v(xs, 'ai2svelte')),
          xs.forEach(n),
          ($ = v(
            F,
            ' to this component, which will wrap it in a graphics section tag.'
          )),
          F.forEach(n),
          w.forEach(n),
          (E = h(r)),
          (z = o(r, 'PRE', { class: !0 }));
        var Cs = p(z);
        Cs.forEach(n),
          (vs = h(r)),
          rt(os.$$.fragment, r),
          (I = h(r)),
          (K = o(r, 'SECTION', {}));
        var M = p(K);
        Z = o(M, 'P', {});
        var q = p(Z);
        (Ss = v(
          q,
          'Adjust the size of the graphic by passing a class name corresponding to one of our well widths: '
        )),
          (A = o(q, 'CODE', {}));
        var Rs = p(A);
        (as = v(Rs, 'wide')),
          Rs.forEach(n),
          (Ms = v(q, ', ')),
          (bs = o(q, 'CODE', {}));
        var gs = p(bs);
        (V = v(gs, 'wider')),
          gs.forEach(n),
          (es = v(q, ', ')),
          (ws = o(q, 'CODE', {}));
        var c = p(ws);
        (js = v(c, 'widest')),
          c.forEach(n),
          (C = v(q, ' or ')),
          (X = o(q, 'CODE', {}));
        var Ws = p(X);
        (Gs = v(Ws, 'fluid')),
          Ws.forEach(n),
          (Hs = v(q, '.')),
          q.forEach(n),
          M.forEach(n),
          (D = h(r)),
          (Y = o(r, 'PRE', { class: !0 }));
        var st = p(Y);
        st.forEach(n),
          ($s = h(r)),
          rt(b.$$.fragment, r),
          (ss = h(r)),
          (zs = o(r, 'SECTION', {}));
        var Ys = p(zs);
        Ps = o(Ys, 'P', {});
        var Bs = p(Ps);
        (ns = v(Bs, 'Add additional chart chatter through slots.')),
          Bs.forEach(n),
          Ys.forEach(n),
          (Is = h(r)),
          (ks = o(r, 'PRE', { class: !0 }));
        var tt = p(ks);
        tt.forEach(n),
          (ts = h(r)),
          rt(fs.$$.fragment, r),
          (Ds = h(r)),
          (x = o(r, 'SECTION', {}));
        var Fs = p(x);
        B = o(Fs, 'P', {});
        var Us = p(B);
        (Ls = v(
          Us,
          'You can use this component to layout AI graphics via an '
        )),
          (hs = o(Us, 'A', { href: !0, rel: !0 }));
        var Ks = p(hs);
        (L = v(Ks, 'ArchieML')),
          Ks.forEach(n),
          (rs = v(
            Us,
            '-formatted Google doc by using the following pattern to dynamically import an ai2svelte component:'
          )),
          Us.forEach(n),
          Fs.forEach(n),
          (Ts = h(r)),
          (Q = o(r, 'PRE', { class: !0 }));
        var at = p(Q);
        at.forEach(n), (is = h(r)), (ms = o(r, 'PRE', { class: !0 }));
        var et = p(ms);
        et.forEach(n), (S = h(r)), (ls = o(r, 'SECTION', {}));
        var Qs = p(ls);
        ds = o(Qs, 'P', {});
        var Os = p(ds);
        (ps = v(
          Os,
          'This comes with some restrictions, though. Be sure your '
        )),
          (J = o(Os, 'CODE', {}));
        var Xs = p(J);
        (ys = v(Xs, 'fetchComponent')),
          Xs.forEach(n),
          (Ns = v(Os, ' function follows ')),
          (H = o(Os, 'A', { href: !0, rel: !0 }));
        var Zs = p(H);
        (W = v(Zs, 'the limits on dynamic imports')),
          Zs.forEach(n),
          (Es = v(Os, '.')),
          Os.forEach(n),
          Qs.forEach(n),
          (Vs = h(r)),
          rt(G.$$.fragment, r),
          this.h();
      },
      h() {
        e(d, 'href', 'https://github.com/reuters-graphics/ai2svelte'),
          e(d, 'rel', 'nofollow'),
          e(z, 'class', 'language-svelte'),
          e(Y, 'class', 'language-svelte'),
          e(ks, 'class', 'language-svelte'),
          e(hs, 'href', 'http://archieml.org/'),
          e(hs, 'rel', 'nofollow'),
          e(Q, 'class', 'language-bash'),
          e(ms, 'class', 'language-svelte'),
          e(
            H,
            'href',
            'https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations'
          ),
          e(H, 'rel', 'nofollow');
      },
      m(r, w) {
        U(r, t, w),
          s(t, f),
          s(f, i),
          s(t, u),
          s(t, m),
          s(m, P),
          s(m, d),
          s(d, _),
          s(m, $),
          U(r, E, w),
          U(r, z, w),
          (z.innerHTML = T),
          U(r, vs, w),
          it(os, r, w),
          U(r, I, w),
          U(r, K, w),
          s(K, Z),
          s(Z, Ss),
          s(Z, A),
          s(A, as),
          s(Z, Ms),
          s(Z, bs),
          s(bs, V),
          s(Z, es),
          s(Z, ws),
          s(ws, js),
          s(Z, C),
          s(Z, X),
          s(X, Gs),
          s(Z, Hs),
          U(r, D, w),
          U(r, Y, w),
          (Y.innerHTML = qs),
          U(r, $s, w),
          it(b, r, w),
          U(r, ss, w),
          U(r, zs, w),
          s(zs, Ps),
          s(Ps, ns),
          U(r, Is, w),
          U(r, ks, w),
          (ks.innerHTML = j),
          U(r, ts, w),
          it(fs, r, w),
          U(r, Ds, w),
          U(r, x, w),
          s(x, B),
          s(B, Ls),
          s(B, hs),
          s(hs, L),
          s(B, rs),
          U(r, Ts, w),
          U(r, Q, w),
          (Q.innerHTML = O),
          U(r, is, w),
          U(r, ms, w),
          (ms.innerHTML = us),
          U(r, S, w),
          U(r, ls, w),
          s(ls, ds),
          s(ds, ps),
          s(ds, J),
          s(J, ys),
          s(ds, Ns),
          s(ds, H),
          s(H, W),
          s(ds, Es),
          U(r, Vs, w),
          it(G, r, w),
          (R = !0);
      },
      p(r, [w]) {
        const N = {};
        w & 4 && (N.$$scope = { dirty: w, ctx: r }), os.$set(N);
        const F = {};
        w & 4 && (F.$$scope = { dirty: w, ctx: r }), b.$set(F);
        const xs = {};
        w & 4 && (xs.$$scope = { dirty: w, ctx: r }), fs.$set(xs);
        const Cs = {};
        w & 4 && (Cs.$$scope = { dirty: w, ctx: r }), G.$set(Cs);
      },
      i(r) {
        R ||
          (_s(os.$$.fragment, r),
          _s(b.$$.fragment, r),
          _s(fs.$$.fragment, r),
          _s(G.$$.fragment, r),
          (R = !0));
      },
      o(r) {
        As(os.$$.fragment, r),
          As(b.$$.fragment, r),
          As(fs.$$.fragment, r),
          As(G.$$.fragment, r),
          (R = !1);
      },
      d(r) {
        r && n(t),
          r && n(E),
          r && n(z),
          r && n(vs),
          ct(os, r),
          r && n(I),
          r && n(K),
          r && n(D),
          r && n(Y),
          r && n($s),
          ct(b, r),
          r && n(ss),
          r && n(zs),
          r && n(Is),
          r && n(ks),
          r && n(ts),
          ct(fs, r),
          r && n(Ds),
          r && n(x),
          r && n(Ts),
          r && n(Q),
          r && n(is),
          r && n(ms),
          r && n(S),
          r && n(ls),
          r && n(Vs),
          ct(G, r);
      },
    }
  );
}
const ya = {
    title: 'Ai2svelte',
    description: 'A shortcut for ai2svelte graphics.',
    slug: 'ai2svelte',
  },
  { title: Kt, description: Aa, slug: $a } = ya;
function Ea(y) {
  return [async (f) => (await ra(`./ai2html/${f}.exclude.svelte`)).default];
}
class Ia extends Vt {
  constructor(t) {
    super();
    Ct(this, t, Ea, za, St, {});
  }
}
export { Ia as default, ya as metadata };
