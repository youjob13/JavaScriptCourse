!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){var e=document.querySelector(".popup-dialog-menu");document.addEventListener("click",(function(t){t.target.matches(".menu__icon")&&(e.style.transform="translate3d(0, 0, 0)",e.style.opacity="1"),t.target.matches(".close-menu")&&(e.style.transform=null,e.style.opacity="0")}))};(function(){var e=document.querySelector(".header-contacts__arrow"),t=document.querySelector(".header-contacts__phone-number-accord"),n=t.querySelector(".header-contacts__phone-number"),r=document.createElement("style");document.querySelector("head").append(r),r.textContent="\n    .position {\n        position: relative!important;\n    }\n    .opacity {\n        opacity: 1!important;\n    }\n    .arrow-rotate {\n        transform: rotateZ(180deg) !important;\n    }\n    ",e.addEventListener("click",(function(){t.classList.toggle("position"),n.classList.toggle("opacity"),e.classList.toggle("arrow-rotate")}))})(),r()}]);