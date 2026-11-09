(()=>{var z3=Object.create;var l1=Object.defineProperty;var q1=Object.getOwnPropertyDescriptor;var k3=Object.getOwnPropertyNames;var A3=Object.getPrototypeOf,E3=Object.prototype.hasOwnProperty;var C3=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var T3=(i,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of k3(t))!E3.call(i,s)&&s!==e&&l1(i,s,{get:()=>t[s],enumerable:!(r=q1(t,s))||r.enumerable});return i};var $3=(i,t,e)=>(e=i!=null?z3(A3(i)):{},T3(t||!i||!i.__esModule?l1(e,"default",{value:i,enumerable:!0}):e,i));var M=(i,t,e,r)=>{for(var s=r>1?void 0:r?q1(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&l1(t,e,s),s};var D2=C3((q0,P2)=>{(function(i,t){typeof q0=="object"&&typeof P2!="undefined"?t(q0):typeof define=="function"&&define.amd?define(["exports"],t):t((i=typeof globalThis!="undefined"?globalThis:i||self).htmlToImage={})})(q0,(function(i){"use strict";function t(c,a,l,h){return new(l||(l=Promise))((function(u,p){function m(E){try{b(h.next(E))}catch(y){p(y)}}function w(E){try{b(h.throw(E))}catch(y){p(y)}}function b(E){var y;E.done?u(E.value):(y=E.value,y instanceof l?y:new l((function($){$(y)}))).then(m,w)}b((h=h.apply(c,a||[])).next())}))}function e(c,a){var l,h,u,p,m={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return p={next:w(0),throw:w(1),return:w(2)},typeof Symbol=="function"&&(p[Symbol.iterator]=function(){return this}),p;function w(b){return function(E){return(function(y){if(l)throw new TypeError("Generator is already executing.");for(;p&&(p=0,y[0]&&(m=0)),m;)try{if(l=1,h&&(u=2&y[0]?h.return:y[0]?h.throw||((u=h.return)&&u.call(h),0):h.next)&&!(u=u.call(h,y[1])).done)return u;switch(h=0,u&&(y=[2&y[0],u.value]),y[0]){case 0:case 1:u=y;break;case 4:return m.label++,{value:y[1],done:!1};case 5:m.label++,h=y[1],y=[0];continue;case 7:y=m.ops.pop(),m.trys.pop();continue;default:if(u=m.trys,!((u=u.length>0&&u[u.length-1])||y[0]!==6&&y[0]!==2)){m=0;continue}if(y[0]===3&&(!u||y[1]>u[0]&&y[1]<u[3])){m.label=y[1];break}if(y[0]===6&&m.label<u[1]){m.label=u[1],u=y;break}if(u&&m.label<u[2]){m.label=u[2],m.ops.push(y);break}u[2]&&m.ops.pop(),m.trys.pop();continue}y=a.call(c,m)}catch($){y=[6,$],h=0}finally{l=u=0}if(5&y[0])throw y[1];return{value:y[0]?y[1]:void 0,done:!0}})([b,E])}}}var r,s=(r=0,function(){return r+=1,"u".concat("0000".concat((Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)).concat(r)});function o(c){for(var a=[],l=0,h=c.length;l<h;l++)a.push(c[l]);return a}function n(c,a){var l=(c.ownerDocument.defaultView||window).getComputedStyle(c).getPropertyValue(a);return l?parseFloat(l.replace("px","")):0}function d(c,a){a===void 0&&(a={});var l,h,u,p=a.width||(h=n(l=c,"border-left-width"),u=n(l,"border-right-width"),l.clientWidth+h+u),m=a.height||(function(w){var b=n(w,"border-top-width"),E=n(w,"border-bottom-width");return w.clientHeight+b+E})(c);return{width:p,height:m}}var f=16384;function v(c,a){return a===void 0&&(a={}),c.toBlob?new Promise((function(l){c.toBlob(l,a.type?a.type:"image/png",a.quality?a.quality:1)})):new Promise((function(l){for(var h=window.atob(c.toDataURL(a.type?a.type:void 0,a.quality?a.quality:void 0).split(",")[1]),u=h.length,p=new Uint8Array(u),m=0;m<u;m+=1)p[m]=h.charCodeAt(m);l(new Blob([p],{type:a.type?a.type:"image/png"}))}))}function z(c){return new Promise((function(a,l){var h=new Image;h.decode=function(){return a(h)},h.onload=function(){return a(h)},h.onerror=l,h.crossOrigin="anonymous",h.decoding="async",h.src=c}))}function x(c){return t(this,void 0,void 0,(function(){return e(this,(function(a){return[2,Promise.resolve().then((function(){return new XMLSerializer().serializeToString(c)})).then(encodeURIComponent).then((function(l){return"data:image/svg+xml;charset=utf-8,".concat(l)}))]}))}))}function k(c,a,l){return t(this,void 0,void 0,(function(){var h,u,p;return e(this,(function(m){return h="http://www.w3.org/2000/svg",u=document.createElementNS(h,"svg"),p=document.createElementNS(h,"foreignObject"),u.setAttribute("width","".concat(a)),u.setAttribute("height","".concat(l)),u.setAttribute("viewBox","0 0 ".concat(a," ").concat(l)),p.setAttribute("width","100%"),p.setAttribute("height","100%"),p.setAttribute("x","0"),p.setAttribute("y","0"),p.setAttribute("externalResourcesRequired","true"),u.appendChild(p),p.appendChild(c),[2,x(u)]}))}))}var C=function(c,a){if(c instanceof a)return!0;var l=Object.getPrototypeOf(c);return l!==null&&(l.constructor.name===a.name||C(l,a))};function B(c,a,l){var h=".".concat(c,":").concat(a),u=l.cssText?(function(p){var m=p.getPropertyValue("content");return"".concat(p.cssText," content: '").concat(m.replace(/'|"/g,""),"';")})(l):(function(p){return o(p).map((function(m){var w=p.getPropertyValue(m),b=p.getPropertyPriority(m);return"".concat(m,": ").concat(w).concat(b?" !important":"",";")})).join(" ")})(l);return document.createTextNode("".concat(h,"{").concat(u,"}"))}function _(c,a,l){var h=window.getComputedStyle(c,l),u=h.getPropertyValue("content");if(u!==""&&u!=="none"){var p=s();try{a.className="".concat(a.className," ").concat(p)}catch{return}var m=document.createElement("style");m.appendChild(B(p,l,h)),a.appendChild(m)}}var L="application/font-woff",c0="image/jpeg",$0={woff:L,woff2:L,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:c0,jpeg:c0,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function i1(c){var a=(function(l){var h=/\.([^./]*?)$/g.exec(l);return h?h[1]:""})(c).toLowerCase();return $0[a]||""}function s1(c){return c.search(/^(data:)/)!==-1}function D1(c,a){return"data:".concat(a,";base64,").concat(c)}function W1(c,a,l){return t(this,void 0,void 0,(function(){var h,u;return e(this,(function(p){switch(p.label){case 0:return[4,fetch(c,a)];case 1:if((h=p.sent()).status===404)throw new Error('Resource "'.concat(h.url,'" not found'));return[4,h.blob()];case 2:return u=p.sent(),[2,new Promise((function(m,w){var b=new FileReader;b.onerror=w,b.onloadend=function(){try{m(l({res:h,result:b.result}))}catch(E){w(E)}},b.readAsDataURL(u)}))]}}))}))}var o1={};function n1(c,a,l){return t(this,void 0,void 0,(function(){var h,u,p,m,w;return e(this,(function(b){switch(b.label){case 0:if(h=(function(E,y,$){var A=E.replace(/\?.*/,"");return $&&(A=E),/ttf|otf|eot|woff2?/i.test(A)&&(A=A.replace(/.*\//,"")),y?"[".concat(y,"]").concat(A):A})(c,a,l.includeQueryParams),o1[h]!=null)return[2,o1[h]];l.cacheBust&&(c+=(/\?/.test(c)?"&":"?")+new Date().getTime()),b.label=1;case 1:return b.trys.push([1,3,,4]),[4,W1(c,l.fetchRequestInit,(function(E){var y=E.res,$=E.result;return a||(a=y.headers.get("Content-Type")||""),(function(A){return A.split(/,/)[1]})($)}))];case 2:return p=b.sent(),u=D1(p,a),[3,4];case 3:return m=b.sent(),u=l.imagePlaceholder||"",w="Failed to fetch resource: ".concat(c),m&&(w=typeof m=="string"?m:m.message),w&&console.warn(w),[3,4];case 4:return o1[h]=u,[2,u]}}))}))}function l3(c){return t(this,void 0,void 0,(function(){var a;return e(this,(function(l){return(a=c.toDataURL())==="data:,"?[2,c.cloneNode(!1)]:[2,z(a)]}))}))}function c3(c,a){return t(this,void 0,void 0,(function(){var l,h,u,p;return e(this,(function(m){switch(m.label){case 0:return c.currentSrc?(l=document.createElement("canvas"),h=l.getContext("2d"),l.width=c.clientWidth,l.height=c.clientHeight,h==null||h.drawImage(c,0,0,l.width,l.height),[2,z(l.toDataURL())]):(u=c.poster,p=i1(u),[4,n1(u,p,a)]);case 1:return[2,z(m.sent())]}}))}))}function d3(c){var a;return t(this,void 0,void 0,(function(){return e(this,(function(l){switch(l.label){case 0:return l.trys.push([0,3,,4]),!((a=c==null?void 0:c.contentDocument)===null||a===void 0)&&a.body?[4,S0(c.contentDocument.body,{},!0)]:[3,2];case 1:return[2,l.sent()];case 2:return[3,4];case 3:return l.sent(),[3,4];case 4:return[2,c.cloneNode(!1)]}}))}))}function p3(c,a){return C(a,Element)&&((function(l,h){var u=h.style;if(u){var p=window.getComputedStyle(l);p.cssText?(u.cssText=p.cssText,u.transformOrigin=p.transformOrigin):o(p).forEach((function(m){var w=p.getPropertyValue(m);if(m==="font-size"&&w.endsWith("px")){var b=Math.floor(parseFloat(w.substring(0,w.length-2)))-.1;w="".concat(b,"px")}C(l,HTMLIFrameElement)&&m==="display"&&w==="inline"&&(w="block"),m==="d"&&h.getAttribute("d")&&(w="path(".concat(h.getAttribute("d"),")")),u.setProperty(m,w,p.getPropertyPriority(m))}))}})(c,a),(function(l,h){_(l,h,":before"),_(l,h,":after")})(c,a),(function(l,h){C(l,HTMLTextAreaElement)&&(h.innerHTML=l.value),C(l,HTMLInputElement)&&h.setAttribute("value",l.value)})(c,a),(function(l,h){if(C(l,HTMLSelectElement)){var u=h,p=Array.from(u.children).find((function(m){return l.value===m.getAttribute("value")}));p&&p.setAttribute("selected","")}})(c,a)),a}function S0(c,a,l){return t(this,void 0,void 0,(function(){return e(this,(function(h){return l||!a.filter||a.filter(c)?[2,Promise.resolve(c).then((function(u){return(function(p,m){return t(this,void 0,void 0,(function(){return e(this,(function(w){return C(p,HTMLCanvasElement)?[2,l3(p)]:C(p,HTMLVideoElement)?[2,c3(p,m)]:C(p,HTMLIFrameElement)?[2,d3(p)]:[2,p.cloneNode(!1)]}))}))})(u,a)})).then((function(u){return(function(p,m,w){var b,E;return t(this,void 0,void 0,(function(){var y;return e(this,(function($){switch($.label){case 0:return y=[],(y=(A=p).tagName!=null&&A.tagName.toUpperCase()==="SLOT"&&p.assignedNodes?o(p.assignedNodes()):C(p,HTMLIFrameElement)&&(!((b=p.contentDocument)===null||b===void 0)&&b.body)?o(p.contentDocument.body.childNodes):o(((E=p.shadowRoot)!==null&&E!==void 0?E:p).childNodes)).length===0||C(p,HTMLVideoElement)?[2,m]:[4,y.reduce((function(D,Z){return D.then((function(){return S0(Z,w)})).then((function(K){K&&m.appendChild(K)}))}),Promise.resolve())];case 1:return $.sent(),[2,m]}var A}))}))})(c,u,a)})).then((function(u){return p3(c,u)})).then((function(u){return(function(p,m){return t(this,void 0,void 0,(function(){var w,b,E,y,$,A,D,Z,K,q,G,a1,X;return e(this,(function(B0){switch(B0.label){case 0:if((w=p.querySelectorAll?p.querySelectorAll("use"):[]).length===0)return[2,p];b={},X=0,B0.label=1;case 1:return X<w.length?(E=w[X],(y=E.getAttribute("xlink:href"))?($=p.querySelector(y),A=document.querySelector(y),$||!A||b[y]?[3,3]:(D=b,Z=y,[4,S0(A,m,!0)])):[3,3]):[3,4];case 2:D[Z]=B0.sent(),B0.label=3;case 3:return X++,[3,1];case 4:if((K=Object.values(b)).length){for(q="http://www.w3.org/1999/xhtml",(G=document.createElementNS(q,"svg")).setAttribute("xmlns",q),G.style.position="absolute",G.style.width="0",G.style.height="0",G.style.overflow="hidden",G.style.display="none",a1=document.createElementNS(q,"defs"),G.appendChild(a1),X=0;X<K.length;X++)a1.appendChild(K[X]);p.appendChild(G)}return[2,p]}}))}))})(u,a)}))]:[2,null]}))}))}var L1=/url\((['"]?)([^'"]+?)\1\)/g,m3=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,h3=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function u3(c,a,l,h,u){return t(this,void 0,void 0,(function(){var p,m,w,b;return e(this,(function(E){switch(E.label){case 0:return E.trys.push([0,5,,6]),p=l?(function(A,D){if(A.match(/^[a-z]+:\/\//i))return A;if(A.match(/^\/\//))return window.location.protocol+A;if(A.match(/^[a-z]+:/i))return A;var Z=document.implementation.createHTMLDocument(),K=Z.createElement("base"),q=Z.createElement("a");return Z.head.appendChild(K),Z.body.appendChild(q),D&&(K.href=D),q.href=A,q.href})(a,l):a,m=i1(a),w=void 0,u?[4,u(p)]:[3,2];case 1:return b=E.sent(),w=D1(b,m),[3,4];case 2:return[4,n1(p,m,h)];case 3:w=E.sent(),E.label=4;case 4:return[2,c.replace((y=a,$=y.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1"),new RegExp(`(url\\(['"]?)(`.concat($,`)(['"]?\\))`),"g")),"$1".concat(w,"$3"))];case 5:return E.sent(),[3,6];case 6:return[2,c]}var y,$}))}))}function Z1(c){return c.search(L1)!==-1}function U1(c,a,l){return t(this,void 0,void 0,(function(){var h,u;return e(this,(function(p){return Z1(c)?(h=(function(m,w){var b=w.preferredFontFormat;return b?m.replace(h3,(function(E){for(;;){var y=m3.exec(E)||[],$=y[0],A=y[2];if(!A)return"";if(A===b)return"src: ".concat($,";")}})):m})(c,l),u=(function(m){var w=[];return m.replace(L1,(function(b,E,y){return w.push(y),b})),w.filter((function(b){return!s1(b)}))})(h),[2,u.reduce((function(m,w){return m.then((function(b){return u3(b,w,a,l)}))}),Promise.resolve(h))]):[2,c]}))}))}function M0(c,a,l){var h;return t(this,void 0,void 0,(function(){var u,p;return e(this,(function(m){switch(m.label){case 0:return(u=(h=a.style)===null||h===void 0?void 0:h.getPropertyValue(c))?[4,U1(u,null,l)]:[3,2];case 1:return p=m.sent(),a.style.setProperty(c,p,a.style.getPropertyPriority(c)),[2,!0];case 2:return[2,!1]}}))}))}function f3(c,a){return t(this,void 0,void 0,(function(){return e(this,(function(l){switch(l.label){case 0:return[4,M0("background",c,a)];case 1:return l.sent()?[3,3]:[4,M0("background-image",c,a)];case 2:l.sent(),l.label=3;case 3:return[4,M0("mask",c,a)];case 4:return l.sent()?[3,6]:[4,M0("mask-image",c,a)];case 5:l.sent(),l.label=6;case 6:return[2]}}))}))}function g3(c,a){return t(this,void 0,void 0,(function(){var l,h,u;return e(this,(function(p){switch(p.label){case 0:return(l=C(c,HTMLImageElement))&&!s1(c.src)||C(c,SVGImageElement)&&!s1(c.href.baseVal)?[4,n1(h=l?c.src:c.href.baseVal,i1(h),a)]:[2];case 1:return u=p.sent(),[4,new Promise((function(m,w){c.onload=m,c.onerror=w;var b=c;b.decode&&(b.decode=m),b.loading==="lazy"&&(b.loading="eager"),l?(c.srcset="",c.src=u):c.href.baseVal=u}))];case 2:return p.sent(),[2]}}))}))}function v3(c,a){return t(this,void 0,void 0,(function(){var l,h;return e(this,(function(u){switch(u.label){case 0:return l=o(c.childNodes),h=l.map((function(p){return K1(p,a)})),[4,Promise.all(h).then((function(){return c}))];case 1:return u.sent(),[2]}}))}))}function K1(c,a){return t(this,void 0,void 0,(function(){return e(this,(function(l){switch(l.label){case 0:return C(c,Element)?[4,f3(c,a)]:[3,4];case 1:return l.sent(),[4,g3(c,a)];case 2:return l.sent(),[4,v3(c,a)];case 3:l.sent(),l.label=4;case 4:return[2]}}))}))}var H1={};function F1(c){return t(this,void 0,void 0,(function(){var a,l;return e(this,(function(h){switch(h.label){case 0:return(a=H1[c])!=null?[2,a]:[4,fetch(c)];case 1:return[4,h.sent().text()];case 2:return l=h.sent(),a={url:c,cssText:l},H1[c]=a,[2,a]}}))}))}function j1(c,a){return t(this,void 0,void 0,(function(){var l,h,u,p,m=this;return e(this,(function(w){return l=c.cssText,h=/url\(["']?([^"')]+)["']?\)/g,u=l.match(/url\([^)]+\)/g)||[],p=u.map((function(b){return t(m,void 0,void 0,(function(){var E;return e(this,(function(y){return(E=b.replace(h,"$1")).startsWith("https://")||(E=new URL(E,c.url).href),[2,W1(E,a.fetchRequestInit,(function($){var A=$.result;return l=l.replace(b,"url(".concat(A,")")),[b,A]}))]}))}))})),[2,Promise.all(p).then((function(){return l}))]}))}))}function V1(c){if(c==null)return[];for(var a=[],l=c.replace(/(\/\*[\s\S]*?\*\/)/gi,""),h=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");(m=h.exec(l))!==null;)a.push(m[0]);l=l.replace(h,"");for(var u=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,p=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");;){var m;if((m=u.exec(l))===null){if((m=p.exec(l))===null)break;u.lastIndex=p.lastIndex}else p.lastIndex=u.lastIndex;a.push(m[0])}return a}function b3(c,a){return t(this,void 0,void 0,(function(){var l,h;return e(this,(function(u){return l=[],h=[],c.forEach((function(p){if("cssRules"in p)try{o(p.cssRules||[]).forEach((function(w,b){if(w.type===CSSRule.IMPORT_RULE){var E=b+1,y=F1(w.href).then((function($){return j1($,a)})).then((function($){return V1($).forEach((function(A){try{p.insertRule(A,A.startsWith("@import")?E+=1:p.cssRules.length)}catch(D){console.error("Error inserting rule from remote css",{rule:A,error:D})}}))})).catch((function($){console.error("Error loading remote css",$.toString())}));h.push(y)}}))}catch(w){var m=c.find((function(b){return b.href==null}))||document.styleSheets[0];p.href!=null&&h.push(F1(p.href).then((function(b){return j1(b,a)})).then((function(b){return V1(b).forEach((function(E){m.insertRule(E,p.cssRules.length)}))})).catch((function(b){console.error("Error loading remote stylesheet",b)}))),console.error("Error inlining remote css file",w)}})),[2,Promise.all(h).then((function(){return c.forEach((function(p){if("cssRules"in p)try{o(p.cssRules||[]).forEach((function(m){l.push(m)}))}catch(m){console.error("Error while reading CSS rules from ".concat(p.href),m)}})),l}))]}))}))}function y3(c){return c.filter((function(a){return a.type===CSSRule.FONT_FACE_RULE})).filter((function(a){return Z1(a.style.getPropertyValue("src"))}))}function w3(c,a){return t(this,void 0,void 0,(function(){return e(this,(function(l){switch(l.label){case 0:if(c.ownerDocument==null)throw new Error("Provided element is not within a Document");return[4,b3(o(c.ownerDocument.styleSheets),a)];case 1:return[2,y3(l.sent())]}}))}))}function Y1(c,a){return t(this,void 0,void 0,(function(){var l;return e(this,(function(h){switch(h.label){case 0:return[4,w3(c,a)];case 1:return l=h.sent(),[4,Promise.all(l.map((function(u){var p=u.parentStyleSheet?u.parentStyleSheet.href:null;return U1(u.cssText,p,a)})))];case 2:return[2,h.sent().join(`
`)]}}))}))}function x3(c,a){return t(this,void 0,void 0,(function(){var l,h,u,p,m;return e(this,(function(w){switch(w.label){case 0:return a.fontEmbedCSS==null?[3,1]:(h=a.fontEmbedCSS,[3,5]);case 1:return a.skipFonts?(u=null,[3,4]):[3,2];case 2:return[4,Y1(c,a)];case 3:u=w.sent(),w.label=4;case 4:h=u,w.label=5;case 5:return(l=h)&&(p=document.createElement("style"),m=document.createTextNode(l),p.appendChild(m),c.firstChild?c.insertBefore(p,c.firstChild):c.appendChild(p)),[2]}}))}))}function J1(c,a){return a===void 0&&(a={}),t(this,void 0,void 0,(function(){var l,h,u,p;return e(this,(function(m){switch(m.label){case 0:return l=d(c,a),h=l.width,u=l.height,[4,S0(c,a,!0)];case 1:return[4,x3(p=m.sent(),a)];case 2:return m.sent(),[4,K1(p,a)];case 3:return m.sent(),(function(w,b){var E=w.style;b.backgroundColor&&(E.backgroundColor=b.backgroundColor),b.width&&(E.width="".concat(b.width,"px")),b.height&&(E.height="".concat(b.height,"px"));var y=b.style;y!=null&&Object.keys(y).forEach((function($){E[$]=y[$]}))})(p,a),[4,k(p,h,u)];case 4:return[2,m.sent()]}}))}))}function g0(c,a){return a===void 0&&(a={}),t(this,void 0,void 0,(function(){var l,h,u,p,m,w,b,E,y;return e(this,(function($){switch($.label){case 0:return l=d(c,a),h=l.width,u=l.height,[4,J1(c,a)];case 1:return[4,z($.sent())];case 2:return p=$.sent(),m=document.createElement("canvas"),w=m.getContext("2d"),b=a.pixelRatio||(function(){var A,D;try{D=process}catch{}var Z=D&&D.env?D.env.devicePixelRatio:null;return Z&&(A=parseInt(Z,10),Number.isNaN(A)&&(A=1)),A||window.devicePixelRatio||1})(),E=a.canvasWidth||h,y=a.canvasHeight||u,m.width=E*b,m.height=y*b,a.skipAutoScale||(function(A){(A.width>f||A.height>f)&&(A.width>f&&A.height>f?A.width>A.height?(A.height*=f/A.width,A.width=f):(A.width*=f/A.height,A.height=f):A.width>f?(A.height*=f/A.width,A.width=f):(A.width*=f/A.height,A.height=f))})(m),m.style.width="".concat(E),m.style.height="".concat(y),a.backgroundColor&&(w.fillStyle=a.backgroundColor,w.fillRect(0,0,m.width,m.height)),w.drawImage(p,0,0,m.width,m.height),[2,m]}}))}))}i.getFontEmbedCSS=function(c,a){return a===void 0&&(a={}),t(this,void 0,void 0,(function(){return e(this,(function(l){return[2,Y1(c,a)]}))}))},i.toBlob=function(c,a){return a===void 0&&(a={}),t(this,void 0,void 0,(function(){return e(this,(function(l){switch(l.label){case 0:return[4,g0(c,a)];case 1:return[4,v(l.sent())];case 2:return[2,l.sent()]}}))}))},i.toCanvas=g0,i.toJpeg=function(c,a){return a===void 0&&(a={}),t(this,void 0,void 0,(function(){return e(this,(function(l){switch(l.label){case 0:return[4,g0(c,a)];case 1:return[2,l.sent().toDataURL("image/jpeg",a.quality||1)]}}))}))},i.toPixelData=function(c,a){return a===void 0&&(a={}),t(this,void 0,void 0,(function(){var l,h,u,p;return e(this,(function(m){switch(m.label){case 0:return l=d(c,a),h=l.width,u=l.height,[4,g0(c,a)];case 1:return p=m.sent(),[2,p.getContext("2d").getImageData(0,0,h,u).data]}}))}))},i.toPng=function(c,a){return a===void 0&&(a={}),t(this,void 0,void 0,(function(){return e(this,(function(l){switch(l.label){case 0:return[4,g0(c,a)];case 1:return[2,l.sent().toDataURL()]}}))}))},i.toSvg=J1}))});var d1=1;function v0(){return d1++}function b0(i){for(let t of i.weapons)d1=Math.max(d1,(t.uid||0)+1)}var S3=[{value:42.45,label:"S\u0142aba"},{value:63.675,label:"Przeci\u0119tna"},{value:84.9,label:"\u015Arednia"},{value:127.35,label:"Dobra"},{value:191.025,label:"Bardzo dobra"},{value:233.475,label:"Wyj\u0105tkowa"}],M3=[{value:9.424,label:"S\u0142aby"},{value:37.724,label:"Przeci\u0119tny"},{value:150,label:"\u015Aredni"},{value:300,label:"Dobry"},{value:450,label:"Wyj\u0105tkowy"}],B3=[{value:1,label:"S\u0142aby"},{value:1.25,label:"Przeci\u0119tny"},{value:1.5,label:"\u015Aredni"},{value:2,label:"Dobry"},{value:2.5,label:"Bardzo dobry"},{value:3,label:"Wyj\u0105tkowy"},{value:3.5,label:"Niewidzialny"}],_3=[0,-10,-20,-30,-40,-50,-60,-70].map(i=>({value:i,label:i===0?"Brak":`${-i} %`})),I3=["S\u0142aby","Przeci\u0119tny","\u015Aredni","Dobry","Bardzo dobry","Wyj\u0105tkowy"].map(i=>({value:i,label:i})),R3=[{value:"Tak",label:"Tak"},{value:"Nie",label:"Nie"}],O3=[{value:"Nie",label:"Nie"},{value:"Tak",label:"Tak"},{value:"Tak (ograniczona)",label:"Tak (ograniczona)"}],Q1=["NISKI","\u015AREDNI","WYSOKI","BARDZO WYSOKI"].map(i=>({value:i,label:i}));function e2(i,t){let e=i[0].label;for(let r of i)t>=r.value-1e-6&&(e=r.label);return e}function t2(i,t){let e=i[0].value;for(let r of i)t>=r.value-1e-6&&(e=r.value);return e}var p1=[{icon:"tank",label:"CZO\u0141G PODSTAWOWY"},{icon:"tank",label:"CZO\u0141G LEKKI"},{icon:"ifv",label:"BWP"},{icon:"transport",label:"TRANSPORTER OPANCERZONY"},{icon:"infantry",label:"PIECHOTA"},{icon:"assault-infantry",label:"PIECHOTA SZTURMOWA"},{icon:"at",label:"PRZECIWPANCERNA"},{icon:"recon",label:"ROZPOZNANIE"},{icon:"command",label:"DOWODZENIE"},{icon:"support",label:"WSPARCIE"},{icon:"supply",label:"ZAOPATRZENIE"},{icon:"artillery",label:"ARTYLERIA"},{icon:"mortar",label:"MO\u0179DZIERZ"},{icon:"mlrs",label:"WYRZUTNIA RAKIET"},{icon:"aa",label:"OBRONA PRZECIWLOTNICZA"},{icon:"helicopter",label:"\u015AMIG\u0141OWIEC"},{icon:"jet",label:"SAMOLOT"},{icon:"sead",label:"SEAD"}],_0=[{value:"_leader",label:"Dow\xF3dca"},{value:"_reco",label:"Rozpoznanie"},{value:"_amphibie",label:"Amfibia"},{value:"_ifv",label:"BWP (wsparcie piechoty)"},{value:"_transport1",label:"Transport (1 dru\u017Cyna)"},{value:"_transport2",label:"Transport (2 dru\u017Cyny)"},{value:"_choc",label:"Szturmowi (CQC)"},{value:"_resolute",label:"Zdeterminowani"},{value:"_reservist",label:"Rezerwi\u015Bci"},{value:"_militia",label:"Milicja"},{value:"_security",label:"Ochrona"},{value:"_mp",label:"\u017Bandarmeria"},{value:"_para",label:"Spadochroniarze"},{value:"_sf",label:"Si\u0142y specjalne"},{value:"_sniper",label:"Snajper"},{value:"_mountaineer",label:"Strzelcy g\xF3rscy"},{value:"_instructor",label:"Instruktorzy"},{value:"_era",label:"Pancerz reaktywny (ERA)"},{value:"Slat",label:"Pancerz pr\u0119towy (SLAT)"},{value:"MRAP",label:"MRAP"},{value:"_smoke_launcher",label:"Wyrzutnie granat\xF3w dymnych"},{value:"_eo_dazzler",label:"O\u015Blepiacz optoelektroniczny"},{value:"Thermals1",label:"Termowizja I gen."},{value:"Thermals2",label:"Termowizja II gen."},{value:"_gsr",label:"Radar pola walki (GSR)"},{value:"Radar",label:"Radar"},{value:"_singint",label:"Rozpoznanie radioelektroniczne (SIGINT)"},{value:"_jammer",label:"Zag\u0142uszacz"},{value:"_electronic_warfare",label:"Walka elektroniczna"},{value:"_fireDirection",label:"Kierowanie ogniem"},{value:"uav",label:"Dron rozpoznawczy"},{value:"uav2",label:"Dron rozpoznawczy (zaawansowany)"},{value:"_falseflag",label:"Fa\u0142szywa flaga"},{value:"_airlift",label:"Transport lotniczy (przewozi)"},{value:"_canBeAirlifted",label:"Mo\u017Ce by\u0107 przewo\u017Cony \u015Bmig\u0142owcem"}];function I0(i){var t,e;return/^_canBeAirlifted\d$/.test(i)?`Mo\u017Ce by\u0107 przewo\u017Cony \u015Bmig\u0142owcem (${i.slice(-1)})`:(e=(t=_0.find(r=>r.value===i))==null?void 0:t.label)!=null?e:i}var R0=[{value:"STAT",label:"Strzela tylko z miejsca"},{value:"MOTION",label:"Strzela w ruchu"},{value:"HE",label:"Od\u0142amkowo-burz\u0105cy (HE)"},{value:"HEAT",label:"Kumulacyjny (HEAT)"},{value:"KINETIC",label:"Kinetyczny (KE)"},{value:"TANDEM",label:"G\u0142owica tandemowa"},{value:"F&F",label:"Odpal i zapomnij"},{value:"F&F_boresight",label:"Odpal i zapomnij (bez namierzania)"},{value:"OTA",label:"Atak z g\xF3ry (OTA)"},{value:"CLGP",label:"Pocisk kierowany laserowo"},{value:"RADAR",label:"Naprowadzanie radarowe"},{value:"sead",label:"Przeciwradarowy (SEAD)"},{value:"IND",label:"Ogie\u0144 po\u015Bredni"},{value:"CAC",label:"Walka w zwarciu (CQC)"},{value:"autoloader",label:"Automat \u0142adowania"},{value:"manual",label:"\u0141adowanie r\u0119czne"},{value:"semiAuto",label:"P\xF3\u0142automatyczna"},{value:"coax",label:"Sprz\u0119\u017Cony z dzia\u0142em"},{value:"tripod",label:"Na podstawie / tr\xF3jnogu"},{value:"silenced",label:"Wyt\u0142umiona"},{value:"smoke",label:"Dymny"},{value:"cluster",label:"Kasetowy"},{value:"thermobaric",label:"Termobaryczny"},{value:"napalm",label:"Zapalaj\u0105cy (napalm)"},{value:"demolition",label:"Burz\u0105cy (saperski)"},{value:"activeprotection",label:"Aktywna ochrona"}];function m1(i){var t,e;return(e=(t=R0.find(r=>r.value===i))==null?void 0:t.label)!=null?e:i}var d0=3,r2=[{value:"cannon",label:"Armata",typeLabel:"DZIA\u0141O CZO\u0141GU"},{value:"howitzer",label:"Haubica",typeLabel:"HAUBICA"},{value:"infantry",label:"Bro\u0144 piechoty",typeLabel:"KARABIN SZTURMOWY"},{value:"rockets",label:"Wyrzutnia rakiet (w tym MANPAD)",typeLabel:"WYRZUTNIA RAKIET"},{value:"atgm",label:"ATGM",typeLabel:"PRZECIWPANCERNY POCISK KIEROWANY"},{value:"vehicle_mg",label:"KM pojazdy",typeLabel:"KARABIN MASZYNOWY"},{value:"autocannon",label:"Dzia\u0142ko automatyczne",typeLabel:"DZIA\u0141KO AUTOMATYCZNE"},{value:"mortar",label:"Mo\u017Adzierz",typeLabel:"MO\u0179DZIERZ"},{value:"air",label:"Uzbrojenie lotnicze",typeLabel:"UZBROJENIE LOTNICZE"},{value:"other",label:"Inne",typeLabel:"UZBROJENIE"}],i2=["DZIA\u0141O CZO\u0141GU","DZIA\u0141O","DZIA\u0141KO AUTOMATYCZNE","DZIA\u0141KO PRZECIWLOTNICZE","HAUBICA","MO\u0179DZIERZ","WYRZUTNIA RAKIET","PRZECIWLOTNICZY ZESTAW RAKIETOWY","PRZENO\u015ANY ZESTAW PRZECIWLOTNICZY","PRZECIWPANCERNY POCISK KIEROWANY","GRANATNIK PRZECIWPANCERNY","GRANATNIK AUTOMATYCZNY","CI\u0118\u017BKI KARABIN MASZYNOWY","\u015AREDNI KARABIN MASZYNOWY","LEKKI KARABIN MASZYNOWY","KARABIN SZTURMOWY","PISTOLET MASZYNOWY","KARABIN SNAJPERSKI","MIOTACZ OGNIA","BOMBY","POCISK POWIETRZE-ZIEMIA","POCISK POWIETRZE-POWIETRZE","POCISK PRZECIWRADAROWY","DZIA\u0141KO LOTNICZE","NIEKIEROWANE POCISKI RAKIETOWE"],S={hp:{key:"hp",label:"P\u017B",kind:{type:"number",step:1}},strength:{key:"hp",label:"LICZEBNO\u015A\u0106",kind:{type:"number",step:1}},optics:{key:"optics",label:"OPTYKA",kind:{type:"level",options:S3}},airOptics:{key:"airOptics",label:"OPTYKA POWIETR.",kind:{type:"level",options:M3}},stealth:{key:"stealth",label:"KAMUFLA\u017B",kind:{type:"level",options:B3}},amphibious:{key:"amphibious",label:"AMFIBIA",kind:{type:"select",options:O3}},speed:{key:"speed",label:"PR\u0118DKO\u015A\u0106",kind:{type:"number",unit:"km/h",step:1}},roadSpeed:{key:"roadSpeed",label:"PR\u0118DKO\u015A\u0106 NA DRODZE",kind:{type:"number",unit:"km/h",step:1}},autonomy:{key:"autonomy",label:"ZASI\u0118G POJ.",kind:{type:"range"}},fuel:{key:"fuel",label:"PALIWO",kind:{type:"number",unit:"L",step:10}},advancedDeployment:{key:"advancedDeployment",label:"WCZESNE REAGOWANIE",kind:{type:"number",unit:"m",step:1}},ecm:{key:"ecm",label:"ECM",kind:{type:"level",options:_3}},altitude:{key:"altitude",label:"WYSOKO\u015A\u0106 LOTU",kind:{type:"number",unit:"m",step:10}},agility:{key:"agility",label:"ZR\u0118CZNO\u015A\u0106",kind:{type:"select",options:I3}},travelTime:{key:"travelTime",label:"CZAS PODR\u00D3\u017BY",kind:{type:"number",unit:"s",step:1}},flightTime:{key:"flightTime",label:"ZASI\u0118G POJAZDU",kind:{type:"number",unit:"s",step:1}},smoke:{key:"smoke",label:"ZAS\u0141ONA DYMNA",kind:{type:"select",options:R3}},transport:{key:"transport",label:"TRANSPORT",kind:{type:"number",unit:"os.",step:1}}},s2={vehicle:[S.hp,S.optics,S.stealth,S.amphibious,S.speed,S.roadSpeed,S.autonomy,S.fuel,S.advancedDeployment],infantry:[S.strength,S.optics,S.stealth,S.amphibious,S.speed,S.advancedDeployment],helicopter:[S.hp,S.optics,S.stealth,S.airOptics,S.ecm,S.speed,S.autonomy,S.fuel,S.advancedDeployment],plane:[S.hp,S.airOptics,S.stealth,S.ecm,S.speed,S.agility,S.flightTime,S.fuel,S.travelTime]},o2=[{value:"vehicle",label:"Pojazd"},{value:"infantry",label:"Piechota"},{value:"helicopter",label:"\u015Amig\u0142owiec"},{value:"plane",label:"Samolot"}],P={armor:{min:0,max:25,step:1,thresholds:[5,10,14]},penetration:{min:0,max:40,step:1,thresholds:[6,12,22]},he:{min:0,max:10,step:.05,thresholds:[.2,.6,2]},suppress:{min:0,max:1e3,step:1,thresholds:[20,60,250]},range:{min:0,max:1e4,step:25,thresholds:[900,1500,2100],unit:"m"},accuracy:{min:0,max:100,step:1,thresholds:[25,40,55],unit:"%"},rateOfFire:{min:0,max:3e3,step:1,thresholds:[6,20,300]},aimingTime:{min:0,max:15,step:.1,thresholds:[2.5,1.8,1],inverted:!0,unit:"s"},reloadTime:{min:0,max:120,step:.1,thresholds:[8,5,3],inverted:!0,unit:"s"},salvo:{min:0,max:100,step:1,thresholds:[2,5,15]},supplyCost:{min:0,max:1e4,step:1,thresholds:[1e5,1e5,1e5]}};var CMODEL={art:{c:[0,0,0,0,0.613,0,0,0.71,3.383,78.862,0,0,0,1.479,7.768,0.524,0,0,20.12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],min:25,max:400},tnk:{c:[8.285,0,0,0,0,0,48.779,6.029,3.727,24.727,0,0,0.995,0,0,0,19.693,0,0,49.789,0,0,0,0,0,1.599,4.161,26.418,0,0,0,0,13.723,0],min:15,max:400},rec:{c:[1.565,0,15.04,0,2.287,0.212,65.258,0.412,4.563,68.074,0,288.919,1.178,0,0,11.773,0,0,1.958,0,0,13.423,3.902,19.102,0,0,0,4.782,12.979,0,36.845,0,2.097,52.38],min:20,max:400},log:{c:[0.271,0,0,0,5.272,0,0,0,0,0,0,19.52,0.057,0.737,0.538,0.4,3.465,0.173,1.155,0,0,0,0,0,0,0,25.053,18.778,0,0,0,0.168,6.328,0],min:25,max:175},inf:{c:[0,1.577,0.274,2.352,0,0,12.165,0,0,23.819,0,0,0.625,0,0,6.764,0,0,21.62,6.374,0,0.935,12.146,0,0,0,0,0,0,0,0,0,9.321,0],min:10,max:150},hel:{c:[0,0,0,0,10.763,238.408,0,2.636,0,0,0,211.548,1.611,3.732,6.93,2.167,0.465,0.425,5.003,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],min:35,max:340},aa:{c:[0,0,0,0,4.157,0,0,0,2.785,0,0,11.549,0.006,4.246,5.795,4.331,15.156,0,0,0,0,0,0,0,0,0,0,0,0,23.553,0,0,4.854,0],min:35,max:220},air:{c:[0,0,0,0,36.803,0,22.894,0.383,0,10.305,0,0,0,0.77,0,1.992,26.685,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],min:140,max:550}},CTR=["_leader","_reco","_choc","_sf","_sniper","_era","Slat","Thermals1","Thermals2","_gsr","Radar","uav","_ifv","_para","_jammer"];function cfeat(c){let f=c.fields,s=[0,0,0,0,0,0,0];for(let w of c.weapons){let r=Math.max(w.groundRange||0,w.helicopterRange||0,w.planeRange||0),a=[w.penetration||0,w.he||0,(w.suppress||0)/100,r/1e3,(w.staticAccuracy||0)/100,Math.log(1+(w.rateOfFire||0)),w.supplyCost?Math.log(1+w.supplyCost/100):0];for(let i=0;i<7;i++)s[i]+=a[i]}return[c.frontArmor,c.sideArmor,c.rearArmor,c.topArmor,f.hp,f.optics/100,f.stealth,f.speed/10,f.roadSpeed/10,(f.fuel||0)/1e3,f.ecm/10,f.airOptics/100,...s,...CTR.map(t=>c.traits.includes(t)?1:0)].map(v=>Number(v)||0)}function autoCost(o,c){let m=CMODEL[o.category];if(!m)return c.cost;let a=cfeat(o),b=cfeat(c),d=0;for(let i=0;i<m.c.length;i++)d+=m.c[i]*(b[i]-a[i]);return d===0?o.cost:Math.round(Math.min(m.max,Math.max(m.min,o.cost+d))/5)*5}function h1(i,t){let e=t.thresholds;return e?t.inverted?i>e[0]?"red":i>e[1]?"yellow":i>e[2]?"green":"cyan":i<e[0]?"red":i<e[1]?"yellow":i<e[2]?"green":"cyan":"plain"}var N3={tnk:{icon:"tank",label:"CZO\u0141G"},inf:{icon:"infantry",label:"PIECHOTA"},rec:{icon:"recon",label:"ROZPOZNANIE"},aa:{icon:"aa",label:"OBRONA PRZECIWLOTNICZA"},art:{icon:"artillery",label:"ARTYLERIA"},hel:{icon:"helicopter",label:"\u015AMIG\u0141OWIEC"},air:{icon:"jet",label:"SAMOLOT"},log:{icon:"supply",label:"LOGISTYKA"}};function P3(i){return i<80?"NISKI":i<=200?"\u015AREDNI":i<=300?"WYSOKI":"BARDZO WYSOKI"}function D3(i){return i.movementType==="plane"?"plane":i.movementType==="helicopter"?"helicopter":i.infoPanelType==="infantry"?"infantry":"vehicle"}function c1(i,t=2){let e=10**t;return Math.round(i*e)/e}function W3(i){let t=i.match(/\b(\d{1,2})[ ,._](\d{1,2})\s?mm/i);if(t)return`${t[1]},${t[2]}mm`;let e=i.match(/\b(\d+)\s?mm/i);return e?`${e[1]}mm`:""}var L3=/^(Canon|AutoCanon|Autocanon|Howz Canon|Howz|HMG|MMG|LMG|SMG|FM|ATGM|MANPAD|SAM|AA|AGM|Bomb|RocketArt|Roquette|Gatling|GatlingAir|DCA|Mortier|Grenade|RPG|Sniper|SMOKE|PM|Pistolet|inf|team)\b/i;function Z3(i){let t=i.replace(/_/g," ");for(let e=0;e<3;e++)t=t.replace(L3,"").trim(),t=t.replace(/^(AP|HE|HEAT|SMOKE|direct|inf|team|x\d+)\b/i,"").trim();return t=t.replace(/\b\d{1,2}[ ,._]\d{1,2}\s?mm/i,"").replace(/\b\d+\s?mm/i,"").replace(/\s+/g," ").trim(),t||i}function V(i,t){var e;return((e=i.damageFamilies)!=null?e:[]).some(r=>r.includes(t))}function U3(i,t){let e=i.weaponName,r=e.toLowerCase(),s=(t==null?void 0:t.infoPanelType)==="infantry";return(t==null?void 0:t.movementType)==="plane"||/^(bomb|agm|gbu|kab|aa r|aim|r-\d|kh-)/i.test(e)&&!s?"air":V(i,"ap_missile")?"atgm":/mortier|mortar/.test(r)?"mortar":/^manpad|^sam\b/i.test(e)||V(i,"missile_he")||i.planeRange>0&&i.groundRange===0||/roquette|rocketart|mlrs|grad|bm-?\d/i.test(e)?"rockets":V(i,"howz")||/^howz/i.test(e)||i.traits.includes("IND")?"howitzer":V(i,"he_autocanon")||V(i,"he_dca")||/^autocanon|^dca/i.test(e)?"autocannon":V(i,"roquette_ap")?s?"infantry":"rockets":/^canon/i.test(e)?"cannon":s?"infantry":/^(hmg|mmg|lmg|gatling)/i.test(e)||V(i,"fmballe")?"vehicle_mg":i.penetration>=10?"cannon":"other"}function K3(i,t,e){let r=i.weaponName;switch(t){case"cannon":return(e==null?void 0:e.category)==="tnk"?"DZIA\u0141O CZO\u0141GU":"DZIA\u0141O";case"howitzer":return"HAUBICA";case"mortar":return"MO\u0179DZIERZ";case"autocannon":return V(i,"he_dca")||/^dca/i.test(r)?"DZIA\u0141KO PRZECIWLOTNICZE":"DZIA\u0141KO AUTOMATYCZNE";case"atgm":return"PRZECIWPANCERNY POCISK KIEROWANY";case"rockets":return/^manpad/i.test(r)?"PRZENO\u015ANY ZESTAW PRZECIWLOTNICZY":i.planeRange>0||i.helicopterRange>0?"PRZECIWLOTNICZY ZESTAW RAKIETOWY":(e==null?void 0:e.infoPanelType)==="infantry"?"GRANATNIK PRZECIWPANCERNY":"WYRZUTNIA RAKIET";case"vehicle_mg":return/^hmg/i.test(r)?"CI\u0118\u017BKI KARABIN MASZYNOWY":/^gatling/i.test(r)?"KARABIN WIELOLUFOWY":"\u015AREDNI KARABIN MASZYNOWY";case"infantry":return V(i,"roquette_ap")||i.penetration>0?"GRANATNIK PRZECIWPANCERNY":/^hmg/i.test(r)?"CI\u0118\u017BKI KARABIN MASZYNOWY":/^(mmg|lmg)/i.test(r)?"KARABIN MASZYNOWY":/sniper|snip/i.test(r)?"KARABIN SNAJPERSKI":/flam|lpo|rpo/i.test(r)?"MIOTACZ OGNIA":"KARABIN SZTURMOWY";case"air":return/^bomb|gbu|kab/i.test(r)?"BOMBY":i.traits.includes("sead")?"POCISK PRZECIWRADAROWY":i.planeRange>0&&i.groundRange===0?"POCISK POWIETRZE-POWIETRZE":/gatling|canon|gsh|gau/i.test(r)?"DZIA\u0141KO LOTNICZE":/roquette|rocket|s-\d|zuni|hydra|ffar/i.test(r)?"NIEKIEROWANE POCISKI RAKIETOWE":"POCISK POWIETRZE-ZIEMIA";default:return"UZBROJENIE"}}var t0={weapon:i=>`/images/weapons/${i}.png`,unit:i=>`/images/units/${i}.webp`};function H3(i){return i?t0.weapon(i):""}function F3(i){var e;if(!i.penetration)return 0;let t=i.groundRange||i.helicopterRange||i.planeRange;for(let r of(e=i.damageDropOffTokens)!=null?e:[]){let s=r.match(/'DistanceGRU':\s*([\d.]+)/),o=r.match(/'AP':\s*([\d.]+)/);if(s&&o&&Number(s[1])>0&&t>0){let n=Math.floor((t-1)/Number(s[1]));return Math.max(0,Math.round(i.penetration-n*Number(o[1])))}}return i.penetration}function j3(i){var s,o;let t=(o=(s=i.rateOfFire)!=null?s:i.trueRateOfFire)!=null?o:0,e=i.ammunitionPerSalvo||1,r=i.salvoLength||e;return Math.round(t*e/r)}function G1(i,t){var r,s,o,n,d,f,v,z,x,k,C;let e=U3(i,t);return{uid:v0(),category:e,typeLabel:K3(i,e,t),attributes:i.traits.filter(B=>R0.some(_=>_.value===B)).slice(0,d0),image:H3(i.imageTexture),name:Z3(i.weaponName),caliber:W3(i.weaponName),ammo:(i.numberOfSalvos||1)*(i.ammunitionPerSalvo||1),penetration:F3(i),he:c1((r=i.he)!=null?r:0),suppress:Math.round((s=i.suppress)!=null?s:0),groundRange:(o=i.groundRange)!=null?o:0,helicopterRange:(n=i.helicopterRange)!=null?n:0,planeRange:(d=i.planeRange)!=null?d:0,staticAccuracy:Math.round((f=i.staticAccuracy)!=null?f:0),movingAccuracy:Math.round((v=i.movingAccuracy)!=null?v:0),rateOfFire:j3(i),aimingTime:c1((z=i.aimingTime)!=null?z:0),reloadTime:c1((x=i.reloadTime)!=null?x:0),salvo:(k=i.salvoLength)!=null?k:0,supplyCost:Math.round((C=i.supplyCost)!=null?C:0)}}function V3(i){return`${i.imageTexture}|${i.weaponName.replace(/\b(AP|HE|HEAT|APFSDS|SMOKE|direct)\b/gi,"").replace(/\s+/g," ").trim()}|${i.groundRange}`}function n2(i){let t=[];for(let e of i.weapons){if(!e.showInInterface||/^smoke/i.test(e.weaponName)&&!e.imageTexture)continue;let r=V3(e),s=t.find(o=>o.key===r&&e.imageTexture);s?s.weapons.push(e):t.push({key:r,weapons:[e]})}return t.map(({weapons:e})=>{let r=G1(e[0],i);for(let s of e.slice(1).map(o=>G1(o,i)))r.penetration=Math.max(r.penetration,s.penetration),r.he=Math.max(r.he,s.he),r.suppress=Math.max(r.suppress,s.suppress),r.attributes=[...new Set([...r.attributes,...s.attributes])].slice(0,d0),r.ammo=Math.max(r.ammo,s.ammo),r.supplyCost=Math.max(r.supplyCost,s.supplyCost);return r})}function a2(){return{uid:v0(),category:"other",typeLabel:"NOWE UZBROJENIE",attributes:[],image:"",name:"Nowa bro\u0144",caliber:"",ammo:0,penetration:0,he:0,suppress:0,groundRange:0,helicopterRange:0,planeRange:0,staticAccuracy:0,movingAccuracy:0,rateOfFire:0,aimingTime:0,reloadTime:0,salvo:0,supplyCost:0}}function X1(i,t){return!i.fuelMove||!t?0:Math.round(i.fuelMove*t/3600*2.83)}function AX(i){return(window.STATS_AIR||{})[i.descriptorName]||{}}function AGL(r){return r<=450?"Wyjątkowy":r<=700?"Bardzo dobry":r<=1100?"Dobry":r<=1300?"Średni":r<=1600?"Przeciętny":"Słaby"}function u1(i){var o,n,d,f,v,z,x,k,C;let t=(o=N3[i.category])!=null?o:{icon:"support",label:"JEDNOSTKA"},e=D3(i),r=i.category==="tnk"&&i.frontArmor>=14?"CZO\u0141G PODSTAWOWY":t.label,s=i.specialities.includes("_transport2")?12:i.specialities.includes("_transport1")?6:0;return{name:i.name,country:(d=(n=i.unitType)==null?void 0:n.motherCountry)!=null?d:"",cost:i.commandPoints,roleLabel:r,roleIcon:i.isCommand?"command":t.icon,costCategory:P3(i.commandPoints),frontArmor:i.frontArmor,sideArmor:i.sideArmor,rearArmor:i.rearArmor,topArmor:i.topArmor,traits:[...i.specialities],weapons:n2(i),panelType:e,source:i.descriptorName,category:i.category,fields:{hp:i.maxDamage,optics:i.optics,airOptics:i.airOptics,stealth:i.stealth,amphibious:i.specialities.includes("_amphibie")?"Tak":"Nie",speed:i.speed,roadSpeed:i.roadSpeed,autonomy:`${X1(i,i.speed)}/${X1(i,i.roadSpeed)}`,fuel:(f=i.fuel)!=null?f:0,advancedDeployment:(v=i.advancedDeployment)!=null?v:0,ecm:Math.round((((z=i.ecm)!=null?z:AX(i).ecm)||0)*100),altitude:(x=i.flyingAltitude)!=null?x:(AX(i).alt||0),agility:AX(i).agil!=null?AGL(AX(i).agil):"\u015Aredni",travelTime:(k=i.travelTime)!=null?k:(AX(i).travel||0),flightTime:(C=i.fuelMove)!=null?C:0,smoke:i.hasDefensiveSmoke?"Tak":"Nie",transport:s}}}function l2(i){var r;let t=new Map;for(let s of i)for(let o of n2(s)){let n=`${o.category}|${o.name}|${o.caliber}|${o.groundRange}|${o.penetration}|${o.he}`;t.has(n)||t.set(n,{key:n,label:[o.name,o.caliber].filter(Boolean).join(" "),image:o.image,category:o.category,weapon:o})}let e=new Map;for(let s of t.values()){let o=(r=e.get(s.category))!=null?r:[];o.push(s),e.set(s.category,o)}for(let s of e.values())s.sort((o,n)=>o.label.localeCompare(n.label,"pl"));return e}t0.weapon=i=>{var t,e;return(e=(t=window.STATS_WEAPON_IMAGES)==null?void 0:t[i])!=null?e:""};t0.unit=i=>`images/units/${i}.webp`;var Y3=window.fetch.bind(window);window.fetch=(i,t)=>(typeof i=="string"?i:i instanceof URL?i.href:i.url).endsWith("/data/wif-extended.json")&&window.STATS_DATA?Promise.resolve(new Response(JSON.stringify(window.STATS_DATA),{headers:{"Content-Type":"application/json"}})):Y3(i,t);var c2=document.createElement("template");c2.innerHTML=`<vaadin-iconset name="waryes" size="24">
  <svg><defs>
    <g id="waryes:aa"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fff;
      }

      .cls-2 {
        fill: #fdfd55;
      }

      .cls-3 {
        fill: #ff1fec;
      }</style>
 </defs>
 <g stroke-width="1.4748">
  <rect class="cls-2" x="9.2605" y="98.252" width="86.748" height="8.9816"/>
  <path class="cls-1" d="m28.492 91.424c-1.7993 0-3.3478 1.0176-4.1295 2.5072-0.33921 0.64891-0.53093 1.3863-0.53093 2.168 0 2.5662 2.0795 4.6604 4.6604 4.6604s4.6604-2.0942 4.6604-4.6604c0-0.78166-0.19172-1.5191-0.53093-2.168-0.78165-1.4896-2.3302-2.5072-4.1295-2.5072z"/>
  <path class="cls-3" d="m111.51 59.877c-3.1561 2.8316-36.575 34.053-36.575 34.053h16.297s15.839-14.63 29.246-27.196c13.2-12.374 27.874-32.947 28.331-33.581-17.447 9.6453-34.142 23.907-37.298 26.724z"/>
  <path class="cls-3" d="m97.277 66.735c11.754-10.899 27.874-32.888 28.375-33.581-12.565 6.6956-31.531 21.488-36.413 25.957-4.8964 4.4834-37.637 34.82-37.637 34.82h16.415s17.314-16.12 29.26-27.196z"/>
  <path class="cls-3" d="m28.492 91.424c1.7993 0 3.3478 1.0176 4.1295 2.5072h14.512l25.352-22.978-1.696-1.873c19.305-18.863 30.691-35.941 30.691-35.941-29.865 18.583-38.153 27.667-38.153 27.667l-6.2974-6.9906-44.51 40.115h11.843c0.78165-1.4896 2.3302-2.5072 4.1295-2.5072z"/>
 </g>
 <polygon class="cls-3" transform="matrix(1.4748 0 0 1.4748 -35.544 -27.151)" points="40.2 109.12 79.36 109.12 79.36 91.12 40.2 91.12 32.86 91.12 25 98.46 30.11 103.94 40.2 94.63"/>
</svg>
</g>
    <g id="waryes:artillery"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }</style>
 </defs>
 <g stroke-width="1.3389">
  <path class="cls-2" d="m148.63 33.679c-0.32134-0.38829-1.4594-1.9548-2.0218-2.718-0.56235-0.77658-1.4059-0.70963-1.8343-0.42846-0.42845 0.26779-5.7172 4.231-6.6277 4.9272-0.91046 0.70963-0.62929 1.7942-0.62929 1.7942l-47.197 33.982-8.1005 0.21423-17.727 13.148s-0.54896-0.30795-1.4326-0.4954v-5.3155c0-1.0176-0.72302-1.0845-0.72302-1.0845v-8.1407h-0.68285v14.38c-0.53557 0-1.1247 0.08034-1.754 0.26779-1.031-7.0294-3.2268-10.296-3.2268-10.296l1.4193 11.167c-0.24101 0.16067-0.48201 0.34812-0.72302 0.56235-3.4276 2.9724-1.7138 6.226-1.7138 6.226l-0.38829 0.48201c-1.7406-0.1205-2.0887 1.3389-2.0887 1.3389l-0.77658-0.29456 0.16067-0.65607c0.06694-0.28118-0.10712-0.56235-0.38829-0.6293-0.28117-0.06695-0.56235 0.10712-0.62929 0.38829l-1.031 4.4051c-0.06694 0.28117 0.10712 0.56235 0.38829 0.62929h0.1205c0.24101 0 0.45524-0.16067 0.50879-0.40167l0.18745-0.77658c0.14728-0.01338 0.52218 0 0.52218 0.78996 0 3.4946 1.3925 4.4854 1.3925 4.4854 0.17406 2.2092 0.8703 4.2846 0.8703 4.2846l-51.589 16.348s-0.30795 0.42845-1.0845 2.1691c-0.77658 1.7272 0.16067 1.7674 0.77658 1.7674h4.8201l4.2042-2.8787 42.645-10.055 18.732-0.97741c-0.64268-1.7272-0.9908-3.6017-0.9908-5.5432 0-8.8637 7.1766-16.04 16.04-16.04 2.9858 0 5.7842 0.81674 8.1808 2.236 0 0 0.93725-1.6201 0.93725-4.539 0-7.257-5.8645-10.564-5.8645-10.564l1.2318-3.7892 47.237-33.861c1.7272 0.29456 1.8611 0.04017 2.3565-0.32134 0.49539-0.36151 5.6503-4.1774 6.1992-4.6728 0.54896-0.4954 0.61591-1.1381 0.29456-1.5264zm-0.92386 1.0845-1.272 0.9908c-0.0937 0.06694-0.22762 0.05355-0.29456-0.04016l-2.4636-3.1866c-0.0669-0.09372-0.0535-0.22762 0.0401-0.29456l1.272-0.9908c0.0937-0.06694 0.22763-0.05355 0.29457 0.04016l2.4636 3.1866c0.0669 0.09372 0.0535 0.22762-0.0402 0.29456z"/>
  <path class="cls-2" d="m88.075 102.57c2.3163 0 4.1908 1.8745 4.1908 4.1908 0 2.3164-1.8745 4.1908-4.1908 4.1908-2.3163 0-4.1908-1.8745-4.1908-4.1908 0-2.3163 1.8745-4.1908 4.1908-4.1908z"/>
  <path class="cls-1" d="m88.075 92.98c7.6051 0 13.778 6.1724 13.778 13.778 0 7.6051-6.1725 13.778-13.778 13.778-7.6051 0-13.778-6.1724-13.778-13.778 0-7.6051 6.1724-13.778 13.778-13.778zm5.9984 13.778c0-3.3205-2.6912-5.9984-5.9984-5.9984-3.3071 0-5.9984 2.6912-5.9984 5.9984 0 3.3072 2.6912 5.9984 5.9984 5.9984 3.3071 0 5.9984-2.6912 5.9984-5.9984z"/>
 </g>
</svg>
</g>
    <g id="waryes:assault-infantry"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }

      .cls-3 {
        fill: none;
      }</style>
 </defs>
 <polygon class="cls-3" transform="matrix(1.7777 0 0 1.7777 -55.979 -57.446)" points="76.2 50.62 76.2 49.81 67.62 49.47 67.62 50.62"/>
 <g stroke-width="1.7777">
  <path class="cls-2" d="m24.925 97.126s-0.31999-11.395-1.2977-15.928c-0.95996-4.5154-4.4443-16.799-4.4443-27.163 0-7.0397 0.47998-11.555 0.47998-11.555s-0.88886-0.12444-2.0977-0.12444c-2.7377 0-7.1464 0.69331-6.6309 5.2976 0.72886 6.6309 3.6443 44.301 3.9643 46.078 0.31999 1.7777 1.1377 3.3954 3.9643 3.3954z"/>
  <path class="cls-2" d="m14.614 41.448h5.1376s-0.49776-16.604 11.004-13.013l-0.53332-2.7021s-15.342 1.0488-17.262 1.3511c-1.9199 0.28444-3.4132 2.0621-3.4132 4.4265v5.5465c0 1.3155 1.2444 4.3732 5.0487 4.3732z"/>
  <path class="cls-2" d="m53.777 76.416c-1.6177-1.4399-4.5332-14.862 0.2311-22.79 0 0-13.813 3.2354-15.519 3.2354-2.4177 0-3.8754-1.8666-3.8754-1.8666s-5.9731 2.2577-8.0886-0.40888c-2.0977-2.6666-2.5066-11.235-2.7377-13.582-0.17777-1.7422-2.0977-2.8266-2.0977-2.8266s-0.10666 1.2977-0.21333 3.431c-0.30221 5.8131-0.60442 17.759 1.3511 25.99 2.6666 11.235 4.0354 16.977 4.0354 25.777v3.7154c0 8.2664-0.58664 19.004-8.3375 37.652-2.1866 5.0132-0.63998 12.213 5.902 12.213 4.5154 0 7.1997-0.63997 10.826-12.604 3.6443-11.964 6.7198-24.337 6.9509-47.092 0 0 9.7774 3.5199 12.373 19.27 2.5777 15.768-2.5066 29.421-2.7555 31.679-0.2311 2.2577 1.0489 8.7286 7.5908 8.7286 6.542 0 8.7286-3.8043 10.915-22.221 2.1688-18.435-1.2977-35.892-16.568-48.336z"/>
  <path class="cls-1" d="m29.298 54.372c3.3421 0 4.1243-0.47998 4.1243-0.47998l-8.1419-11.111s0.67553 11.608 4.0176 11.608z"/>
  <path class="cls-2" d="m59.59 40.986-18.95 4.0176-0.72886-1.0133-8.4619-11.733c-1.5111-2.0977-4.4087-2.5599-6.5064-1.0666-2.0977 1.4933-2.5599 4.4087-1.0666 6.5064l10.968 15.217c0.21333 0.30221 0.47998 0.58665 0.76442 0.81775 0.83552 0.71108 1.9199 1.12 3.0221 1.12 0.31999 0 0.63998-0.03556 0.95996-0.10666l18.702-3.9643 3.2354-0.69331c2.5244-0.53331 4.1243-3.0043 3.591-5.5287-0.53331-2.5244-3.0043-4.1243-5.5287-3.591z"/>
  <path class="cls-1" d="m124.76 33.129v-1.3333l-37.972-1.1555v1.7244h-3.3065l-0.44443-4.2843-20.213-0.88886s-3.111 11.786-15.484 12.515c-0.3911 0.01778-0.78219 0.03556-1.1911 0.03556-5.422 0-9.1908-3.271-9.1908-3.271l4.3554 6.4709s14.453-3.271 16.444-3.6088c1.9733-0.33777 7.4308-1.2266 9.0663 3.271 1.0844 3.0754 0.40887 4.3021 0.40887 4.3021h6.7553s2.6488 9.6174 3.3421 11.466c0.67553 1.831 1.6355 2.2577 4.0176 1.2266 2.3821-1.0133 3.9643-1.3688 3.3421-2.9332-0.60442-1.5644-2.791-9.5463-2.791-13.226 0-3.6799 1.7777-5.3154 1.7777-5.3154h3.111v1.6177l37.972-1.9377v-1.3155h20.373v-3.3599zm-45.278-0.60442h-15.253v-2.0266l15.253 0.58664z"/>
  <path class="cls-2" d="m30.969 21.182h0.71108v0.10666c0 1.4222 0.15999 2.8088 0.4622 4.1243 1.6533 7.1109 7.4486 12.373 14.364 12.373 0.24888 0 0.51554 0 0.76442-0.01778 7.8397-0.44443 14.062-7.6619 14.062-16.497v-0.10666h0.71108c0.92441 0 1.6711-0.74664 1.6711-1.6711 0-0.92441-0.74664-1.6711-1.6711-1.6711h-1.0311c-1.4222-7.4664-7.3775-13.066-14.506-13.066-7.1286 0-13.084 5.5998-14.506 13.066h-1.0311c-0.92441 0-1.6711 0.74664-1.6711 1.671 0 0.92441 0.74664 1.6711 1.6711 1.6711z"/>
 </g>
</svg>
</g>
    <g id="waryes:at"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }</style>
 </defs>
 <path class="cls-1" d="m67.615 90.723v-5.5791h-3.7345c0.54652-0.83116 0.9678-1.7534 1.2866-2.7098h5.9434v-6.9909h-6.0686c-0.93364-2.6643-2.8692-4.8617-5.3513-6.1483-1.5257-0.79701-3.2677-1.2411-5.1122-1.2411-2.7326 0-5.2375 0.99057-7.1731 2.6415-1.4802 1.2524-2.6301 2.892-3.2905 4.7593h-6.0686v6.9909h5.9434c0.30742 0.9678 0.74008 1.8787 1.2866 2.7098h-4.1103v5.5791l-35.057 26.768h-4.7365v2.9603h7.0364l39.702-26.518 15.189 35.353h5.2147v-2.596h-2.6415l-7.9587-35.433 38.928 25.686h7.3439v-2.6529h-4.7137l-31.835-23.58z" stroke-width="1.1386"/>
 <path class="cls-2" d="m22.618 73.497 17.375-1.9811 2.9262 1.9811s0.54652-1.1272 1.6737-2.5049c1.7762-2.1633 5.0098-4.9642 9.8146-4.9642 3.8256 0 6.5127 1.4346 8.2661 2.9034 1.8445 1.5485 2.6529 3.1425 2.6529 3.1425l1.6282-3.6207 80.817-9.1997-1.2069-14.255-88.661 9.917v-1.7762l2.6643-0.02277v-4.8731h-3.5068l-0.21633-2.1291h4.486v-7.082l-6.9567 0.72869v-1.5371h-8.7443v2.448s-1.8103 0.19356-1.8103 0.19356l0.06831 1.799h-4.5202v2.6074h4.6226l0.20494 5.3627h-3.9964v2.6871l4.0989-0.04554 0.12524 3.1539-22.886 2.5504z" stroke-width="1.1386"/>
</svg>
</g>
    <g id="waryes:command"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }</style>
 </defs>
 <g transform="matrix(1.4366 0 0 1.4366 -32.739 -32.514)">
  <path class="cls-2" d="m33.91 103.28c-0.52 0-1.02-0.26-1.31-0.73-5.1-8.26-7.79-17.79-7.79-27.55s2.69-19.28 7.79-27.55c0.45-0.72 1.39-0.95 2.11-0.5s0.95 1.39 0.5 2.11c-4.8 7.78-7.34 16.75-7.34 25.93s2.54 18.16 7.34 25.93c0.45 0.72 0.22 1.67-0.5 2.11-0.25 0.16-0.53 0.23-0.81 0.23z"/>
  <path class="cls-2" d="m116.09 103.28c-0.28 0-0.55-0.07-0.81-0.23-0.72-0.45-0.95-1.39-0.5-2.11 4.8-7.78 7.34-16.75 7.34-25.93s-2.54-18.16-7.34-25.93c-0.45-0.72-0.22-1.67 0.5-2.11 0.72-0.45 1.67-0.22 2.11 0.5 5.1 8.26 7.79 17.79 7.79 27.55s-2.69 19.28-7.79 27.55c-0.29 0.47-0.79 0.73-1.31 0.73z"/>
 </g>
 <path class="cls-1" d="m75.002 132.69c-31.69 0-57.462-25.772-57.462-57.462 0-31.69 25.772-57.462 57.462-57.462 31.69 0 57.462 25.772 57.462 57.462 0 31.69-25.772 57.462-57.462 57.462zm0-110.51c-29.248 0-53.052 23.804-53.052 53.052 0 29.248 23.804 53.052 53.052 53.052 29.248 0 53.052-23.804 53.052-53.052 0-29.248-23.804-53.052-53.052-53.052z" stroke-width="1.4366"/>
 <polygon class="cls-2" transform="matrix(1.4366 0 0 1.4366 -32.739 -32.514)" points="104.99 65.29 81.37 65.29 75 41.67 68.63 65.29 45.01 65.29 64.72 80.36 56.35 102.12 75 88.73 93.65 102.12 85.28 80.36"/>
</svg>
</g>
    <g id="waryes:elite-star"><?xml version="1.0" encoding="UTF-8"?>
<svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 150 150" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g stroke-width=".29393">
<path d="m73.73 0.24635c0.89368-9.1e-7 1.7874-9.1e-7 2.7208 0.081474 3.3344 1.9787 6.6124 3.9052 9.9282 5.7653 3.6125 2.0265 7.2754 3.9643 10.889 5.9891 5.8157 3.2587 11.602 6.5688 17.414 9.8343 3.4452 1.9357 6.9255 3.8097 10.372 5.7433 5.0667 2.8427 10.094 5.7554 15.195 8.5356 0.93691 0.51065 1.3304 0.957 1.329 2.0374-0.0314 24.654-0.0331 49.309 6e-3 73.963 2e-3 1.0923-0.43354 1.5684-1.3059 2.0531-6.0786 3.3775-12.125 6.8124-18.19 10.213-7.6827 4.3079-15.371 8.6056-23.062 12.899-6.653 3.7143-13.319 7.4051-19.961 11.139-0.8533 0.47976-1.5933 1.1583-2.3858 1.7448-0.89368 0-1.7874 0-2.7208-0.0815-3.3344-1.9787-6.6124-3.9052-9.9281-5.7653-3.6125-2.0264-7.2753-3.9643-10.889-5.989-5.8157-3.2588-11.602-6.5689-17.414-9.8344-3.4452-1.9357-6.9255-3.8097-10.372-5.7433-5.0667-2.8427-10.094-5.7553-15.195-8.5355-0.93688-0.51063-1.3305-0.95681-1.3291-2.0373 0.031423-24.654 0.033167-49.309-0.00547-73.963-0.00163-1.092 0.433-1.5684 1.3056-2.0533 6.0788-3.3774 12.125-6.8125 18.191-10.214 7.6823-4.3079 15.371-8.6056 23.062-12.899 6.653-3.7143 13.319-7.4051 19.961-11.139 0.85332-0.47978 1.5934-1.1584 2.386-1.7448m58.682 43.056c-0.21943-0.36454-0.35027-0.87099-0.67308-1.0699-1.7013-1.0481-3.4377-2.0422-5.1867-3.011-3.6218-2.0061-7.2751-3.9564-10.886-5.9809-5.1076-2.8634-10.182-5.786-15.284-8.6584-3.275-1.8436-6.5836-3.6282-9.8629-5.4645-4.9403-2.7664-9.8632-5.5634-14.813-8.3124-0.29069-0.16143-0.83307-0.14736-1.1302 0.01562-3.8803 2.1286-7.7435 4.2884-11.599 6.4608-8.003 4.5091-15.989 9.0479-24.001 13.541-6.6009 3.7022-13.226 7.3617-19.849 11.026-0.82418 0.45603-1.1621 1.0105-1.1602 2.0215 0.03931 20.793 0.0506 41.587-0.01531 62.38-0.0046 1.469 0.60034 2.088 1.7401 2.6952 3.4863 1.8573 6.9413 3.7735 10.387 5.7041 4.9399 2.7676 9.8527 5.5828 14.793 8.3501 4.2772 2.396 8.5881 4.7327 12.863 7.1334 5.6434 3.1696 11.26 6.3857 16.911 9.542 0.32254 0.18014 0.93311 0.15226 1.2663-0.0331 4.1589-2.3134 8.2895-4.6769 12.431-7.0214 6.0078-3.401 12.006-6.8196 18.031-10.189 8.2249-4.6 16.462-9.1783 24.722-13.716 0.95161-0.52277 1.3438-1.0725 1.342-2.18-0.0337-20.989-0.0248-41.977-0.0249-63.233z" fill="#ff1fec"/>



<path d="m93.891 103c-3.5074-2.397-7.0163-4.7919-10.522-7.192-2.1649-1.4823-4.3888-2.8903-6.4589-4.494-1.0255-0.79447-1.6999-0.72702-2.6951-0.02917-5.6573 3.967-11.357 7.874-17.334 12.003 0.18592-0.91832 0.26631-1.5792 0.4553-2.208 1.8477-6.1469 3.7356-12.282 5.5286-18.445 0.13133-0.45139-0.22379-1.3008-0.62791-1.6084-5.0567-3.8486-10.168-7.6268-15.254-11.437-0.60538-0.45348-1.1479-0.98976-1.8627-1.6123 3.5744-0.41869 7.0285-0.79459 10.474-1.2349 3.5238-0.45027 7.0309-1.2396 10.562-1.3473 2.1614-0.06595 2.5791-1.1427 3.1819-2.6875 1.9867-5.0914 4.0871-10.139 6.2544-15.476 1.2159 3.0096 2.3375 5.7645 3.4423 8.526 1.1921 2.9797 2.3542 5.9714 3.5766 8.9386 0.11038 0.26795 0.54846 0.52842 0.8633 0.56861 4.8181 0.6151 9.6427 1.1793 14.462 1.7853 2.3848 0.29983 4.7618 0.66054 7.3468 1.0223-1.4475 1.1266-2.8255 2.2372-4.2432 3.2954-4.2181 3.1483-8.4448 6.2854-12.685 9.4047-0.94616 0.69613-1.1122 1.4413-0.72483 2.569 2.1922 6.3821 4.3067 12.791 6.4047 19.364-0.07717 0.21412-0.11126 0.25427-0.1454 0.29438z" fill="#fdfd55"/>
<path d="m94.047 102.82c0.12184 0.10795 0.18994 0.27392 0.25806 0.43988-0.09998-0.0439-0.20002-0.0879-0.35712-0.19658-0.02301-0.105 0.01116-0.14515 0.09907-0.2433z" fill="#fdfd55"/>
</g></svg>
</g>
    <g id="waryes:helicopter"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }</style>
 </defs>
 <g stroke-width="1.2315">
  <rect class="cls-1" x="41.005" y="48.134" width="40.444" height="2.0197"/>
  <rect class="cls-1" x="92.003" y="48.134" width="40.444" height="2.0197"/>
  <rect class="cls-1" x="83.912" y="48.134" width="5.6281" height="3.2759"/>
  <path class="cls-1" d="m103.03 98.603v2.9188s8.2144 0.5665 8.2144-1.2069c0-1.7734-8.2144-1.7118-8.2144-1.7118z"/>
 </g>
 <polygon class="cls-1" transform="matrix(1.2315 0 0 1.2315 -17.641 -17.261)" points="75.66 96.45 96.21 96.45 96.21 93.76 75.66 92.09"/>
 <path class="cls-2" d="m132.2 79.908-7.0198-11.145-28.572-6.3917-5.4311-8.8301h-8.7193l-3.7808 6.8843-23.522 18.436-23.338 3.3621-22.82-23.646h-8.1651l11.81 19.015-3.7685 3.9163 10.751 16.478h9.5321l6.3671-7.3277 95.543 7.3277 17.562-7.4016v-3.5468l-16.416-7.1306zm-110.12 7.9188c-2.0197 0.61577-4.372-1.2192-5.2464-4.101-0.87439-2.8818 0.03694-5.7143 2.0567-6.3301 2.0197-0.61577 4.372 1.2192 5.2464 4.101 0.88671 2.8818-0.03694 5.7143-2.0567 6.3301zm47.156-10.702v-0.50493l21.835-2.968-0.3941-7.7956 2.2291 0.70198 3.6207 10.567zm44.335 1.133-4.2488-9.4829 13.202 2.5247 5.3449 9.2981-14.286-2.3522z" stroke-width="1.2315"/>
</svg>
</g>
    <g id="waryes:ifv"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs><style>
      .cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }
    </style></defs><path d="m27.857 112.14c-1.3751-0.76628-3.3128-1.8349-4.3059-2.3748-0.99314-0.53985-2.462-1.3422-3.2642-1.7829-0.80215-0.44077-2.1773-1.1941-3.0558-1.6741-0.87855-0.48001-1.9175-1.0967-2.3088-1.3705-0.3913-0.27379-1.0254-0.57658-1.409-0.67287-0.38367-0.0963-0.9144-0.54215-1.1794-0.99077-0.47298-0.80071-1.006-1.0857-1.006-0.5379 0 0.15278-0.23376 0.2778-0.51948 0.2778-0.41106 0-0.54945-0.26595-0.6631-1.2743-0.16619-1.4744-0.58462-2.0701-1.0954-1.5593-0.35547 0.35547-1.8253 0.44699-2.5727 0.1602-0.24819-0.09524-0.70756-0.67557-1.0208-1.2896-0.49897-0.97806-0.52333-1.2033-0.19652-1.8168 0.20518-0.38518 0.74808-0.92948 1.2065-1.2096 0.57844-0.35345 0.68468-0.50956 0.34725-0.51028-0.66435-0.001434-0.62996-1.3589 0.084467-3.3347 0.8638-2.3889 0.86664-2.4901 0.079842-2.8486-0.59874-0.27281-0.76834-0.24613-1.0715 0.16853-0.27982 0.38268-0.57876 0.45164-1.3393 0.30896-1.1212-0.21034-1.1021-0.17629-1.5569-2.7682-0.18768-1.0695-0.64316-3.5142-1.0122-5.4326-0.36902-1.9184-0.67095-4.1373-0.67095-4.931 0-1.2373 0.075967-1.443 0.53288-1.443 0.29309 0 0.74178-0.08017 0.99711-0.17814 0.39457-0.15141 0.34702-0.27159-0.31684-0.80094-0.71903-0.57333-0.78627-0.79009-0.84653-2.7289l-0.065462-2.1061 1.0301-0.2859c0.56654-0.15724 1.7489-0.42795 2.6274-0.60158s1.5974-0.43181 1.5974-0.57374c0-0.14193-0.12501-0.18079-0.2778-0.08636-0.15279 0.09443-0.2778 0.0393-0.2778-0.1225 0-0.16181-0.18752-0.2942-0.4167-0.2942-0.29103 0-0.4167-0.29324-0.4167-0.97231v-0.97231h2.1546c2.0818 0 2.1662-0.02582 2.499-0.76395 0.19877-0.44088 0.93239-1.087 1.7348-1.5279 1.7502-0.96167 4.2188-1.0439 6.0736-0.20225 1.3609 0.61752 2.0138 0.68609 2.4433 0.25658 0.36351-0.36351 7.487-0.19626 9.2129 0.2163 1.3688 0.3272 2.6987 1.4656 3.2538 2.7852 0.34814 0.82766 1.2415 1.2774 1.2415 0.62505 0-0.16172 0.9157-0.2778 2.1915-0.2778h2.1915l0.1824-0.9723 0.18241-0.97231h2.2932c1.2612 0 2.4119-0.11539 2.5571-0.25643 0.14515-0.14103 0.63894-0.30982 1.0973-0.37508 0.45837-0.06526-1.8277-0.13738-5.0801-0.16028l-5.9135-0.04162 0.1181-3.9026c0.08786-2.9037 0.22281-4.0236 0.52722-4.3754 0.22502-0.26004 0.76053-1.0979 1.19-1.8618 1.2174-2.1655 1.2156-2.164 2.0304-1.6301 0.67099 0.43965 0.72761 0.43745 1.0025-0.03882 0.16027-0.27763 0.49267-0.71702 0.73867-0.97644 0.38249-0.40334 0.39398-0.56783 0.0793-1.1356-0.51226-0.92422-0.47469-1.7492 0.10347-2.2724 0.74012-0.6698 2.8815-1.5732 3.7453-1.5801 0.42018-0.0034 0.78246-0.16236 0.80509-0.35335 0.02261-0.19099 0.06662-0.53477 0.09777-0.76395s0.07515-0.76048 0.09777-1.1807c0.02561-0.47559 0.19842-0.76395 0.45783-0.76395 0.25941 0 0.43223 0.28836 0.45783 0.76395 0.02261 0.42018 0.06662 0.95147 0.09777 1.1807s0.07515 0.57296 0.09777 0.76395c0.02261 0.19099 0.24514 0.34725 0.4945 0.34725 0.24935 0 0.8736 0.25972 1.3872 0.57716 0.91851 0.56767 0.94485 0.56853 1.6013 0.05218 0.60656-0.47712 1.1576-0.52141 6.044-0.48576 4.5689 0.03333 5.5148 0.1133 6.2967 0.53241 0.50609 0.27125 0.98693 0.42643 1.0685 0.34483 0.0816-0.0816 0.23007-1.062 0.32994-2.1787 0.14536-1.6253 0.27856-2.0489 0.66773-2.1234 0.40533-0.07758 0.49151 0.12972 0.51838 1.2469 0.01772 0.73696 0.09236 1.0899 0.16587 0.78432 0.0735-0.30558 0.24652-0.67436 0.38448-0.81952 0.13796-0.14515 0.25084-0.48893 0.25084-0.76395 0-0.68019 0.75302-0.63534 0.97307 0.05796 0.16647 0.5245 0.36917 0.55178 3.3755 0.45438 2.1926-0.07103 3.2275-0.0062 3.2909 0.20595 0.70572 2.362 1.0679 2.9487 1.8204 2.9487 0.42488 0 0.83592-0.15626 0.91342-0.34725 0.10603-0.26132 0.21383-0.24414 0.4356 0.06945 0.25103 0.35495 0.29533 0.33915 0.29895-0.10667 0.0061-0.75572 0.61269-2.6713 0.84584-2.6713 0.10892 0 0.28082 0.62402 0.38199 1.3867 0.10117 0.76269 0.33605 1.5146 0.52194 1.6709 0.52942 0.44509 7.5119 4.7691 7.9775 4.9401 0.22919 0.08422 0.71484 0.38186 1.0792 0.66144 0.37015 0.284 1.1213 0.50832 1.7022 0.50832 0.5853 0 1.1909 0.18213 1.3856 0.4167 0.19021 0.22919 0.6118 0.41813 0.93687 0.41987 0.32507 0.0017 1.8411 0.39508 3.3691 0.87408 2.0054 0.62869 3.6279 0.92783 5.8338 1.0756 4.6266 0.30988 23.67 0.42381 25.488 0.15248 1.0015-0.14949 1.5974-0.13888 1.5974 0.02845 0 0.15941 0.9508 0.21696 2.3613 0.14293l2.3613-0.12394-1.8e-4 0.93769-1.6e-4 0.93769-17.147 0.08311c-14.511 0.07033-17.216 0.14508-17.593 0.48615-0.24495 0.22167-0.54128 0.40304-0.65853 0.40304-0.69172 0-3.1972 0.91622-3.0697 1.1225 0.08418 0.1362-0.383 0.6365-1.0382 1.1118-0.89055 0.646-1.1912 1.0516-1.1912 1.6068 0 0.68888-0.09553 0.74878-1.3196 0.82732-0.92645 0.05945-1.3196 0.20428-1.3196 0.48615 0 0.22081-0.12501 0.40148-0.2778 0.40148-0.15279 0-0.2778 0.1771-0.2778 0.39355 0 0.21646-0.09376 0.44599-0.20835 0.51007-0.11459 0.06408-0.04187 0.07451 0.16162 0.02315 0.20348-0.05135 1.7349-0.09337 3.4031-0.09337 2.0608 0 3.0108-0.09786 2.9636-0.30524-0.08721-0.38328 2.7534-1.1511 3.4457-0.93135 0.34987 0.11105 0.51302 0.02435 0.51302-0.2726 0-0.23948 0.18752-0.43542 0.4167-0.43542s0.4167 0.10676 0.4167 0.23724 0.33551 0.59927 0.74558 1.0418c0.68048 0.73428 0.93764 0.81326 2.9454 0.90468 2.1118 0.09616 2.1926 0.07739 2.0191-0.46923-0.33848-1.0664 1.5052-1.4699 1.9089-0.41778 0.0888 0.23116 0.091 0.53402 5e-3 0.67302-0.087 0.14079 0.56472 0.25273 1.4714 0.25273 0.8952 0 1.7464 0.11289 1.8916 0.25087 0.14515 0.13798 2.7549 1.7191 5.7994 3.5137l5.5355 3.2628 1.2437-1.5597 1.4128 0.90658c0.77703 0.49862 1.4128 1.0052 1.4128 1.1257 0 0.45648 0.96307 0.57918 1.2684 0.16161 0.43056-0.58883 1.0216-0.37812 6.8595 2.4455 4.483 2.1683 5.2342 2.4411 8.2322 2.9895 1.8389 0.33635 3.5801 0.81547 3.9342 1.0826 0.57468 0.43348 0.60249 0.55823 0.29179 1.3083-0.31225 0.75382-0.26819 0.93956 0.48485 2.044 0.5214 0.76466 0.74825 1.3578 0.61223 1.6009-0.24286 0.43398-0.0515 2.8031 0.26096 3.2308 0.27194 0.37226 1.3912 4.1404 1.3912 4.6837 0 0.27337-0.36089 0.49814-0.98897 0.61597-0.77922 0.14618-0.94647 0.28142-0.78861 0.63764 0.29612 0.66821 0.2274 1.3761-0.31288 3.2232-0.426 1.4564-0.76517 1.9332-2.7664 3.8892-2.1492 2.1007-2.8163 2.5259-11.56 7.3687l-9.2795 5.1393-92.508 0.1018zm12.64-1.3564c0-1.5233 1.3975-1.4109 1.4861 0.11951 0.03715 0.6419 0.15767 0.72223 1.0836 0.72241 0.86651 1.6e-4 1.0418-0.096 1.0418-0.57169 0-0.31455-0.35958-1.0334-0.79907-1.5974-1.0404-1.3352-1.4233-2.5478-1.4233-4.5071 0-1.4699-0.05259-1.603-0.68059-1.7231-0.83047-0.15876-0.98622 0.17802-0.98622 2.1324 0 1.0771-0.22015 1.9002-0.82988 3.1025-0.45644 0.90008-0.83147 1.9803-0.83341 2.4005-0.0032 0.68857 0.09244 0.76396 0.96879 0.76396 0.89737 0 0.9723-0.0649 0.9723-0.84212zm13.612 0.28011c0-0.53562-0.03261-0.54064-0.6945-0.10695-0.38198 0.25028-0.6945 0.50319-0.6945 0.56201 0 0.0589 0.31253 0.10695 0.6945 0.10695 0.51194 0 0.6945-0.14774 0.6945-0.56201zm3.3336-0.41029c0-0.79107 0.10485-0.97231 0.56248-0.97231 0.57789 0 1.2535 1.2007 0.95102 1.6901-0.08651 0.13997 0.28763 0.25449 0.83142 0.25449 0.54378 0 0.9887-0.13708 0.9887-0.30463 0-0.16754-0.50247-0.87545-1.1166-1.5731-1.2699-1.4427-2.0774-3.7494-1.8655-5.3292 0.13173-0.98212 0.10733-1.0159-0.7327-1.0146l-0.86897 1e-3 -0.0034 1.9612c-0.0028 1.5513-0.13884 2.1908-0.65147 3.0596-0.38515 0.65277-0.52822 1.1384-0.35266 1.1969 0.16248 0.0542 0.3758 0.52692 0.47403 1.0506 0.15445 0.82331 0.28716 0.95209 0.9811 0.95209 0.73193 0 0.80249-0.0855 0.80249-0.97231zm13.664 0.0694c0.06508-0.67488 0.23636-0.92415 0.67839-0.98721 0.48161-0.0687 0.62571 0.0988 0.77654 0.90286 0.16148 0.86075 0.28809 0.98721 0.98842 0.98721 0.70314 0 0.81406-0.1125 0.89027-0.90286 0.06508-0.67488 0.23636-0.92415 0.67839-0.98721 0.48161-0.0687 0.62571 0.0988 0.77654 0.90286 0.16148 0.86075 0.28809 0.98721 0.98842 0.98721 0.70314 0 0.81406-0.1125 0.89027-0.90286 0.06671-0.69198 0.23304-0.92359 0.7121-0.99162 0.54804-0.0778 0.62505 0.0334 0.62505 0.90285 0 0.9446 0.04527 0.99163 0.9547 0.99163 0.87178 0 0.96226-0.0776 1.0418-0.89338 0.0551-0.56543-0.19339-1.4466-0.6769-2.4005-0.56568-1.1159-0.76396-1.9148-0.76396-3.078v-1.571l-3.5398-0.0796c-1.9469-0.0438-3.6033-0.18241-3.6809-0.30797-0.0776-0.12556-0.14313 0.6036-0.14561 1.6204-0.0052 2.1386-0.74506 3.8936-2.2606 5.3625-0.51129 0.49556-0.92962 1.0015-0.92962 1.1243 0 0.12283 0.42962 0.22331 0.9547 0.22331 0.87404 0 0.96206-0.0763 1.0418-0.90286zm12.449 0.79368c0-0.0601-0.18752-0.18114-0.4167-0.26908-0.22919-0.0879-0.4167-0.0388-0.4167 0.10917 0 0.148 0.18752 0.26909 0.4167 0.26909s0.4167-0.0491 0.4167-0.10918zm7.7784-0.34154c0-0.38581-0.07001-0.39713-0.48615-0.0786-0.26738 0.20466-0.53824 0.40748-0.6019 0.45072-0.06366 0.0432 0.15511 0.0786 0.48615 0.0786 0.37002 0 0.6019-0.17365 0.6019-0.45072zm3.4542-0.52158c0.29525-1.5738 1.5462-1.2183 1.5462 0.43942 0 0.40148 0.19653 0.53288 0.79706 0.53288 0.69781 0 0.81698-0.1228 0.9571-0.98622 0.11905-0.73361-0.01394-1.3134-0.51926-2.2638-0.54306-1.0214-0.67929-1.6871-0.67929-3.3197v-2.0421h-3.003l0.14667 1.0935c0.21365 1.5929-0.1385 3.4612-0.85088 4.5144-0.52275 0.77284-0.58283 1.0874-0.37472 1.9622 0.21307 0.89559 0.35657 1.0418 1.0227 1.0418 0.66565 0 0.80061-0.13708 0.9573-0.9723zm5.5744 0.69449c-0.0944-0.15278-0.28933-0.2778-0.4331-0.2778-0.14377 0-0.2614 0.12502-0.2614 0.2778 0 0.1528 0.19489 0.27781 0.43308 0.27781 0.23821 0 0.35584-0.12501 0.26141-0.27781zm7.6396 9e-3c0-0.148-0.18752-0.19714-0.41671-0.10919-0.22918 0.0879-0.41671 0.20904-0.41671 0.26909 0 0.0601 0.18753 0.10917 0.41671 0.10917 0.22919 0 0.41671-0.12108 0.41671-0.26907zm3.732-0.70323c0.29525-1.5738 1.5462-1.2183 1.5462 0.43942 0 0.40162 0.19653 0.53288 0.7979 0.53288 0.71817 0 0.81593-0.11282 0.97844-1.1291 0.13807-0.86343 0.0584-1.3047-0.3387-1.8752-0.7811-1.1222-1.1598-2.468-1.1598-4.1211v-1.4865h-2.3858v1.9104c0 1.5238-0.14878 2.1972-0.73523 3.3275-0.55178 1.0635-0.69561 1.6612-0.57644 2.3955 0.13703 0.84446 0.26366 0.97842 0.92491 0.97842 0.65564 0 0.79245-0.14023 0.94854-0.9723zm6.2689 0.77393c-0.22919-0.085-0.63548-0.26703-0.90286-0.40454-0.36046-0.1854-0.48615-0.13979-0.48615 0.17643 0 0.30046 0.2668 0.41999 0.90286 0.40455 0.49656-0.0121 0.71534-0.0914 0.48615-0.17644zm-91.185-2.5824c-0.19514-0.31247-0.39459-0.42066-0.45292-0.24568-0.05733 0.17197 0.06728 0.42131 0.27689 0.55408 0.54706 0.34655 0.5652 0.31476 0.17603-0.3084zm-1.0002-3.9559-0.09413-1.5974-1.9894 4e-3c-1.0942 2e-3 -2.1252 0.0961-2.2911 0.20836-0.23961 0.16207-0.94836 1.7916-0.94836 2.1804 0 0.0482 0.25154 0.22229 0.55897 0.38682 0.46561 0.24919 0.6671 0.17346 1.2063-0.45344 0.44868-0.52162 0.79842-0.69463 1.1396-0.56372 0.48415 0.18578 0.49584 0.78764 0.03631 1.8706-0.12599 0.29694 0.01948 0.53368 0.45043 0.73303 0.53784 0.2488 0.74419 0.1808 1.331-0.43859 0.6061-0.63971 0.68252-0.93635 0.60038-2.3304zm103.69 2.034c-0.45879-1.0808-0.44685-1.683 0.0371-1.8687 0.34026-0.13058 0.68898 0.0399 1.1297 0.55222 0.56995 0.66262 0.71422 0.70614 1.3622 0.4109 0.72267-0.32927 0.76417-0.6539 0.25371-1.9842-0.0976-0.25431 0.0596-0.53963 0.39678-0.72006 0.47263-0.25295 0.64834-0.17256 1.1438 0.52329 0.51024 0.71656 0.66871 0.7842 1.2339 0.52669 0.58241-0.26537 0.61726-0.37813 0.34222-1.1068-0.3051-0.8083-0.31257-0.81058-1.9791-0.60593-0.92008 0.11298-2.5046 0.20285-3.5211 0.1997l-1.8482-6e-3 -0.11674 2.2377c-0.0642 1.2307-4e-3 2.387 0.13304 2.5694 0.38149 0.50658 1.6773-0.15223 1.4327-0.72842zm-110.32-2.607c0.10186-0.26545-0.08625-0.33118-0.69293-0.24214-0.5936 0.0871-0.72494 0.19053-0.45735 0.36011 0.54442 0.34499 0.99016 0.29928 1.1503-0.11797zm118.94-1.7251c0.67634-0.51168 0.38026-0.8191-0.79343-0.82378-0.8838-3e-3 -0.90026 0.0168-0.50416 0.6214 0.47694 0.72805 0.58126 0.74432 1.2976 0.20238zm-129.91-3.7999c0.51815-0.51815 0.39339-1.277-0.24318-1.479-0.3171-0.10064-0.59837-0.14032-0.62505-0.08817-0.026683 0.05215-0.20269 0.37105-0.39112 0.70866-0.28942 0.51856-0.26786 0.6574 0.1389 0.89441 0.6261 0.36481 0.72284 0.36171 1.1205-0.03591zm130.72-0.083339c-0.0879-0.22919-0.20903-0.4167-0.26908-0.4167-0.0601 0-0.10918 0.18752-0.10918 0.4167 0 0.22919 0.12108 0.4167 0.26908 0.4167 0.14799 0 0.19712-0.18752 0.10918-0.4167zm3.2332 0 0.6945-0.39702-0.72994-0.0098c-0.40147-0.0054-0.88556 0.17766-1.0758 0.40685-0.46013 0.55441 0.14137 0.55441 1.1112 0zm1.9404-3.4262c2e-3 -0.39627-0.1307-0.60327-0.343-0.53258-0.42076 0.1401-0.59798 0.90537-0.35579 1.5365 0.15278 0.39816 0.21313 0.40553 0.43594 0.05322 0.14223-0.2249 0.26052-0.70061 0.26285-1.0571zm-135.74-0.8248c-0.022797-0.4935-0.12328-1.1105-0.2233-1.3712-0.28054-0.73108-0.69809 0.1037-0.70331 1.4061-0.00347 0.86557 0.085715 1.0436 0.4819 0.96224 0.3534-0.07261 0.47483-0.34491 0.4447-0.99716z" fill="#ff1fec" stroke-width=".2778"/><g fill="#fdfd55" stroke-width=".99068"><path class="cls-1" d="m103.82 110.14c2.2488 0 4.0717-1.8229 4.0717-4.0717 0-2.2488-1.8228-4.0717-4.0717-4.0717-2.2488 0-4.0717 1.8229-4.0717 4.0717 0 2.2488 1.8229 4.0717 4.0717 4.0717z"/><path class="cls-1" d="m121.08 110.14c2.2488 0 4.0717-1.8229 4.0717-4.0717 0-2.2488-1.8228-4.0717-4.0717-4.0717-2.2488 0-4.0717 1.8229-4.0717 4.0717 0 2.2488 1.8228 4.0717 4.0717 4.0717z"/><path class="cls-1" d="m86.977 110.14c2.2488 0 4.0717-1.8229 4.0717-4.0717 0-2.2488-1.8228-4.0717-4.0717-4.0717-2.2488 0-4.0717 1.8229-4.0717 4.0717 0 2.2488 1.8229 4.0717 4.0717 4.0717z"/><path class="cls-1" d="m65.36 110.14c2.2488 0 4.0717-1.8229 4.0717-4.0717 0-2.2488-1.8228-4.0717-4.0717-4.0717-2.2488 0-4.0717 1.8229-4.0717 4.0717 0 2.2488 1.8229 4.0717 4.0717 4.0717z"/><path class="cls-1" d="m49.148 110.14c2.2488 0 4.0717-1.8229 4.0717-4.0717 0-2.2488-1.8228-4.0717-4.0717-4.0717-2.2488 0-4.0717 1.8229-4.0717 4.0717 0 2.2488 1.8229 4.0717 4.0717 4.0717z"/><path class="cls-1" d="m33.009 110.14c2.2488 0 4.0717-1.8229 4.0717-4.0717 0-2.2488-1.8228-4.0717-4.0717-4.0717-2.2488 0-4.0717 1.8229-4.0717 4.0717 0 2.2488 1.8229 4.0717 4.0717 4.0717z"/></g></svg>
</g>
    <g id="waryes:infantry"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }

      .cls-3 {
        fill: none;
      }</style>
 </defs>
 <g stroke-width="1.8627">
  <path class="cls-3" d="m79.016 55.506c-0.44706-0.46568-1.2108-0.48431-1.6765-0.01862-0.46568 0.44706-0.48431 1.2108-0.01862 1.6765l4.5823 4.7314c0.22353 0.24216 0.54019 0.35392 0.83823 0.35392 0.29804 0 0.59608-0.11177 0.81961-0.33529 0.46568-0.44706 0.48431-1.2108 0.03721-1.6765z"/>
  <path class="cls-3" d="m63.555 48.409c-0.42843-0.48431-1.7323 0.13039-1.3598 0.54019s2.3284 2.6078 2.5147 2.8127c0.18628 0.22353 0.37255 0.31667 0.95 0.31667 0.57745 0 1.0431-0.39118 0.31666-1.099-0.7451-0.70784-1.9931-2.0676-2.4216-2.552z"/>
  <path class="cls-2" d="m95.259 110.12c0-1.7137-0.57744-10.692-1.9745-18.925-1.3784-8.2333-3.502-15.535-0.65196-16.578 0 0-2.4216-2.9618-4.5078-3.949-2.1049-0.98726-4.9735-1.4343-7.6745-4.1912-2.6823-2.7569-5.4951-5.9049-5.4951-5.9049s-0.50294 3.6882 0.44706 5.4578c0.93137 1.7696 0.93137 3.6323-1.602 5.1784-2.5333 1.5461-7.1157 3.2039-8.6059 0.11177-1.4902-3.0921-2.4402-10.58-0.65196-15.2 0 0-1.1922 0.18627-2.4216-1.2108-1.2294-1.3784-1.7696-2.1794-2.2353-2.8314-0.44706-0.65196-1.1176-0.68921-2.1422-0.26078-1.0431 0.4098-3.6323 1.6206-5.9794-0.50294-2.4588-2.2353-4.3961-3.6323-3.5951-5.7745 0.78235-2.1421 1.7882-2.4774 2.5147-2.1049 0 0-0.18627-0.89412-1.3039-0.89412-1.1176 0-2.5706 3.6323-2.5706 8.2333s5.2716 6.0725 7.9725 6.6686c2.7196 0.59608 7.1157 1.2853 7.1157 4.1725 0 1.9372-0.67058 1.5461-0.67058 4.5451s1.3971 4.8804 1.3971 4.8804-1.7137 28.947-1.7696 30.717c-0.05588 1.7696 0.80098 3.4088 1.7696 4.3774 0 0 1.3598 21.068 2.2167 24.905 0 0-1.7882 5.4578-7.1529 13.058-1.0245 1.6206-0.91274 5.6255 2.6078 5.6255 3.5206 0 7.9912-6.8176 9.947-9.5186 1.9559-2.6823 2.4216-3.3157 2.4216-4.6382 0-1.3226-0.57745-2.4216-0.57745-2.4216v-7.4882c0-0.78235 1.5274-4.2657 1.5274-11.009 0-6.7431-1.0059-10.115-1.0059-10.115s3.2598-13.598 4.4147-13.598c1.1549 0 6.147 15.032 7.6 23.489 1.4716 8.4755 2.6637 19.671 2.6637 23.545 0 1.6578 1.397 4.4706 1.6578 6.3333 0.26078 1.8627 2.7382 5.4019 6.9294 5.4019 4.1912 0 1.6765-9.5372-0.65196-13.672v-25.911z"/>
  <path class="cls-2" d="m69.404 25.423c-2.6823 0.46568-6.0725 0.42843-11.381 5.3088 0 0 4.6941 1.3039 5.8304 4.2843 0 0 1.248-0.78235 5.3461 3.4461 4.098 4.2284 24.029 24.216 24.029 24.216s1.0059-1.3039 1.602-1.7882c0.59608-0.48431 2.7382-0.29804 3.3343-0.29804 0.59606 0 5.7931-1.0804 5.7931-3.9118 0-2.8314-4.601-20.229-5.2157-22.446-0.6147-2.2167-1.7696-4.0608-5.8304-5.8304-4.0608-1.7696-10.506-2.1421-9.8725-10.338 0 0 4.3588-1.3039 4.3588-4.2843 0-2.9804-2.3657-3.8372-2.3657-3.8372s1.4529-9.2764-8.1961-9.2764c-8.2706 0-8.0098 6.8921-8.0098 9.2764 0 0-1.1735 1.3598-1.1735 3.8372 0 2.1422 2.0676 3.2225 2.9804 3.3716 0.93137 0.14902 2.3843 1.4529 2.3843 3.0549s-0.91274 4.75-3.5951 5.2157z"/>
  <path class="cls-1" d="m106.96 79.964 2.2167-2.2725-0.85687-1.0245-2.1235 2.0863s-1.3039-1.1922-1.602-1.3971c-0.65197-0.48431-0.96863 0-0.96863 0l-5.998-5.8304s0.16764-1.3598-0.27941-1.6951c-0.44705-0.3353-31.052-30.94-31.685-31.518-1.3225-1.3039-3.2225-0.91274-3.2225-0.91274s-0.54019-2.4402-2.8872-3.4647c-2.3284-1.0431-15.125-7.4323-15.125-7.4323l-3.5392 10.897v0.18627l18.702 6.1098s-8.699 1.9186-9.1647 2.0118c-0.46568 0.09313-0.09314 0.70784 0.33529 1.2667 0.42843 0.55882 2.4774 2.6265 2.8127 2.85 0.33529 0.22353 1.0245 0.13039 1.6392 0 0.6147-0.14902 4.6382-0.93137 4.6382-0.93137s3.4647 4.1725 4.0235 4.5823c0.55882 0.42843 3.0363 0.14902 4.0794-0.46568 0 0-2.0676 4.7686-2.0676 8.0098 0 3.2412 0.37255 9.649 2.2912 9.649 1.9186 0 5.4764-1.9745 4.9549-3.1294-0.52157-1.1735-1.5461-8.5313 0.55882-11.139 0 0 8.3823 8.5686 9.1274 9.1833 0.7451 0.6147 5.0108 2.5333 6.1284 2.9245 1.1176 0.39118 1.6578 0.87549 2.2912 1.5088 0.63334 0.63333 3.0363 3.0735 3.3343 3.2412 0.29804 0.16765 1.1176 0 1.1176 0l6.0539 5.8117s-0.16765 0.94999 0.40981 1.6206c0.57744 0.67059 1.9559 2.0304 2.4029 2.4029 0.46569 0.37255 1.3598 0.50294 2.0676-0.3353 0.70784-0.83824 1.2667-1.5274 0.93138-2.0118-0.33529-0.48431-0.63334-0.74509-0.63334-0.74509zm-41.297-27.885c-0.57745 0-0.76372-0.09314-0.95-0.31667-0.18627-0.2049-2.1421-2.4029-2.5147-2.8127s0.93137-1.0431 1.3598-0.54019c0.42843 0.48431 1.6765 1.8627 2.4216 2.552 0.72647 0.70784 0.27941 1.099-0.31666 1.099zm17.92 9.8353c-0.22353 0.22353-0.52156 0.33529-0.8196 0.33529-0.29804 0-0.61471-0.11177-0.83824-0.35392l-4.5823-4.7314c-0.44706-0.46568-0.44706-1.2108 0.01862-1.6765 0.46568-0.44706 1.2294-0.44706 1.6765 0.01862l4.5823 4.7314c0.44706 0.46568 0.44706 1.2294-0.0372 1.6765z"/>
 </g>
</svg>
</g>
    <g id="waryes:jet"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }</style>
 </defs>
 <polygon class="cls-1" transform="matrix(1.427 0 0 1.427 -31.342 -29.16)" points="33.39 55.49 47.56 66.4 33.16 72.34 25.97 55.49"/>
 <polygon class="cls-1" transform="matrix(1.427 0 0 1.427 -31.342 -29.16)" points="32.96 83.21 52.53 83.21 32.13 99.71 24.83 99.71"/>
 <g stroke-width="1.427">
  <path class="cls-2" d="m48.026 89.577h41.596s-42.024 39.67-42.581 40.24c-0.55652 0.57079-1.5269 1.5554-2.8967 1.5554h-13.199c-0.44236 0-1.3413-0.0286-0.55652-1.7124 0.78483-1.6838 17.637-40.083 17.637-40.083z"/>
  <path class="cls-2" d="m88.138 64.719h-40.64s-16.61-37.501-17.166-38.828c-0.57078-1.3413 0.21404-1.5268 0.91326-1.5268h12.743c1.2415 0 2.2689 0.75629 2.6113 1.1273 0.34247 0.37101 41.553 39.241 41.553 39.241z"/>
  <path class="cls-2" d="m146.22 86.695c1.056 1.2272 0.42807 2.0691 0 2.4544-0.42809 0.38528-7.834 6.3785-17.809 6.3785h-40.84l9.3038-8.8329h-79.824v-9.9459l21.975-9.0755h58.705c2.383 0 16.681 0.55652 28.297 7.7912 1.6553 0.38528 12.372 3.125 20.192 11.23zm-29.438-8.89c0.74203-0.02853 1.3271-0.6564 1.2985-1.4127-0.0286-0.74202-0.67067-1.3413-1.4127-1.2985-12.315 0.49944-16.481-3.4247-16.567-3.5246-0.51371-0.52798-1.3699-0.54225-1.9121-0.04282-0.54224 0.51371-0.55652 1.3699-0.04279 1.9121 0.1855 0.1855 4.338 4.395 16.367 4.395 0.72776 0 1.484-0.01427 2.2546-0.04281z"/>
  <path class="cls-1" d="m73.241 117.77c0.74202 0 1.3556 0.61361 1.3556 1.3556 0 0.74203-0.61359 1.3556-1.3556 1.3556h-12.115l2.8825-2.7112z"/>
  <path class="cls-1" d="m73.241 37.907c0.74202 0 1.3556-0.61359 1.3556-1.3556s-0.61359-1.3556-1.3556-1.3556h-12.115l2.8825 2.7112z"/>
 </g>
</svg>
</g>
    <g id="waryes:mlrs"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }</style>
 </defs>
 <g stroke-width="1.4704">
  <path class="cls-2" d="m108.7 118.38c-0.76463 0.58819-1.6322 1.044-2.588 1.3234h12.469c-0.95579-0.27939-1.8233-0.72053-2.588-1.3234h-7.308z"/>
  <path class="cls-2" d="m91.848 118.38c-0.76462 0.58819-1.6322 1.044-2.588 1.3234h12.469c-0.95577-0.27939-1.8233-0.72053-2.588-1.3234h-7.308z"/>
  <path class="cls-2" d="m75.012 118.38c-0.76462 0.58819-1.6322 1.044-2.588 1.3234h12.469c-0.95578-0.27939-1.8233-0.72053-2.588-1.3234h-7.308z"/>
  <path class="cls-2" d="m58.16 118.38c-0.76462 0.58819-1.6322 1.044-2.588 1.3234h12.469c-0.95578-0.27939-1.8233-0.72053-2.588-1.3234h-7.308z"/>
  <path class="cls-2" d="m41.324 118.38c-0.76462 0.58819-1.6322 1.044-2.588 1.3234h12.469c-0.95578-0.27939-1.8233-0.72053-2.588-1.3234h-7.308z"/>
  <path class="cls-2" d="m139.81 91.971c-2.8085-0.19115-16.836-0.48524-17.998-0.48524s-2.4115-0.64699-5.8817-0.95578c0 0-2.8085-2.3674-6.014-2.3674h-8.5285v0.98519h-4.4848v1.3822h-17.248v-2.7644h4.4554l2.2498-6.9845-1.4851-0.3235v-0.92637h1.691l0.27938-1.5587-20.101-2.3527-3.9113-5.8523 5.2935-3.1761 2.7203 0.36761v-1.941l8.5285-4.9259 29.438-10.705-8.4697-22.498-25.571 9.5137-0.3529-0.61758s-54.582 20.13-55.185 20.38c-0.60288 0.23527-1.838 1.6763-1.0734 3.6614 0.74992 1.9851 0.74992 2.7056 1.7498 2.5144l0.49995 1.6028s-0.70581-0.19116-0.42642 1.0293c0.27938 1.2205 0.77933 2.7056 1.8086 2.4703l0.51465 1.4998s-0.63229 0-0.42643 0.82344c0.19116 0.82344 0.58817 2.588 1.6469 2.3968 0 0 0.89696 2.4556 1.0734 2.7791 0.17645 0.3382 0.63228 0.17645 0.63228 0.17645l1.5587 4.0731 3.7202-1.4704s1.4263 2.6762 2.1174 2.6762 6.0729-1.9116 6.0729-1.9116l1.7792 2.588s-4.029 0.72051-5.0877 0.94108c-1.0734 0.20586-2.2645 2.1909 0.54406 5.617h-13.116v0.74992l-13.425 0.55876v2.1468h-3.4261v3.4114s-3.4408 3.2202-3.8231 3.6614c-0.38231 0.44113-0.92637 3.8672 2.4997 3.8672h4.0437v1.2793l1.8086 1.9116v-2.0145h4.2642l0.86755 4.1466s2.5144 2.1468 5.9405 4.6613c0.10293 0.0735 0.22056 0.16174 0.3382 0.24997 0.10293 0.0735 0.22056 0.16175 0.3235 0.23528 0.16175 0.11765 0.3235 0.23526 0.49994 0.3529 0.07352 0.0589 0.16175 0.11766 0.23527 0.17645 0.38231 0.27939 0.77932 0.54405 1.1763 0.82343 0 0 0.01472 0 0.02942 0.0147 0.20586 0.14705 0.42642 0.29409 0.63228 0.42644 0.0441 0.0294 0.10293 0.0589 0.14704 0.10291 0.6764 0.44112 1.3528 0.88225 2.0292 1.3087 0.02942 0.0146 0.05881 0.0294 0.08824 0.044 0.95578 0.58816 1.8969 1.1469 2.8379 1.6469 0.02942 0.0148 0.07352 0.0294 0.10293 0.0589 0.52936 0.27938 1.044 0.52936 1.5734 0.76462-0.88226-0.74993-1.6175-1.6763-2.1027-2.7497-0.27938-0.16174-0.57347-0.32347-0.85285-0.48524-0.36761-0.22056-0.74992-0.44112-1.1028-0.67639-0.44113-0.27937-0.86755-0.55876-1.2793-0.83814-0.3529-0.23527-0.6911-0.47053-1.0293-0.70582-0.52936-0.36761-1.0293-0.7352-1.5145-1.0881-0.41172-0.3088-0.80874-0.60288-1.1763-0.89695-0.0441-0.0294-0.08824-0.0735-0.13234-0.10291-0.47054-0.36762-0.89696-0.70581-1.2499-0.99989-0.88226-0.72052-1.3969-1.1764-1.3969-1.1764 0.72051 0.16175 1.3969 0.32349 2.0439 0.47055 0.49994 0.11765 0.98519 0.24996 1.441 0.36759 2.6174 0.69111 4.4554 1.3675 5.6612 1.8822 0.52936-3.7937 3.7643-6.7346 7.6903-6.7346 4.2348 0 7.6756 3.3967 7.7786 7.6168h1.2793c0.10293-4.2201 3.5437-7.6168 7.7786-7.6168 4.2348 0 7.6756 3.3967 7.7786 7.6168h1.2793c0.10293-4.2201 3.5437-7.6168 7.7786-7.6168 4.2348 0 7.6756 3.3967 7.7786 7.6168h1.2793c0.10293-4.2201 3.5437-7.6168 7.7786-7.6168s7.6756 3.3967 7.7786 7.6168h1.2793c0.10289-4.2201 3.5437-7.6168 7.7786-7.6168 4.2348 0 7.6756 3.3967 7.7786 7.6168h1.2793c0.10291-4.2201 3.5437-7.6168 7.7786-7.6168 3.9848 0 7.2492 3.0291 7.705 6.8963 2.9556-1.4557 6.2052-4.6172 6.2052-4.6172 0.35292 0.38233 0.79404 0.67641 1.2499 0.89696 1.5146 0.74993 3.3379 0.83815 3.3379 0.83815l-1.3675 0.69109-1.6175 0.82345-1.5734 0.79403-1.4263 0.72051-1.4704 0.74992-1.5145 0.76464-1.4557 0.7352-0.49995 0.24998c-0.20585 0.91166-0.57346 1.7645-1.0734 2.5291 0.45584-0.24997 0.92635-0.49994 1.441-0.77933 0.044-0.0294 0.0883-0.0441 0.13233-0.0735 2.338-1.2646 5.1171-2.8085 7.5433-4.1466 2.9703-1.6322 5.4259-2.985 5.9111-3.2202 1.1469-0.57347 4.426-2.6909 4.426-9.0872h2.1468s-0.67641-6.1317-9.0726-7.2492z"/>
  <circle class="cls-1" cx="36.545" cy="112.26" r="6.0435"/>
  <path class="cls-1" d="m53.396 118.29c3.3379 0 6.0435-2.7056 6.0435-6.0434 0-3.3379-2.7056-6.0435-6.0435-6.0435s-6.0435 2.7056-6.0435 6.0435c0 3.3378 2.7056 6.0434 6.0435 6.0434z"/>
  <path class="cls-1" d="m70.233 118.29c3.3379 0 6.0435-2.7056 6.0435-6.0434 0-3.3379-2.7056-6.0435-6.0435-6.0435s-6.0435 2.7056-6.0435 6.0435c0 3.3378 2.7056 6.0434 6.0435 6.0434z"/>
  <circle class="cls-1" cx="87.084" cy="112.26" r="6.0435"/>
  <circle class="cls-1" cx="103.92" cy="112.26" r="6.0435"/>
  <path class="cls-1" d="m120.76 118.29c3.3379 0 6.0434-2.7056 6.0434-6.0434 0-3.3379-2.7056-6.0435-6.0434-6.0435s-6.0435 2.7056-6.0435 6.0435c0 3.3378 2.7056 6.0434 6.0435 6.0434z"/>
 </g>
</svg>
</g>
    <g id="waryes:mortar"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }</style>
 </defs>
 <g stroke-width="1.7354">
  <path class="cls-2" d="m58.731 136.31h-46.3c-11.002 0-10.725 10.169-10.725 10.169h67.089c0-8.4165-7.7224-10.169-10.082-10.169z"/>
  <path class="cls-2" d="m110.51 52.283-0.85033-0.67679 5.0499-6.2647s0.81563 0.29501 1.8048-0.88504c0.98916-1.1801 10.187-13.015 10.187-13.015l-0.62473-0.52061 8.4512-10.586s0.81563 0.26031 1.2321-0.24295c0.39914-0.4859 2.0651-2.551 2.256-2.8287s0.4859-0.97181-0.43384-1.7701c-0.91975-0.78092-8.8504-7.0629-9.3189-7.41-0.46855-0.34707-1.2495-0.81562-1.9089 0-0.65944 0.81562-1.6833 2.1171-2.0824 2.6551-0.39914 0.53796-0.0867 1.718-0.0867 1.718l-7.7398 9.4751s-0.90239-0.10412-1.6833 0.81562c-0.78091 0.91975-9.6313 12.13-10.013 12.633-0.38178 0.50326-0.59002 1.0933-0.53796 1.961l-14.23 18.013-3.9219-4.6161s-1.4924 0.97181-0.98916 4.6161l-20.547 26.031-5.987-5.3449-0.90239 6.5423 1.2668 1.0065s-3.679 1.2668-2.4469 5.6226c0.62473 2.2733 2.551 3.1063 3.9219 3.2451l-32.712 41.041h17.145l37.553-47.358 4.3905 1.6312s1.5271-1.1974 0.9371-4.7723l19.506-24.469c-0.0174-0.20824-0.0521-0.39913-0.0521-0.62473 0-2.4469 1.3883-4.564 3.384-5.6747z"/>
  <path class="cls-1" d="m135.36 146.41h13.536s-0.17354-2.0304-1.9262-2.0304h-1.4924c-0.43385 0-1.4924-0.29502-2.1692-2.4989-0.50325-1.6312-14.421-44.599-21.744-67.228 0.31237-0.64209 0.38179-1.3883 0.17354-2.1345-0.2256-0.79827-0.76356-1.423-1.4404-1.8048-1.9262-5.935-3.141-9.7181-3.141-9.7181 0.7115-0.81562 1.128-1.8742 1.128-3.0369 0-2.5683-2.0824-4.6681-4.6681-4.6681s-4.6681 2.0824-4.6681 4.6681c0 2.2907 1.6486 4.1996 3.8352 4.5987 0 0 1.2842 3.7657 3.2972 9.666-0.26031 0.60738-0.31237 1.3015-0.1041 1.9957 0.2256 0.78092 0.74621 1.3883 1.3883 1.7701 7.6703 22.49 22.334 65.475 22.647 66.395 0.39913 1.2321-0.1909 2.0304-0.69415 2.0304h-2.0651c-1.7007 0-1.8916 2.0304-1.8916 2.0304z"/>
 </g>
</svg>
</g>
    <g id="waryes:nato"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }</style>
 </defs>
 <path class="cls-1" d="m68.182 38.998c-13.696 3.0282-24.462 13.835-27.226 27.434l-2.7365 0.83345c2.5976-15.586 15.002-27.976 30.754-30.81l-0.77789 2.5559z" stroke-width="1.3891"/>
 <path class="cls-1" d="m84.282 38.998c13.696 3.0282 24.462 13.835 27.226 27.434l2.7365 0.83345c-2.5976-15.586-15.002-27.976-30.754-30.81l0.77789 2.5559z" stroke-width="1.3891"/>
 <g transform="matrix(1.3891 0 0 1.3891 -29.345 -30.581)">
  <path class="cls-1" d="m70.21 99.51c-9.86-2.18-17.61-9.96-19.6-19.75l-1.97-0.6c1.87 11.22 10.8 20.14 22.14 22.18l-0.56-1.84z"/>
  <path class="cls-1" d="m81.8 99.51c9.86-2.18 17.61-9.96 19.6-19.75l1.97-0.6c-1.87 11.22-10.8 20.14-22.14 22.18l0.56-1.84z"/>
 </g>
 <polygon class="cls-2" transform="matrix(1.3891 0 0 1.3891 -29.345 -30.581)" points="76.39 106.98 84.15 82.77 110.12 74.86 76.19 74.93 82.36 68.58 107.41 74.16 83.78 66.56 75.63 40.2 75.63 74.58 69.36 68.04 74.83 43.1 67.25 66.71 41.17 75.06 75.18 75.11 69.12 81.01 43.77 75.56 67.1 83.16 75.75 109.52 75.51 75.27 81.92 81.45"/>
 <g stroke-width="1.3891">
  <rect class="cls-1" x="1.5618" y="72.267" width="20.183" height="2.2781"/>
  <rect class="cls-1" x="129.36" y="72.267" width="18.753" height="2.2781"/>
  <rect class="cls-1" transform="rotate(-90)" x="-19.648" y="74.572" width="15.502" height="2.2781"/>
  <rect class="cls-1" transform="rotate(-90)" x="-143.05" y="75.156" width="15.322" height="2.2781"/>
 </g>
</svg>
</g>
    <g id="waryes:pact"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }</style>
 </defs>
 <polygon class="cls-2" transform="matrix(1.7525 0 0 1.7525 -56.179 -57.056)" points="62.89 63.11 32.73 65.51 55.81 85.65 48.76 115 75 99.29 101.24 115 94.19 85.65 117.27 65.51 87.11 63.11 75 35"/>
 <g transform="matrix(1.7525 0 0 1.7525 -56.179 -57.056)">
  <polygon class="cls-1" points="66.32 73.13 63.22 78.85 58.87 76.59 62.01 70.75"/>
  <path class="cls-1" d="m64.2 78.85 2.93-5.17 1.57 0.74s3.29-1.2 3.7-1.3 0.41 0.09 0 0.36-2.14 1.56-2.39 1.71-0.68 2.33 1.15 2.33c1.54 0 3.5-1.37 3.95-1.55s1.05 0.18 1.99 0.99 4.89 3.93 5.25 4.21-0.02 1.82-0.96 1.07-5.23-4.06-5.47-4.25-0.85-0.09-0.19 0.56 4.08 3.25 4.55 3.61-0.16 1.7-1.03 1-4.31-3.39-4.63-3.62-0.89 0.07-0.32 0.58 3.61 2.91 3.89 3.12-0.13 1.55-0.92 0.97-1.72-1.39-1.94-1.6 0.02-0.4-0.23-0.68-0.32-0.28-0.45-0.45-0.55 0.3-0.97-0.08-0.92-1.09-1.4-1.09-0.68 0.58-1.04 0.3-0.43-0.65-0.99-0.65-0.62 0.37-0.97 0.37-0.3-0.78-1.12-0.78-1.09 0.82-1.09 0.82l-2.89-1.5z"/>
  <path class="cls-1" d="m67.87 80.17c-0.18 0.24-1.14 1.4-0.18 1.82s1.18-0.71 1.23-0.98 0.03-0.69-0.4-0.91-0.64 0.07-0.64 0.07z"/>
  <path class="cls-1" d="m69.76 80.66c-0.08 0.15-0.48 0.98-0.61 1.27s-0.1 0.84 0.46 1 0.76-0.21 0.94-0.64 0.68-1.32 0.25-1.63-0.86-0.35-1.04 0z"/>
  <path class="cls-1" d="m71.68 81.12c-0.09 0.2-0.7 1.59-0.81 1.95s-0.13 0.75 0.4 0.94 0.84-0.22 0.98-0.59 0.49-1.32 0.56-1.56 0.21-0.55-0.13-0.73-0.79-0.46-1 0z"/>
  <path class="cls-1" d="m73.53 82.08c-0.11 0.28-0.73 1.72-0.83 2.02s-0.07 0.73 0.32 0.88 0.84 0.14 1.03-0.39 0.55-1.55 0.6-1.8 0.14-0.47-0.19-0.71-0.79-0.34-0.92 0z"/>
  <path class="cls-1" d="m75.28 83.36c0.23 0.15 1 0.54 0.75 1.21s-0.62 0.64-1.04 0.49-0.52-0.29-0.34-0.7 0.33-1.19 0.63-1z"/>
  <path class="cls-1" d="m82.71 73.72 2.91 5-2.69 2.11s-6.24-4.86-6.51-5.12-0.56-0.44-0.87-0.44-3.65 1.66-4.24 1.66-1.8-0.71-0.83-1.34 2.81-2.03 3.11-2.22 2.74-1.06 3.28-1.06 3.69 2.01 4.27 2.01 1.55-0.6 1.55-0.6z"/>
  <polygon class="cls-1" points="87.74 70.81 90.9 76.57 86.67 78.88 83.52 73.24"/>
 </g>
 <path class="cls-1" d="m75.069 31.08c26.884 0 48.703 21.714 48.703 48.528 0 26.814-21.802 48.528-48.703 48.528-26.902 0-48.686-21.732-48.686-48.528 0-26.796 21.802-48.528 48.686-48.528zm40.974 49.737 3.2948-2.401h-4.0834l-1.2618-3.8731-1.2618 3.8731h-4.0834l3.2948 2.401-1.2618 3.8731 3.3123-2.401 3.2948 2.401-1.2618-3.8731zm-11.041-1.2093c0-16.474-13.407-29.828-29.916-29.828-16.509 0-29.916 13.354-29.916 29.828 0 16.474 13.389 29.828 29.916 29.828 16.526 0 29.916-13.354 29.916-29.828zm-66.947 1.2093 3.2948-2.401h-4.0834l-1.2618-3.8731-1.2618 3.8731h-4.0834l3.2948 2.401-1.2618 3.8731 3.2948-2.401 3.2948 2.401-1.2618-3.8731z" stroke-width="1.7525"/>
</svg>
</g>
    <g id="waryes:parachute"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }</style>
 </defs>
 <ellipse class="cls-2" cx="75" cy="137.98" rx="10.519" ry="10.11" stroke-width="1.4443"/>
 <g transform="matrix(1.4732 0 0 1.4159 -35.492 -31.195)">
  <path class="cls-2" d="m77.56 23.44c9.36 5.21 12.86 34.84 12.86 34.84s-3.66-3.99-15.37-3.99-14.88 3.99-14.88 3.99 2.93-30.79 13.09-34.87c0.59-0.02 1.19-0.03 1.79-0.03 0.84 0 1.68 0.02 2.51 0.06z"/>
  <path class="cls-2" d="m70.27 23.58c-8.3 5.07-11.89 34.7-11.89 34.7s-4.53-4-14.94-4c-13.22 0-15.83 4-15.83 4 2.57-18.35 20.36-32.87 42.66-34.7z"/>
  <path class="cls-2" d="m79.73 23.58c8.3 5.07 11.89 34.7 11.89 34.7s4.53-4 14.94-4c13.22 0 15.83 4 15.83 4-2.57-18.35-20.36-32.87-42.66-34.7z"/>
  <path class="cls-1" d="m125 61.48-43.29 51.55c-0.49-0.52-1.05-0.98-1.64-1.38l43.29-51.55z"/>
  <path class="cls-1" d="m92.21 61.09-13.82 49.7c-0.65-0.27-1.34-0.46-2.06-0.56l13.82-49.71z"/>
  <path class="cls-1" d="m59.85 60.51 13.81 49.69c-0.72 0.1-1.41 0.28-2.07 0.53l-13.8-49.64 2.06-0.57z"/>
  <path class="cls-1" d="m26.64 60.11 43.23 51.49c-0.61 0.39-1.16 0.84-1.66 1.35l-43.21-51.47 1.64-1.38z"/>
 </g>
</svg>
</g>
    <g id="waryes:recon"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }</style>
 </defs>
 <g stroke-width="1.4556">
  <path class="cls-1" d="m63.257 39.701c6.1428 2.8385 8.4864 7.8605 7.3656 14.731 0 0-4.8619-12.184-19.273-13.61 0 0 5.7644-3.9739 11.907-1.1354z"/>
  <path class="cls-1" d="m87.624 39.701c6.1428-2.8385 11.907 1.1354 11.907 1.1354-14.411 1.4265-19.273 13.61-19.273 13.61-1.1354-6.8707 1.2227-11.893 7.3656-14.731z"/>
  <path class="cls-1" d="m134.12 80.139c0.0873 0.13101 8.7921 13.698-4.5416 23.611-0.33481 0.24746-0.72783 0.36391-1.1063 0.36391-0.5677 0-1.1354-0.26201-1.4993-0.75693-0.61138-0.82973-0.45126-1.9942 0.37846-2.6202 10.466-7.7877 3.9302-18.123 3.6391-18.56-0.5677-0.85883-0.32024-2.0234 0.53859-2.5911 0.85884-0.5677 2.0234-0.32024 2.5911 0.53859z"/>
  <path class="cls-1" d="m45.847 80.139c0.08734 0.13101 8.7921 13.698-4.5271 23.611-0.3348 0.24746-0.72783 0.36391-1.1209 0.36391-0.5677 0-1.1354-0.26201-1.4993-0.75693-0.61137-0.82973-0.45125-1.9942 0.37847-2.6202 10.466-7.7877 3.9303-18.123 3.6391-18.56-0.5677-0.85883-0.32024-2.0234 0.53859-2.5911 0.85883-0.5677 2.0234-0.32024 2.5911 0.53859z"/>
  <path class="cls-2" d="m135.3 66.004c11.616 10.088 12.926 16.434 12.926 25.823 0 9.389-8.9814 26.784-28.298 26.784-19.316 0-24.28-13.625-28.312-18.792-6.0992-7.9187-14.469-8.0061-16.187-8.0061-1.7177 0-10.088 0.08734-16.172 8.0061-4.0322 5.1676-9.0105 18.792-28.312 18.792-19.302 0-28.298-17.41-28.298-26.784s1.3101-15.736 12.912-25.823c11.616-10.088 19.622-17.293 22.33-19.535 2.693-2.2563 6.4922-3.4644 12.329-3.4644s16.216 3.2607 19.71 15.677c0 0 2.0234-2.0816 5.4878-2.0816 3.4644 0 5.4878 2.0816 5.4878 2.0816 3.4936-12.417 13.872-15.677 19.71-15.677 5.8372 0 9.6364 1.2082 12.344 3.4644 2.693 2.2563 10.714 9.4617 22.33 19.535zm5.808 24.164c0-11.995-9.7383-21.733-21.733-21.733s-21.733 9.7383-21.733 21.733c0 11.995 9.7383 21.733 21.733 21.733s21.733-9.7383 21.733-21.733zm-57.658-10.233c0-4.4252-3.5809-8.0061-8.0061-8.0061-4.4252 0-7.9915 3.5809-7.9915 8.0061 0 4.4252 3.5809 7.9915 7.9915 7.9915s8.0061-3.5809 8.0061-7.9915zm-30.19 10.233c0-11.995-9.7383-21.733-21.733-21.733-11.995 0-21.733 9.7383-21.733 21.733 0 11.995 9.7237 21.733 21.733 21.733 12.009 0 21.733-9.7383 21.733-21.733z"/>
 </g>
</svg>
</g>
    <g id="waryes:trained"><?xml version="1.0" encoding="UTF-8"?>
<svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 150 150" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<path d="m73.859 1.99e-5c0.88787-6e-7 1.7757-6e-7 2.7031 0.081485 1.6254 1.0135 3.2176 1.9349 4.7957 2.8799 3.0612 1.8331 6.0799 3.7403 9.1809 5.503 3.0318 1.7233 6.1708 3.2575 9.2127 4.964 2.3256 1.3047 4.5482 2.7922 6.8646 4.1143 1.4231 0.81225 2.977 1.3952 4.4003 2.2072 2.3981 1.3681 4.7088 2.8901 7.1129 4.247 2.2951 1.2954 4.6988 2.3987 6.9892 3.7019 3.0569 1.7393 6.0242 3.6362 9.081 5.3758 1.8796 1.0697 3.8153 2.0638 5.8025 2.9124 1.0449 0.44623 1.2621 1.032 1.2609 2.0699-0.0269 24.643-0.0299 49.286 0.0107 73.929 2e-3 1.0373-0.39561 1.5347-1.1974 1.9845-6.0718 3.4065-12.132 6.8332-18.198 10.251-7.6324 4.3005-15.264 8.6028-22.9 12.896-6.6061 3.7138-13.225 7.4041-19.82 11.138-0.84726 0.47969-1.582 1.1582-2.3688 1.7446-0.88786 0-1.7757 0-2.7031-0.0815-3.3128-1.9787-6.5694-3.9052-9.8636-5.7653-3.5889-2.0264-7.2279-3.9642-10.818-5.989-5.7778-3.2588-11.527-6.5689-17.301-9.8344-3.4227-1.9357-6.8805-3.8094-10.304-5.7431-5.0337-2.8426-10.028-5.7552-15.096-8.5355-0.93046-0.51046-1.3225-0.95598-1.3211-2.037 0.03126-24.655 0.03297-49.309-0.0054-73.964-0.0017-1.0917 0.42967-1.5685 1.2968-2.0535 6.0392-3.3775 12.046-6.8126 18.072-10.214 7.6328-4.3079 15.271-8.6056 22.912-12.899 6.6097-3.7143 13.233-7.4051 19.831-11.139 0.84779-0.47979 1.5831-1.1584 2.3705-1.7448m54.382 40.415c-3.5793-2.0462-7.1499-4.1077-10.74-6.1354-7.6295-4.3097-15.273-8.5945-22.903-12.903-6.0235-3.4016-12.043-6.8113-18.045-10.25-0.86813-0.49745-1.5777-0.51597-2.4511-0.0031-3.3908 1.991-6.8093 3.9353-10.233 5.8691-7.6302 4.3093-15.27 8.6019-22.906 12.901-7.3835 4.1572-14.767 8.3142-22.144 12.468v65.51c0.80312 0.33113 1.5773 0.5589 2.2607 0.94673 4.8598 2.758 9.6863 5.575 14.553 8.3212 4.2868 2.4191 8.6458 4.7113 12.91 7.168 4.7348 2.7276 9.3775 5.6147 14.105 8.3559 1.7444 1.0116 3.6401 1.7584 5.4212 2.7113 1.9211 1.0278 3.8737 2.0362 5.642 3.293 0.81766 0.58113 1.4743 0.8504 2.3087 0.4473 1.1517-0.55642 2.2611-1.2032 3.3732-1.8384 5.554-3.1723 11.089-6.3782 16.658-9.5242 4.9478-2.7951 9.9451-5.5028 14.896-8.2933 6.6024-3.7217 13.165-7.5145 19.788-11.199 0.89289-0.4967 1.1534-0.98744 1.1521-1.9527-0.0266-20.843-0.0203-41.685-0.0203-62.528v-1.367c-1.1912-0.68826-2.2987-1.3281-3.6256-1.9966z" fill="#ff1fec" stroke-width=".29297"/>



<path d="m67.986 105.47c2.3763 1.294 4.6319 2.5942 6.9219 3.8308 0.28614 0.15451 0.82067 0.0958 1.127-0.0714 3.7819-2.0634 7.5494-4.1535 11.307-6.2606 3.8808-2.176 7.7442-4.3828 11.62-6.5679 5.3165-2.9974 10.633-5.9941 15.958-8.9767 2.5604-1.4342 5.1369-2.8396 7.7131-4.2452 0.27171-0.14825 0.59092-0.20945 0.96886-0.33864 0.0264 0.42678 0.0594 0.7129 0.0595 0.99902 3e-3 6.0545 0.0236 12.109-0.0325 18.163-5e-3 0.56859-0.34367 1.3968-0.78902 1.6574-3.9206 2.2945-7.9076 4.4749-11.861 6.7137-5.6825 3.2179-11.345 6.4714-17.032 9.6815-4.8203 2.721-9.6616 5.4046-14.497 8.0986-1.033 0.57552-2.1895 0.99118-3.0895 1.7252-0.83512 0.6811-1.4585 0.48723-2.2043 0.0612-4.1907-2.3937-8.38-4.79-12.573-7.1798-4.8911-2.7877-9.7838-5.5726-14.679-8.3532-3.869-2.1977-7.7375-4.3964-11.616-6.5768-2.4738-1.3906-4.9838-2.7182-7.4322-4.1515-0.40941-0.23967-0.83133-0.87307-0.83514-1.328-0.05401-6.4413-0.03676-12.883-0.03676-19.744 13.786 7.7034 27.338 15.277 41.001 22.864z" fill="#fdfd55" stroke-width=".29297"/>
</svg>
</g>

<g id="waryes:recruit"><?xml version="1.0" encoding="UTF-8"?>
<svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 150 150" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<path d="m73.859 1.99e-5c0.88787-6e-7 1.7757-6e-7 2.7031 0.081485 1.6254 1.0135 3.2176 1.9349 4.7957 2.8799 3.0612 1.8331 6.0799 3.7403 9.1809 5.503 3.0318 1.7233 6.1708 3.2575 9.2127 4.964 2.3256 1.3047 4.5482 2.7922 6.8646 4.1143 1.4231 0.81225 2.977 1.3952 4.4003 2.2072 2.3981 1.3681 4.7088 2.8901 7.1129 4.247 2.2951 1.2954 4.6988 2.3987 6.9892 3.7019 3.0569 1.7393 6.0242 3.6362 9.081 5.3758 1.8796 1.0697 3.8153 2.0638 5.8025 2.9124 1.0449 0.44623 1.2621 1.032 1.2609 2.0699-0.0269 24.643-0.0299 49.286 0.0107 73.929 2e-3 1.0373-0.39561 1.5347-1.1974 1.9845-6.0718 3.4065-12.132 6.8332-18.198 10.251-7.6324 4.3005-15.264 8.6028-22.9 12.896-6.6061 3.7138-13.225 7.4041-19.82 11.138-0.84726 0.47969-1.582 1.1582-2.3688 1.7446-0.88786 0-1.7757 0-2.7031-0.0815-3.3128-1.9787-6.5694-3.9052-9.8636-5.7653-3.5889-2.0264-7.2279-3.9642-10.818-5.989-5.7778-3.2588-11.527-6.5689-17.301-9.8344-3.4227-1.9357-6.8805-3.8094-10.304-5.7431-5.0337-2.8426-10.028-5.7552-15.096-8.5355-0.93046-0.51046-1.3225-0.95598-1.3211-2.037 0.03126-24.655 0.03297-49.309-0.0054-73.964-0.0017-1.0917 0.42967-1.5685 1.2968-2.0535 6.0392-3.3775 12.046-6.8126 18.072-10.214 7.6328-4.3079 15.271-8.6056 22.912-12.899 6.6097-3.7143 13.233-7.4051 19.831-11.139 0.84779-0.47979 1.5831-1.1584 2.3705-1.7448m54.382 40.415c-3.5793-2.0462-7.1499-4.1077-10.74-6.1354-7.6295-4.3097-15.273-8.5945-22.903-12.903-6.0235-3.4016-12.043-6.8113-18.045-10.25-0.86813-0.49745-1.5777-0.51597-2.4511-0.0031-3.3908 1.991-6.8093 3.9353-10.233 5.8691-7.6302 4.3093-15.27 8.6019-22.906 12.901-7.3835 4.1572-14.767 8.3142-22.144 12.468v65.51c0.80312 0.33113 1.5773 0.5589 2.2607 0.94673 4.8598 2.758 9.6863 5.575 14.553 8.3212 4.2868 2.4191 8.6458 4.7113 12.91 7.168 4.7348 2.7276 9.3775 5.6147 14.105 8.3559 1.7444 1.0116 3.6401 1.7584 5.4212 2.7113 1.9211 1.0278 3.8737 2.0362 5.642 3.293 0.81766 0.58113 1.4743 0.8504 2.3087 0.4473 1.1517-0.55642 2.2611-1.2032 3.3732-1.8384 5.554-3.1723 11.089-6.3782 16.658-9.5242 4.9478-2.7951 9.9451-5.5028 14.896-8.2933 6.6024-3.7217 13.165-7.5145 19.788-11.199 0.89289-0.4967 1.1534-0.98744 1.1521-1.9527-0.0266-20.843-0.0203-41.685-0.0203-62.528v-1.367c-1.1912-0.68826-2.2987-1.3281-3.6256-1.9966z" fill="#ff1fec" stroke-width=".29297"/>
<path d="M40,75 L110,75" stroke="#fdfd55" stroke-width="15"/>
</svg>
</g>


    <g id="waryes:sead"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }</style>
 </defs>
 <g stroke-width="1.7818">
  <path class="cls-2" d="m71.107 133.15h-60.099v12.526h60.367c-0.16036-0.4098-0.24945-0.85525-0.24945-1.3363v-11.19z"/>
  <path class="cls-2" d="m78.662 145.65h22.343v-12.526h-22.076v11.19c0 0.46326-0.08909 0.9087-0.24945 1.3363z"/>
  <path class="cls-2" d="m78.911 130.62h8.2496l-4.3475-7.5369c-1.2829 0.2138-2.5836 0.37417-3.9021 0.48107z"/>
  <path class="cls-2" d="m47.303 89.582-5.4701 9.479c7.4835 10.21 19.564 16.856 33.159 16.856 1.2116 0 2.3876-0.0712 3.5814-0.16036l-4.8642-8.41s-15.305-6.5213-26.424-17.782z"/>
  <path class="cls-2" d="m37.681 106.3-14.023 24.321h47.449v-7.0558c-13.346-1.069-25.23-7.5725-33.426-17.265z"/>
  <path class="cls-2" d="m33.138 42.757c-5.0424-7.8576-4.4544-13.096-4.4366-13.221-4.2584 7.9824-4.0803 18.424 0.1069 29.381 1.5858-4.5613 3.8308-8.8198 6.6104-12.668-0.81962-1.2116-1.568-2.3698-2.2985-3.4923z"/>
  <path class="cls-2" d="m58.474 71.764c-0.17818 0.9978-0.28508 2.0134-0.28508 3.0647 0 9.283 7.5547 16.82 16.82 16.82 2.5123 0 4.8821-0.57016 7.038-1.568-5.862-3.9555-11.35-8.1249-15.929-11.688-2.7974-2.3341-5.3275-4.5435-7.6438-6.6282z"/>
  <path class="cls-2" d="m109.38 109.5c3.7417-1.0156 7.0915-2.6727 9.8354-5.0424-1.7283 0.24944-3.5457 0.24944-5.4344 0.0535-1.3542 1.764-2.8152 3.421-4.401 4.989z"/>
  <path class="cls-2" d="m75.009 99.453c-13.577 0-24.624-11.047-24.624-24.624 0-3.1716 0.62362-6.2006 1.7283-8.998-5.1672-5.0246-8.9267-9.2474-11.849-12.936-3.1716 5.0068-5.2919 10.744-6.058 16.891 4.5435 7.4122 10.833 14.771 18.762 21.488 13.185 11.154 28.865 17.978 42.442 19.208 3.7061-2.1203 7.038-4.8108 9.9067-7.9289-5.185-1.7818-10.637-4.5613-15.965-7.7685-4.0446 2.9221-8.998 4.6683-14.361 4.6683z"/>
  <path class="cls-2" d="m91.099 9.5625s8.8376-1.8174 18.459 1.0156c12.668 3.7239 20.936 13.452 24.535 28.883 0.26727 1.1403 1.2829 1.9243 2.4232 1.9243 0.19599 0 0.37416-0.01782 0.57016-0.07127 1.3363-0.32072 2.1738-1.6571 1.853-2.9934-2.2272-9.4969-6.165-17.194-11.742-22.86-4.4901-4.597-10.031-7.8576-16.446-9.7107-10.798-3.1181-20.312-1.1403-20.704-1.0512-1.3363 0.28508-2.1916 1.6036-1.9065 2.9577 0.28509 1.3363 1.6036 2.1916 2.9577 1.9065z"/>
  <path class="cls-2" d="m106.46 18.952c-7.0915-2.1203-13.274-0.94434-13.542-0.89089-1.3542 0.26727-2.2272 1.568-1.96 2.9043 0.26726 1.3542 1.568 2.2272 2.9043 1.9778 0.05351 0 5.4166-0.99779 11.332 0.81962 7.7329 2.3698 12.882 8.2853 15.305 17.586 0.28509 1.1225 1.3007 1.8709 2.4054 1.8709 0.21381 0 0.40981-0.01781 0.62362-0.08909 1.3363-0.33854 2.1203-1.7105 1.7818-3.029-3.617-13.916-12.259-19.19-18.869-21.15z"/>
  <path class="cls-2" d="m54.661 30.427c-11.261-5.5235-19.885-7.1627-22.735-3.4566-2.1916 2.8508-0.14254 9.1761 5.1315 17.159 4.7217-5.8086 10.726-10.53 17.586-13.702z"/>
  <path class="cls-2" d="m121.66 100.4c1.4254-1.8174 1.1225-5.0246-0.62362-9.1405-1.4254 3.9555-3.3497 7.6795-5.7017 11.1 2.9399 0.19599 5.1315-0.40981 6.3253-1.9421z"/>
  <path class="cls-2" d="m77.13 62.357c0.51672-0.4989 1.3363-0.4989 1.8352 0 0.4989 0.4989 0.4989 1.3363 0 1.8352l-11.867 11.671c5.9155 4.8286 11.813 9.1405 17.461 12.811 4.401-3.0468 7.2875-8.1071 7.2875-13.844 0-9.2831-7.5547-16.82-16.838-16.82-7.2518 0-13.435 4.6326-15.787 11.065 1.8887 1.7105 3.8486 3.4388 5.8799 5.1315l12.045-11.867z"/>
  <path class="cls-2" d="m111.5 42.401c0.21382-0.85525 0.35635-1.764 0.35635-2.6905 0-6.0224-4.8821-10.904-10.904-10.904-2.0669 0-3.9912 0.58799-5.6482 1.5858 6.2006 2.8508 11.706 6.9667 16.196 12.009z"/>
  <path class="cls-2" d="m89.905 54.374 5.3988-5.3097c1.6392 0.9978 3.5636 1.568 5.6304 1.568 2.1916 0 4.2228-0.64144 5.9155-1.7461-4.3297-5.3097-9.9601-9.5147-16.41-12.134-0.26726 0.94434-0.42763 1.9421-0.42763 2.9756 0 2.2094 0.65926 4.2584 1.7818 5.969l-5.6482 5.5591c-7.7151-6.2719-15.412-11.671-22.504-15.911-8.8732 2.5479-16.535 8.018-21.845 15.305 3.2072 4.0446 7.038 8.3565 11.439 12.74 4.1337-7.822 12.33-13.167 21.773-13.167 13.577 0 24.624 11.047 24.624 24.624 0 7.1984-3.1181 13.666-8.0714 18.174 5.7373 3.3141 11.029 5.862 15.555 7.4478 4.2585-5.3275 7.234-11.742 8.41-18.762-5.6839-8.1784-14.557-17.871-25.622-27.332z"/>
  <path class="cls-1" d="m52.523 74.829c0 12.401 10.085 22.504 22.486 22.504 12.401 0 22.504-10.085 22.504-22.504s-10.085-22.486-22.504-22.486c-12.419 0-22.486 10.085-22.486 22.486zm22.486-18.958c10.459 0 18.958 8.4991 18.958 18.958 0 10.459-8.4991 18.958-18.958 18.958-10.459 0-18.958-8.4991-18.958-18.958 0-10.459 8.4991-18.958 18.958-18.958z"/>
  <path class="cls-1" d="m145.83 73.065h-24.107c-0.90871-24.375-20.58-44.046-44.954-44.954v-22.771c0-0.97998-0.78398-1.764-1.764-1.764-0.97998 0-1.764 0.78398-1.764 1.764v22.771c-24.375 0.90871-44.046 20.58-44.954 44.954h-24.107c-0.97998 0-1.764 0.78398-1.764 1.764s0.78398 1.764 1.764 1.764h24.107c0.90871 24.375 20.58 44.046 44.954 44.954v22.771c0 0.97998 0.78398 1.764 1.764 1.764 0.97998 0 1.764-0.78398 1.764-1.764v-22.771c24.393-0.9087 44.046-20.58 44.954-44.954h24.107c0.97998 0 1.764-0.78398 1.764-1.764s-0.78398-1.764-1.764-1.764zm-70.826 45.008c-23.84 0-43.226-19.386-43.226-43.226 0-23.84 19.386-43.226 43.226-43.226 23.84 0 43.226 19.386 43.226 43.226 0 23.84-19.386 43.226-43.226 43.226z"/>
 </g>
</svg>
</g>
    <g id="waryes:trait-sniper"><?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg version="1.1" viewBox="0 0 13.229 13.229" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-93.735 -83.035)"><path d="m100.25 95.97c0-0.37498-0.25902-0.56929-0.9198-0.69003-2.1003-0.38375-3.9775-2.2908-4.4573-4.5285-0.14027-0.65404-0.21905-0.76731-0.56214-0.80812-0.57659-0.0686-0.61818-0.41461-0.06318-0.52561 0.39178-0.07836 0.47746-0.18116 0.56046-0.67247 0.36148-2.1396 2.2499-4.0676 4.5606-4.6562 0.69214-0.17631 0.81151-0.26165 0.85323-0.61003 0.0654-0.54622 0.47274-0.51988 0.58427 0.03778 0.0734 0.36669 0.1847 0.4588 0.64769 0.53573 2.1415 0.35583 4.1619 2.3302 4.6332 4.5277 0.12917 0.60228 0.23265 0.77044 0.49731 0.80812 0.42147 0.06001 0.43971 0.49237 0.0232 0.55202-0.24246 0.03473-0.36818 0.26286-0.57099 1.0361-0.31475 1.2001-1.0831 2.4453-1.9158 3.1048-0.70933 0.56181-2.0865 1.1944-2.5677 1.2576-0.39864 0.1394-0.60944 0.15887-0.737 0.56763-0.21002 0.47772-0.45759 0.30433-0.56604 0.06349zm-0.0327-3.1001 0.0179-1.3965c-0.77291-0.40082-1.3483-0.83708-1.488-1.458 0 0-0.153-0.04284-1.4358-0.04284-1.5319 0-1.5343 0.01376-1.5343 0.01376 0.16901 2.6433 2.5185 4.2287 4.4065 4.3332 0 0 9e-3 -0.67336 0.0337-1.4496zm4.9136-2.8974h-2.8578c-0.18398 0.57917-0.74273 1.1429-1.4045 1.4934 0 0-5e-3 -0.01641-5e-3 1.3794v1.4439c2.3263-0.07624 4.1692-1.3641 4.2672-4.3168zm-3.856 0.43318c0.50157-0.47121 0.47887-1.2331-0.0491-1.6484-0.53583-0.42148-1.0594-0.4013-1.5193 0.05856-1.062 1.062 0.47349 2.6185 1.5684 1.5899zm-1.0249-2.5872v-2.7759c-3.1036-0.0013-4.6045 2.4972-4.4847 4.3238 0 0 0.0051-0.0013 1.5569-7e-3l1.417-0.0052c0.25175-0.76784 0.51697-1.174 1.5108-1.5356zm0.61318-2.7759v1.4439c0 1.3958-6.1e-4 1.3897-6.1e-4 1.3897 0.8902 0.25371 1.2045 0.82577 1.4106 1.4831h2.8705c-0.0186-2.2465-1.879-4.3877-4.2805-4.3168z" fill="#ff1fec" stroke-width=".1533"/></g></svg>
</g>
    <g id="waryes:supply"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }</style>
 </defs>
 <g stroke-width="1.8324">
  <path class="cls-2" d="m73.509 44.504c0.69632-0.84291 1.7225-1.3193 2.8036-1.3193 1.0811 0 2.1073 0.47643 2.8036 1.301 0.36648 0.43978 3.7015 4.4161 7.8244 10.372h38.572v-23.785h-97.247v23.785h37.565c4.0497-5.937 7.3114-9.9134 7.6778-10.335z"/>
  <path class="cls-2" d="m96.817 71.111c3.9214 7.6595 7.0731 16.034 7.6412 23.785h21.073v-23.785z"/>
  <path class="cls-2" d="m56.156 71.111h-27.889v23.785h20.377c0.54973-7.7511 3.6648-16.125 7.5129-23.785z"/>
  <path class="cls-2" d="m76.331 125.48c-14.788 0-22.044-6.3585-25.342-14.33h-22.722v23.785h97.265v-23.785h-23.547c-4.0497 9.327-12.79 14.33-25.636 14.33z"/>
  <rect class="cls-2" x="41.276" y="1.8452" width="26.992" height="12.974"/>
  <path class="cls-2" d="m128.02 28.324c2.657 0 4.8193-2.4005 4.8193-5.3873s-2.1622-5.3873-4.8193-5.3873h-102.25c-2.657 0-4.8193 2.4005-4.8193 5.3873s2.1623 5.3873 4.8193 5.3873z"/>
  <path class="cls-2" d="m57.585 68.362c2.089-3.8847 4.3062-7.5496 6.4135-10.756h-38.224c-2.657 0-4.8193 2.4005-4.8193 5.3873s2.1623 5.3873 4.8193 5.3873h31.811z"/>
  <path class="cls-2" d="m88.828 57.606c2.1439 3.2251 4.3978 6.8716 6.5234 10.756h32.672c2.657 0 4.8193-2.4005 4.8193-5.3873s-2.1622-5.3873-4.8193-5.3873h-39.195z"/>
  <path class="cls-2" d="m128.02 108.4c2.657 0 4.8193-2.4005 4.8193-5.3873 0-2.9868-2.1622-5.3873-4.8193-5.3873h-23.473c-0.0366 3.9947-0.56805 7.5862-1.5576 10.756h25.031z"/>
  <path class="cls-2" d="m50.017 108.4c-1.0445-3.5182-1.4293-7.2197-1.4476-10.756h-22.777c-2.657 0-4.8193 2.4005-4.8193 5.3873 0 2.9868 2.1623 5.3873 4.8193 5.3873h24.243z"/>
  <path class="cls-2" d="m25.774 137.68c-2.657 0-4.8193 2.4005-4.8193 5.3873s2.1623 5.3873 4.8193 5.3873h102.25c2.657 0 4.8193-2.4005 4.8193-5.3873s-2.1622-5.3873-4.8193-5.3873z"/>
  <path class="cls-1" d="m100.89 97.296c0-21.348-24.554-50.447-24.554-50.447s-24.115 29.099-24.115 50.447 13.835 24.499 24.115 24.499 24.554-3.1518 24.554-24.499z"/>
 </g>
</svg>
</g>
    <g id="waryes:support"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }</style>
 </defs>
 <polygon class="cls-2" transform="matrix(1.581 0 0 1.581 -44.083 -42.112)" points="48.81 47.82 69.51 77.7 70.95 58.98 78.15 75 88.23 40.26 89.13 80.13 98.67 69.78 97.95 84.72 120.63 62.4 105.33 107.76 120.63 102 109.83 120 93.63 120 96.15 103.98 85.17 113.52 83.55 100.92 81.39 106.86 77.79 100.92 76.11 108.12 66.45 95.88 66.45 113.88 57.63 108.3 57.99 120 43.77 120 29.37 90.66 44.49 101.1 34.05 69.6 50.79 85.98"/>
 <polygon class="cls-1" transform="matrix(1.581 0 0 1.581 -44.083 -42.112)" points="41.79 64.02 38.19 44.4 34.77 58.26"/>
 <polygon class="cls-1" transform="matrix(1.581 0 0 1.581 -44.083 -42.112)" points="56.37 42.15 60.87 48.18 62.49 48.18 59.61 36.12"/>
 <polygon class="cls-1" transform="matrix(1.581 0 0 1.581 -44.083 -42.112)" points="104.97 30 104.97 40.26 99.39 44.4 99.39 35.4"/>
 <polygon class="cls-1" transform="matrix(1.581 0 0 1.581 -44.083 -42.112)" points="112.35 55.74 109.29 62.4 103.71 64.02 106.77 55.74"/>
</svg>
</g>
    <g id="waryes:tank"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }</style>
 </defs>
 <path class="cls-1" d="m106.89 99.868v0.23731c0 9.0619-7.4156 16.477-16.477 16.477h-73.177c-9.0619 0-16.477-7.4156-16.477-16.477v-0.23731c0-9.0619 7.4156-16.477 16.477-16.477h73.177c9.0619 0 16.477 7.4156 16.477 16.477zm-18.495 0.11865c0-4.4345-3.5892-8.0237-8.0237-8.0237-4.4345 0-8.0237 3.5892-8.0237 8.0237 0 4.4345 3.5892 8.0237 8.0237 8.0237 4.4345 0 8.0237-3.5892 8.0237-8.0237zm-26.563 0c0-4.4345-3.5892-8.0237-8.0237-8.0237-4.4345 0-8.0237 3.5892-8.0237 8.0237 0 4.4345 3.5892 8.0237 8.0237 8.0237 4.4345 0 8.0237-3.5892 8.0237-8.0237zm-26.563 0c0-4.4345-3.5892-8.0237-8.0237-8.0237s-8.0237 3.5892-8.0237 8.0237c0 4.4345 3.5892 8.0237 8.0237 8.0237s8.0237-3.5892 8.0237-8.0237z" stroke-width="1.4831"/>
 <path class="cls-2" d="m145.77 51.563h-9.3733c-1.142 0-2.1654 0.59325-2.7438 1.4831h-56.893v-4.9536h-7.6232v-3.7226h-27.26l-21.327 9.7441v9.7293h-7.5194v15.38h81.646l-9.2843-14.253h-16.255v-3.1739h7.6232v-5.0871h56.863c0.57841 0.91954 1.6166 1.5424 2.7883 1.5424h9.3733c1.8094 0 3.2925-1.4831 3.2925-3.2925v-0.10381c0-1.8094-1.4831-3.2925-3.2925-3.2925z" stroke-width="1.4831"/>
</svg>
</g>
    <g id="waryes:veteran"><?xml version="1.0" encoding="UTF-8"?>
<svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 150 150" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g stroke-width=".29297">
<path d="m73.848 0c0.88787 5.9e-7 1.7757 5.9e-7 2.7032 0.081462 0.78938 0.56704 1.5163 1.0931 2.2928 1.5315 4.2459 2.3971 8.5072 4.767 12.757 7.1578 2.6827 1.5093 5.3693 3.0127 8.0256 4.5675 2.3447 1.3724 4.6248 2.856 6.9819 4.206 1.4219 0.81432 2.9794 1.3921 4.3992 2.2095 2.3104 1.3302 4.5157 2.8454 6.8425 4.1441 3.0402 1.6969 6.1858 3.2046 9.2286 4.897 2.287 1.272 4.4511 2.7641 6.73 4.0518 2.0019 1.1312 4.0739 2.1421 6.142 3.1504 0.89277 0.43526 1.3126 0.94121 1.3108 2.0422-0.0398 24.645-0.0396 49.291 9.6e-4 73.936 2e-3 1.0334-0.38366 1.5418-1.188 1.9932-6.0724 3.4072-12.134 6.833-18.2 10.252-6.9322 3.9069-13.862 7.8183-20.799 11.717-7.4749 4.2012-14.962 8.3814-22.427 12.598-0.68159 0.38499-1.2496 0.97108-1.8703 1.4638-0.88786 0-1.7757 0-2.7031-0.0815-0.26279-0.24812-0.47046-0.44272-0.71163-0.57721-3.4733-1.937-6.9643-3.8428-10.425-5.8016-7.9899-4.522-15.957-9.0836-23.951-13.6-4.3645-2.4658-8.7754-4.8493-13.143-7.3095-5.0342-2.8356-10.012-5.7724-15.089-8.5289-1.0769-0.58473-1.3836-1.1569-1.3822-2.2998 0.0294-24.546 0.02965-49.092-0.0017-73.638-0.0014-1.0978 0.36854-1.6651 1.3149-2.19 5.3444-2.9644 10.643-6.0106 15.966-9.0146 7.6297-4.3061 15.264-8.6051 22.901-12.898 7.3079-4.1072 14.629-8.1915 21.926-12.317 0.84756-0.47918 1.5821-1.1582 2.3691-1.7446m-9.296 133.31c0.77713 0.57928 1.5127 1.2277 2.3395 1.7244 2.1513 1.2925 4.3036 2.5956 6.5401 3.7273 0.74212 0.37554 1.9316 0.61486 2.5919 0.27873 3.4182-1.7399 6.7394-3.672 10.079-5.5641 5.7711-3.2698 11.523-6.573 17.298-9.8362 4.0827-2.3071 8.1998-4.5532 12.283-6.8593 5.3646-3.0297 10.711-6.0915 16.131-9.1769v-65.329c-2.9452-1.6049-5.8802-3.1565-8.77-4.7882-8.0865-4.5658-16.154-9.1653-24.23-13.75-3.542-2.0109-7.082-4.0256-10.63-6.0259-4.0032-2.2569-8.0053-4.5164-12.036-6.7229-0.41199-0.22551-1.128-0.30313-1.517-0.09756-2.7237 1.4392-5.4064 2.9571-8.0873 4.4761-4.9042 2.7789-9.7893 5.5916-14.699 8.3606-4.2506 2.3973-8.5377 4.7298-12.785 7.1334-6.3899 3.6165-12.743 7.2983-19.155 10.875-0.88726 0.4949-1.1579 0.98057-1.1566 1.9506 0.02757 20.941 0.02097 41.883 0.02097 62.824v1.4667c0.42882 0.0963 0.83378 0.0983 1.1444 0.27049 3.9739 2.2026 7.942 4.4159 11.896 6.6544 3.3811 1.9143 6.7297 3.8861 10.114 5.7946 7.4602 4.207 14.934 8.3902 22.628 12.614z" fill="#ff20ec"/>



<path d="m34.951 79.316c-2.3721-1.3069-4.6806-2.5088-6.9458-3.7875-0.43168-0.24368-0.98412-0.7881-0.98789-1.1983-0.06152-6.6834-0.04359-13.367-0.04359-20.414 0.76361 0.44634 1.3018 0.7759 1.8535 1.0811 4.4702 2.4725 8.9535 4.9213 13.412 7.4145 5.4926 3.0715 10.958 6.1916 16.449 9.2662 3.5905 2.0105 7.2079 3.9731 10.808 5.9664 1.656 0.91689 3.2712 1.9141 4.9674 2.7477 0.47424 0.23306 1.2872 0.22352 1.748-0.03096 5.4259-2.9959 10.807-6.0723 16.215-9.1011 3.6735-2.0575 7.3805-4.0552 11.055-6.1118 6.2748-3.5125 12.534-7.0532 18.806-10.57 0.3566-0.1999 0.7765-0.28687 1.2918-0.47102 0.0294 0.55876 0.0703 0.97692 0.0706 1.3951 4e-3 6.0532-0.0275 12.107 0.0356 18.159 9e-3 0.90813-0.29928 1.4431-0.99347 1.8287-3.5971 1.9981-7.2171 3.9551-10.807 5.966-5.4909 3.0759-10.959 6.1925-16.446 9.2758-3.5479 1.9938-7.1141 3.9549-10.667 5.9389-2.188 1.2216-4.4359 2.3536-6.5309 3.7191-2.0265 1.3208-3.7905 1.2831-5.8529 0.0101-3.6214-2.2353-7.3758-4.256-11.085-6.3483-5.5214-3.1148-11.046-6.2233-16.58-9.3156-3.2206-1.7997-6.4618-3.5626-9.7723-5.4204z" fill="#fdfd55"/>
<path d="m51.65 117.11c-4.5686-2.6152-9.0566-5.1563-13.55-7.688-3.216-1.8121-6.4094-3.6679-9.6754-5.3854-1.0934-0.57497-1.4938-1.2133-1.481-2.4497 0.064-6.1965 0.02932-12.394 0.02932-18.886 1.46 0.74721 2.7652 1.3611 4.0189 2.0664 4.5793 2.5761 9.1352 5.1939 13.712 7.775 6.2227 3.5095 12.451 7.0093 18.687 10.495 3.6761 2.0545 7.3603 4.0955 11.075 6.078 0.43823 0.23387 1.2131 0.27193 1.6325 0.0401 5.4255-2.9991 10.806-6.0792 16.216-9.1064 3.7994-2.1259 7.6393-4.1792 11.438-6.3058 6.1527-3.4442 12.285-6.9245 18.432-10.38 0.39656-0.22294 0.83954-0.36335 1.3892-0.59657 0.0351 0.524 0.0757 0.84893 0.0759 1.1739 4e-3 6.0057-0.0176 12.011 0.0236 18.017 7e-3 0.96161-0.3511 1.4484-1.1674 1.9066-6.6028 3.7062-13.169 7.4773-19.764 11.198-4.7788 2.696-9.5897 5.335-14.375 8.0186-4.0876 2.292-8.1466 4.6357-12.257 6.8853-0.47237 0.25852-1.3256 0.29252-1.7824 0.0373-6.6931-3.7401-13.349-7.547-20.013-11.338-0.86253-0.4907-1.7236-0.98399-2.6636-1.5543z" fill="#fdfd55"/>
</g></svg>
</g>
    <g id="waryes:trait-amphibious"><?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-76.205 -131.73)"><path d="m76.264 165.39v-1.7221l1.5214 0.20074c0.83674 0.11042 2.7757 0.19398 4.3088 0.18571 3.3938-0.0183 4.978-0.61745 5.8058-2.1957 0.27819-0.53036 0.78715-1.307 1.131-1.7258 0.8462-1.0307 1.6046-0.76582 2.4258 0.84725 0.3464 0.68046 0.91249 1.5007 1.258 1.8228 1.614 1.5045 7.5879 1.8612 10.445 0.62364 1.5732-0.68154 2.2863-1.3582 2.8478-2.7021 0.2198-0.52606 0.57507-1.0238 0.78949-1.1061 0.56629-0.21731 1.6787 0.76158 1.8735 1.6487 0.21007 0.95647 0.7343 1.4342 2.3962 2.1838 1.1276 0.50859 1.7808 0.59418 4.6205 0.60542 2.14 8e-3 3.6655-0.11352 4.3222-0.34565 1.2324-0.43563 2.8216-1.7806 2.8216-2.3879 0-0.81413 0.78409-1.619 1.5772-1.619 0.63163 0 0.88206 0.22464 1.5485 1.3891 0.49985 0.87338 1.2438 1.6837 2.0038 2.1828 1.2015 0.78894 1.2089 0.80298 1.2146 2.3151 7e-3 1.8969-0.25633 1.9419-2.7084 0.46302-0.96511-0.58209-1.8944-1.0583-2.065-1.0583s-0.7058 0.34726-1.1892 0.77169c-1.2983 1.1399-3.1303 1.4244-8.304 1.2894-4.624-0.12059-5.7307-0.36626-6.7368-1.4954-0.67315-0.75549-0.93239-0.7206-2.504 0.33702-1.6318 1.0981-3.5064 1.3399-9.0249 1.1638-3.8868-0.12405-4.2604-0.23529-5.8939-1.7546l-0.72887-0.67792-0.72634 0.58131c-2.2033 1.7634-2.6663 1.8634-8.73 1.8856l-4.2995 0.0158zm1.7198-5.2788c-0.7276-0.21126-1.4122-0.38935-1.5214-0.39578-0.10914-6e-3 -0.19844-0.85785-0.19844-1.8921 0-1.6854 0.048-1.8611 0.46302-1.694 1.2825 0.51616 4.2881 0.83038 6.0916 0.63685 2.723-0.29221 4.0634-1.0387 5.5132-3.0704 0.65344-0.91572 1.3399-1.665 1.5255-1.665 0.40567 0 1.1386 0.8044 2.0803 2.283 0.87187 1.3691 2.4561 2.1674 5.0012 2.5201 4.1649 0.57716 8.0937-1.018 9.2231-3.7448 0.18599-0.44903 0.52741-0.79373 0.78616-0.79373 0.25157 0 1.0815 0.71753 1.8442 1.5945 1.6445 1.8907 2.7658 2.5174 5.2111 2.9125 3.8451 0.62125 7.4059-0.50004 8.684-2.7346 0.83415-1.4584 1.4283-1.9709 2.1294-1.8369 0.98475 0.18825 1.2732 0.72004 1.1214 2.0672-0.16763 1.4872-1.0389 2.7515-2.817 4.0875-2.023 1.5201-3.7828 1.9771-7.5666 1.9649-3.5258-0.0113-5.1557-0.46978-7.0621-1.9865-0.53717-0.42737-1.0987-0.77704-1.2478-0.77704s-0.98733 0.46288-1.8626 1.0286c-4.2161 2.725-10.521 2.495-14.331-0.52279l-1.0424-0.82556-1.425 0.9814c-0.78372 0.53977-2.1201 1.2183-2.9698 1.5079-2.0362 0.69394-5.8509 0.87119-7.6303 0.35456zm35.851-7.0343c-2.0627-0.31554-3.625-0.91584-5.2133-2.0031l-1.3768-0.94256-1.5675 0.96753c-2.2611 1.3956-4.4019 1.9904-7.1638 1.9904-2.786 0-4.3515-0.43118-6.6929-1.8434-0.97307-0.58688-1.9018-1.0671-2.0638-1.0671s-0.73972 0.35771-1.2838 0.79492c-1.7841 1.4338-3.7412 1.9729-7.1819 1.9784-1.8666 3e-3 -3.4262-0.13092-4.0349-0.3464l-0.99219-0.35124v-3.6346l1.3891 0.43722c0.89219 0.28083 2.2882 0.43532 3.9026 0.43189 3.7431-8e-3 5.513-0.90487 6.9356-3.5147 0.88181-1.6177 2.2962-1.4404 3.1594 0.396 0.68375 1.4546 1.8938 2.3125 4.0496 2.8709 4.1528 1.0758 8.5749-0.23814 10.2-3.0308 0.83812-1.44 1.3969-1.6009 2.182-0.62815 2.6219 3.2489 4.0344 3.9418 8.0013 3.9251 3.7315-0.0157 5.6628-0.91781 6.7031-3.1309 0.858-1.8253 2.2344-1.9739 3.0202-0.32609 0.23428 0.4913 1.0892 1.4113 1.8998 2.0444l1.4738 1.1511v1.5248c0 1.4232-0.0413 1.5248-0.62043 1.5248-0.34125 0-1.373-0.48638-2.2927-1.0808-1.831-1.1834-1.8311-1.1834-3.6859 0.16825-1.8155 1.323-5.9446 2.1227-8.7467 1.6941z" fill="#ff1fec" stroke-width=".26458"/></g></svg>
</g>
    <g id="waryes:trait-cqc"><?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-46.418 -60.588)"><g transform="translate(1.043e-8 .10845)" stroke-width=".26458"><path d="m94.704 110.75c-4.6477-1.4902-6.6544-2.9851-14.847-11.061-3.5093-3.4591-6.4931-6.2893-6.6306-6.2893-0.13748 0-2.8621 2.5655-6.0548 5.7012-5.5213 5.4227-9.3911 8.7144-12.026 10.23-1.2219 0.70268-3.3352 1.3779-5.0735 1.6211-2.1351 0.29872-1.9977-1.5596 0.2813-3.8042 2.412-2.3756 5.2989-5.7079 5.5758-6.4363 0.1414-0.37191 0.84393-1.4845 1.5612-2.4725 0.71725-0.98797 1.4793-2.213 1.6933-2.7224 0.21408-0.50932 0.79282-1.2951 1.2861-1.7461 3.1981-2.9243 6.4877-6.1254 6.6841-6.5042 0.34239-0.66051-1.2235-3.1268-1.9852-3.1268-0.10886 0-0.73774 0.46721-1.3975 1.0382-1.3216 1.1438-2.1915 1.5295-2.578 1.143-0.49294-0.49294 0.11788-1.669 1.5437-2.9721 1.0595-0.96832 1.4039-1.4513 1.2902-1.8094-0.08528-0.26869-3.3672-3.6749-7.2931-7.5693-3.2657-2.9362-6.0716-5.5925-7.3025-9.3458-0.45223-1.3703 0.09821-1.6513 2.0542-1.6513 3.5949 0.27647 8.6519 6.2259 10.826 8.3756 3.2844 3.2515 6.088 5.9119 6.2302 5.9119s0.72917-0.48606 1.3044-1.0801c1.2658-1.3073 2.206-1.8303 3.2902-1.8303 1.3031 0 2.4727 0.63392 3.5975 1.9498l1.0853 1.0331 6.0423-5.8476c3.1131-3.4438 6.7162-7.3746 10.98-8.5535 1.4369-0.2996 1.7952 0.99918 1.797 2.4851-0.08988 2.4798-4.9579 6.6217-7.267 8.9331-4.6825 4.6871-7.1922 7.3825-7.0531 7.5751 0.11869 0.16449 0.847 1.0412 1.6185 1.9483 0.77147 0.90708 1.3656 1.8441 1.3202 2.0822-0.15955 0.83774-1.1189 0.6063-2.5499-0.61516-0.77377-0.66047-1.491-1.2009-1.5938-1.2009-0.27359 0-2.1511 2.2998-2.1511 2.635 0 0.15688 1.7562 2.0449 3.9026 4.1956 3.7768 3.7844 5.5771 6.1037 7.2217 9.3039 0.37028 0.72052 1.7362 2.4615 3.0354 3.8688 3.0755 3.3315 4.0966 4.7837 4.0966 5.8266 0 1.321-0.42062 1.4517-2.5135 0.78061zm-11.003-26.193c-0.34575-0.50459-0.88177-1.0328-1.1912-1.1737-0.32169-0.14657-0.63214-0.6044-0.72513-1.0694-0.15509-0.77545 0.1552-1.1333 6.7092-7.737 1.2464-2.0911 7.5944-7.2765 5.5159-8.2761-0.59144-0.19353-0.9212-0.49728-1.0262-0.94524-0.16696-0.71255-0.49798-0.39493-1.1605-0.02415-0.68502 0.38335-14.714 13.573-14.714 13.876 0 0.15452 0.89297 1.1426 1.9844 2.1958 1.0914 1.0532 2.1889 1.8531 2.1889 1.9965 0 0.14331 0.09987 0.32005 0.37814 0.40837 0.27827 0.08832 0.87474 0.70631 1.4192 1.139 1.2186 0.96838 1.4515 0.82195 0.62087-0.39028zm-17.665-2.2479c0.09429-0.01182 0.91143-0.72782 1.8159-1.5911l1.6444-1.5696-1.9482-2.0343c-2.7731-2.8958-10.227-9.9133-12.049-11.344-1.8893-1.4831-2.517-1.5784-2.3047-0.34979 0.08172 0.47294 0.19406 1.0087 0.24966 1.1906 0.21773 0.71232-0.52031 0.26502-1.8554-1.1245-0.76902-0.80036-1.1478-1.2745-1.2393-1.2745-0.42762 0-0.41422 0.69897 0.30198 1.4484 0.43656 0.45682 0.79375 1.068 0.79375 1.3581 0 0.72114 1.6104 2.5539 7.8052 8.8827 3.7931 3.8751 5.2798 5.5658 5.2499 5.97-0.04033 0.54403 0.18239 0.6075 1.5362 0.43776zm8.443-2.7116c0.57355-0.46092 1.0428-0.98028 1.0428-1.1541 0-0.43803-1.9174-2.7681-2.2789-2.7693-0.39252-0.0014-2.8098 2.5966-2.7011 2.903 0.09931 0.27992 2.3647 1.8466 2.6804 1.8537 0.11767 0.0026 0.68322-0.3723 1.2568-0.83322zm2.1012-1.6535c0-0.20615 0.14832-0.42427 0.3296-0.48469 0.38358-0.12786-1.1356-1.6207-2.2478-2.2089-0.59252-0.31334-0.7276-0.31903-0.7276-0.03061 0 0.43032 1.257 1.6281 1.977 1.8838 0.40614 0.14425 0.4426 0.23423 0.16454 0.40608-0.19647 0.12142-0.2754 0.35314-0.17541 0.51493 0.25688 0.41564 0.67974 0.36546 0.67974-0.08066zm-5.6885-1.5728c0.43656-0.35795 0.70037-0.74496 0.58623-0.86001s-0.70945 0.30392-1.3229 0.93106c-1.1319 1.1571-0.71174 1.1166 0.73668-0.07105z" fill="#ff1fec"/><path d="m83.08 84.944c-1.6531-0.83715-2.791-2.3652-3.9862-3.5438-1.0914-1.0532-2.6617-2.6164-2.6617-2.7709 4.5485-2.716 11.48-11.091 15.654-13.56 4.9975-2.9562 6.1476-0.75848-3.5927 9.5042-6.554 6.6037-6.8643 6.9615-6.7092 7.737 0.09299 0.46496 0.40344 0.92278 0.72513 1.0694 0.5947 0.27096 1.9106 2.0003 1.69 2.2209-0.07138 0.07138-0.57525-0.22424-1.1197-0.65693zm-19.504-1.9051c1.2738-1.4313 2.3177-1.3604 2.6959-1.4553 0.89585-0.22484-1.0046 1.4555-1.8129 2.262-0.35405 0.35326-0.9954 1.0206-1.2139 1.2115-0.3612 0.31558-1.4696 0.89269-1.6941 0.79216 0.07799-1.1743 1.2497-1.9823 2.0251-2.8104zm1.0001-1.2092c-1.1694-3.3768-16.307-15.297-14.553-17.802 4.2399-0.9551 7.8187 3.6822 11.296 6.9983 2.3542 2.2275 5.157 4.9655 6.2285 6.0844l1.9482 2.0343-1.6444 1.5696c-0.90443 0.86329-1.7599 1.5921-1.8542 1.6039-1.3538 0.16974-1.4615 0.05515-1.4211-0.48889zm11.324-3.8083c-1.4459-2.1285-1.6887-1.2075-1.9661-2.8048 0-0.28842 0.13509-0.28273 0.7276 0.03061 1.1123 0.5882 3.8072 2.9884 3.4236 3.1163-0.18128 0.06043-0.84083 0.6364-0.84083 0.84255 0 0.44612-0.55281-0.32714-0.88423-0.68618zm-5.95-1.5824c0.61347-0.62713 2.359-1.5318 2.4732-1.4167s-0.22636 1.1027-0.66292 1.4607c-0.2003 0.16424-2.5077 2.9379-2.6761 3.0556-0.62626 0.43762-1.1448-0.2039-0.76949-1.159 0.25368-0.64553 1.242-1.5384 1.6353-1.9405z" fill="#fdfd55"/></g></g></svg>
</g>
    <g id="waryes:trait-gsr"><?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-85.748 -105.7)"><path d="m108.89 152.55c-0.4054-0.22022-1.0149-0.97427-1.3544-1.6757-0.60938-1.2588-0.61078-1.2898-0.10883-2.403 0.90469-2.0062 3.4372-3.1423 5.4927-2.4639 1.1022 0.36378 2.5868 1.8887 2.8467 2.9241 0.24891 0.99172-0.3576 2.5326-1.3134 3.3369-0.72911 0.61352-1.0936 0.70274-2.8312 0.69304-1.1891-6e-3 -2.292-0.17281-2.7315-0.41153zm-6.5256-10.49c-0.25597-0.49698-0.74117-1.2789-1.0782-1.7377-0.33705-0.45874-0.69653-0.98285-0.79881-1.1647-0.25401-0.45153 2.9266-2.1996 5.6181-3.0878 1.8032-0.59506 2.6668-0.70611 5.6069-0.7211 4.2888-0.0219 6.4408 0.55246 10.364 2.7659 1.05 0.59243 1.05 0.59243-0.22962 2.2341-0.70381 0.90293-1.3826 1.8224-1.5084 2.0434-0.19049 0.33443-0.54762 0.25485-2.1336-0.47539-2.6096-1.2016-4.4747-1.5499-7.4515-1.3916-2.5414 0.13514-4.6239 0.77243-6.3124 1.9317-1.056 0.72506-1.5468 0.63125-2.0764-0.39689zm-6.287-9.0017c-0.49921-0.72284-1.2517-1.7152-1.6722-2.2053-0.42052-0.49008-0.76457-1.0152-0.76457-1.1668 0-0.40218 3.9731-2.9369 6.3946-4.0795 3.5612-1.6804 5.898-2.1525 11.399-2.3029 4.1141-0.11247 5.2736-0.0487 7.508 0.41342 3.1717 0.65585 5.8082 1.6748 8.6175 3.3306 3.387 1.9962 3.303 1.7271 1.332 4.2699-0.93497 1.2062-1.8037 2.1931-1.9306 2.1931-0.12686 0-0.80399-0.43764-1.5047-0.97254-1.6286-1.2432-4.7578-2.7389-7.0715-3.3803-1.3768-0.38163-2.8335-0.50233-6.1166-0.50678-3.7549-5e-3 -4.5765 0.078-6.3848 0.64584-2.7234 0.85516-4.9204 1.983-6.7364 3.4582-2.1846 1.7746-2.0619 1.7625-3.0698 0.30319zm-6.4333-8.8663c-0.25056-0.25057-0.59796-0.72732-0.772-1.0594-0.17404-0.33214-0.68612-1.0755-1.1379-1.6519-0.45183-0.57641-0.75526-1.2207-0.67428-1.4317 0.08097-0.21104 0.97748-0.97614 1.9922-1.7002 6.0772-4.3366 12.088-6.5091 19.656-7.1037 8.2847-0.65093 16.108 0.84133 22.466 4.2856 1.9304 1.0456 6.3946 4.1036 6.3946 4.3803 0 0.27857-3.1047 4.425-3.3133 4.425-0.0901 0-1.0662-0.67039-2.1692-1.4898-3.8139-2.8331-8.5691-4.8441-13.25-5.6032-3.2253-0.52311-9.8132-0.52909-13.241-0.012-2.721 0.41045-6.5942 1.6365-9.0359 2.8604-1.5423 0.77303-4.6073 2.8512-5.7323 3.8865-0.67435 0.62063-0.76136 0.63639-1.1834 0.21432z" fill="#ff1fec" stroke-width=".27803"/></g></svg>
</g>
    <g id="waryes:trait-ifv"><?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(142.42 59.137)" fill="#ff1fec" stroke-width=".26458"><path d="m-130.91-9.483c-3.0302-1.0146-4.9344-2.6845-6.3672-5.5835-0.87418-1.7688-0.93991-2.0751-0.94468-4.4034-6e-3 -2.9501 0.11971-3.5626 1.1638-5.6681 0.64405-1.2988 2.0463-2.8445 7.7113-8.5001 8.3694-8.3554 8.3796-8.3622 12.917-8.5158 3.0313-0.10266 3.1444-0.08576 4.8948 0.73154 1.8947 0.88466 3.3085 2.0521 3.9361 3.2502 0.32327 0.61715 0.32599 0.85168 0.0184 1.5875-0.34311 0.82083-3.4002 3.9061-3.8705 3.9061-0.12235 0-1.0064-0.47625-1.9645-1.0583-1.3497-0.81999-2.0103-1.0583-2.9331-1.0583-1.1422 0-1.3266 0.12074-4.5027 2.9482-1.8214 1.6215-3.3117 3.0413-3.3117 3.1552s-1.531 1.7935-3.4022 3.7325c-1.8712 1.9391-3.4847 3.7876-3.5856 4.1079-0.55008 1.7466 1.5735 4.5771 3.434 4.5771 1.38 0 1.8006-0.29218 5.0597-3.5149l2.9612-2.9281 1.0076 0.29773c2.4664 0.7288 4.8027 1.0718 5.7875 0.84965 0.92697-0.20907 1.9669 0.02601 1.9669 0.44462 0 0.33947-7.8826 8.4301-9.1281 9.369-2.5738 1.9403-3.8081 2.3863-6.9552 2.5134-1.9434 0.078481-3.167 0.00307-3.8927-0.23991z"/><path d="m-116.3-23.159c-2.7071-0.6864-6.0182-3.2503-6.0182-4.66 0-1.3353 3.026-4.5955 4.2654-4.5955 0.20157 0 0.94982 0.41473 1.6628 0.92162 3.3685 2.3949 5.2617 1.3311 13.059-7.3378 1.538-1.7099 2.8902-3.1089 3.0049-3.1089 0.4751 0 2.0849-2.491 2.0849-3.2262 0-1.5547-1.2552-3.0897-2.9775-3.6412-1.7256-0.55255-2.3975-0.19561-5.7384 3.0486l-3.0932 3.0037-2.496-0.52601c-1.8848-0.39719-2.9982-0.48502-4.5465-0.35865-1.1278 0.09205-2.0505 0.09159-2.0505-1e-3 0-0.09261 2.292-2.4683 5.0932-5.2794 4.3975-4.4128 5.3456-5.2339 6.941-6.0107 1.8009-0.8769 1.9318-0.89972 5.1594-0.89972 3.1192 0 3.3937 0.04323 4.7246 0.74416 2.105 1.1087 3.6204 2.649 4.6698 4.7466 0.91016 1.8193 0.92861 1.9205 0.92291 5.062-0.0048 2.6504-0.09907 3.4112-0.5443 4.3928-0.93272 2.0563-3.2385 4.8205-6.7601 8.104-1.873 1.7464-4.5365 4.3109-5.919 5.699-3.2551 3.2683-4.5459 3.9267-7.9807 4.0708-1.3587 0.057-2.9173-0.0097-3.4636-0.14822z"/></g></svg>
</g>
    <g id="waryes:trait-leader"><?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(214.43 68.68)"><path d="m-209.23-19.112c-0.29149-0.29148-0.21529-43.091 0.0781-43.863l0.25803-0.67868h8.288c6.0934 0 8.8495-0.01688 8.8495-0.01688s0.0735 1.6691 0.0735 3.6417v2.9898h8.1858l0.1486-6.4823h16.404v44.45h-8.2021l-8.3467-0.01807c-3e-3 -2.8608 0.0476-5.72-8e-4 -8.5809h-8.1759l-0.0727 4.2995-0.0727 4.2995-8.6175 0.0697c-4.7396 0.03834-8.6984-0.01127-8.7974-0.11024zm25.702-12.865 0.0477-10.413v-10.152h-8.2021v20.638l3.1088-0.0029c1.8697-0.01682 3.3124-0.01418 5.0455-0.0702z" fill="#ff1fec" stroke-width=".26458"/></g></svg>
</g>
    <g id="waryes:trait-mp"><?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(315.65 107.43)"><path d="m-290.54-56.91c-0.52092-0.12311-1.8901-0.69266-3.0427-1.2657-1.1526-0.57302-3.1459-1.475-4.4295-2.0044-8.0014-3.2998-10.89-5.7909-11.534-9.9454-0.14656-0.94589-0.24688-4.5773-0.22294-8.0698 0.0345-5.0373-0.049-6.8149-0.40412-8.599-0.57298-2.8786-1.6417-6.1756-2.4596-7.5877-0.80554-1.3909-0.80027-1.609 0.0606-2.5076l0.70088-0.73156 3.334 0.15354c3.6945 0.17014 5.5256-0.07433 7.9788-1.0653 2.7006-1.0908 4.5295-2.331 6.7314-4.5646l2.1175-2.1479 4.602-0.0612 2.5089 2.4926c2.0569 2.0435 2.9117 2.6876 4.7444 3.5747 1.2296 0.59513 3.0537 1.2554 4.0537 1.4673 2.0544 0.43524 6.0844 0.51966 7.0621 0.14793 0.71421-0.27154 2.4052 0.40147 3.1913 1.2701 0.39143 0.43253 0.36235 0.56411-0.38515 1.7428-1.0113 1.5946-2.2293 5.2122-2.6319 7.8169-0.1687 1.0914-0.39249 5.5562-0.49731 9.9219-0.18909 7.8753-0.19603 7.9481-0.88536 9.2847-1.4194 2.7523-3.9652 4.4974-10.747 7.3673-1.9453 0.82316-4.3265 1.8914-5.2917 2.3738-2.016 1.0078-3.2117 1.2536-4.554 0.9364zm-1.0136-17.081 2.1401-1.1838 2.4965 1.3339c1.3731 0.73366 2.5963 1.3339 2.7182 1.3339 0.12192 0 7.9e-4 -0.92274-0.26904-2.0505-0.76903-3.2135-0.71315-3.5317 0.87971-5.009 2.3622-2.1909 2.5942-2.4339 2.5942-2.718 0-0.15214-0.35233-0.27661-0.78294-0.27661-0.43062 0-1.6846-0.1341-2.7866-0.298-1.9948-0.29669-2.0068-0.30332-2.7228-1.5077-0.39554-0.66534-0.89776-1.7505-1.116-2.4115-0.52553-1.5914-1.1908-1.7317-1.7418-0.36717-0.96435 2.3879-1.8106 3.8084-2.3397 3.9275-2.3607 0.53132-3.068 0.64479-4.0544 0.65047-0.66674 0.0038-1.1245 0.13022-1.1245 0.31048 0 0.16721 0.91595 1.1569 2.0354 2.1994l2.0355 1.8954-0.4469 2.2324c-0.2458 1.2278-0.52435 2.5138-0.61899 2.8578-0.1507 0.54773-0.10151 0.60304 0.39591 0.44517 0.31239-0.09915 1.531-0.71297 2.7081-1.3641z" fill="#ff1fec" stroke-width=".26458"/></g></svg>
</g>
    <g id="waryes:trait-recon"><?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-36.585 -81.41)" stroke-width=".26458"><path d="m40.486 121.44c-1.493-0.23424-1.5189-0.46588-1.5189-13.586v-11.946l0.88423-0.83344c0.48632-0.45839 1.1709-1.0775 1.5214-1.3758 0.35042-0.29828 0.75619-0.73871 0.90171-0.97873 0.18331-0.30236 0.67094-0.44776 1.5875-0.47337 2.101-0.05871 2.1824-0.03224 2.4739 0.80381l0.2767 0.79375h5.7381l0.70793-1.4434c1.1585-2.3622 0.86532-2.2953 9.6714-2.2062l7.6808 0.07773 0.67264 0.6323c0.36995 0.34777 0.83558 1.1217 1.0347 1.7198l0.36209 1.0875 5.6796 0.13229c4.828 0.11246 5.786 0.20209 6.389 0.5978 1.545 1.0139 1.5365 0.93186 1.4558 14.079-0.06818 11.095-0.11022 12.064-0.54214 12.495-0.43972 0.43953-1.8011 0.47015-22.357 0.50285-12.039 0.0191-22.218-0.0167-22.619-0.0797zm25.34-2.0757c3.599-1.0463 6.9941-4.5155 7.9564-8.1302 1.4438-5.4233-1.1582-10.926-6.3416-13.411-1.2553-0.60187-2.7522-1.1006-3.6028-1.2005-7.0327-0.8256-13.323 5.168-12.91 12.301 0.26674 4.6077 3.4387 8.7349 7.876 10.248 2.0815 0.70965 4.9719 0.78914 7.0222 0.1931zm17.856-21.022c0.71421-0.71421 0.66576-1.475-0.14561-2.2863-0.52714-0.52713-0.83074-0.63563-1.3876-0.49587-1.0889 0.27329-1.3772 0.63826-1.3772 1.7431 0 0.68544 0.14966 1.1 0.46302 1.2825 0.75062 0.4372 1.879 0.32498 2.4474-0.24339z" fill="#ff1fec"/><path d="m60.741 115.81c-2.3392-0.48832-4.0157-1.8455-5.1625-4.1793-0.72624-1.478-0.86538-2.0519-0.84631-3.4908 0.05793-4.3718 3.8996-7.936 8.1955-7.6036 4.2403 0.32812 6.9917 3.0927 7.214 7.2486 0.12038 2.2504-0.22414 3.4701-1.4611 5.1729-1.5805 2.1756-5.1088 3.4432-7.9396 2.8522z" fill="#fdfd55"/></g></svg>
</g>
    <g id="waryes:trait-reservist"><?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(52.775 51.907)" stroke-width=".26458"><path d="m-28.433-4.4793c-0.78742-0.30811-5.4775-3.6126-7.9322-5.5888-3.2893-2.6481-8.1919-7.3976-9.7159-9.4125-1.4885-1.9679-3.3559-5.779-3.9617-8.085-1.0272-3.9103-0.35171-9.2447 1.5491-12.234 4.2372-6.6631 13.394-7.5999 18.871-1.9307 1.4485 1.4992 1.8244 2.1254 3.1376 5.2256 0.82054 1.9373 1.4919 3.7007 1.4919 3.9188 0 0.21811-1.7264 2.1199-3.8365 4.2262-2.1101 2.1063-3.8365 3.9892-3.8365 4.1842s1.1013 1.695 2.4474 3.3334c4.5226 5.5047 6.4157 7.8594 6.4937 8.0772 0.11081 0.30922-3.8558 8.4866-4.1044 8.4614-0.11359-0.011488-0.38512-0.090771-0.6034-0.17618z" fill="#fdfd55"/><path d="m-24.498-5.9359c0.42046-0.76398 1.3748-2.5612 2.1207-3.9938l1.3563-2.6048-3.2319-4.0098c-1.7775-2.2054-3.9204-4.8343-4.762-5.8421-0.84158-1.0078-1.4691-1.9007-1.3946-1.9844 0.07456-0.08363 1.9239-1.9418 4.1096-4.1292l3.974-3.9771-1.0796-2.5052c-0.59376-1.3779-1.2655-2.8796-1.4927-3.3372-0.55548-1.1187-0.31871-1.7111 1.3515-3.3813 3.4273-3.4273 7.7311-4.5293 12.444-3.1862 2.6758 0.76252 5.7265 3.4262 7.0847 6.1857 1.3938 2.1642 1.1307 4.533 1.2586 6.8973-0.16197 5.0131-0.4289 5.2038-1.1432 6.88-1.7398 4.0828-3.8177 6.7998-8.4634 11.066-4.3544 3.999-11.457 9.3108-12.45 9.3108-0.37921 0-0.33109-0.2105 0.31753-1.3891z" fill="#ff1fec"/></g></svg>
</g>
    <g id="waryes:trait-resolute"><?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(297.72 86.321)" stroke-width=".26458"><path d="m-288.18-79.411c-0.5007-0.0014-1.0231 0.17637-1.4831 0.57206-1.0707 0.92098-1.0025 2.211 0.19069 3.6049 0.61406 0.71739 1.0062 1.4945 1.1193 2.2185 0.0958 0.61297 0.57192 2.5434 1.0578 4.2897 0.95394 3.4283 1.0243 3.6904 4.0075 14.949 2.7565 10.403 4.3651 16.187 4.654 16.735 0.25705 0.48742 1.9209 0.66586 2.1875 0.23461 0.0776-0.12557-0.0838-1.0483-0.35864-2.0505-0.27483-1.0022-1.1128-4.2034-1.8619-7.1138-1.1234-4.3647-2.0642-7.8176-3.0815-11.309-0.0399-0.13676-0.0494-0.229-0.0284-0.28525l-1.7433-6.2007c-0.58864-1.5869-0.68165-2.0276-1.2085-3.9005-0.38961-1.4974-0.68302-2.7327-0.97049-3.9543-0.38928-1.2219-0.93546-2.6113-0.90116-3.7022 0.6361-0.77996 0.52252-1.1225 0.51876-1.8804 0-1.3323-0.99704-2.2036-2.0986-2.2066z" fill="#fdfd55"/><path d="m-256.63-83.273c-0.25471 0.0119-0.59853 0.27339-1.2909 0.91157-2.7744 2.5574-5.8383 3.1935-12.83 2.6644-6.4319-0.4867-8.6504-0.33596-10.959 0.74414-1.0038 0.46973-2.3281 1.2661-2.943 1.7699-0.43991 0.36047-0.85085 0.66724-1.0842 0.81649l3.9698 18.787c0.0371-0.06941 0.1354-0.06774 0.31058-5.17e-4 0.26925 0.10332 0.97728-0.27254 1.9446-1.0325 0.83652-0.6572 1.9931-1.3986 2.5704-1.6474 1.6631-0.71687 4.8607-0.92437 10.295-0.66818 7.9316 0.3739 11.476-0.33982 13.574-2.7342 1.353-1.5435 1.2339-2.8768-0.99374-11.106-1.0177-3.7596-1.8505-7.1083-1.8505-7.4419 0-0.33359-0.17871-0.75488-0.3974-0.93638-0.10344-0.08585-0.20099-0.13202-0.31677-0.12661z" fill="#ff1fec"/></g></svg>
</g>
    <g id="waryes:trait-security"><?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-119.01 -79.386)"><path d="m147.56 113.37c-2.0604 0.37931-3.0937 1.0542-4.3848 2.8634-0.98431 1.3794-1.539 1.8788-2.6949 2.4257-2.2592 1.0688-1.8328 1.71 0.81183 1.2211 0.83942-0.15516 1.593-0.21513 1.6748-0.13333s-0.0724 0.52761-0.34262 0.99116c-1.2578 2.1574-2.3055 4.4912-2.1032 4.6845 0.18606 0.17776 2.9017 0.39707 3.6101 0.29145 0.11655-0.0174-0.0992-0.4398-0.47956-0.93844l-0.69195-0.90641 0.71365-1.078c0.39227-0.59276 0.81047-1.078 0.92966-1.078s0.56975 0.5132 1.001 1.14c1.2096 1.7581 2.8174 3.0934 3.7243 3.0934 1.324 0 1.264-0.54092-0.20361-1.835-0.75305-0.66404-1.3695-1.3662-1.3694-1.5601 6e-5 -0.19388 0.56606-1.1166 1.2573-2.0505 1.4415-1.9476 1.6707-2.0093 4.3419-1.172 0.92247 0.28916 1.9435 0.52717 2.2686 0.52917 0.97488 6e-3 2.0995 1.33 2.9957 3.528 0.87088 2.1357 1.3297 2.5606 2.7647 2.5606 1.025 0 1.0442-0.51506 0.0579-1.5451-1.0598-1.1067-1.7792-2.4078-1.7792-3.2174 0-0.87706 0.74341-2.1083 2.4179-4.0039 0.85277-0.96534 1.5508-1.8932 1.5508-2.0619 0-0.16866-0.50985-0.86685-1.1328-1.5518-0.62289-0.68499-1.302-1.484-1.5095-1.7751-0.20741-0.29104 0.31193 0.21499 1.1544 1.1245 0.84252 0.90951 1.6538 1.6536 1.8025 1.6536 0.14869 0 0.61598-0.29078 1.0387-0.64647 0.66318-0.55803 0.87721-0.6091 1.5601-0.37104 0.4353 0.15175 0.85904 0.38526 0.94154 0.51883 0.26661 0.43139 0.64286-0.0406 0.64286-0.80667 0-0.60656 0.13909-0.77288 0.74982-0.89503 0.64975-0.12994 0.73524-0.25084 0.63924-0.90486-0.085-0.57915-0.39619-0.90659-1.3364-1.4046-0.67419-0.3571-1.5641-0.93358-1.9777-1.2811-0.66431-0.55817-0.74224-0.78057-0.67024-1.9079 0.0451-0.70514-0.0367-1.2977-0.18242-1.3245-0.14502-0.0267-0.65627 0.62375-1.1364 1.4454-1.0055 1.7208-2.9332 3.2958-5.0534 4.129-0.78457 0.3083-2.8019 0.79575-4.4829 1.0831-2.4241 0.31752-5.0025 0.7322-7.1184 1.1663z" fill="#ff1fec" stroke-width=".26458"/><path d="m142.23 106.38c-0.24011 0.0924-0.45928 0.17964-0.65928 0.26162-0.19999 0.0819-0.38107 0.15874-0.54455 0.2308-0.0454 0.0199-0.0794 0.0369-0.12211 0.0562 0.49208 0.29495 1.0816 0.7237 1.8474 1.332 1.0644 0.84565 2.0061 1.4726 5.2299 3.4812 0.68356 0.42588 1.2012 0.85694 1.2053 0.99706l2.2946-0.39798-0.9687-0.56485c-2.2152-1.126-6.2525-3.8442-7.3254-4.932-0.35959-0.38653-0.75083-0.50478-0.95716-0.46403z" fill="#fdfd55" stroke-width=".25123"/><g stroke-width=".26458"><path d="m131.46 95.586c-0.23417-0.0025-0.46214 0.02662-0.6475 0.09663-1.075 0.60584-2.4372 1.9746-2.9435 2.8231-0.4362 0.81505-1.1021 5.3379-0.93741 6.3676l0.15916 0.99271-3.2003 1.2718c-1.8267 0.72585-3.1296 1.3854-3.036 1.5369 0.0902 0.14597 0.19011 0.65691 0.22221 1.1358 0.0767 1.1442 1.3534 3.3114 1.9508 3.3114 0.25409 0 0.91176-0.53772 1.4614-1.1953 0.54964-0.65756 1.0924-1.1379 1.2061-1.0676 0.11375 0.0703 0.54478-0.22541 0.95808-0.6568 0.41329-0.43139 0.93736-0.78067 1.1648-0.77567 0.48154 0.01 1.7009 1.0244 1.9213 1.5989 0.22728 0.59225-0.72809 4.6747-1.5053 6.4322-0.33322 1.7882-3.4351 4.713-3.7228 5.8219-0.20616 0.82137 0.4188 1.9256 1.2883 2.2758 0.31894 0.12847 0.83217 0.24112 1.1405 0.25012 0.79467 0.0238 3.0823-3.0376 3.6344-3.6923 0.88618-1.4471 2.088-3.1657 2.4691-5.1206 0.25784-1.538 0.63113-1.6898 1.0604-0.43098 0.44074 1.2923 0.41855 3.6439-0.0486 5.1837-0.59814 1.9717-0.51739 2.608 0.43098 3.406 1.1637 0.97922 2.5096 0.85822 3.284-0.29507 0.93635-1.3945 1.5052-4.6571 1.1942-6.8497-0.38007-2.68-1.2157-5.1758-2.2458-6.7066-0.83042-1.234-0.85985-1.3447-0.39274-1.4929 0.72267-0.22936 0.63036-0.86973-0.43615-3.0277-0.51737-1.0469-0.9043-2.0095-0.8599-2.1389s0.83928 0.12615 1.7658 0.56793c0.92653 0.44174 2.0162 0.84518 2.4221 0.89658 0.44568 0.0564 0.90312 0.22778 1.495 0.58498 0.0449-0.0204 0.0805-0.0383 0.12816-0.0594 0.17158-0.0762 0.36163-0.15728 0.57154-0.24391 0.2099-0.0866 0.43994-0.17878 0.69194-0.27647 8e-3 -0.6267-0.50229-1.091-0.84801-1.4723-0.46979-0.51913-1.0838-1.0716-1.3648-1.2278-0.44467-0.24723-0.4615-0.33329-0.12971-0.66508 0.35067-0.35067 1.2292-0.67691 2.4515-0.91054 0.67451-0.12893 7.1087-2.7608 7.5158-3.0742 0.1819-0.14007 0.33073-0.41862 0.33073-0.61908 0-0.58277-1.2573-0.43166-3.7042 0.44493-1.2369 0.44314-2.5228 0.84913-2.8572 0.90227-0.33435 0.05314-0.75108 0.20901-0.92604 0.34675-0.17495 0.13774-0.49639 0.25335-0.71468 0.25735-0.21828 4e-3 -1.1708 0.26652-2.1167 0.58394-0.94589 0.31742-2.1365 0.63414-2.6458 0.70384-0.91159 0.12476-0.94256 0.0966-1.9844-1.7875-0.58208-1.0527-1.3826-2.2063-1.7787-2.5637-0.65999-0.75984-0.83561-1.4165-1.8722-1.4428z" fill="#ff1fec"/><path d="m137.42 88.531-8.0119 2.6732c0.0962 0.3201 0.22275 0.64071 0.38396 0.9586 0.68786 1.3564 1.1896 1.8826 2.4102 2.5275 0.43656 0.23067 1.262 0.42415 1.8345 0.42995 0.90975 0.0093 1.2023-0.15713 2.3254-1.3224 1.3444-1.3391 1.1746-2.3121 1.1927-3.5497-0.0333-0.79782-0.0616-1.3171-0.13487-1.7172z" fill="#fdfd55"/><path d="m133.14 84.925c-2.8225-0.02294-4.791 2.9993-3.8664 6.0751l8.0119-2.6732c-0.12028-0.65705-0.36185-0.99169-0.9462-1.7048-0.6571-0.8019-1.3305-1.3087-2.0092-1.5121-0.40897-0.12253-0.80741-0.18189-1.1901-0.185z" fill="#ff1fec"/></g></g></svg>
</g>
    <g id="waryes:trait-special-forces"><?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-64.637 -84.591)" stroke-width=".26458"><path d="m88.41 106.48c-0.76863 0.68889-1.5925 1.6098-2.6805 1.6289-1.4569 0.77317-2.9537 1.3326-4.5666 1.6992-0.80435 0.14944-1.4273 0.55156-1.7509 1.3189-0.70987 1.0216-0.40865 2.4439-0.8631 3.5569-0.51408 0.48454-0.1384 1.3234-0.64266 0.60395 0.44357-0.87411 0.1329-1.8545 0.59921-2.7246 0.21612-0.69923 0.71982-1.4602-0.11266-1.9351-0.42523-0.77392-1.3892-0.18279-2.0867-0.26632-0.36811 0.40318 0.0071 1.4596-0.0704 2.1184-0.01432 0.78128-0.02669 1.5617 0.7202 2.0176 1.0042 0.5755 0.3064 0.93606-0.15193 1.4966-0.11128 0.86821 0.97068 1.2273 1.4205 1.8559 0.94129 0.83423 1.1291 2.1991 1.7369 3.2683 0.56022-0.0367 2.0606-0.3907 1.4566 0.54938 0.53208 1.9087 1.3139 3.8158 1.9411 5.724 0.75386 1.1353 1.6008 2.2146 2.1771 3.4566-0.67294 0.71271-1.1015-0.58353-1.6474-0.90977-0.79043-0.78404-1.1165-1.9314-1.5574-2.9323-0.43374-1.7084-0.86479-3.4175-1.3148-5.1218-1.0299-0.26761-0.37272 1.0966-0.51651 1.6861 0.05399 1.624 0.10801 3.2481 0.16201 4.8721 1.7598 2.2988 3.8142 4.3377 5.7991 6.4378 1.1535 0.40989 2.2894 0.92209 3.5436 0.74363 1.9916-0.0344 4.0228 0.0942 5.9902-0.0409 1.0164-0.39381 1.8161-1.0762 2.4983-1.9149 1.5271-1.7352 3.3955-3.205 4.5028-5.267 0.59958-0.84796 0.19939-1.9985 0.35511-2.9808-0.0212-0.61939 0.11998-1.9378 2e-3 -2.1398-1.0598 2.3357-2.1597 4.6526-3.2758 6.9618-0.48909 0.19264-2.0128 1.469-1.2354 0.33709 0.90798-1.9268 2.2956-3.5955 2.9351-5.6473 0.77225-2.0886 1.5328-4.216 2.9647-5.9598 0.65326-1.0898 1.6563-1.8906 2.5067-2.8174 0.0552-1.2196-1.1913-0.54909-1.4924-1.2491 0.0157-0.82584-0.96666-0.99775-0.90396-1.7022-0.14155-1.4898-0.84414-2.8965-1.2094-4.3531-0.0372-0.86598-1.0282-1.1401-1.7442-1.2111-3.0861-0.0782-6.1859-0.0651-9.2634-0.1993-1.2496-0.3007-2.3709-0.95622-3.688-0.90929-0.17907-0.0172-0.35814-0.0343-0.53722-0.0514zm-4.0654 3.3533c1.2132 0.16539 2.515 0.12948 3.6733 0.41986 0.66336 0.48185 1.1903 1.0242 0.95694 1.904-0.10577 0.79244 0.22184 1.7548-0.17644 2.4326-0.61186 0.72097-1.2369 1.4232-2.199 1.6425-1.0093 0.61135-2.2081 0.27631-3.3229 0.36085-0.83201-0.68487-2.1723-1.0453-2.2391-2.2893 0.06484-0.80557-0.12734-1.72 0.09319-2.4596 0.78171-0.58427 1.2869-1.6916 2.3485-1.7494l0.4396-0.17969zm11.999 0.0987c1.2754 0.0441 2.5957-0.0859 3.844 0.0629 0.93832 0.62299 2.2333 0.88144 2.6336 2.0543 0.69014 0.67236 0.38589 1.4514 0.074 2.2313-0.13712 1.0334-1.0749 1.581-1.7096 2.3126-1.7994 3e-3 -3.7048 0.0135-5.2631-1.0213-0.6649-0.4055-1.3217-0.92942-1.2388-1.7902-0.16617-0.78476-0.30891-1.5658 0.2514-2.2302 0.24281-0.726 0.88518-1.1112 1.4085-1.6194zm-4.4106 4.7811c0.97129 0.14053 1.0163 1.3636 1.531 2.0376 0.49495 1.1257 1.3008 2.176 1.5959 3.3503 0.24768 0.8707-0.38281 1.3329-1.0125 1.7953-0.40426 0.63746-1.7085 0.85536-1.3783-0.20745-0.02716-1.347-0.10389-2.6926-0.15119-4.039-0.45007-1.0214-1.3115 0.0554-1.2945 0.73606v4.027c-0.99728 0.17531-1.5066-0.94792-2.2609-1.4194-0.50903-0.47962-0.26589-1.4284 0.10964-1.9694 0.7797-1.414 1.3537-2.9733 2.6152-4.0462 0.08186-0.0883 0.16373-0.17651 0.24559-0.26476zm4.4416 3.1228c1.094 0.61886 2.1339 1.4268 3.2603 1.9328 0.76209 0.0462 1.343 0.7318 2.0298 1.0442-0.75678 1.144-1.2746 2.3929-1.619 3.7176-0.76878-0.0239-0.80136 1.1756-1.2556 1.6745-0.5214 0.76749-1.3441 1.3629-2.059 1.9416-1.4265 0.39791-2.7645 1.3356-4.2941 1.107-2.1002 0.1657-4.0392-0.69643-5.9761-1.3681-0.8436-0.74186-1.7292-1.4512-2.1161-2.5448-0.4967-1.063 0.62518 0.22654 0.94752 0.48179 0.56116 0.41609 1.3185 0.493 1.8827 1.0434 1.0133 0.83035 2.3164 1.1563 3.5751 1.3689 1.3043-0.045 2.6579 0.0893 3.9319-0.0663 1.2215-0.81238 2.6321-1.3918 3.7354-2.3496 0.59209-0.5159 1.0183-1.1021 0.87885-1.9278 0.01025-1.132 0.25015-2.3339 0.11648-3.4224-0.623-1.1946-2.2281-1.0718-3.0831-2.0438-0.44635-0.23311-0.23802-0.30814 0.04486-0.58903zm-10.787 1.3265c-0.4516 0.65533-1.6072 1.0554-1.2875 1.9909-0.01405 0.91225 0.36428 1.9084 0.09983 2.7671-0.39669 1.265-0.66253 0.12146-0.95346-0.56305-0.36462-0.93534-0.86776-1.8059-1.314-2.703 0.83329-0.47592 1.6081-1.1059 2.596-1.1322 0.28626-0.12014 0.57266-0.23992 0.85907-0.3597zm22.617-12.045c-1.2885 0.49765-2.818 0.0935-4.0403 0.70914-0.26216 0.53247 0.1379 1.4932 0.28274 2.1226 0.69341 0.77108 0.43394 1.9801 1.1606 2.7622 0.45625 0.44697 0.53783 1.7222 1.3221 1.445 0.84437-0.0545 0.41678-1.3116 0.67551-1.9201 0.14313-1.6239 0.89844-3.1058 1.3404-4.6604-0.24687-0.153-0.49389-0.30576-0.74104-0.45831z" fill="#ff1fec"/><path d="m88.579 86.301c-1.9074 0.87788-3.9244 1.5567-5.5902 2.8735-1.905 1.2192-3.6364 2.708-5.2632 4.2704-1.5229 1.5113-2.9062 3.139-4.1102 4.9162-1.1778 1.5587-2.2845 3.2134-3.0667 5.0003-0.40442 1.3228-1.0867 2.6002-0.88586 4.0218 0.01633 0.7612 0.85436 1.2337 1.2189 1.8725 0.98497 0.13944 2.0407 0.0925 2.9844 0.3405 0.70661 0.63169 1.7609 0.0909 2.6271 0.18439 2.4446-0.17172 4.9607-0.0646 7.2433-1.1142 1.6494-0.51208 3.3764-1.1419 4.5009-2.5202 2.77-2.8372 5.7683-5.45 9.0412-7.6936 0.58213 0.10675-0.70426 1.1083-1.0384 1.4799-1.9894 1.9142-3.9501 3.855-5.6551 6.0324-0.80471 0.76519 0.77138 0.87059 1.2734 1.0717 2.2599 0.26733 4.5772 0.17434 6.8593 0.30186 3.1589 0.21769 6.2938-0.37463 9.4402-0.57827 0.74975-0.32723 1.4994-0.65469 2.249-0.98237 0.16891-0.92194-0.25181-1.7001-0.70205-2.4714-0.45179-0.52774-1.3063 0.36666-1.9282 0.38186-2.1804 0.40594-4.3469 0.9411-6.5813 0.84734-1.2951 0.0375-2.5902 0.0747-3.8853 0.11208 2.7478-0.52843 5.5752-0.65208 8.3044-1.2262 1.3106-0.53269 2.7555-0.84052 3.9798-1.5178 1.1134-0.7127 1.234-2.1162 1.7839-3.221 0.61464-1.3452 0.34841-2.896 0.38088-4.3398 0.20742-1.2235-0.88507-2.0257-1.4203-3.0086-0.7703-1.4426-2.3607-2.1019-3.555-3.1394-1.4703-0.71517-3.0408-1.3395-4.5763-1.8862-4.5428-0.0028-9.0857-0.0054-13.628-0.0077z" fill="#fdfd55"/></g></svg>
</g>
    <g id="waryes:trait-transport"><?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-75.337 -107.73)"><path d="m88.389 157.78c-0.7351-0.31388-1.7348-3.0088-3.1897-8.5989-0.32976-1.267-0.98847-3.7938-1.4638-5.6151-0.47534-1.8213-1.3349-5.1256-1.9102-7.3428-0.57524-2.2172-1.5543-5.975-2.1756-8.3506-3.5328-13.506-3.6234-14.077-2.4259-15.275 0.61283-0.61283 0.96899-0.70679 2.679-0.70679 3.6273 0 6.0353 1.8244 8.5874 6.5063 3.5452 6.5037 5.492 13.668 6.3145 23.239 0.14715 1.7122 0.34078 2.4107 0.81502 2.9403 0.70128 0.78318 0.39988 0.8104 6.3811-0.5761 7.2643-1.6839 12.164-1.9886 18.347-1.1409 4.7604 0.6526 6.5276 1.1936 6.7464 2.0654 0.46008 1.833-0.60717 5.0467-2.7523 8.2874-0.4193 0.6335-0.92911 1.4758-1.1329 1.8717-0.20377 0.39593-0.75452 1.1734-1.2239 1.7277l-0.85339 1.0078-16.188 0.0583c-8.9037 0.0319-16.353-0.0121-16.554-0.0979z" fill="#ff1fec" stroke-width=".28795"/></g></svg>
</g>

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<g id="waryes:trait-false-flag"><?xml version="1.0" encoding="UTF-8"?>
<svg
   version="1.1"
   viewBox="0 0 13.229 13.229"
   xml:space="preserve"
   id="svg3510"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><defs
     id="defs3514" /><path
     style="fill:#ff1fec;stroke-width:0.363148;fill-opacity:1"
     d="M 1.8797915,7.9385164 C 1.3495372,7.5214182 0.67215349,6.709203 0.37449443,6.133593 -0.1399501,5.1387673 -0.12209895,5.0578048 0.73560304,4.495817 1.4193915,4.0477815 2.1018788,3.9598008 3.553731,4.132527 5.9217485,4.4142489 7.0897722,4.4148985 9.6602638,4.135927 11.325221,3.955229 11.822963,4.039754 12.547155,4.6261686 13.412974,5.3272676 13.415219,5.3457991 12.759604,6.3803075 12.395167,6.9553619 11.749731,7.7082069 11.325305,8.0532948 10.488729,8.7334913 8.0122401,8.9223737 7.6484389,8.3337311 7.5249981,8.1339997 7.0347484,7.9705831 6.5589953,7.9705831 c -0.475753,0 -0.9660027,0.1634166 -1.0894434,0.363148 C 5.0770293,8.9688454 2.8824873,8.7272395 1.8797915,7.9385189 Z M 4.9248301,6.5568412 c 0,-0.4002309 -0.9013414,-0.7651475 -1.8899058,-0.7651475 -0.6175456,0 -0.665711,0.090793 -0.2889813,0.5447208 0.4858702,0.5854384 2.1788871,0.7567123 2.1788871,0.2204267 z M 10.372047,6.3364145 c 0.376731,-0.4539305 0.328566,-0.5447208 -0.28898,-0.5447208 -0.988565,0 -1.8899063,0.3649166 -1.8899063,0.7651475 0,0.5362856 1.6930167,0.3650117 2.1788863,-0.2204267 z"
     id="path6429" /></svg>
     </g>

<g id="waryes:trait-jammer"><?xml version="1.0" encoding="UTF-8">
<svg version="1.1" viewBox="0 0 13.229 13.229" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="#fdfd53" stroke-width=".37964"><path d="m10.2 4.2379c-0.69653-0.27458-1.4807-0.4597-2.3237-0.52369l-0.018493-1.6827c0.9014 0.01832 2.1962 0.43891 2.9157 0.71064 0.71771 0.29373 1.6494 0.73886 2.3904 1.3818l-1.0084 1.2215c-0.6531-0.49746-1.2834-0.80761-1.9554-1.1075z"/><path d="m7.8433 6.6746s0.00843-1.6043 0.01931-1.6441c0.73502 0.086217 1.3946 0.27626 2.0426 0.54267 0.55549 0.20455 0.99321 0.52768 1.4564 0.86688l-0.88369 1.1581c-0.60993-0.39738-0.74639-0.47386-1.2316-0.65406-0.50018-0.18891-0.79691-0.20223-1.4031-0.26946z"/><path d="m7.8579 9.2446-0.00335-1.3369s0.66088 0.04578 1.1136 0.28703c0.44359 0.24028 0.7268 0.5274 0.7268 0.5274s-0.57072 0.84028-0.72678 1.053c0 0-0.095101-0.1055-0.48324-0.34577-0.35798-0.1754-0.62698-0.1848-0.62698-0.1848z"/><path d="m3.0425 4.2342c0.69653-0.27458 1.4807-0.4597 2.3237-0.52369l0.018493-1.6827c-0.9014 0.01832-2.1962 0.43891-2.9157 0.71064-0.71771 0.29373-1.6494 0.73886-2.3904 1.3818l1.0084 1.2215c0.65311-0.49746 1.2834-0.80761 1.9554-1.1075z"/><path d="m5.3994 6.671s-0.00843-1.6043-0.01931-1.6441c-0.73502 0.086217-1.3946 0.27626-2.0426 0.54267-0.55549 0.20455-0.99321 0.52768-1.4564 0.86688l0.88369 1.1581c0.60993-0.39738 0.74639-0.47386 1.2316-0.65406 0.50018-0.18891 0.79691-0.20223 1.4031-0.26946z"/><path d="m5.3848 9.241 0.00335-1.3369s-0.66088 0.04578-1.1136 0.28703c-0.44359 0.24028-0.7268 0.5274-0.7268 0.5274s0.57072 0.84028 0.72678 1.053c0 0 0.0951-0.1055 0.48324-0.34577 0.35798-0.1754 0.62698-0.1848 0.62698-0.1848z"/></g><path d="m5.6912 2.0101 0.98565-0.4807 0.95676 0.46467-0.011431 7.4971s-1.9078 0.015712-1.9403 0.02311c0.020153-0.029451 0.00113-7.4476 0.00935-7.5042z" fill="#ff1fec" stroke-width=".37964"/><ellipse cx="6.6676" cy="10.751" rx="1.0166" ry=".98369" fill="#ff1fec" stroke-width=".38578"/></svg>
</g>

<g id="waryes:trait-ew"><?xml version="1.0" encoding="UTF-8"?>
<svg
   viewBox="0 0 52.916668 52.916668"
   version="1.1"
   id="svg119898"
   xml:space="preserve"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview
     id="namedview119900"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     showgrid="false"
     inkscape:zoom="5.1754899"
     inkscape:cx="60.09093"
     inkscape:cy="139.31048"
     inkscape:window-width="3840"
     inkscape:window-height="2054"
     inkscape:window-x="2869"
     inkscape:window-y="-11"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" /><defs
     id="defs119895" /><g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(-36.585484,-81.410217)"><ellipse
       style="fill:none;fill-opacity:0;stroke:#ff1fec;stroke-width:2.59932695;stroke-opacity:1;stroke-dasharray:none"
       id="path3157"
       transform="matrix(0.62120437,0.7836486,-0.6909792,0.72287464,0,0)"
       ry="27.118692"
       rx="11.497933"
       cy="18.781652"
       cx="122.81851" /><ellipse
       style="fill:none;fill-opacity:0;stroke:#ff1fec;stroke-width:2.59932695;stroke-opacity:1;stroke-dasharray:none"
       id="path3157-6"
       transform="matrix(0.89002838,-0.45590512,0.57373909,0.81903813,0,0)"
       ry="29.347122"
       rx="11.10684"
       cy="126.05988"
       cx="-10.141153" /><path
       sodipodi:type="star"
       style="fill:#fdfd53;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-opacity:1"
       id="path4015"
       inkscape:flatsided="false"
       sodipodi:sides="5"
       sodipodi:cx="17.488134"
       sodipodi:cy="136.35281"
       sodipodi:r1="14.717505"
       sodipodi:r2="6.2029586"
       sodipodi:arg1="0.96605867"
       sodipodi:arg2="1.5943772"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 25.855717,148.46019 -8.51384,-5.90614 -8.7828149,5.49819 2.9861519,-9.92224 -7.9431327,-6.65392 10.3593837,-0.22614 3.873689,-9.61054 3.416299,9.78248 10.337204,0.71427 -8.247995,6.27205 z"
       transform="matrix(0.54783596,0,0,0.54214858,34.701649,46.692806)"
       inkscape:transform-center-x="0.018008512"
       inkscape:transform-center-y="-0.62528835" /><path
       sodipodi:type="star"
       style="fill:#fdfd53;fill-opacity:1;stroke:none;stroke-width:0.263954;stroke-dasharray:none;stroke-opacity:1"
       id="path4015-9"
       inkscape:flatsided="false"
       sodipodi:sides="5"
       sodipodi:cx="17.488134"
       sodipodi:cy="136.35281"
       sodipodi:r1="15.771065"
       sodipodi:r2="6.2029586"
       sodipodi:arg1="0.95350353"
       sodipodi:arg2="1.5818221"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 26.616895,149.2133 -9.197152,-6.6579 -9.3417196,6.45349 3.4899716,-10.80442 -9.0243897,-6.89026 11.3540727,-0.0196 3.76434,-10.71191 3.527232,10.79231 11.35088,0.26994 -9.174124,6.6896 z"
       transform="matrix(0.39226092,0,0,0.38818865,75.150665,69.051316)"
       inkscape:transform-center-x="0.0128945"
       inkscape:transform-center-y="-0.44771848" /><path
       style="fill:#fdfd53;fill-opacity:1;stroke:none;stroke-width:0.265;stroke-linecap:butt;stroke-linejoin:miter;stroke-dasharray:none;stroke-opacity:1"
       d="m 65.54808,130.88984 1.294098,-14.63201 2.024343,-0.0723 c 0,0 -2.261844,-20.345874 -2.223694,-20.38244 l 1.509484,0.187574 -0.153365,-10.929401 -8.531159,-3.723344 1.084469,7.952775 -1.662853,-0.216894 3.144961,20.89411 -2.494279,-0.0723 z"
       id="path4765"
       sodipodi:nodetypes="cccccccccccc" /></g></svg>
</g>

<g id="waryes:trait-era">
<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(142.42 59.137)"><path d="m-115.42-12.342c-2.1532-1.6546-3.6738-3.0725-15.574-14.522l-9.1917-8.8438-1.4392-2.1748v-1.2724l0.93503-1.0332-0.65194-2.7844-0.069-3.0465-0.069-3.0465 10.735-3.5494c5.9044-1.9522 11.062-3.548 11.461-3.5463l0.72536 0.0031 3.0916 2.3857c1.7004 1.3121 4.7034 3.6178 6.6733 5.1236 12.447 9.5148 14.515 11.145 14.919 11.761l0.44921 0.68558-0.18739 0.9989-0.1874 0.9989 1.7902 3.5464v7.4592l1.4507 1.3629v1.7911l-1.8859 2.1735-0.66723-0.0017c-0.36698-0.0012-1.0674-0.20884-1.5566-0.46179l-0.88936-0.45991-0.563 0.563 0.4809 0.92996 0.4809 0.92996-0.28155 0.7337-3.0933 1.3547c-1.7013 0.74507-3.6834 1.5125-4.4046 1.7054l-1.3113 0.35072-0.80388-1.0994-2.4742-0.051-0.54186 2.1761-1.7836-0.05786 0.72384-0.20141 0.72384-0.2014 0.0998-0.51798c0.0549-0.28489 0.0175-0.84559-0.083-1.246l-0.18272-0.72802-0.35073 0.27327c-0.19289 0.1503-0.89686 0.40684-1.5644 0.5701l-1.2136 0.29683-2.596-0.59405-0.3474-0.75522-0.3474-0.75534-0.46628-6.6733-1.5045-3.7368-1e-3 -1.033-1e-3 -1.033-1.121-1.8385-4.8786-4.1795c-2.6832-2.2987-5.8578-5.0968-7.0547-6.218-1.1968-1.1212-2.6984-2.4749-3.3367-3.0083-0.63831-0.53342-2.3105-2.1199-3.716-3.5256l-2.5555-2.5557h-0.69154c-0.38035 0-0.77368 0.1329-0.87406 0.29533l-0.18253 0.29533 0.32225 3.2589c0.17724 1.7924 0.39534 3.7261 0.48466 4.2971l0.16241 1.0382-0.98726 0.98726 0.18544 0.73887 0.18545 0.73887 2.9629 2.9708c2.6127 2.6197 12.903 12.534 19.066 18.371 1.1968 1.1333 2.9828 2.6535 3.9687 3.3781l1.7926 1.3175 3.088 0.21457-3.4817 0.05582-1.7944-1.3789zm3.2116-8.8045 0.66216-0.5898 4.6181-1.8602c6.5657-2.6447 11.493-4.4739 11.644-4.3227 0.07133 0.07134 0.12592 0.92076 0.1213 1.8876l-0.0084 1.7579 0.60051 0.37114 0.53726-0.53726 0.14243-2.9321 0.14243-2.9321-0.72648-0.86338c-0.39956-0.47486-0.72648-0.98171-0.72648-1.1263 0-0.14462-0.16321-0.61438-0.36268-1.0439l-0.36268-0.78094-0.58029 0.0042c-0.31916 0.0023-0.9067 0.25951-1.3056 0.57157-0.39895 0.31206-0.81942 0.57029-0.93437 0.57384-0.11496 0.0035-0.89835 0.31959-1.7409 0.7023-2.6446 1.2013-3.7546 1.6303-7.3348 2.8348-1.915 0.64423-3.6058 1.2885-3.7574 1.4317-0.1516 0.14318-0.52577 0.26033-0.83149 0.26033s-1.1936 0.22649-1.973 0.50332l-1.4171 0.50332-0.0115 0.58472c-6e-3 0.3216 0.35271 1.7857 0.7979 3.2536l0.80943 2.6689 0.66767-0.16529c0.36722-0.09091 0.96564-0.4307 1.3298-0.75509zm4.6906-9.5008c3.8218-1.4459 8.2543-3.0958 9.8501-3.6665 3.0928-1.1061 3.6268-1.4006 3.6268-2.0002 0-0.44496-0.78533-1.2908-1.1984-1.2908h-0.28654l0.32106 0.51948-0.43355 0.16637c-0.23845 0.0915-0.6167 0.09609-0.84054 0.01019l-0.40698-0.15618-1.4064 0.59073c-2.219 0.93203-14.289 5.4046-16.098 5.965l-1.6351 0.50664-0.32338 0.70975c-0.17786 0.39036-0.32339 0.91614-0.32339 1.1684v0.45865l1.1028-0.17635c0.60655-0.09699 4.2297-1.3593 8.0515-2.8052zm10.507-8.3456c-0.16978-0.2049-1.7579-1.4752-3.5291-2.8229-7.672-5.8375-11.394-8.6843-14.576-11.149l-3.3949-2.6293h-0.514c-0.2827 0-0.58711 0.11831-0.67648 0.26291l-0.16248 0.26291-1.1302-0.29556-17.18 5.609-0.16752 0.43656-0.16753 0.43656 0.60042 0.60042 1.2616-0.30136c1.7258-0.41226 3.9308-1.1506 5.3236-1.7826 0.63832-0.28964 2.2051-0.87461 3.4817-1.2999 1.2766-0.42533 2.7128-0.95131 3.1916-1.1688s1.4928-0.55189 2.2536-0.74302c0.76072-0.19113 1.4539-0.46202 1.5404-0.60197 0.0865-0.13995 0.50861-0.25385 0.93804-0.25312l0.78077 0.0013 0.87044 0.80691c0.98618 0.91421 6.5935 5.4169 7.8443 6.2989 0.92364 0.65136 2.3092 1.7654 3.1812 2.5577 0.31916 0.29 1.0325 0.80764 1.5852 1.1503 0.55271 0.34266 1.2294 0.84754 1.5039 1.122 0.27442 0.27441 0.86672 0.73468 1.3162 1.0228 0.44952 0.28814 1.511 1.0828 2.3588 1.7659l1.5415 1.242 2.2343-0.1564-0.3087-0.37255z" fill="#ff1fec" stroke-width=".29014"/></g></svg>
</g>

<g id="waryes:trait-airlifter">
<?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(315.65 107.43)"><path d="m-290.52-62.604-0.52633-1.3717 3.1289-7.4886v-5.6459l-1.0015-0.61893-1.0014-0.61893v3.1226h-1.0014c-0.55079 0-1.0015-0.46254-1.0015-1.0279v-1.0279l-11.997 0.47381-1.262-1.2743-1.262-1.2743 1.7525-0.98884c0.9639-0.54386 1.7526-1.4105 1.7526-1.9258v-0.93697l-3.2547 1.9844c-1.7901 1.0914-3.5927 1.9861-4.0058 1.9882-0.41308 2e-3 -0.75109-0.36393-0.75109-0.8133 0-0.44937 1.9009-1.8854 4.2243-3.1912l4.2242-2.3742-2.6293-0.70318c-1.4461-0.38675-4.023-1.5265-5.7264-2.5327-1.7034-1.0062-3.0971-2.183-3.0971-2.615 0-0.43204 0.35051-0.78553 0.77869-0.78553 0.42832 0 3.3682 1.3435 6.5332 2.9856l5.7545 2.9856 7.0519-1.4834c3.8786-0.81588 7.9559-1.4834 9.0609-1.4834h2.009l1.3699-1.3699 1.3699-1.3699-5.1968-0.62432c-2.8583-0.34338-7.1122-0.62823-9.453-0.63302l-4.2562-0.0087v-2.1105l21.695 1.3728 12.396-5.5632 0.64682 0.64682c0.35579 0.35576 0.45904 0.76848 0.22975 0.91716-0.22938 0.14868-2.6705 1.3366-5.4245 2.6398l-5.0073 2.3695 3.4498 1.1863 3.4497 1.1863-1.1061 0.68362-1.1061 0.68361-3.5328-1.3557 0.69676 1.8156 0.69671 1.8156-1.2681 2.8647c-0.69742 1.5756-1.6087 2.8647-2.025 2.8647-0.41636 0-0.75701 0.67598-0.75701 1.5022v1.5022h-1.0015c-0.5508 0-1.0014-0.40846-1.0014-0.90769v-0.90769l-1.7525 0.34663c-0.9639 0.19065-2.9918 0.6077-4.5066 0.92677l-2.7542 0.58012v2.0829l1.6405-1.0139-0.39027 2.7011-0.39025 2.7011 3.2708 3.3333 3.2707 3.3333-2.0546 3.2574-8.4244 0.56412zm4.4256-3.8924 1.0668-1.2854-1.541-2.4933-2.3073 5.0641h0.85732c0.47155 0 1.3374-0.57843 1.9242-1.2854zm1.1814-20.793v-0.6667l-5.2576 0.99438c-2.8917 0.54691-5.5966 1.2943-6.011 1.6608l-0.75341 0.66643 6.011-0.99412c3.3061-0.54676 6.011-1.2941 6.011-1.6608z" fill="#ff1fec" stroke-width="1.0014"/></g></svg>
</g>

<g id="waryes:trait-airlift">
<?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(315.65 107.43)"><path d="m-302.57-70.624-4.0904-0.96178-7.6686-8.3679v-7.7831l1.4088-1.4088 1.4088-1.4088h3.3644c1.8505 0 4.4207 0.56525 5.7116 1.2561 3.4501 1.8464 6.4671 2.3467 16.516 2.7383l9.0382 0.35228 3.107 2.0358 3.107 2.0358 2.8191-2.6484 2.8191-2.6484 1.6376 1.6376-3.5965 3.2849c-1.9781 1.8067-5.2671 3.9769-7.309 4.8227-2.0419 0.84578-3.436 1.8143-3.098 2.1523 0.33813 0.33795 0.0266 1.3235-0.69311 2.19l-1.3076 1.5756 1.0243-0.02041c0.56337-0.01113 2.2844-1.3486 3.8246-2.972 1.5402-1.6234 3.0737-2.6783 3.4078-2.3442 0.66453 0.66454-4.9462 5.4435-7.8913 6.7215-1.0114 0.43889-3.424 0.81446-5.3611 0.83458l-3.5221 0.03638 3.6746-1.5992c2.0211-0.87954 3.9609-2.0622 4.3107-2.6282l0.636-1.0291-16.84-0.09338-12.327-5.4137v-1.0291c0-1.4008 0.0958-1.3785 6.6015 1.5344l5.7259 2.5639 15.262-0.04348 9.221-3.9644-3.0574-2.8812-1.0336 2.8075-3.739-2.2799c-2.0565-1.2539-4.241-2.2818-4.8544-2.2843l-1.1153-0.0044 1.4088 1.4088c0.77484 0.77486 1.4088 1.8675 1.4088 2.428v1.0192l-3.6353-2.5885-3.6353-2.5885 3.8088 7.3653h-0.98339c-0.54092 0-2.1552-1.5849-3.5874-3.5221-1.4322-1.9372-3.1464-3.5221-3.8094-3.5221h-1.2055l1.8276 2.6093c3.5241 5.0313 1.7733 4.7054-4.0665-0.75704l-5.8941-5.5133-8.7574 0.72594-0.37407 3.8987-0.37406 3.8987 3.9012 5.9539 6.8263-1.3653v2.2894h-3.6607l0.79369 1.2842 0.79375 1.2842 4.2652-0.50722c2.3459-0.27897 5.1898-0.9134 6.3198-1.4099l2.0546-0.90263v1.1112c0 0.90812-5.3948 4.1317-6.2189 3.716-0.1309-0.06611-2.079-0.55298-4.3287-1.082z" fill="#ff1fec" stroke-width="1.174"/></g></svg>

</g>

<g id="waryes:trait-dazzler">
<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1.4025 0 0 1.4025 -8.8675 -10.281)"><path d="m12.979 42.743c0.16578-0.49788 0.92618-1.0183 1.6898-1.1566 3.0583-0.55365 2.646-1.5591-0.63937-1.5591h-3.4037v-20.801l7.2945-11.064h15.093l7.2751 11.225 0.02926 20.64h-3.4037c-3.2853 0-3.6977 1.0055-0.63937 1.5591 0.76361 0.13824 1.524 0.6587 1.6898 1.1566 0.23354 0.70141-2.5795 0.90524-12.493 0.90524-9.9132 0-12.726-0.20383-12.493-0.90524z" fill="#ff1fec" stroke-width=".72419"/><path d="m13.326 36.295c-1.5761-1.7415-1.5253-4.6732 0.10648-6.1499 1.5207-1.3763 1.3397-5.7162-0.29499-7.0729-1.6577-1.3758-1.1724-3.398 1.902-7.9252 3.6227-5.3346 4.9895-6.1501 8.3011-4.9527 1.9466 0.70391 2.887 0.70729 4.4045 0.01586 2.84-1.294 4.2058-0.52973 7.8731 4.4053 3.701 4.9803 3.9342 6.0758 1.8561 8.7176-1.8718 2.3796-1.832 4.4115 0.13864 7.077 1.2855 1.7388 1.4551 2.5218 0.89234 4.1219-0.86532 2.4605-4.092 3.7855-6.1257 2.5154-1.7708-1.1059-3.2401-1.1106-4.9927-0.01613-1.0761 0.67206-3.0004 0.62261-4.3571-0.12309-1.8977-1.0431-2.3966-0.81942-3.8269-0.13607-1.633 0.78022-4.5254 1.0162-5.8768-0.47708z" fill="#fdfd53" stroke-width=".72419"/><g fill="#ff1fec"><ellipse cx="21.187" cy="14.246" rx="2.9366" ry="2.8783"/><ellipse cx="30.204" cy="14.246" rx="2.9366" ry="2.8783"/><ellipse cx="34.613" cy="20.658" rx="2.9366" ry="2.8783"/><ellipse cx="25.577" cy="20.658" rx="2.9366" ry="2.8783"/><ellipse cx="16.432" cy="20.658" rx="2.9366" ry="2.8783"/><ellipse cx="21.144" cy="27.102" rx="2.9366" ry="2.8783"/><ellipse cx="30.161" cy="27.102" rx="2.9366" ry="2.8783"/><ellipse cx="34.57" cy="33.514" rx="2.9366" ry="2.8783"/><ellipse cx="25.534" cy="33.514" rx="2.9366" ry="2.8783"/><ellipse cx="16.389" cy="33.514" rx="2.9366" ry="2.8783"/></g></g></svg>

</g>

<g id="waryes:trait-smoke-launcher">
<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(-.84648 0 0 .84648 47.826 7.7637)"><path d="m14.539 45.066c-0.36383-0.20274-0.87651-0.48549-1.1393-0.62832-0.26277-0.14284-0.65141-0.35512-0.86364-0.47173-0.21224-0.11662-0.57607-0.31595-0.80852-0.44295-0.23245-0.127-0.50734-0.29018-0.61087-0.36262-0.10353-0.07244-0.27129-0.15255-0.3728-0.17803-0.10151-0.02548-0.24194-0.14344-0.31206-0.26214-0.12514-0.21186-0.26618-0.28726-0.26618-0.14232 0 0.04042-0.06185 0.0735-0.13744 0.0735-0.10876 0-0.14538-0.07037-0.17545-0.33715-0.043971-0.39011-0.15468-0.54771-0.28982-0.41256-0.094051 0.09405-0.48294 0.11827-0.68068 0.04239-0.065667-0.0252-0.18721-0.17874-0.27009-0.34121-0.13202-0.25878-0.13846-0.31836-0.051995-0.48069 0.054287-0.10191 0.19793-0.24592 0.31921-0.32003 0.15305-0.09352 0.18115-0.13482 0.091877-0.13501-0.17578-3.79e-4 -0.16668-0.35953 0.022349-0.88229 0.22855-0.63206 0.2293-0.65885 0.021125-0.7537-0.15842-0.07218-0.20329-0.06512-0.28351 0.04459-0.074036 0.10125-0.15313 0.1195-0.35436 0.08174-0.29666-0.05565-0.29159-0.04664-0.41193-0.73241-0.049656-0.28298-0.17017-0.9298-0.26781-1.4374-0.097637-0.50758-0.17752-1.0947-0.17752-1.3047 0-0.32736 0.0201-0.38178 0.14099-0.38178 0.077545 0 0.19626-0.02121 0.26382-0.04713 0.1044-0.04006 0.091816-0.07186-0.083831-0.21192-0.19024-0.15169-0.20803-0.20904-0.22398-0.72203l-0.01732-0.55725 0.27254-0.07564c0.1499-0.0416 0.46273-0.11323 0.69518-0.15917 0.23245-0.04594 0.42263-0.11425 0.42263-0.1518 0-0.03755-0.033076-0.04783-0.073502-0.02285s-0.073502 0.0104-0.073502-0.03241-0.049614-0.07784-0.11025-0.07784c-0.077002 0-0.11025-0.07758-0.11025-0.25726v-0.25726h0.57007c0.5508 0 0.57315-0.0068 0.6612-0.20213 0.052591-0.11665 0.24669-0.28761 0.45899-0.40426 0.46307-0.25444 1.1162-0.27619 1.607-0.05351 0.36007 0.16339 0.53282 0.18153 0.64646 0.06789 0.09618-0.09618 1.9809-0.05193 2.4376 0.05723 0.36217 0.08657 0.71404 0.38776 0.86091 0.73692 0.09211 0.21898 0.32849 0.33799 0.32849 0.16538 0-0.04279 0.24228-0.0735 0.57983-0.0735h0.57983l0.09652-0.51451h0.60673c0.3337 0 0.63816-0.03053 0.67656-0.06785 0.03841-0.03731 0.16905-0.08197 0.29033-0.09924s-0.48357-0.03635-1.3441-0.04241l-1.5646-0.01101 0.03125-1.0326c0.02325-0.76828 0.05895-1.0646 0.13949-1.1577 0.05954-0.0688 0.20122-0.29048 0.31486-0.49261 0.32211-0.57295 0.32161-0.57255 0.53721-0.43129 0.17753 0.11632 0.19251 0.11574 0.26526-0.01027 0.0424-0.07346 0.13035-0.18971 0.19544-0.25835 0.1012-0.10672 0.10424-0.15024 0.02098-0.30046-0.13553-0.24453-0.1256-0.4628 0.02738-0.60124 0.19582-0.17722 0.7624-0.41625 0.99095-0.41808 0.11117-9e-4 0.20703-0.04296 0.21301-0.09349 6e-3 -0.05053 0.01763-0.14149 0.02587-0.20213 0.0082-0.06064 0.01988-0.20121 0.02587-0.31238 0.0068-0.12583 0.0525-0.20213 0.12114-0.20213 0.06863 0 0.11436 0.0763 0.12114 0.20213 6e-3 0.11117 0.01763 0.25174 0.02587 0.31238 0.0082 0.06064 0.01988 0.1516 0.02587 0.20213 6e-3 0.05053 0.06486 0.09188 0.13084 0.09188 0.06597 0 0.23114 0.06872 0.36704 0.15271 0.24302 0.1502 0.24999 0.15042 0.42367 0.01381 0.16049-0.12624 0.30628-0.13796 1.5991-0.12852 1.2089 0.0088 1.4591 0.02998 1.666 0.14087 0.1339 0.07177 0.26113 0.11283 0.28272 0.09124 0.02159-0.02159 0.06087-0.28099 0.0873-0.57645 0.03846-0.43004 0.0737-0.54211 0.17667-0.56182 0.10724-0.02053 0.13004 0.03432 0.13715 0.3299 0.0047 0.19499 0.02444 0.28837 0.04389 0.20752 0.01945-0.08085 0.06522-0.17843 0.10173-0.21683 0.0365-0.03841 0.06637-0.12936 0.06637-0.20213 0-0.17997 0.19924-0.1681 0.25746 0.01534 0.04405 0.13877 0.09768 0.14599 0.89311 0.12022 0.58013-0.01879 0.85394-0.0016 0.87072 0.05449 0.18672 0.62496 0.28254 0.78017 0.48164 0.78017 0.11242 0 0.22117-0.04134 0.24168-0.09188 0.02805-0.06914 0.05657-0.06459 0.11525 0.01838 0.06642 0.09391 0.07814 0.08973 0.0791-0.02822 0.0016-0.19995 0.16211-0.70679 0.2238-0.70679 0.02882 0 0.0743 0.1651 0.10107 0.3669 0.02677 0.2018 0.08891 0.40073 0.1381 0.44208 0.14008 0.11776 1.9875 1.2618 2.1107 1.3071 0.06064 0.02228 0.18913 0.10103 0.28554 0.175 0.09794 0.07514 0.29669 0.13449 0.45038 0.13449 0.15486 0 0.31509 0.04819 0.3666 0.11025 0.05033 0.06064 0.16187 0.11063 0.24788 0.11109 0.08601 4.5e-4 0.48714 0.10453 0.8914 0.23127 0.53059 0.16634 0.95989 0.24549 1.5435 0.28458 1.2241 0.08199 6.2628 0.11213 6.7438 0.04034 0.26499-0.03955 0.42264-0.03674 0.42264 0.0075 0 0.04218 0.25157 0.0574 0.62476 0.03782l0.62477-0.03279-4.8e-5 0.2481-4.2e-5 0.2481-4.5369 0.02199c-3.8394 0.01861-4.555 0.03838-4.6547 0.12863-0.06481 0.05865-0.14322 0.10664-0.17424 0.10664-0.18302 0-0.84593 0.24242-0.81219 0.29701 0.02227 0.03604-0.10134 0.16841-0.27469 0.29415-0.23562 0.17092-0.31518 0.27823-0.31518 0.42512 0 0.18227-0.02528 0.19811-0.34913 0.21889-0.24512 0.01573-0.34913 0.05405-0.34913 0.12863 0 0.05842-0.03308 0.10622-0.0735 0.10622-0.04043 0-0.0735 0.04686-0.0735 0.10413 0 0.05727-0.02481 0.118-0.05513 0.13496-0.03032 0.01695-0.01108 0.01972 0.04276 0.0061 0.05384-0.01359 0.45902-0.0247 0.9004-0.0247 0.54524 0 0.79662-0.02589 0.78413-0.08076-0.02307-0.10141 0.72849-0.30456 0.91166-0.24642 0.09257 0.02938 0.13574 0.0064 0.13574-0.07213 0-0.06336 0.04961-0.1152 0.11025-0.1152 0.06064 0 0.11025 0.02825 0.11025 0.06277s0.08877 0.15856 0.19727 0.27563c0.18004 0.19428 0.24808 0.21518 0.7793 0.23936 0.55876 0.02544 0.58012 0.02048 0.53421-0.12415-0.08956-0.28216 0.39824-0.38892 0.50507-0.11054 0.02349 0.06116 0.02408 0.14129 0.0013 0.17807-0.02302 0.03725 0.14942 0.06687 0.38932 0.06687 0.23686 0 0.46207 0.02987 0.50048 0.06638 0.0384 0.03651 0.7289 0.45485 1.5344 0.92966l1.4646 0.86328 0.32905-0.41267 0.3738 0.23986c0.20559 0.13192 0.3738 0.26595 0.3738 0.29784 0 0.12078 0.25481 0.15324 0.3356 0.04276 0.11392-0.15579 0.2703-0.10004 1.8149 0.64704 1.1861 0.57371 1.3849 0.64588 2.1781 0.79096 0.48655 0.08899 0.94724 0.21576 1.0409 0.28643 0.15205 0.11469 0.15941 0.1477 0.0772 0.34616-0.08262 0.19945-0.07096 0.24859 0.12828 0.5408 0.13795 0.20232 0.19797 0.35926 0.16199 0.42357-0.06426 0.11482-0.01363 0.74165 0.06905 0.85482 0.07195 0.09849 0.36809 1.0955 0.36809 1.2392 0 0.07233-0.09549 0.1318-0.26166 0.16298-0.20617 0.03868-0.25042 0.07446-0.20865 0.16871 0.07835 0.1768 0.06017 0.3641-0.08278 0.8528-0.11271 0.38533-0.20245 0.51149-0.73194 1.029-0.56865 0.55581-0.74514 0.6683-3.0587 1.9496l-2.4552 1.3598-24.476 0.02694zm3.3443-0.35887c0-0.40304 0.36976-0.3733 0.3932 0.03162 0.0098 0.16984 0.04171 0.19109 0.28669 0.19114 0.22926 4.2e-5 0.27563-0.0254 0.27563-0.15126 0-0.08322-0.09514-0.27341-0.21142-0.42264-0.27528-0.35327-0.37659-0.67409-0.37659-1.1925 0-0.3889-0.01391-0.42413-0.18007-0.4559-0.21973-0.04201-0.26094 0.0471-0.26094 0.5642 0 0.28499-0.05825 0.50275-0.21957 0.82088-0.12077 0.23815-0.21999 0.52395-0.2205 0.63512-8.47e-4 0.18218 0.02446 0.20213 0.25632 0.20213 0.23743 0 0.25726-0.01717 0.25726-0.22281zm3.6016 0.07411c0-0.14172-0.0086-0.14304-0.18375-0.0283-0.10106 0.06622-0.18375 0.13314-0.18375 0.1487 0 0.01558 0.08269 0.0283 0.18375 0.0283 0.13545 0 0.18375-0.03909 0.18375-0.1487zm0.88202-0.10856c0-0.2093 0.02774-0.25726 0.14882-0.25726 0.1529 0 0.33166 0.31768 0.25162 0.44718-0.02289 0.03703 0.0761 0.06733 0.21998 0.06733 0.14388 0 0.26159-0.03627 0.26159-0.0806s-0.13294-0.23163-0.29543-0.41622c-0.33599-0.38171-0.54963-0.99204-0.49357-1.41 0.03485-0.25985 0.0284-0.26879-0.19386-0.26846l-0.22991 2.64e-4 -9e-4 0.5189c-7.41e-4 0.41044-0.03674 0.57964-0.17237 0.80952-0.1019 0.17271-0.13976 0.30119-0.09331 0.31667 0.04299 0.01434 0.09943 0.13941 0.12542 0.27796 0.04087 0.21783 0.07598 0.25191 0.25958 0.25191 0.19366 0 0.21232-0.02262 0.21232-0.25726zm3.6153 0.01836c0.01722-0.17856 0.06254-0.24452 0.17949-0.2612 0.12743-0.01818 0.16555 0.02614 0.20546 0.23888 0.04272 0.22774 0.07622 0.2612 0.26152 0.2612 0.18604 0 0.21539-0.02977 0.23555-0.23888 0.01722-0.17856 0.06254-0.24452 0.17949-0.2612 0.12743-0.01818 0.16555 0.02614 0.20546 0.23888 0.04272 0.22774 0.07622 0.2612 0.26152 0.2612 0.18604 0 0.21539-0.02977 0.23555-0.23888 0.01765-0.18309 0.06166-0.24437 0.18841-0.26237 0.145-0.02058 0.16538 0.0088 0.16538 0.23888 0 0.24993 0.01198 0.26237 0.2526 0.26237 0.23066 0 0.2546-0.02053 0.27563-0.23637 0.01458-0.1496-0.05117-0.38275-0.1791-0.63512-0.14967-0.29526-0.20213-0.50663-0.20213-0.8144v-0.41566l-0.93657-0.02106c-0.51511-0.01159-0.95337-0.04826-0.9739-0.08148-0.02053-0.03322-0.03787 0.1597-0.03853 0.42872-0.0014 0.56584-0.19713 1.0302-0.59811 1.4188-0.13528 0.13112-0.24596 0.26498-0.24596 0.29748 0 0.0325 0.11367 0.05908 0.2526 0.05908 0.23126 0 0.25454-0.02019 0.27563-0.23888zm3.2939 0.21c0-0.0159-0.04961-0.04793-0.11025-0.07119-0.06064-0.02326-0.11025-0.01027-0.11025 0.02888 0 0.03916 0.04961 0.0712 0.11025 0.0712 0.06064 0 0.11025-0.01299 0.11025-0.02889zm2.058-0.09037c0-0.10208-0.01852-0.10507-0.12863-0.0208-0.07075 0.05415-0.14241 0.10781-0.15925 0.11925-0.01684 0.01143 0.04104 0.0208 0.12863 0.0208 0.0979 0 0.15925-0.04595 0.15925-0.11925zm0.91392-0.138c0.07812-0.4164 0.40911-0.32234 0.40911 0.11626 0 0.10622 0.052 0.14099 0.21089 0.14099 0.18463 0 0.21616-0.03249 0.25323-0.26094 0.0315-0.1941-0.0037-0.34751-0.13739-0.59896-0.14368-0.27023-0.17973-0.44639-0.17973-0.87834v-0.54031h-0.79453l0.03881 0.28932c0.05653 0.42145-0.03664 0.91578-0.22513 1.1944-0.13831 0.20448-0.15421 0.28772-0.09914 0.51916 0.05638 0.23696 0.09434 0.27563 0.2706 0.27563 0.17612 0 0.21183-0.03627 0.25328-0.25725zm1.4749 0.18375c-0.02498-0.04042-0.07655-0.0735-0.11459-0.0735-0.03804 0-0.06916 0.03308-0.06916 0.0735 0 0.04043 0.05157 0.0735 0.11459 0.0735 0.06303 0 0.09415-0.03308 0.06916-0.0735zm2.0213 0.0024c0-0.03916-0.04961-0.05216-0.11026-0.02889-0.06064 0.02326-0.11025 0.05531-0.11025 0.0712 0 0.0159 0.04962 0.02888 0.11025 0.02888 0.06064 0 0.11026-0.03204 0.11026-0.07119zm0.98742-0.18606c0.07812-0.4164 0.40911-0.32234 0.40911 0.11626 0 0.10626 0.052 0.14099 0.21111 0.14099 0.19002 0 0.21588-0.02985 0.25888-0.29875 0.03653-0.22845 0.01545-0.3452-0.08961-0.49614-0.20667-0.29692-0.30687-0.65298-0.30687-1.0904v-0.3933h-0.63125v0.50546c0 0.40317-0.03936 0.58133-0.19453 0.8804-0.14599 0.28139-0.18405 0.43954-0.15252 0.63382 0.03626 0.22343 0.06976 0.25887 0.24472 0.25887 0.17347 0 0.20967-0.0371 0.25097-0.25726zm1.6586 0.20477c-0.06064-0.02249-0.16814-0.07065-0.23888-0.10703-0.09537-0.04905-0.12863-0.03699-0.12863 0.04668 0 0.0795 0.07059 0.11112 0.23888 0.10704 0.13138-0.0032 0.18927-0.02418 0.12863-0.04668zm-24.126-0.68326c-0.05163-0.08267-0.1044-0.1113-0.11983-0.065-0.01517 0.0455 0.0178 0.11147 0.07326 0.1466 0.14474 0.09169 0.14954 0.08328 0.04657-0.0816zm-0.26465-1.0467-0.02491-0.42264-0.52636 0.0011c-0.2895 5.29e-4 -0.56229 0.02543-0.6062 0.05513-0.0634 0.04288-0.25092 0.47402-0.25092 0.5769 0 0.01275 0.06655 0.05881 0.14789 0.10235 0.12319 0.06593 0.1765 0.04589 0.31918-0.11997 0.11871-0.13801 0.21125-0.18379 0.30151-0.14915 0.1281 0.04915 0.13119 0.2084 0.0096 0.49494-0.03334 0.07856 0.0052 0.1412 0.11918 0.19395 0.1423 0.06583 0.1969 0.04784 0.35217-0.11604 0.16036-0.16926 0.18058-0.24774 0.15885-0.61658zm27.434 0.53817c-0.12139-0.28597-0.11823-0.44531 0.0098-0.49444 0.09003-0.03455 0.18229 0.01056 0.29889 0.14611 0.1508 0.17532 0.18897 0.18683 0.36042 0.10872 0.19121-0.08712 0.20219-0.17301 0.06713-0.52497-0.02582-0.06729 0.01577-0.14278 0.10498-0.19052 0.12505-0.06693 0.17154-0.04566 0.30264 0.13845 0.135 0.18959 0.17693 0.20749 0.32647 0.13935 0.1541-0.07021 0.16332-0.10005 0.09055-0.29285-0.08073-0.21386-0.0827-0.21447-0.52364-0.16032-0.24344 0.02989-0.66266 0.05367-0.93162 0.05284l-0.489-0.0016-0.03089 0.59205c-0.01699 0.32563-0.0011 0.63155 0.0352 0.67982 0.10094 0.13403 0.44378-0.04028 0.37907-0.19273zm-29.189-0.68976c0.02695-0.07023-0.02282-0.08763-0.18334-0.06407-0.15706 0.02305-0.19181 0.05041-0.12101 0.09528 0.14404 0.09128 0.26198 0.07918 0.30434-0.03121zm31.469-0.45644c0.17895-0.13538 0.10061-0.21672-0.20993-0.21796-0.23384-7.94e-4 -0.23819 0.0044-0.13339 0.16441 0.12619 0.19263 0.15379 0.19693 0.34332 0.05355zm-34.371-1.0054c0.13709-0.1371 0.10408-0.33786-0.064341-0.39132-0.083898-0.02663-0.15832-0.03713-0.16538-0.02333s-0.053628 0.09817-0.10348 0.1875c-0.076577 0.1372-0.070872 0.17394 0.036751 0.23665 0.16566 0.09652 0.19125 0.0957 0.29645-0.0095zm34.587-0.02205c-0.02326-0.06064-0.05531-0.11025-0.0712-0.11025-0.0159 0-0.02889 0.04961-0.02889 0.11025 0 0.06064 0.03204 0.11025 0.07119 0.11025 0.03916 0 0.05215-0.04961 0.02889-0.11025zm0.85544 0 0.18375-0.10504-0.19313-0.0026c-0.10622-0.0014-0.2343 0.04701-0.28463 0.10765-0.12174 0.14669 0.0374 0.14669 0.29401 0zm0.51338-0.90652c5.29e-4 -0.10485-0.03458-0.15961-0.09075-0.14091-0.11133 0.03707-0.15822 0.23955-0.09414 0.40653 0.04042 0.10535 0.05639 0.1073 0.11534 0.01408 0.03763-0.05951 0.06893-0.18537 0.06955-0.2797zm-35.915-0.21823c-0.00603-0.13057-0.032618-0.29383-0.05908-0.36279-0.074227-0.19343-0.1847 0.02744-0.18608 0.37202-9.182e-4 0.22902 0.022679 0.27613 0.1275 0.25459 0.093503-0.01921 0.12563-0.09126 0.11766-0.26383z" fill="#ff1fec" stroke-width=".073502"/><g fill="#fdfd55" stroke-width=".26212"><path class="cls-1" d="m34.639 44.539c0.59501 0 1.0773-0.4823 1.0773-1.0773 0-0.59501-0.4823-1.0773-1.0773-1.0773-0.59501 0-1.0773 0.4823-1.0773 1.0773 0 0.595 0.4823 1.0773 1.0773 1.0773z"/><path class="cls-1" d="m39.205 44.539c0.595 0 1.0773-0.4823 1.0773-1.0773 0-0.59501-0.4823-1.0773-1.0773-1.0773-0.59501 0-1.0773 0.4823-1.0773 1.0773 0 0.595 0.4823 1.0773 1.0773 1.0773z"/><path class="cls-1" d="m30.181 44.539c0.595 0 1.0773-0.4823 1.0773-1.0773 0-0.59501-0.4823-1.0773-1.0773-1.0773-0.59501 0-1.0773 0.4823-1.0773 1.0773 0 0.595 0.4823 1.0773 1.0773 1.0773z"/><path class="cls-1" d="m24.462 44.539c0.595 0 1.0773-0.4823 1.0773-1.0773 0-0.59501-0.4823-1.0773-1.0773-1.0773-0.59501 0-1.0773 0.4823-1.0773 1.0773 0 0.595 0.4823 1.0773 1.0773 1.0773z"/><path class="cls-1" d="m20.173 44.539c0.59501 0 1.0773-0.4823 1.0773-1.0773 0-0.59501-0.4823-1.0773-1.0773-1.0773-0.59501 0-1.0773 0.4823-1.0773 1.0773 0 0.595 0.4823 1.0773 1.0773 1.0773z"/><path class="cls-1" d="m15.902 44.539c0.595 0 1.0773-0.4823 1.0773-1.0773 0-0.59501-0.4823-1.0773-1.0773-1.0773-0.59501 0-1.0773 0.4823-1.0773 1.0773 0 0.595 0.4823 1.0773 1.0773 1.0773z"/></g></g><path d="m0.83076 24.301c0.55639-1.757 2.0385-3.3077 3.7403-4.0633 1.5051-1.3279 5.273 0.64203 5.1363-2.4181 0.055233-0.75564 0.41464-1.3079 1.0845-1.6614 0.65337-0.41708 1.1812-1.2116 2.0463-0.99212 1.0328-0.03626 2.1149 0.40365 3.1054 0.25153 1.1056-1.0806 2.607-2.1333 4.1401-2.2462 0.83493 0.07016 1.7373 0.36986 2.5306 0.29821 0.71457-0.57625 1.3605-1.2935 2.1157-1.7862 1.2048-0.49223 3.6967-0.35382 4.5269 0.23927l2.1616 2.0932c1.1932-0.59033 3.0655-1.6468 4.5493-1.38 1.024 0.64748 1.4263 1.6761 2.2457 2.5668 2.8538-0.23446 6.0348 2.4795 6.2695 5.2847 1.1057 0.89443 2.7951 0.09388 4.0246 0.8561 1.1931 0.44876 2.2838 1.1163 3.2435 1.95-0.41185 0.49987-0.78084 1.2626-1.3927 0.5358-1.0771-0.606-2.0361-1.4985-3.3146-1.6156-1.2744-0.30243-2.5594-0.56612-3.8185-0.92888-0.09294-0.87541 0.26718-1.8783-0.38566-2.5962-0.62142-1.1361-1.7041-2.0205-2.8671-2.5166-0.83299-7.17e-4 -1.666-0.0015-2.499-0.0022-0.22244-1.3648-1.7233-2.3611-3.0321-2.3623-0.78273 0.36362-1.9782 0.49174-2.2877 1.4343-0.27817 0.26836-0.54644 1.6802-0.83246 1.0422-0.52481-0.8878-0.93143-1.8975-1.5299-2.7094-0.82203-0.45981-1.6663-0.89179-2.846-1.0016-0.60804-0.03585-1.4811-0.2916-1.8733 0.37926-0.77044 0.80408-1.5409 1.6082-2.3113 2.4122-0.85909-0.588-1.9411-0.93015-2.9525-0.98691-1.3366 0.50036-2.6275 1.1726-3.604 2.2355l-3.7639-0.19356c-0.52078 0.51564-1.2303 0.92891-1.6413 1.5041-0.10563 0.7875-0.21125 1.575-0.31688 2.3625-1.3591 0.17613-2.7717 0.16067-4.0974 0.45662-0.86515 0.50296-1.9252 0.75621-2.6568 1.4303-0.80934 0.83001-1.4017 2.1112-2.5943 2.3705l-0.16497-0.080612-0.13778-0.16199z" fill="#ff1fec" stroke-width=".29977"/><g fill="none" stroke="#fdfd53" stroke-width="1.3"><path d="m24.116 27.092c-3.3437-6.3158-19.773-2.2704-19.773-2.2704"/><path d="m28.778 27.906c15.728-7.6367 20.27-2.6302 20.27-2.6302"/><path d="m26.179 26.844c8.2559-9.6182 14.819-6.8111 14.819-6.8111"/></g></svg>
</g>


<g id="waryes:trait-fire-direction">
<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(.34256 0 0 .34256 .42127 1.8365)" fill="#ff1fec" stroke-width="1.3389"><path class="cls-2" d="m148.63 33.679c-0.32134-0.38829-1.4594-1.9548-2.0218-2.718-0.56235-0.77658-1.4059-0.70963-1.8343-0.42846-0.42845 0.26779-5.7172 4.231-6.6277 4.9272-0.91046 0.70963-0.62929 1.7942-0.62929 1.7942l-47.197 33.982-8.1005 0.21423-17.727 13.148s-0.54896-0.30795-1.4326-0.4954v-5.3155c0-1.0176-0.72302-1.0845-0.72302-1.0845v-8.1407h-0.68285v14.38c-0.53557 0-1.1247 0.08034-1.754 0.26779-1.031-7.0294-3.2268-10.296-3.2268-10.296l1.4193 11.167c-0.24101 0.16067-0.48201 0.34812-0.72302 0.56235-3.4276 2.9724-1.7138 6.226-1.7138 6.226l-0.38829 0.48201c-1.7406-0.1205-2.0887 1.3389-2.0887 1.3389l-0.77658-0.29456 0.16067-0.65607c0.06694-0.28118-0.10712-0.56235-0.38829-0.6293s-0.56235 0.10712-0.62929 0.38829l-1.031 4.4051c-0.06694 0.28117 0.10712 0.56235 0.38829 0.62929h0.1205c0.24101 0 0.45524-0.16067 0.50879-0.40167l0.18745-0.77658c0.14728-0.01338 0.52218 0 0.52218 0.78996 0 3.4946 1.3925 4.4854 1.3925 4.4854 0.17406 2.2092 0.8703 4.2846 0.8703 4.2846l-51.589 16.348s-0.30795 0.42845-1.0845 2.1691c-0.77658 1.7272 0.16067 1.7674 0.77658 1.7674h4.8201l4.2042-2.8787 42.645-10.055 18.732-0.97741c-0.64268-1.7272-0.9908-3.6017-0.9908-5.5432 0-8.8637 7.1766-16.04 16.04-16.04 2.9858 0 5.7842 0.81674 8.1808 2.236 0 0 0.93725-1.6201 0.93725-4.539 0-7.257-5.8645-10.564-5.8645-10.564l1.2318-3.7892 47.237-33.861c1.7272 0.29456 1.8611 0.04017 2.3565-0.32134 0.49539-0.36151 5.6503-4.1774 6.1992-4.6728 0.54896-0.4954 0.61591-1.1381 0.29456-1.5264zm-0.92386 1.0845-1.272 0.9908c-0.0937 0.06694-0.22762 0.05355-0.29456-0.04016l-2.4636-3.1866c-0.0669-0.09372-0.0535-0.22762 0.0401-0.29456l1.272-0.9908c0.0937-0.06694 0.22763-0.05355 0.29457 0.04016l2.4636 3.1866c0.0669 0.09372 0.0535 0.22762-0.0402 0.29456z"/><path class="cls-2" d="m88.075 102.57c2.3163 0 4.1908 1.8745 4.1908 4.1908 0 2.3164-1.8745 4.1908-4.1908 4.1908s-4.1908-1.8745-4.1908-4.1908 1.8745-4.1908 4.1908-4.1908z"/><path class="cls-1" d="m88.075 92.98c7.6051 0 13.778 6.1724 13.778 13.778 0 7.6051-6.1725 13.778-13.778 13.778-7.6051 0-13.778-6.1724-13.778-13.778 0-7.6051 6.1724-13.778 13.778-13.778zm5.9984 13.778c0-3.3205-2.6912-5.9984-5.9984-5.9984-3.3071 0-5.9984 2.6912-5.9984 5.9984s2.6912 5.9984 5.9984 5.9984c3.3071 0 5.9984-2.6912 5.9984-5.9984z"/></g><g transform="matrix(1.0546 0 0 1.0546 -12.433 -11.851)" fill="#fdfd55"><g transform="matrix(.2305 0 0 .2305 10.383 13.886)" stroke-width=".9984"><path class="cls-2" d="m33.91 103.28c-0.52 0-1.02-0.26-1.31-0.73-5.1-8.26-7.79-17.79-7.79-27.55s2.69-19.28 7.79-27.55c0.45-0.72 1.39-0.95 2.11-0.5s0.95 1.39 0.5 2.11c-4.8 7.78-7.34 16.75-7.34 25.93s2.54 18.16 7.34 25.93c0.45 0.72 0.22 1.67-0.5 2.11-0.25 0.16-0.53 0.23-0.81 0.23z"/><path class="cls-2" d="m116.09 103.28c-0.28 0-0.55-0.07-0.81-0.23-0.72-0.45-0.95-1.39-0.5-2.11 4.8-7.78 7.34-16.75 7.34-25.93s-2.54-18.16-7.34-25.93c-0.45-0.72-0.22-1.67 0.5-2.11 0.72-0.45 1.67-0.22 2.11 0.5 5.1 8.26 7.79 17.79 7.79 27.55s-2.69 19.28-7.79 27.55c-0.29 0.47-0.79 0.73-1.31 0.73z"/></g><path class="cls-1" d="m27.67 40.393c-5.0846 0-9.2196-4.135-9.2196-9.2196 0-5.0846 4.135-9.2196 9.2196-9.2196 5.0846 0 9.2196 4.135 9.2196 9.2196 0 5.0846-4.135 9.2196-9.2196 9.2196zm0-17.731c-4.6927 0-8.512 3.8193-8.512 8.512 0 4.6927 3.8193 8.512 8.512 8.512s8.512-3.8193 8.512-8.512c0-4.6927-3.8193-8.512-8.512-8.512z" stroke-width=".2305"/><polygon class="cls-2" transform="matrix(.2305 0 0 .2305 10.383 13.886)" points="93.65 102.12 85.28 80.36 104.99 65.29 81.37 65.29 75 41.67 68.63 65.29 45.01 65.29 64.72 80.36 56.35 102.12 75 88.73"/></g></svg>
</g>

<g id="waryes:trait-sigint">
<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" viewBox="0 0 52.917 52.917" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m10.551 50.83c0.17649-0.01663 14.38-18.048 14.38-18.048v-13.182h-9.2445v16.435h-4.4869v-34.924h4.4869v16.435h7.1902v-2.0543h7.7193v2.0543h8.7153v-16.435h4.1087v34.924h-4.1087v-16.435l-10.785-0.0036 0.02576 13.127 14.893 18.155-2.8431-0.03301-3.3834-4.1012-8.7874-3.597 0.04398 8.3523-3.5436-0.0094v-8.319l-8.7309 4.0536-2.8794 3.5639zm17.817-14.752 0.15847 4.5791 6.2601 2.6629zm-3.2797-0.06062-6.1489 7.7005 3.3438-1.6703 2.6482-1.2066z" fill="#ff1fec" stroke-width="1.0272"/></svg>
</g>

<g id="waryes:gun"><?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" viewBox="0 0 150 150" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-25.08 -38.813)"><path d="m43.714 185.88c0.45826-0.2272 0.84331-0.52871 0.85567-0.67006 0.01237-0.14132 1.1026-2.3376 2.4228-4.8805 2.2316-4.2987 3.821-7.7602 3.8924-8.4777 0.01645-0.16685 0.64392-1.2156 1.394-2.3305 0.75009-1.115 2.2008-3.6646 3.2238-5.6658 5.8804-11.503 11.027-20.425 13.573-23.526 1.6372-1.9948 2.0302-2.1226 2.9277-0.9527 0.39086 0.50949 1.1386 1.194 1.6616 1.5212 1.0948 0.68487 1.9747 1.7317 2.2327 2.6563 0.45244 1.6211 2.1759 7.625 2.6855 9.3551 0.60049 2.0388 0.52732 1.962 3.0467 3.1959 0.74608 0.3654 3.1441 0.0837 4.2524-0.49962 0.51022-0.26849 1.5245-1.0035 2.2541-1.6333l1.3264-1.1451-0.53473-1.2017c-0.29411-0.66095-0.81824-1.8335-1.1647-2.6057-0.604-1.346-2.3852-7.5504-3.0694-10.692-0.17971-0.82504-0.28267-2.0135-0.22879-2.641l0.09796-1.141 0.9271 0.094c0.5099 0.0519 1.3776-0.0903 1.9283-0.31568 1.2328-0.50446 6.9332-5.3228 7.0464-5.956 0.26095-1.4593 0.70876-2.7347 0.95282-2.7133 0.11216 0.0103 0.59471 0.50287 1.0723 1.0957 1.0699 1.328 1.4329 1.0352 0.78497-0.63338-0.25605-0.65942-0.46234-1.3642-0.45841-1.5662 0.0039-0.20199 0.0069-0.55192 0.0067-0.77765-1.75e-4 -0.22572-0.24343-0.75646-0.54046-1.1794-0.50791-0.72325-0.51312-0.78888-0.08748-1.1025 0.4123-0.30377 0.67864-0.17281 2.9924 1.4716 4.9978 3.5519 8.2299 5.3232 13.197 7.2326 4.8545 1.866 8.4613 2.6547 14.826 3.2417 6.7186 0.61982 9.3056 0.50282 9.7623-0.44131 0.15366-0.31761 0.22831-0.75558 0.16592-0.97325-0.12736-0.44431-0.59673-4.6305-0.75206-6.7075-0.21145-2.8272-0.6875-5.0918-1.0562-5.0248-1.3757 0.24998-3.4025 0.22679-7.2078-0.0825-3.8294-0.31128-4.7625-0.46954-7.3848-1.2526-3.1596-0.94355-7.105-2.6054-9.0802-3.8248-1.5062-0.92984-4.7967-3.4968-5.3924-4.2067-0.87608-1.0441-0.57207-1.4752 3.2718-4.6404 3.8642-3.1819 4.4132-3.5319 5.4033-3.4453 0.99962 0.0875 2.3103-0.93212 3.7252-2.8978 1.6392-2.2773 4.5492-5.0933 8.2174-7.9518 1.5562-1.2127 4.2908-3.567 6.0767-5.2317 1.786-1.6647 4.0718-3.7497 5.0797-4.6332 1.1957-1.0482 1.7942-1.7397 1.7225-1.9899-0.18791-0.6556 11.798-10.176 12.952-10.287 0.43669-0.04214 0.82585-0.32409 1.129-0.81798 0.67381-1.0976 0.61152-1.0449 7.9217-6.7049 6.4597-5.0016 8.0879-6.2224 10.089-7.5649 0.84616-0.56774 0.9303-0.72341 1.0345-1.9139 0.0986-1.1262 0.22139-1.3866 0.93849-1.9883l0.82512-0.69236-0.47919-1.1592c-0.6047-1.4629-1.3721-1.9029-2.1924-1.2571-0.62489 0.49196-1.6145 0.3472-2.2955-0.33578-0.18601-0.18656-0.55385-0.39714-0.81743-0.46796-0.26734-0.07182-1.0969-1.1254-1.8761-2.3829-0.8791-1.4186-1.498-1.9038-1.6482-2.0447-0.26188-0.24562-0.36217-0.22904-0.36217-0.22904-0.48114-0.16444-1.1642-0.10974-1.9368 0.48114-1.3508 1.0331-1.5239 2.564-0.34534 3.0548 0.25378 0.10568 0.4992 0.38294 0.5454 0.61613 0.0462 0.2332 0.32212 1.6588 0.61316 3.168 0.29103 1.5092 0.66054 2.9946 0.82113 3.3009 0.27855 0.53131 0.0683 0.72659-4.5844 4.2586-2.8085 2.132-5.1556 3.7373-5.5349 3.7855-0.3622 0.04605-0.90903 0.19134-1.2152 0.32287-0.83702 0.35961-3.1591 0.07647-4.1529-0.50639-0.61816-0.36254-1.1972-0.4969-2.038-0.47285-1.0654 0.03047-1.3764 0.19874-3.3466 1.8107-2.0094 1.644-5.7225 4.4622-9.6297 7.3088-1.168 0.851-1.7435 1.125-2.0974 0.99857-0.84255-0.30093-0.4806-0.54603-16.691 11.302-2.8642 2.1184-3.6533 2.7956-5.1276 3.052-0.41969 0.13232-0.77096 0.33085-0.78061 0.44116-0.0168 0.19181-0.79335 0.59068-1.9681 1.0109-0.30139 0.1078-0.63919 0.41507-0.75069 0.68281-2.2483 3.1161-4.5142 5.4569-6.5938 7.732 0.0994 0.19739-1.882 1.9646-3.9281 3.5036-0.16219 0.12199-2.4176 1.856-5.0119 3.8533-2.5944 1.9974-8.6292 6.6427-13.411 10.323-9.5769 7.3713-13.22 10.282-13.602 10.867-0.30706 0.47003-0.89639 7.1945-0.69194 7.8983 0.19863 0.68474-0.37662 1.5526-2.3816 3.593-0.9154 0.93156-2.4864 2.7254-3.4912 3.9864-1.0048 1.261-2.2812 2.6949-2.8365 3.1865-0.55529 0.49163-1.4091 1.383-1.8974 1.9808-1.028 1.2587-1.9515 1.7717-4.1245 2.2912-1.4762 0.35291-1.6834 0.49841-3.8049 2.6721-1.234 1.2644-3.1825 3.3204-4.3299 4.5689-1.1474 1.2485-2.762 2.9834-3.5881 3.8553-0.82608 0.87193-2.9148 3.1999-4.6416 5.1733-1.7268 1.9734-3.217 3.5812-3.3114 3.5729-0.09444-8e-3 -0.93168 0.84319-1.8605 1.8921-1.1576 1.3072-1.7069 2.1271-1.7462 2.6063-0.07333 0.89134 0.03596 1.0667 1.2868 2.0677 2.5798 2.0645 5.6862 4.6658 6.5124 5.4536 0.498 0.47487 1.6215 1.5086 2.4967 2.2972 0.87522 0.78857 2.2482 2.1242 3.0512 2.968 1.7697 1.8599 3.1066 2.9687 3.6332 3.0135 0.21562 0.0184 0.76698-0.1525 1.2252-0.3797zm39.817-54.187c-1.012-1.187-1.6482-2.0714-1.4139-1.9655 0.23433 0.10592 0.80827 0.0708 1.2754-0.0781 0.72406-0.23076 0.91068-0.21523 1.2646 0.10547 0.22838 0.20672 0.91263 0.59479 1.5205 0.86239 0.8914 0.39239 1.304 0.45126 2.1319 0.30421 0.90031-0.15989 1.5503-0.66698 1.2752-0.99482-0.05129-0.0611-0.60654-4e-3 -1.2338 0.126-0.89144 0.18542-1.2604 0.16379-1.6893-0.0991-0.67769-0.41524-1.5296-1.9077-1.471-2.577 0.04792-0.54767 4.496-4.4289 5.0229-4.3828 0.17345 0.0152 1.0564 0.8836 1.9622 1.9298 2.3538 2.719 2.254 3.0652-1.8605 6.449-4.0774 3.3532-4.1941 3.3588-6.7843 0.32077z" stroke-width=".24431"/></g></svg>
</g>

<g id="waryes:calculator">
<?xml version="1.0" encoding="iso-8859-1"?>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 460 460" xml:space="preserve">
<g id="XMLID_241_">
	<g>
		<path d="M369.635,0H90.365C73.595,0,60,13.595,60,30.365v399.27C60,446.405,73.595,460,90.365,460h279.27
			c16.77,0,30.365-13.595,30.365-30.365V30.365C400,13.595,386.405,0,369.635,0z M108.204,343.61v-43.196
			c0-3.451,2.797-6.248,6.248-6.248h43.196c3.451,0,6.248,2.797,6.248,6.248v43.196c0,3.451-2.797,6.248-6.248,6.248h-43.196
			C111.001,349.858,108.204,347.06,108.204,343.61z M108.204,256.61v-43.196c0-3.451,2.797-6.248,6.248-6.248h43.196
			c3.451,0,6.248,2.797,6.248,6.248v43.196c0,3.451-2.797,6.248-6.248,6.248h-43.196C111.001,262.858,108.204,260.06,108.204,256.61
			z M308.891,421H151.109c-11.046,0-20-8.954-20-20c0-11.046,8.954-20,20-20h157.782c11.046,0,20,8.954,20,20
			C328.891,412.046,319.937,421,308.891,421z M208.402,294.165h43.196c3.451,0,6.248,2.797,6.248,6.248v43.196
			c0,3.451-2.797,6.248-6.248,6.248h-43.196c-3.451,0-6.248-2.797-6.248-6.248v-43.196
			C202.154,296.963,204.951,294.165,208.402,294.165z M202.154,256.61v-43.196c0-3.451,2.797-6.248,6.248-6.248h43.196
			c3.451,0,6.248,2.797,6.248,6.248v43.196c0,3.451-2.797,6.248-6.248,6.248h-43.196C204.951,262.858,202.154,260.06,202.154,256.61
			z M345.548,349.858h-43.196c-3.451,0-6.248-2.797-6.248-6.248v-43.196c0-3.451,2.797-6.248,6.248-6.248h43.196
			c3.451,0,6.248,2.797,6.248,6.248v43.196h0C351.796,347.061,348.999,349.858,345.548,349.858z M345.548,262.858h-43.196
			c-3.451,0-6.248-2.797-6.248-6.248v-43.196c0-3.451,2.797-6.248,6.248-6.248h43.196c3.451,0,6.248,2.797,6.248,6.248v43.196h0
			C351.796,260.061,348.999,262.858,345.548,262.858z M354,149.637c0,11.799-9.565,21.363-21.363,21.363H127.364
			C115.565,171,106,161.435,106,149.637V62.363C106,50.565,115.565,41,127.364,41h205.273C344.435,41,354,50.565,354,62.363V149.637
			z"/>
	</g>
</g>
</svg>
</g>

    <g id="waryes:transport"><?xml version="1.0" encoding="UTF-8"?>
<svg data-name="Layer 1" version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <style>.cls-1 {
        fill: #fdfd55;
      }

      .cls-2 {
        fill: #ff1fec;
      }</style>
 </defs>
 <g stroke-width="1.8617">
  <path class="cls-1" d="m75.094 94.229c10.537 0 19.083-8.5454 19.083-19.083 0-10.537-8.5454-19.083-19.083-19.083s-19.083 8.5454-19.083 19.083c0 10.537 8.5454 19.083 19.083 19.083zm0-28.187c5.0267 0 9.1039 4.0772 9.1039 9.1039 0 5.0267-4.0772 9.1039-9.1039 9.1039s-9.1039-4.0772-9.1039-9.1039c0-5.0267 4.0772-9.1039 9.1039-9.1039z"/>
  <path class="cls-2" d="m75.094 23.353c-28.615 0-51.793 23.197-51.793 51.793 0 28.596 23.197 51.793 51.793 51.793 28.596 0 51.793-23.197 51.793-51.793 0-28.596-23.197-51.793-51.793-51.793zm5.2873 92.51 1.024-18.822c-2.0107 0.57713-4.1144 0.91225-6.3113 0.91225s-4.1889-0.3165-6.1437-0.8564l1.0984 18.804c-11.319-1.3777-21.205-7.3725-27.758-16.03l16.793-8.4895c-2.9602-2.9229-5.1198-6.665-6.1251-10.835l-15.787 10.388c-2.0293-4.8591-3.1463-10.184-3.1463-15.769 0-5.5852 1.117-10.91 3.1463-15.769l15.769 10.407c1.024-4.1889 3.1836-7.9496 6.1623-10.873l-16.793-8.5081c6.5347-8.6384 16.42-14.615 27.721-15.992l-1.0984 18.804c1.9548-0.55852 4.0213-0.8564 6.1437-0.8564s4.3192 0.33511 6.3113 0.91225l-1.024-18.822c11.096 1.4335 20.777 7.2794 27.274 15.732l-16.83 8.5267c3.016 2.8857 5.2129 6.5719 6.2927 10.724l15.732-10.37c2.1038 4.9522 3.2767 10.388 3.2767 16.104 0 5.7155-1.1729 11.152-3.2767 16.104l-15.732-10.351c-1.0798 4.133-3.2767 7.8193-6.274 10.686l16.83 8.5267c-6.4974 8.4709-16.197 14.335-27.312 15.769z"/>
  <path class="cls-2" d="m75.094 0.67673c-41.126 0-74.469 33.344-74.469 74.469 0 41.126 33.344 74.469 74.469 74.469 41.126 0 74.469-33.344 74.469-74.469 0-41.126-33.344-74.469-74.469-74.469zm0 132.98c-32.32 0-58.514-26.195-58.514-58.514 0-32.32 26.195-58.514 58.514-58.514 32.32 0 58.514 26.195 58.514 58.514 0 32.32-26.195 58.514-58.514 58.514z"/>
 </g>
</svg>
</g>


<g id="waryes:soldier"><?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
 <polygon class="cls-3" transform="matrix(1.7777 0 0 1.7777 -55.979 -57.446)" points="76.2 50.62 76.2 49.81 67.62 49.47 67.62 50.62"/>
 <g stroke-width="1.7777">
  <path class="cls-2" d="m24.925 97.126s-0.31999-11.395-1.2977-15.928c-0.95996-4.5154-4.4443-16.799-4.4443-27.163 0-7.0397 0.47998-11.555 0.47998-11.555s-0.88886-0.12444-2.0977-0.12444c-2.7377 0-7.1464 0.69331-6.6309 5.2976 0.72886 6.6309 3.6443 44.301 3.9643 46.078 0.31999 1.7777 1.1377 3.3954 3.9643 3.3954z"/>
  <path class="cls-2" d="m14.614 41.448h5.1376s-0.49776-16.604 11.004-13.013l-0.53332-2.7021s-15.342 1.0488-17.262 1.3511c-1.9199 0.28444-3.4132 2.0621-3.4132 4.4265v5.5465c0 1.3155 1.2444 4.3732 5.0487 4.3732z"/>
  <g>
   <path class="cls-2" d="m53.777 76.416c-1.6177-1.4399-4.5332-14.862 0.2311-22.79 0 0-13.813 3.2354-15.519 3.2354-2.4177 0-3.8754-1.8666-3.8754-1.8666s-5.9731 2.2577-8.0886-0.40888c-2.0977-2.6666-2.5066-11.235-2.7377-13.582-0.17777-1.7422-2.0977-2.8266-2.0977-2.8266s-0.10666 1.2977-0.21333 3.431c-0.30221 5.8131-0.60442 17.759 1.3511 25.99 2.6666 11.235 4.0354 16.977 4.0354 25.777v3.7154c0 8.2664-0.58664 19.004-8.3375 37.652-2.1866 5.0132-0.63998 12.213 5.902 12.213 4.5154 0 7.1997-0.63997 10.826-12.604 3.6443-11.964 6.7198-24.337 6.9509-47.092 0 0 9.7774 3.5199 12.373 19.27 2.5777 15.768-2.5066 29.421-2.7555 31.679-0.2311 2.2577 1.0489 8.7286 7.5908 8.7286 6.542 0 8.7286-3.8043 10.915-22.221 2.1688-18.435-1.2977-35.892-16.568-48.336z"/>
   <path class="cls-1" d="m29.298 54.372c3.3421 0 4.1243-0.47998 4.1243-0.47998l-8.1419-11.111s0.67553 11.608 4.0176 11.608z"/>
   <path class="cls-2" d="m59.59 40.986-18.95 4.0176-0.72886-1.0133-8.4619-11.733c-1.5111-2.0977-4.4087-2.5599-6.5064-1.0666s-2.5599 4.4087-1.0666 6.5064l10.968 15.217c0.21333 0.30221 0.47998 0.58665 0.76442 0.81775 0.83552 0.71108 1.9199 1.12 3.0221 1.12 0.31999 0 0.63998-0.03556 0.95996-0.10666l18.702-3.9643 3.2354-0.69331c2.5244-0.53331 4.1243-3.0043 3.591-5.5287-0.53331-2.5244-3.0043-4.1243-5.5287-3.591z"/>
  </g>
  <path class="cls-1" d="m124.76 33.129v-1.3333l-37.972-1.1555v1.7244h-3.3065l-0.44443-4.2843-20.213-0.88886s-3.111 11.786-15.484 12.515c-0.3911 0.01778-0.78219 0.03556-1.1911 0.03556-5.422 0-9.1908-3.271-9.1908-3.271l4.3554 6.4709s14.453-3.271 16.444-3.6088c1.9733-0.33777 7.4308-1.2266 9.0663 3.271 1.0844 3.0754 0.40887 4.3021 0.40887 4.3021h6.7553s2.6488 9.6174 3.3421 11.466c0.67553 1.831 1.6355 2.2577 4.0176 1.2266 2.3821-1.0133 3.9643-1.3688 3.3421-2.9332-0.60442-1.5644-2.791-9.5463-2.791-13.226 0-3.6799 1.7777-5.3154 1.7777-5.3154h3.111v1.6177l37.972-1.9377v-1.3155h20.373v-3.3599zm-45.278-0.60442h-15.253v-2.0266l15.253 0.58664z" />
  <path class="cls-2" d="m30.969 21.182h0.71108v0.10666c0 1.4222 0.15999 2.8088 0.4622 4.1243 1.6533 7.1109 7.4486 12.373 14.364 12.373 0.24888 0 0.51554 0 0.76442-0.01778 7.8397-0.44443 14.062-7.6619 14.062-16.497v-0.10666h0.71108c0.92441 0 1.6711-0.74664 1.6711-1.6711 0-0.92441-0.74664-1.6711-1.6711-1.6711h-1.0311c-1.4222-7.4664-7.3775-13.066-14.506-13.066-7.1286 0-13.084 5.5998-14.506 13.066h-1.0311c-0.92441 0-1.6711 0.74664-1.6711 1.671 0 0.92441 0.74664 1.6711 1.6711 1.6711z"/>
 </g>
</svg>
</g>

    <g id="waryes:elite"><?xml version="1.0" encoding="UTF-8"?>
<svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 150 150" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<path d="m73.449-0.12171c0.88787-3e-7 1.7757-3e-7 2.7032 0.081486 0.12933 0.19679 0.19489 0.35538 0.3124 0.42118 5.0808 2.8454 10.166 5.6835 15.251 8.5205 3.925 2.1895 7.8629 4.3563 11.769 6.5782 0.99977 0.56864 1.8608 1.381 2.86 1.951 1.3849 0.79013 2.8759 1.395 4.2574 2.1905 2.393 1.378 4.706 2.8962 7.1102 4.2532 2.295 1.2954 4.7007 2.3953 6.9909 3.6985 3.0571 1.7396 6.0231 3.6391 9.0799 5.3794 1.8794 1.0699 3.8158 2.0626 5.8034 2.9098 1.0445 0.44522 1.2649 1.0361 1.2639 2.0675-0.0246 24.644-0.0282 49.288 0.0124 73.932 2e-3 1.0361-0.39221 1.5367-1.1946 1.9869-6.072 3.4067-12.133 6.8334-18.199 10.251-7.6328 4.3005-15.265 8.6029-22.901 12.896-6.6064 3.7139-13.226 7.4042-19.821 11.138-0.84729 0.47971-1.582 1.1582-2.3689 1.7447-0.88786 0-1.7757 0-2.7032-0.0816-3.3127-1.9787-6.5693-3.9052-9.8635-5.7652-3.5889-2.0264-7.2279-3.9642-10.818-5.9889-5.7778-3.2588-11.527-6.569-17.301-9.8344-3.4227-1.9357-6.8805-3.8094-10.304-5.743-5.0337-2.8426-10.029-5.7553-15.096-8.5356-0.93049-0.51047-1.3225-0.95606-1.3211-2.037 0.03126-24.655 0.032962-49.309-0.00544-73.964-0.00174-1.0917 0.42963-1.5685 1.2967-2.0535 6.0392-3.3775 12.046-6.8126 18.072-10.214 7.6328-4.3079 15.271-8.6056 22.912-12.899 6.6097-3.7143 13.233-7.4051 19.831-11.139 0.84778-0.47979 1.5831-1.1584 2.3705-1.7448m24.787 23.716c-7.3727-4.1926-14.748-8.381-22.115-12.584-0.78508-0.44787-1.4215-0.5604-2.3099-0.04038-3.8003 2.2244-7.6725 4.3256-11.507 6.4915-7.9596 4.4958-15.908 9.0108-23.869 13.506-6.676 3.7697-13.362 7.5219-20.022 11.27v65.607c0.53491 0.16313 1.0701 0.23122 1.5078 0.47465 4.0968 2.2786 8.1796 4.5826 12.261 6.8893 1.9383 1.0956 3.8552 2.229 5.7978 3.3169 3.3863 1.8964 6.8161 3.7172 10.171 5.6672 4.7244 2.7459 9.3757 5.6179 14.103 8.3582 1.7442 1.011 3.637 1.762 5.4242 2.7034 1.8444 0.97145 3.7706 1.862 5.4151 3.1116 1.0447 0.79385 1.769 1.0557 2.907 0.40514 3.8236-2.186 7.6837-4.3079 11.519-6.4738 7.9599-4.4953 15.909-9.0094 23.87-13.504 6.6766-3.7696 13.363-7.5222 20.036-11.278v-65.223c-11.037-6.2495-22.003-12.459-33.189-18.697z" fill="#ff1fec" stroke-width=".29297"/><g fill="#fdfd55" stroke-width=".29297">



<path d="m46.977 86.085c-5.0962-2.8392-10.097-5.6213-15.103-8.394-1.3667-0.75697-2.7445-1.4943-4.126-2.2241-0.80255-0.424-1.2208-0.92166-1.2091-1.9737 0.0716-6.4393 0.03584-12.88 0.03584-19.619 1.4553 0.74165 2.7571 1.3516 4.0082 2.0523 4.6236 2.5894 9.2285 5.212 13.844 7.8162 6.1804 3.4872 12.358 6.9787 18.548 10.449 3.7148 2.0827 7.4417 4.1446 11.19 6.1665 0.37443 0.20198 1.0365 0.24584 1.3927 0.0498 4.7674-2.6238 9.5-5.3108 14.25-7.9669 3.6337-2.032 7.2866-4.0295 10.918-6.0652 6.3561-3.5629 12.7-7.1475 19.055-10.712 1.0566-0.59262 2.1444-1.1295 3.3872-1.7809 0.0382 0.65139 0.0834 1.0658 0.0837 1.4803 4e-3 6.0532-0.0407 12.107 0.046 18.159 0.0145 1.0158-0.41901 1.5283-1.1096 1.913-5.3722 2.9927-10.781 5.9199-16.148 8.9223-7.0205 3.9276-14.01 7.9111-21.019 11.859-2.5961 1.4623-5.3007 2.7544-7.7877 4.381-1.9622 1.2834-3.5071 0.64304-5.2117-0.33583-3.8974-2.2381-7.8266-4.4208-11.739-6.6325-4.4061-2.4907-8.808-4.9886-13.305-7.544z"/>
<path d="m123.25 84.594c0 5.8024-0.0367 11.465 0.0313 17.127 0.0134 1.1149-0.44784 1.6335-1.323 2.124-5.8597 3.2844-11.692 6.6167-17.548 9.9091-4.7816 2.6886-9.5901 5.3295-14.372 8.0171-4.7858 2.6896-9.544 5.4286-14.346 8.089-0.43965 0.24359-1.2346 0.29667-1.6525 0.0616-7.0102-3.9454-13.978-7.9661-20.973-11.938-4.8542-2.7558-9.7387-5.4583-14.606-8.192-3.6705-2.0616-7.346-4.115-10.985-6.2303-0.41371-0.24044-0.86299-0.85506-0.86684-1.2999-0.05579-6.4405-0.03823-12.882-0.03823-19.675 1.4828 0.75913 2.8059 1.3865 4.0812 2.0994 3.0153 1.6857 6.0024 3.4218 9.0107 5.1201 5.3132 2.9994 10.628 5.9954 15.953 8.9745 3.5921 2.0098 7.2033 3.9856 10.803 5.9815 2.5234 1.399 5.0583 2.7785 7.5527 4.2277 0.71018 0.4126 1.2245 0.36052 1.9215-0.0326 3.6252-2.0445 7.2922-4.0148 10.93-6.0371 3.9693-2.2066 7.9278-4.4329 11.882-6.6666 5.2737-2.9792 10.533-5.9841 15.81-8.9576 2.556-1.4403 5.1358-2.8385 7.7119-4.2427 0.27202-0.14827 0.59202-0.20852 1.0235-0.35501v1.8956z"/>
<path d="m74.129 51.656c0.97468 0.69856 1.62-0.0366 2.2598-0.39244 3.6791-2.0461 7.3161-4.1678 10.989-6.2246 5.24-2.9341 10.486-5.8578 15.771-8.7106 0.4973-0.26847 1.4092-0.2249 1.9179 0.05573 4.14 2.2838 8.2296 4.659 12.335 7.0054 1.3538 0.77373 2.7042 1.5536 4.0656 2.3136 0.85261 0.47596 0.85128 0.87822-0.014 1.3547-3.5216 1.9396-7.04 3.8854-10.543 5.8574-5.2758 2.9695-10.531 5.975-15.808 8.9419-3.5871 2.0167-7.2014 3.9849-10.794 5.9912-2.1885 1.222-4.4208 2.3808-6.5207 3.7419-1.9746 1.2799-3.7008 1.2499-5.7262 0.02438-3.8818-2.3489-7.8989-4.4736-11.851-6.7062-5.2713-2.9774-10.527-5.9823-15.804-8.9498-3.5865-2.0169-7.1996-3.9862-10.797-5.9837-1.7376-0.9648-3.4485-1.9792-5.2058-2.9063-1.0879-0.57394-0.72612-0.99817 0.0474-1.4359 5.5968-3.1672 11.19-6.3408 16.813-9.4604 0.34606-0.19198 1.0146-0.08481 1.4026 0.1248 3.745 2.0233 7.4734 4.0782 11.183 6.1656 2.6391 1.4849 5.228 3.0588 7.8655 4.5467 2.7583 1.5561 5.5479 3.0569 8.4148 4.6466z"/>
</g></svg>
</g>
  </defs></svg>
</vaadin-iconset>`;document.head.appendChild(c2.content);var O0=window,N0=O0.ShadowRoot&&(O0.ShadyCSS===void 0||O0.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,f1=Symbol(),d2=new WeakMap,y0=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==f1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(N0&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=d2.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&d2.set(e,t))}return t}toString(){return this.cssText}},p2=i=>new y0(typeof i=="string"?i:i+"",void 0,f1),w0=(i,...t)=>{let e=i.length===1?i[0]:t.reduce(((r,s,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1]),i[0]);return new y0(e,i,f1)},g1=(i,t)=>{N0?i.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((e=>{let r=document.createElement("style"),s=O0.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}))},P0=N0?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return p2(e)})(i):i;var v1,D0=window,m2=D0.trustedTypes,J3=m2?m2.emptyScript:"",h2=D0.reactiveElementPolyfillSupport,y1={toAttribute(i,t){switch(t){case Boolean:i=i?J3:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},u2=(i,t)=>t!==i&&(t==t||i==i),b1={attribute:!0,type:String,converter:y1,reflect:!1,hasChanged:u2},Y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach(((e,r)=>{let s=this._$Ep(r,e);s!==void 0&&(this._$Ev.set(s,r),t.push(s))})),t}static createProperty(t,e=b1){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let r=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,r,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(s){let o=this[t];this[e]=s,this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||b1}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let s of r)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let s of r)e.unshift(P0(s))}else t!==void 0&&e.push(P0(t));return e}static _$Ep(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach((e=>e(this)))}addController(t){var e,r;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return g1(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach((e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)}))}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach((e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=b1){var s;let o=this.constructor._$Ep(t,r);if(o!==void 0&&r.reflect===!0){let n=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:y1).toAttribute(e,r.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var r;let s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){let n=s.getPropertyOptions(o),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:y1;this._$El=o,this[o]=d.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,r){let s=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||u2)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((s,o)=>this[o]=s)),this._$Ei=void 0);let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach((s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)})),this.update(r)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach((r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach(((e,r)=>this._$EO(r,this[r],e))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Y.finalized=!0,Y.elementProperties=new Map,Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},h2==null||h2({ReactiveElement:Y}),((v1=D0.reactiveElementVersions)!==null&&v1!==void 0?v1:D0.reactiveElementVersions=[]).push("1.6.1");var w1,W0=window,m0=W0.trustedTypes,f2=m0?m0.createPolicy("lit-html",{createHTML:i=>i}):void 0,L0="$lit$",J=`lit$${(Math.random()+"").slice(9)}$`,z1="?"+J,q3=`<${z1}>`,h0=document,z0=()=>h0.createComment(""),k0=i=>i===null||typeof i!="object"&&typeof i!="function",z2=Array.isArray,k2=i=>z2(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",x1=`[ 	
\f\r]`,x0=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g2=/-->/g,v2=/>/g,r0=RegExp(`>|${x1}(?:([^\\s"'>=/]+)(${x1}*=${x1}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),b2=/'/g,y2=/"/g,A2=/^(?:script|style|textarea|title)$/i,E2=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),g=E2(1),Re=E2(2),O=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),w2=new WeakMap,p0=h0.createTreeWalker(h0,129,null,!1),C2=(i,t)=>{let e=i.length-1,r=[],s,o=t===2?"<svg>":"",n=x0;for(let f=0;f<e;f++){let v=i[f],z,x,k=-1,C=0;for(;C<v.length&&(n.lastIndex=C,x=n.exec(v),x!==null);)C=n.lastIndex,n===x0?x[1]==="!--"?n=g2:x[1]!==void 0?n=v2:x[2]!==void 0?(A2.test(x[2])&&(s=RegExp("</"+x[2],"g")),n=r0):x[3]!==void 0&&(n=r0):n===r0?x[0]===">"?(n=s!=null?s:x0,k=-1):x[1]===void 0?k=-2:(k=n.lastIndex-x[2].length,z=x[1],n=x[3]===void 0?r0:x[3]==='"'?y2:b2):n===y2||n===b2?n=r0:n===g2||n===v2?n=x0:(n=r0,s=void 0);let B=n===r0&&i[f+1].startsWith("/>")?" ":"";o+=n===x0?v+q3:k>=0?(r.push(z),v.slice(0,k)+L0+v.slice(k)+J+B):v+J+(k===-2?(r.push(void 0),f):B)}let d=o+(i[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[f2!==void 0?f2.createHTML(d):d,r]},A0=class i{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let o=0,n=0,d=t.length-1,f=this.parts,[v,z]=C2(t,e);if(this.el=i.createElement(v,r),p0.currentNode=this.el.content,e===2){let x=this.el.content,k=x.firstChild;k.remove(),x.append(...k.childNodes)}for(;(s=p0.nextNode())!==null&&f.length<d;){if(s.nodeType===1){if(s.hasAttributes()){let x=[];for(let k of s.getAttributeNames())if(k.endsWith(L0)||k.startsWith(J)){let C=z[n++];if(x.push(k),C!==void 0){let B=s.getAttribute(C.toLowerCase()+L0).split(J),_=/([.?@])?(.*)/.exec(C);f.push({type:1,index:o,name:_[2],strings:B,ctor:_[1]==="."?U0:_[1]==="?"?K0:_[1]==="@"?H0:s0})}else f.push({type:6,index:o})}for(let k of x)s.removeAttribute(k)}if(A2.test(s.tagName)){let x=s.textContent.split(J),k=x.length-1;if(k>0){s.textContent=m0?m0.emptyScript:"";for(let C=0;C<k;C++)s.append(x[C],z0()),p0.nextNode(),f.push({type:2,index:++o});s.append(x[k],z0())}}}else if(s.nodeType===8)if(s.data===z1)f.push({type:2,index:o});else{let x=-1;for(;(x=s.data.indexOf(J,x+1))!==-1;)f.push({type:7,index:o}),x+=J.length-1}o++}}static createElement(t,e){let r=h0.createElement("template");return r.innerHTML=t,r}};function i0(i,t,e=i,r){var s,o,n,d;if(t===O)return t;let f=r!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[r]:e._$Cl,v=k0(t)?void 0:t._$litDirective$;return(f==null?void 0:f.constructor)!==v&&((o=f==null?void 0:f._$AO)===null||o===void 0||o.call(f,!1),v===void 0?f=void 0:(f=new v(i),f._$AT(i,e,r)),r!==void 0?((n=(d=e)._$Co)!==null&&n!==void 0?n:d._$Co=[])[r]=f:e._$Cl=f),f!==void 0&&(t=i0(i,f._$AS(i,t.values),f,r)),t}var Z0=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:r},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:h0).importNode(r,!0);p0.currentNode=o;let n=p0.nextNode(),d=0,f=0,v=s[0];for(;v!==void 0;){if(d===v.index){let z;v.type===2?z=new u0(n,n.nextSibling,this,t):v.type===1?z=new v.ctor(n,v.name,v.strings,this,t):v.type===6&&(z=new F0(n,this,t)),this._$AV.push(z),v=s[++f]}d!==(v==null?void 0:v.index)&&(n=p0.nextNode(),d++)}return o}v(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},u0=class i{constructor(t,e,r,s){var o;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cp=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=i0(this,t,e),k0(t)?t===T||t==null||t===""?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):k2(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&k0(this._$AH)?this._$AA.nextSibling.data=t:this.$(h0.createTextNode(t)),this._$AH=t}g(t){var e;let{values:r,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=A0.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(r);else{let n=new Z0(o,this),d=n.u(this.options);n.v(r),this.$(d),this._$AH=n}}_$AC(t){let e=w2.get(t.strings);return e===void 0&&w2.set(t.strings,e=new A0(t)),e}T(t){z2(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,s=0;for(let o of t)s===e.length?e.push(r=new i(this.k(z0()),this.k(z0()),this,this.options)):r=e[s],r._$AI(o),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},s0=class{constructor(t,e,r,s,o){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,s){let o=this.strings,n=!1;if(o===void 0)t=i0(this,t,e,0),n=!k0(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{let d=t,f,v;for(t=o[0],f=0;f<o.length-1;f++)v=i0(this,d[r+f],e,f),v===O&&(v=this._$AH[f]),n||(n=!k0(v)||v!==this._$AH[f]),v===T?t=T:t!==T&&(t+=(v!=null?v:"")+o[f+1]),this._$AH[f]=v}n&&!s&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},U0=class extends s0{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}},G3=m0?m0.emptyScript:"",K0=class extends s0{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,G3):this.element.removeAttribute(this.name)}},H0=class extends s0{constructor(t,e,r,s,o){super(t,e,r,s,o),this.type=5}_$AI(t,e=this){var r;if((t=(r=i0(this,t,e,0))!==null&&r!==void 0?r:T)===O)return;let s=this._$AH,o=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==T&&(s===T||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},F0=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){i0(this,t)}},T2={O:L0,P:J,A:z1,C:1,M:C2,L:Z0,D:k2,R:i0,I:u0,V:s0,H:K0,N:H0,U:U0,F:F0},x2=W0.litHtmlPolyfillSupport;x2==null||x2(A0,u0),((w1=W0.litHtmlVersions)!==null&&w1!==void 0?w1:W0.litHtmlVersions=[]).push("2.7.3");var $2=(i,t,e)=>{var r,s;let o=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t,n=o._$litPart$;if(n===void 0){let d=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=n=new u0(t.insertBefore(z0(),d),d,void 0,e!=null?e:{})}return n._$AI(i),n};var k1,A1;var H=class extends Y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$2(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return O}};H.finalized=!0,H._$litElement$=!0,(k1=globalThis.litElementHydrateSupport)===null||k1===void 0||k1.call(globalThis,{LitElement:H});var S2=globalThis.litElementPolyfillSupport;S2==null||S2({LitElement:H});((A1=globalThis.litElementVersions)!==null&&A1!==void 0?A1:globalThis.litElementVersions=[]).push("3.3.2");var j0=i=>t=>typeof t=="function"?((e,r)=>(customElements.define(e,r),r))(i,t):((e,r)=>{let{kind:s,elements:o}=r;return{kind:s,elements:o,finisher(n){customElements.define(e,n)}}})(i,t);var X3=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function o0(i){return(t,e)=>e!==void 0?((r,s,o)=>{s.constructor.createProperty(o,r)})(i,t,e):X3(i,t)}function I(i){return o0({...i,state:!0})}var n0=({finisher:i,descriptor:t})=>(e,r)=>{var s;if(r===void 0){let o=(s=e.originalKey)!==null&&s!==void 0?s:e.key,n=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(e.key)}:{...e,key:o};return i!=null&&(n.finisher=function(d){i(d,o)}),n}{let o=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),i==null||i(o,r)}};function V0(i,t){return n0({descriptor:e=>{let r={get(){var s,o;return(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(i))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){let s=typeof e=="symbol"?Symbol():"__"+e;r.get=function(){var o,n;return this[s]===void 0&&(this[s]=(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&n!==void 0?n:null),this[s]}}return r}})}var E1,a4=((E1=window.HTMLSlotElement)===null||E1===void 0?void 0:E1.prototype.assignedElements)!=null?(i,t)=>i.assignedElements(t):(i,t)=>i.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));var W={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},j=i=>(...t)=>({_$litDirective$:i,values:t}),F=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var{I:Q3}=T2;var B2=i=>i.strings===void 0,M2=()=>document.createComment(""),f0=(i,t,e)=>{var r;let s=i._$AA.parentNode,o=t===void 0?i._$AB:t._$AA;if(e===void 0){let n=s.insertBefore(M2(),o),d=s.insertBefore(M2(),o);e=new Q3(n,d,i,i.options)}else{let n=e._$AB.nextSibling,d=e._$AM,f=d!==i;if(f){let v;(r=e._$AQ)===null||r===void 0||r.call(e,i),e._$AM=i,e._$AP!==void 0&&(v=i._$AU)!==d._$AU&&e._$AP(v)}if(n!==o||f){let v=e._$AA;for(;v!==n;){let z=v.nextSibling;s.insertBefore(v,o),v=z}}}return e},Q=(i,t,e=i)=>(i._$AI(t,e),i),ee={},Y0=(i,t=ee)=>i._$AH=t,_2=i=>i._$AH,J0=i=>{var t;(t=i._$AP)===null||t===void 0||t.call(i,!1,!0);let e=i._$AA,r=i._$AB.nextSibling;for(;e!==r;){let s=e.nextSibling;e.remove(),e=s}};var N=j(class extends F{constructor(i){if(super(i),i.type!==W.PROPERTY&&i.type!==W.ATTRIBUTE&&i.type!==W.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!B2(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[t]){if(t===O||t===T)return t;let e=i.element,r=i.name;if(i.type===W.PROPERTY){if(t===e[r])return O}else if(i.type===W.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(r))return O}else if(i.type===W.ATTRIBUTE&&e.getAttribute(r)===t+"")return O;return Y0(i),t}});var I2="important",te=" !"+I2,R2=j(class extends F{constructor(i){var t;if(super(i),i.type!==W.ATTRIBUTE||i.name!=="style"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce(((t,e)=>{let r=i[e];return r==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(i,[t]){let{style:e}=i.element;if(this.ut===void 0){this.ut=new Set;for(let r in t)this.ut.add(r);return this.render(t)}this.ut.forEach((r=>{t[r]==null&&(this.ut.delete(r),r.includes("-")?e.removeProperty(r):e[r]="")}));for(let r in t){let s=t[r];if(s!=null){this.ut.add(r);let o=typeof s=="string"&&s.endsWith(te);r.includes("-")||o?e.setProperty(r,o?s.slice(0,-11):s,o?I2:""):e[r]=s}}return O}});var O2=(i,t,e)=>{let r=new Map;for(let s=t;s<=e;s++)r.set(i[s],s);return r},N2=j(class extends F{constructor(i){if(super(i),i.type!==W.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,t,e){let r;e===void 0?e=t:t!==void 0&&(r=t);let s=[],o=[],n=0;for(let d of i)s[n]=r?r(d,n):n,o[n]=e(d,n),n++;return{values:o,keys:s}}render(i,t,e){return this.dt(i,t,e).values}update(i,[t,e,r]){var s;let o=_2(i),{values:n,keys:d}=this.dt(t,e,r);if(!Array.isArray(o))return this.ht=d,n;let f=(s=this.ht)!==null&&s!==void 0?s:this.ht=[],v=[],z,x,k=0,C=o.length-1,B=0,_=n.length-1;for(;k<=C&&B<=_;)if(o[k]===null)k++;else if(o[C]===null)C--;else if(f[k]===d[B])v[B]=Q(o[k],n[B]),k++,B++;else if(f[C]===d[_])v[_]=Q(o[C],n[_]),C--,_--;else if(f[k]===d[_])v[_]=Q(o[k],n[_]),f0(i,v[_+1],o[k]),k++,_--;else if(f[C]===d[B])v[B]=Q(o[C],n[B]),f0(i,o[k],o[C]),C--,B++;else if(z===void 0&&(z=O2(d,B,_),x=O2(f,k,C)),z.has(f[k]))if(z.has(f[C])){let L=x.get(d[B]),c0=L!==void 0?o[L]:null;if(c0===null){let $0=f0(i,o[k]);Q($0,n[B]),v[B]=$0}else v[B]=Q(c0,n[B]),f0(i,o[k],c0),o[L]=null;B++}else J0(o[C]),C--;else J0(o[k]),k++;for(;B<=_;){let L=f0(i,v[_+1]);Q(L,n[B]),v[B++]=L}for(;k<=C;){let L=o[k++];L!==null&&J0(L)}return this.ht=d,Y0(i,v),O}});var e3=$3(D2());var W2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAGACAIAAACyR0TpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA3LTEyVDE1OjM2OjAxKzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA3LTEyVDE1OjM2OjAxKzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wNy0xMlQxNTozNjowMSswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NjQzZGQ3My01ODViLTE3NDItYTQ3Yi1lOWRlZGU5OWM0ZjMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1YWRiNDA5MC1mZDhlLWY3NGUtYjI4Zi0xY2VlNzVkYzU1MWQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphODg1YzI1OS0wYTBlLTFjNDQtOTJmYy00ZDBkNmM1ZjJlZmYiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphODg1YzI1OS0wYTBlLTFjNDQtOTJmYy00ZDBkNmM1ZjJlZmYiIHN0RXZ0OndoZW49IjIwMjQtMDctMTJUMTU6MzY6MDErMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTY0M2RkNzMtNTg1Yi0xNzQyLWE0N2ItZTlkZWRlOTljNGYzIiBzdEV2dDp3aGVuPSIyMDI0LTA3LTEyVDE1OjM2OjAxKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0YWU5MTBmOC00YTY2LTYwNDAtOTJiMi03YzFkOGRiYjIyNzE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6HusJtAAAF+0lEQVR4nO3VoQGAMBDAQEBVsCbrYZkM3zEi/m6CuJwHRP73rhMY7XtWncBoVx0AABMZMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgsAFzxgXThswSIwAAAA5lWElmTU0AKgAAAAgAAAAAAAAA0lOTAAAAAElFTkSuQmCC";var C1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAGACAIAAACyR0TpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA3LTEyVDE1OjI5OjE4KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA3LTEyVDE1OjI5OjE4KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wNy0xMlQxNToyOToxOCswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOWViN2NjOC02MGFiLWNmNDEtYTQ5MS0yNWM3MGI3NTlmODYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkNDE4ZDMwOS02OWM3LWI0NGYtOGRh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";var L2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAGACAIAAACyR0TpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA3LTEyVDE1OjM0OjU0KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA3LTEyVDE1OjM0OjU0KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wNy0xMlQxNTozNDo1NCswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphMzkxZDc2Mi01MTRkLTU1NGUtYjhkNy1hMmUyYzgyODEzOGQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiZGY1NzA2Zi0yNTY1LWQ1NDYtOTE2Yi1iYTRiMjYxZWRlYjMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmN2M5YzVkYS1kYjcwLWQ3NGYtYjM3ZS04YzE4ZjU5ZDIwMjUiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmN2M5YzVkYS1kYjcwLWQ3NGYtYjM3ZS04YzE4ZjU5ZDIwMjUiIHN0RXZ0OndoZW49IjIwMjQtMDctMTJUMTU6MzQ6NTQrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTM5MWQ3NjItNTE0ZC01NTRlLWI4ZDctYTJlMmM4MjgxMzhkIiBzdEV2dDp3aGVuPSIyMDI0LTA3LTEyVDE1OjM0OjU0KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0YWU5MTBmOC00YTY2LTYwNDAtOTJiMi03YzFkOGRiYjIyNzE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz728729AAAF/klEQVR4nO3VMQGAMADAsIEGsIAhbA5BqAEZPZYo6NdtXPeAwvfOOoGlPcdZJ7C0vQ4AgBUZMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEgYMAAEDBgAAgYMAAEDBgAAgYMAAEDBoCAAQNAwIABIGDAABAwYAAIGDAABAwYAAIGDAABAwaAgAEDQMCAASBgwAAQMGAACBgwAAQMGAACBgwAAQMGgIABA0DAgAEg8AMN3AbTTtejYgAAAA5lWElmTU0AKgAAAAgAAAAAAAAA0lOTAAAAAElFTkSuQmCC";var Z2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAGACAIAAACyR0TpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA3LTEyVDE1OjI5OjMzKzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA3LTEyVDE1OjI5OjMzKzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wNy0xMlQxNToyOTozMyswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkYTBmNTg4Ni05NjlmLTdkNGUtYmUzOS03YzkwMDc4YmNhNmMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmZGVmNmFlNy1lZWNkLTYzNGUtYWUz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AgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQAABBoAAAgwAAQQYAAIIMAAEEGAACCDAABBAgAEggAADQID/BzN9Cs7LeEJxAAAADmVYSWZNTQAqAAAACAAAAAAAAADSU5MAAAAASUVORK5CYII=";var U2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAGACAIAAACyR0TpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA3LTEyVDE1OjMxOjQwKzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA3LTEyVDE1OjMxOjQwKzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wNy0xMlQxNTozMTo0MCswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2ZmE2ZDQyNC1mZDVkLWRkNDYtOTg1MC04MGFmZDc5ZTYzMTYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MmY2ZTkzNC03MGVlLTIxNDktOWQ1Ny1kNjQ5NmViNzMzMmIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZmZkOGIxMy1lMmFiLTQyNDMtOGY1MC05ZjgxMjI3MDUzYjMiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4ZmZkOGIxMy1lMmFiLTQyNDMtOGY1MC05ZjgxMjI3MDUzYjMiIHN0RXZ0OndoZW49IjIwMjQtMDctMTJUMTU6MzE6NDArMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NmZhNmQ0MjQtZmQ1ZC1kZDQ2LTk4NTAtODBhZmQ3OWU2MzE2IiBzdEV2dDp3aGVuPSIyMDI0LTA3LTEyVDE1OjMxOjQwKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0YWU5MTBmOC00YTY2LTYwNDAtOTJiMi03YzFkOGRiYjIyNzE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6eYbwEAACUZklEQVR4nOzddXwc17nw8efMLPOuGAwySGYWSxbLkszMkNhhKt1729v7tkmbpmmTtOHEzMwkkyzbQkPMDGJmXp457x9K097eQmDsHXmfb/9sPmeO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";var K2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAGACAIAAACyR0TpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA3LTEyVDE1OjMzOjQyKzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA3LTEyVDE1OjMzOjQyKzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wNy0xMlQxNTozMzo0MiswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjM2U4ZTNkYi1jZDQ3LTc3NGEtOTE3MS0yMjU2OTk4NjVjYjMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2NjYxM2QxNS0xNjg2LTc1NDgtOTU0Mi02Y2Y1NmJjNWU5OTYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyZDA3NjQ1OC1iZTExLWI0NDAtOGI4YS03NTk4ODRhMzNhMzEiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyZDA3NjQ1OC1iZTExLWI0NDAtOGI4YS03NTk4ODRhMzNhMzEiIHN0RXZ0OndoZW49IjIwMjQtMDctMTJUMTU6MzM6NDIrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzNlOGUzZGItY2Q0Ny03NzRhLTkxNzEtMjI1Njk5ODY1Y2IzIiBzdEV2dDp3aGVuPSIyMDI0LTA3LTEyVDE1OjMzOjQyKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0YWU5MTBmOC00YTY2LTYwNDAtOTJiMi03YzFkOGRiYjIyNzE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7C6nB7AAAqDElEQVR4nO3daZwU5bXH8aeRRRCjV1xiNEaN2hg3EhQFBBFEwB1odhFUBpBNQFlVNmEQQRBFZGQRN4ZVQxRFwQWMKIpL4gLE5Kq50RtzxURFkW36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AhjAAAAIYAADACCAAQwAgAAGMAAAAhjAAAAIYAADACCAAQwAgAAGMAAAAhjAAAAIYAADACCAAQwAgAAGMAAAAhjAAAAIYAADACCAAQwAgAAGMAAAAhjAAAAIYAADACCAAQwAgAAGMAAAAhjAAAAIYAADACAglkwmpWsAAKDgcAQMAIAABjAAAAIYwAAACGAAAwAggAEMAIAABjAAAAIYwAAACGAAAwAggAEMAIAABjAAAAIYwAAACGAAAwAggAEMAIAABjAAAAIYwAAACGAAAwAggAEMAIAABjAAAAIYwAAACGAAAwAggAEMAIAABjAAAAIYwAAACGAAAwAggAEMAIAABjAAAAIYwAAACGAAAwAggAEMAICA6l++sEm6BgAACk5sZb0jpWsAAKDgcAoaAAABDGAAAAQwgAEAEMAABgBAAAMYAAABDGAAAAQwgAEAEMAABgBAAAMYAAABDGAAAAQwgAEAEMAABgBAAAMYAAABDGAAAAQwgAEAEMAABgBAAAMYAAABDGAAAAQwgAEAEMAABgBAAAMYAAABDGAAAAQwgAEAEMAABgBAAAMYAAABDGAAAAQwgAEAEMAABgBAQCyZTErXAABAweEIGAAAAQxgAAAEMIABABDAAAYAQAADGAAAAQxgAAAEMIABABDAAAYAQAADGAAAAQxgAAAEMIABABDAAAYAQAADGAAAAQxgAAAEMIABABDAAAYAQAADGAAAAQxgAAAEMIABABDAAAYAQAADGAAAAQxgAAAEMIABABDAAAYAQAADGAAAAQxgAAAEMIABABDAAAYAQAADGAAAAbHXrhoiXQMAAAUntrLekdI1AABQcDgFDQCAAAYwAAACGMAAAAhgAAMAIIABDACAAAYwAAACGMAAAAhgAAMAIIABDACAAAYwAAACGMAAAAhgAAMAIIABDACAAAYwAAACGMAAAAhgAAMAIIABDACAAAYwAAACGMAAAAhgAAMAIIABDACAAAYwAAACGMAAAAhgAAMAIIABDACAAAYwAAACGMAAAAhgAAMAIOD/AUle8r12wZ1xAAAADmVYSWZNTQAqAAAACAAAAAAAAADSU5MAAAAASUVORK5CYII=";var H2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAGACAIAAACyR0TpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA3LTEyVDE1OjQ1OjI3KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA3LTEyVDE1OjQ1OjI3KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wNy0xMlQxNTo0NToyNyswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MDhhYTI5OC05ZmVkLTE2NDQtODYxMS04MjFhMzE5NzcxMjEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxNjVhY2YzMi00YzI3LTk1NGEtYmNhNC0yNzI2NDI0NmMwZmQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozYzgxOWY5ZC0yMGJlLWFiNDYtYmY2My03NDRlMGNmNWZlNjQiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozYzgxOWY5ZC0yMGJlLWFiNDYtYmY2My03NDRlMGNmNWZlNjQiIHN0RXZ0OndoZW49IjIwMjQtMDctMTJUMTU6NDU6MjcrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTA4YWEyOTgtOWZlZC0xNjQ0LTg2MTEtODIxYTMxOTc3MTIxIiBzdEV2dDp3aGVuPSIyMDI0LTA3LTEyVDE1OjQ1OjI3KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0YWU5MTBmOC00YTY2LTYwNDAtOTJiMi03YzFkOGRiYjIyNzE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5XIfGHAAAE+ElEQVR4nO3XoRGAQBAEwX80DvKPgCI7PGGMuO4I1k3tWgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALH9XHe9AQDGOeoBADCRAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAwP7es94AAON4wAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACPxdCBH/wHPkXAAAADmVYSWZNTQAqAAAACAAAAAAAAADSU5MAAAAASUVORK5CYII=";var F2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAGACAIAAACyR0TpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA3LTEyVDE1OjU0OjU4KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA3LTEyVDE1OjU0OjU4KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wNy0xMlQxNTo1NDo1OCswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphNTYyOGUzNy0yYzFjLWQxNGEtOGJiYi1lNjdmYjQ2MTYyZjAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5M2QwZDEwMC02ZmE4LTA0NGEtODdkYy04NjllYzVhNjI0OGUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3ZTI3MTgyNC0zMWRkLWE1NGEtOWU1YS1mYjFkYTgxMzU3NTEiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZTI3MTgyNC0zMWRkLWE1NGEtOWU1YS1mYjFkYTgxMzU3NTEiIHN0RXZ0OndoZW49IjIwMjQtMDctMTJUMTU6NTQ6NTgrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTU2MjhlMzctMmMxYy1kMTRhLThiYmItZTY3ZmI0NjE2MmYwIiBzdEV2dDp3aGVuPSIyMDI0LTA3LTEyVDE1OjU0OjU4KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0YWU5MTBmOC00YTY2LTYwNDAtOTJiMi03YzFkOGRiYjIyNzE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz51t7xDAAAF90lEQVR4nO3XQRGAMBAEQYIF8K8AjxcXzCPdCvY3tWtmLgDgX3c9AABOJMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgMD6nrfeAADH8YABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoDABk9XBs/nJGD7AAAADmVYSWZNTQAqAAAACAAAAAAAAADSU5MAAAAASUVORK5CYII=";var j2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAGACAIAAACyR0TpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA3LTEyVDE1OjQ2OjQ5KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA3LTEyVDE1OjQ2OjQ5KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wNy0xMlQxNTo0Njo0OSswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkZTk5ZjA0Mi1iZDEzLTZhNGUtYjk4NC00ZmIwOGNiM2Y0MDkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZWQ3MDkyOC01NWFjLTc5NDQtOGE3Zi0yNWZmMGUyOTBhZTQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZDQ2ODJjMC00ZDgwLTYxNDItODU0Zi05ZTg0Y2U0OTZhMjUiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphZDQ2ODJjMC00ZDgwLTYxNDItODU0Zi05ZTg0Y2U0OTZhMjUiIHN0RXZ0OndoZW49IjIwMjQtMDctMTJUMTU6NDY6NDkrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZGU5OWYwNDItYmQxMy02YTRlLWI5ODQtNGZiMDhjYjNmNDA5IiBzdEV2dDp3aGVuPSIyMDI0LTA3LTEyVDE1OjQ2OjQ5KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0YWU5MTBmOC00YTY2LTYwNDAtOTJiMi03YzFkOGRiYjIyNzE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4h2IdNAAAF/ElEQVR4nO3XQRGAMAADwRYLoAFD2MRjccE9uqsgv5vM97wGAPCvox4AADsSYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAw11r1BgDYjgcMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDACBOe6n3gAA2/GAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQ+rOIHR8kHp/cAAAAOZVhJZk1NACoAAAAIAAAAAAAAANJTkwAAAABJRU5ErkJggg==";var V2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAGACAIAAACyR0TpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA3LTEyVDE3OjIyOjUzKzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA3LTEyVDE3OjIyOjUzKzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wNy0xMlQxNzoyMjo1MyswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNGUwZDBhMS1kMzVmLTY4NDItOTNhOS1lZmZjMTExYmVjN2UiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2OGE0MDA2OC00YWU2LTVkNDQtODY1MS1hYTk0MzY1YTllMzUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNDdkNzY3Ny1kNjMyLWUxNDktODdlNy1jOTlmNWI1OTk0NWQiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNDdkNzY3Ny1kNjMyLWUxNDktODdlNy1jOTlmNWI1OTk0NWQiIHN0RXZ0OndoZW49IjIwMjQtMDctMTJUMTc6MjI6NTMrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTRlMGQwYTEtZDM1Zi02ODQyLTkzYTktZWZmYzExMWJlYzdlIiBzdEV2dDp3aGVuPSIyMDI0LTA3LTEyVDE3OjIyOjUzKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0YWU5MTBmOC00YTY2LTYwNDAtOTJiMi03YzFkOGRiYjIyNzE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5+yKZhAAAF/ElEQVR4nO3XMRGAMAAEwQQLoBJjNHgMLrgiuwq+u/n5ntcAAP511AMAYEcCDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAATmWqveAADb8YABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAwx/3UGwBgOx4wAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgMAHujkH34w8eTgAAAAOZVhJZk1NACoAAAAIAAAAAAAAANJTkwAAAABJRU5ErkJggg==";var Y2="data:image/png;base64,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";var J2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAGACAIAAACyR0TpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA3LTEyVDE1OjU2OjM2KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA3LTEyVDE1OjU2OjM2KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wNy0xMlQxNTo1NjozNiswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2YWU5YTJmYy03MjMyLTBjNDYtODE0Yy0zMzFhNGVlMWQ2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiMjIyY2RjYS0xZDUxLWQ0NDMtOTA3OS1kYzg1ZGIyZWIwNWIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZDk3ZDg3ZS0xNDNmLTZmNDEtYjU2MS01NWE4NTAxZWJjMGMiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4ZDk3ZDg3ZS0xNDNmLTZmNDEtYjU2MS01NWE4NTAxZWJjMGMiIHN0RXZ0OndoZW49IjIwMjQtMDctMTJUMTU6NTY6MzYrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NmFlOWEyZmMtNzIzMi0wYzQ2LTgxNGMtMzMxYTRlZTFkNmU2IiBzdEV2dDp3aGVuPSIyMDI0LTA3LTEyVDE1OjU2OjM2KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0YWU5MTBmOC00YTY2LTYwNDAtOTJiMi03YzFkOGRiYjIyNzE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7QrKM4AAAMLUlEQVR4nO3cPatlZxkG4HVGq2HSREj8BTkgWKWytLSdHEhIIfgzbFL4C6zSBi1CiinsYjsgpLJXsLEIROTYaBMQtNjDmj179sf6eD+f97q63a3u5n7e+5y76YOP/vfXFxMAUNCTaZru7h9qfwYAjOVu+uCj+YcqDABlPDn+oQoDQBlPTn7f3T988tmXVT4FAMbxxgn62HfffPH+u+8U/hoAGMTFAD7wKgwAOZyeoE94FQaAHG404JkqDAAJ3WjAM1UYABJaGsCTgTQApLP0BH3MQBoAdtoSwAdehQFgsxUn6BNehQFgs+0NeKYKA8Ba2xvwTBUGgLUSBPBkIA0AKyU4QR8zkAaAJRIH8IFXYQC4Ls0J+oRXYQC4LksDnqnCAHBWlgY8U4UB4Ky8ATwZSAPAOXlP0McMpAFgVi6AD7wKA8BU4AR9wqswAEzlG/BMFQZgZKUb8EwVBmBk1QJ4MpAGYGDVTtDHDKQBGE0TAXzgVRiAcdQ8QZ/wKgzAOBpqwDNVGIDwGmrAM1UYgPBaDODJQBqA6Fo8QR8zkAYgpNYD+MCrMADBNHqCPuFVGIBg+mjAM1UYgBj6aMAzVRiAGDoL4MlAGoAQOjtBHzOQBqBfHQfwgVdhAHrU3wn6hFdhAHrUfQOeqcIAdKT7BjxThQHoSJwAngykAehHnBP0MQNpABoXM4APvAoD0KxQJ+gTXoUBaFbkBjxThQFoTeQGPFOFAWjNEAE8GUgD0JghTtDHDKQBaMFwAXzgVRiAukY5QZ+4u3/4x7/+XfsrABjXoA14pgoDUMWgDXh2d//w+6//XPsrABjOD6Yf/aT2N1T2hz/+6S///O/Dz39a+0MAGMjoJ+hjH3/8/KvffFr7KwAYggA+5VUYgAJGfwN+m4E0AAVowBepwgDkowFfZCANQD5W0NcYSAOQiRP0IgbSAKQlgFfwKgxAKt6AVzCQBiAVDXgLVRiAnTTgLQykAdjJCnojA2kA9nCC3stAGoANBHAaXoUBWMUbcBoG0gCsogEnpgoDsIQGnJiBNABLWEGnZyANwE1O0BkZSANwiQDOzqswAG/zBpydgTQAb9OAy1GFAZhpwOUYSAMws4IuykAagAMn6DqcowEGJ4BrEsMAw/IGXJOBNMCwBHBlP/7ZryyzAAbkBN2K3/3217/8xYe1vwKAQqygW2EgDTAUDbg5llkAIxDAjRLDALEZYTXKQBogNgHcLgNpgMCcoDtgIA0QjxV0BwykAeLRgHtimQUQhgDujxgGCMAIqz8G0gABCOAuGUgD9M4Jum8G0gCdsoLum4E0QKc04CAsswD6IoBDEcMAvTDCCsVAGqAXAjgaA2mALjhBh2UgDdAyK+iwDKQBWqYBx2eZBdAgATwKMQzQFCOsURhIAzRFAA/EQBqgHU7QIzKQBqhOAI/LqzBARU7Q47q7f6j9CQDj0oBRhQEq0IAxkAaoQAPmNVUYoBgNmNfu7h/8nRJAGRowZ6jCALlpwJxhIA2QmwbMNaowQCYaMNcYSANkogGziCoMkJYGzCIG0gBpacCsowoDJKEBs46BNEASGjAbqcIAe2jAbGQgDbCHBsxeqjDABhowexlIA2ygAZOMKgywnAZMMgbSAMtpwKSnCgPcpAGTnoE0wE0aMBmpwgCXaMBkZCANcIkGTAmqMMAJDZgSDKQBTmjAFKUKAxxowBRlIA1woAFThyoMDE4Dpg4DaWBwGjCVqcLAmDRgKjOQBsakAdMKVRgYigZMKwykgaFowDRHFQZGoAHTHANpYAQaMO1ShYHANGDaZSANBKYB0wFVGIhHA6YDBtJAPBowPVGFgTA0YHpiIA2EoQHTJVUY6J0GTJcMpIHeacD0TRUGOqUB0zcDaaBTGjBBqMJAXzRggjCQBvqiARONKgx0QQMmGgNpoAsaMGGpwkDLNGDCMpAGWqYBE58qDDRIAyY+A2mgQRowA1GFgXZowAzEQBpohwBmLHf3D5989mXtrwBwgmZU333zxfvvvlP7K4BxCWCG5lUYqMUJmqF5FQZq0YBhmlRhoDgNGKZJFQaKE8DwioE0UJITNJwykAYKEMBwnldhICsnaDjPqzCQlQYMN6jCQA4aMNygCgM5CGC4zUAaSM4JGlYwkAZSEcCwmldhYD8naFjNqzCwnwYM26nCwGYaMGynCgObCWDYxUAa2MYJGtIwkAZWEcCQkldhYCEnaEjJqzCwkAYMWajCwHUaMGShCgPXacCQ0YvHl7U/AWjUD2t/AMT0+fffvvefv9X+CqBdAhjSU3yBm7wBQ2LSF1hCA4ZkRC+wnAYMCTx/9lT6AqtowLDXi8eX02PtjwB6I4BhO1NnYDMBDBu5OQN7eAOGLaQvsJMGDOuIXiAJDRiWMnUGEtKAYRFTZyAtAQw3mDoDOQhguMbNGcjEGzBcJH2BfDRgOEP0ArlpwPAGU2egDA0YXjN1BooRwDBNps5AcQIYvPgCFXgDZnTSF6hCA2ZcoheoSANmRKbOQHUaMMMxdQZaIIAZiKkz0A4BzCjcnIGmCGDiU3yBBglgglN8gTYJYMISvUDL/BkSMUlfoHEaMNGIXqALGjChSF+gFxowQZg6A30RwESg+ALdEcD0TfQCnfIGTMekL9AvDZguiV6gdxow/ZG+QAAaMD0xdQbCEMB0Q/EFIhHAdED0AvF4A6Z10hcISQOmXaIXCEwDplHSF4hNA6Y5ps7ACAQwbVF8gUEIYFoheoGheAOmCdIXGI0GTGWiFxiTBkxN0hcYlgZMHabOwOAEMBUovgACmKJEL8CBN2DKkb4AMw2YEkQvwAkNmOykL8DbNGAyMnUGuEQAk4viC3CFACY90QtwkzdgEpO+AEsIYJJ5/uyp9AVYyAmaNF48vpwea38EQD8EMHuZOgNsIIDZxc0ZYBsBzEaiF2APIyy2kL4AOwlg1jF1BkjCCZoVTJ0BUhHALGLqDJCWAOY2N2eA5AQw14hegEyMsLhI+gLkI4A5w9QZIDcnaE6ZOgMUIIB5zdQZoBgBzCtuzgAlCWBEL0AFRlijk74AVQjgcZk6A1TkBD0oU2eAugTwcEydAVoggMfi5gzQCAE8CtEL0BQjrCFIX4DWCODgTJ0B2uQEHZmpM0CzBHBMps4AjRPAAbk5A7RPAIciegF6YYQVh/QF6IgAjsDUGaA7TtDdM3UG6JEA7pipM0C/BHCv3JwBuiaA+yN6AQIwwuqM9AWIQQB3w9QZIBIn6D6YOgMEI4BbZ+oMEJIAbpqbM0BUArhRohcgNiOsFklfgPAEcFtMnQEG4QTdEFNngHEI4CaYOgOMRgDX5+YMMCABXJPoBRiWEVY10hdgZAK4AlNnAJygSzN1BmASwCWZOgMwE8CFuDkDcEwAZyd6AXibEVZe0heAswRwLqbOAFzhBJ2FqTMA1wngxEydAVhCAKfk5gzAQgI4DdELwCpGWAlIXwDWEsC7mDoDsI0T9HamzgBsJoC3MHUGYCcBvJqbMwD7CeAVRC8AqRhhLSV9AUhIAN9m6gxAck7QN5g6A5CDAL7I1BmAfATweW7OAGQlgE+JXgAKMMJ6g/QFoAwB/IqpMwAlOUFPk6kzAMWNHsCmzgBUMXQAuzkDUMugASx6AahrxBGW9AWgurEC2NQZgEaMcoJ+/uzpp3//2tQZgEYMEcCff//te4+mzgA0JH4AuzkD0KDgb8DSF4A2hW3AoheAlgVswKbOALQvWgP2X50B6EKcAPZfnQHoSJAAdnMGoC8R3oClLwDd6bsBi14AOtVrAzZ1BqBrXTZgU2cAetdZAJs6AxBDTwHs5gxAGN28AUtfACLpoAGLXgDiaboBmzoDEFW7DdjUGYDAWgxgU2cAwmsugN2cARhBW2/A0heAQbTSgEUvAEOp34BNnQEYUOUGbOoMwJiqBbCpMwAjqxPAbs4ADK7CG7D0BYCiDVj0AsBBoQZs6gwAx0o0YFNnADiRN4BNnQHgrIwB7OYMAJfkegOWvgBwRfoGLHoB4KaUDdjUGQAWStaATZ0BYLkEAWzqDABr7Q1gN2cA2GDXG7D0BYBtNjZg0QsAe6xuwKbOALDfugZs6gwASSwNYFNnAEhoUQC7OQNAWrffgKUvACR3rQGLXgDI5HwDNnUGgKzONGBTZwDI7Y0ANnUGgDJeB7CbMwAU8+oNWPoCQEn/B7yOHOGUMV+rAAAADmVYSWZNTQAqAAAACAAAAAAAAADSU5MAAAAASUVORK5CYII=";var q2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAGACAIAAACyR0TpAAAE00lEQVR42u3XMREAIAwEwQSTSI2S6CES6BiKXQnf3HzGrgAA3lomAAABBgABBgAEGAAEGAAQYAAQYABAgAFAgAEAAQYAAQYAAQYABBgABBgAEGAAEGAAQIABQIABAAEGAAEGAAEGAAQYAAQYABBgABBgAECAAUCAAQABBgABBgABBgAEGAAEGAAQYAAQYABAgAFAgAEAAQYAAQYAAQYABBgABBgAEGAAEGAAQIABQIABAAEGAAEGAAEGAAQYAAQYABBgABBgAECAAUCAAQABBgABBgABBgAEGAAEGAAQYAAQYABAgAFAgAEAAQYAAQYAAQYABBgABBgAEGAAEGAAQIABQIABAAEGAAEGAAEGAAQYAAQYABBgABBgAECAAUCAAQABBgABBgABBgAEGAAEGAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgABBgAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYAAQYABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAEGAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgABBgAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYAAQYABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAEGAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgABBgAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYAAQYABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAEGAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgDu8rQRAMADBgABBgAEGAAEGAAQYAAQYABAgAFAgAEAAQYAAQYAAQYABBgABBgAEGAAEGAAQIABQIABAAEGAAEGAAEGAAQYAAQYABBgABBgAECAAUCAAQABBgABBgABBgAEGAAEGAAQYAAQYABAgAFAgAEAAQYAAQYAAQYABBgABBgAEGAAEGAAQIABQIABAAEGAAEGAAEGAAQYAAQYABBgABBgAECAAUCAAQABBgABBgABBgAEGAAEGAAQYAAQYABAgAFAgAEAAQYAAQYAAQYABBgABBgAEGAAEGAAQIABQIABAAEGAAEGAAEGAAQYAAQYABBgABBgAECAAUCAAQABBgABBgABBgAEGAAEGAAQYAAQYABAgAFAgAEAAQYAAQYAATYBAAgwAAgwACDAACDAAIAAA4AAAwACDAACDAAIMAAIMAAIMAAgwAAgwACAAAOAAAMAAgwAAgwACDAACDAACDAAIMAAIMAAgAADgAADAAIMAAIMAAgwAAgwAAgwACDAACDAAIAAA4AAAwACDAACDAAIMAAIMAAIMAAgwAAgwACAAAOAAAMAAgwAAgwACDAACDAACDAAIMAAIMAAgAADgAADAAIMAAIMAAgwAAgwAAgwACDAACDAAIAAA4AAAwACDAACDAAIMAAIMAAIMAAgwAAgwACAAAOAAAMAAgwAAgwACDAACDAACDAAIMAAIMAAgAADgAADAAIMAAIMAAgwAAgwAAgwACDAACDAAIAAA4AAAwACDAACDAAIMAAIMAAgwAAgwAAgwACAAAOAAAMAAgwAAgwACDAAfGgAGWEF4VsnJf4AAAAASUVORK5CYII=";var a0=class extends F{constructor(t){if(super(t),this.et=T,t.type!==W.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===T||t==null)return this.ft=void 0,this.et=t;if(t===O)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;let e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}};a0.directiveName="unsafeHTML",a0.resultType=1;var at=j(a0);var E0=class extends a0{};E0.directiveName="unsafeSVG",E0.resultType=2;var G2=j(E0);var X2={_amphibie:"trait-amphibious",_reco:"trait-recon",_leader:"trait-leader",_ifv:"trait-ifv",_resolute:"trait-resolute",_para:"parachute",_reservist:"trait-reservist",_choc:"trait-cqc",_sf:"trait-special-forces",_mp:"trait-mp",_gsr:"trait-gsr",_security:"trait-security",_transport1:"trait-transport",_transport2:"trait-transport",_sniper:"trait-sniper",_era:"trait-era",_falseflag:"trait-false-flag",_electronic_warfare:"trait-ew",_jammer:"trait-jammer",_airlift:"trait-airlifter",_canBeAirlifted:"trait-airlift",_eo_dazzler:"trait-dazzler",_smoke_launcher:"trait-smoke-launcher",_singint:"trait-sigint",_fireDirection:"trait-fire-direction",hq:"command",hq_veh:"command",hq_inf:"command",hq_tank:"command",hq_helo:"command",reco:"recon",hel_reco:"recon",AT:"at",supply:"supply",transport:"transport",infantry:"infantry",ifv:"ifv",engineer:"assault-infantry",mortar:"mortar",howitzer:"artillery",armor:"tank",AA:"aa",mlrs:"mlrs",sead:"sead"};var T1=new Map;function G0(i,t){var n;let e=`${i}:${t}`;if(T1.has(e))return(n=T1.get(e))!=null?n:null;let r=null,s=document.querySelector(`vaadin-iconset[name="${i}"]`),o=s==null?void 0:s.querySelector(`[id="${e}"]`);return o&&(r=o.innerHTML),T1.set(e,r),r}function $1(i,t,e){return g`<svg
    class="icon"
    viewBox="0 0 ${t} ${t}"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden=${e?"false":"true"}
  >
    ${e?g`<title>${e}</title>`:""}${G2(i)}
  </svg>`}function C0(i,t){let e=G0("waryes",i);return e?$1(e,24,t):X0(i.slice(0,3).toUpperCase(),t)}function fe(i,t){let e=G0("vaadin",i);return e?$1(e,16,t):X0("?",t)}function X0(i,t){return g`<span class="icon text-icon" title=${t!=null?t:i}>${i}</span>`}var ge={Thermals1:"eye",Thermals2:"eye",MRAP:"shield",Slat:"grid-small",uav:"airplane",uav2:"airplane",_militia:"users",_instructor:"academy-cap",_mountaineer:"arrow-up",Radar:"signal",_reco:"binoculars"};function Q0(i,t){let e=/^_canBeAirlifted\d$/.test(i)?"_canBeAirlifted":i,r=X2[e],im=(window.STATS_TRAIT_IMG||{})[e];if(im)return g`<img class="icon icon-img" src=${im} alt="" title=${t!=null?t:i}>`;if(r&&G0("waryes",r))return C0(r,t);let s=ge[e];return s&&G0("vaadin",s)?fe(s,t):X0(e.replace(/^_/,"").slice(0,3).toUpperCase(),t)}var ve={MOTION:'<path d="M12 2l3 3h-2v5h5V8l3 3-3 3v-2h-5v5h2l-3 3-3-3h2v-5H6v2l-3-3 3-3v2h5V5H9z" fill="currentColor"/>',STAT:'<circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 1v6M12 17v6M1 12h6M17 12h6" stroke="currentColor" stroke-width="2"/><rect x="10" y="10" width="4" height="4" fill="currentColor"/>',HE:'<path d="M12 1l2 6 5-4-2 6 6 1-5 3 4 5-6-2-1 6-3-5-3 5-1-6-6 2 4-5-5-3 6-1-2-6 5 4z" fill="currentColor"/>',HEAT:'<path d="M3 12l9-7v14z" fill="currentColor"/><path d="M12 9h9v6h-9" fill="none" stroke="currentColor" stroke-width="2"/>',KINETIC:'<path d="M2 12l6-3v6z" fill="currentColor"/><path d="M8 12h12" stroke="currentColor" stroke-width="3"/><path d="M17 8l5 4-5 4z" fill="currentColor"/>',TANDEM:'<path d="M2 12l6-5v10zM10 12l6-5v10z" fill="currentColor"/><path d="M16 12h6" stroke="currentColor" stroke-width="2"/>',"F&F":'<path d="M3 15l12-8 4 2-12 8z" fill="currentColor"/><path d="M14 18l3 3 5-7" fill="none" stroke="currentColor" stroke-width="2"/>',"F&F_boresight":'<path d="M3 15l12-8 4 2-12 8z" fill="currentColor"/><circle cx="18" cy="18" r="4" fill="none" stroke="currentColor" stroke-width="2"/>',OTA:'<path d="M2 16c4-12 16-12 20 0" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3 2"/><path d="M19 13l3 4-5 0z" fill="currentColor"/><rect x="9" y="18" width="6" height="4" fill="currentColor"/>',CLGP:'<path d="M2 20L22 4" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/><path d="M14 14l6-2-2 6z" fill="currentColor"/>',RADAR:'<path d="M4 20a10 10 0 0 1 0-14" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 17a6 6 0 0 1 0-8" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="13" r="2" fill="currentColor"/><path d="M12 13l9-9" stroke="currentColor" stroke-width="2"/>',sead:'<path d="M3 21a12 12 0 0 1 0-12" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 21a8 8 0 0 1 0-8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 14l10-10 1 3-8 8z" fill="currentColor"/>',IND:'<path d="M3 20C6 5 18 5 21 20" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="21" cy="20" r="2" fill="currentColor"/><rect x="1" y="19" width="5" height="3" fill="currentColor"/>',CAC:'<path d="M4 20L16 8M8 20L20 8" stroke="currentColor" stroke-width="2"/><path d="M15 3l6 6-3 1-4-4z" fill="currentColor"/>',autoloader:'<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="6.5" r="2" fill="currentColor"/><circle cx="17" cy="14" r="2" fill="currentColor"/><circle cx="7" cy="14" r="2" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>',manual:'<path d="M7 21v-8l-2-3 1-1 3 2V4a1.5 1.5 0 0 1 3 0v6-7a1.5 1.5 0 0 1 3 0v7-5a1.5 1.5 0 0 1 3 0v10l-2 6z" fill="currentColor"/>',semiAuto:'<rect x="3" y="9" width="4" height="6" fill="currentColor"/><rect x="10" y="9" width="4" height="6" fill="currentColor"/><path d="M17 8l5 4-5 4z" fill="currentColor"/>',coax:'<rect x="2" y="7" width="20" height="3" fill="currentColor"/><rect x="6" y="14" width="16" height="2" fill="currentColor"/><rect x="2" y="12" width="5" height="6" fill="currentColor"/>',tripod:'<rect x="4" y="5" width="17" height="3" fill="currentColor"/><path d="M11 8l-6 13M12 8v13M13 8l6 13" stroke="currentColor" stroke-width="2"/>',silenced:'<rect x="2" y="10" width="11" height="4" fill="currentColor"/><rect x="13" y="8" width="9" height="8" rx="2" fill="currentColor"/>',smoke:'<path d="M6 19a4 4 0 0 1 0-8 6 6 0 0 1 11-2 5 5 0 0 1 1 10z" fill="currentColor"/>',cluster:'<circle cx="6" cy="6" r="2.5" fill="currentColor"/><circle cx="17" cy="5" r="2.5" fill="currentColor"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/><circle cx="5" cy="17" r="2.5" fill="currentColor"/><circle cx="18" cy="17" r="2.5" fill="currentColor"/>',thermobaric:'<circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="13" r="4" fill="currentColor"/><path d="M12 1v4" stroke="currentColor" stroke-width="2"/>',napalm:'<path d="M12 2c2 5 7 7 7 13a7 7 0 0 1-14 0c0-3 2-5 3-6 0 3 1 4 3 5-1-4 0-8 1-12z" fill="currentColor"/>',demolition:'<rect x="4" y="9" width="12" height="11" fill="currentColor"/><path d="M16 9c3-1 4-4 3-7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M19 1l2 2-2 2-2-2z" fill="currentColor"/>',activeprotection:'<path d="M12 2l8 3v6c0 6-4 10-8 11-4-1-8-5-8-11V5z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-6" fill="none" stroke="currentColor" stroke-width="2"/>'};function S1(i,t){let im=(window.STATS_ATTR_IMG||{})[i];if(im)return g`<img class="icon icon-img attr-img" src=${im} alt="" title=${t!=null?t:i}>`;let e=ve[i];return e?$1(e,24,t):X0(i.slice(0,4),t)}var be={BEL:W2,DDR:C1,RDA:C1,FR:L2,SOV:Z2,UK:U2,US:K2,RFA:H2,POL:F2,NL:j2,LUX:V2,CAN:Y2,TCH:J2,UKR:q2},T0={SOV:"ZSRR / Rosja",US:"USA",UK:"Wielka Brytania",FR:"Francja",RFA:"RFN / Niemcy",DDR:"NRD",BEL:"Belgia",NL:"Holandia",LUX:"Luksemburg",POL:"Polska",TCH:"Czechos\u0142owacja",CAN:"Kanada",UKR:"Ukraina",ESP:"Hiszpania"},ye=[{title:"OBRA\u017BENIA OD BRONI",rows:[{key:"penetration",label:"PENETRACJA",scale:P.penetration,big:!0,hideZero:!0},{key:"he",label:"OB",scale:P.he},{key:"suppress",label:"PRZYBICIE",scale:P.suppress}]},{title:"ODLEG\u0141O\u015A\u0106 DO CELU",rows:[{key:"groundRange",label:"CEL NAZIEMNY",scale:P.range,hideZero:!0},{key:"helicopterRange",label:"\u015AMIG\u0141OWIEC",scale:P.range,hideZero:!0},{key:"planeRange",label:"SAMOLOT",scale:P.range,hideZero:!0}]},{title:"CELNO\u015A\u0106",rows:[{key:"staticAccuracy",label:"POST\xD3J",scale:P.accuracy},{key:"movingAccuracy",label:"RUCH",scale:P.accuracy}]},{title:"ATRYBUTY BRONI",rows:[{key:"rateOfFire",label:"SZYBKOSTRZELNO\u015A\u0106",scale:P.rateOfFire},{key:"aimingTime",label:"CZAS CELOWANIA",scale:P.aimingTime},{key:"reloadTime",label:"PRZE\u0141ADOWANIE",scale:P.reloadTime},{key:"salvo",label:"SALWA",scale:P.salvo}]}],we=[{key:"frontArmor",label:"PRZ\xD3D"},{key:"sideArmor",label:"BOK"},{key:"rearArmor",label:"TY\u0141"},{key:"topArmor",label:"G\xD3RA"}];function e1(i){return Number.isFinite(i)?String(Math.round(i*100)/100):"0"}function xe(i,t){let e=e1(i);return t.unit?t.unit==="%"?`${e}%`:`${e} ${t.unit}`:e}function Q2(i,t,e){return Math.min(e,Math.max(t,i))}function l0(i){let t=Number(i.target.value.replace(",","."));return Number.isFinite(t)?t:0}var U=class extends H{constructor(){super(...arguments);this.editable=!1;this.imageChoices=[];this.popup=null;this.imageFilter="";this.snapshot=!1;this.closeOnOutsideClick=e=>{if(!this.popup)return;e.composedPath().some(o=>{var n,d;return o instanceof HTMLElement&&(((n=o.classList)==null?void 0:n.contains("popup"))||((d=o.dataset)==null?void 0:d.popupOpener)!==void 0)})||(this.popup=null)};this.closeOnEscape=e=>{e.key==="Escape"&&this.popup&&(this.popup=null)}}static get styles(){return w0`
      :host {
        display: block;
        --card-bg-1: #b1aa94;
        --card-bg-2: #918a75;
        --card-ink: #22201b;
        --card-ink-soft: #3d3a32;
        --card-line: #3a372f;
        --box-bg: rgba(42, 38, 30, 0.1);
        --bar-track: rgba(25, 23, 19, 0.45);
        --bar-fill: #2c2a25;
        --tone-red: #d42d2d;
        --tone-yellow: #f2b51d;
        --tone-green: #7ce36c;
        --tone-cyan: #45e2f2;
        --changed: #ff4fd8;
        font-family: 'Roboto Condensed', 'Arial Narrow', Arial, sans-serif;
      }

      .card {
        position: relative;
        box-sizing: border-box;
        padding: 0.9rem 0.75rem 0.75rem;
        background: linear-gradient(170deg, var(--card-bg-1), var(--card-bg-2));
        color: var(--card-ink);
        border: 1px solid #5c574a;
        box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.45);
      }

      /* ---------- header ---------- */
      .head {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
      }

      .flag-cost {
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }

      .flag {
        height: 1.6rem;
        width: 2.6rem;
        object-fit: cover;
        display: block;
      }

      .flag-code {
        font-weight: 700;
        font-size: 0.9rem;
      }

      .cost {
        font-size: 1.5rem;
        font-weight: 700;
        color: #e8a92a;
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
      }

      .title {
        text-align: center;
        font-size: 1.9rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        color: #33302a;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .head-spacer {
        width: 4.2rem;
      }

      .box {
        border: 2px solid var(--card-line);
        background: var(--box-bg);
      }

      .info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 0.4rem;
      }

      .info > div {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.35rem 0.6rem;
        min-height: 3.2rem;
      }

      .info > div + div {
        border-left: 2px solid var(--card-line);
      }

      .info .label {
        font-weight: 700;
        font-size: 0.85rem;
        letter-spacing: 0.02em;
      }

      .info .sub {
        font-size: 0.85rem;
        color: var(--card-ink-soft);
      }

      .role-icons {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.15rem;
        color: #f2efe6;
      }

      .role-chip {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.8rem;
        height: 2.2rem;
        background: rgba(30, 28, 24, 0.8);
        color: #f2efe6;
      }

      .role-chip .icon {
        width: 2rem;
        height: 1.8rem;
      }

      .traits {
        display: flex;
        flex-wrap: wrap;
        gap: 0.2rem;
        margin-top: 0.25rem;
      }

      .traits .icon {
        width: 1.35rem;
        height: 1.35rem;
        background: rgba(30, 28, 24, 0.75);
        color: #f2efe6;
        padding: 0.12rem;
        box-sizing: border-box;
      }

      .cost-icon {
        width: 1.3rem;
        height: 1.3rem;
        color: #e8a92a;
      }

      .section {
        text-align: center;
        font-size: 0.85rem;
        letter-spacing: 0.05em;
        margin: 0.45rem 0 0.2rem;
        color: var(--card-ink-soft);
      }

      /* ---------- armour ---------- */
      .armor {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
      }

      .armor > div {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 0 0.4rem;
        padding: 0.3rem 0.5rem;
      }

      .armor > div + div {
        border-left: 2px solid var(--card-line);
      }

      .armor .name {
        grid-column: 1 / -1;
        font-size: 0.75rem;
        font-weight: 700;
      }

      .armor .value {
        font-size: 1.9rem;
        line-height: 1.1;
      }

      /* ---------- values, bars ---------- */
      .value {
        font-weight: 700;
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.55);
      }

      :host .tone-red { color: var(--tone-red); }
      :host .tone-yellow { color: var(--tone-yellow); }
      :host .tone-green { color: var(--tone-green); }
      :host .tone-cyan { color: var(--tone-cyan); }
      :host .tone-plain { color: var(--card-ink); text-shadow: none; }

      .bar {
        position: relative;
        height: 0.55rem;
        background: var(--bar-track);
        min-width: 3rem;
      }

      .bar > span {
        position: absolute;
        inset: 0 auto 0 0;
        background: var(--bar-fill);
        border-right: 0.2rem solid #8a8576;
      }

      input[type='range'] {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        min-width: 3rem;
        height: 0.55rem;
        margin: 0;
        background: linear-gradient(
          to right,
          var(--bar-fill) 0 var(--p, 0%),
          var(--bar-track) var(--p, 0%) 100%
        );
        cursor: pointer;
      }

      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 0.5rem;
        height: 1rem;
        background: #ece7d8;
        border: 1px solid #22201b;
      }

      input[type='range']::-moz-range-thumb {
        width: 0.5rem;
        height: 1rem;
        border-radius: 0;
        background: #ece7d8;
        border: 1px solid #22201b;
      }

      input[type='range']:focus-visible {
        outline: 2px solid #f2efe6;
      }

      input.num,
      input.text,
      select {
        font: inherit;
        color: inherit;
        background: rgba(255, 255, 255, 0.25);
        border: 1px solid rgba(34, 32, 27, 0.6);
        padding: 0.05rem 0.2rem;
        box-sizing: border-box;
        min-width: 0;
      }

      input.num {
        width: 4.3rem;
        text-align: right;
        font-weight: 700;
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.55);
      }

      input.num.small {
        width: 3.6rem;
      }

      input.num:focus,
      input.text:focus,
      select:focus {
        outline: 2px solid #f2efe6;
        background: rgba(255, 255, 255, 0.4);
      }

      select {
        cursor: pointer;
      }

      select option {
        color: #111;
      }

      /* ---------- weapons ---------- */
      .weapons {
        display: grid;
        gap: 0.35rem;
        align-items: start;
        justify-content: start;
      }

      .weapons.editing {
        margin-top: 1.1rem;
      }

      .weapon {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        min-width: 0;
      }

      .weapon .w-head {
        position: relative;
        text-align: center;
      }

      .w-type {
        display: block;
        font-weight: 700;
        font-size: 0.8rem;
        padding: 0.25rem 0.2rem;
        border-bottom: 2px solid var(--card-line);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      input.w-type {
        width: 100%;
        text-align: center;
        border: none;
        border-bottom: 2px solid var(--card-line);
      }

      .tiles {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-bottom: 2px solid var(--card-line);
      }

      .tile {
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #2a2824;
        background: none;
        border: none;
        padding: 0;
        font: inherit;
      }

      .tile + .tile {
        border-left: 2px solid var(--card-line);
      }

      .tile .icon {
        width: 1.45rem;
        height: 1.45rem;
      }

      button.tile {
        cursor: pointer;
      }

      button.tile:hover,
      button.tile:focus-visible {
        background: rgba(255, 255, 255, 0.25);
        outline: none;
      }

      .w-image {
        height: 4.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        width: 100%;
        padding: 0.2rem;
        box-sizing: border-box;
      }

      button.w-image {
        cursor: pointer;
      }

      button.w-image:hover {
        background: rgba(255, 255, 255, 0.2);
      }

      .w-image img {
        max-width: 100%;
        max-height: 100%;
        filter: brightness(0);
        opacity: 0.85;
      }

      .w-image img.custom {
        filter: none;
        opacity: 1;
      }

      .w-image .placeholder {
        font-size: 0.75rem;
        color: var(--card-ink-soft);
      }

      .w-name {
        text-align: center;
        font-size: 1rem;
        font-weight: 700;
      }

      .w-cal {
        text-align: center;
        font-size: 0.95rem;
      }

      .w-name input,
      .w-cal input {
        text-align: center;
      }

      .w-name input.text {
        width: 100%;
      }

      .w-cal {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
      }

      .w-cal input.text {
        width: 4.5rem;
      }

      .w-cal input.num {
        width: 4rem;
      }

      .w-block {
        padding: 0.3rem 0.4rem 0.35rem;
      }

      .w-block .b-title {
        font-weight: 700;
        font-size: 0.75rem;
        margin-bottom: 0.25rem;
      }

      .stat {
        display: grid;
        grid-template-columns: minmax(3rem, 1fr) auto;
        align-items: center;
        gap: 0.1rem 0.4rem;
        min-height: 1.4rem;
      }

      .stat .s-label {
        grid-column: 1 / -1;
        font-size: 0.62rem;
        color: var(--card-ink-soft);
        margin-bottom: -0.1rem;
      }

      .stat .value {
        font-size: 1.15rem;
        text-align: right;
      }

      .stat.big .value {
        font-size: 2.1rem;
        line-height: 1;
      }

      .supply .value {
        font-size: 1.3rem;
      }

      .w-tools {
        position: absolute;
        top: -1.25rem;
        right: 0;
        display: flex;
        gap: 0.15rem;
      }

      .w-tools button,
      .mini {
        font: inherit;
        font-size: 0.7rem;
        line-height: 1;
        padding: 0.15rem 0.3rem;
        border: 1px solid var(--card-line);
        background: #d9d3c2;
        color: var(--card-ink);
        cursor: pointer;
      }

      .w-tools button:hover,
      .mini:hover {
        background: #fff;
      }

      .w-tools button.danger:hover {
        background: #e25353;
        color: #fff;
      }

      /* ---------- bottom panel ---------- */
      .panel {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }

      .panel > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.4rem;
        padding: 0.25rem 0.45rem;
        border-bottom: 1px solid rgba(58, 55, 47, 0.6);
        min-height: 1.6rem;
        font-size: 0.85rem;
      }

      .panel > div:nth-child(3n + 2),
      .panel > div:nth-child(3n + 3) {
        border-left: 2px solid var(--card-line);
      }

      .panel .p-label {
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .panel .p-value {
        text-align: right;
        white-space: nowrap;
      }

      .panel select {
        max-width: 7.5rem;
      }

      .pair {
        display: inline-flex;
        align-items: center;
        gap: 0.15rem;
      }

      .pair input.num {
        width: 3rem;
      }

      .tone-weak { color: var(--tone-red); }

      /* Icons are one colour like in the game (the iconset's own colour
         classes would also clash between icons in one shadow root) */
      .icon [class],
      .icon path,
      .icon rect,
      .icon polygon,
      .icon circle,
      .icon ellipse {
        fill: currentColor;
      }

      .icon [fill='none'] {
        fill: none;
      }

      .icon {
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        vertical-align: middle;
        flex: 0 0 auto;
      }

      .text-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.55rem;
        font-weight: 700;
        line-height: 1;
        letter-spacing: -0.02em;
      }

      /* changed against the original card */
      .changed {
        box-shadow: inset 0 0 0 2px var(--changed);
      }

      /* ---------- popups ---------- */
      .popup {
        position: absolute;
        z-index: 5;
        left: 0;
        top: 100%;
        margin-top: 0.2rem;
        width: max(100%, 17rem);
        max-height: 22rem;
        overflow: auto;
        background: #1d1c1a;
        color: #ece7d8;
        border: 1px solid #6b665a;
        box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.6);
        padding: 0.4rem;
        text-align: left;
        font-family: var(--lumo-font-family, monospace);
      }

      .popup .p-title {
        font-weight: 700;
        font-size: 0.8rem;
        margin-bottom: 0.3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.4rem;
      }

      .popup label.check {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.2rem 0.25rem;
        font-size: 0.8rem;
        cursor: pointer;
      }

      .popup label.check:hover {
        background: rgba(255, 255, 255, 0.08);
      }

      .popup label.check.disabled {
        opacity: 0.45;
        cursor: default;
      }

      .popup label.check .icon {
        width: 1.2rem;
        height: 1.2rem;
      }

      .popup input.search {
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 0.3rem;
        font: inherit;
        padding: 0.25rem 0.35rem;
        background: #2b2a27;
        color: inherit;
        border: 1px solid #6b665a;
      }

      .image-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(5.2rem, 1fr));
        gap: 0.25rem;
      }

      .image-grid button {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.1rem;
        padding: 0.2rem;
        background: #2b2a27;
        border: 1px solid transparent;
        color: inherit;
        font: inherit;
        font-size: 0.6rem;
        cursor: pointer;
        overflow: hidden;
      }

      .image-grid button:hover {
        border-color: #ece7d8;
      }

      .image-grid img {
        height: 2rem;
        max-width: 100%;
        object-fit: contain;
        filter: invert(0.9);
      }

      .image-grid span {
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .popup .actions {
        display: flex;
        gap: 0.3rem;
        flex-wrap: wrap;
        margin-bottom: 0.4rem;
      }

      .popup .actions button,
      .popup .actions label {
        font: inherit;
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
        border: 1px solid #6b665a;
        background: #2b2a27;
        color: inherit;
        cursor: pointer;
      }

      .popup .actions button:hover,
      .popup .actions label:hover {
        background: #3b3a36;
      }

      .popup .role-list button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
        padding: 0.25rem;
        background: none;
        border: none;
        color: inherit;
        font: inherit;
        font-size: 0.8rem;
        cursor: pointer;
        text-align: left;
      }

      .popup .role-list button:hover {
        background: rgba(255, 255, 255, 0.08);
      }

      .popup .role-list .icon {
        width: 1.8rem;
        height: 1.4rem;
      }

      .rel {
        position: relative;
      }

      img.icon-img {
        object-fit: contain;
      }

      .popup img.attr-img {
        filter: invert(1);
      }

      /* panel tiles with a choice open a small window above the tile */
      .panel > div {
        position: relative;
      }

      .panel > div.pf-click {
        cursor: pointer;
      }

      .panel > div.pf-click:hover {
        background: rgba(255, 255, 255, 0.2);
      }

      .pf-val {
        font-weight: 700;
        white-space: nowrap;
      }

      .popup.pf-popup {
        top: auto;
        bottom: 100%;
        margin: 0 0 0.2rem;
        left: 0;
        width: max-content;
        min-width: 100%;
        max-width: 22rem;
        cursor: default;
      }

      .panel > div:nth-child(3n) .popup.pf-popup {
        left: auto;
        right: 0;
      }

      .pf-popup button.opt {
        display: block;
        width: 100%;
        text-align: left;
        padding: 0.25rem 0.5rem;
        background: none;
        border: none;
        color: inherit;
        font: inherit;
        font-size: 0.8rem;
        white-space: nowrap;
        cursor: pointer;
      }

      .pf-popup button.opt:hover {
        background: rgba(255, 255, 255, 0.12);
      }

      .pf-popup button.opt.on {
        color: #e8a92a;
        font-weight: 700;
      }

      /* Popups of the right-hand columns open towards the left */
      .weapon:nth-last-child(-n + 2):not(:first-child) .popup {
        left: auto;
        right: 0;
      }

      .role-button {
        background: none;
        border: 1px dashed rgba(34, 32, 27, 0.5);
        padding: 0.1rem;
        cursor: pointer;
        color: inherit;
      }

      .role-button:hover {
        background: rgba(255, 255, 255, 0.25);
      }
    `}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.closeOnOutsideClick),document.addEventListener("keydown",this.closeOnEscape)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.closeOnOutsideClick),document.removeEventListener("keydown",this.closeOnEscape)}willUpdate(e){e.has("editable")&&!this.editable&&(this.popup=null)}async capture(){let e=this.popup;this.popup=null,this.snapshot=!0,await this.updateComplete,await new Promise(r=>requestAnimationFrame(()=>r(null)));try{return await(0,e3.toBlob)(this.cardElement,{pixelRatio:2,cacheBust:!1,skipFonts:!0})}finally{this.snapshot=!1,this.popup=e}}get editing(){return this.editable&&!this.snapshot}change(e,r){if(!this.card)return;let s=JSON.parse(JSON.stringify(this.card));e(s),this.dispatchEvent(new CustomEvent("card-change",{detail:{card:s,coalesce:r},bubbles:!0,composed:!0}))}changeWeapon(e,r,s){this.change(o=>{let n=o.weapons.find(d=>d.uid===e);n&&r(n)},s)}moveWeapon(e,r){this.change(s=>{let o=s.weapons.findIndex(f=>f.uid===e),n=o+r;if(o<0||n<0||n>=s.weapons.length)return;let[d]=s.weapons.splice(o,1);s.weapons.splice(n,0,d)})}removeWeapon(e){this.popup=null,this.change(r=>{r.weapons=r.weapons.filter(s=>s.uid!==e)})}duplicateWeapon(e){this.dispatchEvent(new CustomEvent("duplicate-weapon",{detail:{uid:e},bubbles:!0,composed:!0}))}togglePopup(e){let r=this.popup&&this.popup.kind===e.kind&&("uid"in e?"uid"in this.popup&&this.popup.uid===e.uid:!0);this.popup=r?null:e,this.imageFilter=""}originalWeapon(e){var r;return(r=this.compareTo)==null?void 0:r.weapons.find(s=>s.uid===e)}changedClass(e){return this.editing&&this.compareTo&&e?"changed":""}renderValue(e,r,s){return g`<span class="value tone-${h1(e,r)}"
      >${s!=null?s:xe(e,r)}</span
    >`}renderBar(e,r){let s=(Q2(e,r.min,r.max)-r.min)/(r.max-r.min)*100;return g`<div class="bar"><span style="width:${s}%"></span></div>`}renderSlider(e,r,s,o){if(!this.editing)return this.renderBar(e,r);let n=Math.max(r.max,e),d=(Q2(e,r.min,n)-r.min)/(n-r.min)*100;return g`<input
      type="range"
      aria-label=${o}
      min=${r.min}
      max=${n}
      step=${r.step}
      .value=${N(String(e))}
      style=${R2({"--p":`${d}%`})}
      @input=${f=>s(l0(f),!0)}
    />`}renderNumber(e,r,s,o,n=""){var f,v;let d=r?`tone-${h1(e,r)}`:"tone-plain";return g`<input
      class="num ${d} ${n}"
      type="number"
      aria-label=${o}
      step=${(f=r==null?void 0:r.step)!=null?f:"any"}
      min=${(v=r==null?void 0:r.min)!=null?v:0}
      .value=${N(e1(e))}
      @change=${z=>s(l0(z))}
    />`}renderHeader(e){var o;let r=be[e.country],s=this.compareTo;return g`
      <div class="head">
        <div class="flag-cost">
          ${this.editable?T:r?g`<img class="flag" src=${r} alt=${e.country} />`:g`<span class="flag-code">${e.country}</span>`}
          ${this.editing?g`<input
                class="num cost ${this.changedClass(!!s&&s.cost!==e.cost)}"
                type="number"
                aria-label="Koszt"
                title="Koszt liczy się sam ze statystyk; możesz go zmienić ręcznie, a kolejne zmiany statystyk dodadzą się do Twojej wartości"
                min="0"
                step="5"
                .value=${N(String(e.cost))}
                @change=${n=>this.change(d=>d.cost=l0(n))}
              />`:g`<span class="cost">${e.cost}</span>`}
        </div>
        ${this.editing?g`<input
              class="text title ${this.changedClass(!!s&&s.name!==e.name)}"
              aria-label="Nazwa jednostki"
              .value=${N(e.name)}
              @input=${n=>this.change(d=>d.name=n.target.value,"name")}
            />`:g`<div class="title">${e.name}</div>`}
        <div class="head-spacer"></div>
      </div>
      <div class="box info">
        <div class="rel">
          <div class="role-icons">
            ${this.editing?g`<button
                  class="role-button"
                  data-popup-opener
                  title="Zmień rodzaj jednostki"
                  @click=${()=>this.togglePopup({kind:"role"})}
                >
                  <span class="role-chip">${C0(e.roleIcon)}</span>
                </button>`:g`<span class="role-chip">${C0(e.roleIcon)}</span>`}
          </div>
          <div>
            ${this.editing?g`<input
                  class="text label ${this.changedClass(!!s&&s.roleLabel!==e.roleLabel)}"
                  aria-label="Rodzaj jednostki"
                  list="role-labels"
                  .value=${N(e.roleLabel)}
                  @input=${n=>this.change(d=>d.roleLabel=n.target.value.toUpperCase(),"roleLabel")}
                />
                <datalist id="role-labels">
                  ${p1.map(n=>g`<option value=${n.label}></option>`)}
                </datalist>`:g`<div class="label">${e.roleLabel}</div>`}
            <div
              class="traits ${this.changedClass(!!s&&s.traits.join()!==e.traits.join())}"
            >
              ${e.traits.map(n=>Q0(n,I0(n)))}
            </div>
          </div>
          ${((o=this.popup)==null?void 0:o.kind)==="role"?this.renderRolePopup():T}
        </div>
        <div>
          <svg class="cost-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 21L21 3v18z" fill="none" stroke="currentColor" stroke-width="2.5" />
          </svg>
          <div>
            <div class="label">KOSZT JEDNOSTKI</div>
            <div class="sub ${this.changedClass(!!s&&s.costCategory!==e.costCategory)}">${e.costCategory}</div>
          </div>
        </div>
      </div>
    `}renderRolePopup(){return g`<div class="popup">
      <div class="p-title">Rodzaj jednostki (ikona i nazwa)</div>
      <div class="role-list">
        ${p1.map(e=>g`<button
            @click=${()=>{this.popup=null,this.change(r=>{r.roleIcon=e.icon,r.roleLabel=e.label})}}
          >
            ${C0(e.icon)} ${e.label}
          </button>`)}
      </div>
    </div>`}renderArmor(e){return g`
      <div class="section">PANCERZ</div>
      <div class="box armor">
        ${we.map(({key:r,label:s})=>{let o=e[r],n=!!this.compareTo&&this.compareTo[r]!==o;return g`<div class=${this.changedClass(n)}>
            <span class="name">${s}</span>
            ${this.renderSlider(o,P.armor,(d,f)=>this.change(v=>v[r]=d,f?r:void 0),`Pancerz ${s}`)}
            ${this.editing?this.renderNumber(o,P.armor,d=>this.change(f=>f[r]=d),`Pancerz ${s}`,"small"):this.renderValue(o,P.armor,o<1?"<1":void 0)}
          </div>`})}
      </div>
    `}renderWeapons(e){if(e.weapons.length===0)return g``;let r=e.weapons.length;return g`
      <div class="section">BROŃ</div>
      <div
        class="weapons ${this.editing?"editing":""}"
        style="grid-template-columns: repeat(${r}, 10.6rem)"
      >
        ${N2(e.weapons,s=>s.uid,(s,o)=>this.renderWeapon(s,o,r))}
      </div>
    `}renderWeapon(e,r,s){var f,v;let o=this.originalWeapon(e.uid),n=!!this.compareTo&&!o,d=z=>n||!!o&&JSON.stringify(o[z])!==JSON.stringify(e[z]);return g`
      <div class="weapon">
        <div class="box w-head rel ${this.changedClass(n)}">
          ${this.editing?g`<div class="w-tools">
                  <button title="Przesuń w lewo" ?disabled=${r===0} @click=${()=>this.moveWeapon(e.uid,-1)}>◀</button>
                  <button title="Przesuń w prawo" ?disabled=${r===s-1} @click=${()=>this.moveWeapon(e.uid,1)}>▶</button>
                  <button title="Powiel kolumnę" @click=${()=>this.duplicateWeapon(e.uid)}>⧉</button>
                  <button class="danger" title="Usuń kolumnę" @click=${()=>this.removeWeapon(e.uid)}>✕</button>
                </div>
                <input
                  class="text w-type ${this.changedClass(d("typeLabel"))}"
                  aria-label="Rodzaj uzbrojenia"
                  list="weapon-type-labels"
                  .value=${N(e.typeLabel)}
                  @input=${z=>this.changeWeapon(e.uid,x=>x.typeLabel=z.target.value.toUpperCase(),`type-${e.uid}`)}
                />`:g`<span class="w-type" title=${e.typeLabel}>${e.typeLabel}</span>`}
          <div class="tiles ${this.changedClass(d("attributes"))}">
            ${[0,1,2].map(z=>{let x=e.attributes[z],k=x?S1(x,m1(x)):T;return this.editing?g`<button
                    class="tile"
                    data-popup-opener
                    title=${x?m1(x):"Dodaj atrybut broni"}
                    @click=${()=>this.togglePopup({kind:"attributes",uid:e.uid})}
                  >
                    ${x?k:g`<span class="text-icon">+</span>`}
                  </button>`:g`<div class="tile">${k}</div>`})}
          </div>
          ${((f=this.popup)==null?void 0:f.kind)==="attributes"&&this.popup.uid===e.uid?this.renderAttributePopup(e):T}
          ${this.editing?g`<button
                class="w-image ${this.changedClass(d("image"))}"
                data-popup-opener
                title="Zmień ikonę uzbrojenia"
                @click=${()=>this.togglePopup({kind:"image",uid:e.uid})}
              >
                ${this.renderWeaponImage(e)}
              </button>`:g`<div class="w-image">${this.renderWeaponImage(e)}</div>`}
          ${((v=this.popup)==null?void 0:v.kind)==="image"&&this.popup.uid===e.uid?this.renderImagePopup(e):T}
          <div class="w-name">
            ${this.editing?g`<input
                  class="text ${this.changedClass(d("name"))}"
                  aria-label="Nazwa broni"
                  .value=${N(e.name)}
                  @input=${z=>this.changeWeapon(e.uid,x=>x.name=z.target.value,`name-${e.uid}`)}
                />`:e.name}
          </div>
          <div class="w-cal">
            ${this.editing?g`<input
                    class="text ${this.changedClass(d("caliber"))}"
                    aria-label="Kaliber"
                    placeholder="kaliber"
                    .value=${N(e.caliber)}
                    @input=${z=>this.changeWeapon(e.uid,x=>x.caliber=z.target.value,`cal-${e.uid}`)}
                  />
                  x
                  <input
                    class="num tone-plain ${this.changedClass(d("ammo"))}"
                    type="number"
                    aria-label="Amunicja"
                    min="0"
                    .value=${N(String(e.ammo))}
                    @change=${z=>this.changeWeapon(e.uid,x=>x.ammo=l0(z))}
                  />`:g`${e.caliber?`${e.caliber} x ${e.ammo}`:`x ${e.ammo}`}`}
          </div>
        </div>
        ${ye.map(z=>{let x=z.rows.filter(k=>!(k.key==="staticAccuracy"&&this.card&&this.card.panelType==="plane")&&(this.editing||!k.hideZero||e[k.key]!==0));return x.length===0?T:g`<div class="box w-block">
            <div class="b-title">${z.title}</div>
            ${x.map(k=>this.renderWeaponStat(e,k,d(k.key)))}
          </div>`})}
        <div class="box w-block supply ${this.changedClass(d("supplyCost"))}">
          <div class="b-title">KOSZT ZAOPATRZENIA</div>
          <div class="stat">
            ${this.renderSlider(e.supplyCost,P.supplyCost,(z,x)=>this.changeWeapon(e.uid,k=>k.supplyCost=z,x?`supply-${e.uid}`:void 0),"Koszt zaopatrzenia")}
            ${this.editing?this.renderNumber(e.supplyCost,void 0,z=>this.changeWeapon(e.uid,x=>x.supplyCost=z),"Koszt zaopatrzenia"):g`<span class="value tone-red">${e.supplyCost}</span>`}
          </div>
        </div>
      </div>
    `}renderWeaponStat(e,r,s){let o=e[r.key];return g`<div class="stat ${r.big&&!this.editing?"big":""} ${this.changedClass(s)}">
      <span class="s-label">${r.label}</span>
      ${this.renderSlider(o,r.scale,(n,d)=>this.changeWeapon(e.uid,f=>f[r.key]=n,d?`${r.key}-${e.uid}`:void 0),r.label)}
      ${this.editing?this.renderNumber(o,r.scale,n=>this.changeWeapon(e.uid,d=>d[r.key]=n),r.label):this.renderValue(o,r.scale)}
    </div>`}renderWeaponImage(e){if(!e.image)return g`<span class="placeholder">${this.editing?"Wybierz ikon\u0119":""}</span>`;let r=e.image.startsWith("data:");return g`<img
      class=${r?"custom":""}
      src=${e.image}
      alt=""
      @error=${s=>s.target.style.visibility="hidden"}
      @load=${s=>s.target.style.visibility=""}
    />`}renderAttributePopup(e){let r=e.attributes.length>=d0;return g`<div class="popup">
      <div class="p-title">
        <span>Atrybuty broni (${e.attributes.length}/${d0})</span>
        <button class="mini" @click=${()=>this.popup=null}>Zamknij</button>
      </div>
      ${R0.map(s=>{let o=e.attributes.includes(s.value),n=!o&&r;return g`<label class="check ${n?"disabled":""}">
          <input
            type="checkbox"
            .checked=${N(o)}
            ?disabled=${n}
            @change=${d=>{let f=d.target.checked;this.changeWeapon(e.uid,v=>{v.attributes=f?[...v.attributes,s.value].slice(0,d0):v.attributes.filter(z=>z!==s.value)})}}
          />
          ${S1(s.value)}
          <span>${s.label}</span>
        </label>`})}
    </div>`}renderImagePopup(e){let r=this.imageFilter.trim().toLowerCase(),s=this.imageChoices.filter(o=>!r||o.name.toLowerCase().includes(r));return g`<div class="popup">
      <div class="p-title">
        <span>Ikona uzbrojenia</span>
        <button class="mini" @click=${()=>this.popup=null}>Zamknij</button>
      </div>
      <div class="actions">
        <label>
          Własna ikona…
          <input
            type="file"
            accept="image/*"
            hidden
            @change=${o=>this.uploadImage(e.uid,o)}
          />
        </label>
        <button @click=${()=>this.changeWeapon(e.uid,o=>o.image="")}>Bez ikony</button>
      </div>
      <input
        class="search"
        type="search"
        placeholder="Szukaj ikony (np. 2A46, M2HB)…"
        .value=${this.imageFilter}
        @input=${o=>this.imageFilter=o.target.value}
      />
      <div class="image-grid">
        ${s.slice(0,240).map(o=>g`<button
            title=${o.name}
            @click=${()=>{this.popup=null,this.changeWeapon(e.uid,n=>n.image=o.url)}}
          >
            <img
              src=${o.url}
              alt=""
              loading="lazy"
              @error=${n=>n.target.closest("button").remove()}
            />
            <span>${o.name}</span>
          </button>`)}
      </div>
    </div>`}uploadImage(e,r){var d;let s=r.target,o=(d=s.files)==null?void 0:d[0];if(s.value="",!o)return;let n=new FileReader;n.onload=()=>{this.popup=null,this.changeWeapon(e,f=>f.image=String(n.result))},n.readAsDataURL(o)}renderPanel(e){let r=e.panelType==="infantry"?"CHARAKTERYSTYKA PLUTONU":e.panelType==="vehicle"?"CHARAKTERYSTYKA POJAZDU LUB PLUTONU":"CHARAKTERYSTYKA MASZYNY";return g`
      <div class="section">${r}</div>
      <div class="box panel">
        ${s2[e.panelType].map(s=>this.renderPanelField(e,s))}
      </div>
    `}fieldPopup(e,r){var s;return((s=this.popup)==null?void 0:s.kind)==="field"&&this.popup.key===e.key?g`<div class="popup pf-popup" @click=${o=>o.stopPropagation()}>
      <div class="p-title">${e.label}</div>
      ${e.kind.options.map(o=>g`<button
          class="opt ${o.value===r?"on":""}"
          @click=${()=>{this.popup=null,this.setField(e.key,e.kind.type==="level"?Number(o.value):o.value)}}
        >
          ${o.label}
        </button>`)}
    </div>`:T}renderPanelField(e,r){var d;let s=e.fields[r.key],o=(d=this.compareTo)==null?void 0:d.fields[r.key],n=!!this.compareTo&&String(o!=null?o:"")!==String(s!=null?s:""),pk=this.editing&&(r.kind.type==="level"||r.kind.type==="select");return g`<div
      class="${this.changedClass(n)} ${pk?"pf-click":""}"
      ?data-popup-opener=${pk}
      @click=${pk?()=>this.togglePopup({kind:"field",key:r.key}):null}
    >
      <span class="p-label" title=${r.label}>${r.label}:</span>
      <span class="p-value">${this.renderPanelValue(r,s)}</span>
    </div>`}setField(e,r,s){this.change(o=>o.fields[e]=r,s)}renderPanelValue(e,r){var o,n;let s=e.kind;switch(s.type){case"number":{let d=Number(r!=null?r:0)||0;return this.editing?g`<span class="pair">
            <input
              class="num tone-plain"
              type="number"
              aria-label=${e.label}
              min="0"
              step=${(o=s.step)!=null?o:1}
              .value=${N(e1(d))}
              @change=${f=>this.setField(e.key,l0(f))}
            />
            ${(n=s.unit)!=null?n:""}
          </span>`:g`${e1(d)}${s.unit?` ${s.unit}`:""}`}case"range":{let[d,f]=String(r!=null?r:"0/0").split("/").map(v=>Number(v)||0);return this.editing?g`<span class="pair">
            <input
              class="num tone-plain"
              type="number"
              aria-label="${e.label} w terenie"
              min="0"
              .value=${N(String(d))}
              @change=${v=>this.setField(e.key,`${l0(v)}/${f}`)}
            />/<input
              class="num tone-plain"
              type="number"
              aria-label="${e.label} po drodze"
              min="0"
              .value=${N(String(f))}
              @change=${v=>this.setField(e.key,`${d}/${l0(v)}`)}
            />
            km
          </span>`:g`${d}/${f} km`}case"level":{let d=Number(r!=null?r:s.options[0].value),f=t2(s.options,d),v=e2(s.options,d),z=f===s.options[0].value;return this.editing?g`<span class="pf-val ${z?"tone-weak":""}">${v} ▾</span>${this.fieldPopup(e,f)}`:g`<span class=${z?"tone-weak":""}>${v}</span>`}case"select":{let d=String(r!=null?r:s.options[0].value);return this.editing?g`<span class="pf-val">${d} ▾</span>${this.fieldPopup(e,d)}`:g`${d}`}}}render(){let e=this.card;if(!e)return g``;let r=1.6+Math.max(3,e.weapons.length)*10.6+(Math.max(3,e.weapons.length)-1)*0.35;return g`
      <div class="card" style="width:${Math.max(r,45.5)}rem">
        ${this.renderHeader(e)} ${this.renderArmor(e)} ${this.renderWeapons(e)}
        ${this.renderPanel(e)}
      </div>
      ${this.editing?g`<datalist id="weapon-type-labels">
            ${i2.map(s=>g`<option value=${s}></option>`)}
          </datalist>`:T}
    `}};M([o0({attribute:!1})],U.prototype,"card",2),M([o0({attribute:!1})],U.prototype,"compareTo",2),M([o0({type:Boolean})],U.prototype,"editable",2),M([o0({attribute:!1})],U.prototype,"imageChoices",2),M([I()],U.prototype,"popup",2),M([I()],U.prototype,"imageFilter",2),M([I()],U.prototype,"snapshot",2),M([V0(".card")],U.prototype,"cardElement",2),U=M([j0("stats-card")],U);var t1={wif:{title:"WiF Deck Drafter",dataUrl:"/data/wif.json",draftStorageKey:"deckDraftState_wif",deckCode:{mod:{workshopId:"3388575848",value:1},idBits:17}},"wif-extended":{title:"WiF Extended Deck Drafter",dataUrl:"/data/wif-extended.json",draftStorageKey:"deckDraftState_wif-extended",deckCode:{mod:{workshopId:"3825673031",value:1},idBits:17}},vanilla:{title:"Vanilla Deck Draft",dataUrl:"/data/vanilla.json",dlcUrl:"/data/vanilla-dlc.json",draftStorageKey:"deckDraftState_vanilla",deckCode:{}}};var ze=["hq","hq_veh","hq_inf","hq_tank"];function t3(i){return ze.includes(i)}function r3(i){return i==="reco"}var M1=class{constructor(){this.bundles=new Map;this.dlcs=new Map}load(t){let e=this.bundles.get(t);return e||(e=this.fetchBundle(t),e.catch(()=>this.bundles.delete(t)),this.bundles.set(t,e)),e}async fetchBundle(t){let e=t1[t].dataUrl,r=await fetch(e);if(!r.ok)throw new Error(`Could not load ${e} (${r.status})`);let s=await r.json();return{units:s.units.map(o=>this.parseUnit(o)),divisions:s.divisions.map(o=>({...o,deckCode:t1[t].deckCode}))}}async getUnits(t){return(await this.load(t)).units}async getDivisions(t){return(await this.load(t)).divisions}getDlcs(t){let e=this.dlcs.get(t);return e||(e=this.fetchDlcs(t),e.catch(()=>this.dlcs.delete(t)),this.dlcs.set(t,e)),e}async fetchDlcs(t){let e=t1[t].dlcUrl;if(!e)return[];let r=await fetch(e);if(!r.ok)throw new Error(`Could not load ${e} (${r.status})`);return await r.json()}parseUnit(t){let e={...t,_display:t.name!=="",_searchNameHelper:t.name.toLowerCase(),mod:"warno"};return t3(t.specialities[0])?e.name=`(CMD) ${t.name}`:r3(t.specialities[0])&&(e.name=`(REC) ${t.name}`),e}},B1=new M1;var _1=class{constructor(){this._instance=null}get instance(){return this._instance}register(t){if(this.instance!==null)throw new Error("A NotificationController is already registered. Please unregister the other NotificationController");this._instance=t}unregister(t){if(this._instance===t)this._instance=null;else throw new Error("The NotificationController you have tried to unregister is not registered. Please unregister the correct NotifcationController")}},I1=new _1;function i3(i){let t=document.documentElement;i?t.setAttribute("data-side",i.toLowerCase()):t.removeAttribute("data-side")}var s3="wif-extended",P1="acc.statsToolkit",R1=150,ke=100,o3=[{value:"tnk",label:"Czo\u0142gi"},{value:"inf",label:"Piechota"},{value:"rec",label:"Rozpoznanie"},{value:"art",label:"Artyleria"},{value:"aa",label:"Obrona przeciwlotnicza"},{value:"hel",label:"\u015Amig\u0142owce"},{value:"air",label:"Samoloty"},{value:"log",label:"Logistyka"}];function r1(i){return i.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"")}function Ae(){try{let i=localStorage.getItem(P1);if(!i)return null;let t=JSON.parse(i);return t!=null&&t.original&&(t!=null&&t.edited)?t:null}catch{return null}}function n3(i){try{i?localStorage.setItem(P1,JSON.stringify(i)):localStorage.removeItem(P1)}catch(t){console.warn(t)}}function e0(i,t=""){if(I1.instance){I1.instance.addNotification({content:i,duration:4e3,theme:t});return}let e=document.createElement("div");e.textContent=i,e.setAttribute("role","status"),Object.assign(e.style,{position:"fixed",left:"50%",bottom:"1.5rem",transform:"translateX(-50%)",zIndex:"1000",maxWidth:"90vw",padding:"0.7rem 1.2rem",background:t==="error"?"#8e1d2c":"#2b2a27",color:"#f2efe6",border:"1px solid rgba(255,255,255,0.25)",boxShadow:"0 0.4rem 1rem rgba(0,0,0,0.5)",font:"600 0.95rem sans-serif"}),document.body.appendChild(e),setTimeout(()=>e.remove(),4e3)}function O1(i,t){return`${i.name.trim().replace(/[^\p{L}\p{N}._-]+/gu,"_")||"karta"}.${t}`}function N1(i,t){let e=document.createElement("a");e.href=URL.createObjectURL(i),e.download=t,document.body.appendChild(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(e.href),1e3)}var R=class extends H{constructor(){super(...arguments);this.units=[];this.divisions=[];this.loading=!0;this.error="";this.query="";this.division="";this.country="";this.category="";this.shown=R1;this.preview=null;this.original=null;this.edited=null;this.history=[];this.showChanges=!0;this.tool=null;this.columnCategory="";this.presetFilter="";this.busy=!1;this.presets=new Map;this.imageChoices=[];this.lastCoalesce="";this.lastChangeAt=0;this.closeTool=e=>{if(!this.tool)return;e.composedPath().some(s=>{var o;return s instanceof HTMLElement&&((o=s.classList)==null?void 0:o.contains("tool"))})||(this.tool=null)};this.keys=e=>{e.key==="Escape"&&(this.tool=null);let r=e.composedPath()[0],s=r&&/^(INPUT|SELECT|TEXTAREA)$/.test(r.tagName);(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="z"&&!s&&this.edited&&(e.preventDefault(),this.undo())}}static get styles(){return w0`
      :host {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: var(--lumo-space-m);
        height: calc(100vh - var(--app-header-height));
        padding: var(--lumo-space-m);
        box-sizing: border-box;
      }

      @media (max-width: 1000px) {
        :host {
          grid-template-columns: 1fr;
          height: auto;
        }
      }

      .pane {
        display: flex;
        flex-direction: column;
        min-height: 0;
        background-color: var(--lumo-base-color);
        border-radius: var(--lumo-border-radius-l);
        padding: var(--lumo-space-m);
        box-sizing: border-box;
        overflow: hidden;
      }

      .pane-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--lumo-space-s);
        margin-bottom: var(--lumo-space-s);
        flex-wrap: wrap;
      }

      h2 {
        margin: 0;
        font-size: var(--lumo-font-size-xl);
      }

      .hint {
        margin: 0 0 var(--lumo-space-s);
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-s);
      }

      .filters {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: var(--lumo-space-s);
        margin-bottom: var(--lumo-space-s);
      }

      .filters .search {
        grid-column: 1 / -1;
      }

      label.field {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        font-size: var(--lumo-font-size-xs);
        color: var(--lumo-secondary-text-color);
        min-width: 0;
      }

      input,
      select {
        font: inherit;
        font-size: var(--lumo-font-size-s);
        color: var(--lumo-body-text-color);
        background: var(--lumo-contrast-5pct);
        border: 1px solid var(--lumo-contrast-20pct);
        padding: 0.35rem 0.5rem;
        min-width: 0;
      }

      input:focus,
      select:focus {
        outline: 2px solid var(--lumo-primary-color);
      }

      select option {
        background: #1c1c1c;
      }

      .count {
        font-size: var(--lumo-font-size-xs);
        color: var(--lumo-secondary-text-color);
        margin-bottom: var(--lumo-space-xs);
      }

      .results {
        flex: 1 1 auto;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-height: 0;
      }

      button.unit {
        display: grid;
        grid-template-columns: 6rem 1fr auto;
        align-items: center;
        gap: var(--lumo-space-s);
        padding: 0.2rem var(--lumo-space-s) 0.2rem 0.2rem;
        border: 1px solid transparent;
        background: var(--lumo-contrast-5pct);
        color: var(--lumo-body-text-color);
        font: inherit;
        text-align: left;
        cursor: pointer;
      }

      button.unit:hover {
        background: var(--lumo-contrast-10pct);
      }

      button.unit.selected {
        border-color: var(--lumo-primary-color);
        background: var(--lumo-primary-color-10pct);
      }

      button.unit img {
        width: 6rem;
        height: 3rem;
        object-fit: cover;
        display: block;
      }

      .u-name {
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .u-meta {
        font-size: var(--lumo-font-size-xs);
        color: var(--lumo-secondary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .u-cost {
        font-weight: 700;
        color: #e8a92a;
      }

      .grp {
        position: sticky;
        top: 0;
        z-index: 1;
        padding: 0.25rem var(--lumo-space-s);
        font-size: var(--lumo-font-size-xs);
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--lumo-primary-text-color);
        background: var(--lumo-base-color);
        border-bottom: 1px solid var(--lumo-contrast-20pct);
      }

      .card-area {
        flex: 1 1 auto;
        overflow: auto;
        min-height: 0;
        padding: 1rem 0.25rem 1rem;
      }

      .card-area stats-card {
        width: max-content;
        margin: 0 auto;
      }

      .empty {
        color: var(--lumo-secondary-text-color);
        text-align: center;
        margin-top: 4rem;
      }

      .actions {
        display: flex;
        justify-content: center;
        gap: var(--lumo-space-s);
        padding-top: var(--lumo-space-s);
        flex-wrap: wrap;
      }

      button.btn,
      label.btn {
        font: inherit;
        font-size: var(--lumo-font-size-s);
        padding: 0.45rem 0.9rem;
        border: 1px solid var(--lumo-contrast-30pct);
        background: var(--lumo-contrast-10pct);
        color: var(--lumo-body-text-color);
        cursor: pointer;
        white-space: nowrap;
      }

      button.btn:hover:not(:disabled),
      label.btn:hover {
        background: var(--lumo-contrast-20pct);
      }

      button.btn:disabled {
        opacity: 0.45;
        cursor: default;
      }

      button.btn.primary {
        background: var(--lumo-primary-color);
        border-color: var(--lumo-primary-color);
        color: #fff;
        font-weight: 700;
        padding: 0.55rem 2.5rem;
      }

      button.btn.primary:hover:not(:disabled) {
        filter: brightness(1.15);
      }

      button.btn.active {
        border-color: var(--lumo-primary-text-color);
        color: var(--lumo-primary-text-color);
      }

      /* ---------- tools ---------- */
      .tools {
        display: flex;
        flex-wrap: wrap;
        gap: var(--lumo-space-xs);
        align-items: stretch;
        position: relative;
      }

      .tool {
        position: relative;
      }

      .tool > button.btn {
        height: 100%;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 0.03em;
      }

      .tool select {
        height: 100%;
      }

      .tools .sep {
        flex: 1 1 auto;
      }

      .popup {
        position: absolute;
        z-index: 10;
        top: 100%;
        left: 0;
        margin-top: 0.25rem;
        width: 22rem;
        max-height: 60vh;
        overflow: auto;
        background: #1d1c1a;
        border: 1px solid var(--lumo-contrast-30pct);
        box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.6);
        padding: var(--lumo-space-s);
      }

      .popup h3 {
        margin: 0 0 var(--lumo-space-xs);
        font-size: var(--lumo-font-size-s);
      }

      .popup label.check {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.2rem 0.25rem;
        font-size: var(--lumo-font-size-s);
        cursor: pointer;
      }

      .popup label.check:hover {
        background: var(--lumo-contrast-5pct);
      }

      .popup .icon {
        width: 1.3rem;
        height: 1.3rem;
        flex: 0 0 auto;
        display: inline-block;
      }

      /* One-colour icons (iconset colour classes clash in one shadow root) */
      .popup .icon [class],
      .popup .icon path,
      .popup .icon rect,
      .popup .icon polygon,
      .popup .icon circle,
      .popup .icon ellipse {
        fill: currentColor;
      }

      .popup .icon [fill='none'] {
        fill: none;
      }

      .popup .text-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.55rem;
        font-weight: 700;
      }

      .popup .column-form {
        display: flex;
        flex-direction: column;
        gap: var(--lumo-space-s);
      }

      .picker {
        border: 1px solid var(--lumo-contrast-20pct);
        background: var(--lumo-contrast-5pct);
      }

      .picker.disabled {
        opacity: 0.4;
        pointer-events: none;
      }

      .picker input {
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid var(--lumo-contrast-20pct);
      }

      .picker-list {
        max-height: 18rem;
        overflow: auto;
      }

      .picker-list button {
        display: grid;
        grid-template-columns: 4.5rem 1fr;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
        padding: 0.2rem 0.35rem;
        background: none;
        border: none;
        color: inherit;
        font: inherit;
        font-size: var(--lumo-font-size-s);
        text-align: left;
        cursor: pointer;
      }

      .picker-list button:hover,
      .picker-list button:focus-visible {
        background: var(--lumo-contrast-10pct);
        outline: none;
      }

      .picker-list img {
        width: 4.5rem;
        height: 1.8rem;
        object-fit: contain;
        filter: invert(0.9);
      }

      .picker-list .stats {
        display: block;
        font-size: var(--lumo-font-size-xxs);
        color: var(--lumo-secondary-text-color);
      }

      .note {
        font-size: var(--lumo-font-size-xs);
        color: var(--lumo-secondary-text-color);
        margin: var(--lumo-space-xs) 0 0;
      }

      .error {
        color: var(--lumo-error-text-color);
      }
    `}connectedCallback(){super.connectedCallback(),i3(null),document.addEventListener("click",this.closeTool),document.addEventListener("keydown",this.keys);let e=Ae();e&&(b0(e.original),b0(e.edited),this.original=e.original,this.edited=e.edited),this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.closeTool),document.removeEventListener("keydown",this.keys)}async load(){try{let[e,r]=await Promise.all([B1.getUnits(s3),B1.getDivisions(s3)]);this.units=[...e].sort((o,n)=>o.name.localeCompare(n.name,"pl")),this.divisions=[...r].sort((o,n)=>o.name.localeCompare(n.name,"pl")),this.presets=l2(e);let tm={};for(let z of e){let k=D3(z),a=tm[k]||(tm[k]=new Set);for(let q of z.specialities)a.add(q.replace(/^(_canBeAirlifted)\d$/,"$1"))}this.traitMap=tm;if(this.original&&!this.original.category){let u=e.find(z=>z.descriptorName===this.original.source);u&&(this.original.category=u.category,this.edited.category=u.category)}let s=new Map;for(let o of e)for(let n of o.weapons){let d=n.imageTexture?t0.weapon(n.imageTexture):"";d&&!s.has(n.imageTexture)&&s.set(n.imageTexture,d)}this.imageChoices=[...s.entries()].map(([o,n])=>({name:o,url:n})).sort((o,n)=>o.name.localeCompare(n.name))}catch(e){console.error(e),this.error="Nie uda\u0142o si\u0119 wczyta\u0107 danych WiF Extended."}finally{this.loading=!1}}get countries(){return[...new Set(this.units.map(e=>{var r;return(r=e.unitType)==null?void 0:r.motherCountry}).filter(Boolean))].sort()}get results(){let o=o3.map(z=>z.value);return this.resultsRaw.sort((a,b)=>o.indexOf(a.category)-o.indexOf(b.category))}get resultsRaw(){let e=this.query.split(/\s+/).map(r1).filter(Boolean);return this.units.filter(r=>{var s;if(this.division&&!r.divisions.includes(this.division)||this.country&&((s=r.unitType)==null?void 0:s.motherCountry)!==this.country||this.category&&r.category!==this.category)return!1;if(e.length){let o=r1(`${r.name} ${r.descriptorName}`);return e.every(n=>o.includes(n))}return!0})}divisionName(e){var r,s;return(s=(r=this.divisions.find(o=>o.descriptor===e))==null?void 0:r.name)!=null?s:""}setFilter(e){e(),this.shown=R1}choose(){if(!this.preview)return;let e=u1(this.preview);this.original=e,this.edited=a3(e),this.history=[],this.tool=null,this.persist()}backToSearch(){this.original=null,this.edited=null,this.history=[],this.tool=null,n3(null)}persist(){this.original&&this.edited&&n3({original:this.original,edited:this.edited})}setEdited(e,r){if(!this.edited)return;if(this.original&&this.original.category){let a=autoCost(this.original,e);e.cost!==this.edited.cost?e.costOffset=e.cost-a:e.cost=Math.max(0,a+(e.costOffset||0))}e.costCategory=P3(e.cost);let s=Date.now();r&&r===this.lastCoalesce&&s-this.lastChangeAt<1500||(this.history=[...this.history,this.edited].slice(-ke)),this.lastCoalesce=r!=null?r:"",this.lastChangeAt=s,this.edited=e,this.persist()}onCardChange(e){this.setEdited(e.detail.card,e.detail.coalesce)}mutate(e){if(!this.edited)return;let r=JSON.parse(JSON.stringify(this.edited));e(r),this.setEdited(r)}undo(){let e=this.history[this.history.length-1];e&&(this.history=this.history.slice(0,-1),this.edited=e,this.lastCoalesce="",this.persist())}reset(){this.original&&this.setEdited(a3(this.original))}toggleTool(e){this.tool=this.tool===e?null:e,this.presetFilter=""}toggleTrait(e,r){this.mutate(s=>{s.traits=r?[...s.traits,e]:s.traits.filter(o=>o!==e)})}addPreset(e){this.mutate(r=>{r.weapons.push({...JSON.parse(JSON.stringify(e.weapon)),uid:v0()})}),this.tool=null,e0(`Dodano kolumn\u0119: ${e.label}`)}addEmptyWeapon(){this.tool=null,this.mutate(e=>e.weapons.push(a2())),e0("Dodano now\u0105 kolumn\u0119 uzbrojenia: kliknij jej ikon\u0119, kafelki i warto\u015Bci, \u017Ceby je ustawi\u0107")}duplicateWeapon(e){this.mutate(r=>{let s=r.weapons.findIndex(o=>o.uid===e.detail.uid);s>=0&&r.weapons.splice(s+1,0,{...r.weapons[s],uid:v0()})})}setPanelType(e){this.mutate(r=>r.panelType=e)}async copyScreenshot(){var e;if(!(!this.editor||!this.edited)){this.busy=!0;try{if(window.isSecureContext&&!!((e=navigator.clipboard)!=null&&e.write)&&typeof ClipboardItem!="undefined"){let s=this.editor.capture().then(o=>{if(!o)throw new Error("Nie uda\u0142o si\u0119 zrobi\u0107 zrzutu");return o});await navigator.clipboard.write([new ClipboardItem({"image/png":s})]),e0("Skopiowano zrzut statystyk do schowka")}else{let s=await this.editor.capture();if(!s)throw new Error("Nie uda\u0142o si\u0119 zrobi\u0107 zrzutu");N1(s,O1(this.edited,"png")),e0("Ta przegl\u0105darka nie pozwala tu wklei\u0107 obrazu do schowka (strona bez https): zrzut pobrano jako plik PNG","error")}}catch(r){console.error(r),e0("Nie uda\u0142o si\u0119 skopiowa\u0107 zrzutu statystyk","error")}finally{this.busy=!1}}}async downloadScreenshot(){if(!(!this.editor||!this.edited)){this.busy=!0;try{let e=await this.editor.capture();if(!e)throw new Error("no image");N1(e,O1(this.edited,"png"))}catch(e){console.error(e),e0("Nie uda\u0142o si\u0119 zapisa\u0107 zrzutu","error")}finally{this.busy=!1}}}saveJson(){if(!this.edited||!this.original)return;let e=new Blob([JSON.stringify({original:this.original,edited:this.edited},null,2)],{type:"application/json"});N1(e,O1(this.edited,"json"))}loadJson(e){var o;let r=e.target,s=(o=r.files)==null?void 0:o[0];r.value="",s&&s.text().then(n=>{var f,v;let d=JSON.parse(n);if(!((f=d==null?void 0:d.edited)!=null&&f.weapons)||!((v=d==null?void 0:d.original)!=null&&v.weapons))throw new Error("bad file");b0(d.original),b0(d.edited),this.original=d.original,this.edited=d.edited,this.history=[],this.persist(),e0("Wczytano statystyki z pliku")}).catch(()=>e0("To nie jest plik statystyk StatsToolKit","error"))}renderSearch(){let e=this.results;return g`
      <div class="pane">
        <div class="pane-head"><h2>StatsToolKit</h2></div>
        <p class="hint">
          Wyszukaj jednostkę z WiF Extended, sprawdź jej kartę i kliknij „Wybierz”, żeby na jej podstawie
          zrobić statystyki nowej karty.
        </p>
        <div class="filters">
          <label class="field search">
            Nazwa
            <input
              type="search"
              placeholder="np. T-72, Leopard, Wagner…"
              .value=${N(this.query)}
              @input=${r=>this.setFilter(()=>this.query=r.target.value)}
            />
          </label>
          <label class="field">
            Dywizja
            <select @change=${r=>this.setFilter(()=>this.division=r.target.value)}>
              <option value="" ?selected=${!this.division}>Wszystkie</option>
              ${[["ECoalition/Allied","NATO"],["ECoalition/Axis","PAKT"]].map(([a,l])=>g`<optgroup label=${l}>
                  ${this.divisions.filter(r=>r.alliance===a).map(r=>g`<option value=${r.descriptor} ?selected=${r.descriptor===this.division}>
                      ${l} · ${r.name}
                    </option>`)}
                </optgroup>`)}
            </select>
          </label>
          <label class="field">
            Narodowość
            <select @change=${r=>this.setFilter(()=>this.country=r.target.value)}>
              <option value="" ?selected=${!this.country}>Wszystkie</option>
              ${this.countries.map(r=>{var s;return g`<option value=${r} ?selected=${r===this.country}>${(s=T0[r])!=null?s:r}</option>`})}
            </select>
          </label>
          <label class="field">
            Typ jednostki
            <select @change=${r=>this.setFilter(()=>this.category=r.target.value)}>
              <option value="" ?selected=${!this.category}>Wszystkie</option>
              ${o3.map(r=>g`<option value=${r.value} ?selected=${r.value===this.category}>${r.label}</option>`)}
            </select>
          </label>
        </div>
        ${this.error?g`<p class="error">${this.error}</p>`:T}
        <div class="count">
          ${this.loading?"Wczytywanie jednostek\u2026":`Znaleziono: ${e.length}`}
        </div>
        <div class="results">
          ${e.slice(0,this.shown).map((r,ix,ar)=>{var s,o,n,d,f,v;return g`${ix===0||ar[ix-1].category!==r.category?g`<div class="grp">${(o3.find(z=>z.value===r.category)||{}).label||r.category}</div>`:T}<button
              class="unit ${((s=this.preview)==null?void 0:s.descriptorName)===r.descriptorName?"selected":""}"
              @click=${()=>this.preview=r}
            >
              <img src=${t0.unit(r.descriptorName)} alt="" loading="lazy"
                @error=${z=>z.target.style.visibility="hidden"} />
              <span>
                <div class="u-name">${r.name}</div>
                <div class="u-meta">
                  ${(d=T0[(o=r.unitType)==null?void 0:o.motherCountry])!=null?d:(n=r.unitType)==null?void 0:n.motherCountry} ·
                  ${(v=(f=o3.find(z=>z.value===r.category))==null?void 0:f.label)!=null?v:r.category} ·
                  ${r.divisions.map(z=>this.divisionName(z)).filter(Boolean).join(", ")}
                </div>
              </span>
              <span class="u-cost">${r.commandPoints}</span>
            </button>`})}
          ${e.length>this.shown?g`<button class="btn" @click=${()=>this.shown+=R1}>
                Pokaż więcej (${e.length-this.shown})
              </button>`:T}
        </div>
      </div>
    `}renderOriginal(){var e;return g`
      <div class="pane">
        <div class="pane-head">
          <h2>Karta bazowa</h2>
          <button class="btn" @click=${this.backToSearch}>← Wybierz inną jednostkę</button>
        </div>
        <p class="hint">Oryginał do porównania. Zmiany robisz na karcie po prawej.</p>
        <div class="card-area">
          <stats-card .card=${(e=this.original)!=null?e:void 0}></stats-card>
        </div>
      </div>
    `}renderPreview(){let e=this.preview?u1(this.preview):null;return g`
      <div class="pane">
        <div class="pane-head"><h2>Podgląd karty</h2></div>
        <div class="card-area">
          ${e?g`<stats-card .card=${e}></stats-card>`:g`<p class="empty">Wybierz jednostkę z listy po lewej.</p>`}
        </div>
        <div class="actions">
          <button class="btn primary" ?disabled=${!e} @click=${this.choose}>Wybierz</button>
        </div>
      </div>
    `}renderTraitsPopup(){let e=this.edited,tm=this.traitMap&&this.traitMap[e.panelType],r=new Set(_0.map(n=>n.value).filter(n=>!tm||tm.has(n))),s=e.traits.filter(n=>!r.has(n)),o=[...r,...s];return g`<div class="popup">
      <h3>Traity jednostki</h3>
      ${o.map(n=>{let d=e.traits.includes(n);return g`<label class="check">
          <input
            type="checkbox"
            .checked=${N(d)}
            @change=${f=>this.toggleTrait(n,f.target.checked)}
          />
          ${Q0(n)}
          <span>${I0(n)}</span>
        </label>`})}
    </div>`}renderColumnPopup(){var o;let e=this.columnCategory,r=r1(this.presetFilter),s=e?((o=this.presets.get(e))!=null?o:[]).filter(n=>!r||r1(n.label).includes(r)):[];return g`<div class="popup">
      <h3>Nowa kolumna z uzbrojeniem z gry</h3>
      <div class="column-form">
        <label class="field">
          Rodzaj uzbrojenia
          <select
            @change=${n=>{this.columnCategory=n.target.value,this.presetFilter=""}}
          >
            <option value="" ?selected=${!e}>— wybierz —</option>
            ${r2.map(n=>{var d,f;return g`<option value=${n.value} ?selected=${n.value===e}>
                ${n.label} (${(f=(d=this.presets.get(n.value))==null?void 0:d.length)!=null?f:0})
              </option>`})}
          </select>
        </label>
        <label class="field">
          Uzbrojenie
          <div class="picker ${e?"":"disabled"}" aria-disabled=${e?"false":"true"}>
            <input
              type="search"
              placeholder=${e?"Szukaj\u2026":"Najpierw wybierz rodzaj"}
              ?disabled=${!e}
              .value=${N(this.presetFilter)}
              @input=${n=>this.presetFilter=n.target.value}
            />
            <div class="picker-list">
              ${s.slice(0,300).map(n=>g`<button @click=${()=>this.addPreset(n)}>
                  ${n.image?g`<img
                        src=${n.image}
                        alt=""
                        loading="lazy"
                        @error=${d=>d.target.style.visibility="hidden"}
                      />`:g`<span></span>`}
                  <span>
                    ${n.label}
                    <span class="stats">
                      ${n.weapon.typeLabel} ·
                      ${n.weapon.penetration?`pen. ${n.weapon.penetration} \xB7 `:""}
                      ${Math.max(n.weapon.groundRange,n.weapon.helicopterRange,n.weapon.planeRange)} m
                    </span>
                  </span>
                </button>`)}
            </div>
          </div>
        </label>
        <p class="note">Kliknięcie pozycji dodaje kolumnę z jej statystykami; potem możesz je zmieniać.</p>
      </div>
    </div>`}renderTools(){let e=this.edited;return g`
      <div class="tools">
        <div class="tool">
          <button class="btn ${this.tool==="traits"?"active":""}" @click=${()=>this.toggleTool("traits")}>
            Traity
          </button>
          ${this.tool==="traits"?this.renderTraitsPopup():T}
        </div>
        <div class="tool">
          <button class="btn ${this.tool==="column"?"active":""}" @click=${()=>this.toggleTool("column")}>
            Nowa kolumna
          </button>
          ${this.tool==="column"?this.renderColumnPopup():T}
        </div>
        <div class="tool">
          <button class="btn" @click=${this.addEmptyWeapon}>Nowe uzbrojenie</button>
        </div>
        <div class="tool">
          <select
            aria-label="Typ karty"
            title="Typ karty (pola na dole karty)"
            @change=${r=>this.setPanelType(r.target.value)}
          >
            ${o2.map(r=>g`<option value=${r.value} ?selected=${r.value===e.panelType}>Karta: ${r.label}</option>`)}
          </select>
        </div>
        <span class="sep"></span>
        <button class="btn" title="Cofnij (Ctrl+Z)" ?disabled=${this.history.length===0} @click=${this.undo}>
          Cofnij
        </button>
        <button class="btn" title="Przywróć wartości karty bazowej" @click=${this.reset}>Reset</button>
        <button
          class="btn ${this.showChanges?"active":""}"
          title="Zaznacz wartości inne niż na karcie bazowej"
          @click=${()=>this.showChanges=!this.showChanges}
        >
          Zmiany
        </button>
      </div>
    `}renderEditor(){var e,r;return g`
      <div class="pane">
        <div class="pane-head"><h2>Nowa karta</h2></div>
        ${this.renderTools()}
        <div class="card-area">
          <stats-card
            class="editor"
            editable
            .card=${(e=this.edited)!=null?e:void 0}
            .compareTo=${this.showChanges&&(r=this.original)!=null?r:void 0}
            .imageChoices=${this.imageChoices}
            @card-change=${this.onCardChange}
            @duplicate-weapon=${this.duplicateWeapon}
          ></stats-card>
        </div>
        <div class="actions">
          <button class="btn primary" ?disabled=${this.busy} @click=${this.copyScreenshot}>
            Zrzut do schowka
          </button>
          <button class="btn" ?disabled=${this.busy} @click=${this.downloadScreenshot}>Pobierz PNG</button>
        </div>
      </div>
    `}render(){return this.original&&this.edited?g`${this.renderOriginal()}${this.renderEditor()}`:g`${this.renderSearch()}${this.renderPreview()}`}};M([I()],R.prototype,"units",2),M([I()],R.prototype,"divisions",2),M([I()],R.prototype,"loading",2),M([I()],R.prototype,"error",2),M([I()],R.prototype,"query",2),M([I()],R.prototype,"division",2),M([I()],R.prototype,"country",2),M([I()],R.prototype,"category",2),M([I()],R.prototype,"shown",2),M([I()],R.prototype,"preview",2),M([I()],R.prototype,"original",2),M([I()],R.prototype,"edited",2),M([I()],R.prototype,"history",2),M([I()],R.prototype,"showChanges",2),M([I()],R.prototype,"tool",2),M([I()],R.prototype,"columnCategory",2),M([I()],R.prototype,"presetFilter",2),M([I()],R.prototype,"busy",2),M([V0("stats-card.editor")],R.prototype,"editor",2),R=M([j0("stats-toolkit-route")],R);function a3(i){return JSON.parse(JSON.stringify(i))}})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
lit-html/directives/repeat.js:
lit-html/directives/unsafe-html.js:
lit-html/directives/unsafe-svg.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
