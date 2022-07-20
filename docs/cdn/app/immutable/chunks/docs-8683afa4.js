var Ze = (y, s, g) =>
  new Promise((d, c) => {
    var u = (b) => {
        try {
          E(g.next(b));
        } catch (D) {
          c(D);
        }
      },
      m = (b) => {
        try {
          E(g.throw(b));
        } catch (D) {
          c(D);
        }
      },
      E = (b) => (b.done ? d(b.value) : Promise.resolve(b.value).then(u, m));
    E((g = g.apply(y, s)).next());
  });
import { _ as le } from './preload-helper-ade19073.js';
import {
  S as un,
  i as dn,
  s as kn,
  k as f,
  e as n,
  w as $s,
  l as rn,
  m as h,
  c as e,
  a as p,
  x as Ls,
  d as t,
  b as l,
  g as T,
  y as Cs,
  q as ua,
  G as gn,
  H as vn,
  I as fn,
  o as Ia,
  n as Ct,
  p as St,
  t as i,
  h as r,
  J as a,
  j as Ap,
  B as Ss,
  $ as xp,
  F as hn,
  f as o,
  E as Ea,
  T as Ip,
  a0 as $p,
  a1 as Cp,
  a2 as Sp,
} from './index-83a5d9f9.js';
import { D as cn } from './index-16ec1060.js';
import './main-357f7a10.js';
import { a as oe } from './paths-396f020f.js';
const Vp = (y) => ({}),
  ap = (y) => ({}),
  Hp = (y) => ({}),
  sp = (y) => ({}),
  Lp = (y) => ({}),
  tp = (y) => ({});
function np(y) {
  let s,
    g,
    d,
    c,
    u,
    m,
    E,
    b,
    D = y[6].title && ep(y),
    I = y[3] && pp(y),
    w = y[6].hidden && lp(y);
  var C = y[0];
  function Q(_) {
    return { props: { onAiMounted: _[5] } };
  }
  C && (u = new C(Q(y)));
  let $ = y[6].notes && op(y);
  return {
    c() {
      D && D.c(),
        (s = f()),
        I && I.c(),
        (g = f()),
        w && w.c(),
        (d = f()),
        (c = n('div')),
        u && $s(u.$$.fragment),
        (m = f()),
        $ && $.c(),
        (E = rn()),
        this.h();
    },
    l(_) {
      D && D.l(_),
        (s = h(_)),
        I && I.l(_),
        (g = h(_)),
        w && w.l(_),
        (d = h(_)),
        (c = e(_, 'DIV', { class: !0, 'aria-hidden': !0 }));
      var P = p(c);
      u && Ls(u.$$.fragment, P),
        P.forEach(t),
        (m = h(_)),
        $ && $.l(_),
        (E = rn()),
        this.h();
    },
    h() {
      l(c, 'class', 'ai-wrapper'), l(c, 'aria-hidden', y[2]);
    },
    m(_, P) {
      D && D.m(_, P),
        T(_, s, P),
        I && I.m(_, P),
        T(_, g, P),
        w && w.m(_, P),
        T(_, d, P),
        T(_, c, P),
        u && Cs(u, c, null),
        T(_, m, P),
        $ && $.m(_, P),
        T(_, E, P),
        (b = !0);
    },
    p(_, P) {
      _[6].title
        ? D
          ? (D.p(_, P), P & 64 && ua(D, 1))
          : ((D = ep(_)), D.c(), ua(D, 1), D.m(s.parentNode, s))
        : D &&
          (Ct(),
          Ia(D, 1, 1, () => {
            D = null;
          }),
          St()),
        _[3]
          ? I
            ? I.p(_, P)
            : ((I = pp(_)), I.c(), I.m(g.parentNode, g))
          : I && (I.d(1), (I = null)),
        _[6].hidden
          ? w
            ? (w.p(_, P), P & 64 && ua(w, 1))
            : ((w = lp(_)), w.c(), ua(w, 1), w.m(d.parentNode, d))
          : w &&
            (Ct(),
            Ia(w, 1, 1, () => {
              w = null;
            }),
            St());
      const ma = {};
      if ((P & 32 && (ma.onAiMounted = _[5]), C !== (C = _[0]))) {
        if (u) {
          Ct();
          const Sa = u;
          Ia(Sa.$$.fragment, 1, 0, () => {
            Ss(Sa, 1);
          }),
            St();
        }
        C
          ? ((u = new C(Q(_))),
            $s(u.$$.fragment),
            ua(u.$$.fragment, 1),
            Cs(u, c, null))
          : (u = null);
      } else C && u.$set(ma);
      (!b || P & 4) && l(c, 'aria-hidden', _[2]),
        _[6].notes
          ? $
            ? ($.p(_, P), P & 64 && ua($, 1))
            : (($ = op(_)), $.c(), ua($, 1), $.m(E.parentNode, E))
          : $ &&
            (Ct(),
            Ia($, 1, 1, () => {
              $ = null;
            }),
            St());
    },
    i(_) {
      b || (ua(D), ua(w), u && ua(u.$$.fragment, _), ua($), (b = !0));
    },
    o(_) {
      Ia(D), Ia(w), u && Ia(u.$$.fragment, _), Ia($), (b = !1);
    },
    d(_) {
      D && D.d(_),
        _ && t(s),
        I && I.d(_),
        _ && t(g),
        w && w.d(_),
        _ && t(d),
        _ && t(c),
        u && Ss(u),
        _ && t(m),
        $ && $.d(_),
        _ && t(E);
    },
  };
}
function ep(y) {
  let s, g;
  const d = y[8].title,
    c = hn(d, y, y[7], tp);
  return {
    c() {
      (s = n('div')), c && c.c(), this.h();
    },
    l(u) {
      s = e(u, 'DIV', { class: !0 });
      var m = p(s);
      c && c.l(m), m.forEach(t), this.h();
    },
    h() {
      l(s, 'class', 'chatter-container svelte-kfp841');
    },
    m(u, m) {
      T(u, s, m), c && c.m(s, null), (g = !0);
    },
    p(u, m) {
      c &&
        c.p &&
        (!g || m & 128) &&
        gn(c, d, u, u[7], g ? fn(d, u[7], m, Lp) : vn(u[7]), tp);
    },
    i(u) {
      g || (ua(c, u), (g = !0));
    },
    o(u) {
      Ia(c, u), (g = !1);
    },
    d(u) {
      u && t(s), c && c.d(u);
    },
  };
}
function pp(y) {
  let s, g;
  return {
    c() {
      (s = n('p')), (g = i(y[3])), this.h();
    },
    l(d) {
      s = e(d, 'P', { class: !0 });
      var c = p(s);
      (g = r(c, y[3])), c.forEach(t), this.h();
    },
    h() {
      l(s, 'class', 'visually-hidden svelte-kfp841');
    },
    m(d, c) {
      T(d, s, c), a(s, g);
    },
    p(d, c) {
      c & 8 && Ap(g, d[3]);
    },
    d(d) {
      d && t(s);
    },
  };
}
function lp(y) {
  let s, g;
  const d = y[8].hidden,
    c = hn(d, y, y[7], sp);
  return {
    c() {
      (s = n('div')), c && c.c(), this.h();
    },
    l(u) {
      s = e(u, 'DIV', { class: !0 });
      var m = p(s);
      c && c.l(m), m.forEach(t), this.h();
    },
    h() {
      l(s, 'class', 'visually-hidden custom svelte-kfp841');
    },
    m(u, m) {
      T(u, s, m), c && c.m(s, null), (g = !0);
    },
    p(u, m) {
      c &&
        c.p &&
        (!g || m & 128) &&
        gn(c, d, u, u[7], g ? fn(d, u[7], m, Hp) : vn(u[7]), sp);
    },
    i(u) {
      g || (ua(c, u), (g = !0));
    },
    o(u) {
      Ia(c, u), (g = !1);
    },
    d(u) {
      u && t(s), c && c.d(u);
    },
  };
}
function op(y) {
  let s, g;
  const d = y[8].notes,
    c = hn(d, y, y[7], ap);
  return {
    c() {
      (s = n('div')), c && c.c(), this.h();
    },
    l(u) {
      s = e(u, 'DIV', { class: !0 });
      var m = p(s);
      c && c.l(m), m.forEach(t), this.h();
    },
    h() {
      l(s, 'class', 'chatter-container svelte-kfp841');
    },
    m(u, m) {
      T(u, s, m), c && c.m(s, null), (g = !0);
    },
    p(u, m) {
      c &&
        c.p &&
        (!g || m & 128) &&
        gn(c, d, u, u[7], g ? fn(d, u[7], m, Vp) : vn(u[7]), ap);
    },
    i(u) {
      g || (ua(c, u), (g = !0));
    },
    o(u) {
      Ia(c, u), (g = !1);
    },
    d(u) {
      u && t(s), c && c.d(u);
    },
  };
}
function Mp(y) {
  let s,
    g,
    d,
    c = ((y[2] && (y[3] || y[6].hidden)) || !y[2]) && np(y);
  return {
    c() {
      (s = n('section')), c && c.c(), this.h();
    },
    l(u) {
      s = e(u, 'SECTION', { class: !0, id: !0 });
      var m = p(s);
      c && c.l(m), m.forEach(t), this.h();
    },
    h() {
      l(
        s,
        'class',
        (g = 'ai2svelte-container graphic ' + y[4] + ' svelte-kfp841')
      ),
        l(s, 'id', y[1]);
    },
    m(u, m) {
      T(u, s, m), c && c.m(s, null), (d = !0);
    },
    p(u, [m]) {
      (u[2] && (u[3] || u[6].hidden)) || !u[2]
        ? c
          ? (c.p(u, m), m & 76 && ua(c, 1))
          : ((c = np(u)), c.c(), ua(c, 1), c.m(s, null))
        : c &&
          (Ct(),
          Ia(c, 1, 1, () => {
            c = null;
          }),
          St()),
        (!d ||
          (m & 16 &&
            g !==
              (g =
                'ai2svelte-container graphic ' + u[4] + ' svelte-kfp841'))) &&
          l(s, 'class', g),
        (!d || m & 2) && l(s, 'id', u[1]);
    },
    i(u) {
      d || (ua(c), (d = !0));
    },
    o(u) {
      Ia(c), (d = !1);
    },
    d(u) {
      u && t(s), c && c.d();
    },
  };
}
function Op(y, s, g) {
  let { $$slots: d = {}, $$scope: c } = s;
  const u = xp(d);
  let { AiGraphic: m } = s,
    { id: E = '' } = s,
    { ariaHidden: b = !0 } = s,
    { ariaDescription: D = null } = s,
    { size: I = 'normal' } = s,
    { onAiMounted: w = () => {} } = s;
  return (
    b &&
      !D &&
      console.warn(
        'Must provide aria description for ai2svelte components if ariaHidden is true.'
      ),
    (y.$$set = (C) => {
      'AiGraphic' in C && g(0, (m = C.AiGraphic)),
        'id' in C && g(1, (E = C.id)),
        'ariaHidden' in C && g(2, (b = C.ariaHidden)),
        'ariaDescription' in C && g(3, (D = C.ariaDescription)),
        'size' in C && g(4, (I = C.size)),
        'onAiMounted' in C && g(5, (w = C.onAiMounted)),
        '$$scope' in C && g(7, (c = C.$$scope));
    }),
    [m, E, b, D, I, w, u, c, d]
  );
}
class mn extends un {
  constructor(s) {
    super(),
      dn(this, s, Op, Mp, kn, {
        AiGraphic: 0,
        id: 1,
        ariaHidden: 2,
        ariaDescription: 3,
        size: 4,
        onAiMounted: 5,
      });
  }
}
function cp(y) {
  let s,
    g,
    d,
    c,
    u,
    m,
    E,
    b,
    D,
    I,
    w,
    C,
    Q,
    $,
    _,
    P,
    ma,
    Sa,
    H,
    aa,
    $a,
    Ja,
    S,
    W,
    ba,
    Ha,
    L,
    sa,
    qa,
    wa,
    R,
    F,
    La,
    Ca,
    x,
    ta,
    Ma,
    za,
    na,
    Oa,
    _a,
    M,
    ca,
    la,
    da,
    V,
    ea,
    ja,
    Ba,
    O,
    ka,
    Ua,
    X,
    q,
    ga,
    Ya,
    Z,
    N,
    pa,
    Da,
    va,
    J,
    Pa,
    Ra,
    U,
    z,
    Va,
    Ta,
    G,
    Y,
    ia,
    Wa,
    B,
    ra,
    Aa,
    oa,
    j,
    K,
    Ka;
  return {
    c() {
      (s = n('div')),
        (g = n('div')),
        (d = f()),
        (c = n('div')),
        (m = f()),
        (E = n('div')),
        (b = n('p')),
        (D = i('Shake intensity')),
        (I = f()),
        (w = n('div')),
        (C = n('p')),
        (Q = i('Light')),
        ($ = f()),
        (_ = n('div')),
        (P = n('p')),
        (ma = i('Moderate')),
        (Sa = f()),
        (H = n('div')),
        (aa = n('p')),
        ($a = i('Cap-Haitien')),
        (Ja = f()),
        (S = n('div')),
        (W = n('p')),
        (ba = i('Strong')),
        (Ha = f()),
        (L = n('div')),
        (sa = n('p')),
        (qa = i('Very strong')),
        (wa = f()),
        (R = n('div')),
        (F = n('p')),
        (La = i('Gona\xEFves')),
        (Ca = f()),
        (x = n('div')),
        (ta = n('p')),
        (Ma = i('Caribbean')),
        (za = f()),
        (na = n('p')),
        (Oa = i('Sea')),
        (_a = f()),
        (M = n('div')),
        (ca = n('p')),
        (la = i('HAITI')),
        (da = f()),
        (V = n('div')),
        (ea = n('p')),
        (ja = i('Jeremie')),
        (Ba = f()),
        (O = n('div')),
        (ka = n('p')),
        (Ua = i('Port-au-Prince')),
        (X = f()),
        (q = n('div')),
        (ga = n('p')),
        (Ya = i('Epicenter')),
        (Z = f()),
        (N = n('div')),
        (pa = n('p')),
        (Da = i('Jacmel')),
        (va = f()),
        (J = n('div')),
        (Pa = n('p')),
        (Ra = i('Les Cayes')),
        (U = f()),
        (z = n('div')),
        (Va = n('p')),
        (Ta = i('50 mi')),
        (G = f()),
        (Y = n('div')),
        (ia = n('p')),
        (Wa = i('Dominican')),
        (B = f()),
        (ra = n('p')),
        (Aa = i('Republic')),
        (oa = f()),
        (j = n('div')),
        (K = n('p')),
        (Ka = i('50 km')),
        this.h();
    },
    l(fa) {
      s = e(fa, 'DIV', { id: !0, class: !0, style: !0 });
      var v = p(s);
      (g = e(v, 'DIV', { style: !0 })),
        p(g).forEach(t),
        (d = h(v)),
        (c = e(v, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        p(c).forEach(t),
        (m = h(v)),
        (E = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ds = p(E);
      b = e(ds, 'P', { class: !0 });
      var ks = p(b);
      (D = r(ks, 'Shake intensity')),
        ks.forEach(t),
        ds.forEach(t),
        (I = h(v)),
        (w = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ts = p(w);
      C = e(ts, 'P', { class: !0 });
      var Na = p(C);
      (Q = r(Na, 'Light')),
        Na.forEach(t),
        ts.forEach(t),
        ($ = h(v)),
        (_ = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qa = p(_);
      P = e(Qa, 'P', { class: !0 });
      var ns = p(P);
      (ma = r(ns, 'Moderate')),
        ns.forEach(t),
        Qa.forEach(t),
        (Sa = h(v)),
        (H = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var gs = p(H);
      aa = e(gs, 'P', { class: !0 });
      var vs = p(aa);
      ($a = r(vs, 'Cap-Haitien')),
        vs.forEach(t),
        gs.forEach(t),
        (Ja = h(v)),
        (S = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var fs = p(S);
      W = e(fs, 'P', { class: !0 });
      var xa = p(W);
      (ba = r(xa, 'Strong')),
        xa.forEach(t),
        fs.forEach(t),
        (Ha = h(v)),
        (L = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var hs = p(L);
      sa = e(hs, 'P', { class: !0 });
      var es = p(sa);
      (qa = r(es, 'Very strong')),
        es.forEach(t),
        hs.forEach(t),
        (wa = h(v)),
        (R = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ms = p(R);
      F = e(ms, 'P', { class: !0 });
      var _s = p(F);
      (La = r(_s, 'Gona\xEFves')),
        _s.forEach(t),
        ms.forEach(t),
        (Ca = h(v)),
        (x = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ya = p(x);
      ta = e(ya, 'P', { class: !0 });
      var ys = p(ta);
      (Ma = r(ys, 'Caribbean')),
        ys.forEach(t),
        (za = h(ya)),
        (na = e(ya, 'P', { class: !0 }));
      var Es = p(na);
      (Oa = r(Es, 'Sea')),
        Es.forEach(t),
        ya.forEach(t),
        (_a = h(v)),
        (M = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var rs = p(M);
      ca = e(rs, 'P', { class: !0 });
      var Fa = p(ca);
      (la = r(Fa, 'HAITI')),
        Fa.forEach(t),
        rs.forEach(t),
        (da = h(v)),
        (V = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var Xa = p(V);
      ea = e(Xa, 'P', { class: !0 });
      var us = p(ea);
      (ja = r(us, 'Jeremie')),
        us.forEach(t),
        Xa.forEach(t),
        (Ba = h(v)),
        (O = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ga = p(O);
      ka = e(Ga, 'P', { class: !0 });
      var ps = p(ka);
      (Ua = r(ps, 'Port-au-Prince')),
        ps.forEach(t),
        Ga.forEach(t),
        (X = h(v)),
        (q = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var bs = p(q);
      ga = e(bs, 'P', { class: !0 });
      var Za = p(ga);
      (Ya = r(Za, 'Epicenter')),
        Za.forEach(t),
        bs.forEach(t),
        (Z = h(v)),
        (N = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ha = p(N);
      pa = e(ha, 'P', { class: !0 });
      var ws = p(pa);
      (Da = r(ws, 'Jacmel')),
        ws.forEach(t),
        ha.forEach(t),
        (va = h(v)),
        (J = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ls = p(J);
      Pa = e(ls, 'P', { class: !0 });
      var Ds = p(Pa);
      (Ra = r(Ds, 'Les Cayes')),
        Ds.forEach(t),
        ls.forEach(t),
        (U = h(v)),
        (z = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var as = p(z);
      Va = e(as, 'P', { class: !0 });
      var os = p(Va);
      (Ta = r(os, '50 mi')),
        os.forEach(t),
        as.forEach(t),
        (G = h(v)),
        (Y = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var cs = p(Y);
      ia = e(cs, 'P', { class: !0 });
      var Ps = p(ia);
      (Wa = r(Ps, 'Dominican')),
        Ps.forEach(t),
        (B = h(cs)),
        (ra = e(cs, 'P', { class: !0 }));
      var is = p(ra);
      (Aa = r(is, 'Republic')),
        is.forEach(t),
        cs.forEach(t),
        (oa = h(v)),
        (j = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ss = p(j);
      K = e(ss, 'P', { class: !0 });
      var Ts = p(K);
      (Ka = r(Ts, '50 km')),
        Ts.forEach(t),
        ss.forEach(t),
        v.forEach(t),
        this.h();
    },
    h() {
      o(g, 'padding', '0 0 91.7004% 0'),
        l(c, 'id', 'g-_ai-chart-xs-img'),
        l(c, 'class', 'g-aiImg svelte-v5mpys'),
        l(c, 'alt', ''),
        l(
          c,
          'style',
          (u = `background-image: url(${oe}/images/graphics/ai-chart-xs.png);`)
        ),
        l(b, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(E, 'id', 'g-ai0-1'),
        l(E, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(E, 'top', '3.216%'),
        o(E, 'margin-top', '-7.7px'),
        o(E, 'left', '0.5952%'),
        o(E, 'width', '99px'),
        l(C, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(w, 'id', 'g-ai0-2'),
        l(w, 'class', 'g-legend g-aiAbs g-aiPointText svelte-v5mpys'),
        o(w, 'top', '9.8251%'),
        o(w, 'margin-top', '-7.7px'),
        o(w, 'left', '4.9821%'),
        o(w, 'width', '47px'),
        l(P, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(_, 'id', 'g-ai0-3'),
        l(_, 'class', 'g-legend g-aiAbs g-aiPointText svelte-v5mpys'),
        o(_, 'top', '15.7733%'),
        o(_, 'margin-top', '-7.7px'),
        o(_, 'left', '4.9821%'),
        o(_, 'width', '69px'),
        l(aa, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(H, 'id', 'g-ai0-4'),
        l(H, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(H, 'top', '16.4343%'),
        o(H, 'margin-top', '-7.7px'),
        o(H, 'left', '79.0675%'),
        o(H, 'width', '82px'),
        l(W, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(S, 'id', 'g-ai0-5'),
        l(S, 'class', 'g-legend g-aiAbs g-aiPointText svelte-v5mpys'),
        o(S, 'top', '21.7216%'),
        o(S, 'margin-top', '-7.7px'),
        o(S, 'left', '4.9821%'),
        o(S, 'width', '55px'),
        l(sa, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(L, 'id', 'g-ai0-6'),
        l(L, 'class', 'g-legend g-aiAbs g-aiPointText svelte-v5mpys'),
        o(L, 'top', '28.0002%'),
        o(L, 'margin-top', '-7.7px'),
        o(L, 'left', '4.9821%'),
        o(L, 'width', '78px'),
        l(F, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(R, 'id', 'g-ai0-7'),
        l(R, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(R, 'top', '28.9916%'),
        o(R, 'margin-top', '-7.7px'),
        o(R, 'left', '62.2348%'),
        o(R, 'width', '68px'),
        l(ta, 'class', 'g-pstyle1 svelte-v5mpys'),
        l(na, 'class', 'g-pstyle1 svelte-v5mpys'),
        l(x, 'id', 'g-ai0-8'),
        l(x, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(x, 'top', '39.9449%'),
        o(x, 'margin-top', '-14.9px'),
        o(x, 'left', '28.714%'),
        o(x, 'margin-left', '-36.5px'),
        o(x, 'width', '73px'),
        l(ca, 'class', 'g-pstyle2 svelte-v5mpys'),
        l(M, 'id', 'g-ai0-9'),
        l(M, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(M, 'top', '42.6579%'),
        o(M, 'margin-top', '-10.1px'),
        o(M, 'left', '68.5061%'),
        o(M, 'width', '77px'),
        l(ea, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(V, 'id', 'g-ai0-10'),
        l(V, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(V, 'top', '59.0632%'),
        o(V, 'margin-top', '-7.7px'),
        o(V, 'left', '11.2526%'),
        o(V, 'width', '63px'),
        l(ka, 'class', 'g-pstyle3 svelte-v5mpys'),
        l(O, 'id', 'g-ai0-11'),
        l(O, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(O, 'top', '61.1155%'),
        o(O, 'margin-top', '-8.9px'),
        o(O, 'left', '70.5455%'),
        o(O, 'width', '106px'),
        l(ga, 'class', 'g-pstyle3 svelte-v5mpys'),
        l(q, 'id', 'g-ai0-12'),
        l(q, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(q, 'top', '62.1069%'),
        o(q, 'margin-top', '-8.9px'),
        o(q, 'left', '32.6015%'),
        o(q, 'width', '77px'),
        l(pa, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(N, 'id', 'g-ai0-13'),
        l(N, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(N, 'top', '78.8906%'),
        o(N, 'margin-top', '-7.7px'),
        o(N, 'left', '63.9138%'),
        o(N, 'width', '58px'),
        l(Pa, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(J, 'id', 'g-ai0-14'),
        l(J, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(J, 'top', '80.2124%'),
        o(J, 'margin-top', '-7.7px'),
        o(J, 'left', '22.5649%'),
        o(J, 'width', '71px'),
        l(Va, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(z, 'id', 'g-ai0-15'),
        l(z, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(z, 'top', '87.8129%'),
        o(z, 'margin-top', '-7.7px'),
        o(z, 'left', '0.6179%'),
        o(z, 'width', '49px'),
        l(ia, 'class', 'g-pstyle4 svelte-v5mpys'),
        l(ra, 'class', 'g-pstyle4 svelte-v5mpys'),
        l(Y, 'id', 'g-ai0-16'),
        l(Y, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(Y, 'top', '91.0202%'),
        o(Y, 'margin-top', '-11.4px'),
        o(Y, 'right', '10.4418%'),
        o(Y, 'width', '70px'),
        l(K, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(j, 'id', 'g-ai0-17'),
        l(j, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(j, 'top', '93.7611%'),
        o(j, 'margin-top', '-7.7px'),
        o(j, 'left', '0.6179%'),
        o(j, 'width', '52px'),
        l(s, 'id', 'g-_ai-chart-xs'),
        l(s, 'class', 'g-artboard svelte-v5mpys'),
        l(s, 'style', '');
    },
    m(fa, v) {
      T(fa, s, v),
        a(s, g),
        a(s, d),
        a(s, c),
        a(s, m),
        a(s, E),
        a(E, b),
        a(b, D),
        a(s, I),
        a(s, w),
        a(w, C),
        a(C, Q),
        a(s, $),
        a(s, _),
        a(_, P),
        a(P, ma),
        a(s, Sa),
        a(s, H),
        a(H, aa),
        a(aa, $a),
        a(s, Ja),
        a(s, S),
        a(S, W),
        a(W, ba),
        a(s, Ha),
        a(s, L),
        a(L, sa),
        a(sa, qa),
        a(s, wa),
        a(s, R),
        a(R, F),
        a(F, La),
        a(s, Ca),
        a(s, x),
        a(x, ta),
        a(ta, Ma),
        a(x, za),
        a(x, na),
        a(na, Oa),
        a(s, _a),
        a(s, M),
        a(M, ca),
        a(ca, la),
        a(s, da),
        a(s, V),
        a(V, ea),
        a(ea, ja),
        a(s, Ba),
        a(s, O),
        a(O, ka),
        a(ka, Ua),
        a(s, X),
        a(s, q),
        a(q, ga),
        a(ga, Ya),
        a(s, Z),
        a(s, N),
        a(N, pa),
        a(pa, Da),
        a(s, va),
        a(s, J),
        a(J, Pa),
        a(Pa, Ra),
        a(s, U),
        a(s, z),
        a(z, Va),
        a(Va, Ta),
        a(s, G),
        a(s, Y),
        a(Y, ia),
        a(ia, Wa),
        a(Y, B),
        a(Y, ra),
        a(ra, Aa),
        a(s, oa),
        a(s, j),
        a(j, K),
        a(K, Ka);
    },
    p: Ea,
    d(fa) {
      fa && t(s);
    },
  };
}
function ip(y) {
  let s,
    g,
    d,
    c,
    u,
    m,
    E,
    b,
    D,
    I,
    w,
    C,
    Q,
    $,
    _,
    P,
    ma,
    Sa,
    H,
    aa,
    $a,
    Ja,
    S,
    W,
    ba,
    Ha,
    L,
    sa,
    qa,
    wa,
    R,
    F,
    La,
    Ca,
    x,
    ta,
    Ma,
    za,
    na,
    Oa,
    _a,
    M,
    ca,
    la,
    da,
    V,
    ea,
    ja,
    Ba,
    O,
    ka,
    Ua,
    X,
    q,
    ga,
    Ya,
    Z,
    N,
    pa,
    Da,
    va,
    J,
    Pa,
    Ra,
    U,
    z,
    Va,
    Ta,
    G,
    Y,
    ia,
    Wa,
    B,
    ra,
    Aa,
    oa,
    j,
    K,
    Ka;
  return {
    c() {
      (s = n('div')),
        (g = n('div')),
        (d = f()),
        (c = n('div')),
        (m = f()),
        (E = n('div')),
        (b = n('p')),
        (D = i('Shake intensity')),
        (I = f()),
        (w = n('div')),
        (C = n('p')),
        (Q = i('Light')),
        ($ = f()),
        (_ = n('div')),
        (P = n('p')),
        (ma = i('Moderate')),
        (Sa = f()),
        (H = n('div')),
        (aa = n('p')),
        ($a = i('Cap-Haitien')),
        (Ja = f()),
        (S = n('div')),
        (W = n('p')),
        (ba = i('Strong')),
        (Ha = f()),
        (L = n('div')),
        (sa = n('p')),
        (qa = i('Very strong')),
        (wa = f()),
        (R = n('div')),
        (F = n('p')),
        (La = i('Gona\xEFves')),
        (Ca = f()),
        (x = n('div')),
        (ta = n('p')),
        (Ma = i('Caribbean')),
        (za = f()),
        (na = n('p')),
        (Oa = i('Sea')),
        (_a = f()),
        (M = n('div')),
        (ca = n('p')),
        (la = i('HAITI')),
        (da = f()),
        (V = n('div')),
        (ea = n('p')),
        (ja = i('Jeremie')),
        (Ba = f()),
        (O = n('div')),
        (ka = n('p')),
        (Ua = i('Port-au-Prince')),
        (X = f()),
        (q = n('div')),
        (ga = n('p')),
        (Ya = i('Epicenter')),
        (Z = f()),
        (N = n('div')),
        (pa = n('p')),
        (Da = i('Dominican')),
        (va = f()),
        (J = n('p')),
        (Pa = i('Republic')),
        (Ra = f()),
        (U = n('div')),
        (z = n('p')),
        (Va = i('Jacmel')),
        (Ta = f()),
        (G = n('div')),
        (Y = n('p')),
        (ia = i('Les Cayes')),
        (Wa = f()),
        (B = n('div')),
        (ra = n('p')),
        (Aa = i('50 mi')),
        (oa = f()),
        (j = n('div')),
        (K = n('p')),
        (Ka = i('50 km')),
        this.h();
    },
    l(fa) {
      s = e(fa, 'DIV', { id: !0, class: !0, style: !0 });
      var v = p(s);
      (g = e(v, 'DIV', { style: !0 })),
        p(g).forEach(t),
        (d = h(v)),
        (c = e(v, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        p(c).forEach(t),
        (m = h(v)),
        (E = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ds = p(E);
      b = e(ds, 'P', { class: !0 });
      var ks = p(b);
      (D = r(ks, 'Shake intensity')),
        ks.forEach(t),
        ds.forEach(t),
        (I = h(v)),
        (w = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ts = p(w);
      C = e(ts, 'P', { class: !0 });
      var Na = p(C);
      (Q = r(Na, 'Light')),
        Na.forEach(t),
        ts.forEach(t),
        ($ = h(v)),
        (_ = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qa = p(_);
      P = e(Qa, 'P', { class: !0 });
      var ns = p(P);
      (ma = r(ns, 'Moderate')),
        ns.forEach(t),
        Qa.forEach(t),
        (Sa = h(v)),
        (H = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var gs = p(H);
      aa = e(gs, 'P', { class: !0 });
      var vs = p(aa);
      ($a = r(vs, 'Cap-Haitien')),
        vs.forEach(t),
        gs.forEach(t),
        (Ja = h(v)),
        (S = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var fs = p(S);
      W = e(fs, 'P', { class: !0 });
      var xa = p(W);
      (ba = r(xa, 'Strong')),
        xa.forEach(t),
        fs.forEach(t),
        (Ha = h(v)),
        (L = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var hs = p(L);
      sa = e(hs, 'P', { class: !0 });
      var es = p(sa);
      (qa = r(es, 'Very strong')),
        es.forEach(t),
        hs.forEach(t),
        (wa = h(v)),
        (R = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ms = p(R);
      F = e(ms, 'P', { class: !0 });
      var _s = p(F);
      (La = r(_s, 'Gona\xEFves')),
        _s.forEach(t),
        ms.forEach(t),
        (Ca = h(v)),
        (x = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ya = p(x);
      ta = e(ya, 'P', { class: !0 });
      var ys = p(ta);
      (Ma = r(ys, 'Caribbean')),
        ys.forEach(t),
        (za = h(ya)),
        (na = e(ya, 'P', { class: !0 }));
      var Es = p(na);
      (Oa = r(Es, 'Sea')),
        Es.forEach(t),
        ya.forEach(t),
        (_a = h(v)),
        (M = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var rs = p(M);
      ca = e(rs, 'P', { class: !0 });
      var Fa = p(ca);
      (la = r(Fa, 'HAITI')),
        Fa.forEach(t),
        rs.forEach(t),
        (da = h(v)),
        (V = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var Xa = p(V);
      ea = e(Xa, 'P', { class: !0 });
      var us = p(ea);
      (ja = r(us, 'Jeremie')),
        us.forEach(t),
        Xa.forEach(t),
        (Ba = h(v)),
        (O = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ga = p(O);
      ka = e(Ga, 'P', { class: !0 });
      var ps = p(ka);
      (Ua = r(ps, 'Port-au-Prince')),
        ps.forEach(t),
        Ga.forEach(t),
        (X = h(v)),
        (q = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var bs = p(q);
      ga = e(bs, 'P', { class: !0 });
      var Za = p(ga);
      (Ya = r(Za, 'Epicenter')),
        Za.forEach(t),
        bs.forEach(t),
        (Z = h(v)),
        (N = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ha = p(N);
      pa = e(ha, 'P', { class: !0 });
      var ws = p(pa);
      (Da = r(ws, 'Dominican')),
        ws.forEach(t),
        (va = h(ha)),
        (J = e(ha, 'P', { class: !0 }));
      var ls = p(J);
      (Pa = r(ls, 'Republic')),
        ls.forEach(t),
        ha.forEach(t),
        (Ra = h(v)),
        (U = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ds = p(U);
      z = e(Ds, 'P', { class: !0 });
      var as = p(z);
      (Va = r(as, 'Jacmel')),
        as.forEach(t),
        Ds.forEach(t),
        (Ta = h(v)),
        (G = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var os = p(G);
      Y = e(os, 'P', { class: !0 });
      var cs = p(Y);
      (ia = r(cs, 'Les Cayes')),
        cs.forEach(t),
        os.forEach(t),
        (Wa = h(v)),
        (B = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ps = p(B);
      ra = e(Ps, 'P', { class: !0 });
      var is = p(ra);
      (Aa = r(is, '50 mi')),
        is.forEach(t),
        Ps.forEach(t),
        (oa = h(v)),
        (j = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ss = p(j);
      K = e(ss, 'P', { class: !0 });
      var Ts = p(K);
      (Ka = r(Ts, '50 km')),
        Ts.forEach(t),
        ss.forEach(t),
        v.forEach(t),
        this.h();
    },
    h() {
      o(g, 'padding', '0 0 82.703% 0'),
        l(c, 'id', 'g-_ai-chart-sm-img'),
        l(c, 'class', 'g-aiImg svelte-v5mpys'),
        l(c, 'alt', ''),
        l(
          c,
          'style',
          (u = `background-image: url(${oe}/images/graphics/ai-chart-sm.png);`)
        ),
        l(b, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(E, 'id', 'g-ai1-1'),
        l(E, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(E, 'top', '3.8773%'),
        o(E, 'margin-top', '-9.4px'),
        o(E, 'left', '0.3278%'),
        o(E, 'width', '111px'),
        l(C, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(w, 'id', 'g-ai1-2'),
        l(w, 'class', 'g-legend g-aiAbs g-aiPointText svelte-v5mpys'),
        o(w, 'top', '9.0933%'),
        o(w, 'margin-top', '-9.4px'),
        o(w, 'left', '3.0258%'),
        o(w, 'width', '52px'),
        l(P, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(_, 'id', 'g-ai1-3'),
        l(_, 'class', 'g-legend g-aiAbs g-aiPointText svelte-v5mpys'),
        o(_, 'top', '13.5979%'),
        o(_, 'margin-top', '-9.4px'),
        o(_, 'left', '3.0259%'),
        o(_, 'width', '77px'),
        l(aa, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(H, 'id', 'g-ai1-4'),
        l(H, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(H, 'top', '16.6801%'),
        o(H, 'margin-top', '-9.4px'),
        o(H, 'left', '70.3255%'),
        o(H, 'width', '92px'),
        l(W, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(S, 'id', 'g-ai1-5'),
        l(S, 'class', 'g-legend g-aiAbs g-aiPointText svelte-v5mpys'),
        o(S, 'top', '18.3397%'),
        o(S, 'margin-top', '-9.4px'),
        o(S, 'left', '3.0258%'),
        o(S, 'width', '61px'),
        l(sa, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(L, 'id', 'g-ai1-6'),
        l(L, 'class', 'g-legend g-aiAbs g-aiPointText svelte-v5mpys'),
        o(L, 'top', '22.6073%'),
        o(L, 'margin-top', '-9.4px'),
        o(L, 'left', '3.0258%'),
        o(L, 'width', '88px'),
        l(F, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(R, 'id', 'g-ai1-7'),
        l(R, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(R, 'top', '28.5344%'),
        o(R, 'margin-top', '-9.4px'),
        o(R, 'left', '55.9181%'),
        o(R, 'width', '76px'),
        l(ta, 'class', 'g-pstyle1 svelte-v5mpys'),
        l(na, 'class', 'g-pstyle1 svelte-v5mpys'),
        l(x, 'id', 'g-ai1-8'),
        l(x, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(x, 'top', '38.8091%'),
        o(x, 'margin-top', '-17.7px'),
        o(x, 'left', '27.2818%'),
        o(x, 'margin-left', '-41px'),
        o(x, 'width', '82px'),
        l(ca, 'class', 'g-pstyle2 svelte-v5mpys'),
        l(M, 'id', 'g-ai1-9'),
        l(M, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(M, 'top', '39.9724%'),
        o(M, 'margin-top', '-8.6px'),
        o(M, 'left', '61.2858%'),
        o(M, 'width', '67px'),
        l(ea, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(V, 'id', 'g-ai1-10'),
        l(V, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(V, 'top', '56.985%'),
        o(V, 'margin-top', '-9.4px'),
        o(V, 'left', '12.2815%'),
        o(V, 'width', '69px'),
        l(ka, 'class', 'g-pstyle3 svelte-v5mpys'),
        l(O, 'id', 'g-ai1-11'),
        l(O, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(O, 'top', '59.1569%'),
        o(O, 'margin-top', '-9.5px'),
        o(O, 'left', '63.0314%'),
        o(O, 'width', '112px'),
        l(ga, 'class', 'g-pstyle3 svelte-v5mpys'),
        l(q, 'id', 'g-ai1-12'),
        l(q, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(q, 'top', '60.1053%'),
        o(q, 'margin-top', '-9.5px'),
        o(q, 'left', '30.5543%'),
        o(q, 'width', '81px'),
        l(pa, 'class', 'g-pstyle4 svelte-v5mpys'),
        l(J, 'class', 'g-pstyle4 svelte-v5mpys'),
        l(N, 'id', 'g-ai1-13'),
        l(N, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(N, 'top', '62.7194%'),
        o(N, 'margin-top', '-16.5px'),
        o(N, 'left', '91.2282%'),
        o(N, 'margin-left', '-57px'),
        o(N, 'width', '114px'),
        l(z, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(U, 'id', 'g-ai1-14'),
        l(U, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(U, 'top', '75.4778%'),
        o(U, 'margin-top', '-9.4px'),
        o(U, 'left', '57.3552%'),
        o(U, 'width', '64px'),
        l(Y, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(G, 'id', 'g-ai1-15'),
        l(G, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(G, 'top', '76.6632%'),
        o(G, 'margin-top', '-9.4px'),
        o(G, 'left', '21.9639%'),
        o(G, 'width', '79px'),
        l(ra, 'class', 'g-pstyle5 svelte-v5mpys'),
        l(B, 'id', 'g-ai1-16'),
        l(B, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(B, 'top', '85.5251%'),
        o(B, 'margin-top', '-7.7px'),
        o(B, 'left', '0.1344%'),
        o(B, 'width', '49px'),
        l(K, 'class', 'g-pstyle5 svelte-v5mpys'),
        l(j, 'id', 'g-ai1-17'),
        l(j, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(j, 'top', '90.0297%'),
        o(j, 'margin-top', '-7.7px'),
        o(j, 'left', '0.1344%'),
        o(j, 'width', '52px'),
        l(s, 'id', 'g-_ai-chart-sm'),
        l(s, 'class', 'g-artboard svelte-v5mpys'),
        l(s, 'style', '');
    },
    m(fa, v) {
      T(fa, s, v),
        a(s, g),
        a(s, d),
        a(s, c),
        a(s, m),
        a(s, E),
        a(E, b),
        a(b, D),
        a(s, I),
        a(s, w),
        a(w, C),
        a(C, Q),
        a(s, $),
        a(s, _),
        a(_, P),
        a(P, ma),
        a(s, Sa),
        a(s, H),
        a(H, aa),
        a(aa, $a),
        a(s, Ja),
        a(s, S),
        a(S, W),
        a(W, ba),
        a(s, Ha),
        a(s, L),
        a(L, sa),
        a(sa, qa),
        a(s, wa),
        a(s, R),
        a(R, F),
        a(F, La),
        a(s, Ca),
        a(s, x),
        a(x, ta),
        a(ta, Ma),
        a(x, za),
        a(x, na),
        a(na, Oa),
        a(s, _a),
        a(s, M),
        a(M, ca),
        a(ca, la),
        a(s, da),
        a(s, V),
        a(V, ea),
        a(ea, ja),
        a(s, Ba),
        a(s, O),
        a(O, ka),
        a(ka, Ua),
        a(s, X),
        a(s, q),
        a(q, ga),
        a(ga, Ya),
        a(s, Z),
        a(s, N),
        a(N, pa),
        a(pa, Da),
        a(N, va),
        a(N, J),
        a(J, Pa),
        a(s, Ra),
        a(s, U),
        a(U, z),
        a(z, Va),
        a(s, Ta),
        a(s, G),
        a(G, Y),
        a(Y, ia),
        a(s, Wa),
        a(s, B),
        a(B, ra),
        a(ra, Aa),
        a(s, oa),
        a(s, j),
        a(j, K),
        a(K, Ka);
    },
    p: Ea,
    d(fa) {
      fa && t(s);
    },
  };
}
function rp(y) {
  let s,
    g,
    d,
    c,
    u,
    m,
    E,
    b,
    D,
    I,
    w,
    C,
    Q,
    $,
    _,
    P,
    ma,
    Sa,
    H,
    aa,
    $a,
    Ja,
    S,
    W,
    ba,
    Ha,
    L,
    sa,
    qa,
    wa,
    R,
    F,
    La,
    Ca,
    x,
    ta,
    Ma,
    za,
    na,
    Oa,
    _a,
    M,
    ca,
    la,
    da,
    V,
    ea,
    ja,
    Ba,
    O,
    ka,
    Ua,
    X,
    q,
    ga,
    Ya,
    Z,
    N,
    pa,
    Da,
    va,
    J,
    Pa,
    Ra,
    U,
    z,
    Va,
    Ta,
    G,
    Y,
    ia,
    Wa,
    B,
    ra,
    Aa,
    oa,
    j,
    K,
    Ka;
  return {
    c() {
      (s = n('div')),
        (g = n('div')),
        (d = f()),
        (c = n('div')),
        (m = f()),
        (E = n('div')),
        (b = n('p')),
        (D = i('Shake intensity')),
        (I = f()),
        (w = n('div')),
        (C = n('p')),
        (Q = i('Light')),
        ($ = f()),
        (_ = n('div')),
        (P = n('p')),
        (ma = i('Moderate')),
        (Sa = f()),
        (H = n('div')),
        (aa = n('p')),
        ($a = i('Cap-Haitien')),
        (Ja = f()),
        (S = n('div')),
        (W = n('p')),
        (ba = i('Strong')),
        (Ha = f()),
        (L = n('div')),
        (sa = n('p')),
        (qa = i('Very strong')),
        (wa = f()),
        (R = n('div')),
        (F = n('p')),
        (La = i('Gona\xEFves')),
        (Ca = f()),
        (x = n('div')),
        (ta = n('p')),
        (Ma = i('Caribbean')),
        (za = f()),
        (na = n('p')),
        (Oa = i('Sea')),
        (_a = f()),
        (M = n('div')),
        (ca = n('p')),
        (la = i('HAITI')),
        (da = f()),
        (V = n('div')),
        (ea = n('p')),
        (ja = i('Dominican')),
        (Ba = f()),
        (O = n('p')),
        (ka = i('Republic')),
        (Ua = f()),
        (X = n('div')),
        (q = n('p')),
        (ga = i('Jeremie')),
        (Ya = f()),
        (Z = n('div')),
        (N = n('p')),
        (pa = i('Epicenter')),
        (Da = f()),
        (va = n('div')),
        (J = n('p')),
        (Pa = i('Port-au-Prince')),
        (Ra = f()),
        (U = n('div')),
        (z = n('p')),
        (Va = i('Jacmel')),
        (Ta = f()),
        (G = n('div')),
        (Y = n('p')),
        (ia = i('Les Cayes')),
        (Wa = f()),
        (B = n('div')),
        (ra = n('p')),
        (Aa = i('50 mi')),
        (oa = f()),
        (j = n('div')),
        (K = n('p')),
        (Ka = i('50 km')),
        this.h();
    },
    l(fa) {
      s = e(fa, 'DIV', { id: !0, class: !0, style: !0 });
      var v = p(s);
      (g = e(v, 'DIV', { style: !0 })),
        p(g).forEach(t),
        (d = h(v)),
        (c = e(v, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        p(c).forEach(t),
        (m = h(v)),
        (E = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ds = p(E);
      b = e(ds, 'P', { class: !0 });
      var ks = p(b);
      (D = r(ks, 'Shake intensity')),
        ks.forEach(t),
        ds.forEach(t),
        (I = h(v)),
        (w = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ts = p(w);
      C = e(ts, 'P', { class: !0 });
      var Na = p(C);
      (Q = r(Na, 'Light')),
        Na.forEach(t),
        ts.forEach(t),
        ($ = h(v)),
        (_ = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qa = p(_);
      P = e(Qa, 'P', { class: !0 });
      var ns = p(P);
      (ma = r(ns, 'Moderate')),
        ns.forEach(t),
        Qa.forEach(t),
        (Sa = h(v)),
        (H = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var gs = p(H);
      aa = e(gs, 'P', { class: !0 });
      var vs = p(aa);
      ($a = r(vs, 'Cap-Haitien')),
        vs.forEach(t),
        gs.forEach(t),
        (Ja = h(v)),
        (S = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var fs = p(S);
      W = e(fs, 'P', { class: !0 });
      var xa = p(W);
      (ba = r(xa, 'Strong')),
        xa.forEach(t),
        fs.forEach(t),
        (Ha = h(v)),
        (L = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var hs = p(L);
      sa = e(hs, 'P', { class: !0 });
      var es = p(sa);
      (qa = r(es, 'Very strong')),
        es.forEach(t),
        hs.forEach(t),
        (wa = h(v)),
        (R = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ms = p(R);
      F = e(ms, 'P', { class: !0 });
      var _s = p(F);
      (La = r(_s, 'Gona\xEFves')),
        _s.forEach(t),
        ms.forEach(t),
        (Ca = h(v)),
        (x = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ya = p(x);
      ta = e(ya, 'P', { class: !0 });
      var ys = p(ta);
      (Ma = r(ys, 'Caribbean')),
        ys.forEach(t),
        (za = h(ya)),
        (na = e(ya, 'P', { class: !0 }));
      var Es = p(na);
      (Oa = r(Es, 'Sea')),
        Es.forEach(t),
        ya.forEach(t),
        (_a = h(v)),
        (M = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var rs = p(M);
      ca = e(rs, 'P', { class: !0 });
      var Fa = p(ca);
      (la = r(Fa, 'HAITI')),
        Fa.forEach(t),
        rs.forEach(t),
        (da = h(v)),
        (V = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var Xa = p(V);
      ea = e(Xa, 'P', { class: !0 });
      var us = p(ea);
      (ja = r(us, 'Dominican')),
        us.forEach(t),
        (Ba = h(Xa)),
        (O = e(Xa, 'P', { class: !0 }));
      var Ga = p(O);
      (ka = r(Ga, 'Republic')),
        Ga.forEach(t),
        Xa.forEach(t),
        (Ua = h(v)),
        (X = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ps = p(X);
      q = e(ps, 'P', { class: !0 });
      var bs = p(q);
      (ga = r(bs, 'Jeremie')),
        bs.forEach(t),
        ps.forEach(t),
        (Ya = h(v)),
        (Z = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var Za = p(Z);
      N = e(Za, 'P', { class: !0 });
      var ha = p(N);
      (pa = r(ha, 'Epicenter')),
        ha.forEach(t),
        Za.forEach(t),
        (Da = h(v)),
        (va = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ws = p(va);
      J = e(ws, 'P', { class: !0 });
      var ls = p(J);
      (Pa = r(ls, 'Port-au-Prince')),
        ls.forEach(t),
        ws.forEach(t),
        (Ra = h(v)),
        (U = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ds = p(U);
      z = e(Ds, 'P', { class: !0 });
      var as = p(z);
      (Va = r(as, 'Jacmel')),
        as.forEach(t),
        Ds.forEach(t),
        (Ta = h(v)),
        (G = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var os = p(G);
      Y = e(os, 'P', { class: !0 });
      var cs = p(Y);
      (ia = r(cs, 'Les Cayes')),
        cs.forEach(t),
        os.forEach(t),
        (Wa = h(v)),
        (B = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ps = p(B);
      ra = e(Ps, 'P', { class: !0 });
      var is = p(ra);
      (Aa = r(is, '50 mi')),
        is.forEach(t),
        Ps.forEach(t),
        (oa = h(v)),
        (j = e(v, 'DIV', { id: !0, class: !0, style: !0 }));
      var ss = p(j);
      K = e(ss, 'P', { class: !0 });
      var Ts = p(K);
      (Ka = r(Ts, '50 km')),
        Ts.forEach(t),
        ss.forEach(t),
        v.forEach(t),
        this.h();
    },
    h() {
      o(g, 'padding', '0 0 79.6009% 0'),
        l(c, 'id', 'g-_ai-chart-md-img'),
        l(c, 'class', 'g-aiImg svelte-v5mpys'),
        l(c, 'alt', ''),
        l(
          c,
          'style',
          (u = `background-image: url(${oe}/images/graphics/ai-chart-md.png);`)
        ),
        l(b, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(E, 'id', 'g-ai2-1'),
        l(E, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(E, 'top', '2.3515%'),
        o(E, 'margin-top', '-9.4px'),
        o(E, 'left', '0.3608%'),
        o(E, 'width', '111px'),
        l(C, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(w, 'id', 'g-ai2-2'),
        l(w, 'class', 'g-legend g-aiAbs g-aiPointText svelte-v5mpys'),
        o(w, 'top', '7.6811%'),
        o(w, 'margin-top', '-9.4px'),
        o(w, 'left', '2.6603%'),
        o(w, 'width', '52px'),
        l(P, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(_, 'id', 'g-ai2-3'),
        l(_, 'class', 'g-legend g-aiAbs g-aiPointText svelte-v5mpys'),
        o(_, 'top', '12.2494%'),
        o(_, 'margin-top', '-9.4px'),
        o(_, 'left', '2.6604%'),
        o(_, 'width', '77px'),
        l(aa, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(H, 'id', 'g-ai2-4'),
        l(H, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(H, 'top', '15.4852%'),
        o(H, 'margin-top', '-9.4px'),
        o(H, 'left', '70.3606%'),
        o(H, 'width', '92px'),
        l(W, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(S, 'id', 'g-ai2-5'),
        l(S, 'class', 'g-legend g-aiAbs g-aiPointText svelte-v5mpys'),
        o(S, 'top', '17.1983%'),
        o(S, 'margin-top', '-9.4px'),
        o(S, 'left', '2.6603%'),
        o(S, 'width', '61px'),
        l(sa, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(L, 'id', 'g-ai2-6'),
        l(L, 'class', 'g-legend g-aiAbs g-aiPointText svelte-v5mpys'),
        o(L, 'top', '21.7666%'),
        o(L, 'margin-top', '-9.4px'),
        o(L, 'left', '2.6603%'),
        o(L, 'width', '88px'),
        l(F, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(R, 'id', 'g-ai2-7'),
        l(R, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(R, 'top', '27.6672%'),
        o(R, 'margin-top', '-9.4px'),
        o(R, 'left', '55.993%'),
        o(R, 'width', '76px'),
        l(ta, 'class', 'g-pstyle1 svelte-v5mpys'),
        l(na, 'class', 'g-pstyle1 svelte-v5mpys'),
        l(x, 'id', 'g-ai2-8'),
        l(x, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(x, 'top', '38.0099%'),
        o(x, 'margin-top', '-17.7px'),
        o(x, 'left', '27.2388%'),
        o(x, 'margin-left', '-41px'),
        o(x, 'width', '82px'),
        l(ca, 'class', 'g-pstyle2 svelte-v5mpys'),
        l(M, 'id', 'g-ai2-9'),
        l(M, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(M, 'top', '42.7626%'),
        o(M, 'margin-top', '-10.7px'),
        o(M, 'left', '62.8914%'),
        o(M, 'width', '80px'),
        l(ea, 'class', 'g-pstyle3 svelte-v5mpys'),
        l(O, 'class', 'g-pstyle3 svelte-v5mpys'),
        l(V, 'id', 'g-ai2-10'),
        l(V, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(V, 'top', '50.0029%'),
        o(V, 'margin-top', '-17.7px'),
        o(V, 'left', '92.295%'),
        o(V, 'margin-left', '-60.5px'),
        o(V, 'width', '121px'),
        l(q, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(X, 'id', 'g-ai2-11'),
        l(X, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(X, 'top', '57.3608%'),
        o(X, 'margin-top', '-9.4px'),
        o(X, 'left', '12.2815%'),
        o(X, 'width', '69px'),
        l(N, 'class', 'g-pstyle4 svelte-v5mpys'),
        l(Z, 'id', 'g-ai2-12'),
        l(Z, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(Z, 'top', '60.2742%'),
        o(Z, 'margin-top', '-10.7px'),
        o(Z, 'left', '30.6995%'),
        o(Z, 'width', '89px'),
        l(J, 'class', 'g-pstyle4 svelte-v5mpys'),
        l(va, 'id', 'g-ai2-13'),
        l(va, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(va, 'top', '62.5583%'),
        o(va, 'margin-top', '-10.7px'),
        o(va, 'left', '66.3403%'),
        o(va, 'width', '125px'),
        l(z, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(U, 'id', 'g-ai2-14'),
        l(U, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(U, 'top', '75.6338%'),
        o(U, 'margin-top', '-9.4px'),
        o(U, 'left', '57.8174%'),
        o(U, 'width', '64px'),
        l(Y, 'class', 'g-pstyle0 svelte-v5mpys'),
        l(G, 'id', 'g-ai2-15'),
        l(G, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(G, 'top', '77.3469%'),
        o(G, 'margin-top', '-9.4px'),
        o(G, 'left', '22.5239%'),
        o(G, 'width', '79px'),
        l(ra, 'class', 'g-pstyle5 svelte-v5mpys'),
        l(B, 'id', 'g-ai2-16'),
        l(B, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(B, 'top', '86.936%'),
        o(B, 'margin-top', '-7.7px'),
        o(B, 'left', '0.1678%'),
        o(B, 'width', '49px'),
        l(K, 'class', 'g-pstyle5 svelte-v5mpys'),
        l(j, 'id', 'g-ai2-17'),
        l(j, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-v5mpys'),
        o(j, 'top', '91.5043%'),
        o(j, 'margin-top', '-7.7px'),
        o(j, 'left', '0.1678%'),
        o(j, 'width', '52px'),
        l(s, 'id', 'g-_ai-chart-md'),
        l(s, 'class', 'g-artboard svelte-v5mpys'),
        l(s, 'style', '');
    },
    m(fa, v) {
      T(fa, s, v),
        a(s, g),
        a(s, d),
        a(s, c),
        a(s, m),
        a(s, E),
        a(E, b),
        a(b, D),
        a(s, I),
        a(s, w),
        a(w, C),
        a(C, Q),
        a(s, $),
        a(s, _),
        a(_, P),
        a(P, ma),
        a(s, Sa),
        a(s, H),
        a(H, aa),
        a(aa, $a),
        a(s, Ja),
        a(s, S),
        a(S, W),
        a(W, ba),
        a(s, Ha),
        a(s, L),
        a(L, sa),
        a(sa, qa),
        a(s, wa),
        a(s, R),
        a(R, F),
        a(F, La),
        a(s, Ca),
        a(s, x),
        a(x, ta),
        a(ta, Ma),
        a(x, za),
        a(x, na),
        a(na, Oa),
        a(s, _a),
        a(s, M),
        a(M, ca),
        a(ca, la),
        a(s, da),
        a(s, V),
        a(V, ea),
        a(ea, ja),
        a(V, Ba),
        a(V, O),
        a(O, ka),
        a(s, Ua),
        a(s, X),
        a(X, q),
        a(q, ga),
        a(s, Ya),
        a(s, Z),
        a(Z, N),
        a(N, pa),
        a(s, Da),
        a(s, va),
        a(va, J),
        a(J, Pa),
        a(s, Ra),
        a(s, U),
        a(U, z),
        a(z, Va),
        a(s, Ta),
        a(s, G),
        a(G, Y),
        a(Y, ia),
        a(s, Wa),
        a(s, B),
        a(B, ra),
        a(ra, Aa),
        a(s, oa),
        a(s, j),
        a(j, K),
        a(K, Ka);
    },
    p: Ea,
    d(fa) {
      fa && t(s);
    },
  };
}
function jp(y) {
  let s,
    g,
    d,
    c,
    u = y[0] && y[0] >= 0 && y[0] < 510 && cp(),
    m = y[0] && y[0] >= 510 && y[0] < 660 && ip(),
    E = y[0] && y[0] >= 660 && rp();
  return {
    c() {
      (s = n('div')),
        u && u.c(),
        (g = f()),
        m && m.c(),
        (d = f()),
        E && E.c(),
        this.h();
    },
    l(b) {
      s = e(b, 'DIV', { id: !0, class: !0 });
      var D = p(s);
      u && u.l(D),
        (g = h(D)),
        m && m.l(D),
        (d = h(D)),
        E && E.l(D),
        D.forEach(t),
        this.h();
    },
    h() {
      l(s, 'id', 'g-_ai-chart-box'),
        l(s, 'class', 'svelte-v5mpys'),
        Ip(() => y[1].call(s));
    },
    m(b, D) {
      T(b, s, D),
        u && u.m(s, null),
        a(s, g),
        m && m.m(s, null),
        a(s, d),
        E && E.m(s, null),
        (c = $p(s, y[1].bind(s)));
    },
    p(b, [D]) {
      b[0] && b[0] >= 0 && b[0] < 510
        ? u
          ? u.p(b, D)
          : ((u = cp()), u.c(), u.m(s, g))
        : u && (u.d(1), (u = null)),
        b[0] && b[0] >= 510 && b[0] < 660
          ? m
            ? m.p(b, D)
            : ((m = ip()), m.c(), m.m(s, d))
          : m && (m.d(1), (m = null)),
        b[0] && b[0] >= 660
          ? E
            ? E.p(b, D)
            : ((E = rp()), E.c(), E.m(s, null))
          : E && (E.d(1), (E = null));
    },
    i: Ea,
    o: Ea,
    d(b) {
      b && t(s), u && u.d(), m && m.d(), E && E.d(), c();
    },
  };
}
function Rp(y, s, g) {
  let d = null;
  function c() {
    (d = this.clientWidth), g(0, d);
  }
  return [d, c];
}
class _n extends un {
  constructor(s) {
    super(), dn(this, s, Rp, jp, kn, {});
  }
}
var Np = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: _n,
});
function Gp(y) {
  let s,
    g,
    d,
    c,
    u,
    m,
    E,
    b,
    D,
    I,
    w,
    C,
    Q,
    $,
    _,
    P,
    ma,
    Sa,
    H,
    aa,
    $a,
    Ja,
    S,
    W,
    ba,
    Ha,
    L,
    sa,
    qa,
    wa,
    R,
    F,
    La,
    Ca,
    x,
    ta,
    Ma,
    za,
    na,
    Oa,
    _a,
    M,
    ca,
    la,
    da,
    V,
    ea,
    ja,
    Ba,
    O,
    ka,
    Ua,
    X,
    q,
    ga,
    Ya,
    Z,
    N,
    pa,
    Da,
    va,
    J,
    Pa,
    Ra,
    U,
    z,
    Va,
    Ta,
    G,
    Y,
    ia,
    Wa,
    B,
    ra,
    Aa,
    oa;
  return {
    c() {
      (s = n('table')),
        (g = n('thead')),
        (d = n('tr')),
        (c = n('th')),
        (u = i('Date ')),
        (m = n('th')),
        (E = i(`S&P 500
      `)),
        (b = n('th')),
        (D = i('Dow ')),
        (I = n('th')),
        (w = i('Nasdaq')),
        (C = f()),
        (Q = n('tbody')),
        ($ = n('tr')),
        (_ = n('td')),
        (P = i('December 31, 2021')),
        (ma = n('td')),
        (Sa = i('0%')),
        (H = n('td')),
        (aa = i('0')),
        ($a = n('td')),
        (Ja = i('0%')),
        (S = n('tr')),
        (W = n('td')),
        (ba = i('January 3, 2022')),
        (Ha = n('td')),
        (L = i('1%')),
        (sa = n('td')),
        (qa = i('1')),
        (wa = n('td')),
        (R = i('1%')),
        (F = n('tr')),
        (La = n('td')),
        (Ca = i('January 4, 2022')),
        (x = n('td')),
        (ta = i('1%')),
        (Ma = n('td')),
        (za = i('1')),
        (na = n('td')),
        (Oa = i('\u22120%')),
        (_a = n('tr')),
        (M = n('td')),
        (ca = i('January 5, 2022')),
        (la = n('td')),
        (da = i('\u22121%')),
        (V = n('td')),
        (ea = i('0')),
        (ja = n('td')),
        (Ba = i('\u22123%')),
        (O = n('tr')),
        (ka = n('td')),
        (Ua = i('January 6, 2022')),
        (X = n('td')),
        (q = i('\u22121%')),
        (ga = n('td')),
        (Ya = i('\u22120')),
        (Z = n('td')),
        (N = i('\u22124%')),
        (pa = n('tr')),
        (Da = n('td')),
        (va = i('January 7, 2022')),
        (J = n('td')),
        (Pa = i('\u22122%')),
        (Ra = n('td')),
        (U = i('\u22120')),
        (z = n('td')),
        (Va = i('\u22125%')),
        (Ta = n('tr')),
        (G = n('td')),
        (Y = i('January 10, 2022')),
        (ia = n('td')),
        (Wa = i('\u22122%')),
        (B = n('td')),
        (ra = i('\u22121')),
        (Aa = n('td')),
        (oa = i('\u22124%')),
        this.h();
    },
    l(j) {
      s = e(j, 'TABLE', { class: !0 });
      var K = p(s);
      g = e(K, 'THEAD', {});
      var Ka = p(g);
      d = e(Ka, 'TR', {});
      var fa = p(d);
      c = e(fa, 'TH', { 'data-column': !0, 'data-row': !0 });
      var v = p(c);
      (u = r(v, 'Date ')),
        v.forEach(t),
        (m = e(fa, 'TH', { 'data-column': !0, 'data-row': !0 }));
      var ds = p(m);
      (E = r(
        ds,
        `S&P 500
      `
      )),
        ds.forEach(t),
        (b = e(fa, 'TH', { 'data-column': !0, 'data-row': !0 }));
      var ks = p(b);
      (D = r(ks, 'Dow ')),
        ks.forEach(t),
        (I = e(fa, 'TH', { 'data-column': !0, 'data-row': !0 }));
      var ts = p(I);
      (w = r(ts, 'Nasdaq')),
        ts.forEach(t),
        fa.forEach(t),
        Ka.forEach(t),
        (C = h(K)),
        (Q = e(K, 'TBODY', {}));
      var Na = p(Q);
      $ = e(Na, 'TR', {});
      var Qa = p($);
      _ = e(Qa, 'TD', {});
      var ns = p(_);
      (P = r(ns, 'December 31, 2021')), ns.forEach(t), (ma = e(Qa, 'TD', {}));
      var gs = p(ma);
      (Sa = r(gs, '0%')), gs.forEach(t), (H = e(Qa, 'TD', {}));
      var vs = p(H);
      (aa = r(vs, '0')), vs.forEach(t), ($a = e(Qa, 'TD', {}));
      var fs = p($a);
      (Ja = r(fs, '0%')), fs.forEach(t), Qa.forEach(t), (S = e(Na, 'TR', {}));
      var xa = p(S);
      W = e(xa, 'TD', {});
      var hs = p(W);
      (ba = r(hs, 'January 3, 2022')), hs.forEach(t), (Ha = e(xa, 'TD', {}));
      var es = p(Ha);
      (L = r(es, '1%')), es.forEach(t), (sa = e(xa, 'TD', {}));
      var ms = p(sa);
      (qa = r(ms, '1')), ms.forEach(t), (wa = e(xa, 'TD', {}));
      var _s = p(wa);
      (R = r(_s, '1%')), _s.forEach(t), xa.forEach(t), (F = e(Na, 'TR', {}));
      var ya = p(F);
      La = e(ya, 'TD', {});
      var ys = p(La);
      (Ca = r(ys, 'January 4, 2022')), ys.forEach(t), (x = e(ya, 'TD', {}));
      var Es = p(x);
      (ta = r(Es, '1%')), Es.forEach(t), (Ma = e(ya, 'TD', {}));
      var rs = p(Ma);
      (za = r(rs, '1')), rs.forEach(t), (na = e(ya, 'TD', {}));
      var Fa = p(na);
      (Oa = r(Fa, '\u22120%')),
        Fa.forEach(t),
        ya.forEach(t),
        (_a = e(Na, 'TR', {}));
      var Xa = p(_a);
      M = e(Xa, 'TD', {});
      var us = p(M);
      (ca = r(us, 'January 5, 2022')), us.forEach(t), (la = e(Xa, 'TD', {}));
      var Ga = p(la);
      (da = r(Ga, '\u22121%')), Ga.forEach(t), (V = e(Xa, 'TD', {}));
      var ps = p(V);
      (ea = r(ps, '0')), ps.forEach(t), (ja = e(Xa, 'TD', {}));
      var bs = p(ja);
      (Ba = r(bs, '\u22123%')),
        bs.forEach(t),
        Xa.forEach(t),
        (O = e(Na, 'TR', {}));
      var Za = p(O);
      ka = e(Za, 'TD', {});
      var ha = p(ka);
      (Ua = r(ha, 'January 6, 2022')), ha.forEach(t), (X = e(Za, 'TD', {}));
      var ws = p(X);
      (q = r(ws, '\u22121%')), ws.forEach(t), (ga = e(Za, 'TD', {}));
      var ls = p(ga);
      (Ya = r(ls, '\u22120')), ls.forEach(t), (Z = e(Za, 'TD', {}));
      var Ds = p(Z);
      (N = r(Ds, '\u22124%')),
        Ds.forEach(t),
        Za.forEach(t),
        (pa = e(Na, 'TR', {}));
      var as = p(pa);
      Da = e(as, 'TD', {});
      var os = p(Da);
      (va = r(os, 'January 7, 2022')), os.forEach(t), (J = e(as, 'TD', {}));
      var cs = p(J);
      (Pa = r(cs, '\u22122%')), cs.forEach(t), (Ra = e(as, 'TD', {}));
      var Ps = p(Ra);
      (U = r(Ps, '\u22120')), Ps.forEach(t), (z = e(as, 'TD', {}));
      var is = p(z);
      (Va = r(is, '\u22125%')),
        is.forEach(t),
        as.forEach(t),
        (Ta = e(Na, 'TR', {}));
      var ss = p(Ta);
      G = e(ss, 'TD', {});
      var Ts = p(G);
      (Y = r(Ts, 'January 10, 2022')), Ts.forEach(t), (ia = e(ss, 'TD', {}));
      var js = p(ia);
      (Wa = r(js, '\u22122%')), js.forEach(t), (B = e(ss, 'TD', {}));
      var ct = p(B);
      (ra = r(ct, '\u22121')), ct.forEach(t), (Aa = e(ss, 'TD', {}));
      var it = p(Aa);
      (oa = r(it, '\u22124%')),
        it.forEach(t),
        ss.forEach(t),
        Na.forEach(t),
        K.forEach(t),
        this.h();
    },
    h() {
      l(c, 'data-column', 'Date'),
        l(c, 'data-row', '-1'),
        l(m, 'data-column', 'S&P 500'),
        l(m, 'data-row', '-1'),
        l(b, 'data-column', 'Dow'),
        l(b, 'data-row', '-1'),
        l(I, 'data-column', 'Nasdaq'),
        l(I, 'data-row', '-1'),
        l(s, 'class', 'linechart-data');
    },
    m(j, K) {
      T(j, s, K),
        a(s, g),
        a(g, d),
        a(d, c),
        a(c, u),
        a(d, m),
        a(m, E),
        a(d, b),
        a(b, D),
        a(d, I),
        a(I, w),
        a(s, C),
        a(s, Q),
        a(Q, $),
        a($, _),
        a(_, P),
        a($, ma),
        a(ma, Sa),
        a($, H),
        a(H, aa),
        a($, $a),
        a($a, Ja),
        a(Q, S),
        a(S, W),
        a(W, ba),
        a(S, Ha),
        a(Ha, L),
        a(S, sa),
        a(sa, qa),
        a(S, wa),
        a(wa, R),
        a(Q, F),
        a(F, La),
        a(La, Ca),
        a(F, x),
        a(x, ta),
        a(F, Ma),
        a(Ma, za),
        a(F, na),
        a(na, Oa),
        a(Q, _a),
        a(_a, M),
        a(M, ca),
        a(_a, la),
        a(la, da),
        a(_a, V),
        a(V, ea),
        a(_a, ja),
        a(ja, Ba),
        a(Q, O),
        a(O, ka),
        a(ka, Ua),
        a(O, X),
        a(X, q),
        a(O, ga),
        a(ga, Ya),
        a(O, Z),
        a(Z, N),
        a(Q, pa),
        a(pa, Da),
        a(Da, va),
        a(pa, J),
        a(J, Pa),
        a(pa, Ra),
        a(Ra, U),
        a(pa, z),
        a(z, Va),
        a(Q, Ta),
        a(Ta, G),
        a(G, Y),
        a(Ta, ia),
        a(ia, Wa),
        a(Ta, B),
        a(B, ra),
        a(Ta, Aa),
        a(Aa, oa);
    },
    p: Ea,
    i: Ea,
    o: Ea,
    d(j) {
      j && t(s);
    },
  };
}
class kp extends un {
  constructor(s) {
    super(), dn(this, s, null, Gp, kn, {});
  }
}
var Jp = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: kp,
});
function qp(y) {
  switch (y) {
    case './ai2svelte/ai-chart.exclude.svelte':
      return le(
        () =>
          Promise.resolve().then(function () {
            return Np;
          }),
        void 0
      );
    case './ai2svelte/ai-linechart.exclude.svelte':
      return le(
        () => import('./ai-linechart.exclude-8a9bbab6.js'),
        [
          'chunks/ai-linechart.exclude-8a9bbab6.js',
          'assets/ai-linechart.exclude-08ad3773.css',
          'chunks/index-83a5d9f9.js',
          'chunks/paths-396f020f.js',
        ]
      );
    case './ai2svelte/data-table.exclude.svelte':
      return le(
        () =>
          Promise.resolve().then(function () {
            return Jp;
          }),
        void 0
      );
    default:
      return new Promise(function (s, g) {
        (typeof queueMicrotask == 'function'
          ? queueMicrotask
          : setTimeout)(g.bind(null, new Error('Unknown variable dynamic import: ' + y)));
      });
  }
}
const zp = (y) => ({}),
  up = (y) => ({ slot: 'hidden' });
function Bp(y) {
  let s, g;
  return (
    (s = new mn({
      props: {
        AiGraphic: _n,
        ariaHidden: !0,
        ariaDescription:
          'A map of Haiti shows the epicenter of an earthquake in the southwest of the country.',
      },
    })),
    {
      c() {
        $s(s.$$.fragment);
      },
      l(d) {
        Ls(s.$$.fragment, d);
      },
      m(d, c) {
        Cs(s, d, c), (g = !0);
      },
      p: Ea,
      i(d) {
        g || (ua(s.$$.fragment, d), (g = !0));
      },
      o(d) {
        Ia(s.$$.fragment, d), (g = !1);
      },
      d(d) {
        Ss(s, d);
      },
    }
  );
}
function Up(y) {
  let s, g;
  return (
    (s = new mn({
      props: {
        AiGraphic: _n,
        size: 'wide',
        ariaDescription:
          'A map of Haiti shows the epicenter of an earthquake in the southwest of the country.',
      },
    })),
    {
      c() {
        $s(s.$$.fragment);
      },
      l(d) {
        Ls(s.$$.fragment, d);
      },
      m(d, c) {
        Cs(s, d, c), (g = !0);
      },
      p: Ea,
      i(d) {
        g || (ua(s.$$.fragment, d), (g = !0));
      },
      o(d) {
        Ia(s.$$.fragment, d), (g = !1);
      },
      d(d) {
        Ss(s, d);
      },
    }
  );
}
function Yp(y) {
  let s, g, d, c, u, m;
  return {
    c() {
      (s = n('div')),
        (g = n('h4')),
        (d = i('Earthquake in Haiti')),
        (c = f()),
        (u = n('p')),
        (m = i('A 7.0 magnitude earthquake struck the island on Tuesday.')),
        this.h();
    },
    l(E) {
      s = e(E, 'DIV', { slot: !0, class: !0 });
      var b = p(s);
      g = e(b, 'H4', { class: !0 });
      var D = p(g);
      (d = r(D, 'Earthquake in Haiti')),
        D.forEach(t),
        (c = h(b)),
        (u = e(b, 'P', {}));
      var I = p(u);
      (m = r(I, 'A 7.0 magnitude earthquake struck the island on Tuesday.')),
        I.forEach(t),
        b.forEach(t),
        this.h();
    },
    h() {
      l(g, 'class', 'svelte-xmoab3'),
        l(s, 'slot', 'title'),
        l(s, 'class', 'title svelte-xmoab3');
    },
    m(E, b) {
      T(E, s, b), a(s, g), a(g, d), a(s, c), a(s, u), a(u, m);
    },
    p: Ea,
    d(E) {
      E && t(s);
    },
  };
}
function Wp(y) {
  let s, g, d, c, u, m;
  return {
    c() {
      (s = n('aside')),
        (g = n('p')),
        (d = i('Note: Data current as of Wednesday.')),
        (c = f()),
        (u = n('p')),
        (m = i('Source: USGIS')),
        this.h();
    },
    l(E) {
      s = e(E, 'ASIDE', { slot: !0 });
      var b = p(s);
      g = e(b, 'P', { class: !0 });
      var D = p(g);
      (d = r(D, 'Note: Data current as of Wednesday.')),
        D.forEach(t),
        (c = h(b)),
        (u = e(b, 'P', { class: !0 }));
      var I = p(u);
      (m = r(I, 'Source: USGIS')), I.forEach(t), b.forEach(t), this.h();
    },
    h() {
      l(g, 'class', 'note'), l(u, 'class', 'source'), l(s, 'slot', 'notes');
    },
    m(E, b) {
      T(E, s, b), a(s, g), a(g, d), a(s, c), a(s, u), a(u, m);
    },
    p: Ea,
    d(E) {
      E && t(s);
    },
  };
}
function Fp(y) {
  let s, g;
  return (
    (s = new mn({
      props: {
        AiGraphic: _n,
        id: 'ai-map',
        ariaHidden: !0,
        size: 'wide',
        ariaDescription:
          'A map of Haiti shows the epicenter of an earthquake in the southwest of the country.',
        $$slots: { notes: [Wp], title: [Yp] },
        $$scope: { ctx: y },
      },
    })),
    {
      c() {
        $s(s.$$.fragment);
      },
      l(d) {
        Ls(s.$$.fragment, d);
      },
      m(d, c) {
        Cs(s, d, c), (g = !0);
      },
      p(d, c) {
        const u = {};
        c & 4 && (u.$$scope = { dirty: c, ctx: d }), s.$set(u);
      },
      i(d) {
        g || (ua(s.$$.fragment, d), (g = !0));
      },
      o(d) {
        Ia(s.$$.fragment, d), (g = !1);
      },
      d(d) {
        Ss(s, d);
      },
    }
  );
}
function Kp(y) {
  return { c: Ea, l: Ea, m: Ea, p: Ea, i: Ea, o: Ea, d: Ea };
}
function Qp(y) {
  let s, g;
  return (
    (s = new mn({
      props: {
        AiGraphic: y[3],
        ariaDescription:
          'A map of Haiti shows the epicenter of an earthquake in the southwest of the country.',
        $$slots: { hidden: [Zp] },
        $$scope: { ctx: y },
      },
    })),
    {
      c() {
        $s(s.$$.fragment);
      },
      l(d) {
        Ls(s.$$.fragment, d);
      },
      m(d, c) {
        Cs(s, d, c), (g = !0);
      },
      p(d, c) {
        const u = {};
        c & 4 && (u.$$scope = { dirty: c, ctx: d }), s.$set(u);
      },
      i(d) {
        g || (ua(s.$$.fragment, d), (g = !0));
      },
      o(d) {
        Ia(s.$$.fragment, d), (g = !1);
      },
      d(d) {
        Ss(s, d);
      },
    }
  );
}
function Xp(y) {
  let s, g;
  return (
    (s = new kp({})),
    {
      c() {
        $s(s.$$.fragment);
      },
      l(d) {
        Ls(s.$$.fragment, d);
      },
      m(d, c) {
        Cs(s, d, c), (g = !0);
      },
      i(d) {
        g || (ua(s.$$.fragment, d), (g = !0));
      },
      o(d) {
        Ia(s.$$.fragment, d), (g = !1);
      },
      d(d) {
        Ss(s, d);
      },
    }
  );
}
function Zp(y) {
  let s;
  const g = y[1].default,
    d = hn(g, y, y[2], up),
    c = d || Xp();
  return {
    c() {
      c && c.c();
    },
    l(u) {
      c && c.l(u);
    },
    m(u, m) {
      c && c.m(u, m), (s = !0);
    },
    p(u, m) {
      d &&
        d.p &&
        (!s || m & 4) &&
        gn(d, g, u, u[2], s ? fn(g, u[2], m, zp) : vn(u[2]), up);
    },
    i(u) {
      s || (ua(c, u), (s = !0));
    },
    o(u) {
      Ia(c, u), (s = !1);
    },
    d(u) {
      c && c.d(u);
    },
  };
}
function al(y) {
  return { c: Ea, l: Ea, m: Ea, p: Ea, i: Ea, o: Ea, d: Ea };
}
function sl(y) {
  let s,
    g,
    d = {
      ctx: y,
      current: null,
      token: null,
      hasCatch: !1,
      pending: al,
      then: Qp,
      catch: Kp,
      value: 3,
      blocks: [, , ,],
    };
  return (
    Cp(y[0]('ai-linechart'), d),
    {
      c() {
        (s = rn()), d.block.c();
      },
      l(c) {
        (s = rn()), d.block.l(c);
      },
      m(c, u) {
        T(c, s, u),
          d.block.m(c, (d.anchor = u)),
          (d.mount = () => s.parentNode),
          (d.anchor = s),
          (g = !0);
      },
      p(c, u) {
        (y = c), Sp(d, y, u);
      },
      i(c) {
        g || (ua(d.block), (g = !0));
      },
      o(c) {
        for (let u = 0; u < 3; u += 1) {
          const m = d.blocks[u];
          Ia(m);
        }
        g = !1;
      },
      d(c) {
        c && t(s), d.block.d(c), (d.token = null), (d = null);
      },
    }
  );
}
function tl(y) {
  let s,
    g,
    d,
    c,
    u,
    m,
    E,
    b,
    D,
    I,
    w,
    C = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MyAiChart <span class="token keyword">from</span> <span class="token string">'./some-chart.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span>
  <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>MyAiChart<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">ariaDescription</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Description of your graphic for screen readers.<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span></code>`,
    Q,
    $,
    _,
    P,
    ma,
    Sa,
    H,
    aa,
    $a,
    Ja,
    S,
    W,
    ba,
    Ha,
    L,
    sa,
    qa,
    wa,
    R,
    F,
    La,
    Ca,
    x,
    ta,
    Ma,
    za,
    na,
    Oa,
    _a,
    M,
    ca,
    la,
    da,
    V,
    ea,
    ja,
    Ba,
    O,
    ka,
    Ua,
    X,
    q,
    ga,
    Ya,
    Z,
    N,
    pa,
    Da,
    va,
    J,
    Pa,
    Ra,
    U,
    z,
    Va,
    Ta,
    G,
    Y,
    ia,
    Wa,
    B,
    ra,
    Aa,
    oa,
    j,
    K,
    Ka,
    fa,
    v,
    ds,
    ks,
    ts,
    Na,
    Qa,
    ns,
    gs,
    vs,
    fs,
    xa,
    hs,
    es,
    ms,
    _s,
    ya,
    ys,
    Es,
    rs,
    Fa,
    Xa = `<code class="language-bash"><span class="token comment"># In your Google doc...</span>
<span class="token punctuation">[</span>blocks<span class="token punctuation">]</span>

<span class="token comment"># ...</span>
Type: ai2svelte
ComponentName: my-chart
AriaHidden: <span class="token boolean">true</span> // or <span class="token boolean">false</span>
AltText: Add a descriptive line on the graphic <span class="token keyword">for</span> <span class="token function">screen</span> readers. 

<span class="token punctuation">[</span><span class="token punctuation">]</span></code>`,
    us,
    Ga,
    ps,
    bs,
    Za,
    ha,
    ws,
    ls,
    Ds,
    as,
    os,
    cs,
    Ps,
    is,
    ss,
    Ts,
    js,
    ct,
    it,
    Vt,
    Ws,
    gp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MyAiChart <span class="token keyword">from</span> <span class="token string">'./some-chart.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span>
  <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>MyAiChart<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wide<span class="token punctuation">"</span></span>
  <span class="token attr-name">ariaDescription</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A map of Haiti shows the epicenter of an earthquake in the southwest of the country.<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span></code>`,
    Ht,
    Rs,
    Lt,
    Ns,
    ft,
    yn,
    En,
    ht,
    bn,
    Mt,
    Fs,
    vp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MyAiChart <span class="token keyword">from</span> <span class="token string">'./some-chart.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Add an ID and change the default width of your graphic --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span>
  <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>MyAiChart<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ai-map<span class="token punctuation">"</span></span>
  <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wide<span class="token punctuation">"</span></span>
  <span class="token attr-name">ariaDescription</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A map of Haiti shows the epicenter of an earthquake in the southwest of the country.<span class="token punctuation">"</span></span> 
<span class="token punctuation">></span></span>
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
    Ot,
    Gs,
    jt,
    Js,
    mt,
    wn,
    Dn,
    Ks,
    Pn,
    Qs,
    Tn,
    An,
    Rt,
    Xs,
    fp = `<code class="language-bash"><span class="token comment"># In your Google doc...</span>
<span class="token punctuation">[</span>blocks<span class="token punctuation">]</span>

<span class="token comment"># ...</span>
Type: ai2svelte
ComponentName: my-chart

<span class="token punctuation">[</span><span class="token punctuation">]</span></code>`,
    Nt,
    Zs,
    hp = `<code class="language-svelte"><span class="token comment">&lt;!-- src/lib/Page.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> content <span class="token keyword">from</span> <span class="token string">'$locales/en/content.json'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>

  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> truthyString <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$utils/truthyString'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> fetchComponent <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$utils/dynamicComponents'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">content<span class="token punctuation">.</span>blocks </span><span class="token keyword">as</span> <span class="token language-javascript">block<span class="token punctuation">&#125;</span></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> block<span class="token punctuation">.</span>Type <span class="token operator">===</span> <span class="token string">'ai2svelte'</span><span class="token punctuation">&#125;</span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">await</span> <span class="token function">fetchComponent</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>ComponentName<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>then component<span class="token punctuation">&#125;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span>
          <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>component<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
          <span class="token attr-name">id="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span>ComponentName<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
          <span class="token attr-name">size="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span>Size<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
          <span class="token attr-name">ariaHidden="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token function">truthyString</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>AriaHidden<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
          <span class="token attr-name">ariaDescription="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span>AltText<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
        <span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- Code below is optional. Can delete if you have no dek, source, note, etc. --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> block<span class="token punctuation">.</span>Title<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span>Title<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
            <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> block<span class="token punctuation">.</span>Chatter<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span>Chatter<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>notes<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> block<span class="token punctuation">.</span>Note<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>note<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Note: <span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span>Note<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
            <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> block<span class="token punctuation">.</span>Source<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>source<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Source: <span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">.</span>Source<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- End of optional code --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Ai2svelte</span><span class="token punctuation">></span></span>
      <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>catch error<span class="token punctuation">&#125;</span></span>
        <span class="token language-javascript"><span class="token punctuation">&#123;</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
          <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Error fetching component: ./ai2svelte/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>block<span class="token punctuation">.</span>ComponentName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.svelte</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
          error
        <span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">await</span><span class="token punctuation">&#125;</span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span></code>`,
    Gt,
    qs,
    Ms,
    xn,
    _t,
    In,
    $n,
    at,
    Cn,
    Sn,
    Vn,
    Is,
    yt,
    Hn,
    Ln,
    Et,
    Mn,
    On,
    bt,
    jn,
    Rn,
    wt,
    Nn,
    Gn,
    Jt,
    xs,
    Dt,
    Jn,
    qn,
    Pt,
    zn,
    Bn,
    st,
    Un,
    Tt,
    Yn,
    Wn,
    Fn,
    tt,
    Kn,
    At,
    Qn,
    Xn,
    qt,
    nt,
    mp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> SRDataTable <span class="token keyword">from</span> <span class="token string">'./SRDataTable.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span>
  <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>MyAiChart<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">ariaDescription</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A line chart showing daily closing prices for S&amp;P 500, Dow, and Nasdaq from Dec. 31, 2021 to Jan. 10, 2022<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hidden<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SRDataTable</span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span><span class="token punctuation">/></span></span></code>`,
    zt,
    zs,
    Bt,
    rt,
    et,
    Zn,
    xt,
    ae,
    se,
    Ut,
    pt,
    _p = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>line-chart-data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">data-column</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Date<span class="token punctuation">"</span></span> <span class="token attr-name">data-row</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Date <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span>
        <span class="token attr-name">data-column</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>S<span class="token entity named-entity" title="&amp;">&amp;amp;</span>P 500<span class="token punctuation">"</span></span>
        <span class="token attr-name">data-row</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>S<span class="token entity named-entity" title="&amp;">&amp;amp;</span>P 500
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">data-column</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Dow<span class="token punctuation">"</span></span> <span class="token attr-name">data-row</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Dow <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span>
        <span class="token attr-name">data-column</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Nasdaq<span class="token punctuation">"</span></span>
        <span class="token attr-name">data-row</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>Nasdaq
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span>
  <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>December 31, 2021<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>0%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>0%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>January 3, 2022<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>1%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>1%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>January 4, 2022<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>1%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>\u22120%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>January 5, 2022<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>\u22121%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>\u22123%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>January 6, 2022<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>\u22121%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>\u22120<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>\u22124%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>January 7, 2022<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>\u22122%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>\u22120<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>\u22125%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>January 10, 2022<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>\u22122%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>\u22121<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>\u22124%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
</code>`,
    Yt,
    ut,
    dt,
    lt,
    te,
    ne,
    Wt;
  return (
    ($ = new cn({
      props: { $$slots: { default: [Bp] }, $$scope: { ctx: y } },
    })),
    (Rs = new cn({
      props: { $$slots: { default: [Up] }, $$scope: { ctx: y } },
    })),
    (Gs = new cn({
      props: { $$slots: { default: [Fp] }, $$scope: { ctx: y } },
    })),
    (zs = new cn({
      props: { $$slots: { default: [sl] }, $$scope: { ctx: y } },
    })),
    {
      c() {
        (s = n('section')),
          (g = n('h2')),
          (d = i(dp)),
          (c = f()),
          (u = n('p')),
          (m = i('Pass a component created by ')),
          (E = n('a')),
          (b = i('ai2svelte')),
          (D = i(
            ' to this component, which will wrap it in a graphics section tag.'
          )),
          (I = f()),
          (w = n('pre')),
          (Q = f()),
          $s($.$$.fragment),
          (_ = f()),
          (P = n('section')),
          (ma = n('h2')),
          (Sa = i('Accessibility props')),
          (H = f()),
          (aa = n('p')),
          ($a = n('code')),
          (Ja = i('ariaHidden')),
          (S = f()),
          (W = n('ul')),
          (ba = n('li')),
          (Ha = i('Set to ')),
          (L = n('code')),
          (sa = i('true')),
          (qa = i(` by default, which means HTML text content in the
ai2svelte component are visible on the page but not read aloud by screen readers.
(Read more about aria-hidden elements `)),
          (wa = n('a')),
          (R = i('here')),
          (F = i('.)')),
          (La = f()),
          (Ca = n('li')),
          (x = i('Set it to ')),
          (ta = n('code')),
          (Ma = i('false')),
          (za = i(
            ' to make the screen reader read aloud HTML text content in ai2svelte.'
          )),
          (na = f()),
          (Oa = n('p')),
          (_a = n('code')),
          (M = i('ariaDescription')),
          (ca = f()),
          (la = n('ul')),
          (da = n('li')),
          (V = i('If ')),
          (ea = n('code')),
          (ja = i('ariaHidden')),
          (Ba = i(' is ')),
          (O = n('code')),
          (ka = i('true')),
          (Ua = i(', make sure you add an ')),
          (X = n('code')),
          (q = i('ariaDescription')),
          (ga = i(
            ', which is invisible on the page but is read aloud by screen readers.'
          )),
          (Ya = f()),
          (Z = n('li')),
          (N = i('This prop takes a string, like altText for an image.')),
          (pa = f()),
          (Da = n('li')),
          (va = i(
            'It should describe what the chart is showing and why it\u2019s important. This is helpful for:'
          )),
          (J = n('ul')),
          (Pa = n('li')),
          (Ra = i(
            'Blind readers using screen-reading or Braille conversion software'
          )),
          (U = f()),
          (z = n('li')),
          (Va = i(
            'All readers if the image is unavailable or takes too long to load'
          )),
          (Ta = f()),
          (G = n('li')),
          (Y = i(
            'Read about writing aria description, also known as alt text, '
          )),
          (ia = n('a')),
          (Wa = i('here')),
          (B = i('.')),
          (ra = f()),
          (Aa = n('section')),
          (oa = n('p')),
          (j = i('\u{1F6A8} ')),
          (K = n('strong')),
          (Ka = i('Important:')),
          (fa = i(' If ')),
          (v = n('code')),
          (ds = i('ariaHidden')),
          (ks = i(' is ')),
          (ts = n('code')),
          (Na = i('true')),
          (Qa = i(' but you are missing ')),
          (ns = n('code')),
          (gs = i('ariaDescription')),
          (vs = i(
            ' or some other special alternative for screen readers (more on this later), your graphic will be hidden from the page and you will see a warning in your console.'
          )),
          (fs = f()),
          (xa = n('p')),
          (hs = i('Graphics kit users can set your ')),
          (es = n('code')),
          (ms = i('ariaHidden')),
          (_s = i(' prop and write your  ')),
          (ya = n('code')),
          (ys = i('ariaDescription')),
          (Es = i(' in the google doc like this:')),
          (rs = f()),
          (Fa = n('pre')),
          (us = f()),
          (Ga = n('section')),
          (ps = n('h2')),
          (bs = i('Graphic width')),
          (Za = f()),
          (ha = n('p')),
          (ws = i(
            'Adjust the size of the graphic by passing a class name corresponding to one of our well widths: '
          )),
          (ls = n('code')),
          (Ds = i('wide')),
          (as = i(', ')),
          (os = n('code')),
          (cs = i('wider')),
          (Ps = i(', ')),
          (is = n('code')),
          (ss = i('widest')),
          (Ts = i(' or ')),
          (js = n('code')),
          (ct = i('fluid')),
          (it = i('.')),
          (Vt = f()),
          (Ws = n('pre')),
          (Ht = f()),
          $s(Rs.$$.fragment),
          (Lt = f()),
          (Ns = n('section')),
          (ft = n('h2')),
          (yn = i('Chart title, description, source and note')),
          (En = f()),
          (ht = n('p')),
          (bn = i('Add additional chart chatter through slots.')),
          (Mt = f()),
          (Fs = n('pre')),
          (Ot = f()),
          $s(Gs.$$.fragment),
          (jt = f()),
          (Js = n('section')),
          (mt = n('h2')),
          (wn = i('Using ArchieML google doc')),
          (Dn = f()),
          (Ks = n('p')),
          (Pn = i('You can use this component to layout AI graphics via an ')),
          (Qs = n('a')),
          (Tn = i('ArchieML')),
          (An = i(
            '-formatted Google doc by using the following pattern to dynamically import an ai2svelte component:'
          )),
          (Rt = f()),
          (Xs = n('pre')),
          (Nt = f()),
          (Zs = n('pre')),
          (Gt = f()),
          (qs = n('section')),
          (Ms = n('p')),
          (xn = i('This comes with some restrictions, though. Be sure your ')),
          (_t = n('code')),
          (In = i('fetchComponent')),
          ($n = i(' function follows ')),
          (at = n('a')),
          (Cn = i('the limits on dynamic imports')),
          (Sn = i('.')),
          (Vn = f()),
          (Is = n('p')),
          (yt = n('strong')),
          (Hn = i('NOTE')),
          (Ln = i(': Make sure you wrap the function ')),
          (Et = n('code')),
          (Mn = i('truthyString()')),
          (On = i(' around ')),
          (bt = n('code')),
          (jn = i('block.StackBackground')),
          (Rn = i('. ')),
          (wt = n('code')),
          (Nn = i('truthyString()')),
          (Gn =
            i(` converts the string pulled from Google docs (\u2018true\u2019, \u2018false\u2019, etc.)
into a Boolean.`)),
          (Jt = f()),
          (xs = n('section')),
          (Dt = n('h2')),
          (Jn = i('Customising data for screen readers')),
          (qn = f()),
          (Pt = n('p')),
          (zn =
            i(`Sometimes, in addition to or instead of adding an aria description for graphics,
we want to also provide a data table, a lengthier description with more complex element structure or something else.`)),
          (Bn = f()),
          (st = n('p')),
          (Un = i(
            'You can add custom information for screen readers only by using the '
          )),
          (Tt = n('code')),
          (Yn = i('hidden')),
          (Wn = i(' slot.')),
          (Fn = f()),
          (tt = n('p')),
          (Kn = i('For example, for the line chart below, we can add a ')),
          (At = n('strong')),
          (Qn = i('data table')),
          (Xn = i(' that helps screen-reader users navigate the data.')),
          (qt = f()),
          (nt = n('pre')),
          (zt = f()),
          $s(zs.$$.fragment),
          (Bt = f()),
          (rt = n('section')),
          (et = n('p')),
          (Zn = i('This is what ')),
          (xt = n('code')),
          (ae = i('<SRDataTable/>')),
          (se = i(
            ' looks like. (You can make an HTML table using DataWrapper.)'
          )),
          (Ut = f()),
          (pt = n('pre')),
          (Yt = f()),
          (ut = n('section')),
          (dt = n('p')),
          (lt = n('a')),
          (te = i('Read this')),
          (ne = i(
            ' for more information on screen-reader data tables for charts.'
          )),
          this.h();
      },
      l(k) {
        s = e(k, 'SECTION', {});
        var A = p(s);
        g = e(A, 'H2', {});
        var It = p(g);
        (d = r(It, dp)), It.forEach(t), (c = h(A)), (u = e(A, 'P', {}));
        var ot = p(u);
        (m = r(ot, 'Pass a component created by ')),
          (E = e(ot, 'A', { href: !0, rel: !0 }));
        var $t = p(E);
        (b = r($t, 'ai2svelte')),
          $t.forEach(t),
          (D = r(
            ot,
            ' to this component, which will wrap it in a graphics section tag.'
          )),
          ot.forEach(t),
          A.forEach(t),
          (I = h(k)),
          (w = e(k, 'PRE', { class: !0 }));
        var Ft = p(w);
        Ft.forEach(t),
          (Q = h(k)),
          Ls($.$$.fragment, k),
          (_ = h(k)),
          (P = e(k, 'SECTION', {}));
        var As = p(P);
        ma = e(As, 'H2', {});
        var ce = p(ma);
        (Sa = r(ce, 'Accessibility props')),
          ce.forEach(t),
          (H = h(As)),
          (aa = e(As, 'P', {}));
        var ie = p(aa);
        $a = e(ie, 'CODE', {});
        var re = p($a);
        (Ja = r(re, 'ariaHidden')),
          re.forEach(t),
          ie.forEach(t),
          (S = h(As)),
          (W = e(As, 'UL', {}));
        var Kt = p(W);
        ba = e(Kt, 'LI', {});
        var kt = p(ba);
        (Ha = r(kt, 'Set to ')), (L = e(kt, 'CODE', {}));
        var ue = p(L);
        (sa = r(ue, 'true')),
          ue.forEach(t),
          (qa = r(
            kt,
            ` by default, which means HTML text content in the
ai2svelte component are visible on the page but not read aloud by screen readers.
(Read more about aria-hidden elements `
          )),
          (wa = e(kt, 'A', { href: !0, rel: !0 }));
        var de = p(wa);
        (R = r(de, 'here')),
          de.forEach(t),
          (F = r(kt, '.)')),
          kt.forEach(t),
          (La = h(Kt)),
          (Ca = e(Kt, 'LI', {}));
        var Qt = p(Ca);
        (x = r(Qt, 'Set it to ')), (ta = e(Qt, 'CODE', {}));
        var ke = p(ta);
        (Ma = r(ke, 'false')),
          ke.forEach(t),
          (za = r(
            Qt,
            ' to make the screen reader read aloud HTML text content in ai2svelte.'
          )),
          Qt.forEach(t),
          Kt.forEach(t),
          (na = h(As)),
          (Oa = e(As, 'P', {}));
        var ge = p(Oa);
        _a = e(ge, 'CODE', {});
        var ve = p(_a);
        (M = r(ve, 'ariaDescription')),
          ve.forEach(t),
          ge.forEach(t),
          (ca = h(As)),
          (la = e(As, 'UL', {}));
        var Bs = p(la);
        da = e(Bs, 'LI', {});
        var Us = p(da);
        (V = r(Us, 'If ')), (ea = e(Us, 'CODE', {}));
        var fe = p(ea);
        (ja = r(fe, 'ariaHidden')),
          fe.forEach(t),
          (Ba = r(Us, ' is ')),
          (O = e(Us, 'CODE', {}));
        var he = p(O);
        (ka = r(he, 'true')),
          he.forEach(t),
          (Ua = r(Us, ', make sure you add an ')),
          (X = e(Us, 'CODE', {}));
        var me = p(X);
        (q = r(me, 'ariaDescription')),
          me.forEach(t),
          (ga = r(
            Us,
            ', which is invisible on the page but is read aloud by screen readers.'
          )),
          Us.forEach(t),
          (Ya = h(Bs)),
          (Z = e(Bs, 'LI', {}));
        var _e = p(Z);
        (N = r(_e, 'This prop takes a string, like altText for an image.')),
          _e.forEach(t),
          (pa = h(Bs)),
          (Da = e(Bs, 'LI', {}));
        var ee = p(Da);
        (va = r(
          ee,
          'It should describe what the chart is showing and why it\u2019s important. This is helpful for:'
        )),
          (J = e(ee, 'UL', {}));
        var Xt = p(J);
        Pa = e(Xt, 'LI', {});
        var ye = p(Pa);
        (Ra = r(
          ye,
          'Blind readers using screen-reading or Braille conversion software'
        )),
          ye.forEach(t),
          (U = h(Xt)),
          (z = e(Xt, 'LI', {}));
        var Ee = p(z);
        (Va = r(
          Ee,
          'All readers if the image is unavailable or takes too long to load'
        )),
          Ee.forEach(t),
          Xt.forEach(t),
          ee.forEach(t),
          (Ta = h(Bs)),
          (G = e(Bs, 'LI', {}));
        var Zt = p(G);
        (Y = r(
          Zt,
          'Read about writing aria description, also known as alt text, '
        )),
          (ia = e(Zt, 'A', { href: !0, rel: !0 }));
        var be = p(ia);
        (Wa = r(be, 'here')),
          be.forEach(t),
          (B = r(Zt, '.')),
          Zt.forEach(t),
          Bs.forEach(t),
          (ra = h(As)),
          (Aa = e(As, 'SECTION', { class: !0 }));
        var we = p(Aa);
        oa = e(we, 'P', {});
        var Vs = p(oa);
        (j = r(Vs, '\u{1F6A8} ')), (K = e(Vs, 'STRONG', {}));
        var De = p(K);
        (Ka = r(De, 'Important:')),
          De.forEach(t),
          (fa = r(Vs, ' If ')),
          (v = e(Vs, 'CODE', {}));
        var Pe = p(v);
        (ds = r(Pe, 'ariaHidden')),
          Pe.forEach(t),
          (ks = r(Vs, ' is ')),
          (ts = e(Vs, 'CODE', {}));
        var Te = p(ts);
        (Na = r(Te, 'true')),
          Te.forEach(t),
          (Qa = r(Vs, ' but you are missing ')),
          (ns = e(Vs, 'CODE', {}));
        var Ae = p(ns);
        (gs = r(Ae, 'ariaDescription')),
          Ae.forEach(t),
          (vs = r(
            Vs,
            ' or some other special alternative for screen readers (more on this later), your graphic will be hidden from the page and you will see a warning in your console.'
          )),
          Vs.forEach(t),
          we.forEach(t),
          (fs = h(As)),
          (xa = e(As, 'P', {}));
        var gt = p(xa);
        (hs = r(gt, 'Graphics kit users can set your ')),
          (es = e(gt, 'CODE', {}));
        var xe = p(es);
        (ms = r(xe, 'ariaHidden')),
          xe.forEach(t),
          (_s = r(gt, ' prop and write your  ')),
          (ya = e(gt, 'CODE', {}));
        var Ie = p(ya);
        (ys = r(Ie, 'ariaDescription')),
          Ie.forEach(t),
          (Es = r(gt, ' in the google doc like this:')),
          gt.forEach(t),
          As.forEach(t),
          (rs = h(k)),
          (Fa = e(k, 'PRE', { class: !0 }));
        var yp = p(Fa);
        yp.forEach(t), (us = h(k)), (Ga = e(k, 'SECTION', {}));
        var an = p(Ga);
        ps = e(an, 'H2', {});
        var $e = p(ps);
        (bs = r($e, 'Graphic width')),
          $e.forEach(t),
          (Za = h(an)),
          (ha = e(an, 'P', {}));
        var Hs = p(ha);
        (ws = r(
          Hs,
          'Adjust the size of the graphic by passing a class name corresponding to one of our well widths: '
        )),
          (ls = e(Hs, 'CODE', {}));
        var Ce = p(ls);
        (Ds = r(Ce, 'wide')),
          Ce.forEach(t),
          (as = r(Hs, ', ')),
          (os = e(Hs, 'CODE', {}));
        var Se = p(os);
        (cs = r(Se, 'wider')),
          Se.forEach(t),
          (Ps = r(Hs, ', ')),
          (is = e(Hs, 'CODE', {}));
        var Ve = p(is);
        (ss = r(Ve, 'widest')),
          Ve.forEach(t),
          (Ts = r(Hs, ' or ')),
          (js = e(Hs, 'CODE', {}));
        var He = p(js);
        (ct = r(He, 'fluid')),
          He.forEach(t),
          (it = r(Hs, '.')),
          Hs.forEach(t),
          an.forEach(t),
          (Vt = h(k)),
          (Ws = e(k, 'PRE', { class: !0 }));
        var Ep = p(Ws);
        Ep.forEach(t),
          (Ht = h(k)),
          Ls(Rs.$$.fragment, k),
          (Lt = h(k)),
          (Ns = e(k, 'SECTION', {}));
        var sn = p(Ns);
        ft = e(sn, 'H2', {});
        var Le = p(ft);
        (yn = r(Le, 'Chart title, description, source and note')),
          Le.forEach(t),
          (En = h(sn)),
          (ht = e(sn, 'P', {}));
        var Me = p(ht);
        (bn = r(Me, 'Add additional chart chatter through slots.')),
          Me.forEach(t),
          sn.forEach(t),
          (Mt = h(k)),
          (Fs = e(k, 'PRE', { class: !0 }));
        var bp = p(Fs);
        bp.forEach(t),
          (Ot = h(k)),
          Ls(Gs.$$.fragment, k),
          (jt = h(k)),
          (Js = e(k, 'SECTION', {}));
        var tn = p(Js);
        mt = e(tn, 'H2', {});
        var Oe = p(mt);
        (wn = r(Oe, 'Using ArchieML google doc')),
          Oe.forEach(t),
          (Dn = h(tn)),
          (Ks = e(tn, 'P', {}));
        var nn = p(Ks);
        (Pn = r(
          nn,
          'You can use this component to layout AI graphics via an '
        )),
          (Qs = e(nn, 'A', { href: !0, rel: !0 }));
        var je = p(Qs);
        (Tn = r(je, 'ArchieML')),
          je.forEach(t),
          (An = r(
            nn,
            '-formatted Google doc by using the following pattern to dynamically import an ai2svelte component:'
          )),
          nn.forEach(t),
          tn.forEach(t),
          (Rt = h(k)),
          (Xs = e(k, 'PRE', { class: !0 }));
        var wp = p(Xs);
        wp.forEach(t), (Nt = h(k)), (Zs = e(k, 'PRE', { class: !0 }));
        var Dp = p(Zs);
        Dp.forEach(t), (Gt = h(k)), (qs = e(k, 'SECTION', {}));
        var en = p(qs);
        Ms = e(en, 'P', {});
        var vt = p(Ms);
        (xn = r(
          vt,
          'This comes with some restrictions, though. Be sure your '
        )),
          (_t = e(vt, 'CODE', {}));
        var Re = p(_t);
        (In = r(Re, 'fetchComponent')),
          Re.forEach(t),
          ($n = r(vt, ' function follows ')),
          (at = e(vt, 'A', { href: !0, rel: !0 }));
        var Ne = p(at);
        (Cn = r(Ne, 'the limits on dynamic imports')),
          Ne.forEach(t),
          (Sn = r(vt, '.')),
          vt.forEach(t),
          (Vn = h(en)),
          (Is = e(en, 'P', {}));
        var Os = p(Is);
        yt = e(Os, 'STRONG', {});
        var Ge = p(yt);
        (Hn = r(Ge, 'NOTE')),
          Ge.forEach(t),
          (Ln = r(Os, ': Make sure you wrap the function ')),
          (Et = e(Os, 'CODE', {}));
        var Je = p(Et);
        (Mn = r(Je, 'truthyString()')),
          Je.forEach(t),
          (On = r(Os, ' around ')),
          (bt = e(Os, 'CODE', {}));
        var qe = p(bt);
        (jn = r(qe, 'block.StackBackground')),
          qe.forEach(t),
          (Rn = r(Os, '. ')),
          (wt = e(Os, 'CODE', {}));
        var ze = p(wt);
        (Nn = r(ze, 'truthyString()')),
          ze.forEach(t),
          (Gn = r(
            Os,
            ` converts the string pulled from Google docs (\u2018true\u2019, \u2018false\u2019, etc.)
into a Boolean.`
          )),
          Os.forEach(t),
          en.forEach(t),
          (Jt = h(k)),
          (xs = e(k, 'SECTION', { class: !0 }));
        var Ys = p(xs);
        Dt = e(Ys, 'H2', {});
        var Be = p(Dt);
        (Jn = r(Be, 'Customising data for screen readers')),
          Be.forEach(t),
          (qn = h(Ys)),
          (Pt = e(Ys, 'P', {}));
        var Ue = p(Pt);
        (zn = r(
          Ue,
          `Sometimes, in addition to or instead of adding an aria description for graphics,
we want to also provide a data table, a lengthier description with more complex element structure or something else.`
        )),
          Ue.forEach(t),
          (Bn = h(Ys)),
          (st = e(Ys, 'P', {}));
        var pn = p(st);
        (Un = r(
          pn,
          'You can add custom information for screen readers only by using the '
        )),
          (Tt = e(pn, 'CODE', {}));
        var Ye = p(Tt);
        (Yn = r(Ye, 'hidden')),
          Ye.forEach(t),
          (Wn = r(pn, ' slot.')),
          pn.forEach(t),
          (Fn = h(Ys)),
          (tt = e(Ys, 'P', {}));
        var ln = p(tt);
        (Kn = r(ln, 'For example, for the line chart below, we can add a ')),
          (At = e(ln, 'STRONG', {}));
        var We = p(At);
        (Qn = r(We, 'data table')),
          We.forEach(t),
          (Xn = r(ln, ' that helps screen-reader users navigate the data.')),
          ln.forEach(t),
          Ys.forEach(t),
          (qt = h(k)),
          (nt = e(k, 'PRE', { class: !0 }));
        var Pp = p(nt);
        Pp.forEach(t),
          (zt = h(k)),
          Ls(zs.$$.fragment, k),
          (Bt = h(k)),
          (rt = e(k, 'SECTION', {}));
        var Fe = p(rt);
        et = e(Fe, 'P', {});
        var on = p(et);
        (Zn = r(on, 'This is what ')), (xt = e(on, 'CODE', {}));
        var Ke = p(xt);
        (ae = r(Ke, '<SRDataTable/>')),
          Ke.forEach(t),
          (se = r(
            on,
            ' looks like. (You can make an HTML table using DataWrapper.)'
          )),
          on.forEach(t),
          Fe.forEach(t),
          (Ut = h(k)),
          (pt = e(k, 'PRE', { class: !0 }));
        var Tp = p(pt);
        Tp.forEach(t), (Yt = h(k)), (ut = e(k, 'SECTION', {}));
        var Qe = p(ut);
        dt = e(Qe, 'P', {});
        var pe = p(dt);
        lt = e(pe, 'A', { href: !0, rel: !0 });
        var Xe = p(lt);
        (te = r(Xe, 'Read this')),
          Xe.forEach(t),
          (ne = r(
            pe,
            ' for more information on screen-reader data tables for charts.'
          )),
          pe.forEach(t),
          Qe.forEach(t),
          this.h();
      },
      h() {
        l(E, 'href', 'https://github.com/reuters-graphics/ai2svelte'),
          l(E, 'rel', 'nofollow'),
          l(w, 'class', 'language-svelte'),
          l(
            wa,
            'href',
            'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden'
          ),
          l(wa, 'rel', 'nofollow'),
          l(
            ia,
            'href',
            'https://medium.com/nightingale/writing-alt-text-for-data-visualization-2a218ef43f81'
          ),
          l(ia, 'rel', 'nofollow'),
          l(Aa, 'class', 'note'),
          l(Fa, 'class', 'language-bash'),
          l(Ws, 'class', 'language-svelte'),
          l(Fs, 'class', 'language-svelte'),
          l(Qs, 'href', 'http://archieml.org/'),
          l(Qs, 'rel', 'nofollow'),
          l(Xs, 'class', 'language-bash'),
          l(Zs, 'class', 'language-svelte'),
          l(
            at,
            'href',
            'https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations'
          ),
          l(at, 'rel', 'nofollow'),
          l(xs, 'class', 'pt-5'),
          l(nt, 'class', 'language-svelte'),
          l(pt, 'class', 'language-svelte'),
          l(lt, 'href', 'https://accessibility.psu.edu/images/charts/'),
          l(lt, 'rel', 'nofollow');
      },
      m(k, A) {
        T(k, s, A),
          a(s, g),
          a(g, d),
          a(s, c),
          a(s, u),
          a(u, m),
          a(u, E),
          a(E, b),
          a(u, D),
          T(k, I, A),
          T(k, w, A),
          (w.innerHTML = C),
          T(k, Q, A),
          Cs($, k, A),
          T(k, _, A),
          T(k, P, A),
          a(P, ma),
          a(ma, Sa),
          a(P, H),
          a(P, aa),
          a(aa, $a),
          a($a, Ja),
          a(P, S),
          a(P, W),
          a(W, ba),
          a(ba, Ha),
          a(ba, L),
          a(L, sa),
          a(ba, qa),
          a(ba, wa),
          a(wa, R),
          a(ba, F),
          a(W, La),
          a(W, Ca),
          a(Ca, x),
          a(Ca, ta),
          a(ta, Ma),
          a(Ca, za),
          a(P, na),
          a(P, Oa),
          a(Oa, _a),
          a(_a, M),
          a(P, ca),
          a(P, la),
          a(la, da),
          a(da, V),
          a(da, ea),
          a(ea, ja),
          a(da, Ba),
          a(da, O),
          a(O, ka),
          a(da, Ua),
          a(da, X),
          a(X, q),
          a(da, ga),
          a(la, Ya),
          a(la, Z),
          a(Z, N),
          a(la, pa),
          a(la, Da),
          a(Da, va),
          a(Da, J),
          a(J, Pa),
          a(Pa, Ra),
          a(J, U),
          a(J, z),
          a(z, Va),
          a(la, Ta),
          a(la, G),
          a(G, Y),
          a(G, ia),
          a(ia, Wa),
          a(G, B),
          a(P, ra),
          a(P, Aa),
          a(Aa, oa),
          a(oa, j),
          a(oa, K),
          a(K, Ka),
          a(oa, fa),
          a(oa, v),
          a(v, ds),
          a(oa, ks),
          a(oa, ts),
          a(ts, Na),
          a(oa, Qa),
          a(oa, ns),
          a(ns, gs),
          a(oa, vs),
          a(P, fs),
          a(P, xa),
          a(xa, hs),
          a(xa, es),
          a(es, ms),
          a(xa, _s),
          a(xa, ya),
          a(ya, ys),
          a(xa, Es),
          T(k, rs, A),
          T(k, Fa, A),
          (Fa.innerHTML = Xa),
          T(k, us, A),
          T(k, Ga, A),
          a(Ga, ps),
          a(ps, bs),
          a(Ga, Za),
          a(Ga, ha),
          a(ha, ws),
          a(ha, ls),
          a(ls, Ds),
          a(ha, as),
          a(ha, os),
          a(os, cs),
          a(ha, Ps),
          a(ha, is),
          a(is, ss),
          a(ha, Ts),
          a(ha, js),
          a(js, ct),
          a(ha, it),
          T(k, Vt, A),
          T(k, Ws, A),
          (Ws.innerHTML = gp),
          T(k, Ht, A),
          Cs(Rs, k, A),
          T(k, Lt, A),
          T(k, Ns, A),
          a(Ns, ft),
          a(ft, yn),
          a(Ns, En),
          a(Ns, ht),
          a(ht, bn),
          T(k, Mt, A),
          T(k, Fs, A),
          (Fs.innerHTML = vp),
          T(k, Ot, A),
          Cs(Gs, k, A),
          T(k, jt, A),
          T(k, Js, A),
          a(Js, mt),
          a(mt, wn),
          a(Js, Dn),
          a(Js, Ks),
          a(Ks, Pn),
          a(Ks, Qs),
          a(Qs, Tn),
          a(Ks, An),
          T(k, Rt, A),
          T(k, Xs, A),
          (Xs.innerHTML = fp),
          T(k, Nt, A),
          T(k, Zs, A),
          (Zs.innerHTML = hp),
          T(k, Gt, A),
          T(k, qs, A),
          a(qs, Ms),
          a(Ms, xn),
          a(Ms, _t),
          a(_t, In),
          a(Ms, $n),
          a(Ms, at),
          a(at, Cn),
          a(Ms, Sn),
          a(qs, Vn),
          a(qs, Is),
          a(Is, yt),
          a(yt, Hn),
          a(Is, Ln),
          a(Is, Et),
          a(Et, Mn),
          a(Is, On),
          a(Is, bt),
          a(bt, jn),
          a(Is, Rn),
          a(Is, wt),
          a(wt, Nn),
          a(Is, Gn),
          T(k, Jt, A),
          T(k, xs, A),
          a(xs, Dt),
          a(Dt, Jn),
          a(xs, qn),
          a(xs, Pt),
          a(Pt, zn),
          a(xs, Bn),
          a(xs, st),
          a(st, Un),
          a(st, Tt),
          a(Tt, Yn),
          a(st, Wn),
          a(xs, Fn),
          a(xs, tt),
          a(tt, Kn),
          a(tt, At),
          a(At, Qn),
          a(tt, Xn),
          T(k, qt, A),
          T(k, nt, A),
          (nt.innerHTML = mp),
          T(k, zt, A),
          Cs(zs, k, A),
          T(k, Bt, A),
          T(k, rt, A),
          a(rt, et),
          a(et, Zn),
          a(et, xt),
          a(xt, ae),
          a(et, se),
          T(k, Ut, A),
          T(k, pt, A),
          (pt.innerHTML = _p),
          T(k, Yt, A),
          T(k, ut, A),
          a(ut, dt),
          a(dt, lt),
          a(lt, te),
          a(dt, ne),
          (Wt = !0);
      },
      p(k, [A]) {
        const It = {};
        A & 4 && (It.$$scope = { dirty: A, ctx: k }), $.$set(It);
        const ot = {};
        A & 4 && (ot.$$scope = { dirty: A, ctx: k }), Rs.$set(ot);
        const $t = {};
        A & 4 && ($t.$$scope = { dirty: A, ctx: k }), Gs.$set($t);
        const Ft = {};
        A & 4 && (Ft.$$scope = { dirty: A, ctx: k }), zs.$set(Ft);
      },
      i(k) {
        Wt ||
          (ua($.$$.fragment, k),
          ua(Rs.$$.fragment, k),
          ua(Gs.$$.fragment, k),
          ua(zs.$$.fragment, k),
          (Wt = !0));
      },
      o(k) {
        Ia($.$$.fragment, k),
          Ia(Rs.$$.fragment, k),
          Ia(Gs.$$.fragment, k),
          Ia(zs.$$.fragment, k),
          (Wt = !1);
      },
      d(k) {
        k && t(s),
          k && t(I),
          k && t(w),
          k && t(Q),
          Ss($, k),
          k && t(_),
          k && t(P),
          k && t(rs),
          k && t(Fa),
          k && t(us),
          k && t(Ga),
          k && t(Vt),
          k && t(Ws),
          k && t(Ht),
          Ss(Rs, k),
          k && t(Lt),
          k && t(Ns),
          k && t(Mt),
          k && t(Fs),
          k && t(Ot),
          Ss(Gs, k),
          k && t(jt),
          k && t(Js),
          k && t(Rt),
          k && t(Xs),
          k && t(Nt),
          k && t(Zs),
          k && t(Gt),
          k && t(qs),
          k && t(Jt),
          k && t(xs),
          k && t(qt),
          k && t(nt),
          k && t(zt),
          Ss(zs, k),
          k && t(Bt),
          k && t(rt),
          k && t(Ut),
          k && t(pt),
          k && t(Yt),
          k && t(ut);
      },
    }
  );
}
const nl = {
    title: 'Ai2svelte',
    description: 'A shortcut for ai2svelte graphics.',
    slug: 'ai2svelte',
  },
  { title: dp, description: ul, slug: dl } = nl;
function el(y, s, g) {
  let { $$slots: d = {}, $$scope: c } = s;
  const u = (m) =>
    Ze(this, null, function* () {
      return (yield qp(`./ai2svelte/${m}.exclude.svelte`)).default;
    });
  return (
    (y.$$set = (m) => {
      '$$scope' in m && g(2, (c = m.$$scope));
    }),
    [u, d, c]
  );
}
class kl extends un {
  constructor(s) {
    super(), dn(this, s, el, tl, kn, {});
  }
}
export { kl as default, nl as metadata };
