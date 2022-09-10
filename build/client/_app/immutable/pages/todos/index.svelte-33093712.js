import{W as G,S as ue,i as ce,s as de,l as g,a as N,r as fe,Q as he,m as b,h as E,c as O,n as P,u as _e,p as n,K as d,b as x,X as K,Y as pe,d as me,f as ve,t as ge,J as ne,Z as be,_ as ye,$ as Ee,a0 as Te,a1 as le,V as ke,g as we,a2 as Me,E as Ue}from"../../chunks/index-b1fe9a41.js";import{c as $}from"../../chunks/singletons-eca981c1.js";function ie(i){const e=i-1;return e*e*e+1}$.disable_scroll_handling;$.goto;const Ne=$.invalidate;$.prefetch;$.prefetch_routes;$.before_navigate;$.after_navigate;function Q(i,{pending:e,error:t,result:a}={}){let f;async function v(_){const o=f={};_.preventDefault();const u=new FormData(i);e&&e({data:u,form:i});try{const h=await fetch(i.action,{method:i.method,headers:{accept:"application/json"},body:u});if(o!==f)return;if(h.ok){a&&a({data:u,form:i,response:h});const s=new URL(i.action);s.search=s.hash="",Ne(s.href)}else t?t({data:u,form:i,error:null,response:h}):console.error(await h.text())}catch(h){if(t&&h instanceof Error)t({data:u,form:i,error:h,response:null});else throw h}}return i.addEventListener("submit",v),{destroy(){i.removeEventListener("submit",v)}}}function se(i,{delay:e=0,duration:t=400,easing:a=ie,start:f=0,opacity:v=0}={}){const _=getComputedStyle(i),o=+_.opacity,u=_.transform==="none"?"":_.transform,h=1-f,s=o*(1-v);return{delay:e,duration:t,easing:a,css:(w,T)=>`
			transform: ${u} scale(${1-h*T});
			opacity: ${o-s*T}
		`}}function Oe(i,{from:e,to:t},a={}){const f=getComputedStyle(i),v=f.transform==="none"?"":f.transform,[_,o]=f.transformOrigin.split(" ").map(parseFloat),u=e.left+e.width*_/t.width-(t.left+_),h=e.top+e.height*o/t.height-(t.top+o),{delay:s=0,duration:w=M=>Math.sqrt(M)*120,easing:T=ie}=a;return{delay:s,duration:G(w)?w(Math.sqrt(u*u+h*h)):w,easing:T,css:(M,p)=>{const y=p*u,C=p*h,r=M+p*e.width/t.width,l=M+p*e.height/t.height;return`transform: ${v} translate(${y}px, ${C}px) scale(${r}, ${l});`}}}function oe(i,e,t){const a=i.slice();return a[3]=e[t],a[4]=e,a[5]=t,a}function re(i,e){let t,a,f,v,_,o,u,h,s,w,T,M,p,y,C,r,l,c,q,D,S,I,F,H,W,R,V,j,X,A,Y,Z=Ue,U,z,ee;function te(...k){return e[1](e[3],e[4],e[5],...k)}function ae(){return e[2](e[3],e[4],e[5])}return{key:i,first:null,c(){t=g("div"),a=g("form"),f=g("input"),_=N(),o=g("input"),h=N(),s=g("button"),M=N(),p=g("form"),y=g("input"),r=N(),l=g("input"),q=N(),D=g("button"),S=N(),I=g("form"),F=g("input"),W=N(),R=g("button"),X=N(),this.h()},l(k){t=b(k,"DIV",{class:!0});var m=P(t);a=b(m,"FORM",{action:!0,method:!0});var B=P(a);f=b(B,"INPUT",{type:!0,name:!0,class:!0}),_=O(B),o=b(B,"INPUT",{type:!0,name:!0,class:!0}),h=O(B),s=b(B,"BUTTON",{class:!0,"aria-label":!0}),P(s).forEach(E),B.forEach(E),M=O(m),p=b(m,"FORM",{class:!0,action:!0,method:!0});var L=P(p);y=b(L,"INPUT",{type:!0,name:!0,class:!0}),r=O(L),l=b(L,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),q=O(L),D=b(L,"BUTTON",{class:!0,"aria-label":!0}),P(D).forEach(E),L.forEach(E),S=O(m),I=b(m,"FORM",{action:!0,method:!0});var J=P(I);F=b(J,"INPUT",{type:!0,name:!0,class:!0}),W=O(J),R=b(J,"BUTTON",{class:!0,"aria-label":!0}),P(R).forEach(E),J.forEach(E),X=O(m),m.forEach(E),this.h()},h(){n(f,"type","hidden"),n(f,"name","uid"),f.value=v=e[3].uid,n(f,"class","svelte-16nsat"),n(o,"type","hidden"),n(o,"name","done"),o.value=u=e[3].done?"":"true",n(o,"class","svelte-16nsat"),n(s,"class","toggle svelte-16nsat"),n(s,"aria-label",w="Mark todo as "+(e[3].done?"not done":"done")),n(a,"action","/todos?_method=PATCH"),n(a,"method","post"),n(y,"type","hidden"),n(y,"name","uid"),y.value=C=e[3].uid,n(y,"class","svelte-16nsat"),n(l,"aria-label","Edit todo"),n(l,"type","text"),n(l,"name","text"),l.value=c=e[3].text,n(l,"class","svelte-16nsat"),n(D,"class","save svelte-16nsat"),n(D,"aria-label","Save todo"),n(p,"class","text svelte-16nsat"),n(p,"action","/todos?_method=PATCH"),n(p,"method","post"),n(F,"type","hidden"),n(F,"name","uid"),F.value=H=e[3].uid,n(F,"class","svelte-16nsat"),n(R,"class","delete svelte-16nsat"),n(R,"aria-label","Delete todo"),R.disabled=V=e[3].pending_delete,n(I,"action","/todos?_method=DELETE"),n(I,"method","post"),n(t,"class","todo svelte-16nsat"),ne(t,"done",e[3].done),this.first=t},m(k,m){x(k,t,m),d(t,a),d(a,f),d(a,_),d(a,o),d(a,h),d(a,s),d(t,M),d(t,p),d(p,y),d(p,r),d(p,l),d(p,q),d(p,D),d(t,S),d(t,I),d(I,F),d(I,W),d(I,R),d(t,X),U=!0,z||(ee=[K(T=Q.call(null,a,{pending:te})),K(Q.call(null,p)),K(j=Q.call(null,I,{pending:ae}))],z=!0)},p(k,m){e=k,(!U||m&1&&v!==(v=e[3].uid))&&(f.value=v),(!U||m&1&&u!==(u=e[3].done?"":"true"))&&(o.value=u),(!U||m&1&&w!==(w="Mark todo as "+(e[3].done?"not done":"done")))&&n(s,"aria-label",w),T&&G(T.update)&&m&1&&T.update.call(null,{pending:te}),(!U||m&1&&C!==(C=e[3].uid))&&(y.value=C),(!U||m&1&&c!==(c=e[3].text)&&l.value!==c)&&(l.value=c),(!U||m&1&&H!==(H=e[3].uid))&&(F.value=H),(!U||m&1&&V!==(V=e[3].pending_delete))&&(R.disabled=V),j&&G(j.update)&&m&1&&j.update.call(null,{pending:ae}),m&1&&ne(t,"done",e[3].done)},r(){Y=t.getBoundingClientRect()},f(){be(t),Z(),ye(t,Y)},a(){Z(),Z=Ee(t,Y,Oe,{duration:200})},i(k){U||(k&&Te(()=>{A||(A=le(t,se,{start:.7},!0)),A.run(1)}),U=!0)},o(k){k&&(A||(A=le(t,se,{start:.7},!1)),A.run(0)),U=!1},d(k){k&&E(t),k&&A&&A.end(),z=!1,ke(ee)}}}function Ie(i){let e,t,a,f,v,_,o,u,h,s=[],w=new Map,T,M,p,y=i[0];const C=r=>r[3].uid;for(let r=0;r<y.length;r+=1){let l=oe(i,y,r),c=C(l);w.set(c,s[r]=re(c,l))}return{c(){e=g("meta"),t=N(),a=g("div"),f=g("h1"),v=fe("Todos"),_=N(),o=g("form"),u=g("input"),h=N();for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){const l=he('[data-svelte="svelte-aw2gey"]',document.head);e=b(l,"META",{name:!0,content:!0}),l.forEach(E),t=O(r),a=b(r,"DIV",{class:!0});var c=P(a);f=b(c,"H1",{});var q=P(f);v=_e(q,"Todos"),q.forEach(E),_=O(c),o=b(c,"FORM",{class:!0,action:!0,method:!0});var D=P(o);u=b(D,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),D.forEach(E),h=O(c);for(let S=0;S<s.length;S+=1)s[S].l(c);c.forEach(E),this.h()},h(){document.title="Todos",n(e,"name","description"),n(e,"content","A todo list app"),n(u,"name","text"),n(u,"aria-label","Add todo"),n(u,"placeholder","+ tap to add a todo"),n(u,"class","svelte-16nsat"),n(o,"class","new svelte-16nsat"),n(o,"action","/todos"),n(o,"method","post"),n(a,"class","todos svelte-16nsat")},m(r,l){d(document.head,e),x(r,t,l),x(r,a,l),d(a,f),d(f,v),d(a,_),d(a,o),d(o,u),d(a,h);for(let c=0;c<s.length;c+=1)s[c].m(a,null);T=!0,M||(p=K(Q.call(null,o,{result:Pe})),M=!0)},p(r,[l]){if(l&1){y=r[0],we();for(let c=0;c<s.length;c+=1)s[c].r();s=pe(s,l,C,1,r,y,w,a,Me,re,null,oe);for(let c=0;c<s.length;c+=1)s[c].a();me()}},i(r){if(!T){for(let l=0;l<y.length;l+=1)ve(s[l]);T=!0}},o(r){for(let l=0;l<s.length;l+=1)ge(s[l]);T=!1},d(r){E(e),r&&E(t),r&&E(a);for(let l=0;l<s.length;l+=1)s[l].d();M=!1,p()}}}const Pe=async({form:i})=>{i.reset()};function Ce(i,e,t){let{todos:a}=e;const f=(_,o,u,{data:h})=>{t(0,o[u].done=!!h.get("done"),a)},v=(_,o,u)=>t(0,o[u].pending_delete=!0,a);return i.$$set=_=>{"todos"in _&&t(0,a=_.todos)},[a,f,v]}class Re extends ue{constructor(e){super(),ce(this,e,Ce,Ie,de,{todos:0})}}export{Re as default};