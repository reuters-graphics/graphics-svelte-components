var Ze = Object.defineProperty,
  et = Object.defineProperties;
var tt = Object.getOwnPropertyDescriptors;
var ce = Object.getOwnPropertySymbols;
var qe = Object.prototype.hasOwnProperty,
  ze = Object.prototype.propertyIsEnumerable;
var Ve = (s, e, t) =>
    e in s
      ? Ze(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (s[e] = t),
  O = (s, e) => {
    for (var t in e || (e = {})) qe.call(e, t) && Ve(s, t, e[t]);
    if (ce) for (var t of ce(e)) ze.call(e, t) && Ve(s, t, e[t]);
    return s;
  },
  ne = (s, e) => et(s, tt(e));
var Je = (s, e) => {
  var t = {};
  for (var a in s) qe.call(s, a) && e.indexOf(a) < 0 && (t[a] = s[a]);
  if (s != null && ce)
    for (var a of ce(s)) e.indexOf(a) < 0 && ze.call(s, a) && (t[a] = s[a]);
  return t;
};
import {
  S as nt,
  i as st,
  s as rt,
  e as at,
  c as it,
  a as ot,
  d as j,
  b as be,
  f as K,
  g as D,
  t as lt,
  h as ct,
  j as ft,
  k as ut,
  l as x,
  m as dt,
  n as Y,
  o as I,
  p as W,
  q as P,
  r as pt,
  u as _t,
  v as $e,
  w as V,
  x as re,
  y as q,
  z as ae,
  A as ie,
  B as z,
  C as oe,
  D as ue,
  E as Ke,
} from './chunks/vendor-f398e5e0.js';
import { s as ht, a as mt } from './chunks/paths-396f020f.js';
import { _ as fe } from './chunks/preload-helper-092457a4.js';
function gt(s) {
  let e, t, a;
  const c = [s[1] || {}];
  var l = s[0][0];
  function u(n) {
    let r = {};
    for (let i = 0; i < c.length; i += 1) r = oe(r, c[i]);
    return { props: r };
  }
  return (
    l && (e = new l(u())),
    {
      c() {
        e && V(e.$$.fragment), (t = x());
      },
      l(n) {
        e && re(e.$$.fragment, n), (t = x());
      },
      m(n, r) {
        e && q(e, n, r), D(n, t, r), (a = !0);
      },
      p(n, r) {
        const i = r & 2 ? ae(c, [ie(n[1] || {})]) : {};
        if (l !== (l = n[0][0])) {
          if (e) {
            Y();
            const d = e;
            I(d.$$.fragment, 1, 0, () => {
              z(d, 1);
            }),
              W();
          }
          l
            ? ((e = new l(u())),
              V(e.$$.fragment),
              P(e.$$.fragment, 1),
              q(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(i);
      },
      i(n) {
        a || (e && P(e.$$.fragment, n), (a = !0));
      },
      o(n) {
        e && I(e.$$.fragment, n), (a = !1);
      },
      d(n) {
        n && j(t), e && z(e, n);
      },
    }
  );
}
function wt(s) {
  let e, t, a;
  const c = [s[1] || {}];
  var l = s[0][0];
  function u(n) {
    let r = { $$slots: { default: [$t] }, $$scope: { ctx: n } };
    for (let i = 0; i < c.length; i += 1) r = oe(r, c[i]);
    return { props: r };
  }
  return (
    l && (e = new l(u(s))),
    {
      c() {
        e && V(e.$$.fragment), (t = x());
      },
      l(n) {
        e && re(e.$$.fragment, n), (t = x());
      },
      m(n, r) {
        e && q(e, n, r), D(n, t, r), (a = !0);
      },
      p(n, r) {
        const i = r & 2 ? ae(c, [ie(n[1] || {})]) : {};
        if (
          (r & 525 && (i.$$scope = { dirty: r, ctx: n }), l !== (l = n[0][0]))
        ) {
          if (e) {
            Y();
            const d = e;
            I(d.$$.fragment, 1, 0, () => {
              z(d, 1);
            }),
              W();
          }
          l
            ? ((e = new l(u(n))),
              V(e.$$.fragment),
              P(e.$$.fragment, 1),
              q(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(i);
      },
      i(n) {
        a || (e && P(e.$$.fragment, n), (a = !0));
      },
      o(n) {
        e && I(e.$$.fragment, n), (a = !1);
      },
      d(n) {
        n && j(t), e && z(e, n);
      },
    }
  );
}
function bt(s) {
  let e, t, a;
  const c = [s[2] || {}];
  var l = s[0][1];
  function u(n) {
    let r = {};
    for (let i = 0; i < c.length; i += 1) r = oe(r, c[i]);
    return { props: r };
  }
  return (
    l && (e = new l(u())),
    {
      c() {
        e && V(e.$$.fragment), (t = x());
      },
      l(n) {
        e && re(e.$$.fragment, n), (t = x());
      },
      m(n, r) {
        e && q(e, n, r), D(n, t, r), (a = !0);
      },
      p(n, r) {
        const i = r & 4 ? ae(c, [ie(n[2] || {})]) : {};
        if (l !== (l = n[0][1])) {
          if (e) {
            Y();
            const d = e;
            I(d.$$.fragment, 1, 0, () => {
              z(d, 1);
            }),
              W();
          }
          l
            ? ((e = new l(u())),
              V(e.$$.fragment),
              P(e.$$.fragment, 1),
              q(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(i);
      },
      i(n) {
        a || (e && P(e.$$.fragment, n), (a = !0));
      },
      o(n) {
        e && I(e.$$.fragment, n), (a = !1);
      },
      d(n) {
        n && j(t), e && z(e, n);
      },
    }
  );
}
function vt(s) {
  let e, t, a;
  const c = [s[2] || {}];
  var l = s[0][1];
  function u(n) {
    let r = { $$slots: { default: [yt] }, $$scope: { ctx: n } };
    for (let i = 0; i < c.length; i += 1) r = oe(r, c[i]);
    return { props: r };
  }
  return (
    l && (e = new l(u(s))),
    {
      c() {
        e && V(e.$$.fragment), (t = x());
      },
      l(n) {
        e && re(e.$$.fragment, n), (t = x());
      },
      m(n, r) {
        e && q(e, n, r), D(n, t, r), (a = !0);
      },
      p(n, r) {
        const i = r & 4 ? ae(c, [ie(n[2] || {})]) : {};
        if (
          (r & 521 && (i.$$scope = { dirty: r, ctx: n }), l !== (l = n[0][1]))
        ) {
          if (e) {
            Y();
            const d = e;
            I(d.$$.fragment, 1, 0, () => {
              z(d, 1);
            }),
              W();
          }
          l
            ? ((e = new l(u(n))),
              V(e.$$.fragment),
              P(e.$$.fragment, 1),
              q(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(i);
      },
      i(n) {
        a || (e && P(e.$$.fragment, n), (a = !0));
      },
      o(n) {
        e && I(e.$$.fragment, n), (a = !1);
      },
      d(n) {
        n && j(t), e && z(e, n);
      },
    }
  );
}
function yt(s) {
  let e, t, a;
  const c = [s[3] || {}];
  var l = s[0][2];
  function u(n) {
    let r = {};
    for (let i = 0; i < c.length; i += 1) r = oe(r, c[i]);
    return { props: r };
  }
  return (
    l && (e = new l(u())),
    {
      c() {
        e && V(e.$$.fragment), (t = x());
      },
      l(n) {
        e && re(e.$$.fragment, n), (t = x());
      },
      m(n, r) {
        e && q(e, n, r), D(n, t, r), (a = !0);
      },
      p(n, r) {
        const i = r & 8 ? ae(c, [ie(n[3] || {})]) : {};
        if (l !== (l = n[0][2])) {
          if (e) {
            Y();
            const d = e;
            I(d.$$.fragment, 1, 0, () => {
              z(d, 1);
            }),
              W();
          }
          l
            ? ((e = new l(u())),
              V(e.$$.fragment),
              P(e.$$.fragment, 1),
              q(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(i);
      },
      i(n) {
        a || (e && P(e.$$.fragment, n), (a = !0));
      },
      o(n) {
        e && I(e.$$.fragment, n), (a = !1);
      },
      d(n) {
        n && j(t), e && z(e, n);
      },
    }
  );
}
function $t(s) {
  let e, t, a, c;
  const l = [vt, bt],
    u = [];
  function n(r, i) {
    return r[0][2] ? 0 : 1;
  }
  return (
    (e = n(s)),
    (t = u[e] = l[e](s)),
    {
      c() {
        t.c(), (a = x());
      },
      l(r) {
        t.l(r), (a = x());
      },
      m(r, i) {
        u[e].m(r, i), D(r, a, i), (c = !0);
      },
      p(r, i) {
        let d = e;
        (e = n(r)),
          e === d
            ? u[e].p(r, i)
            : (Y(),
              I(u[d], 1, 1, () => {
                u[d] = null;
              }),
              W(),
              (t = u[e]),
              t ? t.p(r, i) : ((t = u[e] = l[e](r)), t.c()),
              P(t, 1),
              t.m(a.parentNode, a));
      },
      i(r) {
        c || (P(t), (c = !0));
      },
      o(r) {
        I(t), (c = !1);
      },
      d(r) {
        u[e].d(r), r && j(a);
      },
    }
  );
}
function Be(s) {
  let e,
    t = s[5] && Me(s);
  return {
    c() {
      (e = at('div')), t && t.c(), this.h();
    },
    l(a) {
      e = it(a, 'DIV', {
        id: !0,
        'aria-live': !0,
        'aria-atomic': !0,
        style: !0,
      });
      var c = ot(e);
      t && t.l(c), c.forEach(j), this.h();
    },
    h() {
      be(e, 'id', 'svelte-announcer'),
        be(e, 'aria-live', 'assertive'),
        be(e, 'aria-atomic', 'true'),
        K(e, 'position', 'absolute'),
        K(e, 'left', '0'),
        K(e, 'top', '0'),
        K(e, 'clip', 'rect(0 0 0 0)'),
        K(e, 'clip-path', 'inset(50%)'),
        K(e, 'overflow', 'hidden'),
        K(e, 'white-space', 'nowrap'),
        K(e, 'width', '1px'),
        K(e, 'height', '1px');
    },
    m(a, c) {
      D(a, e, c), t && t.m(e, null);
    },
    p(a, c) {
      a[5]
        ? t
          ? t.p(a, c)
          : ((t = Me(a)), t.c(), t.m(e, null))
        : t && (t.d(1), (t = null));
    },
    d(a) {
      a && j(e), t && t.d();
    },
  };
}
function Me(s) {
  let e;
  return {
    c() {
      e = lt(s[6]);
    },
    l(t) {
      e = ct(t, s[6]);
    },
    m(t, a) {
      D(t, e, a);
    },
    p(t, a) {
      a & 64 && ft(e, t[6]);
    },
    d(t) {
      t && j(e);
    },
  };
}
function kt(s) {
  let e, t, a, c, l;
  const u = [wt, gt],
    n = [];
  function r(d, R) {
    return d[0][1] ? 0 : 1;
  }
  (e = r(s)), (t = n[e] = u[e](s));
  let i = s[4] && Be(s);
  return {
    c() {
      t.c(), (a = ut()), i && i.c(), (c = x());
    },
    l(d) {
      t.l(d), (a = dt(d)), i && i.l(d), (c = x());
    },
    m(d, R) {
      n[e].m(d, R), D(d, a, R), i && i.m(d, R), D(d, c, R), (l = !0);
    },
    p(d, [R]) {
      let y = e;
      (e = r(d)),
        e === y
          ? n[e].p(d, R)
          : (Y(),
            I(n[y], 1, 1, () => {
              n[y] = null;
            }),
            W(),
            (t = n[e]),
            t ? t.p(d, R) : ((t = n[e] = u[e](d)), t.c()),
            P(t, 1),
            t.m(a.parentNode, a)),
        d[4]
          ? i
            ? i.p(d, R)
            : ((i = Be(d)), i.c(), i.m(c.parentNode, c))
          : i && (i.d(1), (i = null));
    },
    i(d) {
      l || (P(t), (l = !0));
    },
    o(d) {
      I(t), (l = !1);
    },
    d(d) {
      n[e].d(d), d && j(a), i && i.d(d), d && j(c);
    },
  };
}
function Et(s, e, t) {
  let { stores: a } = e,
    { page: c } = e,
    { components: l } = e,
    { props_0: u = null } = e,
    { props_1: n = null } = e,
    { props_2: r = null } = e;
  pt('__svelte__', a), _t(a.page.notify);
  let i = !1,
    d = !1,
    R = null;
  return (
    $e(() => {
      const y = a.page.subscribe(() => {
        i && (t(5, (d = !0)), t(6, (R = document.title || 'untitled page')));
      });
      return t(4, (i = !0)), y;
    }),
    (s.$$set = (y) => {
      'stores' in y && t(7, (a = y.stores)),
        'page' in y && t(8, (c = y.page)),
        'components' in y && t(0, (l = y.components)),
        'props_0' in y && t(1, (u = y.props_0)),
        'props_1' in y && t(2, (n = y.props_1)),
        'props_2' in y && t(3, (r = y.props_2));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 384 && a.page.set(c);
    }),
    [l, u, n, r, i, d, R, a, c]
  );
}
class Rt extends nt {
  constructor(e) {
    super();
    st(this, e, Et, kt, rt, {
      stores: 7,
      page: 8,
      components: 0,
      props_0: 1,
      props_1: 2,
      props_2: 3,
    });
  }
}
const Lt = {},
  Ee = [
    () =>
      fe(
        () => import('./layout.svelte-a76a3d4b.js'),
        [
          'layout.svelte-a76a3d4b.js',
          'chunks/vendor-f398e5e0.js',
          'assets/vendor-c9bf64b2.css',
        ]
      ),
    () =>
      fe(
        () => import('./error.svelte-700556db.js'),
        [
          'error.svelte-700556db.js',
          'chunks/vendor-f398e5e0.js',
          'assets/vendor-c9bf64b2.css',
        ]
      ),
    () =>
      fe(
        () => import('./pages/index.svelte-9c9c566f.js'),
        [
          'pages/index.svelte-9c9c566f.js',
          'assets/pages/index.svelte-2297a631.css',
          'chunks/vendor-f398e5e0.js',
          'assets/vendor-c9bf64b2.css',
          'chunks/@component-docs_components-890b5864.js',
          'assets/@component-docs_components-fb20438e.css',
          'chunks/paths-396f020f.js',
        ]
      ),
    () =>
      fe(
        () => import('./pages/components/_slug_.svelte-fdc4f4d5.js'),
        [
          'pages/components/_slug_.svelte-fdc4f4d5.js',
          'assets/pages/components/_slug_.svelte-bb70b2cc.css',
          'chunks/preload-helper-092457a4.js',
          'chunks/vendor-f398e5e0.js',
          'assets/vendor-c9bf64b2.css',
          'chunks/@component-docs_components-890b5864.js',
          'assets/@component-docs_components-fb20438e.css',
          'chunks/paths-396f020f.js',
        ]
      ),
  ],
  St = { '': [[0, 2], [1]], 'components/[slug]': [[0, 3], [1]] };
function Ye(s) {
  return s instanceof Error || (s && s.name && s.message)
    ? s
    : new Error(JSON.stringify(s));
}
function We(s) {
  const e = s.status && s.status >= 400 && s.status <= 599 && !s.redirect;
  if (s.error || e) {
    const t = s.status;
    if (!s.error && e) return { status: t || 500, error: new Error() };
    const a = typeof s.error == 'string' ? new Error(s.error) : s.error;
    return a instanceof Error
      ? !t || t < 400 || t > 599
        ? (console.warn(
            '"error" returned from load() without a valid status code \u2014 defaulting to 500'
          ),
          { status: 500, error: a })
        : { status: t, error: a }
      : {
          status: 500,
          error: new Error(
            `"error" property returned from load() must be a string or instance of Error, received type "${typeof a}"`
          ),
        };
  }
  if (s.redirect) {
    if (!s.status || Math.floor(s.status / 100) !== 3)
      return {
        status: 500,
        error: new Error(
          '"redirect" property returned from load() must be accompanied by a 3xx status code'
        ),
      };
    if (typeof s.redirect != 'string')
      return {
        status: 500,
        error: new Error(
          '"redirect" property returned from load() must be a string'
        ),
      };
  }
  if (s.context)
    throw new Error(
      'You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.'
    );
  return s;
}
function Ut(s, e) {
  return s === '/' || e === 'ignore'
    ? s
    : e === 'never'
    ? s.endsWith('/')
      ? s.slice(0, -1)
      : s
    : e === 'always' && /\/[^./]+$/.test(s)
    ? s + '/'
    : s;
}
function At(s) {
  let e = 5381,
    t = s.length;
  if (typeof s == 'string') for (; t; ) e = (e * 33) ^ s.charCodeAt(--t);
  else for (; t; ) e = (e * 33) ^ s[--t];
  return (e >>> 0).toString(36);
}
function Fe(s) {
  let e = s.baseURI;
  if (!e) {
    const t = s.getElementsByTagName('base');
    e = t.length ? t[0].href : s.URL;
  }
  return e;
}
function ke() {
  return { x: pageXOffset, y: pageYOffset };
}
function Ge(s) {
  return s
    .composedPath()
    .find((t) => t instanceof Node && t.nodeName.toUpperCase() === 'A');
}
function Xe(s) {
  return s instanceof SVGAElement
    ? new URL(s.href.baseVal, document.baseURI)
    : new URL(s.href);
}
function He(s) {
  const e = ue(s);
  let t = !0;
  function a() {
    (t = !0), e.update((u) => u);
  }
  function c(u) {
    (t = !1), e.set(u);
  }
  function l(u) {
    let n;
    return e.subscribe((r) => {
      (n === void 0 || (t && r !== n)) && u((n = r));
    });
  }
  return { notify: a, set: c, subscribe: l };
}
function Nt() {
  const { set: s, subscribe: e } = ue(!1),
    t = '1653921994758';
  let a;
  async function c() {
    clearTimeout(a);
    const u = await fetch(`${mt}/app/version.json`, {
      headers: { pragma: 'no-cache', 'cache-control': 'no-cache' },
    });
    if (u.ok) {
      const { version: n } = await u.json(),
        r = n !== t;
      return r && (s(!0), clearTimeout(a)), r;
    } else throw new Error(`Version check failed: ${u.status}`);
  }
  return { subscribe: e, check: c };
}
function Ot(s, e) {
  let a = `script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(
    typeof s == 'string' ? s : s.url
  )}]`;
  e &&
    typeof e.body == 'string' &&
    (a += `[sveltekit\\:data-body="${At(e.body)}"]`);
  const c = document.querySelector(a);
  if (c && c.textContent) {
    const l = JSON.parse(c.textContent),
      { body: u } = l,
      n = Je(l, ['body']);
    return Promise.resolve(new Response(u, n));
  }
  return fetch(s, e);
}
const xt = /^(\.\.\.)?(\w+)(?:=(\w+))?$/;
function It(s) {
  const e = [],
    t = [];
  let a = !0;
  return {
    pattern:
      s === ''
        ? /^\/$/
        : new RegExp(
            `^${decodeURIComponent(s)
              .split('/')
              .map((l, u, n) => {
                const r = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(l);
                if (r) return e.push(r[1]), t.push(r[2]), '(?:/(.*))?';
                const i = u === n.length - 1;
                return (
                  '/' +
                  l
                    .split(/\[(.+?)\]/)
                    .map((d, R) => {
                      if (R % 2) {
                        const [, y, H, F] = xt.exec(d);
                        return e.push(H), t.push(F), y ? '(.*?)' : '([^/]+?)';
                      }
                      return (
                        i && d.includes('.') && (a = !1),
                        d
                          .normalize()
                          .replace(/%5[Bb]/g, '[')
                          .replace(/%5[Dd]/g, ']')
                          .replace(/#/g, '%23')
                          .replace(/\?/g, '%3F')
                          .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
                      );
                    })
                    .join('')
                );
              })
              .join('')}${a ? '/?' : ''}$`
          ),
    names: e,
    types: t,
  };
}
function Pt(s, e, t, a) {
  const c = {};
  for (let l = 0; l < e.length; l += 1) {
    const u = e[l],
      n = t[l],
      r = s[l + 1] || '';
    if (n) {
      const i = a[n];
      if (!i) throw new Error(`Missing "${n}" param matcher`);
      if (!i(r)) return;
    }
    c[u] = r;
  }
  return c;
}
function Tt(s, e, t) {
  return Object.entries(e).map(([c, [l, u, n]]) => {
    const { pattern: r, names: i, types: d } = It(c);
    return {
      id: c,
      exec: (R) => {
        const y = r.exec(R);
        if (y) return Pt(y, i, d, t);
      },
      a: l.map((R) => s[R]),
      b: u.map((R) => s[R]),
      has_shadow: !!n,
    };
  });
}
const Qe = 'sveltekit:scroll',
  B = 'sveltekit:index',
  ve = Tt(Ee, St, Lt),
  jt = Ee[0](),
  Ct = Ee[1]();
let se = {};
try {
  se = JSON.parse(sessionStorage[Qe]);
} catch {}
function ye(s) {
  se[s] = ke();
}
function Dt({ target: s, session: e, base: t, trailing_slash: a }) {
  var Te, je;
  const c = new Map(),
    l = new Set(),
    u = {
      url: He({}),
      page: He({}),
      navigating: ue(null),
      session: ue(e),
      updated: Nt(),
    },
    n = { id: null, promise: null },
    r = { before_navigate: [], after_navigate: [] };
  let i = { url: null, session_id: 0, branch: [] },
    d = !1,
    R = !0,
    y = !1,
    H = 1,
    F = null,
    Re,
    Le,
    Se = !1;
  u.session.subscribe(async (o) => {
    (Le = o), Se && ((H += 1), me(new URL(location.href), [], !0));
  }),
    (Se = !0);
  let de = 0,
    G = !0,
    C = (je = (Te = history.state) == null ? void 0 : Te[B]) != null ? je : 0;
  C === 0 &&
    history.replaceState(
      ne(O({}, history.state), { [B]: 0 }),
      '',
      location.href
    );
  const pe = se[C];
  pe && scrollTo(pe.x, pe.y);
  let _e = !1,
    he,
    Ue,
    Ae;
  async function Ne(
    o,
    {
      noscroll: _ = !1,
      replaceState: b = !1,
      keepfocus: f = !1,
      state: h = {},
    },
    w
  ) {
    const m = new URL(o, Fe(document));
    if (G)
      return we({
        url: m,
        scroll: _ ? ke() : null,
        keepfocus: f,
        redirect_chain: w,
        details: { state: h, replaceState: b },
        accepted: () => {},
        blocked: () => {},
      });
    await ee(m);
  }
  async function Oe(o) {
    const _ = Pe(o);
    if (!_)
      throw new Error(
        'Attempted to prefetch a URL that does not belong to this app'
      );
    return (n.promise = Ie(_, !1)), (n.id = _.id), n.promise;
  }
  async function me(o, _, b, f) {
    var g, k, L;
    const h = Pe(o),
      w = (Ue = {});
    let m = h && (await Ie(h, b));
    if (
      (!m &&
        o.pathname === location.pathname &&
        (m = await Z({
          status: 404,
          error: new Error(`Not found: ${o.pathname}`),
          url: o,
          routeId: null,
        })),
      !m)
    ) {
      await ee(o);
      return;
    }
    if (Ue !== w) return;
    if ((l.clear(), m.redirect))
      if (_.length > 10 || _.includes(o.pathname))
        m = await Z({
          status: 500,
          error: new Error('Redirect loop'),
          url: o,
          routeId: null,
        });
      else {
        G
          ? Ne(new URL(m.redirect, o).href, {}, [..._, o.pathname])
          : await ee(new URL(m.redirect, location.href));
        return;
      }
    else
      ((k = (g = m.props) == null ? void 0 : g.page) == null
        ? void 0
        : k.status) >= 400 &&
        (await u.updated.check()) &&
        (await ee(o));
    if (((y = !0), f && f.details)) {
      const { details: v } = f,
        S = v.replaceState ? 0 : 1;
      (v.state[B] = C += S),
        history[v.replaceState ? 'replaceState' : 'pushState'](v.state, '', o);
    }
    if ((d ? ((i = m.state), Re.$set(m.props)) : xe(m), f)) {
      const { scroll: v, keepfocus: S } = f;
      if (!S) {
        const p = document.body,
          E = p.getAttribute('tabindex');
        (L = getSelection()) == null || L.removeAllRanges(),
          (p.tabIndex = -1),
          p.focus(),
          E !== null
            ? p.setAttribute('tabindex', E)
            : p.removeAttribute('tabindex');
      }
      if ((await Ke(), R)) {
        const p = o.hash && document.getElementById(o.hash.slice(1));
        v ? scrollTo(v.x, v.y) : p ? p.scrollIntoView() : scrollTo(0, 0);
      }
    } else await Ke();
    (n.promise = null),
      (n.id = null),
      (R = !0),
      (y = !1),
      m.props.page && (he = m.props.page);
    const $ = m.state.branch[m.state.branch.length - 1];
    G = ($ == null ? void 0 : $.module.router) !== !1;
  }
  function xe(o) {
    i = o.state;
    const _ = document.querySelector('style[data-svelte]');
    if (
      (_ && _.remove(),
      (he = o.props.page),
      (Re = new Rt({
        target: s,
        props: ne(O({}, o.props), { stores: u }),
        hydrate: !0,
      })),
      (d = !0),
      G)
    ) {
      const b = { from: null, to: new URL(location.href) };
      r.after_navigate.forEach((f) => f(b));
    }
  }
  async function ge({
    url: o,
    params: _,
    stuff: b,
    branch: f,
    status: h,
    error: w,
    routeId: m,
  }) {
    var S;
    const $ = f.filter(Boolean),
      g = $.find((p) => {
        var E;
        return (E = p.loaded) == null ? void 0 : E.redirect;
      }),
      k = {
        redirect:
          (S = g == null ? void 0 : g.loaded) == null ? void 0 : S.redirect,
        state: { url: o, params: _, branch: f, session_id: H },
        props: { components: $.map((p) => p.module.default) },
      };
    for (let p = 0; p < $.length; p += 1) {
      const E = $[p].loaded;
      k.props[`props_${p}`] = E ? await E.props : null;
    }
    if (!i.url || o.href !== i.url.href) {
      k.props.page = {
        error: w,
        params: _,
        routeId: m,
        status: h,
        stuff: b,
        url: o,
      };
      const p = (E, J) => {
        Object.defineProperty(k.props.page, E, {
          get: () => {
            throw new Error(`$page.${E} has been replaced by $page.url.${J}`);
          },
        });
      };
      p('origin', 'origin'), p('path', 'pathname'), p('query', 'searchParams');
    }
    const L = $[$.length - 1],
      v = L.loaded && L.loaded.maxage;
    if (v) {
      const p = o.pathname + o.search;
      let E = !1;
      const J = () => {
          c.get(p) === k && c.delete(p), U(), clearTimeout(X);
        },
        X = setTimeout(J, v * 1e3),
        U = u.session.subscribe(() => {
          E && J();
        });
      (E = !0), c.set(p, k);
    }
    return k;
  }
  async function Q({
    status: o,
    error: _,
    module: b,
    url: f,
    params: h,
    stuff: w,
    props: m,
    routeId: $,
  }) {
    const g = {
      module: b,
      uses: {
        params: new Set(),
        url: !1,
        session: !1,
        stuff: !1,
        dependencies: new Set(),
      },
      loaded: null,
      stuff: w,
    };
    m && g.uses.dependencies.add(f.href);
    const k = {};
    for (const v in h)
      Object.defineProperty(k, v, {
        get() {
          return g.uses.params.add(v), h[v];
        },
        enumerable: !0,
      });
    const L = Le;
    if (b.load) {
      const v = {
        routeId: $,
        params: k,
        props: m || {},
        get url() {
          return (g.uses.url = !0), f;
        },
        get session() {
          return (g.uses.session = !0), L;
        },
        get stuff() {
          return (g.uses.stuff = !0), O({}, w);
        },
        fetch(p, E) {
          const J = typeof p == 'string' ? p : p.url,
            { href: X } = new URL(J, f);
          return g.uses.dependencies.add(X), d ? fetch(p, E) : Ot(p, E);
        },
      };
      _ && ((v.status = o), (v.error = _));
      const S = await b.load.call(null, v);
      if (!S) throw new Error('load function must return a value');
      (g.loaded = We(S)), g.loaded.stuff && (g.stuff = g.loaded.stuff);
    } else m && (g.loaded = We({ props: m }));
    return g;
  }
  async function Ie({ id: o, url: _, params: b, route: f }, h) {
    var E, J, X;
    if (n.id === o && n.promise) return n.promise;
    if (!h) {
      const U = c.get(o);
      if (U) return U;
    }
    const { a: w, b: m, has_shadow: $ } = f,
      g = i.url && {
        url: o !== i.url.pathname + i.url.search,
        params: Object.keys(b).filter((U) => i.params[U] !== b[U]),
        session: H !== i.session_id,
      };
    let k = [],
      L = {},
      v = !1,
      S = 200,
      p;
    w.forEach((U) => U());
    e: for (let U = 0; U < w.length; U += 1) {
      let A;
      try {
        if (!w[U]) continue;
        const N = await w[U](),
          T = i.branch[U];
        if (
          !T ||
          N !== T.module ||
          (g.url && T.uses.url) ||
          g.params.some((M) => T.uses.params.has(M)) ||
          (g.session && T.uses.session) ||
          Array.from(T.uses.dependencies).some((M) => l.has(M)) ||
          (v && T.uses.stuff)
        ) {
          let M = {};
          const Ce = $ && U === w.length - 1;
          if (Ce) {
            const te = await fetch(
              `${_.pathname}${_.pathname.endsWith('/') ? '' : '/'}__data.json${
                _.search
              }`,
              { headers: { 'x-sveltekit-load': 'true' } }
            );
            if (te.ok) {
              const De = te.headers.get('x-sveltekit-location');
              if (De) return { redirect: De, props: {}, state: i };
              M = te.status === 204 ? {} : await te.json();
            } else (S = te.status), (p = new Error('Failed to load data'));
          }
          if (
            (p ||
              (A = await Q({
                module: N,
                url: _,
                params: b,
                props: M,
                stuff: L,
                routeId: f.id,
              })),
            A && (Ce && (A.uses.url = !0), A.loaded))
          ) {
            if (A.loaded.fallthrough)
              throw new Error(
                'fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-validation'
              );
            if (
              (A.loaded.error && ((S = A.loaded.status), (p = A.loaded.error)),
              A.loaded.redirect)
            )
              return { redirect: A.loaded.redirect, props: {}, state: i };
            A.loaded.stuff && (v = !0);
          }
        } else A = T;
      } catch (N) {
        (S = 500), (p = Ye(N));
      }
      if (p) {
        for (; U--; )
          if (m[U]) {
            let N,
              T,
              le = U;
            for (; !(T = k[le]); ) le -= 1;
            try {
              if (
                ((N = await Q({
                  status: S,
                  error: p,
                  module: await m[U](),
                  url: _,
                  params: b,
                  stuff: T.stuff,
                  routeId: f.id,
                })),
                (E = N == null ? void 0 : N.loaded) != null && E.error)
              )
                continue;
              (J = N == null ? void 0 : N.loaded) != null &&
                J.stuff &&
                (L = O(O({}, L), N.loaded.stuff)),
                (k = k.slice(0, le + 1).concat(N));
              break e;
            } catch {
              continue;
            }
          }
        return await Z({ status: S, error: p, url: _, routeId: f.id });
      } else
        (X = A == null ? void 0 : A.loaded) != null &&
          X.stuff &&
          (L = O(O({}, L), A.loaded.stuff)),
          k.push(A);
    }
    return await ge({
      url: _,
      params: b,
      stuff: L,
      branch: k,
      status: S,
      error: p,
      routeId: f.id,
    });
  }
  async function Z({ status: o, error: _, url: b, routeId: f }) {
    var $, g;
    const h = {},
      w = await Q({
        module: await jt,
        url: b,
        params: h,
        stuff: {},
        routeId: f,
      }),
      m = await Q({
        status: o,
        error: _,
        module: await Ct,
        url: b,
        params: h,
        stuff: (w && w.loaded && w.loaded.stuff) || {},
        routeId: f,
      });
    return await ge({
      url: b,
      params: h,
      stuff: O(
        O({}, ($ = w == null ? void 0 : w.loaded) == null ? void 0 : $.stuff),
        (g = m == null ? void 0 : m.loaded) == null ? void 0 : g.stuff
      ),
      branch: [w, m],
      status: o,
      error: _,
      routeId: f,
    });
  }
  function Pe(o) {
    if (o.origin !== location.origin || !o.pathname.startsWith(t)) return;
    const _ = decodeURI(o.pathname.slice(t.length) || '/');
    for (const b of ve) {
      const f = b.exec(_);
      if (f) return { id: o.pathname + o.search, route: b, params: f, url: o };
    }
  }
  async function we({
    url: o,
    scroll: _,
    keepfocus: b,
    redirect_chain: f,
    details: h,
    accepted: w,
    blocked: m,
  }) {
    const $ = i.url;
    let g = !1;
    const k = { from: $, to: o, cancel: () => (g = !0) };
    if ((r.before_navigate.forEach((p) => p(k)), g)) {
      m();
      return;
    }
    const L = Ut(o.pathname, a),
      v = new URL(o.origin + L + o.search + o.hash);
    ye(C), w(), de++;
    const S = (Ae = {});
    if (
      (d && u.navigating.set({ from: i.url, to: v }),
      await me(v, f, !1, { scroll: _, keepfocus: b, details: h }),
      de--,
      Ae === S && !de)
    ) {
      const p = { from: $, to: v };
      r.after_navigate.forEach((E) => E(p)), u.navigating.set(null);
    }
  }
  function ee(o) {
    return (location.href = o.href), new Promise(() => {});
  }
  return {
    after_navigate: (o) => {
      $e(
        () => (
          r.after_navigate.push(o),
          () => {
            const _ = r.after_navigate.indexOf(o);
            r.after_navigate.splice(_, 1);
          }
        )
      );
    },
    before_navigate: (o) => {
      $e(
        () => (
          r.before_navigate.push(o),
          () => {
            const _ = r.before_navigate.indexOf(o);
            r.before_navigate.splice(_, 1);
          }
        )
      );
    },
    disable_scroll_handling: () => {
      (y || !d) && (R = !1);
    },
    goto: (o, _ = {}) => Ne(o, _, []),
    invalidate: (o) => {
      const { href: _ } = new URL(o, location.href);
      return (
        l.add(_),
        F ||
          (F = Promise.resolve().then(async () => {
            await me(new URL(location.href), [], !0), (F = null);
          })),
        F
      );
    },
    prefetch: async (o) => {
      const _ = new URL(o, Fe(document));
      await Oe(_);
    },
    prefetch_routes: async (o) => {
      const b = (o ? ve.filter((f) => o.some((h) => f.exec(h))) : ve).map((f) =>
        Promise.all(f.a.map((h) => h()))
      );
      await Promise.all(b);
    },
    _start_router: () => {
      (history.scrollRestoration = 'manual'),
        addEventListener('beforeunload', (f) => {
          let h = !1;
          const w = { from: i.url, to: null, cancel: () => (h = !0) };
          r.before_navigate.forEach((m) => m(w)),
            h
              ? (f.preventDefault(), (f.returnValue = ''))
              : (history.scrollRestoration = 'auto');
        }),
        addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden') {
            ye(C);
            try {
              sessionStorage[Qe] = JSON.stringify(se);
            } catch {}
          }
        });
      const o = (f) => {
        const h = Ge(f);
        h && h.href && h.hasAttribute('sveltekit:prefetch') && Oe(Xe(h));
      };
      let _;
      const b = (f) => {
        clearTimeout(_),
          (_ = setTimeout(() => {
            var h;
            (h = f.target) == null ||
              h.dispatchEvent(
                new CustomEvent('sveltekit:trigger_prefetch', { bubbles: !0 })
              );
          }, 20));
      };
      addEventListener('touchstart', o),
        addEventListener('mousemove', b),
        addEventListener('sveltekit:trigger_prefetch', o),
        addEventListener('click', (f) => {
          if (
            !G ||
            f.button ||
            f.which !== 1 ||
            f.metaKey ||
            f.ctrlKey ||
            f.shiftKey ||
            f.altKey ||
            f.defaultPrevented
          )
            return;
          const h = Ge(f);
          if (!h || !h.href) return;
          const w = h instanceof SVGAElement,
            m = Xe(h);
          if (!w && m.origin === 'null') return;
          const $ = (h.getAttribute('rel') || '').split(/\s+/);
          if (
            h.hasAttribute('download') ||
            $.includes('external') ||
            (w ? h.target.baseVal : h.target)
          )
            return;
          if (m.href === location.href) {
            location.hash || f.preventDefault();
            return;
          }
          const [g, k] = m.href.split('#');
          if (k !== void 0 && g === location.href.split('#')[0]) {
            (_e = !0),
              ye(C),
              u.page.set(ne(O({}, he), { url: m })),
              u.page.notify();
            return;
          }
          we({
            url: m,
            scroll: h.hasAttribute('sveltekit:noscroll') ? ke() : null,
            keepfocus: !1,
            redirect_chain: [],
            details: { state: {}, replaceState: !1 },
            accepted: () => f.preventDefault(),
            blocked: () => f.preventDefault(),
          });
        }),
        addEventListener('popstate', (f) => {
          if (f.state && G) {
            if (f.state[B] === C) return;
            we({
              url: new URL(location.href),
              scroll: se[f.state[B]],
              keepfocus: !1,
              redirect_chain: [],
              details: null,
              accepted: () => {
                C = f.state[B];
              },
              blocked: () => {
                const h = C - f.state[B];
                history.go(h);
              },
            });
          }
        }),
        addEventListener('hashchange', () => {
          _e &&
            ((_e = !1),
            history.replaceState(
              ne(O({}, history.state), { [B]: ++C }),
              '',
              location.href
            ));
        });
    },
    _hydrate: async ({
      status: o,
      error: _,
      nodes: b,
      params: f,
      routeId: h,
    }) => {
      const w = new URL(location.href),
        m = [];
      let $ = {},
        g,
        k;
      try {
        for (let L = 0; L < b.length; L += 1) {
          const v = L === b.length - 1;
          let S;
          if (v) {
            const E = document.querySelector(
              'script[sveltekit\\:data-type="props"]'
            );
            E && (S = JSON.parse(E.textContent));
          }
          const p = await Q({
            module: await b[L],
            url: w,
            params: f,
            stuff: $,
            status: v ? o : void 0,
            error: v ? _ : void 0,
            props: S,
            routeId: h,
          });
          if (
            (S && (p.uses.dependencies.add(w.href), (p.uses.url = !0)),
            m.push(p),
            p && p.loaded)
          )
            if (p.loaded.error) {
              if (_) throw p.loaded.error;
              k = {
                status: p.loaded.status,
                error: p.loaded.error,
                url: w,
                routeId: h,
              };
            } else p.loaded.stuff && ($ = O(O({}, $), p.loaded.stuff));
        }
        g = k
          ? await Z(k)
          : await ge({
              url: w,
              params: f,
              stuff: $,
              branch: m,
              status: o,
              error: _,
              routeId: h,
            });
      } catch (L) {
        if (_) throw L;
        g = await Z({ status: 500, error: Ye(L), url: w, routeId: h });
      }
      g.redirect && (await ee(new URL(g.redirect, location.href))), xe(g);
    },
  };
}
async function Kt({
  paths: s,
  target: e,
  session: t,
  route: a,
  spa: c,
  trailing_slash: l,
  hydrate: u,
}) {
  const n = Dt({ target: e, session: t, base: s.base, trailing_slash: l });
  ht(s),
    u && (await n._hydrate(u)),
    a && (c && n.goto(location.href, { replaceState: !0 }), n._start_router()),
    dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Kt as start };
