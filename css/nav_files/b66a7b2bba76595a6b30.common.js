/*!
 * Genesys Predictive Engagement v0.0.0 - 821
 * Copyright (c) 2014-2021 Genesys. All rights reserved.
 * 
 * https://all.docs.genesys.com/ATC/Current/Developers
 */
(window.altcldjsonp=window.altcldjsonp||[]).push([[5],{205:function(t,n,e){"use strict";e.r(n);var a=function(t,n){var e,a=0;return function(){for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];var o=Date.now();null!==e&&o-a<=n&&clearTimeout(e),a=o,e=setTimeout((function(){return t.apply(void 0,i)}),n)}};n.default=function(t,n,e,r){var i=t.addEventListener,u=t.dispatchEvent,o=t.history,c=t.location,l=Object.assign({isUrlChange:function(t,n){return n!==t},onUrlChange:function(){n("pageview")},delay:100},e),p=a(l.onUrlChange,l.delay),s="",f=function(){var t=c.href;l.isUrlChange(s,t)&&(p(t),s=t)},h=a(f,150);if(f(),o.pushState&&i){var v,d=o.pushState,w=o.replaceState;o.pushState=(v=d,function(t,n,e){var a=v.apply(this,[t,n,e]);return u(new Event("pushState")),h(),a}),o.replaceState=function(t){return function(n,e,a){var r=t.apply(this,[n,e,a]);return u(new Event("replaceState")),h(),r}}(w),i("popstate",(function(){h()})),r()}}}}]);