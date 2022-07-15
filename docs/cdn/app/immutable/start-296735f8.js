var tt = Object.defineProperty,
  nt = Object.defineProperties;
var st = Object.getOwnPropertyDescriptors;
var pe = Object.getOwnPropertySymbols;
var qe = Object.prototype.hasOwnProperty,
  Je = Object.prototype.propertyIsEnumerable;
var ze = (n, e, t) =>
    e in n
      ? tt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (n[e] = t),
  T = (n, e) => {
    for (var t in e || (e = {})) qe.call(e, t) && ze(n, t, e[t]);
    if (pe) for (var t of pe(e)) Je.call(e, t) && ze(n, t, e[t]);
    return n;
  },
  ie = (n, e) => nt(n, st(e));
var Ke = (n, e) => {
  var t = {};
  for (var i in n) qe.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
  if (n != null && pe)
    for (var i of pe(n)) e.indexOf(i) < 0 && Je.call(n, i) && (t[i] = n[i]);
  return t;
};
var P = (n, e, t) =>
  new Promise((i, c) => {
    var l = (r) => {
        try {
          s(t.next(r));
        } catch (a) {
          c(a);
        }
      },
      u = (r) => {
        try {
          s(t.throw(r));
        } catch (a) {
          c(a);
        }
      },
      s = (r) => (r.done ? i(r.value) : Promise.resolve(r.value).then(l, u));
    s((t = t.apply(n, e)).next());
  });
import {
  S as rt,
  i as it,
  s as at,
  e as ot,
  c as lt,
  a as ct,
  d as J,
  b as ke,
  f as Y,
  g as K,
  t as ft,
  h as ut,
  j as dt,
  k as pt,
  l as j,
  m as ht,
  n as X,
  o as C,
  p as H,
  q as D,
  r as _t,
  u as mt,
  v as Le,
  w as B,
  x as oe,
  y as M,
  z as le,
  A as ce,
  B as W,
  C as fe,
  D as Be,
} from './chunks/index-83a5d9f9.js';
import { w as _e } from './chunks/index-5b18af3d.js';
import { s as gt, a as wt } from './chunks/paths-396f020f.js';
import { _ as he } from './chunks/preload-helper-ade19073.js';
function bt(n) {
  let e, t, i;
  const c = [n[1] || {}];
  var l = n[0][0];
  function u(s) {
    let r = {};
    for (let a = 0; a < c.length; a += 1) r = fe(r, c[a]);
    return { props: r };
  }
  return (
    l && (e = new l(u())),
    {
      c() {
        e && B(e.$$.fragment), (t = j());
      },
      l(s) {
        e && oe(e.$$.fragment, s), (t = j());
      },
      m(s, r) {
        e && M(e, s, r), K(s, t, r), (i = !0);
      },
      p(s, r) {
        const a = r & 2 ? le(c, [ce(s[1] || {})]) : {};
        if (l !== (l = s[0][0])) {
          if (e) {
            X();
            const d = e;
            C(d.$$.fragment, 1, 0, () => {
              W(d, 1);
            }),
              H();
          }
          l
            ? ((e = new l(u())),
              B(e.$$.fragment),
              D(e.$$.fragment, 1),
              M(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(a);
      },
      i(s) {
        i || (e && D(e.$$.fragment, s), (i = !0));
      },
      o(s) {
        e && C(e.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && J(t), e && W(e, s);
      },
    }
  );
}
function yt(n) {
  let e, t, i;
  const c = [n[1] || {}];
  var l = n[0][0];
  function u(s) {
    let r = { $$slots: { default: [Et] }, $$scope: { ctx: s } };
    for (let a = 0; a < c.length; a += 1) r = fe(r, c[a]);
    return { props: r };
  }
  return (
    l && (e = new l(u(n))),
    {
      c() {
        e && B(e.$$.fragment), (t = j());
      },
      l(s) {
        e && oe(e.$$.fragment, s), (t = j());
      },
      m(s, r) {
        e && M(e, s, r), K(s, t, r), (i = !0);
      },
      p(s, r) {
        const a = r & 2 ? le(c, [ce(s[1] || {})]) : {};
        if (
          (r & 525 && (a.$$scope = { dirty: r, ctx: s }), l !== (l = s[0][0]))
        ) {
          if (e) {
            X();
            const d = e;
            C(d.$$.fragment, 1, 0, () => {
              W(d, 1);
            }),
              H();
          }
          l
            ? ((e = new l(u(s))),
              B(e.$$.fragment),
              D(e.$$.fragment, 1),
              M(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(a);
      },
      i(s) {
        i || (e && D(e.$$.fragment, s), (i = !0));
      },
      o(s) {
        e && C(e.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && J(t), e && W(e, s);
      },
    }
  );
}
function vt(n) {
  let e, t, i;
  const c = [n[2] || {}];
  var l = n[0][1];
  function u(s) {
    let r = {};
    for (let a = 0; a < c.length; a += 1) r = fe(r, c[a]);
    return { props: r };
  }
  return (
    l && (e = new l(u())),
    {
      c() {
        e && B(e.$$.fragment), (t = j());
      },
      l(s) {
        e && oe(e.$$.fragment, s), (t = j());
      },
      m(s, r) {
        e && M(e, s, r), K(s, t, r), (i = !0);
      },
      p(s, r) {
        const a = r & 4 ? le(c, [ce(s[2] || {})]) : {};
        if (l !== (l = s[0][1])) {
          if (e) {
            X();
            const d = e;
            C(d.$$.fragment, 1, 0, () => {
              W(d, 1);
            }),
              H();
          }
          l
            ? ((e = new l(u())),
              B(e.$$.fragment),
              D(e.$$.fragment, 1),
              M(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(a);
      },
      i(s) {
        i || (e && D(e.$$.fragment, s), (i = !0));
      },
      o(s) {
        e && C(e.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && J(t), e && W(e, s);
      },
    }
  );
}
function $t(n) {
  let e, t, i;
  const c = [n[2] || {}];
  var l = n[0][1];
  function u(s) {
    let r = { $$slots: { default: [kt] }, $$scope: { ctx: s } };
    for (let a = 0; a < c.length; a += 1) r = fe(r, c[a]);
    return { props: r };
  }
  return (
    l && (e = new l(u(n))),
    {
      c() {
        e && B(e.$$.fragment), (t = j());
      },
      l(s) {
        e && oe(e.$$.fragment, s), (t = j());
      },
      m(s, r) {
        e && M(e, s, r), K(s, t, r), (i = !0);
      },
      p(s, r) {
        const a = r & 4 ? le(c, [ce(s[2] || {})]) : {};
        if (
          (r & 521 && (a.$$scope = { dirty: r, ctx: s }), l !== (l = s[0][1]))
        ) {
          if (e) {
            X();
            const d = e;
            C(d.$$.fragment, 1, 0, () => {
              W(d, 1);
            }),
              H();
          }
          l
            ? ((e = new l(u(s))),
              B(e.$$.fragment),
              D(e.$$.fragment, 1),
              M(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(a);
      },
      i(s) {
        i || (e && D(e.$$.fragment, s), (i = !0));
      },
      o(s) {
        e && C(e.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && J(t), e && W(e, s);
      },
    }
  );
}
function kt(n) {
  let e, t, i;
  const c = [n[3] || {}];
  var l = n[0][2];
  function u(s) {
    let r = {};
    for (let a = 0; a < c.length; a += 1) r = fe(r, c[a]);
    return { props: r };
  }
  return (
    l && (e = new l(u())),
    {
      c() {
        e && B(e.$$.fragment), (t = j());
      },
      l(s) {
        e && oe(e.$$.fragment, s), (t = j());
      },
      m(s, r) {
        e && M(e, s, r), K(s, t, r), (i = !0);
      },
      p(s, r) {
        const a = r & 8 ? le(c, [ce(s[3] || {})]) : {};
        if (l !== (l = s[0][2])) {
          if (e) {
            X();
            const d = e;
            C(d.$$.fragment, 1, 0, () => {
              W(d, 1);
            }),
              H();
          }
          l
            ? ((e = new l(u())),
              B(e.$$.fragment),
              D(e.$$.fragment, 1),
              M(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(a);
      },
      i(s) {
        i || (e && D(e.$$.fragment, s), (i = !0));
      },
      o(s) {
        e && C(e.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && J(t), e && W(e, s);
      },
    }
  );
}
function Et(n) {
  let e, t, i, c;
  const l = [$t, vt],
    u = [];
  function s(r, a) {
    return r[0][2] ? 0 : 1;
  }
  return (
    (e = s(n)),
    (t = u[e] = l[e](n)),
    {
      c() {
        t.c(), (i = j());
      },
      l(r) {
        t.l(r), (i = j());
      },
      m(r, a) {
        u[e].m(r, a), K(r, i, a), (c = !0);
      },
      p(r, a) {
        let d = e;
        (e = s(r)),
          e === d
            ? u[e].p(r, a)
            : (X(),
              C(u[d], 1, 1, () => {
                u[d] = null;
              }),
              H(),
              (t = u[e]),
              t ? t.p(r, a) : ((t = u[e] = l[e](r)), t.c()),
              D(t, 1),
              t.m(i.parentNode, i));
      },
      i(r) {
        c || (D(t), (c = !0));
      },
      o(r) {
        C(t), (c = !1);
      },
      d(r) {
        u[e].d(r), r && J(i);
      },
    }
  );
}
function Me(n) {
  let e,
    t = n[5] && We(n);
  return {
    c() {
      (e = ot('div')), t && t.c(), this.h();
    },
    l(i) {
      e = lt(i, 'DIV', {
        id: !0,
        'aria-live': !0,
        'aria-atomic': !0,
        style: !0,
      });
      var c = ct(e);
      t && t.l(c), c.forEach(J), this.h();
    },
    h() {
      ke(e, 'id', 'svelte-announcer'),
        ke(e, 'aria-live', 'assertive'),
        ke(e, 'aria-atomic', 'true'),
        Y(e, 'position', 'absolute'),
        Y(e, 'left', '0'),
        Y(e, 'top', '0'),
        Y(e, 'clip', 'rect(0 0 0 0)'),
        Y(e, 'clip-path', 'inset(50%)'),
        Y(e, 'overflow', 'hidden'),
        Y(e, 'white-space', 'nowrap'),
        Y(e, 'width', '1px'),
        Y(e, 'height', '1px');
    },
    m(i, c) {
      K(i, e, c), t && t.m(e, null);
    },
    p(i, c) {
      i[5]
        ? t
          ? t.p(i, c)
          : ((t = We(i)), t.c(), t.m(e, null))
        : t && (t.d(1), (t = null));
    },
    d(i) {
      i && J(e), t && t.d();
    },
  };
}
function We(n) {
  let e;
  return {
    c() {
      e = ft(n[6]);
    },
    l(t) {
      e = ut(t, n[6]);
    },
    m(t, i) {
      K(t, e, i);
    },
    p(t, i) {
      i & 64 && dt(e, t[6]);
    },
    d(t) {
      t && J(e);
    },
  };
}
function Rt(n) {
  let e, t, i, c, l;
  const u = [yt, bt],
    s = [];
  function r(d, R) {
    return d[0][1] ? 0 : 1;
  }
  (e = r(n)), (t = s[e] = u[e](n));
  let a = n[4] && Me(n);
  return {
    c() {
      t.c(), (i = pt()), a && a.c(), (c = j());
    },
    l(d) {
      t.l(d), (i = ht(d)), a && a.l(d), (c = j());
    },
    m(d, R) {
      s[e].m(d, R), K(d, i, R), a && a.m(d, R), K(d, c, R), (l = !0);
    },
    p(d, [R]) {
      let $ = e;
      (e = r(d)),
        e === $
          ? s[e].p(d, R)
          : (X(),
            C(s[$], 1, 1, () => {
              s[$] = null;
            }),
            H(),
            (t = s[e]),
            t ? t.p(d, R) : ((t = s[e] = u[e](d)), t.c()),
            D(t, 1),
            t.m(i.parentNode, i)),
        d[4]
          ? a
            ? a.p(d, R)
            : ((a = Me(d)), a.c(), a.m(c.parentNode, c))
          : a && (a.d(1), (a = null));
    },
    i(d) {
      l || (D(t), (l = !0));
    },
    o(d) {
      C(t), (l = !1);
    },
    d(d) {
      s[e].d(d), d && J(i), a && a.d(d), d && J(c);
    },
  };
}
function Lt(n, e, t) {
  let { stores: i } = e,
    { page: c } = e,
    { components: l } = e,
    { props_0: u = null } = e,
    { props_1: s = null } = e,
    { props_2: r = null } = e;
  _t('__svelte__', i), mt(i.page.notify);
  let a = !1,
    d = !1,
    R = null;
  return (
    Le(() => {
      const $ = i.page.subscribe(() => {
        a && (t(5, (d = !0)), t(6, (R = document.title || 'untitled page')));
      });
      return t(4, (a = !0)), $;
    }),
    (n.$$set = ($) => {
      'stores' in $ && t(7, (i = $.stores)),
        'page' in $ && t(8, (c = $.page)),
        'components' in $ && t(0, (l = $.components)),
        'props_0' in $ && t(1, (u = $.props_0)),
        'props_1' in $ && t(2, (s = $.props_1)),
        'props_2' in $ && t(3, (r = $.props_2));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 384 && i.page.set(c);
    }),
    [l, u, s, r, a, d, R, i, c]
  );
}
class St extends rt {
  constructor(e) {
    super(),
      it(this, e, Lt, Rt, at, {
        stores: 7,
        page: 8,
        components: 0,
        props_0: 1,
        props_1: 2,
        props_2: 3,
      });
  }
}
const Ut = {},
  me = [
    () =>
      he(
        () => import('./layout.svelte-27558f02.js'),
        ['layout.svelte-27558f02.js', 'chunks/index-83a5d9f9.js']
      ),
    () =>
      he(
        () => import('./error.svelte-7ab081a8.js'),
        ['error.svelte-7ab081a8.js', 'chunks/index-83a5d9f9.js']
      ),
    () =>
      he(
        () => import('./pages/components/_slug_.svelte-10f8f837.js'),
        [
          'pages/components/_slug_.svelte-10f8f837.js',
          'assets/pages/components/_slug_.svelte-766062c2.css',
          'chunks/preload-helper-ade19073.js',
          'chunks/index-83a5d9f9.js',
          'chunks/main-7d66ab6d.js',
          'assets/main-a784a182.css',
          'chunks/paths-396f020f.js',
        ]
      ),
    () =>
      he(
        () => import('./pages/index.svelte-c2b4589c.js'),
        [
          'pages/index.svelte-c2b4589c.js',
          'assets/pages/index.svelte-bf68d283.css',
          'chunks/index-83a5d9f9.js',
          'chunks/main-7d66ab6d.js',
          'assets/main-a784a182.css',
          'chunks/paths-396f020f.js',
        ]
      ),
  ],
  At = { '': [[0, 3], [1]], 'components/[slug]': [[0, 2], [1]] };
function Ye(n) {
  return n instanceof Error || (n && n.name && n.message)
    ? n
    : new Error(JSON.stringify(n));
}
function Ge(n) {
  if (n.fallthrough)
    throw new Error(
      'fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching'
    );
  if ('maxage' in n)
    throw new Error('maxage should be replaced with cache: { maxage }');
  const e = n.status && n.status >= 400 && n.status <= 599 && !n.redirect;
  if (n.error || e) {
    const t = n.status;
    if (!n.error && e) return { status: t || 500, error: new Error() };
    const i = typeof n.error == 'string' ? new Error(n.error) : n.error;
    return i instanceof Error
      ? !t || t < 400 || t > 599
        ? (console.warn(
            '"error" returned from load() without a valid status code \u2014 defaulting to 500'
          ),
          { status: 500, error: i })
        : { status: t, error: i }
      : {
          status: 500,
          error: new Error(
            `"error" property returned from load() must be a string or instance of Error, received type "${typeof i}"`
          ),
        };
  }
  if (n.redirect) {
    if (!n.status || Math.floor(n.status / 100) !== 3)
      throw new Error(
        '"redirect" property returned from load() must be accompanied by a 3xx status code'
      );
    if (typeof n.redirect != 'string')
      throw new Error(
        '"redirect" property returned from load() must be a string'
      );
  }
  if (
    n.dependencies &&
    (!Array.isArray(n.dependencies) ||
      n.dependencies.some((t) => typeof t != 'string'))
  )
    throw new Error(
      '"dependencies" property returned from load() must be of type string[]'
    );
  if (n.context)
    throw new Error(
      'You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.'
    );
  return n;
}
function Nt(n, e) {
  return n === '/' || e === 'ignore'
    ? n
    : e === 'never'
    ? n.endsWith('/')
      ? n.slice(0, -1)
      : n
    : e === 'always' && !n.endsWith('/')
    ? n + '/'
    : n;
}
function Fe(n) {
  let e = n.baseURI;
  if (!e) {
    const t = n.getElementsByTagName('base');
    e = t.length ? t[0].href : n.URL;
  }
  return e;
}
function Se() {
  return { x: pageXOffset, y: pageYOffset };
}
function Xe(n) {
  return n
    .composedPath()
    .find((t) => t instanceof Node && t.nodeName.toUpperCase() === 'A');
}
function He(n) {
  return n instanceof SVGAElement
    ? new URL(n.href.baseVal, document.baseURI)
    : new URL(n.href);
}
function Ze(n) {
  const e = _e(n);
  let t = !0;
  function i() {
    (t = !0), e.update((u) => u);
  }
  function c(u) {
    (t = !1), e.set(u);
  }
  function l(u) {
    let s;
    return e.subscribe((r) => {
      (s === void 0 || (t && r !== s)) && u((s = r));
    });
  }
  return { notify: i, set: c, subscribe: l };
}
function Ot() {
  const { set: n, subscribe: e } = _e(!1),
    t = '1657897892216';
  let i;
  function c() {
    return P(this, null, function* () {
      clearTimeout(i);
      const u = yield fetch(`${wt}/app/version.json`, {
        headers: { pragma: 'no-cache', 'cache-control': 'no-cache' },
      });
      if (u.ok) {
        const { version: s } = yield u.json(),
          r = s !== t;
        return r && (n(!0), clearTimeout(i)), r;
      } else throw new Error(`Version check failed: ${u.status}`);
    });
  }
  return { subscribe: e, check: c };
}
function xt(n) {
  let e = 5381,
    t = n.length;
  if (typeof n == 'string') for (; t; ) e = (e * 33) ^ n.charCodeAt(--t);
  else for (; t; ) e = (e * 33) ^ n[--t];
  return (e >>> 0).toString(36);
}
const Ue = window.fetch;
function Pt(n, e) {
  let i = `script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(
    typeof n == 'string' ? n : n.url
  )}]`;
  e &&
    typeof e.body == 'string' &&
    (i += `[sveltekit\\:data-body="${xt(e.body)}"]`);
  const c = document.querySelector(i);
  if (c && c.textContent) {
    const l = JSON.parse(c.textContent),
      { body: u } = l,
      s = Ke(l, ['body']);
    return Promise.resolve(new Response(u, s));
  }
  return Ue(n, e);
}
const Tt = /^(\.\.\.)?(\w+)(?:=(\w+))?$/;
function It(n) {
  const e = [],
    t = [];
  let i = !0;
  return {
    pattern:
      n === ''
        ? /^\/$/
        : new RegExp(
            `^${decodeURIComponent(n)
              .split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/)
              .map((l, u, s) => {
                const r = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(l);
                if (r) return e.push(r[1]), t.push(r[2]), '(?:/(.*))?';
                const a = u === s.length - 1;
                return (
                  l &&
                  '/' +
                    l
                      .split(/\[(.+?)\]/)
                      .map((d, R) => {
                        if (R % 2) {
                          const [, $, ee, Z] = Tt.exec(d);
                          return (
                            e.push(ee), t.push(Z), $ ? '(.*?)' : '([^/]+?)'
                          );
                        }
                        return (
                          a && d.includes('.') && (i = !1),
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
              .join('')}${i ? '/?' : ''}$`
          ),
    names: e,
    types: t,
  };
}
function jt(n, e, t, i) {
  const c = {};
  for (let l = 0; l < e.length; l += 1) {
    const u = e[l],
      s = t[l],
      r = n[l + 1] || '';
    if (s) {
      const a = i[s];
      if (!a) throw new Error(`Missing "${s}" param matcher`);
      if (!a(r)) return;
    }
    c[u] = r;
  }
  return c;
}
function Ct(n, e, t) {
  return Object.entries(e).map(([c, [l, u, s]]) => {
    const { pattern: r, names: a, types: d } = It(c);
    return {
      id: c,
      exec: (R) => {
        const $ = r.exec(R);
        if ($) return jt($, a, d, t);
      },
      a: l.map((R) => n[R]),
      b: u.map((R) => n[R]),
      has_shadow: !!s,
    };
  });
}
const et = 'sveltekit:scroll',
  G = 'sveltekit:index',
  Ee = Ct(me, At, Ut),
  Dt = me[0](),
  Vt = me[1](),
  Qe = {};
let ae = {};
try {
  ae = JSON.parse(sessionStorage[et]);
} catch (n) {}
function Re(n) {
  ae[n] = Se();
}
function zt({ target: n, session: e, base: t, trailing_slash: i }) {
  var De;
  const c = new Map(),
    l = [],
    u = {
      url: Ze({}),
      page: Ze({}),
      navigating: _e(null),
      session: _e(e),
      updated: Ot(),
    },
    s = { id: null, promise: null },
    r = { before_navigate: [], after_navigate: [] };
  let a = { branch: [], error: null, session_id: 0, stuff: Qe, url: null },
    d = !1,
    R = !0,
    $ = !1,
    ee = 1,
    Z = null,
    Ae,
    Ne,
    Oe = !1;
  u.session.subscribe((o) =>
    P(this, null, function* () {
      (Ne = o), Oe && ((ee += 1), ye(new URL(location.href), [], !0));
    })
  ),
    (Oe = !0);
  let Q = !0,
    V = (De = history.state) == null ? void 0 : De[G];
  V ||
    ((V = Date.now()),
    history.replaceState(
      ie(T({}, history.state), { [G]: V }),
      '',
      location.href
    ));
  const ge = ae[V];
  ge && ((history.scrollRestoration = 'manual'), scrollTo(ge.x, ge.y));
  let we = !1,
    be,
    xe;
  function Pe(y, b, k) {
    return P(
      this,
      arguments,
      function* (
        o,
        {
          noscroll: p = !1,
          replaceState: g = !1,
          keepfocus: f = !1,
          state: h = {},
        },
        S
      ) {
        const _ = new URL(o, Fe(document));
        if (Q)
          return $e({
            url: _,
            scroll: p ? Se() : null,
            keepfocus: f,
            redirect_chain: S,
            details: { state: h, replaceState: g },
            accepted: () => {},
            blocked: () => {},
          });
        yield se(_);
      }
    );
  }
  function Te(o) {
    return P(this, null, function* () {
      const p = Ce(o);
      if (!p)
        throw new Error(
          'Attempted to prefetch a URL that does not belong to this app'
        );
      return (s.promise = je(p, !1)), (s.id = p.id), s.promise;
    });
  }
  function ye(o, p, g, f, h) {
    return P(this, null, function* () {
      var _, U, A;
      const S = Ce(o),
        y = (xe = {});
      let b = S && (yield je(S, g));
      if (
        (!b &&
          o.origin === location.origin &&
          o.pathname === location.pathname &&
          (b = yield ne({
            status: 404,
            error: new Error(`Not found: ${o.pathname}`),
            url: o,
            routeId: null,
          })),
        !b)
      )
        return yield se(o), !1;
      if (xe !== y) return !1;
      if (((l.length = 0), b.redirect))
        if (p.length > 10 || p.includes(o.pathname))
          b = yield ne({
            status: 500,
            error: new Error('Redirect loop'),
            url: o,
            routeId: null,
          });
        else
          return (
            Q
              ? Pe(new URL(b.redirect, o).href, {}, [...p, o.pathname])
              : yield se(new URL(b.redirect, location.href)),
            !1
          );
      else
        ((U = (_ = b.props) == null ? void 0 : _.page) == null
          ? void 0
          : U.status) >= 400 &&
          (yield u.updated.check()) &&
          (yield se(o));
      if ((($ = !0), f && f.details)) {
        const { details: v } = f,
          E = v.replaceState ? 0 : 1;
        (v.state[G] = V += E),
          history[v.replaceState ? 'replaceState' : 'pushState'](
            v.state,
            '',
            o
          );
      }
      if (
        (d
          ? ((a = b.state),
            b.props.page && (b.props.page.url = o),
            Ae.$set(b.props))
          : Ie(b),
        f)
      ) {
        const { scroll: v, keepfocus: E } = f;
        if (!E) {
          const w = document.body,
            x = w.getAttribute('tabindex');
          (A = getSelection()) == null || A.removeAllRanges(),
            (w.tabIndex = -1),
            w.focus({ preventScroll: !0 }),
            x !== null
              ? w.setAttribute('tabindex', x)
              : w.removeAttribute('tabindex');
        }
        if ((yield Be(), R)) {
          const w = o.hash && document.getElementById(o.hash.slice(1));
          v ? scrollTo(v.x, v.y) : w ? w.scrollIntoView() : scrollTo(0, 0);
        }
      } else yield Be();
      (s.promise = null),
        (s.id = null),
        (R = !0),
        b.props.page && (be = b.props.page);
      const k = b.state.branch[b.state.branch.length - 1];
      (Q = (k == null ? void 0 : k.module.router) !== !1), h && h(), ($ = !1);
    });
  }
  function Ie(o) {
    a = o.state;
    const p = document.querySelector('style[data-sveltekit]');
    if (
      (p && p.remove(),
      (be = o.props.page),
      (Ae = new St({
        target: n,
        props: ie(T({}, o.props), { stores: u }),
        hydrate: !0,
      })),
      Q)
    ) {
      const g = { from: null, to: new URL(location.href) };
      r.after_navigate.forEach((f) => f(g));
    }
    d = !0;
  }
  function ve(b) {
    return P(
      this,
      arguments,
      function* ({
        url: o,
        params: p,
        stuff: g,
        branch: f,
        status: h,
        error: S,
        routeId: y,
      }) {
        var w, x;
        const k = f.filter(Boolean),
          _ = k.find((m) => {
            var N;
            return (N = m.loaded) == null ? void 0 : N.redirect;
          }),
          U = {
            redirect:
              (w = _ == null ? void 0 : _.loaded) == null ? void 0 : w.redirect,
            state: {
              url: o,
              params: p,
              branch: f,
              error: S,
              stuff: g,
              session_id: ee,
            },
            props: { components: k.map((m) => m.module.default) },
          };
        for (let m = 0; m < k.length; m += 1) {
          const N = k[m].loaded;
          U.props[`props_${m}`] = N ? yield N.props : null;
        }
        if (!a.url || o.href !== a.url.href || a.error !== S || a.stuff !== g) {
          U.props.page = {
            error: S,
            params: p,
            routeId: y,
            status: h,
            stuff: g,
            url: o,
          };
          const m = (N, z) => {
            Object.defineProperty(U.props.page, N, {
              get: () => {
                throw new Error(
                  `$page.${N} has been replaced by $page.url.${z}`
                );
              },
            });
          };
          m('origin', 'origin'),
            m('path', 'pathname'),
            m('query', 'searchParams');
        }
        const v = k[k.length - 1],
          E = (x = v == null ? void 0 : v.loaded) == null ? void 0 : x.cache;
        if (E) {
          const m = o.pathname + o.search;
          let N = !1;
          const z = () => {
              c.get(m) === U && c.delete(m), O(), clearTimeout(L);
            },
            L = setTimeout(z, E.maxage * 1e3),
            O = u.session.subscribe(() => {
              N && z();
            });
          (N = !0), c.set(m, U);
        }
        return U;
      }
    );
  }
  function te(k) {
    return P(
      this,
      arguments,
      function* ({
        status: o,
        error: p,
        module: g,
        url: f,
        params: h,
        stuff: S,
        props: y,
        routeId: b,
      }) {
        const _ = {
          module: g,
          uses: {
            params: new Set(),
            url: !1,
            session: !1,
            stuff: !1,
            dependencies: new Set(),
          },
          loaded: null,
          stuff: S,
        };
        function U(E) {
          const { href: w } = new URL(E, f);
          _.uses.dependencies.add(w);
        }
        y && _.uses.dependencies.add(f.href);
        const A = {};
        for (const E in h)
          Object.defineProperty(A, E, {
            get() {
              return _.uses.params.add(E), h[E];
            },
            enumerable: !0,
          });
        const v = Ne;
        if (g.load) {
          let x;
          const E = {
            routeId: b,
            params: A,
            props: y || {},
            get url() {
              return (
                (_.uses.url = !0),
                new Proxy(f, {
                  get: (m, N) => {
                    if (N === 'hash')
                      throw new Error(
                        'url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.'
                      );
                    return Reflect.get(m, N, m);
                  },
                })
              );
            },
            get session() {
              return (_.uses.session = !0), v;
            },
            get stuff() {
              return (_.uses.stuff = !0), T({}, S);
            },
            fetch(m, N) {
              return P(this, null, function* () {
                let z;
                typeof m == 'string'
                  ? (z = m)
                  : ((z = m.url),
                    (N = T(
                      {
                        body:
                          m.method === 'GET' || m.method === 'HEAD'
                            ? void 0
                            : yield m.blob(),
                        cache: m.cache,
                        credentials: m.credentials,
                        headers: m.headers,
                        integrity: m.integrity,
                        keepalive: m.keepalive,
                        method: m.method,
                        mode: m.mode,
                        redirect: m.redirect,
                        referrer: m.referrer,
                        referrerPolicy: m.referrerPolicy,
                        signal: m.signal,
                      },
                      N
                    )));
                const L = new URL(z, f).href;
                return U(L), d ? Ue(L, N) : Pt(z, N);
              });
            },
            status: o != null ? o : null,
            error: p != null ? p : null,
          };
          let w;
          if (((w = yield g.load.call(null, E)), !w))
            throw new Error('load function must return a value');
          (_.loaded = Ge(w)),
            _.loaded.stuff && (_.stuff = _.loaded.stuff),
            _.loaded.dependencies && _.loaded.dependencies.forEach(U);
        } else y && (_.loaded = Ge({ props: y }));
        return _;
      }
    );
  }
  function je(S, y) {
    return P(
      this,
      arguments,
      function* ({ id: o, url: p, params: g, route: f }, h) {
        var m, N, z;
        if (s.id === o && s.promise) return s.promise;
        if (!h) {
          const L = c.get(o);
          if (L) return L;
        }
        const { a: b, b: k, has_shadow: _ } = f,
          U = a.url && {
            url: o !== a.url.pathname + a.url.search,
            params: Object.keys(g).filter((L) => a.params[L] !== g[L]),
            session: ee !== a.session_id,
          };
        let A = [],
          v = Qe,
          E = !1,
          w = 200,
          x = null;
        b.forEach((L) => L().catch(() => {}));
        e: for (let L = 0; L < b.length; L += 1) {
          let O;
          try {
            if (!b[L]) continue;
            const I = yield b[L](),
              q = a.branch[L];
            if (
              !q ||
              I !== q.module ||
              (U.url && q.uses.url) ||
              U.params.some((F) => q.uses.params.has(F)) ||
              (U.session && q.uses.session) ||
              Array.from(q.uses.dependencies).some((F) =>
                l.some((de) => de(F))
              ) ||
              (E && q.uses.stuff)
            ) {
              let F = {};
              const de = _ && L === b.length - 1;
              if (de) {
                const re = yield Ue(
                  `${p.pathname}${
                    p.pathname.endsWith('/') ? '' : '/'
                  }__data.json${p.search}`,
                  { headers: { 'x-sveltekit-load': 'true' } }
                );
                if (re.ok) {
                  const Ve = re.headers.get('x-sveltekit-location');
                  if (Ve) return { redirect: Ve, props: {}, state: a };
                  F = re.status === 204 ? {} : yield re.json();
                } else (w = re.status), (x = new Error('Failed to load data'));
              }
              if (
                (x ||
                  (O = yield te({
                    module: I,
                    url: p,
                    params: g,
                    props: F,
                    stuff: v,
                    routeId: f.id,
                  })),
                O && (de && (O.uses.url = !0), O.loaded))
              ) {
                if (
                  (O.loaded.error &&
                    ((w = O.loaded.status), (x = O.loaded.error)),
                  O.loaded.redirect)
                )
                  return { redirect: O.loaded.redirect, props: {}, state: a };
                O.loaded.stuff && (E = !0);
              }
            } else O = q;
          } catch (I) {
            (w = 500), (x = Ye(I));
          }
          if (x) {
            for (; L--; )
              if (k[L]) {
                let I,
                  q,
                  ue = L;
                for (; !(q = A[ue]); ) ue -= 1;
                try {
                  if (
                    ((I = yield te({
                      status: w,
                      error: x,
                      module: yield k[L](),
                      url: p,
                      params: g,
                      stuff: q.stuff,
                      routeId: f.id,
                    })),
                    (m = I == null ? void 0 : I.loaded) != null && m.error)
                  )
                    continue;
                  (N = I == null ? void 0 : I.loaded) != null &&
                    N.stuff &&
                    (v = T(T({}, v), I.loaded.stuff)),
                    (A = A.slice(0, ue + 1).concat(I));
                  break e;
                } catch (F) {
                  continue;
                }
              }
            return yield ne({ status: w, error: x, url: p, routeId: f.id });
          } else
            (z = O == null ? void 0 : O.loaded) != null &&
              z.stuff &&
              (v = T(T({}, v), O.loaded.stuff)),
              A.push(O);
        }
        return yield ve({
          url: p,
          params: g,
          stuff: v,
          branch: A,
          status: w,
          error: x,
          routeId: f.id,
        });
      }
    );
  }
  function ne(h) {
    return P(
      this,
      arguments,
      function* ({ status: o, error: p, url: g, routeId: f }) {
        var k, _;
        const S = {},
          y = yield te({
            module: yield Dt,
            url: g,
            params: S,
            stuff: {},
            routeId: f,
          }),
          b = yield te({
            status: o,
            error: p,
            module: yield Vt,
            url: g,
            params: S,
            stuff: (y && y.loaded && y.loaded.stuff) || {},
            routeId: f,
          });
        return yield ve({
          url: g,
          params: S,
          stuff: T(
            T(
              {},
              (k = y == null ? void 0 : y.loaded) == null ? void 0 : k.stuff
            ),
            (_ = b == null ? void 0 : b.loaded) == null ? void 0 : _.stuff
          ),
          branch: [y, b],
          status: o,
          error: p,
          routeId: f,
        });
      }
    );
  }
  function Ce(o) {
    if (o.origin !== location.origin || !o.pathname.startsWith(t)) return;
    const p = decodeURI(o.pathname.slice(t.length) || '/');
    for (const g of Ee) {
      const f = g.exec(p);
      if (f) return { id: o.pathname + o.search, route: g, params: f, url: o };
    }
  }
  function $e(b) {
    return P(
      this,
      arguments,
      function* ({
        url: o,
        scroll: p,
        keepfocus: g,
        redirect_chain: f,
        details: h,
        accepted: S,
        blocked: y,
      }) {
        const k = a.url;
        let _ = !1;
        const U = { from: k, to: o, cancel: () => (_ = !0) };
        if ((r.before_navigate.forEach((E) => E(U)), _)) {
          y();
          return;
        }
        const A = Nt(o.pathname, i),
          v = new URL(o.origin + A + o.search + o.hash);
        Re(V),
          S(),
          d && u.navigating.set({ from: a.url, to: v }),
          yield ye(v, f, !1, { scroll: p, keepfocus: g, details: h }, () => {
            const E = { from: k, to: v };
            r.after_navigate.forEach((w) => w(E)), u.navigating.set(null);
          });
      }
    );
  }
  function se(o) {
    return (location.href = o.href), new Promise(() => {});
  }
  return {
    after_navigate: (o) => {
      Le(
        () => (
          r.after_navigate.push(o),
          () => {
            const p = r.after_navigate.indexOf(o);
            r.after_navigate.splice(p, 1);
          }
        )
      );
    },
    before_navigate: (o) => {
      Le(
        () => (
          r.before_navigate.push(o),
          () => {
            const p = r.before_navigate.indexOf(o);
            r.before_navigate.splice(p, 1);
          }
        )
      );
    },
    disable_scroll_handling: () => {
      ($ || !d) && (R = !1);
    },
    goto: (o, p = {}) => Pe(o, p, []),
    invalidate: (o) => {
      if (typeof o == 'function') l.push(o);
      else {
        const { href: p } = new URL(o, location.href);
        l.push((g) => g === p);
      }
      return (
        Z ||
          (Z = Promise.resolve().then(() =>
            P(this, null, function* () {
              yield ye(new URL(location.href), [], !0), (Z = null);
            })
          )),
        Z
      );
    },
    prefetch: (o) =>
      P(this, null, function* () {
        const p = new URL(o, Fe(document));
        yield Te(p);
      }),
    prefetch_routes: (o) =>
      P(this, null, function* () {
        const g = (o ? Ee.filter((f) => o.some((h) => f.exec(h))) : Ee).map(
          (f) => Promise.all(f.a.map((h) => h()))
        );
        yield Promise.all(g);
      }),
    _start_router: () => {
      (history.scrollRestoration = 'manual'),
        addEventListener('beforeunload', (f) => {
          let h = !1;
          const S = { from: a.url, to: null, cancel: () => (h = !0) };
          r.before_navigate.forEach((y) => y(S)),
            h
              ? (f.preventDefault(), (f.returnValue = ''))
              : (history.scrollRestoration = 'auto');
        }),
        addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden') {
            Re(V);
            try {
              sessionStorage[et] = JSON.stringify(ae);
            } catch (f) {}
          }
        });
      const o = (f) => {
        const h = Xe(f);
        h && h.href && h.hasAttribute('sveltekit:prefetch') && Te(He(h));
      };
      let p;
      const g = (f) => {
        clearTimeout(p),
          (p = setTimeout(() => {
            var h;
            (h = f.target) == null ||
              h.dispatchEvent(
                new CustomEvent('sveltekit:trigger_prefetch', { bubbles: !0 })
              );
          }, 20));
      };
      addEventListener('touchstart', o),
        addEventListener('mousemove', g),
        addEventListener('sveltekit:trigger_prefetch', o),
        addEventListener('click', (f) => {
          if (
            !Q ||
            f.button ||
            f.which !== 1 ||
            f.metaKey ||
            f.ctrlKey ||
            f.shiftKey ||
            f.altKey ||
            f.defaultPrevented
          )
            return;
          const h = Xe(f);
          if (!h || !h.href) return;
          const S = h instanceof SVGAElement,
            y = He(h);
          if (!S && y.origin === 'null') return;
          const b = (h.getAttribute('rel') || '').split(/\s+/);
          if (
            h.hasAttribute('download') ||
            b.includes('external') ||
            h.hasAttribute('sveltekit:reload') ||
            (S ? h.target.baseVal : h.target)
          )
            return;
          const [k, _] = y.href.split('#');
          if (_ !== void 0 && k === location.href.split('#')[0]) {
            (we = !0),
              Re(V),
              u.page.set(ie(T({}, be), { url: y })),
              u.page.notify();
            return;
          }
          $e({
            url: y,
            scroll: h.hasAttribute('sveltekit:noscroll') ? Se() : null,
            keepfocus: !1,
            redirect_chain: [],
            details: { state: {}, replaceState: y.href === location.href },
            accepted: () => f.preventDefault(),
            blocked: () => f.preventDefault(),
          });
        }),
        addEventListener('popstate', (f) => {
          if (f.state && Q) {
            if (f.state[G] === V) return;
            $e({
              url: new URL(location.href),
              scroll: ae[f.state[G]],
              keepfocus: !1,
              redirect_chain: [],
              details: null,
              accepted: () => {
                V = f.state[G];
              },
              blocked: () => {
                const h = V - f.state[G];
                history.go(h);
              },
            });
          }
        }),
        addEventListener('hashchange', () => {
          we &&
            ((we = !1),
            history.replaceState(
              ie(T({}, history.state), { [G]: ++V }),
              '',
              location.href
            ));
        });
    },
    _hydrate: (S) =>
      P(
        this,
        [S],
        function* ({ status: o, error: p, nodes: g, params: f, routeId: h }) {
          const y = new URL(location.href),
            b = [];
          let k = {},
            _,
            U;
          try {
            for (let A = 0; A < g.length; A += 1) {
              const v = A === g.length - 1;
              let E;
              if (v) {
                const x = document.querySelector(
                  'script[sveltekit\\:data-type="props"]'
                );
                x && (E = JSON.parse(x.textContent));
              }
              const w = yield te({
                module: yield me[g[A]](),
                url: y,
                params: f,
                stuff: k,
                status: v ? o : void 0,
                error: v ? p : void 0,
                props: E,
                routeId: h,
              });
              if (
                (E && (w.uses.dependencies.add(y.href), (w.uses.url = !0)),
                b.push(w),
                w && w.loaded)
              )
                if (w.loaded.error) {
                  if (p) throw w.loaded.error;
                  U = {
                    status: w.loaded.status,
                    error: w.loaded.error,
                    url: y,
                    routeId: h,
                  };
                } else w.loaded.stuff && (k = T(T({}, k), w.loaded.stuff));
            }
            _ = U
              ? yield ne(U)
              : yield ve({
                  url: y,
                  params: f,
                  stuff: k,
                  branch: b,
                  status: o,
                  error: p,
                  routeId: h,
                });
          } catch (A) {
            if (p) throw A;
            _ = yield ne({ status: 500, error: Ye(A), url: y, routeId: h });
          }
          _.redirect && (yield se(new URL(_.redirect, location.href))), Ie(_);
        }
      ),
  };
}
function Wt(s) {
  return P(
    this,
    arguments,
    function* ({
      paths: n,
      target: e,
      session: t,
      route: i,
      spa: c,
      trailing_slash: l,
      hydrate: u,
    }) {
      const r = zt({ target: e, session: t, base: n.base, trailing_slash: l });
      gt(n),
        u && (yield r._hydrate(u)),
        i &&
          (c && r.goto(location.href, { replaceState: !0 }), r._start_router()),
        dispatchEvent(new CustomEvent('sveltekit:start'));
    }
  );
}
export { Wt as start };
