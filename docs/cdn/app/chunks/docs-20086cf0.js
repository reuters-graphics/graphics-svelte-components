import {
  S as Zn,
  i as xn,
  s as at,
  e as f,
  k as E,
  l as Ds,
  c as k,
  a as g,
  m as O,
  d as p,
  W as Cs,
  b as i,
  f as pa,
  g as b,
  J as c,
  X as K,
  a5 as Vn,
  q as S,
  a1 as mt,
  a2 as vt,
  G as gn,
  H as mn,
  I as vn,
  o as C,
  n as Bs,
  p as Rs,
  a6 as Hn,
  a7 as st,
  a8 as dt,
  a0 as ht,
  a9 as bt,
  F as dn,
  aa as zn,
  ab as Ln,
  t as d,
  w as H,
  h,
  x as z,
  y as L,
  B as G,
  K as Ps,
} from './vendor-f398e5e0.js';
import { D as ya } from './index-9e15525f.js';
import './@component-docs_components-890b5864.js';
import { a as X } from './paths-396f020f.js';
const { window: Ga } = bt,
  _t = (o) => ({}),
  Gn = (o) => ({}),
  yt = (o) => ({}),
  Xn = (o) => ({ description: `${o[16]}-after-description` }),
  $t = (o) => ({}),
  qn = (o) => ({ description: `${o[16]}-before-description` });
function Fn(o) {
  let a,
    n,
    s,
    l,
    e,
    r,
    u,
    y,
    B,
    R,
    P,
    N,
    J,
    $,
    F,
    U,
    Y,
    Q,
    T,
    W,
    D,
    I,
    oa,
    Z,
    A = o[24].beforeOverlay && Un(o),
    M = o[24].afterOverlay && Wn(o),
    j = o[24].caption && Kn(o);
  return {
    c() {
      (a = f('section')),
        (n = f('figure')),
        (s = f('img')),
        (r = E()),
        (u = f('img')),
        (P = E()),
        A && A.c(),
        (N = E()),
        M && M.c(),
        (J = E()),
        ($ = f('div')),
        (F = f('div')),
        (U = E()),
        (Y = f('div')),
        (W = E()),
        j && j.c(),
        (D = Ds()),
        this.h();
    },
    l(v) {
      a = k(v, 'SECTION', { class: !0, style: !0 });
      var w = g(a);
      n = k(w, 'FIGURE', { style: !0, class: !0, 'aria-labelledby': !0 });
      var V = g(n);
      (s = k(V, 'IMG', {
        src: !0,
        alt: !0,
        style: !0,
        class: !0,
        'aria-describedby': !0,
      })),
        (r = O(V)),
        (u = k(V, 'IMG', {
          src: !0,
          alt: !0,
          style: !0,
          class: !0,
          'aria-describedby': !0,
        })),
        (P = O(V)),
        A && A.l(V),
        (N = O(V)),
        M && M.l(V),
        (J = O(V)),
        ($ = k(V, 'DIV', { tabindex: !0, class: !0, style: !0 }));
      var sa = g($);
      (F = k(sa, 'DIV', { class: !0 })),
        g(F).forEach(p),
        (U = O(sa)),
        (Y = k(sa, 'DIV', { class: !0 })),
        g(Y).forEach(p),
        sa.forEach(p),
        V.forEach(p),
        w.forEach(p),
        (W = O(v)),
        j && j.l(v),
        (D = Ds()),
        this.h();
    },
    h() {
      Cs(s.src, (l = o[5])) || i(s, 'src', l),
        i(s, 'alt', o[6]),
        i(s, 'style', o[14]),
        i(s, 'class', 'after svelte-1fkuva'),
        i(
          s,
          'aria-describedby',
          (e = o[24].beforeOverlay && `${o[16]}-before`)
        ),
        Cs(u.src, (y = o[3])) || i(u, 'src', y),
        i(u, 'alt', o[4]),
        i(
          u,
          'style',
          (B = 'clip: rect(0 ' + o[10] + 'px ' + o[2] + 'px 0);' + o[14])
        ),
        i(u, 'class', 'before svelte-1fkuva'),
        i(u, 'aria-describedby', (R = o[24].afterOverlay && `${o[16]}-after`)),
        i(F, 'class', 'arrow-left svelte-1fkuva'),
        i(Y, 'class', 'arrow-right svelte-1fkuva'),
        i($, 'tabindex', '0'),
        i($, 'class', 'handle svelte-1fkuva'),
        pa($, 'left', 'calc(' + o[0] * 100 + '% - 20px)'),
        pa($, '--before-after-handle-colour', o[7]),
        pa($, '--before-after-handle-inactive-opacity', o[8]),
        i(n, 'style', o[15]),
        i(n, 'class', 'before-after-container svelte-1fkuva'),
        i(n, 'aria-labelledby', (Q = o[24].caption && `${o[16]}-caption`)),
        i(a, 'class', (T = 'photo before-after ' + o[1] + ' svelte-1fkuva')),
        pa(a, 'height', o[2] + 'px');
    },
    m(v, w) {
      b(v, a, w),
        c(a, n),
        c(n, s),
        o[33](s),
        c(n, r),
        c(n, u),
        c(n, P),
        A && A.m(n, null),
        c(n, N),
        M && M.m(n, null),
        c(n, J),
        c(n, $),
        c($, F),
        c($, U),
        c($, Y),
        o[35](n),
        b(v, W, w),
        j && j.m(v, w),
        b(v, D, w),
        (I = !0),
        oa ||
          ((Z = [
            K(s, 'mousedown', Vn(o[32])),
            K(s, 'load', o[20]),
            K(u, 'mousedown', Vn(o[31])),
            K($, 'focus', o[17]),
            K($, 'blur', o[18]),
            K(n, 'touchstart', o[22]),
            K(n, 'mousedown', o[22]),
          ]),
          (oa = !0));
    },
    p(v, w) {
      (!I || (w[0] & 32 && !Cs(s.src, (l = v[5])))) && i(s, 'src', l),
        (!I || w[0] & 64) && i(s, 'alt', v[6]),
        (!I || w[0] & 16384) && i(s, 'style', v[14]),
        (!I ||
          (w[0] & 16777216 &&
            e !== (e = v[24].beforeOverlay && `${v[16]}-before`))) &&
          i(s, 'aria-describedby', e),
        (!I || (w[0] & 8 && !Cs(u.src, (y = v[3])))) && i(u, 'src', y),
        (!I || w[0] & 16) && i(u, 'alt', v[4]),
        (!I ||
          (w[0] & 17412 &&
            B !==
              (B =
                'clip: rect(0 ' + v[10] + 'px ' + v[2] + 'px 0);' + v[14]))) &&
          i(u, 'style', B),
        (!I ||
          (w[0] & 16777216 &&
            R !== (R = v[24].afterOverlay && `${v[16]}-after`))) &&
          i(u, 'aria-describedby', R),
        v[24].beforeOverlay
          ? A
            ? (A.p(v, w), w[0] & 16777216 && S(A, 1))
            : ((A = Un(v)), A.c(), S(A, 1), A.m(n, N))
          : A &&
            (Bs(),
            C(A, 1, 1, () => {
              A = null;
            }),
            Rs()),
        v[24].afterOverlay
          ? M
            ? (M.p(v, w), w[0] & 16777216 && S(M, 1))
            : ((M = Wn(v)), M.c(), S(M, 1), M.m(n, J))
          : M &&
            (Bs(),
            C(M, 1, 1, () => {
              M = null;
            }),
            Rs()),
        (!I || w[0] & 1) && pa($, 'left', 'calc(' + v[0] * 100 + '% - 20px)'),
        (!I || w[0] & 128) && pa($, '--before-after-handle-colour', v[7]),
        (!I || w[0] & 256) &&
          pa($, '--before-after-handle-inactive-opacity', v[8]),
        (!I || w[0] & 32768) && i(n, 'style', v[15]),
        (!I ||
          (w[0] & 16777216 &&
            Q !== (Q = v[24].caption && `${v[16]}-caption`))) &&
          i(n, 'aria-labelledby', Q),
        (!I ||
          (w[0] & 2 &&
            T !== (T = 'photo before-after ' + v[1] + ' svelte-1fkuva'))) &&
          i(a, 'class', T),
        (!I || w[0] & 4) && pa(a, 'height', v[2] + 'px'),
        v[24].caption
          ? j
            ? (j.p(v, w), w[0] & 16777216 && S(j, 1))
            : ((j = Kn(v)), j.c(), S(j, 1), j.m(D.parentNode, D))
          : j &&
            (Bs(),
            C(j, 1, 1, () => {
              j = null;
            }),
            Rs());
    },
    i(v) {
      I || (S(A), S(M), S(j), (I = !0));
    },
    o(v) {
      C(A), C(M), C(j), (I = !1);
    },
    d(v) {
      v && p(a),
        o[33](null),
        A && A.d(),
        M && M.d(),
        o[35](null),
        v && p(W),
        j && j.d(v),
        v && p(D),
        (oa = !1),
        st(Z);
    },
  };
}
function Un(o) {
  let a, n, s;
  const l = o[30].beforeOverlay,
    e = dn(l, o, o[29], qn);
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
        i(a, 'class', 'overlay-container before svelte-1fkuva'),
        pa(a, 'clip-path', 'inset(0 ' + o[13] + 'px 0 0)'),
        mt(() => o[34].call(a));
    },
    m(r, u) {
      b(r, a, u), e && e.m(a, null), (n = vt(a, o[34].bind(a))), (s = !0);
    },
    p(r, u) {
      e &&
        e.p &&
        (!s || u[0] & 536870912) &&
        gn(e, l, r, r[29], s ? vn(l, r[29], u, $t) : mn(r[29]), qn),
        (!s || u[0] & 8192) &&
          pa(a, 'clip-path', 'inset(0 ' + r[13] + 'px 0 0)');
    },
    i(r) {
      s || (S(e, r), (s = !0));
    },
    o(r) {
      C(e, r), (s = !1);
    },
    d(r) {
      r && p(a), e && e.d(r), n();
    },
  };
}
function Wn(o) {
  let a, n;
  const s = o[30].afterOverlay,
    l = dn(s, o, o[29], Xn);
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
        i(a, 'class', 'overlay-container after svelte-1fkuva');
    },
    m(e, r) {
      b(e, a, r), l && l.m(a, null), (n = !0);
    },
    p(e, r) {
      l &&
        l.p &&
        (!n || r[0] & 536870912) &&
        gn(l, s, e, e[29], n ? vn(s, e[29], r, yt) : mn(e[29]), Xn);
    },
    i(e) {
      n || (S(l, e), (n = !0));
    },
    o(e) {
      C(l, e), (n = !1);
    },
    d(e) {
      e && p(a), l && l.d(e);
    },
  };
}
function Kn(o) {
  let a, n, s;
  const l = o[30].caption,
    e = dn(l, o, o[29], Gn);
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
      i(a, 'class', (n = Hn(o[1]) + ' svelte-1fkuva')),
        i(a, 'id', `${o[16]}-caption`);
    },
    m(r, u) {
      b(r, a, u), e && e.m(a, null), (s = !0);
    },
    p(r, u) {
      e &&
        e.p &&
        (!s || u[0] & 536870912) &&
        gn(e, l, r, r[29], s ? vn(l, r[29], u, _t) : mn(r[29]), Gn),
        (!s || (u[0] & 2 && n !== (n = Hn(r[1]) + ' svelte-1fkuva'))) &&
          i(a, 'class', n);
    },
    i(r) {
      s || (S(e, r), (s = !0));
    },
    o(r) {
      C(e, r), (s = !1);
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
    e = o[3] && o[4] && o[5] && o[6] && Fn(o);
  return {
    c() {
      e && e.c(), (a = Ds());
    },
    l(r) {
      e && e.l(r), (a = Ds());
    },
    m(r, u) {
      e && e.m(r, u),
        b(r, a, u),
        (n = !0),
        s ||
          ((l = [
            K(Ga, 'touchmove', o[21]),
            K(Ga, 'touchend', o[23]),
            K(Ga, 'mousemove', o[21]),
            K(Ga, 'mouseup', o[23]),
            K(Ga, 'resize', dt(o[20], 100)),
            K(Ga, 'keydown', o[19]),
          ]),
          (s = !0));
    },
    p(r, u) {
      r[3] && r[4] && r[5] && r[6]
        ? e
          ? (e.p(r, u), u[0] & 120 && S(e, 1))
          : ((e = Fn(r)), e.c(), S(e, 1), e.m(a.parentNode, a))
        : e &&
          (Bs(),
          C(e, 1, 1, () => {
            e = null;
          }),
          Rs());
    },
    i(r) {
      n || (S(e), (n = !0));
    },
    o(r) {
      C(e), (n = !1);
    },
    d(r) {
      e && e.d(r), r && p(a), (s = !1), st(l);
    },
  };
}
function Et(o, a, n) {
  let s,
    l,
    e,
    r,
    u,
    { $$slots: y = {}, $$scope: B } = a;
  const R = ht(y);
  let { width: P = '' } = a,
    { height: N = 600 } = a,
    { beforeSrc: J = null } = a,
    { beforeAlt: $ = null } = a,
    { afterSrc: F = null } = a,
    { afterAlt: U = null } = a,
    { handleColour: Y = 'white' } = a,
    { handleInactiveOpacity: Q = 0.4 } = a,
    { handleMargin: T = 20 } = a,
    { keyPressStep: W = 0.05 } = a,
    { offset: D = 0.5 } = a;
  const I = () =>
      Math.floor((1 + Math.random()) * 65536)
        .toString(16)
        .substring(1),
    oa = 'before-after-' + I() + I();
  let Z,
    A = null,
    M = !1,
    j,
    v = 0,
    w = !1;
  const V = () => (w = !0),
    sa = () => (w = !1),
    la = (_) => {
      if (!w) return;
      const { keyCode: x } = _,
        ta = T / s;
      x === 39
        ? n(0, (D = Math.min(1 - ta, D + W)))
        : x === 37 && n(0, (D = Math.max(0 + ta, D - W)));
    },
    Xa = (_) => {
      _.type === 'load'
        ? n(27, (A = _.target.getBoundingClientRect()))
        : n(27, (A = Z.getBoundingClientRect()));
    },
    fa = (_) => {
      const x = _.touches ? _.touches[0] : _;
      if (M && A) {
        const ta = j
          ? parseInt(window.getComputedStyle(j).marginLeft.slice(0, -2))
          : 0;
        let ra = x.pageX - ta - A.left;
        (ra = ra < T ? T : ra > s - T ? s - T : ra), n(0, (D = ra / s));
      }
    },
    qa = (_) => {
      (M = !0), fa(_);
    },
    Fa = () => {
      M = !1;
    };
  (J && $ && F && U) ||
    console.warn('Missing required src or alt props for BeforeAfter component');
  function Pa(_) {
    zn.call(this, o, _);
  }
  function ca(_) {
    zn.call(this, o, _);
  }
  function Ts(_) {
    Ln[_ ? 'unshift' : 'push'](() => {
      (Z = _), n(11, Z);
    });
  }
  function Ta() {
    (v = this.clientWidth), n(9, v);
  }
  function na(_) {
    Ln[_ ? 'unshift' : 'push'](() => {
      (j = _), n(12, j);
    });
  }
  return (
    (o.$$set = (_) => {
      'width' in _ && n(1, (P = _.width)),
        'height' in _ && n(2, (N = _.height)),
        'beforeSrc' in _ && n(3, (J = _.beforeSrc)),
        'beforeAlt' in _ && n(4, ($ = _.beforeAlt)),
        'afterSrc' in _ && n(5, (F = _.afterSrc)),
        'afterAlt' in _ && n(6, (U = _.afterAlt)),
        'handleColour' in _ && n(7, (Y = _.handleColour)),
        'handleInactiveOpacity' in _ && n(8, (Q = _.handleInactiveOpacity)),
        'handleMargin' in _ && n(25, (T = _.handleMargin)),
        'keyPressStep' in _ && n(26, (W = _.keyPressStep)),
        'offset' in _ && n(0, (D = _.offset)),
        '$$scope' in _ && n(29, (B = _.$$scope));
    }),
    (o.$$.update = () => {
      o.$$.dirty[0] & 134217728 && n(28, (s = (A && A.width) || 0)),
        o.$$.dirty[0] & 268435457 && n(10, (l = s * D)),
        o.$$.dirty[0] & 4 && n(15, (e = `width:100%;height:${N}px;`)),
        o.$$.dirty[0] & 1536 && n(13, (u = l < v ? Math.abs(l - v) : 0));
    }),
    n(14, (r = 'width:100%;height:100%;')),
    [
      D,
      P,
      N,
      J,
      $,
      F,
      U,
      Y,
      Q,
      v,
      l,
      Z,
      j,
      u,
      r,
      e,
      oa,
      V,
      sa,
      la,
      Xa,
      fa,
      qa,
      Fa,
      R,
      T,
      W,
      A,
      s,
      B,
      y,
      Pa,
      ca,
      Ts,
      Ta,
      na,
    ]
  );
}
class $a extends Zn {
  constructor(a) {
    super();
    xn(
      this,
      a,
      Et,
      wt,
      at,
      {
        width: 1,
        height: 2,
        beforeSrc: 3,
        beforeAlt: 4,
        afterSrc: 5,
        afterAlt: 6,
        handleColour: 7,
        handleInactiveOpacity: 8,
        handleMargin: 25,
        keyPressStep: 26,
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
    (a = new $a({
      props: {
        beforeSrc: `${X}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${X}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
      },
    })),
    {
      c() {
        H(a.$$.fragment);
      },
      l(s) {
        z(a.$$.fragment, s);
      },
      m(s, l) {
        L(a, s, l), (n = !0);
      },
      p: Ps,
      i(s) {
        n || (S(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        G(a, s);
      },
    }
  );
}
function At(o) {
  let a, n;
  return (
    (a = new $a({
      props: {
        beforeSrc: `${X}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${X}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        width: 'wide',
        height: 400,
      },
    })),
    {
      c() {
        H(a.$$.fragment);
      },
      l(s) {
        z(a.$$.fragment, s);
      },
      m(s, l) {
        L(a, s, l), (n = !0);
      },
      p: Ps,
      i(s) {
        n || (S(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        G(a, s);
      },
    }
  );
}
function St(o) {
  let a, n;
  return (
    (a = new $a({
      props: {
        beforeSrc: `${X}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${X}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        handleColour: '#fb8c71',
        handleInactiveOpacity: 0.6,
        handleMargin: 0,
      },
    })),
    {
      c() {
        H(a.$$.fragment);
      },
      l(s) {
        z(a.$$.fragment, s);
      },
      m(s, l) {
        L(a, s, l), (n = !0);
      },
      p: Ps,
      i(s) {
        n || (S(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        G(a, s);
      },
    }
  );
}
function jt(o) {
  let a, n;
  return (
    (a = new $a({
      props: {
        beforeSrc: `${X}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${X}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        offset: 0.1,
      },
    })),
    {
      c() {
        H(a.$$.fragment);
      },
      l(s) {
        z(a.$$.fragment, s);
      },
      m(s, l) {
        L(a, s, l), (n = !0);
      },
      p: Ps,
      i(s) {
        n || (S(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        G(a, s);
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
function Mt(o) {
  let a, n;
  return (
    (a = new $a({
      props: {
        beforeSrc: `${X}/images/before-after/myrne-before.jpg`,
        beforeAlt:
          'Satellite image of Russian base at Myrne taken on July 7, 2020.',
        afterSrc: `${X}/images/before-after/myrne-after.jpg`,
        afterAlt:
          'Satellite image of Russian base at Myrne taken on Oct. 20, 2020.',
        $$slots: { caption: [It] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        H(a.$$.fragment);
      },
      l(s) {
        z(a.$$.fragment, s);
      },
      m(s, l) {
        L(a, s, l), (n = !0);
      },
      p(s, l) {
        const e = {};
        l & 2 && (e.$$scope = { dirty: l, ctx: s }), a.$set(e);
      },
      i(s) {
        n || (S(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        G(a, s);
      },
    }
  );
}
function Ct(o) {
  let a, n, s, l, e, r;
  return {
    c() {
      (a = f('div')),
        (n = f('h6')),
        (s = d('July 7, 2020')),
        (l = E()),
        (e = f('p')),
        (r = d('Initially, this site was far smaller.')),
        this.h();
    },
    l(u) {
      a = k(u, 'DIV', { slot: !0, class: !0 });
      var y = g(a);
      n = k(y, 'H6', { class: !0 });
      var B = g(n);
      (s = h(B, 'July 7, 2020')),
        B.forEach(p),
        (l = O(y)),
        (e = k(y, 'P', { class: !0 }));
      var R = g(e);
      (r = h(R, 'Initially, this site was far smaller.')),
        R.forEach(p),
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
function Bt(o) {
  let a, n, s, l, e, r;
  return {
    c() {
      (a = f('div')),
        (n = f('h6')),
        (s = d('Oct. 20, 2020')),
        (l = E()),
        (e = f('p')),
        (r = d('But then forces built up.')),
        this.h();
    },
    l(u) {
      a = k(u, 'DIV', { slot: !0, class: !0 });
      var y = g(a);
      n = k(y, 'H6', { class: !0 });
      var B = g(n);
      (s = h(B, 'Oct. 20, 2020')),
        B.forEach(p),
        (l = O(y)),
        (e = k(y, 'P', { class: !0 }));
      var R = g(e);
      (r = h(R, 'But then forces built up.')),
        R.forEach(p),
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
function Rt(o) {
  let a, n;
  return (
    (a = new $a({
      props: {
        beforeSrc: `${X}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${X}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        $$slots: { afterOverlay: [Bt], beforeOverlay: [Ct] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        H(a.$$.fragment);
      },
      l(s) {
        z(a.$$.fragment, s);
      },
      m(s, l) {
        L(a, s, l), (n = !0);
      },
      p(s, l) {
        const e = {};
        l & 2 && (e.$$scope = { dirty: l, ctx: s }), a.$set(e);
      },
      i(s) {
        n || (S(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        G(a, s);
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
    (n = new $a({
      props: {
        beforeSrc: `${X}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${X}/images/before-after/myrne-after.jpg`,
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
        (a = f('div')), H(n.$$.fragment), this.h();
      },
      l(l) {
        a = k(l, 'DIV', { class: !0 });
        var e = g(a);
        z(n.$$.fragment, e), e.forEach(p), this.h();
      },
      h() {
        i(a, 'class', 'custom-position');
      },
      m(l, e) {
        b(l, a, e), L(n, a, null), (s = !0);
      },
      p(l, e) {
        const r = {};
        e & 3 && (r.$$scope = { dirty: e, ctx: l }), n.$set(r);
      },
      i(l) {
        s || (S(n.$$.fragment, l), (s = !0));
      },
      o(l) {
        C(n.$$.fragment, l), (s = !1);
      },
      d(l) {
        l && p(a), G(n);
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
function Nt(o) {
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
      var B = g(a);
      n = k(B, 'DIV', { id: !0 });
      var R = g(n);
      s = k(R, 'P', { class: !0 });
      var P = g(s);
      (l = h(P, 'But by October, tanks and artillery could be seen.')),
        P.forEach(p),
        (e = k(R, 'P', { class: !0 }));
      var N = g(e);
      (r = h(
        N,
        'In total, over 50 pieces of heavy machinery and 200 personnel are now based here.'
      )),
        N.forEach(p),
        R.forEach(p),
        B.forEach(p),
        this.h();
    },
    h() {
      i(s, 'class', 'svelte-10cpbvu'),
        i(e, 'class', 'svelte-10cpbvu'),
        i(n, 'id', (u = o[0])),
        i(a, 'slot', 'afterOverlay'),
        i(a, 'class', 'overlay short after svelte-10cpbvu');
    },
    m(y, B) {
      b(y, a, B), c(a, n), c(n, s), c(s, l), c(n, e), c(e, r);
    },
    p(y, B) {
      B & 1 && u !== (u = y[0]) && i(n, 'id', u);
    },
    d(y) {
      y && p(a);
    },
  };
}
function Vt(o) {
  let a, n;
  return (
    (a = new $a({
      props: {
        beforeSrc: `${X}/images/before-after/myrne-before.jpg`,
        beforeAlt:
          'Satellite image of Russian base at Myrne taken on July 7, 2020.',
        afterSrc: `${X}/images/before-after/myrne-after.jpg`,
        afterAlt:
          'Satellite image of Russian base at Myrne taken on Oct. 20, 2020.',
        $$slots: {
          afterOverlay: [
            Nt,
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
        H(a.$$.fragment);
      },
      l(s) {
        z(a.$$.fragment, s);
      },
      m(s, l) {
        L(a, s, l), (n = !0);
      },
      p(s, l) {
        const e = {};
        l & 3 && (e.$$scope = { dirty: l, ctx: s }), a.$set(e);
      },
      i(s) {
        n || (S(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        G(a, s);
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
    B = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BeforeAfter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BeforeAfter</span>
  <span class="token attr-name">beforeSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-before.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">beforeAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on July 7, 2020.<span class="token punctuation">"</span></span>
  <span class="token attr-name">afterSrc="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/images/before-after/myrne-after.jpg</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">afterAlt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Satellite image of Russian base at Myrne taken on Oct. 20, 2020.<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span></code>`,
    R,
    P,
    N,
    J,
    $,
    F,
    U,
    Y,
    Q,
    T,
    W,
    D,
    I,
    oa,
    Z,
    A,
    M,
    j,
    v,
    w,
    V,
    sa,
    la,
    Xa,
    fa,
    qa,
    Fa,
    Pa,
    ca,
    Ts = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
    Ta,
    na,
    _,
    x,
    ta,
    ra,
    cs,
    wa,
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
    rs,
    ka,
    is,
    Ja,
    Ea,
    Js,
    Ua,
    Ns,
    Vs,
    us,
    Oa,
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
    fs,
    ga,
    ks,
    Na,
    Aa,
    Hs,
    Wa,
    zs,
    Ls,
    gs,
    Sa,
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
    ms,
    ma,
    vs,
    Va,
    ia,
    Gs,
    Ka,
    Xs,
    qs,
    Ya,
    Fs,
    Us,
    ds,
    ja,
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
    hs,
    va,
    bs,
    Ha,
    ua,
    Ws,
    Qa,
    Ks,
    Ys,
    Za,
    Qs,
    Zs,
    _s,
    Ia,
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
    ys,
    da,
    $s,
    ha,
    aa,
    xs,
    Ma,
    an,
    sn,
    xa,
    nn,
    tn,
    Ca,
    en,
    pn,
    on,
    ea,
    as,
    ln,
    cn,
    ss,
    rn,
    un,
    ns,
    fn,
    kn,
    ws,
    Ba,
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
    Es,
    ba,
    Os;
  return (
    (P = new ya({
      props: { $$slots: { default: [Ot] }, $$scope: { ctx: o } },
    })),
    (na = new ya({
      props: { $$slots: { default: [At] }, $$scope: { ctx: o } },
    })),
    (ka = new ya({
      props: { $$slots: { default: [St] }, $$scope: { ctx: o } },
    })),
    (ga = new ya({
      props: { $$slots: { default: [jt] }, $$scope: { ctx: o } },
    })),
    (ma = new ya({
      props: { $$slots: { default: [Mt] }, $$scope: { ctx: o } },
    })),
    (va = new ya({
      props: { $$slots: { default: [Rt] }, $$scope: { ctx: o } },
    })),
    (da = new ya({
      props: { $$slots: { default: [Tt] }, $$scope: { ctx: o } },
    })),
    (ba = new ya({
      props: { $$slots: { default: [Vt] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        (a = f('section')),
          (n = f('h2')),
          (s = d(Yn)),
          (l = E()),
          (e = f('p')),
          (r = d(Qn)),
          (u = E()),
          (y = f('pre')),
          (R = E()),
          H(P.$$.fragment),
          (N = E()),
          (J = f('section')),
          ($ = f('p')),
          (F = d('Adjust the size of the image by passing the ')),
          (U = f('code')),
          (Y = d('width')),
          (Q = d(
            ' prop a class name corresponding to one of our well widths: '
          )),
          (T = f('code')),
          (W = d('wide')),
          (D = d(', ')),
          (I = f('code')),
          (oa = d('wider')),
          (Z = d(', ')),
          (A = f('code')),
          (M = d('widest')),
          (j = d(' or ')),
          (v = f('code')),
          (w = d('fluid')),
          (V = d('.')),
          (sa = E()),
          (la = f('p')),
          (Xa = d('Adjust the height by passing a number of pixels to the ')),
          (fa = f('code')),
          (qa = d('height')),
          (Fa = d(' prop.')),
          (Pa = E()),
          (ca = f('pre')),
          (Ta = E()),
          H(na.$$.fragment),
          (_ = E()),
          (x = f('section')),
          (ta = f('p')),
          (ra = d('Change the styling of the swipe handle.')),
          (cs = E()),
          (wa = f('pre')),
          (rs = E()),
          H(ka.$$.fragment),
          (is = E()),
          (Ja = f('section')),
          (Ea = f('p')),
          (Js = d('Change the starting position of the swipe with the ')),
          (Ua = f('code')),
          (Ns = d('offset')),
          (Vs = d(' prop.')),
          (us = E()),
          (Oa = f('pre')),
          (fs = E()),
          H(ga.$$.fragment),
          (ks = E()),
          (Na = f('section')),
          (Aa = f('p')),
          (Hs = d('Add and style a caption with the ')),
          (Wa = f('code')),
          (zs = d('caption')),
          (Ls = d(' slot.')),
          (gs = E()),
          (Sa = f('pre')),
          (ms = E()),
          H(ma.$$.fragment),
          (vs = E()),
          (Va = f('section')),
          (ia = f('p')),
          (Gs = d('Add overlays with the ')),
          (Ka = f('code')),
          (Xs = d('beforeOverlay')),
          (qs = d(' and ')),
          (Ya = f('code')),
          (Fs = d('afterOverlay')),
          (Us = d(' slots.')),
          (ds = E()),
          (ja = f('pre')),
          (hs = E()),
          H(va.$$.fragment),
          (bs = E()),
          (Ha = f('section')),
          (ua = f('p')),
          (Ws = d('Target the ')),
          (Qa = f('code')),
          (Ks = d('.overlay-container')),
          (Ys = d(' with ')),
          (Za = f('code')),
          (Qs = d(':global')),
          (Zs = d(' SCSS rules to change the overlay positioning.')),
          (_s = E()),
          (Ia = f('pre')),
          (ys = E()),
          H(da.$$.fragment),
          ($s = E()),
          (ha = f('section')),
          (aa = f('p')),
          (xs = d('Use text elements in your overlays as ')),
          (Ma = f('a')),
          (an = d('ARIA descriptions')),
          (sn = d(
            ' for your images by setting an ID on text elements within each overly with the '
          )),
          (xa = f('code')),
          (nn = d('description')),
          (tn = E()),
          (Ca = f('a')),
          (en = d('slot prop')),
          (pn = d('.')),
          (on = E()),
          (ea = f('p')),
          (as = f('strong')),
          (ln = d('\u{1F4A1} TIP:')),
          (cn = d(' You must always use the ')),
          (ss = f('code')),
          (rn = d('beforeAlt')),
          (un = d(' / ')),
          (ns = f('code')),
          (fn = d('afterAlt')),
          (kn = d(
            ' props to label your image for visually impaired readers, but you can use these descriptions to provide more information or context that the reader might also need.'
          )),
          (ws = E()),
          (Ba = f('pre')),
          (Es = E()),
          H(ba.$$.fragment),
          this.h();
      },
      l(t) {
        a = k(t, 'SECTION', {});
        var m = g(a);
        n = k(m, 'H2', {});
        var ts = g(n);
        (s = h(ts, Yn)), ts.forEach(p), (l = O(m)), (e = k(m, 'P', {}));
        var es = g(e);
        (r = h(es, Qn)),
          es.forEach(p),
          m.forEach(p),
          (u = O(t)),
          (y = k(t, 'PRE', { class: !0 }));
        var As = g(y);
        As.forEach(p),
          (R = O(t)),
          z(P.$$.fragment, t),
          (N = O(t)),
          (J = k(t, 'SECTION', {}));
        var Ra = g(J);
        $ = k(Ra, 'P', {});
        var q = g($);
        (F = h(q, 'Adjust the size of the image by passing the ')),
          (U = k(q, 'CODE', {}));
        var ps = g(U);
        (Y = h(ps, 'width')),
          ps.forEach(p),
          (Q = h(
            q,
            ' prop a class name corresponding to one of our well widths: '
          )),
          (T = k(q, 'CODE', {}));
        var os = g(T);
        (W = h(os, 'wide')),
          os.forEach(p),
          (D = h(q, ', ')),
          (I = k(q, 'CODE', {}));
        var ls = g(I);
        (oa = h(ls, 'wider')),
          ls.forEach(p),
          (Z = h(q, ', ')),
          (A = k(q, 'CODE', {}));
        var hn = g(A);
        (M = h(hn, 'widest')),
          hn.forEach(p),
          (j = h(q, ' or ')),
          (v = k(q, 'CODE', {}));
        var bn = g(v);
        (w = h(bn, 'fluid')),
          bn.forEach(p),
          (V = h(q, '.')),
          q.forEach(p),
          (sa = O(Ra)),
          (la = k(Ra, 'P', {}));
        var Ss = g(la);
        (Xa = h(Ss, 'Adjust the height by passing a number of pixels to the ')),
          (fa = k(Ss, 'CODE', {}));
        var _n = g(fa);
        (qa = h(_n, 'height')),
          _n.forEach(p),
          (Fa = h(Ss, ' prop.')),
          Ss.forEach(p),
          Ra.forEach(p),
          (Pa = O(t)),
          (ca = k(t, 'PRE', { class: !0 }));
        var ct = g(ca);
        ct.forEach(p),
          (Ta = O(t)),
          z(na.$$.fragment, t),
          (_ = O(t)),
          (x = k(t, 'SECTION', {}));
        var yn = g(x);
        ta = k(yn, 'P', {});
        var $n = g(ta);
        (ra = h($n, 'Change the styling of the swipe handle.')),
          $n.forEach(p),
          yn.forEach(p),
          (cs = O(t)),
          (wa = k(t, 'PRE', { class: !0 }));
        var rt = g(wa);
        rt.forEach(p),
          (rs = O(t)),
          z(ka.$$.fragment, t),
          (is = O(t)),
          (Ja = k(t, 'SECTION', {}));
        var wn = g(Ja);
        Ea = k(wn, 'P', {});
        var js = g(Ea);
        (Js = h(js, 'Change the starting position of the swipe with the ')),
          (Ua = k(js, 'CODE', {}));
        var En = g(Ua);
        (Ns = h(En, 'offset')),
          En.forEach(p),
          (Vs = h(js, ' prop.')),
          js.forEach(p),
          wn.forEach(p),
          (us = O(t)),
          (Oa = k(t, 'PRE', { class: !0 }));
        var it = g(Oa);
        it.forEach(p),
          (fs = O(t)),
          z(ga.$$.fragment, t),
          (ks = O(t)),
          (Na = k(t, 'SECTION', {}));
        var On = g(Na);
        Aa = k(On, 'P', {});
        var Is = g(Aa);
        (Hs = h(Is, 'Add and style a caption with the ')),
          (Wa = k(Is, 'CODE', {}));
        var An = g(Wa);
        (zs = h(An, 'caption')),
          An.forEach(p),
          (Ls = h(Is, ' slot.')),
          Is.forEach(p),
          On.forEach(p),
          (gs = O(t)),
          (Sa = k(t, 'PRE', { class: !0 }));
        var ut = g(Sa);
        ut.forEach(p),
          (ms = O(t)),
          z(ma.$$.fragment, t),
          (vs = O(t)),
          (Va = k(t, 'SECTION', {}));
        var Sn = g(Va);
        ia = k(Sn, 'P', {});
        var za = g(ia);
        (Gs = h(za, 'Add overlays with the ')), (Ka = k(za, 'CODE', {}));
        var jn = g(Ka);
        (Xs = h(jn, 'beforeOverlay')),
          jn.forEach(p),
          (qs = h(za, ' and ')),
          (Ya = k(za, 'CODE', {}));
        var In = g(Ya);
        (Fs = h(In, 'afterOverlay')),
          In.forEach(p),
          (Us = h(za, ' slots.')),
          za.forEach(p),
          Sn.forEach(p),
          (ds = O(t)),
          (ja = k(t, 'PRE', { class: !0 }));
        var ft = g(ja);
        ft.forEach(p),
          (hs = O(t)),
          z(va.$$.fragment, t),
          (bs = O(t)),
          (Ha = k(t, 'SECTION', {}));
        var Mn = g(Ha);
        ua = k(Mn, 'P', {});
        var La = g(ua);
        (Ws = h(La, 'Target the ')), (Qa = k(La, 'CODE', {}));
        var Cn = g(Qa);
        (Ks = h(Cn, '.overlay-container')),
          Cn.forEach(p),
          (Ys = h(La, ' with ')),
          (Za = k(La, 'CODE', {}));
        var Bn = g(Za);
        (Qs = h(Bn, ':global')),
          Bn.forEach(p),
          (Zs = h(La, ' SCSS rules to change the overlay positioning.')),
          La.forEach(p),
          Mn.forEach(p),
          (_s = O(t)),
          (Ia = k(t, 'PRE', { class: !0 }));
        var kt = g(Ia);
        kt.forEach(p),
          (ys = O(t)),
          z(da.$$.fragment, t),
          ($s = O(t)),
          (ha = k(t, 'SECTION', {}));
        var Ms = g(ha);
        aa = k(Ms, 'P', {});
        var _a = g(aa);
        (xs = h(_a, 'Use text elements in your overlays as ')),
          (Ma = k(_a, 'A', { href: !0, rel: !0 }));
        var Rn = g(Ma);
        (an = h(Rn, 'ARIA descriptions')),
          Rn.forEach(p),
          (sn = h(
            _a,
            ' for your images by setting an ID on text elements within each overly with the '
          )),
          (xa = k(_a, 'CODE', {}));
        var Dn = g(xa);
        (nn = h(Dn, 'description')),
          Dn.forEach(p),
          (tn = O(_a)),
          (Ca = k(_a, 'A', { href: !0, rel: !0 }));
        var Pn = g(Ca);
        (en = h(Pn, 'slot prop')),
          Pn.forEach(p),
          (pn = h(_a, '.')),
          _a.forEach(p),
          (on = O(Ms)),
          (ea = k(Ms, 'P', {}));
        var Da = g(ea);
        as = k(Da, 'STRONG', {});
        var Tn = g(as);
        (ln = h(Tn, '\u{1F4A1} TIP:')),
          Tn.forEach(p),
          (cn = h(Da, ' You must always use the ')),
          (ss = k(Da, 'CODE', {}));
        var Jn = g(ss);
        (rn = h(Jn, 'beforeAlt')),
          Jn.forEach(p),
          (un = h(Da, ' / ')),
          (ns = k(Da, 'CODE', {}));
        var Nn = g(ns);
        (fn = h(Nn, 'afterAlt')),
          Nn.forEach(p),
          (kn = h(
            Da,
            ' props to label your image for visually impaired readers, but you can use these descriptions to provide more information or context that the reader might also need.'
          )),
          Da.forEach(p),
          Ms.forEach(p),
          (ws = O(t)),
          (Ba = k(t, 'PRE', { class: !0 }));
        var gt = g(Ba);
        gt.forEach(p), (Es = O(t)), z(ba.$$.fragment, t), this.h();
      },
      h() {
        i(y, 'class', 'language-svelte'),
          i(ca, 'class', 'language-svelte'),
          i(wa, 'class', 'language-svelte'),
          i(Oa, 'class', 'language-svelte'),
          i(Sa, 'class', 'language-svelte'),
          i(ja, 'class', 'language-svelte'),
          i(Ia, 'class', 'language-svelte'),
          i(
            Ma,
            'href',
            'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby'
          ),
          i(Ma, 'rel', 'nofollow'),
          i(Ca, 'href', 'https://svelte.dev/tutorial/slot-props'),
          i(Ca, 'rel', 'nofollow'),
          i(Ba, 'class', 'language-svelte');
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
          (y.innerHTML = B),
          b(t, R, m),
          L(P, t, m),
          b(t, N, m),
          b(t, J, m),
          c(J, $),
          c($, F),
          c($, U),
          c(U, Y),
          c($, Q),
          c($, T),
          c(T, W),
          c($, D),
          c($, I),
          c(I, oa),
          c($, Z),
          c($, A),
          c(A, M),
          c($, j),
          c($, v),
          c(v, w),
          c($, V),
          c(J, sa),
          c(J, la),
          c(la, Xa),
          c(la, fa),
          c(fa, qa),
          c(la, Fa),
          b(t, Pa, m),
          b(t, ca, m),
          (ca.innerHTML = Ts),
          b(t, Ta, m),
          L(na, t, m),
          b(t, _, m),
          b(t, x, m),
          c(x, ta),
          c(ta, ra),
          b(t, cs, m),
          b(t, wa, m),
          (wa.innerHTML = nt),
          b(t, rs, m),
          L(ka, t, m),
          b(t, is, m),
          b(t, Ja, m),
          c(Ja, Ea),
          c(Ea, Js),
          c(Ea, Ua),
          c(Ua, Ns),
          c(Ea, Vs),
          b(t, us, m),
          b(t, Oa, m),
          (Oa.innerHTML = tt),
          b(t, fs, m),
          L(ga, t, m),
          b(t, ks, m),
          b(t, Na, m),
          c(Na, Aa),
          c(Aa, Hs),
          c(Aa, Wa),
          c(Wa, zs),
          c(Aa, Ls),
          b(t, gs, m),
          b(t, Sa, m),
          (Sa.innerHTML = et),
          b(t, ms, m),
          L(ma, t, m),
          b(t, vs, m),
          b(t, Va, m),
          c(Va, ia),
          c(ia, Gs),
          c(ia, Ka),
          c(Ka, Xs),
          c(ia, qs),
          c(ia, Ya),
          c(Ya, Fs),
          c(ia, Us),
          b(t, ds, m),
          b(t, ja, m),
          (ja.innerHTML = pt),
          b(t, hs, m),
          L(va, t, m),
          b(t, bs, m),
          b(t, Ha, m),
          c(Ha, ua),
          c(ua, Ws),
          c(ua, Qa),
          c(Qa, Ks),
          c(ua, Ys),
          c(ua, Za),
          c(Za, Qs),
          c(ua, Zs),
          b(t, _s, m),
          b(t, Ia, m),
          (Ia.innerHTML = ot),
          b(t, ys, m),
          L(da, t, m),
          b(t, $s, m),
          b(t, ha, m),
          c(ha, aa),
          c(aa, xs),
          c(aa, Ma),
          c(Ma, an),
          c(aa, sn),
          c(aa, xa),
          c(xa, nn),
          c(aa, tn),
          c(aa, Ca),
          c(Ca, en),
          c(aa, pn),
          c(ha, on),
          c(ha, ea),
          c(ea, as),
          c(as, ln),
          c(ea, cn),
          c(ea, ss),
          c(ss, rn),
          c(ea, un),
          c(ea, ns),
          c(ns, fn),
          c(ea, kn),
          b(t, ws, m),
          b(t, Ba, m),
          (Ba.innerHTML = lt),
          b(t, Es, m),
          L(ba, t, m),
          (Os = !0);
      },
      p(t, [m]) {
        const ts = {};
        m & 2 && (ts.$$scope = { dirty: m, ctx: t }), P.$set(ts);
        const es = {};
        m & 2 && (es.$$scope = { dirty: m, ctx: t }), na.$set(es);
        const As = {};
        m & 2 && (As.$$scope = { dirty: m, ctx: t }), ka.$set(As);
        const Ra = {};
        m & 2 && (Ra.$$scope = { dirty: m, ctx: t }), ga.$set(Ra);
        const q = {};
        m & 2 && (q.$$scope = { dirty: m, ctx: t }), ma.$set(q);
        const ps = {};
        m & 2 && (ps.$$scope = { dirty: m, ctx: t }), va.$set(ps);
        const os = {};
        m & 2 && (os.$$scope = { dirty: m, ctx: t }), da.$set(os);
        const ls = {};
        m & 2 && (ls.$$scope = { dirty: m, ctx: t }), ba.$set(ls);
      },
      i(t) {
        Os ||
          (S(P.$$.fragment, t),
          S(na.$$.fragment, t),
          S(ka.$$.fragment, t),
          S(ga.$$.fragment, t),
          S(ma.$$.fragment, t),
          S(va.$$.fragment, t),
          S(da.$$.fragment, t),
          S(ba.$$.fragment, t),
          (Os = !0));
      },
      o(t) {
        C(P.$$.fragment, t),
          C(na.$$.fragment, t),
          C(ka.$$.fragment, t),
          C(ga.$$.fragment, t),
          C(ma.$$.fragment, t),
          C(va.$$.fragment, t),
          C(da.$$.fragment, t),
          C(ba.$$.fragment, t),
          (Os = !1);
      },
      d(t) {
        t && p(a),
          t && p(u),
          t && p(y),
          t && p(R),
          G(P, t),
          t && p(N),
          t && p(J),
          t && p(Pa),
          t && p(ca),
          t && p(Ta),
          G(na, t),
          t && p(_),
          t && p(x),
          t && p(cs),
          t && p(wa),
          t && p(rs),
          G(ka, t),
          t && p(is),
          t && p(Ja),
          t && p(us),
          t && p(Oa),
          t && p(fs),
          G(ga, t),
          t && p(ks),
          t && p(Na),
          t && p(gs),
          t && p(Sa),
          t && p(ms),
          G(ma, t),
          t && p(vs),
          t && p(Va),
          t && p(ds),
          t && p(ja),
          t && p(hs),
          G(va, t),
          t && p(bs),
          t && p(Ha),
          t && p(_s),
          t && p(Ia),
          t && p(ys),
          G(da, t),
          t && p($s),
          t && p(ha),
          t && p(ws),
          t && p(Ba),
          t && p(Es),
          G(ba, t);
      },
    }
  );
}
const zt = {
    title: 'BeforeAfter',
    description: 'A before and after image comparison component.',
    slug: 'before-after',
  },
  { title: Yn, description: Qn, slug: Ft } = zt;
class Ut extends Zn {
  constructor(a) {
    super();
    xn(this, a, null, Ht, at, {});
  }
}
export { Ut as default, zt as metadata };
