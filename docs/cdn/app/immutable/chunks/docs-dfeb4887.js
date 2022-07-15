import {
  S as as,
  i as ts,
  s as ss,
  e as r,
  c as i,
  a as u,
  d as n,
  b as $,
  g as D,
  G as ns,
  H as es,
  I as os,
  q as A,
  o as R,
  k as E,
  m as y,
  Y as jt,
  f as Dt,
  J as t,
  n as Ft,
  p as Jt,
  $ as us,
  v as fs,
  F as ls,
  t as d,
  w as X,
  h,
  x as Z,
  y as x,
  B as aa,
  E as Ga,
} from './index-83a5d9f9.js';
import './main-5a0c9f3a.js';
import { D as $t } from './index-16ec1060.js';
import './paths-396f020f.js';
const ds = (m) => ({}),
  Wt = (m) => ({}),
  hs = (m) => ({}),
  Kt = (m) => ({});
function Qt(m) {
  let a, l;
  const p = m[8].title,
    e = ls(p, m, m[7], Kt);
  return {
    c() {
      (a = r('div')), e && e.c(), this.h();
    },
    l(o) {
      a = i(o, 'DIV', { class: !0 });
      var c = u(a);
      e && e.l(c), c.forEach(n), this.h();
    },
    h() {
      $(a, 'class', 'chatter-container svelte-7yl63n');
    },
    m(o, c) {
      D(o, a, c), e && e.m(a, null), (l = !0);
    },
    p(o, c) {
      e &&
        e.p &&
        (!l || c & 128) &&
        ns(e, p, o, o[7], l ? os(p, o[7], c, hs) : es(o[7]), Kt);
    },
    i(o) {
      l || (A(e, o), (l = !0));
    },
    o(o) {
      R(e, o), (l = !1);
    },
    d(o) {
      o && n(a), e && e.d(o);
    },
  };
}
function Xt(m) {
  let a, l;
  const p = m[8].notes,
    e = ls(p, m, m[7], Wt);
  return {
    c() {
      (a = r('div')), e && e.c(), this.h();
    },
    l(o) {
      a = i(o, 'DIV', { class: !0 });
      var c = u(a);
      e && e.l(c), c.forEach(n), this.h();
    },
    h() {
      $(a, 'class', 'chatter-container svelte-7yl63n');
    },
    m(o, c) {
      D(o, a, c), e && e.m(a, null), (l = !0);
    },
    p(o, c) {
      e &&
        e.p &&
        (!l || c & 128) &&
        ns(e, p, o, o[7], l ? os(p, o[7], c, ds) : es(o[7]), Wt);
    },
    i(o) {
      l || (A(e, o), (l = !0));
    },
    o(o) {
      R(e, o), (l = !1);
    },
    d(o) {
      o && n(a), e && e.d(o);
    },
  };
}
function ks(m) {
  let a,
    l,
    p,
    e,
    o,
    c,
    g,
    k,
    b = m[6].title && Qt(m),
    _ = m[6].notes && Xt(m);
  return {
    c() {
      (a = r('section')),
        b && b.c(),
        (l = E()),
        (p = r('div')),
        (e = r('iframe')),
        (c = E()),
        _ && _.c(),
        this.h();
    },
    l(w) {
      a = i(w, 'SECTION', { class: !0 });
      var f = u(a);
      b && b.l(f), (l = y(f)), (p = i(f, 'DIV', { class: !0 }));
      var C = u(p);
      (e = i(C, 'IFRAME', {
        title: !0,
        'aria-label': !0,
        id: !0,
        src: !0,
        scrolling: !0,
        frameborder: !0,
        style: !0,
      })),
        u(e).forEach(n),
        C.forEach(n),
        (c = y(f)),
        _ && _.l(f),
        f.forEach(n),
        this.h();
    },
    h() {
      $(e, 'title', m[0]),
        $(e, 'aria-label', m[1]),
        $(e, 'id', m[2]),
        jt(e.src, (o = m[3])) || $(e, 'src', o),
        $(e, 'scrolling', m[4]),
        $(e, 'frameborder', '0'),
        Dt(e, 'width', '0'),
        Dt(e, 'min-width', '100%', 1),
        Dt(e, 'border', 'none'),
        $(p, 'class', 'datawrapper-chart svelte-7yl63n'),
        $(a, 'class', (g = 'graphic ' + m[5] + ' svelte-7yl63n'));
    },
    m(w, f) {
      D(w, a, f),
        b && b.m(a, null),
        t(a, l),
        t(a, p),
        t(p, e),
        t(a, c),
        _ && _.m(a, null),
        (k = !0);
    },
    p(w, [f]) {
      w[6].title
        ? b
          ? (b.p(w, f), f & 64 && A(b, 1))
          : ((b = Qt(w)), b.c(), A(b, 1), b.m(a, l))
        : b &&
          (Ft(),
          R(b, 1, 1, () => {
            b = null;
          }),
          Jt()),
        (!k || f & 1) && $(e, 'title', w[0]),
        (!k || f & 2) && $(e, 'aria-label', w[1]),
        (!k || f & 4) && $(e, 'id', w[2]),
        (!k || (f & 8 && !jt(e.src, (o = w[3])))) && $(e, 'src', o),
        (!k || f & 16) && $(e, 'scrolling', w[4]),
        w[6].notes
          ? _
            ? (_.p(w, f), f & 64 && A(_, 1))
            : ((_ = Xt(w)), _.c(), A(_, 1), _.m(a, null))
          : _ &&
            (Ft(),
            R(_, 1, 1, () => {
              _ = null;
            }),
            Jt()),
        (!k || (f & 32 && g !== (g = 'graphic ' + w[5] + ' svelte-7yl63n'))) &&
          $(a, 'class', g);
    },
    i(w) {
      k || (A(b), A(_), (k = !0));
    },
    o(w) {
      R(b), R(_), (k = !1);
    },
    d(w) {
      w && n(a), b && b.d(), _ && _.d();
    },
  };
}
function ms(m, a, l) {
  let { $$slots: p = {}, $$scope: e } = a;
  const o = us(p);
  let { title: c = 'My title' } = a,
    { ariaLabel: g = 'Arial label' } = a,
    { id: k = 'id' } = a,
    { src: b = '' } = a,
    { scrolling: _ = 'no' } = a,
    { size: w = 'normal' } = a;
  return (
    fs(() => {
      window &&
        (function () {
          window.addEventListener('message', function (f) {
            if (f.data['datawrapper-height'] !== void 0) {
              const C = document.querySelectorAll('iframe');
              for (const z in f.data['datawrapper-height'])
                for (let N = 0; N < C.length; N++)
                  C[N].contentWindow === f.source &&
                    (C[N].style.height =
                      f.data['datawrapper-height'][z] + 'px');
            }
          });
        })();
    }),
    (m.$$set = (f) => {
      'title' in f && l(0, (c = f.title)),
        'ariaLabel' in f && l(1, (g = f.ariaLabel)),
        'id' in f && l(2, (k = f.id)),
        'src' in f && l(3, (b = f.src)),
        'scrolling' in f && l(4, (_ = f.scrolling)),
        'size' in f && l(5, (w = f.size)),
        '$$scope' in f && l(7, (e = f.$$scope));
    }),
    [c, g, k, b, _, w, o, e, p]
  );
}
class Ct extends as {
  constructor(a) {
    super(),
      ts(this, a, ms, ks, ss, {
        title: 0,
        ariaLabel: 1,
        id: 2,
        src: 3,
        scrolling: 4,
        size: 5,
      });
  }
}
function gs(m) {
  let a, l;
  return (
    (a = new Ct({
      props: {
        title: 'Global abortion access',
        ariaLabel: 'map',
        id: 'abortion-rights-map',
        src: 'https://graphics.reuters.com/USA-ABORTION/lgpdwggnwvo/media-embed.html',
      },
    })),
    {
      c() {
        X(a.$$.fragment);
      },
      l(p) {
        Z(a.$$.fragment, p);
      },
      m(p, e) {
        x(a, p, e), (l = !0);
      },
      p: Ga,
      i(p) {
        l || (A(a.$$.fragment, p), (l = !0));
      },
      o(p) {
        R(a.$$.fragment, p), (l = !1);
      },
      d(p) {
        aa(a, p);
      },
    }
  );
}
function _s(m) {
  let a, l;
  return (
    (a = new Ct({
      props: {
        title: 'Global abortion access',
        ariaLabel: 'map',
        id: 'abortion-rights-map',
        src: 'https://graphics.reuters.com/USA-ABORTION/lgpdwggnwvo/media-embed.html',
        size: 'wider',
      },
    })),
    {
      c() {
        X(a.$$.fragment);
      },
      l(p) {
        Z(a.$$.fragment, p);
      },
      m(p, e) {
        x(a, p, e), (l = !0);
      },
      p: Ga,
      i(p) {
        l || (A(a.$$.fragment, p), (l = !0));
      },
      o(p) {
        R(a.$$.fragment, p), (l = !1);
      },
      d(p) {
        aa(a, p);
      },
    }
  );
}
function vs(m) {
  let a, l, p, e, o, c;
  return {
    c() {
      (a = r('div')),
        (l = r('h3')),
        (p = d('Global abortion access')),
        (e = E()),
        (o = r('p')),
        (c = d('A map of worldwide access to abortion.')),
        this.h();
    },
    l(g) {
      a = i(g, 'DIV', { slot: !0, class: !0 });
      var k = u(a);
      l = i(k, 'H3', {});
      var b = u(l);
      (p = h(b, 'Global abortion access')),
        b.forEach(n),
        (e = y(k)),
        (o = i(k, 'P', {}));
      var _ = u(o);
      (c = h(_, 'A map of worldwide access to abortion.')),
        _.forEach(n),
        k.forEach(n),
        this.h();
    },
    h() {
      $(a, 'slot', 'title'), $(a, 'class', 'title');
    },
    m(g, k) {
      D(g, a, k), t(a, l), t(l, p), t(a, e), t(a, o), t(o, c);
    },
    p: Ga,
    d(g) {
      g && n(a);
    },
  };
}
function ws(m) {
  let a, l, p, e, o, c;
  return {
    c() {
      (a = r('aside')),
        (l = r('p')),
        (p = d(
          'Note: Different indicators and additional restrictions, including different gestational limits, apply in some countries. Refer to source for full classification. Current as of May 4, 2022.'
        )),
        (e = E()),
        (o = r('p')),
        (c = d('Source: Center for Reproductive Rights')),
        this.h();
    },
    l(g) {
      a = i(g, 'ASIDE', { slot: !0 });
      var k = u(a);
      l = i(k, 'P', { class: !0 });
      var b = u(l);
      (p = h(
        b,
        'Note: Different indicators and additional restrictions, including different gestational limits, apply in some countries. Refer to source for full classification. Current as of May 4, 2022.'
      )),
        b.forEach(n),
        (e = y(k)),
        (o = i(k, 'P', { class: !0 }));
      var _ = u(o);
      (c = h(_, 'Source: Center for Reproductive Rights')),
        _.forEach(n),
        k.forEach(n),
        this.h();
    },
    h() {
      $(l, 'class', 'note'), $(o, 'class', 'source'), $(a, 'slot', 'notes');
    },
    m(g, k) {
      D(g, a, k), t(a, l), t(l, p), t(a, e), t(a, o), t(o, c);
    },
    p: Ga,
    d(g) {
      g && n(a);
    },
  };
}
function bs(m) {
  let a, l, p, e, o;
  return (
    (a = new Ct({
      props: {
        title: 'Global abortion access',
        ariaLabel: 'map',
        id: 'abortion-rights-map',
        src: 'https://graphics.reuters.com/USA-ABORTION/lgvdwemlbpo/media-embed.html',
        $$slots: { notes: [ws], title: [vs] },
        $$scope: { ctx: m },
      },
    })),
    {
      c() {
        X(a.$$.fragment),
          (l = E()),
          (p = r('style')),
          (e = d(`h3 {
  color: #2c1b79;
}`)),
          this.h();
      },
      l(c) {
        Z(a.$$.fragment, c), (l = y(c)), (p = i(c, 'STYLE', { lang: !0 }));
        var g = u(p);
        (e = h(
          g,
          `h3 {
  color: #2c1b79;
}`
        )),
          g.forEach(n),
          this.h();
      },
      h() {
        $(p, 'lang', 'scss');
      },
      m(c, g) {
        x(a, c, g), D(c, l, g), D(c, p, g), t(p, e), (o = !0);
      },
      p(c, g) {
        const k = {};
        g & 1 && (k.$$scope = { dirty: g, ctx: c }), a.$set(k);
      },
      i(c) {
        o || (A(a.$$.fragment, c), (o = !0));
      },
      o(c) {
        R(a.$$.fragment, c), (o = !1);
      },
      d(c) {
        aa(a, c), c && n(l), c && n(p);
      },
    }
  );
}
function Es(m) {
  let a,
    l,
    p,
    e,
    o,
    c,
    g,
    k,
    b = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> DatawrapperChart <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatawrapperChart</span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>Global abortion access<span class="token punctuation">'</span></span>
  <span class="token attr-name">ariaLabel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>map<span class="token punctuation">'</span></span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>abortion-rights-map<span class="token punctuation">'</span></span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>https://graphics.reuters.com/USA-ABORTION/lgpdwggnwvo/media-embed.html<span class="token punctuation">'</span></span>
 <span class="token punctuation">/></span></span></code>`,
    _,
    w,
    f,
    C,
    z,
    N,
    Na,
    Y,
    Pa,
    ta,
    Ha,
    Ba,
    Ma,
    S,
    sa,
    Ua,
    za,
    q,
    Ya,
    na,
    qa,
    Va,
    ja,
    T,
    Fa,
    ea,
    Ja,
    Wa,
    oa,
    Ka,
    Qa,
    Xa,
    la,
    Za,
    wa,
    P,
    pa,
    xa,
    at,
    O,
    tt,
    ca,
    st,
    nt,
    ra,
    et,
    ot,
    ia,
    lt,
    pt,
    ua,
    ct,
    rt,
    ba,
    V,
    ps = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatawrapperChart</span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>Global abortion access<span class="token punctuation">'</span></span>
  <span class="token attr-name">ariaLabel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>map<span class="token punctuation">'</span></span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>abortion-rights-map<span class="token punctuation">'</span></span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>https://graphics.reuters.com/USA-ABORTION/lgpdwggnwvo/media-embed.html<span class="token punctuation">'</span></span>
  <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>wider<span class="token punctuation">'</span></span>
 <span class="token punctuation">/></span></span></code>`,
    Ea,
    H,
    ya,
    I,
    fa,
    it,
    ut,
    G,
    ft,
    da,
    dt,
    ht,
    ha,
    kt,
    mt,
    gt,
    j,
    _t,
    ka,
    vt,
    wt,
    Da,
    B,
    ma,
    bt,
    Et,
    ga,
    yt,
    $a,
    F,
    cs = `<code class="language-svelte">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatawrapperChart</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>Global abortion access<span class="token punctuation">'</span></span>
    <span class="token attr-name">ariaLabel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>map<span class="token punctuation">'</span></span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>abortion-rights-map<span class="token punctuation">'</span></span>
    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>https://graphics.reuters.com/USA-ABORTION/lgvdwemlbpo/media-embed.html<span class="token punctuation">'</span></span>
  <span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- Add a title and/or notes with slots --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Global abortion access<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>A map of worldwide access to abortion.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>notes<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>note<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Note: Different indicators and additional restrictions, including different gestational limits, apply in some countries. Refer to source for full classification. Current as of May 4, 2022.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>source<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Source: Center for Reproductive Rights<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DatawrapperChart</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">// You can now style those elements!
    h3</span> <span class="token punctuation">&#123;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #2c1b79<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,
    Ca,
    M,
    Aa;
  return (
    (w = new $t({
      props: { $$slots: { default: [gs] }, $$scope: { ctx: m } },
    })),
    (H = new $t({
      props: { $$slots: { default: [_s] }, $$scope: { ctx: m } },
    })),
    (M = new $t({
      props: { $$slots: { default: [bs] }, $$scope: { ctx: m } },
    })),
    {
      c() {
        (a = r('section')),
          (l = r('h2')),
          (p = d(Zt)),
          (e = E()),
          (o = r('p')),
          (c = d(xt)),
          (g = E()),
          (k = r('pre')),
          (_ = E()),
          X(w.$$.fragment),
          (f = E()),
          (C = r('section')),
          (z = r('h4')),
          (N = d('Getting the chart URL')),
          (Na = E()),
          (Y = r('p')),
          (Pa = d('Copy the source url for the Datawrapper chart in the ')),
          (ta = r('code')),
          (Ha = d('src')),
          (Ba = d(` prop.
You can get this from the published url on Reuters graphics.`)),
          (Ma = E()),
          (S = r('ul')),
          (sa = r('li')),
          (Ua = d('Publish the chart on Datawrapper.')),
          (za = E()),
          (q = r('li')),
          (Ya = d('Go to the ')),
          (na = r('strong')),
          (qa = d('Datawrapper charts')),
          (Va = d(' Teams channel, wait for the graph to finish publishing.')),
          (ja = E()),
          (T = r('li')),
          (Fa = d('Inside ')),
          (ea = r('strong')),
          (Ja = d('Embed code (for developers only)')),
          (Wa = d(', find and copy the url inside the ')),
          (oa = r('code')),
          (Ka = d('src')),
          (Qa = d(' tag.')),
          (Xa = E()),
          (la = r('p')),
          (Za =
            d(`Note: There is no need to update the url if you update the chart inside Datawrapper.
Any changes will be automatically reflected.`)),
          (wa = E()),
          (P = r('section')),
          (pa = r('h4')),
          (xa = d('Graph width')),
          (at = E()),
          (O = r('p')),
          (tt =
            d(`Adjust the size of the graphic by passing a class name corresponding to one of
our well widths: `)),
          (ca = r('code')),
          (st = d('wide')),
          (nt = d(', ')),
          (ra = r('code')),
          (et = d('wider')),
          (ot = d(', ')),
          (ia = r('code')),
          (lt = d('widest')),
          (pt = d(' or ')),
          (ua = r('code')),
          (ct = d('fluid')),
          (rt = d('.')),
          (ba = E()),
          (V = r('pre')),
          (Ea = E()),
          X(H.$$.fragment),
          (ya = E()),
          (I = r('section')),
          (fa = r('h4')),
          (it = d('Additional props')),
          (ut = E()),
          (G = r('p')),
          (ft = d('Add a ')),
          (da = r('code')),
          (dt = d('title')),
          (ht = d(' and ')),
          (ha = r('code')),
          (kt = d('ariaLabel')),
          (mt = d(' for screenreaders.')),
          (gt = E()),
          (j = r('p')),
          (_t = d('Give your chart a unique id in the ')),
          (ka = r('code')),
          (vt = d('id')),
          (wt = d(' prop.')),
          (Da = E()),
          (B = r('section')),
          (ma = r('h4')),
          (bt = d('Chart title, description, source and note')),
          (Et = E()),
          (ga = r('p')),
          (yt =
            d(`By default, Datawrapper will export your chart with the title, chatter and notes. At the moment, these
don\u2019t match our styles, can\u2019t be made to fit into the well and will necessarily stretch to fit the graph width and
can\u2019t be modified. You can do all of these things by removing all the text from your Datawrapper chart before
publishing it and instead adding whatever you need inside the component via slots as below.`)),
          ($a = E()),
          (F = r('pre')),
          (Ca = E()),
          X(M.$$.fragment),
          this.h();
      },
      l(s) {
        a = i(s, 'SECTION', {});
        var v = u(a);
        l = i(v, 'H2', {});
        var _a = u(l);
        (p = h(_a, Zt)), _a.forEach(n), (e = y(v)), (o = i(v, 'P', {}));
        var va = u(o);
        (c = h(va, xt)),
          va.forEach(n),
          v.forEach(n),
          (g = y(s)),
          (k = i(s, 'PRE', { class: !0 }));
        var Oa = u(k);
        Oa.forEach(n),
          (_ = y(s)),
          Z(w.$$.fragment, s),
          (f = y(s)),
          (C = i(s, 'SECTION', {}));
        var U = u(C);
        z = i(U, 'H4', {});
        var At = u(z);
        (N = h(At, 'Getting the chart URL')),
          At.forEach(n),
          (Na = y(U)),
          (Y = i(U, 'P', {}));
        var Ra = u(Y);
        (Pa = h(Ra, 'Copy the source url for the Datawrapper chart in the ')),
          (ta = i(Ra, 'CODE', {}));
        var Ot = u(ta);
        (Ha = h(Ot, 'src')),
          Ot.forEach(n),
          (Ba = h(
            Ra,
            ` prop.
You can get this from the published url on Reuters graphics.`
          )),
          Ra.forEach(n),
          (Ma = y(U)),
          (S = i(U, 'UL', {}));
        var J = u(S);
        sa = i(J, 'LI', {});
        var Rt = u(sa);
        (Ua = h(Rt, 'Publish the chart on Datawrapper.')),
          Rt.forEach(n),
          (za = y(J)),
          (q = i(J, 'LI', {}));
        var Ia = u(q);
        (Ya = h(Ia, 'Go to the ')), (na = i(Ia, 'STRONG', {}));
        var It = u(na);
        (qa = h(It, 'Datawrapper charts')),
          It.forEach(n),
          (Va = h(
            Ia,
            ' Teams channel, wait for the graph to finish publishing.'
          )),
          Ia.forEach(n),
          (ja = y(J)),
          (T = i(J, 'LI', {}));
        var W = u(T);
        (Fa = h(W, 'Inside ')), (ea = i(W, 'STRONG', {}));
        var Lt = u(ea);
        (Ja = h(Lt, 'Embed code (for developers only)')),
          Lt.forEach(n),
          (Wa = h(W, ', find and copy the url inside the ')),
          (oa = i(W, 'CODE', {}));
        var St = u(oa);
        (Ka = h(St, 'src')),
          St.forEach(n),
          (Qa = h(W, ' tag.')),
          W.forEach(n),
          J.forEach(n),
          (Xa = y(U)),
          (la = i(U, 'P', {}));
        var Tt = u(la);
        (Za = h(
          Tt,
          `Note: There is no need to update the url if you update the chart inside Datawrapper.
Any changes will be automatically reflected.`
        )),
          Tt.forEach(n),
          U.forEach(n),
          (wa = y(s)),
          (P = i(s, 'SECTION', {}));
        var La = u(P);
        pa = i(La, 'H4', {});
        var Gt = u(pa);
        (xa = h(Gt, 'Graph width')),
          Gt.forEach(n),
          (at = y(La)),
          (O = i(La, 'P', {}));
        var L = u(O);
        (tt = h(
          L,
          `Adjust the size of the graphic by passing a class name corresponding to one of
our well widths: `
        )),
          (ca = i(L, 'CODE', {}));
        var Nt = u(ca);
        (st = h(Nt, 'wide')),
          Nt.forEach(n),
          (nt = h(L, ', ')),
          (ra = i(L, 'CODE', {}));
        var Pt = u(ra);
        (et = h(Pt, 'wider')),
          Pt.forEach(n),
          (ot = h(L, ', ')),
          (ia = i(L, 'CODE', {}));
        var Ht = u(ia);
        (lt = h(Ht, 'widest')),
          Ht.forEach(n),
          (pt = h(L, ' or ')),
          (ua = i(L, 'CODE', {}));
        var Bt = u(ua);
        (ct = h(Bt, 'fluid')),
          Bt.forEach(n),
          (rt = h(L, '.')),
          L.forEach(n),
          La.forEach(n),
          (ba = y(s)),
          (V = i(s, 'PRE', { class: !0 }));
        var rs = u(V);
        rs.forEach(n),
          (Ea = y(s)),
          Z(H.$$.fragment, s),
          (ya = y(s)),
          (I = i(s, 'SECTION', {}));
        var K = u(I);
        fa = i(K, 'H4', {});
        var Mt = u(fa);
        (it = h(Mt, 'Additional props')),
          Mt.forEach(n),
          (ut = y(K)),
          (G = i(K, 'P', {}));
        var Q = u(G);
        (ft = h(Q, 'Add a ')), (da = i(Q, 'CODE', {}));
        var Ut = u(da);
        (dt = h(Ut, 'title')),
          Ut.forEach(n),
          (ht = h(Q, ' and ')),
          (ha = i(Q, 'CODE', {}));
        var zt = u(ha);
        (kt = h(zt, 'ariaLabel')),
          zt.forEach(n),
          (mt = h(Q, ' for screenreaders.')),
          Q.forEach(n),
          (gt = y(K)),
          (j = i(K, 'P', {}));
        var Sa = u(j);
        (_t = h(Sa, 'Give your chart a unique id in the ')),
          (ka = i(Sa, 'CODE', {}));
        var Yt = u(ka);
        (vt = h(Yt, 'id')),
          Yt.forEach(n),
          (wt = h(Sa, ' prop.')),
          Sa.forEach(n),
          K.forEach(n),
          (Da = y(s)),
          (B = i(s, 'SECTION', {}));
        var Ta = u(B);
        ma = i(Ta, 'H4', {});
        var qt = u(ma);
        (bt = h(qt, 'Chart title, description, source and note')),
          qt.forEach(n),
          (Et = y(Ta)),
          (ga = i(Ta, 'P', {}));
        var Vt = u(ga);
        (yt = h(
          Vt,
          `By default, Datawrapper will export your chart with the title, chatter and notes. At the moment, these
don\u2019t match our styles, can\u2019t be made to fit into the well and will necessarily stretch to fit the graph width and
can\u2019t be modified. You can do all of these things by removing all the text from your Datawrapper chart before
publishing it and instead adding whatever you need inside the component via slots as below.`
        )),
          Vt.forEach(n),
          Ta.forEach(n),
          ($a = y(s)),
          (F = i(s, 'PRE', { class: !0 }));
        var is = u(F);
        is.forEach(n), (Ca = y(s)), Z(M.$$.fragment, s), this.h();
      },
      h() {
        $(k, 'class', 'language-svelte'),
          $(V, 'class', 'language-svelte'),
          $(F, 'class', 'language-svelte');
      },
      m(s, v) {
        D(s, a, v),
          t(a, l),
          t(l, p),
          t(a, e),
          t(a, o),
          t(o, c),
          D(s, g, v),
          D(s, k, v),
          (k.innerHTML = b),
          D(s, _, v),
          x(w, s, v),
          D(s, f, v),
          D(s, C, v),
          t(C, z),
          t(z, N),
          t(C, Na),
          t(C, Y),
          t(Y, Pa),
          t(Y, ta),
          t(ta, Ha),
          t(Y, Ba),
          t(C, Ma),
          t(C, S),
          t(S, sa),
          t(sa, Ua),
          t(S, za),
          t(S, q),
          t(q, Ya),
          t(q, na),
          t(na, qa),
          t(q, Va),
          t(S, ja),
          t(S, T),
          t(T, Fa),
          t(T, ea),
          t(ea, Ja),
          t(T, Wa),
          t(T, oa),
          t(oa, Ka),
          t(T, Qa),
          t(C, Xa),
          t(C, la),
          t(la, Za),
          D(s, wa, v),
          D(s, P, v),
          t(P, pa),
          t(pa, xa),
          t(P, at),
          t(P, O),
          t(O, tt),
          t(O, ca),
          t(ca, st),
          t(O, nt),
          t(O, ra),
          t(ra, et),
          t(O, ot),
          t(O, ia),
          t(ia, lt),
          t(O, pt),
          t(O, ua),
          t(ua, ct),
          t(O, rt),
          D(s, ba, v),
          D(s, V, v),
          (V.innerHTML = ps),
          D(s, Ea, v),
          x(H, s, v),
          D(s, ya, v),
          D(s, I, v),
          t(I, fa),
          t(fa, it),
          t(I, ut),
          t(I, G),
          t(G, ft),
          t(G, da),
          t(da, dt),
          t(G, ht),
          t(G, ha),
          t(ha, kt),
          t(G, mt),
          t(I, gt),
          t(I, j),
          t(j, _t),
          t(j, ka),
          t(ka, vt),
          t(j, wt),
          D(s, Da, v),
          D(s, B, v),
          t(B, ma),
          t(ma, bt),
          t(B, Et),
          t(B, ga),
          t(ga, yt),
          D(s, $a, v),
          D(s, F, v),
          (F.innerHTML = cs),
          D(s, Ca, v),
          x(M, s, v),
          (Aa = !0);
      },
      p(s, [v]) {
        const _a = {};
        v & 1 && (_a.$$scope = { dirty: v, ctx: s }), w.$set(_a);
        const va = {};
        v & 1 && (va.$$scope = { dirty: v, ctx: s }), H.$set(va);
        const Oa = {};
        v & 1 && (Oa.$$scope = { dirty: v, ctx: s }), M.$set(Oa);
      },
      i(s) {
        Aa ||
          (A(w.$$.fragment, s),
          A(H.$$.fragment, s),
          A(M.$$.fragment, s),
          (Aa = !0));
      },
      o(s) {
        R(w.$$.fragment, s),
          R(H.$$.fragment, s),
          R(M.$$.fragment, s),
          (Aa = !1);
      },
      d(s) {
        s && n(a),
          s && n(g),
          s && n(k),
          s && n(_),
          aa(w, s),
          s && n(f),
          s && n(C),
          s && n(wa),
          s && n(P),
          s && n(ba),
          s && n(V),
          s && n(Ea),
          aa(H, s),
          s && n(ya),
          s && n(I),
          s && n(Da),
          s && n(B),
          s && n($a),
          s && n(F),
          s && n(Ca),
          aa(M, s);
      },
    }
  );
}
const ys = {
    title: 'DatawrapperChart',
    description: 'Easily add a responsive Datawrapper embed on your page.',
    slug: 'datawrapper-chart',
  },
  { title: Zt, description: xt, slug: Os } = ys;
class Rs extends as {
  constructor(a) {
    super(), ts(this, a, null, Es, ss, {});
  }
}
export { Rs as default, ys as metadata };
