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
  b as p,
  f as P,
  o as Is,
  x as ua,
  E as on,
  F as pn,
  G as ln,
  u as Aa,
  r as Dt,
  w as Pt,
  t as i,
  g as r,
  H as a,
  h as lo,
  v as $s,
  _ as co,
  D as cn,
  $ as l,
  I as xa,
  a0 as io,
  a1 as ro,
  a2 as uo,
  a3 as ko,
} from './vendor-85b063f6.js';
import { D as rn } from './index-ccd418f9.js';
import './@component-docs_components-432303bb.js';
import { a as Un } from './paths-6758d194.js';
const fo = (E) => ({}),
  He = (E) => ({}),
  go = (E) => ({}),
  Se = (E) => ({}),
  vo = (E) => ({}),
  Le = (E) => ({});
function Me(E) {
  let s,
    f,
    d,
    c,
    u,
    m,
    y,
    b,
    D = E[6].title && Re(E),
    x = E[3] && Oe(E),
    z = E[6].hidden && Ge(E);
  var $ = E[0];
  function Q(_) {
    return { props: { onAiMounted: _[5] } };
  }
  $ && (u = new $(Q(E)));
  let I = E[6].notes && Ne(E);
  return {
    c() {
      D && D.c(),
        (s = v()),
        x && x.c(),
        (f = v()),
        z && z.c(),
        (d = v()),
        (c = n('div')),
        u && xs(u.$$.fragment),
        (m = v()),
        I && I.c(),
        (y = en()),
        this.h();
    },
    l(_) {
      D && D.l(_),
        (s = h(_)),
        x && x.l(_),
        (f = h(_)),
        z && z.l(_),
        (d = h(_)),
        (c = e(_, 'DIV', { class: !0, 'aria-hidden': !0 }));
      var w = o(c);
      u && Hs(u.$$.fragment, w),
        w.forEach(t),
        (m = h(_)),
        I && I.l(_),
        (y = en()),
        this.h();
    },
    h() {
      p(c, 'class', 'ai-wrapper'), p(c, 'aria-hidden', E[2]);
    },
    m(_, w) {
      D && D.m(_, w),
        P(_, s, w),
        x && x.m(_, w),
        P(_, f, w),
        z && z.m(_, w),
        P(_, d, w),
        P(_, c, w),
        u && Is(u, c, null),
        P(_, m, w),
        I && I.m(_, w),
        P(_, y, w),
        (b = !0);
    },
    p(_, w) {
      _[6].title
        ? D
          ? (D.p(_, w), w & 64 && ua(D, 1))
          : ((D = Re(_)), D.c(), ua(D, 1), D.m(s.parentNode, s))
        : D &&
          (Dt(),
          Aa(D, 1, 1, () => {
            D = null;
          }),
          Pt()),
        _[3]
          ? x
            ? x.p(_, w)
            : ((x = Oe(_)), x.c(), x.m(f.parentNode, f))
          : x && (x.d(1), (x = null)),
        _[6].hidden
          ? z
            ? (z.p(_, w), w & 64 && ua(z, 1))
            : ((z = Ge(_)), z.c(), ua(z, 1), z.m(d.parentNode, d))
          : z &&
            (Dt(),
            Aa(z, 1, 1, () => {
              z = null;
            }),
            Pt());
      const ma = {};
      if ((w & 32 && (ma.onAiMounted = _[5]), $ !== ($ = _[0]))) {
        if (u) {
          Dt();
          const Va = u;
          Aa(Va.$$.fragment, 1, 0, () => {
            $s(Va, 1);
          }),
            Pt();
        }
        $
          ? ((u = new $(Q(_))),
            xs(u.$$.fragment),
            ua(u.$$.fragment, 1),
            Is(u, c, null))
          : (u = null);
      } else $ && u.$set(ma);
      (!b || w & 4) && p(c, 'aria-hidden', _[2]),
        _[6].notes
          ? I
            ? (I.p(_, w), w & 64 && ua(I, 1))
            : ((I = Ne(_)), I.c(), ua(I, 1), I.m(y.parentNode, y))
          : I &&
            (Dt(),
            Aa(I, 1, 1, () => {
              I = null;
            }),
            Pt());
    },
    i(_) {
      b || (ua(D), ua(z), u && ua(u.$$.fragment, _), ua(I), (b = !0));
    },
    o(_) {
      Aa(D), Aa(z), u && Aa(u.$$.fragment, _), Aa(I), (b = !1);
    },
    d(_) {
      D && D.d(_),
        _ && t(s),
        x && x.d(_),
        _ && t(f),
        z && z.d(_),
        _ && t(d),
        _ && t(c),
        u && $s(u),
        _ && t(m),
        I && I.d(_),
        _ && t(y);
    },
  };
}
function Re(E) {
  let s, f;
  const d = E[8].title,
    c = cn(d, E, E[7], Le);
  return {
    c() {
      (s = n('div')), c && c.c(), this.h();
    },
    l(u) {
      s = e(u, 'DIV', { class: !0 });
      var m = o(s);
      c && c.l(m), m.forEach(t), this.h();
    },
    h() {
      p(s, 'class', 'chatter-container svelte-kfp841');
    },
    m(u, m) {
      P(u, s, m), c && c.m(s, null), (f = !0);
    },
    p(u, m) {
      c &&
        c.p &&
        (!f || m & 128) &&
        on(c, d, u, u[7], f ? ln(d, u[7], m, vo) : pn(u[7]), Le);
    },
    i(u) {
      f || (ua(c, u), (f = !0));
    },
    o(u) {
      Aa(c, u), (f = !1);
    },
    d(u) {
      u && t(s), c && c.d(u);
    },
  };
}
function Oe(E) {
  let s, f;
  return {
    c() {
      (s = n('p')), (f = i(E[3])), this.h();
    },
    l(d) {
      s = e(d, 'P', { class: !0 });
      var c = o(s);
      (f = r(c, E[3])), c.forEach(t), this.h();
    },
    h() {
      p(s, 'class', 'visually-hidden svelte-kfp841');
    },
    m(d, c) {
      P(d, s, c), a(s, f);
    },
    p(d, c) {
      c & 8 && lo(f, d[3]);
    },
    d(d) {
      d && t(s);
    },
  };
}
function Ge(E) {
  let s, f;
  const d = E[8].hidden,
    c = cn(d, E, E[7], Se);
  return {
    c() {
      (s = n('div')), c && c.c(), this.h();
    },
    l(u) {
      s = e(u, 'DIV', { class: !0 });
      var m = o(s);
      c && c.l(m), m.forEach(t), this.h();
    },
    h() {
      p(s, 'class', 'visually-hidden custom svelte-kfp841');
    },
    m(u, m) {
      P(u, s, m), c && c.m(s, null), (f = !0);
    },
    p(u, m) {
      c &&
        c.p &&
        (!f || m & 128) &&
        on(c, d, u, u[7], f ? ln(d, u[7], m, go) : pn(u[7]), Se);
    },
    i(u) {
      f || (ua(c, u), (f = !0));
    },
    o(u) {
      Aa(c, u), (f = !1);
    },
    d(u) {
      u && t(s), c && c.d(u);
    },
  };
}
function Ne(E) {
  let s, f;
  const d = E[8].notes,
    c = cn(d, E, E[7], He);
  return {
    c() {
      (s = n('div')), c && c.c(), this.h();
    },
    l(u) {
      s = e(u, 'DIV', { class: !0 });
      var m = o(s);
      c && c.l(m), m.forEach(t), this.h();
    },
    h() {
      p(s, 'class', 'chatter-container svelte-kfp841');
    },
    m(u, m) {
      P(u, s, m), c && c.m(s, null), (f = !0);
    },
    p(u, m) {
      c &&
        c.p &&
        (!f || m & 128) &&
        on(c, d, u, u[7], f ? ln(d, u[7], m, fo) : pn(u[7]), He);
    },
    i(u) {
      f || (ua(c, u), (f = !0));
    },
    o(u) {
      Aa(c, u), (f = !1);
    },
    d(u) {
      u && t(s), c && c.d(u);
    },
  };
}
function ho(E) {
  let s,
    f,
    d,
    c = ((E[2] && (E[3] || E[6].hidden)) || !E[2]) && Me(E);
  return {
    c() {
      (s = n('section')), c && c.c(), this.h();
    },
    l(u) {
      s = e(u, 'SECTION', { class: !0, id: !0 });
      var m = o(s);
      c && c.l(m), m.forEach(t), this.h();
    },
    h() {
      p(
        s,
        'class',
        (f = 'ai2svelte-container graphic ' + E[4] + ' svelte-kfp841')
      ),
        p(s, 'id', E[1]);
    },
    m(u, m) {
      P(u, s, m), c && c.m(s, null), (d = !0);
    },
    p(u, [m]) {
      (u[2] && (u[3] || u[6].hidden)) || !u[2]
        ? c
          ? (c.p(u, m), m & 76 && ua(c, 1))
          : ((c = Me(u)), c.c(), ua(c, 1), c.m(s, null))
        : c &&
          (Dt(),
          Aa(c, 1, 1, () => {
            c = null;
          }),
          Pt()),
        (!d ||
          (m & 16 &&
            f !==
              (f =
                'ai2svelte-container graphic ' + u[4] + ' svelte-kfp841'))) &&
          p(s, 'class', f),
        (!d || m & 2) && p(s, 'id', u[1]);
    },
    i(u) {
      d || (ua(c), (d = !0));
    },
    o(u) {
      Aa(c), (d = !1);
    },
    d(u) {
      u && t(s), c && c.d();
    },
  };
}
function mo(E, s, f) {
  let { $$slots: d = {}, $$scope: c } = s;
  const u = co(d);
  let { AiGraphic: m } = s,
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
    (E.$$set = ($) => {
      'AiGraphic' in $ && f(0, (m = $.AiGraphic)),
        'id' in $ && f(1, (y = $.id)),
        'ariaHidden' in $ && f(2, (b = $.ariaHidden)),
        'ariaDescription' in $ && f(3, (D = $.ariaDescription)),
        'size' in $ && f(4, (x = $.size)),
        'onAiMounted' in $ && f(5, (z = $.onAiMounted)),
        '$$scope' in $ && f(7, (c = $.$$scope));
    }),
    [m, y, b, D, x, z, u, c, d]
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
function je(E) {
  let s,
    f,
    d,
    c,
    u,
    m,
    y,
    b,
    D,
    x,
    z,
    $,
    Q,
    I,
    _,
    w,
    ma,
    Va,
    H,
    aa,
    Ia,
    ja,
    V,
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
    A,
    ta,
    La,
    qa,
    na,
    Ma,
    _a,
    L,
    ca,
    pa,
    da,
    C,
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
    Ca,
    Da,
    N,
    Y,
    ia,
    Wa,
    U,
    ra,
    Pa,
    la,
    R,
    K,
    Ka;
  return {
    c() {
      (s = n('div')),
        (f = n('div')),
        (d = v()),
        (c = n('div')),
        (m = v()),
        (y = n('div')),
        (b = n('p')),
        (D = i('Shake intensity')),
        (x = v()),
        (z = n('div')),
        ($ = n('p')),
        (Q = i('Light')),
        (I = v()),
        (_ = n('div')),
        (w = n('p')),
        (ma = i('Moderate')),
        (Va = v()),
        (H = n('div')),
        (aa = n('p')),
        (Ia = i('Cap-Haitien')),
        (ja = v()),
        (V = n('div')),
        (W = n('p')),
        (ya = i('Strong')),
        (Ha = v()),
        (S = n('div')),
        (sa = n('p')),
        (Ja = i('Very strong')),
        (ba = v()),
        (O = n('div')),
        (F = n('p')),
        (Sa = i('Gona\xEFves')),
        ($a = v()),
        (A = n('div')),
        (ta = n('p')),
        (La = i('Caribbean')),
        (qa = v()),
        (na = n('p')),
        (Ma = i('Sea')),
        (_a = v()),
        (L = n('div')),
        (ca = n('p')),
        (pa = i('HAITI')),
        (da = v()),
        (C = n('div')),
        (ea = n('p')),
        (Ra = i('Jeremie')),
        (Ua = v()),
        (M = n('div')),
        (ka = n('p')),
        (Ba = i('Port-au-Prince')),
        (X = v()),
        (J = n('div')),
        (fa = n('p')),
        (Ya = i('Epicenter')),
        (Z = v()),
        (G = n('div')),
        (oa = n('p')),
        (za = i('Jacmel')),
        (ga = v()),
        (j = n('div')),
        (wa = n('p')),
        (Oa = i('Les Cayes')),
        (B = v()),
        (q = n('div')),
        (Ca = n('p')),
        (Da = i('50 mi')),
        (N = v()),
        (Y = n('div')),
        (ia = n('p')),
        (Wa = i('Dominican')),
        (U = v()),
        (ra = n('p')),
        (Pa = i('Republic')),
        (la = v()),
        (R = n('div')),
        (K = n('p')),
        (Ka = i('50 km')),
        this.h();
    },
    l(va) {
      s = e(va, 'DIV', { id: !0, class: !0, style: !0 });
      var g = o(s);
      (f = e(g, 'DIV', { style: !0 })),
        o(f).forEach(t),
        (d = h(g)),
        (c = e(g, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        o(c).forEach(t),
        (m = h(g)),
        (y = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ds = o(y);
      b = e(ds, 'P', { class: !0 });
      var ks = o(b);
      (D = r(ks, 'Shake intensity')),
        ks.forEach(t),
        ds.forEach(t),
        (x = h(g)),
        (z = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ts = o(z);
      $ = e(ts, 'P', { class: !0 });
      var Ga = o($);
      (Q = r(Ga, 'Light')),
        Ga.forEach(t),
        ts.forEach(t),
        (I = h(g)),
        (_ = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qa = o(_);
      w = e(Qa, 'P', { class: !0 });
      var ns = o(w);
      (ma = r(ns, 'Moderate')),
        ns.forEach(t),
        Qa.forEach(t),
        (Va = h(g)),
        (H = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var fs = o(H);
      aa = e(fs, 'P', { class: !0 });
      var gs = o(aa);
      (Ia = r(gs, 'Cap-Haitien')),
        gs.forEach(t),
        fs.forEach(t),
        (ja = h(g)),
        (V = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var vs = o(V);
      W = e(vs, 'P', { class: !0 });
      var Ta = o(W);
      (ya = r(Ta, 'Strong')),
        Ta.forEach(t),
        vs.forEach(t),
        (Ha = h(g)),
        (S = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var hs = o(S);
      sa = e(hs, 'P', { class: !0 });
      var es = o(sa);
      (Ja = r(es, 'Very strong')),
        es.forEach(t),
        hs.forEach(t),
        (ba = h(g)),
        (O = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ms = o(O);
      F = e(ms, 'P', { class: !0 });
      var _s = o(F);
      (Sa = r(_s, 'Gona\xEFves')),
        _s.forEach(t),
        ms.forEach(t),
        ($a = h(g)),
        (A = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ea = o(A);
      ta = e(Ea, 'P', { class: !0 });
      var Es = o(ta);
      (La = r(Es, 'Caribbean')),
        Es.forEach(t),
        (qa = h(Ea)),
        (na = e(Ea, 'P', { class: !0 }));
      var ys = o(na);
      (Ma = r(ys, 'Sea')),
        ys.forEach(t),
        Ea.forEach(t),
        (_a = h(g)),
        (L = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var rs = o(L);
      ca = e(rs, 'P', { class: !0 });
      var Fa = o(ca);
      (pa = r(Fa, 'HAITI')),
        Fa.forEach(t),
        rs.forEach(t),
        (da = h(g)),
        (C = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Xa = o(C);
      ea = e(Xa, 'P', { class: !0 });
      var us = o(ea);
      (Ra = r(us, 'Jeremie')),
        us.forEach(t),
        Xa.forEach(t),
        (Ua = h(g)),
        (M = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Na = o(M);
      ka = e(Na, 'P', { class: !0 });
      var os = o(ka);
      (Ba = r(os, 'Port-au-Prince')),
        os.forEach(t),
        Na.forEach(t),
        (X = h(g)),
        (J = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var bs = o(J);
      fa = e(bs, 'P', { class: !0 });
      var Za = o(fa);
      (Ya = r(Za, 'Epicenter')),
        Za.forEach(t),
        bs.forEach(t),
        (Z = h(g)),
        (G = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ha = o(G);
      oa = e(ha, 'P', { class: !0 });
      var zs = o(oa);
      (za = r(zs, 'Jacmel')),
        zs.forEach(t),
        ha.forEach(t),
        (ga = h(g)),
        (j = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ps = o(j);
      wa = e(ps, 'P', { class: !0 });
      var ws = o(wa);
      (Oa = r(ws, 'Les Cayes')),
        ws.forEach(t),
        ps.forEach(t),
        (B = h(g)),
        (q = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var as = o(q);
      Ca = e(as, 'P', { class: !0 });
      var ls = o(Ca);
      (Da = r(ls, '50 mi')),
        ls.forEach(t),
        as.forEach(t),
        (N = h(g)),
        (Y = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var cs = o(Y);
      ia = e(cs, 'P', { class: !0 });
      var Ds = o(ia);
      (Wa = r(Ds, 'Dominican')),
        Ds.forEach(t),
        (U = h(cs)),
        (ra = e(cs, 'P', { class: !0 }));
      var is = o(ra);
      (Pa = r(is, 'Republic')),
        is.forEach(t),
        cs.forEach(t),
        (la = h(g)),
        (R = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ss = o(R);
      K = e(ss, 'P', { class: !0 });
      var Ps = o(K);
      (Ka = r(Ps, '50 km')),
        Ps.forEach(t),
        ss.forEach(t),
        g.forEach(t),
        this.h();
    },
    h() {
      l(f, 'padding', '0 0 91.7004% 0'),
        p(c, 'id', 'g-_ai-chart-xs-img'),
        p(c, 'class', 'g-aiImg svelte-zofauz'),
        p(c, 'alt', ''),
        p(
          c,
          'style',
          (u = `background-image: url(${Un}/images/graphics/ai-chart-xs.png);`)
        ),
        p(b, 'class', 'g-pstyle0 svelte-zofauz'),
        p(y, 'id', 'g-ai0-1'),
        p(y, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(y, 'top', '3.216%'),
        l(y, 'margin-top', '-7.7px'),
        l(y, 'left', '0.5952%'),
        l(y, 'width', '99px'),
        p($, 'class', 'g-pstyle0 svelte-zofauz'),
        p(z, 'id', 'g-ai0-2'),
        p(z, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(z, 'top', '9.8251%'),
        l(z, 'margin-top', '-7.7px'),
        l(z, 'left', '4.9821%'),
        l(z, 'width', '47px'),
        p(w, 'class', 'g-pstyle0 svelte-zofauz'),
        p(_, 'id', 'g-ai0-3'),
        p(_, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(_, 'top', '15.7733%'),
        l(_, 'margin-top', '-7.7px'),
        l(_, 'left', '4.9821%'),
        l(_, 'width', '69px'),
        p(aa, 'class', 'g-pstyle0 svelte-zofauz'),
        p(H, 'id', 'g-ai0-4'),
        p(H, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(H, 'top', '16.4343%'),
        l(H, 'margin-top', '-7.7px'),
        l(H, 'left', '79.0675%'),
        l(H, 'width', '82px'),
        p(W, 'class', 'g-pstyle0 svelte-zofauz'),
        p(V, 'id', 'g-ai0-5'),
        p(V, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(V, 'top', '21.7216%'),
        l(V, 'margin-top', '-7.7px'),
        l(V, 'left', '4.9821%'),
        l(V, 'width', '55px'),
        p(sa, 'class', 'g-pstyle0 svelte-zofauz'),
        p(S, 'id', 'g-ai0-6'),
        p(S, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(S, 'top', '28.0002%'),
        l(S, 'margin-top', '-7.7px'),
        l(S, 'left', '4.9821%'),
        l(S, 'width', '78px'),
        p(F, 'class', 'g-pstyle0 svelte-zofauz'),
        p(O, 'id', 'g-ai0-7'),
        p(O, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(O, 'top', '28.9916%'),
        l(O, 'margin-top', '-7.7px'),
        l(O, 'left', '62.2348%'),
        l(O, 'width', '68px'),
        p(ta, 'class', 'g-pstyle1 svelte-zofauz'),
        p(na, 'class', 'g-pstyle1 svelte-zofauz'),
        p(A, 'id', 'g-ai0-8'),
        p(A, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(A, 'top', '39.9449%'),
        l(A, 'margin-top', '-14.9px'),
        l(A, 'left', '28.714%'),
        l(A, 'margin-left', '-36.5px'),
        l(A, 'width', '73px'),
        p(ca, 'class', 'g-pstyle2 svelte-zofauz'),
        p(L, 'id', 'g-ai0-9'),
        p(L, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(L, 'top', '42.6579%'),
        l(L, 'margin-top', '-10.1px'),
        l(L, 'left', '68.5061%'),
        l(L, 'width', '77px'),
        p(ea, 'class', 'g-pstyle0 svelte-zofauz'),
        p(C, 'id', 'g-ai0-10'),
        p(C, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(C, 'top', '59.0632%'),
        l(C, 'margin-top', '-7.7px'),
        l(C, 'left', '11.2526%'),
        l(C, 'width', '63px'),
        p(ka, 'class', 'g-pstyle3 svelte-zofauz'),
        p(M, 'id', 'g-ai0-11'),
        p(M, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(M, 'top', '61.1155%'),
        l(M, 'margin-top', '-8.9px'),
        l(M, 'left', '70.5455%'),
        l(M, 'width', '106px'),
        p(fa, 'class', 'g-pstyle3 svelte-zofauz'),
        p(J, 'id', 'g-ai0-12'),
        p(J, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(J, 'top', '62.1069%'),
        l(J, 'margin-top', '-8.9px'),
        l(J, 'left', '32.6015%'),
        l(J, 'width', '77px'),
        p(oa, 'class', 'g-pstyle0 svelte-zofauz'),
        p(G, 'id', 'g-ai0-13'),
        p(G, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(G, 'top', '78.8906%'),
        l(G, 'margin-top', '-7.7px'),
        l(G, 'left', '63.9138%'),
        l(G, 'width', '58px'),
        p(wa, 'class', 'g-pstyle0 svelte-zofauz'),
        p(j, 'id', 'g-ai0-14'),
        p(j, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(j, 'top', '80.2124%'),
        l(j, 'margin-top', '-7.7px'),
        l(j, 'left', '22.5649%'),
        l(j, 'width', '71px'),
        p(Ca, 'class', 'g-pstyle0 svelte-zofauz'),
        p(q, 'id', 'g-ai0-15'),
        p(q, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(q, 'top', '87.8129%'),
        l(q, 'margin-top', '-7.7px'),
        l(q, 'left', '0.6179%'),
        l(q, 'width', '49px'),
        p(ia, 'class', 'g-pstyle4 svelte-zofauz'),
        p(ra, 'class', 'g-pstyle4 svelte-zofauz'),
        p(Y, 'id', 'g-ai0-16'),
        p(Y, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(Y, 'top', '91.0202%'),
        l(Y, 'margin-top', '-11.4px'),
        l(Y, 'right', '10.4418%'),
        l(Y, 'width', '70px'),
        p(K, 'class', 'g-pstyle0 svelte-zofauz'),
        p(R, 'id', 'g-ai0-17'),
        p(R, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(R, 'top', '93.7611%'),
        l(R, 'margin-top', '-7.7px'),
        l(R, 'left', '0.6179%'),
        l(R, 'width', '52px'),
        p(s, 'id', 'g-_ai-chart-xs'),
        p(s, 'class', 'g-artboard svelte-zofauz'),
        p(s, 'style', '');
    },
    m(va, g) {
      P(va, s, g),
        a(s, f),
        a(s, d),
        a(s, c),
        a(s, m),
        a(s, y),
        a(y, b),
        a(b, D),
        a(s, x),
        a(s, z),
        a(z, $),
        a($, Q),
        a(s, I),
        a(s, _),
        a(_, w),
        a(w, ma),
        a(s, Va),
        a(s, H),
        a(H, aa),
        a(aa, Ia),
        a(s, ja),
        a(s, V),
        a(V, W),
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
        a(s, A),
        a(A, ta),
        a(ta, La),
        a(A, qa),
        a(A, na),
        a(na, Ma),
        a(s, _a),
        a(s, L),
        a(L, ca),
        a(ca, pa),
        a(s, da),
        a(s, C),
        a(C, ea),
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
        a(q, Ca),
        a(Ca, Da),
        a(s, N),
        a(s, Y),
        a(Y, ia),
        a(ia, Wa),
        a(Y, U),
        a(Y, ra),
        a(ra, Pa),
        a(s, la),
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
function Je(E) {
  let s,
    f,
    d,
    c,
    u,
    m,
    y,
    b,
    D,
    x,
    z,
    $,
    Q,
    I,
    _,
    w,
    ma,
    Va,
    H,
    aa,
    Ia,
    ja,
    V,
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
    A,
    ta,
    La,
    qa,
    na,
    Ma,
    _a,
    L,
    ca,
    pa,
    da,
    C,
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
    Ca,
    Da,
    N,
    Y,
    ia,
    Wa,
    U,
    ra,
    Pa,
    la,
    R,
    K,
    Ka;
  return {
    c() {
      (s = n('div')),
        (f = n('div')),
        (d = v()),
        (c = n('div')),
        (m = v()),
        (y = n('div')),
        (b = n('p')),
        (D = i('Shake intensity')),
        (x = v()),
        (z = n('div')),
        ($ = n('p')),
        (Q = i('Light')),
        (I = v()),
        (_ = n('div')),
        (w = n('p')),
        (ma = i('Moderate')),
        (Va = v()),
        (H = n('div')),
        (aa = n('p')),
        (Ia = i('Cap-Haitien')),
        (ja = v()),
        (V = n('div')),
        (W = n('p')),
        (ya = i('Strong')),
        (Ha = v()),
        (S = n('div')),
        (sa = n('p')),
        (Ja = i('Very strong')),
        (ba = v()),
        (O = n('div')),
        (F = n('p')),
        (Sa = i('Gona\xEFves')),
        ($a = v()),
        (A = n('div')),
        (ta = n('p')),
        (La = i('Caribbean')),
        (qa = v()),
        (na = n('p')),
        (Ma = i('Sea')),
        (_a = v()),
        (L = n('div')),
        (ca = n('p')),
        (pa = i('HAITI')),
        (da = v()),
        (C = n('div')),
        (ea = n('p')),
        (Ra = i('Jeremie')),
        (Ua = v()),
        (M = n('div')),
        (ka = n('p')),
        (Ba = i('Port-au-Prince')),
        (X = v()),
        (J = n('div')),
        (fa = n('p')),
        (Ya = i('Epicenter')),
        (Z = v()),
        (G = n('div')),
        (oa = n('p')),
        (za = i('Dominican')),
        (ga = v()),
        (j = n('p')),
        (wa = i('Republic')),
        (Oa = v()),
        (B = n('div')),
        (q = n('p')),
        (Ca = i('Jacmel')),
        (Da = v()),
        (N = n('div')),
        (Y = n('p')),
        (ia = i('Les Cayes')),
        (Wa = v()),
        (U = n('div')),
        (ra = n('p')),
        (Pa = i('50 mi')),
        (la = v()),
        (R = n('div')),
        (K = n('p')),
        (Ka = i('50 km')),
        this.h();
    },
    l(va) {
      s = e(va, 'DIV', { id: !0, class: !0, style: !0 });
      var g = o(s);
      (f = e(g, 'DIV', { style: !0 })),
        o(f).forEach(t),
        (d = h(g)),
        (c = e(g, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        o(c).forEach(t),
        (m = h(g)),
        (y = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ds = o(y);
      b = e(ds, 'P', { class: !0 });
      var ks = o(b);
      (D = r(ks, 'Shake intensity')),
        ks.forEach(t),
        ds.forEach(t),
        (x = h(g)),
        (z = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ts = o(z);
      $ = e(ts, 'P', { class: !0 });
      var Ga = o($);
      (Q = r(Ga, 'Light')),
        Ga.forEach(t),
        ts.forEach(t),
        (I = h(g)),
        (_ = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qa = o(_);
      w = e(Qa, 'P', { class: !0 });
      var ns = o(w);
      (ma = r(ns, 'Moderate')),
        ns.forEach(t),
        Qa.forEach(t),
        (Va = h(g)),
        (H = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var fs = o(H);
      aa = e(fs, 'P', { class: !0 });
      var gs = o(aa);
      (Ia = r(gs, 'Cap-Haitien')),
        gs.forEach(t),
        fs.forEach(t),
        (ja = h(g)),
        (V = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var vs = o(V);
      W = e(vs, 'P', { class: !0 });
      var Ta = o(W);
      (ya = r(Ta, 'Strong')),
        Ta.forEach(t),
        vs.forEach(t),
        (Ha = h(g)),
        (S = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var hs = o(S);
      sa = e(hs, 'P', { class: !0 });
      var es = o(sa);
      (Ja = r(es, 'Very strong')),
        es.forEach(t),
        hs.forEach(t),
        (ba = h(g)),
        (O = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ms = o(O);
      F = e(ms, 'P', { class: !0 });
      var _s = o(F);
      (Sa = r(_s, 'Gona\xEFves')),
        _s.forEach(t),
        ms.forEach(t),
        ($a = h(g)),
        (A = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ea = o(A);
      ta = e(Ea, 'P', { class: !0 });
      var Es = o(ta);
      (La = r(Es, 'Caribbean')),
        Es.forEach(t),
        (qa = h(Ea)),
        (na = e(Ea, 'P', { class: !0 }));
      var ys = o(na);
      (Ma = r(ys, 'Sea')),
        ys.forEach(t),
        Ea.forEach(t),
        (_a = h(g)),
        (L = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var rs = o(L);
      ca = e(rs, 'P', { class: !0 });
      var Fa = o(ca);
      (pa = r(Fa, 'HAITI')),
        Fa.forEach(t),
        rs.forEach(t),
        (da = h(g)),
        (C = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Xa = o(C);
      ea = e(Xa, 'P', { class: !0 });
      var us = o(ea);
      (Ra = r(us, 'Jeremie')),
        us.forEach(t),
        Xa.forEach(t),
        (Ua = h(g)),
        (M = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Na = o(M);
      ka = e(Na, 'P', { class: !0 });
      var os = o(ka);
      (Ba = r(os, 'Port-au-Prince')),
        os.forEach(t),
        Na.forEach(t),
        (X = h(g)),
        (J = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var bs = o(J);
      fa = e(bs, 'P', { class: !0 });
      var Za = o(fa);
      (Ya = r(Za, 'Epicenter')),
        Za.forEach(t),
        bs.forEach(t),
        (Z = h(g)),
        (G = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ha = o(G);
      oa = e(ha, 'P', { class: !0 });
      var zs = o(oa);
      (za = r(zs, 'Dominican')),
        zs.forEach(t),
        (ga = h(ha)),
        (j = e(ha, 'P', { class: !0 }));
      var ps = o(j);
      (wa = r(ps, 'Republic')),
        ps.forEach(t),
        ha.forEach(t),
        (Oa = h(g)),
        (B = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ws = o(B);
      q = e(ws, 'P', { class: !0 });
      var as = o(q);
      (Ca = r(as, 'Jacmel')),
        as.forEach(t),
        ws.forEach(t),
        (Da = h(g)),
        (N = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ls = o(N);
      Y = e(ls, 'P', { class: !0 });
      var cs = o(Y);
      (ia = r(cs, 'Les Cayes')),
        cs.forEach(t),
        ls.forEach(t),
        (Wa = h(g)),
        (U = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ds = o(U);
      ra = e(Ds, 'P', { class: !0 });
      var is = o(ra);
      (Pa = r(is, '50 mi')),
        is.forEach(t),
        Ds.forEach(t),
        (la = h(g)),
        (R = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ss = o(R);
      K = e(ss, 'P', { class: !0 });
      var Ps = o(K);
      (Ka = r(Ps, '50 km')),
        Ps.forEach(t),
        ss.forEach(t),
        g.forEach(t),
        this.h();
    },
    h() {
      l(f, 'padding', '0 0 82.703% 0'),
        p(c, 'id', 'g-_ai-chart-sm-img'),
        p(c, 'class', 'g-aiImg svelte-zofauz'),
        p(c, 'alt', ''),
        p(
          c,
          'style',
          (u = `background-image: url(${Un}/images/graphics/ai-chart-sm.png);`)
        ),
        p(b, 'class', 'g-pstyle0 svelte-zofauz'),
        p(y, 'id', 'g-ai1-1'),
        p(y, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(y, 'top', '3.8773%'),
        l(y, 'margin-top', '-9.4px'),
        l(y, 'left', '0.3278%'),
        l(y, 'width', '111px'),
        p($, 'class', 'g-pstyle0 svelte-zofauz'),
        p(z, 'id', 'g-ai1-2'),
        p(z, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(z, 'top', '9.0933%'),
        l(z, 'margin-top', '-9.4px'),
        l(z, 'left', '3.0258%'),
        l(z, 'width', '52px'),
        p(w, 'class', 'g-pstyle0 svelte-zofauz'),
        p(_, 'id', 'g-ai1-3'),
        p(_, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(_, 'top', '13.5979%'),
        l(_, 'margin-top', '-9.4px'),
        l(_, 'left', '3.0259%'),
        l(_, 'width', '77px'),
        p(aa, 'class', 'g-pstyle0 svelte-zofauz'),
        p(H, 'id', 'g-ai1-4'),
        p(H, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(H, 'top', '16.6801%'),
        l(H, 'margin-top', '-9.4px'),
        l(H, 'left', '70.3255%'),
        l(H, 'width', '92px'),
        p(W, 'class', 'g-pstyle0 svelte-zofauz'),
        p(V, 'id', 'g-ai1-5'),
        p(V, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(V, 'top', '18.3397%'),
        l(V, 'margin-top', '-9.4px'),
        l(V, 'left', '3.0258%'),
        l(V, 'width', '61px'),
        p(sa, 'class', 'g-pstyle0 svelte-zofauz'),
        p(S, 'id', 'g-ai1-6'),
        p(S, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(S, 'top', '22.6073%'),
        l(S, 'margin-top', '-9.4px'),
        l(S, 'left', '3.0258%'),
        l(S, 'width', '88px'),
        p(F, 'class', 'g-pstyle0 svelte-zofauz'),
        p(O, 'id', 'g-ai1-7'),
        p(O, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(O, 'top', '28.5344%'),
        l(O, 'margin-top', '-9.4px'),
        l(O, 'left', '55.9181%'),
        l(O, 'width', '76px'),
        p(ta, 'class', 'g-pstyle1 svelte-zofauz'),
        p(na, 'class', 'g-pstyle1 svelte-zofauz'),
        p(A, 'id', 'g-ai1-8'),
        p(A, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(A, 'top', '38.8091%'),
        l(A, 'margin-top', '-17.7px'),
        l(A, 'left', '27.2818%'),
        l(A, 'margin-left', '-41px'),
        l(A, 'width', '82px'),
        p(ca, 'class', 'g-pstyle2 svelte-zofauz'),
        p(L, 'id', 'g-ai1-9'),
        p(L, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(L, 'top', '39.9724%'),
        l(L, 'margin-top', '-8.6px'),
        l(L, 'left', '61.2858%'),
        l(L, 'width', '67px'),
        p(ea, 'class', 'g-pstyle0 svelte-zofauz'),
        p(C, 'id', 'g-ai1-10'),
        p(C, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(C, 'top', '56.985%'),
        l(C, 'margin-top', '-9.4px'),
        l(C, 'left', '12.2815%'),
        l(C, 'width', '69px'),
        p(ka, 'class', 'g-pstyle3 svelte-zofauz'),
        p(M, 'id', 'g-ai1-11'),
        p(M, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(M, 'top', '59.1569%'),
        l(M, 'margin-top', '-9.5px'),
        l(M, 'left', '63.0314%'),
        l(M, 'width', '112px'),
        p(fa, 'class', 'g-pstyle3 svelte-zofauz'),
        p(J, 'id', 'g-ai1-12'),
        p(J, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(J, 'top', '60.1053%'),
        l(J, 'margin-top', '-9.5px'),
        l(J, 'left', '30.5543%'),
        l(J, 'width', '81px'),
        p(oa, 'class', 'g-pstyle4 svelte-zofauz'),
        p(j, 'class', 'g-pstyle4 svelte-zofauz'),
        p(G, 'id', 'g-ai1-13'),
        p(G, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(G, 'top', '62.7194%'),
        l(G, 'margin-top', '-16.5px'),
        l(G, 'left', '91.2282%'),
        l(G, 'margin-left', '-57px'),
        l(G, 'width', '114px'),
        p(q, 'class', 'g-pstyle0 svelte-zofauz'),
        p(B, 'id', 'g-ai1-14'),
        p(B, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(B, 'top', '75.4778%'),
        l(B, 'margin-top', '-9.4px'),
        l(B, 'left', '57.3552%'),
        l(B, 'width', '64px'),
        p(Y, 'class', 'g-pstyle0 svelte-zofauz'),
        p(N, 'id', 'g-ai1-15'),
        p(N, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(N, 'top', '76.6632%'),
        l(N, 'margin-top', '-9.4px'),
        l(N, 'left', '21.9639%'),
        l(N, 'width', '79px'),
        p(ra, 'class', 'g-pstyle5 svelte-zofauz'),
        p(U, 'id', 'g-ai1-16'),
        p(U, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(U, 'top', '85.5251%'),
        l(U, 'margin-top', '-7.7px'),
        l(U, 'left', '0.1344%'),
        l(U, 'width', '49px'),
        p(K, 'class', 'g-pstyle5 svelte-zofauz'),
        p(R, 'id', 'g-ai1-17'),
        p(R, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(R, 'top', '90.0297%'),
        l(R, 'margin-top', '-7.7px'),
        l(R, 'left', '0.1344%'),
        l(R, 'width', '52px'),
        p(s, 'id', 'g-_ai-chart-sm'),
        p(s, 'class', 'g-artboard svelte-zofauz'),
        p(s, 'style', '');
    },
    m(va, g) {
      P(va, s, g),
        a(s, f),
        a(s, d),
        a(s, c),
        a(s, m),
        a(s, y),
        a(y, b),
        a(b, D),
        a(s, x),
        a(s, z),
        a(z, $),
        a($, Q),
        a(s, I),
        a(s, _),
        a(_, w),
        a(w, ma),
        a(s, Va),
        a(s, H),
        a(H, aa),
        a(aa, Ia),
        a(s, ja),
        a(s, V),
        a(V, W),
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
        a(s, A),
        a(A, ta),
        a(ta, La),
        a(A, qa),
        a(A, na),
        a(na, Ma),
        a(s, _a),
        a(s, L),
        a(L, ca),
        a(ca, pa),
        a(s, da),
        a(s, C),
        a(C, ea),
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
        a(q, Ca),
        a(s, Da),
        a(s, N),
        a(N, Y),
        a(Y, ia),
        a(s, Wa),
        a(s, U),
        a(U, ra),
        a(ra, Pa),
        a(s, la),
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
function qe(E) {
  let s,
    f,
    d,
    c,
    u,
    m,
    y,
    b,
    D,
    x,
    z,
    $,
    Q,
    I,
    _,
    w,
    ma,
    Va,
    H,
    aa,
    Ia,
    ja,
    V,
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
    A,
    ta,
    La,
    qa,
    na,
    Ma,
    _a,
    L,
    ca,
    pa,
    da,
    C,
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
    Ca,
    Da,
    N,
    Y,
    ia,
    Wa,
    U,
    ra,
    Pa,
    la,
    R,
    K,
    Ka;
  return {
    c() {
      (s = n('div')),
        (f = n('div')),
        (d = v()),
        (c = n('div')),
        (m = v()),
        (y = n('div')),
        (b = n('p')),
        (D = i('Shake intensity')),
        (x = v()),
        (z = n('div')),
        ($ = n('p')),
        (Q = i('Light')),
        (I = v()),
        (_ = n('div')),
        (w = n('p')),
        (ma = i('Moderate')),
        (Va = v()),
        (H = n('div')),
        (aa = n('p')),
        (Ia = i('Cap-Haitien')),
        (ja = v()),
        (V = n('div')),
        (W = n('p')),
        (ya = i('Strong')),
        (Ha = v()),
        (S = n('div')),
        (sa = n('p')),
        (Ja = i('Very strong')),
        (ba = v()),
        (O = n('div')),
        (F = n('p')),
        (Sa = i('Gona\xEFves')),
        ($a = v()),
        (A = n('div')),
        (ta = n('p')),
        (La = i('Caribbean')),
        (qa = v()),
        (na = n('p')),
        (Ma = i('Sea')),
        (_a = v()),
        (L = n('div')),
        (ca = n('p')),
        (pa = i('HAITI')),
        (da = v()),
        (C = n('div')),
        (ea = n('p')),
        (Ra = i('Dominican')),
        (Ua = v()),
        (M = n('p')),
        (ka = i('Republic')),
        (Ba = v()),
        (X = n('div')),
        (J = n('p')),
        (fa = i('Jeremie')),
        (Ya = v()),
        (Z = n('div')),
        (G = n('p')),
        (oa = i('Epicenter')),
        (za = v()),
        (ga = n('div')),
        (j = n('p')),
        (wa = i('Port-au-Prince')),
        (Oa = v()),
        (B = n('div')),
        (q = n('p')),
        (Ca = i('Jacmel')),
        (Da = v()),
        (N = n('div')),
        (Y = n('p')),
        (ia = i('Les Cayes')),
        (Wa = v()),
        (U = n('div')),
        (ra = n('p')),
        (Pa = i('50 mi')),
        (la = v()),
        (R = n('div')),
        (K = n('p')),
        (Ka = i('50 km')),
        this.h();
    },
    l(va) {
      s = e(va, 'DIV', { id: !0, class: !0, style: !0 });
      var g = o(s);
      (f = e(g, 'DIV', { style: !0 })),
        o(f).forEach(t),
        (d = h(g)),
        (c = e(g, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        o(c).forEach(t),
        (m = h(g)),
        (y = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ds = o(y);
      b = e(ds, 'P', { class: !0 });
      var ks = o(b);
      (D = r(ks, 'Shake intensity')),
        ks.forEach(t),
        ds.forEach(t),
        (x = h(g)),
        (z = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ts = o(z);
      $ = e(ts, 'P', { class: !0 });
      var Ga = o($);
      (Q = r(Ga, 'Light')),
        Ga.forEach(t),
        ts.forEach(t),
        (I = h(g)),
        (_ = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qa = o(_);
      w = e(Qa, 'P', { class: !0 });
      var ns = o(w);
      (ma = r(ns, 'Moderate')),
        ns.forEach(t),
        Qa.forEach(t),
        (Va = h(g)),
        (H = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var fs = o(H);
      aa = e(fs, 'P', { class: !0 });
      var gs = o(aa);
      (Ia = r(gs, 'Cap-Haitien')),
        gs.forEach(t),
        fs.forEach(t),
        (ja = h(g)),
        (V = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var vs = o(V);
      W = e(vs, 'P', { class: !0 });
      var Ta = o(W);
      (ya = r(Ta, 'Strong')),
        Ta.forEach(t),
        vs.forEach(t),
        (Ha = h(g)),
        (S = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var hs = o(S);
      sa = e(hs, 'P', { class: !0 });
      var es = o(sa);
      (Ja = r(es, 'Very strong')),
        es.forEach(t),
        hs.forEach(t),
        (ba = h(g)),
        (O = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ms = o(O);
      F = e(ms, 'P', { class: !0 });
      var _s = o(F);
      (Sa = r(_s, 'Gona\xEFves')),
        _s.forEach(t),
        ms.forEach(t),
        ($a = h(g)),
        (A = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ea = o(A);
      ta = e(Ea, 'P', { class: !0 });
      var Es = o(ta);
      (La = r(Es, 'Caribbean')),
        Es.forEach(t),
        (qa = h(Ea)),
        (na = e(Ea, 'P', { class: !0 }));
      var ys = o(na);
      (Ma = r(ys, 'Sea')),
        ys.forEach(t),
        Ea.forEach(t),
        (_a = h(g)),
        (L = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var rs = o(L);
      ca = e(rs, 'P', { class: !0 });
      var Fa = o(ca);
      (pa = r(Fa, 'HAITI')),
        Fa.forEach(t),
        rs.forEach(t),
        (da = h(g)),
        (C = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Xa = o(C);
      ea = e(Xa, 'P', { class: !0 });
      var us = o(ea);
      (Ra = r(us, 'Dominican')),
        us.forEach(t),
        (Ua = h(Xa)),
        (M = e(Xa, 'P', { class: !0 }));
      var Na = o(M);
      (ka = r(Na, 'Republic')),
        Na.forEach(t),
        Xa.forEach(t),
        (Ba = h(g)),
        (X = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var os = o(X);
      J = e(os, 'P', { class: !0 });
      var bs = o(J);
      (fa = r(bs, 'Jeremie')),
        bs.forEach(t),
        os.forEach(t),
        (Ya = h(g)),
        (Z = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Za = o(Z);
      G = e(Za, 'P', { class: !0 });
      var ha = o(G);
      (oa = r(ha, 'Epicenter')),
        ha.forEach(t),
        Za.forEach(t),
        (za = h(g)),
        (ga = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var zs = o(ga);
      j = e(zs, 'P', { class: !0 });
      var ps = o(j);
      (wa = r(ps, 'Port-au-Prince')),
        ps.forEach(t),
        zs.forEach(t),
        (Oa = h(g)),
        (B = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ws = o(B);
      q = e(ws, 'P', { class: !0 });
      var as = o(q);
      (Ca = r(as, 'Jacmel')),
        as.forEach(t),
        ws.forEach(t),
        (Da = h(g)),
        (N = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ls = o(N);
      Y = e(ls, 'P', { class: !0 });
      var cs = o(Y);
      (ia = r(cs, 'Les Cayes')),
        cs.forEach(t),
        ls.forEach(t),
        (Wa = h(g)),
        (U = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ds = o(U);
      ra = e(Ds, 'P', { class: !0 });
      var is = o(ra);
      (Pa = r(is, '50 mi')),
        is.forEach(t),
        Ds.forEach(t),
        (la = h(g)),
        (R = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ss = o(R);
      K = e(ss, 'P', { class: !0 });
      var Ps = o(K);
      (Ka = r(Ps, '50 km')),
        Ps.forEach(t),
        ss.forEach(t),
        g.forEach(t),
        this.h();
    },
    h() {
      l(f, 'padding', '0 0 79.6009% 0'),
        p(c, 'id', 'g-_ai-chart-md-img'),
        p(c, 'class', 'g-aiImg svelte-zofauz'),
        p(c, 'alt', ''),
        p(
          c,
          'style',
          (u = `background-image: url(${Un}/images/graphics/ai-chart-md.png);`)
        ),
        p(b, 'class', 'g-pstyle0 svelte-zofauz'),
        p(y, 'id', 'g-ai2-1'),
        p(y, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(y, 'top', '2.3515%'),
        l(y, 'margin-top', '-9.4px'),
        l(y, 'left', '0.3608%'),
        l(y, 'width', '111px'),
        p($, 'class', 'g-pstyle0 svelte-zofauz'),
        p(z, 'id', 'g-ai2-2'),
        p(z, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(z, 'top', '7.6811%'),
        l(z, 'margin-top', '-9.4px'),
        l(z, 'left', '2.6603%'),
        l(z, 'width', '52px'),
        p(w, 'class', 'g-pstyle0 svelte-zofauz'),
        p(_, 'id', 'g-ai2-3'),
        p(_, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(_, 'top', '12.2494%'),
        l(_, 'margin-top', '-9.4px'),
        l(_, 'left', '2.6604%'),
        l(_, 'width', '77px'),
        p(aa, 'class', 'g-pstyle0 svelte-zofauz'),
        p(H, 'id', 'g-ai2-4'),
        p(H, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(H, 'top', '15.4852%'),
        l(H, 'margin-top', '-9.4px'),
        l(H, 'left', '70.3606%'),
        l(H, 'width', '92px'),
        p(W, 'class', 'g-pstyle0 svelte-zofauz'),
        p(V, 'id', 'g-ai2-5'),
        p(V, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(V, 'top', '17.1983%'),
        l(V, 'margin-top', '-9.4px'),
        l(V, 'left', '2.6603%'),
        l(V, 'width', '61px'),
        p(sa, 'class', 'g-pstyle0 svelte-zofauz'),
        p(S, 'id', 'g-ai2-6'),
        p(S, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(S, 'top', '21.7666%'),
        l(S, 'margin-top', '-9.4px'),
        l(S, 'left', '2.6603%'),
        l(S, 'width', '88px'),
        p(F, 'class', 'g-pstyle0 svelte-zofauz'),
        p(O, 'id', 'g-ai2-7'),
        p(O, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(O, 'top', '27.6672%'),
        l(O, 'margin-top', '-9.4px'),
        l(O, 'left', '55.993%'),
        l(O, 'width', '76px'),
        p(ta, 'class', 'g-pstyle1 svelte-zofauz'),
        p(na, 'class', 'g-pstyle1 svelte-zofauz'),
        p(A, 'id', 'g-ai2-8'),
        p(A, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(A, 'top', '38.0099%'),
        l(A, 'margin-top', '-17.7px'),
        l(A, 'left', '27.2388%'),
        l(A, 'margin-left', '-41px'),
        l(A, 'width', '82px'),
        p(ca, 'class', 'g-pstyle2 svelte-zofauz'),
        p(L, 'id', 'g-ai2-9'),
        p(L, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(L, 'top', '42.7626%'),
        l(L, 'margin-top', '-10.7px'),
        l(L, 'left', '62.8914%'),
        l(L, 'width', '80px'),
        p(ea, 'class', 'g-pstyle3 svelte-zofauz'),
        p(M, 'class', 'g-pstyle3 svelte-zofauz'),
        p(C, 'id', 'g-ai2-10'),
        p(C, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(C, 'top', '50.0029%'),
        l(C, 'margin-top', '-17.7px'),
        l(C, 'left', '92.295%'),
        l(C, 'margin-left', '-60.5px'),
        l(C, 'width', '121px'),
        p(J, 'class', 'g-pstyle0 svelte-zofauz'),
        p(X, 'id', 'g-ai2-11'),
        p(X, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(X, 'top', '57.3608%'),
        l(X, 'margin-top', '-9.4px'),
        l(X, 'left', '12.2815%'),
        l(X, 'width', '69px'),
        p(G, 'class', 'g-pstyle4 svelte-zofauz'),
        p(Z, 'id', 'g-ai2-12'),
        p(Z, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(Z, 'top', '60.2742%'),
        l(Z, 'margin-top', '-10.7px'),
        l(Z, 'left', '30.6995%'),
        l(Z, 'width', '89px'),
        p(j, 'class', 'g-pstyle4 svelte-zofauz'),
        p(ga, 'id', 'g-ai2-13'),
        p(ga, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(ga, 'top', '62.5583%'),
        l(ga, 'margin-top', '-10.7px'),
        l(ga, 'left', '66.3403%'),
        l(ga, 'width', '125px'),
        p(q, 'class', 'g-pstyle0 svelte-zofauz'),
        p(B, 'id', 'g-ai2-14'),
        p(B, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(B, 'top', '75.6338%'),
        l(B, 'margin-top', '-9.4px'),
        l(B, 'left', '57.8174%'),
        l(B, 'width', '64px'),
        p(Y, 'class', 'g-pstyle0 svelte-zofauz'),
        p(N, 'id', 'g-ai2-15'),
        p(N, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(N, 'top', '77.3469%'),
        l(N, 'margin-top', '-9.4px'),
        l(N, 'left', '22.5239%'),
        l(N, 'width', '79px'),
        p(ra, 'class', 'g-pstyle5 svelte-zofauz'),
        p(U, 'id', 'g-ai2-16'),
        p(U, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(U, 'top', '86.936%'),
        l(U, 'margin-top', '-7.7px'),
        l(U, 'left', '0.1678%'),
        l(U, 'width', '49px'),
        p(K, 'class', 'g-pstyle5 svelte-zofauz'),
        p(R, 'id', 'g-ai2-17'),
        p(R, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(R, 'top', '91.5043%'),
        l(R, 'margin-top', '-7.7px'),
        l(R, 'left', '0.1678%'),
        l(R, 'width', '52px'),
        p(s, 'id', 'g-_ai-chart-md'),
        p(s, 'class', 'g-artboard svelte-zofauz'),
        p(s, 'style', '');
    },
    m(va, g) {
      P(va, s, g),
        a(s, f),
        a(s, d),
        a(s, c),
        a(s, m),
        a(s, y),
        a(y, b),
        a(b, D),
        a(s, x),
        a(s, z),
        a(z, $),
        a($, Q),
        a(s, I),
        a(s, _),
        a(_, w),
        a(w, ma),
        a(s, Va),
        a(s, H),
        a(H, aa),
        a(aa, Ia),
        a(s, ja),
        a(s, V),
        a(V, W),
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
        a(s, A),
        a(A, ta),
        a(ta, La),
        a(A, qa),
        a(A, na),
        a(na, Ma),
        a(s, _a),
        a(s, L),
        a(L, ca),
        a(ca, pa),
        a(s, da),
        a(s, C),
        a(C, ea),
        a(ea, Ra),
        a(C, Ua),
        a(C, M),
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
        a(q, Ca),
        a(s, Da),
        a(s, N),
        a(N, Y),
        a(Y, ia),
        a(s, Wa),
        a(s, U),
        a(U, ra),
        a(ra, Pa),
        a(s, la),
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
function _o(E) {
  let s,
    f,
    d,
    c,
    u = E[0] && E[0] >= 0 && E[0] < 510 && je(),
    m = E[0] && E[0] >= 510 && E[0] < 660 && Je(),
    y = E[0] && E[0] >= 660 && qe();
  return {
    c() {
      (s = n('div')),
        u && u.c(),
        (f = v()),
        m && m.c(),
        (d = v()),
        y && y.c(),
        this.h();
    },
    l(b) {
      s = e(b, 'DIV', { id: !0, class: !0 });
      var D = o(s);
      u && u.l(D),
        (f = h(D)),
        m && m.l(D),
        (d = h(D)),
        y && y.l(D),
        D.forEach(t),
        this.h();
    },
    h() {
      p(s, 'id', 'g-_ai-chart-box'),
        p(s, 'class', 'svelte-zofauz'),
        io(() => E[1].call(s));
    },
    m(b, D) {
      P(b, s, D),
        u && u.m(s, null),
        a(s, f),
        m && m.m(s, null),
        a(s, d),
        y && y.m(s, null),
        (c = ro(s, E[1].bind(s)));
    },
    p(b, [D]) {
      b[0] && b[0] >= 0 && b[0] < 510
        ? u
          ? u.p(b, D)
          : ((u = je()), u.c(), u.m(s, f))
        : u && (u.d(1), (u = null)),
        b[0] && b[0] >= 510 && b[0] < 660
          ? m
            ? m.p(b, D)
            : ((m = Je()), m.c(), m.m(s, d))
          : m && (m.d(1), (m = null)),
        b[0] && b[0] >= 660
          ? y
            ? y.p(b, D)
            : ((y = qe()), y.c(), y.m(s, null))
          : y && (y.d(1), (y = null));
    },
    i: xa,
    o: xa,
    d(b) {
      b && t(s), u && u.d(), m && m.d(), y && y.d(), c();
    },
  };
}
function Eo(E, s, f) {
  let d = null;
  function c() {
    (d = this.clientWidth), f(0, d);
  }
  return [d, c];
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
function bo(E) {
  let s,
    f,
    d,
    c,
    u,
    m,
    y,
    b,
    D,
    x,
    z,
    $,
    Q,
    I,
    _,
    w,
    ma,
    Va,
    H,
    aa,
    Ia,
    ja,
    V,
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
    A,
    ta,
    La,
    qa,
    na,
    Ma,
    _a,
    L,
    ca,
    pa,
    da,
    C,
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
    Ca,
    Da,
    N,
    Y,
    ia,
    Wa,
    U,
    ra,
    Pa,
    la;
  return {
    c() {
      (s = n('table')),
        (f = n('thead')),
        (d = n('tr')),
        (c = n('th')),
        (u = i('Date ')),
        (m = n('th')),
        (y = i(`S&P 500
      `)),
        (b = n('th')),
        (D = i('Dow ')),
        (x = n('th')),
        (z = i('Nasdaq')),
        ($ = v()),
        (Q = n('tbody')),
        (I = n('tr')),
        (_ = n('td')),
        (w = i('December 31, 2021')),
        (ma = n('td')),
        (Va = i('0%')),
        (H = n('td')),
        (aa = i('0')),
        (Ia = n('td')),
        (ja = i('0%')),
        (V = n('tr')),
        (W = n('td')),
        (ya = i('January 3, 2022')),
        (Ha = n('td')),
        (S = i('1%')),
        (sa = n('td')),
        (Ja = i('1')),
        (ba = n('td')),
        (O = i('1%')),
        (F = n('tr')),
        (Sa = n('td')),
        ($a = i('January 4, 2022')),
        (A = n('td')),
        (ta = i('1%')),
        (La = n('td')),
        (qa = i('1')),
        (na = n('td')),
        (Ma = i('\u22120%')),
        (_a = n('tr')),
        (L = n('td')),
        (ca = i('January 5, 2022')),
        (pa = n('td')),
        (da = i('\u22121%')),
        (C = n('td')),
        (ea = i('0')),
        (Ra = n('td')),
        (Ua = i('\u22123%')),
        (M = n('tr')),
        (ka = n('td')),
        (Ba = i('January 6, 2022')),
        (X = n('td')),
        (J = i('\u22121%')),
        (fa = n('td')),
        (Ya = i('\u22120')),
        (Z = n('td')),
        (G = i('\u22124%')),
        (oa = n('tr')),
        (za = n('td')),
        (ga = i('January 7, 2022')),
        (j = n('td')),
        (wa = i('\u22122%')),
        (Oa = n('td')),
        (B = i('\u22120')),
        (q = n('td')),
        (Ca = i('\u22125%')),
        (Da = n('tr')),
        (N = n('td')),
        (Y = i('January 10, 2022')),
        (ia = n('td')),
        (Wa = i('\u22122%')),
        (U = n('td')),
        (ra = i('\u22121')),
        (Pa = n('td')),
        (la = i('\u22124%')),
        this.h();
    },
    l(R) {
      s = e(R, 'TABLE', { class: !0 });
      var K = o(s);
      f = e(K, 'THEAD', {});
      var Ka = o(f);
      d = e(Ka, 'TR', {});
      var va = o(d);
      c = e(va, 'TH', { 'data-column': !0, 'data-row': !0 });
      var g = o(c);
      (u = r(g, 'Date ')),
        g.forEach(t),
        (m = e(va, 'TH', { 'data-column': !0, 'data-row': !0 }));
      var ds = o(m);
      (y = r(
        ds,
        `S&P 500
      `
      )),
        ds.forEach(t),
        (b = e(va, 'TH', { 'data-column': !0, 'data-row': !0 }));
      var ks = o(b);
      (D = r(ks, 'Dow ')),
        ks.forEach(t),
        (x = e(va, 'TH', { 'data-column': !0, 'data-row': !0 }));
      var ts = o(x);
      (z = r(ts, 'Nasdaq')),
        ts.forEach(t),
        va.forEach(t),
        Ka.forEach(t),
        ($ = h(K)),
        (Q = e(K, 'TBODY', {}));
      var Ga = o(Q);
      I = e(Ga, 'TR', {});
      var Qa = o(I);
      _ = e(Qa, 'TD', {});
      var ns = o(_);
      (w = r(ns, 'December 31, 2021')), ns.forEach(t), (ma = e(Qa, 'TD', {}));
      var fs = o(ma);
      (Va = r(fs, '0%')), fs.forEach(t), (H = e(Qa, 'TD', {}));
      var gs = o(H);
      (aa = r(gs, '0')), gs.forEach(t), (Ia = e(Qa, 'TD', {}));
      var vs = o(Ia);
      (ja = r(vs, '0%')), vs.forEach(t), Qa.forEach(t), (V = e(Ga, 'TR', {}));
      var Ta = o(V);
      W = e(Ta, 'TD', {});
      var hs = o(W);
      (ya = r(hs, 'January 3, 2022')), hs.forEach(t), (Ha = e(Ta, 'TD', {}));
      var es = o(Ha);
      (S = r(es, '1%')), es.forEach(t), (sa = e(Ta, 'TD', {}));
      var ms = o(sa);
      (Ja = r(ms, '1')), ms.forEach(t), (ba = e(Ta, 'TD', {}));
      var _s = o(ba);
      (O = r(_s, '1%')), _s.forEach(t), Ta.forEach(t), (F = e(Ga, 'TR', {}));
      var Ea = o(F);
      Sa = e(Ea, 'TD', {});
      var Es = o(Sa);
      ($a = r(Es, 'January 4, 2022')), Es.forEach(t), (A = e(Ea, 'TD', {}));
      var ys = o(A);
      (ta = r(ys, '1%')), ys.forEach(t), (La = e(Ea, 'TD', {}));
      var rs = o(La);
      (qa = r(rs, '1')), rs.forEach(t), (na = e(Ea, 'TD', {}));
      var Fa = o(na);
      (Ma = r(Fa, '\u22120%')),
        Fa.forEach(t),
        Ea.forEach(t),
        (_a = e(Ga, 'TR', {}));
      var Xa = o(_a);
      L = e(Xa, 'TD', {});
      var us = o(L);
      (ca = r(us, 'January 5, 2022')), us.forEach(t), (pa = e(Xa, 'TD', {}));
      var Na = o(pa);
      (da = r(Na, '\u22121%')), Na.forEach(t), (C = e(Xa, 'TD', {}));
      var os = o(C);
      (ea = r(os, '0')), os.forEach(t), (Ra = e(Xa, 'TD', {}));
      var bs = o(Ra);
      (Ua = r(bs, '\u22123%')),
        bs.forEach(t),
        Xa.forEach(t),
        (M = e(Ga, 'TR', {}));
      var Za = o(M);
      ka = e(Za, 'TD', {});
      var ha = o(ka);
      (Ba = r(ha, 'January 6, 2022')), ha.forEach(t), (X = e(Za, 'TD', {}));
      var zs = o(X);
      (J = r(zs, '\u22121%')), zs.forEach(t), (fa = e(Za, 'TD', {}));
      var ps = o(fa);
      (Ya = r(ps, '\u22120')), ps.forEach(t), (Z = e(Za, 'TD', {}));
      var ws = o(Z);
      (G = r(ws, '\u22124%')),
        ws.forEach(t),
        Za.forEach(t),
        (oa = e(Ga, 'TR', {}));
      var as = o(oa);
      za = e(as, 'TD', {});
      var ls = o(za);
      (ga = r(ls, 'January 7, 2022')), ls.forEach(t), (j = e(as, 'TD', {}));
      var cs = o(j);
      (wa = r(cs, '\u22122%')), cs.forEach(t), (Oa = e(as, 'TD', {}));
      var Ds = o(Oa);
      (B = r(Ds, '\u22120')), Ds.forEach(t), (q = e(as, 'TD', {}));
      var is = o(q);
      (Ca = r(is, '\u22125%')),
        is.forEach(t),
        as.forEach(t),
        (Da = e(Ga, 'TR', {}));
      var ss = o(Da);
      N = e(ss, 'TD', {});
      var Ps = o(N);
      (Y = r(Ps, 'January 10, 2022')), Ps.forEach(t), (ia = e(ss, 'TD', {}));
      var Ls = o(ia);
      (Wa = r(Ls, '\u22122%')), Ls.forEach(t), (U = e(ss, 'TD', {}));
      var ot = o(U);
      (ra = r(ot, '\u22121')), ot.forEach(t), (Pa = e(ss, 'TD', {}));
      var pt = o(Pa);
      (la = r(pt, '\u22124%')),
        pt.forEach(t),
        ss.forEach(t),
        Ga.forEach(t),
        K.forEach(t),
        this.h();
    },
    h() {
      p(c, 'data-column', 'Date'),
        p(c, 'data-row', '-1'),
        p(m, 'data-column', 'S&P 500'),
        p(m, 'data-row', '-1'),
        p(b, 'data-column', 'Dow'),
        p(b, 'data-row', '-1'),
        p(x, 'data-column', 'Nasdaq'),
        p(x, 'data-row', '-1'),
        p(s, 'class', 'linechart-data');
    },
    m(R, K) {
      P(R, s, K),
        a(s, f),
        a(f, d),
        a(d, c),
        a(c, u),
        a(d, m),
        a(m, y),
        a(d, b),
        a(b, D),
        a(d, x),
        a(x, z),
        a(s, $),
        a(s, Q),
        a(Q, I),
        a(I, _),
        a(_, w),
        a(I, ma),
        a(ma, Va),
        a(I, H),
        a(H, aa),
        a(I, Ia),
        a(Ia, ja),
        a(Q, V),
        a(V, W),
        a(W, ya),
        a(V, Ha),
        a(Ha, S),
        a(V, sa),
        a(sa, Ja),
        a(V, ba),
        a(ba, O),
        a(Q, F),
        a(F, Sa),
        a(Sa, $a),
        a(F, A),
        a(A, ta),
        a(F, La),
        a(La, qa),
        a(F, na),
        a(na, Ma),
        a(Q, _a),
        a(_a, L),
        a(L, ca),
        a(_a, pa),
        a(pa, da),
        a(_a, C),
        a(C, ea),
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
        a(q, Ca),
        a(Q, Da),
        a(Da, N),
        a(N, Y),
        a(Da, ia),
        a(ia, Wa),
        a(Da, U),
        a(U, ra),
        a(Da, Pa),
        a(Pa, la);
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
function wo(E) {
  switch (E) {
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
      return new Promise(function (s, f) {
        (typeof queueMicrotask == 'function'
          ? queueMicrotask
          : setTimeout)(f.bind(null, new Error('Unknown variable dynamic import: ' + E)));
      });
  }
}
const Do = (E) => ({}),
  Be = (E) => ({ slot: 'hidden' });
function Po(E) {
  let s, f;
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
      l(d) {
        Hs(s.$$.fragment, d);
      },
      m(d, c) {
        Is(s, d, c), (f = !0);
      },
      p: xa,
      i(d) {
        f || (ua(s.$$.fragment, d), (f = !0));
      },
      o(d) {
        Aa(s.$$.fragment, d), (f = !1);
      },
      d(d) {
        $s(s, d);
      },
    }
  );
}
function To(E) {
  let s, f;
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
      l(d) {
        Hs(s.$$.fragment, d);
      },
      m(d, c) {
        Is(s, d, c), (f = !0);
      },
      p: xa,
      i(d) {
        f || (ua(s.$$.fragment, d), (f = !0));
      },
      o(d) {
        Aa(s.$$.fragment, d), (f = !1);
      },
      d(d) {
        $s(s, d);
      },
    }
  );
}
function Ao(E) {
  let s, f, d, c, u, m;
  return {
    c() {
      (s = n('div')),
        (f = n('h4')),
        (d = i('Earthquake in Haiti')),
        (c = v()),
        (u = n('p')),
        (m = i('A 7.0 magnitude earthquake struck the island on Tuesday.')),
        this.h();
    },
    l(y) {
      s = e(y, 'DIV', { slot: !0, class: !0 });
      var b = o(s);
      f = e(b, 'H4', { class: !0 });
      var D = o(f);
      (d = r(D, 'Earthquake in Haiti')),
        D.forEach(t),
        (c = h(b)),
        (u = e(b, 'P', {}));
      var x = o(u);
      (m = r(x, 'A 7.0 magnitude earthquake struck the island on Tuesday.')),
        x.forEach(t),
        b.forEach(t),
        this.h();
    },
    h() {
      p(f, 'class', 'svelte-xmoab3'),
        p(s, 'slot', 'title'),
        p(s, 'class', 'title svelte-xmoab3');
    },
    m(y, b) {
      P(y, s, b), a(s, f), a(f, d), a(s, c), a(s, u), a(u, m);
    },
    d(y) {
      y && t(s);
    },
  };
}
function xo(E) {
  let s, f, d, c, u, m;
  return {
    c() {
      (s = n('aside')),
        (f = n('p')),
        (d = i('Note: Data current as of Wednesday.')),
        (c = v()),
        (u = n('p')),
        (m = i('Source: USGIS')),
        this.h();
    },
    l(y) {
      s = e(y, 'ASIDE', { slot: !0 });
      var b = o(s);
      f = e(b, 'P', { class: !0 });
      var D = o(f);
      (d = r(D, 'Note: Data current as of Wednesday.')),
        D.forEach(t),
        (c = h(b)),
        (u = e(b, 'P', { class: !0 }));
      var x = o(u);
      (m = r(x, 'Source: USGIS')), x.forEach(t), b.forEach(t), this.h();
    },
    h() {
      p(f, 'class', 'note'), p(u, 'class', 'source'), p(s, 'slot', 'notes');
    },
    m(y, b) {
      P(y, s, b), a(s, f), a(f, d), a(s, c), a(s, u), a(u, m);
    },
    d(y) {
      y && t(s);
    },
  };
}
function Io(E) {
  let s, f;
  return (
    (s = new un({
      props: {
        AiGraphic: dn,
        id: 'ai-map',
        ariaHidden: !0,
        size: 'wide',
        ariaDescription:
          'A map of Haiti shows the epicenter of an earthquake in the southwest of the country.',
        $$slots: { notes: [xo], title: [Ao] },
        $$scope: { ctx: E },
      },
    })),
    {
      c() {
        xs(s.$$.fragment);
      },
      l(d) {
        Hs(s.$$.fragment, d);
      },
      m(d, c) {
        Is(s, d, c), (f = !0);
      },
      p(d, c) {
        const u = {};
        c & 4 && (u.$$scope = { dirty: c, ctx: d }), s.$set(u);
      },
      i(d) {
        f || (ua(s.$$.fragment, d), (f = !0));
      },
      o(d) {
        Aa(s.$$.fragment, d), (f = !1);
      },
      d(d) {
        $s(s, d);
      },
    }
  );
}
function $o(E) {
  return { c: xa, l: xa, m: xa, p: xa, i: xa, o: xa, d: xa };
}
function Vo(E) {
  let s, f;
  return (
    (s = new un({
      props: {
        AiGraphic: E[3],
        ariaDescription:
          'A map of Haiti shows the epicenter of an earthquake in the southwest of the country.',
        $$slots: { hidden: [Ho] },
        $$scope: { ctx: E },
      },
    })),
    {
      c() {
        xs(s.$$.fragment);
      },
      l(d) {
        Hs(s.$$.fragment, d);
      },
      m(d, c) {
        Is(s, d, c), (f = !0);
      },
      p(d, c) {
        const u = {};
        c & 4 && (u.$$scope = { dirty: c, ctx: d }), s.$set(u);
      },
      i(d) {
        f || (ua(s.$$.fragment, d), (f = !0));
      },
      o(d) {
        Aa(s.$$.fragment, d), (f = !1);
      },
      d(d) {
        $s(s, d);
      },
    }
  );
}
function Co(E) {
  let s, f;
  return (
    (s = new Ue({})),
    {
      c() {
        xs(s.$$.fragment);
      },
      l(d) {
        Hs(s.$$.fragment, d);
      },
      m(d, c) {
        Is(s, d, c), (f = !0);
      },
      i(d) {
        f || (ua(s.$$.fragment, d), (f = !0));
      },
      o(d) {
        Aa(s.$$.fragment, d), (f = !1);
      },
      d(d) {
        $s(s, d);
      },
    }
  );
}
function Ho(E) {
  let s;
  const f = E[1].default,
    d = cn(f, E, E[2], Be),
    c = d || Co();
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
        on(d, f, u, u[2], s ? ln(f, u[2], m, Do) : pn(u[2]), Be);
    },
    i(u) {
      s || (ua(c, u), (s = !0));
    },
    o(u) {
      Aa(c, u), (s = !1);
    },
    d(u) {
      c && c.d(u);
    },
  };
}
function So(E) {
  return { c: xa, l: xa, m: xa, p: xa, i: xa, o: xa, d: xa };
}
function Lo(E) {
  let s,
    f,
    d = {
      ctx: E,
      current: null,
      token: null,
      hasCatch: !1,
      pending: So,
      then: Vo,
      catch: $o,
      value: 3,
      blocks: [, , ,],
    };
  return (
    uo(E[0]('ai-linechart'), d),
    {
      c() {
        (s = en()), d.block.c();
      },
      l(c) {
        (s = en()), d.block.l(c);
      },
      m(c, u) {
        P(c, s, u),
          d.block.m(c, (d.anchor = u)),
          (d.mount = () => s.parentNode),
          (d.anchor = s),
          (f = !0);
      },
      p(c, u) {
        (E = c), ko(d, E, u);
      },
      i(c) {
        f || (ua(d.block), (f = !0));
      },
      o(c) {
        for (let u = 0; u < 3; u += 1) {
          const m = d.blocks[u];
          Aa(m);
        }
        f = !1;
      },
      d(c) {
        c && t(s), d.block.d(c), (d.token = null), (d = null);
      },
    }
  );
}
function Mo(E) {
  let s,
    f,
    d,
    c,
    u,
    m,
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
    _,
    w,
    ma,
    Va,
    H,
    aa,
    Ia,
    ja,
    V,
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
    A,
    ta,
    La,
    qa,
    na,
    Ma,
    _a,
    L,
    ca,
    pa,
    da,
    C,
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
    Ca,
    Da,
    N,
    Y,
    ia,
    Wa,
    U,
    ra,
    Pa,
    la,
    R,
    K,
    Ka,
    va,
    g,
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
    ps,
    ws,
    as,
    ls,
    cs,
    Ds,
    is,
    ss,
    Ps,
    Ls,
    ot,
    pt,
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
    $t,
    Os,
    Vt,
    Gs,
    vt,
    vn,
    hn,
    Ys,
    mn,
    Ws,
    _n,
    En,
    Ct,
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
    lt,
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
    Vn,
    Cn,
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
      props: { $$slots: { default: [Po] }, $$scope: { ctx: E } },
    })),
    (Ms = new rn({
      props: { $$slots: { default: [To] }, $$scope: { ctx: E } },
    })),
    (Os = new rn({
      props: { $$slots: { default: [Io] }, $$scope: { ctx: E } },
    })),
    (Ns = new rn({
      props: { $$slots: { default: [Lo] }, $$scope: { ctx: E } },
    })),
    {
      c() {
        (s = n('section')),
          (f = n('h2')),
          (d = i(Ye)),
          (c = v()),
          (u = n('p')),
          (m = i('Pass a component created by ')),
          (y = n('a')),
          (b = i('ai2svelte')),
          (D = i(
            ' to this component, which will wrap it in a graphics section tag.'
          )),
          (x = v()),
          (z = n('pre')),
          (Q = v()),
          xs(I.$$.fragment),
          (_ = v()),
          (w = n('section')),
          (ma = n('h2')),
          (Va = i('Accessibility props')),
          (H = v()),
          (aa = n('p')),
          (Ia = n('code')),
          (ja = i('ariaHidden')),
          (V = v()),
          (W = n('ul')),
          (ya = n('li')),
          (Ha = i('Set to ')),
          (S = n('code')),
          (sa = i('true')),
          (Ja = i(` by default, which means HTML text content in the
ai2svelte component are visible on the page but not read aloud by screen readers.
(Read more about aria-hidden elements `)),
          (ba = n('a')),
          (O = i('here')),
          (F = i('.)')),
          (Sa = v()),
          ($a = n('li')),
          (A = i('Set it to ')),
          (ta = n('code')),
          (La = i('false')),
          (qa = i(
            ' to make the screen reader read aloud HTML text content in ai2svelte.'
          )),
          (na = v()),
          (Ma = n('p')),
          (_a = n('code')),
          (L = i('ariaDescription')),
          (ca = v()),
          (pa = n('ul')),
          (da = n('li')),
          (C = i('If ')),
          (ea = n('code')),
          (Ra = i('ariaHidden')),
          (Ua = i(' is ')),
          (M = n('code')),
          (ka = i('true')),
          (Ba = i(', make sure you add an ')),
          (X = n('code')),
          (J = i('ariaDescription')),
          (fa = i(
            ', which is invisible on the page but is read aloud by screen readers.'
          )),
          (Ya = v()),
          (Z = n('li')),
          (G = i('This prop takes a string, like altText for an image.')),
          (oa = v()),
          (za = n('li')),
          (ga = i(
            'It should describe what the chart is showing and why it\u2019s important. This is helpful for:'
          )),
          (j = n('ul')),
          (wa = n('li')),
          (Oa = i(
            'Blind readers using screen-reading or Braille conversion software'
          )),
          (B = v()),
          (q = n('li')),
          (Ca = i(
            'All readers if the image is unavailable or takes too long to load'
          )),
          (Da = v()),
          (N = n('li')),
          (Y = i(
            'Read about writing aria description, also known as alt text, '
          )),
          (ia = n('a')),
          (Wa = i('here')),
          (U = i('.')),
          (ra = v()),
          (Pa = n('section')),
          (la = n('p')),
          (R = i('\u{1F6A8} ')),
          (K = n('strong')),
          (Ka = i('Important:')),
          (va = i(' If ')),
          (g = n('code')),
          (ds = i('ariaHidden')),
          (ks = i(' is ')),
          (ts = n('code')),
          (Ga = i('true')),
          (Qa = i(' but you are missing ')),
          (ns = n('code')),
          (fs = i('ariaDescription')),
          (gs = i(
            ' or some other special alternative for screen readers (more on this later), your graphic will be hidden from the page and you will see a warning in your console.'
          )),
          (vs = v()),
          (Ta = n('p')),
          (hs = i('Graphics kit users can set your ')),
          (es = n('code')),
          (ms = i('ariaHidden')),
          (_s = i(' prop and write your  ')),
          (Ea = n('code')),
          (Es = i('ariaDescription')),
          (ys = i(' in the google doc like this:')),
          (rs = v()),
          (Fa = n('pre')),
          (us = v()),
          (Na = n('section')),
          (os = n('h2')),
          (bs = i('Graphic width')),
          (Za = v()),
          (ha = n('p')),
          (zs = i(
            'Adjust the size of the graphic by passing a class name corresponding to one of our well widths: '
          )),
          (ps = n('code')),
          (ws = i('wide')),
          (as = i(', ')),
          (ls = n('code')),
          (cs = i('wider')),
          (Ds = i(', ')),
          (is = n('code')),
          (ss = i('widest')),
          (Ps = i(' or ')),
          (Ls = n('code')),
          (ot = i('fluid')),
          (pt = i('.')),
          (Tt = v()),
          (Us = n('pre')),
          (At = v()),
          xs(Ms.$$.fragment),
          (xt = v()),
          (Rs = n('section')),
          (ft = n('h2')),
          (kn = i('Chart title, description, source and note')),
          (fn = v()),
          (gt = n('p')),
          (gn = i('Add additional chart chatter through slots.')),
          (It = v()),
          (Bs = n('pre')),
          ($t = v()),
          xs(Os.$$.fragment),
          (Vt = v()),
          (Gs = n('section')),
          (vt = n('h2')),
          (vn = i('Using ArchieML google doc')),
          (hn = v()),
          (Ys = n('p')),
          (mn = i('You can use this component to layout AI graphics via an ')),
          (Ws = n('a')),
          (_n = i('ArchieML')),
          (En = i(
            '-formatted Google doc by using the following pattern to dynamically import an ai2svelte component:'
          )),
          (Ct = v()),
          (Fs = n('pre')),
          (Ht = v()),
          (Ks = n('pre')),
          (St = v()),
          (lt = n('section')),
          (Ss = n('p')),
          (yn = i('This comes with some restrictions, though. Be sure your ')),
          (ht = n('code')),
          (bn = i('fetchComponent')),
          (zn = i(' function follows ')),
          (Qs = n('a')),
          (wn = i('the limits on dynamic imports')),
          (Dn = i('.')),
          (Lt = v()),
          (As = n('section')),
          (mt = n('h2')),
          (Pn = i('Customising data for screen readers')),
          (Tn = v()),
          (_t = n('p')),
          (An =
            i(`Sometimes, in addition to or instead of adding an aria description for graphics,
we want to also provide a data table, a lengthier description with more complex element structure or something else.`)),
          (xn = v()),
          (Xs = n('p')),
          (In = i(
            'You can add custom information for screen readers only by using the '
          )),
          (Et = n('code')),
          ($n = i('hidden')),
          (Vn = i(' slot.')),
          (Cn = v()),
          (Zs = n('p')),
          (Hn = i('For example, for the line chart below, we can add a ')),
          (yt = n('strong')),
          (Sn = i('data table')),
          (Ln = i(' that helps screen-reader users navigate the data.')),
          (Mt = v()),
          (at = n('pre')),
          (Rt = v()),
          xs(Ns.$$.fragment),
          (Ot = v()),
          (ct = n('section')),
          (st = n('p')),
          (Mn = i('This is what ')),
          (bt = n('code')),
          (Rn = i('<SRDataTable/>')),
          (On = i(
            ' looks like. (You can make an HTML table using DataWrapper.)'
          )),
          (Gt = v()),
          (tt = n('pre')),
          (Nt = v()),
          (it = n('section')),
          (rt = n('p')),
          (nt = n('a')),
          (Gn = i('Read this')),
          (Nn = i(
            ' for more information on screen-reader data tables for charts.'
          )),
          this.h();
      },
      l(k) {
        s = e(k, 'SECTION', {});
        var T = o(s);
        f = e(T, 'H2', {});
        var zt = o(f);
        (d = r(zt, Ye)), zt.forEach(t), (c = h(T)), (u = e(T, 'P', {}));
        var et = o(u);
        (m = r(et, 'Pass a component created by ')),
          (y = e(et, 'A', { href: !0, rel: !0 }));
        var wt = o(y);
        (b = r(wt, 'ai2svelte')),
          wt.forEach(t),
          (D = r(
            et,
            ' to this component, which will wrap it in a graphics section tag.'
          )),
          et.forEach(t),
          T.forEach(t),
          (x = h(k)),
          (z = e(k, 'PRE', { class: !0 }));
        var Jt = o(z);
        Jt.forEach(t),
          (Q = h(k)),
          Hs(I.$$.fragment, k),
          (_ = h(k)),
          (w = e(k, 'SECTION', {}));
        var Ts = o(w);
        ma = e(Ts, 'H2', {});
        var Bn = o(ma);
        (Va = r(Bn, 'Accessibility props')),
          Bn.forEach(t),
          (H = h(Ts)),
          (aa = e(Ts, 'P', {}));
        var Yn = o(aa);
        Ia = e(Yn, 'CODE', {});
        var Wn = o(Ia);
        (ja = r(Wn, 'ariaHidden')),
          Wn.forEach(t),
          Yn.forEach(t),
          (V = h(Ts)),
          (W = e(Ts, 'UL', {}));
        var qt = o(W);
        ya = e(qt, 'LI', {});
        var ut = o(ya);
        (Ha = r(ut, 'Set to ')), (S = e(ut, 'CODE', {}));
        var Fn = o(S);
        (sa = r(Fn, 'true')),
          Fn.forEach(t),
          (Ja = r(
            ut,
            ` by default, which means HTML text content in the
ai2svelte component are visible on the page but not read aloud by screen readers.
(Read more about aria-hidden elements `
          )),
          (ba = e(ut, 'A', { href: !0, rel: !0 }));
        var Kn = o(ba);
        (O = r(Kn, 'here')),
          Kn.forEach(t),
          (F = r(ut, '.)')),
          ut.forEach(t),
          (Sa = h(qt)),
          ($a = e(qt, 'LI', {}));
        var Ut = o($a);
        (A = r(Ut, 'Set it to ')), (ta = e(Ut, 'CODE', {}));
        var Qn = o(ta);
        (La = r(Qn, 'false')),
          Qn.forEach(t),
          (qa = r(
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
        (L = r(Zn, 'ariaDescription')),
          Zn.forEach(t),
          Xn.forEach(t),
          (ca = h(Ts)),
          (pa = e(Ts, 'UL', {}));
        var js = o(pa);
        da = e(js, 'LI', {});
        var Js = o(da);
        (C = r(Js, 'If ')), (ea = e(Js, 'CODE', {}));
        var ae = o(ea);
        (Ra = r(ae, 'ariaHidden')),
          ae.forEach(t),
          (Ua = r(Js, ' is ')),
          (M = e(Js, 'CODE', {}));
        var se = o(M);
        (ka = r(se, 'true')),
          se.forEach(t),
          (Ba = r(Js, ', make sure you add an ')),
          (X = e(Js, 'CODE', {}));
        var te = o(X);
        (J = r(te, 'ariaDescription')),
          te.forEach(t),
          (fa = r(
            Js,
            ', which is invisible on the page but is read aloud by screen readers.'
          )),
          Js.forEach(t),
          (Ya = h(js)),
          (Z = e(js, 'LI', {}));
        var ne = o(Z);
        (G = r(ne, 'This prop takes a string, like altText for an image.')),
          ne.forEach(t),
          (oa = h(js)),
          (za = e(js, 'LI', {}));
        var jn = o(za);
        (ga = r(
          jn,
          'It should describe what the chart is showing and why it\u2019s important. This is helpful for:'
        )),
          (j = e(jn, 'UL', {}));
        var Bt = o(j);
        wa = e(Bt, 'LI', {});
        var ee = o(wa);
        (Oa = r(
          ee,
          'Blind readers using screen-reading or Braille conversion software'
        )),
          ee.forEach(t),
          (B = h(Bt)),
          (q = e(Bt, 'LI', {}));
        var oe = o(q);
        (Ca = r(
          oe,
          'All readers if the image is unavailable or takes too long to load'
        )),
          oe.forEach(t),
          Bt.forEach(t),
          jn.forEach(t),
          (Da = h(js)),
          (N = e(js, 'LI', {}));
        var Yt = o(N);
        (Y = r(
          Yt,
          'Read about writing aria description, also known as alt text, '
        )),
          (ia = e(Yt, 'A', { href: !0, rel: !0 }));
        var pe = o(ia);
        (Wa = r(pe, 'here')),
          pe.forEach(t),
          (U = r(Yt, '.')),
          Yt.forEach(t),
          js.forEach(t),
          (ra = h(Ts)),
          (Pa = e(Ts, 'SECTION', { class: !0 }));
        var le = o(Pa);
        la = e(le, 'P', {});
        var Vs = o(la);
        (R = r(Vs, '\u{1F6A8} ')), (K = e(Vs, 'STRONG', {}));
        var ce = o(K);
        (Ka = r(ce, 'Important:')),
          ce.forEach(t),
          (va = r(Vs, ' If ')),
          (g = e(Vs, 'CODE', {}));
        var ie = o(g);
        (ds = r(ie, 'ariaHidden')),
          ie.forEach(t),
          (ks = r(Vs, ' is ')),
          (ts = e(Vs, 'CODE', {}));
        var re = o(ts);
        (Ga = r(re, 'true')),
          re.forEach(t),
          (Qa = r(Vs, ' but you are missing ')),
          (ns = e(Vs, 'CODE', {}));
        var ue = o(ns);
        (fs = r(ue, 'ariaDescription')),
          ue.forEach(t),
          (gs = r(
            Vs,
            ' or some other special alternative for screen readers (more on this later), your graphic will be hidden from the page and you will see a warning in your console.'
          )),
          Vs.forEach(t),
          le.forEach(t),
          (vs = h(Ts)),
          (Ta = e(Ts, 'P', {}));
        var dt = o(Ta);
        (hs = r(dt, 'Graphics kit users can set your ')),
          (es = e(dt, 'CODE', {}));
        var de = o(es);
        (ms = r(de, 'ariaHidden')),
          de.forEach(t),
          (_s = r(dt, ' prop and write your  ')),
          (Ea = e(dt, 'CODE', {}));
        var ke = o(Ea);
        (Es = r(ke, 'ariaDescription')),
          ke.forEach(t),
          (ys = r(dt, ' in the google doc like this:')),
          dt.forEach(t),
          Ts.forEach(t),
          (rs = h(k)),
          (Fa = e(k, 'PRE', { class: !0 }));
        var ao = o(Fa);
        ao.forEach(t), (us = h(k)), (Na = e(k, 'SECTION', {}));
        var Wt = o(Na);
        os = e(Wt, 'H2', {});
        var fe = o(os);
        (bs = r(fe, 'Graphic width')),
          fe.forEach(t),
          (Za = h(Wt)),
          (ha = e(Wt, 'P', {}));
        var Cs = o(ha);
        (zs = r(
          Cs,
          'Adjust the size of the graphic by passing a class name corresponding to one of our well widths: '
        )),
          (ps = e(Cs, 'CODE', {}));
        var ge = o(ps);
        (ws = r(ge, 'wide')),
          ge.forEach(t),
          (as = r(Cs, ', ')),
          (ls = e(Cs, 'CODE', {}));
        var ve = o(ls);
        (cs = r(ve, 'wider')),
          ve.forEach(t),
          (Ds = r(Cs, ', ')),
          (is = e(Cs, 'CODE', {}));
        var he = o(is);
        (ss = r(he, 'widest')),
          he.forEach(t),
          (Ps = r(Cs, ' or ')),
          (Ls = e(Cs, 'CODE', {}));
        var me = o(Ls);
        (ot = r(me, 'fluid')),
          me.forEach(t),
          (pt = r(Cs, '.')),
          Cs.forEach(t),
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
        (kn = r(_e, 'Chart title, description, source and note')),
          _e.forEach(t),
          (fn = h(Ft)),
          (gt = e(Ft, 'P', {}));
        var Ee = o(gt);
        (gn = r(Ee, 'Add additional chart chatter through slots.')),
          Ee.forEach(t),
          Ft.forEach(t),
          (It = h(k)),
          (Bs = e(k, 'PRE', { class: !0 }));
        var to = o(Bs);
        to.forEach(t),
          ($t = h(k)),
          Hs(Os.$$.fragment, k),
          (Vt = h(k)),
          (Gs = e(k, 'SECTION', {}));
        var Kt = o(Gs);
        vt = e(Kt, 'H2', {});
        var ye = o(vt);
        (vn = r(ye, 'Using ArchieML google doc')),
          ye.forEach(t),
          (hn = h(Kt)),
          (Ys = e(Kt, 'P', {}));
        var Qt = o(Ys);
        (mn = r(
          Qt,
          'You can use this component to layout AI graphics via an '
        )),
          (Ws = e(Qt, 'A', { href: !0, rel: !0 }));
        var be = o(Ws);
        (_n = r(be, 'ArchieML')),
          be.forEach(t),
          (En = r(
            Qt,
            '-formatted Google doc by using the following pattern to dynamically import an ai2svelte component:'
          )),
          Qt.forEach(t),
          Kt.forEach(t),
          (Ct = h(k)),
          (Fs = e(k, 'PRE', { class: !0 }));
        var no = o(Fs);
        no.forEach(t), (Ht = h(k)), (Ks = e(k, 'PRE', { class: !0 }));
        var eo = o(Ks);
        eo.forEach(t), (St = h(k)), (lt = e(k, 'SECTION', {}));
        var ze = o(lt);
        Ss = e(ze, 'P', {});
        var kt = o(Ss);
        (yn = r(
          kt,
          'This comes with some restrictions, though. Be sure your '
        )),
          (ht = e(kt, 'CODE', {}));
        var we = o(ht);
        (bn = r(we, 'fetchComponent')),
          we.forEach(t),
          (zn = r(kt, ' function follows ')),
          (Qs = e(kt, 'A', { href: !0, rel: !0 }));
        var De = o(Qs);
        (wn = r(De, 'the limits on dynamic imports')),
          De.forEach(t),
          (Dn = r(kt, '.')),
          kt.forEach(t),
          ze.forEach(t),
          (Lt = h(k)),
          (As = e(k, 'SECTION', { class: !0 }));
        var qs = o(As);
        mt = e(qs, 'H2', {});
        var Pe = o(mt);
        (Pn = r(Pe, 'Customising data for screen readers')),
          Pe.forEach(t),
          (Tn = h(qs)),
          (_t = e(qs, 'P', {}));
        var Te = o(_t);
        (An = r(
          Te,
          `Sometimes, in addition to or instead of adding an aria description for graphics,
we want to also provide a data table, a lengthier description with more complex element structure or something else.`
        )),
          Te.forEach(t),
          (xn = h(qs)),
          (Xs = e(qs, 'P', {}));
        var Xt = o(Xs);
        (In = r(
          Xt,
          'You can add custom information for screen readers only by using the '
        )),
          (Et = e(Xt, 'CODE', {}));
        var Ae = o(Et);
        ($n = r(Ae, 'hidden')),
          Ae.forEach(t),
          (Vn = r(Xt, ' slot.')),
          Xt.forEach(t),
          (Cn = h(qs)),
          (Zs = e(qs, 'P', {}));
        var Zt = o(Zs);
        (Hn = r(Zt, 'For example, for the line chart below, we can add a ')),
          (yt = e(Zt, 'STRONG', {}));
        var xe = o(yt);
        (Sn = r(xe, 'data table')),
          xe.forEach(t),
          (Ln = r(Zt, ' that helps screen-reader users navigate the data.')),
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
        (Mn = r(an, 'This is what ')), (bt = e(an, 'CODE', {}));
        var $e = o(bt);
        (Rn = r($e, '<SRDataTable/>')),
          $e.forEach(t),
          (On = r(
            an,
            ' looks like. (You can make an HTML table using DataWrapper.)'
          )),
          an.forEach(t),
          Ie.forEach(t),
          (Gt = h(k)),
          (tt = e(k, 'PRE', { class: !0 }));
        var po = o(tt);
        po.forEach(t), (Nt = h(k)), (it = e(k, 'SECTION', {}));
        var Ve = o(it);
        rt = e(Ve, 'P', {});
        var Jn = o(rt);
        nt = e(Jn, 'A', { href: !0, rel: !0 });
        var Ce = o(nt);
        (Gn = r(Ce, 'Read this')),
          Ce.forEach(t),
          (Nn = r(
            Jn,
            ' for more information on screen-reader data tables for charts.'
          )),
          Jn.forEach(t),
          Ve.forEach(t),
          this.h();
      },
      h() {
        p(y, 'href', 'https://github.com/reuters-graphics/ai2svelte'),
          p(y, 'rel', 'nofollow'),
          p(z, 'class', 'language-svelte'),
          p(
            ba,
            'href',
            'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden'
          ),
          p(ba, 'rel', 'nofollow'),
          p(
            ia,
            'href',
            'https://medium.com/nightingale/writing-alt-text-for-data-visualization-2a218ef43f81'
          ),
          p(ia, 'rel', 'nofollow'),
          p(Pa, 'class', 'note'),
          p(Fa, 'class', 'language-bash'),
          p(Us, 'class', 'language-svelte'),
          p(Bs, 'class', 'language-svelte'),
          p(Ws, 'href', 'http://archieml.org/'),
          p(Ws, 'rel', 'nofollow'),
          p(Fs, 'class', 'language-bash'),
          p(Ks, 'class', 'language-svelte'),
          p(
            Qs,
            'href',
            'https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations'
          ),
          p(Qs, 'rel', 'nofollow'),
          p(As, 'class', 'pt-5'),
          p(at, 'class', 'language-svelte'),
          p(tt, 'class', 'language-svelte'),
          p(nt, 'href', 'https://accessibility.psu.edu/images/charts/'),
          p(nt, 'rel', 'nofollow');
      },
      m(k, T) {
        P(k, s, T),
          a(s, f),
          a(f, d),
          a(s, c),
          a(s, u),
          a(u, m),
          a(u, y),
          a(y, b),
          a(u, D),
          P(k, x, T),
          P(k, z, T),
          (z.innerHTML = $),
          P(k, Q, T),
          Is(I, k, T),
          P(k, _, T),
          P(k, w, T),
          a(w, ma),
          a(ma, Va),
          a(w, H),
          a(w, aa),
          a(aa, Ia),
          a(Ia, ja),
          a(w, V),
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
          a($a, A),
          a($a, ta),
          a(ta, La),
          a($a, qa),
          a(w, na),
          a(w, Ma),
          a(Ma, _a),
          a(_a, L),
          a(w, ca),
          a(w, pa),
          a(pa, da),
          a(da, C),
          a(da, ea),
          a(ea, Ra),
          a(da, Ua),
          a(da, M),
          a(M, ka),
          a(da, Ba),
          a(da, X),
          a(X, J),
          a(da, fa),
          a(pa, Ya),
          a(pa, Z),
          a(Z, G),
          a(pa, oa),
          a(pa, za),
          a(za, ga),
          a(za, j),
          a(j, wa),
          a(wa, Oa),
          a(j, B),
          a(j, q),
          a(q, Ca),
          a(pa, Da),
          a(pa, N),
          a(N, Y),
          a(N, ia),
          a(ia, Wa),
          a(N, U),
          a(w, ra),
          a(w, Pa),
          a(Pa, la),
          a(la, R),
          a(la, K),
          a(K, Ka),
          a(la, va),
          a(la, g),
          a(g, ds),
          a(la, ks),
          a(la, ts),
          a(ts, Ga),
          a(la, Qa),
          a(la, ns),
          a(ns, fs),
          a(la, gs),
          a(w, vs),
          a(w, Ta),
          a(Ta, hs),
          a(Ta, es),
          a(es, ms),
          a(Ta, _s),
          a(Ta, Ea),
          a(Ea, Es),
          a(Ta, ys),
          P(k, rs, T),
          P(k, Fa, T),
          (Fa.innerHTML = Xa),
          P(k, us, T),
          P(k, Na, T),
          a(Na, os),
          a(os, bs),
          a(Na, Za),
          a(Na, ha),
          a(ha, zs),
          a(ha, ps),
          a(ps, ws),
          a(ha, as),
          a(ha, ls),
          a(ls, cs),
          a(ha, Ds),
          a(ha, is),
          a(is, ss),
          a(ha, Ps),
          a(ha, Ls),
          a(Ls, ot),
          a(ha, pt),
          P(k, Tt, T),
          P(k, Us, T),
          (Us.innerHTML = We),
          P(k, At, T),
          Is(Ms, k, T),
          P(k, xt, T),
          P(k, Rs, T),
          a(Rs, ft),
          a(ft, kn),
          a(Rs, fn),
          a(Rs, gt),
          a(gt, gn),
          P(k, It, T),
          P(k, Bs, T),
          (Bs.innerHTML = Fe),
          P(k, $t, T),
          Is(Os, k, T),
          P(k, Vt, T),
          P(k, Gs, T),
          a(Gs, vt),
          a(vt, vn),
          a(Gs, hn),
          a(Gs, Ys),
          a(Ys, mn),
          a(Ys, Ws),
          a(Ws, _n),
          a(Ys, En),
          P(k, Ct, T),
          P(k, Fs, T),
          (Fs.innerHTML = Ke),
          P(k, Ht, T),
          P(k, Ks, T),
          (Ks.innerHTML = Qe),
          P(k, St, T),
          P(k, lt, T),
          a(lt, Ss),
          a(Ss, yn),
          a(Ss, ht),
          a(ht, bn),
          a(Ss, zn),
          a(Ss, Qs),
          a(Qs, wn),
          a(Ss, Dn),
          P(k, Lt, T),
          P(k, As, T),
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
          a(Xs, Vn),
          a(As, Cn),
          a(As, Zs),
          a(Zs, Hn),
          a(Zs, yt),
          a(yt, Sn),
          a(Zs, Ln),
          P(k, Mt, T),
          P(k, at, T),
          (at.innerHTML = Xe),
          P(k, Rt, T),
          Is(Ns, k, T),
          P(k, Ot, T),
          P(k, ct, T),
          a(ct, st),
          a(st, Mn),
          a(st, bt),
          a(bt, Rn),
          a(st, On),
          P(k, Gt, T),
          P(k, tt, T),
          (tt.innerHTML = Ze),
          P(k, Nt, T),
          P(k, it, T),
          a(it, rt),
          a(rt, nt),
          a(nt, Gn),
          a(rt, Nn),
          (jt = !0);
      },
      p(k, [T]) {
        const zt = {};
        T & 4 && (zt.$$scope = { dirty: T, ctx: k }), I.$set(zt);
        const et = {};
        T & 4 && (et.$$scope = { dirty: T, ctx: k }), Ms.$set(et);
        const wt = {};
        T & 4 && (wt.$$scope = { dirty: T, ctx: k }), Os.$set(wt);
        const Jt = {};
        T & 4 && (Jt.$$scope = { dirty: T, ctx: k }), Ns.$set(Jt);
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
          k && t(_),
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
          k && t(Vt),
          k && t(Gs),
          k && t(Ct),
          k && t(Fs),
          k && t(Ht),
          k && t(Ks),
          k && t(St),
          k && t(lt),
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
function Oo(E, s, f) {
  let { $$slots: d = {}, $$scope: c } = s;
  const u = async (m) => (await wo(`./ai2svelte/${m}.exclude.svelte`)).default;
  return (
    (E.$$set = (m) => {
      '$$scope' in m && f(2, (c = m.$$scope));
    }),
    [u, d, c]
  );
}
class Yo extends sn {
  constructor(s) {
    super();
    tn(this, s, Oo, Mo, nn, {});
  }
}
export { Yo as default, Ro as metadata };
