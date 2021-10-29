import {
  a7 as t,
  S as s,
  i as a,
  s as n,
  e,
  O as i,
  k as o,
  c as l,
  a as r,
  Q as c,
  n as h,
  d as p,
  b as d,
  f as u,
  H as m,
  a3 as f,
  I as w,
  L as g,
  A as b,
  t as k,
  j as v,
  g as y,
  m as E,
  o as R,
  x as $,
  u as S,
  v as C,
} from './vendor-927c0fc0.js';
import { D as L } from './index-38e47fc4.js';
import { g as I } from './@component-docs-73e95ca8.js';
import './paths-6758d194.js';
class x {
  constructor(t) {
    this.defaults = { playbackConst: 50, widthRatio: 1.78 };
    for (const s in this.defaults) this[s] = this.defaults[s];
    this.options = t;
    for (const s in t) this[s] = t[s];
    return this.setDefaults(), this;
  }
  setDefaults() {
    (this.$el = document.querySelector(
      `.lottie-container[data-id='${this.id}']`
    )),
      (this.$canvas = document.getElementById(`${this.id}`)),
      (this.$scrollTrigger = this.$el.querySelector('.scroll-trigger')),
      (this.$blurbs = this.$el.querySelectorAll('.blurb')),
      this.includeSmall &&
        this.smallWidthRatio &&
        ((this.largeWidthRatio = this.widthRatio),
        (this.widthRatio =
          window.innerWidth < 600
            ? this.smallWidthRatio
            : this.largeWidthRatio)),
      (this.cvs = document.getElementById(this.id)),
      (this.ctx = this.cvs.getContext('2d')),
      this.sizeCTX(),
      this.renderAnimation(),
      this.render();
  }
  sizeCTX() {
    (this.w_height = window.innerHeight),
      (this.w_width = window.innerWidth),
      this.fullFrame
        ? ((this.height =
            this.w_height > this.w_width / this.widthRatio
              ? this.w_height
              : this.w_width / this.widthRatio),
          (this.width =
            this.w_height > this.w_width / this.widthRatio
              ? this.w_height * this.widthRatio
              : this.w_width))
        : ((this.height =
            this.w_height > this.w_width / this.widthRatio
              ? this.w_width / this.widthRatio
              : this.w_height),
          (this.width =
            this.w_height > this.w_width / this.widthRatio
              ? this.w_width
              : this.w_height * this.widthRatio)),
      (this.ctx.canvas.width = this.width),
      (this.ctx.canvas.height = this.height);
  }
  renderAnimation() {
    (this.sizeLoaded =
      window.innerWidth < 600 && this.includeSmall ? this.id + '_sm' : this.id),
      (this.animation = t.exports.loadAnimation({
        renderer: 'canvas',
        loop: !1,
        autoplay: !1,
        rendererSettings: {
          context: this.ctx,
          scaleMode: 'noScale',
          clearCanvas: !0,
        },
        path: I(`lottie/${this.id}.json`),
      })),
      this.animation.addEventListener('data_ready', () => {
        (this.lastFrame = parseFloat(this.animation.animationData.op)),
          (this.firstFrame = parseFloat(this.animation.animationData.ip)),
          (this.frameRate = this.animation.animationData.fr),
          (this.duration = this.lastFrame - this.firstFrame),
          this.$scrollTrigger.setAttribute(
            'style',
            `height:${this.duration * this.playbackConst}px;`
          ),
          [].forEach.call(this.$blurbs, (t, s) => {
            let a =
              0 == s
                ? ((s + 0.5) * (this.duration * this.playbackConst)) /
                  this.blurbs.length /
                  2
                : ((s + 0.5) * (this.duration * this.playbackConst)) /
                  this.blurbs.length;
            isNaN(parseFloat(t.getAttribute('seconds'))) ||
              (a =
                parseFloat(t.getAttribute('seconds')) *
                this.frameRate *
                this.playbackConst),
              t.setAttribute('style', `top:${a}px;`);
          });
      }),
      this.animation.resize.bind(this.animation);
  }
  render() {
    window.addEventListener('scroll', () => {
      this.scrollAnimate(this.$scrollTrigger), this.scrollStick(this.$el);
    }),
      window.addEventListener(
        'resize',
        this.debounce((t) => {
          this.resize();
        }, 100)
      );
  }
  resize() {
    this.includeSmall &&
      this.smallWidthRatio &&
      (this.widthRatio =
        window.innerWidth < 600 ? this.smallWidthRatio : this.largeWidthRatio),
      this.sizeCTX(),
      (this.sizeToLoad =
        window.innerWidth < 600 && this.includeSmall
          ? this.id + '_sm'
          : this.id),
      this.sizeLoaded != this.sizeToLoad
        ? (this.animation.destroy(), this.renderAnimation())
        : this.animation.resize(),
      setTimeout(() => {
        this.scrollAnimate(this.$scrollTrigger), this.scrollStick(this.$el);
      }, 500);
  }
  scrollAnimate(t) {
    const s = window.scrollY,
      a = t.getBoundingClientRect().top + s,
      n = a + t.offsetHeight,
      e = window.innerHeight,
      i = s + e;
    let o = s + e - a;
    o < 0 && (o = 0);
    let l = o / this.playbackConst;
    l > this.duration - 1 && (l = this.duration - 1),
      i > a && s < n && this.animation.goToAndStop(l, !0);
  }
  scrollStick(t) {
    const s = window.scrollY,
      a = t.offsetTop,
      n = a + t.offsetHeight,
      e = window.innerHeight;
    s >= a && this.$el.classList.add('stuck'),
      s < a &&
        (this.$el.classList.remove('stuck'), this.animation.goToAndStop(0, !0)),
      s + e > n && this.$el.classList.add('un-stuck'),
      s + e < n && this.$el.classList.remove('un-stuck');
  }
  debounce(t, s, a) {
    let n;
    return function () {
      const e = this,
        i = arguments,
        o = function () {
          (n = null), a || t.apply(e, i);
        },
        l = a && !n;
      clearTimeout(n), (n = setTimeout(o, s)), l && t.apply(e, i);
    };
  }
}
function A(t, s, a) {
  const n = t.slice();
  return (n[7] = s[a]), n;
}
function D(t) {
  let s,
    a,
    n,
    w,
    g = f(t[7].text) + '';
  return {
    c() {
      (s = e('div')), (a = new i()), (n = o()), this.h();
    },
    l(t) {
      s = l(t, 'DIV', { class: !0, seconds: !0 });
      var e = r(s);
      (a = c(e)), (n = h(e)), e.forEach(p), this.h();
    },
    h() {
      (a.a = n),
        d(s, 'class', 'blurb svelte-6ked8h'),
        d(s, 'seconds', (w = t[7].seconds));
    },
    m(t, e) {
      u(t, s, e), a.m(g, s), m(s, n);
    },
    p(t, n) {
      2 & n && g !== (g = f(t[7].text) + '') && a.p(g),
        2 & n && w !== (w = t[7].seconds) && d(s, 'seconds', w);
    },
    d(t) {
      t && p(s);
    },
  };
}
function W(t) {
  let s,
    a,
    n,
    i,
    c,
    f,
    b,
    k = t[1],
    v = [];
  for (let e = 0; e < k.length; e += 1) v[e] = D(A(t, k, e));
  return {
    c() {
      (s = e('div')),
        (a = e('div')),
        (n = e('div')),
        (i = e('canvas')),
        (c = o()),
        (f = e('div'));
      for (let t = 0; t < v.length; t += 1) v[t].c();
      this.h();
    },
    l(t) {
      s = l(t, 'DIV', { id: !0, class: !0 });
      var e = r(s);
      a = l(e, 'DIV', { class: !0, 'data-id': !0 });
      var o = r(a);
      n = l(o, 'DIV', { class: !0 });
      var d = r(n);
      (i = l(d, 'CANVAS', { id: !0, class: !0 })),
        r(i).forEach(p),
        d.forEach(p),
        (c = h(o)),
        (f = l(o, 'DIV', { class: !0 }));
      var u = r(f);
      for (let s = 0; s < v.length; s += 1) v[s].l(u);
      u.forEach(p), o.forEach(p), e.forEach(p), this.h();
    },
    h() {
      d(i, 'id', t[0]),
        d(i, 'class', 'svelte-6ked8h'),
        d(n, 'class', 'canvas-holder svelte-6ked8h'),
        d(f, 'class', 'scroll-trigger svelte-6ked8h'),
        d(a, 'class', 'lottie-container svelte-6ked8h'),
        d(a, 'data-id', t[0]),
        d(s, 'id', (b = 'lottie-' + t[0])),
        d(s, 'class', 'lottie-target');
    },
    m(t, e) {
      u(t, s, e), m(s, a), m(a, n), m(n, i), m(a, c), m(a, f);
      for (let s = 0; s < v.length; s += 1) v[s].m(f, null);
    },
    p(t, [n]) {
      if ((1 & n && d(i, 'id', t[0]), 2 & n)) {
        let s;
        for (k = t[1], s = 0; s < k.length; s += 1) {
          const a = A(t, k, s);
          v[s] ? v[s].p(a, n) : ((v[s] = D(a)), v[s].c(), v[s].m(f, null));
        }
        for (; s < v.length; s += 1) v[s].d(1);
        v.length = k.length;
      }
      1 & n && d(a, 'data-id', t[0]),
        1 & n && b !== (b = 'lottie-' + t[0]) && d(s, 'id', b);
    },
    i: w,
    o: w,
    d(t) {
      t && p(s), g(v, t);
    },
  };
}
function _(t, s, a) {
  let { id: n } = s,
    { steps: e = '' } = s,
    { playbackConst: i = '75' } = s,
    { widthRatio: o = 1.78 } = s,
    { fullFrame: l = 'false' } = s,
    { includeSmall: r = 'false' } = s,
    { smallWidthRatio: c = 1 } = s;
  return (
    b(() => {
      new x({
        id: n,
        blurbs: e,
        playbackConst: i,
        widthRatio: Number(o),
        fullFrame: 'true' === l,
        includeSmall: 'true' === r,
        smallWidthRatio: Number(c),
      });
    }),
    (t.$$set = (t) => {
      'id' in t && a(0, (n = t.id)),
        'steps' in t && a(1, (e = t.steps)),
        'playbackConst' in t && a(2, (i = t.playbackConst)),
        'widthRatio' in t && a(3, (o = t.widthRatio)),
        'fullFrame' in t && a(4, (l = t.fullFrame)),
        'includeSmall' in t && a(5, (r = t.includeSmall)),
        'smallWidthRatio' in t && a(6, (c = t.smallWidthRatio));
    }),
    [n, e, i, o, l, r, c]
  );
}
class T extends s {
  constructor(t) {
    super(),
      a(this, t, _, W, n, {
        id: 0,
        steps: 1,
        playbackConst: 2,
        widthRatio: 3,
        fullFrame: 4,
        includeSmall: 5,
        smallWidthRatio: 6,
      });
  }
}
function F(t) {
  let s, a;
  return (
    (s = new T({ props: { id: 'liberia', steps: t[0] } })),
    {
      c() {
        v(s.$$.fragment);
      },
      l(t) {
        E(s.$$.fragment, t);
      },
      m(t, n) {
        R(s, t, n), (a = !0);
      },
      p: w,
      i(t) {
        a || ($(s.$$.fragment, t), (a = !0));
      },
      o(t) {
        S(s.$$.fragment, t), (a = !1);
      },
      d(t) {
        C(s, t);
      },
    }
  );
}
function O(t) {
  let s,
    a,
    n,
    i,
    c,
    f,
    w,
    g,
    b,
    I,
    x,
    A,
    D,
    W,
    _,
    T,
    O,
    j,
    M,
    H,
    P,
    q,
    B,
    N,
    G,
    V,
    Y,
    Q,
    U,
    X,
    J,
    K,
    Z,
    tt,
    st,
    at,
    nt,
    et,
    it,
    ot,
    lt,
    rt,
    ct,
    ht,
    pt,
    dt,
    ut,
    mt,
    ft,
    wt,
    gt,
    bt,
    kt,
    vt,
    yt,
    Et,
    Rt,
    $t,
    St,
    Ct,
    Lt,
    It,
    xt,
    At,
    Dt,
    Wt,
    _t,
    Tt,
    Ft,
    Ot,
    jt,
    zt,
    Mt,
    Ht,
    Pt,
    qt,
    Bt,
    Nt,
    Gt,
    Vt,
    Yt,
    Qt,
    Ut,
    Xt,
    Jt;
  return (
    (Xt = new L({ props: { $$slots: { default: [F] }, $$scope: { ctx: t } } })),
    {
      c() {
        (s = e('section')),
          (a = e('h2')),
          (n = k(z)),
          (i = o()),
          (c = e('p')),
          (f = k('Easy scrolly-telling with lottie, based on ')),
          (w = e('a')),
          (g = k('Bodymovin')),
          (b = k(' and ')),
          (I = e('a')),
          (x = k('lotite-web')),
          (A = k(' and powered by ')),
          (D = e('a')),
          (W = k('an ArchieML')),
          (_ = k('-formatted Google doc.')),
          (T = o()),
          (O = e('p')),
          (j = e('code')),
          (M = k('props')),
          (H = o()),
          (P = e('em')),
          (q = k(
            'for the lottie scroller component, all pulled from your google doc'
          )),
          (B = o()),
          (N = e('ul')),
          (G = e('li')),
          (V = e('code')),
          (Y = k('ID')),
          (Q = k(' Your lottie filename w/out the “.json” extension\n')),
          (U = e('strong')),
          (X = k('REQUIRED')),
          (J = o()),
          (K = e('li')),
          (Z = e('code')),
          (tt = k('blurbs')),
          (st = k(
            ' An array of objects with blurbs and seconds, which controls when the blurbs appear. Blurbs are optional and can be deleted.'
          )),
          (at = o()),
          (nt = e('li')),
          (et = k('If using ')),
          (it = e('code')),
          (ot = k('blurbs')),
          (lt = k(', use ')),
          (rt = e('code')),
          (ct = k('seconds')),
          (ht = k(' to specify when each blurb appears. ')),
          (pt = e('code')),
          (dt = k('seconds')),
          (ut = k(' correspond to seconds in your After Effects file.')),
          (mt = o()),
          (ft = e('li')),
          (wt = e('code')),
          (gt = k('PlaybackConst')),
          (bt = k(
            ' Controls the length of animation (specifically, it controls the height of the div that wraps around the lottie canvas)'
          )),
          (kt = o()),
          (vt = e('li')),
          (yt = e('code')),
          (Et = k('WidthRatio')),
          (Rt = k(
            ' Must match the aspect ratio of your AE artboard. 1.78 by default.'
          )),
          ($t = o()),
          (St = e('li')),
          (Ct = e('code')),
          (Lt = k('FullFrame')),
          (It = k(
            ' Set to true if you always want your graphic to be full width'
          )),
          (xt = o()),
          (At = e('li')),
          (Dt = e('code')),
          (Wt = k('IncludeSmall')),
          (_t = k(
            '  Set to true if you have mobile versions. Mobile versions must be named with a ‘_sm’ suffix. I.e. ‘yourID_sm.json’'
          )),
          (Tt = o()),
          (Ft = e('li')),
          (Ot = e('code')),
          (jt = k('SmallWidthRatio')),
          (zt = k(
            '  With ratio of your mobile version. Square (widthRatio: 1) is recommended and is the default.'
          )),
          (Mt = o()),
          (Ht = e('p')),
          (Pt = k('Only ')),
          (qt = e('code')),
          (Bt = k('id')),
          (Nt = k(
            ' is required. All other props are optional and can be deleted from the Google doc, which should be laid out like this:'
          )),
          (Gt = o()),
          (Vt = e('pre')),
          (Yt = o()),
          (Qt = e('pre')),
          (Ut = o()),
          v(Xt.$$.fragment),
          this.h();
      },
      l(t) {
        s = l(t, 'SECTION', {});
        var e = r(s);
        a = l(e, 'H2', {});
        var o = r(a);
        (n = y(o, z)), o.forEach(p), (i = h(e)), (c = l(e, 'P', {}));
        var d = r(c);
        (f = y(d, 'Easy scrolly-telling with lottie, based on ')),
          (w = l(d, 'A', { href: !0, rel: !0 }));
        var u = r(w);
        (g = y(u, 'Bodymovin')),
          u.forEach(p),
          (b = y(d, ' and ')),
          (I = l(d, 'A', { href: !0, rel: !0 }));
        var m = r(I);
        (x = y(m, 'lotite-web')),
          m.forEach(p),
          (A = y(d, ' and powered by ')),
          (D = l(d, 'A', { href: !0, rel: !0 }));
        var k = r(D);
        (W = y(k, 'an ArchieML')),
          k.forEach(p),
          (_ = y(d, '-formatted Google doc.')),
          d.forEach(p),
          (T = h(e)),
          (O = l(e, 'P', {}));
        var v = r(O);
        j = l(v, 'CODE', {});
        var R = r(j);
        (M = y(R, 'props')), R.forEach(p), (H = h(v)), (P = l(v, 'EM', {}));
        var $ = r(P);
        (q = y(
          $,
          'for the lottie scroller component, all pulled from your google doc'
        )),
          $.forEach(p),
          v.forEach(p),
          (B = h(e)),
          (N = l(e, 'UL', {}));
        var S = r(N);
        G = l(S, 'LI', {});
        var C = r(G);
        V = l(C, 'CODE', {});
        var L = r(V);
        (Y = y(L, 'ID')),
          L.forEach(p),
          (Q = y(C, ' Your lottie filename w/out the “.json” extension\n')),
          (U = l(C, 'STRONG', {}));
        var F = r(U);
        (X = y(F, 'REQUIRED')),
          F.forEach(p),
          C.forEach(p),
          (J = h(S)),
          (K = l(S, 'LI', {}));
        var Jt = r(K);
        Z = l(Jt, 'CODE', {});
        var Kt = r(Z);
        (tt = y(Kt, 'blurbs')),
          Kt.forEach(p),
          (st = y(
            Jt,
            ' An array of objects with blurbs and seconds, which controls when the blurbs appear. Blurbs are optional and can be deleted.'
          )),
          Jt.forEach(p),
          (at = h(S)),
          (nt = l(S, 'LI', {}));
        var Zt = r(nt);
        (et = y(Zt, 'If using ')), (it = l(Zt, 'CODE', {}));
        var ts = r(it);
        (ot = y(ts, 'blurbs')),
          ts.forEach(p),
          (lt = y(Zt, ', use ')),
          (rt = l(Zt, 'CODE', {}));
        var ss = r(rt);
        (ct = y(ss, 'seconds')),
          ss.forEach(p),
          (ht = y(Zt, ' to specify when each blurb appears. ')),
          (pt = l(Zt, 'CODE', {}));
        var as = r(pt);
        (dt = y(as, 'seconds')),
          as.forEach(p),
          (ut = y(Zt, ' correspond to seconds in your After Effects file.')),
          Zt.forEach(p),
          (mt = h(S)),
          (ft = l(S, 'LI', {}));
        var ns = r(ft);
        wt = l(ns, 'CODE', {});
        var es = r(wt);
        (gt = y(es, 'PlaybackConst')),
          es.forEach(p),
          (bt = y(
            ns,
            ' Controls the length of animation (specifically, it controls the height of the div that wraps around the lottie canvas)'
          )),
          ns.forEach(p),
          (kt = h(S)),
          (vt = l(S, 'LI', {}));
        var is = r(vt);
        yt = l(is, 'CODE', {});
        var os = r(yt);
        (Et = y(os, 'WidthRatio')),
          os.forEach(p),
          (Rt = y(
            is,
            ' Must match the aspect ratio of your AE artboard. 1.78 by default.'
          )),
          is.forEach(p),
          ($t = h(S)),
          (St = l(S, 'LI', {}));
        var ls = r(St);
        Ct = l(ls, 'CODE', {});
        var rs = r(Ct);
        (Lt = y(rs, 'FullFrame')),
          rs.forEach(p),
          (It = y(
            ls,
            ' Set to true if you always want your graphic to be full width'
          )),
          ls.forEach(p),
          (xt = h(S)),
          (At = l(S, 'LI', {}));
        var cs = r(At);
        Dt = l(cs, 'CODE', {});
        var hs = r(Dt);
        (Wt = y(hs, 'IncludeSmall')),
          hs.forEach(p),
          (_t = y(
            cs,
            '  Set to true if you have mobile versions. Mobile versions must be named with a ‘_sm’ suffix. I.e. ‘yourID_sm.json’'
          )),
          cs.forEach(p),
          (Tt = h(S)),
          (Ft = l(S, 'LI', {}));
        var ps = r(Ft);
        Ot = l(ps, 'CODE', {});
        var ds = r(Ot);
        (jt = y(ds, 'SmallWidthRatio')),
          ds.forEach(p),
          (zt = y(
            ps,
            '  With ratio of your mobile version. Square (widthRatio: 1) is recommended and is the default.'
          )),
          ps.forEach(p),
          S.forEach(p),
          (Mt = h(e)),
          (Ht = l(e, 'P', {}));
        var us = r(Ht);
        (Pt = y(us, 'Only ')), (qt = l(us, 'CODE', {}));
        var ms = r(qt);
        (Bt = y(ms, 'id')),
          ms.forEach(p),
          (Nt = y(
            us,
            ' is required. All other props are optional and can be deleted from the Google doc, which should be laid out like this:'
          )),
          us.forEach(p),
          (Gt = h(e)),
          (Vt = l(e, 'PRE', { class: !0 })),
          r(Vt).forEach(p),
          e.forEach(p),
          (Yt = h(t)),
          (Qt = l(t, 'PRE', { class: !0 })),
          r(Qt).forEach(p),
          (Ut = h(t)),
          E(Xt.$$.fragment, t),
          this.h();
      },
      h() {
        d(w, 'href', 'https://aescripts.com/bodymovin/'),
          d(w, 'rel', 'nofollow'),
          d(I, 'href', 'https://www.npmjs.com/package/lottie-web'),
          d(I, 'rel', 'nofollow'),
          d(D, 'href', 'http://archieml.org/'),
          d(D, 'rel', 'nofollow'),
          d(Vt, 'class', 'language-bash'),
          d(Qt, 'class', 'language-svelte');
      },
      m(t, e) {
        u(t, s, e),
          m(s, a),
          m(a, n),
          m(s, i),
          m(s, c),
          m(c, f),
          m(c, w),
          m(w, g),
          m(c, b),
          m(c, I),
          m(I, x),
          m(c, A),
          m(c, D),
          m(D, W),
          m(c, _),
          m(s, T),
          m(s, O),
          m(O, j),
          m(j, M),
          m(O, H),
          m(O, P),
          m(P, q),
          m(s, B),
          m(s, N),
          m(N, G),
          m(G, V),
          m(V, Y),
          m(G, Q),
          m(G, U),
          m(U, X),
          m(N, J),
          m(N, K),
          m(K, Z),
          m(Z, tt),
          m(K, st),
          m(N, at),
          m(N, nt),
          m(nt, et),
          m(nt, it),
          m(it, ot),
          m(nt, lt),
          m(nt, rt),
          m(rt, ct),
          m(nt, ht),
          m(nt, pt),
          m(pt, dt),
          m(nt, ut),
          m(N, mt),
          m(N, ft),
          m(ft, wt),
          m(wt, gt),
          m(ft, bt),
          m(N, kt),
          m(N, vt),
          m(vt, yt),
          m(yt, Et),
          m(vt, Rt),
          m(N, $t),
          m(N, St),
          m(St, Ct),
          m(Ct, Lt),
          m(St, It),
          m(N, xt),
          m(N, At),
          m(At, Dt),
          m(Dt, Wt),
          m(At, _t),
          m(N, Tt),
          m(N, Ft),
          m(Ft, Ot),
          m(Ot, jt),
          m(Ft, zt),
          m(s, Mt),
          m(s, Ht),
          m(Ht, Pt),
          m(Ht, qt),
          m(qt, Bt),
          m(Ht, Nt),
          m(s, Gt),
          m(s, Vt),
          (Vt.innerHTML =
            '<code class="language-bash"><span class="token comment"># In your Google doc...</span>\n<span class="token punctuation">[</span>blocks<span class="token punctuation">]</span>\n\n<span class="token comment"># ...</span>\nType: lottie-scroller\nID: my-lotite-scroller\nPlaybackConst: <span class="token number">75</span> // optional\nWidthRatio:1.78  // optional\nFullFrame: <span class="token boolean">false</span>  // optional\nIncludeSmall: <span class="token boolean">false</span>  // optional\nSmallWidthRatio: <span class="token number">1</span>  // optional\n<span class="token punctuation">[</span>.blurbs<span class="token punctuation">]</span> // optional\nseconds: .5\ntext: <span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span># Step <span class="token number">1</span>\n\nLorem ipsum<span class="token punctuation">..</span>.\n:end\n\nseconds: <span class="token number">1</span>\ntext: <span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span># Step <span class="token number">2</span>\n\nLorem ipsum<span class="token punctuation">..</span>.\n:end\n\nseconds: <span class="token number">1.5</span>\ntext: <span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span>#<span class="token punctuation"></span># Step <span class="token number">3</span>\n\nLorem ipsum<span class="token punctuation">..</span>.\n:end\n\n<span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n<span class="token punctuation">[</span><span class="token punctuation">]</span></code>'),
          u(t, Yt, e),
          u(t, Qt, e),
          (Qt.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> LottieScroller <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LottieScroller</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>liberia<span class="token punctuation">\'</span></span> <span class="token attr-name">steps=</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>steps<span class="token punctuation">&#125;</span></span>  <span class="token punctuation">/></span></span></code>'),
          u(t, Ut, e),
          R(Xt, t, e),
          (Jt = !0);
      },
      p(t, [s]) {
        const a = {};
        2 & s && (a.$$scope = { dirty: s, ctx: t }), Xt.$set(a);
      },
      i(t) {
        Jt || ($(Xt.$$.fragment, t), (Jt = !0));
      },
      o(t) {
        S(Xt.$$.fragment, t), (Jt = !1);
      },
      d(t) {
        t && p(s), t && p(Yt), t && p(Qt), t && p(Ut), C(Xt, t);
      },
    }
  );
}
const j = {
    title: 'LottieScroller',
    description: 'Easy scrolly-telling with lottie',
    slug: 'lottie-scroller',
  },
  { title: z, description: M, slug: H } = j;
function P(t) {
  return [
    [
      {
        seconds: '.1',
        text: '#### Step 1\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        seconds: '.6',
        text: '#### Step 2\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        seconds: '1',
        text: '#### Step 3\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        seconds: '1.5',
        text: "#### Step 4\n\nThe lottie animation continues until it's finished even if you don't have blurbs.",
      },
    ],
  ];
}
export default class extends s {
  constructor(t) {
    super(), a(this, t, P, O, n, {});
  }
}
export { j as metadata };
