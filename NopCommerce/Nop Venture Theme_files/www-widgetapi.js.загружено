(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=ha;
function ma(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.B=b.prototype}
function na(){this.o=!1;this.l=null;this.i=void 0;this.h=1;this.u=this.j=0;this.m=null}
function oa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
na.prototype.s=function(a){this.i=a};
function pa(a,b){a.m={Y:b,ta:!0};a.h=a.j||a.u}
na.prototype.return=function(a){this.m={return:a};this.h=this.u};
function x(a,b,c){a.h=c;return{value:b}}
function qa(a){a.j=0;var b=a.m.Y;a.m=null;return b}
function ra(a){this.h=new na;this.i=a}
function sa(a,b){oa(a.h);var c=a.h.l;if(c)return ta(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return ua(a)}
function ta(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.l=null,pa(a.h,g),ua(a)}a.h.l=null;d.call(a.h,f);return ua(a)}
function ua(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,pa(a.h,c)}a.h.o=!1;if(a.h.m){b=a.h.m;a.h.m=null;if(b.ta)throw b.Y;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function va(a){this.next=function(b){oa(a.h);a.h.l?b=ta(a,a.h.l.next,b,a.h.s):(a.h.s(b),b=ua(a));return b};
this.throw=function(b){oa(a.h);a.h.l?b=ta(a,a.h.l["throw"],b,a.h.s):(pa(a.h,b),b=ua(a));return b};
this.return=function(b){return sa(a,b)};
this[Symbol.iterator]=function(){return this}}
function z(a,b){b=new va(new ra(b));la&&a.prototype&&la(b,a.prototype);return b}
t("Reflect.setPrototypeOf",function(a){return a?a:la?function(b,c){try{return la(b,c),!0}catch(d){return!1}}:null});
function wa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=wa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=wa(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||la});
function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var xa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||xa});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.s=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.fa),reject:g(this.m)}};
b.prototype.fa=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ha(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ea(g):this.o(g)}};
b.prototype.ea=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ia(h,g):this.o(g)};
b.prototype.m=function(g){this.u(2,g)};
b.prototype.o=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ga();this.D()};
b.prototype.ga=function(){var g=this;e(function(){if(g.J()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.J=function(){if(this.s)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.D=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ha=function(g){var h=this.l();g.O(h.resolve,h.reject)};
b.prototype.ia=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(v){try{l(r(v))}catch(w){m(w)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.O(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.O=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).O(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(w){r[v]=w;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).O(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==wa(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!A(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!A(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&A(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&A(k,g)&&A(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&A(k,g)&&A(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.i[l];if(m&&A(h.i,l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,v:n}}return{id:l,list:m,index:-1,v:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.v?l.v.value=k:(l.v={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.v),this.h.previous.next=l.v,this.h.previous=l.v,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.v&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.v.previous.next=h.v.next,h.v.next.previous=h.v.previous,h.v.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).v};
e.prototype.get=function(h){return(h=d(this,h).v)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function ya(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return ya(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return ya(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return ya(this,function(b,c){return c})}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
var B=this||self;function C(a,b){a=a.split(".");b=b||B;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function za(){}
function Ba(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function F(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ca(a){return Object.prototype.hasOwnProperty.call(a,Da)&&a[Da]||(a[Da]=++Ea)}
var Da="closure_uid_"+(1E9*Math.random()>>>0),Ea=0;function Fa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ha(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ha=Fa:Ha=Ga;return Ha.apply(null,arguments)}
function G(a,b){a=a.split(".");var c=B;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function I(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.La=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ia(a){return a}
;function Ja(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ja);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b&&(this.ka=b)}
I(Ja,Error);Ja.prototype.name="CustomError";function Ka(){var a=/[?&]dsh=1(&|$)/.test("/generate_204");this.j=!a&&/[?&]ae=1(&|$)/.test("/generate_204");this.l=!a&&/[?&]ae=2(&|$)/.test("/generate_204");if((this.h=/[?&]adurl=([^&]*)/.exec("/generate_204"))&&this.h[1]){try{var b=decodeURIComponent(this.h[1])}catch(c){b=null}this.i=b}}
;function La(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ma=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},J=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Na=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
J(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Oa(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function Pa(a,b){b=Ma(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Qa(a){return Array.prototype.concat.apply([],arguments)}
function Ra(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Sa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Ta(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ua(a){var b=Va,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Wa(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Xa(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Xa(a[c]);return b}
var Ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Za(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ya.length;f++)c=Ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var $a;var ab=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},bb=/&/g,cb=/</g,db=/>/g,eb=/"/g,fb=/'/g,gb=/\x00/g,hb=/[\x00&<>"']/;var ib;a:{var jb=B.navigator;if(jb){var kb=jb.userAgent;if(kb){ib=kb;break a}}ib=""}function K(a){return-1!=ib.indexOf(a)}
;function lb(a){this.h=mb===mb?a:""}
lb.prototype.toString=function(){return this.h.toString()};
var mb={};var nb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ob(a){return a?decodeURI(a):a}
function pb(a){return ob(a.match(nb)[3]||null)}
function qb(a){var b=a.match(nb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function rb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)rb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function sb(a){var b=[],c;for(c in a)rb(c,a[c],b);return b.join("&")}
var tb=/#|$/;function ub(a,b){var c=a.search(tb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function L(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function vb(){return K("iPhone")&&!K("iPod")&&!K("iPad")}
;function wb(a){wb[" "](a);return a}
wb[" "]=za;var xb=K("Opera"),yb=K("Trident")||K("MSIE"),zb=K("Edge"),Ab=K("Gecko")&&!(-1!=ib.toLowerCase().indexOf("webkit")&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),Bb=-1!=ib.toLowerCase().indexOf("webkit")&&!K("Edge");function Cb(){var a=B.document;return a?a.documentMode:void 0}
var Db;a:{var Eb="",Fb=function(){var a=ib;if(Ab)return/rv:([^\);]+)(\)|;)/.exec(a);if(zb)return/Edge\/([\d\.]+)/.exec(a);if(yb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Bb)return/WebKit\/(\S+)/.exec(a);if(xb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Fb&&(Eb=Fb?Fb[1]:"");if(yb){var Gb=Cb();if(null!=Gb&&Gb>parseFloat(Eb)){Db=String(Gb);break a}}Db=Eb}var Hb=Db,Ib;if(B.document&&yb){var Jb=Cb();Ib=Jb?Jb:parseInt(Hb,10)||void 0}else Ib=void 0;var Kb=Ib;var Lb=vb()||K("iPod"),Mb=K("iPad"),Nb=K("Safari")&&!((K("Chrome")||K("CriOS"))&&!K("Edge")||K("Coast")||K("Opera")||K("Edge")||K("Edg/")||K("OPR")||K("Firefox")||K("FxiOS")||K("Silk")||K("Android"))&&!(vb()||K("iPad")||K("iPod"));var Ob={},Pb=null;var M=window;function Qb(a,b){this.width=a;this.height=b}
q=Qb.prototype;q.clone=function(){return new Qb(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.isEmpty=function(){return!(this.width*this.height)};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Rb(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Sb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Tb(a){var b=Ub;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Vb(){var a=[];Tb(function(b){a.push(b)});
return a}
var Ub={ya:"allow-forms",za:"allow-modals",Aa:"allow-orientation-lock",Ba:"allow-pointer-lock",Ca:"allow-popups",Da:"allow-popups-to-escape-sandbox",Ea:"allow-presentation",Fa:"allow-same-origin",Ga:"allow-scripts",Ha:"allow-top-navigation",Ia:"allow-top-navigation-by-user-activation"},Wb=La(function(){return Vb()});
function Xb(){var a=Rb(),b={};J(Wb(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;var Yb=(new Date).getTime();function Zb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function $b(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],w=e[2],y=e[3],X=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var H=y^v&(w^y);var D=1518500249}else H=v^w^y,D=1859775393;else 60>p?(H=v&w|y&(v|w),D=2400959708):(H=v^w^y,D=3395469782);H=((n<<5|n>>>27)&4294967295)+H+X+D+r[p]&4294967295;X=y;y=w;w=(v<<30|v>>>2)&4294967295;v=n;n=H}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+w&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+X&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],v=0,w=n.length;v<w;++v)p.push(n.charCodeAt(v));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var v=24;0<=v;v-=8)n[r++]=e[p]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,la:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function ac(a,b,c){var d=String(B.location.href);return d&&a&&b?[b,bc(Zb(d),a,c||null)].join(" "):null}
function bc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],J(d,function(h){e.push(h)}),cc(e.join(" "));
var f=[],g=[];J(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];J(d,function(h){e.push(h)});
a=cc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function cc(a){var b=$b();b.update(a);return b.la().toLowerCase()}
;var dc={};function ec(a){this.h=a||{cookie:""}}
q=ec.prototype;q.isEnabled=function(){if(!B.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{T:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ra;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.T}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ab(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{T:0,path:b,domain:c});return d};
q.isEmpty=function(){return!this.h.cookie};
q.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ab(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var fc=new ec("undefined"==typeof document?null:document);function gc(a){return!!dc.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function hc(a,b,c,d){(a=B[a])||(a=(new ec(document)).get(b));return a?ac(a,c,d):null}
function ic(a){var b=void 0===b?!1:b;var c=Zb(String(B.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=B.__SAPISID||B.__APISID||B.__3PSAPISID||B.__OVERRIDE_SID;gc(e)&&(f=f||B.__1PSAPISID);if(f)e=!0;else{var g=new ec(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");gc(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,e||(e=new ec(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?ac(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&gc(b)&&((b=hc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=hc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function jc(){this.h=[];this.i=-1}
jc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.i=-1)};
jc.prototype.get=function(a){return!!this.h[a]};
function kc(a){-1==a.i&&(a.i=Na(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function lc(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
lc.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function mc(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var nc;function oc(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!K("Presto")&&(a=function(){var e=Rb();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ha(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!K("Trident")&&!K("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.W;c.W=null;e()}};
return function(e){d.next={W:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function pc(a){B.setTimeout(function(){throw a;},0)}
;function qc(){this.i=this.h=null}
qc.prototype.add=function(a,b){var c=rc.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
qc.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var rc=new lc(function(){return new sc},function(a){return a.reset()});
function sc(){this.next=this.scope=this.h=null}
sc.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
sc.prototype.reset=function(){this.next=this.scope=this.h=null};function tc(a,b){uc||vc();wc||(uc(),wc=!0);xc.add(a,b)}
var uc;function vc(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);uc=function(){a.then(yc)}}else uc=function(){var b=yc;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!K("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(nc||(nc=oc()),nc(b)):B.setImmediate(b)}}
var wc=!1,xc=new qc;function yc(){for(var a;a=xc.remove();){try{a.h.call(a.scope)}catch(b){pc(b)}mc(rc,a)}wc=!1}
;function zc(){this.i=-1}
;function Ac(){this.i=64;this.h=[];this.o=[];this.s=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
I(Ac,zc);Ac.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.j=0};
function Bc(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Ac.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)Bc(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){Bc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){Bc(this,e);f=0;break}}this.j=f;this.m+=b}};
Ac.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.o[c]=b&255,b/=256;Bc(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Cc(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Dc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ec[c])c=Ec[c];else{c=String(c);if(!Ec[c]){var f=/function\s+([^\(]+)/m.exec(c);Ec[c]=f?f[1]:"[Anonymous]"}c=Ec[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Dc(a,b){b||(b={});b[Fc(a)]=!0;var c=a.stack||"";(a=a.ka)&&!b[Fc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Dc(a,b));return c}
function Fc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ec={};function Gc(){this.j=this.j;this.m=this.m}
Gc.prototype.j=!1;Gc.prototype.dispose=function(){this.j||(this.j=!0,this.K())};
Gc.prototype.K=function(){if(this.m)for(;this.m.length;)this.m.shift()()};var Hc="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function Ic(){}
Ic.prototype.next=function(){throw Hc;};
Ic.prototype.F=function(){return this};
function Jc(a){if(a instanceof Ic)return a;if("function"==typeof a.F)return a.F(!1);if(Ba(a)){var b=0,c=new Ic;c.next=function(){for(;;){if(b>=a.length)throw Hc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Kc(a,b){if(Ba(a))try{J(a,b,void 0)}catch(c){if(c!==Hc)throw c;}else{a=Jc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Hc)throw c;}}}
function Lc(a){if(Ba(a))return Ra(a);a=Jc(a);var b=[];Kc(a,function(c){b.push(c)});
return b}
;function Mc(a,b){this.i={};this.h=[];this.l=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Mc)for(c=Nc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Nc(a){Oc(a);return a.h.concat()}
q=Mc.prototype;q.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;b=b||Pc;Oc(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Pc(a,b){return a===b}
q.isEmpty=function(){return 0==this.j};
q.clear=function(){this.i={};this.l=this.j=this.h.length=0};
q.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.j--,this.l++,this.h.length>2*this.j&&Oc(this),!0):!1};
function Oc(a){if(a.j!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.j!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
q.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
q.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.j++,this.h.push(a),this.l++);this.i[a]=b};
q.forEach=function(a,b){for(var c=Nc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Mc(this)};
q.F=function(a){Oc(this);var b=0,c=this.l,d=this,e=new Ic;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Hc;var f=d.h[b++];return a?f:d.i[f]};
return e};var Qc=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",za,b),B.removeEventListener("test",za,b)}catch(c){}return a}();function Rc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Rc.prototype.stopPropagation=function(){this.j=!0};
Rc.prototype.preventDefault=function(){this.defaultPrevented=!0};function Sc(a,b){Rc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
I(Sc,Rc);var Tc={2:"touch",3:"pen",4:"mouse"};
Sc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Ab){a:{try{wb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Tc[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Sc.B.preventDefault.call(this)};
Sc.prototype.stopPropagation=function(){Sc.B.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Sc.prototype.preventDefault=function(){Sc.B.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Uc="closure_listenable_"+(1E6*Math.random()|0);var Vc=0;function Wc(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.R=e;this.key=++Vc;this.L=this.N=!1}
function Xc(a){a.L=!0;a.listener=null;a.h=null;a.src=null;a.R=null}
;function Yc(a){this.src=a;this.listeners={};this.h=0}
Yc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Zc(a,b,d,e);-1<g?(b=a[g],c||(b.N=!1)):(b=new Wc(b,this.src,f,!!d,e),b.N=c,a.push(b));return b};
Yc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Zc(e,b,c,d);return-1<b?(Xc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function $c(a,b){var c=b.type;c in a.listeners&&Pa(a.listeners[c],b)&&(Xc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Zc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.L&&f.listener==b&&f.capture==!!c&&f.R==d)return e}return-1}
;var ad="closure_lm_"+(1E6*Math.random()|0),bd={},cd=0;function dd(a,b,c,d,e){if(d&&d.once)ed(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)dd(a,b[f],c,d,e);else c=fd(c),a&&a[Uc]?gd(a,b,c,F(d)?!!d.capture:!!d,e):hd(a,b,c,!1,d,e)}
function hd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=F(e)?!!e.capture:!!e,h=id(a);h||(a[ad]=h=new Yc(a));c=h.add(b,c,d,g,f);if(!c.h){d=jd();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)Qc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(kd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");cd++}}
function jd(){function a(c){return b.call(a.src,a.listener,c)}
var b=ld;return a}
function ed(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ed(a,b[f],c,d,e);else c=fd(c),a&&a[Uc]?a.h.add(String(b),c,!0,F(d)?!!d.capture:!!d,e):hd(a,b,c,!0,d,e)}
function md(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)md(a,b[f],c,d,e);else(d=F(d)?!!d.capture:!!d,c=fd(c),a&&a[Uc])?a.h.remove(String(b),c,d,e):a&&(a=id(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Zc(b,c,d,e)),(c=-1<a?b[a]:null)&&nd(c))}
function nd(a){if("number"!==typeof a&&a&&!a.L){var b=a.src;if(b&&b[Uc])$c(b.h,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(kd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);cd--;(c=id(b))?($c(c,a),0==c.h&&(c.src=null,b[ad]=null)):Xc(a)}}}
function kd(a){return a in bd?bd[a]:bd[a]="on"+a}
function ld(a,b){if(a.L)a=!0;else{b=new Sc(b,this);var c=a.listener,d=a.R||a.src;a.N&&nd(a);a=c.call(d,b)}return a}
function id(a){a=a[ad];return a instanceof Yc?a:null}
var od="__closure_events_fn_"+(1E9*Math.random()>>>0);function fd(a){if("function"===typeof a)return a;a[od]||(a[od]=function(b){return a.handleEvent(b)});
return a[od]}
;function N(){Gc.call(this);this.h=new Yc(this);this.J=this;this.s=null}
I(N,Gc);N.prototype[Uc]=!0;N.prototype.addEventListener=function(a,b,c,d){dd(this,a,b,c,d)};
N.prototype.removeEventListener=function(a,b,c,d){md(this,a,b,c,d)};
function pd(a,b){var c=a.s;if(c){var d=[];for(var e=1;c;c=c.s)d.push(c),++e}a=a.J;c=b.type||b;"string"===typeof b?b=new Rc(b,a):b instanceof Rc?b.target=b.target||a:(e=b,b=new Rc(c,a),Za(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=qd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=qd(g,c,!0,b)&&e,b.j||(e=qd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=qd(g,c,!1,b)&&e}
N.prototype.K=function(){N.B.K.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Xc(d[e]);delete a.listeners[c];a.h--}}this.s=null};
function gd(a,b,c,d,e){a.h.add(String(b),c,!1,d,e)}
function qd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.L&&g.capture==c){var h=g.listener,k=g.R||g.src;g.N&&$c(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var rd=B.JSON.stringify;function O(a){this.h=0;this.s=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=za)try{var b=this;a.call(void 0,function(c){sd(b,2,c)},function(c){sd(b,3,c)})}catch(c){sd(this,3,c)}}
function td(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
td.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var ud=new lc(function(){return new td},function(a){a.reset()});
function vd(a,b,c){var d=ud.get();d.i=a;d.onRejected=b;d.context=c;return d}
O.prototype.then=function(a,b,c){return wd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
O.prototype.$goog_Thenable=!0;O.prototype.cancel=function(a){if(0==this.h){var b=new xd(a);tc(function(){yd(this,b)},this)}};
function yd(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?yd(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):zd(c),Ad(c,e,3,b)))}a.j=null}else sd(a,3,b)}
function Bd(a,b){a.i||2!=a.h&&3!=a.h||Cd(a);a.l?a.l.next=b:a.i=b;a.l=b}
function wd(a,b,c,d){var e=vd(null,null,null);e.h=new O(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof xd?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Bd(a,e);return e.h}
O.prototype.D=function(a){this.h=0;sd(this,2,a)};
O.prototype.J=function(a){this.h=0;sd(this,3,a)};
function sd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.D,f=a.J;if(d instanceof O){Bd(d,vd(e||za,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(F(d))try{var k=d.then;if("function"===typeof k){Dd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.s=c,a.h=b,a.j=null,Cd(a),3!=b||c instanceof xd||Ed(a,c))}}
function Dd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Cd(a){a.o||(a.o=!0,tc(a.u,a))}
function zd(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
O.prototype.u=function(){for(var a;a=zd(this);)Ad(this,a,this.h,this.s);this.o=!1};
function Ad(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Fd(b,c,d);else try{b.j?b.i.call(b.context):Fd(b,c,d)}catch(e){Gd.call(null,e)}mc(ud,b)}
function Fd(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Ed(a,b){a.m=!0;tc(function(){a.m&&Gd.call(null,b)})}
var Gd=pc;function xd(a){Ja.call(this,a)}
I(xd,Ja);xd.prototype.name="cancel";function P(a){Gc.call(this);this.s=1;this.l=[];this.o=0;this.h=[];this.i={};this.u=!!a}
I(P,Gc);q=P.prototype;q.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.s;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.s=e+3;d.push(e);return e};
function Hd(a,b,c){var d=Id;if(a=d.i[a]){var e=d.h;(a=Oa(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.M(a)}}
q.M=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.o?(this.l.push(a),this.h[a+1]=za):(c&&Pa(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
q.I=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Jd(this.h[g+1],this.h[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.M(c)}}return 0!=e}return!1};
function Jd(a,b,c){tc(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.i[a];b&&(J(b,this.M,this),delete this.i[a])}else this.h.length=0,this.i={}};
q.K=function(){P.B.K.call(this);this.clear();this.l.length=0};function Kd(a){this.h=a}
Kd.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,rd(b))};
Kd.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Kd.prototype.remove=function(a){this.h.remove(a)};function Ld(a){this.h=a}
I(Ld,Kd);function Md(a){this.data=a}
function Nd(a){return void 0===a||a instanceof Md?a:new Md(a)}
Ld.prototype.set=function(a,b){Ld.B.set.call(this,a,Nd(b))};
Ld.prototype.i=function(a){a=Ld.B.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ld.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Od(a){this.h=a}
I(Od,Ld);Od.prototype.set=function(a,b,c){if(b=Nd(b)){if(c){if(c<Date.now()){Od.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Od.B.set.call(this,a,b)};
Od.prototype.i=function(a){var b=Od.B.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Od.prototype.remove.call(this,a);else return b}};function Pd(){}
;function Qd(){}
I(Qd,Pd);Qd.prototype.clear=function(){var a=Lc(this.F(!0)),b=this;J(a,function(c){b.remove(c)})};function Rd(a){this.h=a}
I(Rd,Qd);q=Rd.prototype;q.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
q.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeItem(a)};
q.F=function(a){var b=0,c=this.h,d=new Ic;d.next=function(){if(b>=c.length)throw Hc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
q.clear=function(){this.h.clear()};
q.key=function(a){return this.h.key(a)};function Sd(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
I(Sd,Rd);function Td(a,b){this.i=a;this.h=null;if(yb&&!(9<=Number(Kb))){Ud||(Ud=new Mc);this.h=Ud.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Ud.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
I(Td,Qd);var Vd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ud=null;function Wd(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Vd[b]})}
q=Td.prototype;q.isAvailable=function(){return!!this.h};
q.set=function(a,b){this.h.setAttribute(Wd(a),b);Xd(this)};
q.get=function(a){a=this.h.getAttribute(Wd(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeAttribute(Wd(a));Xd(this)};
q.F=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ic;d.next=function(){if(b>=c.length)throw Hc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
q.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Xd(this)};
function Xd(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Yd(a,b){this.i=a;this.h=b+"::"}
I(Yd,Qd);Yd.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Yd.prototype.get=function(a){return this.i.get(this.h+a)};
Yd.prototype.remove=function(a){this.i.remove(this.h+a)};
Yd.prototype.F=function(a){var b=this.i.F(!0),c=this,d=new Ic;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};var Zd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};G("yt.config_",Zd);function $d(a){var b=arguments;1<b.length?Zd[b[0]]=b[1]:1===b.length&&Object.assign(Zd,b[0])}
function Q(a,b){return a in Zd?Zd[a]:b}
;var ae=[];function be(a){ae.forEach(function(b){return b(a)})}
function ce(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){de(b)}}:a}
function de(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),$d("ERRORS",b));be(a)}
function ee(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),$d("ERRORS",b))}
;var fe=0;G("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++fe});var ge={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function he(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in ge||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
he.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
he.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
he.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Va=B.ytEventsEventsListeners||{};G("ytEventsEventsListeners",Va);var ie=B.ytEventsEventsCounter||{count:0};G("ytEventsEventsCounter",ie);
function je(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ua(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=F(e[4])&&F(d)&&Wa(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ke(a){a&&("string"==typeof a&&(a=[a]),J(a,function(b){if(b in Va){var c=Va[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?le()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Va[b]}}))}
var le=La(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function me(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=je(a,b,c,d);if(!e){e=++ie.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new he(h);if(!Sb(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new he(h);
h.currentTarget=a;return c.call(a,h)};
g=ce(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),le()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Va[e]=[a,b,c,g,d]}}}
;function ne(a,b){"function"===typeof a&&(a=ce(a));return window.setTimeout(a,b)}
function oe(a){"function"===typeof a&&(a=ce(a));return window.setInterval(a,250)}
;var pe=/^[\w.]*$/,qe={q:!0,search_query:!0};function re(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=se(f[0]||""),h=se(f[1]||"");g in c?Array.isArray(c[g])?Sa(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(re);k.args=[{key:l,value:f[1],query:a,method:te==m?"unchanged":m}];qe.hasOwnProperty(l)||ee(k)}}return c}
var te=String(re);function ue(a){var b=[];Ta(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];J(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ve(a){"?"==a.charAt(0)&&(a=a.substr(1));return re(a,"&")}
function we(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ve(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=sb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function xe(a){if(!b)var b=window.location.href;var c=a.match(nb)[1]||null,d=pb(a);c&&d?(a=a.match(nb),b=b.match(nb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?pb(b)==d&&(Number(b.match(nb)[4]||null)||null)==(Number(a.match(nb)[4]||null)||null):!0;return a}
function se(a){return a&&a.match(pe)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function S(a){a=ye(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ze(a,b){a=ye(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ye(a){var b=Q("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:Q("EXPERIMENT_FLAGS",{})[a]}
;function Ae(){}
function Be(a,b){return Ce(a,1,b)}
function De(a,b){Ce(a,2,b)}
;function Ee(){Ae.apply(this,arguments)}
var Fe;ma(Ee,Ae);function Ce(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ne(a,c||0)}
function Ge(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
Ee.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};Fe||(Fe=new Ee);function He(a){var b=Ie;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Yb;e.flash="0";a:{try{var f=b.h.top.location.href}catch(E){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?M:g;try{var h=g.history.length}catch(E){h=0}e.u_his=h;e.u_java=!!M.navigator&&"unknown"!==typeof M.navigator.javaEnabled&&!!M.navigator.javaEnabled&&M.navigator.javaEnabled();M.screen&&(e.u_h=M.screen.height,e.u_w=M.screen.width,
e.u_ah=M.screen.availHeight,e.u_aw=M.screen.availWidth,e.u_cd=M.screen.colorDepth);M.navigator&&M.navigator.plugins&&(e.u_nplug=M.navigator.plugins.length);M.navigator&&M.navigator.mimeTypes&&(e.u_nmime=M.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(E){}try{var m=h.outerWidth;var n=h.outerHeight}catch(E){}try{var r=h.innerWidth;var p=h.innerHeight}catch(E){}try{var v=h.screenLeft;var w=h.screenTop}catch(E){}try{r=h.innerWidth,p=h.innerHeight}catch(E){}try{var y=h.screen.availWidth;
var X=h.screen.availTop}catch(E){}k=[v,w,k,l,y,X,m,n,r,p];l=b.h.top;try{var H=(l||window).document,D="CSS1Compat"==H.compatMode?H.documentElement:H.body;var R=(new Qb(D.clientWidth,D.clientHeight)).round()}catch(E){R=new Qb(-12245933,-12245933)}H=R;R={};D=new jc;B.SVGElement&&B.document.createElementNS&&D.set(0);l=Xb();l["allow-top-navigation-by-user-activation"]&&D.set(1);l["allow-popups-to-escape-sandbox"]&&D.set(2);B.crypto&&B.crypto.subtle&&D.set(3);B.TextDecoder&&B.TextEncoder&&D.set(4);D=kc(D);
R.bc=D;R.bih=H.height;R.biw=H.width;R.brdim=k.join();b=b.i;b=(R.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,R.wgl=!!M.WebGLRenderingContext,R);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Ie=new function(){var a=window.document;this.h=window;this.i=a};
G("yt.ads_.signals_.getAdSignalsString",function(a){return ue(He(a))});var Je="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function Ke(){if(!Je)return null;var a=Je();return"open"in a?a:null}
;var Le={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
Me="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),Ne=!1;
function Oe(a,b){b=void 0===b?{}:b;var c=xe(a),d=S("web_ajax_ignore_global_headers_if_set"),e;for(e in Le){var f=Q(Le[e]);!f||!c&&pb(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!pb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!pb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!pb(a))b["X-YouTube-Ad-Signals"]=ue(He(void 0));return b}
function Pe(a){var b=window.location.search,c=pb(a);S("debug_handle_relative_url_for_query_forward_killswitch")||c||!xe(a)||(c=document.location.hostname);var d=ob(a.match(nb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ve(b),f={};J(Me,function(g){e[g]&&(f[g]=e[g])});
return we(a,f||{},!1)}
function Qe(a,b){var c=b.format||"JSON";a=Re(a,b);var d=Se(a,b),e=!1,f=Te(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=Ue(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||B;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=ne(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function Re(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=we(a,b||{},!0);return a}
function Se(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=Q("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||pb(a)&&!b.withCredentials&&pb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=ve(e),Za(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):sb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=
!1;break a}f=!0}a=!f}!Ne&&a&&"POST"!=b.method&&(Ne=!0,de(Error("AJAX request with postData should use POST")));return e}
function Ue(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,ee(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ve(a):null)e={},J(a.getElementsByTagName("*"),function(g){e[g.tagName]=We(g)})}d&&Xe(e);
return e}
function Xe(a){if(F(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===$a){var e=null;var f=B.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ia,createScript:Ia,createScriptURL:Ia})}catch(g){B.console&&B.console.error(g.message)}$a=e}else $a=e}d=(e=$a)?e.createHTML(d):d;a[c]=new lb(d)}else Xe(a[b])}}
function Ve(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function We(a){var b="";J(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Te(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ce(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Ke();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;S("debug_forward_web_query_parameters")&&(a=Pe(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Oe(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Ye=Lb||Mb;var Ze={},$e=0;function af(){var a=void 0===a?"":a;if(!bf(a))if(a=void 0===a?"":a)Te("/generate_204",void 0,"POST",a,void 0);else if(Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Te("/generate_204",void 0,"GET","",void 0);else{a:{try{var b=new Ka;if(b.j&&b.i||b.l){var c=ob("/generate_204".match(nb)[5]||null);var d=!(!c||!c.endsWith("/aclk")||"1"!==ub("/generate_204","ri"));break a}}catch(e){}d=!1}d&&bf()||cf()}}
function bf(a){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon("/generate_204",void 0===a?"":a))return!0}catch(b){}return!1}
function cf(){var a=new Image,b=""+$e++;Ze[b]=a;a.onload=a.onerror=function(){delete Ze[b]};
a.src="/generate_204"}
;var df=B.ytPubsubPubsubInstance||new P,ef=B.ytPubsubPubsubSubscribedKeys||{},ff=B.ytPubsubPubsubTopicToKeys||{},gf=B.ytPubsubPubsubIsSynchronous||{};P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.M;P.prototype.publish=P.prototype.I;P.prototype.clear=P.prototype.clear;G("ytPubsubPubsubInstance",df);G("ytPubsubPubsubTopicToKeys",ff);G("ytPubsubPubsubIsSynchronous",gf);G("ytPubsubPubsubSubscribedKeys",ef);var hf=window,T=hf.ytcsi&&hf.ytcsi.now?hf.ytcsi.now:hf.performance&&hf.performance.timing&&hf.performance.now&&hf.performance.timing.navigationStart?function(){return hf.performance.timing.navigationStart+hf.performance.now()}:function(){return(new Date).getTime()};var jf=ze("initial_gel_batch_timeout",1E3),kf=Math.pow(2,16)-1,lf=null,mf=0,nf=void 0,of=0,pf=0,qf=0,rf=!0,sf=B.ytLoggingTransportGELQueue_||new Map;G("ytLoggingTransportGELQueue_",sf);var tf=B.ytLoggingTransportTokensToCttTargetIds_||{};G("ytLoggingTransportTokensToCttTargetIds_",tf);
function uf(a,b){if("log_event"===a.endpoint){var c="";a.P?c="visitorOnlyApprovedKey":a.C&&(tf[a.C.token]=vf(a.C),c=a.C.token);var d=sf.get(c)||[];sf.set(c,d);d.push(a.payload);b&&(nf=new b);a=ze("web_logging_max_batch")||100;b=T();d.length>=a?wf({writeThenSend:!0}):10<=b-qf&&(xf(),qf=b)}}
function yf(a,b){if("log_event"===a.endpoint){var c="";a.P?c="visitorOnlyApprovedKey":a.C&&(tf[a.C.token]=vf(a.C),c=a.C.token);var d=new Map;d.set(c,[a.payload]);b&&(nf=new b);return new O(function(e){nf&&nf.isReady()?zf(d,e,{bypassNetworkless:!0}):e()})}}
function wf(a){a=void 0===a?{}:a;new O(function(b){window.clearTimeout(of);window.clearTimeout(pf);pf=0;nf&&nf.isReady()?(zf(sf,b,a),sf.clear()):(xf(),b())})}
function xf(){S("web_gel_timeout_cap")&&!pf&&(pf=ne(function(){wf({writeThenSend:!0})},6E4));
window.clearTimeout(of);var a=Q("LOGGING_BATCH_TIMEOUT",ze("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&rf&&(a=jf);of=ne(function(){wf({writeThenSend:!0})},a)}
function zf(a,b,c){var d=nf;c=void 0===c?{}:c;var e=Math.round(T()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=Xa({context:Af(d.h||Bf())});h.events=k;(k=tf[g])&&Cf(h,g,k);delete tf[g];g="visitorOnlyApprovedKey"===g;Df(h,e,g);S("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&af();Ef(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();mf=Math.round(T()-e)},
onError:function(){f--;f||b()},
ba:c,P:g});rf=!1}}
function Df(a,b,c){a.requestTimeMs=String(b);S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=Q("EVENT_ID",void 0))&&((c=Q("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*kf/2)),c++,c>kf&&(c=1),$d("BATCH_CLIENT_COUNTER",c),b={serializedEventId:b,clientCounter:String(c)},a.serializedClientEventId=b,lf&&mf&&S("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:lf,roundtripMs:String(mf)}),lf=b,mf=0)}
function Cf(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function vf(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var Ff=B.ytLoggingGelSequenceIdObj_||{};G("ytLoggingGelSequenceIdObj_",Ff);function Gf(){if(!B.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return B.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":B.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":B.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":B.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;G("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var Hf={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},If={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Jf(){var a=B.navigator;return a?a.connection:void 0}
;function Kf(){return"INNERTUBE_API_KEY"in Zd&&"INNERTUBE_API_VERSION"in Zd}
function Bf(){return{innertubeApiKey:Q("INNERTUBE_API_KEY",void 0),innertubeApiVersion:Q("INNERTUBE_API_VERSION",void 0),ma:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),na:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),pa:Q("INNERTUBE_CONTEXT_HL",void 0),oa:Q("INNERTUBE_CONTEXT_GL",void 0),qa:Q("INNERTUBE_HOST_OVERRIDE",void 0)||"",sa:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ra:!!Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:Q("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Af(a){var b={client:{hl:a.pa,gl:a.oa,clientName:a.na,clientVersion:a.innertubeContextClientVersion,configInfo:a.ma}},c=B.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Q("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=Q("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=Q("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!S("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=Gf()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!S("music_web_display_mode_killswitch")){var h;b.client.aa=null!=(h=b.client.aa)?h:{};b.client.aa.webDisplayMode=Gf()}a.appInstallData&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);
Q("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});a:{if(h=Jf()){a=Hf[h.type||"unknown"]||"CONN_UNKNOWN";h=Hf[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&(a=Jf(),a=null!==a&&void 0!==a&&a.effectiveType?If.hasOwnProperty(a.effectiveType)?If[a.effectiveType]:
"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(ve(Q("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function Lf(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ka||Q("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Ja:b=ic([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
;function Mf(a){a=Object.assign({},a);delete a.Authorization;var b=ic();if(b){var c=new Ac;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ba(b);void 0===c&&(c=0);if(!Pb){Pb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Ob[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Pb[k]&&(Pb[k]=h)}}}c=Ob[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Nf(a){var b=new Sd;(b=b.isAvailable()?a?new Yd(b,a):b:null)||(a=new Td(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Od(a):null;this.i=document.domain||window.location.hostname}
Nf.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(rd(b))}catch(f){return}else e=escape(b);b=this.i;fc.set(""+a,e,{T:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Nf.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=fc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Nf.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;fc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Of;function Pf(){Of||(Of=new Nf("yt.innertube"));return Of}
function Qf(a,b,c,d){if(d)return null;d=Pf().get("nextId",!0)||1;var e=Pf().get("requests",!0)||{};e[d]={method:a,request:b,authState:Mf(c),requestTime:Math.round(T())};Pf().set("nextId",d+1,86400,!0);Pf().set("requests",e,86400,!0);return d}
function Rf(a){var b=Pf().get("requests",!0)||{};delete b[a];Pf().set("requests",b,86400,!0)}
function Sf(a){var b=Pf().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=Mf(Lf(!1));Wa(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),Ef(a,d.method,e,{}));delete b[c]}}Pf().set("requests",b,86400,!0)}}
;var Tf=C("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.M;P.prototype.publish=P.prototype.I;P.prototype.clear=P.prototype.clear;G("ytPubsub2Pubsub2Instance",Tf);G("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});G("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});G("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});G("ytPubsub2Pubsub2SkipSubKey",null);var Uf=[],Vf=!1;function Wf(a,b){Vf||(Uf.push({type:"EVENT",eventType:a,payload:b}),10<Uf.length&&Uf.shift())}
;var Xf=function(){var a;return function(){a||(a=new Nf("ytidb"));return a}}();
function Yf(){var a;return null===(a=Xf())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function Zf(a,b,c){this.h=void 0===a?!1:a;this.failureMessage=b;this.j=c;(a=Yf())||(a={createdTimestampMs:T(),isSupported:this.h,resultCount:0,hasSucceededOnce:this.h});this.i=a;var d;if($f()){var e;this.i.isSupported===this.h?e=Object.assign(Object.assign({},this.i),{resultCount:this.i.resultCount+1}):e={isSupported:this.h,resultCount:1,createdTimestampMs:T(),hasSucceededOnce:this.i.hasSucceededOnce||this.h};null===(d=Xf())||void 0===d?void 0:d.set("LAST_RESULT_ENTRY_KEY",e,2592E3,!0)}}
function ag(a,b){return new Zf(!1,a instanceof Error?a.message:"",void 0===b?!1:b)}
Zf.prototype.isSupported=function(){return this.h};
Zf.prototype.log=function(){$f()&&Wf("IS_SUPPORTED_COMPLETED",{isSupported:this.h,lastIsSupported:this.i.isSupported,failureMessage:this.failureMessage,sameResultCount:this.i.resultCount,sameResultDurationMs:Math.floor(T()-this.i.createdTimestampMs),canDetectDataOnFailure:this.j})};
function $f(){var a;return!!(S("ytidb_analyze_is_supported")&&(null===(a=Xf())||void 0===a?0:a.h))}
;function bg(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);d=[];var e=d.concat;if(!(c instanceof Array)){c=u(c);for(var f,g=[];!(f=c.next()).done;)g.push(f.value);c=g}this.args=e.call(d,c)}
ma(bg,Error);function cg(a){return a.substr(0,a.indexOf(":"))||a}
;var dg={},eg=(dg.AUTH_INVALID="No user identifier specified.",dg.EXPLICIT_ABORT="Transaction was explicitly aborted.",dg.IDB_NOT_SUPPORTED="IndexedDB is not supported.",dg.MISSING_OBJECT_STORE="Object store not created.",dg.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",dg.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",dg.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",dg.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",dg),fg={},gg=(fg.AUTH_INVALID="ERROR",fg.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",fg.EXPLICIT_ABORT="IGNORED",fg.IDB_NOT_SUPPORTED="ERROR",fg.MISSING_OBJECT_STORE="ERROR",fg.QUOTA_EXCEEDED="WARNING",fg.QUOTA_MAYBE_EXCEEDED="WARNING",fg.UNKNOWN_ABORT="WARNING",fg),hg={},ig=(hg.AUTH_INVALID=!1,hg.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,hg.EXPLICIT_ABORT=!1,hg.IDB_NOT_SUPPORTED=!1,hg.MISSING_OBJECT_STORE=!1,hg.QUOTA_EXCEEDED=!1,hg.QUOTA_MAYBE_EXCEEDED=!0,
hg.UNKNOWN_ABORT=!0,hg);function U(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?eg[a]:c;d=void 0===d?gg[a]:d;e=void 0===e?ig[a]:e;bg.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,U.prototype)}
ma(U,bg);function jg(a){U.call(this,"MISSING_OBJECT_STORE",{Pa:a},eg.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,jg.prototype)}
ma(jg,U);var kg=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function lg(a,b,c){b=cg(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof U)return d;if("QuotaExceededError"===d.name)return new U("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(Nb&&"UnknownError"===d.name)return new U("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&kg.some(function(e){return d.message.includes(e)}))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new U("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",Qa:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function mg(a){if(!a)throw Error();throw a;}
function ng(a){return a}
function V(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];try{this.i(c,b)}catch(e){b(e)}}
V.all=function(a){return new V(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={H:0};f.H<a.length;f={H:f.H},++f.H)og(V.resolve(a[f.H]).then(function(g){return function(h){d[g.H]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
V.resolve=function(a){return new V(function(b,c){a instanceof V?a.then(b,c):b(a)})};
V.reject=function(a){return new V(function(b,c){c(a)})};
V.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:ng,e=null!==b&&void 0!==b?b:mg;return new V(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){pg(c,c,d,f,g)}),c.onRejected.push(function(){qg(c,c,e,f,g)})):"FULFILLED"===c.state.status?pg(c,c,d,f,g):"REJECTED"===c.state.status&&qg(c,c,e,f,g)})};
function og(a,b){a.then(void 0,b)}
function pg(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?rg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function qg(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?rg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function rg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?rg(a,b,f,d,e):d(f)},function(f){e(f)})}
;function sg(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function tg(a){return new Promise(function(b,c){sg(a,b,c)})}
function W(a){return new V(function(b,c){sg(a,b,c)})}
;function ug(a,b){return new V(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function vg(a){return new Promise(function(b){De(function(){b()},a)})}
function wg(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
q=wg.prototype;q.add=function(a,b,c){return xg(this,[a],{mode:"readwrite",G:!0},function(d){return yg(d,a).add(b,c)})};
q.clear=function(a){return xg(this,[a],{mode:"readwrite",G:!0},function(b){return yg(b,a).clear()})};
q.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
q.count=function(a,b){return xg(this,[a],{mode:"readonly",G:!0},function(c){return yg(c,a).count(b)})};
q.delete=function(a,b){return xg(this,[a],{mode:"readwrite",G:!0},function(c){return yg(c,a).delete(b)})};
q.get=function(a,b){return xg(this,[a],{mode:"readonly",G:!0},function(c){return yg(c,a).get(b)})};
function xg(a,b,c,d){return L(a,function f(){var g=this,h,k,l,m,n,r,p,v,w,y,X,H,D,R;return z(f,function(E){switch(E.h){case 1:var Aa={mode:"readonly",G:!1};"string"===typeof c?Aa.mode=c:Aa=c;h=Aa;g.transactionCount++;k=S("ytidb_transaction_exponential_backoff_retries");l=h.G?ze("ytidb_transaction_try_count",1):1;m=500;n=0;case 2:if(r){E.h=3;break}n++;p=Math.round(T());E.j=4;v=g.h.transaction(b,h.mode);Aa=new zg(v);Aa=Ag(Aa,d);return x(E,Aa,6);case 6:return w=E.i,y=Math.round(T()),Bg(g,p,y,n,void 0,
b.join(),h),E.return(w);case 4:X=qa(E);H=Math.round(T());D=lg(X,g.h.name,b.join());if((R=D instanceof U&&!D.h)||n>=l){Bg(g,p,H,n,D,b.join(),h);r=D;E.h=2;break}if(!k){E.h=2;break}return x(E,vg(m),9);case 9:m*=2;E.h=2;break;case 3:return E.return(Promise.reject(r))}})})}
function Bg(a,b,c,d,e,f,g){b=c-b;e?(e instanceof U&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Wf("QUOTA_EXCEEDED",{dbName:cg(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof U&&"UNKNOWN_ABORT"===e.type&&(Wf("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c-a.j}),a.i=!0),Cg(a,!1,d,f,b),Vf||(Uf.push({type:"ERROR",payload:e}),10<Uf.length&&Uf.shift())):
Cg(a,!0,d,f,b)}
function Cg(a,b,c,d,e){Wf("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c})}
function Dg(a){this.h=a}
q=Dg.prototype;q.add=function(a,b){return W(this.h.add(a,b))};
q.clear=function(){return W(this.h.clear()).then(function(){})};
q.count=function(a){return W(this.h.count(a))};
function Eg(a,b){return Fg(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
q.delete=function(a){return a instanceof IDBKeyRange?Eg(this,a):W(this.h.delete(a))};
q.get=function(a){return W(this.h.get(a))};
q.index=function(a){return new Gg(this.h.index(a))};
q.getName=function(){return this.h.name};
function Fg(a,b,c){a=a.h.openCursor(b.query,b.direction);return Hg(a).then(function(d){return ug(d,c)})}
function zg(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=U;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Ag(a,b){var c=new Promise(function(d,e){og(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
zg.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new U("EXPLICIT_ABORT");};
zg.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function yg(a,b){b=a.h.objectStore(b);var c=a.i.get(b);c||(c=new Dg(b),a.i.set(b,c));return c}
function Gg(a){this.h=a}
Gg.prototype.count=function(a){return W(this.h.count(a))};
Gg.prototype.delete=function(a){return Ig(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
Gg.prototype.get=function(a){return W(this.h.get(a))};
Gg.prototype.getKey=function(a){return W(this.h.getKey(a))};
function Ig(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Hg(a).then(function(d){return ug(d,c)})}
function Jg(a,b){this.request=a;this.cursor=b}
function Hg(a){return W(a).then(function(b){return null===b?null:new Jg(a,b)})}
q=Jg.prototype;q.advance=function(a){this.cursor.advance(a);return Hg(this.request)};
q.continue=function(a){this.cursor.continue(a);return Hg(this.request)};
q.delete=function(){return W(this.cursor.delete()).then(function(){})};
q.getKey=function(){return this.cursor.key};
q.update=function(a){return W(this.cursor.update(a))};function Kg(a,b,c){return L(this,function e(){var f,g,h,k,l,m,n,r,p,v;return z(e,function(w){if(1==w.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.xa,m=g.upgrade,n=g.closed,p=function(){r||(r=new wg(f.result,{closed:n}));return r},f.addEventListener("upgradeneeded",function(y){if(null===y.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");y.dataLoss&&"none"!==y.dataLoss&&Wf("IDB_DATA_CORRUPTED",{reason:y.dataLossMessage||"unknown reason",dbName:cg(a)});var X=p(),H=new zg(f.transaction);m&&m(X,y.oldVersion,y.newVersion,H)}),h&&f.addEventListener("blocked",function(){h()}),x(w,tg(f),2);
v=w.i;k&&v.addEventListener("versionchange",function(){k(p())});
v.addEventListener("close",function(){Wf("IDB_UNEXPECTEDLY_CLOSED",{dbName:cg(a),dbVersion:v.version});l&&l()});
return w.return(p())})})}
function Lg(a,b){b=void 0===b?{}:b;return L(this,function d(){var e,f,g;return z(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return x(h,tg(e),0)})})}
;function Mg(a){this.name="YtIdbMeta";this.options=a;this.i=!1}
function Ng(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return Kg(a,b,c)}
Mg.prototype.delete=function(a){a=void 0===a?{}:a;return Lg(this.name,a)};
Mg.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,xa:c,upgrade:this.options.upgrade},e=function(){return L(a,function g(){var h=this,k,l,m;return z(g,function(n){switch(n.h){case 1:return n.j=2,x(n,Ng(h.name,h.options.version,d),4);case 4:k=n.i;a:{var r=u(Object.keys(h.options.wa));for(var p=r.next();!p.done;p=r.next())if(p=p.value,!k.h.objectStoreNames.contains(p)){r=p;break a}r=void 0}l=r;if(void 0===l){n.h=5;break}if(h.i){n.h=6;break}h.i=!0;return x(n,h.delete(),7);case 7:return n.return(e());case 6:throw new jg(l);case 5:return n.return(k);
case 2:m=qa(n);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return n.return(Ng(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.h=b=e()}return this.h};var Og=new Mg({wa:{databases:!0},upgrade:function(a,b){1>b&&a.h.createObjectStore("databases",{keyPath:"actualName"})}});
function Pg(a){return L(this,function c(){var d;return z(c,function(e){if(1==e.h)return x(e,Og.open(),2);d=e.i;return e.return(xg(d,["databases"],{G:!0,mode:"readwrite"},function(f){var g=yg(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return W(g.h.put(a,void 0)).then(function(){})})}))})})}
function Qg(){return L(this,function b(){var c;return z(b,function(d){if(1==d.h)return x(d,Og.open(),2);c=d.i;return d.return(c.delete("databases","yt-idb-test-do-not-use"))})})}
function Rg(){return L(this,function b(){var c,d;return z(b,function(e){if(1==e.h)return x(e,Og.open(),2);if(3!=e.h)return c=e.i,x(e,c.count("databases"),3);d=e.i;return e.return(0<d)})})}
;var Sg;
function Tg(){return L(this,function b(){var c,d,e,f,g;return z(b,function(h){switch(h.h){case 1:if(S("ytidb_is_supported_cache_success_result")&&(c=Yf(),null===c||void 0===c?0:c.hasSucceededOnce))return h.return(new Zf(!0));var k;if(k=Ye)k=/WebKit\/([0-9]+)/.exec(ib),k=!!(k&&600<=parseInt(k[1],10));k&&(k=/WebKit\/([0-9]+)/.exec(ib),k=!(k&&602<=parseInt(k[1],10)));if(k)return h.return(ag(Error("YtIdb is not supported on iOS 8 or 9")));if(zb)return h.return(ag(Error("YtIdb is not supported on Edge")));try{if(d=
self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return h.return(ag(Error("Non-prefixed indexedDB APIs are missing")))}catch(l){return h.return(ag(l))}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return h.return(ag(Error("IDBTransaction.prototype.objectStoreNames is missing")));h.j=2;e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return x(h,Pg(e),4);case 4:return x(h,Qg(),5);case 5:return h.return(new Zf(!0));
case 2:f=qa(h);if(!$f()){h.h=6;break}h.j=7;return x(h,Rg(),9);case 9:return g=h.i,h.return(ag(f,g));case 7:return qa(h),h.return(ag(f));case 6:return h.return(ag(f))}})})}
function Ug(){if(void 0!==Sg)return Sg;Vf=!0;return Sg=Tg().then(function(a){Vf=!1;a.log();return a.isSupported()})}
;var Vg;function Wg(){Vg||(Vg=new Nf("yt.offline"));return Vg}
;function Xg(){N.call(this);this.l=this.u=this.D=this.o=!1;this.i=Yg();this.l=S("validate_network_status");Zg(this);$g(this)}
ma(Xg,N);function Yg(){var a=window.navigator.onLine;return void 0===a?!0:a}
function $g(a){window.addEventListener("online",function(){return L(a,function c(){var d=this;return z(c,function(e){if(1==e.h){if(!d.l){d.i=!0;e.h=2;return}return x(e,ah(d),3)}2!=e.h&&(d.i=e.i);d.o&&d.i&&pd(d,"ytnetworkstatus-online");bh(d);if(d.u&&S("offline_error_handling")){var f=Wg().get("errors",!0);if(f){for(var g in f)if(f[g]){var h=new bg(g,"sent via offline_errors");h.name=f[g].name;h.stack=f[g].stack;h.level=f[g].level;de(h)}Wg().set("errors",{},2592E3,!0)}}e.h=0})})})}
function Zg(a){window.addEventListener("offline",function(){return L(a,function c(){var d=this;return z(c,function(e){if(1==e.h){if(!d.l){d.i=!1;e.h=2;return}return x(e,ah(d),3)}2!=e.h&&(d.i=e.i);d.o&&!d.i&&pd(d,"ytnetworkstatus-offline");bh(d);e.h=0})})})}
function bh(a){a.D&&(ee(new bg("NetworkStatusManager state did not match poll",T()-0)),a.D=!1)}
function ah(a){return L(a,function c(){var d;return z(c,function(e){switch(e.h){case 1:return e.j=2,x(e,fetch("/generate_204",{method:"HEAD"}),4);case 4:d=!0;e.h=3;e.j=0;break;case 2:qa(e),d=!1;case 3:return e.return(d)}})})}
;function ch(a){a=void 0===a?{}:a;N.call(this);var b=this;this.l=this.u=0;Xg.h||(Xg.h=new Xg);this.i=Xg.h;this.i.o=!0;a.va&&(this.i.u=!0);a.S?(this.S=a.S,gd(this.i,"ytnetworkstatus-online",function(){dh(b,"publicytnetworkstatus-online")}),gd(this.i,"ytnetworkstatus-offline",function(){dh(b,"publicytnetworkstatus-offline")})):(gd(this.i,"ytnetworkstatus-online",function(){pd(b,"publicytnetworkstatus-online")}),gd(this.i,"ytnetworkstatus-offline",function(){pd(b,"publicytnetworkstatus-offline")}))}
ma(ch,N);function eh(){fh||(fh=new ch({va:!0}));var a=fh.i;a.l||a.i===Yg()||ee(new bg("NetworkStatusManager isOnline does not match window status"))}
function dh(a,b){a.S?a.l?(Ge(a.u),a.u=Be(function(){a.o!==b&&(pd(a,b),a.o=b,a.l=T())},a.S-(T()-a.l))):(pd(a,b),a.o=b,a.l=T()):pd(a,b)}
;var fh;function gh(a,b){b=void 0===b?{}:b;S("skip_is_supported_killswitch")?Ug().then(function(){eh();Qe(a,b)}):(eh(),Qe(a,b))}
function hh(a,b){b=void 0===b?{}:b;S("skip_is_supported_killswitch")?Ug().then(function(){Qe(a,b)}):Qe(a,b)}
;function ih(a){var b=this;this.h=null;a?this.h=a:Kf()&&(this.h=Bf());Ce(function(){Sf(b)},0,5E3)}
ih.prototype.isReady=function(){!this.h&&Kf()&&(this.h=Bf());return!!this.h};
function Ef(a,b,c,d){!Q("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&ee(new bg("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new bg("innertube xhrclient not ready",b,c,d);de(e);throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.h.qa)&&(g=e);var h=a.h.sa||!1,k=Lf(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var l={alt:"json"};a.h.ra&&f.headers.Authorization||(l.key=a.h.innertubeApiKey);var m=we(""+g+e,l||{},!0);(function(n){n=void 0===n?!1:n;var r;if(d.retry&&"www.youtube-nocookie.com"!=g&&(n||(r=Qf(b,c,k,h)),r)){var p=f.onSuccess,v=f.onFetchSuccess;f.onSuccess=function(w,
y){Rf(r);p(w,y)};
c.onFetchSuccess=function(w,y){Rf(r);v(w,y)}}try{n&&d.retry&&!d.ba.bypassNetworkless?(f.method="POST",!d.ba.writeThenSend&&S("nwl_send_fast_on_unload")?hh(m,f):gh(m,f)):(f.method="POST",f.postParams||(f.postParams={}),Qe(m,f))}catch(w){if("InvalidAccessError"==w.name)r&&(Rf(r),r=0),ee(Error("An extension is blocking network request."));
else throw w;}r&&Ce(function(){Sf(a)},0,5E3)})(!1)}
;function jh(a,b){var c=void 0===c?{}:c;var d=ih;Q("ytLoggingEventsDefaultDisabled",!1)&&ih==ih&&(d=null);c=void 0===c?{}:c;var e={},f=Math.round(c.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=C("_lact",window);a=null==a?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};S("log_sequence_info_on_gel_web")&&c.da&&(a=e.context,b=c.da,Ff[b]=b in Ff?Ff[b]+1:0,a.sequence={index:Ff[b],groupKey:b},c.Na&&delete Ff[c.da]);(c.Sa?yf:uf)({endpoint:"log_event",
payload:e,C:c.C,P:c.P},d)}
;var kh=[{Z:function(a){return"Cannot read property '"+a.key+"'"},
U:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Z:function(a){return"Cannot call '"+a.key+"'"},
U:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function lh(){this.h=[];this.i=[]}
var mh;function nh(){mh||(mh=new lh);return mh}
;var oh=new P;function ph(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=qh(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=qh(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=qh(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function qh(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function rh(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=sh(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=ph(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?sh(f+".ve",g,h,k):0;d+=f;d+=sh(e,a[e],b,c);if(500<d)break}}else c[b]=th(a),d+=c[b].length;else c[b]=th(a),d+=c[b].length;return d}
function sh(a,b,c,d){c+="."+a;a=th(b);d[c]=a;return c.length+a.length}
function th(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var uh=new Set,vh=0,wh=0,xh=0,yh=[],zh=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];var Ah={};function Bh(a){return Ah[a]||(Ah[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Ch={},Dh=[],Id=new P,Eh={};function Fh(){for(var a=u(Dh),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Gh(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Bh(b)]:a.getAttribute("data-"+b):null;return c}
function Hh(a,b){for(var c=1;c<arguments.length;++c);Id.I.apply(Id,arguments)}
;function Ih(a){this.j=this.h=!1;this.i=a||{};a=document.getElementById("www-widgetapi-script");if(this.h=!!("https:"===document.location.protocol||a&&0===a.src.indexOf("https:"))){a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}}
function Y(a,b){a=[a.i,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Jh(a,b,c){Kh||(Kh={},me(window,"message",function(d){a:{if(d.origin===Y(a,"host")||d.origin===Y(a,"host").toString().replace(/^http:/,"https:")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}a.j=!0;a.h||0!==d.origin.indexOf("https:")||(a.h=!0);if(d=Kh[e.id])d.s=!0,d.s&&(J(d.o,d.sendMessage,d),d.o.length=0),d.V(e)}e=void 0}return e}));
Kh[c]=b}
var Kh=null;function Z(a,b,c){this.m=this.h=this.i=null;this.j=0;this.s=!1;this.o=[];this.l=null;this.D={};if(!a)throw Error("YouTube player element ID required.");this.id=Ca(this);this.u=c;this.setup(a,b)}
q=Z.prototype;q.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
q.ja=function(){return this.h};
q.V=function(a){Lh(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Mh(this,a);return this};
function Nh(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.u===b[0]&&Mh(a,c)}}
q.destroy=function(){this.h&&this.h.id&&(Ch[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);Kh&&(Kh[this.id]=null);this.i=null;a=this.h;for(var c in Va)Va[c][0]==a&&ke(c);this.m=this.h=null};
q.X=function(){return{}};
function Oh(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.s?a.sendMessage(b):a.o.push(b)}
function Lh(a,b,c){a.l.j||(c={target:a,data:c},a.l.I(b,c),Hh(a.u+"."+b,c))}
function Ph(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Y(a.i,"title"));(b=Y(a.i,"width"))&&c.setAttribute("width",b.toString());(b=Y(a.i,"height"))&&c.setAttribute("height",
b.toString());var g=a.X();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&J(["debugjs","debugcss"],function(h){var k=ub(window.location.href,h);null!==k&&(g[h]=k)});
window.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(window.yt_embedsTokenValue),delete window.yt_embedsTokenValue);c.src=Y(a.i,"host")+("/embed/"+Y(a.i,"videoId"))+"?"+sb(g);return c}
q.ca=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function Qh(a){Jh(a.i,a,a.id);a.j=oe(a.ca.bind(a));me(a.h,"load",function(){window.clearInterval(a.j);a.j=oe(a.ca.bind(a))})}
q.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?qb(a.src):"https://www.youtube.com"),this.i=new Ih(b),c||(b=Ph(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Ca(this.h)),Ch[this.h.id]=this,window.postMessage){this.l=new P;Qh(this);b=Y(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Eh)Eh.hasOwnProperty(e)&&
Nh(this,e)}};
function Mh(a,b){a.D[b]||(a.D[b]=!0,Oh(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";a=rd(a);var b=this.i;var c=qb(this.h.src||"");b=0===c.indexOf("https:")?[c]:b.h?[c.replace("http:","https:")]:b.j?[c]:[c,c.replace("http:","https:")];if(this.h.contentWindow)for(c=0;c<b.length;c++)try{this.h.contentWindow.postMessage(a,b[c])}catch(y){if(y.name&&"SyntaxError"===y.name){if(!(y.message&&0<y.message.indexOf("target origin ''"))){var d=void 0,e=y;d=void 0===d?{}:d;d.name=Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);d.version=Q("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var f=d||{};d="WARNING";d=void 0===d?"ERROR":d;if(e){e.hasOwnProperty("level")&&e.level&&(d=e.level);if(S("console_log_js_exceptions")){var g=e,h=[];h.push("Name: "+g.name);h.push("Message: "+g.message);g.hasOwnProperty("params")&&h.push("Error Params: "+JSON.stringify(g.params));g.hasOwnProperty("args")&&h.push("Error args: "+JSON.stringify(g.args));h.push("File name: "+g.fileName);h.push("Stacktrace: "+g.stack);window.console.log(h.join("\n"),g)}if(!(5<=vh)){g=void 0;var k=f,l=Cc(e);f=l.message||
"Unknown Error";h=l.name||"UnknownError";var m=l.stack||e.i||"Not available";if(m.startsWith(h+": "+f)){var n=m.split("\n");n.shift();m=n.join("\n")}n=l.lineNumber||"Not available";l=l.fileName||"Not available";var r=0;if(e.hasOwnProperty("args")&&e.args&&e.args.length)for(g=0;g<e.args.length&&!(r=rh(e.args[g],"params."+g,k,r),500<=r);g++);else if(e.hasOwnProperty("params")&&e.params){var p=e.params;if("object"===typeof e.params)for(g in p){if(p[g]){var v="params."+g,w=th(p[g]);k[v]=w;r+=v.length+
w.length;if(500<r)break}}else k.params=th(p)}if(yh.length)for(g=0;g<yh.length&&!(r=rh(yh[g],"params.context."+g,k,r),500<=r);g++);navigator.vendor&&!k.hasOwnProperty("vendor")&&(k["device.vendor"]=navigator.vendor);g={message:f,name:h,lineNumber:n,fileName:l,stack:m,params:k,sampleWeight:1};f=Number(e.columnNumber);isNaN(f)||(g.lineNumber=g.lineNumber+":"+f);if("IGNORED"===e.level)e=0;else a:{e=nh();f=u(e.i);for(h=f.next();!h.done;h=f.next())if(h=h.value,g.message&&g.message.match(h.Oa)){e=h.weight;
break a}e=u(e.h);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.Ma(g)){e=f.weight;break a}e=1}g.sampleWeight=e;e=g;g=u(kh);for(f=g.next();!f.done;f=g.next())if(f=f.value,f.U[e.name])for(n=u(f.U[e.name]),h=n.next();!h.done;h=n.next())if(l=h.value,h=e.message.match(l.regexp)){e.params["params.error.original"]=h[0];n=l.groups;l={};for(m=0;m<n.length;m++)l[n[m]]=h[m+1],e.params["params.error."+n[m]]=h[m+1];e.message=f.Z(l);break}e.params||(e.params={});g=nh();e.params["params.errorServiceSignature"]=
"msg="+g.i.length+"&cb="+g.h.length;e.params["params.serviceWorker"]="false";B.document&&B.document.querySelectorAll&&(e.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(e);if(0!==e.sampleWeight&&!uh.has(e.message)){"ERROR"===d?(oh.I("handleError",e),S("record_app_crashed_web")&&0===xh&&1===e.sampleWeight&&(xh++,jh("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),wh++):"WARNING"===d&&oh.I("handleWarning",
e);if(S("kevlar_gel_error_routing")){g=d;h=e;b:{f=u(zh);for(n=f.next();!n.done;n=f.next())if((l=ib)&&0<=l.toLowerCase().indexOf(n.value.toLowerCase())){f=!0;break b}f=!1}if(f)f=void 0;else{n={stackTrace:h.stack};h.fileName&&(n.filename=h.fileName);f=h.lineNumber&&h.lineNumber.split?h.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(n.lineNumber=Number(f[0]),n.columnNumber=Number(f[1])):n.lineNumber=Number(f[0]));f={level:"ERROR_LEVEL_UNKNOWN",
message:h.message,errorClassName:h.name,sampleWeight:h.sampleWeight};"ERROR"===g?f.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(f.level="ERROR_LEVEL_WARNNING");n={isObfuscated:!0,browserStackInfo:n};l={pageUrl:window.location.href,kvPairs:[]};Q("FEXP_EXPERIMENTS")&&(l.experimentIds=Q("FEXP_EXPERIMENTS"));if(h=h.params)for(m=u(Object.keys(h)),k=m.next();!k.done;k=m.next())k=k.value,l.kvPairs.push({key:"client."+k,value:String(h[k])});h=Q("SERVER_NAME",void 0);m=Q("SERVER_VERSION",void 0);h&&m&&(l.kvPairs.push({key:"server.name",
value:h}),l.kvPairs.push({key:"server.version",value:m}));f={errorMetadata:l,stackTrace:n,logMessage:f}}f&&(jh("clientError",f),("ERROR"===g||S("errors_flush_gel_always_killswitch"))&&wf())}if(!S("suppress_error_204_logging")){f=e;g=f.params||{};d={urlParams:{a:"logerror",t:"jserror",type:f.name,msg:f.message.substr(0,250),line:f.lineNumber,level:d,"client.name":g.name},postParams:{url:Q("PAGE_NAME",window.location.href),file:f.fileName},method:"POST"};g.version&&(d["client.version"]=g.version);if(d.postParams){f.stack&&
(d.postParams.stack=f.stack);f=u(Object.keys(g));for(h=f.next();!h.done;h=f.next())h=h.value,d.postParams["client."+h]=g[h];if(g=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=u(Object.keys(g)),h=f.next();!h.done;h=f.next())h=h.value,d.postParams[h]=g[h];g=Q("SERVER_NAME",void 0);f=Q("SERVER_VERSION",void 0);g&&f&&(d.postParams["server.name"]=g,d.postParams["server.version"]=f)}Qe(Q("ECATCHER_REPORT_HOST","")+"/error_204",d)}uh.add(e.message);vh++}}}}}else throw y;}else console&&console.warn&&
console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Rh(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Sh(a){return 0===a.search("get")||0===a.search("is")}
;function Th(a,b){Z.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.A={};this.playerInfo={}}
ma(Th,Z);q=Th.prototype;q.X=function(){var a=Y(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Y(this.i,"embedConfig")){if(F(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.V=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(F(a))for(var c in a)a.hasOwnProperty(c)&&(this.A[c]=a[c]);break;case "infoDelivery":Uh(this,a);break;case "initialDelivery":F(a)&&(window.clearInterval(this.j),this.playerInfo={},this.A={},Vh(this,a.apiInterface),Uh(this,a));break;default:Lh(this,b,a)}};
function Uh(a,b){if(F(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function Vh(a,b){J(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Rh(c)?this[c]=function(){this.playerInfo={};
this.A={};Oh(this,c,arguments);return this}:Sh(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Oh(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=Y(this.i,"host")+("/embed/"+Y(this.i,"videoId")),b=Number(Y(this.i,"width")),c=Number(Y(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);hb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(bb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(cb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(db,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(eb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(fb,"&#39;")),-1!=a.indexOf("\x00")&&
(a=a.replace(gb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
q.getOptions=function(a){return this.A.namespaces?a?this.A[a]?this.A[a].options||[]:[]:this.A.namespaces||[]:[]};
q.getOption=function(a,b){if(this.A.namespaces&&a&&b&&this.A[a])return this.A[a][b]};
function Wh(a){if("iframe"!==a.tagName.toLowerCase()){var b=Gh(a,"videoid");b&&(b={videoId:b,width:Gh(a,"width"),height:Gh(a,"height")},new Th(a,b))}}
;G("YT.PlayerState.UNSTARTED",-1);G("YT.PlayerState.ENDED",0);G("YT.PlayerState.PLAYING",1);G("YT.PlayerState.PAUSED",2);G("YT.PlayerState.BUFFERING",3);G("YT.PlayerState.CUED",5);G("YT.get",function(a){return Ch[a]});
G("YT.scan",Fh);G("YT.subscribe",function(a,b,c){Id.subscribe(a,b,c);Eh[a]=!0;for(var d in Ch)Ch.hasOwnProperty(d)&&Nh(Ch[d],a)});
G("YT.unsubscribe",function(a,b,c){Hd(a,b,c)});
G("YT.Player",Th);Z.prototype.destroy=Z.prototype.destroy;Z.prototype.setSize=Z.prototype.setSize;Z.prototype.getIframe=Z.prototype.ja;Z.prototype.addEventListener=Z.prototype.addEventListener;Th.prototype.getVideoEmbedCode=Th.prototype.getVideoEmbedCode;Th.prototype.getOptions=Th.prototype.getOptions;Th.prototype.getOption=Th.prototype.getOption;
Dh.push(function(a){var b=a;b||(b=document);a=Ra(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=Ma(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=Ra(b);J(Qa(a,b),Wh)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Fh();var Xh=B.onYTReady;Xh&&Xh();var Yh=B.onYouTubeIframeAPIReady;Yh&&Yh();var Zh=B.onYouTubePlayerAPIReady;Zh&&Zh();}).call(this);
