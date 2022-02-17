import { _ as qn } from './preload-helper-438f94a3.js';
import {
  S as sn,
  i as tn,
  s as nn,
  k as v,
  e as n,
  j as xs,
  l as en,
  n as h,
  c as e,
  a as o,
  m as Hs,
  d as t,
  b as l,
  f as A,
  o as Is,
  x as ua,
  E as on,
  F as ln,
  G as pn,
  u as Aa,
  r as Dt,
  w as Pt,
  t as r,
  g as u,
  H as a,
  h as po,
  v as $s,
  _ as co,
  D as cn,
  $ as p,
  I as xa,
  a0 as io,
  a1 as ro,
  a2 as uo,
  a3 as ko,
} from './vendor-85b063f6.js';
import { D as rn } from './index-ccd418f9.js';
import './@component-docs_components-f89dfe3e.js';
import { a as Un } from './paths-6758d194.js';
const fo = (_) => ({}),
  He = (_) => ({}),
  go = (_) => ({}),
  Se = (_) => ({}),
  vo = (_) => ({}),
  Le = (_) => ({});
function Me(_) {
  let s,
    g,
    i,
    c,
    d,
    E,
    y,
    b,
    D = _[6].title && Re(_),
    x = _[3] && Oe(_),
    z = _[6].hidden && Ge(_);
  var $ = _[0];
  function Q(m) {
    return { props: { onAiMounted: m[5] } };
  }
  $ && (d = new $(Q(_)));
  let I = _[6].notes && Ne(_);
  return {
    c() {
      D && D.c(),
        (s = v()),
        x && x.c(),
        (g = v()),
        z && z.c(),
        (i = v()),
        (c = n('div')),
        d && xs(d.$$.fragment),
        (E = v()),
        I && I.c(),
        (y = en()),
        this.h();
    },
    l(m) {
      D && D.l(m),
        (s = h(m)),
        x && x.l(m),
        (g = h(m)),
        z && z.l(m),
        (i = h(m)),
        (c = e(m, 'DIV', { class: !0, 'aria-hidden': !0 }));
      var w = o(c);
      d && Hs(d.$$.fragment, w),
        w.forEach(t),
        (E = h(m)),
        I && I.l(m),
        (y = en()),
        this.h();
    },
    h() {
      l(c, 'class', 'ai-wrapper'), l(c, 'aria-hidden', _[2]);
    },
    m(m, w) {
      D && D.m(m, w),
        A(m, s, w),
        x && x.m(m, w),
        A(m, g, w),
        z && z.m(m, w),
        A(m, i, w),
        A(m, c, w),
        d && Is(d, c, null),
        A(m, E, w),
        I && I.m(m, w),
        A(m, y, w),
        (b = !0);
    },
    p(m, w) {
      m[6].title
        ? D
          ? (D.p(m, w), w & 64 && ua(D, 1))
          : ((D = Re(m)), D.c(), ua(D, 1), D.m(s.parentNode, s))
        : D &&
          (Dt(),
          Aa(D, 1, 1, () => {
            D = null;
          }),
          Pt()),
        m[3]
          ? x
            ? x.p(m, w)
            : ((x = Oe(m)), x.c(), x.m(g.parentNode, g))
          : x && (x.d(1), (x = null)),
        m[6].hidden
          ? z
            ? (z.p(m, w), w & 64 && ua(z, 1))
            : ((z = Ge(m)), z.c(), ua(z, 1), z.m(i.parentNode, i))
          : z &&
            (Dt(),
            Aa(z, 1, 1, () => {
              z = null;
            }),
            Pt());
      const ma = {};
      if ((w & 32 && (ma.onAiMounted = m[5]), $ !== ($ = m[0]))) {
        if (d) {
          Dt();
          const Ca = d;
          Aa(Ca.$$.fragment, 1, 0, () => {
            $s(Ca, 1);
          }),
            Pt();
        }
        $
          ? ((d = new $(Q(m))),
            xs(d.$$.fragment),
            ua(d.$$.fragment, 1),
            Is(d, c, null))
          : (d = null);
      } else $ && d.$set(ma);
      (!b || w & 4) && l(c, 'aria-hidden', m[2]),
        m[6].notes
          ? I
            ? (I.p(m, w), w & 64 && ua(I, 1))
            : ((I = Ne(m)), I.c(), ua(I, 1), I.m(y.parentNode, y))
          : I &&
            (Dt(),
            Aa(I, 1, 1, () => {
              I = null;
            }),
            Pt());
    },
    i(m) {
      b || (ua(D), ua(z), d && ua(d.$$.fragment, m), ua(I), (b = !0));
    },
    o(m) {
      Aa(D), Aa(z), d && Aa(d.$$.fragment, m), Aa(I), (b = !1);
    },
    d(m) {
      D && D.d(m),
        m && t(s),
        x && x.d(m),
        m && t(g),
        z && z.d(m),
        m && t(i),
        m && t(c),
        d && $s(d),
        m && t(E),
        I && I.d(m),
        m && t(y);
    },
  };
}
function Re(_) {
  let s;
  const g = _[8].title,
    i = cn(g, _, _[7], Le);
  return {
    c() {
      i && i.c();
    },
    l(c) {
      i && i.l(c);
    },
    m(c, d) {
      i && i.m(c, d), (s = !0);
    },
    p(c, d) {
      i &&
        i.p &&
        (!s || d & 128) &&
        on(i, g, c, c[7], s ? pn(g, c[7], d, vo) : ln(c[7]), Le);
    },
    i(c) {
      s || (ua(i, c), (s = !0));
    },
    o(c) {
      Aa(i, c), (s = !1);
    },
    d(c) {
      i && i.d(c);
    },
  };
}
function Oe(_) {
  let s, g;
  return {
    c() {
      (s = n('p')), (g = r(_[3])), this.h();
    },
    l(i) {
      s = e(i, 'P', { class: !0 });
      var c = o(s);
      (g = u(c, _[3])), c.forEach(t), this.h();
    },
    h() {
      l(s, 'class', 'visually-hidden svelte-a90v8t');
    },
    m(i, c) {
      A(i, s, c), a(s, g);
    },
    p(i, c) {
      c & 8 && po(g, i[3]);
    },
    d(i) {
      i && t(s);
    },
  };
}
function Ge(_) {
  let s, g;
  const i = _[8].hidden,
    c = cn(i, _, _[7], Se);
  return {
    c() {
      (s = n('div')), c && c.c(), this.h();
    },
    l(d) {
      s = e(d, 'DIV', { class: !0 });
      var E = o(s);
      c && c.l(E), E.forEach(t), this.h();
    },
    h() {
      l(s, 'class', 'visually-hidden custom svelte-a90v8t');
    },
    m(d, E) {
      A(d, s, E), c && c.m(s, null), (g = !0);
    },
    p(d, E) {
      c &&
        c.p &&
        (!g || E & 128) &&
        on(c, i, d, d[7], g ? pn(i, d[7], E, go) : ln(d[7]), Se);
    },
    i(d) {
      g || (ua(c, d), (g = !0));
    },
    o(d) {
      Aa(c, d), (g = !1);
    },
    d(d) {
      d && t(s), c && c.d(d);
    },
  };
}
function Ne(_) {
  let s;
  const g = _[8].notes,
    i = cn(g, _, _[7], He);
  return {
    c() {
      i && i.c();
    },
    l(c) {
      i && i.l(c);
    },
    m(c, d) {
      i && i.m(c, d), (s = !0);
    },
    p(c, d) {
      i &&
        i.p &&
        (!s || d & 128) &&
        on(i, g, c, c[7], s ? pn(g, c[7], d, fo) : ln(c[7]), He);
    },
    i(c) {
      s || (ua(i, c), (s = !0));
    },
    o(c) {
      Aa(i, c), (s = !1);
    },
    d(c) {
      i && i.d(c);
    },
  };
}
function ho(_) {
  let s,
    g,
    i,
    c = ((_[2] && (_[3] || _[6].hidden)) || !_[2]) && Me(_);
  return {
    c() {
      (s = n('section')), c && c.c(), this.h();
    },
    l(d) {
      s = e(d, 'SECTION', { class: !0, id: !0 });
      var E = o(s);
      c && c.l(E), E.forEach(t), this.h();
    },
    h() {
      l(
        s,
        'class',
        (g = 'ai2svelte-container graphic ' + _[4] + ' svelte-a90v8t')
      ),
        l(s, 'id', _[1]);
    },
    m(d, E) {
      A(d, s, E), c && c.m(s, null), (i = !0);
    },
    p(d, [E]) {
      (d[2] && (d[3] || d[6].hidden)) || !d[2]
        ? c
          ? (c.p(d, E), E & 76 && ua(c, 1))
          : ((c = Me(d)), c.c(), ua(c, 1), c.m(s, null))
        : c &&
          (Dt(),
          Aa(c, 1, 1, () => {
            c = null;
          }),
          Pt()),
        (!i ||
          (E & 16 &&
            g !==
              (g =
                'ai2svelte-container graphic ' + d[4] + ' svelte-a90v8t'))) &&
          l(s, 'class', g),
        (!i || E & 2) && l(s, 'id', d[1]);
    },
    i(d) {
      i || (ua(c), (i = !0));
    },
    o(d) {
      Aa(c), (i = !1);
    },
    d(d) {
      d && t(s), c && c.d();
    },
  };
}
function mo(_, s, g) {
  let { $$slots: i = {}, $$scope: c } = s;
  const d = co(i);
  let { AiGraphic: E } = s,
    { id: y = '' } = s,
    { ariaHidden: b = !0 } = s,
    { ariaDescription: D = null } = s,
    { size: x = 'normal' } = s,
    { onAiMounted: z = () => {} } = s;
  return (
    b &&
      !D &&
      console.warn(
        'Must provide aria description for ai2svelte components if ariaHidden is true.'
      ),
    (_.$$set = ($) => {
      'AiGraphic' in $ && g(0, (E = $.AiGraphic)),
        'id' in $ && g(1, (y = $.id)),
        'ariaHidden' in $ && g(2, (b = $.ariaHidden)),
        'ariaDescription' in $ && g(3, (D = $.ariaDescription)),
        'size' in $ && g(4, (x = $.size)),
        'onAiMounted' in $ && g(5, (z = $.onAiMounted)),
        '$$scope' in $ && g(7, (c = $.$$scope));
    }),
    [E, y, b, D, x, z, d, c, i]
  );
}
class un extends sn {
  constructor(s) {
    super();
    tn(this, s, mo, ho, nn, {
      AiGraphic: 0,
      id: 1,
      ariaHidden: 2,
      ariaDescription: 3,
      size: 4,
      onAiMounted: 5,
    });
  }
}
function je(_) {
  let s,
    g,
    i,
    c,
    d,
    E,
    y,
    b,
    D,
    x,
    z,
    $,
    Q,
    I,
    m,
    w,
    ma,
    Ca,
    H,
    aa,
    Ia,
    ja,
    C,
    W,
    ya,
    Ha,
    S,
    sa,
    Ja,
    ba,
    O,
    F,
    Sa,
    $a,
    T,
    ta,
    La,
    qa,
    na,
    Ma,
    _a,
    L,
    ca,
    la,
    da,
    V,
    ea,
    Ra,
    Ua,
    M,
    ka,
    Ba,
    X,
    J,
    fa,
    Ya,
    Z,
    G,
    oa,
    za,
    ga,
    j,
    wa,
    Oa,
    B,
    q,
    Va,
    Da,
    N,
    Y,
    ia,
    Wa,
    U,
    ra,
    Pa,
    pa,
    R,
    K,
    Ka;
  return {
    c() {
      (s = n('div')),
        (g = n('div')),
        (i = v()),
        (c = n('div')),
        (E = v()),
        (y = n('div')),
        (b = n('p')),
        (D = r('Shake intensity')),
        (x = v()),
        (z = n('div')),
        ($ = n('p')),
        (Q = r('Light')),
        (I = v()),
        (m = n('div')),
        (w = n('p')),
        (ma = r('Moderate')),
        (Ca = v()),
        (H = n('div')),
        (aa = n('p')),
        (Ia = r('Cap-Haitien')),
        (ja = v()),
        (C = n('div')),
        (W = n('p')),
        (ya = r('Strong')),
        (Ha = v()),
        (S = n('div')),
        (sa = n('p')),
        (Ja = r('Very strong')),
        (ba = v()),
        (O = n('div')),
        (F = n('p')),
        (Sa = r('Gona\xEFves')),
        ($a = v()),
        (T = n('div')),
        (ta = n('p')),
        (La = r('Caribbean')),
        (qa = v()),
        (na = n('p')),
        (Ma = r('Sea')),
        (_a = v()),
        (L = n('div')),
        (ca = n('p')),
        (la = r('HAITI')),
        (da = v()),
        (V = n('div')),
        (ea = n('p')),
        (Ra = r('Jeremie')),
        (Ua = v()),
        (M = n('div')),
        (ka = n('p')),
        (Ba = r('Port-au-Prince')),
        (X = v()),
        (J = n('div')),
        (fa = n('p')),
        (Ya = r('Epicenter')),
        (Z = v()),
        (G = n('div')),
        (oa = n('p')),
        (za = r('Jacmel')),
        (ga = v()),
        (j = n('div')),
        (wa = n('p')),
        (Oa = r('Les Cayes')),
        (B = v()),
        (q = n('div')),
        (Va = n('p')),
        (Da = r('50 mi')),
        (N = v()),
        (Y = n('div')),
        (ia = n('p')),
        (Wa = r('Dominican')),
        (U = v()),
        (ra = n('p')),
        (Pa = r('Republic')),
        (pa = v()),
        (R = n('div')),
        (K = n('p')),
        (Ka = r('50 km')),
        this.h();
    },
    l(va) {
      s = e(va, 'DIV', { id: !0, class: !0, style: !0 });
      var f = o(s);
      (g = e(f, 'DIV', { style: !0 })),
        o(g).forEach(t),
        (i = h(f)),
        (c = e(f, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        o(c).forEach(t),
        (E = h(f)),
        (y = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ds = o(y);
      b = e(ds, 'P', { class: !0 });
      var ks = o(b);
      (D = u(ks, 'Shake intensity')),
        ks.forEach(t),
        ds.forEach(t),
        (x = h(f)),
        (z = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ts = o(z);
      $ = e(ts, 'P', { class: !0 });
      var Ga = o($);
      (Q = u(Ga, 'Light')),
        Ga.forEach(t),
        ts.forEach(t),
        (I = h(f)),
        (m = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qa = o(m);
      w = e(Qa, 'P', { class: !0 });
      var ns = o(w);
      (ma = u(ns, 'Moderate')),
        ns.forEach(t),
        Qa.forEach(t),
        (Ca = h(f)),
        (H = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var fs = o(H);
      aa = e(fs, 'P', { class: !0 });
      var gs = o(aa);
      (Ia = u(gs, 'Cap-Haitien')),
        gs.forEach(t),
        fs.forEach(t),
        (ja = h(f)),
        (C = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var vs = o(C);
      W = e(vs, 'P', { class: !0 });
      var Ta = o(W);
      (ya = u(Ta, 'Strong')),
        Ta.forEach(t),
        vs.forEach(t),
        (Ha = h(f)),
        (S = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var hs = o(S);
      sa = e(hs, 'P', { class: !0 });
      var es = o(sa);
      (Ja = u(es, 'Very strong')),
        es.forEach(t),
        hs.forEach(t),
        (ba = h(f)),
        (O = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ms = o(O);
      F = e(ms, 'P', { class: !0 });
      var _s = o(F);
      (Sa = u(_s, 'Gona\xEFves')),
        _s.forEach(t),
        ms.forEach(t),
        ($a = h(f)),
        (T = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ea = o(T);
      ta = e(Ea, 'P', { class: !0 });
      var Es = o(ta);
      (La = u(Es, 'Caribbean')),
        Es.forEach(t),
        (qa = h(Ea)),
        (na = e(Ea, 'P', { class: !0 }));
      var ys = o(na);
      (Ma = u(ys, 'Sea')),
        ys.forEach(t),
        Ea.forEach(t),
        (_a = h(f)),
        (L = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var rs = o(L);
      ca = e(rs, 'P', { class: !0 });
      var Fa = o(ca);
      (la = u(Fa, 'HAITI')),
        Fa.forEach(t),
        rs.forEach(t),
        (da = h(f)),
        (V = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var Xa = o(V);
      ea = e(Xa, 'P', { class: !0 });
      var us = o(ea);
      (Ra = u(us, 'Jeremie')),
        us.forEach(t),
        Xa.forEach(t),
        (Ua = h(f)),
        (M = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var Na = o(M);
      ka = e(Na, 'P', { class: !0 });
      var os = o(ka);
      (Ba = u(os, 'Port-au-Prince')),
        os.forEach(t),
        Na.forEach(t),
        (X = h(f)),
        (J = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var bs = o(J);
      fa = e(bs, 'P', { class: !0 });
      var Za = o(fa);
      (Ya = u(Za, 'Epicenter')),
        Za.forEach(t),
        bs.forEach(t),
        (Z = h(f)),
        (G = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ha = o(G);
      oa = e(ha, 'P', { class: !0 });
      var zs = o(oa);
      (za = u(zs, 'Jacmel')),
        zs.forEach(t),
        ha.forEach(t),
        (ga = h(f)),
        (j = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ls = o(j);
      wa = e(ls, 'P', { class: !0 });
      var ws = o(wa);
      (Oa = u(ws, 'Les Cayes')),
        ws.forEach(t),
        ls.forEach(t),
        (B = h(f)),
        (q = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var as = o(q);
      Va = e(as, 'P', { class: !0 });
      var ps = o(Va);
      (Da = u(ps, '50 mi')),
        ps.forEach(t),
        as.forEach(t),
        (N = h(f)),
        (Y = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var cs = o(Y);
      ia = e(cs, 'P', { class: !0 });
      var Ds = o(ia);
      (Wa = u(Ds, 'Dominican')),
        Ds.forEach(t),
        (U = h(cs)),
        (ra = e(cs, 'P', { class: !0 }));
      var is = o(ra);
      (Pa = u(is, 'Republic')),
        is.forEach(t),
        cs.forEach(t),
        (pa = h(f)),
        (R = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ss = o(R);
      K = e(ss, 'P', { class: !0 });
      var Ps = o(K);
      (Ka = u(Ps, '50 km')),
        Ps.forEach(t),
        ss.forEach(t),
        f.forEach(t),
        this.h();
    },
    h() {
      p(g, 'padding', '0 0 91.7004% 0'),
        l(c, 'id', 'g-_ai-chart-xs-img'),
        l(c, 'class', 'g-aiImg svelte-zofauz'),
        l(c, 'alt', ''),
        l(
          c,
          'style',
          (d = `background-image: url(${Un}/images/graphics/ai-chart-xs.png);`)
        ),
        l(b, 'class', 'g-pstyle0 svelte-zofauz'),
        l(y, 'id', 'g-ai0-1'),
        l(y, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(y, 'top', '3.216%'),
        p(y, 'margin-top', '-7.7px'),
        p(y, 'left', '0.5952%'),
        p(y, 'width', '99px'),
        l($, 'class', 'g-pstyle0 svelte-zofauz'),
        l(z, 'id', 'g-ai0-2'),
        l(z, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        p(z, 'top', '9.8251%'),
        p(z, 'margin-top', '-7.7px'),
        p(z, 'left', '4.9821%'),
        p(z, 'width', '47px'),
        l(w, 'class', 'g-pstyle0 svelte-zofauz'),
        l(m, 'id', 'g-ai0-3'),
        l(m, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        p(m, 'top', '15.7733%'),
        p(m, 'margin-top', '-7.7px'),
        p(m, 'left', '4.9821%'),
        p(m, 'width', '69px'),
        l(aa, 'class', 'g-pstyle0 svelte-zofauz'),
        l(H, 'id', 'g-ai0-4'),
        l(H, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(H, 'top', '16.4343%'),
        p(H, 'margin-top', '-7.7px'),
        p(H, 'left', '79.0675%'),
        p(H, 'width', '82px'),
        l(W, 'class', 'g-pstyle0 svelte-zofauz'),
        l(C, 'id', 'g-ai0-5'),
        l(C, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        p(C, 'top', '21.7216%'),
        p(C, 'margin-top', '-7.7px'),
        p(C, 'left', '4.9821%'),
        p(C, 'width', '55px'),
        l(sa, 'class', 'g-pstyle0 svelte-zofauz'),
        l(S, 'id', 'g-ai0-6'),
        l(S, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        p(S, 'top', '28.0002%'),
        p(S, 'margin-top', '-7.7px'),
        p(S, 'left', '4.9821%'),
        p(S, 'width', '78px'),
        l(F, 'class', 'g-pstyle0 svelte-zofauz'),
        l(O, 'id', 'g-ai0-7'),
        l(O, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(O, 'top', '28.9916%'),
        p(O, 'margin-top', '-7.7px'),
        p(O, 'left', '62.2348%'),
        p(O, 'width', '68px'),
        l(ta, 'class', 'g-pstyle1 svelte-zofauz'),
        l(na, 'class', 'g-pstyle1 svelte-zofauz'),
        l(T, 'id', 'g-ai0-8'),
        l(T, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(T, 'top', '39.9449%'),
        p(T, 'margin-top', '-14.9px'),
        p(T, 'left', '28.714%'),
        p(T, 'margin-left', '-36.5px'),
        p(T, 'width', '73px'),
        l(ca, 'class', 'g-pstyle2 svelte-zofauz'),
        l(L, 'id', 'g-ai0-9'),
        l(L, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(L, 'top', '42.6579%'),
        p(L, 'margin-top', '-10.1px'),
        p(L, 'left', '68.5061%'),
        p(L, 'width', '77px'),
        l(ea, 'class', 'g-pstyle0 svelte-zofauz'),
        l(V, 'id', 'g-ai0-10'),
        l(V, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(V, 'top', '59.0632%'),
        p(V, 'margin-top', '-7.7px'),
        p(V, 'left', '11.2526%'),
        p(V, 'width', '63px'),
        l(ka, 'class', 'g-pstyle3 svelte-zofauz'),
        l(M, 'id', 'g-ai0-11'),
        l(M, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(M, 'top', '61.1155%'),
        p(M, 'margin-top', '-8.9px'),
        p(M, 'left', '70.5455%'),
        p(M, 'width', '106px'),
        l(fa, 'class', 'g-pstyle3 svelte-zofauz'),
        l(J, 'id', 'g-ai0-12'),
        l(J, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(J, 'top', '62.1069%'),
        p(J, 'margin-top', '-8.9px'),
        p(J, 'left', '32.6015%'),
        p(J, 'width', '77px'),
        l(oa, 'class', 'g-pstyle0 svelte-zofauz'),
        l(G, 'id', 'g-ai0-13'),
        l(G, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(G, 'top', '78.8906%'),
        p(G, 'margin-top', '-7.7px'),
        p(G, 'left', '63.9138%'),
        p(G, 'width', '58px'),
        l(wa, 'class', 'g-pstyle0 svelte-zofauz'),
        l(j, 'id', 'g-ai0-14'),
        l(j, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(j, 'top', '80.2124%'),
        p(j, 'margin-top', '-7.7px'),
        p(j, 'left', '22.5649%'),
        p(j, 'width', '71px'),
        l(Va, 'class', 'g-pstyle0 svelte-zofauz'),
        l(q, 'id', 'g-ai0-15'),
        l(q, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(q, 'top', '87.8129%'),
        p(q, 'margin-top', '-7.7px'),
        p(q, 'left', '0.6179%'),
        p(q, 'width', '49px'),
        l(ia, 'class', 'g-pstyle4 svelte-zofauz'),
        l(ra, 'class', 'g-pstyle4 svelte-zofauz'),
        l(Y, 'id', 'g-ai0-16'),
        l(Y, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(Y, 'top', '91.0202%'),
        p(Y, 'margin-top', '-11.4px'),
        p(Y, 'right', '10.4418%'),
        p(Y, 'width', '70px'),
        l(K, 'class', 'g-pstyle0 svelte-zofauz'),
        l(R, 'id', 'g-ai0-17'),
        l(R, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(R, 'top', '93.7611%'),
        p(R, 'margin-top', '-7.7px'),
        p(R, 'left', '0.6179%'),
        p(R, 'width', '52px'),
        l(s, 'id', 'g-_ai-chart-xs'),
        l(s, 'class', 'g-artboard svelte-zofauz'),
        l(s, 'style', '');
    },
    m(va, f) {
      A(va, s, f),
        a(s, g),
        a(s, i),
        a(s, c),
        a(s, E),
        a(s, y),
        a(y, b),
        a(b, D),
        a(s, x),
        a(s, z),
        a(z, $),
        a($, Q),
        a(s, I),
        a(s, m),
        a(m, w),
        a(w, ma),
        a(s, Ca),
        a(s, H),
        a(H, aa),
        a(aa, Ia),
        a(s, ja),
        a(s, C),
        a(C, W),
        a(W, ya),
        a(s, Ha),
        a(s, S),
        a(S, sa),
        a(sa, Ja),
        a(s, ba),
        a(s, O),
        a(O, F),
        a(F, Sa),
        a(s, $a),
        a(s, T),
        a(T, ta),
        a(ta, La),
        a(T, qa),
        a(T, na),
        a(na, Ma),
        a(s, _a),
        a(s, L),
        a(L, ca),
        a(ca, la),
        a(s, da),
        a(s, V),
        a(V, ea),
        a(ea, Ra),
        a(s, Ua),
        a(s, M),
        a(M, ka),
        a(ka, Ba),
        a(s, X),
        a(s, J),
        a(J, fa),
        a(fa, Ya),
        a(s, Z),
        a(s, G),
        a(G, oa),
        a(oa, za),
        a(s, ga),
        a(s, j),
        a(j, wa),
        a(wa, Oa),
        a(s, B),
        a(s, q),
        a(q, Va),
        a(Va, Da),
        a(s, N),
        a(s, Y),
        a(Y, ia),
        a(ia, Wa),
        a(Y, U),
        a(Y, ra),
        a(ra, Pa),
        a(s, pa),
        a(s, R),
        a(R, K),
        a(K, Ka);
    },
    p: xa,
    d(va) {
      va && t(s);
    },
  };
}
function Je(_) {
  let s,
    g,
    i,
    c,
    d,
    E,
    y,
    b,
    D,
    x,
    z,
    $,
    Q,
    I,
    m,
    w,
    ma,
    Ca,
    H,
    aa,
    Ia,
    ja,
    C,
    W,
    ya,
    Ha,
    S,
    sa,
    Ja,
    ba,
    O,
    F,
    Sa,
    $a,
    T,
    ta,
    La,
    qa,
    na,
    Ma,
    _a,
    L,
    ca,
    la,
    da,
    V,
    ea,
    Ra,
    Ua,
    M,
    ka,
    Ba,
    X,
    J,
    fa,
    Ya,
    Z,
    G,
    oa,
    za,
    ga,
    j,
    wa,
    Oa,
    B,
    q,
    Va,
    Da,
    N,
    Y,
    ia,
    Wa,
    U,
    ra,
    Pa,
    pa,
    R,
    K,
    Ka;
  return {
    c() {
      (s = n('div')),
        (g = n('div')),
        (i = v()),
        (c = n('div')),
        (E = v()),
        (y = n('div')),
        (b = n('p')),
        (D = r('Shake intensity')),
        (x = v()),
        (z = n('div')),
        ($ = n('p')),
        (Q = r('Light')),
        (I = v()),
        (m = n('div')),
        (w = n('p')),
        (ma = r('Moderate')),
        (Ca = v()),
        (H = n('div')),
        (aa = n('p')),
        (Ia = r('Cap-Haitien')),
        (ja = v()),
        (C = n('div')),
        (W = n('p')),
        (ya = r('Strong')),
        (Ha = v()),
        (S = n('div')),
        (sa = n('p')),
        (Ja = r('Very strong')),
        (ba = v()),
        (O = n('div')),
        (F = n('p')),
        (Sa = r('Gona\xEFves')),
        ($a = v()),
        (T = n('div')),
        (ta = n('p')),
        (La = r('Caribbean')),
        (qa = v()),
        (na = n('p')),
        (Ma = r('Sea')),
        (_a = v()),
        (L = n('div')),
        (ca = n('p')),
        (la = r('HAITI')),
        (da = v()),
        (V = n('div')),
        (ea = n('p')),
        (Ra = r('Jeremie')),
        (Ua = v()),
        (M = n('div')),
        (ka = n('p')),
        (Ba = r('Port-au-Prince')),
        (X = v()),
        (J = n('div')),
        (fa = n('p')),
        (Ya = r('Epicenter')),
        (Z = v()),
        (G = n('div')),
        (oa = n('p')),
        (za = r('Dominican')),
        (ga = v()),
        (j = n('p')),
        (wa = r('Republic')),
        (Oa = v()),
        (B = n('div')),
        (q = n('p')),
        (Va = r('Jacmel')),
        (Da = v()),
        (N = n('div')),
        (Y = n('p')),
        (ia = r('Les Cayes')),
        (Wa = v()),
        (U = n('div')),
        (ra = n('p')),
        (Pa = r('50 mi')),
        (pa = v()),
        (R = n('div')),
        (K = n('p')),
        (Ka = r('50 km')),
        this.h();
    },
    l(va) {
      s = e(va, 'DIV', { id: !0, class: !0, style: !0 });
      var f = o(s);
      (g = e(f, 'DIV', { style: !0 })),
        o(g).forEach(t),
        (i = h(f)),
        (c = e(f, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        o(c).forEach(t),
        (E = h(f)),
        (y = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ds = o(y);
      b = e(ds, 'P', { class: !0 });
      var ks = o(b);
      (D = u(ks, 'Shake intensity')),
        ks.forEach(t),
        ds.forEach(t),
        (x = h(f)),
        (z = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ts = o(z);
      $ = e(ts, 'P', { class: !0 });
      var Ga = o($);
      (Q = u(Ga, 'Light')),
        Ga.forEach(t),
        ts.forEach(t),
        (I = h(f)),
        (m = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qa = o(m);
      w = e(Qa, 'P', { class: !0 });
      var ns = o(w);
      (ma = u(ns, 'Moderate')),
        ns.forEach(t),
        Qa.forEach(t),
        (Ca = h(f)),
        (H = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var fs = o(H);
      aa = e(fs, 'P', { class: !0 });
      var gs = o(aa);
      (Ia = u(gs, 'Cap-Haitien')),
        gs.forEach(t),
        fs.forEach(t),
        (ja = h(f)),
        (C = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var vs = o(C);
      W = e(vs, 'P', { class: !0 });
      var Ta = o(W);
      (ya = u(Ta, 'Strong')),
        Ta.forEach(t),
        vs.forEach(t),
        (Ha = h(f)),
        (S = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var hs = o(S);
      sa = e(hs, 'P', { class: !0 });
      var es = o(sa);
      (Ja = u(es, 'Very strong')),
        es.forEach(t),
        hs.forEach(t),
        (ba = h(f)),
        (O = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ms = o(O);
      F = e(ms, 'P', { class: !0 });
      var _s = o(F);
      (Sa = u(_s, 'Gona\xEFves')),
        _s.forEach(t),
        ms.forEach(t),
        ($a = h(f)),
        (T = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ea = o(T);
      ta = e(Ea, 'P', { class: !0 });
      var Es = o(ta);
      (La = u(Es, 'Caribbean')),
        Es.forEach(t),
        (qa = h(Ea)),
        (na = e(Ea, 'P', { class: !0 }));
      var ys = o(na);
      (Ma = u(ys, 'Sea')),
        ys.forEach(t),
        Ea.forEach(t),
        (_a = h(f)),
        (L = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var rs = o(L);
      ca = e(rs, 'P', { class: !0 });
      var Fa = o(ca);
      (la = u(Fa, 'HAITI')),
        Fa.forEach(t),
        rs.forEach(t),
        (da = h(f)),
        (V = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var Xa = o(V);
      ea = e(Xa, 'P', { class: !0 });
      var us = o(ea);
      (Ra = u(us, 'Jeremie')),
        us.forEach(t),
        Xa.forEach(t),
        (Ua = h(f)),
        (M = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var Na = o(M);
      ka = e(Na, 'P', { class: !0 });
      var os = o(ka);
      (Ba = u(os, 'Port-au-Prince')),
        os.forEach(t),
        Na.forEach(t),
        (X = h(f)),
        (J = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var bs = o(J);
      fa = e(bs, 'P', { class: !0 });
      var Za = o(fa);
      (Ya = u(Za, 'Epicenter')),
        Za.forEach(t),
        bs.forEach(t),
        (Z = h(f)),
        (G = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ha = o(G);
      oa = e(ha, 'P', { class: !0 });
      var zs = o(oa);
      (za = u(zs, 'Dominican')),
        zs.forEach(t),
        (ga = h(ha)),
        (j = e(ha, 'P', { class: !0 }));
      var ls = o(j);
      (wa = u(ls, 'Republic')),
        ls.forEach(t),
        ha.forEach(t),
        (Oa = h(f)),
        (B = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ws = o(B);
      q = e(ws, 'P', { class: !0 });
      var as = o(q);
      (Va = u(as, 'Jacmel')),
        as.forEach(t),
        ws.forEach(t),
        (Da = h(f)),
        (N = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ps = o(N);
      Y = e(ps, 'P', { class: !0 });
      var cs = o(Y);
      (ia = u(cs, 'Les Cayes')),
        cs.forEach(t),
        ps.forEach(t),
        (Wa = h(f)),
        (U = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ds = o(U);
      ra = e(Ds, 'P', { class: !0 });
      var is = o(ra);
      (Pa = u(is, '50 mi')),
        is.forEach(t),
        Ds.forEach(t),
        (pa = h(f)),
        (R = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ss = o(R);
      K = e(ss, 'P', { class: !0 });
      var Ps = o(K);
      (Ka = u(Ps, '50 km')),
        Ps.forEach(t),
        ss.forEach(t),
        f.forEach(t),
        this.h();
    },
    h() {
      p(g, 'padding', '0 0 82.703% 0'),
        l(c, 'id', 'g-_ai-chart-sm-img'),
        l(c, 'class', 'g-aiImg svelte-zofauz'),
        l(c, 'alt', ''),
        l(
          c,
          'style',
          (d = `background-image: url(${Un}/images/graphics/ai-chart-sm.png);`)
        ),
        l(b, 'class', 'g-pstyle0 svelte-zofauz'),
        l(y, 'id', 'g-ai1-1'),
        l(y, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(y, 'top', '3.8773%'),
        p(y, 'margin-top', '-9.4px'),
        p(y, 'left', '0.3278%'),
        p(y, 'width', '111px'),
        l($, 'class', 'g-pstyle0 svelte-zofauz'),
        l(z, 'id', 'g-ai1-2'),
        l(z, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        p(z, 'top', '9.0933%'),
        p(z, 'margin-top', '-9.4px'),
        p(z, 'left', '3.0258%'),
        p(z, 'width', '52px'),
        l(w, 'class', 'g-pstyle0 svelte-zofauz'),
        l(m, 'id', 'g-ai1-3'),
        l(m, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        p(m, 'top', '13.5979%'),
        p(m, 'margin-top', '-9.4px'),
        p(m, 'left', '3.0259%'),
        p(m, 'width', '77px'),
        l(aa, 'class', 'g-pstyle0 svelte-zofauz'),
        l(H, 'id', 'g-ai1-4'),
        l(H, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(H, 'top', '16.6801%'),
        p(H, 'margin-top', '-9.4px'),
        p(H, 'left', '70.3255%'),
        p(H, 'width', '92px'),
        l(W, 'class', 'g-pstyle0 svelte-zofauz'),
        l(C, 'id', 'g-ai1-5'),
        l(C, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        p(C, 'top', '18.3397%'),
        p(C, 'margin-top', '-9.4px'),
        p(C, 'left', '3.0258%'),
        p(C, 'width', '61px'),
        l(sa, 'class', 'g-pstyle0 svelte-zofauz'),
        l(S, 'id', 'g-ai1-6'),
        l(S, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        p(S, 'top', '22.6073%'),
        p(S, 'margin-top', '-9.4px'),
        p(S, 'left', '3.0258%'),
        p(S, 'width', '88px'),
        l(F, 'class', 'g-pstyle0 svelte-zofauz'),
        l(O, 'id', 'g-ai1-7'),
        l(O, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(O, 'top', '28.5344%'),
        p(O, 'margin-top', '-9.4px'),
        p(O, 'left', '55.9181%'),
        p(O, 'width', '76px'),
        l(ta, 'class', 'g-pstyle1 svelte-zofauz'),
        l(na, 'class', 'g-pstyle1 svelte-zofauz'),
        l(T, 'id', 'g-ai1-8'),
        l(T, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(T, 'top', '38.8091%'),
        p(T, 'margin-top', '-17.7px'),
        p(T, 'left', '27.2818%'),
        p(T, 'margin-left', '-41px'),
        p(T, 'width', '82px'),
        l(ca, 'class', 'g-pstyle2 svelte-zofauz'),
        l(L, 'id', 'g-ai1-9'),
        l(L, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(L, 'top', '39.9724%'),
        p(L, 'margin-top', '-8.6px'),
        p(L, 'left', '61.2858%'),
        p(L, 'width', '67px'),
        l(ea, 'class', 'g-pstyle0 svelte-zofauz'),
        l(V, 'id', 'g-ai1-10'),
        l(V, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(V, 'top', '56.985%'),
        p(V, 'margin-top', '-9.4px'),
        p(V, 'left', '12.2815%'),
        p(V, 'width', '69px'),
        l(ka, 'class', 'g-pstyle3 svelte-zofauz'),
        l(M, 'id', 'g-ai1-11'),
        l(M, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(M, 'top', '59.1569%'),
        p(M, 'margin-top', '-9.5px'),
        p(M, 'left', '63.0314%'),
        p(M, 'width', '112px'),
        l(fa, 'class', 'g-pstyle3 svelte-zofauz'),
        l(J, 'id', 'g-ai1-12'),
        l(J, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(J, 'top', '60.1053%'),
        p(J, 'margin-top', '-9.5px'),
        p(J, 'left', '30.5543%'),
        p(J, 'width', '81px'),
        l(oa, 'class', 'g-pstyle4 svelte-zofauz'),
        l(j, 'class', 'g-pstyle4 svelte-zofauz'),
        l(G, 'id', 'g-ai1-13'),
        l(G, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(G, 'top', '62.7194%'),
        p(G, 'margin-top', '-16.5px'),
        p(G, 'left', '91.2282%'),
        p(G, 'margin-left', '-57px'),
        p(G, 'width', '114px'),
        l(q, 'class', 'g-pstyle0 svelte-zofauz'),
        l(B, 'id', 'g-ai1-14'),
        l(B, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(B, 'top', '75.4778%'),
        p(B, 'margin-top', '-9.4px'),
        p(B, 'left', '57.3552%'),
        p(B, 'width', '64px'),
        l(Y, 'class', 'g-pstyle0 svelte-zofauz'),
        l(N, 'id', 'g-ai1-15'),
        l(N, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(N, 'top', '76.6632%'),
        p(N, 'margin-top', '-9.4px'),
        p(N, 'left', '21.9639%'),
        p(N, 'width', '79px'),
        l(ra, 'class', 'g-pstyle5 svelte-zofauz'),
        l(U, 'id', 'g-ai1-16'),
        l(U, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(U, 'top', '85.5251%'),
        p(U, 'margin-top', '-7.7px'),
        p(U, 'left', '0.1344%'),
        p(U, 'width', '49px'),
        l(K, 'class', 'g-pstyle5 svelte-zofauz'),
        l(R, 'id', 'g-ai1-17'),
        l(R, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(R, 'top', '90.0297%'),
        p(R, 'margin-top', '-7.7px'),
        p(R, 'left', '0.1344%'),
        p(R, 'width', '52px'),
        l(s, 'id', 'g-_ai-chart-sm'),
        l(s, 'class', 'g-artboard svelte-zofauz'),
        l(s, 'style', '');
    },
    m(va, f) {
      A(va, s, f),
        a(s, g),
        a(s, i),
        a(s, c),
        a(s, E),
        a(s, y),
        a(y, b),
        a(b, D),
        a(s, x),
        a(s, z),
        a(z, $),
        a($, Q),
        a(s, I),
        a(s, m),
        a(m, w),
        a(w, ma),
        a(s, Ca),
        a(s, H),
        a(H, aa),
        a(aa, Ia),
        a(s, ja),
        a(s, C),
        a(C, W),
        a(W, ya),
        a(s, Ha),
        a(s, S),
        a(S, sa),
        a(sa, Ja),
        a(s, ba),
        a(s, O),
        a(O, F),
        a(F, Sa),
        a(s, $a),
        a(s, T),
        a(T, ta),
        a(ta, La),
        a(T, qa),
        a(T, na),
        a(na, Ma),
        a(s, _a),
        a(s, L),
        a(L, ca),
        a(ca, la),
        a(s, da),
        a(s, V),
        a(V, ea),
        a(ea, Ra),
        a(s, Ua),
        a(s, M),
        a(M, ka),
        a(ka, Ba),
        a(s, X),
        a(s, J),
        a(J, fa),
        a(fa, Ya),
        a(s, Z),
        a(s, G),
        a(G, oa),
        a(oa, za),
        a(G, ga),
        a(G, j),
        a(j, wa),
        a(s, Oa),
        a(s, B),
        a(B, q),
        a(q, Va),
        a(s, Da),
        a(s, N),
        a(N, Y),
        a(Y, ia),
        a(s, Wa),
        a(s, U),
        a(U, ra),
        a(ra, Pa),
        a(s, pa),
        a(s, R),
        a(R, K),
        a(K, Ka);
    },
    p: xa,
    d(va) {
      va && t(s);
    },
  };
}
function qe(_) {
  let s,
    g,
    i,
    c,
    d,
    E,
    y,
    b,
    D,
    x,
    z,
    $,
    Q,
    I,
    m,
    w,
    ma,
    Ca,
    H,
    aa,
    Ia,
    ja,
    C,
    W,
    ya,
    Ha,
    S,
    sa,
    Ja,
    ba,
    O,
    F,
    Sa,
    $a,
    T,
    ta,
    La,
    qa,
    na,
    Ma,
    _a,
    L,
    ca,
    la,
    da,
    V,
    ea,
    Ra,
    Ua,
    M,
    ka,
    Ba,
    X,
    J,
    fa,
    Ya,
    Z,
    G,
    oa,
    za,
    ga,
    j,
    wa,
    Oa,
    B,
    q,
    Va,
    Da,
    N,
    Y,
    ia,
    Wa,
    U,
    ra,
    Pa,
    pa,
    R,
    K,
    Ka;
  return {
    c() {
      (s = n('div')),
        (g = n('div')),
        (i = v()),
        (c = n('div')),
        (E = v()),
        (y = n('div')),
        (b = n('p')),
        (D = r('Shake intensity')),
        (x = v()),
        (z = n('div')),
        ($ = n('p')),
        (Q = r('Light')),
        (I = v()),
        (m = n('div')),
        (w = n('p')),
        (ma = r('Moderate')),
        (Ca = v()),
        (H = n('div')),
        (aa = n('p')),
        (Ia = r('Cap-Haitien')),
        (ja = v()),
        (C = n('div')),
        (W = n('p')),
        (ya = r('Strong')),
        (Ha = v()),
        (S = n('div')),
        (sa = n('p')),
        (Ja = r('Very strong')),
        (ba = v()),
        (O = n('div')),
        (F = n('p')),
        (Sa = r('Gona\xEFves')),
        ($a = v()),
        (T = n('div')),
        (ta = n('p')),
        (La = r('Caribbean')),
        (qa = v()),
        (na = n('p')),
        (Ma = r('Sea')),
        (_a = v()),
        (L = n('div')),
        (ca = n('p')),
        (la = r('HAITI')),
        (da = v()),
        (V = n('div')),
        (ea = n('p')),
        (Ra = r('Dominican')),
        (Ua = v()),
        (M = n('p')),
        (ka = r('Republic')),
        (Ba = v()),
        (X = n('div')),
        (J = n('p')),
        (fa = r('Jeremie')),
        (Ya = v()),
        (Z = n('div')),
        (G = n('p')),
        (oa = r('Epicenter')),
        (za = v()),
        (ga = n('div')),
        (j = n('p')),
        (wa = r('Port-au-Prince')),
        (Oa = v()),
        (B = n('div')),
        (q = n('p')),
        (Va = r('Jacmel')),
        (Da = v()),
        (N = n('div')),
        (Y = n('p')),
        (ia = r('Les Cayes')),
        (Wa = v()),
        (U = n('div')),
        (ra = n('p')),
        (Pa = r('50 mi')),
        (pa = v()),
        (R = n('div')),
        (K = n('p')),
        (Ka = r('50 km')),
        this.h();
    },
    l(va) {
      s = e(va, 'DIV', { id: !0, class: !0, style: !0 });
      var f = o(s);
      (g = e(f, 'DIV', { style: !0 })),
        o(g).forEach(t),
        (i = h(f)),
        (c = e(f, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        o(c).forEach(t),
        (E = h(f)),
        (y = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ds = o(y);
      b = e(ds, 'P', { class: !0 });
      var ks = o(b);
      (D = u(ks, 'Shake intensity')),
        ks.forEach(t),
        ds.forEach(t),
        (x = h(f)),
        (z = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ts = o(z);
      $ = e(ts, 'P', { class: !0 });
      var Ga = o($);
      (Q = u(Ga, 'Light')),
        Ga.forEach(t),
        ts.forEach(t),
        (I = h(f)),
        (m = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qa = o(m);
      w = e(Qa, 'P', { class: !0 });
      var ns = o(w);
      (ma = u(ns, 'Moderate')),
        ns.forEach(t),
        Qa.forEach(t),
        (Ca = h(f)),
        (H = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var fs = o(H);
      aa = e(fs, 'P', { class: !0 });
      var gs = o(aa);
      (Ia = u(gs, 'Cap-Haitien')),
        gs.forEach(t),
        fs.forEach(t),
        (ja = h(f)),
        (C = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var vs = o(C);
      W = e(vs, 'P', { class: !0 });
      var Ta = o(W);
      (ya = u(Ta, 'Strong')),
        Ta.forEach(t),
        vs.forEach(t),
        (Ha = h(f)),
        (S = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var hs = o(S);
      sa = e(hs, 'P', { class: !0 });
      var es = o(sa);
      (Ja = u(es, 'Very strong')),
        es.forEach(t),
        hs.forEach(t),
        (ba = h(f)),
        (O = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ms = o(O);
      F = e(ms, 'P', { class: !0 });
      var _s = o(F);
      (Sa = u(_s, 'Gona\xEFves')),
        _s.forEach(t),
        ms.forEach(t),
        ($a = h(f)),
        (T = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ea = o(T);
      ta = e(Ea, 'P', { class: !0 });
      var Es = o(ta);
      (La = u(Es, 'Caribbean')),
        Es.forEach(t),
        (qa = h(Ea)),
        (na = e(Ea, 'P', { class: !0 }));
      var ys = o(na);
      (Ma = u(ys, 'Sea')),
        ys.forEach(t),
        Ea.forEach(t),
        (_a = h(f)),
        (L = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var rs = o(L);
      ca = e(rs, 'P', { class: !0 });
      var Fa = o(ca);
      (la = u(Fa, 'HAITI')),
        Fa.forEach(t),
        rs.forEach(t),
        (da = h(f)),
        (V = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var Xa = o(V);
      ea = e(Xa, 'P', { class: !0 });
      var us = o(ea);
      (Ra = u(us, 'Dominican')),
        us.forEach(t),
        (Ua = h(Xa)),
        (M = e(Xa, 'P', { class: !0 }));
      var Na = o(M);
      (ka = u(Na, 'Republic')),
        Na.forEach(t),
        Xa.forEach(t),
        (Ba = h(f)),
        (X = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var os = o(X);
      J = e(os, 'P', { class: !0 });
      var bs = o(J);
      (fa = u(bs, 'Jeremie')),
        bs.forEach(t),
        os.forEach(t),
        (Ya = h(f)),
        (Z = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var Za = o(Z);
      G = e(Za, 'P', { class: !0 });
      var ha = o(G);
      (oa = u(ha, 'Epicenter')),
        ha.forEach(t),
        Za.forEach(t),
        (za = h(f)),
        (ga = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var zs = o(ga);
      j = e(zs, 'P', { class: !0 });
      var ls = o(j);
      (wa = u(ls, 'Port-au-Prince')),
        ls.forEach(t),
        zs.forEach(t),
        (Oa = h(f)),
        (B = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ws = o(B);
      q = e(ws, 'P', { class: !0 });
      var as = o(q);
      (Va = u(as, 'Jacmel')),
        as.forEach(t),
        ws.forEach(t),
        (Da = h(f)),
        (N = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ps = o(N);
      Y = e(ps, 'P', { class: !0 });
      var cs = o(Y);
      (ia = u(cs, 'Les Cayes')),
        cs.forEach(t),
        ps.forEach(t),
        (Wa = h(f)),
        (U = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ds = o(U);
      ra = e(Ds, 'P', { class: !0 });
      var is = o(ra);
      (Pa = u(is, '50 mi')),
        is.forEach(t),
        Ds.forEach(t),
        (pa = h(f)),
        (R = e(f, 'DIV', { id: !0, class: !0, style: !0 }));
      var ss = o(R);
      K = e(ss, 'P', { class: !0 });
      var Ps = o(K);
      (Ka = u(Ps, '50 km')),
        Ps.forEach(t),
        ss.forEach(t),
        f.forEach(t),
        this.h();
    },
    h() {
      p(g, 'padding', '0 0 79.6009% 0'),
        l(c, 'id', 'g-_ai-chart-md-img'),
        l(c, 'class', 'g-aiImg svelte-zofauz'),
        l(c, 'alt', ''),
        l(
          c,
          'style',
          (d = `background-image: url(${Un}/images/graphics/ai-chart-md.png);`)
        ),
        l(b, 'class', 'g-pstyle0 svelte-zofauz'),
        l(y, 'id', 'g-ai2-1'),
        l(y, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(y, 'top', '2.3515%'),
        p(y, 'margin-top', '-9.4px'),
        p(y, 'left', '0.3608%'),
        p(y, 'width', '111px'),
        l($, 'class', 'g-pstyle0 svelte-zofauz'),
        l(z, 'id', 'g-ai2-2'),
        l(z, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        p(z, 'top', '7.6811%'),
        p(z, 'margin-top', '-9.4px'),
        p(z, 'left', '2.6603%'),
        p(z, 'width', '52px'),
        l(w, 'class', 'g-pstyle0 svelte-zofauz'),
        l(m, 'id', 'g-ai2-3'),
        l(m, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        p(m, 'top', '12.2494%'),
        p(m, 'margin-top', '-9.4px'),
        p(m, 'left', '2.6604%'),
        p(m, 'width', '77px'),
        l(aa, 'class', 'g-pstyle0 svelte-zofauz'),
        l(H, 'id', 'g-ai2-4'),
        l(H, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(H, 'top', '15.4852%'),
        p(H, 'margin-top', '-9.4px'),
        p(H, 'left', '70.3606%'),
        p(H, 'width', '92px'),
        l(W, 'class', 'g-pstyle0 svelte-zofauz'),
        l(C, 'id', 'g-ai2-5'),
        l(C, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        p(C, 'top', '17.1983%'),
        p(C, 'margin-top', '-9.4px'),
        p(C, 'left', '2.6603%'),
        p(C, 'width', '61px'),
        l(sa, 'class', 'g-pstyle0 svelte-zofauz'),
        l(S, 'id', 'g-ai2-6'),
        l(S, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        p(S, 'top', '21.7666%'),
        p(S, 'margin-top', '-9.4px'),
        p(S, 'left', '2.6603%'),
        p(S, 'width', '88px'),
        l(F, 'class', 'g-pstyle0 svelte-zofauz'),
        l(O, 'id', 'g-ai2-7'),
        l(O, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(O, 'top', '27.6672%'),
        p(O, 'margin-top', '-9.4px'),
        p(O, 'left', '55.993%'),
        p(O, 'width', '76px'),
        l(ta, 'class', 'g-pstyle1 svelte-zofauz'),
        l(na, 'class', 'g-pstyle1 svelte-zofauz'),
        l(T, 'id', 'g-ai2-8'),
        l(T, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(T, 'top', '38.0099%'),
        p(T, 'margin-top', '-17.7px'),
        p(T, 'left', '27.2388%'),
        p(T, 'margin-left', '-41px'),
        p(T, 'width', '82px'),
        l(ca, 'class', 'g-pstyle2 svelte-zofauz'),
        l(L, 'id', 'g-ai2-9'),
        l(L, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(L, 'top', '42.7626%'),
        p(L, 'margin-top', '-10.7px'),
        p(L, 'left', '62.8914%'),
        p(L, 'width', '80px'),
        l(ea, 'class', 'g-pstyle3 svelte-zofauz'),
        l(M, 'class', 'g-pstyle3 svelte-zofauz'),
        l(V, 'id', 'g-ai2-10'),
        l(V, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(V, 'top', '50.0029%'),
        p(V, 'margin-top', '-17.7px'),
        p(V, 'left', '92.295%'),
        p(V, 'margin-left', '-60.5px'),
        p(V, 'width', '121px'),
        l(J, 'class', 'g-pstyle0 svelte-zofauz'),
        l(X, 'id', 'g-ai2-11'),
        l(X, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(X, 'top', '57.3608%'),
        p(X, 'margin-top', '-9.4px'),
        p(X, 'left', '12.2815%'),
        p(X, 'width', '69px'),
        l(G, 'class', 'g-pstyle4 svelte-zofauz'),
        l(Z, 'id', 'g-ai2-12'),
        l(Z, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(Z, 'top', '60.2742%'),
        p(Z, 'margin-top', '-10.7px'),
        p(Z, 'left', '30.6995%'),
        p(Z, 'width', '89px'),
        l(j, 'class', 'g-pstyle4 svelte-zofauz'),
        l(ga, 'id', 'g-ai2-13'),
        l(ga, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(ga, 'top', '62.5583%'),
        p(ga, 'margin-top', '-10.7px'),
        p(ga, 'left', '66.3403%'),
        p(ga, 'width', '125px'),
        l(q, 'class', 'g-pstyle0 svelte-zofauz'),
        l(B, 'id', 'g-ai2-14'),
        l(B, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(B, 'top', '75.6338%'),
        p(B, 'margin-top', '-9.4px'),
        p(B, 'left', '57.8174%'),
        p(B, 'width', '64px'),
        l(Y, 'class', 'g-pstyle0 svelte-zofauz'),
        l(N, 'id', 'g-ai2-15'),
        l(N, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(N, 'top', '77.3469%'),
        p(N, 'margin-top', '-9.4px'),
        p(N, 'left', '22.5239%'),
        p(N, 'width', '79px'),
        l(ra, 'class', 'g-pstyle5 svelte-zofauz'),
        l(U, 'id', 'g-ai2-16'),
        l(U, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(U, 'top', '86.936%'),
        p(U, 'margin-top', '-7.7px'),
        p(U, 'left', '0.1678%'),
        p(U, 'width', '49px'),
        l(K, 'class', 'g-pstyle5 svelte-zofauz'),
        l(R, 'id', 'g-ai2-17'),
        l(R, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        p(R, 'top', '91.5043%'),
        p(R, 'margin-top', '-7.7px'),
        p(R, 'left', '0.1678%'),
        p(R, 'width', '52px'),
        l(s, 'id', 'g-_ai-chart-md'),
        l(s, 'class', 'g-artboard svelte-zofauz'),
        l(s, 'style', '');
    },
    m(va, f) {
      A(va, s, f),
        a(s, g),
        a(s, i),
        a(s, c),
        a(s, E),
        a(s, y),
        a(y, b),
        a(b, D),
        a(s, x),
        a(s, z),
        a(z, $),
        a($, Q),
        a(s, I),
        a(s, m),
        a(m, w),
        a(w, ma),
        a(s, Ca),
        a(s, H),
        a(H, aa),
        a(aa, Ia),
        a(s, ja),
        a(s, C),
        a(C, W),
        a(W, ya),
        a(s, Ha),
        a(s, S),
        a(S, sa),
        a(sa, Ja),
        a(s, ba),
        a(s, O),
        a(O, F),
        a(F, Sa),
        a(s, $a),
        a(s, T),
        a(T, ta),
        a(ta, La),
        a(T, qa),
        a(T, na),
        a(na, Ma),
        a(s, _a),
        a(s, L),
        a(L, ca),
        a(ca, la),
        a(s, da),
        a(s, V),
        a(V, ea),
        a(ea, Ra),
        a(V, Ua),
        a(V, M),
        a(M, ka),
        a(s, Ba),
        a(s, X),
        a(X, J),
        a(J, fa),
        a(s, Ya),
        a(s, Z),
        a(Z, G),
        a(G, oa),
        a(s, za),
        a(s, ga),
        a(ga, j),
        a(j, wa),
        a(s, Oa),
        a(s, B),
        a(B, q),
        a(q, Va),
        a(s, Da),
        a(s, N),
        a(N, Y),
        a(Y, ia),
        a(s, Wa),
        a(s, U),
        a(U, ra),
        a(ra, Pa),
        a(s, pa),
        a(s, R),
        a(R, K),
        a(K, Ka);
    },
    p: xa,
    d(va) {
      va && t(s);
    },
  };
}
function _o(_) {
  let s,
    g,
    i,
    c,
    d = _[0] && _[0] >= 0 && _[0] < 510 && je(),
    E = _[0] && _[0] >= 510 && _[0] < 660 && Je(),
    y = _[0] && _[0] >= 660 && qe();
  return {
    c() {
      (s = n('div')),
        d && d.c(),
        (g = v()),
        E && E.c(),
        (i = v()),
        y && y.c(),
        this.h();
    },
    l(b) {
      s = e(b, 'DIV', { id: !0, class: !0 });
      var D = o(s);
      d && d.l(D),
        (g = h(D)),
        E && E.l(D),
        (i = h(D)),
        y && y.l(D),
        D.forEach(t),
        this.h();
    },
    h() {
      l(s, 'id', 'g-_ai-chart-box'),
        l(s, 'class', 'svelte-zofauz'),
        io(() => _[1].call(s));
    },
    m(b, D) {
      A(b, s, D),
        d && d.m(s, null),
        a(s, g),
        E && E.m(s, null),
        a(s, i),
        y && y.m(s, null),
        (c = ro(s, _[1].bind(s)));
    },
    p(b, [D]) {
      b[0] && b[0] >= 0 && b[0] < 510
        ? d
          ? d.p(b, D)
          : ((d = je()), d.c(), d.m(s, g))
        : d && (d.d(1), (d = null)),
        b[0] && b[0] >= 510 && b[0] < 660
          ? E
            ? E.p(b, D)
            : ((E = Je()), E.c(), E.m(s, i))
          : E && (E.d(1), (E = null)),
        b[0] && b[0] >= 660
          ? y
            ? y.p(b, D)
            : ((y = qe()), y.c(), y.m(s, null))
          : y && (y.d(1), (y = null));
    },
    i: xa,
    o: xa,
    d(b) {
      b && t(s), d && d.d(), E && E.d(), y && y.d(), c();
    },
  };
}
function Eo(_, s, g) {
  let i = null;
  function c() {
    (i = this.clientWidth), g(0, i);
  }
  return [i, c];
}
class dn extends sn {
  constructor(s) {
    super();
    tn(this, s, Eo, _o, nn, {});
  }
}
var yo = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: dn,
});
function bo(_) {
  let s,
    g,
    i,
    c,
    d,
    E,
    y,
    b,
    D,
    x,
    z,
    $,
    Q,
    I,
    m,
    w,
    ma,
    Ca,
    H,
    aa,
    Ia,
    ja,
    C,
    W,
    ya,
    Ha,
    S,
    sa,
    Ja,
    ba,
    O,
    F,
    Sa,
    $a,
    T,
    ta,
    La,
    qa,
    na,
    Ma,
    _a,
    L,
    ca,
    la,
    da,
    V,
    ea,
    Ra,
    Ua,
    M,
    ka,
    Ba,
    X,
    J,
    fa,
    Ya,
    Z,
    G,
    oa,
    za,
    ga,
    j,
    wa,
    Oa,
    B,
    q,
    Va,
    Da,
    N,
    Y,
    ia,
    Wa,
    U,
    ra,
    Pa,
    pa;
  return {
    c() {
      (s = n('table')),
        (g = n('thead')),
        (i = n('tr')),
        (c = n('th')),
        (d = r('Date ')),
        (E = n('th')),
        (y = r(`S&P 500
      `)),
        (b = n('th')),
        (D = r('Dow ')),
        (x = n('th')),
        (z = r('Nasdaq')),
        ($ = v()),
        (Q = n('tbody')),
        (I = n('tr')),
        (m = n('td')),
        (w = r('December 31, 2021')),
        (ma = n('td')),
        (Ca = r('0%')),
        (H = n('td')),
        (aa = r('0')),
        (Ia = n('td')),
        (ja = r('0%')),
        (C = n('tr')),
        (W = n('td')),
        (ya = r('January 3, 2022')),
        (Ha = n('td')),
        (S = r('1%')),
        (sa = n('td')),
        (Ja = r('1')),
        (ba = n('td')),
        (O = r('1%')),
        (F = n('tr')),
        (Sa = n('td')),
        ($a = r('January 4, 2022')),
        (T = n('td')),
        (ta = r('1%')),
        (La = n('td')),
        (qa = r('1')),
        (na = n('td')),
        (Ma = r('\u22120%')),
        (_a = n('tr')),
        (L = n('td')),
        (ca = r('January 5, 2022')),
        (la = n('td')),
        (da = r('\u22121%')),
        (V = n('td')),
        (ea = r('0')),
        (Ra = n('td')),
        (Ua = r('\u22123%')),
        (M = n('tr')),
        (ka = n('td')),
        (Ba = r('January 6, 2022')),
        (X = n('td')),
        (J = r('\u22121%')),
        (fa = n('td')),
        (Ya = r('\u22120')),
        (Z = n('td')),
        (G = r('\u22124%')),
        (oa = n('tr')),
        (za = n('td')),
        (ga = r('January 7, 2022')),
        (j = n('td')),
        (wa = r('\u22122%')),
        (Oa = n('td')),
        (B = r('\u22120')),
        (q = n('td')),
        (Va = r('\u22125%')),
        (Da = n('tr')),
        (N = n('td')),
        (Y = r('January 10, 2022')),
        (ia = n('td')),
        (Wa = r('\u22122%')),
        (U = n('td')),
        (ra = r('\u22121')),
        (Pa = n('td')),
        (pa = r('\u22124%')),
        this.h();
    },
    l(R) {
      s = e(R, 'TABLE', { class: !0 });
      var K = o(s);
      g = e(K, 'THEAD', {});
      var Ka = o(g);
      i = e(Ka, 'TR', {});
      var va = o(i);
      c = e(va, 'TH', { 'data-column': !0, 'data-row': !0 });
      var f = o(c);
      (d = u(f, 'Date ')),
        f.forEach(t),
        (E = e(va, 'TH', { 'data-column': !0, 'data-row': !0 }));
      var ds = o(E);
      (y = u(
        ds,
        `S&P 500
      `
      )),
        ds.forEach(t),
        (b = e(va, 'TH', { 'data-column': !0, 'data-row': !0 }));
      var ks = o(b);
      (D = u(ks, 'Dow ')),
        ks.forEach(t),
        (x = e(va, 'TH', { 'data-column': !0, 'data-row': !0 }));
      var ts = o(x);
      (z = u(ts, 'Nasdaq')),
        ts.forEach(t),
        va.forEach(t),
        Ka.forEach(t),
        ($ = h(K)),
        (Q = e(K, 'TBODY', {}));
      var Ga = o(Q);
      I = e(Ga, 'TR', {});
      var Qa = o(I);
      m = e(Qa, 'TD', {});
      var ns = o(m);
      (w = u(ns, 'December 31, 2021')), ns.forEach(t), (ma = e(Qa, 'TD', {}));
      var fs = o(ma);
      (Ca = u(fs, '0%')), fs.forEach(t), (H = e(Qa, 'TD', {}));
      var gs = o(H);
      (aa = u(gs, '0')), gs.forEach(t), (Ia = e(Qa, 'TD', {}));
      var vs = o(Ia);
      (ja = u(vs, '0%')), vs.forEach(t), Qa.forEach(t), (C = e(Ga, 'TR', {}));
      var Ta = o(C);
      W = e(Ta, 'TD', {});
      var hs = o(W);
      (ya = u(hs, 'January 3, 2022')), hs.forEach(t), (Ha = e(Ta, 'TD', {}));
      var es = o(Ha);
      (S = u(es, '1%')), es.forEach(t), (sa = e(Ta, 'TD', {}));
      var ms = o(sa);
      (Ja = u(ms, '1')), ms.forEach(t), (ba = e(Ta, 'TD', {}));
      var _s = o(ba);
      (O = u(_s, '1%')), _s.forEach(t), Ta.forEach(t), (F = e(Ga, 'TR', {}));
      var Ea = o(F);
      Sa = e(Ea, 'TD', {});
      var Es = o(Sa);
      ($a = u(Es, 'January 4, 2022')), Es.forEach(t), (T = e(Ea, 'TD', {}));
      var ys = o(T);
      (ta = u(ys, '1%')), ys.forEach(t), (La = e(Ea, 'TD', {}));
      var rs = o(La);
      (qa = u(rs, '1')), rs.forEach(t), (na = e(Ea, 'TD', {}));
      var Fa = o(na);
      (Ma = u(Fa, '\u22120%')),
        Fa.forEach(t),
        Ea.forEach(t),
        (_a = e(Ga, 'TR', {}));
      var Xa = o(_a);
      L = e(Xa, 'TD', {});
      var us = o(L);
      (ca = u(us, 'January 5, 2022')), us.forEach(t), (la = e(Xa, 'TD', {}));
      var Na = o(la);
      (da = u(Na, '\u22121%')), Na.forEach(t), (V = e(Xa, 'TD', {}));
      var os = o(V);
      (ea = u(os, '0')), os.forEach(t), (Ra = e(Xa, 'TD', {}));
      var bs = o(Ra);
      (Ua = u(bs, '\u22123%')),
        bs.forEach(t),
        Xa.forEach(t),
        (M = e(Ga, 'TR', {}));
      var Za = o(M);
      ka = e(Za, 'TD', {});
      var ha = o(ka);
      (Ba = u(ha, 'January 6, 2022')), ha.forEach(t), (X = e(Za, 'TD', {}));
      var zs = o(X);
      (J = u(zs, '\u22121%')), zs.forEach(t), (fa = e(Za, 'TD', {}));
      var ls = o(fa);
      (Ya = u(ls, '\u22120')), ls.forEach(t), (Z = e(Za, 'TD', {}));
      var ws = o(Z);
      (G = u(ws, '\u22124%')),
        ws.forEach(t),
        Za.forEach(t),
        (oa = e(Ga, 'TR', {}));
      var as = o(oa);
      za = e(as, 'TD', {});
      var ps = o(za);
      (ga = u(ps, 'January 7, 2022')), ps.forEach(t), (j = e(as, 'TD', {}));
      var cs = o(j);
      (wa = u(cs, '\u22122%')), cs.forEach(t), (Oa = e(as, 'TD', {}));
      var Ds = o(Oa);
      (B = u(Ds, '\u22120')), Ds.forEach(t), (q = e(as, 'TD', {}));
      var is = o(q);
      (Va = u(is, '\u22125%')),
        is.forEach(t),
        as.forEach(t),
        (Da = e(Ga, 'TR', {}));
      var ss = o(Da);
      N = e(ss, 'TD', {});
      var Ps = o(N);
      (Y = u(Ps, 'January 10, 2022')), Ps.forEach(t), (ia = e(ss, 'TD', {}));
      var Ls = o(ia);
      (Wa = u(Ls, '\u22122%')), Ls.forEach(t), (U = e(ss, 'TD', {}));
      var ot = o(U);
      (ra = u(ot, '\u22121')), ot.forEach(t), (Pa = e(ss, 'TD', {}));
      var lt = o(Pa);
      (pa = u(lt, '\u22124%')),
        lt.forEach(t),
        ss.forEach(t),
        Ga.forEach(t),
        K.forEach(t),
        this.h();
    },
    h() {
      l(c, 'data-column', 'Date'),
        l(c, 'data-row', '-1'),
        l(E, 'data-column', 'S&P 500'),
        l(E, 'data-row', '-1'),
        l(b, 'data-column', 'Dow'),
        l(b, 'data-row', '-1'),
        l(x, 'data-column', 'Nasdaq'),
        l(x, 'data-row', '-1'),
        l(s, 'class', 'linechart-data');
    },
    m(R, K) {
      A(R, s, K),
        a(s, g),
        a(g, i),
        a(i, c),
        a(c, d),
        a(i, E),
        a(E, y),
        a(i, b),
        a(b, D),
        a(i, x),
        a(x, z),
        a(s, $),
        a(s, Q),
        a(Q, I),
        a(I, m),
        a(m, w),
        a(I, ma),
        a(ma, Ca),
        a(I, H),
        a(H, aa),
        a(I, Ia),
        a(Ia, ja),
        a(Q, C),
        a(C, W),
        a(W, ya),
        a(C, Ha),
        a(Ha, S),
        a(C, sa),
        a(sa, Ja),
        a(C, ba),
        a(ba, O),
        a(Q, F),
        a(F, Sa),
        a(Sa, $a),
        a(F, T),
        a(T, ta),
        a(F, La),
        a(La, qa),
        a(F, na),
        a(na, Ma),
        a(Q, _a),
        a(_a, L),
        a(L, ca),
        a(_a, la),
        a(la, da),
        a(_a, V),
        a(V, ea),
        a(_a, Ra),
        a(Ra, Ua),
        a(Q, M),
        a(M, ka),
        a(ka, Ba),
        a(M, X),
        a(X, J),
        a(M, fa),
        a(fa, Ya),
        a(M, Z),
        a(Z, G),
        a(Q, oa),
        a(oa, za),
        a(za, ga),
        a(oa, j),
        a(j, wa),
        a(oa, Oa),
        a(Oa, B),
        a(oa, q),
        a(q, Va),
        a(Q, Da),
        a(Da, N),
        a(N, Y),
        a(Da, ia),
        a(ia, Wa),
        a(Da, U),
        a(U, ra),
        a(Da, Pa),
        a(Pa, pa);
    },
    p: xa,
    i: xa,
    o: xa,
    d(R) {
      R && t(s);
    },
  };
}
class Ue extends sn {
  constructor(s) {
    super();
    tn(this, s, null, bo, nn, {});
  }
}
var zo = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: Ue,
});
function wo(_) {
  switch (_) {
    case './ai2svelte/ai-chart.exclude.svelte':
      return qn(
        () =>
          Promise.resolve().then(function () {
            return yo;
          }),
        void 0
      );
    case './ai2svelte/ai-linechart.exclude.svelte':
      return qn(
        () => import('./ai-linechart.exclude-b647b47c.js'),
        [
          'chunks/ai-linechart.exclude-b647b47c.js',
          'assets/ai-linechart.exclude-a5b4ced9.css',
          'chunks/vendor-85b063f6.js',
          'assets/vendor-c9bf64b2.css',
          'chunks/paths-6758d194.js',
        ]
      );
    case './ai2svelte/data-table.exclude.svelte':
      return qn(
        () =>
          Promise.resolve().then(function () {
            return zo;
          }),
        void 0
      );
    default:
      return new Promise(function (s, g) {
        (typeof queueMicrotask == 'function'
          ? queueMicrotask
          : setTimeout)(g.bind(null, new Error('Unknown variable dynamic import: ' + _)));
      });
  }
}
const Do = (_) => ({}),
  Be = (_) => ({ slot: 'hidden' });
function Po(_) {
  let s, g;
  return (
    (s = new un({
      props: {
        AiGraphic: dn,
        ariaHidden: !0,
        ariaDescription:
          'A map of Haiti shows the epicenter of an earthquake in the southwest of the country.',
      },
    })),
    {
      c() {
        xs(s.$$.fragment);
      },
      l(i) {
        Hs(s.$$.fragment, i);
      },
      m(i, c) {
        Is(s, i, c), (g = !0);
      },
      p: xa,
      i(i) {
        g || (ua(s.$$.fragment, i), (g = !0));
      },
      o(i) {
        Aa(s.$$.fragment, i), (g = !1);
      },
      d(i) {
        $s(s, i);
      },
    }
  );
}
function To(_) {
  let s, g;
  return (
    (s = new un({
      props: {
        AiGraphic: dn,
        size: 'wide',
        ariaDescription:
          'A map of Haiti shows the epicenter of an earthquake in the southwest of the country.',
      },
    })),
    {
      c() {
        xs(s.$$.fragment);
      },
      l(i) {
        Hs(s.$$.fragment, i);
      },
      m(i, c) {
        Is(s, i, c), (g = !0);
      },
      p: xa,
      i(i) {
        g || (ua(s.$$.fragment, i), (g = !0));
      },
      o(i) {
        Aa(s.$$.fragment, i), (g = !1);
      },
      d(i) {
        $s(s, i);
      },
    }
  );
}
function Ao(_) {
  let s, g, i, c, d, E;
  return {
    c() {
      (s = n('div')),
        (g = n('h4')),
        (i = r('Earthquake in Haiti')),
        (c = v()),
        (d = n('p')),
        (E = r('A 7.0 magnitude earthquake struck the island on Tuesday.')),
        this.h();
    },
    l(y) {
      s = e(y, 'DIV', { slot: !0, class: !0 });
      var b = o(s);
      g = e(b, 'H4', { class: !0 });
      var D = o(g);
      (i = u(D, 'Earthquake in Haiti')),
        D.forEach(t),
        (c = h(b)),
        (d = e(b, 'P', {}));
      var x = o(d);
      (E = u(x, 'A 7.0 magnitude earthquake struck the island on Tuesday.')),
        x.forEach(t),
        b.forEach(t),
        this.h();
    },
    h() {
      l(g, 'class', 'svelte-xmoab3'),
        l(s, 'slot', 'title'),
        l(s, 'class', 'title svelte-xmoab3');
    },
    m(y, b) {
      A(y, s, b), a(s, g), a(g, i), a(s, c), a(s, d), a(d, E);
    },
    d(y) {
      y && t(s);
    },
  };
}
function xo(_) {
  let s, g, i, c, d, E;
  return {
    c() {
      (s = n('aside')),
        (g = n('p')),
        (i = r('Note: Data current as of Wednesday.')),
        (c = v()),
        (d = n('p')),
        (E = r('Source: USGIS')),
        this.h();
    },
    l(y) {
      s = e(y, 'ASIDE', { slot: !0 });
      var b = o(s);
      g = e(b, 'P', { class: !0 });
      var D = o(g);
      (i = u(D, 'Note: Data current as of Wednesday.')),
        D.forEach(t),
        (c = h(b)),
        (d = e(b, 'P', { class: !0 }));
      var x = o(d);
      (E = u(x, 'Source: USGIS')), x.forEach(t), b.forEach(t), this.h();
    },
    h() {
      l(g, 'class', 'note'), l(d, 'class', 'source'), l(s, 'slot', 'notes');
    },
    m(y, b) {
      A(y, s, b), a(s, g), a(g, i), a(s, c), a(s, d), a(d, E);
    },
    d(y) {
      y && t(s);
    },
  };
}
function Io(_) {
  let s, g;
  return (
    (s = new un({
      props: {
        AiGraphic: dn,
        id: 'ai-map',
        ariaHidden: !0,
        ariaDescription:
          'A map of Haiti shows the epicenter of an earthquake in the southwest of the country.',
        $$slots: { notes: [xo], title: [Ao] },
        $$scope: { ctx: _ },
      },
    })),
    {
      c() {
        xs(s.$$.fragment);
      },
      l(i) {
        Hs(s.$$.fragment, i);
      },
      m(i, c) {
        Is(s, i, c), (g = !0);
      },
      p(i, c) {
        const d = {};
        c & 4 && (d.$$scope = { dirty: c, ctx: i }), s.$set(d);
      },
      i(i) {
        g || (ua(s.$$.fragment, i), (g = !0));
      },
      o(i) {
        Aa(s.$$.fragment, i), (g = !1);
      },
      d(i) {
        $s(s, i);
      },
    }
  );
}
function $o(_) {
  return { c: xa, l: xa, m: xa, p: xa, i: xa, o: xa, d: xa };
}
function Co(_) {
  let s, g;
  return (
    (s = new un({
      props: {
        AiGraphic: _[3],
        ariaDescription:
          'A map of Haiti shows the epicenter of an earthquake in the southwest of the country.',
        $$slots: { hidden: [Ho] },
        $$scope: { ctx: _ },
      },
    })),
    {
      c() {
        xs(s.$$.fragment);
      },
      l(i) {
        Hs(s.$$.fragment, i);
      },
      m(i, c) {
        Is(s, i, c), (g = !0);
      },
      p(i, c) {
        const d = {};
        c & 4 && (d.$$scope = { dirty: c, ctx: i }), s.$set(d);
      },
      i(i) {
        g || (ua(s.$$.fragment, i), (g = !0));
      },
      o(i) {
        Aa(s.$$.fragment, i), (g = !1);
      },
      d(i) {
        $s(s, i);
      },
    }
  );
}
function Vo(_) {
  let s, g;
  return (
    (s = new Ue({})),
    {
      c() {
        xs(s.$$.fragment);
      },
      l(i) {
        Hs(s.$$.fragment, i);
      },
      m(i, c) {
        Is(s, i, c), (g = !0);
      },
      i(i) {
        g || (ua(s.$$.fragment, i), (g = !0));
      },
      o(i) {
        Aa(s.$$.fragment, i), (g = !1);
      },
      d(i) {
        $s(s, i);
      },
    }
  );
}
function Ho(_) {
  let s;
  const g = _[1].default,
    i = cn(g, _, _[2], Be),
    c = i || Vo();
  return {
    c() {
      c && c.c();
    },
    l(d) {
      c && c.l(d);
    },
    m(d, E) {
      c && c.m(d, E), (s = !0);
    },
    p(d, E) {
      i &&
        i.p &&
        (!s || E & 4) &&
        on(i, g, d, d[2], s ? pn(g, d[2], E, Do) : ln(d[2]), Be);
    },
    i(d) {
      s || (ua(c, d), (s = !0));
    },
    o(d) {
      Aa(c, d), (s = !1);
    },
    d(d) {
      c && c.d(d);
    },
  };
}
function So(_) {
  return { c: xa, l: xa, m: xa, p: xa, i: xa, o: xa, d: xa };
}
function Lo(_) {
  let s,
    g,
    i = {
      ctx: _,
      current: null,
      token: null,
      hasCatch: !1,
      pending: So,
      then: Co,
      catch: $o,
      value: 3,
      blocks: [, , ,],
    };
  return (
    uo(_[0]('ai-linechart'), i),
    {
      c() {
        (s = en()), i.block.c();
      },
      l(c) {
        (s = en()), i.block.l(c);
      },
      m(c, d) {
        A(c, s, d),
          i.block.m(c, (i.anchor = d)),
          (i.mount = () => s.parentNode),
          (i.anchor = s),
          (g = !0);
      },
      p(c, d) {
        (_ = c), ko(i, _, d);
      },
      i(c) {
        g || (ua(i.block), (g = !0));
      },
      o(c) {
        for (let d = 0; d < 3; d += 1) {
          const E = i.blocks[d];
          Aa(E);
        }
        g = !1;
      },
      d(c) {
        c && t(s), i.block.d(c), (i.token = null), (i = null);
      },
    }
  );
}
function Mo(_) {
  let s,
    g,
    i,
    c,
    d,
    E,
    y,
    b,
    D,
    x,
    z,
    $ = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MyAiChart <span class="token keyword">from</span> <span class="token string">'./some-chart.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span>
  <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>MyAiChart<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">ariaDescription</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Description of your graphic for screen readers.<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span></code>`,
    Q,
    I,
    m,
    w,
    ma,
    Ca,
    H,
    aa,
    Ia,
    ja,
    C,
    W,
    ya,
    Ha,
    S,
    sa,
    Ja,
    ba,
    O,
    F,
    Sa,
    $a,
    T,
    ta,
    La,
    qa,
    na,
    Ma,
    _a,
    L,
    ca,
    la,
    da,
    V,
    ea,
    Ra,
    Ua,
    M,
    ka,
    Ba,
    X,
    J,
    fa,
    Ya,
    Z,
    G,
    oa,
    za,
    ga,
    j,
    wa,
    Oa,
    B,
    q,
    Va,
    Da,
    N,
    Y,
    ia,
    Wa,
    U,
    ra,
    Pa,
    pa,
    R,
    K,
    Ka,
    va,
    f,
    ds,
    ks,
    ts,
    Ga,
    Qa,
    ns,
    fs,
    gs,
    vs,
    Ta,
    hs,
    es,
    ms,
    _s,
    Ea,
    Es,
    ys,
    rs,
    Fa,
    Xa = `<code class="language-bash"><span class="token comment"># In your Google doc...</span>
<span class="token punctuation">[</span>blocks<span class="token punctuation">]</span>

<span class="token comment"># ...</span>
Type: ai2svelte
ComponentName: my-chart
AriaHidden: <span class="token boolean">true</span> // or <span class="token boolean">false</span>
AriaDescription: Add a descriptive line on the graphic <span class="token keyword">for</span> <span class="token function">screen</span> readers. 

<span class="token punctuation">[</span><span class="token punctuation">]</span></code>`,
    us,
    Na,
    os,
    bs,
    Za,
    ha,
    zs,
    ls,
    ws,
    as,
    ps,
    cs,
    Ds,
    is,
    ss,
    Ps,
    Ls,
    ot,
    lt,
    Tt,
    Us,
    We = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MyAiChart <span class="token keyword">from</span> <span class="token string">'./some-chart.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span>
  <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>MyAiChart<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wide<span class="token punctuation">"</span></span>
  <span class="token attr-name">ariaDescription</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A map of Haiti shows the epicenter of an earthquake in the southwest of the country.<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span></code>`,
    At,
    Ms,
    xt,
    Rs,
    ft,
    kn,
    fn,
    gt,
    gn,
    It,
    Bs,
    Fe = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MyAiChart <span class="token keyword">from</span> <span class="token string">'./some-chart.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Add an ID and change the default width of your graphic --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span>
  <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>MyAiChart<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ai-map<span class="token punctuation">"</span></span>
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
    $t,
    Os,
    Ct,
    Gs,
    vt,
    vn,
    hn,
    Ys,
    mn,
    Ws,
    _n,
    En,
    Vt,
    Fs,
    Ke = `<code class="language-bash"><span class="token comment"># In your Google doc...</span>
<span class="token punctuation">[</span>blocks<span class="token punctuation">]</span>

<span class="token comment"># ...</span>
Type: ai2svelte
ComponentName: my-chart

<span class="token punctuation">[</span><span class="token punctuation">]</span></code>`,
    Ht,
    Ks,
    Qe = `<code class="language-svelte"><span class="token comment">&lt;!-- src/lib/Page.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> content <span class="token keyword">from</span> <span class="token string">'$locales/en/content.json'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">fetchComponent</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">componentName</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">./ai2svelte/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>componentName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.svelte</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">content<span class="token punctuation">.</span>blocks </span><span class="token keyword">as</span> <span class="token language-javascript">block<span class="token punctuation">&#125;</span></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> block<span class="token punctuation">.</span>Type <span class="token operator">===</span> <span class="token string">'ai2svelte'</span><span class="token punctuation">&#125;</span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">await</span> <span class="token function">fetchComponent</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>ComponentName<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>then component<span class="token punctuation">&#125;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span>
        <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>component<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> 
        <span class="token attr-name">ariaDescription</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A map of Haiti shows the epicenter of an earthquake in the southwest of the country.<span class="token punctuation">"</span></span> 
      <span class="token punctuation">/></span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>catch error<span class="token punctuation">&#125;</span></span>
      <span class="token language-javascript"><span class="token punctuation">&#123;</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Error fetching component: ./ai2svelte/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>block<span class="token punctuation">.</span>ComponentName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.svelte</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
        error
      <span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">await</span><span class="token punctuation">&#125;</span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span></code>`,
    St,
    pt,
    Ss,
    yn,
    ht,
    bn,
    zn,
    Qs,
    wn,
    Dn,
    Lt,
    As,
    mt,
    Pn,
    Tn,
    _t,
    An,
    xn,
    Xs,
    In,
    Et,
    $n,
    Cn,
    Vn,
    Zs,
    Hn,
    yt,
    Sn,
    Ln,
    Mt,
    at,
    Xe = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    Rt,
    Ns,
    Ot,
    ct,
    st,
    Mn,
    bt,
    Rn,
    On,
    Gt,
    tt,
    Ze = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>line-chart-data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
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
    Nt,
    it,
    rt,
    nt,
    Gn,
    Nn,
    jt;
  return (
    (I = new rn({
      props: { $$slots: { default: [Po] }, $$scope: { ctx: _ } },
    })),
    (Ms = new rn({
      props: { $$slots: { default: [To] }, $$scope: { ctx: _ } },
    })),
    (Os = new rn({
      props: { $$slots: { default: [Io] }, $$scope: { ctx: _ } },
    })),
    (Ns = new rn({
      props: { $$slots: { default: [Lo] }, $$scope: { ctx: _ } },
    })),
    {
      c() {
        (s = n('section')),
          (g = n('h2')),
          (i = r(Ye)),
          (c = v()),
          (d = n('p')),
          (E = r('Pass a component created by ')),
          (y = n('a')),
          (b = r('ai2svelte')),
          (D = r(
            ' to this component, which will wrap it in a graphics section tag.'
          )),
          (x = v()),
          (z = n('pre')),
          (Q = v()),
          xs(I.$$.fragment),
          (m = v()),
          (w = n('section')),
          (ma = n('h2')),
          (Ca = r('Accessibility props')),
          (H = v()),
          (aa = n('p')),
          (Ia = n('code')),
          (ja = r('ariaHidden')),
          (C = v()),
          (W = n('ul')),
          (ya = n('li')),
          (Ha = r('Set to ')),
          (S = n('code')),
          (sa = r('true')),
          (Ja = r(` by default, which means HTML text content in the
ai2svelte component are visible on the page but not read aloud by screen readers.
(Read more about aria-hidden elements `)),
          (ba = n('a')),
          (O = r('here')),
          (F = r('.)')),
          (Sa = v()),
          ($a = n('li')),
          (T = r('Set it to ')),
          (ta = n('code')),
          (La = r('false')),
          (qa = r(
            ' to make the screen reader read aloud HTML text content in ai2svelte.'
          )),
          (na = v()),
          (Ma = n('p')),
          (_a = n('code')),
          (L = r('ariaDescription')),
          (ca = v()),
          (la = n('ul')),
          (da = n('li')),
          (V = r('If ')),
          (ea = n('code')),
          (Ra = r('ariaHidden')),
          (Ua = r(' is ')),
          (M = n('code')),
          (ka = r('true')),
          (Ba = r(', make sure you add an ')),
          (X = n('code')),
          (J = r('ariaDescription')),
          (fa = r(
            ', which is invisible on the page but is read aloud by screen readers.'
          )),
          (Ya = v()),
          (Z = n('li')),
          (G = r('This prop takes a string, like altText for an image.')),
          (oa = v()),
          (za = n('li')),
          (ga = r(
            'It should describe what the chart is showing and why it\u2019s important. This is helpful for:'
          )),
          (j = n('ul')),
          (wa = n('li')),
          (Oa = r(
            'Blind readers using screen-reading or Braille conversion software'
          )),
          (B = v()),
          (q = n('li')),
          (Va = r(
            'All readers if the image is unavailable or takes too long to load'
          )),
          (Da = v()),
          (N = n('li')),
          (Y = r(
            'Read about writing aria description, also known as alt text, '
          )),
          (ia = n('a')),
          (Wa = r('here')),
          (U = r('.')),
          (ra = v()),
          (Pa = n('section')),
          (pa = n('p')),
          (R = r('\u{1F6A8} ')),
          (K = n('strong')),
          (Ka = r('Important:')),
          (va = r(' If ')),
          (f = n('code')),
          (ds = r('ariaHidden')),
          (ks = r(' is ')),
          (ts = n('code')),
          (Ga = r('true')),
          (Qa = r(' but you are missing ')),
          (ns = n('code')),
          (fs = r('ariaDescription')),
          (gs = r(
            ' or some other special alternative for screen readers (more on this later), your graphic will be hidden from the page and you will see a warning in your console.'
          )),
          (vs = v()),
          (Ta = n('p')),
          (hs = r('Graphics kit users can set your ')),
          (es = n('code')),
          (ms = r('ariaHidden')),
          (_s = r(' prop and write your  ')),
          (Ea = n('code')),
          (Es = r('ariaDescription')),
          (ys = r(' in the google doc like this:')),
          (rs = v()),
          (Fa = n('pre')),
          (us = v()),
          (Na = n('section')),
          (os = n('h2')),
          (bs = r('Graphic width')),
          (Za = v()),
          (ha = n('p')),
          (zs = r(
            'Adjust the size of the graphic by passing a class name corresponding to one of our well widths: '
          )),
          (ls = n('code')),
          (ws = r('wide')),
          (as = r(', ')),
          (ps = n('code')),
          (cs = r('wider')),
          (Ds = r(', ')),
          (is = n('code')),
          (ss = r('widest')),
          (Ps = r(' or ')),
          (Ls = n('code')),
          (ot = r('fluid')),
          (lt = r('.')),
          (Tt = v()),
          (Us = n('pre')),
          (At = v()),
          xs(Ms.$$.fragment),
          (xt = v()),
          (Rs = n('section')),
          (ft = n('h2')),
          (kn = r('Chart title, description, source and note')),
          (fn = v()),
          (gt = n('p')),
          (gn = r('Add additional chart chatter through slots.')),
          (It = v()),
          (Bs = n('pre')),
          ($t = v()),
          xs(Os.$$.fragment),
          (Ct = v()),
          (Gs = n('section')),
          (vt = n('h2')),
          (vn = r('Using ArchieML google doc')),
          (hn = v()),
          (Ys = n('p')),
          (mn = r('You can use this component to layout AI graphics via an ')),
          (Ws = n('a')),
          (_n = r('ArchieML')),
          (En = r(
            '-formatted Google doc by using the following pattern to dynamically import an ai2svelte component:'
          )),
          (Vt = v()),
          (Fs = n('pre')),
          (Ht = v()),
          (Ks = n('pre')),
          (St = v()),
          (pt = n('section')),
          (Ss = n('p')),
          (yn = r('This comes with some restrictions, though. Be sure your ')),
          (ht = n('code')),
          (bn = r('fetchComponent')),
          (zn = r(' function follows ')),
          (Qs = n('a')),
          (wn = r('the limits on dynamic imports')),
          (Dn = r('.')),
          (Lt = v()),
          (As = n('section')),
          (mt = n('h2')),
          (Pn = r('Customising data for screen readers')),
          (Tn = v()),
          (_t = n('p')),
          (An =
            r(`Sometimes, in addition to or instead of adding an aria description for graphics,
we want to also provide a data table, a lengthier description with more complex element structure or something else.`)),
          (xn = v()),
          (Xs = n('p')),
          (In = r(
            'You can add custom information for screen readers only by using the '
          )),
          (Et = n('code')),
          ($n = r('hidden')),
          (Cn = r(' slot.')),
          (Vn = v()),
          (Zs = n('p')),
          (Hn = r('For example, for the line chart below, we can add a ')),
          (yt = n('strong')),
          (Sn = r('data table')),
          (Ln = r(' that helps screen-reader users navigate the data.')),
          (Mt = v()),
          (at = n('pre')),
          (Rt = v()),
          xs(Ns.$$.fragment),
          (Ot = v()),
          (ct = n('section')),
          (st = n('p')),
          (Mn = r('This is what ')),
          (bt = n('code')),
          (Rn = r('<SRDataTable/>')),
          (On = r(
            ' looks like. (You can make an HTML table using DataWrapper.)'
          )),
          (Gt = v()),
          (tt = n('pre')),
          (Nt = v()),
          (it = n('section')),
          (rt = n('p')),
          (nt = n('a')),
          (Gn = r('Read this')),
          (Nn = r(
            ' for more information on screen-reader data tables for charts.'
          )),
          this.h();
      },
      l(k) {
        s = e(k, 'SECTION', {});
        var P = o(s);
        g = e(P, 'H2', {});
        var zt = o(g);
        (i = u(zt, Ye)), zt.forEach(t), (c = h(P)), (d = e(P, 'P', {}));
        var et = o(d);
        (E = u(et, 'Pass a component created by ')),
          (y = e(et, 'A', { href: !0, rel: !0 }));
        var wt = o(y);
        (b = u(wt, 'ai2svelte')),
          wt.forEach(t),
          (D = u(
            et,
            ' to this component, which will wrap it in a graphics section tag.'
          )),
          et.forEach(t),
          P.forEach(t),
          (x = h(k)),
          (z = e(k, 'PRE', { class: !0 }));
        var Jt = o(z);
        Jt.forEach(t),
          (Q = h(k)),
          Hs(I.$$.fragment, k),
          (m = h(k)),
          (w = e(k, 'SECTION', {}));
        var Ts = o(w);
        ma = e(Ts, 'H2', {});
        var Bn = o(ma);
        (Ca = u(Bn, 'Accessibility props')),
          Bn.forEach(t),
          (H = h(Ts)),
          (aa = e(Ts, 'P', {}));
        var Yn = o(aa);
        Ia = e(Yn, 'CODE', {});
        var Wn = o(Ia);
        (ja = u(Wn, 'ariaHidden')),
          Wn.forEach(t),
          Yn.forEach(t),
          (C = h(Ts)),
          (W = e(Ts, 'UL', {}));
        var qt = o(W);
        ya = e(qt, 'LI', {});
        var ut = o(ya);
        (Ha = u(ut, 'Set to ')), (S = e(ut, 'CODE', {}));
        var Fn = o(S);
        (sa = u(Fn, 'true')),
          Fn.forEach(t),
          (Ja = u(
            ut,
            ` by default, which means HTML text content in the
ai2svelte component are visible on the page but not read aloud by screen readers.
(Read more about aria-hidden elements `
          )),
          (ba = e(ut, 'A', { href: !0, rel: !0 }));
        var Kn = o(ba);
        (O = u(Kn, 'here')),
          Kn.forEach(t),
          (F = u(ut, '.)')),
          ut.forEach(t),
          (Sa = h(qt)),
          ($a = e(qt, 'LI', {}));
        var Ut = o($a);
        (T = u(Ut, 'Set it to ')), (ta = e(Ut, 'CODE', {}));
        var Qn = o(ta);
        (La = u(Qn, 'false')),
          Qn.forEach(t),
          (qa = u(
            Ut,
            ' to make the screen reader read aloud HTML text content in ai2svelte.'
          )),
          Ut.forEach(t),
          qt.forEach(t),
          (na = h(Ts)),
          (Ma = e(Ts, 'P', {}));
        var Xn = o(Ma);
        _a = e(Xn, 'CODE', {});
        var Zn = o(_a);
        (L = u(Zn, 'ariaDescription')),
          Zn.forEach(t),
          Xn.forEach(t),
          (ca = h(Ts)),
          (la = e(Ts, 'UL', {}));
        var js = o(la);
        da = e(js, 'LI', {});
        var Js = o(da);
        (V = u(Js, 'If ')), (ea = e(Js, 'CODE', {}));
        var ae = o(ea);
        (Ra = u(ae, 'ariaHidden')),
          ae.forEach(t),
          (Ua = u(Js, ' is ')),
          (M = e(Js, 'CODE', {}));
        var se = o(M);
        (ka = u(se, 'true')),
          se.forEach(t),
          (Ba = u(Js, ', make sure you add an ')),
          (X = e(Js, 'CODE', {}));
        var te = o(X);
        (J = u(te, 'ariaDescription')),
          te.forEach(t),
          (fa = u(
            Js,
            ', which is invisible on the page but is read aloud by screen readers.'
          )),
          Js.forEach(t),
          (Ya = h(js)),
          (Z = e(js, 'LI', {}));
        var ne = o(Z);
        (G = u(ne, 'This prop takes a string, like altText for an image.')),
          ne.forEach(t),
          (oa = h(js)),
          (za = e(js, 'LI', {}));
        var jn = o(za);
        (ga = u(
          jn,
          'It should describe what the chart is showing and why it\u2019s important. This is helpful for:'
        )),
          (j = e(jn, 'UL', {}));
        var Bt = o(j);
        wa = e(Bt, 'LI', {});
        var ee = o(wa);
        (Oa = u(
          ee,
          'Blind readers using screen-reading or Braille conversion software'
        )),
          ee.forEach(t),
          (B = h(Bt)),
          (q = e(Bt, 'LI', {}));
        var oe = o(q);
        (Va = u(
          oe,
          'All readers if the image is unavailable or takes too long to load'
        )),
          oe.forEach(t),
          Bt.forEach(t),
          jn.forEach(t),
          (Da = h(js)),
          (N = e(js, 'LI', {}));
        var Yt = o(N);
        (Y = u(
          Yt,
          'Read about writing aria description, also known as alt text, '
        )),
          (ia = e(Yt, 'A', { href: !0, rel: !0 }));
        var le = o(ia);
        (Wa = u(le, 'here')),
          le.forEach(t),
          (U = u(Yt, '.')),
          Yt.forEach(t),
          js.forEach(t),
          (ra = h(Ts)),
          (Pa = e(Ts, 'SECTION', { class: !0 }));
        var pe = o(Pa);
        pa = e(pe, 'P', {});
        var Cs = o(pa);
        (R = u(Cs, '\u{1F6A8} ')), (K = e(Cs, 'STRONG', {}));
        var ce = o(K);
        (Ka = u(ce, 'Important:')),
          ce.forEach(t),
          (va = u(Cs, ' If ')),
          (f = e(Cs, 'CODE', {}));
        var ie = o(f);
        (ds = u(ie, 'ariaHidden')),
          ie.forEach(t),
          (ks = u(Cs, ' is ')),
          (ts = e(Cs, 'CODE', {}));
        var re = o(ts);
        (Ga = u(re, 'true')),
          re.forEach(t),
          (Qa = u(Cs, ' but you are missing ')),
          (ns = e(Cs, 'CODE', {}));
        var ue = o(ns);
        (fs = u(ue, 'ariaDescription')),
          ue.forEach(t),
          (gs = u(
            Cs,
            ' or some other special alternative for screen readers (more on this later), your graphic will be hidden from the page and you will see a warning in your console.'
          )),
          Cs.forEach(t),
          pe.forEach(t),
          (vs = h(Ts)),
          (Ta = e(Ts, 'P', {}));
        var dt = o(Ta);
        (hs = u(dt, 'Graphics kit users can set your ')),
          (es = e(dt, 'CODE', {}));
        var de = o(es);
        (ms = u(de, 'ariaHidden')),
          de.forEach(t),
          (_s = u(dt, ' prop and write your  ')),
          (Ea = e(dt, 'CODE', {}));
        var ke = o(Ea);
        (Es = u(ke, 'ariaDescription')),
          ke.forEach(t),
          (ys = u(dt, ' in the google doc like this:')),
          dt.forEach(t),
          Ts.forEach(t),
          (rs = h(k)),
          (Fa = e(k, 'PRE', { class: !0 }));
        var ao = o(Fa);
        ao.forEach(t), (us = h(k)), (Na = e(k, 'SECTION', {}));
        var Wt = o(Na);
        os = e(Wt, 'H2', {});
        var fe = o(os);
        (bs = u(fe, 'Graphic width')),
          fe.forEach(t),
          (Za = h(Wt)),
          (ha = e(Wt, 'P', {}));
        var Vs = o(ha);
        (zs = u(
          Vs,
          'Adjust the size of the graphic by passing a class name corresponding to one of our well widths: '
        )),
          (ls = e(Vs, 'CODE', {}));
        var ge = o(ls);
        (ws = u(ge, 'wide')),
          ge.forEach(t),
          (as = u(Vs, ', ')),
          (ps = e(Vs, 'CODE', {}));
        var ve = o(ps);
        (cs = u(ve, 'wider')),
          ve.forEach(t),
          (Ds = u(Vs, ', ')),
          (is = e(Vs, 'CODE', {}));
        var he = o(is);
        (ss = u(he, 'widest')),
          he.forEach(t),
          (Ps = u(Vs, ' or ')),
          (Ls = e(Vs, 'CODE', {}));
        var me = o(Ls);
        (ot = u(me, 'fluid')),
          me.forEach(t),
          (lt = u(Vs, '.')),
          Vs.forEach(t),
          Wt.forEach(t),
          (Tt = h(k)),
          (Us = e(k, 'PRE', { class: !0 }));
        var so = o(Us);
        so.forEach(t),
          (At = h(k)),
          Hs(Ms.$$.fragment, k),
          (xt = h(k)),
          (Rs = e(k, 'SECTION', {}));
        var Ft = o(Rs);
        ft = e(Ft, 'H2', {});
        var _e = o(ft);
        (kn = u(_e, 'Chart title, description, source and note')),
          _e.forEach(t),
          (fn = h(Ft)),
          (gt = e(Ft, 'P', {}));
        var Ee = o(gt);
        (gn = u(Ee, 'Add additional chart chatter through slots.')),
          Ee.forEach(t),
          Ft.forEach(t),
          (It = h(k)),
          (Bs = e(k, 'PRE', { class: !0 }));
        var to = o(Bs);
        to.forEach(t),
          ($t = h(k)),
          Hs(Os.$$.fragment, k),
          (Ct = h(k)),
          (Gs = e(k, 'SECTION', {}));
        var Kt = o(Gs);
        vt = e(Kt, 'H2', {});
        var ye = o(vt);
        (vn = u(ye, 'Using ArchieML google doc')),
          ye.forEach(t),
          (hn = h(Kt)),
          (Ys = e(Kt, 'P', {}));
        var Qt = o(Ys);
        (mn = u(
          Qt,
          'You can use this component to layout AI graphics via an '
        )),
          (Ws = e(Qt, 'A', { href: !0, rel: !0 }));
        var be = o(Ws);
        (_n = u(be, 'ArchieML')),
          be.forEach(t),
          (En = u(
            Qt,
            '-formatted Google doc by using the following pattern to dynamically import an ai2svelte component:'
          )),
          Qt.forEach(t),
          Kt.forEach(t),
          (Vt = h(k)),
          (Fs = e(k, 'PRE', { class: !0 }));
        var no = o(Fs);
        no.forEach(t), (Ht = h(k)), (Ks = e(k, 'PRE', { class: !0 }));
        var eo = o(Ks);
        eo.forEach(t), (St = h(k)), (pt = e(k, 'SECTION', {}));
        var ze = o(pt);
        Ss = e(ze, 'P', {});
        var kt = o(Ss);
        (yn = u(
          kt,
          'This comes with some restrictions, though. Be sure your '
        )),
          (ht = e(kt, 'CODE', {}));
        var we = o(ht);
        (bn = u(we, 'fetchComponent')),
          we.forEach(t),
          (zn = u(kt, ' function follows ')),
          (Qs = e(kt, 'A', { href: !0, rel: !0 }));
        var De = o(Qs);
        (wn = u(De, 'the limits on dynamic imports')),
          De.forEach(t),
          (Dn = u(kt, '.')),
          kt.forEach(t),
          ze.forEach(t),
          (Lt = h(k)),
          (As = e(k, 'SECTION', { class: !0 }));
        var qs = o(As);
        mt = e(qs, 'H2', {});
        var Pe = o(mt);
        (Pn = u(Pe, 'Customising data for screen readers')),
          Pe.forEach(t),
          (Tn = h(qs)),
          (_t = e(qs, 'P', {}));
        var Te = o(_t);
        (An = u(
          Te,
          `Sometimes, in addition to or instead of adding an aria description for graphics,
we want to also provide a data table, a lengthier description with more complex element structure or something else.`
        )),
          Te.forEach(t),
          (xn = h(qs)),
          (Xs = e(qs, 'P', {}));
        var Xt = o(Xs);
        (In = u(
          Xt,
          'You can add custom information for screen readers only by using the '
        )),
          (Et = e(Xt, 'CODE', {}));
        var Ae = o(Et);
        ($n = u(Ae, 'hidden')),
          Ae.forEach(t),
          (Cn = u(Xt, ' slot.')),
          Xt.forEach(t),
          (Vn = h(qs)),
          (Zs = e(qs, 'P', {}));
        var Zt = o(Zs);
        (Hn = u(Zt, 'For example, for the line chart below, we can add a ')),
          (yt = e(Zt, 'STRONG', {}));
        var xe = o(yt);
        (Sn = u(xe, 'data table')),
          xe.forEach(t),
          (Ln = u(Zt, ' that helps screen-reader users navigate the data.')),
          Zt.forEach(t),
          qs.forEach(t),
          (Mt = h(k)),
          (at = e(k, 'PRE', { class: !0 }));
        var oo = o(at);
        oo.forEach(t),
          (Rt = h(k)),
          Hs(Ns.$$.fragment, k),
          (Ot = h(k)),
          (ct = e(k, 'SECTION', {}));
        var Ie = o(ct);
        st = e(Ie, 'P', {});
        var an = o(st);
        (Mn = u(an, 'This is what ')), (bt = e(an, 'CODE', {}));
        var $e = o(bt);
        (Rn = u($e, '<SRDataTable/>')),
          $e.forEach(t),
          (On = u(
            an,
            ' looks like. (You can make an HTML table using DataWrapper.)'
          )),
          an.forEach(t),
          Ie.forEach(t),
          (Gt = h(k)),
          (tt = e(k, 'PRE', { class: !0 }));
        var lo = o(tt);
        lo.forEach(t), (Nt = h(k)), (it = e(k, 'SECTION', {}));
        var Ce = o(it);
        rt = e(Ce, 'P', {});
        var Jn = o(rt);
        nt = e(Jn, 'A', { href: !0, rel: !0 });
        var Ve = o(nt);
        (Gn = u(Ve, 'Read this')),
          Ve.forEach(t),
          (Nn = u(
            Jn,
            ' for more information on screen-reader data tables for charts.'
          )),
          Jn.forEach(t),
          Ce.forEach(t),
          this.h();
      },
      h() {
        l(y, 'href', 'https://github.com/reuters-graphics/ai2svelte'),
          l(y, 'rel', 'nofollow'),
          l(z, 'class', 'language-svelte'),
          l(
            ba,
            'href',
            'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden'
          ),
          l(ba, 'rel', 'nofollow'),
          l(
            ia,
            'href',
            'https://medium.com/nightingale/writing-alt-text-for-data-visualization-2a218ef43f81'
          ),
          l(ia, 'rel', 'nofollow'),
          l(Pa, 'class', 'note'),
          l(Fa, 'class', 'language-bash'),
          l(Us, 'class', 'language-svelte'),
          l(Bs, 'class', 'language-svelte'),
          l(Ws, 'href', 'http://archieml.org/'),
          l(Ws, 'rel', 'nofollow'),
          l(Fs, 'class', 'language-bash'),
          l(Ks, 'class', 'language-svelte'),
          l(
            Qs,
            'href',
            'https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations'
          ),
          l(Qs, 'rel', 'nofollow'),
          l(As, 'class', 'pt-5'),
          l(at, 'class', 'language-svelte'),
          l(tt, 'class', 'language-svelte'),
          l(nt, 'href', 'https://accessibility.psu.edu/images/charts/'),
          l(nt, 'rel', 'nofollow');
      },
      m(k, P) {
        A(k, s, P),
          a(s, g),
          a(g, i),
          a(s, c),
          a(s, d),
          a(d, E),
          a(d, y),
          a(y, b),
          a(d, D),
          A(k, x, P),
          A(k, z, P),
          (z.innerHTML = $),
          A(k, Q, P),
          Is(I, k, P),
          A(k, m, P),
          A(k, w, P),
          a(w, ma),
          a(ma, Ca),
          a(w, H),
          a(w, aa),
          a(aa, Ia),
          a(Ia, ja),
          a(w, C),
          a(w, W),
          a(W, ya),
          a(ya, Ha),
          a(ya, S),
          a(S, sa),
          a(ya, Ja),
          a(ya, ba),
          a(ba, O),
          a(ya, F),
          a(W, Sa),
          a(W, $a),
          a($a, T),
          a($a, ta),
          a(ta, La),
          a($a, qa),
          a(w, na),
          a(w, Ma),
          a(Ma, _a),
          a(_a, L),
          a(w, ca),
          a(w, la),
          a(la, da),
          a(da, V),
          a(da, ea),
          a(ea, Ra),
          a(da, Ua),
          a(da, M),
          a(M, ka),
          a(da, Ba),
          a(da, X),
          a(X, J),
          a(da, fa),
          a(la, Ya),
          a(la, Z),
          a(Z, G),
          a(la, oa),
          a(la, za),
          a(za, ga),
          a(za, j),
          a(j, wa),
          a(wa, Oa),
          a(j, B),
          a(j, q),
          a(q, Va),
          a(la, Da),
          a(la, N),
          a(N, Y),
          a(N, ia),
          a(ia, Wa),
          a(N, U),
          a(w, ra),
          a(w, Pa),
          a(Pa, pa),
          a(pa, R),
          a(pa, K),
          a(K, Ka),
          a(pa, va),
          a(pa, f),
          a(f, ds),
          a(pa, ks),
          a(pa, ts),
          a(ts, Ga),
          a(pa, Qa),
          a(pa, ns),
          a(ns, fs),
          a(pa, gs),
          a(w, vs),
          a(w, Ta),
          a(Ta, hs),
          a(Ta, es),
          a(es, ms),
          a(Ta, _s),
          a(Ta, Ea),
          a(Ea, Es),
          a(Ta, ys),
          A(k, rs, P),
          A(k, Fa, P),
          (Fa.innerHTML = Xa),
          A(k, us, P),
          A(k, Na, P),
          a(Na, os),
          a(os, bs),
          a(Na, Za),
          a(Na, ha),
          a(ha, zs),
          a(ha, ls),
          a(ls, ws),
          a(ha, as),
          a(ha, ps),
          a(ps, cs),
          a(ha, Ds),
          a(ha, is),
          a(is, ss),
          a(ha, Ps),
          a(ha, Ls),
          a(Ls, ot),
          a(ha, lt),
          A(k, Tt, P),
          A(k, Us, P),
          (Us.innerHTML = We),
          A(k, At, P),
          Is(Ms, k, P),
          A(k, xt, P),
          A(k, Rs, P),
          a(Rs, ft),
          a(ft, kn),
          a(Rs, fn),
          a(Rs, gt),
          a(gt, gn),
          A(k, It, P),
          A(k, Bs, P),
          (Bs.innerHTML = Fe),
          A(k, $t, P),
          Is(Os, k, P),
          A(k, Ct, P),
          A(k, Gs, P),
          a(Gs, vt),
          a(vt, vn),
          a(Gs, hn),
          a(Gs, Ys),
          a(Ys, mn),
          a(Ys, Ws),
          a(Ws, _n),
          a(Ys, En),
          A(k, Vt, P),
          A(k, Fs, P),
          (Fs.innerHTML = Ke),
          A(k, Ht, P),
          A(k, Ks, P),
          (Ks.innerHTML = Qe),
          A(k, St, P),
          A(k, pt, P),
          a(pt, Ss),
          a(Ss, yn),
          a(Ss, ht),
          a(ht, bn),
          a(Ss, zn),
          a(Ss, Qs),
          a(Qs, wn),
          a(Ss, Dn),
          A(k, Lt, P),
          A(k, As, P),
          a(As, mt),
          a(mt, Pn),
          a(As, Tn),
          a(As, _t),
          a(_t, An),
          a(As, xn),
          a(As, Xs),
          a(Xs, In),
          a(Xs, Et),
          a(Et, $n),
          a(Xs, Cn),
          a(As, Vn),
          a(As, Zs),
          a(Zs, Hn),
          a(Zs, yt),
          a(yt, Sn),
          a(Zs, Ln),
          A(k, Mt, P),
          A(k, at, P),
          (at.innerHTML = Xe),
          A(k, Rt, P),
          Is(Ns, k, P),
          A(k, Ot, P),
          A(k, ct, P),
          a(ct, st),
          a(st, Mn),
          a(st, bt),
          a(bt, Rn),
          a(st, On),
          A(k, Gt, P),
          A(k, tt, P),
          (tt.innerHTML = Ze),
          A(k, Nt, P),
          A(k, it, P),
          a(it, rt),
          a(rt, nt),
          a(nt, Gn),
          a(rt, Nn),
          (jt = !0);
      },
      p(k, [P]) {
        const zt = {};
        P & 4 && (zt.$$scope = { dirty: P, ctx: k }), I.$set(zt);
        const et = {};
        P & 4 && (et.$$scope = { dirty: P, ctx: k }), Ms.$set(et);
        const wt = {};
        P & 4 && (wt.$$scope = { dirty: P, ctx: k }), Os.$set(wt);
        const Jt = {};
        P & 4 && (Jt.$$scope = { dirty: P, ctx: k }), Ns.$set(Jt);
      },
      i(k) {
        jt ||
          (ua(I.$$.fragment, k),
          ua(Ms.$$.fragment, k),
          ua(Os.$$.fragment, k),
          ua(Ns.$$.fragment, k),
          (jt = !0));
      },
      o(k) {
        Aa(I.$$.fragment, k),
          Aa(Ms.$$.fragment, k),
          Aa(Os.$$.fragment, k),
          Aa(Ns.$$.fragment, k),
          (jt = !1);
      },
      d(k) {
        k && t(s),
          k && t(x),
          k && t(z),
          k && t(Q),
          $s(I, k),
          k && t(m),
          k && t(w),
          k && t(rs),
          k && t(Fa),
          k && t(us),
          k && t(Na),
          k && t(Tt),
          k && t(Us),
          k && t(At),
          $s(Ms, k),
          k && t(xt),
          k && t(Rs),
          k && t(It),
          k && t(Bs),
          k && t($t),
          $s(Os, k),
          k && t(Ct),
          k && t(Gs),
          k && t(Vt),
          k && t(Fs),
          k && t(Ht),
          k && t(Ks),
          k && t(St),
          k && t(pt),
          k && t(Lt),
          k && t(As),
          k && t(Mt),
          k && t(at),
          k && t(Rt),
          $s(Ns, k),
          k && t(Ot),
          k && t(ct),
          k && t(Gt),
          k && t(tt),
          k && t(Nt),
          k && t(it);
      },
    }
  );
}
const Ro = {
    title: 'Ai2svelte',
    description: 'A shortcut for ai2svelte graphics.',
    slug: 'ai2svelte',
  },
  { title: Ye, description: Uo, slug: Bo } = Ro;
function Oo(_, s, g) {
  let { $$slots: i = {}, $$scope: c } = s;
  const d = async (E) => (await wo(`./ai2svelte/${E}.exclude.svelte`)).default;
  return (
    (_.$$set = (E) => {
      '$$scope' in E && g(2, (c = E.$$scope));
    }),
    [d, i, c]
  );
}
class Yo extends sn {
  constructor(s) {
    super();
    tn(this, s, Oo, Mo, nn, {});
  }
}
export { Yo as default, Ro as metadata };
