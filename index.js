!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.cssVarShim=e()}(this,function(){"use strict";function t(t,e){return(e=e||document).querySelectorAll(t)}function e(t,e){return e?i(t).filter(function(t){return t.href&&-1!==t.href.indexOf(e)}):i(t)}function n(t){return i(t).reduce(function(t,e){return t.concat(e.cssRules?n(e.cssRules):e)},[])}function r(t,e,n){n=n||[];for(var r;null!==(r=e.exec(t));)n.push(r),e.lastIndex=r.index+r[0].length;return n}function o(t){return function(e){t.apply(this,e)}}function u(t,e){return e.reduce(function(t,e){return t?t[e]:void 0},t)}function c(t){return t=t||{},function(e){return t[e]=isNaN(t[e])?0:t[e]+1,t[e]}}function i(t){return[].slice.call(t)}function a(t){"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)}function f(){var t={};return function(e,n){return e?n?(t[e]=n,n):t[e]:t}}function l(t){return function(){return i(arguments).reduce(function(e,n){return n?"object"==typeof n?e+s(n,t):e+n:e},"")}}function s(t,e){if(t[e])return t[e];var n=++d;return t[e]=n,n}function p(t){return t?t.replace(/\s+/g," ").replace(/"/g,"'").trim():""}var d=0;return function(s,d){function y(t,e){var n=r(t,/--[^\s,)]+/g);return n.length&&n.forEach(function(n){var r=n[0],o=h(r,e);if(o){var u=new RegExp("var\\("+r+"(,[^)]+)?\\)");t=t.replace(u,o),t=y(t,e)}}),t}function h(t,e){for(var n=m(S(t,e));!n&&e&&e.parentElement;)e=e.parentElement,n=m(S(t,e));return n}function v(e,n,r,o){var u=[document.documentElement];o&&":root"===o||(u=t(o)),i(u).forEach(function(t){var o=t!==document.documentElement?t:null;t.style.setProperty(e,n,r||null,o)})}if(!(window.CSS&&CSS.supports&&CSS.supports("--a",0))){var S=l("wl__uuid"),m=f(),g=CSSStyleDeclaration.prototype.getPropertyValue;CSSStyleDeclaration.prototype.getPropertyValue=function(t,e){return/^--/.test(t)?h(t,e):g.call(this,t)};var E=CSSStyleDeclaration.prototype.setProperty;CSSStyleDeclaration.prototype.setProperty=function(a,f,l,h){if(/^--/.test(a)){m(S(a,h),f);var v=c();n(e(document.styleSheets,d)).forEach(function(e){var n=p(e.selectorText),c=v(n),f=u(s.getVars,[a,n,c]);if(!f){var l=r(n,/\.[\w-]+(\.[\w-]+)+/g);l.length&&(l.forEach(function(t){var e=t[0],r="."+e.slice(1).split(".").reverse().join(".");n=n.replace(e,r)}),f=u(s.getVars,[a,n,c]))}f&&f.forEach(o(function(r,o,u){var c=y(o,h);h?i(t(n)).forEach(function(t){h.contains(t)&&t.style.setProperty(r,c,u||null)}):e.style.setProperty(r,c,u||null)}))})}else E.call(this,a,f,l)},s.setVars.forEach(o(v)),a(function(){i(t('[data-style*="--"]')).forEach(function(t){var e=r(t.getAttribute("data-style"),/(--[^:]+)\s*:\s*([^;]+)/g);e.length&&e.forEach(o(function(e,n,r){t.style.setProperty(n,r,null,t)}))})})}}});
