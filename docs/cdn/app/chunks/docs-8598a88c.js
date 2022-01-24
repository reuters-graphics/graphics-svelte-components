import {
  S as Nn,
  i as Hn,
  s as zn,
  e as f,
  k as w,
  l as Cs,
  c as k,
  a as g,
  n as E,
  d as p,
  U as Ms,
  b as i,
  _ as na,
  f as b,
  H as c,
  V as ta,
  a3 as Ln,
  x as A,
  $ as mt,
  a0 as vt,
  E as gn,
  F as mn,
  G as vn,
  u as M,
  r as Rs,
  w as Bs,
  a4 as Gn,
  a5 as Un,
  a6 as dt,
  Z as ht,
  a7 as bt,
  D as dn,
  a8 as Xn,
  a9 as qn,
  t as d,
  j as V,
  g as h,
  m as N,
  o as H,
  v as z,
  I as Ds,
} from './vendor-a3a8e12b.js';
import { D as va } from './index-95908c5c.js';
import './@component-docs_components-0771368a.js';
import { a as L } from './paths-6758d194.js';
const { window: ps } = bt,
  _t = (o) => ({}),
  Wn = (o) => ({}),
  yt = (o) => ({}),
  Fn = (o) => ({ description: `${o[17]}-after-description` }),
  $t = (o) => ({}),
  Yn = (o) => ({ description: `${o[17]}-before-description` });
function Zn(o) {
  let a,
    n,
    s,
    l,
    e,
    r,
    u,
    y,
    R,
    B,
    D,
    G,
    P,
    O,
    F,
    Y,
    Z,
    Q,
    K,
    U,
    X,
    C,
    ea,
    J,
    S = o[22].beforeOverlay && Kn(o),
    I = o[22].afterOverlay && Qn(o),
    j = o[22].caption && xn(o);
  return {
    c() {
      (a = f('section')),
        (n = f('figure')),
        (s = f('img')),
        (r = w()),
        (u = f('img')),
        (D = w()),
        S && S.c(),
        (G = w()),
        I && I.c(),
        (P = w()),
        (O = f('div')),
        (F = f('div')),
        (Y = w()),
        (Z = f('div')),
        (U = w()),
        j && j.c(),
        (X = Cs()),
        this.h();
    },
    l(v) {
      a = k(v, 'SECTION', { class: !0, style: !0 });
      var $ = g(a);
      n = k($, 'FIGURE', { style: !0, class: !0, 'aria-labelledby': !0 });
      var T = g(n);
      (s = k(T, 'IMG', {
        src: !0,
        alt: !0,
        style: !0,
        class: !0,
        role: !0,
        'aria-describedby': !0,
      })),
        (r = E(T)),
        (u = k(T, 'IMG', {
          src: !0,
          alt: !0,
          style: !0,
          class: !0,
          role: !0,
          'aria-describedby': !0,
        })),
        (D = E(T)),
        S && S.l(T),
        (G = E(T)),
        I && I.l(T),
        (P = E(T)),
        (O = k(T, 'DIV', { class: !0, style: !0 }));
      var aa = g(O);
      (F = k(aa, 'DIV', { class: !0 })),
        g(F).forEach(p),
        (Y = E(aa)),
        (Z = k(aa, 'DIV', { class: !0 })),
        g(Z).forEach(p),
        aa.forEach(p),
        T.forEach(p),
        $.forEach(p),
        (U = E(v)),
        j && j.l(v),
        (X = Cs()),
        this.h();
    },
    h() {
      Ms(s.src, (l = o[5])) || i(s, 'src', l),
        i(s, 'alt', o[6]),
        i(s, 'style', o[14]),
        i(s, 'class', 'after svelte-b70c3s'),
        i(s, 'role', 'img'),
        i(
          s,
          'aria-describedby',
          (e = o[22].beforeOverlay && `${o[17]}-before`)
        ),
        Ms(u.src, (y = o[3])) || i(u, 'src', y),
        i(u, 'alt', o[4]),
        i(
          u,
          'style',
          (R = 'clip: rect(0 ' + o[10] + 'px ' + o[16] + 'px 0);' + o[14])
        ),
        i(u, 'class', 'before svelte-b70c3s'),
        i(u, 'role', 'img'),
        i(u, 'aria-describedby', (B = o[22].afterOverlay && `${o[17]}-after`)),
        i(F, 'class', 'arrow-left svelte-b70c3s'),
        i(Z, 'class', 'arrow-right svelte-b70c3s'),
        i(O, 'class', 'handle svelte-b70c3s'),
        na(O, 'left', 'calc(' + o[0] * 100 + '% - 20px)'),
        na(O, '--before-after-handle-colour', o[7]),
        na(O, '--before-after-handle-inactive-opacity', o[8]),
        i(n, 'style', o[15]),
        i(n, 'class', 'before-after-container svelte-b70c3s'),
        i(n, 'aria-labelledby', (Q = o[22].caption && `${o[17]}-caption`)),
        i(a, 'class', (K = 'photo before-after ' + o[1] + ' svelte-b70c3s')),
        na(a, 'height', o[2] + 'px');
    },
    m(v, $) {
      b(v, a, $),
        c(a, n),
        c(n, s),
        o[30](s),
        c(n, r),
        c(n, u),
        c(n, D),
        S && S.m(n, null),
        c(n, G),
        I && I.m(n, null),
        c(n, P),
        c(n, O),
        c(O, F),
        c(O, Y),
        c(O, Z),
        o[32](n),
        b(v, U, $),
        j && j.m(v, $),
        b(v, X, $),
        (C = !0),
        ea ||
          ((J = [
            ta(s, 'mousedown', Ln(o[29])),
            ta(s, 'load', o[18]),
            ta(u, 'mousedown', Ln(o[28])),
            ta(n, 'touchstart', o[20]),
            ta(n, 'mousedown', o[20]),
          ]),
          (ea = !0));
    },
    p(v, $) {
      (!C || ($[0] & 32 && !Ms(s.src, (l = v[5])))) && i(s, 'src', l),
        (!C || $[0] & 64) && i(s, 'alt', v[6]),
        (!C || $[0] & 16384) && i(s, 'style', v[14]),
        (!C ||
          ($[0] & 4194304 &&
            e !== (e = v[22].beforeOverlay && `${v[17]}-before`))) &&
          i(s, 'aria-describedby', e),
        (!C || ($[0] & 8 && !Ms(u.src, (y = v[3])))) && i(u, 'src', y),
        (!C || $[0] & 16) && i(u, 'alt', v[4]),
        (!C ||
          ($[0] & 82944 &&
            R !==
              (R =
                'clip: rect(0 ' + v[10] + 'px ' + v[16] + 'px 0);' + v[14]))) &&
          i(u, 'style', R),
        (!C ||
          ($[0] & 4194304 &&
            B !== (B = v[22].afterOverlay && `${v[17]}-after`))) &&
          i(u, 'aria-describedby', B),
        v[22].beforeOverlay
          ? S
            ? (S.p(v, $), $[0] & 4194304 && A(S, 1))
            : ((S = Kn(v)), S.c(), A(S, 1), S.m(n, G))
          : S &&
            (Rs(),
            M(S, 1, 1, () => {
              S = null;
            }),
            Bs()),
        v[22].afterOverlay
          ? I
            ? (I.p(v, $), $[0] & 4194304 && A(I, 1))
            : ((I = Qn(v)), I.c(), A(I, 1), I.m(n, P))
          : I &&
            (Rs(),
            M(I, 1, 1, () => {
              I = null;
            }),
            Bs()),
        (!C || $[0] & 1) && na(O, 'left', 'calc(' + v[0] * 100 + '% - 20px)'),
        (!C || $[0] & 128) && na(O, '--before-after-handle-colour', v[7]),
        (!C || $[0] & 256) &&
          na(O, '--before-after-handle-inactive-opacity', v[8]),
        (!C || $[0] & 32768) && i(n, 'style', v[15]),
        (!C ||
          ($[0] & 4194304 &&
            Q !== (Q = v[22].caption && `${v[17]}-caption`))) &&
          i(n, 'aria-labelledby', Q),
        (!C ||
          ($[0] & 2 &&
            K !== (K = 'photo before-after ' + v[1] + ' svelte-b70c3s'))) &&
          i(a, 'class', K),
        (!C || $[0] & 4) && na(a, 'height', v[2] + 'px'),
        v[22].caption
          ? j
            ? (j.p(v, $), $[0] & 4194304 && A(j, 1))
            : ((j = xn(v)), j.c(), A(j, 1), j.m(X.parentNode, X))
          : j &&
            (Rs(),
            M(j, 1, 1, () => {
              j = null;
            }),
            Bs());
    },
    i(v) {
      C || (A(S), A(I), A(j), (C = !0));
    },
    o(v) {
      M(S), M(I), M(j), (C = !1);
    },
    d(v) {
      v && p(a),
        o[30](null),
        S && S.d(),
        I && I.d(),
        o[32](null),
        v && p(U),
        j && j.d(v),
        v && p(X),
        (ea = !1),
        Un(J);
    },
  };
}
function Kn(o) {
  let a, n, s;
  const l = o[27].beforeOverlay,
    e = dn(l, o, o[26], Yn);
  return {
    c() {
      (a = f('div')), e && e.c(), this.h();
    },
    l(r) {
      a = k(r, 'DIV', { id: !0, class: !0, style: !0 });
      var u = g(a);
      e && e.l(u), u.forEach(p), this.h();
    },
    h() {
      i(a, 'id', 'image-before-label'),
        i(a, 'class', 'overlay-container before svelte-b70c3s'),
        na(a, 'clip-path', 'inset(0 ' + o[13] + 'px 0 0)'),
        mt(() => o[31].call(a));
    },
    m(r, u) {
      b(r, a, u), e && e.m(a, null), (n = vt(a, o[31].bind(a))), (s = !0);
    },
    p(r, u) {
      e &&
        e.p &&
        (!s || u[0] & 67108864) &&
        gn(e, l, r, r[26], s ? vn(l, r[26], u, $t) : mn(r[26]), Yn),
        (!s || u[0] & 8192) &&
          na(a, 'clip-path', 'inset(0 ' + r[13] + 'px 0 0)');
    },
    i(r) {
      s || (A(e, r), (s = !0));
    },
    o(r) {
      M(e, r), (s = !1);
    },
    d(r) {
      r && p(a), e && e.d(r), n();
    },
  };
}
function Qn(o) {
  let a, n;
  const s = o[27].afterOverlay,
    l = dn(s, o, o[26], Fn);
  return {
    c() {
      (a = f('div')), l && l.c(), this.h();
    },
    l(e) {
      a = k(e, 'DIV', { id: !0, class: !0 });
      var r = g(a);
      l && l.l(r), r.forEach(p), this.h();
    },
    h() {
      i(a, 'id', 'image-after-label'),
        i(a, 'class', 'overlay-container after svelte-b70c3s');
    },
    m(e, r) {
      b(e, a, r), l && l.m(a, null), (n = !0);
    },
    p(e, r) {
      l &&
        l.p &&
        (!n || r[0] & 67108864) &&
        gn(l, s, e, e[26], n ? vn(s, e[26], r, yt) : mn(e[26]), Fn);
    },
    i(e) {
      n || (A(l, e), (n = !0));
    },
    o(e) {
      M(l, e), (n = !1);
    },
    d(e) {
      e && p(a), l && l.d(e);
    },
  };
}
function xn(o) {
  let a, n, s;
  const l = o[27].caption,
    e = dn(l, o, o[26], Wn);
  return {
    c() {
      (a = f('section')), e && e.c(), this.h();
    },
    l(r) {
      a = k(r, 'SECTION', { class: !0, id: !0 });
      var u = g(a);
      e && e.l(u), u.forEach(p), this.h();
    },
    h() {
      i(a, 'class', (n = '' + (Gn(o[1]) + ' svelte-b70c3s'))),
        i(a, 'id', `${o[17]}-caption`);
    },
    m(r, u) {
      b(r, a, u), e && e.m(a, null), (s = !0);
    },
    p(r, u) {
      e &&
        e.p &&
        (!s || u[0] & 67108864) &&
        gn(e, l, r, r[26], s ? vn(l, r[26], u, _t) : mn(r[26]), Wn),
        (!s || (u[0] & 2 && n !== (n = '' + (Gn(r[1]) + ' svelte-b70c3s')))) &&
          i(a, 'class', n);
    },
    i(r) {
      s || (A(e, r), (s = !0));
    },
    o(r) {
      M(e, r), (s = !1);
    },
    d(r) {
      r && p(a), e && e.d(r);
    },
  };
}
function wt(o) {
  let a,
    n,
    s,
    l,
    e = o[3] && o[4] && o[5] && o[6] && Zn(o);
  return {
    c() {
      e && e.c(), (a = Cs());
    },
    l(r) {
      e && e.l(r), (a = Cs());
    },
    m(r, u) {
      e && e.m(r, u),
        b(r, a, u),
        (n = !0),
        s ||
          ((l = [
            ta(ps, 'touchmove', o[19]),
            ta(ps, 'touchend', o[21]),
            ta(ps, 'mousemove', o[19]),
            ta(ps, 'mouseup', o[21]),
            ta(ps, 'resize', dt(o[18], 100)),
          ]),
          (s = !0));
    },
    p(r, u) {
      r[3] && r[4] && r[5] && r[6]
        ? e
          ? (e.p(r, u), u[0] & 120 && A(e, 1))
          : ((e = Zn(r)), e.c(), A(e, 1), e.m(a.parentNode, a))
        : e &&
          (Rs(),
          M(e, 1, 1, () => {
            e = null;
          }),
          Bs());
    },
    i(r) {
      n || (A(e), (n = !0));
    },
    o(r) {
      M(e), (n = !1);
    },
    d(r) {
      e && e.d(r), r && p(a), (s = !1), Un(l);
    },
  };
}
function Et(o, a, n) {
  let s,
    l,
    e,
    r,
    u,
    y,
    { $$slots: R = {}, $$scope: B } = a;
  const D = ht(R);
  let { width: G = '' } = a,
    { height: P = 600 } = a,
    { beforeSrc: O = null } = a,
    { beforeAlt: F = null } = a,
    { afterSrc: Y = null } = a,
    { afterAlt: Z = null } = a,
    { handleColour: Q = 'white' } = a,
    { handleInactiveOpacity: K = 0.4 } = a,
    { handleMargin: U = 20 } = a,
    { offset: X = 0.5 } = a;
  const C = () =>
      Math.floor((1 + Math.random()) * 65536)
        .toString(16)
        .substring(1),
    ea = 'before-after-' + C() + C();
  let J = null,
    S = !1,
    I,
    j,
    v = 0;
  const $ = (_) => {
      _.type === 'load'
        ? n(24, (J = _.target.getBoundingClientRect()))
        : n(24, (J = I.getBoundingClientRect()));
    },
    T = (_) => {
      const Ps = _.touches ? _.touches[0] : _;
      if (S && J) {
        const Ra = j
          ? parseInt(window.getComputedStyle(j).marginLeft.slice(0, -2))
          : 0;
        let W = Ps.pageX - Ra - J.left;
        (W = W < U ? U : W > s - U ? s - U : W), n(0, (X = W / s));
      }
    },
    aa = (_) => {
      (S = !0), T(_);
    },
    pa = () => {
      S = !1;
    };
  (O && F && Y && Z) ||
    console.warn('Missing required src or alt props for BeforeAfter component');
  function Ha(_) {
    Xn.call(this, o, _);
  }
  function ha(_) {
    Xn.call(this, o, _);
  }
  function za(_) {
    qn[_ ? 'unshift' : 'push'](() => {
      (I = _), n(11, I);
    });
  }
  function La() {
    (v = this.clientWidth), n(9, v);
  }
  function Ma(_) {
    qn[_ ? 'unshift' : 'push'](() => {
      (j = _), n(12, j);
    });
  }
  return (
    (o.$$set = (_) => {
      'width' in _ && n(1, (G = _.width)),
        'height' in _ && n(2, (P = _.height)),
        'beforeSrc' in _ && n(3, (O = _.beforeSrc)),
        'beforeAlt' in _ && n(4, (F = _.beforeAlt)),
        'afterSrc' in _ && n(5, (Y = _.afterSrc)),
        'afterAlt' in _ && n(6, (Z = _.afterAlt)),
        'handleColour' in _ && n(7, (Q = _.handleColour)),
        'handleInactiveOpacity' in _ && n(8, (K = _.handleInactiveOpacity)),
        'handleMargin' in _ && n(23, (U = _.handleMargin)),
        'offset' in _ && n(0, (X = _.offset)),
        '$$scope' in _ && n(26, (B = _.$$scope));
    }),
    (o.$$.update = () => {
      o.$$.dirty[0] & 16777216 && n(25, (s = (J && J.width) || 0)),
        o.$$.dirty[0] & 16777216 && n(16, (l = (J && J.height) || 0)),
        o.$$.dirty[0] & 33554433 && n(10, (e = s * X)),
        o.$$.dirty[0] & 4 && n(15, (r = `width:100%;height:${P}px;`)),
        o.$$.dirty[0] & 1536 && n(13, (y = e < v ? Math.abs(e - v) : 0));
    }),
    n(14, (u = 'width:100%;height:100%;')),
    [
      X,
      G,
      P,
      O,
      F,
      Y,
      Z,
      Q,
      K,
      v,
      e,
      I,
      j,
      y,
      u,
      r,
      l,
      ea,
      $,
      T,
      aa,
      pa,
      D,
      U,
      J,
      s,
      B,
      R,
      Ha,
      ha,
      za,
      La,
      Ma,
    ]
  );
}
class da extends Nn {
  constructor(a) {
    super();
    Hn(
      this,
      a,
      Et,
      wt,
      zn,
      {
        width: 1,
        height: 2,
        beforeSrc: 3,
        beforeAlt: 4,
        afterSrc: 5,
        afterAlt: 6,
        handleColour: 7,
        handleInactiveOpacity: 8,
        handleMargin: 23,
        offset: 0,
      },
      null,
      [-1, -1]
    );
  }
}
function Ot(o) {
  let a, n;
  return (
    (a = new da({
      props: {
        beforeSrc: `${L}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${L}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
      },
    })),
    {
      c() {
        V(a.$$.fragment);
      },
      l(s) {
        N(a.$$.fragment, s);
      },
      m(s, l) {
        H(a, s, l), (n = !0);
      },
      p: Ds,
      i(s) {
        n || (A(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        M(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        z(a, s);
      },
    }
  );
}
function At(o) {
  let a, n;
  return (
    (a = new da({
      props: {
        beforeSrc: `${L}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${L}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        width: 'wide',
        height: 400,
      },
    })),
    {
      c() {
        V(a.$$.fragment);
      },
      l(s) {
        N(a.$$.fragment, s);
      },
      m(s, l) {
        H(a, s, l), (n = !0);
      },
      p: Ds,
      i(s) {
        n || (A(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        M(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        z(a, s);
      },
    }
  );
}
function St(o) {
  let a, n;
  return (
    (a = new da({
      props: {
        beforeSrc: `${L}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${L}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        handleColour: '#fb8c71',
        handleInactiveOpacity: 0.6,
        handleMargin: 0,
      },
    })),
    {
      c() {
        V(a.$$.fragment);
      },
      l(s) {
        N(a.$$.fragment, s);
      },
      m(s, l) {
        H(a, s, l), (n = !0);
      },
      p: Ds,
      i(s) {
        n || (A(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        M(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        z(a, s);
      },
    }
  );
}
function jt(o) {
  let a, n;
  return (
    (a = new da({
      props: {
        beforeSrc: `${L}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${L}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        offset: 0.1,
      },
    })),
    {
      c() {
        V(a.$$.fragment);
      },
      l(s) {
        N(a.$$.fragment, s);
      },
      m(s, l) {
        H(a, s, l), (n = !0);
      },
      p: Ds,
      i(s) {
        n || (A(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        M(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        z(a, s);
      },
    }
  );
}
function It(o) {
  let a, n;
  return {
    c() {
      (a = f('p')), (n = d('Photos by MAXAR Technologies, 2021.')), this.h();
    },
    l(s) {
      a = k(s, 'P', { slot: !0, class: !0 });
      var l = g(a);
      (n = h(l, 'Photos by MAXAR Technologies, 2021.')), l.forEach(p), this.h();
    },
    h() {
      i(a, 'slot', 'caption'), i(a, 'class', 'caption svelte-10cpbvu');
    },
    m(s, l) {
      b(s, a, l), c(a, n);
    },
    d(s) {
      s && p(a);
    },
  };
}
function Ct(o) {
  let a, n;
  return (
    (a = new da({
      props: {
        beforeSrc: `${L}/images/before-after/myrne-before.jpg`,
        beforeAlt:
          'Satellite image of Russian base at Myrne taken on July 7, 2020.',
        afterSrc: `${L}/images/before-after/myrne-after.jpg`,
        afterAlt:
          'Satellite image of Russian base at Myrne taken on Oct. 20, 2020.',
        $$slots: { caption: [It] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        V(a.$$.fragment);
      },
      l(s) {
        N(a.$$.fragment, s);
      },
      m(s, l) {
        H(a, s, l), (n = !0);
      },
      p(s, l) {
        const e = {};
        l & 2 && (e.$$scope = { dirty: l, ctx: s }), a.$set(e);
      },
      i(s) {
        n || (A(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        M(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        z(a, s);
      },
    }
  );
}
function Mt(o) {
  let a, n, s, l, e, r;
  return {
    c() {
      (a = f('div')),
        (n = f('h6')),
        (s = d('July 7, 2020')),
        (l = w()),
        (e = f('p')),
        (r = d('Initially, this site was far smaller.')),
        this.h();
    },
    l(u) {
      a = k(u, 'DIV', { slot: !0, class: !0 });
      var y = g(a);
      n = k(y, 'H6', { class: !0 });
      var R = g(n);
      (s = h(R, 'July 7, 2020')),
        R.forEach(p),
        (l = E(y)),
        (e = k(y, 'P', { class: !0 }));
      var B = g(e);
      (r = h(B, 'Initially, this site was far smaller.')),
        B.forEach(p),
        y.forEach(p),
        this.h();
    },
    h() {
      i(n, 'class', 'svelte-10cpbvu'),
        i(e, 'class', 'svelte-10cpbvu'),
        i(a, 'slot', 'beforeOverlay'),
        i(a, 'class', 'overlay before svelte-10cpbvu');
    },
    m(u, y) {
      b(u, a, y), c(a, n), c(n, s), c(a, l), c(a, e), c(e, r);
    },
    d(u) {
      u && p(a);
    },
  };
}
function Rt(o) {
  let a, n, s, l, e, r;
  return {
    c() {
      (a = f('div')),
        (n = f('h6')),
        (s = d('Oct. 20, 2020')),
        (l = w()),
        (e = f('p')),
        (r = d('But then forces built up.')),
        this.h();
    },
    l(u) {
      a = k(u, 'DIV', { slot: !0, class: !0 });
      var y = g(a);
      n = k(y, 'H6', { class: !0 });
      var R = g(n);
      (s = h(R, 'Oct. 20, 2020')),
        R.forEach(p),
        (l = E(y)),
        (e = k(y, 'P', { class: !0 }));
      var B = g(e);
      (r = h(B, 'But then forces built up.')),
        B.forEach(p),
        y.forEach(p),
        this.h();
    },
    h() {
      i(n, 'class', 'svelte-10cpbvu'),
        i(e, 'class', 'svelte-10cpbvu'),
        i(a, 'slot', 'afterOverlay'),
        i(a, 'class', 'overlay after svelte-10cpbvu');
    },
    m(u, y) {
      b(u, a, y), c(a, n), c(n, s), c(a, l), c(a, e), c(e, r);
    },
    d(u) {
      u && p(a);
    },
  };
}
function Bt(o) {
  let a, n;
  return (
    (a = new da({
      props: {
        beforeSrc: `${L}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${L}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        $$slots: { afterOverlay: [Rt], beforeOverlay: [Mt] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        V(a.$$.fragment);
      },
      l(s) {
        N(a.$$.fragment, s);
      },
      m(s, l) {
        H(a, s, l), (n = !0);
      },
      p(s, l) {
        const e = {};
        l & 2 && (e.$$scope = { dirty: l, ctx: s }), a.$set(e);
      },
      i(s) {
        n || (A(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        M(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        z(a, s);
      },
    }
  );
}
function Dt(o) {
  let a, n, s, l;
  return {
    c() {
      (a = f('div')), (n = f('p')), (s = d('July 7, 2020')), this.h();
    },
    l(e) {
      a = k(e, 'DIV', { slot: !0, class: !0 });
      var r = g(a);
      n = k(r, 'P', { id: !0, class: !0 });
      var u = g(n);
      (s = h(u, 'July 7, 2020')), u.forEach(p), r.forEach(p), this.h();
    },
    h() {
      i(n, 'id', (l = o[0])),
        i(n, 'class', 'svelte-10cpbvu'),
        i(a, 'slot', 'beforeOverlay'),
        i(a, 'class', 'overlay before svelte-10cpbvu');
    },
    m(e, r) {
      b(e, a, r), c(a, n), c(n, s);
    },
    p(e, r) {
      r & 1 && l !== (l = e[0]) && i(n, 'id', l);
    },
    d(e) {
      e && p(a);
    },
  };
}
function Pt(o) {
  let a, n, s, l;
  return {
    c() {
      (a = f('div')), (n = f('p')), (s = d('Oct. 20, 2020')), this.h();
    },
    l(e) {
      a = k(e, 'DIV', { slot: !0, class: !0 });
      var r = g(a);
      n = k(r, 'P', { id: !0, class: !0 });
      var u = g(n);
      (s = h(u, 'Oct. 20, 2020')), u.forEach(p), r.forEach(p), this.h();
    },
    h() {
      i(n, 'id', (l = o[0])),
        i(n, 'class', 'svelte-10cpbvu'),
        i(a, 'slot', 'afterOverlay'),
        i(a, 'class', 'overlay after svelte-10cpbvu');
    },
    m(e, r) {
      b(e, a, r), c(a, n), c(n, s);
    },
    p(e, r) {
      r & 1 && l !== (l = e[0]) && i(n, 'id', l);
    },
    d(e) {
      e && p(a);
    },
  };
}
function Tt(o) {
  let a, n, s;
  return (
    (n = new da({
      props: {
        beforeSrc: `${L}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${L}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        $$slots: {
          afterOverlay: [
            Pt,
            ({ description: l }) => ({ 0: l }),
            ({ description: l }) => (l ? 1 : 0),
          ],
          beforeOverlay: [
            Dt,
            ({ description: l }) => ({ 0: l }),
            ({ description: l }) => (l ? 1 : 0),
          ],
        },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        (a = f('div')), V(n.$$.fragment), this.h();
      },
      l(l) {
        a = k(l, 'DIV', { class: !0 });
        var e = g(a);
        N(n.$$.fragment, e), e.forEach(p), this.h();
      },
      h() {
        i(a, 'class', 'custom-position');
      },
      m(l, e) {
        b(l, a, e), H(n, a, null), (s = !0);
      },
      p(l, e) {
        const r = {};
        e & 3 && (r.$$scope = { dirty: e, ctx: l }), n.$set(r);
      },
      i(l) {
        s || (A(n.$$.fragment, l), (s = !0));
      },
      o(l) {
        M(n.$$.fragment, l), (s = !1);
      },
      d(l) {
        l && p(a), z(n);
      },
    }
  );
}
function Jt(o) {
  let a, n, s, l;
  return {
    c() {
      (a = f('div')),
        (n = f('p')),
        (s = d(
          'On July 7, 2020, the base contained only a few transport vehicles.'
        )),
        this.h();
    },
    l(e) {
      a = k(e, 'DIV', { slot: !0, class: !0 });
      var r = g(a);
      n = k(r, 'P', { id: !0, class: !0 });
      var u = g(n);
      (s = h(
        u,
        'On July 7, 2020, the base contained only a few transport vehicles.'
      )),
        u.forEach(p),
        r.forEach(p),
        this.h();
    },
    h() {
      i(n, 'id', (l = o[0])),
        i(n, 'class', 'svelte-10cpbvu'),
        i(a, 'slot', 'beforeOverlay'),
        i(a, 'class', 'overlay short before svelte-10cpbvu');
    },
    m(e, r) {
      b(e, a, r), c(a, n), c(n, s);
    },
    p(e, r) {
      r & 1 && l !== (l = e[0]) && i(n, 'id', l);
    },
    d(e) {
      e && p(a);
    },
  };
}
function Vt(o) {
  let a, n, s, l, e, r, u;
  return {
    c() {
      (a = f('div')),
        (n = f('div')),
        (s = f('p')),
        (l = d('But by October, tanks and artillery could be seen.')),
        (e = f('p')),
        (r = d(
          'In total, over 50 pieces of heavy machinery and 200 personnel are now based here.'
        )),
        this.h();
    },
    l(y) {
      a = k(y, 'DIV', { slot: !0, class: !0 });
      var R = g(a);
      n = k(R, 'DIV', { id: !0 });
      var B = g(n);
      s = k(B, 'P', { class: !0 });
      var D = g(s);
      (l = h(D, 'But by October, tanks and artillery could be seen.')),
        D.forEach(p),
        (e = k(B, 'P', { class: !0 }));
      var G = g(e);
      (r = h(
        G,
        'In total, over 50 pieces of heavy machinery and 200 personnel are now based here.'
      )),
        G.forEach(p),
        B.forEach(p),
        R.forEach(p),
        this.h();
    },
    h() {
      i(s, 'class', 'svelte-10cpbvu'),
        i(e, 'class', 'svelte-10cpbvu'),
        i(n, 'id', (u = o[0])),
        i(a, 'slot', 'afterOverlay'),
        i(a, 'class', 'overlay short after svelte-10cpbvu');
    },
    m(y, R) {
      b(y, a, R), c(a, n), c(n, s), c(s, l), c(n, e), c(e, r);
    },
    p(y, R) {
      R & 1 && u !== (u = y[0]) && i(n, 'id', u);
    },
    d(y) {
      y && p(a);
    },
  };
}
function Nt(o) {
  let a, n;
  return (
    (a = new da({
      props: {
        beforeSrc: `${L}/images/before-after/myrne-before.jpg`,
        beforeAlt:
          'Satellite image of Russian base at Myrne taken on July 7, 2020.',
        afterSrc: `${L}/images/before-after/myrne-after.jpg`,
        afterAlt:
          'Satellite image of Russian base at Myrne taken on Oct. 20, 2020.',
        $$slots: {
          afterOverlay: [
            Vt,
            ({ description: s }) => ({ 0: s }),
            ({ description: s }) => (s ? 1 : 0),
          ],
          beforeOverlay: [
            Jt,
            ({ description: s }) => ({ 0: s }),
            ({ description: s }) => (s ? 1 : 0),
          ],
        },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        V(a.$$.fragment);
      },
      l(s) {
        N(a.$$.fragment, s);
      },
      m(s, l) {
        H(a, s, l), (n = !0);
      },
      p(s, l) {
        const e = {};
        l & 3 && (e.$$scope = { dirty: l, ctx: s }), a.$set(e);
      },
      i(s) {
        n || (A(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        M(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        z(a, s);
      },
    }
  );
}
function Ht(o) {
  let a,
    n,
    s,
    l,
    e,
    r,
    u,
    y,
    R = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span></code>`,
    B,
    D,
    G,
    P,
    O,
    F,
    Y,
    Z,
    Q,
    K,
    U,
    X,
    C,
    ea,
    J,
    S,
    I,
    j,
    v,
    $,
    T,
    aa,
    pa,
    Ha,
    ha,
    za,
    La,
    Ma,
    _,
    Ps = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wide<span class="token punctuation">"</span></span>
  <span class="token attr-name">height="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">400</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
<span class="token punctuation">/></span></span></code>`,
    Ra,
    W,
    os,
    Ba,
    Ga,
    Ts,
    ls,
    ba,
    nt = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">handleColour</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#ff613b<span class="token punctuation">"</span></span>
  <span class="token attr-name">handleInactiveOpacity="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0.6</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">handleMargin="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
<span class="token punctuation">/></span></span></code>`,
    cs,
    ca,
    rs,
    Da,
    _a,
    Js,
    Ua,
    Vs,
    Ns,
    is,
    ya,
    tt = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">offset="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0.1</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
<span class="token punctuation">/></span></span></code>`,
    us,
    ra,
    fs,
    Pa,
    $a,
    Hs,
    Xa,
    zs,
    Ls,
    ks,
    wa,
    et = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>caption<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>caption<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Photos by MAXAR Technologies, 2021.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BeforeAfter</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.caption</span> <span class="token punctuation">&#123;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 5px 0<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0.8rem<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,
    gs,
    ia,
    ms,
    Ta,
    oa,
    Gs,
    qa,
    Us,
    Xs,
    Wa,
    qs,
    Ws,
    vs,
    Ea,
    pt = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>beforeOverlay<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>overlay before<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>July 7, 2020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Initially, this site was far smaller.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>afterOverlay<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>overlay after<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>Oct. 20, 2020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>But then forces built up.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BeforeAfter</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.overlay</span> <span class="token punctuation">&#123;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token selector">h6,
    p</span> <span class="token punctuation">&#123;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token selector">&amp;.after</span> <span class="token punctuation">&#123;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token property">max-width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,
    ds,
    ua,
    hs,
    Ja,
    la,
    Fs,
    Fa,
    Ys,
    Zs,
    Ya,
    Ks,
    Qs,
    bs,
    Oa,
    ot = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>beforeOverlay<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>July 7, 2020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>afterOverlay<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Oct. 20, 2020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BeforeAfter</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">:global</span> <span class="token punctuation">&#123;</span>
    <span class="token selector">section.photo.before-after .overlay-container</span> <span class="token punctuation">&#123;</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,
    _s,
    fa,
    ys,
    ka,
    x,
    xs,
    Aa,
    an,
    sn,
    Za,
    nn,
    tn,
    Sa,
    en,
    pn,
    on,
    sa,
    Ka,
    ln,
    cn,
    Qa,
    rn,
    un,
    xa,
    fn,
    kn,
    $s,
    ja,
    lt = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- \u{1F447} Define the prop on each slot... --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">let:</span>description="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>id<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>beforeOverlay<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>id<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span><span class="token punctuation">></span></span>
      On July 7, 2020, the base contained only a few transport vehicles.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">let:</span>description="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>id<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>afterOverlay<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- \u{1F447} id can also be used on an element containing multiple text elements --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>id<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>But by October, tanks and artillery could be seen.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
        In total, over 50 pieces of heavy machinery and 200 personnel are now
        based here.
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BeforeAfter</span><span class="token punctuation">></span></span></code>`,
    ws,
    ga,
    Es;
  return (
    (D = new va({
      props: { $$slots: { default: [Ot] }, $$scope: { ctx: o } },
    })),
    (W = new va({
      props: { $$slots: { default: [At] }, $$scope: { ctx: o } },
    })),
    (ca = new va({
      props: { $$slots: { default: [St] }, $$scope: { ctx: o } },
    })),
    (ra = new va({
      props: { $$slots: { default: [jt] }, $$scope: { ctx: o } },
    })),
    (ia = new va({
      props: { $$slots: { default: [Ct] }, $$scope: { ctx: o } },
    })),
    (ua = new va({
      props: { $$slots: { default: [Bt] }, $$scope: { ctx: o } },
    })),
    (fa = new va({
      props: { $$slots: { default: [Tt] }, $$scope: { ctx: o } },
    })),
    (ga = new va({
      props: { $$slots: { default: [Nt] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        (a = f('section')),
          (n = f('h2')),
          (s = d(at)),
          (l = w()),
          (e = f('p')),
          (r = d(st)),
          (u = w()),
          (y = f('pre')),
          (B = w()),
          V(D.$$.fragment),
          (G = w()),
          (P = f('section')),
          (O = f('p')),
          (F = d('Adjust the size of the image by passing the ')),
          (Y = f('code')),
          (Z = d('width')),
          (Q = d(
            ' prop a class name corresponding to one of our well widths: '
          )),
          (K = f('code')),
          (U = d('wide')),
          (X = d(', ')),
          (C = f('code')),
          (ea = d('wider')),
          (J = d(', ')),
          (S = f('code')),
          (I = d('widest')),
          (j = d(' or ')),
          (v = f('code')),
          ($ = d('fluid')),
          (T = d('.')),
          (aa = w()),
          (pa = f('p')),
          (Ha = d('Adjust the height by passing a number of pixels to the ')),
          (ha = f('code')),
          (za = d('height')),
          (La = d(' prop.')),
          (Ma = w()),
          (_ = f('pre')),
          (Ra = w()),
          V(W.$$.fragment),
          (os = w()),
          (Ba = f('section')),
          (Ga = f('p')),
          (Ts = d('Change the styling of the swipe handle.')),
          (ls = w()),
          (ba = f('pre')),
          (cs = w()),
          V(ca.$$.fragment),
          (rs = w()),
          (Da = f('section')),
          (_a = f('p')),
          (Js = d('Change the starting position of the swipe with the ')),
          (Ua = f('code')),
          (Vs = d('offset')),
          (Ns = d(' prop.')),
          (is = w()),
          (ya = f('pre')),
          (us = w()),
          V(ra.$$.fragment),
          (fs = w()),
          (Pa = f('section')),
          ($a = f('p')),
          (Hs = d('Add and style a caption with the ')),
          (Xa = f('code')),
          (zs = d('caption')),
          (Ls = d(' slot.')),
          (ks = w()),
          (wa = f('pre')),
          (gs = w()),
          V(ia.$$.fragment),
          (ms = w()),
          (Ta = f('section')),
          (oa = f('p')),
          (Gs = d('Add overlays with the ')),
          (qa = f('code')),
          (Us = d('beforeOverlay')),
          (Xs = d(' and ')),
          (Wa = f('code')),
          (qs = d('afterOverlay')),
          (Ws = d(' slots.')),
          (vs = w()),
          (Ea = f('pre')),
          (ds = w()),
          V(ua.$$.fragment),
          (hs = w()),
          (Ja = f('section')),
          (la = f('p')),
          (Fs = d('Target the ')),
          (Fa = f('code')),
          (Ys = d('.overlay-container')),
          (Zs = d(' with ')),
          (Ya = f('code')),
          (Ks = d(':global')),
          (Qs = d(' SCSS rules to change the overlay positioning.')),
          (bs = w()),
          (Oa = f('pre')),
          (_s = w()),
          V(fa.$$.fragment),
          (ys = w()),
          (ka = f('section')),
          (x = f('p')),
          (xs = d('Use text elements in your overlays as ')),
          (Aa = f('a')),
          (an = d('ARIA descriptions')),
          (sn = d(
            ' for your images by setting an ID on text elements within each overly with the '
          )),
          (Za = f('code')),
          (nn = d('description')),
          (tn = w()),
          (Sa = f('a')),
          (en = d('slot prop')),
          (pn = d('.')),
          (on = w()),
          (sa = f('p')),
          (Ka = f('strong')),
          (ln = d('\u{1F4A1} TIP:')),
          (cn = d(' You must always use the ')),
          (Qa = f('code')),
          (rn = d('beforeAlt')),
          (un = d(' / ')),
          (xa = f('code')),
          (fn = d('afterAlt')),
          (kn = d(
            ' props to label your image for visually impaired readers, but you can use these descriptions to provide more information or context that the reader might also need.'
          )),
          ($s = w()),
          (ja = f('pre')),
          (ws = w()),
          V(ga.$$.fragment),
          this.h();
      },
      l(t) {
        a = k(t, 'SECTION', {});
        var m = g(a);
        n = k(m, 'H2', {});
        var as = g(n);
        (s = h(as, at)), as.forEach(p), (l = E(m)), (e = k(m, 'P', {}));
        var ss = g(e);
        (r = h(ss, st)),
          ss.forEach(p),
          m.forEach(p),
          (u = E(t)),
          (y = k(t, 'PRE', { class: !0 }));
        var Os = g(y);
        Os.forEach(p),
          (B = E(t)),
          N(D.$$.fragment, t),
          (G = E(t)),
          (P = k(t, 'SECTION', {}));
        var Ia = g(P);
        O = k(Ia, 'P', {});
        var q = g(O);
        (F = h(q, 'Adjust the size of the image by passing the ')),
          (Y = k(q, 'CODE', {}));
        var ns = g(Y);
        (Z = h(ns, 'width')),
          ns.forEach(p),
          (Q = h(
            q,
            ' prop a class name corresponding to one of our well widths: '
          )),
          (K = k(q, 'CODE', {}));
        var ts = g(K);
        (U = h(ts, 'wide')),
          ts.forEach(p),
          (X = h(q, ', ')),
          (C = k(q, 'CODE', {}));
        var es = g(C);
        (ea = h(es, 'wider')),
          es.forEach(p),
          (J = h(q, ', ')),
          (S = k(q, 'CODE', {}));
        var hn = g(S);
        (I = h(hn, 'widest')),
          hn.forEach(p),
          (j = h(q, ' or ')),
          (v = k(q, 'CODE', {}));
        var bn = g(v);
        ($ = h(bn, 'fluid')),
          bn.forEach(p),
          (T = h(q, '.')),
          q.forEach(p),
          (aa = E(Ia)),
          (pa = k(Ia, 'P', {}));
        var As = g(pa);
        (Ha = h(As, 'Adjust the height by passing a number of pixels to the ')),
          (ha = k(As, 'CODE', {}));
        var _n = g(ha);
        (za = h(_n, 'height')),
          _n.forEach(p),
          (La = h(As, ' prop.')),
          As.forEach(p),
          Ia.forEach(p),
          (Ma = E(t)),
          (_ = k(t, 'PRE', { class: !0 }));
        var ct = g(_);
        ct.forEach(p),
          (Ra = E(t)),
          N(W.$$.fragment, t),
          (os = E(t)),
          (Ba = k(t, 'SECTION', {}));
        var yn = g(Ba);
        Ga = k(yn, 'P', {});
        var $n = g(Ga);
        (Ts = h($n, 'Change the styling of the swipe handle.')),
          $n.forEach(p),
          yn.forEach(p),
          (ls = E(t)),
          (ba = k(t, 'PRE', { class: !0 }));
        var rt = g(ba);
        rt.forEach(p),
          (cs = E(t)),
          N(ca.$$.fragment, t),
          (rs = E(t)),
          (Da = k(t, 'SECTION', {}));
        var wn = g(Da);
        _a = k(wn, 'P', {});
        var Ss = g(_a);
        (Js = h(Ss, 'Change the starting position of the swipe with the ')),
          (Ua = k(Ss, 'CODE', {}));
        var En = g(Ua);
        (Vs = h(En, 'offset')),
          En.forEach(p),
          (Ns = h(Ss, ' prop.')),
          Ss.forEach(p),
          wn.forEach(p),
          (is = E(t)),
          (ya = k(t, 'PRE', { class: !0 }));
        var it = g(ya);
        it.forEach(p),
          (us = E(t)),
          N(ra.$$.fragment, t),
          (fs = E(t)),
          (Pa = k(t, 'SECTION', {}));
        var On = g(Pa);
        $a = k(On, 'P', {});
        var js = g($a);
        (Hs = h(js, 'Add and style a caption with the ')),
          (Xa = k(js, 'CODE', {}));
        var An = g(Xa);
        (zs = h(An, 'caption')),
          An.forEach(p),
          (Ls = h(js, ' slot.')),
          js.forEach(p),
          On.forEach(p),
          (ks = E(t)),
          (wa = k(t, 'PRE', { class: !0 }));
        var ut = g(wa);
        ut.forEach(p),
          (gs = E(t)),
          N(ia.$$.fragment, t),
          (ms = E(t)),
          (Ta = k(t, 'SECTION', {}));
        var Sn = g(Ta);
        oa = k(Sn, 'P', {});
        var Va = g(oa);
        (Gs = h(Va, 'Add overlays with the ')), (qa = k(Va, 'CODE', {}));
        var jn = g(qa);
        (Us = h(jn, 'beforeOverlay')),
          jn.forEach(p),
          (Xs = h(Va, ' and ')),
          (Wa = k(Va, 'CODE', {}));
        var In = g(Wa);
        (qs = h(In, 'afterOverlay')),
          In.forEach(p),
          (Ws = h(Va, ' slots.')),
          Va.forEach(p),
          Sn.forEach(p),
          (vs = E(t)),
          (Ea = k(t, 'PRE', { class: !0 }));
        var ft = g(Ea);
        ft.forEach(p),
          (ds = E(t)),
          N(ua.$$.fragment, t),
          (hs = E(t)),
          (Ja = k(t, 'SECTION', {}));
        var Cn = g(Ja);
        la = k(Cn, 'P', {});
        var Na = g(la);
        (Fs = h(Na, 'Target the ')), (Fa = k(Na, 'CODE', {}));
        var Mn = g(Fa);
        (Ys = h(Mn, '.overlay-container')),
          Mn.forEach(p),
          (Zs = h(Na, ' with ')),
          (Ya = k(Na, 'CODE', {}));
        var Rn = g(Ya);
        (Ks = h(Rn, ':global')),
          Rn.forEach(p),
          (Qs = h(Na, ' SCSS rules to change the overlay positioning.')),
          Na.forEach(p),
          Cn.forEach(p),
          (bs = E(t)),
          (Oa = k(t, 'PRE', { class: !0 }));
        var kt = g(Oa);
        kt.forEach(p),
          (_s = E(t)),
          N(fa.$$.fragment, t),
          (ys = E(t)),
          (ka = k(t, 'SECTION', {}));
        var Is = g(ka);
        x = k(Is, 'P', {});
        var ma = g(x);
        (xs = h(ma, 'Use text elements in your overlays as ')),
          (Aa = k(ma, 'A', { href: !0, rel: !0 }));
        var Bn = g(Aa);
        (an = h(Bn, 'ARIA descriptions')),
          Bn.forEach(p),
          (sn = h(
            ma,
            ' for your images by setting an ID on text elements within each overly with the '
          )),
          (Za = k(ma, 'CODE', {}));
        var Dn = g(Za);
        (nn = h(Dn, 'description')),
          Dn.forEach(p),
          (tn = E(ma)),
          (Sa = k(ma, 'A', { href: !0, rel: !0 }));
        var Pn = g(Sa);
        (en = h(Pn, 'slot prop')),
          Pn.forEach(p),
          (pn = h(ma, '.')),
          ma.forEach(p),
          (on = E(Is)),
          (sa = k(Is, 'P', {}));
        var Ca = g(sa);
        Ka = k(Ca, 'STRONG', {});
        var Tn = g(Ka);
        (ln = h(Tn, '\u{1F4A1} TIP:')),
          Tn.forEach(p),
          (cn = h(Ca, ' You must always use the ')),
          (Qa = k(Ca, 'CODE', {}));
        var Jn = g(Qa);
        (rn = h(Jn, 'beforeAlt')),
          Jn.forEach(p),
          (un = h(Ca, ' / ')),
          (xa = k(Ca, 'CODE', {}));
        var Vn = g(xa);
        (fn = h(Vn, 'afterAlt')),
          Vn.forEach(p),
          (kn = h(
            Ca,
            ' props to label your image for visually impaired readers, but you can use these descriptions to provide more information or context that the reader might also need.'
          )),
          Ca.forEach(p),
          Is.forEach(p),
          ($s = E(t)),
          (ja = k(t, 'PRE', { class: !0 }));
        var gt = g(ja);
        gt.forEach(p), (ws = E(t)), N(ga.$$.fragment, t), this.h();
      },
      h() {
        i(y, 'class', 'language-svelte'),
          i(_, 'class', 'language-svelte'),
          i(ba, 'class', 'language-svelte'),
          i(ya, 'class', 'language-svelte'),
          i(wa, 'class', 'language-svelte'),
          i(Ea, 'class', 'language-svelte'),
          i(Oa, 'class', 'language-svelte'),
          i(
            Aa,
            'href',
            'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby'
          ),
          i(Aa, 'rel', 'nofollow'),
          i(Sa, 'href', 'https://svelte.dev/tutorial/slot-props'),
          i(Sa, 'rel', 'nofollow'),
          i(ja, 'class', 'language-svelte');
      },
      m(t, m) {
        b(t, a, m),
          c(a, n),
          c(n, s),
          c(a, l),
          c(a, e),
          c(e, r),
          b(t, u, m),
          b(t, y, m),
          (y.innerHTML = R),
          b(t, B, m),
          H(D, t, m),
          b(t, G, m),
          b(t, P, m),
          c(P, O),
          c(O, F),
          c(O, Y),
          c(Y, Z),
          c(O, Q),
          c(O, K),
          c(K, U),
          c(O, X),
          c(O, C),
          c(C, ea),
          c(O, J),
          c(O, S),
          c(S, I),
          c(O, j),
          c(O, v),
          c(v, $),
          c(O, T),
          c(P, aa),
          c(P, pa),
          c(pa, Ha),
          c(pa, ha),
          c(ha, za),
          c(pa, La),
          b(t, Ma, m),
          b(t, _, m),
          (_.innerHTML = Ps),
          b(t, Ra, m),
          H(W, t, m),
          b(t, os, m),
          b(t, Ba, m),
          c(Ba, Ga),
          c(Ga, Ts),
          b(t, ls, m),
          b(t, ba, m),
          (ba.innerHTML = nt),
          b(t, cs, m),
          H(ca, t, m),
          b(t, rs, m),
          b(t, Da, m),
          c(Da, _a),
          c(_a, Js),
          c(_a, Ua),
          c(Ua, Vs),
          c(_a, Ns),
          b(t, is, m),
          b(t, ya, m),
          (ya.innerHTML = tt),
          b(t, us, m),
          H(ra, t, m),
          b(t, fs, m),
          b(t, Pa, m),
          c(Pa, $a),
          c($a, Hs),
          c($a, Xa),
          c(Xa, zs),
          c($a, Ls),
          b(t, ks, m),
          b(t, wa, m),
          (wa.innerHTML = et),
          b(t, gs, m),
          H(ia, t, m),
          b(t, ms, m),
          b(t, Ta, m),
          c(Ta, oa),
          c(oa, Gs),
          c(oa, qa),
          c(qa, Us),
          c(oa, Xs),
          c(oa, Wa),
          c(Wa, qs),
          c(oa, Ws),
          b(t, vs, m),
          b(t, Ea, m),
          (Ea.innerHTML = pt),
          b(t, ds, m),
          H(ua, t, m),
          b(t, hs, m),
          b(t, Ja, m),
          c(Ja, la),
          c(la, Fs),
          c(la, Fa),
          c(Fa, Ys),
          c(la, Zs),
          c(la, Ya),
          c(Ya, Ks),
          c(la, Qs),
          b(t, bs, m),
          b(t, Oa, m),
          (Oa.innerHTML = ot),
          b(t, _s, m),
          H(fa, t, m),
          b(t, ys, m),
          b(t, ka, m),
          c(ka, x),
          c(x, xs),
          c(x, Aa),
          c(Aa, an),
          c(x, sn),
          c(x, Za),
          c(Za, nn),
          c(x, tn),
          c(x, Sa),
          c(Sa, en),
          c(x, pn),
          c(ka, on),
          c(ka, sa),
          c(sa, Ka),
          c(Ka, ln),
          c(sa, cn),
          c(sa, Qa),
          c(Qa, rn),
          c(sa, un),
          c(sa, xa),
          c(xa, fn),
          c(sa, kn),
          b(t, $s, m),
          b(t, ja, m),
          (ja.innerHTML = lt),
          b(t, ws, m),
          H(ga, t, m),
          (Es = !0);
      },
      p(t, [m]) {
        const as = {};
        m & 2 && (as.$$scope = { dirty: m, ctx: t }), D.$set(as);
        const ss = {};
        m & 2 && (ss.$$scope = { dirty: m, ctx: t }), W.$set(ss);
        const Os = {};
        m & 2 && (Os.$$scope = { dirty: m, ctx: t }), ca.$set(Os);
        const Ia = {};
        m & 2 && (Ia.$$scope = { dirty: m, ctx: t }), ra.$set(Ia);
        const q = {};
        m & 2 && (q.$$scope = { dirty: m, ctx: t }), ia.$set(q);
        const ns = {};
        m & 2 && (ns.$$scope = { dirty: m, ctx: t }), ua.$set(ns);
        const ts = {};
        m & 2 && (ts.$$scope = { dirty: m, ctx: t }), fa.$set(ts);
        const es = {};
        m & 2 && (es.$$scope = { dirty: m, ctx: t }), ga.$set(es);
      },
      i(t) {
        Es ||
          (A(D.$$.fragment, t),
          A(W.$$.fragment, t),
          A(ca.$$.fragment, t),
          A(ra.$$.fragment, t),
          A(ia.$$.fragment, t),
          A(ua.$$.fragment, t),
          A(fa.$$.fragment, t),
          A(ga.$$.fragment, t),
          (Es = !0));
      },
      o(t) {
        M(D.$$.fragment, t),
          M(W.$$.fragment, t),
          M(ca.$$.fragment, t),
          M(ra.$$.fragment, t),
          M(ia.$$.fragment, t),
          M(ua.$$.fragment, t),
          M(fa.$$.fragment, t),
          M(ga.$$.fragment, t),
          (Es = !1);
      },
      d(t) {
        t && p(a),
          t && p(u),
          t && p(y),
          t && p(B),
          z(D, t),
          t && p(G),
          t && p(P),
          t && p(Ma),
          t && p(_),
          t && p(Ra),
          z(W, t),
          t && p(os),
          t && p(Ba),
          t && p(ls),
          t && p(ba),
          t && p(cs),
          z(ca, t),
          t && p(rs),
          t && p(Da),
          t && p(is),
          t && p(ya),
          t && p(us),
          z(ra, t),
          t && p(fs),
          t && p(Pa),
          t && p(ks),
          t && p(wa),
          t && p(gs),
          z(ia, t),
          t && p(ms),
          t && p(Ta),
          t && p(vs),
          t && p(Ea),
          t && p(ds),
          z(ua, t),
          t && p(hs),
          t && p(Ja),
          t && p(bs),
          t && p(Oa),
          t && p(_s),
          z(fa, t),
          t && p(ys),
          t && p(ka),
          t && p($s),
          t && p(ja),
          t && p(ws),
          z(ga, t);
      },
    }
  );
}
const zt = {
    title: 'BeforeAfter',
    description: 'A before and after image comparison component.',
    slug: 'before-after',
  },
  { title: at, description: st, slug: qt } = zt;
class Wt extends Nn {
  constructor(a) {
    super();
    Hn(this, a, null, Ht, zn, {});
  }
}
export { Wt as default, zt as metadata };
