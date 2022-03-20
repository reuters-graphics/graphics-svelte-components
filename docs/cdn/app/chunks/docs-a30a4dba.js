import { _ as oe } from './preload-helper-438f94a3.js';
import {
  S as cn,
  i as rn,
  s as un,
  k as v,
  e as n,
  j as Is,
  l as dn,
  n as h,
  c as e,
  a as p,
  m as Hs,
  d as t,
  b as o,
  f as P,
  o as $s,
  x as ua,
  E as kn,
  F as fn,
  G as gn,
  u as Aa,
  r as $t,
  w as Ct,
  t as c,
  g as i,
  H as a,
  h as Pp,
  v as Cs,
  _ as Tp,
  D as vn,
  $ as l,
  I as xa,
  a0 as Ap,
  a1 as xp,
  a2 as Ip,
  a3 as $p,
} from './vendor-362b926b.js';
import { D as hn } from './index-b98e0497.js';
import './@component-docs_components-a126c5f0.js';
import { a as le } from './paths-6758d194.js';
const Cp = (E) => ({}),
  Ze = (E) => ({}),
  Sp = (E) => ({}),
  ap = (E) => ({}),
  Vp = (E) => ({}),
  sp = (E) => ({});
function tp(E) {
  let s,
    f,
    d,
    r,
    u,
    m,
    y,
    b,
    D = E[6].title && np(E),
    x = E[3] && ep(E),
    z = E[6].hidden && pp(E);
  var $ = E[0];
  function Q(_) {
    return { props: { onAiMounted: _[5] } };
  }
  $ && (u = new $(Q(E)));
  let I = E[6].notes && op(E);
  return {
    c() {
      D && D.c(),
        (s = v()),
        x && x.c(),
        (f = v()),
        z && z.c(),
        (d = v()),
        (r = n('div')),
        u && Is(u.$$.fragment),
        (m = v()),
        I && I.c(),
        (y = dn()),
        this.h();
    },
    l(_) {
      D && D.l(_),
        (s = h(_)),
        x && x.l(_),
        (f = h(_)),
        z && z.l(_),
        (d = h(_)),
        (r = e(_, 'DIV', { class: !0, 'aria-hidden': !0 }));
      var w = p(r);
      u && Hs(u.$$.fragment, w),
        w.forEach(t),
        (m = h(_)),
        I && I.l(_),
        (y = dn()),
        this.h();
    },
    h() {
      o(r, 'class', 'ai-wrapper'), o(r, 'aria-hidden', E[2]);
    },
    m(_, w) {
      D && D.m(_, w),
        P(_, s, w),
        x && x.m(_, w),
        P(_, f, w),
        z && z.m(_, w),
        P(_, d, w),
        P(_, r, w),
        u && $s(u, r, null),
        P(_, m, w),
        I && I.m(_, w),
        P(_, y, w),
        (b = !0);
    },
    p(_, w) {
      _[6].title
        ? D
          ? (D.p(_, w), w & 64 && ua(D, 1))
          : ((D = np(_)), D.c(), ua(D, 1), D.m(s.parentNode, s))
        : D &&
          ($t(),
          Aa(D, 1, 1, () => {
            D = null;
          }),
          Ct()),
        _[3]
          ? x
            ? x.p(_, w)
            : ((x = ep(_)), x.c(), x.m(f.parentNode, f))
          : x && (x.d(1), (x = null)),
        _[6].hidden
          ? z
            ? (z.p(_, w), w & 64 && ua(z, 1))
            : ((z = pp(_)), z.c(), ua(z, 1), z.m(d.parentNode, d))
          : z &&
            ($t(),
            Aa(z, 1, 1, () => {
              z = null;
            }),
            Ct());
      const ma = {};
      if ((w & 32 && (ma.onAiMounted = _[5]), $ !== ($ = _[0]))) {
        if (u) {
          $t();
          const Ca = u;
          Aa(Ca.$$.fragment, 1, 0, () => {
            Cs(Ca, 1);
          }),
            Ct();
        }
        $
          ? ((u = new $(Q(_))),
            Is(u.$$.fragment),
            ua(u.$$.fragment, 1),
            $s(u, r, null))
          : (u = null);
      } else $ && u.$set(ma);
      (!b || w & 4) && o(r, 'aria-hidden', _[2]),
        _[6].notes
          ? I
            ? (I.p(_, w), w & 64 && ua(I, 1))
            : ((I = op(_)), I.c(), ua(I, 1), I.m(y.parentNode, y))
          : I &&
            ($t(),
            Aa(I, 1, 1, () => {
              I = null;
            }),
            Ct());
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
        _ && t(r),
        u && Cs(u),
        _ && t(m),
        I && I.d(_),
        _ && t(y);
    },
  };
}
function np(E) {
  let s, f;
  const d = E[8].title,
    r = vn(d, E, E[7], sp);
  return {
    c() {
      (s = n('div')), r && r.c(), this.h();
    },
    l(u) {
      s = e(u, 'DIV', { class: !0 });
      var m = p(s);
      r && r.l(m), m.forEach(t), this.h();
    },
    h() {
      o(s, 'class', 'chatter-container svelte-kfp841');
    },
    m(u, m) {
      P(u, s, m), r && r.m(s, null), (f = !0);
    },
    p(u, m) {
      r &&
        r.p &&
        (!f || m & 128) &&
        kn(r, d, u, u[7], f ? gn(d, u[7], m, Vp) : fn(u[7]), sp);
    },
    i(u) {
      f || (ua(r, u), (f = !0));
    },
    o(u) {
      Aa(r, u), (f = !1);
    },
    d(u) {
      u && t(s), r && r.d(u);
    },
  };
}
function ep(E) {
  let s, f;
  return {
    c() {
      (s = n('p')), (f = c(E[3])), this.h();
    },
    l(d) {
      s = e(d, 'P', { class: !0 });
      var r = p(s);
      (f = i(r, E[3])), r.forEach(t), this.h();
    },
    h() {
      o(s, 'class', 'visually-hidden svelte-kfp841');
    },
    m(d, r) {
      P(d, s, r), a(s, f);
    },
    p(d, r) {
      r & 8 && Pp(f, d[3]);
    },
    d(d) {
      d && t(s);
    },
  };
}
function pp(E) {
  let s, f;
  const d = E[8].hidden,
    r = vn(d, E, E[7], ap);
  return {
    c() {
      (s = n('div')), r && r.c(), this.h();
    },
    l(u) {
      s = e(u, 'DIV', { class: !0 });
      var m = p(s);
      r && r.l(m), m.forEach(t), this.h();
    },
    h() {
      o(s, 'class', 'visually-hidden custom svelte-kfp841');
    },
    m(u, m) {
      P(u, s, m), r && r.m(s, null), (f = !0);
    },
    p(u, m) {
      r &&
        r.p &&
        (!f || m & 128) &&
        kn(r, d, u, u[7], f ? gn(d, u[7], m, Sp) : fn(u[7]), ap);
    },
    i(u) {
      f || (ua(r, u), (f = !0));
    },
    o(u) {
      Aa(r, u), (f = !1);
    },
    d(u) {
      u && t(s), r && r.d(u);
    },
  };
}
function op(E) {
  let s, f;
  const d = E[8].notes,
    r = vn(d, E, E[7], Ze);
  return {
    c() {
      (s = n('div')), r && r.c(), this.h();
    },
    l(u) {
      s = e(u, 'DIV', { class: !0 });
      var m = p(s);
      r && r.l(m), m.forEach(t), this.h();
    },
    h() {
      o(s, 'class', 'chatter-container svelte-kfp841');
    },
    m(u, m) {
      P(u, s, m), r && r.m(s, null), (f = !0);
    },
    p(u, m) {
      r &&
        r.p &&
        (!f || m & 128) &&
        kn(r, d, u, u[7], f ? gn(d, u[7], m, Cp) : fn(u[7]), Ze);
    },
    i(u) {
      f || (ua(r, u), (f = !0));
    },
    o(u) {
      Aa(r, u), (f = !1);
    },
    d(u) {
      u && t(s), r && r.d(u);
    },
  };
}
function Hp(E) {
  let s,
    f,
    d,
    r = ((E[2] && (E[3] || E[6].hidden)) || !E[2]) && tp(E);
  return {
    c() {
      (s = n('section')), r && r.c(), this.h();
    },
    l(u) {
      s = e(u, 'SECTION', { class: !0, id: !0 });
      var m = p(s);
      r && r.l(m), m.forEach(t), this.h();
    },
    h() {
      o(
        s,
        'class',
        (f = 'ai2svelte-container graphic ' + E[4] + ' svelte-kfp841')
      ),
        o(s, 'id', E[1]);
    },
    m(u, m) {
      P(u, s, m), r && r.m(s, null), (d = !0);
    },
    p(u, [m]) {
      (u[2] && (u[3] || u[6].hidden)) || !u[2]
        ? r
          ? (r.p(u, m), m & 76 && ua(r, 1))
          : ((r = tp(u)), r.c(), ua(r, 1), r.m(s, null))
        : r &&
          ($t(),
          Aa(r, 1, 1, () => {
            r = null;
          }),
          Ct()),
        (!d ||
          (m & 16 &&
            f !==
              (f =
                'ai2svelte-container graphic ' + u[4] + ' svelte-kfp841'))) &&
          o(s, 'class', f),
        (!d || m & 2) && o(s, 'id', u[1]);
    },
    i(u) {
      d || (ua(r), (d = !0));
    },
    o(u) {
      Aa(r), (d = !1);
    },
    d(u) {
      u && t(s), r && r.d();
    },
  };
}
function jp(E, s, f) {
  let { $$slots: d = {}, $$scope: r } = s;
  const u = Tp(d);
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
        '$$scope' in $ && f(7, (r = $.$$scope));
    }),
    [m, y, b, D, x, z, u, r, d]
  );
}
class mn extends cn {
  constructor(s) {
    super();
    rn(this, s, jp, Hp, un, {
      AiGraphic: 0,
      id: 1,
      ariaHidden: 2,
      ariaDescription: 3,
      size: 4,
      onAiMounted: 5,
    });
  }
}
function lp(E) {
  let s,
    f,
    d,
    r,
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
    Ca,
    V,
    aa,
    Ia,
    Ga,
    C,
    W,
    ya,
    Va,
    H,
    sa,
    Ja,
    ba,
    O,
    F,
    Ha,
    $a,
    A,
    ta,
    ja,
    qa,
    na,
    La,
    _a,
    j,
    ca,
    oa,
    da,
    S,
    ea,
    Ma,
    Ba,
    L,
    ka,
    Ua,
    X,
    J,
    fa,
    Ya,
    Z,
    R,
    pa,
    za,
    ga,
    G,
    wa,
    Oa,
    U,
    q,
    Sa,
    Da,
    N,
    Y,
    ia,
    Wa,
    B,
    ra,
    Pa,
    la,
    M,
    K,
    Ka;
  return {
    c() {
      (s = n('div')),
        (f = n('div')),
        (d = v()),
        (r = n('div')),
        (m = v()),
        (y = n('div')),
        (b = n('p')),
        (D = c('Shake intensity')),
        (x = v()),
        (z = n('div')),
        ($ = n('p')),
        (Q = c('Light')),
        (I = v()),
        (_ = n('div')),
        (w = n('p')),
        (ma = c('Moderate')),
        (Ca = v()),
        (V = n('div')),
        (aa = n('p')),
        (Ia = c('Cap-Haitien')),
        (Ga = v()),
        (C = n('div')),
        (W = n('p')),
        (ya = c('Strong')),
        (Va = v()),
        (H = n('div')),
        (sa = n('p')),
        (Ja = c('Very strong')),
        (ba = v()),
        (O = n('div')),
        (F = n('p')),
        (Ha = c('Gona\xEFves')),
        ($a = v()),
        (A = n('div')),
        (ta = n('p')),
        (ja = c('Caribbean')),
        (qa = v()),
        (na = n('p')),
        (La = c('Sea')),
        (_a = v()),
        (j = n('div')),
        (ca = n('p')),
        (oa = c('HAITI')),
        (da = v()),
        (S = n('div')),
        (ea = n('p')),
        (Ma = c('Jeremie')),
        (Ba = v()),
        (L = n('div')),
        (ka = n('p')),
        (Ua = c('Port-au-Prince')),
        (X = v()),
        (J = n('div')),
        (fa = n('p')),
        (Ya = c('Epicenter')),
        (Z = v()),
        (R = n('div')),
        (pa = n('p')),
        (za = c('Jacmel')),
        (ga = v()),
        (G = n('div')),
        (wa = n('p')),
        (Oa = c('Les Cayes')),
        (U = v()),
        (q = n('div')),
        (Sa = n('p')),
        (Da = c('50 mi')),
        (N = v()),
        (Y = n('div')),
        (ia = n('p')),
        (Wa = c('Dominican')),
        (B = v()),
        (ra = n('p')),
        (Pa = c('Republic')),
        (la = v()),
        (M = n('div')),
        (K = n('p')),
        (Ka = c('50 km')),
        this.h();
    },
    l(va) {
      s = e(va, 'DIV', { id: !0, class: !0, style: !0 });
      var g = p(s);
      (f = e(g, 'DIV', { style: !0 })),
        p(f).forEach(t),
        (d = h(g)),
        (r = e(g, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        p(r).forEach(t),
        (m = h(g)),
        (y = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ds = p(y);
      b = e(ds, 'P', { class: !0 });
      var ks = p(b);
      (D = i(ks, 'Shake intensity')),
        ks.forEach(t),
        ds.forEach(t),
        (x = h(g)),
        (z = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ts = p(z);
      $ = e(ts, 'P', { class: !0 });
      var Ra = p($);
      (Q = i(Ra, 'Light')),
        Ra.forEach(t),
        ts.forEach(t),
        (I = h(g)),
        (_ = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qa = p(_);
      w = e(Qa, 'P', { class: !0 });
      var ns = p(w);
      (ma = i(ns, 'Moderate')),
        ns.forEach(t),
        Qa.forEach(t),
        (Ca = h(g)),
        (V = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var fs = p(V);
      aa = e(fs, 'P', { class: !0 });
      var gs = p(aa);
      (Ia = i(gs, 'Cap-Haitien')),
        gs.forEach(t),
        fs.forEach(t),
        (Ga = h(g)),
        (C = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var vs = p(C);
      W = e(vs, 'P', { class: !0 });
      var Ta = p(W);
      (ya = i(Ta, 'Strong')),
        Ta.forEach(t),
        vs.forEach(t),
        (Va = h(g)),
        (H = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var hs = p(H);
      sa = e(hs, 'P', { class: !0 });
      var es = p(sa);
      (Ja = i(es, 'Very strong')),
        es.forEach(t),
        hs.forEach(t),
        (ba = h(g)),
        (O = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ms = p(O);
      F = e(ms, 'P', { class: !0 });
      var _s = p(F);
      (Ha = i(_s, 'Gona\xEFves')),
        _s.forEach(t),
        ms.forEach(t),
        ($a = h(g)),
        (A = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ea = p(A);
      ta = e(Ea, 'P', { class: !0 });
      var Es = p(ta);
      (ja = i(Es, 'Caribbean')),
        Es.forEach(t),
        (qa = h(Ea)),
        (na = e(Ea, 'P', { class: !0 }));
      var ys = p(na);
      (La = i(ys, 'Sea')),
        ys.forEach(t),
        Ea.forEach(t),
        (_a = h(g)),
        (j = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var rs = p(j);
      ca = e(rs, 'P', { class: !0 });
      var Fa = p(ca);
      (oa = i(Fa, 'HAITI')),
        Fa.forEach(t),
        rs.forEach(t),
        (da = h(g)),
        (S = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Xa = p(S);
      ea = e(Xa, 'P', { class: !0 });
      var us = p(ea);
      (Ma = i(us, 'Jeremie')),
        us.forEach(t),
        Xa.forEach(t),
        (Ba = h(g)),
        (L = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Na = p(L);
      ka = e(Na, 'P', { class: !0 });
      var ps = p(ka);
      (Ua = i(ps, 'Port-au-Prince')),
        ps.forEach(t),
        Na.forEach(t),
        (X = h(g)),
        (J = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var bs = p(J);
      fa = e(bs, 'P', { class: !0 });
      var Za = p(fa);
      (Ya = i(Za, 'Epicenter')),
        Za.forEach(t),
        bs.forEach(t),
        (Z = h(g)),
        (R = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ha = p(R);
      pa = e(ha, 'P', { class: !0 });
      var zs = p(pa);
      (za = i(zs, 'Jacmel')),
        zs.forEach(t),
        ha.forEach(t),
        (ga = h(g)),
        (G = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var os = p(G);
      wa = e(os, 'P', { class: !0 });
      var ws = p(wa);
      (Oa = i(ws, 'Les Cayes')),
        ws.forEach(t),
        os.forEach(t),
        (U = h(g)),
        (q = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var as = p(q);
      Sa = e(as, 'P', { class: !0 });
      var ls = p(Sa);
      (Da = i(ls, '50 mi')),
        ls.forEach(t),
        as.forEach(t),
        (N = h(g)),
        (Y = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var cs = p(Y);
      ia = e(cs, 'P', { class: !0 });
      var Ds = p(ia);
      (Wa = i(Ds, 'Dominican')),
        Ds.forEach(t),
        (B = h(cs)),
        (ra = e(cs, 'P', { class: !0 }));
      var is = p(ra);
      (Pa = i(is, 'Republic')),
        is.forEach(t),
        cs.forEach(t),
        (la = h(g)),
        (M = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ss = p(M);
      K = e(ss, 'P', { class: !0 });
      var Ps = p(K);
      (Ka = i(Ps, '50 km')),
        Ps.forEach(t),
        ss.forEach(t),
        g.forEach(t),
        this.h();
    },
    h() {
      l(f, 'padding', '0 0 91.7004% 0'),
        o(r, 'id', 'g-_ai-chart-xs-img'),
        o(r, 'class', 'g-aiImg svelte-zofauz'),
        o(r, 'alt', ''),
        o(
          r,
          'style',
          (u = `background-image: url(${le}/images/graphics/ai-chart-xs.png);`)
        ),
        o(b, 'class', 'g-pstyle0 svelte-zofauz'),
        o(y, 'id', 'g-ai0-1'),
        o(y, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(y, 'top', '3.216%'),
        l(y, 'margin-top', '-7.7px'),
        l(y, 'left', '0.5952%'),
        l(y, 'width', '99px'),
        o($, 'class', 'g-pstyle0 svelte-zofauz'),
        o(z, 'id', 'g-ai0-2'),
        o(z, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(z, 'top', '9.8251%'),
        l(z, 'margin-top', '-7.7px'),
        l(z, 'left', '4.9821%'),
        l(z, 'width', '47px'),
        o(w, 'class', 'g-pstyle0 svelte-zofauz'),
        o(_, 'id', 'g-ai0-3'),
        o(_, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(_, 'top', '15.7733%'),
        l(_, 'margin-top', '-7.7px'),
        l(_, 'left', '4.9821%'),
        l(_, 'width', '69px'),
        o(aa, 'class', 'g-pstyle0 svelte-zofauz'),
        o(V, 'id', 'g-ai0-4'),
        o(V, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(V, 'top', '16.4343%'),
        l(V, 'margin-top', '-7.7px'),
        l(V, 'left', '79.0675%'),
        l(V, 'width', '82px'),
        o(W, 'class', 'g-pstyle0 svelte-zofauz'),
        o(C, 'id', 'g-ai0-5'),
        o(C, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(C, 'top', '21.7216%'),
        l(C, 'margin-top', '-7.7px'),
        l(C, 'left', '4.9821%'),
        l(C, 'width', '55px'),
        o(sa, 'class', 'g-pstyle0 svelte-zofauz'),
        o(H, 'id', 'g-ai0-6'),
        o(H, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(H, 'top', '28.0002%'),
        l(H, 'margin-top', '-7.7px'),
        l(H, 'left', '4.9821%'),
        l(H, 'width', '78px'),
        o(F, 'class', 'g-pstyle0 svelte-zofauz'),
        o(O, 'id', 'g-ai0-7'),
        o(O, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(O, 'top', '28.9916%'),
        l(O, 'margin-top', '-7.7px'),
        l(O, 'left', '62.2348%'),
        l(O, 'width', '68px'),
        o(ta, 'class', 'g-pstyle1 svelte-zofauz'),
        o(na, 'class', 'g-pstyle1 svelte-zofauz'),
        o(A, 'id', 'g-ai0-8'),
        o(A, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(A, 'top', '39.9449%'),
        l(A, 'margin-top', '-14.9px'),
        l(A, 'left', '28.714%'),
        l(A, 'margin-left', '-36.5px'),
        l(A, 'width', '73px'),
        o(ca, 'class', 'g-pstyle2 svelte-zofauz'),
        o(j, 'id', 'g-ai0-9'),
        o(j, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(j, 'top', '42.6579%'),
        l(j, 'margin-top', '-10.1px'),
        l(j, 'left', '68.5061%'),
        l(j, 'width', '77px'),
        o(ea, 'class', 'g-pstyle0 svelte-zofauz'),
        o(S, 'id', 'g-ai0-10'),
        o(S, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(S, 'top', '59.0632%'),
        l(S, 'margin-top', '-7.7px'),
        l(S, 'left', '11.2526%'),
        l(S, 'width', '63px'),
        o(ka, 'class', 'g-pstyle3 svelte-zofauz'),
        o(L, 'id', 'g-ai0-11'),
        o(L, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(L, 'top', '61.1155%'),
        l(L, 'margin-top', '-8.9px'),
        l(L, 'left', '70.5455%'),
        l(L, 'width', '106px'),
        o(fa, 'class', 'g-pstyle3 svelte-zofauz'),
        o(J, 'id', 'g-ai0-12'),
        o(J, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(J, 'top', '62.1069%'),
        l(J, 'margin-top', '-8.9px'),
        l(J, 'left', '32.6015%'),
        l(J, 'width', '77px'),
        o(pa, 'class', 'g-pstyle0 svelte-zofauz'),
        o(R, 'id', 'g-ai0-13'),
        o(R, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(R, 'top', '78.8906%'),
        l(R, 'margin-top', '-7.7px'),
        l(R, 'left', '63.9138%'),
        l(R, 'width', '58px'),
        o(wa, 'class', 'g-pstyle0 svelte-zofauz'),
        o(G, 'id', 'g-ai0-14'),
        o(G, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(G, 'top', '80.2124%'),
        l(G, 'margin-top', '-7.7px'),
        l(G, 'left', '22.5649%'),
        l(G, 'width', '71px'),
        o(Sa, 'class', 'g-pstyle0 svelte-zofauz'),
        o(q, 'id', 'g-ai0-15'),
        o(q, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(q, 'top', '87.8129%'),
        l(q, 'margin-top', '-7.7px'),
        l(q, 'left', '0.6179%'),
        l(q, 'width', '49px'),
        o(ia, 'class', 'g-pstyle4 svelte-zofauz'),
        o(ra, 'class', 'g-pstyle4 svelte-zofauz'),
        o(Y, 'id', 'g-ai0-16'),
        o(Y, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(Y, 'top', '91.0202%'),
        l(Y, 'margin-top', '-11.4px'),
        l(Y, 'right', '10.4418%'),
        l(Y, 'width', '70px'),
        o(K, 'class', 'g-pstyle0 svelte-zofauz'),
        o(M, 'id', 'g-ai0-17'),
        o(M, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(M, 'top', '93.7611%'),
        l(M, 'margin-top', '-7.7px'),
        l(M, 'left', '0.6179%'),
        l(M, 'width', '52px'),
        o(s, 'id', 'g-_ai-chart-xs'),
        o(s, 'class', 'g-artboard svelte-zofauz'),
        o(s, 'style', '');
    },
    m(va, g) {
      P(va, s, g),
        a(s, f),
        a(s, d),
        a(s, r),
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
        a(s, Ca),
        a(s, V),
        a(V, aa),
        a(aa, Ia),
        a(s, Ga),
        a(s, C),
        a(C, W),
        a(W, ya),
        a(s, Va),
        a(s, H),
        a(H, sa),
        a(sa, Ja),
        a(s, ba),
        a(s, O),
        a(O, F),
        a(F, Ha),
        a(s, $a),
        a(s, A),
        a(A, ta),
        a(ta, ja),
        a(A, qa),
        a(A, na),
        a(na, La),
        a(s, _a),
        a(s, j),
        a(j, ca),
        a(ca, oa),
        a(s, da),
        a(s, S),
        a(S, ea),
        a(ea, Ma),
        a(s, Ba),
        a(s, L),
        a(L, ka),
        a(ka, Ua),
        a(s, X),
        a(s, J),
        a(J, fa),
        a(fa, Ya),
        a(s, Z),
        a(s, R),
        a(R, pa),
        a(pa, za),
        a(s, ga),
        a(s, G),
        a(G, wa),
        a(wa, Oa),
        a(s, U),
        a(s, q),
        a(q, Sa),
        a(Sa, Da),
        a(s, N),
        a(s, Y),
        a(Y, ia),
        a(ia, Wa),
        a(Y, B),
        a(Y, ra),
        a(ra, Pa),
        a(s, la),
        a(s, M),
        a(M, K),
        a(K, Ka);
    },
    p: xa,
    d(va) {
      va && t(s);
    },
  };
}
function cp(E) {
  let s,
    f,
    d,
    r,
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
    Ca,
    V,
    aa,
    Ia,
    Ga,
    C,
    W,
    ya,
    Va,
    H,
    sa,
    Ja,
    ba,
    O,
    F,
    Ha,
    $a,
    A,
    ta,
    ja,
    qa,
    na,
    La,
    _a,
    j,
    ca,
    oa,
    da,
    S,
    ea,
    Ma,
    Ba,
    L,
    ka,
    Ua,
    X,
    J,
    fa,
    Ya,
    Z,
    R,
    pa,
    za,
    ga,
    G,
    wa,
    Oa,
    U,
    q,
    Sa,
    Da,
    N,
    Y,
    ia,
    Wa,
    B,
    ra,
    Pa,
    la,
    M,
    K,
    Ka;
  return {
    c() {
      (s = n('div')),
        (f = n('div')),
        (d = v()),
        (r = n('div')),
        (m = v()),
        (y = n('div')),
        (b = n('p')),
        (D = c('Shake intensity')),
        (x = v()),
        (z = n('div')),
        ($ = n('p')),
        (Q = c('Light')),
        (I = v()),
        (_ = n('div')),
        (w = n('p')),
        (ma = c('Moderate')),
        (Ca = v()),
        (V = n('div')),
        (aa = n('p')),
        (Ia = c('Cap-Haitien')),
        (Ga = v()),
        (C = n('div')),
        (W = n('p')),
        (ya = c('Strong')),
        (Va = v()),
        (H = n('div')),
        (sa = n('p')),
        (Ja = c('Very strong')),
        (ba = v()),
        (O = n('div')),
        (F = n('p')),
        (Ha = c('Gona\xEFves')),
        ($a = v()),
        (A = n('div')),
        (ta = n('p')),
        (ja = c('Caribbean')),
        (qa = v()),
        (na = n('p')),
        (La = c('Sea')),
        (_a = v()),
        (j = n('div')),
        (ca = n('p')),
        (oa = c('HAITI')),
        (da = v()),
        (S = n('div')),
        (ea = n('p')),
        (Ma = c('Jeremie')),
        (Ba = v()),
        (L = n('div')),
        (ka = n('p')),
        (Ua = c('Port-au-Prince')),
        (X = v()),
        (J = n('div')),
        (fa = n('p')),
        (Ya = c('Epicenter')),
        (Z = v()),
        (R = n('div')),
        (pa = n('p')),
        (za = c('Dominican')),
        (ga = v()),
        (G = n('p')),
        (wa = c('Republic')),
        (Oa = v()),
        (U = n('div')),
        (q = n('p')),
        (Sa = c('Jacmel')),
        (Da = v()),
        (N = n('div')),
        (Y = n('p')),
        (ia = c('Les Cayes')),
        (Wa = v()),
        (B = n('div')),
        (ra = n('p')),
        (Pa = c('50 mi')),
        (la = v()),
        (M = n('div')),
        (K = n('p')),
        (Ka = c('50 km')),
        this.h();
    },
    l(va) {
      s = e(va, 'DIV', { id: !0, class: !0, style: !0 });
      var g = p(s);
      (f = e(g, 'DIV', { style: !0 })),
        p(f).forEach(t),
        (d = h(g)),
        (r = e(g, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        p(r).forEach(t),
        (m = h(g)),
        (y = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ds = p(y);
      b = e(ds, 'P', { class: !0 });
      var ks = p(b);
      (D = i(ks, 'Shake intensity')),
        ks.forEach(t),
        ds.forEach(t),
        (x = h(g)),
        (z = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ts = p(z);
      $ = e(ts, 'P', { class: !0 });
      var Ra = p($);
      (Q = i(Ra, 'Light')),
        Ra.forEach(t),
        ts.forEach(t),
        (I = h(g)),
        (_ = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qa = p(_);
      w = e(Qa, 'P', { class: !0 });
      var ns = p(w);
      (ma = i(ns, 'Moderate')),
        ns.forEach(t),
        Qa.forEach(t),
        (Ca = h(g)),
        (V = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var fs = p(V);
      aa = e(fs, 'P', { class: !0 });
      var gs = p(aa);
      (Ia = i(gs, 'Cap-Haitien')),
        gs.forEach(t),
        fs.forEach(t),
        (Ga = h(g)),
        (C = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var vs = p(C);
      W = e(vs, 'P', { class: !0 });
      var Ta = p(W);
      (ya = i(Ta, 'Strong')),
        Ta.forEach(t),
        vs.forEach(t),
        (Va = h(g)),
        (H = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var hs = p(H);
      sa = e(hs, 'P', { class: !0 });
      var es = p(sa);
      (Ja = i(es, 'Very strong')),
        es.forEach(t),
        hs.forEach(t),
        (ba = h(g)),
        (O = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ms = p(O);
      F = e(ms, 'P', { class: !0 });
      var _s = p(F);
      (Ha = i(_s, 'Gona\xEFves')),
        _s.forEach(t),
        ms.forEach(t),
        ($a = h(g)),
        (A = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ea = p(A);
      ta = e(Ea, 'P', { class: !0 });
      var Es = p(ta);
      (ja = i(Es, 'Caribbean')),
        Es.forEach(t),
        (qa = h(Ea)),
        (na = e(Ea, 'P', { class: !0 }));
      var ys = p(na);
      (La = i(ys, 'Sea')),
        ys.forEach(t),
        Ea.forEach(t),
        (_a = h(g)),
        (j = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var rs = p(j);
      ca = e(rs, 'P', { class: !0 });
      var Fa = p(ca);
      (oa = i(Fa, 'HAITI')),
        Fa.forEach(t),
        rs.forEach(t),
        (da = h(g)),
        (S = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Xa = p(S);
      ea = e(Xa, 'P', { class: !0 });
      var us = p(ea);
      (Ma = i(us, 'Jeremie')),
        us.forEach(t),
        Xa.forEach(t),
        (Ba = h(g)),
        (L = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Na = p(L);
      ka = e(Na, 'P', { class: !0 });
      var ps = p(ka);
      (Ua = i(ps, 'Port-au-Prince')),
        ps.forEach(t),
        Na.forEach(t),
        (X = h(g)),
        (J = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var bs = p(J);
      fa = e(bs, 'P', { class: !0 });
      var Za = p(fa);
      (Ya = i(Za, 'Epicenter')),
        Za.forEach(t),
        bs.forEach(t),
        (Z = h(g)),
        (R = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ha = p(R);
      pa = e(ha, 'P', { class: !0 });
      var zs = p(pa);
      (za = i(zs, 'Dominican')),
        zs.forEach(t),
        (ga = h(ha)),
        (G = e(ha, 'P', { class: !0 }));
      var os = p(G);
      (wa = i(os, 'Republic')),
        os.forEach(t),
        ha.forEach(t),
        (Oa = h(g)),
        (U = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ws = p(U);
      q = e(ws, 'P', { class: !0 });
      var as = p(q);
      (Sa = i(as, 'Jacmel')),
        as.forEach(t),
        ws.forEach(t),
        (Da = h(g)),
        (N = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ls = p(N);
      Y = e(ls, 'P', { class: !0 });
      var cs = p(Y);
      (ia = i(cs, 'Les Cayes')),
        cs.forEach(t),
        ls.forEach(t),
        (Wa = h(g)),
        (B = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ds = p(B);
      ra = e(Ds, 'P', { class: !0 });
      var is = p(ra);
      (Pa = i(is, '50 mi')),
        is.forEach(t),
        Ds.forEach(t),
        (la = h(g)),
        (M = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ss = p(M);
      K = e(ss, 'P', { class: !0 });
      var Ps = p(K);
      (Ka = i(Ps, '50 km')),
        Ps.forEach(t),
        ss.forEach(t),
        g.forEach(t),
        this.h();
    },
    h() {
      l(f, 'padding', '0 0 82.703% 0'),
        o(r, 'id', 'g-_ai-chart-sm-img'),
        o(r, 'class', 'g-aiImg svelte-zofauz'),
        o(r, 'alt', ''),
        o(
          r,
          'style',
          (u = `background-image: url(${le}/images/graphics/ai-chart-sm.png);`)
        ),
        o(b, 'class', 'g-pstyle0 svelte-zofauz'),
        o(y, 'id', 'g-ai1-1'),
        o(y, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(y, 'top', '3.8773%'),
        l(y, 'margin-top', '-9.4px'),
        l(y, 'left', '0.3278%'),
        l(y, 'width', '111px'),
        o($, 'class', 'g-pstyle0 svelte-zofauz'),
        o(z, 'id', 'g-ai1-2'),
        o(z, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(z, 'top', '9.0933%'),
        l(z, 'margin-top', '-9.4px'),
        l(z, 'left', '3.0258%'),
        l(z, 'width', '52px'),
        o(w, 'class', 'g-pstyle0 svelte-zofauz'),
        o(_, 'id', 'g-ai1-3'),
        o(_, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(_, 'top', '13.5979%'),
        l(_, 'margin-top', '-9.4px'),
        l(_, 'left', '3.0259%'),
        l(_, 'width', '77px'),
        o(aa, 'class', 'g-pstyle0 svelte-zofauz'),
        o(V, 'id', 'g-ai1-4'),
        o(V, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(V, 'top', '16.6801%'),
        l(V, 'margin-top', '-9.4px'),
        l(V, 'left', '70.3255%'),
        l(V, 'width', '92px'),
        o(W, 'class', 'g-pstyle0 svelte-zofauz'),
        o(C, 'id', 'g-ai1-5'),
        o(C, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(C, 'top', '18.3397%'),
        l(C, 'margin-top', '-9.4px'),
        l(C, 'left', '3.0258%'),
        l(C, 'width', '61px'),
        o(sa, 'class', 'g-pstyle0 svelte-zofauz'),
        o(H, 'id', 'g-ai1-6'),
        o(H, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(H, 'top', '22.6073%'),
        l(H, 'margin-top', '-9.4px'),
        l(H, 'left', '3.0258%'),
        l(H, 'width', '88px'),
        o(F, 'class', 'g-pstyle0 svelte-zofauz'),
        o(O, 'id', 'g-ai1-7'),
        o(O, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(O, 'top', '28.5344%'),
        l(O, 'margin-top', '-9.4px'),
        l(O, 'left', '55.9181%'),
        l(O, 'width', '76px'),
        o(ta, 'class', 'g-pstyle1 svelte-zofauz'),
        o(na, 'class', 'g-pstyle1 svelte-zofauz'),
        o(A, 'id', 'g-ai1-8'),
        o(A, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(A, 'top', '38.8091%'),
        l(A, 'margin-top', '-17.7px'),
        l(A, 'left', '27.2818%'),
        l(A, 'margin-left', '-41px'),
        l(A, 'width', '82px'),
        o(ca, 'class', 'g-pstyle2 svelte-zofauz'),
        o(j, 'id', 'g-ai1-9'),
        o(j, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(j, 'top', '39.9724%'),
        l(j, 'margin-top', '-8.6px'),
        l(j, 'left', '61.2858%'),
        l(j, 'width', '67px'),
        o(ea, 'class', 'g-pstyle0 svelte-zofauz'),
        o(S, 'id', 'g-ai1-10'),
        o(S, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(S, 'top', '56.985%'),
        l(S, 'margin-top', '-9.4px'),
        l(S, 'left', '12.2815%'),
        l(S, 'width', '69px'),
        o(ka, 'class', 'g-pstyle3 svelte-zofauz'),
        o(L, 'id', 'g-ai1-11'),
        o(L, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(L, 'top', '59.1569%'),
        l(L, 'margin-top', '-9.5px'),
        l(L, 'left', '63.0314%'),
        l(L, 'width', '112px'),
        o(fa, 'class', 'g-pstyle3 svelte-zofauz'),
        o(J, 'id', 'g-ai1-12'),
        o(J, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(J, 'top', '60.1053%'),
        l(J, 'margin-top', '-9.5px'),
        l(J, 'left', '30.5543%'),
        l(J, 'width', '81px'),
        o(pa, 'class', 'g-pstyle4 svelte-zofauz'),
        o(G, 'class', 'g-pstyle4 svelte-zofauz'),
        o(R, 'id', 'g-ai1-13'),
        o(R, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(R, 'top', '62.7194%'),
        l(R, 'margin-top', '-16.5px'),
        l(R, 'left', '91.2282%'),
        l(R, 'margin-left', '-57px'),
        l(R, 'width', '114px'),
        o(q, 'class', 'g-pstyle0 svelte-zofauz'),
        o(U, 'id', 'g-ai1-14'),
        o(U, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(U, 'top', '75.4778%'),
        l(U, 'margin-top', '-9.4px'),
        l(U, 'left', '57.3552%'),
        l(U, 'width', '64px'),
        o(Y, 'class', 'g-pstyle0 svelte-zofauz'),
        o(N, 'id', 'g-ai1-15'),
        o(N, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(N, 'top', '76.6632%'),
        l(N, 'margin-top', '-9.4px'),
        l(N, 'left', '21.9639%'),
        l(N, 'width', '79px'),
        o(ra, 'class', 'g-pstyle5 svelte-zofauz'),
        o(B, 'id', 'g-ai1-16'),
        o(B, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(B, 'top', '85.5251%'),
        l(B, 'margin-top', '-7.7px'),
        l(B, 'left', '0.1344%'),
        l(B, 'width', '49px'),
        o(K, 'class', 'g-pstyle5 svelte-zofauz'),
        o(M, 'id', 'g-ai1-17'),
        o(M, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(M, 'top', '90.0297%'),
        l(M, 'margin-top', '-7.7px'),
        l(M, 'left', '0.1344%'),
        l(M, 'width', '52px'),
        o(s, 'id', 'g-_ai-chart-sm'),
        o(s, 'class', 'g-artboard svelte-zofauz'),
        o(s, 'style', '');
    },
    m(va, g) {
      P(va, s, g),
        a(s, f),
        a(s, d),
        a(s, r),
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
        a(s, Ca),
        a(s, V),
        a(V, aa),
        a(aa, Ia),
        a(s, Ga),
        a(s, C),
        a(C, W),
        a(W, ya),
        a(s, Va),
        a(s, H),
        a(H, sa),
        a(sa, Ja),
        a(s, ba),
        a(s, O),
        a(O, F),
        a(F, Ha),
        a(s, $a),
        a(s, A),
        a(A, ta),
        a(ta, ja),
        a(A, qa),
        a(A, na),
        a(na, La),
        a(s, _a),
        a(s, j),
        a(j, ca),
        a(ca, oa),
        a(s, da),
        a(s, S),
        a(S, ea),
        a(ea, Ma),
        a(s, Ba),
        a(s, L),
        a(L, ka),
        a(ka, Ua),
        a(s, X),
        a(s, J),
        a(J, fa),
        a(fa, Ya),
        a(s, Z),
        a(s, R),
        a(R, pa),
        a(pa, za),
        a(R, ga),
        a(R, G),
        a(G, wa),
        a(s, Oa),
        a(s, U),
        a(U, q),
        a(q, Sa),
        a(s, Da),
        a(s, N),
        a(N, Y),
        a(Y, ia),
        a(s, Wa),
        a(s, B),
        a(B, ra),
        a(ra, Pa),
        a(s, la),
        a(s, M),
        a(M, K),
        a(K, Ka);
    },
    p: xa,
    d(va) {
      va && t(s);
    },
  };
}
function ip(E) {
  let s,
    f,
    d,
    r,
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
    Ca,
    V,
    aa,
    Ia,
    Ga,
    C,
    W,
    ya,
    Va,
    H,
    sa,
    Ja,
    ba,
    O,
    F,
    Ha,
    $a,
    A,
    ta,
    ja,
    qa,
    na,
    La,
    _a,
    j,
    ca,
    oa,
    da,
    S,
    ea,
    Ma,
    Ba,
    L,
    ka,
    Ua,
    X,
    J,
    fa,
    Ya,
    Z,
    R,
    pa,
    za,
    ga,
    G,
    wa,
    Oa,
    U,
    q,
    Sa,
    Da,
    N,
    Y,
    ia,
    Wa,
    B,
    ra,
    Pa,
    la,
    M,
    K,
    Ka;
  return {
    c() {
      (s = n('div')),
        (f = n('div')),
        (d = v()),
        (r = n('div')),
        (m = v()),
        (y = n('div')),
        (b = n('p')),
        (D = c('Shake intensity')),
        (x = v()),
        (z = n('div')),
        ($ = n('p')),
        (Q = c('Light')),
        (I = v()),
        (_ = n('div')),
        (w = n('p')),
        (ma = c('Moderate')),
        (Ca = v()),
        (V = n('div')),
        (aa = n('p')),
        (Ia = c('Cap-Haitien')),
        (Ga = v()),
        (C = n('div')),
        (W = n('p')),
        (ya = c('Strong')),
        (Va = v()),
        (H = n('div')),
        (sa = n('p')),
        (Ja = c('Very strong')),
        (ba = v()),
        (O = n('div')),
        (F = n('p')),
        (Ha = c('Gona\xEFves')),
        ($a = v()),
        (A = n('div')),
        (ta = n('p')),
        (ja = c('Caribbean')),
        (qa = v()),
        (na = n('p')),
        (La = c('Sea')),
        (_a = v()),
        (j = n('div')),
        (ca = n('p')),
        (oa = c('HAITI')),
        (da = v()),
        (S = n('div')),
        (ea = n('p')),
        (Ma = c('Dominican')),
        (Ba = v()),
        (L = n('p')),
        (ka = c('Republic')),
        (Ua = v()),
        (X = n('div')),
        (J = n('p')),
        (fa = c('Jeremie')),
        (Ya = v()),
        (Z = n('div')),
        (R = n('p')),
        (pa = c('Epicenter')),
        (za = v()),
        (ga = n('div')),
        (G = n('p')),
        (wa = c('Port-au-Prince')),
        (Oa = v()),
        (U = n('div')),
        (q = n('p')),
        (Sa = c('Jacmel')),
        (Da = v()),
        (N = n('div')),
        (Y = n('p')),
        (ia = c('Les Cayes')),
        (Wa = v()),
        (B = n('div')),
        (ra = n('p')),
        (Pa = c('50 mi')),
        (la = v()),
        (M = n('div')),
        (K = n('p')),
        (Ka = c('50 km')),
        this.h();
    },
    l(va) {
      s = e(va, 'DIV', { id: !0, class: !0, style: !0 });
      var g = p(s);
      (f = e(g, 'DIV', { style: !0 })),
        p(f).forEach(t),
        (d = h(g)),
        (r = e(g, 'DIV', { id: !0, class: !0, alt: !0, style: !0 })),
        p(r).forEach(t),
        (m = h(g)),
        (y = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ds = p(y);
      b = e(ds, 'P', { class: !0 });
      var ks = p(b);
      (D = i(ks, 'Shake intensity')),
        ks.forEach(t),
        ds.forEach(t),
        (x = h(g)),
        (z = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ts = p(z);
      $ = e(ts, 'P', { class: !0 });
      var Ra = p($);
      (Q = i(Ra, 'Light')),
        Ra.forEach(t),
        ts.forEach(t),
        (I = h(g)),
        (_ = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Qa = p(_);
      w = e(Qa, 'P', { class: !0 });
      var ns = p(w);
      (ma = i(ns, 'Moderate')),
        ns.forEach(t),
        Qa.forEach(t),
        (Ca = h(g)),
        (V = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var fs = p(V);
      aa = e(fs, 'P', { class: !0 });
      var gs = p(aa);
      (Ia = i(gs, 'Cap-Haitien')),
        gs.forEach(t),
        fs.forEach(t),
        (Ga = h(g)),
        (C = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var vs = p(C);
      W = e(vs, 'P', { class: !0 });
      var Ta = p(W);
      (ya = i(Ta, 'Strong')),
        Ta.forEach(t),
        vs.forEach(t),
        (Va = h(g)),
        (H = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var hs = p(H);
      sa = e(hs, 'P', { class: !0 });
      var es = p(sa);
      (Ja = i(es, 'Very strong')),
        es.forEach(t),
        hs.forEach(t),
        (ba = h(g)),
        (O = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ms = p(O);
      F = e(ms, 'P', { class: !0 });
      var _s = p(F);
      (Ha = i(_s, 'Gona\xEFves')),
        _s.forEach(t),
        ms.forEach(t),
        ($a = h(g)),
        (A = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ea = p(A);
      ta = e(Ea, 'P', { class: !0 });
      var Es = p(ta);
      (ja = i(Es, 'Caribbean')),
        Es.forEach(t),
        (qa = h(Ea)),
        (na = e(Ea, 'P', { class: !0 }));
      var ys = p(na);
      (La = i(ys, 'Sea')),
        ys.forEach(t),
        Ea.forEach(t),
        (_a = h(g)),
        (j = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var rs = p(j);
      ca = e(rs, 'P', { class: !0 });
      var Fa = p(ca);
      (oa = i(Fa, 'HAITI')),
        Fa.forEach(t),
        rs.forEach(t),
        (da = h(g)),
        (S = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Xa = p(S);
      ea = e(Xa, 'P', { class: !0 });
      var us = p(ea);
      (Ma = i(us, 'Dominican')),
        us.forEach(t),
        (Ba = h(Xa)),
        (L = e(Xa, 'P', { class: !0 }));
      var Na = p(L);
      (ka = i(Na, 'Republic')),
        Na.forEach(t),
        Xa.forEach(t),
        (Ua = h(g)),
        (X = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ps = p(X);
      J = e(ps, 'P', { class: !0 });
      var bs = p(J);
      (fa = i(bs, 'Jeremie')),
        bs.forEach(t),
        ps.forEach(t),
        (Ya = h(g)),
        (Z = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Za = p(Z);
      R = e(Za, 'P', { class: !0 });
      var ha = p(R);
      (pa = i(ha, 'Epicenter')),
        ha.forEach(t),
        Za.forEach(t),
        (za = h(g)),
        (ga = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var zs = p(ga);
      G = e(zs, 'P', { class: !0 });
      var os = p(G);
      (wa = i(os, 'Port-au-Prince')),
        os.forEach(t),
        zs.forEach(t),
        (Oa = h(g)),
        (U = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ws = p(U);
      q = e(ws, 'P', { class: !0 });
      var as = p(q);
      (Sa = i(as, 'Jacmel')),
        as.forEach(t),
        ws.forEach(t),
        (Da = h(g)),
        (N = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ls = p(N);
      Y = e(ls, 'P', { class: !0 });
      var cs = p(Y);
      (ia = i(cs, 'Les Cayes')),
        cs.forEach(t),
        ls.forEach(t),
        (Wa = h(g)),
        (B = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var Ds = p(B);
      ra = e(Ds, 'P', { class: !0 });
      var is = p(ra);
      (Pa = i(is, '50 mi')),
        is.forEach(t),
        Ds.forEach(t),
        (la = h(g)),
        (M = e(g, 'DIV', { id: !0, class: !0, style: !0 }));
      var ss = p(M);
      K = e(ss, 'P', { class: !0 });
      var Ps = p(K);
      (Ka = i(Ps, '50 km')),
        Ps.forEach(t),
        ss.forEach(t),
        g.forEach(t),
        this.h();
    },
    h() {
      l(f, 'padding', '0 0 79.6009% 0'),
        o(r, 'id', 'g-_ai-chart-md-img'),
        o(r, 'class', 'g-aiImg svelte-zofauz'),
        o(r, 'alt', ''),
        o(
          r,
          'style',
          (u = `background-image: url(${le}/images/graphics/ai-chart-md.png);`)
        ),
        o(b, 'class', 'g-pstyle0 svelte-zofauz'),
        o(y, 'id', 'g-ai2-1'),
        o(y, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(y, 'top', '2.3515%'),
        l(y, 'margin-top', '-9.4px'),
        l(y, 'left', '0.3608%'),
        l(y, 'width', '111px'),
        o($, 'class', 'g-pstyle0 svelte-zofauz'),
        o(z, 'id', 'g-ai2-2'),
        o(z, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(z, 'top', '7.6811%'),
        l(z, 'margin-top', '-9.4px'),
        l(z, 'left', '2.6603%'),
        l(z, 'width', '52px'),
        o(w, 'class', 'g-pstyle0 svelte-zofauz'),
        o(_, 'id', 'g-ai2-3'),
        o(_, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(_, 'top', '12.2494%'),
        l(_, 'margin-top', '-9.4px'),
        l(_, 'left', '2.6604%'),
        l(_, 'width', '77px'),
        o(aa, 'class', 'g-pstyle0 svelte-zofauz'),
        o(V, 'id', 'g-ai2-4'),
        o(V, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(V, 'top', '15.4852%'),
        l(V, 'margin-top', '-9.4px'),
        l(V, 'left', '70.3606%'),
        l(V, 'width', '92px'),
        o(W, 'class', 'g-pstyle0 svelte-zofauz'),
        o(C, 'id', 'g-ai2-5'),
        o(C, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(C, 'top', '17.1983%'),
        l(C, 'margin-top', '-9.4px'),
        l(C, 'left', '2.6603%'),
        l(C, 'width', '61px'),
        o(sa, 'class', 'g-pstyle0 svelte-zofauz'),
        o(H, 'id', 'g-ai2-6'),
        o(H, 'class', 'g-legend g-aiAbs g-aiPointText svelte-zofauz'),
        l(H, 'top', '21.7666%'),
        l(H, 'margin-top', '-9.4px'),
        l(H, 'left', '2.6603%'),
        l(H, 'width', '88px'),
        o(F, 'class', 'g-pstyle0 svelte-zofauz'),
        o(O, 'id', 'g-ai2-7'),
        o(O, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(O, 'top', '27.6672%'),
        l(O, 'margin-top', '-9.4px'),
        l(O, 'left', '55.993%'),
        l(O, 'width', '76px'),
        o(ta, 'class', 'g-pstyle1 svelte-zofauz'),
        o(na, 'class', 'g-pstyle1 svelte-zofauz'),
        o(A, 'id', 'g-ai2-8'),
        o(A, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(A, 'top', '38.0099%'),
        l(A, 'margin-top', '-17.7px'),
        l(A, 'left', '27.2388%'),
        l(A, 'margin-left', '-41px'),
        l(A, 'width', '82px'),
        o(ca, 'class', 'g-pstyle2 svelte-zofauz'),
        o(j, 'id', 'g-ai2-9'),
        o(j, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(j, 'top', '42.7626%'),
        l(j, 'margin-top', '-10.7px'),
        l(j, 'left', '62.8914%'),
        l(j, 'width', '80px'),
        o(ea, 'class', 'g-pstyle3 svelte-zofauz'),
        o(L, 'class', 'g-pstyle3 svelte-zofauz'),
        o(S, 'id', 'g-ai2-10'),
        o(S, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(S, 'top', '50.0029%'),
        l(S, 'margin-top', '-17.7px'),
        l(S, 'left', '92.295%'),
        l(S, 'margin-left', '-60.5px'),
        l(S, 'width', '121px'),
        o(J, 'class', 'g-pstyle0 svelte-zofauz'),
        o(X, 'id', 'g-ai2-11'),
        o(X, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(X, 'top', '57.3608%'),
        l(X, 'margin-top', '-9.4px'),
        l(X, 'left', '12.2815%'),
        l(X, 'width', '69px'),
        o(R, 'class', 'g-pstyle4 svelte-zofauz'),
        o(Z, 'id', 'g-ai2-12'),
        o(Z, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(Z, 'top', '60.2742%'),
        l(Z, 'margin-top', '-10.7px'),
        l(Z, 'left', '30.6995%'),
        l(Z, 'width', '89px'),
        o(G, 'class', 'g-pstyle4 svelte-zofauz'),
        o(ga, 'id', 'g-ai2-13'),
        o(ga, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(ga, 'top', '62.5583%'),
        l(ga, 'margin-top', '-10.7px'),
        l(ga, 'left', '66.3403%'),
        l(ga, 'width', '125px'),
        o(q, 'class', 'g-pstyle0 svelte-zofauz'),
        o(U, 'id', 'g-ai2-14'),
        o(U, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(U, 'top', '75.6338%'),
        l(U, 'margin-top', '-9.4px'),
        l(U, 'left', '57.8174%'),
        l(U, 'width', '64px'),
        o(Y, 'class', 'g-pstyle0 svelte-zofauz'),
        o(N, 'id', 'g-ai2-15'),
        o(N, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(N, 'top', '77.3469%'),
        l(N, 'margin-top', '-9.4px'),
        l(N, 'left', '22.5239%'),
        l(N, 'width', '79px'),
        o(ra, 'class', 'g-pstyle5 svelte-zofauz'),
        o(B, 'id', 'g-ai2-16'),
        o(B, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(B, 'top', '86.936%'),
        l(B, 'margin-top', '-7.7px'),
        l(B, 'left', '0.1678%'),
        l(B, 'width', '49px'),
        o(K, 'class', 'g-pstyle5 svelte-zofauz'),
        o(M, 'id', 'g-ai2-17'),
        o(M, 'class', 'g-map-labels g-aiAbs g-aiPointText svelte-zofauz'),
        l(M, 'top', '91.5043%'),
        l(M, 'margin-top', '-7.7px'),
        l(M, 'left', '0.1678%'),
        l(M, 'width', '52px'),
        o(s, 'id', 'g-_ai-chart-md'),
        o(s, 'class', 'g-artboard svelte-zofauz'),
        o(s, 'style', '');
    },
    m(va, g) {
      P(va, s, g),
        a(s, f),
        a(s, d),
        a(s, r),
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
        a(s, Ca),
        a(s, V),
        a(V, aa),
        a(aa, Ia),
        a(s, Ga),
        a(s, C),
        a(C, W),
        a(W, ya),
        a(s, Va),
        a(s, H),
        a(H, sa),
        a(sa, Ja),
        a(s, ba),
        a(s, O),
        a(O, F),
        a(F, Ha),
        a(s, $a),
        a(s, A),
        a(A, ta),
        a(ta, ja),
        a(A, qa),
        a(A, na),
        a(na, La),
        a(s, _a),
        a(s, j),
        a(j, ca),
        a(ca, oa),
        a(s, da),
        a(s, S),
        a(S, ea),
        a(ea, Ma),
        a(S, Ba),
        a(S, L),
        a(L, ka),
        a(s, Ua),
        a(s, X),
        a(X, J),
        a(J, fa),
        a(s, Ya),
        a(s, Z),
        a(Z, R),
        a(R, pa),
        a(s, za),
        a(s, ga),
        a(ga, G),
        a(G, wa),
        a(s, Oa),
        a(s, U),
        a(U, q),
        a(q, Sa),
        a(s, Da),
        a(s, N),
        a(N, Y),
        a(Y, ia),
        a(s, Wa),
        a(s, B),
        a(B, ra),
        a(ra, Pa),
        a(s, la),
        a(s, M),
        a(M, K),
        a(K, Ka);
    },
    p: xa,
    d(va) {
      va && t(s);
    },
  };
}
function Lp(E) {
  let s,
    f,
    d,
    r,
    u = E[0] && E[0] >= 0 && E[0] < 510 && lp(),
    m = E[0] && E[0] >= 510 && E[0] < 660 && cp(),
    y = E[0] && E[0] >= 660 && ip();
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
      var D = p(s);
      u && u.l(D),
        (f = h(D)),
        m && m.l(D),
        (d = h(D)),
        y && y.l(D),
        D.forEach(t),
        this.h();
    },
    h() {
      o(s, 'id', 'g-_ai-chart-box'),
        o(s, 'class', 'svelte-zofauz'),
        Ap(() => E[1].call(s));
    },
    m(b, D) {
      P(b, s, D),
        u && u.m(s, null),
        a(s, f),
        m && m.m(s, null),
        a(s, d),
        y && y.m(s, null),
        (r = xp(s, E[1].bind(s)));
    },
    p(b, [D]) {
      b[0] && b[0] >= 0 && b[0] < 510
        ? u
          ? u.p(b, D)
          : ((u = lp()), u.c(), u.m(s, f))
        : u && (u.d(1), (u = null)),
        b[0] && b[0] >= 510 && b[0] < 660
          ? m
            ? m.p(b, D)
            : ((m = cp()), m.c(), m.m(s, d))
          : m && (m.d(1), (m = null)),
        b[0] && b[0] >= 660
          ? y
            ? y.p(b, D)
            : ((y = ip()), y.c(), y.m(s, null))
          : y && (y.d(1), (y = null));
    },
    i: xa,
    o: xa,
    d(b) {
      b && t(s), u && u.d(), m && m.d(), y && y.d(), r();
    },
  };
}
function Mp(E, s, f) {
  let d = null;
  function r() {
    (d = this.clientWidth), f(0, d);
  }
  return [d, r];
}
class _n extends cn {
  constructor(s) {
    super();
    rn(this, s, Mp, Lp, un, {});
  }
}
var Op = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: _n,
});
function Rp(E) {
  let s,
    f,
    d,
    r,
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
    Ca,
    V,
    aa,
    Ia,
    Ga,
    C,
    W,
    ya,
    Va,
    H,
    sa,
    Ja,
    ba,
    O,
    F,
    Ha,
    $a,
    A,
    ta,
    ja,
    qa,
    na,
    La,
    _a,
    j,
    ca,
    oa,
    da,
    S,
    ea,
    Ma,
    Ba,
    L,
    ka,
    Ua,
    X,
    J,
    fa,
    Ya,
    Z,
    R,
    pa,
    za,
    ga,
    G,
    wa,
    Oa,
    U,
    q,
    Sa,
    Da,
    N,
    Y,
    ia,
    Wa,
    B,
    ra,
    Pa,
    la;
  return {
    c() {
      (s = n('table')),
        (f = n('thead')),
        (d = n('tr')),
        (r = n('th')),
        (u = c('Date ')),
        (m = n('th')),
        (y = c(`S&P 500
      `)),
        (b = n('th')),
        (D = c('Dow ')),
        (x = n('th')),
        (z = c('Nasdaq')),
        ($ = v()),
        (Q = n('tbody')),
        (I = n('tr')),
        (_ = n('td')),
        (w = c('December 31, 2021')),
        (ma = n('td')),
        (Ca = c('0%')),
        (V = n('td')),
        (aa = c('0')),
        (Ia = n('td')),
        (Ga = c('0%')),
        (C = n('tr')),
        (W = n('td')),
        (ya = c('January 3, 2022')),
        (Va = n('td')),
        (H = c('1%')),
        (sa = n('td')),
        (Ja = c('1')),
        (ba = n('td')),
        (O = c('1%')),
        (F = n('tr')),
        (Ha = n('td')),
        ($a = c('January 4, 2022')),
        (A = n('td')),
        (ta = c('1%')),
        (ja = n('td')),
        (qa = c('1')),
        (na = n('td')),
        (La = c('\u22120%')),
        (_a = n('tr')),
        (j = n('td')),
        (ca = c('January 5, 2022')),
        (oa = n('td')),
        (da = c('\u22121%')),
        (S = n('td')),
        (ea = c('0')),
        (Ma = n('td')),
        (Ba = c('\u22123%')),
        (L = n('tr')),
        (ka = n('td')),
        (Ua = c('January 6, 2022')),
        (X = n('td')),
        (J = c('\u22121%')),
        (fa = n('td')),
        (Ya = c('\u22120')),
        (Z = n('td')),
        (R = c('\u22124%')),
        (pa = n('tr')),
        (za = n('td')),
        (ga = c('January 7, 2022')),
        (G = n('td')),
        (wa = c('\u22122%')),
        (Oa = n('td')),
        (U = c('\u22120')),
        (q = n('td')),
        (Sa = c('\u22125%')),
        (Da = n('tr')),
        (N = n('td')),
        (Y = c('January 10, 2022')),
        (ia = n('td')),
        (Wa = c('\u22122%')),
        (B = n('td')),
        (ra = c('\u22121')),
        (Pa = n('td')),
        (la = c('\u22124%')),
        this.h();
    },
    l(M) {
      s = e(M, 'TABLE', { class: !0 });
      var K = p(s);
      f = e(K, 'THEAD', {});
      var Ka = p(f);
      d = e(Ka, 'TR', {});
      var va = p(d);
      r = e(va, 'TH', { 'data-column': !0, 'data-row': !0 });
      var g = p(r);
      (u = i(g, 'Date ')),
        g.forEach(t),
        (m = e(va, 'TH', { 'data-column': !0, 'data-row': !0 }));
      var ds = p(m);
      (y = i(
        ds,
        `S&P 500
      `
      )),
        ds.forEach(t),
        (b = e(va, 'TH', { 'data-column': !0, 'data-row': !0 }));
      var ks = p(b);
      (D = i(ks, 'Dow ')),
        ks.forEach(t),
        (x = e(va, 'TH', { 'data-column': !0, 'data-row': !0 }));
      var ts = p(x);
      (z = i(ts, 'Nasdaq')),
        ts.forEach(t),
        va.forEach(t),
        Ka.forEach(t),
        ($ = h(K)),
        (Q = e(K, 'TBODY', {}));
      var Ra = p(Q);
      I = e(Ra, 'TR', {});
      var Qa = p(I);
      _ = e(Qa, 'TD', {});
      var ns = p(_);
      (w = i(ns, 'December 31, 2021')), ns.forEach(t), (ma = e(Qa, 'TD', {}));
      var fs = p(ma);
      (Ca = i(fs, '0%')), fs.forEach(t), (V = e(Qa, 'TD', {}));
      var gs = p(V);
      (aa = i(gs, '0')), gs.forEach(t), (Ia = e(Qa, 'TD', {}));
      var vs = p(Ia);
      (Ga = i(vs, '0%')), vs.forEach(t), Qa.forEach(t), (C = e(Ra, 'TR', {}));
      var Ta = p(C);
      W = e(Ta, 'TD', {});
      var hs = p(W);
      (ya = i(hs, 'January 3, 2022')), hs.forEach(t), (Va = e(Ta, 'TD', {}));
      var es = p(Va);
      (H = i(es, '1%')), es.forEach(t), (sa = e(Ta, 'TD', {}));
      var ms = p(sa);
      (Ja = i(ms, '1')), ms.forEach(t), (ba = e(Ta, 'TD', {}));
      var _s = p(ba);
      (O = i(_s, '1%')), _s.forEach(t), Ta.forEach(t), (F = e(Ra, 'TR', {}));
      var Ea = p(F);
      Ha = e(Ea, 'TD', {});
      var Es = p(Ha);
      ($a = i(Es, 'January 4, 2022')), Es.forEach(t), (A = e(Ea, 'TD', {}));
      var ys = p(A);
      (ta = i(ys, '1%')), ys.forEach(t), (ja = e(Ea, 'TD', {}));
      var rs = p(ja);
      (qa = i(rs, '1')), rs.forEach(t), (na = e(Ea, 'TD', {}));
      var Fa = p(na);
      (La = i(Fa, '\u22120%')),
        Fa.forEach(t),
        Ea.forEach(t),
        (_a = e(Ra, 'TR', {}));
      var Xa = p(_a);
      j = e(Xa, 'TD', {});
      var us = p(j);
      (ca = i(us, 'January 5, 2022')), us.forEach(t), (oa = e(Xa, 'TD', {}));
      var Na = p(oa);
      (da = i(Na, '\u22121%')), Na.forEach(t), (S = e(Xa, 'TD', {}));
      var ps = p(S);
      (ea = i(ps, '0')), ps.forEach(t), (Ma = e(Xa, 'TD', {}));
      var bs = p(Ma);
      (Ba = i(bs, '\u22123%')),
        bs.forEach(t),
        Xa.forEach(t),
        (L = e(Ra, 'TR', {}));
      var Za = p(L);
      ka = e(Za, 'TD', {});
      var ha = p(ka);
      (Ua = i(ha, 'January 6, 2022')), ha.forEach(t), (X = e(Za, 'TD', {}));
      var zs = p(X);
      (J = i(zs, '\u22121%')), zs.forEach(t), (fa = e(Za, 'TD', {}));
      var os = p(fa);
      (Ya = i(os, '\u22120')), os.forEach(t), (Z = e(Za, 'TD', {}));
      var ws = p(Z);
      (R = i(ws, '\u22124%')),
        ws.forEach(t),
        Za.forEach(t),
        (pa = e(Ra, 'TR', {}));
      var as = p(pa);
      za = e(as, 'TD', {});
      var ls = p(za);
      (ga = i(ls, 'January 7, 2022')), ls.forEach(t), (G = e(as, 'TD', {}));
      var cs = p(G);
      (wa = i(cs, '\u22122%')), cs.forEach(t), (Oa = e(as, 'TD', {}));
      var Ds = p(Oa);
      (U = i(Ds, '\u22120')), Ds.forEach(t), (q = e(as, 'TD', {}));
      var is = p(q);
      (Sa = i(is, '\u22125%')),
        is.forEach(t),
        as.forEach(t),
        (Da = e(Ra, 'TR', {}));
      var ss = p(Da);
      N = e(ss, 'TD', {});
      var Ps = p(N);
      (Y = i(Ps, 'January 10, 2022')), Ps.forEach(t), (ia = e(ss, 'TD', {}));
      var Ms = p(ia);
      (Wa = i(Ms, '\u22122%')), Ms.forEach(t), (B = e(ss, 'TD', {}));
      var ct = p(B);
      (ra = i(ct, '\u22121')), ct.forEach(t), (Pa = e(ss, 'TD', {}));
      var it = p(Pa);
      (la = i(it, '\u22124%')),
        it.forEach(t),
        ss.forEach(t),
        Ra.forEach(t),
        K.forEach(t),
        this.h();
    },
    h() {
      o(r, 'data-column', 'Date'),
        o(r, 'data-row', '-1'),
        o(m, 'data-column', 'S&P 500'),
        o(m, 'data-row', '-1'),
        o(b, 'data-column', 'Dow'),
        o(b, 'data-row', '-1'),
        o(x, 'data-column', 'Nasdaq'),
        o(x, 'data-row', '-1'),
        o(s, 'class', 'linechart-data');
    },
    m(M, K) {
      P(M, s, K),
        a(s, f),
        a(f, d),
        a(d, r),
        a(r, u),
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
        a(ma, Ca),
        a(I, V),
        a(V, aa),
        a(I, Ia),
        a(Ia, Ga),
        a(Q, C),
        a(C, W),
        a(W, ya),
        a(C, Va),
        a(Va, H),
        a(C, sa),
        a(sa, Ja),
        a(C, ba),
        a(ba, O),
        a(Q, F),
        a(F, Ha),
        a(Ha, $a),
        a(F, A),
        a(A, ta),
        a(F, ja),
        a(ja, qa),
        a(F, na),
        a(na, La),
        a(Q, _a),
        a(_a, j),
        a(j, ca),
        a(_a, oa),
        a(oa, da),
        a(_a, S),
        a(S, ea),
        a(_a, Ma),
        a(Ma, Ba),
        a(Q, L),
        a(L, ka),
        a(ka, Ua),
        a(L, X),
        a(X, J),
        a(L, fa),
        a(fa, Ya),
        a(L, Z),
        a(Z, R),
        a(Q, pa),
        a(pa, za),
        a(za, ga),
        a(pa, G),
        a(G, wa),
        a(pa, Oa),
        a(Oa, U),
        a(pa, q),
        a(q, Sa),
        a(Q, Da),
        a(Da, N),
        a(N, Y),
        a(Da, ia),
        a(ia, Wa),
        a(Da, B),
        a(B, ra),
        a(Da, Pa),
        a(Pa, la);
    },
    p: xa,
    i: xa,
    o: xa,
    d(M) {
      M && t(s);
    },
  };
}
class rp extends cn {
  constructor(s) {
    super();
    rn(this, s, null, Rp, un, {});
  }
}
var Np = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: rp,
});
function Gp(E) {
  switch (E) {
    case './ai2svelte/ai-chart.exclude.svelte':
      return oe(
        () =>
          Promise.resolve().then(function () {
            return Op;
          }),
        void 0
      );
    case './ai2svelte/ai-linechart.exclude.svelte':
      return oe(
        () => import('./ai-linechart.exclude-d9547a85.js'),
        [
          'chunks/ai-linechart.exclude-d9547a85.js',
          'assets/ai-linechart.exclude-a5b4ced9.css',
          'chunks/vendor-362b926b.js',
          'assets/vendor-c9bf64b2.css',
          'chunks/paths-6758d194.js',
        ]
      );
    case './ai2svelte/data-table.exclude.svelte':
      return oe(
        () =>
          Promise.resolve().then(function () {
            return Np;
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
const Jp = (E) => ({}),
  up = (E) => ({ slot: 'hidden' });
function qp(E) {
  let s, f;
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
        Is(s.$$.fragment);
      },
      l(d) {
        Hs(s.$$.fragment, d);
      },
      m(d, r) {
        $s(s, d, r), (f = !0);
      },
      p: xa,
      i(d) {
        f || (ua(s.$$.fragment, d), (f = !0));
      },
      o(d) {
        Aa(s.$$.fragment, d), (f = !1);
      },
      d(d) {
        Cs(s, d);
      },
    }
  );
}
function Bp(E) {
  let s, f;
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
        Is(s.$$.fragment);
      },
      l(d) {
        Hs(s.$$.fragment, d);
      },
      m(d, r) {
        $s(s, d, r), (f = !0);
      },
      p: xa,
      i(d) {
        f || (ua(s.$$.fragment, d), (f = !0));
      },
      o(d) {
        Aa(s.$$.fragment, d), (f = !1);
      },
      d(d) {
        Cs(s, d);
      },
    }
  );
}
function Up(E) {
  let s, f, d, r, u, m;
  return {
    c() {
      (s = n('div')),
        (f = n('h4')),
        (d = c('Earthquake in Haiti')),
        (r = v()),
        (u = n('p')),
        (m = c('A 7.0 magnitude earthquake struck the island on Tuesday.')),
        this.h();
    },
    l(y) {
      s = e(y, 'DIV', { slot: !0, class: !0 });
      var b = p(s);
      f = e(b, 'H4', { class: !0 });
      var D = p(f);
      (d = i(D, 'Earthquake in Haiti')),
        D.forEach(t),
        (r = h(b)),
        (u = e(b, 'P', {}));
      var x = p(u);
      (m = i(x, 'A 7.0 magnitude earthquake struck the island on Tuesday.')),
        x.forEach(t),
        b.forEach(t),
        this.h();
    },
    h() {
      o(f, 'class', 'svelte-xmoab3'),
        o(s, 'slot', 'title'),
        o(s, 'class', 'title svelte-xmoab3');
    },
    m(y, b) {
      P(y, s, b), a(s, f), a(f, d), a(s, r), a(s, u), a(u, m);
    },
    d(y) {
      y && t(s);
    },
  };
}
function Yp(E) {
  let s, f, d, r, u, m;
  return {
    c() {
      (s = n('aside')),
        (f = n('p')),
        (d = c('Note: Data current as of Wednesday.')),
        (r = v()),
        (u = n('p')),
        (m = c('Source: USGIS')),
        this.h();
    },
    l(y) {
      s = e(y, 'ASIDE', { slot: !0 });
      var b = p(s);
      f = e(b, 'P', { class: !0 });
      var D = p(f);
      (d = i(D, 'Note: Data current as of Wednesday.')),
        D.forEach(t),
        (r = h(b)),
        (u = e(b, 'P', { class: !0 }));
      var x = p(u);
      (m = i(x, 'Source: USGIS')), x.forEach(t), b.forEach(t), this.h();
    },
    h() {
      o(f, 'class', 'note'), o(u, 'class', 'source'), o(s, 'slot', 'notes');
    },
    m(y, b) {
      P(y, s, b), a(s, f), a(f, d), a(s, r), a(s, u), a(u, m);
    },
    d(y) {
      y && t(s);
    },
  };
}
function Wp(E) {
  let s, f;
  return (
    (s = new mn({
      props: {
        AiGraphic: _n,
        id: 'ai-map',
        ariaHidden: !0,
        size: 'wide',
        ariaDescription:
          'A map of Haiti shows the epicenter of an earthquake in the southwest of the country.',
        $$slots: { notes: [Yp], title: [Up] },
        $$scope: { ctx: E },
      },
    })),
    {
      c() {
        Is(s.$$.fragment);
      },
      l(d) {
        Hs(s.$$.fragment, d);
      },
      m(d, r) {
        $s(s, d, r), (f = !0);
      },
      p(d, r) {
        const u = {};
        r & 4 && (u.$$scope = { dirty: r, ctx: d }), s.$set(u);
      },
      i(d) {
        f || (ua(s.$$.fragment, d), (f = !0));
      },
      o(d) {
        Aa(s.$$.fragment, d), (f = !1);
      },
      d(d) {
        Cs(s, d);
      },
    }
  );
}
function Fp(E) {
  return { c: xa, l: xa, m: xa, p: xa, i: xa, o: xa, d: xa };
}
function Kp(E) {
  let s, f;
  return (
    (s = new mn({
      props: {
        AiGraphic: E[3],
        ariaDescription:
          'A map of Haiti shows the epicenter of an earthquake in the southwest of the country.',
        $$slots: { hidden: [Xp] },
        $$scope: { ctx: E },
      },
    })),
    {
      c() {
        Is(s.$$.fragment);
      },
      l(d) {
        Hs(s.$$.fragment, d);
      },
      m(d, r) {
        $s(s, d, r), (f = !0);
      },
      p(d, r) {
        const u = {};
        r & 4 && (u.$$scope = { dirty: r, ctx: d }), s.$set(u);
      },
      i(d) {
        f || (ua(s.$$.fragment, d), (f = !0));
      },
      o(d) {
        Aa(s.$$.fragment, d), (f = !1);
      },
      d(d) {
        Cs(s, d);
      },
    }
  );
}
function Qp(E) {
  let s, f;
  return (
    (s = new rp({})),
    {
      c() {
        Is(s.$$.fragment);
      },
      l(d) {
        Hs(s.$$.fragment, d);
      },
      m(d, r) {
        $s(s, d, r), (f = !0);
      },
      i(d) {
        f || (ua(s.$$.fragment, d), (f = !0));
      },
      o(d) {
        Aa(s.$$.fragment, d), (f = !1);
      },
      d(d) {
        Cs(s, d);
      },
    }
  );
}
function Xp(E) {
  let s;
  const f = E[1].default,
    d = vn(f, E, E[2], up),
    r = d || Qp();
  return {
    c() {
      r && r.c();
    },
    l(u) {
      r && r.l(u);
    },
    m(u, m) {
      r && r.m(u, m), (s = !0);
    },
    p(u, m) {
      d &&
        d.p &&
        (!s || m & 4) &&
        kn(d, f, u, u[2], s ? gn(f, u[2], m, Jp) : fn(u[2]), up);
    },
    i(u) {
      s || (ua(r, u), (s = !0));
    },
    o(u) {
      Aa(r, u), (s = !1);
    },
    d(u) {
      r && r.d(u);
    },
  };
}
function Zp(E) {
  return { c: xa, l: xa, m: xa, p: xa, i: xa, o: xa, d: xa };
}
function ao(E) {
  let s,
    f,
    d = {
      ctx: E,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Zp,
      then: Kp,
      catch: Fp,
      value: 3,
      blocks: [, , ,],
    };
  return (
    Ip(E[0]('ai-linechart'), d),
    {
      c() {
        (s = dn()), d.block.c();
      },
      l(r) {
        (s = dn()), d.block.l(r);
      },
      m(r, u) {
        P(r, s, u),
          d.block.m(r, (d.anchor = u)),
          (d.mount = () => s.parentNode),
          (d.anchor = s),
          (f = !0);
      },
      p(r, u) {
        (E = r), $p(d, E, u);
      },
      i(r) {
        f || (ua(d.block), (f = !0));
      },
      o(r) {
        for (let u = 0; u < 3; u += 1) {
          const m = d.blocks[u];
          Aa(m);
        }
        f = !1;
      },
      d(r) {
        r && t(s), d.block.d(r), (d.token = null), (d = null);
      },
    }
  );
}
function so(E) {
  let s,
    f,
    d,
    r,
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
    Ca,
    V,
    aa,
    Ia,
    Ga,
    C,
    W,
    ya,
    Va,
    H,
    sa,
    Ja,
    ba,
    O,
    F,
    Ha,
    $a,
    A,
    ta,
    ja,
    qa,
    na,
    La,
    _a,
    j,
    ca,
    oa,
    da,
    S,
    ea,
    Ma,
    Ba,
    L,
    ka,
    Ua,
    X,
    J,
    fa,
    Ya,
    Z,
    R,
    pa,
    za,
    ga,
    G,
    wa,
    Oa,
    U,
    q,
    Sa,
    Da,
    N,
    Y,
    ia,
    Wa,
    B,
    ra,
    Pa,
    la,
    M,
    K,
    Ka,
    va,
    g,
    ds,
    ks,
    ts,
    Ra,
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
AltText: Add a descriptive line on the graphic <span class="token keyword">for</span> <span class="token function">screen</span> readers. 

<span class="token punctuation">[</span><span class="token punctuation">]</span></code>`,
    us,
    Na,
    ps,
    bs,
    Za,
    ha,
    zs,
    os,
    ws,
    as,
    ls,
    cs,
    Ds,
    is,
    ss,
    Ps,
    Ms,
    ct,
    it,
    St,
    Ws,
    kp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MyAiChart <span class="token keyword">from</span> <span class="token string">'./some-chart.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span>
  <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>MyAiChart<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wide<span class="token punctuation">"</span></span>
  <span class="token attr-name">ariaDescription</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A map of Haiti shows the epicenter of an earthquake in the southwest of the country.<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span></code>`,
    Vt,
    Os,
    Ht,
    Rs,
    vt,
    En,
    yn,
    ht,
    bn,
    jt,
    Fs,
    fp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    Lt,
    Ns,
    Mt,
    Gs,
    mt,
    zn,
    wn,
    Ks,
    Dn,
    Qs,
    Pn,
    Tn,
    Ot,
    Xs,
    gp = `<code class="language-bash"><span class="token comment"># In your Google doc...</span>
<span class="token punctuation">[</span>blocks<span class="token punctuation">]</span>

<span class="token comment"># ...</span>
Type: ai2svelte
ComponentName: my-chart

<span class="token punctuation">[</span><span class="token punctuation">]</span></code>`,
    Rt,
    Zs,
    vp = `<code class="language-svelte"><span class="token comment">&lt;!-- src/lib/Page.svelte --></span>
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
    Nt,
    Js,
    js,
    An,
    _t,
    xn,
    In,
    at,
    $n,
    Cn,
    Sn,
    xs,
    Et,
    Vn,
    Hn,
    yt,
    jn,
    Ln,
    bt,
    Mn,
    On,
    zt,
    Rn,
    Nn,
    Gt,
    As,
    wt,
    Gn,
    Jn,
    Dt,
    qn,
    Bn,
    st,
    Un,
    Pt,
    Yn,
    Wn,
    Fn,
    tt,
    Kn,
    Tt,
    Qn,
    Xn,
    Jt,
    nt,
    hp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    qt,
    qs,
    Bt,
    rt,
    et,
    Zn,
    At,
    ae,
    se,
    Ut,
    pt,
    mp = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>line-chart-data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
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
    ot,
    te,
    ne,
    Wt;
  return (
    (I = new hn({
      props: { $$slots: { default: [qp] }, $$scope: { ctx: E } },
    })),
    (Os = new hn({
      props: { $$slots: { default: [Bp] }, $$scope: { ctx: E } },
    })),
    (Ns = new hn({
      props: { $$slots: { default: [Wp] }, $$scope: { ctx: E } },
    })),
    (qs = new hn({
      props: { $$slots: { default: [ao] }, $$scope: { ctx: E } },
    })),
    {
      c() {
        (s = n('section')),
          (f = n('h2')),
          (d = c(dp)),
          (r = v()),
          (u = n('p')),
          (m = c('Pass a component created by ')),
          (y = n('a')),
          (b = c('ai2svelte')),
          (D = c(
            ' to this component, which will wrap it in a graphics section tag.'
          )),
          (x = v()),
          (z = n('pre')),
          (Q = v()),
          Is(I.$$.fragment),
          (_ = v()),
          (w = n('section')),
          (ma = n('h2')),
          (Ca = c('Accessibility props')),
          (V = v()),
          (aa = n('p')),
          (Ia = n('code')),
          (Ga = c('ariaHidden')),
          (C = v()),
          (W = n('ul')),
          (ya = n('li')),
          (Va = c('Set to ')),
          (H = n('code')),
          (sa = c('true')),
          (Ja = c(` by default, which means HTML text content in the
ai2svelte component are visible on the page but not read aloud by screen readers.
(Read more about aria-hidden elements `)),
          (ba = n('a')),
          (O = c('here')),
          (F = c('.)')),
          (Ha = v()),
          ($a = n('li')),
          (A = c('Set it to ')),
          (ta = n('code')),
          (ja = c('false')),
          (qa = c(
            ' to make the screen reader read aloud HTML text content in ai2svelte.'
          )),
          (na = v()),
          (La = n('p')),
          (_a = n('code')),
          (j = c('ariaDescription')),
          (ca = v()),
          (oa = n('ul')),
          (da = n('li')),
          (S = c('If ')),
          (ea = n('code')),
          (Ma = c('ariaHidden')),
          (Ba = c(' is ')),
          (L = n('code')),
          (ka = c('true')),
          (Ua = c(', make sure you add an ')),
          (X = n('code')),
          (J = c('ariaDescription')),
          (fa = c(
            ', which is invisible on the page but is read aloud by screen readers.'
          )),
          (Ya = v()),
          (Z = n('li')),
          (R = c('This prop takes a string, like altText for an image.')),
          (pa = v()),
          (za = n('li')),
          (ga = c(
            'It should describe what the chart is showing and why it\u2019s important. This is helpful for:'
          )),
          (G = n('ul')),
          (wa = n('li')),
          (Oa = c(
            'Blind readers using screen-reading or Braille conversion software'
          )),
          (U = v()),
          (q = n('li')),
          (Sa = c(
            'All readers if the image is unavailable or takes too long to load'
          )),
          (Da = v()),
          (N = n('li')),
          (Y = c(
            'Read about writing aria description, also known as alt text, '
          )),
          (ia = n('a')),
          (Wa = c('here')),
          (B = c('.')),
          (ra = v()),
          (Pa = n('section')),
          (la = n('p')),
          (M = c('\u{1F6A8} ')),
          (K = n('strong')),
          (Ka = c('Important:')),
          (va = c(' If ')),
          (g = n('code')),
          (ds = c('ariaHidden')),
          (ks = c(' is ')),
          (ts = n('code')),
          (Ra = c('true')),
          (Qa = c(' but you are missing ')),
          (ns = n('code')),
          (fs = c('ariaDescription')),
          (gs = c(
            ' or some other special alternative for screen readers (more on this later), your graphic will be hidden from the page and you will see a warning in your console.'
          )),
          (vs = v()),
          (Ta = n('p')),
          (hs = c('Graphics kit users can set your ')),
          (es = n('code')),
          (ms = c('ariaHidden')),
          (_s = c(' prop and write your  ')),
          (Ea = n('code')),
          (Es = c('ariaDescription')),
          (ys = c(' in the google doc like this:')),
          (rs = v()),
          (Fa = n('pre')),
          (us = v()),
          (Na = n('section')),
          (ps = n('h2')),
          (bs = c('Graphic width')),
          (Za = v()),
          (ha = n('p')),
          (zs = c(
            'Adjust the size of the graphic by passing a class name corresponding to one of our well widths: '
          )),
          (os = n('code')),
          (ws = c('wide')),
          (as = c(', ')),
          (ls = n('code')),
          (cs = c('wider')),
          (Ds = c(', ')),
          (is = n('code')),
          (ss = c('widest')),
          (Ps = c(' or ')),
          (Ms = n('code')),
          (ct = c('fluid')),
          (it = c('.')),
          (St = v()),
          (Ws = n('pre')),
          (Vt = v()),
          Is(Os.$$.fragment),
          (Ht = v()),
          (Rs = n('section')),
          (vt = n('h2')),
          (En = c('Chart title, description, source and note')),
          (yn = v()),
          (ht = n('p')),
          (bn = c('Add additional chart chatter through slots.')),
          (jt = v()),
          (Fs = n('pre')),
          (Lt = v()),
          Is(Ns.$$.fragment),
          (Mt = v()),
          (Gs = n('section')),
          (mt = n('h2')),
          (zn = c('Using ArchieML google doc')),
          (wn = v()),
          (Ks = n('p')),
          (Dn = c('You can use this component to layout AI graphics via an ')),
          (Qs = n('a')),
          (Pn = c('ArchieML')),
          (Tn = c(
            '-formatted Google doc by using the following pattern to dynamically import an ai2svelte component:'
          )),
          (Ot = v()),
          (Xs = n('pre')),
          (Rt = v()),
          (Zs = n('pre')),
          (Nt = v()),
          (Js = n('section')),
          (js = n('p')),
          (An = c('This comes with some restrictions, though. Be sure your ')),
          (_t = n('code')),
          (xn = c('fetchComponent')),
          (In = c(' function follows ')),
          (at = n('a')),
          ($n = c('the limits on dynamic imports')),
          (Cn = c('.')),
          (Sn = v()),
          (xs = n('p')),
          (Et = n('strong')),
          (Vn = c('NOTE')),
          (Hn = c(': Make sure you wrap the function ')),
          (yt = n('code')),
          (jn = c('truthyString()')),
          (Ln = c(' around ')),
          (bt = n('code')),
          (Mn = c('block.StackBackground')),
          (On = c('. ')),
          (zt = n('code')),
          (Rn = c('truthyString()')),
          (Nn =
            c(` converts the string pulled from Google docs (\u2018true\u2019, \u2018false\u2019, etc.)
into a Boolean.`)),
          (Gt = v()),
          (As = n('section')),
          (wt = n('h2')),
          (Gn = c('Customising data for screen readers')),
          (Jn = v()),
          (Dt = n('p')),
          (qn =
            c(`Sometimes, in addition to or instead of adding an aria description for graphics,
we want to also provide a data table, a lengthier description with more complex element structure or something else.`)),
          (Bn = v()),
          (st = n('p')),
          (Un = c(
            'You can add custom information for screen readers only by using the '
          )),
          (Pt = n('code')),
          (Yn = c('hidden')),
          (Wn = c(' slot.')),
          (Fn = v()),
          (tt = n('p')),
          (Kn = c('For example, for the line chart below, we can add a ')),
          (Tt = n('strong')),
          (Qn = c('data table')),
          (Xn = c(' that helps screen-reader users navigate the data.')),
          (Jt = v()),
          (nt = n('pre')),
          (qt = v()),
          Is(qs.$$.fragment),
          (Bt = v()),
          (rt = n('section')),
          (et = n('p')),
          (Zn = c('This is what ')),
          (At = n('code')),
          (ae = c('<SRDataTable/>')),
          (se = c(
            ' looks like. (You can make an HTML table using DataWrapper.)'
          )),
          (Ut = v()),
          (pt = n('pre')),
          (Yt = v()),
          (ut = n('section')),
          (dt = n('p')),
          (ot = n('a')),
          (te = c('Read this')),
          (ne = c(
            ' for more information on screen-reader data tables for charts.'
          )),
          this.h();
      },
      l(k) {
        s = e(k, 'SECTION', {});
        var T = p(s);
        f = e(T, 'H2', {});
        var xt = p(f);
        (d = i(xt, dp)), xt.forEach(t), (r = h(T)), (u = e(T, 'P', {}));
        var lt = p(u);
        (m = i(lt, 'Pass a component created by ')),
          (y = e(lt, 'A', { href: !0, rel: !0 }));
        var It = p(y);
        (b = i(It, 'ai2svelte')),
          It.forEach(t),
          (D = i(
            lt,
            ' to this component, which will wrap it in a graphics section tag.'
          )),
          lt.forEach(t),
          T.forEach(t),
          (x = h(k)),
          (z = e(k, 'PRE', { class: !0 }));
        var Ft = p(z);
        Ft.forEach(t),
          (Q = h(k)),
          Hs(I.$$.fragment, k),
          (_ = h(k)),
          (w = e(k, 'SECTION', {}));
        var Ts = p(w);
        ma = e(Ts, 'H2', {});
        var ce = p(ma);
        (Ca = i(ce, 'Accessibility props')),
          ce.forEach(t),
          (V = h(Ts)),
          (aa = e(Ts, 'P', {}));
        var ie = p(aa);
        Ia = e(ie, 'CODE', {});
        var re = p(Ia);
        (Ga = i(re, 'ariaHidden')),
          re.forEach(t),
          ie.forEach(t),
          (C = h(Ts)),
          (W = e(Ts, 'UL', {}));
        var Kt = p(W);
        ya = e(Kt, 'LI', {});
        var kt = p(ya);
        (Va = i(kt, 'Set to ')), (H = e(kt, 'CODE', {}));
        var ue = p(H);
        (sa = i(ue, 'true')),
          ue.forEach(t),
          (Ja = i(
            kt,
            ` by default, which means HTML text content in the
ai2svelte component are visible on the page but not read aloud by screen readers.
(Read more about aria-hidden elements `
          )),
          (ba = e(kt, 'A', { href: !0, rel: !0 }));
        var de = p(ba);
        (O = i(de, 'here')),
          de.forEach(t),
          (F = i(kt, '.)')),
          kt.forEach(t),
          (Ha = h(Kt)),
          ($a = e(Kt, 'LI', {}));
        var Qt = p($a);
        (A = i(Qt, 'Set it to ')), (ta = e(Qt, 'CODE', {}));
        var ke = p(ta);
        (ja = i(ke, 'false')),
          ke.forEach(t),
          (qa = i(
            Qt,
            ' to make the screen reader read aloud HTML text content in ai2svelte.'
          )),
          Qt.forEach(t),
          Kt.forEach(t),
          (na = h(Ts)),
          (La = e(Ts, 'P', {}));
        var fe = p(La);
        _a = e(fe, 'CODE', {});
        var ge = p(_a);
        (j = i(ge, 'ariaDescription')),
          ge.forEach(t),
          fe.forEach(t),
          (ca = h(Ts)),
          (oa = e(Ts, 'UL', {}));
        var Bs = p(oa);
        da = e(Bs, 'LI', {});
        var Us = p(da);
        (S = i(Us, 'If ')), (ea = e(Us, 'CODE', {}));
        var ve = p(ea);
        (Ma = i(ve, 'ariaHidden')),
          ve.forEach(t),
          (Ba = i(Us, ' is ')),
          (L = e(Us, 'CODE', {}));
        var he = p(L);
        (ka = i(he, 'true')),
          he.forEach(t),
          (Ua = i(Us, ', make sure you add an ')),
          (X = e(Us, 'CODE', {}));
        var me = p(X);
        (J = i(me, 'ariaDescription')),
          me.forEach(t),
          (fa = i(
            Us,
            ', which is invisible on the page but is read aloud by screen readers.'
          )),
          Us.forEach(t),
          (Ya = h(Bs)),
          (Z = e(Bs, 'LI', {}));
        var _e = p(Z);
        (R = i(_e, 'This prop takes a string, like altText for an image.')),
          _e.forEach(t),
          (pa = h(Bs)),
          (za = e(Bs, 'LI', {}));
        var ee = p(za);
        (ga = i(
          ee,
          'It should describe what the chart is showing and why it\u2019s important. This is helpful for:'
        )),
          (G = e(ee, 'UL', {}));
        var Xt = p(G);
        wa = e(Xt, 'LI', {});
        var Ee = p(wa);
        (Oa = i(
          Ee,
          'Blind readers using screen-reading or Braille conversion software'
        )),
          Ee.forEach(t),
          (U = h(Xt)),
          (q = e(Xt, 'LI', {}));
        var ye = p(q);
        (Sa = i(
          ye,
          'All readers if the image is unavailable or takes too long to load'
        )),
          ye.forEach(t),
          Xt.forEach(t),
          ee.forEach(t),
          (Da = h(Bs)),
          (N = e(Bs, 'LI', {}));
        var Zt = p(N);
        (Y = i(
          Zt,
          'Read about writing aria description, also known as alt text, '
        )),
          (ia = e(Zt, 'A', { href: !0, rel: !0 }));
        var be = p(ia);
        (Wa = i(be, 'here')),
          be.forEach(t),
          (B = i(Zt, '.')),
          Zt.forEach(t),
          Bs.forEach(t),
          (ra = h(Ts)),
          (Pa = e(Ts, 'SECTION', { class: !0 }));
        var ze = p(Pa);
        la = e(ze, 'P', {});
        var Ss = p(la);
        (M = i(Ss, '\u{1F6A8} ')), (K = e(Ss, 'STRONG', {}));
        var we = p(K);
        (Ka = i(we, 'Important:')),
          we.forEach(t),
          (va = i(Ss, ' If ')),
          (g = e(Ss, 'CODE', {}));
        var De = p(g);
        (ds = i(De, 'ariaHidden')),
          De.forEach(t),
          (ks = i(Ss, ' is ')),
          (ts = e(Ss, 'CODE', {}));
        var Pe = p(ts);
        (Ra = i(Pe, 'true')),
          Pe.forEach(t),
          (Qa = i(Ss, ' but you are missing ')),
          (ns = e(Ss, 'CODE', {}));
        var Te = p(ns);
        (fs = i(Te, 'ariaDescription')),
          Te.forEach(t),
          (gs = i(
            Ss,
            ' or some other special alternative for screen readers (more on this later), your graphic will be hidden from the page and you will see a warning in your console.'
          )),
          Ss.forEach(t),
          ze.forEach(t),
          (vs = h(Ts)),
          (Ta = e(Ts, 'P', {}));
        var ft = p(Ta);
        (hs = i(ft, 'Graphics kit users can set your ')),
          (es = e(ft, 'CODE', {}));
        var Ae = p(es);
        (ms = i(Ae, 'ariaHidden')),
          Ae.forEach(t),
          (_s = i(ft, ' prop and write your  ')),
          (Ea = e(ft, 'CODE', {}));
        var xe = p(Ea);
        (Es = i(xe, 'ariaDescription')),
          xe.forEach(t),
          (ys = i(ft, ' in the google doc like this:')),
          ft.forEach(t),
          Ts.forEach(t),
          (rs = h(k)),
          (Fa = e(k, 'PRE', { class: !0 }));
        var _p = p(Fa);
        _p.forEach(t), (us = h(k)), (Na = e(k, 'SECTION', {}));
        var an = p(Na);
        ps = e(an, 'H2', {});
        var Ie = p(ps);
        (bs = i(Ie, 'Graphic width')),
          Ie.forEach(t),
          (Za = h(an)),
          (ha = e(an, 'P', {}));
        var Vs = p(ha);
        (zs = i(
          Vs,
          'Adjust the size of the graphic by passing a class name corresponding to one of our well widths: '
        )),
          (os = e(Vs, 'CODE', {}));
        var $e = p(os);
        (ws = i($e, 'wide')),
          $e.forEach(t),
          (as = i(Vs, ', ')),
          (ls = e(Vs, 'CODE', {}));
        var Ce = p(ls);
        (cs = i(Ce, 'wider')),
          Ce.forEach(t),
          (Ds = i(Vs, ', ')),
          (is = e(Vs, 'CODE', {}));
        var Se = p(is);
        (ss = i(Se, 'widest')),
          Se.forEach(t),
          (Ps = i(Vs, ' or ')),
          (Ms = e(Vs, 'CODE', {}));
        var Ve = p(Ms);
        (ct = i(Ve, 'fluid')),
          Ve.forEach(t),
          (it = i(Vs, '.')),
          Vs.forEach(t),
          an.forEach(t),
          (St = h(k)),
          (Ws = e(k, 'PRE', { class: !0 }));
        var Ep = p(Ws);
        Ep.forEach(t),
          (Vt = h(k)),
          Hs(Os.$$.fragment, k),
          (Ht = h(k)),
          (Rs = e(k, 'SECTION', {}));
        var sn = p(Rs);
        vt = e(sn, 'H2', {});
        var He = p(vt);
        (En = i(He, 'Chart title, description, source and note')),
          He.forEach(t),
          (yn = h(sn)),
          (ht = e(sn, 'P', {}));
        var je = p(ht);
        (bn = i(je, 'Add additional chart chatter through slots.')),
          je.forEach(t),
          sn.forEach(t),
          (jt = h(k)),
          (Fs = e(k, 'PRE', { class: !0 }));
        var yp = p(Fs);
        yp.forEach(t),
          (Lt = h(k)),
          Hs(Ns.$$.fragment, k),
          (Mt = h(k)),
          (Gs = e(k, 'SECTION', {}));
        var tn = p(Gs);
        mt = e(tn, 'H2', {});
        var Le = p(mt);
        (zn = i(Le, 'Using ArchieML google doc')),
          Le.forEach(t),
          (wn = h(tn)),
          (Ks = e(tn, 'P', {}));
        var nn = p(Ks);
        (Dn = i(
          nn,
          'You can use this component to layout AI graphics via an '
        )),
          (Qs = e(nn, 'A', { href: !0, rel: !0 }));
        var Me = p(Qs);
        (Pn = i(Me, 'ArchieML')),
          Me.forEach(t),
          (Tn = i(
            nn,
            '-formatted Google doc by using the following pattern to dynamically import an ai2svelte component:'
          )),
          nn.forEach(t),
          tn.forEach(t),
          (Ot = h(k)),
          (Xs = e(k, 'PRE', { class: !0 }));
        var bp = p(Xs);
        bp.forEach(t), (Rt = h(k)), (Zs = e(k, 'PRE', { class: !0 }));
        var zp = p(Zs);
        zp.forEach(t), (Nt = h(k)), (Js = e(k, 'SECTION', {}));
        var en = p(Js);
        js = e(en, 'P', {});
        var gt = p(js);
        (An = i(
          gt,
          'This comes with some restrictions, though. Be sure your '
        )),
          (_t = e(gt, 'CODE', {}));
        var Oe = p(_t);
        (xn = i(Oe, 'fetchComponent')),
          Oe.forEach(t),
          (In = i(gt, ' function follows ')),
          (at = e(gt, 'A', { href: !0, rel: !0 }));
        var Re = p(at);
        ($n = i(Re, 'the limits on dynamic imports')),
          Re.forEach(t),
          (Cn = i(gt, '.')),
          gt.forEach(t),
          (Sn = h(en)),
          (xs = e(en, 'P', {}));
        var Ls = p(xs);
        Et = e(Ls, 'STRONG', {});
        var Ne = p(Et);
        (Vn = i(Ne, 'NOTE')),
          Ne.forEach(t),
          (Hn = i(Ls, ': Make sure you wrap the function ')),
          (yt = e(Ls, 'CODE', {}));
        var Ge = p(yt);
        (jn = i(Ge, 'truthyString()')),
          Ge.forEach(t),
          (Ln = i(Ls, ' around ')),
          (bt = e(Ls, 'CODE', {}));
        var Je = p(bt);
        (Mn = i(Je, 'block.StackBackground')),
          Je.forEach(t),
          (On = i(Ls, '. ')),
          (zt = e(Ls, 'CODE', {}));
        var qe = p(zt);
        (Rn = i(qe, 'truthyString()')),
          qe.forEach(t),
          (Nn = i(
            Ls,
            ` converts the string pulled from Google docs (\u2018true\u2019, \u2018false\u2019, etc.)
into a Boolean.`
          )),
          Ls.forEach(t),
          en.forEach(t),
          (Gt = h(k)),
          (As = e(k, 'SECTION', { class: !0 }));
        var Ys = p(As);
        wt = e(Ys, 'H2', {});
        var Be = p(wt);
        (Gn = i(Be, 'Customising data for screen readers')),
          Be.forEach(t),
          (Jn = h(Ys)),
          (Dt = e(Ys, 'P', {}));
        var Ue = p(Dt);
        (qn = i(
          Ue,
          `Sometimes, in addition to or instead of adding an aria description for graphics,
we want to also provide a data table, a lengthier description with more complex element structure or something else.`
        )),
          Ue.forEach(t),
          (Bn = h(Ys)),
          (st = e(Ys, 'P', {}));
        var pn = p(st);
        (Un = i(
          pn,
          'You can add custom information for screen readers only by using the '
        )),
          (Pt = e(pn, 'CODE', {}));
        var Ye = p(Pt);
        (Yn = i(Ye, 'hidden')),
          Ye.forEach(t),
          (Wn = i(pn, ' slot.')),
          pn.forEach(t),
          (Fn = h(Ys)),
          (tt = e(Ys, 'P', {}));
        var on = p(tt);
        (Kn = i(on, 'For example, for the line chart below, we can add a ')),
          (Tt = e(on, 'STRONG', {}));
        var We = p(Tt);
        (Qn = i(We, 'data table')),
          We.forEach(t),
          (Xn = i(on, ' that helps screen-reader users navigate the data.')),
          on.forEach(t),
          Ys.forEach(t),
          (Jt = h(k)),
          (nt = e(k, 'PRE', { class: !0 }));
        var wp = p(nt);
        wp.forEach(t),
          (qt = h(k)),
          Hs(qs.$$.fragment, k),
          (Bt = h(k)),
          (rt = e(k, 'SECTION', {}));
        var Fe = p(rt);
        et = e(Fe, 'P', {});
        var ln = p(et);
        (Zn = i(ln, 'This is what ')), (At = e(ln, 'CODE', {}));
        var Ke = p(At);
        (ae = i(Ke, '<SRDataTable/>')),
          Ke.forEach(t),
          (se = i(
            ln,
            ' looks like. (You can make an HTML table using DataWrapper.)'
          )),
          ln.forEach(t),
          Fe.forEach(t),
          (Ut = h(k)),
          (pt = e(k, 'PRE', { class: !0 }));
        var Dp = p(pt);
        Dp.forEach(t), (Yt = h(k)), (ut = e(k, 'SECTION', {}));
        var Qe = p(ut);
        dt = e(Qe, 'P', {});
        var pe = p(dt);
        ot = e(pe, 'A', { href: !0, rel: !0 });
        var Xe = p(ot);
        (te = i(Xe, 'Read this')),
          Xe.forEach(t),
          (ne = i(
            pe,
            ' for more information on screen-reader data tables for charts.'
          )),
          pe.forEach(t),
          Qe.forEach(t),
          this.h();
      },
      h() {
        o(y, 'href', 'https://github.com/reuters-graphics/ai2svelte'),
          o(y, 'rel', 'nofollow'),
          o(z, 'class', 'language-svelte'),
          o(
            ba,
            'href',
            'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden'
          ),
          o(ba, 'rel', 'nofollow'),
          o(
            ia,
            'href',
            'https://medium.com/nightingale/writing-alt-text-for-data-visualization-2a218ef43f81'
          ),
          o(ia, 'rel', 'nofollow'),
          o(Pa, 'class', 'note'),
          o(Fa, 'class', 'language-bash'),
          o(Ws, 'class', 'language-svelte'),
          o(Fs, 'class', 'language-svelte'),
          o(Qs, 'href', 'http://archieml.org/'),
          o(Qs, 'rel', 'nofollow'),
          o(Xs, 'class', 'language-bash'),
          o(Zs, 'class', 'language-svelte'),
          o(
            at,
            'href',
            'https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations'
          ),
          o(at, 'rel', 'nofollow'),
          o(As, 'class', 'pt-5'),
          o(nt, 'class', 'language-svelte'),
          o(pt, 'class', 'language-svelte'),
          o(ot, 'href', 'https://accessibility.psu.edu/images/charts/'),
          o(ot, 'rel', 'nofollow');
      },
      m(k, T) {
        P(k, s, T),
          a(s, f),
          a(f, d),
          a(s, r),
          a(s, u),
          a(u, m),
          a(u, y),
          a(y, b),
          a(u, D),
          P(k, x, T),
          P(k, z, T),
          (z.innerHTML = $),
          P(k, Q, T),
          $s(I, k, T),
          P(k, _, T),
          P(k, w, T),
          a(w, ma),
          a(ma, Ca),
          a(w, V),
          a(w, aa),
          a(aa, Ia),
          a(Ia, Ga),
          a(w, C),
          a(w, W),
          a(W, ya),
          a(ya, Va),
          a(ya, H),
          a(H, sa),
          a(ya, Ja),
          a(ya, ba),
          a(ba, O),
          a(ya, F),
          a(W, Ha),
          a(W, $a),
          a($a, A),
          a($a, ta),
          a(ta, ja),
          a($a, qa),
          a(w, na),
          a(w, La),
          a(La, _a),
          a(_a, j),
          a(w, ca),
          a(w, oa),
          a(oa, da),
          a(da, S),
          a(da, ea),
          a(ea, Ma),
          a(da, Ba),
          a(da, L),
          a(L, ka),
          a(da, Ua),
          a(da, X),
          a(X, J),
          a(da, fa),
          a(oa, Ya),
          a(oa, Z),
          a(Z, R),
          a(oa, pa),
          a(oa, za),
          a(za, ga),
          a(za, G),
          a(G, wa),
          a(wa, Oa),
          a(G, U),
          a(G, q),
          a(q, Sa),
          a(oa, Da),
          a(oa, N),
          a(N, Y),
          a(N, ia),
          a(ia, Wa),
          a(N, B),
          a(w, ra),
          a(w, Pa),
          a(Pa, la),
          a(la, M),
          a(la, K),
          a(K, Ka),
          a(la, va),
          a(la, g),
          a(g, ds),
          a(la, ks),
          a(la, ts),
          a(ts, Ra),
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
          a(Na, ps),
          a(ps, bs),
          a(Na, Za),
          a(Na, ha),
          a(ha, zs),
          a(ha, os),
          a(os, ws),
          a(ha, as),
          a(ha, ls),
          a(ls, cs),
          a(ha, Ds),
          a(ha, is),
          a(is, ss),
          a(ha, Ps),
          a(ha, Ms),
          a(Ms, ct),
          a(ha, it),
          P(k, St, T),
          P(k, Ws, T),
          (Ws.innerHTML = kp),
          P(k, Vt, T),
          $s(Os, k, T),
          P(k, Ht, T),
          P(k, Rs, T),
          a(Rs, vt),
          a(vt, En),
          a(Rs, yn),
          a(Rs, ht),
          a(ht, bn),
          P(k, jt, T),
          P(k, Fs, T),
          (Fs.innerHTML = fp),
          P(k, Lt, T),
          $s(Ns, k, T),
          P(k, Mt, T),
          P(k, Gs, T),
          a(Gs, mt),
          a(mt, zn),
          a(Gs, wn),
          a(Gs, Ks),
          a(Ks, Dn),
          a(Ks, Qs),
          a(Qs, Pn),
          a(Ks, Tn),
          P(k, Ot, T),
          P(k, Xs, T),
          (Xs.innerHTML = gp),
          P(k, Rt, T),
          P(k, Zs, T),
          (Zs.innerHTML = vp),
          P(k, Nt, T),
          P(k, Js, T),
          a(Js, js),
          a(js, An),
          a(js, _t),
          a(_t, xn),
          a(js, In),
          a(js, at),
          a(at, $n),
          a(js, Cn),
          a(Js, Sn),
          a(Js, xs),
          a(xs, Et),
          a(Et, Vn),
          a(xs, Hn),
          a(xs, yt),
          a(yt, jn),
          a(xs, Ln),
          a(xs, bt),
          a(bt, Mn),
          a(xs, On),
          a(xs, zt),
          a(zt, Rn),
          a(xs, Nn),
          P(k, Gt, T),
          P(k, As, T),
          a(As, wt),
          a(wt, Gn),
          a(As, Jn),
          a(As, Dt),
          a(Dt, qn),
          a(As, Bn),
          a(As, st),
          a(st, Un),
          a(st, Pt),
          a(Pt, Yn),
          a(st, Wn),
          a(As, Fn),
          a(As, tt),
          a(tt, Kn),
          a(tt, Tt),
          a(Tt, Qn),
          a(tt, Xn),
          P(k, Jt, T),
          P(k, nt, T),
          (nt.innerHTML = hp),
          P(k, qt, T),
          $s(qs, k, T),
          P(k, Bt, T),
          P(k, rt, T),
          a(rt, et),
          a(et, Zn),
          a(et, At),
          a(At, ae),
          a(et, se),
          P(k, Ut, T),
          P(k, pt, T),
          (pt.innerHTML = mp),
          P(k, Yt, T),
          P(k, ut, T),
          a(ut, dt),
          a(dt, ot),
          a(ot, te),
          a(dt, ne),
          (Wt = !0);
      },
      p(k, [T]) {
        const xt = {};
        T & 4 && (xt.$$scope = { dirty: T, ctx: k }), I.$set(xt);
        const lt = {};
        T & 4 && (lt.$$scope = { dirty: T, ctx: k }), Os.$set(lt);
        const It = {};
        T & 4 && (It.$$scope = { dirty: T, ctx: k }), Ns.$set(It);
        const Ft = {};
        T & 4 && (Ft.$$scope = { dirty: T, ctx: k }), qs.$set(Ft);
      },
      i(k) {
        Wt ||
          (ua(I.$$.fragment, k),
          ua(Os.$$.fragment, k),
          ua(Ns.$$.fragment, k),
          ua(qs.$$.fragment, k),
          (Wt = !0));
      },
      o(k) {
        Aa(I.$$.fragment, k),
          Aa(Os.$$.fragment, k),
          Aa(Ns.$$.fragment, k),
          Aa(qs.$$.fragment, k),
          (Wt = !1);
      },
      d(k) {
        k && t(s),
          k && t(x),
          k && t(z),
          k && t(Q),
          Cs(I, k),
          k && t(_),
          k && t(w),
          k && t(rs),
          k && t(Fa),
          k && t(us),
          k && t(Na),
          k && t(St),
          k && t(Ws),
          k && t(Vt),
          Cs(Os, k),
          k && t(Ht),
          k && t(Rs),
          k && t(jt),
          k && t(Fs),
          k && t(Lt),
          Cs(Ns, k),
          k && t(Mt),
          k && t(Gs),
          k && t(Ot),
          k && t(Xs),
          k && t(Rt),
          k && t(Zs),
          k && t(Nt),
          k && t(Js),
          k && t(Gt),
          k && t(As),
          k && t(Jt),
          k && t(nt),
          k && t(qt),
          Cs(qs, k),
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
const to = {
    title: 'Ai2svelte',
    description: 'A shortcut for ai2svelte graphics.',
    slug: 'ai2svelte',
  },
  { title: dp, description: io, slug: ro } = to;
function no(E, s, f) {
  let { $$slots: d = {}, $$scope: r } = s;
  const u = async (m) => (await Gp(`./ai2svelte/${m}.exclude.svelte`)).default;
  return (
    (E.$$set = (m) => {
      '$$scope' in m && f(2, (r = m.$$scope));
    }),
    [u, d, r]
  );
}
class uo extends cn {
  constructor(s) {
    super();
    rn(this, s, no, so, un, {});
  }
}
export { uo as default, to as metadata };
