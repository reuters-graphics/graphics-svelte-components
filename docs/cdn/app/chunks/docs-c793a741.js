import {
  S as xt,
  i as as,
  s as ts,
  e as r,
  c as i,
  a as u,
  d as n,
  b as $,
  g as D,
  G as ss,
  H as ns,
  I as es,
  q as A,
  o as R,
  k as E,
  m as y,
  W as Vt,
  f as yt,
  J as t,
  n as jt,
  p as Ft,
  a0 as us,
  v as fs,
  F as os,
  t as d,
  w as X,
  h,
  x as Z,
  y as x,
  B as aa,
  K as ls,
} from './vendor-5176a1fc.js';
import './@component-docs_components-2f133e3d.js';
import { D as Dt } from './index-9949a7c2.js';
import './paths-396f020f.js';
const ds = (m) => ({}),
  Wt = (m) => ({}),
  hs = (m) => ({}),
  Jt = (m) => ({});
function Kt(m) {
  let a, l;
  const p = m[8].title,
    e = os(p, m, m[7], Jt);
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
        ss(e, p, o, o[7], l ? es(p, o[7], c, hs) : ns(o[7]), Jt);
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
function Qt(m) {
  let a, l;
  const p = m[8].notes,
    e = os(p, m, m[7], Wt);
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
        ss(e, p, o, o[7], l ? es(p, o[7], c, ds) : ns(o[7]), Wt);
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
    b = m[6].title && Kt(m),
    _ = m[6].notes && Qt(m);
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
        Vt(e.src, (o = m[3])) || $(e, 'src', o),
        $(e, 'scrolling', m[4]),
        $(e, 'frameborder', '0'),
        yt(e, 'width', '0'),
        yt(e, 'min-width', '100%', 1),
        yt(e, 'border', 'none'),
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
          : ((b = Kt(w)), b.c(), A(b, 1), b.m(a, l))
        : b &&
          (jt(),
          R(b, 1, 1, () => {
            b = null;
          }),
          Ft()),
        (!k || f & 1) && $(e, 'title', w[0]),
        (!k || f & 2) && $(e, 'aria-label', w[1]),
        (!k || f & 4) && $(e, 'id', w[2]),
        (!k || (f & 8 && !Vt(e.src, (o = w[3])))) && $(e, 'src', o),
        (!k || f & 16) && $(e, 'scrolling', w[4]),
        w[6].notes
          ? _
            ? (_.p(w, f), f & 64 && A(_, 1))
            : ((_ = Qt(w)), _.c(), A(_, 1), _.m(a, null))
          : _ &&
            (jt(),
            R(_, 1, 1, () => {
              _ = null;
            }),
            Ft()),
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
class $t extends xt {
  constructor(a) {
    super();
    as(this, a, ms, ks, ts, {
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
    (a = new $t({
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
      p: ls,
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
    (a = new $t({
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
      p: ls,
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
    d(g) {
      g && n(a);
    },
  };
}
function bs(m) {
  let a, l, p, e, o;
  return (
    (a = new $t({
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
    Ga,
    q,
    Na,
    ta,
    Pa,
    Ha,
    Ba,
    S,
    sa,
    Ma,
    Ua,
    Y,
    za,
    na,
    qa,
    Ya,
    Va,
    T,
    ja,
    ea,
    Fa,
    Wa,
    oa,
    Ja,
    Ka,
    Qa,
    la,
    Xa,
    wa,
    P,
    pa,
    Za,
    xa,
    O,
    at,
    ca,
    tt,
    st,
    ra,
    nt,
    et,
    ia,
    ot,
    lt,
    ua,
    pt,
    ct,
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
    rt,
    it,
    G,
    ut,
    da,
    ft,
    dt,
    ha,
    ht,
    kt,
    mt,
    j,
    gt,
    ka,
    _t,
    vt,
    Da,
    B,
    ma,
    wt,
    bt,
    ga,
    Et,
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
    (w = new Dt({
      props: { $$slots: { default: [gs] }, $$scope: { ctx: m } },
    })),
    (H = new Dt({
      props: { $$slots: { default: [_s] }, $$scope: { ctx: m } },
    })),
    (M = new Dt({
      props: { $$slots: { default: [bs] }, $$scope: { ctx: m } },
    })),
    {
      c() {
        (a = r('section')),
          (l = r('h2')),
          (p = d(Xt)),
          (e = E()),
          (o = r('p')),
          (c = d(Zt)),
          (g = E()),
          (k = r('pre')),
          (_ = E()),
          X(w.$$.fragment),
          (f = E()),
          (C = r('section')),
          (z = r('h4')),
          (N = d('Getting the chart URL')),
          (Ga = E()),
          (q = r('p')),
          (Na = d('Copy the source url for the Datawrapper chart in the ')),
          (ta = r('code')),
          (Pa = d('src')),
          (Ha = d(` prop.
You can get this from the published url on Reuters graphics.`)),
          (Ba = E()),
          (S = r('ul')),
          (sa = r('li')),
          (Ma = d('Publish the chart on Datawrapper.')),
          (Ua = E()),
          (Y = r('li')),
          (za = d('Go to the ')),
          (na = r('strong')),
          (qa = d('Datawrapper charts')),
          (Ya = d(' Teams channel, wait for the graph to finish publishing.')),
          (Va = E()),
          (T = r('li')),
          (ja = d('Inside ')),
          (ea = r('strong')),
          (Fa = d('Embed code (for developers only)')),
          (Wa = d(', find and copy the url inside the ')),
          (oa = r('code')),
          (Ja = d('src')),
          (Ka = d(' tag.')),
          (Qa = E()),
          (la = r('p')),
          (Xa =
            d(`Note: There is no need to update the url if you update the chart inside Datawrapper.
Any changes will be automatically reflected.`)),
          (wa = E()),
          (P = r('section')),
          (pa = r('h4')),
          (Za = d('Graph width')),
          (xa = E()),
          (O = r('p')),
          (at =
            d(`Adjust the size of the graphic by passing a class name corresponding to one of
our well widths: `)),
          (ca = r('code')),
          (tt = d('wide')),
          (st = d(', ')),
          (ra = r('code')),
          (nt = d('wider')),
          (et = d(', ')),
          (ia = r('code')),
          (ot = d('widest')),
          (lt = d(' or ')),
          (ua = r('code')),
          (pt = d('fluid')),
          (ct = d('.')),
          (ba = E()),
          (V = r('pre')),
          (Ea = E()),
          X(H.$$.fragment),
          (ya = E()),
          (I = r('section')),
          (fa = r('h4')),
          (rt = d('Additional props')),
          (it = E()),
          (G = r('p')),
          (ut = d('Add a ')),
          (da = r('code')),
          (ft = d('title')),
          (dt = d(' and ')),
          (ha = r('code')),
          (ht = d('ariaLabel')),
          (kt = d(' for screenreaders.')),
          (mt = E()),
          (j = r('p')),
          (gt = d('Give your chart a unique id in the ')),
          (ka = r('code')),
          (_t = d('id')),
          (vt = d(' prop.')),
          (Da = E()),
          (B = r('section')),
          (ma = r('h4')),
          (wt = d('Chart title, description, source and note')),
          (bt = E()),
          (ga = r('p')),
          (Et =
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
        (p = h(_a, Xt)), _a.forEach(n), (e = y(v)), (o = i(v, 'P', {}));
        var va = u(o);
        (c = h(va, Zt)),
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
        var Ct = u(z);
        (N = h(Ct, 'Getting the chart URL')),
          Ct.forEach(n),
          (Ga = y(U)),
          (q = i(U, 'P', {}));
        var Ra = u(q);
        (Na = h(Ra, 'Copy the source url for the Datawrapper chart in the ')),
          (ta = i(Ra, 'CODE', {}));
        var At = u(ta);
        (Pa = h(At, 'src')),
          At.forEach(n),
          (Ha = h(
            Ra,
            ` prop.
You can get this from the published url on Reuters graphics.`
          )),
          Ra.forEach(n),
          (Ba = y(U)),
          (S = i(U, 'UL', {}));
        var W = u(S);
        sa = i(W, 'LI', {});
        var Ot = u(sa);
        (Ma = h(Ot, 'Publish the chart on Datawrapper.')),
          Ot.forEach(n),
          (Ua = y(W)),
          (Y = i(W, 'LI', {}));
        var Ia = u(Y);
        (za = h(Ia, 'Go to the ')), (na = i(Ia, 'STRONG', {}));
        var Rt = u(na);
        (qa = h(Rt, 'Datawrapper charts')),
          Rt.forEach(n),
          (Ya = h(
            Ia,
            ' Teams channel, wait for the graph to finish publishing.'
          )),
          Ia.forEach(n),
          (Va = y(W)),
          (T = i(W, 'LI', {}));
        var J = u(T);
        (ja = h(J, 'Inside ')), (ea = i(J, 'STRONG', {}));
        var It = u(ea);
        (Fa = h(It, 'Embed code (for developers only)')),
          It.forEach(n),
          (Wa = h(J, ', find and copy the url inside the ')),
          (oa = i(J, 'CODE', {}));
        var Lt = u(oa);
        (Ja = h(Lt, 'src')),
          Lt.forEach(n),
          (Ka = h(J, ' tag.')),
          J.forEach(n),
          W.forEach(n),
          (Qa = y(U)),
          (la = i(U, 'P', {}));
        var St = u(la);
        (Xa = h(
          St,
          `Note: There is no need to update the url if you update the chart inside Datawrapper.
Any changes will be automatically reflected.`
        )),
          St.forEach(n),
          U.forEach(n),
          (wa = y(s)),
          (P = i(s, 'SECTION', {}));
        var La = u(P);
        pa = i(La, 'H4', {});
        var Tt = u(pa);
        (Za = h(Tt, 'Graph width')),
          Tt.forEach(n),
          (xa = y(La)),
          (O = i(La, 'P', {}));
        var L = u(O);
        (at = h(
          L,
          `Adjust the size of the graphic by passing a class name corresponding to one of
our well widths: `
        )),
          (ca = i(L, 'CODE', {}));
        var Gt = u(ca);
        (tt = h(Gt, 'wide')),
          Gt.forEach(n),
          (st = h(L, ', ')),
          (ra = i(L, 'CODE', {}));
        var Nt = u(ra);
        (nt = h(Nt, 'wider')),
          Nt.forEach(n),
          (et = h(L, ', ')),
          (ia = i(L, 'CODE', {}));
        var Pt = u(ia);
        (ot = h(Pt, 'widest')),
          Pt.forEach(n),
          (lt = h(L, ' or ')),
          (ua = i(L, 'CODE', {}));
        var Ht = u(ua);
        (pt = h(Ht, 'fluid')),
          Ht.forEach(n),
          (ct = h(L, '.')),
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
        var Bt = u(fa);
        (rt = h(Bt, 'Additional props')),
          Bt.forEach(n),
          (it = y(K)),
          (G = i(K, 'P', {}));
        var Q = u(G);
        (ut = h(Q, 'Add a ')), (da = i(Q, 'CODE', {}));
        var Mt = u(da);
        (ft = h(Mt, 'title')),
          Mt.forEach(n),
          (dt = h(Q, ' and ')),
          (ha = i(Q, 'CODE', {}));
        var Ut = u(ha);
        (ht = h(Ut, 'ariaLabel')),
          Ut.forEach(n),
          (kt = h(Q, ' for screenreaders.')),
          Q.forEach(n),
          (mt = y(K)),
          (j = i(K, 'P', {}));
        var Sa = u(j);
        (gt = h(Sa, 'Give your chart a unique id in the ')),
          (ka = i(Sa, 'CODE', {}));
        var zt = u(ka);
        (_t = h(zt, 'id')),
          zt.forEach(n),
          (vt = h(Sa, ' prop.')),
          Sa.forEach(n),
          K.forEach(n),
          (Da = y(s)),
          (B = i(s, 'SECTION', {}));
        var Ta = u(B);
        ma = i(Ta, 'H4', {});
        var qt = u(ma);
        (wt = h(qt, 'Chart title, description, source and note')),
          qt.forEach(n),
          (bt = y(Ta)),
          (ga = i(Ta, 'P', {}));
        var Yt = u(ga);
        (Et = h(
          Yt,
          `By default, Datawrapper will export your chart with the title, chatter and notes. At the moment, these
don\u2019t match our styles, can\u2019t be made to fit into the well and will necessarily stretch to fit the graph width and
can\u2019t be modified. You can do all of these things by removing all the text from your Datawrapper chart before
publishing it and instead adding whatever you need inside the component via slots as below.`
        )),
          Yt.forEach(n),
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
          t(C, Ga),
          t(C, q),
          t(q, Na),
          t(q, ta),
          t(ta, Pa),
          t(q, Ha),
          t(C, Ba),
          t(C, S),
          t(S, sa),
          t(sa, Ma),
          t(S, Ua),
          t(S, Y),
          t(Y, za),
          t(Y, na),
          t(na, qa),
          t(Y, Ya),
          t(S, Va),
          t(S, T),
          t(T, ja),
          t(T, ea),
          t(ea, Fa),
          t(T, Wa),
          t(T, oa),
          t(oa, Ja),
          t(T, Ka),
          t(C, Qa),
          t(C, la),
          t(la, Xa),
          D(s, wa, v),
          D(s, P, v),
          t(P, pa),
          t(pa, Za),
          t(P, xa),
          t(P, O),
          t(O, at),
          t(O, ca),
          t(ca, tt),
          t(O, st),
          t(O, ra),
          t(ra, nt),
          t(O, et),
          t(O, ia),
          t(ia, ot),
          t(O, lt),
          t(O, ua),
          t(ua, pt),
          t(O, ct),
          D(s, ba, v),
          D(s, V, v),
          (V.innerHTML = ps),
          D(s, Ea, v),
          x(H, s, v),
          D(s, ya, v),
          D(s, I, v),
          t(I, fa),
          t(fa, rt),
          t(I, it),
          t(I, G),
          t(G, ut),
          t(G, da),
          t(da, ft),
          t(G, dt),
          t(G, ha),
          t(ha, ht),
          t(G, kt),
          t(I, mt),
          t(I, j),
          t(j, gt),
          t(j, ka),
          t(ka, _t),
          t(j, vt),
          D(s, Da, v),
          D(s, B, v),
          t(B, ma),
          t(ma, wt),
          t(B, bt),
          t(B, ga),
          t(ga, Et),
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
  { title: Xt, description: Zt, slug: Os } = ys;
class Rs extends xt {
  constructor(a) {
    super();
    as(this, a, null, Es, ts, {});
  }
}
export { Rs as default, ys as metadata };
