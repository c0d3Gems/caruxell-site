import{S as ce,i as me,s as ue,e as c,k as H,j as U,t as se,E as fe,c as m,d as o,n as K,m as z,a as O,g as le,b as n,G as i,f as L,o as Q,h as ie,x as R,u as W,v as X,A as pe}from"../../chunks/vendor-821b5e65.js";import{H as he,F as de,C as _e}from"../../chunks/Footer-b72679c2.js";function ge(a){var Y,Z,x;let s,l,_,u,g,f,p,r,N,y,C,E,j,$,q,w,D,v,A,b=((Y=a[2])==null?void 0:Y.press)+"",S,P,M,I=((Z=a[2])==null?void 0:Z.content)+"",V,B,J,G,k,h;return document.title=s=""+(((x=a[2])==null?void 0:x.press)+" \u2022 Caruxell"),w=new he({props:{headerJson:a[1],lang:a[0]}}),J=new de({props:{lang:a[0],footerJson:a[3]}}),k=new _e({props:{lang:a[0]}}),{c(){l=c("meta"),u=c("meta"),f=c("meta"),p=c("meta"),r=c("meta"),y=c("meta"),C=c("meta"),E=c("link"),j=c("link"),$=c("link"),q=H(),U(w.$$.fragment),D=H(),v=c("div"),A=c("h1"),S=se(b),P=H(),M=c("div"),V=se(I),B=H(),U(J.$$.fragment),G=H(),U(k.$$.fragment),this.h()},l(e){const t=fe('[data-svelte="svelte-1rr262n"]',document.head);l=m(t,"META",{name:!0,content:!0}),u=m(t,"META",{property:!0,content:!0}),f=m(t,"META",{property:!0,content:!0}),p=m(t,"META",{property:!0,content:!0}),r=m(t,"META",{property:!0,content:!0}),y=m(t,"META",{property:!0,content:!0}),C=m(t,"META",{property:!0,content:!0}),E=m(t,"LINK",{rel:!0,href:!0,hreflang:!0}),j=m(t,"LINK",{rel:!0,href:!0,hreflang:!0}),$=m(t,"LINK",{rel:!0,href:!0}),t.forEach(o),q=K(e),z(w.$$.fragment,e),D=K(e),v=m(e,"DIV",{class:!0});var d=O(v);A=m(d,"H1",{class:!0});var T=O(A);S=le(T,b),T.forEach(o),P=K(d),M=m(d,"DIV",{class:!0});var F=O(M);V=le(F,I),F.forEach(o),d.forEach(o),B=K(e),z(J.$$.fragment,e),G=K(e),z(k.$$.fragment,e),this.h()},h(){var e,t,d;n(l,"name","description"),n(l,"content",_=(e=a[2])==null?void 0:e.description),n(u,"property","og:title"),n(u,"content",g=(t=a[2])==null?void 0:t.press),n(f,"property","og:site_name"),n(f,"content","Caruxell"),n(p,"property","og:url"),n(p,"content","https://caruxell.com"),n(r,"property","og:description"),n(r,"content",N=(d=a[2])==null?void 0:d.description),n(y,"property","og:type"),n(y,"content","article"),n(C,"property","og:image"),n(C,"content","https://caruxell.com/img/logo.png"),n(E,"rel","alternate"),n(E,"href","https://www.caruxell.com/en/press"),n(E,"hreflang","en"),n(j,"rel","alternate"),n(j,"href","https://www.caruxell.com/ro/press"),n(j,"hreflang","ro"),n($,"rel","canonical"),n($,"href",a[4]),n(A,"class","svelte-1ctvo6u"),n(M,"class","content svelte-1ctvo6u"),n(v,"class","wrapper svelte-1ctvo6u")},m(e,t){i(document.head,l),i(document.head,u),i(document.head,f),i(document.head,p),i(document.head,r),i(document.head,y),i(document.head,C),i(document.head,E),i(document.head,j),i(document.head,$),L(e,q,t),Q(w,e,t),L(e,D,t),L(e,v,t),i(v,A),i(A,S),i(v,P),i(v,M),i(M,V),L(e,B,t),Q(J,e,t),L(e,G,t),Q(k,e,t),h=!0},p(e,[t]){var ee,te,ne,oe,ae,re;(!h||t&4)&&s!==(s=""+(((ee=e[2])==null?void 0:ee.press)+" \u2022 Caruxell"))&&(document.title=s),(!h||t&4&&_!==(_=(te=e[2])==null?void 0:te.description))&&n(l,"content",_),(!h||t&4&&g!==(g=(ne=e[2])==null?void 0:ne.press))&&n(u,"content",g),(!h||t&4&&N!==(N=(oe=e[2])==null?void 0:oe.description))&&n(r,"content",N),(!h||t&16)&&n($,"href",e[4]);const d={};t&2&&(d.headerJson=e[1]),t&1&&(d.lang=e[0]),w.$set(d),(!h||t&4)&&b!==(b=((ae=e[2])==null?void 0:ae.press)+"")&&ie(S,b),(!h||t&4)&&I!==(I=((re=e[2])==null?void 0:re.content)+"")&&ie(V,I);const T={};t&1&&(T.lang=e[0]),t&8&&(T.footerJson=e[3]),J.$set(T);const F={};t&1&&(F.lang=e[0]),k.$set(F)},i(e){h||(R(w.$$.fragment,e),R(J.$$.fragment,e),R(k.$$.fragment,e),h=!0)},o(e){W(w.$$.fragment,e),W(J.$$.fragment,e),W(k.$$.fragment,e),h=!1},d(e){o(l),o(u),o(f),o(p),o(r),o(y),o(C),o(E),o(j),o($),e&&o(q),X(w,e),e&&o(D),e&&o(v),e&&o(B),X(J,e),e&&o(G),X(k,e)}}}async function ke(a){const{lang:s}=a.params;if(s){const l=await this.fetch(`/lang/${s}/header.json`),_=await this.fetch(`/lang/${s}/press.json`),u=await this.fetch(`/lang/${s}/footer.json`),g=await l.json(),f=await _.json(),p=await u.json();return{headerJson:g,mainJson:f,footerJson:p,lang:s}}return{lang:s}}function ve(a,s,l){let{lang:_,headerJson:u,mainJson:g,footerJson:f}=s,p;return pe(()=>{l(4,p=[window.location.origin.replace("www.",""),window.location.pathname].join(""))}),a.$$set=r=>{"lang"in r&&l(0,_=r.lang),"headerJson"in r&&l(1,u=r.headerJson),"mainJson"in r&&l(2,g=r.mainJson),"footerJson"in r&&l(3,f=r.footerJson)},[_,u,g,f,p]}class Ee extends ce{constructor(s){super();me(this,s,ve,ge,ue,{lang:0,headerJson:1,mainJson:2,footerJson:3})}}export{Ee as default,ke as preload};
