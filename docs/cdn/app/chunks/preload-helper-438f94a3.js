const e={},t=function(t,r){return r&&0!==r.length?Promise.all(r.map((t=>{if((t=`https://reuters-graphics.github.io/graphics-svelte-components/cdn/app/${t}`)in e)return;e[t]=!0;const r=t.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${n}`))return;const s=document.createElement("link");return s.rel=r?"stylesheet":"modulepreload",r||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),r?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>t())):t()};export{t as _};
