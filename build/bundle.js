!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.svgProcessor=t():e.svgProcessor=t()}(this,(function(){return(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{default:()=>o});const o=function(e){if("string"==typeof e&&(e=(new DOMParser).parseFromString(e,"image/svg+xml").documentElement),"svg"===e.tagName)return function(e){for(var t={},o=e.getElementsByTagName("style"),r=o.length,n=function(e){var r=o[e],n=Array.from(r.sheet.rules),s="";n.forEach((function(e){var o=e.selectorText,r=o+"_"+Math.random().toString(36).substr(2,4);t[o]=r,e.selectorText=r,s+=e.cssText})),r.innerHTML=s},s=0;s<r;s++)n(s);console.log({sc:o[0]});var c=e.getElementsByTagName("*"),a=c.length,f=function(e){var o=c[e].classList;o.forEach((function(e){"."+e in t&&o.replace(e,t["."+e].slice(1))}))};for(s=0;s<a;s++)f(s);return console.log(e),e}(e).outerHTML;throw new Error("Expected svg element, got "+e.tagName+" element.")};return t.default})()}));