!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){var e=document.querySelector(".popup-dialog-menu");document.addEventListener("click",(function(t){t.target.matches(".menu__icon")&&(e.style.transform="translate3d(0, 0, 0)",e.style.opacity="1"),(t.target.matches(".close-menu")||t.target.matches(".popup-menu-nav__item a"))&&(e.style.transform=null,e.style.opacity="0")}));document.addEventListener("click",(function(e){var t;(e.target.matches(".button-footer a")||e.target.matches(".popup-menu-nav__item a"))&&(e.preventDefault(),t=e.target.getAttribute("href"),document.querySelector("".concat(t)).scrollIntoView({block:"center",behavior:"smooth"}))}))},o=function(){var e=document.querySelector(".popup-repair-types"),t=e.querySelectorAll(".close");document.addEventListener("click",(function(n){(n.target.matches(".no-overflow")||n.target.matches(".link-list-repair a"))&&(document.querySelector(".popup-dialog-menu").style.transform=null,document.querySelector(".popup-dialog-menu").style.opacity="0",e.style.visibility="visible"),t.forEach((function(t){n.target===t&&(e.style.visibility="hidden")}))}))},i=function(){var e=document.querySelector(".popup-privacy"),t=e.querySelector(".close");document.addEventListener("click",(function(n){n.target.matches(".link-privacy")?(e.style.visibility="visible",document.body.style.overflow="hidden"):n.target===t&&(e.style.visibility="hidden",document.body.style.overflow="auto")}))},l=function(){var e=document.querySelectorAll(".formula-item-popup"),t=document.querySelector(".desktop-hide").querySelectorAll(".formula-item-popup"),n=document.querySelector(".wrapper_small").querySelectorAll(".formula-item"),r=document.querySelectorAll(".formula-slider__slide"),o=document.querySelector("style");r.forEach((function(n,r){n.addEventListener("mouseover",(function(){console.log(e[r]),t[r].style.visibility="visible",t[r].style.opacity="1"})),n.addEventListener("mouseout",(function(){t[r].style.visibility=null,t[r].style.opacity=null,document.body.clientWidth>1024&&(o.textContent=o.textContent+"\n        .formula-item-popup:before {\n            transform: rotateZ(360deg);\n        }")}))})),n.forEach((function(n,r){n.addEventListener("mouseover",(function(){e[r].style.visibility="visible",e[r].style.opacity="1",e[r].style.top=null,e[r].getBoundingClientRect().top<0&&(e[r].style.top="90px",o.textContent=o.textContent+"\n        .formula-item-popup:before {\n            transform: rotateZ(180deg);\n        }")})),n.addEventListener("mouseout",(function(){e[r].style.visibility=null,e[r].style.opacity=null,t[r].style.visibility=null,t[r].style.opacity=null,document.body.clientWidth>1024&&(o.textContent=o.textContent+"\n        .formula-item-popup:before {\n            transform: rotateZ(360deg);\n        }")}))}))},s=function(){var e=document.querySelector(".repair-types-slider").children,t=document.querySelector(".repair-types-nav").querySelectorAll(".repair-types-nav__item"),n=document.querySelector(".repair-types-slider-wrap").querySelector(".slider-counter-content__current"),r=document.querySelector("style"),o=document.querySelector(".repair-types-slider-wrap").querySelector(".slider-counter-content__total");r.textContent=r.textContent+"\n        .slide-portfolio-active {\n            display: block !important; \n        }\n        .repair-types-slider__slide img {\n            display: none;\n        }\n        @media(max-width: 1080px) {\n        .nav-list-repair {\n          overflow:hidden;\n        }\n    }";var i=0,l=e[0],s=l.children.length,c=l.querySelectorAll("img");o.textContent=s,c[0].classList.add("slide-portfolio-active");var a=function(n){document.body.clientWidth<1024&&(r.textContent=r.textContent+"\n      @media(max-width: 1080px) {\n      .nav-list-repair {\n        transform: translateX(-".concat(t[n].offsetLeft,"px);\n      };\n    }")),t[n].classList.add("active"),l=e[n],(c=l.querySelectorAll("img"))[0].classList.add("slide-portfolio-active"),s=l.children.length,i=0},u=function(e){t[e].classList.remove("active")};document.addEventListener("click",(function(e){if(e.target.closest(".repair-types-nav")||e.target.closest("#nav-arrow-repair-right_base")||e.target.closest("#nav-arrow-repair-left_base")){if(e.target.closest(".repair-types-nav")&&(c[i].classList.remove("slide-portfolio-active"),t.forEach((function(t,n){e.target===t?(c[i].classList.remove("slide-portfolio-active"),a(n)):u(n)}))),e.target.closest("#nav-arrow-repair-right_base")){var r=0;c[i].classList.remove("slide-portfolio-active"),t.forEach((function(e,t){e.classList.contains("active")&&(r=t)})),r>=t.length-1?(a(r=0),u(t.length-1)):(a(r+1),u(r))}if(e.target.closest("#nav-arrow-repair-left_base")){var d=0;c[i].classList.remove("slide-portfolio-active"),t.forEach((function(e,t){e.classList.contains("active")&&(d=t)})),d<=0?(d=t.length-1,u(0),a(d)):(u(d),a(d-1))}n.textContent=i+1,o.textContent=s}var p;(e.target.closest("#repair-types-arrow_right")||e.target.closest("#repair-types-arrow_left"))&&(s=l.children.length,c=l.querySelectorAll("img"),p="slide-portfolio-active",c[i].classList.remove(p),e.target.closest("#repair-types-arrow_right")?i++:e.target.closest("#repair-types-arrow_left")&&i--,i>=c.length&&(i=0),i<0&&(i=c.length-1),function(e,t,n){e[t].classList.add(n)}(c,i,"slide-portfolio-active"),n.textContent=i+1,o.textContent=s)}))},c=function(){var e=document.querySelectorAll(".transparency-item"),t=document.querySelectorAll(".transparency-item__img"),n=document.querySelectorAll(".popup-transparency-slider__slide"),r=document.querySelector(".popup-transparency"),o=r.querySelector(".close"),i=r.querySelector(".desktop-hide"),l=r.querySelector(".slider-counter-content"),s=document.querySelector("style"),c=0;s.textContent=s.textContent+"\n    .popup-transparency-slider__slide {\n        display:none;\n    }\n    @media(max-width: 1080px) {\n        .transparency-item {\n            display: none;\n        };\n    }\n    ",e[0].style.display="flex";var a=function(e,t){e[t].style.display="flex"},u=function(e,t){e===n?e[t].style.display="none":e[t].style.cssText="@media(max-width: 1080px) {\n        .transparency-item {\n            display: none;\n        };\n    }"};document.addEventListener("click",(function(s){(s.target.closest("#transparency-arrow_right")||s.target.closest("#transparency-arrow_left"))&&(u(n,c),u(e,c),s.target.closest("#transparency-arrow_right")?c++:s.target.closest("#transparency-arrow_left")&&c--,c>=e.length&&(c=0),c<0&&(c=e.length-1),a(e,c),a(n,c)),t.forEach((function(e,t){s.target===e&&(r.style.visibility="visible",n[t].style.display="flex",c=t),s.target!==o&&s.target!==i||(r.style.visibility="hidden",n[t].style.display="none")})),(s.target.closest("#transparency_right")||s.target.closest("#transparency_left"))&&(u(e,c),u(n,c),s.target.closest("#transparency_right")?c++:s.target.closest("#transparency_left")&&c--,c>=n.length&&(c=0),c<0&&(c=n.length-1),a(n,c),a(e,c)),l.textContent=c+1}))};function a(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=function(){var e=document.querySelector(".designs-slider").children,t=document.querySelector("style"),n=document.querySelectorAll(".preview-block"),r=document.querySelector(".designs-slider-wrap").querySelector(".slider-counter-content__current"),o=document.getElementById("designs-list").children,i=document.querySelector(".designs-slider-wrap").querySelector(".slider-counter-content__total");a(e).forEach((function(e){e.style.display="none"})),e[0].style.display="block";var l=0;t.textContent=t.textContent+"\n        @media(max-width: 1080px) {\n            .preview-block {\n                display:none!important;\n                visibility: hidden!important;\n            }\n        #designs-list {\n          overflow:hidden;\n        }\n    }",i.textContent=e.length;document.addEventListener("click",(function(i){var s,c;s=e,n[c=l].style.display="none",n[c].style.visibility="hidden",s[c].style.display="none",o[c].classList.remove("active"),i.target.closest("#design_right")||i.target.closest("#nav-arrow-designs_right")?l++:(i.target.closest("#design_left")||i.target.closest("#nav-arrow-designs_left"))&&l--,a(o).forEach((function(e,t){i.target===e&&(l=t)})),l>=e.length&&(l=0),l<0&&(l=e.length-1),function(e,r){n[r].classList.add("active"),n[r].style.visibility="visible",n[r].style.display="flex",document.body.clientWidth<1024&&(t.textContent=t.textContent+"\n      @media(max-width: 1080px) {\n      .designs-nav__item {\n        transform: translateX(-".concat(o[r].offsetWidth*r,"px);\n      };\n    }")),e[r].style.display="flex",o[r].classList.add("active")}(e,l),r.textContent=l+1,i.target.closest(".preview-block__item")&&function(e,t,n){n=(n=n.replace(/_preview./g,".")).replace(/_prevew./g,"."),e[t].querySelector("img").setAttribute("src","".concat(n))}(e,l,i.target.closest(".preview-block__item").querySelector("img").getAttribute("src"))}))},p=function(){var e=document.querySelector("#problems").querySelector(".wrapper_middle").querySelectorAll(".problems-item-popup"),t=document.querySelector("#problems").querySelector(".wrapper_small").querySelectorAll(".problems-item-popup"),n=document.querySelector("#problems").querySelector(".wrapper_middle").querySelectorAll(".problems-item"),r=document.querySelector("#problems").querySelector(".wrapper_small").querySelectorAll(".problems-item"),o=document.querySelector("style");r.forEach((function(n,r){n.addEventListener("mouseover",(function(){console.log(e[r]),t[r].style.visibility="visible",t[r].style.opacity="1"})),n.addEventListener("mouseout",(function(){t[r].style.visibility=null,t[r].style.opacity=null,document.body.clientWidth>1024&&(o.textContent=o.textContent+"\n                .problems-item-popup:before {\n                    transform: rotateZ(360deg);\n                }\n                .problems-item-popup-1:before {\n                    transform: rotateZ(180deg);\n                }")}))})),n.forEach((function(n,r){n.addEventListener("mouseover",(function(){e[r].style.visibility="visible",e[r].style.opacity="1",e[r].style.top=null,e[r].getBoundingClientRect().top<0&&(e[r].style.top="90px",o.textContent=o.textContent+"\n        .problems-item-popup:before {\n            transform: rotateZ(180deg);\n        }\n        .problems-item-popup-1:before {\n                    transform: rotateZ(180deg);\n                }")})),n.addEventListener("mouseout",(function(){e[r].style.visibility=null,e[r].style.opacity=null,t[r].style.visibility=null,t[r].style.opacity=null,document.body.clientWidth>1024&&(o.textContent=o.textContent+"\n        .problems-item-popup:before {\n            transform: rotateZ(360deg);\n        }\n        .problems-item-popup-1:before {\n                    transform: rotateZ(180deg);\n                }")}))}))},y=function(){var e=document.querySelector(".popup-consultation");document.addEventListener("click",(function(t){t.target.matches(".button_wide")&&(e.style.visibility="visible",document.body.style.overflow="hidden"),t.target.matches(".close-consultation")&&(e.style.visibility="hidden",document.body.style.overflow="auto")}))},m=function(){var e=document.querySelector(".accordion").querySelectorAll(".title_block"),t=document.querySelector(".accordion").querySelectorAll(".msg");e.forEach((function(n,r){e[r].classList.remove("msg-active"),t[r].classList.remove(".msg-active")})),document.addEventListener("click",(function(n){e.forEach((function(r,o){n.target===r&&(e[o].classList.toggle("msg-active"),t[o].classList.toggle(".msg-active"))}))}))};(function(){var e=document.querySelector(".header-contacts__arrow"),t=document.querySelector(".header-contacts__phone-number-accord"),n=t.querySelector(".header-contacts__phone-number"),r=document.createElement("style");document.querySelector("head").append(r),r.textContent=r.textContent+"\n    .position {\n        position: relative!important;\n    }\n    .opacity {\n        opacity: 1!important;\n    }\n    .arrow-rotate {\n        transform: rotateZ(180deg) !important;\n    }\n    ",e.addEventListener("click",(function(){t.classList.toggle("position"),n.classList.toggle("opacity"),e.classList.toggle("arrow-rotate")}))})(),r(),o(),i(),l(),s(),c(),d(),p(),y(),m()}]);