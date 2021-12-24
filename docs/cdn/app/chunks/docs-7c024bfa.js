import { _ as Kt } from './preload-helper-438f94a3.js';
import {
  S as Vt,
  i as Ct,
  s as St,
  E as Mt,
  F as Lt,
  G as Nt,
  x as _s,
  u as $s,
  e as l,
  k,
  j as pt,
  c as o,
  a as p,
  n as m,
  m as rt,
  d as n,
  b as e,
  f as U,
  H as s,
  o as it,
  r as jt,
  w as Gt,
  v as ct,
  Z as Qt,
  D as Ot,
  t as g,
  g as v,
  _ as a,
  I as is,
  $ as Xt,
  a0 as sa,
  a1 as ta,
  l as Rt,
  a2 as aa,
} from './vendor-7ea24681.js';
import { D as It } from './index-457577f8.js';
import { a as Ht } from './paths-6758d194.js';
const ea = (y) => ({}),
  Jt = (y) => ({}),
  na = (y) => ({}),
  qt = (y) => ({});
function Ut(y) {
  let t;
  const f = y[5].title,
    i = Ot(f, y, y[4], qt);
  return {
    c() {
      i && i.c();
    },
    l(u) {
      i && i.l(u);
    },
    m(u, h) {
      i && i.m(u, h), (t = !0);
    },
    p(u, h) {
      i &&
        i.p &&
        (!t || h & 16) &&
        Mt(i, f, u, u[4], t ? Nt(f, u[4], h, na) : Lt(u[4]), qt);
    },
    i(u) {
      t || (_s(i, u), (t = !0));
    },
    o(u) {
      $s(i, u), (t = !1);
    },
    d(u) {
      i && i.d(u);
    },
  };
}
function Wt(y) {
  let t;
  const f = y[5].notes,
    i = Ot(f, y, y[4], Jt);
  return {
    c() {
      i && i.c();
    },
    l(u) {
      i && i.l(u);
    },
    m(u, h) {
      i && i.m(u, h), (t = !0);
    },
    p(u, h) {
      i &&
        i.p &&
        (!t || h & 16) &&
        Mt(i, f, u, u[4], t ? Nt(f, u[4], h, ea) : Lt(u[4]), Jt);
    },
    i(u) {
      t || (_s(i, u), (t = !0));
    },
    o(u) {
      $s(i, u), (t = !1);
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
    h,
    x,
    d = y[3].title && Ut(y);
  var _ = y[0];
  function P(z) {
    return {};
  }
  _ && (i = new _(P()));
  let $ = y[3].notes && Wt(y);
  return {
    c() {
      (t = l('section')),
        d && d.c(),
        (f = k()),
        i && pt(i.$$.fragment),
        (u = k()),
        $ && $.c(),
        this.h();
    },
    l(z) {
      t = o(z, 'SECTION', { class: !0, id: !0 });
      var C = p(t);
      d && d.l(C),
        (f = m(C)),
        i && rt(i.$$.fragment, C),
        (u = m(C)),
        $ && $.l(C),
        C.forEach(n),
        this.h();
    },
    h() {
      e(t, 'class', (h = 'ai2svelte-container graphic ' + y[2])),
        e(t, 'id', y[1]);
    },
    m(z, C) {
      U(z, t, C),
        d && d.m(t, null),
        s(t, f),
        i && it(i, t, null),
        s(t, u),
        $ && $.m(t, null),
        (x = !0);
    },
    p(z, [C]) {
      if (
        (z[3].title
          ? d
            ? (d.p(z, C), C & 8 && _s(d, 1))
            : ((d = Ut(z)), d.c(), _s(d, 1), d.m(t, f))
          : d &&
            (jt(),
            $s(d, 1, 1, () => {
              d = null;
            }),
            Gt()),
        _ !== (_ = z[0]))
      ) {
        if (i) {
          jt();
          const vs = i;
          $s(vs.$$.fragment, 1, 0, () => {
            ct(vs, 1);
          }),
            Gt();
        }
        _
          ? ((i = new _(P())),
            pt(i.$$.fragment),
            _s(i.$$.fragment, 1),
            it(i, t, u))
          : (i = null);
      }
      z[3].notes
        ? $
          ? ($.p(z, C), C & 8 && _s($, 1))
          : (($ = Wt(z)), $.c(), _s($, 1), $.m(t, null))
        : $ &&
          (jt(),
          $s($, 1, 1, () => {
            $ = null;
          }),
          Gt()),
        (!x || (C & 4 && h !== (h = 'ai2svelte-container graphic ' + z[2]))) &&
          e(t, 'class', h),
        (!x || C & 2) && e(t, 'id', z[1]);
    },
    i(z) {
      x || (_s(d), i && _s(i.$$.fragment, z), _s($), (x = !0));
    },
    o(z) {
      $s(d), i && $s(i.$$.fragment, z), $s($), (x = !1);
    },
    d(z) {
      z && n(t), d && d.d(), i && ct(i), $ && $.d();
    },
  };
}
function oa(y, t, f) {
  let { $$slots: i = {}, $$scope: u } = t;
  const h = Qt(i);
  let { AiGraphic: x } = t,
    { id: d = '' } = t,
    { size: _ = 'normal' } = t;
  return (
    (y.$$set = (P) => {
      'AiGraphic' in P && f(0, (x = P.AiGraphic)),
        'id' in P && f(1, (d = P.id)),
        'size' in P && f(2, (_ = P.size)),
        '$$scope' in P && f(4, (u = P.$$scope));
    }),
    [x, d, _, h, u, i]
  );
}
class Dt extends Vt {
  constructor(t) {
    super();
    Ct(this, t, oa, la, St, { AiGraphic: 0, id: 1, size: 2 });
  }
}
function Yt(y) {
  let t,
    f,
    i,
    u,
    h,
    x,
    d,
    _,
    P,
    $,
    z,
    C,
    vs,
    ds,
    I,
    Z,
    X,
    Ss,
    A,
    as,
    js,
    bs,
    T,
    es,
    xs,
    Gs,
    V,
    Q,
    Hs,
    Ms,
    D,
    Y,
    qs,
    As,
    E,
    ss,
    zs,
    Ps,
    ns,
    Is,
    ks,
    G,
    ts,
    fs,
    Ds,
    w,
    B,
    Ls,
    ms,
    L,
    cs,
    Ts,
    K,
    O,
    ps,
    hs,
    rs,
    S,
    ls,
    us,
    os,
    J,
    ys,
    Ns,
    M,
    W,
    Es,
    Vs,
    H,
    R,
    r,
    b,
    N,
    F,
    ws,
    Cs,
    j,
    q,
    Rs;
  return {
    c() {
      (t = l('div')),
        (f = l('div')),
        (i = k()),
        (u = l('div')),
        (x = k()),
        (d = l('div')),
        (_ = l('p')),
        (P = g('Shake intensity')),
        ($ = k()),
        (z = l('div')),
        (C = l('p')),
        (vs = g('Light')),
        (ds = k()),
        (I = l('div')),
        (Z = l('p')),
        (X = g('Moderate')),
        (Ss = k()),
        (A = l('div')),
        (as = l('p')),
        (js = g('Cap-Haitien')),
        (bs = k()),
        (T = l('div')),
        (es = l('p')),
        (xs = g('Strong')),
        (Gs = k()),
        (V = l('div')),
        (Q = l('p')),
        (Hs = g('Very strong')),
        (Ms = k()),
        (D = l('div')),
        (Y = l('p')),
        (qs = g('Gona\xEFves')),
        (As = k()),
        (E = l('div')),
        (ss = l('p')),
        (zs = g('Caribbean')),
        (Ps = k()),
        (ns = l('p')),
        (Is = g('Sea')),
        (ks = k()),
        (G = l('div')),
        (ts = l('p')),
        (fs = g('HAITI')),
        (Ds = k()),
        (w = l('div')),
        (B = l('p')),
        (Ls = g('Jeremie')),
        (ms = k()),
        (L = l('div')),
        (cs = l('p')),
        (Ts = g('Port-au-Prince')),
        (K = k()),
        (O = l('div')),
        (ps = l('p')),
        (hs = g('Epicenter')),
        (rs = k()),
        (S = l('div')),
        (ls = l('p')),
        (us = g('Jacmel')),
        (os = k()),
        (J = l('div')),
        (ys = l('p')),
        (Ns = g('Les Cayes')),
        (M = k()),
        (W = l('div')),
        (Es = l('p')),
        (Vs = g('50 mi')),
        (H = k()),
        (R = l('div')),
        (r = l('p')),
        (b = g('Dominican')),
        (N = k()),
        (F = l('p')),
        (ws = g('Republic')),
        (Cs = k()),
        (j = l('div')),
        (q = l('p')),
        (Rs = g('50 km')),
        this.h();
    },
    l(gs) {
      t = o(gs, 'DIV', { id: !0, class: !0, style: !0 });
      var c = p(t);
      (f = o(c, 'DIV', { style: !0 })),
        p(f).forEach(n),
        (i = m(c)),
        (u = o(c, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        p(u).forEach(n),
        (x = m(c)),
        (d = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ws = p(d);
      _ = o(Ws, 'P', { class: !0 });
      var st = p(_);
      (P = v(st, 'Shake intensity')),
        st.forEach(n),
        Ws.forEach(n),
        ($ = m(c)),
        (z = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ys = p(z);
      C = o(Ys, 'P', { class: !0 });
      var Bs = p(C);
      (vs = v(Bs, 'Light')),
        Bs.forEach(n),
        Ys.forEach(n),
        (ds = m(c)),
        (I = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var tt = p(I);
      Z = o(tt, 'P', { class: !0 });
      var Fs = p(Z);
      (X = v(Fs, 'Moderate')),
        Fs.forEach(n),
        tt.forEach(n),
        (Ss = m(c)),
        (A = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Us = p(A);
      as = o(Us, 'P', { class: !0 });
      var Zs = p(as);
      (js = v(Zs, 'Cap-Haitien')),
        Zs.forEach(n),
        Us.forEach(n),
        (bs = m(c)),
        (T = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var at = p(T);
      es = o(at, 'P', { class: !0 });
      var et = p(es);
      (xs = v(et, 'Strong')),
        et.forEach(n),
        at.forEach(n),
        (Gs = m(c)),
        (V = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ks = p(V);
      Q = o(Ks, 'P', { class: !0 });
      var Os = p(Q);
      (Hs = v(Os, 'Very strong')),
        Os.forEach(n),
        Ks.forEach(n),
        (Ms = m(c)),
        (D = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qs = p(D);
      Y = o(Qs, 'P', { class: !0 });
      var Xs = p(Y);
      (qs = v(Xs, 'Gona\xEFves')),
        Xs.forEach(n),
        Qs.forEach(n),
        (As = m(c)),
        (E = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Js = p(E);
      ss = o(Js, 'P', { class: !0 });
      var ut = p(ss);
      (zs = v(ut, 'Caribbean')),
        ut.forEach(n),
        (Ps = m(Js)),
        (ns = o(Js, 'P', { class: !0 }));
      var dt = p(ns);
      (Is = v(dt, 'Sea')),
        dt.forEach(n),
        Js.forEach(n),
        (ks = m(c)),
        (G = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var ft = p(G);
      ts = o(ft, 'P', { class: !0 });
      var gt = p(ts);
      (fs = v(gt, 'HAITI')),
        gt.forEach(n),
        ft.forEach(n),
        (Ds = m(c)),
        (w = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var nt = p(w);
      B = o(nt, 'P', { class: !0 });
      var vt = p(B);
      (Ls = v(vt, 'Jeremie')),
        vt.forEach(n),
        nt.forEach(n),
        (ms = m(c)),
        (L = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var kt = p(L);
      cs = o(kt, 'P', { class: !0 });
      var mt = p(cs);
      (Ts = v(mt, 'Port-au-Prince')),
        mt.forEach(n),
        kt.forEach(n),
        (K = m(c)),
        (O = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var ht = p(O);
      ps = o(ht, 'P', { class: !0 });
      var _t = p(ps);
      (hs = v(_t, 'Epicenter')),
        _t.forEach(n),
        ht.forEach(n),
        (rs = m(c)),
        (S = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var lt = p(S);
      ls = o(lt, 'P', { class: !0 });
      var zt = p(ls);
      (us = v(zt, 'Jacmel')),
        zt.forEach(n),
        lt.forEach(n),
        (os = m(c)),
        (J = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var yt = p(J);
      ys = o(yt, 'P', { class: !0 });
      var Et = p(ys);
      (Ns = v(Et, 'Les Cayes')),
        Et.forEach(n),
        yt.forEach(n),
        (M = m(c)),
        (W = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var bt = p(W);
      Es = o(bt, 'P', { class: !0 });
      var xt = p(Es);
      (Vs = v(xt, '50 mi')),
        xt.forEach(n),
        bt.forEach(n),
        (H = m(c)),
        (R = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var ot = p(R);
      r = o(ot, 'P', { class: !0 });
      var Pt = p(r);
      (b = v(Pt, 'Dominican')),
        Pt.forEach(n),
        (N = m(ot)),
        (F = o(ot, 'P', { class: !0 }));
      var wt = p(F);
      (ws = v(wt, 'Republic')),
        wt.forEach(n),
        ot.forEach(n),
        (Cs = m(c)),
        (j = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var $t = p(j);
      q = o($t, 'P', { class: !0 });
      var At = p(q);
      (Rs = v(At, '50 km')),
        At.forEach(n),
        $t.forEach(n),
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
          (h = `background-image: url(${Ht}/images/graphics/ai-chart-xs.png);`)
        ),
        e(_, 'class', 'g-pstyle0 svelte-zofauz'),
        e(d, 'id', 'g-ai0-1'),
        e(d, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(d, 'top', '3.216%'),
        a(d, 'margin-top', '-7.7px'),
        a(d, 'left', '0.5952%'),
        a(d, 'width', '99px'),
        e(C, 'class', 'g-pstyle0 svelte-zofauz'),
        e(z, 'id', 'g-ai0-2'),
        e(z, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(z, 'top', '9.8251%'),
        a(z, 'margin-top', '-7.7px'),
        a(z, 'left', '4.9821%'),
        a(z, 'width', '47px'),
        e(Z, 'class', 'g-pstyle0 svelte-zofauz'),
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
        e(T, 'id', 'g-ai0-5'),
        e(T, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(T, 'top', '21.7216%'),
        a(T, 'margin-top', '-7.7px'),
        a(T, 'left', '4.9821%'),
        a(T, 'width', '55px'),
        e(Q, 'class', 'g-pstyle0 svelte-zofauz'),
        e(V, 'id', 'g-ai0-6'),
        e(V, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(V, 'top', '28.0002%'),
        a(V, 'margin-top', '-7.7px'),
        a(V, 'left', '4.9821%'),
        a(V, 'width', '78px'),
        e(Y, 'class', 'g-pstyle0 svelte-zofauz'),
        e(D, 'id', 'g-ai0-7'),
        e(D, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(D, 'top', '28.9916%'),
        a(D, 'margin-top', '-7.7px'),
        a(D, 'left', '62.2348%'),
        a(D, 'width', '68px'),
        e(ss, 'class', 'g-pstyle1 svelte-zofauz'),
        e(ns, 'class', 'g-pstyle1 svelte-zofauz'),
        e(E, 'id', 'g-ai0-8'),
        e(E, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(E, 'top', '39.9449%'),
        a(E, 'margin-top', '-14.9px'),
        a(E, 'left', '28.714%'),
        a(E, 'margin-left', '-36.5px'),
        a(E, 'width', '73px'),
        e(ts, 'class', 'g-pstyle2 svelte-zofauz'),
        e(G, 'id', 'g-ai0-9'),
        e(G, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(G, 'top', '42.6579%'),
        a(G, 'margin-top', '-10.1px'),
        a(G, 'left', '68.5061%'),
        a(G, 'width', '77px'),
        e(B, 'class', 'g-pstyle0 svelte-zofauz'),
        e(w, 'id', 'g-ai0-10'),
        e(w, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(w, 'top', '59.0632%'),
        a(w, 'margin-top', '-7.7px'),
        a(w, 'left', '11.2526%'),
        a(w, 'width', '63px'),
        e(cs, 'class', 'g-pstyle3 svelte-zofauz'),
        e(L, 'id', 'g-ai0-11'),
        e(L, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(L, 'top', '61.1155%'),
        a(L, 'margin-top', '-8.9px'),
        a(L, 'left', '70.5455%'),
        a(L, 'width', '106px'),
        e(ps, 'class', 'g-pstyle3 svelte-zofauz'),
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
        e(j, 'id', 'g-ai0-17'),
        e(j, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(j, 'top', '93.7611%'),
        a(j, 'margin-top', '-7.7px'),
        a(j, 'left', '0.6179%'),
        a(j, 'width', '52px'),
        e(t, 'id', 'g-_ai-chart-xs'),
        e(t, 'class', 'g-artboard svelte-zofauz'),
        e(t, 'style', '');
    },
    m(gs, c) {
      U(gs, t, c),
        s(t, f),
        s(t, i),
        s(t, u),
        s(t, x),
        s(t, d),
        s(d, _),
        s(_, P),
        s(t, $),
        s(t, z),
        s(z, C),
        s(C, vs),
        s(t, ds),
        s(t, I),
        s(I, Z),
        s(Z, X),
        s(t, Ss),
        s(t, A),
        s(A, as),
        s(as, js),
        s(t, bs),
        s(t, T),
        s(T, es),
        s(es, xs),
        s(t, Gs),
        s(t, V),
        s(V, Q),
        s(Q, Hs),
        s(t, Ms),
        s(t, D),
        s(D, Y),
        s(Y, qs),
        s(t, As),
        s(t, E),
        s(E, ss),
        s(ss, zs),
        s(E, Ps),
        s(E, ns),
        s(ns, Is),
        s(t, ks),
        s(t, G),
        s(G, ts),
        s(ts, fs),
        s(t, Ds),
        s(t, w),
        s(w, B),
        s(B, Ls),
        s(t, ms),
        s(t, L),
        s(L, cs),
        s(cs, Ts),
        s(t, K),
        s(t, O),
        s(O, ps),
        s(ps, hs),
        s(t, rs),
        s(t, S),
        s(S, ls),
        s(ls, us),
        s(t, os),
        s(t, J),
        s(J, ys),
        s(ys, Ns),
        s(t, M),
        s(t, W),
        s(W, Es),
        s(Es, Vs),
        s(t, H),
        s(t, R),
        s(R, r),
        s(r, b),
        s(R, N),
        s(R, F),
        s(F, ws),
        s(t, Cs),
        s(t, j),
        s(j, q),
        s(q, Rs);
    },
    p: is,
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
    h,
    x,
    d,
    _,
    P,
    $,
    z,
    C,
    vs,
    ds,
    I,
    Z,
    X,
    Ss,
    A,
    as,
    js,
    bs,
    T,
    es,
    xs,
    Gs,
    V,
    Q,
    Hs,
    Ms,
    D,
    Y,
    qs,
    As,
    E,
    ss,
    zs,
    Ps,
    ns,
    Is,
    ks,
    G,
    ts,
    fs,
    Ds,
    w,
    B,
    Ls,
    ms,
    L,
    cs,
    Ts,
    K,
    O,
    ps,
    hs,
    rs,
    S,
    ls,
    us,
    os,
    J,
    ys,
    Ns,
    M,
    W,
    Es,
    Vs,
    H,
    R,
    r,
    b,
    N,
    F,
    ws,
    Cs,
    j,
    q,
    Rs;
  return {
    c() {
      (t = l('div')),
        (f = l('div')),
        (i = k()),
        (u = l('div')),
        (x = k()),
        (d = l('div')),
        (_ = l('p')),
        (P = g('Shake intensity')),
        ($ = k()),
        (z = l('div')),
        (C = l('p')),
        (vs = g('Light')),
        (ds = k()),
        (I = l('div')),
        (Z = l('p')),
        (X = g('Moderate')),
        (Ss = k()),
        (A = l('div')),
        (as = l('p')),
        (js = g('Cap-Haitien')),
        (bs = k()),
        (T = l('div')),
        (es = l('p')),
        (xs = g('Strong')),
        (Gs = k()),
        (V = l('div')),
        (Q = l('p')),
        (Hs = g('Very strong')),
        (Ms = k()),
        (D = l('div')),
        (Y = l('p')),
        (qs = g('Gona\xEFves')),
        (As = k()),
        (E = l('div')),
        (ss = l('p')),
        (zs = g('Caribbean')),
        (Ps = k()),
        (ns = l('p')),
        (Is = g('Sea')),
        (ks = k()),
        (G = l('div')),
        (ts = l('p')),
        (fs = g('HAITI')),
        (Ds = k()),
        (w = l('div')),
        (B = l('p')),
        (Ls = g('Jeremie')),
        (ms = k()),
        (L = l('div')),
        (cs = l('p')),
        (Ts = g('Port-au-Prince')),
        (K = k()),
        (O = l('div')),
        (ps = l('p')),
        (hs = g('Epicenter')),
        (rs = k()),
        (S = l('div')),
        (ls = l('p')),
        (us = g('Dominican')),
        (os = k()),
        (J = l('p')),
        (ys = g('Republic')),
        (Ns = k()),
        (M = l('div')),
        (W = l('p')),
        (Es = g('Jacmel')),
        (Vs = k()),
        (H = l('div')),
        (R = l('p')),
        (r = g('Les Cayes')),
        (b = k()),
        (N = l('div')),
        (F = l('p')),
        (ws = g('50 mi')),
        (Cs = k()),
        (j = l('div')),
        (q = l('p')),
        (Rs = g('50 km')),
        this.h();
    },
    l(gs) {
      t = o(gs, 'DIV', { id: !0, class: !0, style: !0 });
      var c = p(t);
      (f = o(c, 'DIV', { style: !0 })),
        p(f).forEach(n),
        (i = m(c)),
        (u = o(c, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        p(u).forEach(n),
        (x = m(c)),
        (d = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ws = p(d);
      _ = o(Ws, 'P', { class: !0 });
      var st = p(_);
      (P = v(st, 'Shake intensity')),
        st.forEach(n),
        Ws.forEach(n),
        ($ = m(c)),
        (z = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ys = p(z);
      C = o(Ys, 'P', { class: !0 });
      var Bs = p(C);
      (vs = v(Bs, 'Light')),
        Bs.forEach(n),
        Ys.forEach(n),
        (ds = m(c)),
        (I = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var tt = p(I);
      Z = o(tt, 'P', { class: !0 });
      var Fs = p(Z);
      (X = v(Fs, 'Moderate')),
        Fs.forEach(n),
        tt.forEach(n),
        (Ss = m(c)),
        (A = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Us = p(A);
      as = o(Us, 'P', { class: !0 });
      var Zs = p(as);
      (js = v(Zs, 'Cap-Haitien')),
        Zs.forEach(n),
        Us.forEach(n),
        (bs = m(c)),
        (T = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var at = p(T);
      es = o(at, 'P', { class: !0 });
      var et = p(es);
      (xs = v(et, 'Strong')),
        et.forEach(n),
        at.forEach(n),
        (Gs = m(c)),
        (V = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ks = p(V);
      Q = o(Ks, 'P', { class: !0 });
      var Os = p(Q);
      (Hs = v(Os, 'Very strong')),
        Os.forEach(n),
        Ks.forEach(n),
        (Ms = m(c)),
        (D = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qs = p(D);
      Y = o(Qs, 'P', { class: !0 });
      var Xs = p(Y);
      (qs = v(Xs, 'Gona\xEFves')),
        Xs.forEach(n),
        Qs.forEach(n),
        (As = m(c)),
        (E = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Js = p(E);
      ss = o(Js, 'P', { class: !0 });
      var ut = p(ss);
      (zs = v(ut, 'Caribbean')),
        ut.forEach(n),
        (Ps = m(Js)),
        (ns = o(Js, 'P', { class: !0 }));
      var dt = p(ns);
      (Is = v(dt, 'Sea')),
        dt.forEach(n),
        Js.forEach(n),
        (ks = m(c)),
        (G = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var ft = p(G);
      ts = o(ft, 'P', { class: !0 });
      var gt = p(ts);
      (fs = v(gt, 'HAITI')),
        gt.forEach(n),
        ft.forEach(n),
        (Ds = m(c)),
        (w = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var nt = p(w);
      B = o(nt, 'P', { class: !0 });
      var vt = p(B);
      (Ls = v(vt, 'Jeremie')),
        vt.forEach(n),
        nt.forEach(n),
        (ms = m(c)),
        (L = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var kt = p(L);
      cs = o(kt, 'P', { class: !0 });
      var mt = p(cs);
      (Ts = v(mt, 'Port-au-Prince')),
        mt.forEach(n),
        kt.forEach(n),
        (K = m(c)),
        (O = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var ht = p(O);
      ps = o(ht, 'P', { class: !0 });
      var _t = p(ps);
      (hs = v(_t, 'Epicenter')),
        _t.forEach(n),
        ht.forEach(n),
        (rs = m(c)),
        (S = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var lt = p(S);
      ls = o(lt, 'P', { class: !0 });
      var zt = p(ls);
      (us = v(zt, 'Dominican')),
        zt.forEach(n),
        (os = m(lt)),
        (J = o(lt, 'P', { class: !0 }));
      var yt = p(J);
      (ys = v(yt, 'Republic')),
        yt.forEach(n),
        lt.forEach(n),
        (Ns = m(c)),
        (M = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Et = p(M);
      W = o(Et, 'P', { class: !0 });
      var bt = p(W);
      (Es = v(bt, 'Jacmel')),
        bt.forEach(n),
        Et.forEach(n),
        (Vs = m(c)),
        (H = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var xt = p(H);
      R = o(xt, 'P', { class: !0 });
      var ot = p(R);
      (r = v(ot, 'Les Cayes')),
        ot.forEach(n),
        xt.forEach(n),
        (b = m(c)),
        (N = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Pt = p(N);
      F = o(Pt, 'P', { class: !0 });
      var wt = p(F);
      (ws = v(wt, '50 mi')),
        wt.forEach(n),
        Pt.forEach(n),
        (Cs = m(c)),
        (j = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var $t = p(j);
      q = o($t, 'P', { class: !0 });
      var At = p(q);
      (Rs = v(At, '50 km')),
        At.forEach(n),
        $t.forEach(n),
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
          (h = `background-image: url(${Ht}/images/graphics/ai-chart-sm.png);`)
        ),
        e(_, 'class', 'g-pstyle0 svelte-zofauz'),
        e(d, 'id', 'g-ai1-1'),
        e(d, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(d, 'top', '3.8773%'),
        a(d, 'margin-top', '-9.4px'),
        a(d, 'left', '0.3278%'),
        a(d, 'width', '111px'),
        e(C, 'class', 'g-pstyle0 svelte-zofauz'),
        e(z, 'id', 'g-ai1-2'),
        e(z, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(z, 'top', '9.0933%'),
        a(z, 'margin-top', '-9.4px'),
        a(z, 'left', '3.0258%'),
        a(z, 'width', '52px'),
        e(Z, 'class', 'g-pstyle0 svelte-zofauz'),
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
        e(T, 'id', 'g-ai1-5'),
        e(T, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(T, 'top', '18.3397%'),
        a(T, 'margin-top', '-9.4px'),
        a(T, 'left', '3.0258%'),
        a(T, 'width', '61px'),
        e(Q, 'class', 'g-pstyle0 svelte-zofauz'),
        e(V, 'id', 'g-ai1-6'),
        e(V, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(V, 'top', '22.6073%'),
        a(V, 'margin-top', '-9.4px'),
        a(V, 'left', '3.0258%'),
        a(V, 'width', '88px'),
        e(Y, 'class', 'g-pstyle0 svelte-zofauz'),
        e(D, 'id', 'g-ai1-7'),
        e(D, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(D, 'top', '28.5344%'),
        a(D, 'margin-top', '-9.4px'),
        a(D, 'left', '55.9181%'),
        a(D, 'width', '76px'),
        e(ss, 'class', 'g-pstyle1 svelte-zofauz'),
        e(ns, 'class', 'g-pstyle1 svelte-zofauz'),
        e(E, 'id', 'g-ai1-8'),
        e(E, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(E, 'top', '38.8091%'),
        a(E, 'margin-top', '-17.7px'),
        a(E, 'left', '27.2818%'),
        a(E, 'margin-left', '-41px'),
        a(E, 'width', '82px'),
        e(ts, 'class', 'g-pstyle2 svelte-zofauz'),
        e(G, 'id', 'g-ai1-9'),
        e(G, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(G, 'top', '39.9724%'),
        a(G, 'margin-top', '-8.6px'),
        a(G, 'left', '61.2858%'),
        a(G, 'width', '67px'),
        e(B, 'class', 'g-pstyle0 svelte-zofauz'),
        e(w, 'id', 'g-ai1-10'),
        e(w, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(w, 'top', '56.985%'),
        a(w, 'margin-top', '-9.4px'),
        a(w, 'left', '12.2815%'),
        a(w, 'width', '69px'),
        e(cs, 'class', 'g-pstyle3 svelte-zofauz'),
        e(L, 'id', 'g-ai1-11'),
        e(L, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(L, 'top', '59.1569%'),
        a(L, 'margin-top', '-9.5px'),
        a(L, 'left', '63.0314%'),
        a(L, 'width', '112px'),
        e(ps, 'class', 'g-pstyle3 svelte-zofauz'),
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
        e(M, 'id', 'g-ai1-14'),
        e(M, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(M, 'top', '75.4778%'),
        a(M, 'margin-top', '-9.4px'),
        a(M, 'left', '57.3552%'),
        a(M, 'width', '64px'),
        e(R, 'class', 'g-pstyle0 svelte-zofauz'),
        e(H, 'id', 'g-ai1-15'),
        e(H, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(H, 'top', '76.6632%'),
        a(H, 'margin-top', '-9.4px'),
        a(H, 'left', '21.9639%'),
        a(H, 'width', '79px'),
        e(F, 'class', 'g-pstyle5 svelte-zofauz'),
        e(N, 'id', 'g-ai1-16'),
        e(N, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(N, 'top', '85.5251%'),
        a(N, 'margin-top', '-7.7px'),
        a(N, 'left', '0.1344%'),
        a(N, 'width', '49px'),
        e(q, 'class', 'g-pstyle5 svelte-zofauz'),
        e(j, 'id', 'g-ai1-17'),
        e(j, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(j, 'top', '90.0297%'),
        a(j, 'margin-top', '-7.7px'),
        a(j, 'left', '0.1344%'),
        a(j, 'width', '52px'),
        e(t, 'id', 'g-_ai-chart-sm'),
        e(t, 'class', 'g-artboard svelte-zofauz'),
        e(t, 'style', '');
    },
    m(gs, c) {
      U(gs, t, c),
        s(t, f),
        s(t, i),
        s(t, u),
        s(t, x),
        s(t, d),
        s(d, _),
        s(_, P),
        s(t, $),
        s(t, z),
        s(z, C),
        s(C, vs),
        s(t, ds),
        s(t, I),
        s(I, Z),
        s(Z, X),
        s(t, Ss),
        s(t, A),
        s(A, as),
        s(as, js),
        s(t, bs),
        s(t, T),
        s(T, es),
        s(es, xs),
        s(t, Gs),
        s(t, V),
        s(V, Q),
        s(Q, Hs),
        s(t, Ms),
        s(t, D),
        s(D, Y),
        s(Y, qs),
        s(t, As),
        s(t, E),
        s(E, ss),
        s(ss, zs),
        s(E, Ps),
        s(E, ns),
        s(ns, Is),
        s(t, ks),
        s(t, G),
        s(G, ts),
        s(ts, fs),
        s(t, Ds),
        s(t, w),
        s(w, B),
        s(B, Ls),
        s(t, ms),
        s(t, L),
        s(L, cs),
        s(cs, Ts),
        s(t, K),
        s(t, O),
        s(O, ps),
        s(ps, hs),
        s(t, rs),
        s(t, S),
        s(S, ls),
        s(ls, us),
        s(S, os),
        s(S, J),
        s(J, ys),
        s(t, Ns),
        s(t, M),
        s(M, W),
        s(W, Es),
        s(t, Vs),
        s(t, H),
        s(H, R),
        s(R, r),
        s(t, b),
        s(t, N),
        s(N, F),
        s(F, ws),
        s(t, Cs),
        s(t, j),
        s(j, q),
        s(q, Rs);
    },
    p: is,
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
    h,
    x,
    d,
    _,
    P,
    $,
    z,
    C,
    vs,
    ds,
    I,
    Z,
    X,
    Ss,
    A,
    as,
    js,
    bs,
    T,
    es,
    xs,
    Gs,
    V,
    Q,
    Hs,
    Ms,
    D,
    Y,
    qs,
    As,
    E,
    ss,
    zs,
    Ps,
    ns,
    Is,
    ks,
    G,
    ts,
    fs,
    Ds,
    w,
    B,
    Ls,
    ms,
    L,
    cs,
    Ts,
    K,
    O,
    ps,
    hs,
    rs,
    S,
    ls,
    us,
    os,
    J,
    ys,
    Ns,
    M,
    W,
    Es,
    Vs,
    H,
    R,
    r,
    b,
    N,
    F,
    ws,
    Cs,
    j,
    q,
    Rs;
  return {
    c() {
      (t = l('div')),
        (f = l('div')),
        (i = k()),
        (u = l('div')),
        (x = k()),
        (d = l('div')),
        (_ = l('p')),
        (P = g('Shake intensity')),
        ($ = k()),
        (z = l('div')),
        (C = l('p')),
        (vs = g('Light')),
        (ds = k()),
        (I = l('div')),
        (Z = l('p')),
        (X = g('Moderate')),
        (Ss = k()),
        (A = l('div')),
        (as = l('p')),
        (js = g('Cap-Haitien')),
        (bs = k()),
        (T = l('div')),
        (es = l('p')),
        (xs = g('Strong')),
        (Gs = k()),
        (V = l('div')),
        (Q = l('p')),
        (Hs = g('Very strong')),
        (Ms = k()),
        (D = l('div')),
        (Y = l('p')),
        (qs = g('Gona\xEFves')),
        (As = k()),
        (E = l('div')),
        (ss = l('p')),
        (zs = g('Caribbean')),
        (Ps = k()),
        (ns = l('p')),
        (Is = g('Sea')),
        (ks = k()),
        (G = l('div')),
        (ts = l('p')),
        (fs = g('HAITI')),
        (Ds = k()),
        (w = l('div')),
        (B = l('p')),
        (Ls = g('Dominican')),
        (ms = k()),
        (L = l('p')),
        (cs = g('Republic')),
        (Ts = k()),
        (K = l('div')),
        (O = l('p')),
        (ps = g('Jeremie')),
        (hs = k()),
        (rs = l('div')),
        (S = l('p')),
        (ls = g('Epicenter')),
        (us = k()),
        (os = l('div')),
        (J = l('p')),
        (ys = g('Port-au-Prince')),
        (Ns = k()),
        (M = l('div')),
        (W = l('p')),
        (Es = g('Jacmel')),
        (Vs = k()),
        (H = l('div')),
        (R = l('p')),
        (r = g('Les Cayes')),
        (b = k()),
        (N = l('div')),
        (F = l('p')),
        (ws = g('50 mi')),
        (Cs = k()),
        (j = l('div')),
        (q = l('p')),
        (Rs = g('50 km')),
        this.h();
    },
    l(gs) {
      t = o(gs, 'DIV', { id: !0, class: !0, style: !0 });
      var c = p(t);
      (f = o(c, 'DIV', { style: !0 })),
        p(f).forEach(n),
        (i = m(c)),
        (u = o(c, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        p(u).forEach(n),
        (x = m(c)),
        (d = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ws = p(d);
      _ = o(Ws, 'P', { class: !0 });
      var st = p(_);
      (P = v(st, 'Shake intensity')),
        st.forEach(n),
        Ws.forEach(n),
        ($ = m(c)),
        (z = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ys = p(z);
      C = o(Ys, 'P', { class: !0 });
      var Bs = p(C);
      (vs = v(Bs, 'Light')),
        Bs.forEach(n),
        Ys.forEach(n),
        (ds = m(c)),
        (I = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var tt = p(I);
      Z = o(tt, 'P', { class: !0 });
      var Fs = p(Z);
      (X = v(Fs, 'Moderate')),
        Fs.forEach(n),
        tt.forEach(n),
        (Ss = m(c)),
        (A = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Us = p(A);
      as = o(Us, 'P', { class: !0 });
      var Zs = p(as);
      (js = v(Zs, 'Cap-Haitien')),
        Zs.forEach(n),
        Us.forEach(n),
        (bs = m(c)),
        (T = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var at = p(T);
      es = o(at, 'P', { class: !0 });
      var et = p(es);
      (xs = v(et, 'Strong')),
        et.forEach(n),
        at.forEach(n),
        (Gs = m(c)),
        (V = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ks = p(V);
      Q = o(Ks, 'P', { class: !0 });
      var Os = p(Q);
      (Hs = v(Os, 'Very strong')),
        Os.forEach(n),
        Ks.forEach(n),
        (Ms = m(c)),
        (D = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qs = p(D);
      Y = o(Qs, 'P', { class: !0 });
      var Xs = p(Y);
      (qs = v(Xs, 'Gona\xEFves')),
        Xs.forEach(n),
        Qs.forEach(n),
        (As = m(c)),
        (E = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Js = p(E);
      ss = o(Js, 'P', { class: !0 });
      var ut = p(ss);
      (zs = v(ut, 'Caribbean')),
        ut.forEach(n),
        (Ps = m(Js)),
        (ns = o(Js, 'P', { class: !0 }));
      var dt = p(ns);
      (Is = v(dt, 'Sea')),
        dt.forEach(n),
        Js.forEach(n),
        (ks = m(c)),
        (G = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var ft = p(G);
      ts = o(ft, 'P', { class: !0 });
      var gt = p(ts);
      (fs = v(gt, 'HAITI')),
        gt.forEach(n),
        ft.forEach(n),
        (Ds = m(c)),
        (w = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var nt = p(w);
      B = o(nt, 'P', { class: !0 });
      var vt = p(B);
      (Ls = v(vt, 'Dominican')),
        vt.forEach(n),
        (ms = m(nt)),
        (L = o(nt, 'P', { class: !0 }));
      var kt = p(L);
      (cs = v(kt, 'Republic')),
        kt.forEach(n),
        nt.forEach(n),
        (Ts = m(c)),
        (K = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var mt = p(K);
      O = o(mt, 'P', { class: !0 });
      var ht = p(O);
      (ps = v(ht, 'Jeremie')),
        ht.forEach(n),
        mt.forEach(n),
        (hs = m(c)),
        (rs = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var _t = p(rs);
      S = o(_t, 'P', { class: !0 });
      var lt = p(S);
      (ls = v(lt, 'Epicenter')),
        lt.forEach(n),
        _t.forEach(n),
        (us = m(c)),
        (os = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var zt = p(os);
      J = o(zt, 'P', { class: !0 });
      var yt = p(J);
      (ys = v(yt, 'Port-au-Prince')),
        yt.forEach(n),
        zt.forEach(n),
        (Ns = m(c)),
        (M = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Et = p(M);
      W = o(Et, 'P', { class: !0 });
      var bt = p(W);
      (Es = v(bt, 'Jacmel')),
        bt.forEach(n),
        Et.forEach(n),
        (Vs = m(c)),
        (H = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var xt = p(H);
      R = o(xt, 'P', { class: !0 });
      var ot = p(R);
      (r = v(ot, 'Les Cayes')),
        ot.forEach(n),
        xt.forEach(n),
        (b = m(c)),
        (N = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var Pt = p(N);
      F = o(Pt, 'P', { class: !0 });
      var wt = p(F);
      (ws = v(wt, '50 mi')),
        wt.forEach(n),
        Pt.forEach(n),
        (Cs = m(c)),
        (j = o(c, 'DIV', { id: !0, class: !0, style: !0 }));
      var $t = p(j);
      q = o($t, 'P', { class: !0 });
      var At = p(q);
      (Rs = v(At, '50 km')),
        At.forEach(n),
        $t.forEach(n),
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
          (h = `background-image: url(${Ht}/images/graphics/ai-chart-md.png);`)
        ),
        e(_, 'class', 'g-pstyle0 svelte-zofauz'),
        e(d, 'id', 'g-ai2-1'),
        e(d, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(d, 'top', '2.3515%'),
        a(d, 'margin-top', '-9.4px'),
        a(d, 'left', '0.3608%'),
        a(d, 'width', '111px'),
        e(C, 'class', 'g-pstyle0 svelte-zofauz'),
        e(z, 'id', 'g-ai2-2'),
        e(z, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(z, 'top', '7.6811%'),
        a(z, 'margin-top', '-9.4px'),
        a(z, 'left', '2.6603%'),
        a(z, 'width', '52px'),
        e(Z, 'class', 'g-pstyle0 svelte-zofauz'),
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
        e(T, 'id', 'g-ai2-5'),
        e(T, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(T, 'top', '17.1983%'),
        a(T, 'margin-top', '-9.4px'),
        a(T, 'left', '2.6603%'),
        a(T, 'width', '61px'),
        e(Q, 'class', 'g-pstyle0 svelte-zofauz'),
        e(V, 'id', 'g-ai2-6'),
        e(V, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        a(V, 'top', '21.7666%'),
        a(V, 'margin-top', '-9.4px'),
        a(V, 'left', '2.6603%'),
        a(V, 'width', '88px'),
        e(Y, 'class', 'g-pstyle0 svelte-zofauz'),
        e(D, 'id', 'g-ai2-7'),
        e(D, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(D, 'top', '27.6672%'),
        a(D, 'margin-top', '-9.4px'),
        a(D, 'left', '55.993%'),
        a(D, 'width', '76px'),
        e(ss, 'class', 'g-pstyle1 svelte-zofauz'),
        e(ns, 'class', 'g-pstyle1 svelte-zofauz'),
        e(E, 'id', 'g-ai2-8'),
        e(E, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(E, 'top', '38.0099%'),
        a(E, 'margin-top', '-17.7px'),
        a(E, 'left', '27.2388%'),
        a(E, 'margin-left', '-41px'),
        a(E, 'width', '82px'),
        e(ts, 'class', 'g-pstyle2 svelte-zofauz'),
        e(G, 'id', 'g-ai2-9'),
        e(G, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(G, 'top', '42.7626%'),
        a(G, 'margin-top', '-10.7px'),
        a(G, 'left', '62.8914%'),
        a(G, 'width', '80px'),
        e(B, 'class', 'g-pstyle3 svelte-zofauz'),
        e(L, 'class', 'g-pstyle3 svelte-zofauz'),
        e(w, 'id', 'g-ai2-10'),
        e(w, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(w, 'top', '50.0029%'),
        a(w, 'margin-top', '-17.7px'),
        a(w, 'left', '92.295%'),
        a(w, 'margin-left', '-60.5px'),
        a(w, 'width', '121px'),
        e(O, 'class', 'g-pstyle0 svelte-zofauz'),
        e(K, 'id', 'g-ai2-11'),
        e(K, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(K, 'top', '57.3608%'),
        a(K, 'margin-top', '-9.4px'),
        a(K, 'left', '12.2815%'),
        a(K, 'width', '69px'),
        e(S, 'class', 'g-pstyle4 svelte-zofauz'),
        e(rs, 'id', 'g-ai2-12'),
        e(rs, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(rs, 'top', '60.2742%'),
        a(rs, 'margin-top', '-10.7px'),
        a(rs, 'left', '30.6995%'),
        a(rs, 'width', '89px'),
        e(J, 'class', 'g-pstyle4 svelte-zofauz'),
        e(os, 'id', 'g-ai2-13'),
        e(os, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(os, 'top', '62.5583%'),
        a(os, 'margin-top', '-10.7px'),
        a(os, 'left', '66.3403%'),
        a(os, 'width', '125px'),
        e(W, 'class', 'g-pstyle0 svelte-zofauz'),
        e(M, 'id', 'g-ai2-14'),
        e(M, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(M, 'top', '75.6338%'),
        a(M, 'margin-top', '-9.4px'),
        a(M, 'left', '57.8174%'),
        a(M, 'width', '64px'),
        e(R, 'class', 'g-pstyle0 svelte-zofauz'),
        e(H, 'id', 'g-ai2-15'),
        e(H, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(H, 'top', '77.3469%'),
        a(H, 'margin-top', '-9.4px'),
        a(H, 'left', '22.5239%'),
        a(H, 'width', '79px'),
        e(F, 'class', 'g-pstyle5 svelte-zofauz'),
        e(N, 'id', 'g-ai2-16'),
        e(N, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(N, 'top', '86.936%'),
        a(N, 'margin-top', '-7.7px'),
        a(N, 'left', '0.1678%'),
        a(N, 'width', '49px'),
        e(q, 'class', 'g-pstyle5 svelte-zofauz'),
        e(j, 'id', 'g-ai2-17'),
        e(j, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        a(j, 'top', '91.5043%'),
        a(j, 'margin-top', '-7.7px'),
        a(j, 'left', '0.1678%'),
        a(j, 'width', '52px'),
        e(t, 'id', 'g-_ai-chart-md'),
        e(t, 'class', 'g-artboard svelte-zofauz'),
        e(t, 'style', '');
    },
    m(gs, c) {
      U(gs, t, c),
        s(t, f),
        s(t, i),
        s(t, u),
        s(t, x),
        s(t, d),
        s(d, _),
        s(_, P),
        s(t, $),
        s(t, z),
        s(z, C),
        s(C, vs),
        s(t, ds),
        s(t, I),
        s(I, Z),
        s(Z, X),
        s(t, Ss),
        s(t, A),
        s(A, as),
        s(as, js),
        s(t, bs),
        s(t, T),
        s(T, es),
        s(es, xs),
        s(t, Gs),
        s(t, V),
        s(V, Q),
        s(Q, Hs),
        s(t, Ms),
        s(t, D),
        s(D, Y),
        s(Y, qs),
        s(t, As),
        s(t, E),
        s(E, ss),
        s(ss, zs),
        s(E, Ps),
        s(E, ns),
        s(ns, Is),
        s(t, ks),
        s(t, G),
        s(G, ts),
        s(ts, fs),
        s(t, Ds),
        s(t, w),
        s(w, B),
        s(B, Ls),
        s(w, ms),
        s(w, L),
        s(L, cs),
        s(t, Ts),
        s(t, K),
        s(K, O),
        s(O, ps),
        s(t, hs),
        s(t, rs),
        s(rs, S),
        s(S, ls),
        s(t, us),
        s(t, os),
        s(os, J),
        s(J, ys),
        s(t, Ns),
        s(t, M),
        s(M, W),
        s(W, Es),
        s(t, Vs),
        s(t, H),
        s(H, R),
        s(R, r),
        s(t, b),
        s(t, N),
        s(N, F),
        s(F, ws),
        s(t, Cs),
        s(t, j),
        s(j, q),
        s(q, Rs);
    },
    p: is,
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
    h = y[0] && y[0] >= 0 && y[0] < 510 && Yt(),
    x = y[0] && y[0] >= 510 && y[0] < 660 && Bt(),
    d = y[0] && y[0] >= 660 && Ft();
  return {
    c() {
      (t = l('div')),
        h && h.c(),
        (f = k()),
        x && x.c(),
        (i = k()),
        d && d.c(),
        this.h();
    },
    l(_) {
      t = o(_, 'DIV', { id: !0, class: !0 });
      var P = p(t);
      h && h.l(P),
        (f = m(P)),
        x && x.l(P),
        (i = m(P)),
        d && d.l(P),
        P.forEach(n),
        this.h();
    },
    h() {
      e(t, 'id', 'g-_ai-chart-box'),
        e(t, 'class', 'svelte-zofauz'),
        Xt(() => y[1].call(t));
    },
    m(_, P) {
      U(_, t, P),
        h && h.m(t, null),
        s(t, f),
        x && x.m(t, null),
        s(t, i),
        d && d.m(t, null),
        (u = sa(t, y[1].bind(t)));
    },
    p(_, [P]) {
      _[0] && _[0] >= 0 && _[0] < 510
        ? h
          ? h.p(_, P)
          : ((h = Yt()), h.c(), h.m(t, f))
        : h && (h.d(1), (h = null)),
        _[0] && _[0] >= 510 && _[0] < 660
          ? x
            ? x.p(_, P)
            : ((x = Bt()), x.c(), x.m(t, i))
          : x && (x.d(1), (x = null)),
        _[0] && _[0] >= 660
          ? d
            ? d.p(_, P)
            : ((d = Ft()), d.c(), d.m(t, null))
          : d && (d.d(1), (d = null));
    },
    i: is,
    o: is,
    d(_) {
      _ && n(t), h && h.d(), x && x.d(), d && d.d(), u();
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
      return Kt(
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
      p: is,
      i(i) {
        f || (_s(t.$$.fragment, i), (f = !0));
      },
      o(i) {
        $s(t.$$.fragment, i), (f = !1);
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
      p: is,
      i(i) {
        f || (_s(t.$$.fragment, i), (f = !0));
      },
      o(i) {
        $s(t.$$.fragment, i), (f = !1);
      },
      d(i) {
        ct(t, i);
      },
    }
  );
}
function fa(y) {
  let t, f, i, u, h, x;
  return {
    c() {
      (t = l('div')),
        (f = l('h4')),
        (i = g('Earthquake in Haiti')),
        (u = k()),
        (h = l('p')),
        (x = g('A 7.0 magnitude earthquake struck the island on Tuesday.')),
        this.h();
    },
    l(d) {
      t = o(d, 'DIV', { slot: !0, class: !0 });
      var _ = p(t);
      f = o(_, 'H4', { class: !0 });
      var P = p(f);
      (i = v(P, 'Earthquake in Haiti')),
        P.forEach(n),
        (u = m(_)),
        (h = o(_, 'P', {}));
      var $ = p(h);
      (x = v($, 'A 7.0 magnitude earthquake struck the island on Tuesday.')),
        $.forEach(n),
        _.forEach(n),
        this.h();
    },
    h() {
      e(f, 'class', 'svelte-xmoab3'),
        e(t, 'slot', 'title'),
        e(t, 'class', 'title svelte-xmoab3');
    },
    m(d, _) {
      U(d, t, _), s(t, f), s(f, i), s(t, u), s(t, h), s(h, x);
    },
    d(d) {
      d && n(t);
    },
  };
}
function ga(y) {
  let t, f, i, u, h, x;
  return {
    c() {
      (t = l('aside')),
        (f = l('p')),
        (i = g('Note: Data current as of Wednesday.')),
        (u = k()),
        (h = l('p')),
        (x = g('Source: USGIS')),
        this.h();
    },
    l(d) {
      t = o(d, 'ASIDE', { slot: !0 });
      var _ = p(t);
      f = o(_, 'P', { class: !0 });
      var P = p(f);
      (i = v(P, 'Note: Data current as of Wednesday.')),
        P.forEach(n),
        (u = m(_)),
        (h = o(_, 'P', { class: !0 }));
      var $ = p(h);
      (x = v($, 'Source: USGIS')), $.forEach(n), _.forEach(n), this.h();
    },
    h() {
      e(f, 'class', 'note'), e(h, 'class', 'source'), e(t, 'slot', 'notes');
    },
    m(d, _) {
      U(d, t, _), s(t, f), s(f, i), s(t, u), s(t, h), s(h, x);
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
        const h = {};
        u & 4 && (h.$$scope = { dirty: u, ctx: i }), t.$set(h);
      },
      i(i) {
        f || (_s(t.$$.fragment, i), (f = !0));
      },
      o(i) {
        $s(t.$$.fragment, i), (f = !1);
      },
      d(i) {
        ct(t, i);
      },
    }
  );
}
function ka(y) {
  return { c: is, l: is, m: is, p: is, i: is, o: is, d: is };
}
function ma(y) {
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
      p: is,
      i(i) {
        f || (_s(t.$$.fragment, i), (f = !0));
      },
      o(i) {
        $s(t.$$.fragment, i), (f = !1);
      },
      d(i) {
        ct(t, i);
      },
    }
  );
}
function ha(y) {
  return { c: is, l: is, m: is, p: is, i: is, o: is, d: is };
}
function _a(y) {
  let t,
    f,
    i = {
      ctx: y,
      current: null,
      token: null,
      hasCatch: !1,
      pending: ha,
      then: ma,
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
      m(u, h) {
        U(u, t, h),
          i.block.m(u, (i.anchor = h)),
          (i.mount = () => t.parentNode),
          (i.anchor = t),
          (f = !0);
      },
      p(u, h) {
        (y = u), aa(i, y, h);
      },
      i(u) {
        f || (_s(i.block), (f = !0));
      },
      o(u) {
        for (let h = 0; h < 3; h += 1) {
          const x = i.blocks[h];
          $s(x);
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
    h,
    x,
    d,
    _,
    P,
    $,
    z,
    C = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MyAiChart <span class="token keyword">from</span> <span class="token string">'./some-chart.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span> <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>MyAiChart<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>`,
    vs,
    ds,
    I,
    Z,
    X,
    Ss,
    A,
    as,
    js,
    bs,
    T,
    es,
    xs,
    Gs,
    V,
    Q,
    Hs,
    Ms,
    D,
    Y,
    qs = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MyAiChart <span class="token keyword">from</span> <span class="token string">'./some-chart.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span> <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>MyAiChart<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wide<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>`,
    As,
    E,
    ss,
    zs,
    Ps,
    ns,
    Is,
    ks,
    G = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    w,
    B,
    Ls,
    ms,
    L,
    cs,
    Ts,
    K,
    O = `<code class="language-bash"><span class="token comment"># In your Google doc...</span>
<span class="token punctuation">[</span>blocks<span class="token punctuation">]</span>

<span class="token comment"># ...</span>
Type: ai2svelte
ComponentName: my-chart

<span class="token punctuation">[</span><span class="token punctuation">]</span></code>`,
    ps,
    hs,
    rs = `<code class="language-svelte"><span class="token comment">&lt;!-- src/lib/Page.svelte --></span>
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
    us,
    os,
    J,
    ys,
    Ns,
    M,
    W,
    Es,
    Vs,
    H,
    R;
  return (
    (ds = new It({
      props: { $$slots: { default: [ua] }, $$scope: { ctx: y } },
    })),
    (E = new It({
      props: { $$slots: { default: [da] }, $$scope: { ctx: y } },
    })),
    (fs = new It({
      props: { $$slots: { default: [va] }, $$scope: { ctx: y } },
    })),
    (H = new It({
      props: { $$slots: { default: [_a] }, $$scope: { ctx: y } },
    })),
    {
      c() {
        (t = l('section')),
          (f = l('h2')),
          (i = g(Zt)),
          (u = k()),
          (h = l('p')),
          (x = g('Pass a component created by ')),
          (d = l('a')),
          (_ = g('ai2svelte')),
          (P = g(
            ' to this component, which will wrap it in a graphics section tag.'
          )),
          ($ = k()),
          (z = l('pre')),
          (vs = k()),
          pt(ds.$$.fragment),
          (I = k()),
          (Z = l('section')),
          (X = l('p')),
          (Ss = g(
            'Adjust the size of the graphic by passing a class name corresponding to one of our well widths: '
          )),
          (A = l('code')),
          (as = g('wide')),
          (js = g(', ')),
          (bs = l('code')),
          (T = g('wider')),
          (es = g(', ')),
          (xs = l('code')),
          (Gs = g('widest')),
          (V = g(' or ')),
          (Q = l('code')),
          (Hs = g('fluid')),
          (Ms = g('.')),
          (D = k()),
          (Y = l('pre')),
          (As = k()),
          pt(E.$$.fragment),
          (ss = k()),
          (zs = l('section')),
          (Ps = l('p')),
          (ns = g('Add additional chart chatter through slots.')),
          (Is = k()),
          (ks = l('pre')),
          (ts = k()),
          pt(fs.$$.fragment),
          (Ds = k()),
          (w = l('section')),
          (B = l('p')),
          (Ls = g('You can use this component to layout AI graphics via an ')),
          (ms = l('a')),
          (L = g('ArchieML')),
          (cs = g(
            '-formatted Google doc by using the following pattern to dynamically import an ai2svelte component:'
          )),
          (Ts = k()),
          (K = l('pre')),
          (ps = k()),
          (hs = l('pre')),
          (S = k()),
          (ls = l('section')),
          (us = l('p')),
          (os = g('This comes with some restrictions, though. Be sure your ')),
          (J = l('code')),
          (ys = g('fetchComponent')),
          (Ns = g(' function follows ')),
          (M = l('a')),
          (W = g('the limits on dynamic imports')),
          (Es = g('.')),
          (Vs = k()),
          pt(H.$$.fragment),
          this.h();
      },
      l(r) {
        t = o(r, 'SECTION', {});
        var b = p(t);
        f = o(b, 'H2', {});
        var N = p(f);
        (i = v(N, Zt)), N.forEach(n), (u = m(b)), (h = o(b, 'P', {}));
        var F = p(h);
        (x = v(F, 'Pass a component created by ')),
          (d = o(F, 'A', { href: !0, rel: !0 }));
        var ws = p(d);
        (_ = v(ws, 'ai2svelte')),
          ws.forEach(n),
          (P = v(
            F,
            ' to this component, which will wrap it in a graphics section tag.'
          )),
          F.forEach(n),
          b.forEach(n),
          ($ = m(r)),
          (z = o(r, 'PRE', { class: !0 }));
        var Cs = p(z);
        Cs.forEach(n),
          (vs = m(r)),
          rt(ds.$$.fragment, r),
          (I = m(r)),
          (Z = o(r, 'SECTION', {}));
        var j = p(Z);
        X = o(j, 'P', {});
        var q = p(X);
        (Ss = v(
          q,
          'Adjust the size of the graphic by passing a class name corresponding to one of our well widths: '
        )),
          (A = o(q, 'CODE', {}));
        var Rs = p(A);
        (as = v(Rs, 'wide')),
          Rs.forEach(n),
          (js = v(q, ', ')),
          (bs = o(q, 'CODE', {}));
        var gs = p(bs);
        (T = v(gs, 'wider')),
          gs.forEach(n),
          (es = v(q, ', ')),
          (xs = o(q, 'CODE', {}));
        var c = p(xs);
        (Gs = v(c, 'widest')),
          c.forEach(n),
          (V = v(q, ' or ')),
          (Q = o(q, 'CODE', {}));
        var Ws = p(Q);
        (Hs = v(Ws, 'fluid')),
          Ws.forEach(n),
          (Ms = v(q, '.')),
          q.forEach(n),
          j.forEach(n),
          (D = m(r)),
          (Y = o(r, 'PRE', { class: !0 }));
        var st = p(Y);
        st.forEach(n),
          (As = m(r)),
          rt(E.$$.fragment, r),
          (ss = m(r)),
          (zs = o(r, 'SECTION', {}));
        var Ys = p(zs);
        Ps = o(Ys, 'P', {});
        var Bs = p(Ps);
        (ns = v(Bs, 'Add additional chart chatter through slots.')),
          Bs.forEach(n),
          Ys.forEach(n),
          (Is = m(r)),
          (ks = o(r, 'PRE', { class: !0 }));
        var tt = p(ks);
        tt.forEach(n),
          (ts = m(r)),
          rt(fs.$$.fragment, r),
          (Ds = m(r)),
          (w = o(r, 'SECTION', {}));
        var Fs = p(w);
        B = o(Fs, 'P', {});
        var Us = p(B);
        (Ls = v(
          Us,
          'You can use this component to layout AI graphics via an '
        )),
          (ms = o(Us, 'A', { href: !0, rel: !0 }));
        var Zs = p(ms);
        (L = v(Zs, 'ArchieML')),
          Zs.forEach(n),
          (cs = v(
            Us,
            '-formatted Google doc by using the following pattern to dynamically import an ai2svelte component:'
          )),
          Us.forEach(n),
          Fs.forEach(n),
          (Ts = m(r)),
          (K = o(r, 'PRE', { class: !0 }));
        var at = p(K);
        at.forEach(n), (ps = m(r)), (hs = o(r, 'PRE', { class: !0 }));
        var et = p(hs);
        et.forEach(n), (S = m(r)), (ls = o(r, 'SECTION', {}));
        var Ks = p(ls);
        us = o(Ks, 'P', {});
        var Os = p(us);
        (os = v(
          Os,
          'This comes with some restrictions, though. Be sure your '
        )),
          (J = o(Os, 'CODE', {}));
        var Qs = p(J);
        (ys = v(Qs, 'fetchComponent')),
          Qs.forEach(n),
          (Ns = v(Os, ' function follows ')),
          (M = o(Os, 'A', { href: !0, rel: !0 }));
        var Xs = p(M);
        (W = v(Xs, 'the limits on dynamic imports')),
          Xs.forEach(n),
          (Es = v(Os, '.')),
          Os.forEach(n),
          Ks.forEach(n),
          (Vs = m(r)),
          rt(H.$$.fragment, r),
          this.h();
      },
      h() {
        e(d, 'href', 'https://github.com/reuters-graphics/ai2svelte'),
          e(d, 'rel', 'nofollow'),
          e(z, 'class', 'language-svelte'),
          e(Y, 'class', 'language-svelte'),
          e(ks, 'class', 'language-svelte'),
          e(ms, 'href', 'http://archieml.org/'),
          e(ms, 'rel', 'nofollow'),
          e(K, 'class', 'language-bash'),
          e(hs, 'class', 'language-svelte'),
          e(
            M,
            'href',
            'https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations'
          ),
          e(M, 'rel', 'nofollow');
      },
      m(r, b) {
        U(r, t, b),
          s(t, f),
          s(f, i),
          s(t, u),
          s(t, h),
          s(h, x),
          s(h, d),
          s(d, _),
          s(h, P),
          U(r, $, b),
          U(r, z, b),
          (z.innerHTML = C),
          U(r, vs, b),
          it(ds, r, b),
          U(r, I, b),
          U(r, Z, b),
          s(Z, X),
          s(X, Ss),
          s(X, A),
          s(A, as),
          s(X, js),
          s(X, bs),
          s(bs, T),
          s(X, es),
          s(X, xs),
          s(xs, Gs),
          s(X, V),
          s(X, Q),
          s(Q, Hs),
          s(X, Ms),
          U(r, D, b),
          U(r, Y, b),
          (Y.innerHTML = qs),
          U(r, As, b),
          it(E, r, b),
          U(r, ss, b),
          U(r, zs, b),
          s(zs, Ps),
          s(Ps, ns),
          U(r, Is, b),
          U(r, ks, b),
          (ks.innerHTML = G),
          U(r, ts, b),
          it(fs, r, b),
          U(r, Ds, b),
          U(r, w, b),
          s(w, B),
          s(B, Ls),
          s(B, ms),
          s(ms, L),
          s(B, cs),
          U(r, Ts, b),
          U(r, K, b),
          (K.innerHTML = O),
          U(r, ps, b),
          U(r, hs, b),
          (hs.innerHTML = rs),
          U(r, S, b),
          U(r, ls, b),
          s(ls, us),
          s(us, os),
          s(us, J),
          s(J, ys),
          s(us, Ns),
          s(us, M),
          s(M, W),
          s(us, Es),
          U(r, Vs, b),
          it(H, r, b),
          (R = !0);
      },
      p(r, [b]) {
        const N = {};
        b & 4 && (N.$$scope = { dirty: b, ctx: r }), ds.$set(N);
        const F = {};
        b & 4 && (F.$$scope = { dirty: b, ctx: r }), E.$set(F);
        const ws = {};
        b & 4 && (ws.$$scope = { dirty: b, ctx: r }), fs.$set(ws);
        const Cs = {};
        b & 4 && (Cs.$$scope = { dirty: b, ctx: r }), H.$set(Cs);
      },
      i(r) {
        R ||
          (_s(ds.$$.fragment, r),
          _s(E.$$.fragment, r),
          _s(fs.$$.fragment, r),
          _s(H.$$.fragment, r),
          (R = !0));
      },
      o(r) {
        $s(ds.$$.fragment, r),
          $s(E.$$.fragment, r),
          $s(fs.$$.fragment, r),
          $s(H.$$.fragment, r),
          (R = !1);
      },
      d(r) {
        r && n(t),
          r && n($),
          r && n(z),
          r && n(vs),
          ct(ds, r),
          r && n(I),
          r && n(Z),
          r && n(D),
          r && n(Y),
          r && n(As),
          ct(E, r),
          r && n(ss),
          r && n(zs),
          r && n(Is),
          r && n(ks),
          r && n(ts),
          ct(fs, r),
          r && n(Ds),
          r && n(w),
          r && n(Ts),
          r && n(K),
          r && n(ps),
          r && n(hs),
          r && n(S),
          r && n(ls),
          r && n(Vs),
          ct(H, r);
      },
    }
  );
}
const ya = {
    title: 'Ai2svelte',
    description: 'A shortcut for ai2svelte graphics.',
    slug: 'ai2svelte',
  },
  { title: Zt, description: $a, slug: Aa } = ya;
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
