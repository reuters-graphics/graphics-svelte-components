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
  _ as ta,
  f as b,
  H as c,
  V as ea,
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
} from './vendor-b82e5b83.js';
import { D as ha } from './index-75ffd758.js';
import './@component-docs-989e6ca0.js';
import { a as L } from './paths-6758d194.js';
const { window: os } = bt,
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
    q,
    W,
    F,
    K,
    Y,
    Z,
    U,
    C,
    pa,
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
        (q = f('div')),
        (W = w()),
        (F = f('div')),
        (Z = w()),
        j && j.c(),
        (U = Cs()),
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
      var x = g(O);
      (q = k(x, 'DIV', { class: !0 })),
        g(q).forEach(p),
        (W = E(x)),
        (F = k(x, 'DIV', { class: !0 })),
        g(F).forEach(p),
        x.forEach(p),
        T.forEach(p),
        $.forEach(p),
        (Z = E(v)),
        j && j.l(v),
        (U = Cs()),
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
        i(q, 'class', 'arrow-left svelte-b70c3s'),
        i(F, 'class', 'arrow-right svelte-b70c3s'),
        i(O, 'class', 'handle svelte-b70c3s'),
        ta(O, 'left', 'calc(' + o[0] * 100 + '% - 20px)'),
        ta(O, '--before-after-handle-colour', o[7]),
        ta(O, '--before-after-handle-inactive-opacity', o[8]),
        i(n, 'style', o[15]),
        i(n, 'class', 'before-after-container svelte-b70c3s'),
        i(n, 'aria-labelledby', (K = o[22].caption && `${o[17]}-caption`)),
        i(a, 'class', (Y = 'photo before-after ' + o[1] + ' svelte-b70c3s')),
        ta(a, 'height', o[2] + 'px');
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
        c(O, q),
        c(O, W),
        c(O, F),
        o[32](n),
        b(v, Z, $),
        j && j.m(v, $),
        b(v, U, $),
        (C = !0),
        pa ||
          ((J = [
            ea(s, 'mousedown', Ln(o[29])),
            ea(s, 'load', o[18]),
            ea(u, 'mousedown', Ln(o[28])),
            ea(n, 'touchstart', o[20]),
            ea(n, 'mousedown', o[20]),
          ]),
          (pa = !0));
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
        (!C || $[0] & 1) && ta(O, 'left', 'calc(' + v[0] * 100 + '% - 20px)'),
        (!C || $[0] & 128) && ta(O, '--before-after-handle-colour', v[7]),
        (!C || $[0] & 256) &&
          ta(O, '--before-after-handle-inactive-opacity', v[8]),
        (!C || $[0] & 32768) && i(n, 'style', v[15]),
        (!C ||
          ($[0] & 4194304 &&
            K !== (K = v[22].caption && `${v[17]}-caption`))) &&
          i(n, 'aria-labelledby', K),
        (!C ||
          ($[0] & 2 &&
            Y !== (Y = 'photo before-after ' + v[1] + ' svelte-b70c3s'))) &&
          i(a, 'class', Y),
        (!C || $[0] & 4) && ta(a, 'height', v[2] + 'px'),
        v[22].caption
          ? j
            ? (j.p(v, $), $[0] & 4194304 && A(j, 1))
            : ((j = xn(v)), j.c(), A(j, 1), j.m(U.parentNode, U))
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
        v && p(Z),
        j && j.d(v),
        v && p(U),
        (pa = !1),
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
        ta(a, 'clip-path', 'inset(0 ' + o[13] + 'px 0 0)'),
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
          ta(a, 'clip-path', 'inset(0 ' + r[13] + 'px 0 0)');
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
            ea(os, 'touchmove', o[19]),
            ea(os, 'touchend', o[21]),
            ea(os, 'mousemove', o[19]),
            ea(os, 'mouseup', o[21]),
            ea(os, 'resize', dt(o[18], 100)),
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
    { beforeAlt: q = null } = a,
    { afterSrc: W = null } = a,
    { afterAlt: F = null } = a,
    { handleColour: K = 'white' } = a,
    { handleInactiveOpacity: Y = 0.4 } = a,
    { handleMargin: Z = 0 } = a,
    { offset: U = 0.5 } = a;
  const C = () =>
      Math.floor((1 + Math.random()) * 65536)
        .toString(16)
        .substring(1),
    pa = 'before-after-' + C() + C();
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
      const Ps = _.touches ? _.touches[0] : _,
        la = 20 + Z;
      if (S && J) {
        const aa = j
          ? parseInt(window.getComputedStyle(j).marginLeft.slice(0, -2))
          : 0;
        let sa = Ps.pageX - aa - J.left;
        (sa = sa < la ? la : sa > s - la ? s - la : sa), n(0, (U = sa / s));
      }
    },
    x = (_) => {
      (S = !0), T(_);
    },
    oa = () => {
      S = !1;
    };
  (O && q && W && F) ||
    console.warn('Missing required src or alt props for BeforeAfter component');
  function za(_) {
    Xn.call(this, o, _);
  }
  function _a(_) {
    Xn.call(this, o, _);
  }
  function La(_) {
    qn[_ ? 'unshift' : 'push'](() => {
      (I = _), n(11, I);
    });
  }
  function Ga() {
    (v = this.clientWidth), n(9, v);
  }
  function Ba(_) {
    qn[_ ? 'unshift' : 'push'](() => {
      (j = _), n(12, j);
    });
  }
  return (
    (o.$$set = (_) => {
      'width' in _ && n(1, (G = _.width)),
        'height' in _ && n(2, (P = _.height)),
        'beforeSrc' in _ && n(3, (O = _.beforeSrc)),
        'beforeAlt' in _ && n(4, (q = _.beforeAlt)),
        'afterSrc' in _ && n(5, (W = _.afterSrc)),
        'afterAlt' in _ && n(6, (F = _.afterAlt)),
        'handleColour' in _ && n(7, (K = _.handleColour)),
        'handleInactiveOpacity' in _ && n(8, (Y = _.handleInactiveOpacity)),
        'handleMargin' in _ && n(23, (Z = _.handleMargin)),
        'offset' in _ && n(0, (U = _.offset)),
        '$$scope' in _ && n(26, (B = _.$$scope));
    }),
    (o.$$.update = () => {
      o.$$.dirty[0] & 16777216 && n(25, (s = (J && J.width) || 0)),
        o.$$.dirty[0] & 16777216 && n(16, (l = (J && J.height) || 0)),
        o.$$.dirty[0] & 33554433 && n(10, (e = s * U)),
        o.$$.dirty[0] & 4 && n(15, (r = `width:100%;height:${P}px;`)),
        o.$$.dirty[0] & 1536 && n(13, (y = e < v ? Math.abs(e - v) : 0));
    }),
    n(14, (u = 'width:100%;height:100%;')),
    [
      U,
      G,
      P,
      O,
      q,
      W,
      F,
      K,
      Y,
      v,
      e,
      I,
      j,
      y,
      u,
      r,
      l,
      pa,
      $,
      T,
      x,
      oa,
      D,
      Z,
      J,
      s,
      B,
      R,
      za,
      _a,
      La,
      Ga,
      Ba,
    ]
  );
}
class ba extends Nn {
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
    (a = new ba({
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
    (a = new ba({
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
    (a = new ba({
      props: {
        beforeSrc: `${L}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${L}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        handleColour: '#fb8c71',
        handleInactiveOpacity: 0.6,
        handleMargin: 40,
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
    (a = new ba({
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
    (a = new ba({
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
    (a = new ba({
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
    (n = new ba({
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
    (a = new ba({
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
    q,
    W,
    F,
    K,
    Y,
    Z,
    U,
    C,
    pa,
    J,
    S,
    I,
    j,
    v,
    $,
    T,
    x,
    oa,
    za,
    _a,
    La,
    Ga,
    Ba,
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
    la,
    aa,
    sa,
    Da,
    Ua,
    Ts,
    ls,
    ya,
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
  <span class="token attr-name">handleMargin="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">40</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
<span class="token punctuation">/></span></span></code>`,
    cs,
    ia,
    rs,
    Pa,
    $a,
    Js,
    Xa,
    Vs,
    Ns,
    is,
    wa,
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
    ua,
    fs,
    Ta,
    Ea,
    Hs,
    qa,
    zs,
    Ls,
    ks,
    Oa,
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
    fa,
    ms,
    Ja,
    ca,
    Gs,
    Wa,
    Us,
    Xs,
    Fa,
    qs,
    Ws,
    vs,
    Aa,
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
    ka,
    hs,
    Va,
    ra,
    Fs,
    Ya,
    Ys,
    Zs,
    Za,
    Ks,
    Qs,
    bs,
    Sa,
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
    ga,
    ys,
    ma,
    Q,
    xs,
    ja,
    an,
    sn,
    Ka,
    nn,
    tn,
    Ia,
    en,
    pn,
    on,
    na,
    Qa,
    ln,
    cn,
    xa,
    rn,
    un,
    as,
    fn,
    kn,
    $s,
    Ca,
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
    va,
    Es;
  return (
    (D = new ha({
      props: { $$slots: { default: [Ot] }, $$scope: { ctx: o } },
    })),
    (aa = new ha({
      props: { $$slots: { default: [At] }, $$scope: { ctx: o } },
    })),
    (ia = new ha({
      props: { $$slots: { default: [St] }, $$scope: { ctx: o } },
    })),
    (ua = new ha({
      props: { $$slots: { default: [jt] }, $$scope: { ctx: o } },
    })),
    (fa = new ha({
      props: { $$slots: { default: [Ct] }, $$scope: { ctx: o } },
    })),
    (ka = new ha({
      props: { $$slots: { default: [Bt] }, $$scope: { ctx: o } },
    })),
    (ga = new ha({
      props: { $$slots: { default: [Tt] }, $$scope: { ctx: o } },
    })),
    (va = new ha({
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
          (q = d('Adjust the size of the image by passing the ')),
          (W = f('code')),
          (F = d('width')),
          (K = d(
            ' prop a class name corresponding to one of our well widths: '
          )),
          (Y = f('code')),
          (Z = d('wide')),
          (U = d(', ')),
          (C = f('code')),
          (pa = d('wider')),
          (J = d(', ')),
          (S = f('code')),
          (I = d('widest')),
          (j = d(' or ')),
          (v = f('code')),
          ($ = d('fluid')),
          (T = d('.')),
          (x = w()),
          (oa = f('p')),
          (za = d('Adjust the height by passing a number of pixels to the ')),
          (_a = f('code')),
          (La = d('height')),
          (Ga = d(' prop.')),
          (Ba = w()),
          (_ = f('pre')),
          (la = w()),
          V(aa.$$.fragment),
          (sa = w()),
          (Da = f('section')),
          (Ua = f('p')),
          (Ts = d('Change the styling of the swipe handle.')),
          (ls = w()),
          (ya = f('pre')),
          (cs = w()),
          V(ia.$$.fragment),
          (rs = w()),
          (Pa = f('section')),
          ($a = f('p')),
          (Js = d('Change the starting position of the swipe with the ')),
          (Xa = f('code')),
          (Vs = d('offset')),
          (Ns = d(' prop.')),
          (is = w()),
          (wa = f('pre')),
          (us = w()),
          V(ua.$$.fragment),
          (fs = w()),
          (Ta = f('section')),
          (Ea = f('p')),
          (Hs = d('Add and style a caption with the ')),
          (qa = f('code')),
          (zs = d('caption')),
          (Ls = d(' slot.')),
          (ks = w()),
          (Oa = f('pre')),
          (gs = w()),
          V(fa.$$.fragment),
          (ms = w()),
          (Ja = f('section')),
          (ca = f('p')),
          (Gs = d('Add overlays with the ')),
          (Wa = f('code')),
          (Us = d('beforeOverlay')),
          (Xs = d(' and ')),
          (Fa = f('code')),
          (qs = d('afterOverlay')),
          (Ws = d(' slots.')),
          (vs = w()),
          (Aa = f('pre')),
          (ds = w()),
          V(ka.$$.fragment),
          (hs = w()),
          (Va = f('section')),
          (ra = f('p')),
          (Fs = d('Target the ')),
          (Ya = f('code')),
          (Ys = d('.overlay-container')),
          (Zs = d(' with ')),
          (Za = f('code')),
          (Ks = d(':global')),
          (Qs = d(' SCSS rules to change the overlay positioning.')),
          (bs = w()),
          (Sa = f('pre')),
          (_s = w()),
          V(ga.$$.fragment),
          (ys = w()),
          (ma = f('section')),
          (Q = f('p')),
          (xs = d('Use text elements in your overlays as ')),
          (ja = f('a')),
          (an = d('ARIA descriptions')),
          (sn = d(
            ' for your images by setting an ID on text elements within each overly with the '
          )),
          (Ka = f('code')),
          (nn = d('description')),
          (tn = w()),
          (Ia = f('a')),
          (en = d('slot prop')),
          (pn = d('.')),
          (on = w()),
          (na = f('p')),
          (Qa = f('strong')),
          (ln = d('\u{1F4A1} TIP:')),
          (cn = d(' You must always use the ')),
          (xa = f('code')),
          (rn = d('beforeAlt')),
          (un = d(' / ')),
          (as = f('code')),
          (fn = d('afterAlt')),
          (kn = d(
            ' props to label your image for visually impaired readers, but you can use these descriptions to provide more information or context that the reader might also need.'
          )),
          ($s = w()),
          (Ca = f('pre')),
          (ws = w()),
          V(va.$$.fragment),
          this.h();
      },
      l(t) {
        a = k(t, 'SECTION', {});
        var m = g(a);
        n = k(m, 'H2', {});
        var ss = g(n);
        (s = h(ss, at)), ss.forEach(p), (l = E(m)), (e = k(m, 'P', {}));
        var ns = g(e);
        (r = h(ns, st)),
          ns.forEach(p),
          m.forEach(p),
          (u = E(t)),
          (y = k(t, 'PRE', { class: !0 }));
        var Os = g(y);
        Os.forEach(p),
          (B = E(t)),
          N(D.$$.fragment, t),
          (G = E(t)),
          (P = k(t, 'SECTION', {}));
        var Ma = g(P);
        O = k(Ma, 'P', {});
        var X = g(O);
        (q = h(X, 'Adjust the size of the image by passing the ')),
          (W = k(X, 'CODE', {}));
        var ts = g(W);
        (F = h(ts, 'width')),
          ts.forEach(p),
          (K = h(
            X,
            ' prop a class name corresponding to one of our well widths: '
          )),
          (Y = k(X, 'CODE', {}));
        var es = g(Y);
        (Z = h(es, 'wide')),
          es.forEach(p),
          (U = h(X, ', ')),
          (C = k(X, 'CODE', {}));
        var ps = g(C);
        (pa = h(ps, 'wider')),
          ps.forEach(p),
          (J = h(X, ', ')),
          (S = k(X, 'CODE', {}));
        var hn = g(S);
        (I = h(hn, 'widest')),
          hn.forEach(p),
          (j = h(X, ' or ')),
          (v = k(X, 'CODE', {}));
        var bn = g(v);
        ($ = h(bn, 'fluid')),
          bn.forEach(p),
          (T = h(X, '.')),
          X.forEach(p),
          (x = E(Ma)),
          (oa = k(Ma, 'P', {}));
        var As = g(oa);
        (za = h(As, 'Adjust the height by passing a number of pixels to the ')),
          (_a = k(As, 'CODE', {}));
        var _n = g(_a);
        (La = h(_n, 'height')),
          _n.forEach(p),
          (Ga = h(As, ' prop.')),
          As.forEach(p),
          Ma.forEach(p),
          (Ba = E(t)),
          (_ = k(t, 'PRE', { class: !0 }));
        var ct = g(_);
        ct.forEach(p),
          (la = E(t)),
          N(aa.$$.fragment, t),
          (sa = E(t)),
          (Da = k(t, 'SECTION', {}));
        var yn = g(Da);
        Ua = k(yn, 'P', {});
        var $n = g(Ua);
        (Ts = h($n, 'Change the styling of the swipe handle.')),
          $n.forEach(p),
          yn.forEach(p),
          (ls = E(t)),
          (ya = k(t, 'PRE', { class: !0 }));
        var rt = g(ya);
        rt.forEach(p),
          (cs = E(t)),
          N(ia.$$.fragment, t),
          (rs = E(t)),
          (Pa = k(t, 'SECTION', {}));
        var wn = g(Pa);
        $a = k(wn, 'P', {});
        var Ss = g($a);
        (Js = h(Ss, 'Change the starting position of the swipe with the ')),
          (Xa = k(Ss, 'CODE', {}));
        var En = g(Xa);
        (Vs = h(En, 'offset')),
          En.forEach(p),
          (Ns = h(Ss, ' prop.')),
          Ss.forEach(p),
          wn.forEach(p),
          (is = E(t)),
          (wa = k(t, 'PRE', { class: !0 }));
        var it = g(wa);
        it.forEach(p),
          (us = E(t)),
          N(ua.$$.fragment, t),
          (fs = E(t)),
          (Ta = k(t, 'SECTION', {}));
        var On = g(Ta);
        Ea = k(On, 'P', {});
        var js = g(Ea);
        (Hs = h(js, 'Add and style a caption with the ')),
          (qa = k(js, 'CODE', {}));
        var An = g(qa);
        (zs = h(An, 'caption')),
          An.forEach(p),
          (Ls = h(js, ' slot.')),
          js.forEach(p),
          On.forEach(p),
          (ks = E(t)),
          (Oa = k(t, 'PRE', { class: !0 }));
        var ut = g(Oa);
        ut.forEach(p),
          (gs = E(t)),
          N(fa.$$.fragment, t),
          (ms = E(t)),
          (Ja = k(t, 'SECTION', {}));
        var Sn = g(Ja);
        ca = k(Sn, 'P', {});
        var Na = g(ca);
        (Gs = h(Na, 'Add overlays with the ')), (Wa = k(Na, 'CODE', {}));
        var jn = g(Wa);
        (Us = h(jn, 'beforeOverlay')),
          jn.forEach(p),
          (Xs = h(Na, ' and ')),
          (Fa = k(Na, 'CODE', {}));
        var In = g(Fa);
        (qs = h(In, 'afterOverlay')),
          In.forEach(p),
          (Ws = h(Na, ' slots.')),
          Na.forEach(p),
          Sn.forEach(p),
          (vs = E(t)),
          (Aa = k(t, 'PRE', { class: !0 }));
        var ft = g(Aa);
        ft.forEach(p),
          (ds = E(t)),
          N(ka.$$.fragment, t),
          (hs = E(t)),
          (Va = k(t, 'SECTION', {}));
        var Cn = g(Va);
        ra = k(Cn, 'P', {});
        var Ha = g(ra);
        (Fs = h(Ha, 'Target the ')), (Ya = k(Ha, 'CODE', {}));
        var Mn = g(Ya);
        (Ys = h(Mn, '.overlay-container')),
          Mn.forEach(p),
          (Zs = h(Ha, ' with ')),
          (Za = k(Ha, 'CODE', {}));
        var Rn = g(Za);
        (Ks = h(Rn, ':global')),
          Rn.forEach(p),
          (Qs = h(Ha, ' SCSS rules to change the overlay positioning.')),
          Ha.forEach(p),
          Cn.forEach(p),
          (bs = E(t)),
          (Sa = k(t, 'PRE', { class: !0 }));
        var kt = g(Sa);
        kt.forEach(p),
          (_s = E(t)),
          N(ga.$$.fragment, t),
          (ys = E(t)),
          (ma = k(t, 'SECTION', {}));
        var Is = g(ma);
        Q = k(Is, 'P', {});
        var da = g(Q);
        (xs = h(da, 'Use text elements in your overlays as ')),
          (ja = k(da, 'A', { href: !0, rel: !0 }));
        var Bn = g(ja);
        (an = h(Bn, 'ARIA descriptions')),
          Bn.forEach(p),
          (sn = h(
            da,
            ' for your images by setting an ID on text elements within each overly with the '
          )),
          (Ka = k(da, 'CODE', {}));
        var Dn = g(Ka);
        (nn = h(Dn, 'description')),
          Dn.forEach(p),
          (tn = E(da)),
          (Ia = k(da, 'A', { href: !0, rel: !0 }));
        var Pn = g(Ia);
        (en = h(Pn, 'slot prop')),
          Pn.forEach(p),
          (pn = h(da, '.')),
          da.forEach(p),
          (on = E(Is)),
          (na = k(Is, 'P', {}));
        var Ra = g(na);
        Qa = k(Ra, 'STRONG', {});
        var Tn = g(Qa);
        (ln = h(Tn, '\u{1F4A1} TIP:')),
          Tn.forEach(p),
          (cn = h(Ra, ' You must always use the ')),
          (xa = k(Ra, 'CODE', {}));
        var Jn = g(xa);
        (rn = h(Jn, 'beforeAlt')),
          Jn.forEach(p),
          (un = h(Ra, ' / ')),
          (as = k(Ra, 'CODE', {}));
        var Vn = g(as);
        (fn = h(Vn, 'afterAlt')),
          Vn.forEach(p),
          (kn = h(
            Ra,
            ' props to label your image for visually impaired readers, but you can use these descriptions to provide more information or context that the reader might also need.'
          )),
          Ra.forEach(p),
          Is.forEach(p),
          ($s = E(t)),
          (Ca = k(t, 'PRE', { class: !0 }));
        var gt = g(Ca);
        gt.forEach(p), (ws = E(t)), N(va.$$.fragment, t), this.h();
      },
      h() {
        i(y, 'class', 'language-svelte'),
          i(_, 'class', 'language-svelte'),
          i(ya, 'class', 'language-svelte'),
          i(wa, 'class', 'language-svelte'),
          i(Oa, 'class', 'language-svelte'),
          i(Aa, 'class', 'language-svelte'),
          i(Sa, 'class', 'language-svelte'),
          i(
            ja,
            'href',
            'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby'
          ),
          i(ja, 'rel', 'nofollow'),
          i(Ia, 'href', 'https://svelte.dev/tutorial/slot-props'),
          i(Ia, 'rel', 'nofollow'),
          i(Ca, 'class', 'language-svelte');
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
          c(O, q),
          c(O, W),
          c(W, F),
          c(O, K),
          c(O, Y),
          c(Y, Z),
          c(O, U),
          c(O, C),
          c(C, pa),
          c(O, J),
          c(O, S),
          c(S, I),
          c(O, j),
          c(O, v),
          c(v, $),
          c(O, T),
          c(P, x),
          c(P, oa),
          c(oa, za),
          c(oa, _a),
          c(_a, La),
          c(oa, Ga),
          b(t, Ba, m),
          b(t, _, m),
          (_.innerHTML = Ps),
          b(t, la, m),
          H(aa, t, m),
          b(t, sa, m),
          b(t, Da, m),
          c(Da, Ua),
          c(Ua, Ts),
          b(t, ls, m),
          b(t, ya, m),
          (ya.innerHTML = nt),
          b(t, cs, m),
          H(ia, t, m),
          b(t, rs, m),
          b(t, Pa, m),
          c(Pa, $a),
          c($a, Js),
          c($a, Xa),
          c(Xa, Vs),
          c($a, Ns),
          b(t, is, m),
          b(t, wa, m),
          (wa.innerHTML = tt),
          b(t, us, m),
          H(ua, t, m),
          b(t, fs, m),
          b(t, Ta, m),
          c(Ta, Ea),
          c(Ea, Hs),
          c(Ea, qa),
          c(qa, zs),
          c(Ea, Ls),
          b(t, ks, m),
          b(t, Oa, m),
          (Oa.innerHTML = et),
          b(t, gs, m),
          H(fa, t, m),
          b(t, ms, m),
          b(t, Ja, m),
          c(Ja, ca),
          c(ca, Gs),
          c(ca, Wa),
          c(Wa, Us),
          c(ca, Xs),
          c(ca, Fa),
          c(Fa, qs),
          c(ca, Ws),
          b(t, vs, m),
          b(t, Aa, m),
          (Aa.innerHTML = pt),
          b(t, ds, m),
          H(ka, t, m),
          b(t, hs, m),
          b(t, Va, m),
          c(Va, ra),
          c(ra, Fs),
          c(ra, Ya),
          c(Ya, Ys),
          c(ra, Zs),
          c(ra, Za),
          c(Za, Ks),
          c(ra, Qs),
          b(t, bs, m),
          b(t, Sa, m),
          (Sa.innerHTML = ot),
          b(t, _s, m),
          H(ga, t, m),
          b(t, ys, m),
          b(t, ma, m),
          c(ma, Q),
          c(Q, xs),
          c(Q, ja),
          c(ja, an),
          c(Q, sn),
          c(Q, Ka),
          c(Ka, nn),
          c(Q, tn),
          c(Q, Ia),
          c(Ia, en),
          c(Q, pn),
          c(ma, on),
          c(ma, na),
          c(na, Qa),
          c(Qa, ln),
          c(na, cn),
          c(na, xa),
          c(xa, rn),
          c(na, un),
          c(na, as),
          c(as, fn),
          c(na, kn),
          b(t, $s, m),
          b(t, Ca, m),
          (Ca.innerHTML = lt),
          b(t, ws, m),
          H(va, t, m),
          (Es = !0);
      },
      p(t, [m]) {
        const ss = {};
        m & 2 && (ss.$$scope = { dirty: m, ctx: t }), D.$set(ss);
        const ns = {};
        m & 2 && (ns.$$scope = { dirty: m, ctx: t }), aa.$set(ns);
        const Os = {};
        m & 2 && (Os.$$scope = { dirty: m, ctx: t }), ia.$set(Os);
        const Ma = {};
        m & 2 && (Ma.$$scope = { dirty: m, ctx: t }), ua.$set(Ma);
        const X = {};
        m & 2 && (X.$$scope = { dirty: m, ctx: t }), fa.$set(X);
        const ts = {};
        m & 2 && (ts.$$scope = { dirty: m, ctx: t }), ka.$set(ts);
        const es = {};
        m & 2 && (es.$$scope = { dirty: m, ctx: t }), ga.$set(es);
        const ps = {};
        m & 2 && (ps.$$scope = { dirty: m, ctx: t }), va.$set(ps);
      },
      i(t) {
        Es ||
          (A(D.$$.fragment, t),
          A(aa.$$.fragment, t),
          A(ia.$$.fragment, t),
          A(ua.$$.fragment, t),
          A(fa.$$.fragment, t),
          A(ka.$$.fragment, t),
          A(ga.$$.fragment, t),
          A(va.$$.fragment, t),
          (Es = !0));
      },
      o(t) {
        M(D.$$.fragment, t),
          M(aa.$$.fragment, t),
          M(ia.$$.fragment, t),
          M(ua.$$.fragment, t),
          M(fa.$$.fragment, t),
          M(ka.$$.fragment, t),
          M(ga.$$.fragment, t),
          M(va.$$.fragment, t),
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
          t && p(Ba),
          t && p(_),
          t && p(la),
          z(aa, t),
          t && p(sa),
          t && p(Da),
          t && p(ls),
          t && p(ya),
          t && p(cs),
          z(ia, t),
          t && p(rs),
          t && p(Pa),
          t && p(is),
          t && p(wa),
          t && p(us),
          z(ua, t),
          t && p(fs),
          t && p(Ta),
          t && p(ks),
          t && p(Oa),
          t && p(gs),
          z(fa, t),
          t && p(ms),
          t && p(Ja),
          t && p(vs),
          t && p(Aa),
          t && p(ds),
          z(ka, t),
          t && p(hs),
          t && p(Va),
          t && p(bs),
          t && p(Sa),
          t && p(_s),
          z(ga, t),
          t && p(ys),
          t && p(ma),
          t && p($s),
          t && p(Ca),
          t && p(ws),
          z(va, t);
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
