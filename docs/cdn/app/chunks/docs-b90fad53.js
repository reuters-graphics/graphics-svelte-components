import {
  S as Nn,
  i as Hn,
  s as zn,
  e as f,
  k as O,
  l as Cs,
  c as k,
  a as g,
  n as A,
  d as p,
  U as Bs,
  b as i,
  _ as pa,
  f as b,
  H as c,
  V as K,
  a3 as Ln,
  x as j,
  $ as mt,
  a0 as vt,
  E as gn,
  F as mn,
  G as vn,
  u as C,
  r as Rs,
  w as Ds,
  a4 as Gn,
  a5 as Un,
  a6 as dt,
  Z as ht,
  a7 as bt,
  D as dn,
  a8 as Fn,
  a9 as Xn,
  t as d,
  j as V,
  g as h,
  m as N,
  o as H,
  v as z,
  I as Ps,
} from './vendor-a3a8e12b.js';
import { D as _a } from './index-95908c5c.js';
import './@component-docs_components-7577cc8f.js';
import { a as L } from './paths-6758d194.js';
const { window: Fa } = bt,
  _t = (o) => ({}),
  qn = (o) => ({}),
  yt = (o) => ({}),
  Wn = (o) => ({ description: `${o[17]}-after-description` }),
  $t = (o) => ({}),
  Yn = (o) => ({ description: `${o[17]}-before-description` });
function Kn(o) {
  let a,
    n,
    s,
    l,
    e,
    r,
    u,
    $,
    B,
    R,
    P,
    G,
    T,
    w,
    X,
    q,
    W,
    Z,
    Y,
    J,
    U,
    S,
    x,
    ia,
    E = o[25].beforeOverlay && Zn(o),
    M = o[25].afterOverlay && Qn(o),
    I = o[25].caption && xn(o);
  return {
    c() {
      (a = f('section')),
        (n = f('figure')),
        (s = f('img')),
        (r = O()),
        (u = f('img')),
        (P = O()),
        E && E.c(),
        (G = O()),
        M && M.c(),
        (T = O()),
        (w = f('div')),
        (X = f('div')),
        (q = O()),
        (W = f('div')),
        (J = O()),
        I && I.c(),
        (U = Cs()),
        this.h();
    },
    l(v) {
      a = k(v, 'SECTION', { class: !0, style: !0 });
      var y = g(a);
      n = k(y, 'FIGURE', { style: !0, class: !0, 'aria-labelledby': !0 });
      var D = g(n);
      (s = k(D, 'IMG', {
        src: !0,
        alt: !0,
        style: !0,
        class: !0,
        role: !0,
        'aria-describedby': !0,
      })),
        (r = A(D)),
        (u = k(D, 'IMG', {
          src: !0,
          alt: !0,
          style: !0,
          class: !0,
          role: !0,
          'aria-describedby': !0,
        })),
        (P = A(D)),
        E && E.l(D),
        (G = A(D)),
        M && M.l(D),
        (T = A(D)),
        (w = k(D, 'DIV', { tabindex: !0, class: !0, style: !0 }));
      var aa = g(w);
      (X = k(aa, 'DIV', { class: !0 })),
        g(X).forEach(p),
        (q = A(aa)),
        (W = k(aa, 'DIV', { class: !0 })),
        g(W).forEach(p),
        aa.forEach(p),
        D.forEach(p),
        y.forEach(p),
        (J = A(v)),
        I && I.l(v),
        (U = Cs()),
        this.h();
    },
    h() {
      Bs(s.src, (l = o[5])) || i(s, 'src', l),
        i(s, 'alt', o[6]),
        i(s, 'style', o[14]),
        i(s, 'class', 'after svelte-1fkuva'),
        i(s, 'role', 'img'),
        i(
          s,
          'aria-describedby',
          (e = o[25].beforeOverlay && `${o[17]}-before`)
        ),
        Bs(u.src, ($ = o[3])) || i(u, 'src', $),
        i(u, 'alt', o[4]),
        i(
          u,
          'style',
          (B = 'clip: rect(0 ' + o[10] + 'px ' + o[16] + 'px 0);' + o[14])
        ),
        i(u, 'class', 'before svelte-1fkuva'),
        i(u, 'role', 'img'),
        i(u, 'aria-describedby', (R = o[25].afterOverlay && `${o[17]}-after`)),
        i(X, 'class', 'arrow-left svelte-1fkuva'),
        i(W, 'class', 'arrow-right svelte-1fkuva'),
        i(w, 'tabindex', '0'),
        i(w, 'class', 'handle svelte-1fkuva'),
        pa(w, 'left', 'calc(' + o[0] * 100 + '% - 20px)'),
        pa(w, '--before-after-handle-colour', o[7]),
        pa(w, '--before-after-handle-inactive-opacity', o[8]),
        i(n, 'style', o[15]),
        i(n, 'class', 'before-after-container svelte-1fkuva'),
        i(n, 'aria-labelledby', (Z = o[25].caption && `${o[17]}-caption`)),
        i(a, 'class', (Y = 'photo before-after ' + o[1] + ' svelte-1fkuva')),
        pa(a, 'height', o[2] + 'px');
    },
    m(v, y) {
      b(v, a, y),
        c(a, n),
        c(n, s),
        o[34](s),
        c(n, r),
        c(n, u),
        c(n, P),
        E && E.m(n, null),
        c(n, G),
        M && M.m(n, null),
        c(n, T),
        c(n, w),
        c(w, X),
        c(w, q),
        c(w, W),
        o[36](n),
        b(v, J, y),
        I && I.m(v, y),
        b(v, U, y),
        (S = !0),
        x ||
          ((ia = [
            K(s, 'mousedown', Ln(o[33])),
            K(s, 'load', o[21]),
            K(u, 'mousedown', Ln(o[32])),
            K(w, 'focus', o[18]),
            K(w, 'blur', o[19]),
            K(n, 'touchstart', o[23]),
            K(n, 'mousedown', o[23]),
          ]),
          (x = !0));
    },
    p(v, y) {
      (!S || (y[0] & 32 && !Bs(s.src, (l = v[5])))) && i(s, 'src', l),
        (!S || y[0] & 64) && i(s, 'alt', v[6]),
        (!S || y[0] & 16384) && i(s, 'style', v[14]),
        (!S ||
          (y[0] & 33554432 &&
            e !== (e = v[25].beforeOverlay && `${v[17]}-before`))) &&
          i(s, 'aria-describedby', e),
        (!S || (y[0] & 8 && !Bs(u.src, ($ = v[3])))) && i(u, 'src', $),
        (!S || y[0] & 16) && i(u, 'alt', v[4]),
        (!S ||
          (y[0] & 82944 &&
            B !==
              (B =
                'clip: rect(0 ' + v[10] + 'px ' + v[16] + 'px 0);' + v[14]))) &&
          i(u, 'style', B),
        (!S ||
          (y[0] & 33554432 &&
            R !== (R = v[25].afterOverlay && `${v[17]}-after`))) &&
          i(u, 'aria-describedby', R),
        v[25].beforeOverlay
          ? E
            ? (E.p(v, y), y[0] & 33554432 && j(E, 1))
            : ((E = Zn(v)), E.c(), j(E, 1), E.m(n, G))
          : E &&
            (Rs(),
            C(E, 1, 1, () => {
              E = null;
            }),
            Ds()),
        v[25].afterOverlay
          ? M
            ? (M.p(v, y), y[0] & 33554432 && j(M, 1))
            : ((M = Qn(v)), M.c(), j(M, 1), M.m(n, T))
          : M &&
            (Rs(),
            C(M, 1, 1, () => {
              M = null;
            }),
            Ds()),
        (!S || y[0] & 1) && pa(w, 'left', 'calc(' + v[0] * 100 + '% - 20px)'),
        (!S || y[0] & 128) && pa(w, '--before-after-handle-colour', v[7]),
        (!S || y[0] & 256) &&
          pa(w, '--before-after-handle-inactive-opacity', v[8]),
        (!S || y[0] & 32768) && i(n, 'style', v[15]),
        (!S ||
          (y[0] & 33554432 &&
            Z !== (Z = v[25].caption && `${v[17]}-caption`))) &&
          i(n, 'aria-labelledby', Z),
        (!S ||
          (y[0] & 2 &&
            Y !== (Y = 'photo before-after ' + v[1] + ' svelte-1fkuva'))) &&
          i(a, 'class', Y),
        (!S || y[0] & 4) && pa(a, 'height', v[2] + 'px'),
        v[25].caption
          ? I
            ? (I.p(v, y), y[0] & 33554432 && j(I, 1))
            : ((I = xn(v)), I.c(), j(I, 1), I.m(U.parentNode, U))
          : I &&
            (Rs(),
            C(I, 1, 1, () => {
              I = null;
            }),
            Ds());
    },
    i(v) {
      S || (j(E), j(M), j(I), (S = !0));
    },
    o(v) {
      C(E), C(M), C(I), (S = !1);
    },
    d(v) {
      v && p(a),
        o[34](null),
        E && E.d(),
        M && M.d(),
        o[36](null),
        v && p(J),
        I && I.d(v),
        v && p(U),
        (x = !1),
        Un(ia);
    },
  };
}
function Zn(o) {
  let a, n, s;
  const l = o[31].beforeOverlay,
    e = dn(l, o, o[30], Yn);
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
        mt(() => o[35].call(a));
    },
    m(r, u) {
      b(r, a, u), e && e.m(a, null), (n = vt(a, o[35].bind(a))), (s = !0);
    },
    p(r, u) {
      e &&
        e.p &&
        (!s || u[0] & 1073741824) &&
        gn(e, l, r, r[30], s ? vn(l, r[30], u, $t) : mn(r[30]), Yn),
        (!s || u[0] & 8192) &&
          pa(a, 'clip-path', 'inset(0 ' + r[13] + 'px 0 0)');
    },
    i(r) {
      s || (j(e, r), (s = !0));
    },
    o(r) {
      C(e, r), (s = !1);
    },
    d(r) {
      r && p(a), e && e.d(r), n();
    },
  };
}
function Qn(o) {
  let a, n;
  const s = o[31].afterOverlay,
    l = dn(s, o, o[30], Wn);
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
        (!n || r[0] & 1073741824) &&
        gn(l, s, e, e[30], n ? vn(s, e[30], r, yt) : mn(e[30]), Wn);
    },
    i(e) {
      n || (j(l, e), (n = !0));
    },
    o(e) {
      C(l, e), (n = !1);
    },
    d(e) {
      e && p(a), l && l.d(e);
    },
  };
}
function xn(o) {
  let a, n, s;
  const l = o[31].caption,
    e = dn(l, o, o[30], qn);
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
      i(a, 'class', (n = '' + (Gn(o[1]) + ' svelte-1fkuva'))),
        i(a, 'id', `${o[17]}-caption`);
    },
    m(r, u) {
      b(r, a, u), e && e.m(a, null), (s = !0);
    },
    p(r, u) {
      e &&
        e.p &&
        (!s || u[0] & 1073741824) &&
        gn(e, l, r, r[30], s ? vn(l, r[30], u, _t) : mn(r[30]), qn),
        (!s || (u[0] & 2 && n !== (n = '' + (Gn(r[1]) + ' svelte-1fkuva')))) &&
          i(a, 'class', n);
    },
    i(r) {
      s || (j(e, r), (s = !0));
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
    e = o[3] && o[4] && o[5] && o[6] && Kn(o);
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
            K(Fa, 'touchmove', o[22]),
            K(Fa, 'touchend', o[24]),
            K(Fa, 'mousemove', o[22]),
            K(Fa, 'mouseup', o[24]),
            K(Fa, 'resize', dt(o[21], 100)),
            K(Fa, 'keydown', o[20]),
          ]),
          (s = !0));
    },
    p(r, u) {
      r[3] && r[4] && r[5] && r[6]
        ? e
          ? (e.p(r, u), u[0] & 120 && j(e, 1))
          : ((e = Kn(r)), e.c(), j(e, 1), e.m(a.parentNode, a))
        : e &&
          (Rs(),
          C(e, 1, 1, () => {
            e = null;
          }),
          Ds());
    },
    i(r) {
      n || (j(e), (n = !0));
    },
    o(r) {
      C(e), (n = !1);
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
    $,
    { $$slots: B = {}, $$scope: R } = a;
  const P = ht(B);
  let { width: G = '' } = a,
    { height: T = 600 } = a,
    { beforeSrc: w = null } = a,
    { beforeAlt: X = null } = a,
    { afterSrc: q = null } = a,
    { afterAlt: W = null } = a,
    { handleColour: Z = 'white' } = a,
    { handleInactiveOpacity: Y = 0.4 } = a,
    { handleMargin: J = 20 } = a,
    { keyPressStep: U = 0.05 } = a,
    { offset: S = 0.5 } = a;
  const x = () =>
      Math.floor((1 + Math.random()) * 65536)
        .toString(16)
        .substring(1),
    ia = 'before-after-' + x() + x();
  let E = null,
    M = !1,
    I,
    v,
    y = 0,
    D = !1;
  const aa = () => (D = !0),
    oa = () => (D = !1),
    Xa = (_) => {
      if (!D) return;
      const { keyCode: na } = _,
        ua = J / s;
      na === 39
        ? n(0, (S = Math.min(1 - ua, S + U)))
        : na === 37 && n(0, (S = Math.max(0 + ua, S - U)));
    },
    $a = (_) => {
      _.type === 'load'
        ? n(28, (E = _.target.getBoundingClientRect()))
        : n(28, (E = I.getBoundingClientRect()));
    },
    Pa = (_) => {
      const na = _.touches ? _.touches[0] : _;
      if (M && E) {
        const ua = v
          ? parseInt(window.getComputedStyle(v).marginLeft.slice(0, -2))
          : 0;
        let ta = na.pageX - ua - E.left;
        (ta = ta < J ? J : ta > s - J ? s - J : ta), n(0, (S = ta / s));
      }
    },
    qa = (_) => {
      (M = !0), Pa(_);
    },
    Ta = () => {
      M = !1;
    };
  (w && X && q && W) ||
    console.warn('Missing required src or alt props for BeforeAfter component');
  function la(_) {
    Fn.call(this, o, _);
  }
  function Ts(_) {
    Fn.call(this, o, _);
  }
  function Ja(_) {
    Xn[_ ? 'unshift' : 'push'](() => {
      (I = _), n(11, I);
    });
  }
  function sa() {
    (y = this.clientWidth), n(9, y);
  }
  function Va(_) {
    Xn[_ ? 'unshift' : 'push'](() => {
      (v = _), n(12, v);
    });
  }
  return (
    (o.$$set = (_) => {
      'width' in _ && n(1, (G = _.width)),
        'height' in _ && n(2, (T = _.height)),
        'beforeSrc' in _ && n(3, (w = _.beforeSrc)),
        'beforeAlt' in _ && n(4, (X = _.beforeAlt)),
        'afterSrc' in _ && n(5, (q = _.afterSrc)),
        'afterAlt' in _ && n(6, (W = _.afterAlt)),
        'handleColour' in _ && n(7, (Z = _.handleColour)),
        'handleInactiveOpacity' in _ && n(8, (Y = _.handleInactiveOpacity)),
        'handleMargin' in _ && n(26, (J = _.handleMargin)),
        'keyPressStep' in _ && n(27, (U = _.keyPressStep)),
        'offset' in _ && n(0, (S = _.offset)),
        '$$scope' in _ && n(30, (R = _.$$scope));
    }),
    (o.$$.update = () => {
      o.$$.dirty[0] & 268435456 && n(29, (s = (E && E.width) || 0)),
        o.$$.dirty[0] & 268435456 && n(16, (l = (E && E.height) || 0)),
        o.$$.dirty[0] & 536870913 && n(10, (e = s * S)),
        o.$$.dirty[0] & 4 && n(15, (r = `width:100%;height:${T}px;`)),
        o.$$.dirty[0] & 1536 && n(13, ($ = e < y ? Math.abs(e - y) : 0));
    }),
    n(14, (u = 'width:100%;height:100%;')),
    [
      S,
      G,
      T,
      w,
      X,
      q,
      W,
      Z,
      Y,
      y,
      e,
      I,
      v,
      $,
      u,
      r,
      l,
      ia,
      aa,
      oa,
      Xa,
      $a,
      Pa,
      qa,
      Ta,
      P,
      J,
      U,
      E,
      s,
      R,
      B,
      la,
      Ts,
      Ja,
      sa,
      Va,
    ]
  );
}
class ya extends Nn {
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
        handleMargin: 26,
        keyPressStep: 27,
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
    (a = new ya({
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
      p: Ps,
      i(s) {
        n || (j(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(a.$$.fragment, s), (n = !1);
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
    (a = new ya({
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
      p: Ps,
      i(s) {
        n || (j(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(a.$$.fragment, s), (n = !1);
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
    (a = new ya({
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
      p: Ps,
      i(s) {
        n || (j(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(a.$$.fragment, s), (n = !1);
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
    (a = new ya({
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
      p: Ps,
      i(s) {
        n || (j(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(a.$$.fragment, s), (n = !1);
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
function Mt(o) {
  let a, n;
  return (
    (a = new ya({
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
        n || (j(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(a.$$.fragment, s), (n = !1);
      },
      d(s) {
        z(a, s);
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
        (l = O()),
        (e = f('p')),
        (r = d('Initially, this site was far smaller.')),
        this.h();
    },
    l(u) {
      a = k(u, 'DIV', { slot: !0, class: !0 });
      var $ = g(a);
      n = k($, 'H6', { class: !0 });
      var B = g(n);
      (s = h(B, 'July 7, 2020')),
        B.forEach(p),
        (l = A($)),
        (e = k($, 'P', { class: !0 }));
      var R = g(e);
      (r = h(R, 'Initially, this site was far smaller.')),
        R.forEach(p),
        $.forEach(p),
        this.h();
    },
    h() {
      i(n, 'class', 'svelte-10cpbvu'),
        i(e, 'class', 'svelte-10cpbvu'),
        i(a, 'slot', 'beforeOverlay'),
        i(a, 'class', 'overlay before svelte-10cpbvu');
    },
    m(u, $) {
      b(u, a, $), c(a, n), c(n, s), c(a, l), c(a, e), c(e, r);
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
        (l = O()),
        (e = f('p')),
        (r = d('But then forces built up.')),
        this.h();
    },
    l(u) {
      a = k(u, 'DIV', { slot: !0, class: !0 });
      var $ = g(a);
      n = k($, 'H6', { class: !0 });
      var B = g(n);
      (s = h(B, 'Oct. 20, 2020')),
        B.forEach(p),
        (l = A($)),
        (e = k($, 'P', { class: !0 }));
      var R = g(e);
      (r = h(R, 'But then forces built up.')),
        R.forEach(p),
        $.forEach(p),
        this.h();
    },
    h() {
      i(n, 'class', 'svelte-10cpbvu'),
        i(e, 'class', 'svelte-10cpbvu'),
        i(a, 'slot', 'afterOverlay'),
        i(a, 'class', 'overlay after svelte-10cpbvu');
    },
    m(u, $) {
      b(u, a, $), c(a, n), c(n, s), c(a, l), c(a, e), c(e, r);
    },
    d(u) {
      u && p(a);
    },
  };
}
function Rt(o) {
  let a, n;
  return (
    (a = new ya({
      props: {
        beforeSrc: `${L}/images/before-after/myrne-before.jpg`,
        beforeAlt: 'Before the thing',
        afterSrc: `${L}/images/before-after/myrne-after.jpg`,
        afterAlt: 'After the thing',
        $$slots: { afterOverlay: [Bt], beforeOverlay: [Ct] },
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
        n || (j(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(a.$$.fragment, s), (n = !1);
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
    (n = new ya({
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
        s || (j(n.$$.fragment, l), (s = !0));
      },
      o(l) {
        C(n.$$.fragment, l), (s = !1);
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
    l($) {
      a = k($, 'DIV', { slot: !0, class: !0 });
      var B = g(a);
      n = k(B, 'DIV', { id: !0 });
      var R = g(n);
      s = k(R, 'P', { class: !0 });
      var P = g(s);
      (l = h(P, 'But by October, tanks and artillery could be seen.')),
        P.forEach(p),
        (e = k(R, 'P', { class: !0 }));
      var G = g(e);
      (r = h(
        G,
        'In total, over 50 pieces of heavy machinery and 200 personnel are now based here.'
      )),
        G.forEach(p),
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
    m($, B) {
      b($, a, B), c(a, n), c(n, s), c(s, l), c(n, e), c(e, r);
    },
    p($, B) {
      B & 1 && u !== (u = $[0]) && i(n, 'id', u);
    },
    d($) {
      $ && p(a);
    },
  };
}
function Nt(o) {
  let a, n;
  return (
    (a = new ya({
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
        n || (j(a.$$.fragment, s), (n = !0));
      },
      o(s) {
        C(a.$$.fragment, s), (n = !1);
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
    $,
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
    G,
    T,
    w,
    X,
    q,
    W,
    Z,
    Y,
    J,
    U,
    S,
    x,
    ia,
    E,
    M,
    I,
    v,
    y,
    D,
    aa,
    oa,
    Xa,
    $a,
    Pa,
    qa,
    Ta,
    la,
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
    Ja,
    sa,
    Va,
    _,
    na,
    ua,
    ta,
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
    fa,
    is,
    Na,
    Ea,
    Js,
    Wa,
    Vs,
    Ns,
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
    ka,
    ks,
    Ha,
    Aa,
    Hs,
    Ya,
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
    ga,
    vs,
    za,
    ca,
    Gs,
    Ka,
    Us,
    Fs,
    Za,
    Xs,
    qs,
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
    ma,
    bs,
    La,
    ra,
    Ws,
    Qa,
    Ys,
    Ks,
    xa,
    Zs,
    Qs,
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
    va,
    $s,
    da,
    Q,
    xs,
    Ma,
    an,
    sn,
    as,
    nn,
    tn,
    Ca,
    en,
    pn,
    on,
    ea,
    ss,
    ln,
    cn,
    ns,
    rn,
    un,
    ts,
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
    ha,
    Os;
  return (
    (P = new _a({
      props: { $$slots: { default: [Ot] }, $$scope: { ctx: o } },
    })),
    (sa = new _a({
      props: { $$slots: { default: [At] }, $$scope: { ctx: o } },
    })),
    (fa = new _a({
      props: { $$slots: { default: [St] }, $$scope: { ctx: o } },
    })),
    (ka = new _a({
      props: { $$slots: { default: [jt] }, $$scope: { ctx: o } },
    })),
    (ga = new _a({
      props: { $$slots: { default: [Mt] }, $$scope: { ctx: o } },
    })),
    (ma = new _a({
      props: { $$slots: { default: [Rt] }, $$scope: { ctx: o } },
    })),
    (va = new _a({
      props: { $$slots: { default: [Tt] }, $$scope: { ctx: o } },
    })),
    (ha = new _a({
      props: { $$slots: { default: [Nt] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        (a = f('section')),
          (n = f('h2')),
          (s = d(at)),
          (l = O()),
          (e = f('p')),
          (r = d(st)),
          (u = O()),
          ($ = f('pre')),
          (R = O()),
          V(P.$$.fragment),
          (G = O()),
          (T = f('section')),
          (w = f('p')),
          (X = d('Adjust the size of the image by passing the ')),
          (q = f('code')),
          (W = d('width')),
          (Z = d(
            ' prop a class name corresponding to one of our well widths: '
          )),
          (Y = f('code')),
          (J = d('wide')),
          (U = d(', ')),
          (S = f('code')),
          (x = d('wider')),
          (ia = d(', ')),
          (E = f('code')),
          (M = d('widest')),
          (I = d(' or ')),
          (v = f('code')),
          (y = d('fluid')),
          (D = d('.')),
          (aa = O()),
          (oa = f('p')),
          (Xa = d('Adjust the height by passing a number of pixels to the ')),
          ($a = f('code')),
          (Pa = d('height')),
          (qa = d(' prop.')),
          (Ta = O()),
          (la = f('pre')),
          (Ja = O()),
          V(sa.$$.fragment),
          (Va = O()),
          (_ = f('section')),
          (na = f('p')),
          (ua = d('Change the styling of the swipe handle.')),
          (ta = O()),
          (wa = f('pre')),
          (rs = O()),
          V(fa.$$.fragment),
          (is = O()),
          (Na = f('section')),
          (Ea = f('p')),
          (Js = d('Change the starting position of the swipe with the ')),
          (Wa = f('code')),
          (Vs = d('offset')),
          (Ns = d(' prop.')),
          (us = O()),
          (Oa = f('pre')),
          (fs = O()),
          V(ka.$$.fragment),
          (ks = O()),
          (Ha = f('section')),
          (Aa = f('p')),
          (Hs = d('Add and style a caption with the ')),
          (Ya = f('code')),
          (zs = d('caption')),
          (Ls = d(' slot.')),
          (gs = O()),
          (Sa = f('pre')),
          (ms = O()),
          V(ga.$$.fragment),
          (vs = O()),
          (za = f('section')),
          (ca = f('p')),
          (Gs = d('Add overlays with the ')),
          (Ka = f('code')),
          (Us = d('beforeOverlay')),
          (Fs = d(' and ')),
          (Za = f('code')),
          (Xs = d('afterOverlay')),
          (qs = d(' slots.')),
          (ds = O()),
          (ja = f('pre')),
          (hs = O()),
          V(ma.$$.fragment),
          (bs = O()),
          (La = f('section')),
          (ra = f('p')),
          (Ws = d('Target the ')),
          (Qa = f('code')),
          (Ys = d('.overlay-container')),
          (Ks = d(' with ')),
          (xa = f('code')),
          (Zs = d(':global')),
          (Qs = d(' SCSS rules to change the overlay positioning.')),
          (_s = O()),
          (Ia = f('pre')),
          (ys = O()),
          V(va.$$.fragment),
          ($s = O()),
          (da = f('section')),
          (Q = f('p')),
          (xs = d('Use text elements in your overlays as ')),
          (Ma = f('a')),
          (an = d('ARIA descriptions')),
          (sn = d(
            ' for your images by setting an ID on text elements within each overly with the '
          )),
          (as = f('code')),
          (nn = d('description')),
          (tn = O()),
          (Ca = f('a')),
          (en = d('slot prop')),
          (pn = d('.')),
          (on = O()),
          (ea = f('p')),
          (ss = f('strong')),
          (ln = d('\u{1F4A1} TIP:')),
          (cn = d(' You must always use the ')),
          (ns = f('code')),
          (rn = d('beforeAlt')),
          (un = d(' / ')),
          (ts = f('code')),
          (fn = d('afterAlt')),
          (kn = d(
            ' props to label your image for visually impaired readers, but you can use these descriptions to provide more information or context that the reader might also need.'
          )),
          (ws = O()),
          (Ba = f('pre')),
          (Es = O()),
          V(ha.$$.fragment),
          this.h();
      },
      l(t) {
        a = k(t, 'SECTION', {});
        var m = g(a);
        n = k(m, 'H2', {});
        var es = g(n);
        (s = h(es, at)), es.forEach(p), (l = A(m)), (e = k(m, 'P', {}));
        var ps = g(e);
        (r = h(ps, st)),
          ps.forEach(p),
          m.forEach(p),
          (u = A(t)),
          ($ = k(t, 'PRE', { class: !0 }));
        var As = g($);
        As.forEach(p),
          (R = A(t)),
          N(P.$$.fragment, t),
          (G = A(t)),
          (T = k(t, 'SECTION', {}));
        var Ra = g(T);
        w = k(Ra, 'P', {});
        var F = g(w);
        (X = h(F, 'Adjust the size of the image by passing the ')),
          (q = k(F, 'CODE', {}));
        var os = g(q);
        (W = h(os, 'width')),
          os.forEach(p),
          (Z = h(
            F,
            ' prop a class name corresponding to one of our well widths: '
          )),
          (Y = k(F, 'CODE', {}));
        var ls = g(Y);
        (J = h(ls, 'wide')),
          ls.forEach(p),
          (U = h(F, ', ')),
          (S = k(F, 'CODE', {}));
        var cs = g(S);
        (x = h(cs, 'wider')),
          cs.forEach(p),
          (ia = h(F, ', ')),
          (E = k(F, 'CODE', {}));
        var hn = g(E);
        (M = h(hn, 'widest')),
          hn.forEach(p),
          (I = h(F, ' or ')),
          (v = k(F, 'CODE', {}));
        var bn = g(v);
        (y = h(bn, 'fluid')),
          bn.forEach(p),
          (D = h(F, '.')),
          F.forEach(p),
          (aa = A(Ra)),
          (oa = k(Ra, 'P', {}));
        var Ss = g(oa);
        (Xa = h(Ss, 'Adjust the height by passing a number of pixels to the ')),
          ($a = k(Ss, 'CODE', {}));
        var _n = g($a);
        (Pa = h(_n, 'height')),
          _n.forEach(p),
          (qa = h(Ss, ' prop.')),
          Ss.forEach(p),
          Ra.forEach(p),
          (Ta = A(t)),
          (la = k(t, 'PRE', { class: !0 }));
        var ct = g(la);
        ct.forEach(p),
          (Ja = A(t)),
          N(sa.$$.fragment, t),
          (Va = A(t)),
          (_ = k(t, 'SECTION', {}));
        var yn = g(_);
        na = k(yn, 'P', {});
        var $n = g(na);
        (ua = h($n, 'Change the styling of the swipe handle.')),
          $n.forEach(p),
          yn.forEach(p),
          (ta = A(t)),
          (wa = k(t, 'PRE', { class: !0 }));
        var rt = g(wa);
        rt.forEach(p),
          (rs = A(t)),
          N(fa.$$.fragment, t),
          (is = A(t)),
          (Na = k(t, 'SECTION', {}));
        var wn = g(Na);
        Ea = k(wn, 'P', {});
        var js = g(Ea);
        (Js = h(js, 'Change the starting position of the swipe with the ')),
          (Wa = k(js, 'CODE', {}));
        var En = g(Wa);
        (Vs = h(En, 'offset')),
          En.forEach(p),
          (Ns = h(js, ' prop.')),
          js.forEach(p),
          wn.forEach(p),
          (us = A(t)),
          (Oa = k(t, 'PRE', { class: !0 }));
        var it = g(Oa);
        it.forEach(p),
          (fs = A(t)),
          N(ka.$$.fragment, t),
          (ks = A(t)),
          (Ha = k(t, 'SECTION', {}));
        var On = g(Ha);
        Aa = k(On, 'P', {});
        var Is = g(Aa);
        (Hs = h(Is, 'Add and style a caption with the ')),
          (Ya = k(Is, 'CODE', {}));
        var An = g(Ya);
        (zs = h(An, 'caption')),
          An.forEach(p),
          (Ls = h(Is, ' slot.')),
          Is.forEach(p),
          On.forEach(p),
          (gs = A(t)),
          (Sa = k(t, 'PRE', { class: !0 }));
        var ut = g(Sa);
        ut.forEach(p),
          (ms = A(t)),
          N(ga.$$.fragment, t),
          (vs = A(t)),
          (za = k(t, 'SECTION', {}));
        var Sn = g(za);
        ca = k(Sn, 'P', {});
        var Ga = g(ca);
        (Gs = h(Ga, 'Add overlays with the ')), (Ka = k(Ga, 'CODE', {}));
        var jn = g(Ka);
        (Us = h(jn, 'beforeOverlay')),
          jn.forEach(p),
          (Fs = h(Ga, ' and ')),
          (Za = k(Ga, 'CODE', {}));
        var In = g(Za);
        (Xs = h(In, 'afterOverlay')),
          In.forEach(p),
          (qs = h(Ga, ' slots.')),
          Ga.forEach(p),
          Sn.forEach(p),
          (ds = A(t)),
          (ja = k(t, 'PRE', { class: !0 }));
        var ft = g(ja);
        ft.forEach(p),
          (hs = A(t)),
          N(ma.$$.fragment, t),
          (bs = A(t)),
          (La = k(t, 'SECTION', {}));
        var Mn = g(La);
        ra = k(Mn, 'P', {});
        var Ua = g(ra);
        (Ws = h(Ua, 'Target the ')), (Qa = k(Ua, 'CODE', {}));
        var Cn = g(Qa);
        (Ys = h(Cn, '.overlay-container')),
          Cn.forEach(p),
          (Ks = h(Ua, ' with ')),
          (xa = k(Ua, 'CODE', {}));
        var Bn = g(xa);
        (Zs = h(Bn, ':global')),
          Bn.forEach(p),
          (Qs = h(Ua, ' SCSS rules to change the overlay positioning.')),
          Ua.forEach(p),
          Mn.forEach(p),
          (_s = A(t)),
          (Ia = k(t, 'PRE', { class: !0 }));
        var kt = g(Ia);
        kt.forEach(p),
          (ys = A(t)),
          N(va.$$.fragment, t),
          ($s = A(t)),
          (da = k(t, 'SECTION', {}));
        var Ms = g(da);
        Q = k(Ms, 'P', {});
        var ba = g(Q);
        (xs = h(ba, 'Use text elements in your overlays as ')),
          (Ma = k(ba, 'A', { href: !0, rel: !0 }));
        var Rn = g(Ma);
        (an = h(Rn, 'ARIA descriptions')),
          Rn.forEach(p),
          (sn = h(
            ba,
            ' for your images by setting an ID on text elements within each overly with the '
          )),
          (as = k(ba, 'CODE', {}));
        var Dn = g(as);
        (nn = h(Dn, 'description')),
          Dn.forEach(p),
          (tn = A(ba)),
          (Ca = k(ba, 'A', { href: !0, rel: !0 }));
        var Pn = g(Ca);
        (en = h(Pn, 'slot prop')),
          Pn.forEach(p),
          (pn = h(ba, '.')),
          ba.forEach(p),
          (on = A(Ms)),
          (ea = k(Ms, 'P', {}));
        var Da = g(ea);
        ss = k(Da, 'STRONG', {});
        var Tn = g(ss);
        (ln = h(Tn, '\u{1F4A1} TIP:')),
          Tn.forEach(p),
          (cn = h(Da, ' You must always use the ')),
          (ns = k(Da, 'CODE', {}));
        var Jn = g(ns);
        (rn = h(Jn, 'beforeAlt')),
          Jn.forEach(p),
          (un = h(Da, ' / ')),
          (ts = k(Da, 'CODE', {}));
        var Vn = g(ts);
        (fn = h(Vn, 'afterAlt')),
          Vn.forEach(p),
          (kn = h(
            Da,
            ' props to label your image for visually impaired readers, but you can use these descriptions to provide more information or context that the reader might also need.'
          )),
          Da.forEach(p),
          Ms.forEach(p),
          (ws = A(t)),
          (Ba = k(t, 'PRE', { class: !0 }));
        var gt = g(Ba);
        gt.forEach(p), (Es = A(t)), N(ha.$$.fragment, t), this.h();
      },
      h() {
        i($, 'class', 'language-svelte'),
          i(la, 'class', 'language-svelte'),
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
          b(t, $, m),
          ($.innerHTML = B),
          b(t, R, m),
          H(P, t, m),
          b(t, G, m),
          b(t, T, m),
          c(T, w),
          c(w, X),
          c(w, q),
          c(q, W),
          c(w, Z),
          c(w, Y),
          c(Y, J),
          c(w, U),
          c(w, S),
          c(S, x),
          c(w, ia),
          c(w, E),
          c(E, M),
          c(w, I),
          c(w, v),
          c(v, y),
          c(w, D),
          c(T, aa),
          c(T, oa),
          c(oa, Xa),
          c(oa, $a),
          c($a, Pa),
          c(oa, qa),
          b(t, Ta, m),
          b(t, la, m),
          (la.innerHTML = Ts),
          b(t, Ja, m),
          H(sa, t, m),
          b(t, Va, m),
          b(t, _, m),
          c(_, na),
          c(na, ua),
          b(t, ta, m),
          b(t, wa, m),
          (wa.innerHTML = nt),
          b(t, rs, m),
          H(fa, t, m),
          b(t, is, m),
          b(t, Na, m),
          c(Na, Ea),
          c(Ea, Js),
          c(Ea, Wa),
          c(Wa, Vs),
          c(Ea, Ns),
          b(t, us, m),
          b(t, Oa, m),
          (Oa.innerHTML = tt),
          b(t, fs, m),
          H(ka, t, m),
          b(t, ks, m),
          b(t, Ha, m),
          c(Ha, Aa),
          c(Aa, Hs),
          c(Aa, Ya),
          c(Ya, zs),
          c(Aa, Ls),
          b(t, gs, m),
          b(t, Sa, m),
          (Sa.innerHTML = et),
          b(t, ms, m),
          H(ga, t, m),
          b(t, vs, m),
          b(t, za, m),
          c(za, ca),
          c(ca, Gs),
          c(ca, Ka),
          c(Ka, Us),
          c(ca, Fs),
          c(ca, Za),
          c(Za, Xs),
          c(ca, qs),
          b(t, ds, m),
          b(t, ja, m),
          (ja.innerHTML = pt),
          b(t, hs, m),
          H(ma, t, m),
          b(t, bs, m),
          b(t, La, m),
          c(La, ra),
          c(ra, Ws),
          c(ra, Qa),
          c(Qa, Ys),
          c(ra, Ks),
          c(ra, xa),
          c(xa, Zs),
          c(ra, Qs),
          b(t, _s, m),
          b(t, Ia, m),
          (Ia.innerHTML = ot),
          b(t, ys, m),
          H(va, t, m),
          b(t, $s, m),
          b(t, da, m),
          c(da, Q),
          c(Q, xs),
          c(Q, Ma),
          c(Ma, an),
          c(Q, sn),
          c(Q, as),
          c(as, nn),
          c(Q, tn),
          c(Q, Ca),
          c(Ca, en),
          c(Q, pn),
          c(da, on),
          c(da, ea),
          c(ea, ss),
          c(ss, ln),
          c(ea, cn),
          c(ea, ns),
          c(ns, rn),
          c(ea, un),
          c(ea, ts),
          c(ts, fn),
          c(ea, kn),
          b(t, ws, m),
          b(t, Ba, m),
          (Ba.innerHTML = lt),
          b(t, Es, m),
          H(ha, t, m),
          (Os = !0);
      },
      p(t, [m]) {
        const es = {};
        m & 2 && (es.$$scope = { dirty: m, ctx: t }), P.$set(es);
        const ps = {};
        m & 2 && (ps.$$scope = { dirty: m, ctx: t }), sa.$set(ps);
        const As = {};
        m & 2 && (As.$$scope = { dirty: m, ctx: t }), fa.$set(As);
        const Ra = {};
        m & 2 && (Ra.$$scope = { dirty: m, ctx: t }), ka.$set(Ra);
        const F = {};
        m & 2 && (F.$$scope = { dirty: m, ctx: t }), ga.$set(F);
        const os = {};
        m & 2 && (os.$$scope = { dirty: m, ctx: t }), ma.$set(os);
        const ls = {};
        m & 2 && (ls.$$scope = { dirty: m, ctx: t }), va.$set(ls);
        const cs = {};
        m & 2 && (cs.$$scope = { dirty: m, ctx: t }), ha.$set(cs);
      },
      i(t) {
        Os ||
          (j(P.$$.fragment, t),
          j(sa.$$.fragment, t),
          j(fa.$$.fragment, t),
          j(ka.$$.fragment, t),
          j(ga.$$.fragment, t),
          j(ma.$$.fragment, t),
          j(va.$$.fragment, t),
          j(ha.$$.fragment, t),
          (Os = !0));
      },
      o(t) {
        C(P.$$.fragment, t),
          C(sa.$$.fragment, t),
          C(fa.$$.fragment, t),
          C(ka.$$.fragment, t),
          C(ga.$$.fragment, t),
          C(ma.$$.fragment, t),
          C(va.$$.fragment, t),
          C(ha.$$.fragment, t),
          (Os = !1);
      },
      d(t) {
        t && p(a),
          t && p(u),
          t && p($),
          t && p(R),
          z(P, t),
          t && p(G),
          t && p(T),
          t && p(Ta),
          t && p(la),
          t && p(Ja),
          z(sa, t),
          t && p(Va),
          t && p(_),
          t && p(ta),
          t && p(wa),
          t && p(rs),
          z(fa, t),
          t && p(is),
          t && p(Na),
          t && p(us),
          t && p(Oa),
          t && p(fs),
          z(ka, t),
          t && p(ks),
          t && p(Ha),
          t && p(gs),
          t && p(Sa),
          t && p(ms),
          z(ga, t),
          t && p(vs),
          t && p(za),
          t && p(ds),
          t && p(ja),
          t && p(hs),
          z(ma, t),
          t && p(bs),
          t && p(La),
          t && p(_s),
          t && p(Ia),
          t && p(ys),
          z(va, t),
          t && p($s),
          t && p(da),
          t && p(ws),
          t && p(Ba),
          t && p(Es),
          z(ha, t);
      },
    }
  );
}
const zt = {
    title: 'BeforeAfter',
    description: 'A before and after image comparison component.',
    slug: 'before-after',
  },
  { title: at, description: st, slug: Xt } = zt;
class qt extends Nn {
  constructor(a) {
    super();
    Hn(this, a, null, Ht, zn, {});
  }
}
export { qt as default, zt as metadata };
