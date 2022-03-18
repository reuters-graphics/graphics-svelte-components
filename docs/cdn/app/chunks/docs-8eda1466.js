import {
  S as O,
  i as y,
  s as D,
  e as i,
  t as _,
  k as j,
  c as r,
  a as u,
  g as E,
  d as p,
  n as S,
  b as H,
  f as h,
  H as c,
  I as d,
} from './vendor-362b926b.js';
function I(w) {
  let a,
    e,
    k,
    g,
    o,
    m,
    l,
    t,
    x = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> <span class="token constant">SEO</span> <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SEO</span>
  <span class="token attr-name">seoTitle="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'A title for Google'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">seoDescription="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'A description for Google'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">shareTitle="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'A title for Twitter/Facebook'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">shareDecription="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'A description for Twitter/Facebook'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">shareImgPath="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'images/share.jpg'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">lang="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'en'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">hostname="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'graphics.reuters.com'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
<span class="token punctuation">/></span></span></code>`;
  return {
    c() {
      (a = i('section')),
        (e = i('h2')),
        (k = _(T)),
        (g = j()),
        (o = i('p')),
        (m = _(b)),
        (l = j()),
        (t = i('pre')),
        this.h();
    },
    l(s) {
      a = r(s, 'SECTION', {});
      var n = u(a);
      e = r(n, 'H2', {});
      var f = u(e);
      (k = E(f, T)), f.forEach(p), (g = S(n)), (o = r(n, 'P', {}));
      var v = u(o);
      (m = E(v, b)),
        v.forEach(p),
        n.forEach(p),
        (l = S(s)),
        (t = r(s, 'PRE', { class: !0 }));
      var A = u(t);
      A.forEach(p), this.h();
    },
    h() {
      H(t, 'class', 'language-svelte');
    },
    m(s, n) {
      h(s, a, n),
        c(a, e),
        c(e, k),
        c(a, g),
        c(a, o),
        c(o, m),
        h(s, l, n),
        h(s, t, n),
        (t.innerHTML = x);
    },
    p: d,
    i: d,
    o: d,
    d(s) {
      s && p(a), s && p(l), s && p(t);
    },
  };
}
const P = { title: 'SEO', description: 'Add SEO to the page.', slug: 'seo' },
  { title: T, description: b, slug: F } = P;
class G extends O {
  constructor(a) {
    super();
    y(this, a, null, I, D, {});
  }
}
export { G as default, P as metadata };
