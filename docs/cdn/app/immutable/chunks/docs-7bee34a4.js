var nd = (p, t, o) =>
  new Promise((s, u) => {
    var f = (d) => {
        try {
          g(o.next(d));
        } catch (C) {
          u(C);
        }
      },
      h = (d) => {
        try {
          g(o.throw(d));
        } catch (C) {
          u(C);
        }
      },
      g = (d) => (d.done ? s(d.value) : Promise.resolve(d.value).then(f, h));
    g((o = o.apply(p, t)).next());
  });
import {
  S as En,
  i as wn,
  s as yn,
  F as Pd,
  G as Td,
  H as Vd,
  I as Sd,
  q as N,
  o as D,
  a9 as hd,
  v as Id,
  u as Nd,
  D as Dd,
  e as n,
  c as l,
  a as r,
  d as a,
  f as L,
  b as m,
  g as I,
  V as U,
  n as mt,
  p as vt,
  t as i,
  h as c,
  E as Me,
  w as ee,
  x as te,
  y as se,
  B as oe,
  k as w,
  l as ms,
  m as y,
  J as e,
  j as md,
  a4 as up,
  Y as gn,
  T as hs,
  a0 as kn,
  X as _n,
  a6 as Rd,
  a7 as Ad,
  aa as vd,
} from './index-83a5d9f9.js';
import { a as bn } from './paths-396f020f.js';
import { F as Cn } from './main-e467f153.js';
import { c as _d, d as Md, e as Ld } from './index.es-99e9c10a.js';
import { D as vn } from './index-16ec1060.js';
const Gd = (p) => ({ intersecting: p & 1, entry: p & 2, observer: p & 4 }),
  ld = (p) => ({ intersecting: p[0], entry: p[1], observer: p[2] });
function Wd(p) {
  let t;
  const o = p[9].default,
    s = Pd(o, p, p[8], ld);
  return {
    c() {
      s && s.c();
    },
    l(u) {
      s && s.l(u);
    },
    m(u, f) {
      s && s.m(u, f), (t = !0);
    },
    p(u, [f]) {
      s &&
        s.p &&
        (!t || f & 263) &&
        Td(s, o, u, u[8], t ? Sd(o, u[8], f, Gd) : Vd(u[8]), ld);
    },
    i(u) {
      t || (N(s, u), (t = !0));
    },
    o(u) {
      D(s, u), (t = !1);
    },
    d(u) {
      s && s.d(u);
    },
  };
}
function jd(p, t, o) {
  let { $$slots: s = {}, $$scope: u } = t,
    { element: f = null } = t,
    { once: h = !1 } = t,
    { intersecting: g = !1 } = t,
    { root: d = null } = t,
    { rootMargin: C = '0px' } = t,
    { threshold: b = 0 } = t,
    { entry: O = null } = t,
    { observer: _ = null } = t;
  const T = hd();
  let R = null,
    k = null;
  const q = () => {
    o(
      2,
      (_ = new IntersectionObserver(
        (E) => {
          E.forEach((V) => {
            o(1, (O = V)), o(0, (g = V.isIntersecting));
          });
        },
        { root: d, rootMargin: C, threshold: b }
      ))
    );
  };
  return (
    Id(
      () => (
        q(),
        () => {
          _ && (_.disconnect(), o(2, (_ = null)));
        }
      )
    ),
    Nd(() =>
      nd(this, null, function* () {
        O !== null &&
          (T('observe', O),
          O.isIntersecting && (T('intersect', O), h && _.unobserve(f))),
          yield Dd(),
          f !== null &&
            f !== k &&
            (_.observe(f), k !== null && _.unobserve(k), (k = f)),
          R && C !== R && (_.disconnect(), (k = null), q()),
          (R = C);
      })
    ),
    (p.$$set = (E) => {
      'element' in E && o(3, (f = E.element)),
        'once' in E && o(4, (h = E.once)),
        'intersecting' in E && o(0, (g = E.intersecting)),
        'root' in E && o(5, (d = E.root)),
        'rootMargin' in E && o(6, (C = E.rootMargin)),
        'threshold' in E && o(7, (b = E.threshold)),
        'entry' in E && o(1, (O = E.entry)),
        'observer' in E && o(2, (_ = E.observer)),
        '$$scope' in E && o(8, (u = E.$$scope));
    }),
    [g, O, _, f, h, d, C, b, u, s]
  );
}
class Hd extends En {
  constructor(t) {
    super(),
      wn(this, t, jd, Wd, yn, {
        element: 3,
        once: 4,
        intersecting: 0,
        root: 5,
        rootMargin: 6,
        threshold: 7,
        entry: 1,
        observer: 2,
      });
  }
}
function zd(p) {
  let t;
  return {
    c() {
      t = i('error');
    },
    l(o) {
      t = c(o, 'error');
    },
    m(o, s) {
      I(o, t, s);
    },
    p: Me,
    i: Me,
    o: Me,
    d(o) {
      o && a(t);
    },
  };
}
function Bd(p) {
  let t, o, s;
  return (
    (o = new Cn({ props: { icon: _d, size: '2x', color: p[8] } })),
    {
      c() {
        (t = n('i')), ee(o.$$.fragment), this.h();
      },
      l(u) {
        t = l(u, 'I', { class: !0 });
        var f = r(t);
        te(o.$$.fragment, f), f.forEach(a), this.h();
      },
      h() {
        m(t, 'class', 'play-pause-icon play');
      },
      m(u, f) {
        I(u, t, f), se(o, t, null), (s = !0);
      },
      p(u, f) {
        const h = {};
        f & 256 && (h.color = u[8]), o.$set(h);
      },
      i(u) {
        s || (N(o.$$.fragment, u), (s = !0));
      },
      o(u) {
        D(o.$$.fragment, u), (s = !1);
      },
      d(u) {
        u && a(t), oe(o);
      },
    }
  );
}
function Ud(p) {
  let t, o, s;
  return (
    (o = new Cn({ props: { icon: Md, size: '2x', color: p[8] } })),
    {
      c() {
        (t = n('i')), ee(o.$$.fragment), this.h();
      },
      l(u) {
        t = l(u, 'I', { class: !0 });
        var f = r(t);
        te(o.$$.fragment, f), f.forEach(a), this.h();
      },
      h() {
        m(t, 'class', 'play-pause-icon pause');
      },
      m(u, f) {
        I(u, t, f), se(o, t, null), (s = !0);
      },
      p(u, f) {
        const h = {};
        f & 256 && (h.color = u[8]), o.$set(h);
      },
      i(u) {
        s || (N(o.$$.fragment, u), (s = !0));
      },
      o(u) {
        D(o.$$.fragment, u), (s = !1);
      },
      d(u) {
        u && a(t), oe(o);
      },
    }
  );
}
function qd(p) {
  let t, o, s, u;
  const f = [Yd, Fd],
    h = [];
  function g(d, C) {
    return d[7] ? 0 : 1;
  }
  return (
    (o = g(p)),
    (s = h[o] = f[o](p)),
    {
      c() {
        (t = n('i')), s.c(), this.h();
      },
      l(d) {
        t = l(d, 'I', { class: !0 });
        var C = r(t);
        s.l(C), C.forEach(a), this.h();
      },
      h() {
        m(t, 'class', 'play-pause-icon replay');
      },
      m(d, C) {
        I(d, t, C), h[o].m(t, null), (u = !0);
      },
      p(d, C) {
        let b = o;
        (o = g(d)),
          o === b
            ? h[o].p(d, C)
            : (mt(),
              D(h[b], 1, 1, () => {
                h[b] = null;
              }),
              vt(),
              (s = h[o]),
              s ? s.p(d, C) : ((s = h[o] = f[o](d)), s.c()),
              N(s, 1),
              s.m(t, null));
      },
      i(d) {
        u || (N(s), (u = !0));
      },
      o(d) {
        D(s), (u = !1);
      },
      d(d) {
        d && a(t), h[o].d();
      },
    }
  );
}
function Fd(p) {
  let t, o;
  return (
    (t = new Cn({ props: { icon: _d, size: '2x', color: p[8] } })),
    {
      c() {
        ee(t.$$.fragment);
      },
      l(s) {
        te(t.$$.fragment, s);
      },
      m(s, u) {
        se(t, s, u), (o = !0);
      },
      p(s, u) {
        const f = {};
        u & 256 && (f.color = s[8]), t.$set(f);
      },
      i(s) {
        o || (N(t.$$.fragment, s), (o = !0));
      },
      o(s) {
        D(t.$$.fragment, s), (o = !1);
      },
      d(s) {
        oe(t, s);
      },
    }
  );
}
function Yd(p) {
  let t, o;
  return (
    (t = new Cn({ props: { icon: Ld, size: '2x', color: p[8] } })),
    {
      c() {
        ee(t.$$.fragment);
      },
      l(s) {
        te(t.$$.fragment, s);
      },
      m(s, u) {
        se(t, s, u), (o = !0);
      },
      p(s, u) {
        const f = {};
        u & 256 && (f.color = s[8]), t.$set(f);
      },
      i(s) {
        o || (N(t.$$.fragment, s), (o = !0));
      },
      o(s) {
        D(t.$$.fragment, s), (o = !1);
      },
      d(s) {
        oe(t, s);
      },
    }
  );
}
function Kd(p) {
  let t, o, s, u, f, h;
  const g = [qd, Ud, Bd, zd],
    d = [];
  function C(b, O) {
    return b[6] ? 0 : b[0] === !1 ? 1 : b[0] === !0 ? 2 : 3;
  }
  return (
    (o = C(p)),
    (s = d[o] = g[o](p)),
    {
      c() {
        (t = n('button')), s.c(), this.h();
      },
      l(b) {
        t = l(b, 'BUTTON', { style: !0, class: !0 });
        var O = r(t);
        s.l(O), O.forEach(a), this.h();
      },
      h() {
        L(t, 'opacity', p[1]),
          L(
            t,
            'top',
            p[2] === 'top left' || p[2] === 'top right'
              ? `${10}px`
              : `${p[4] - p[5]}px`
          ),
          L(
            t,
            'left',
            p[2] === 'top left' || p[2] === 'bottom left'
              ? `${10}px`
              : `${p[3] - p[5]}px`
          ),
          m(t, 'class', 'svelte-1rmu17u');
      },
      m(b, O) {
        I(b, t, O),
          d[o].m(t, null),
          (u = !0),
          f || ((h = U(t, 'click', p[9])), (f = !0));
      },
      p(b, [O]) {
        let _ = o;
        (o = C(b)),
          o === _
            ? d[o].p(b, O)
            : (mt(),
              D(d[_], 1, 1, () => {
                d[_] = null;
              }),
              vt(),
              (s = d[o]),
              s ? s.p(b, O) : ((s = d[o] = g[o](b)), s.c()),
              N(s, 1),
              s.m(t, null)),
          (!u || O & 2) && L(t, 'opacity', b[1]),
          (!u || O & 52) &&
            L(
              t,
              'top',
              b[2] === 'top left' || b[2] === 'top right'
                ? `${10}px`
                : `${b[4] - b[5]}px`
            ),
          (!u || O & 44) &&
            L(
              t,
              'left',
              b[2] === 'top left' || b[2] === 'bottom left'
                ? `${10}px`
                : `${b[3] - b[5]}px`
            );
      },
      i(b) {
        u || (N(s), (u = !0));
      },
      o(b) {
        D(s), (u = !1);
      },
      d(b) {
        b && a(t), d[o].d(), (f = !1), h();
      },
    }
  );
}
function Jd(p, t, o) {
  const s = hd();
  let { paused: u } = t,
    { clickedOnPauseBtn: f } = t,
    { controlsOpacity: h } = t,
    { controlsPosition: g } = t,
    { widthVideoContainer: d } = t,
    { heightVideoContainer: C } = t,
    { controlsBorderOffset: b } = t,
    { resetCondition: O } = t,
    { separateReplayIcon: _ } = t,
    { controlsColour: T } = t;
  function R() {
    o(0, (u = !u)),
      o(10, (f = u === !0)),
      s('pausePlayEvent', { paused: u, clickedOnPauseBtn: f });
  }
  return (
    (p.$$set = (k) => {
      'paused' in k && o(0, (u = k.paused)),
        'clickedOnPauseBtn' in k && o(10, (f = k.clickedOnPauseBtn)),
        'controlsOpacity' in k && o(1, (h = k.controlsOpacity)),
        'controlsPosition' in k && o(2, (g = k.controlsPosition)),
        'widthVideoContainer' in k && o(3, (d = k.widthVideoContainer)),
        'heightVideoContainer' in k && o(4, (C = k.heightVideoContainer)),
        'controlsBorderOffset' in k && o(5, (b = k.controlsBorderOffset)),
        'resetCondition' in k && o(6, (O = k.resetCondition)),
        'separateReplayIcon' in k && o(7, (_ = k.separateReplayIcon)),
        'controlsColour' in k && o(8, (T = k.controlsColour));
    }),
    [u, h, g, d, C, b, O, _, T, R, f]
  );
}
class gd extends En {
  constructor(t) {
    super(),
      wn(this, t, Jd, Kd, yn, {
        paused: 0,
        clickedOnPauseBtn: 10,
        controlsOpacity: 1,
        controlsPosition: 2,
        widthVideoContainer: 3,
        heightVideoContainer: 4,
        controlsBorderOffset: 5,
        resetCondition: 6,
        separateReplayIcon: 7,
        controlsColour: 8,
      });
  }
}
function rd(p) {
  let t,
    o,
    s,
    u,
    f,
    h,
    g = p[3] && id(p);
  const d = [Qd, Xd],
    C = [];
  function b(_, T) {
    return _[9] ? 0 : 1;
  }
  (o = b(p)), (s = C[o] = d[o](p));
  let O = p[4] && ud(p);
  return {
    c() {
      g && g.c(), (t = w()), s.c(), (u = w()), O && O.c(), (f = ms());
    },
    l(_) {
      g && g.l(_), (t = y(_)), s.l(_), (u = y(_)), O && O.l(_), (f = ms());
    },
    m(_, T) {
      g && g.m(_, T),
        I(_, t, T),
        C[o].m(_, T),
        I(_, u, T),
        O && O.m(_, T),
        I(_, f, T),
        (h = !0);
    },
    p(_, T) {
      _[3]
        ? g
          ? g.p(_, T)
          : ((g = id(_)), g.c(), g.m(t.parentNode, t))
        : g && (g.d(1), (g = null));
      let R = o;
      (o = b(_)),
        o === R
          ? C[o].p(_, T)
          : (mt(),
            D(C[R], 1, 1, () => {
              C[R] = null;
            }),
            vt(),
            (s = C[o]),
            s ? s.p(_, T) : ((s = C[o] = d[o](_)), s.c()),
            N(s, 1),
            s.m(u.parentNode, u)),
        _[4]
          ? O
            ? O.p(_, T)
            : ((O = ud(_)), O.c(), O.m(f.parentNode, f))
          : O && (O.d(1), (O = null));
    },
    i(_) {
      h || (N(s), (h = !0));
    },
    o(_) {
      D(s), (h = !1);
    },
    d(_) {
      g && g.d(_), _ && a(t), C[o].d(_), _ && a(u), O && O.d(_), _ && a(f);
    },
  };
}
function id(p) {
  let t, o;
  return {
    c() {
      (t = n('p')), (o = i(p[3])), this.h();
    },
    l(s) {
      t = l(s, 'P', { class: !0 });
      var u = r(t);
      (o = c(u, p[3])), u.forEach(a), this.h();
    },
    h() {
      m(t, 'class', 'visually-hidden svelte-1lew2ce');
    },
    m(s, u) {
      I(s, t, u), e(t, o);
    },
    p(s, u) {
      u[0] & 8 && md(o, s[3]);
    },
    d(s) {
      s && a(t);
    },
  };
}
function Xd(p) {
  let t,
    o,
    s,
    u,
    f,
    h,
    g = !1,
    d,
    C = !0,
    b,
    O,
    _,
    T,
    R,
    k = p[11] && cd(p);
  function q() {
    cancelAnimationFrame(d), s.paused || ((d = vd(q)), (g = !0)), p[45].call(s);
  }
  return {
    c() {
      (t = n('div')),
        k && k.c(),
        (o = w()),
        (s = n('video')),
        (u = n('track')),
        this.h();
    },
    l(E) {
      t = l(E, 'DIV', { class: !0, 'aria-hidden': !0 });
      var V = r(t);
      k && k.l(V),
        (o = y(V)),
        (s = l(V, 'VIDEO', {
          src: !0,
          width: !0,
          preload: !0,
          style: !0,
          class: !0,
        }));
      var ke = r(s);
      (u = l(ke, 'TRACK', { kind: !0 })), ke.forEach(a), V.forEach(a), this.h();
    },
    h() {
      m(u, 'kind', 'captions'),
        gn(s.src, (f = p[1])) || m(s, 'src', f),
        m(s, 'width', '100%'),
        (s.muted = p[8]),
        (s.playsInline = !0),
        m(s, 'preload', p[6]),
        (s.loop = p[7]),
        (s.autoplay = !0),
        m(s, 'style', (h = (p[0], 'position: relative'))),
        m(s, 'class', 'svelte-1lew2ce'),
        p[18] === void 0 && hs(() => p[46].call(s)),
        hs(() => p[48].call(s)),
        m(t, 'class', 'video-wrapper svelte-1lew2ce'),
        m(t, 'aria-hidden', p[2]),
        hs(() => p[49].call(t));
    },
    m(E, V) {
      I(E, t, V),
        k && k.m(t, null),
        e(t, o),
        e(t, s),
        e(s, u),
        p[44](s),
        (b = kn(s, p[48].bind(s))),
        (O = kn(t, p[49].bind(t))),
        (_ = !0),
        T ||
          ((R = [
            U(s, 'timeupdate', q),
            U(s, 'durationchange', p[46]),
            U(s, 'play', p[47]),
            U(s, 'pause', p[47]),
          ]),
          (T = !0));
    },
    p(E, V) {
      E[11]
        ? k
          ? (k.p(E, V), V[0] & 2048 && N(k, 1))
          : ((k = cd(E)), k.c(), N(k, 1), k.m(t, o))
        : k &&
          (mt(),
          D(k, 1, 1, () => {
            k = null;
          }),
          vt()),
        (!_ || (V[0] & 2 && !gn(s.src, (f = E[1])))) && m(s, 'src', f),
        (!_ || V[0] & 256) && (s.muted = E[8]),
        (!_ || V[0] & 64) && m(s, 'preload', E[6]),
        (!_ || V[0] & 128) && (s.loop = E[7]),
        (!_ || (V[0] & 1 && h !== (h = (E[0], 'position: relative')))) &&
          m(s, 'style', h),
        !g && V[0] & 131072 && !isNaN(E[17]) && (s.currentTime = E[17]),
        (g = !1),
        V[0] & 2097152 && C !== (C = E[21]) && s[C ? 'pause' : 'play'](),
        (!_ || V[0] & 4) && m(t, 'aria-hidden', E[2]);
    },
    i(E) {
      _ || (N(k), (_ = !0));
    },
    o(E) {
      D(k), (_ = !1);
    },
    d(E) {
      E && a(t), k && k.d(), p[44](null), b(), O(), (T = !1), up(R);
    },
  };
}
function Qd(p) {
  let t, o, s;
  function u(h) {
    p[42](h);
  }
  let f = {
    element: p[26],
    threshold: p[10],
    once: !1,
    $$slots: { default: [th] },
    $$scope: { ctx: p },
  };
  return (
    p[20] !== void 0 && (f.intersecting = p[20]),
    (t = new Hd({ props: f })),
    _n.push(() => Rd(t, 'intersecting', u)),
    {
      c() {
        ee(t.$$.fragment);
      },
      l(h) {
        te(t.$$.fragment, h);
      },
      m(h, g) {
        se(t, h, g), (s = !0);
      },
      p(h, g) {
        const d = {};
        g[0] & 67108864 && (d.element = h[26]),
          g[0] & 1024 && (d.threshold = h[10]),
          (g[0] & 1072691655) | (g[1] & 8388608) &&
            (d.$$scope = { dirty: g, ctx: h }),
          !o &&
            g[0] & 1048576 &&
            ((o = !0), (d.intersecting = h[20]), Ad(() => (o = !1))),
          t.$set(d);
      },
      i(h) {
        s || (N(t.$$.fragment, h), (s = !0));
      },
      o(h) {
        D(t.$$.fragment, h), (s = !1);
      },
      d(h) {
        oe(t, h);
      },
    }
  );
}
function cd(p) {
  let t, o, s, u;
  const f = [xd, Zd],
    h = [];
  function g(d, C) {
    return d[0] ? 0 : 1;
  }
  return (
    (t = g(p)),
    (o = h[t] = f[t](p)),
    {
      c() {
        o.c(), (s = ms());
      },
      l(d) {
        o.l(d), (s = ms());
      },
      m(d, C) {
        h[t].m(d, C), I(d, s, C), (u = !0);
      },
      p(d, C) {
        let b = t;
        (t = g(d)),
          t === b
            ? h[t].p(d, C)
            : (mt(),
              D(h[b], 1, 1, () => {
                h[b] = null;
              }),
              vt(),
              (o = h[t]),
              o ? o.p(d, C) : ((o = h[t] = f[t](d)), o.c()),
              N(o, 1),
              o.m(s.parentNode, s));
      },
      i(d) {
        u || (N(o), (u = !0));
      },
      o(d) {
        D(o), (u = !1);
      },
      d(d) {
        h[t].d(d), d && a(s);
      },
    }
  );
}
function Zd(p) {
  let t, o, s;
  return {
    c() {
      (t = n('button')), this.h();
    },
    l(u) {
      (t = l(u, 'BUTTON', { style: !0, class: !0 })), r(t).forEach(a), this.h();
    },
    h() {
      L(t, 'position', 'absolute'),
        L(t, 'top', '0'),
        L(t, 'left', '0'),
        L(t, 'width', p[25] + 'px'),
        L(t, 'height', p[24] + 'px'),
        m(t, 'class', 'svelte-1lew2ce');
    },
    m(u, f) {
      I(u, t, f), o || ((s = U(t, 'click', p[43])), (o = !0));
    },
    p(u, f) {
      f[0] & 33554432 && L(t, 'width', u[25] + 'px'),
        f[0] & 16777216 && L(t, 'height', u[24] + 'px');
    },
    i: Me,
    o: Me,
    d(u) {
      u && a(t), (o = !1), s();
    },
  };
}
function xd(p) {
  let t, o;
  return (
    (t = new gd({
      props: {
        paused: p[21],
        clickedOnPauseBtn: p[19],
        controlsOpacity: p[15],
        controlsPosition: p[16],
        widthVideoContainer: p[25],
        heightVideoContainer: p[24],
        controlsBorderOffset: kd,
        resetCondition: p[28],
        separateReplayIcon: p[13],
        controlsColour: p[14],
      },
    })),
    t.$on('pausePlayEvent', p[31]),
    {
      c() {
        ee(t.$$.fragment);
      },
      l(s) {
        te(t.$$.fragment, s);
      },
      m(s, u) {
        se(t, s, u), (o = !0);
      },
      p(s, u) {
        const f = {};
        u[0] & 2097152 && (f.paused = s[21]),
          u[0] & 524288 && (f.clickedOnPauseBtn = s[19]),
          u[0] & 32768 && (f.controlsOpacity = s[15]),
          u[0] & 65536 && (f.controlsPosition = s[16]),
          u[0] & 33554432 && (f.widthVideoContainer = s[25]),
          u[0] & 16777216 && (f.heightVideoContainer = s[24]),
          u[0] & 268435456 && (f.resetCondition = s[28]),
          u[0] & 8192 && (f.separateReplayIcon = s[13]),
          u[0] & 16384 && (f.controlsColour = s[14]),
          t.$set(f);
      },
      i(s) {
        o || (N(t.$$.fragment, s), (o = !0));
      },
      o(s) {
        D(t.$$.fragment, s), (o = !1);
      },
      d(s) {
        oe(t, s);
      },
    }
  );
}
function pd(p) {
  let t, o, s, u;
  const f = [eh, $d],
    h = [];
  function g(d, C) {
    return d[0] ? 0 : 1;
  }
  return (
    (t = g(p)),
    (o = h[t] = f[t](p)),
    {
      c() {
        o.c(), (s = ms());
      },
      l(d) {
        o.l(d), (s = ms());
      },
      m(d, C) {
        h[t].m(d, C), I(d, s, C), (u = !0);
      },
      p(d, C) {
        let b = t;
        (t = g(d)),
          t === b
            ? h[t].p(d, C)
            : (mt(),
              D(h[b], 1, 1, () => {
                h[b] = null;
              }),
              vt(),
              (o = h[t]),
              o ? o.p(d, C) : ((o = h[t] = f[t](d)), o.c()),
              N(o, 1),
              o.m(s.parentNode, s));
      },
      i(d) {
        u || (N(o), (u = !0));
      },
      o(d) {
        D(o), (u = !1);
      },
      d(d) {
        h[t].d(d), d && a(s);
      },
    }
  );
}
function $d(p) {
  let t, o, s;
  return {
    c() {
      (t = n('button')), this.h();
    },
    l(u) {
      (t = l(u, 'BUTTON', { style: !0, class: !0 })), r(t).forEach(a), this.h();
    },
    h() {
      L(t, 'position', 'absolute'),
        L(t, 'top', '0'),
        L(t, 'left', '0'),
        L(t, 'width', p[25] + 'px'),
        L(t, 'height', p[24] + 'px'),
        m(t, 'class', 'svelte-1lew2ce');
    },
    m(u, f) {
      I(u, t, f), o || ((s = U(t, 'click', p[34])), (o = !0));
    },
    p(u, f) {
      f[0] & 33554432 && L(t, 'width', u[25] + 'px'),
        f[0] & 16777216 && L(t, 'height', u[24] + 'px');
    },
    i: Me,
    o: Me,
    d(u) {
      u && a(t), (o = !1), s();
    },
  };
}
function eh(p) {
  let t, o;
  return (
    (t = new gd({
      props: {
        paused: p[21],
        clickedOnPauseBtn: p[19],
        controlsOpacity: p[12] ? p[29] : p[15],
        controlsPosition: p[16],
        widthVideoContainer: p[25],
        heightVideoContainer: p[24],
        controlsBorderOffset: kd,
        resetCondition: p[28],
        separateReplayIcon: p[13],
        controlsColour: p[14],
      },
    })),
    t.$on('pausePlayEvent', p[31]),
    {
      c() {
        ee(t.$$.fragment);
      },
      l(s) {
        te(t.$$.fragment, s);
      },
      m(s, u) {
        se(t, s, u), (o = !0);
      },
      p(s, u) {
        const f = {};
        u[0] & 2097152 && (f.paused = s[21]),
          u[0] & 524288 && (f.clickedOnPauseBtn = s[19]),
          u[0] & 536907776 && (f.controlsOpacity = s[12] ? s[29] : s[15]),
          u[0] & 65536 && (f.controlsPosition = s[16]),
          u[0] & 33554432 && (f.widthVideoContainer = s[25]),
          u[0] & 16777216 && (f.heightVideoContainer = s[24]),
          u[0] & 268435456 && (f.resetCondition = s[28]),
          u[0] & 8192 && (f.separateReplayIcon = s[13]),
          u[0] & 16384 && (f.controlsColour = s[14]),
          t.$set(f);
      },
      i(s) {
        o || (N(t.$$.fragment, s), (o = !0));
      },
      o(s) {
        D(t.$$.fragment, s), (o = !1);
      },
      d(s) {
        oe(t, s);
      },
    }
  );
}
function th(p) {
  let t,
    o,
    s,
    u,
    f,
    h,
    g = !1,
    d,
    C = !0,
    b,
    O,
    _,
    T,
    R,
    k = p[11] && pd(p);
  function q() {
    cancelAnimationFrame(d), s.paused || ((d = vd(q)), (g = !0)), p[36].call(s);
  }
  return {
    c() {
      (t = n('div')),
        k && k.c(),
        (o = w()),
        (s = n('video')),
        (u = n('track')),
        this.h();
    },
    l(E) {
      t = l(E, 'DIV', { class: !0, 'aria-hidden': !0 });
      var V = r(t);
      k && k.l(V),
        (o = y(V)),
        (s = l(V, 'VIDEO', {
          src: !0,
          width: !0,
          preload: !0,
          style: !0,
          class: !0,
        }));
      var ke = r(s);
      (u = l(ke, 'TRACK', { kind: !0 })), ke.forEach(a), V.forEach(a), this.h();
    },
    h() {
      m(u, 'kind', 'captions'),
        gn(s.src, (f = p[1])) || m(s, 'src', f),
        m(s, 'width', '100%'),
        (s.muted = p[8]),
        (s.playsInline = !0),
        m(s, 'preload', p[6]),
        (s.loop = p[7]),
        m(s, 'style', (h = (p[0], 'position: relative'))),
        m(s, 'class', 'svelte-1lew2ce'),
        p[18] === void 0 && hs(() => p[37].call(s)),
        hs(() => p[39].call(s)),
        m(t, 'class', 'video-wrapper svelte-1lew2ce'),
        m(t, 'aria-hidden', p[2]),
        hs(() => p[41].call(t));
    },
    m(E, V) {
      I(E, t, V),
        k && k.m(t, null),
        e(t, o),
        e(t, s),
        e(s, u),
        p[35](s),
        (b = kn(s, p[39].bind(s))),
        p[40](t),
        (O = kn(t, p[41].bind(t))),
        (_ = !0),
        T ||
          ((R = [
            U(s, 'timeupdate', q),
            U(s, 'durationchange', p[37]),
            U(s, 'play', p[38]),
            U(s, 'pause', p[38]),
          ]),
          (T = !0));
    },
    p(E, V) {
      E[11]
        ? k
          ? (k.p(E, V), V[0] & 2048 && N(k, 1))
          : ((k = pd(E)), k.c(), N(k, 1), k.m(t, o))
        : k &&
          (mt(),
          D(k, 1, 1, () => {
            k = null;
          }),
          vt()),
        (!_ || (V[0] & 2 && !gn(s.src, (f = E[1])))) && m(s, 'src', f),
        (!_ || V[0] & 256) && (s.muted = E[8]),
        (!_ || V[0] & 64) && m(s, 'preload', E[6]),
        (!_ || V[0] & 128) && (s.loop = E[7]),
        (!_ || (V[0] & 1 && h !== (h = (E[0], 'position: relative')))) &&
          m(s, 'style', h),
        !g && V[0] & 131072 && !isNaN(E[17]) && (s.currentTime = E[17]),
        (g = !1),
        V[0] & 2097152 && C !== (C = E[21]) && s[C ? 'pause' : 'play'](),
        (!_ || V[0] & 4) && m(t, 'aria-hidden', E[2]);
    },
    i(E) {
      _ || (N(k), (_ = !0));
    },
    o(E) {
      D(k), (_ = !1);
    },
    d(E) {
      E && a(t),
        k && k.d(),
        p[35](null),
        b(),
        p[40](null),
        O(),
        (T = !1),
        up(R);
    },
  };
}
function ud(p) {
  let t, o;
  return {
    c() {
      (t = n('figcaption')), (o = i(p[4])), this.h();
    },
    l(s) {
      t = l(s, 'FIGCAPTION', { class: !0 });
      var u = r(t);
      (o = c(u, p[4])), u.forEach(a), this.h();
    },
    h() {
      m(t, 'class', 'svelte-1lew2ce');
    },
    m(s, u) {
      I(s, t, u), e(t, o);
    },
    p(s, u) {
      u[0] & 16 && md(o, s[4]);
    },
    d(s) {
      s && a(t);
    },
  };
}
function sh(p) {
  let t,
    o,
    s,
    u,
    f,
    h = ((p[2] && p[3]) || !p[2]) && rd(p);
  return {
    c() {
      (t = n('section')), h && h.c(), this.h();
    },
    l(g) {
      t = l(g, 'SECTION', { class: !0 });
      var d = r(t);
      h && h.l(d), d.forEach(a), this.h();
    },
    h() {
      m(
        t,
        'class',
        (o = 'video-container graphic ' + p[5] + ' svelte-1lew2ce')
      );
    },
    m(g, d) {
      I(g, t, d),
        h && h.m(t, null),
        (s = !0),
        u ||
          ((f = [
            U(window, 'click', p[30]),
            U(window, 'touchstart', p[30]),
            U(t, 'mouseover', p[50]),
            U(t, 'focus', p[51]),
            U(t, 'mouseout', p[52]),
            U(t, 'blur', p[53]),
          ]),
          (u = !0));
    },
    p(g, d) {
      (g[2] && g[3]) || !g[2]
        ? h
          ? (h.p(g, d), d[0] & 12 && N(h, 1))
          : ((h = rd(g)), h.c(), N(h, 1), h.m(t, null))
        : h &&
          (mt(),
          D(h, 1, 1, () => {
            h = null;
          }),
          vt()),
        (!s ||
          (d[0] & 32 &&
            o !==
              (o = 'video-container graphic ' + g[5] + ' svelte-1lew2ce'))) &&
          m(t, 'class', o);
    },
    i(g) {
      s || (N(h), (s = !0));
    },
    o(g) {
      D(h), (s = !1);
    },
    d(g) {
      g && a(t), h && h.d(), (u = !1), up(f);
    },
  };
}
const kd = 50;
function oh(p, t, o) {
  let s,
    u,
    { src: f = '' } = t,
    { ariaHidden: h = !0 } = t,
    { ariaDescription: g = null } = t,
    { caption: d = '' } = t,
    { size: C = 'normal' } = t,
    { preloadVideo: b = 'auto' } = t,
    { loopVideo: O = !0 } = t,
    { muteVideo: _ = !0 } = t,
    { allowSoundToAutoplay: T = !1 } = t,
    { playVideoWhenInView: R = !0 } = t,
    { playVideoThreshold: k = 0.5 } = t,
    { possibleToPlayPause: q = !0 } = t,
    { showControls: E = !0 } = t,
    { hoverToSeeControls: V = !1 } = t,
    { separateReplayIcon: ke = !1 } = t,
    { controlsColour: Nt = '#333' } = t,
    { controlsOpacity: Le = 0.5 } = t,
    { controlsPosition: Dt = 'top left' } = t,
    Ge = 0,
    Q,
    A = !0,
    Z = !1,
    Fe,
    Se,
    Ye,
    Ke,
    ae,
    _t,
    Je,
    We = !1;
  const et = () => {
      o(33, (We = !0));
    },
    de = (P) => {
      const Ct = P.detail.paused,
        Vs = P.detail.clickedOnPauseBtn;
      o(21, (A = Ct)), o(19, (Z = Vs));
    };
  h &&
    !g &&
    console.warn(
      'Must provide aria description for video components if ariaHidden is true.'
    );
  const vs = () => {
    A === !0 ? o(21, (A = !1)) : o(21, (A = !0));
  };
  function gt(P) {
    _n[P ? 'unshift' : 'push'](() => {
      (Je = P), o(27, Je);
    });
  }
  function _s() {
    (Ge = this.currentTime), o(17, Ge);
  }
  function gs() {
    (Q = this.duration), o(18, Q);
  }
  function kt() {
    (A = this.paused),
      o(21, A),
      o(9, R),
      o(20, ae),
      o(8, _),
      o(32, T),
      o(33, We),
      o(19, Z);
  }
  function ks() {
    (Se = this.clientWidth), (Fe = this.clientHeight), o(23, Se), o(22, Fe);
  }
  function Es(P) {
    _n[P ? 'unshift' : 'push'](() => {
      (_t = P), o(26, _t);
    });
  }
  function Et() {
    (Ke = this.clientWidth), (Ye = this.clientHeight), o(25, Ke), o(24, Ye);
  }
  function ws(P) {
    (ae = P), o(20, ae);
  }
  const ys = () => {
    A === !0 ? o(21, (A = !1)) : o(21, (A = !0));
  };
  function bs(P) {
    _n[P ? 'unshift' : 'push'](() => {
      (Je = P), o(27, Je);
    });
  }
  function wt() {
    (Ge = this.currentTime), o(17, Ge);
  }
  function yt() {
    (Q = this.duration), o(18, Q);
  }
  function Cs() {
    (A = this.paused),
      o(21, A),
      o(9, R),
      o(20, ae),
      o(8, _),
      o(32, T),
      o(33, We),
      o(19, Z);
  }
  function Os() {
    (Se = this.clientWidth), (Fe = this.clientHeight), o(23, Se), o(22, Fe);
  }
  function tt() {
    (Ke = this.clientWidth), (Ye = this.clientHeight), o(25, Ke), o(24, Ye);
  }
  const Ee = () => {
      o(29, (s = Le));
    },
    Ps = () => {
      o(29, (s = Le));
    },
    bt = () => {
      o(29, (s = 0));
    },
    Ts = () => {
      o(29, (s = 0));
    };
  return (
    (p.$$set = (P) => {
      'src' in P && o(1, (f = P.src)),
        'ariaHidden' in P && o(2, (h = P.ariaHidden)),
        'ariaDescription' in P && o(3, (g = P.ariaDescription)),
        'caption' in P && o(4, (d = P.caption)),
        'size' in P && o(5, (C = P.size)),
        'preloadVideo' in P && o(6, (b = P.preloadVideo)),
        'loopVideo' in P && o(7, (O = P.loopVideo)),
        'muteVideo' in P && o(8, (_ = P.muteVideo)),
        'allowSoundToAutoplay' in P && o(32, (T = P.allowSoundToAutoplay)),
        'playVideoWhenInView' in P && o(9, (R = P.playVideoWhenInView)),
        'playVideoThreshold' in P && o(10, (k = P.playVideoThreshold)),
        'possibleToPlayPause' in P && o(11, (q = P.possibleToPlayPause)),
        'showControls' in P && o(0, (E = P.showControls)),
        'hoverToSeeControls' in P && o(12, (V = P.hoverToSeeControls)),
        'separateReplayIcon' in P && o(13, (ke = P.separateReplayIcon)),
        'controlsColour' in P && o(14, (Nt = P.controlsColour)),
        'controlsOpacity' in P && o(15, (Le = P.controlsOpacity)),
        'controlsPosition' in P && o(16, (Dt = P.controlsPosition));
    }),
    (p.$$.update = () => {
      p.$$.dirty[0] & 393216 && o(28, (u = Ge >= Q)),
        p.$$.dirty[0] & 1049344 && R && ae && _ && o(21, (A = !1)),
        p.$$.dirty[0] & 1049088 && R && !ae && o(21, (A = !0)),
        (p.$$.dirty[0] & 1573632) | (p.$$.dirty[1] & 6) &&
          T &&
          R &&
          ae &&
          !_ &&
          We &&
          !Z &&
          o(21, (A = !1)),
        (p.$$.dirty[0] & 256) | (p.$$.dirty[1] & 6) &&
          T &&
          !_ &&
          !We &&
          o(21, (A = !0)),
        p.$$.dirty[0] & 2048 && (q || o(0, (E = !0)));
    }),
    o(29, (s = 0)),
    [
      E,
      f,
      h,
      g,
      d,
      C,
      b,
      O,
      _,
      R,
      k,
      q,
      V,
      ke,
      Nt,
      Le,
      Dt,
      Ge,
      Q,
      Z,
      ae,
      A,
      Fe,
      Se,
      Ye,
      Ke,
      _t,
      Je,
      u,
      s,
      et,
      de,
      T,
      We,
      vs,
      gt,
      _s,
      gs,
      kt,
      ks,
      Es,
      Et,
      ws,
      ys,
      bs,
      wt,
      yt,
      Cs,
      Os,
      tt,
      Ee,
      Ps,
      bt,
      Ts,
    ]
  );
}
class On extends En {
  constructor(t) {
    super(),
      wn(
        this,
        t,
        oh,
        sh,
        yn,
        {
          src: 1,
          ariaHidden: 2,
          ariaDescription: 3,
          caption: 4,
          size: 5,
          preloadVideo: 6,
          loopVideo: 7,
          muteVideo: 8,
          allowSoundToAutoplay: 32,
          playVideoWhenInView: 9,
          playVideoThreshold: 10,
          possibleToPlayPause: 11,
          showControls: 0,
          hoverToSeeControls: 12,
          separateReplayIcon: 13,
          controlsColour: 14,
          controlsOpacity: 15,
          controlsPosition: 16,
        },
        null,
        [-1, -1]
      );
  }
}
function ah(p) {
  let t, o;
  return (
    (t = new On({
      props: {
        ariaDescription: 'Description of your video for screen readers.',
        src: `${bn}/videos/Sequence silent video_4.mp4`,
        size: 'wide',
        caption:
          "World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",
      },
    })),
    {
      c() {
        ee(t.$$.fragment);
      },
      l(s) {
        te(t.$$.fragment, s);
      },
      m(s, u) {
        se(t, s, u), (o = !0);
      },
      p: Me,
      i(s) {
        o || (N(t.$$.fragment, s), (o = !0));
      },
      o(s) {
        D(t.$$.fragment, s), (o = !1);
      },
      d(s) {
        oe(t, s);
      },
    }
  );
}
function nh(p) {
  let t, o;
  return (
    (t = new On({
      props: {
        ariaDescription: 'Description of your video for screen readers.',
        src: `${bn}/videos/Sequence silent video_4.mp4`,
        size: 'normal',
        caption:
          "World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",
        loopVideo: !1,
        playVideoThreshold: 0.9,
      },
    })),
    {
      c() {
        ee(t.$$.fragment);
      },
      l(s) {
        te(t.$$.fragment, s);
      },
      m(s, u) {
        se(t, s, u), (o = !0);
      },
      p: Me,
      i(s) {
        o || (N(t.$$.fragment, s), (o = !0));
      },
      o(s) {
        D(t.$$.fragment, s), (o = !1);
      },
      d(s) {
        oe(t, s);
      },
    }
  );
}
function lh(p) {
  let t, o;
  return (
    (t = new On({
      props: {
        ariaDescription: 'Description of your video for screen readers.',
        src: `${bn}/videos/Sequence silent video_4.mp4`,
        size: 'normal',
        caption:
          "World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",
        playVideoThreshold: 0.1,
        controlsColour: 'white',
        controlsOpacity: 1,
        controlsPosition: 'bottom right',
        separateReplayIcon: !0,
        loopVideo: !1,
        hoverToSeeControls: !0,
      },
    })),
    {
      c() {
        ee(t.$$.fragment);
      },
      l(s) {
        te(t.$$.fragment, s);
      },
      m(s, u) {
        se(t, s, u), (o = !0);
      },
      p: Me,
      i(s) {
        o || (N(t.$$.fragment, s), (o = !0));
      },
      o(s) {
        D(t.$$.fragment, s), (o = !1);
      },
      d(s) {
        oe(t, s);
      },
    }
  );
}
function rh(p) {
  let t, o;
  return (
    (t = new On({
      props: {
        ariaDescription: 'Description of your video for screen readers.',
        src: `${bn}/videos/Sequence sound video.mp4`,
        size: 'normal',
        caption:
          "World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",
        controlsOpacity: 1,
        loopVideo: !1,
        muteVideo: !1,
        playVideoWhenInView: !0,
        showControls: !0,
        allowSoundToAutoplay: !0,
      },
    })),
    {
      c() {
        ee(t.$$.fragment);
      },
      l(s) {
        te(t.$$.fragment, s);
      },
      m(s, u) {
        se(t, s, u), (o = !0);
      },
      p: Me,
      i(s) {
        o || (N(t.$$.fragment, s), (o = !0));
      },
      o(s) {
        D(t.$$.fragment, s), (o = !1);
      },
      d(s) {
        oe(t, s);
      },
    }
  );
}
function ih(p) {
  let t,
    o,
    s,
    u,
    f,
    h,
    g,
    d,
    C = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> assets <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span> <span class="token comment">// helper if importing video from 'statics'</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Video <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Video</span> 
  <span class="token attr-name">ariaDescription=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">"Compulsory description of your video for screen readers."</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">src=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>assets<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/videos/myVideo.mp4</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span> // <span class="token attr-name">or</span> <span class="token attr-name">a</span> <span class="token attr-name">URL</span> <span class="token attr-name">to</span> <span class="token attr-name">an</span> <span class="token attr-name">external</span> <span class="token attr-name">video</span>
  <span class="token attr-name">size=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'wide'</span><span class="token punctuation">&#125;</span></span> // <span class="token attr-name">normal,</span> <span class="token attr-name">wide,</span> <span class="token attr-name">wider,</span> <span class="token attr-name">widest</span> <span class="token attr-name">or</span> <span class="token attr-name">fluid</span>
  <span class="token attr-name">caption=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'Optional caption for your video.'</span><span class="token punctuation">&#125;</span></span>
<span class="token punctuation">/></span></span></code>`,
    b,
    O,
    _,
    T,
    R,
    k,
    q,
    E,
    V,
    ke,
    Nt,
    Le,
    Dt,
    Ge,
    Q,
    A,
    Z,
    Fe,
    Se,
    Ye,
    Ke,
    ae,
    _t,
    Je,
    We,
    et,
    de,
    vs,
    gt,
    _s,
    gs,
    kt,
    ks,
    Es,
    Et,
    ws,
    ys,
    bs,
    wt,
    yt,
    Cs,
    Os,
    tt,
    Ee,
    Ps,
    bt,
    Ts,
    P,
    Ct,
    Vs,
    Pn,
    Tn,
    Ss,
    Vn,
    Ja,
    Ot,
    Ed = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Video <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Video</span> 
  <span class="token attr-name">ariaDescription=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">"Compulsory description of your video for screen readers."</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">src=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'path-to-video-or-external-url'</span><span class="token punctuation">&#125;</span></span> 
  <span class="token attr-name">size=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'normal'</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">loopVideo=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">playVideoThreshold=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0.9</span><span class="token punctuation">&#125;</span></span>
<span class="token punctuation">/></span></span></code>`,
    Xa,
    st,
    Qa,
    W,
    Is,
    Sn,
    In,
    Ns,
    Ds,
    Nn,
    Dn,
    ot,
    we,
    Rn,
    Rs,
    An,
    Mn,
    As,
    Ln,
    Gn,
    Ms,
    Wn,
    jn,
    Hn,
    at,
    zn,
    Ls,
    Bn,
    Un,
    qn,
    Ie,
    Gs,
    Fn,
    Yn,
    Ws,
    Kn,
    Jn,
    js,
    Xn,
    Qn,
    Hs,
    Zn,
    xn,
    zs,
    $n,
    el,
    ye,
    nt,
    tl,
    Bs,
    sl,
    ol,
    al,
    ne,
    nl,
    Us,
    ll,
    rl,
    qs,
    il,
    cl,
    Fs,
    pl,
    ul,
    Ys,
    fl,
    dl,
    hl,
    F,
    ml,
    Ks,
    vl,
    _l,
    Js,
    gl,
    kl,
    Xs,
    El,
    wl,
    Qs,
    yl,
    bl,
    Zs,
    Cl,
    Ol,
    Pl,
    lt,
    Tl,
    xs,
    Vl,
    Sl,
    Il,
    $s,
    Nl,
    Za,
    Pt,
    wd = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Video <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Video</span> 
  <span class="token attr-name">ariaDescription=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">"Compulsory description of your video for screen readers."</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">src=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'path-to-video-or-external-url'</span><span class="token punctuation">&#125;</span></span> 
  <span class="token attr-name">size=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'normal'</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">caption=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'Optional caption for your video.'</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">playVideoThreshold=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0.1</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">controlsColour=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'white'</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">controlsOpacity=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">1</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">controlsPosition=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'bottom right'</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">separateReplayIcon=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">loopVideo=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span> // <span class="token attr-name">If</span> <span class="token attr-name">you</span> <span class="token attr-name">don't</span> <span class="token attr-name">set</span> <span class="token attr-name">loopVideo</span> <span class="token attr-name">to</span> <span class="token attr-name">false,</span> <span class="token attr-name">you</span> <span class="token attr-name">won't</span> <span class="token attr-name">see</span> <span class="token attr-name">the</span> <span class="token attr-name">loop</span> <span class="token attr-name">button</span>
  <span class="token attr-name">hoverToSeeControls=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span>
<span class="token punctuation">/></span></span></code>`,
    xa,
    rt,
    $a,
    Y,
    eo,
    Dl,
    Rl,
    Tt,
    Al,
    to,
    Ml,
    Ll,
    Gl,
    so,
    Wl,
    jl,
    it,
    Rt,
    le,
    oo,
    Hl,
    zl,
    ao,
    Bl,
    Ul,
    no,
    ql,
    Fl,
    lo,
    Yl,
    Kl,
    ro,
    Jl,
    Xl,
    Ql,
    At,
    Mt,
    io,
    Zl,
    xl,
    $l,
    Vt,
    er,
    co,
    tr,
    sr,
    or,
    po,
    ar,
    en,
    St,
    yd = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Video <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Video</span> 
  <span class="token attr-name">ariaDescription=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">"Compulsory description of your video for screen readers."</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">src=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'path-to-video-or-external-url'</span><span class="token punctuation">&#125;</span></span> 
  <span class="token attr-name">size=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'normal'</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">controlsOpacity=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">1</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">loopVideo=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">muteVideo=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">allowSoundToAutoplay=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span></span>
<span class="token punctuation">/></span></span></code>`,
    tn,
    ct,
    sn,
    j,
    uo,
    nr,
    lr,
    fo,
    rr,
    ir,
    ho,
    cr,
    pr,
    pt,
    Xe,
    mo,
    ur,
    fr,
    vo,
    dr,
    hr,
    mr,
    Qe,
    _o,
    vr,
    _r,
    go,
    gr,
    kr,
    Er,
    ko,
    wr,
    yr,
    K,
    Lt,
    je,
    Eo,
    br,
    Cr,
    Gt,
    wo,
    Or,
    Pr,
    yo,
    Tr,
    Vr,
    Wt,
    G,
    bo,
    Sr,
    Ir,
    jt,
    Co,
    Nr,
    Dr,
    Oo,
    Rr,
    Po,
    Ar,
    Mr,
    To,
    Lr,
    Gr,
    Vo,
    Wr,
    jr,
    So,
    Hr,
    zr,
    Io,
    Br,
    Ur,
    Ht,
    J,
    No,
    qr,
    Fr,
    zt,
    Do,
    Yr,
    Kr,
    Ro,
    Jr,
    Ao,
    Xr,
    Qr,
    Mo,
    Zr,
    xr,
    Lo,
    $r,
    ei,
    ti,
    Bt,
    he,
    Go,
    si,
    oi,
    Ut,
    Wo,
    ai,
    ni,
    jo,
    li,
    Ho,
    ri,
    ii,
    zo,
    ci,
    pi,
    qt,
    me,
    Bo,
    ui,
    fi,
    Ft,
    Uo,
    di,
    hi,
    qo,
    mi,
    Fo,
    vi,
    _i,
    Yo,
    gi,
    ki,
    Yt,
    B,
    Ko,
    Ei,
    wi,
    Kt,
    Jo,
    yi,
    Xo,
    bi,
    Qo,
    Ci,
    Oi,
    Zo,
    Pi,
    Ti,
    xo,
    Vi,
    Si,
    $o,
    Ii,
    Ni,
    Di,
    M,
    Jt,
    re,
    ea,
    Ri,
    Ai,
    Xt,
    ta,
    Mi,
    Li,
    sa,
    Gi,
    oa,
    Wi,
    ji,
    aa,
    Hi,
    zi,
    Bi,
    Qt,
    be,
    na,
    Ui,
    qi,
    Zt,
    la,
    Fi,
    Yi,
    ra,
    Ki,
    ia,
    Ji,
    Xi,
    Qi,
    xt,
    ve,
    ca,
    Zi,
    xi,
    $t,
    pa,
    $i,
    ec,
    ua,
    tc,
    fa,
    sc,
    oc,
    da,
    ac,
    nc,
    es,
    ie,
    ha,
    lc,
    rc,
    ts,
    ma,
    ic,
    cc,
    va,
    pc,
    _a,
    uc,
    fc,
    ga,
    dc,
    hc,
    mc,
    ss,
    _e,
    ka,
    vc,
    _c,
    os,
    Ea,
    gc,
    wa,
    kc,
    ya,
    Ec,
    wc,
    ba,
    yc,
    bc,
    Cc,
    as,
    ce,
    Ca,
    Oc,
    Pc,
    ns,
    Oa,
    Tc,
    Vc,
    Pa,
    Sc,
    Ta,
    Ic,
    Nc,
    Va,
    Dc,
    Rc,
    Ac,
    ls,
    Ce,
    Sa,
    Mc,
    Lc,
    rs,
    Ia,
    Gc,
    Wc,
    Na,
    jc,
    Da,
    Hc,
    zc,
    Bc,
    is,
    Oe,
    Ra,
    Uc,
    qc,
    cs,
    Aa,
    Fc,
    Yc,
    Ma,
    Kc,
    La,
    Jc,
    Xc,
    Qc,
    ps,
    H,
    Ga,
    Zc,
    xc,
    us,
    Wa,
    $c,
    ep,
    ja,
    tp,
    Ha,
    sp,
    op,
    za,
    ap,
    np,
    Ba,
    lp,
    rp,
    Ua,
    ip,
    cp,
    on;
  return (
    (O = new vn({
      props: { $$slots: { default: [ah] }, $$scope: { ctx: p } },
    })),
    (st = new vn({
      props: { $$slots: { default: [nh] }, $$scope: { ctx: p } },
    })),
    (rt = new vn({
      props: { $$slots: { default: [lh] }, $$scope: { ctx: p } },
    })),
    (ct = new vn({
      props: { $$slots: { default: [rh] }, $$scope: { ctx: p } },
    })),
    {
      c() {
        (t = n('section')),
          (o = n('h2')),
          (s = i(fd)),
          (u = w()),
          (f = n('p')),
          (h = i(dd)),
          (g = w()),
          (d = n('pre')),
          (b = w()),
          ee(O.$$.fragment),
          (_ = w()),
          (T = n('section')),
          (R = n('h4')),
          (k = i('When to play and whether to loop')),
          (q = w()),
          (E = n('p')),
          (V = n('code')),
          (ke = i('playVideoWhenInView')),
          (Nt = i(', ')),
          (Le = n('code')),
          (Dt = i('playVideoThreshold')),
          (Ge = w()),
          (Q = n('ul')),
          (A = n('li')),
          (Z = n('p')),
          (Fe = i('By default, the video will ')),
          (Se = n('strong')),
          (Ye = i(
            'start playing when 50% of the video element\u2019s height is visible on the page'
          )),
          (Ke = i(`.
To control the threshold of visibility at which the video starts playing, add the prop `)),
          (ae = n('code')),
          (_t = i('playVideoThreshold')),
          (Je = i(` and set it to a value between 0 and 1,
where 0 means that the video will start playing as soon as its top enters the viewport, while 1 means it will start when the whole video is in the viewport.`)),
          (We = w()),
          (et = n('li')),
          (de = n('p')),
          (vs = i(
            'If you don\u2019t want the video to play when you scroll to it, but '
          )),
          (gt = n('strong')),
          (_s = i('on page load')),
          (gs = i(', add the prop ')),
          (kt = n('code')),
          (ks = i('playVideoWhenInView={false}')),
          (Es = i('. The default of the prop is ')),
          (Et = n('code')),
          (ws = i('true')),
          (ys = i(`,
which corresponds to the behaviour described above.`)),
          (bs = w()),
          (wt = n('p')),
          (yt = n('code')),
          (Cs = i('loopVideo')),
          (Os = w()),
          (tt = n('ul')),
          (Ee = n('li')),
          (Ps = i('By default, the video will ')),
          (bt = n('strong')),
          (Ts = i('loop')),
          (P = i('. If you don\u2019t want that, add the prop ')),
          (Ct = n('code')),
          (Vs = i('loopVideo={false}')),
          (Pn = i('.')),
          (Tn = w()),
          (Ss = n('p')),
          (Vn = i(
            'Here is an example of what the same video would look like with a visibility threshold of 0.9 and not looping. Scroll down slowly to observe the behaviour.'
          )),
          (Ja = w()),
          (Ot = n('pre')),
          (Xa = w()),
          ee(st.$$.fragment),
          (Qa = w()),
          (W = n('section')),
          (Is = n('h4')),
          (Sn = i('Controls (play / pause)')),
          (In = w()),
          (Ns = n('p')),
          (Ds = n('code')),
          (Nn = i('showControls')),
          (Dn = w()),
          (ot = n('ul')),
          (we = n('li')),
          (Rn =
            i(`By default, the video has a play/pause button, which corresponds to
`)),
          (Rs = n('code')),
          (An = i('showControls={true}')),
          (Mn = i('. If you don\u2019t want these, just set ')),
          (As = n('code')),
          (Ln = i('showControls={false}')),
          (Gn = i(`.
When you do that, the icons themselves will disappear but the functionality of playing and pausing remains and can be done by clicking on the video itself.
If you don\u2019t want to enable any play/pause functionality, add `)),
          (Ms = n('code')),
          (Wn = i('possibleToPlayPause={false}')),
          (jn = i('.')),
          (Hn = w()),
          (at = n('li')),
          (zn = i(
            'If you want to show the controls only when the video is hovered, set '
          )),
          (Ls = n('code')),
          (Bn = i('hoverToSeeControls={true}')),
          (Un = i('.')),
          (qn = w()),
          (Ie = n('p')),
          (Gs = n('code')),
          (Fn = i('controlsColour')),
          (Yn = i(', ')),
          (Ws = n('code')),
          (Kn = i('controlsOpacity')),
          (Jn = i(',  ')),
          (js = n('code')),
          (Xn = i('controlsPosition')),
          (Qn = i(', ')),
          (Hs = n('code')),
          (Zn = i('separateReplayIcon')),
          (xn = w()),
          (zs = n('p')),
          ($n = i(
            'If you do want to leave the controls, you have a couple of options to style them:'
          )),
          (el = w()),
          (ye = n('ul')),
          (nt = n('li')),
          (tl = i('Set ')),
          (Bs = n('code')),
          (sl = i('controlsColour')),
          (ol = i(' to a colour of your choosing.')),
          (al = w()),
          (ne = n('li')),
          (nl = i('Set ')),
          (Us = n('code')),
          (ll = i('controlsOpacity')),
          (rl = i(' to a value between ')),
          (qs = n('code')),
          (il = i('0')),
          (cl = i(' and ')),
          (Fs = n('code')),
          (pl = i('1')),
          (ul = i(' to control the opacity. The default is ')),
          (Ys = n('code')),
          (fl = i('0.5')),
          (dl = i('.')),
          (hl = w()),
          (F = n('li')),
          (ml = i('Change the placement of the controls to one of: ')),
          (Ks = n('code')),
          (vl = i('top right')),
          (_l = i(', ')),
          (Js = n('code')),
          (gl = i('top left')),
          (kl = i(', ')),
          (Xs = n('code')),
          (El = i('bottom right')),
          (wl = i(', ')),
          (Qs = n('code')),
          (yl = i('bottom left')),
          (bl = i(' by setting ')),
          (Zs = n('code')),
          (Cl = i('controlsPosition')),
          (Ol = i('.')),
          (Pl = w()),
          (lt = n('li')),
          (Tl = i(
            'Change the play button to a replay button at the end of the video with the option '
          )),
          (xs = n('code')),
          (Vl = i('separateReplayIcon={true}')),
          (Sl = i('.')),
          (Il = w()),
          ($s = n('p')),
          (Nl = i(
            'Here is an example with bottom right corner white opaque controls, with a replay button, where you have to hover on the video to see the controls.'
          )),
          (Za = w()),
          (Pt = n('pre')),
          (xa = w()),
          ee(rt.$$.fragment),
          ($a = w()),
          (Y = n('section')),
          (eo = n('h4')),
          (Dl = i('Videos with sound')),
          (Rl = w()),
          (Tt = n('p')),
          (Al =
            i(`If you\u2019ve ever had to put sound on a page in recent years,
you\u2019ll know that auto-playing sound is not allowed by browsers. The user will need to interact with the page first, and it will depend on your
particular use case how and when you\u2019d like this to happen. This component provides two options to deal with this.
If you have a video with sound, make sure to add the prop `)),
          (to = n('code')),
          (Ml = i('muteVideo={false}')),
          (Ll = i('.')),
          (Gl = w()),
          (so = n('p')),
          (Wl = i('Then you can either:')),
          (jl = w()),
          (it = n('ul')),
          (Rt = n('li')),
          (le = n('p')),
          (oo = n('code')),
          (Hl = i('allowSoundToAutoplay={false}')),
          (zl =
            i(` (default) : Don\u2019t allow the video to autoplay under any circumstances other than when the user clicks the \u2018play\u2019 on the video. Note that this
works whether or not you have the controls visible, i.e. with `)),
          (ao = n('code')),
          (Bl = i('showControls')),
          (Ul = i(' being ')),
          (no = n('code')),
          (ql = i('true')),
          (Fl = i(' or ')),
          (lo = n('code')),
          (Yl = i('false')),
          (Kl = i(`, as long as you allow
play/pause behaviour with `)),
          (ro = n('code')),
          (Jl = i('possibleToPlayPause={true}')),
          (Xl = i(' (default).')),
          (Ql = w()),
          (At = n('li')),
          (Mt = n('p')),
          (io = n('code')),
          (Zl = i('allowSoundToAutoplay={true}')),
          (xl =
            i(` : Allow the video to autoplay when it comes into view as long as the user has interacted with the page preivously, i.e. they have clicked/tapped
anywhere on the page.`)),
          ($l = w()),
          (Vt = n('p')),
          (er = i('You should keep ')),
          (co = n('code')),
          (tr = i('playVideoWhenInView={true}')),
          (sr =
            i(` (default). There is no option to autoplay video with sound when the user clicks on the page
elsewhere if the video is not in view. In other words, you can\u2019t start playing sound for a video which is not in view with this component.
This is probably not a behaviour you\u2019d want anyway.`)),
          (or = w()),
          (po = n('p')),
          (ar =
            i(`The example below allows for autoplay if the user has interacted with the page before the video comes into view. To see this, reload the page
and go to the top. Click anywhere on the page before scrolling down to the video and you should see it autoplay when it comes into view.`)),
          (en = w()),
          (St = n('pre')),
          (tn = w()),
          ee(ct.$$.fragment),
          (sn = w()),
          (j = n('section')),
          (uo = n('h3')),
          (nr = i('All the props')),
          (lr = w()),
          (fo = n('p')),
          (rr = i(
            'Here is a list of all the props that you can pass to the component for reference. Most of them are discussed above.'
          )),
          (ir = w()),
          (ho = n('h5')),
          (cr = i('Required')),
          (pr = w()),
          (pt = n('ul')),
          (Xe = n('li')),
          (mo = n('strong')),
          (ur = i('src')),
          (fr = i(' (string) - Path to the video relative to the ')),
          (vo = n('code')),
          (dr = i('statics')),
          (hr = i(' folder.')),
          (mr = w()),
          (Qe = n('li')),
          (_o = n('strong')),
          (vr = i('ariaDescription')),
          (_r = i(' (string) and ')),
          (go = n('strong')),
          (gr = i('ariaHidden')),
          (kr = i(
            ' (bool) - Either write a description for screen readers in ariaDescription or set ariaHidden to false.'
          )),
          (Er = w()),
          (ko = n('h5')),
          (wr = i('Optional')),
          (yr = w()),
          (K = n('ul')),
          (Lt = n('li')),
          (je = n('p')),
          (Eo = n('strong')),
          (br = i('caption')),
          (Cr = i(' (string) - default ')),
          (Gt = n('span')),
          (wo = n('strong')),
          (Or = i('\u201D \u201D (none)')),
          (Pr = w()),
          (yo = n('span')),
          (Tr = i(' options: Write a caption to go with the video.')),
          (Vr = w()),
          (Wt = n('li')),
          (G = n('p')),
          (bo = n('strong')),
          (Sr = i('size')),
          (Ir = i(' (string) - default ')),
          (jt = n('span')),
          (Co = n('strong')),
          (Nr = i('\u2018normal\u2019')),
          (Dr = w()),
          (Oo = n('span')),
          (Rr = i(' options: ')),
          (Po = n('em')),
          (Ar = i('\u2018normal\u2019')),
          (Mr = i(', ')),
          (To = n('em')),
          (Lr = i('\u2018wide\u2019')),
          (Gr = i(', ')),
          (Vo = n('em')),
          (Wr = i('\u2018wider\u2019')),
          (jr = i(', ')),
          (So = n('em')),
          (Hr = i('\u2018widest\u2019')),
          (zr = i(', ')),
          (Io = n('em')),
          (Br = i('\u2018fluid\u2019')),
          (Ur = w()),
          (Ht = n('li')),
          (J = n('p')),
          (No = n('strong')),
          (qr = i('preloadVideo')),
          (Fr = i(' (string) -  default ')),
          (zt = n('span')),
          (Do = n('strong')),
          (Yr = i('\u2018auto\u2019')),
          (Kr = w()),
          (Ro = n('span')),
          (Jr = i(`
options: `)),
          (Ao = n('em')),
          (Xr = i('\u2018none\u2019')),
          (Qr = i(` (Don\u2019t preload the video on page load),
`)),
          (Mo = n('em')),
          (Zr = i('\u2018auto\u2019')),
          (xr = i(` (Preload the video),
`)),
          (Lo = n('em')),
          ($r = i('\u2018metadata\u2019')),
          (ei = i(' (Only preload the metadata)')),
          (ti = w()),
          (Bt = n('li')),
          (he = n('p')),
          (Go = n('strong')),
          (si = i('loopVideo')),
          (oi = i(' (bool) - default ')),
          (Ut = n('span')),
          (Wo = n('strong')),
          (ai = i('true')),
          (ni = w()),
          (jo = n('span')),
          (li = i(' options: ')),
          (Ho = n('em')),
          (ri = i('true')),
          (ii = i(', ')),
          (zo = n('em')),
          (ci = i('false')),
          (pi = w()),
          (qt = n('li')),
          (me = n('p')),
          (Bo = n('strong')),
          (ui = i('muteVideo')),
          (fi = i(' (bool) - default ')),
          (Ft = n('span')),
          (Uo = n('strong')),
          (di = i('true')),
          (hi = w()),
          (qo = n('span')),
          (mi = i(' options: ')),
          (Fo = n('em')),
          (vi = i('true')),
          (_i = i(', ')),
          (Yo = n('em')),
          (gi = i('false')),
          (ki = w()),
          (Yt = n('li')),
          (B = n('p')),
          (Ko = n('strong')),
          (Ei = i('allowSoundToAutoplay')),
          (wi = i(' (bool) - default  ')),
          (Kt = n('span')),
          (Jo = n('strong')),
          (yi = i('false')),
          (Xo = n('span')),
          (bi = i(' options: ')),
          (Qo = n('em')),
          (Ci = i('true')),
          (Oi = i(', ')),
          (Zo = n('em')),
          (Pi = i('false')),
          (Ti = i(`.
For video with sound, whether video should be allowed to autoplay if the user has previously interacted with DOM. You need to set `)),
          (xo = n('code')),
          (Vi = i('muteVideo')),
          (Si = i(' to ')),
          ($o = n('code')),
          (Ii = i('true')),
          (Ni = i(`
for this to work.`)),
          (Di = w()),
          (M = n('ul')),
          (Jt = n('li')),
          (re = n('p')),
          (ea = n('strong')),
          (Ri = i('playVideoWhenInView')),
          (Ai = i(' (bool) - default ')),
          (Xt = n('span')),
          (ta = n('strong')),
          (Mi = i('true')),
          (Li = w()),
          (sa = n('span')),
          (Gi = i(`
options: `)),
          (oa = n('em')),
          (Wi = i('true')),
          (ji = i(' (Only start playing the video when it comes into view), ')),
          (aa = n('em')),
          (Hi = i('false')),
          (zi = i(' (Start playing as soon as the page and video load)')),
          (Bi = w()),
          (Qt = n('li')),
          (be = n('p')),
          (na = n('strong')),
          (Ui = i('playVideoThreshold')),
          (qi = i(' (float) - default ')),
          (Zt = n('span')),
          (la = n('strong')),
          (Fi = i('0.5')),
          (Yi = w()),
          (ra = n('span')),
          (Ki = i(' options: ')),
          (ia = n('em')),
          (Ji = i('float between 0 and 1')),
          (Xi = i(`.
How much of the video should be into view to start playing when playVideoWhenInView is true.`)),
          (Qi = w()),
          (xt = n('li')),
          (ve = n('p')),
          (ca = n('strong')),
          (Zi = i('possibleToPlayPause')),
          (xi = i(' (bool) - default ')),
          ($t = n('span')),
          (pa = n('strong')),
          ($i = i('true')),
          (ec = w()),
          (ua = n('span')),
          (tc = i(' options: ')),
          (fa = n('em')),
          (sc = i('true')),
          (oc = i(', ')),
          (da = n('em')),
          (ac = i('false')),
          (nc = w()),
          (es = n('li')),
          (ie = n('p')),
          (ha = n('strong')),
          (lc = i('showControls')),
          (rc = i(' (bool) - default ')),
          (ts = n('span')),
          (ma = n('strong')),
          (ic = i('true')),
          (cc = w()),
          (va = n('span')),
          (pc = i(' options: ')),
          (_a = n('em')),
          (uc = i('true')),
          (fc = i(', ')),
          (ga = n('em')),
          (dc = i('false')),
          (hc = i(`.
Whether to show the play/pause controls or not.`)),
          (mc = w()),
          (ss = n('li')),
          (_e = n('p')),
          (ka = n('strong')),
          (vc = i('hoverToSeeControls')),
          (_c = i(' (bool) - default ')),
          (os = n('span')),
          (Ea = n('strong')),
          (gc = i('false')),
          (wa = n('span')),
          (kc = i(' options: ')),
          (ya = n('em')),
          (Ec = i('true')),
          (wc = i(', ')),
          (ba = n('em')),
          (yc = i('false')),
          (bc = i(`.
Whether you need to hover over the video to see the controls.`)),
          (Cc = w()),
          (as = n('li')),
          (ce = n('p')),
          (Ca = n('strong')),
          (Oc = i('separateReplayIcon')),
          (Pc = i(' (bool) - default ')),
          (ns = n('span')),
          (Oa = n('strong')),
          (Tc = i('false')),
          (Vc = w()),
          (Pa = n('span')),
          (Sc = i(' options: ')),
          (Ta = n('em')),
          (Ic = i('true')),
          (Nc = i(', ')),
          (Va = n('em')),
          (Dc = i('false')),
          (Rc = i(`.
Whether to use a separate replay icon or use the play icon for replay as well.`)),
          (Ac = w()),
          (ls = n('li')),
          (Ce = n('p')),
          (Sa = n('strong')),
          (Mc = i('controlsColour')),
          (Lc = i(' (colour string) - default ')),
          (rs = n('span')),
          (Ia = n('strong')),
          (Gc = i('\u2018#333\u2019')),
          (Wc = w()),
          (Na = n('span')),
          (jc = i(' options: ')),
          (Da = n('em')),
          (Hc = i('any valid colour string')),
          (zc = i(`.
Controls the colour of the play/pause buttons.`)),
          (Bc = w()),
          (is = n('li')),
          (Oe = n('p')),
          (Ra = n('strong')),
          (Uc = i('controlsOpacity')),
          (qc = i(' (float) - default ')),
          (cs = n('span')),
          (Aa = n('strong')),
          (Fc = i('0.5')),
          (Yc = w()),
          (Ma = n('span')),
          (Kc = i(' options: ')),
          (La = n('em')),
          (Jc = i('float between 0 and 1')),
          (Xc = i(`.
Controls the opacity of the play/pause buttons.`)),
          (Qc = w()),
          (ps = n('li')),
          (H = n('p')),
          (Ga = n('strong')),
          (Zc = i('controlsPosition')),
          (xc = i(' (string) - default ')),
          (us = n('span')),
          (Wa = n('strong')),
          ($c = i('\u2018top left\u2019')),
          (ep = w()),
          (ja = n('span')),
          (tp = i(`
options: `)),
          (Ha = n('em')),
          (sp = i('\u2018top right\u2019')),
          (op = i(', ')),
          (za = n('em')),
          (ap = i('\u2018top left\u2019')),
          (np = i(', ')),
          (Ba = n('em')),
          (lp = i('\u2018bottom right\u2019')),
          (rp = i(', ')),
          (Ua = n('em')),
          (ip = i('\u2018bottom left\u2019')),
          (cp = i(`.
Controls the position of the play/pause buttons.`)),
          this.h();
      },
      l(v) {
        t = l(v, 'SECTION', {});
        var S = r(t);
        o = l(S, 'H2', {});
        var qa = r(o);
        (s = c(qa, fd)), qa.forEach(a), (u = y(S)), (f = l(S, 'P', {}));
        var Fa = r(f);
        (h = c(Fa, dd)),
          Fa.forEach(a),
          S.forEach(a),
          (g = y(v)),
          (d = l(v, 'PRE', { class: !0 }));
        var an = r(d);
        an.forEach(a),
          (b = y(v)),
          te(O.$$.fragment, v),
          (_ = y(v)),
          (T = l(v, 'SECTION', {}));
        var x = r(T);
        R = l(x, 'H4', {});
        var fp = r(R);
        (k = c(fp, 'When to play and whether to loop')),
          fp.forEach(a),
          (q = y(x)),
          (E = l(x, 'P', {}));
        var nn = r(E);
        V = l(nn, 'CODE', {});
        var dp = r(V);
        (ke = c(dp, 'playVideoWhenInView')),
          dp.forEach(a),
          (Nt = c(nn, ', ')),
          (Le = l(nn, 'CODE', {}));
        var hp = r(Le);
        (Dt = c(hp, 'playVideoThreshold')),
          hp.forEach(a),
          nn.forEach(a),
          (Ge = y(x)),
          (Q = l(x, 'UL', { class: !0 }));
        var ln = r(Q);
        A = l(ln, 'LI', { class: !0 });
        var mp = r(A);
        Z = l(mp, 'P', {});
        var fs = r(Z);
        (Fe = c(fs, 'By default, the video will ')), (Se = l(fs, 'STRONG', {}));
        var vp = r(Se);
        (Ye = c(
          vp,
          'start playing when 50% of the video element\u2019s height is visible on the page'
        )),
          vp.forEach(a),
          (Ke = c(
            fs,
            `.
To control the threshold of visibility at which the video starts playing, add the prop `
          )),
          (ae = l(fs, 'CODE', {}));
        var _p = r(ae);
        (_t = c(_p, 'playVideoThreshold')),
          _p.forEach(a),
          (Je = c(
            fs,
            ` and set it to a value between 0 and 1,
where 0 means that the video will start playing as soon as its top enters the viewport, while 1 means it will start when the whole video is in the viewport.`
          )),
          fs.forEach(a),
          mp.forEach(a),
          (We = y(ln)),
          (et = l(ln, 'LI', { class: !0 }));
        var gp = r(et);
        de = l(gp, 'P', {});
        var ut = r(de);
        (vs = c(
          ut,
          'If you don\u2019t want the video to play when you scroll to it, but '
        )),
          (gt = l(ut, 'STRONG', {}));
        var kp = r(gt);
        (_s = c(kp, 'on page load')),
          kp.forEach(a),
          (gs = c(ut, ', add the prop ')),
          (kt = l(ut, 'CODE', {}));
        var Ep = r(kt);
        (ks = c(Ep, 'playVideoWhenInView={false}')),
          Ep.forEach(a),
          (Es = c(ut, '. The default of the prop is ')),
          (Et = l(ut, 'CODE', {}));
        var wp = r(Et);
        (ws = c(wp, 'true')),
          wp.forEach(a),
          (ys = c(
            ut,
            `,
which corresponds to the behaviour described above.`
          )),
          ut.forEach(a),
          gp.forEach(a),
          ln.forEach(a),
          (bs = y(x)),
          (wt = l(x, 'P', {}));
        var yp = r(wt);
        yt = l(yp, 'CODE', {});
        var bp = r(yt);
        (Cs = c(bp, 'loopVideo')),
          bp.forEach(a),
          yp.forEach(a),
          (Os = y(x)),
          (tt = l(x, 'UL', { class: !0 }));
        var Cp = r(tt);
        Ee = l(Cp, 'LI', { class: !0 });
        var ds = r(Ee);
        (Ps = c(ds, 'By default, the video will ')), (bt = l(ds, 'STRONG', {}));
        var Op = r(bt);
        (Ts = c(Op, 'loop')),
          Op.forEach(a),
          (P = c(ds, '. If you don\u2019t want that, add the prop ')),
          (Ct = l(ds, 'CODE', {}));
        var Pp = r(Ct);
        (Vs = c(Pp, 'loopVideo={false}')),
          Pp.forEach(a),
          (Pn = c(ds, '.')),
          ds.forEach(a),
          Cp.forEach(a),
          (Tn = y(x)),
          (Ss = l(x, 'P', {}));
        var Tp = r(Ss);
        (Vn = c(
          Tp,
          'Here is an example of what the same video would look like with a visibility threshold of 0.9 and not looping. Scroll down slowly to observe the behaviour.'
        )),
          Tp.forEach(a),
          x.forEach(a),
          (Ja = y(v)),
          (Ot = l(v, 'PRE', { class: !0 }));
        var bd = r(Ot);
        bd.forEach(a),
          (Xa = y(v)),
          te(st.$$.fragment, v),
          (Qa = y(v)),
          (W = l(v, 'SECTION', {}));
        var pe = r(W);
        Is = l(pe, 'H4', {});
        var Vp = r(Is);
        (Sn = c(Vp, 'Controls (play / pause)')),
          Vp.forEach(a),
          (In = y(pe)),
          (Ns = l(pe, 'P', {}));
        var Sp = r(Ns);
        Ds = l(Sp, 'CODE', {});
        var Ip = r(Ds);
        (Nn = c(Ip, 'showControls')),
          Ip.forEach(a),
          Sp.forEach(a),
          (Dn = y(pe)),
          (ot = l(pe, 'UL', { class: !0 }));
        var rn = r(ot);
        we = l(rn, 'LI', { class: !0 });
        var ft = r(we);
        (Rn = c(
          ft,
          `By default, the video has a play/pause button, which corresponds to
`
        )),
          (Rs = l(ft, 'CODE', {}));
        var Np = r(Rs);
        (An = c(Np, 'showControls={true}')),
          Np.forEach(a),
          (Mn = c(ft, '. If you don\u2019t want these, just set ')),
          (As = l(ft, 'CODE', {}));
        var Dp = r(As);
        (Ln = c(Dp, 'showControls={false}')),
          Dp.forEach(a),
          (Gn = c(
            ft,
            `.
When you do that, the icons themselves will disappear but the functionality of playing and pausing remains and can be done by clicking on the video itself.
If you don\u2019t want to enable any play/pause functionality, add `
          )),
          (Ms = l(ft, 'CODE', {}));
        var Rp = r(Ms);
        (Wn = c(Rp, 'possibleToPlayPause={false}')),
          Rp.forEach(a),
          (jn = c(ft, '.')),
          ft.forEach(a),
          (Hn = y(rn)),
          (at = l(rn, 'LI', { class: !0 }));
        var cn = r(at);
        (zn = c(
          cn,
          'If you want to show the controls only when the video is hovered, set '
        )),
          (Ls = l(cn, 'CODE', {}));
        var Ap = r(Ls);
        (Bn = c(Ap, 'hoverToSeeControls={true}')),
          Ap.forEach(a),
          (Un = c(cn, '.')),
          cn.forEach(a),
          rn.forEach(a),
          (qn = y(pe)),
          (Ie = l(pe, 'P', {}));
        var dt = r(Ie);
        Gs = l(dt, 'CODE', {});
        var Mp = r(Gs);
        (Fn = c(Mp, 'controlsColour')),
          Mp.forEach(a),
          (Yn = c(dt, ', ')),
          (Ws = l(dt, 'CODE', {}));
        var Lp = r(Ws);
        (Kn = c(Lp, 'controlsOpacity')),
          Lp.forEach(a),
          (Jn = c(dt, ',  ')),
          (js = l(dt, 'CODE', {}));
        var Gp = r(js);
        (Xn = c(Gp, 'controlsPosition')),
          Gp.forEach(a),
          (Qn = c(dt, ', ')),
          (Hs = l(dt, 'CODE', {}));
        var Wp = r(Hs);
        (Zn = c(Wp, 'separateReplayIcon')),
          Wp.forEach(a),
          dt.forEach(a),
          (xn = y(pe)),
          (zs = l(pe, 'P', {}));
        var jp = r(zs);
        ($n = c(
          jp,
          'If you do want to leave the controls, you have a couple of options to style them:'
        )),
          jp.forEach(a),
          (el = y(pe)),
          (ye = l(pe, 'UL', { class: !0 }));
        var ht = r(ye);
        nt = l(ht, 'LI', { class: !0 });
        var pn = r(nt);
        (tl = c(pn, 'Set ')), (Bs = l(pn, 'CODE', {}));
        var Hp = r(Bs);
        (sl = c(Hp, 'controlsColour')),
          Hp.forEach(a),
          (ol = c(pn, ' to a colour of your choosing.')),
          pn.forEach(a),
          (al = y(ht)),
          (ne = l(ht, 'LI', { class: !0 }));
        var He = r(ne);
        (nl = c(He, 'Set ')), (Us = l(He, 'CODE', {}));
        var zp = r(Us);
        (ll = c(zp, 'controlsOpacity')),
          zp.forEach(a),
          (rl = c(He, ' to a value between ')),
          (qs = l(He, 'CODE', {}));
        var Bp = r(qs);
        (il = c(Bp, '0')),
          Bp.forEach(a),
          (cl = c(He, ' and ')),
          (Fs = l(He, 'CODE', {}));
        var Up = r(Fs);
        (pl = c(Up, '1')),
          Up.forEach(a),
          (ul = c(He, ' to control the opacity. The default is ')),
          (Ys = l(He, 'CODE', {}));
        var qp = r(Ys);
        (fl = c(qp, '0.5')),
          qp.forEach(a),
          (dl = c(He, '.')),
          He.forEach(a),
          (hl = y(ht)),
          (F = l(ht, 'LI', { class: !0 }));
        var Pe = r(F);
        (ml = c(Pe, 'Change the placement of the controls to one of: ')),
          (Ks = l(Pe, 'CODE', {}));
        var Fp = r(Ks);
        (vl = c(Fp, 'top right')),
          Fp.forEach(a),
          (_l = c(Pe, ', ')),
          (Js = l(Pe, 'CODE', {}));
        var Yp = r(Js);
        (gl = c(Yp, 'top left')),
          Yp.forEach(a),
          (kl = c(Pe, ', ')),
          (Xs = l(Pe, 'CODE', {}));
        var Kp = r(Xs);
        (El = c(Kp, 'bottom right')),
          Kp.forEach(a),
          (wl = c(Pe, ', ')),
          (Qs = l(Pe, 'CODE', {}));
        var Jp = r(Qs);
        (yl = c(Jp, 'bottom left')),
          Jp.forEach(a),
          (bl = c(Pe, ' by setting ')),
          (Zs = l(Pe, 'CODE', {}));
        var Xp = r(Zs);
        (Cl = c(Xp, 'controlsPosition')),
          Xp.forEach(a),
          (Ol = c(Pe, '.')),
          Pe.forEach(a),
          (Pl = y(ht)),
          (lt = l(ht, 'LI', { class: !0 }));
        var un = r(lt);
        (Tl = c(
          un,
          'Change the play button to a replay button at the end of the video with the option '
        )),
          (xs = l(un, 'CODE', {}));
        var Qp = r(xs);
        (Vl = c(Qp, 'separateReplayIcon={true}')),
          Qp.forEach(a),
          (Sl = c(un, '.')),
          un.forEach(a),
          ht.forEach(a),
          (Il = y(pe)),
          ($s = l(pe, 'P', {}));
        var Zp = r($s);
        (Nl = c(
          Zp,
          'Here is an example with bottom right corner white opaque controls, with a replay button, where you have to hover on the video to see the controls.'
        )),
          Zp.forEach(a),
          pe.forEach(a),
          (Za = y(v)),
          (Pt = l(v, 'PRE', { class: !0 }));
        var Cd = r(Pt);
        Cd.forEach(a),
          (xa = y(v)),
          te(rt.$$.fragment, v),
          ($a = y(v)),
          (Y = l(v, 'SECTION', {}));
        var Te = r(Y);
        eo = l(Te, 'H4', {});
        var xp = r(eo);
        (Dl = c(xp, 'Videos with sound')),
          xp.forEach(a),
          (Rl = y(Te)),
          (Tt = l(Te, 'P', {}));
        var fn = r(Tt);
        (Al = c(
          fn,
          `If you\u2019ve ever had to put sound on a page in recent years,
you\u2019ll know that auto-playing sound is not allowed by browsers. The user will need to interact with the page first, and it will depend on your
particular use case how and when you\u2019d like this to happen. This component provides two options to deal with this.
If you have a video with sound, make sure to add the prop `
        )),
          (to = l(fn, 'CODE', {}));
        var $p = r(to);
        (Ml = c($p, 'muteVideo={false}')),
          $p.forEach(a),
          (Ll = c(fn, '.')),
          fn.forEach(a),
          (Gl = y(Te)),
          (so = l(Te, 'P', {}));
        var eu = r(so);
        (Wl = c(eu, 'Then you can either:')),
          eu.forEach(a),
          (jl = y(Te)),
          (it = l(Te, 'UL', { class: !0 }));
        var dn = r(it);
        Rt = l(dn, 'LI', { class: !0 });
        var tu = r(Rt);
        le = l(tu, 'P', {});
        var Ne = r(le);
        oo = l(Ne, 'CODE', {});
        var su = r(oo);
        (Hl = c(su, 'allowSoundToAutoplay={false}')),
          su.forEach(a),
          (zl = c(
            Ne,
            ` (default) : Don\u2019t allow the video to autoplay under any circumstances other than when the user clicks the \u2018play\u2019 on the video. Note that this
works whether or not you have the controls visible, i.e. with `
          )),
          (ao = l(Ne, 'CODE', {}));
        var ou = r(ao);
        (Bl = c(ou, 'showControls')),
          ou.forEach(a),
          (Ul = c(Ne, ' being ')),
          (no = l(Ne, 'CODE', {}));
        var au = r(no);
        (ql = c(au, 'true')),
          au.forEach(a),
          (Fl = c(Ne, ' or ')),
          (lo = l(Ne, 'CODE', {}));
        var nu = r(lo);
        (Yl = c(nu, 'false')),
          nu.forEach(a),
          (Kl = c(
            Ne,
            `, as long as you allow
play/pause behaviour with `
          )),
          (ro = l(Ne, 'CODE', {}));
        var lu = r(ro);
        (Jl = c(lu, 'possibleToPlayPause={true}')),
          lu.forEach(a),
          (Xl = c(Ne, ' (default).')),
          Ne.forEach(a),
          tu.forEach(a),
          (Ql = y(dn)),
          (At = l(dn, 'LI', { class: !0 }));
        var ru = r(At);
        Mt = l(ru, 'P', {});
        var pp = r(Mt);
        io = l(pp, 'CODE', {});
        var iu = r(io);
        (Zl = c(iu, 'allowSoundToAutoplay={true}')),
          iu.forEach(a),
          (xl = c(
            pp,
            ` : Allow the video to autoplay when it comes into view as long as the user has interacted with the page preivously, i.e. they have clicked/tapped
anywhere on the page.`
          )),
          pp.forEach(a),
          ru.forEach(a),
          dn.forEach(a),
          ($l = y(Te)),
          (Vt = l(Te, 'P', {}));
        var hn = r(Vt);
        (er = c(hn, 'You should keep ')), (co = l(hn, 'CODE', {}));
        var cu = r(co);
        (tr = c(cu, 'playVideoWhenInView={true}')),
          cu.forEach(a),
          (sr = c(
            hn,
            ` (default). There is no option to autoplay video with sound when the user clicks on the page
elsewhere if the video is not in view. In other words, you can\u2019t start playing sound for a video which is not in view with this component.
This is probably not a behaviour you\u2019d want anyway.`
          )),
          hn.forEach(a),
          (or = y(Te)),
          (po = l(Te, 'P', {}));
        var pu = r(po);
        (ar = c(
          pu,
          `The example below allows for autoplay if the user has interacted with the page before the video comes into view. To see this, reload the page
and go to the top. Click anywhere on the page before scrolling down to the video and you should see it autoplay when it comes into view.`
        )),
          pu.forEach(a),
          Te.forEach(a),
          (en = y(v)),
          (St = l(v, 'PRE', { class: !0 }));
        var Od = r(St);
        Od.forEach(a),
          (tn = y(v)),
          te(ct.$$.fragment, v),
          (sn = y(v)),
          (j = l(v, 'SECTION', {}));
        var ue = r(j);
        uo = l(ue, 'H3', {});
        var uu = r(uo);
        (nr = c(uu, 'All the props')),
          uu.forEach(a),
          (lr = y(ue)),
          (fo = l(ue, 'P', {}));
        var fu = r(fo);
        (rr = c(
          fu,
          'Here is a list of all the props that you can pass to the component for reference. Most of them are discussed above.'
        )),
          fu.forEach(a),
          (ir = y(ue)),
          (ho = l(ue, 'H5', {}));
        var du = r(ho);
        (cr = c(du, 'Required')),
          du.forEach(a),
          (pr = y(ue)),
          (pt = l(ue, 'UL', { class: !0 }));
        var mn = r(pt);
        Xe = l(mn, 'LI', { class: !0 });
        var Ya = r(Xe);
        mo = l(Ya, 'STRONG', {});
        var hu = r(mo);
        (ur = c(hu, 'src')),
          hu.forEach(a),
          (fr = c(Ya, ' (string) - Path to the video relative to the ')),
          (vo = l(Ya, 'CODE', {}));
        var mu = r(vo);
        (dr = c(mu, 'statics')),
          mu.forEach(a),
          (hr = c(Ya, ' folder.')),
          Ya.forEach(a),
          (mr = y(mn)),
          (Qe = l(mn, 'LI', { class: !0 }));
        var Ka = r(Qe);
        _o = l(Ka, 'STRONG', {});
        var vu = r(_o);
        (vr = c(vu, 'ariaDescription')),
          vu.forEach(a),
          (_r = c(Ka, ' (string) and ')),
          (go = l(Ka, 'STRONG', {}));
        var _u = r(go);
        (gr = c(_u, 'ariaHidden')),
          _u.forEach(a),
          (kr = c(
            Ka,
            ' (bool) - Either write a description for screen readers in ariaDescription or set ariaHidden to false.'
          )),
          Ka.forEach(a),
          mn.forEach(a),
          (Er = y(ue)),
          (ko = l(ue, 'H5', {}));
        var gu = r(ko);
        (wr = c(gu, 'Optional')),
          gu.forEach(a),
          (yr = y(ue)),
          (K = l(ue, 'UL', { class: !0 }));
        var Ve = r(K);
        Lt = l(Ve, 'LI', { class: !0 });
        var ku = r(Lt);
        je = l(ku, 'P', {});
        var It = r(je);
        Eo = l(It, 'STRONG', {});
        var Eu = r(Eo);
        (br = c(Eu, 'caption')),
          Eu.forEach(a),
          (Cr = c(It, ' (string) - default ')),
          (Gt = l(It, 'SPAN', { class: !0 }));
        var wu = r(Gt);
        wo = l(wu, 'STRONG', {});
        var yu = r(wo);
        (Or = c(yu, '\u201D \u201D (none)')),
          yu.forEach(a),
          wu.forEach(a),
          (Pr = y(It)),
          (yo = l(It, 'SPAN', { class: !0 })),
          r(yo).forEach(a),
          (Tr = c(It, ' options: Write a caption to go with the video.')),
          It.forEach(a),
          ku.forEach(a),
          (Vr = y(Ve)),
          (Wt = l(Ve, 'LI', { class: !0 }));
        var bu = r(Wt);
        G = l(bu, 'P', {});
        var X = r(G);
        bo = l(X, 'STRONG', {});
        var Cu = r(bo);
        (Sr = c(Cu, 'size')),
          Cu.forEach(a),
          (Ir = c(X, ' (string) - default ')),
          (jt = l(X, 'SPAN', { class: !0 }));
        var Ou = r(jt);
        Co = l(Ou, 'STRONG', {});
        var Pu = r(Co);
        (Nr = c(Pu, '\u2018normal\u2019')),
          Pu.forEach(a),
          Ou.forEach(a),
          (Dr = y(X)),
          (Oo = l(X, 'SPAN', { class: !0 })),
          r(Oo).forEach(a),
          (Rr = c(X, ' options: ')),
          (Po = l(X, 'EM', {}));
        var Tu = r(Po);
        (Ar = c(Tu, '\u2018normal\u2019')),
          Tu.forEach(a),
          (Mr = c(X, ', ')),
          (To = l(X, 'EM', {}));
        var Vu = r(To);
        (Lr = c(Vu, '\u2018wide\u2019')),
          Vu.forEach(a),
          (Gr = c(X, ', ')),
          (Vo = l(X, 'EM', {}));
        var Su = r(Vo);
        (Wr = c(Su, '\u2018wider\u2019')),
          Su.forEach(a),
          (jr = c(X, ', ')),
          (So = l(X, 'EM', {}));
        var Iu = r(So);
        (Hr = c(Iu, '\u2018widest\u2019')),
          Iu.forEach(a),
          (zr = c(X, ', ')),
          (Io = l(X, 'EM', {}));
        var Nu = r(Io);
        (Br = c(Nu, '\u2018fluid\u2019')),
          Nu.forEach(a),
          X.forEach(a),
          bu.forEach(a),
          (Ur = y(Ve)),
          (Ht = l(Ve, 'LI', { class: !0 }));
        var Du = r(Ht);
        J = l(Du, 'P', {});
        var ge = r(J);
        No = l(ge, 'STRONG', {});
        var Ru = r(No);
        (qr = c(Ru, 'preloadVideo')),
          Ru.forEach(a),
          (Fr = c(ge, ' (string) -  default ')),
          (zt = l(ge, 'SPAN', { class: !0 }));
        var Au = r(zt);
        Do = l(Au, 'STRONG', {});
        var Mu = r(Do);
        (Yr = c(Mu, '\u2018auto\u2019')),
          Mu.forEach(a),
          Au.forEach(a),
          (Kr = y(ge)),
          (Ro = l(ge, 'SPAN', { class: !0 })),
          r(Ro).forEach(a),
          (Jr = c(
            ge,
            `
options: `
          )),
          (Ao = l(ge, 'EM', {}));
        var Lu = r(Ao);
        (Xr = c(Lu, '\u2018none\u2019')),
          Lu.forEach(a),
          (Qr = c(
            ge,
            ` (Don\u2019t preload the video on page load),
`
          )),
          (Mo = l(ge, 'EM', {}));
        var Gu = r(Mo);
        (Zr = c(Gu, '\u2018auto\u2019')),
          Gu.forEach(a),
          (xr = c(
            ge,
            ` (Preload the video),
`
          )),
          (Lo = l(ge, 'EM', {}));
        var Wu = r(Lo);
        ($r = c(Wu, '\u2018metadata\u2019')),
          Wu.forEach(a),
          (ei = c(ge, ' (Only preload the metadata)')),
          ge.forEach(a),
          Du.forEach(a),
          (ti = y(Ve)),
          (Bt = l(Ve, 'LI', { class: !0 }));
        var ju = r(Bt);
        he = l(ju, 'P', {});
        var ze = r(he);
        Go = l(ze, 'STRONG', {});
        var Hu = r(Go);
        (si = c(Hu, 'loopVideo')),
          Hu.forEach(a),
          (oi = c(ze, ' (bool) - default ')),
          (Ut = l(ze, 'SPAN', { class: !0 }));
        var zu = r(Ut);
        Wo = l(zu, 'STRONG', {});
        var Bu = r(Wo);
        (ai = c(Bu, 'true')),
          Bu.forEach(a),
          zu.forEach(a),
          (ni = y(ze)),
          (jo = l(ze, 'SPAN', { class: !0 })),
          r(jo).forEach(a),
          (li = c(ze, ' options: ')),
          (Ho = l(ze, 'EM', {}));
        var Uu = r(Ho);
        (ri = c(Uu, 'true')),
          Uu.forEach(a),
          (ii = c(ze, ', ')),
          (zo = l(ze, 'EM', {}));
        var qu = r(zo);
        (ci = c(qu, 'false')),
          qu.forEach(a),
          ze.forEach(a),
          ju.forEach(a),
          (pi = y(Ve)),
          (qt = l(Ve, 'LI', { class: !0 }));
        var Fu = r(qt);
        me = l(Fu, 'P', {});
        var Be = r(me);
        Bo = l(Be, 'STRONG', {});
        var Yu = r(Bo);
        (ui = c(Yu, 'muteVideo')),
          Yu.forEach(a),
          (fi = c(Be, ' (bool) - default ')),
          (Ft = l(Be, 'SPAN', { class: !0 }));
        var Ku = r(Ft);
        Uo = l(Ku, 'STRONG', {});
        var Ju = r(Uo);
        (di = c(Ju, 'true')),
          Ju.forEach(a),
          Ku.forEach(a),
          (hi = y(Be)),
          (qo = l(Be, 'SPAN', { class: !0 })),
          r(qo).forEach(a),
          (mi = c(Be, ' options: ')),
          (Fo = l(Be, 'EM', {}));
        var Xu = r(Fo);
        (vi = c(Xu, 'true')),
          Xu.forEach(a),
          (_i = c(Be, ', ')),
          (Yo = l(Be, 'EM', {}));
        var Qu = r(Yo);
        (gi = c(Qu, 'false')),
          Qu.forEach(a),
          Be.forEach(a),
          Fu.forEach(a),
          (ki = y(Ve)),
          (Yt = l(Ve, 'LI', { class: !0 }));
        var Zu = r(Yt);
        B = l(Zu, 'P', {});
        var fe = r(B);
        Ko = l(fe, 'STRONG', {});
        var xu = r(Ko);
        (Ei = c(xu, 'allowSoundToAutoplay')),
          xu.forEach(a),
          (wi = c(fe, ' (bool) - default  ')),
          (Kt = l(fe, 'SPAN', { class: !0 }));
        var $u = r(Kt);
        Jo = l($u, 'STRONG', {});
        var ef = r(Jo);
        (yi = c(ef, 'false')),
          ef.forEach(a),
          $u.forEach(a),
          (Xo = l(fe, 'SPAN', { class: !0 })),
          r(Xo).forEach(a),
          (bi = c(fe, ' options: ')),
          (Qo = l(fe, 'EM', {}));
        var tf = r(Qo);
        (Ci = c(tf, 'true')),
          tf.forEach(a),
          (Oi = c(fe, ', ')),
          (Zo = l(fe, 'EM', {}));
        var sf = r(Zo);
        (Pi = c(sf, 'false')),
          sf.forEach(a),
          (Ti = c(
            fe,
            `.
For video with sound, whether video should be allowed to autoplay if the user has previously interacted with DOM. You need to set `
          )),
          (xo = l(fe, 'CODE', {}));
        var of = r(xo);
        (Vi = c(of, 'muteVideo')),
          of.forEach(a),
          (Si = c(fe, ' to ')),
          ($o = l(fe, 'CODE', {}));
        var af = r($o);
        (Ii = c(af, 'true')),
          af.forEach(a),
          (Ni = c(
            fe,
            `
for this to work.`
          )),
          fe.forEach(a),
          Zu.forEach(a),
          Ve.forEach(a),
          (Di = y(ue)),
          (M = l(ue, 'UL', { class: !0 }));
        var z = r(M);
        Jt = l(z, 'LI', { class: !0 });
        var nf = r(Jt);
        re = l(nf, 'P', {});
        var De = r(re);
        ea = l(De, 'STRONG', {});
        var lf = r(ea);
        (Ri = c(lf, 'playVideoWhenInView')),
          lf.forEach(a),
          (Ai = c(De, ' (bool) - default ')),
          (Xt = l(De, 'SPAN', { class: !0 }));
        var rf = r(Xt);
        ta = l(rf, 'STRONG', {});
        var cf = r(ta);
        (Mi = c(cf, 'true')),
          cf.forEach(a),
          rf.forEach(a),
          (Li = y(De)),
          (sa = l(De, 'SPAN', { class: !0 })),
          r(sa).forEach(a),
          (Gi = c(
            De,
            `
options: `
          )),
          (oa = l(De, 'EM', {}));
        var pf = r(oa);
        (Wi = c(pf, 'true')),
          pf.forEach(a),
          (ji = c(
            De,
            ' (Only start playing the video when it comes into view), '
          )),
          (aa = l(De, 'EM', {}));
        var uf = r(aa);
        (Hi = c(uf, 'false')),
          uf.forEach(a),
          (zi = c(De, ' (Start playing as soon as the page and video load)')),
          De.forEach(a),
          nf.forEach(a),
          (Bi = y(z)),
          (Qt = l(z, 'LI', { class: !0 }));
        var ff = r(Qt);
        be = l(ff, 'P', {});
        var Ze = r(be);
        na = l(Ze, 'STRONG', {});
        var df = r(na);
        (Ui = c(df, 'playVideoThreshold')),
          df.forEach(a),
          (qi = c(Ze, ' (float) - default ')),
          (Zt = l(Ze, 'SPAN', { class: !0 }));
        var hf = r(Zt);
        la = l(hf, 'STRONG', {});
        var mf = r(la);
        (Fi = c(mf, '0.5')),
          mf.forEach(a),
          hf.forEach(a),
          (Yi = y(Ze)),
          (ra = l(Ze, 'SPAN', { class: !0 })),
          r(ra).forEach(a),
          (Ki = c(Ze, ' options: ')),
          (ia = l(Ze, 'EM', {}));
        var vf = r(ia);
        (Ji = c(vf, 'float between 0 and 1')),
          vf.forEach(a),
          (Xi = c(
            Ze,
            `.
How much of the video should be into view to start playing when playVideoWhenInView is true.`
          )),
          Ze.forEach(a),
          ff.forEach(a),
          (Qi = y(z)),
          (xt = l(z, 'LI', { class: !0 }));
        var _f = r(xt);
        ve = l(_f, 'P', {});
        var Ue = r(ve);
        ca = l(Ue, 'STRONG', {});
        var gf = r(ca);
        (Zi = c(gf, 'possibleToPlayPause')),
          gf.forEach(a),
          (xi = c(Ue, ' (bool) - default ')),
          ($t = l(Ue, 'SPAN', { class: !0 }));
        var kf = r($t);
        pa = l(kf, 'STRONG', {});
        var Ef = r(pa);
        ($i = c(Ef, 'true')),
          Ef.forEach(a),
          kf.forEach(a),
          (ec = y(Ue)),
          (ua = l(Ue, 'SPAN', { class: !0 })),
          r(ua).forEach(a),
          (tc = c(Ue, ' options: ')),
          (fa = l(Ue, 'EM', {}));
        var wf = r(fa);
        (sc = c(wf, 'true')),
          wf.forEach(a),
          (oc = c(Ue, ', ')),
          (da = l(Ue, 'EM', {}));
        var yf = r(da);
        (ac = c(yf, 'false')),
          yf.forEach(a),
          Ue.forEach(a),
          _f.forEach(a),
          (nc = y(z)),
          (es = l(z, 'LI', { class: !0 }));
        var bf = r(es);
        ie = l(bf, 'P', {});
        var Re = r(ie);
        ha = l(Re, 'STRONG', {});
        var Cf = r(ha);
        (lc = c(Cf, 'showControls')),
          Cf.forEach(a),
          (rc = c(Re, ' (bool) - default ')),
          (ts = l(Re, 'SPAN', { class: !0 }));
        var Of = r(ts);
        ma = l(Of, 'STRONG', {});
        var Pf = r(ma);
        (ic = c(Pf, 'true')),
          Pf.forEach(a),
          Of.forEach(a),
          (cc = y(Re)),
          (va = l(Re, 'SPAN', { class: !0 })),
          r(va).forEach(a),
          (pc = c(Re, ' options: ')),
          (_a = l(Re, 'EM', {}));
        var Tf = r(_a);
        (uc = c(Tf, 'true')),
          Tf.forEach(a),
          (fc = c(Re, ', ')),
          (ga = l(Re, 'EM', {}));
        var Vf = r(ga);
        (dc = c(Vf, 'false')),
          Vf.forEach(a),
          (hc = c(
            Re,
            `.
Whether to show the play/pause controls or not.`
          )),
          Re.forEach(a),
          bf.forEach(a),
          (mc = y(z)),
          (ss = l(z, 'LI', { class: !0 }));
        var Sf = r(ss);
        _e = l(Sf, 'P', {});
        var qe = r(_e);
        ka = l(qe, 'STRONG', {});
        var If = r(ka);
        (vc = c(If, 'hoverToSeeControls')),
          If.forEach(a),
          (_c = c(qe, ' (bool) - default ')),
          (os = l(qe, 'SPAN', { class: !0 }));
        var Nf = r(os);
        Ea = l(Nf, 'STRONG', {});
        var Df = r(Ea);
        (gc = c(Df, 'false')),
          Df.forEach(a),
          Nf.forEach(a),
          (wa = l(qe, 'SPAN', { class: !0 })),
          r(wa).forEach(a),
          (kc = c(qe, ' options: ')),
          (ya = l(qe, 'EM', {}));
        var Rf = r(ya);
        (Ec = c(Rf, 'true')),
          Rf.forEach(a),
          (wc = c(qe, ', ')),
          (ba = l(qe, 'EM', {}));
        var Af = r(ba);
        (yc = c(Af, 'false')),
          Af.forEach(a),
          (bc = c(
            qe,
            `.
Whether you need to hover over the video to see the controls.`
          )),
          qe.forEach(a),
          Sf.forEach(a),
          (Cc = y(z)),
          (as = l(z, 'LI', { class: !0 }));
        var Mf = r(as);
        ce = l(Mf, 'P', {});
        var Ae = r(ce);
        Ca = l(Ae, 'STRONG', {});
        var Lf = r(Ca);
        (Oc = c(Lf, 'separateReplayIcon')),
          Lf.forEach(a),
          (Pc = c(Ae, ' (bool) - default ')),
          (ns = l(Ae, 'SPAN', { class: !0 }));
        var Gf = r(ns);
        Oa = l(Gf, 'STRONG', {});
        var Wf = r(Oa);
        (Tc = c(Wf, 'false')),
          Wf.forEach(a),
          Gf.forEach(a),
          (Vc = y(Ae)),
          (Pa = l(Ae, 'SPAN', { class: !0 })),
          r(Pa).forEach(a),
          (Sc = c(Ae, ' options: ')),
          (Ta = l(Ae, 'EM', {}));
        var jf = r(Ta);
        (Ic = c(jf, 'true')),
          jf.forEach(a),
          (Nc = c(Ae, ', ')),
          (Va = l(Ae, 'EM', {}));
        var Hf = r(Va);
        (Dc = c(Hf, 'false')),
          Hf.forEach(a),
          (Rc = c(
            Ae,
            `.
Whether to use a separate replay icon or use the play icon for replay as well.`
          )),
          Ae.forEach(a),
          Mf.forEach(a),
          (Ac = y(z)),
          (ls = l(z, 'LI', { class: !0 }));
        var zf = r(ls);
        Ce = l(zf, 'P', {});
        var xe = r(Ce);
        Sa = l(xe, 'STRONG', {});
        var Bf = r(Sa);
        (Mc = c(Bf, 'controlsColour')),
          Bf.forEach(a),
          (Lc = c(xe, ' (colour string) - default ')),
          (rs = l(xe, 'SPAN', { class: !0 }));
        var Uf = r(rs);
        Ia = l(Uf, 'STRONG', {});
        var qf = r(Ia);
        (Gc = c(qf, '\u2018#333\u2019')),
          qf.forEach(a),
          Uf.forEach(a),
          (Wc = y(xe)),
          (Na = l(xe, 'SPAN', { class: !0 })),
          r(Na).forEach(a),
          (jc = c(xe, ' options: ')),
          (Da = l(xe, 'EM', {}));
        var Ff = r(Da);
        (Hc = c(Ff, 'any valid colour string')),
          Ff.forEach(a),
          (zc = c(
            xe,
            `.
Controls the colour of the play/pause buttons.`
          )),
          xe.forEach(a),
          zf.forEach(a),
          (Bc = y(z)),
          (is = l(z, 'LI', { class: !0 }));
        var Yf = r(is);
        Oe = l(Yf, 'P', {});
        var $e = r(Oe);
        Ra = l($e, 'STRONG', {});
        var Kf = r(Ra);
        (Uc = c(Kf, 'controlsOpacity')),
          Kf.forEach(a),
          (qc = c($e, ' (float) - default ')),
          (cs = l($e, 'SPAN', { class: !0 }));
        var Jf = r(cs);
        Aa = l(Jf, 'STRONG', {});
        var Xf = r(Aa);
        (Fc = c(Xf, '0.5')),
          Xf.forEach(a),
          Jf.forEach(a),
          (Yc = y($e)),
          (Ma = l($e, 'SPAN', { class: !0 })),
          r(Ma).forEach(a),
          (Kc = c($e, ' options: ')),
          (La = l($e, 'EM', {}));
        var Qf = r(La);
        (Jc = c(Qf, 'float between 0 and 1')),
          Qf.forEach(a),
          (Xc = c(
            $e,
            `.
Controls the opacity of the play/pause buttons.`
          )),
          $e.forEach(a),
          Yf.forEach(a),
          (Qc = y(z)),
          (ps = l(z, 'LI', { class: !0 }));
        var Zf = r(ps);
        H = l(Zf, 'P', {});
        var $ = r(H);
        Ga = l($, 'STRONG', {});
        var xf = r(Ga);
        (Zc = c(xf, 'controlsPosition')),
          xf.forEach(a),
          (xc = c($, ' (string) - default ')),
          (us = l($, 'SPAN', { class: !0 }));
        var $f = r(us);
        Wa = l($f, 'STRONG', {});
        var ed = r(Wa);
        ($c = c(ed, '\u2018top left\u2019')),
          ed.forEach(a),
          $f.forEach(a),
          (ep = y($)),
          (ja = l($, 'SPAN', { class: !0 })),
          r(ja).forEach(a),
          (tp = c(
            $,
            `
options: `
          )),
          (Ha = l($, 'EM', {}));
        var td = r(Ha);
        (sp = c(td, '\u2018top right\u2019')),
          td.forEach(a),
          (op = c($, ', ')),
          (za = l($, 'EM', {}));
        var sd = r(za);
        (ap = c(sd, '\u2018top left\u2019')),
          sd.forEach(a),
          (np = c($, ', ')),
          (Ba = l($, 'EM', {}));
        var od = r(Ba);
        (lp = c(od, '\u2018bottom right\u2019')),
          od.forEach(a),
          (rp = c($, ', ')),
          (Ua = l($, 'EM', {}));
        var ad = r(Ua);
        (ip = c(ad, '\u2018bottom left\u2019')),
          ad.forEach(a),
          (cp = c(
            $,
            `.
Controls the position of the play/pause buttons.`
          )),
          $.forEach(a),
          Zf.forEach(a),
          z.forEach(a),
          ue.forEach(a),
          this.h();
      },
      h() {
        m(d, 'class', 'language-svelte'),
          m(A, 'class', 'svelte-1txfm32'),
          m(et, 'class', 'svelte-1txfm32'),
          m(Q, 'class', 'svelte-1txfm32'),
          m(Ee, 'class', 'svelte-1txfm32'),
          m(tt, 'class', 'svelte-1txfm32'),
          m(Ot, 'class', 'language-svelte'),
          m(we, 'class', 'svelte-1txfm32'),
          m(at, 'class', 'svelte-1txfm32'),
          m(ot, 'class', 'svelte-1txfm32'),
          m(nt, 'class', 'svelte-1txfm32'),
          m(ne, 'class', 'svelte-1txfm32'),
          m(F, 'class', 'svelte-1txfm32'),
          m(lt, 'class', 'svelte-1txfm32'),
          m(ye, 'class', 'svelte-1txfm32'),
          m(Pt, 'class', 'language-svelte'),
          m(Rt, 'class', 'svelte-1txfm32'),
          m(At, 'class', 'svelte-1txfm32'),
          m(it, 'class', 'svelte-1txfm32'),
          m(St, 'class', 'language-svelte'),
          m(Xe, 'class', 'svelte-1txfm32'),
          m(Qe, 'class', 'svelte-1txfm32'),
          m(pt, 'class', 'svelte-1txfm32'),
          m(Gt, 'class', 'default svelte-1txfm32'),
          m(yo, 'class', 'separator svelte-1txfm32'),
          m(Lt, 'class', 'svelte-1txfm32'),
          m(jt, 'class', 'default svelte-1txfm32'),
          m(Oo, 'class', 'separator svelte-1txfm32'),
          m(Wt, 'class', 'svelte-1txfm32'),
          m(zt, 'class', 'default svelte-1txfm32'),
          m(Ro, 'class', 'separator svelte-1txfm32'),
          m(Ht, 'class', 'svelte-1txfm32'),
          m(Ut, 'class', 'default svelte-1txfm32'),
          m(jo, 'class', 'separator svelte-1txfm32'),
          m(Bt, 'class', 'svelte-1txfm32'),
          m(Ft, 'class', 'default svelte-1txfm32'),
          m(qo, 'class', 'separator svelte-1txfm32'),
          m(qt, 'class', 'svelte-1txfm32'),
          m(Kt, 'class', 'default svelte-1txfm32'),
          m(Xo, 'class', 'separator svelte-1txfm32'),
          m(Yt, 'class', 'svelte-1txfm32'),
          m(K, 'class', 'svelte-1txfm32'),
          m(Xt, 'class', 'default svelte-1txfm32'),
          m(sa, 'class', 'separator svelte-1txfm32'),
          m(Jt, 'class', 'svelte-1txfm32'),
          m(Zt, 'class', 'default svelte-1txfm32'),
          m(ra, 'class', 'separator svelte-1txfm32'),
          m(Qt, 'class', 'svelte-1txfm32'),
          m($t, 'class', 'default svelte-1txfm32'),
          m(ua, 'class', 'separator svelte-1txfm32'),
          m(xt, 'class', 'svelte-1txfm32'),
          m(ts, 'class', 'default svelte-1txfm32'),
          m(va, 'class', 'separator svelte-1txfm32'),
          m(es, 'class', 'svelte-1txfm32'),
          m(os, 'class', 'default svelte-1txfm32'),
          m(wa, 'class', 'separator svelte-1txfm32'),
          m(ss, 'class', 'svelte-1txfm32'),
          m(ns, 'class', 'default svelte-1txfm32'),
          m(Pa, 'class', 'separator svelte-1txfm32'),
          m(as, 'class', 'svelte-1txfm32'),
          m(rs, 'class', 'default svelte-1txfm32'),
          m(Na, 'class', 'separator svelte-1txfm32'),
          m(ls, 'class', 'svelte-1txfm32'),
          m(cs, 'class', 'default svelte-1txfm32'),
          m(Ma, 'class', 'separator svelte-1txfm32'),
          m(is, 'class', 'svelte-1txfm32'),
          m(us, 'class', 'default svelte-1txfm32'),
          m(ja, 'class', 'separator svelte-1txfm32'),
          m(ps, 'class', 'svelte-1txfm32'),
          m(M, 'class', 'svelte-1txfm32');
      },
      m(v, S) {
        I(v, t, S),
          e(t, o),
          e(o, s),
          e(t, u),
          e(t, f),
          e(f, h),
          I(v, g, S),
          I(v, d, S),
          (d.innerHTML = C),
          I(v, b, S),
          se(O, v, S),
          I(v, _, S),
          I(v, T, S),
          e(T, R),
          e(R, k),
          e(T, q),
          e(T, E),
          e(E, V),
          e(V, ke),
          e(E, Nt),
          e(E, Le),
          e(Le, Dt),
          e(T, Ge),
          e(T, Q),
          e(Q, A),
          e(A, Z),
          e(Z, Fe),
          e(Z, Se),
          e(Se, Ye),
          e(Z, Ke),
          e(Z, ae),
          e(ae, _t),
          e(Z, Je),
          e(Q, We),
          e(Q, et),
          e(et, de),
          e(de, vs),
          e(de, gt),
          e(gt, _s),
          e(de, gs),
          e(de, kt),
          e(kt, ks),
          e(de, Es),
          e(de, Et),
          e(Et, ws),
          e(de, ys),
          e(T, bs),
          e(T, wt),
          e(wt, yt),
          e(yt, Cs),
          e(T, Os),
          e(T, tt),
          e(tt, Ee),
          e(Ee, Ps),
          e(Ee, bt),
          e(bt, Ts),
          e(Ee, P),
          e(Ee, Ct),
          e(Ct, Vs),
          e(Ee, Pn),
          e(T, Tn),
          e(T, Ss),
          e(Ss, Vn),
          I(v, Ja, S),
          I(v, Ot, S),
          (Ot.innerHTML = Ed),
          I(v, Xa, S),
          se(st, v, S),
          I(v, Qa, S),
          I(v, W, S),
          e(W, Is),
          e(Is, Sn),
          e(W, In),
          e(W, Ns),
          e(Ns, Ds),
          e(Ds, Nn),
          e(W, Dn),
          e(W, ot),
          e(ot, we),
          e(we, Rn),
          e(we, Rs),
          e(Rs, An),
          e(we, Mn),
          e(we, As),
          e(As, Ln),
          e(we, Gn),
          e(we, Ms),
          e(Ms, Wn),
          e(we, jn),
          e(ot, Hn),
          e(ot, at),
          e(at, zn),
          e(at, Ls),
          e(Ls, Bn),
          e(at, Un),
          e(W, qn),
          e(W, Ie),
          e(Ie, Gs),
          e(Gs, Fn),
          e(Ie, Yn),
          e(Ie, Ws),
          e(Ws, Kn),
          e(Ie, Jn),
          e(Ie, js),
          e(js, Xn),
          e(Ie, Qn),
          e(Ie, Hs),
          e(Hs, Zn),
          e(W, xn),
          e(W, zs),
          e(zs, $n),
          e(W, el),
          e(W, ye),
          e(ye, nt),
          e(nt, tl),
          e(nt, Bs),
          e(Bs, sl),
          e(nt, ol),
          e(ye, al),
          e(ye, ne),
          e(ne, nl),
          e(ne, Us),
          e(Us, ll),
          e(ne, rl),
          e(ne, qs),
          e(qs, il),
          e(ne, cl),
          e(ne, Fs),
          e(Fs, pl),
          e(ne, ul),
          e(ne, Ys),
          e(Ys, fl),
          e(ne, dl),
          e(ye, hl),
          e(ye, F),
          e(F, ml),
          e(F, Ks),
          e(Ks, vl),
          e(F, _l),
          e(F, Js),
          e(Js, gl),
          e(F, kl),
          e(F, Xs),
          e(Xs, El),
          e(F, wl),
          e(F, Qs),
          e(Qs, yl),
          e(F, bl),
          e(F, Zs),
          e(Zs, Cl),
          e(F, Ol),
          e(ye, Pl),
          e(ye, lt),
          e(lt, Tl),
          e(lt, xs),
          e(xs, Vl),
          e(lt, Sl),
          e(W, Il),
          e(W, $s),
          e($s, Nl),
          I(v, Za, S),
          I(v, Pt, S),
          (Pt.innerHTML = wd),
          I(v, xa, S),
          se(rt, v, S),
          I(v, $a, S),
          I(v, Y, S),
          e(Y, eo),
          e(eo, Dl),
          e(Y, Rl),
          e(Y, Tt),
          e(Tt, Al),
          e(Tt, to),
          e(to, Ml),
          e(Tt, Ll),
          e(Y, Gl),
          e(Y, so),
          e(so, Wl),
          e(Y, jl),
          e(Y, it),
          e(it, Rt),
          e(Rt, le),
          e(le, oo),
          e(oo, Hl),
          e(le, zl),
          e(le, ao),
          e(ao, Bl),
          e(le, Ul),
          e(le, no),
          e(no, ql),
          e(le, Fl),
          e(le, lo),
          e(lo, Yl),
          e(le, Kl),
          e(le, ro),
          e(ro, Jl),
          e(le, Xl),
          e(it, Ql),
          e(it, At),
          e(At, Mt),
          e(Mt, io),
          e(io, Zl),
          e(Mt, xl),
          e(Y, $l),
          e(Y, Vt),
          e(Vt, er),
          e(Vt, co),
          e(co, tr),
          e(Vt, sr),
          e(Y, or),
          e(Y, po),
          e(po, ar),
          I(v, en, S),
          I(v, St, S),
          (St.innerHTML = yd),
          I(v, tn, S),
          se(ct, v, S),
          I(v, sn, S),
          I(v, j, S),
          e(j, uo),
          e(uo, nr),
          e(j, lr),
          e(j, fo),
          e(fo, rr),
          e(j, ir),
          e(j, ho),
          e(ho, cr),
          e(j, pr),
          e(j, pt),
          e(pt, Xe),
          e(Xe, mo),
          e(mo, ur),
          e(Xe, fr),
          e(Xe, vo),
          e(vo, dr),
          e(Xe, hr),
          e(pt, mr),
          e(pt, Qe),
          e(Qe, _o),
          e(_o, vr),
          e(Qe, _r),
          e(Qe, go),
          e(go, gr),
          e(Qe, kr),
          e(j, Er),
          e(j, ko),
          e(ko, wr),
          e(j, yr),
          e(j, K),
          e(K, Lt),
          e(Lt, je),
          e(je, Eo),
          e(Eo, br),
          e(je, Cr),
          e(je, Gt),
          e(Gt, wo),
          e(wo, Or),
          e(je, Pr),
          e(je, yo),
          e(je, Tr),
          e(K, Vr),
          e(K, Wt),
          e(Wt, G),
          e(G, bo),
          e(bo, Sr),
          e(G, Ir),
          e(G, jt),
          e(jt, Co),
          e(Co, Nr),
          e(G, Dr),
          e(G, Oo),
          e(G, Rr),
          e(G, Po),
          e(Po, Ar),
          e(G, Mr),
          e(G, To),
          e(To, Lr),
          e(G, Gr),
          e(G, Vo),
          e(Vo, Wr),
          e(G, jr),
          e(G, So),
          e(So, Hr),
          e(G, zr),
          e(G, Io),
          e(Io, Br),
          e(K, Ur),
          e(K, Ht),
          e(Ht, J),
          e(J, No),
          e(No, qr),
          e(J, Fr),
          e(J, zt),
          e(zt, Do),
          e(Do, Yr),
          e(J, Kr),
          e(J, Ro),
          e(J, Jr),
          e(J, Ao),
          e(Ao, Xr),
          e(J, Qr),
          e(J, Mo),
          e(Mo, Zr),
          e(J, xr),
          e(J, Lo),
          e(Lo, $r),
          e(J, ei),
          e(K, ti),
          e(K, Bt),
          e(Bt, he),
          e(he, Go),
          e(Go, si),
          e(he, oi),
          e(he, Ut),
          e(Ut, Wo),
          e(Wo, ai),
          e(he, ni),
          e(he, jo),
          e(he, li),
          e(he, Ho),
          e(Ho, ri),
          e(he, ii),
          e(he, zo),
          e(zo, ci),
          e(K, pi),
          e(K, qt),
          e(qt, me),
          e(me, Bo),
          e(Bo, ui),
          e(me, fi),
          e(me, Ft),
          e(Ft, Uo),
          e(Uo, di),
          e(me, hi),
          e(me, qo),
          e(me, mi),
          e(me, Fo),
          e(Fo, vi),
          e(me, _i),
          e(me, Yo),
          e(Yo, gi),
          e(K, ki),
          e(K, Yt),
          e(Yt, B),
          e(B, Ko),
          e(Ko, Ei),
          e(B, wi),
          e(B, Kt),
          e(Kt, Jo),
          e(Jo, yi),
          e(B, Xo),
          e(B, bi),
          e(B, Qo),
          e(Qo, Ci),
          e(B, Oi),
          e(B, Zo),
          e(Zo, Pi),
          e(B, Ti),
          e(B, xo),
          e(xo, Vi),
          e(B, Si),
          e(B, $o),
          e($o, Ii),
          e(B, Ni),
          e(j, Di),
          e(j, M),
          e(M, Jt),
          e(Jt, re),
          e(re, ea),
          e(ea, Ri),
          e(re, Ai),
          e(re, Xt),
          e(Xt, ta),
          e(ta, Mi),
          e(re, Li),
          e(re, sa),
          e(re, Gi),
          e(re, oa),
          e(oa, Wi),
          e(re, ji),
          e(re, aa),
          e(aa, Hi),
          e(re, zi),
          e(M, Bi),
          e(M, Qt),
          e(Qt, be),
          e(be, na),
          e(na, Ui),
          e(be, qi),
          e(be, Zt),
          e(Zt, la),
          e(la, Fi),
          e(be, Yi),
          e(be, ra),
          e(be, Ki),
          e(be, ia),
          e(ia, Ji),
          e(be, Xi),
          e(M, Qi),
          e(M, xt),
          e(xt, ve),
          e(ve, ca),
          e(ca, Zi),
          e(ve, xi),
          e(ve, $t),
          e($t, pa),
          e(pa, $i),
          e(ve, ec),
          e(ve, ua),
          e(ve, tc),
          e(ve, fa),
          e(fa, sc),
          e(ve, oc),
          e(ve, da),
          e(da, ac),
          e(M, nc),
          e(M, es),
          e(es, ie),
          e(ie, ha),
          e(ha, lc),
          e(ie, rc),
          e(ie, ts),
          e(ts, ma),
          e(ma, ic),
          e(ie, cc),
          e(ie, va),
          e(ie, pc),
          e(ie, _a),
          e(_a, uc),
          e(ie, fc),
          e(ie, ga),
          e(ga, dc),
          e(ie, hc),
          e(M, mc),
          e(M, ss),
          e(ss, _e),
          e(_e, ka),
          e(ka, vc),
          e(_e, _c),
          e(_e, os),
          e(os, Ea),
          e(Ea, gc),
          e(_e, wa),
          e(_e, kc),
          e(_e, ya),
          e(ya, Ec),
          e(_e, wc),
          e(_e, ba),
          e(ba, yc),
          e(_e, bc),
          e(M, Cc),
          e(M, as),
          e(as, ce),
          e(ce, Ca),
          e(Ca, Oc),
          e(ce, Pc),
          e(ce, ns),
          e(ns, Oa),
          e(Oa, Tc),
          e(ce, Vc),
          e(ce, Pa),
          e(ce, Sc),
          e(ce, Ta),
          e(Ta, Ic),
          e(ce, Nc),
          e(ce, Va),
          e(Va, Dc),
          e(ce, Rc),
          e(M, Ac),
          e(M, ls),
          e(ls, Ce),
          e(Ce, Sa),
          e(Sa, Mc),
          e(Ce, Lc),
          e(Ce, rs),
          e(rs, Ia),
          e(Ia, Gc),
          e(Ce, Wc),
          e(Ce, Na),
          e(Ce, jc),
          e(Ce, Da),
          e(Da, Hc),
          e(Ce, zc),
          e(M, Bc),
          e(M, is),
          e(is, Oe),
          e(Oe, Ra),
          e(Ra, Uc),
          e(Oe, qc),
          e(Oe, cs),
          e(cs, Aa),
          e(Aa, Fc),
          e(Oe, Yc),
          e(Oe, Ma),
          e(Oe, Kc),
          e(Oe, La),
          e(La, Jc),
          e(Oe, Xc),
          e(M, Qc),
          e(M, ps),
          e(ps, H),
          e(H, Ga),
          e(Ga, Zc),
          e(H, xc),
          e(H, us),
          e(us, Wa),
          e(Wa, $c),
          e(H, ep),
          e(H, ja),
          e(H, tp),
          e(H, Ha),
          e(Ha, sp),
          e(H, op),
          e(H, za),
          e(za, ap),
          e(H, np),
          e(H, Ba),
          e(Ba, lp),
          e(H, rp),
          e(H, Ua),
          e(Ua, ip),
          e(H, cp),
          (on = !0);
      },
      p(v, [S]) {
        const qa = {};
        S & 1 && (qa.$$scope = { dirty: S, ctx: v }), O.$set(qa);
        const Fa = {};
        S & 1 && (Fa.$$scope = { dirty: S, ctx: v }), st.$set(Fa);
        const an = {};
        S & 1 && (an.$$scope = { dirty: S, ctx: v }), rt.$set(an);
        const x = {};
        S & 1 && (x.$$scope = { dirty: S, ctx: v }), ct.$set(x);
      },
      i(v) {
        on ||
          (N(O.$$.fragment, v),
          N(st.$$.fragment, v),
          N(rt.$$.fragment, v),
          N(ct.$$.fragment, v),
          (on = !0));
      },
      o(v) {
        D(O.$$.fragment, v),
          D(st.$$.fragment, v),
          D(rt.$$.fragment, v),
          D(ct.$$.fragment, v),
          (on = !1);
      },
      d(v) {
        v && a(t),
          v && a(g),
          v && a(d),
          v && a(b),
          oe(O, v),
          v && a(_),
          v && a(T),
          v && a(Ja),
          v && a(Ot),
          v && a(Xa),
          oe(st, v),
          v && a(Qa),
          v && a(W),
          v && a(Za),
          v && a(Pt),
          v && a(xa),
          oe(rt, v),
          v && a($a),
          v && a(Y),
          v && a(en),
          v && a(St),
          v && a(tn),
          oe(ct, v),
          v && a(sn),
          v && a(j);
      },
    }
  );
}
const ch = {
    title: 'Video',
    description:
      'General-purpose video component. Can play on load or when the video comes into view and has play/pause controls. Supports videos with or without audio.',
    slug: 'video',
  },
  { title: fd, description: dd, slug: vh } = ch;
class _h extends En {
  constructor(t) {
    super(), wn(this, t, null, ih, yn, {});
  }
}
export { _h as default, ch as metadata };
