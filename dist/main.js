!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.querySelector(".header-contacts__arrow"),t=document.querySelector(".header-contacts__phone-number-accord"),n=t.querySelector(".header-contacts__phone-number"),o=document.createElement("style");document.querySelector("head").append(o),o.textContent=o.textContent+"\n    .position {\n        position: relative!important;\n    }\n    .opacity {\n        opacity: 1!important;\n    }\n    .arrow-rotate {\n        transform: rotateZ(180deg) !important;\n    }\n    ",e.addEventListener("click",(function(){t.classList.toggle("position"),n.classList.toggle("opacity"),e.classList.toggle("arrow-rotate")}))},r=function(){var e=document.querySelector(".popup-dialog-menu"),t=document.querySelector("style");t.textContent=t.textContent+"\n    .popup-dialog-menu {\n      opacity:0;\n    }\n    ",document.addEventListener("click",(function(t){t.target.matches(".menu__icon")&&(e.style.transform="translate3d(0, 0, 0)",e.style.opacity="1"),(t.target.matches(".close-menu")||t.target.matches(".popup-menu-nav__item a"))&&(e.style.transform=null,e.style.opacity="0")}));document.addEventListener("click",(function(e){var t;(e.target.matches(".button-footer a")||e.target.matches(".popup-menu-nav__item a"))&&(e.preventDefault(),t=e.target.getAttribute("href"),document.querySelector("".concat(t)).scrollIntoView({block:"center",behavior:"smooth"}))}))},i=function(e){e.style.visibility="visible",document.body.style.overflow="hidden"},l=function(e){e.style.visibility="hidden",document.body.style.overflow="auto"},s=function(){var e=document.querySelector(".popup-repair-types"),t=e.querySelectorAll(".close");document.addEventListener("click",(function(n){(n.target.matches(".no-overflow")||n.target.matches(".link-list-repair a"))&&(document.querySelector(".popup-dialog-menu").style.transform=null,document.querySelector(".popup-dialog-menu").style.opacity="0",i(e)),t.forEach((function(t){n.target===t&&l(e)}))}))};function a(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(e);function o(e){var n=e.keyCode,o=t,r=o.replace(/\D/g,""),i=this.value.replace(/\D/g,""),l=0,s=o.replace(/[_\d]/g,(function(e){return l<i.length?i.charAt(l++)||r.charAt(l):e}));-1!=(l=s.indexOf("_"))&&(s=s.slice(0,l));var a=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=s),"blur"==e.type&&this.value.length<5&&(this.value="")}var r,i=a(n);try{for(i.s();!(r=i.n()).done;){var l=r.value;l.addEventListener("input",o),l.addEventListener("focus",o),l.addEventListener("blur",o)}}catch(e){i.e(e)}finally{i.f()}},u=function(){var e=document.querySelector(".popup-privacy"),t=e.querySelector(".close"),n=e.querySelector(".desktop-hide");document.addEventListener("click",(function(o){o.target.matches(".link-privacy")?i(e):o.target!==t&&o.target!==n||l(e)}))},p=function(){var e=document.querySelectorAll(".formula-item-popup"),t=document.querySelector(".wrapper_small").querySelectorAll(".formula-item"),n=document.querySelectorAll(".formula-slider__slide"),o=document.querySelector("style"),r=0;o.textContent=o.textContent+"\n        .formula-slider__slide {\n            opacity:0.8;\n        }\n    @media (max-width: 1024px) {\n        .formula-item {\n            max-width: 340px;\n            display: none;\n        }\n    }",n[0].style.display="flex",t.forEach((function(n,r){n.addEventListener("mouseover",(function(){t[r].classList.add("active-item"),e[r].style.top=null,e[r].getBoundingClientRect().top<0&&(e[r].style.top="90px",o.textContent=o.textContent+"\n                @media (min-width: 1024px) {\n                    .formula-item-popup:before {\n                        transform: rotateZ(180deg);\n                    }\n                }")})),n.addEventListener("mouseout",(function(){t[r].classList.remove("active-item"),document.body.clientWidth>1024&&(o.textContent=o.textContent+"\n                @media (min-width: 1024px) {\n                    .formula-item-popup:before {\n                        transform: rotateZ(360deg);\n                    }\n                }")}))})),n.forEach((function(e,t){e.addEventListener("mouseover",(function(){return n[t].classList.add("active-item")})),e.addEventListener("mouseout",(function(){return n[t].classList.remove("active-item")}))}));document.addEventListener("click",(function(e){(e.target.closest("#formula-arrow_left")||e.target.closest("#formula-arrow_right"))&&(function(e,t){e[t].style.display="none"}(n,r),e.target.closest("#formula-arrow_right")&&r++,e.target.closest("#formula-arrow_left")&&r--,r>=n.length&&(r=0),r<0&&(r=n.length-1),function(e,t){e[t].style.display="flex"}(n,r))}))},m=function(){var e=document.querySelector(".repair-types-slider").children,t=document.querySelector(".repair-types-nav").querySelectorAll(".repair-types-nav__item"),n=document.querySelector(".repair-types-slider-wrap").querySelector(".slider-counter-content__current"),o=document.querySelector("style"),r=document.querySelector(".repair-types-slider-wrap").querySelector(".slider-counter-content__total");o.textContent=o.textContent+"\n        .slide-portfolio-active {\n            display: block !important; \n        }\n        .repair-types-slider__slide img {\n            display: none;\n        }\n        @media(max-width: 1080px) {\n        .nav-list-repair {\n          overflow:hidden;\n        }\n    }";var i=0,l=e[0],s=l.children.length,a=l.querySelectorAll("img");r.textContent=s,a[0].classList.add("slide-portfolio-active");var c=function(n){document.body.clientWidth<1024&&(o.textContent=o.textContent+"\n      @media(max-width: 1080px) {\n      .nav-list-repair {\n        transform: translateX(-".concat(t[n].offsetLeft,"px);\n      };\n    }")),t[n].classList.add("active"),l=e[n],(a=l.querySelectorAll("img"))[0].classList.add("slide-portfolio-active"),s=l.children.length,i=0},d=function(e){t[e].classList.remove("active")};document.addEventListener("click",(function(e){if(e.target.closest(".repair-types-nav__item")||e.target.closest("#nav-arrow-repair-right_base")||e.target.closest("#nav-arrow-repair-left_base")){if(e.target.closest(".repair-types-nav__item")&&(a[i].classList.remove("slide-portfolio-active"),t.forEach((function(t,n){e.target===t?(a[i].classList.remove("slide-portfolio-active"),c(n)):d(n)}))),e.target.closest("#nav-arrow-repair-right_base")){var o=0;a[i].classList.remove("slide-portfolio-active"),t.forEach((function(e,t){e.classList.contains("active")&&(o=t)})),o>=t.length-1?(c(o=0),d(t.length-1)):(c(o+1),d(o))}if(e.target.closest("#nav-arrow-repair-left_base")){var u=0;a[i].classList.remove("slide-portfolio-active"),t.forEach((function(e,t){e.classList.contains("active")&&(u=t)})),u<=0?(u=t.length-1,d(0),c(u)):(d(u),c(u-1))}n.textContent=i+1,r.textContent=s}(e.target.closest("#repair-types-arrow_right")||e.target.closest("#repair-types-arrow_left"))&&(s=l.children.length,function(e,t,n){e[t].classList.remove(n)}(a=l.querySelectorAll("img"),i,"slide-portfolio-active"),e.target.closest("#repair-types-arrow_right")?i++:e.target.closest("#repair-types-arrow_left")&&i--,i>=a.length&&(i=0),i<0&&(i=a.length-1),function(e,t,n){e[t].classList.add(n)}(a,i,"slide-portfolio-active"),n.textContent=i+1,r.textContent=s)}))},f=function(){var e=document.querySelectorAll(".transparency-item"),t=document.querySelectorAll(".transparency-item__img"),n=document.querySelectorAll(".popup-transparency-slider__slide"),o=document.querySelector(".popup-transparency"),r=o.querySelector(".close"),s=o.querySelector(".desktop-hide"),a=o.querySelector(".slider-counter-content"),c=document.querySelector("style"),d=0;c.textContent=c.textContent+"\n    .popup-transparency-slider__slide {\n        display:none;\n    }\n    @media(max-width: 1080px) {\n        .transparency-item {\n            display: none;\n        };\n    }\n    ",e[0].style.display="flex";var u=function(e,t){e[t].style.display="flex"},p=function(e,t){e===n?e[t].style.display="none":e[t].style.cssText="@media(max-width: 1080px) {\n        .transparency-item {\n            display: none;\n        };\n    }"};document.addEventListener("click",(function(c){(c.target.closest("#transparency-arrow_right")||c.target.closest("#transparency-arrow_left"))&&(p(n,d),p(e,d),c.target.closest("#transparency-arrow_right")?d++:c.target.closest("#transparency-arrow_left")&&d--,d>=e.length&&(d=0),d<0&&(d=e.length-1),u(e,d),u(n,d)),t.forEach((function(e,t){c.target===e&&(i(o),n[t].style.display="flex",d=t),c.target!==r&&c.target!==s||(l(o),n[t].style.display="none")})),(c.target.closest("#transparency_right")||c.target.closest("#transparency_left"))&&(p(e,d),p(n,d),c.target.closest("#transparency_right")?d++:c.target.closest("#transparency_left")&&d--,d>=n.length&&(d=0),d<0&&(d=n.length-1),u(n,d),u(e,d)),a.textContent="".concat(d+1,"/").concat(e.length)}))},y=function(){var e=document.querySelector("#problems").querySelector(".wrapper_middle").querySelectorAll(".problems-item-popup"),t=document.querySelector("#problems").querySelector(".wrapper_middle").querySelectorAll(".problems-item__icon-inner"),n=document.querySelectorAll(".svg-wrap"),o=document.querySelector("#problems").querySelector(".wrapper_small").querySelectorAll(".problems-item-popup"),r=document.querySelector("#problems").querySelector(".wrapper_middle").querySelectorAll(".problems-item"),i=document.querySelector("#problems").querySelector(".wrapper_small").querySelectorAll(".problems-item"),l=document.querySelector("style"),s=0;l.textContent=l.textContent+"\n        .problems-item {\n            opacity: 0.8;\n        }\n        @media (max-width: 1024px) {\n            .problems-item {\n                max-width: 340px;\n                display: none;\n            }\n        }\n        @media (min-width: 1024px) {\n            .problems-item-popup-1 {\n                top:-340px;\n            }\n            .problems-item-popup-1:before {\n                transform: rotateZ(360deg);\n            }\n        .svg-wrap {\n            transition: .2s;\n        }\n    }",i[0].style.display="flex",i.forEach((function(e){e.classList.remove("active-item")}));document.addEventListener("click",(function(e){(e.target.closest("#problems-arrow_right")||e.target.closest("#problems-arrow_left"))&&(function(e,t){e[t].style.display="none"}(i,s),e.target.closest("#problems-arrow_right")&&s++,e.target.closest("#problems-arrow_left")&&s--,s>=i.length&&(s=0),s<0&&(s=i.length-1),function(e,t){e[t].style.display="flex"}(i,s))})),i.forEach((function(e,t){e.addEventListener("mouseover",(function(){o[t].classList.add("active-item"),i[t].classList.add("active-item"),i[t].style.opacity="1"})),e.addEventListener("mouseout",(function(){o[t].classList.remove("active-item"),i[t].classList.remove("active-item"),i[t].style.opacity="0.8"}))})),r.forEach((function(o,i){o.addEventListener("mouseover",(function(){t[i].classList.add("active-item"),n[i].style.transform="rotate(45deg)",e[i].style.visibility="visible",e[i].style.opacity="1",r[i].style.opacity="1",r[i].style.visibility="visible",e[i].style.top=null,r[i].classList.add("active-item"),e[i].getBoundingClientRect().top<0&&(e[i].style.top="90px",l.textContent=l.textContent+"@media (min-width: 1024px) {\n            .problems-item-popup:before {\n                transform: rotateZ(180deg);\n            }\n        }")})),o.addEventListener("mouseout",(function(){t[i].classList.remove("active-item"),n[i].style.transform="rotate(0deg)",e[i].style.visibility=null,e[i].style.opacity=null,r[i].style.opacity="0.8",r[i].style.visibility=null,r[i].classList.remove("active-item"),document.body.clientWidth>1024&&(l.textContent=l.textContent+"\n        @media (min-width: 1024px) {\n            .problems-item-popup:before {\n                transform: rotateZ(360deg);\n            }\n        }")}))}))},g=function(){var e=document.querySelector(".popup-consultation");document.addEventListener("click",(function(t){t.target.matches(".button_wide")&&i(e),t.target.matches(".close-consultation")&&l(e)}))},v=function(){var e=document.querySelector(".accordion").querySelectorAll(".title_block");e.forEach((function(t,n){e[n].classList.remove("msg-active")})),document.addEventListener("click",(function(t){e.forEach((function(n,o){t.target===n?e[o].classList.toggle("msg-active"):e[o].classList.remove("msg-active")}))}))},h=function(){var e=document.querySelector(".scheme-slider").querySelectorAll(".scheme-slider__slide"),t=document.querySelectorAll(".scheme-description-block"),n=(document.getElementById("scheme-list"),document.getElementById("scheme-list").querySelectorAll(".scheme-nav__item")),o=document.querySelector("style"),r=0;o.textContent=o.textContent+".scheme-slider__slide {\n            display: none;\n        }",e[0].style.display="block";var i=function(e,r){document.body.clientWidth<1024&&(o.textContent=o.textContent+"\n      @media(max-width: 1080px) {\n      #scheme-list {\n        transform: translateX(-".concat(n[r].offsetLeft,"px);\n      };\n    }")),e[r].style.display="block",n[r].classList.add("active"),t[r].classList.add("visible-content-block")},l=function(e,o){e[o].style.display="none",n[o].classList.remove("active"),t[o].classList.remove("visible-content-block")};document.addEventListener("click",(function(t){t.target.closest("#scheme-list")&&n.forEach((function(n,o){t.target===n?i(e,r=o):l(e,o)})),(t.target.closest("#nav-arrow-scheme_left")||t.target.closest("#nav-arrow-scheme_right"))&&(l(e,r),t.target.closest("#nav-arrow-scheme_left")&&r--,t.target.closest("#nav-arrow-scheme_right")&&r++,r>=e.length&&(r=0),r<0&&(r=e.length-1),i(e,r))}))},_=function(){var e=document.getElementById("reviews").querySelectorAll(".reviews-slider__slide"),t=document.getElementById("reviews").querySelector(".slider-dots-reviews").querySelectorAll(".dot-reviews"),n=document.querySelector("style"),o=0;n.textContent=n.textContent+"\n    .reviews-slider__slide {\n        display:none;\n    }\n    .slider-dots-reviews {\n        display:flex;\n    }\n    ",e[0].style.display="flex";var r=function(e,n){e[n].style.display="flex",t[n].classList.add("dot_active")},i=function(e,n){e[n].style.display="none",t[n].classList.remove("dot_active")};document.addEventListener("click",(function(n){(n.target.closest("#reviews-arrow_right")||n.target.closest("#reviews-arrow_left"))&&(i(e,o),n.target.closest("#reviews-arrow_right")&&o++,n.target.closest("#reviews-arrow_left")&&o--,o>=e.length&&(o=0),o<0&&(o=e.length-1),r(e,o)),n.target.closest(".dot-reviews")&&t.forEach((function(t,l){n.target===t?r(e,o=l):i(e,l)}))}))},b=function(){var e=document.querySelector(".designs-slider").children,t=document.querySelector(".popup-design-slider").querySelectorAll("img"),n=document.querySelectorAll(".popup-design-text"),o=document.getElementById("designs-list").querySelectorAll(".designs-nav__item"),r=document.getElementById("nav-list-popup-designs").querySelectorAll(".designs-nav__item_popup"),i=document.querySelectorAll(".preview-block"),l=document.querySelector("#designs-counter").querySelector(".slider-counter-content__current"),s=document.querySelector("#designs-counter").querySelector(".slider-counter-content__total"),a=document.getElementById("popup-designs-counter").querySelector(".slider-counter-content__current"),c=document.getElementById("popup-designs-counter").querySelector(".slider-counter-content__total"),d=document.querySelector(".popup-design"),u=d.querySelector(".close"),p=document.querySelector(".popup-design-tab").querySelector(".close"),m=document.querySelector("style"),f=0,y=e[f].querySelectorAll(".designs-slider__style-slide"),g=i[f].querySelectorAll(".preview-block__item"),v=0;m.textContent=m.textContent+".designs-slider__style-slide {\n        display:none;\n    }\n        @media(max-width: 1080px) {\n            #designs-list {\n                overflow:hidden;\n            }\n        }",y[0].style.display="flex";var h=function(e,t,o,r){document.body.clientWidth<1024&&(m.textContent=m.textContent+"\n    @media(max-width: 1080px) {\n      #nav-list-popup-designs {\n            transform: translateX(-".concat(o[t].offsetLeft,"px);\n      }\n        #designs-list {\n            transform: translateX(-").concat(o[t].offsetLeft,"px);\n        };\n    }")),e[t].style.display="flex",o[t].classList.add("active"),r[t].classList.add("active"),i[t].classList.add("visible"),n[t].classList.add("visible-content-block")},_=function(e,t,o,r){e[t].style.display="none",o[t].classList.remove("active"),r[t].classList.remove("active"),i[t].classList.remove("visible"),n[t].classList.remove("visible-content-block")},b=function(e,n){var o=g[n].querySelector(".preview-block__item-inner");e[n].style.display="flex",o.classList.add("preview_active"),t[n].setAttribute("src","".concat(e[n].querySelector("img").getAttribute("src")))},x=function(e,n){var o=g[n].querySelector(".preview-block__item-inner");e[n].style.display="none",o.classList.remove("preview_active"),t[n].removeAttribute("src")},S=function(){y=e[f].querySelectorAll(".designs-slider__style-slide"),b(y,v=0)},w=function(t,n,o){x(y,v),n.forEach((function(r,i){t===r?h(e,f=i,n,o):_(e,i,n,o)})),S(),s.textContent=y.length,l.textContent=1,c.textContent=y.length,a.textContent=1},q=function(t,n,o){x(y,v),_(e,f,n,o),(t.closest("#nav-arrow-designs_right")||"nav-arrow-popup-designs_right"===t.id)&&f++,(t.closest("#nav-arrow-designs_left")||"nav-arrow-popup-designs_left"===t.id)&&f--,f>=e.length&&(f=0),f<0&&(f=e.length-1),h(e,f,n,o),S(),s.textContent=y.length,l.textContent=1,c.textContent=y.length,a.textContent=1};document.addEventListener("click",(function(n){n.target.matches(".designs-nav__item_base")&&w(n.target,o,r),(n.target.closest("#nav-arrow-designs_right")||n.target.closest("#nav-arrow-designs_left"))&&q(n.target,o,r),(n.target.closest(".preview-block__item")||n.target.closest("#design_right")||n.target.closest("#design_left")||n.target.closest("#popup_design_left")||n.target.closest("#popup_design_right"))&&(y=e[f].querySelectorAll(".designs-slider__style-slide"),g=i[f].querySelectorAll(".preview-block__item"),x(y,v),n.target.closest(".preview-block__item")&&g.forEach((function(e,t){n.target.closest(".preview-block__item")===e&&(v=t)})),(n.target.closest("#design_right")||n.target.closest("#popup_design_right"))&&v++,(n.target.closest("#design_left")||n.target.closest("#popup_design_left"))&&v--,v>=y.length&&(v=0),v<0&&(v=y.length-1),b(y,v),l.textContent=v+1,a.textContent=v+1),n.target.closest(".link-list-designs")&&(d.style.visibility="visible",document.body.style.overflow="hidden",t[index].setAttribute("src","".concat(elem[index].querySelector("img").getAttribute("src")))),n.target!==u&&n.target!==p||(d.style.visibility="hidden",document.body.style.overflow="auto"),n.target.closest(".designs-nav__item_popup")&&(w(n.target,r,o),moveSlidesPopup(n.target)),(n.target.closest("#nav-arrow-popup-designs_right")||n.target.closest("#nav-arrow-popup-designs_left"))&&q(n.target,r,o)}))};function x(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw i}}}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var q=function(){function e(t){var n=t.main,o=t.wrap,r=t.next,i=t.prev,l=t.position,s=void 0===l?0:l,a=t.slidesToShow,c=void 0===a?2:a,d=t.infinity;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.slides=document.querySelector(o).children,this.next=document.querySelector(r),this.prev=document.querySelector(i),this.slidesToShow=c,this.options={infinity:d,position:s,widthSlide:Math.floor(100/this.slidesToShow)}}var t,n,o;return t=e,(n=[{key:"init",value:function(){this.addClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider()}},{key:"addClass",value:function(){this.main.classList.add("wrapper"),this.wrap.classList.add("partners-slider");var e,t=x(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("partners-slider__slide")}catch(e){t.e(e)}finally{t.f()}}},{key:"addStyle",value:function(){var e=document.createElement("style");e.textContent=e.textContent+"\n      #partners .wrapper {\n        overflow: hidden !important;\n      }\n      @media (max-width: 1024px) {\n        .partners-slider__slide {\n            max-width: 360px;\n            min-height: auto;\n        }\n      }\n      .partners-slider {\n        display: flex !important;\n        transition: transform .5s !important;\n        will-change: transform !important;\n      }\n      .partners-slider__slide {\n        flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n        margin: auto 0 !important;\n      }\n    "),document.head.append(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0?(this.options.position=this.slides.length-this.slidesToShow,this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)")):this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}}])&&w(t.prototype,n),o&&w(t,o),e}(),L=function(){var e=document.querySelectorAll(".portfolio-slider__slide"),t=document.querySelector("#portfolio").querySelector(".desktop-hide").querySelectorAll(".portfolio-slider__slide-frame"),n=(document.querySelector("#portfolio").querySelector(".mobile-hide").querySelectorAll(".portfolio-slider__slide-frame"),document.getElementById("portfolio-arrow_left")),o=document.getElementById("portfolio-arrow_right"),r=document.querySelector(".popup-portfolio"),s=document.getElementById("portfolio-counter").querySelector(".slider-counter-content__total"),a=document.getElementById("portfolio-counter").querySelector(".slider-counter-content__current"),c=document.querySelectorAll(".popup-portfolio-slider__slide"),d=document.querySelectorAll(".popup-portfolio-text"),u=document.getElementById("popup-portfolio-counter").querySelector(".slider-counter-content__current"),p=document.getElementById("popup-portfolio-counter").querySelector(".slider-counter-content__total"),m=document.querySelector("style"),f=0,y=0,g=0;p.textContent=c.length,m.textContent=m.textContent+"   .portfolio-slider__slide {\n            transition: transform .5s!important;\n            will-change: transform!important;\n        }\n         @media (max-width: 575px) {\n           .portfolio-slider__slide {\n            display: none;\n        }\n           .portfolio-slider__slide-frame:first-child {\n            display:flex;\n          }\n          .portfolio-slider__slide-frame {\n            display:none;\n          }\n          #portfolio-arrow_right {\n            display:flex;\n          }\n          #portfolio-counter {\n            z-index:999;\n          }\n        }\n       \n        ",c[0].style.display="block",d[0].style.display="block";var v=function(e,t){e[t].style.display="none",u.textContent=t+1},h=function(e,t){e[t].style.display="flex",u.textContent=t+1};document.addEventListener("click",(function(u){(u.target.closest("#portfolio-arrow_left")||u.target.closest("#portfolio-arrow_right"))&&(document.body.clientWidth<575?(g=t.length,s.textContent=g,function(e,t){e[t].style.display="none",a.textContent=t+1}(t,f),u.target.closest("#portfolio-arrow_right")&&f++,u.target.closest("#portfolio-arrow_left")&&f--,o.style.display="flex",f===t.length-1&&(o.style.display="none"),n.style.display="flex",0===f&&(n.style.display="none"),function(e,t){e[t].style.display="flex",a.textContent=t+1}(t,f)):(document.body.clientWidth>1024&&(g=e.length-2),document.body.clientWidth<1024&&(g=e.length-1),document.body.clientWidth<901&&(g=e.length),u.target.closest("#portfolio-arrow_right")&&(++f>=g-1&&(o.style.display="none"),n.style.display="flex",function(e,t){m.textContent=m.textContent+".portfolio-slider__slide {\n            transform: translateX(-".concat(e[t].offsetLeft,"px);\n        }"),a.textContent=t+1}(e,f)),u.target.closest("#portfolio-arrow_left")&&(--f<=0&&(n.style.display="none"),o.style.display="flex",function(e,t){m.textContent=m.textContent+".portfolio-slider__slide {\n            transform: translateX(-".concat(e[t].offsetLeft,"px);\n        }"),a.textContent=t+1}(e,f)))),u.target.closest(".portfolio-slider__slide-frame")&&i(r),u.target.closest(".popup-portfolio .close")&&l(r),(u.target.closest("#popup_portfolio_right")||u.target.closest("#popup_portfolio_left"))&&(v(c,y),v(d,y),u.target.closest("#popup_portfolio_right")&&y++,u.target.closest("#popup_portfolio_left")&&y--,y>=c.length&&(y=0),y<0&&(y=c.length-1),h(c,y),h(d,y))}))},E=function(){var e=document.querySelector(".popup-repair-types-content__head-date"),t=document.querySelector(".nav-list-popup-repair"),n=document.querySelector(".popup-repair-types-content-table__list"),o=document.querySelector(".popup-repair-types-content-table__list"),r=document.querySelector("style"),i=0;r.textContent=r.textContent+"\n    .active_btn {\n        border-color:orange !important;\n    }",fetch("db/db.json",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status)throw new Error("Ошибка");return e.json()})).then((function(e){c(e[0]),e.forEach((function(e){e.title&&d(e)})),e[1].priceList.forEach((function(e){p(e)})),document.addEventListener("click",(function(t){t.target.closest(".popup-repair-types-nav__item")&&e.forEach((function(e){t.target.textContent===e.title&&(o.textContent="",u(e))})),document.querySelectorAll(".popup-repair-types-nav__item")[0].classList.add("active_btn")})),document.addEventListener("click",(function(e){if(e.target.closest("#nav-arrow-popup-repair_right")||e.target.closest("#nav-arrow-popup-repair_left")||e.target.closest(".popup-repair-types-nav__item")){var t=document.querySelectorAll(".popup-repair-types-nav__item"),n=document.querySelector(".nav-list-popup-repair").children;e.target.closest(".popup-repair-types-nav__item")&&t.forEach((function(o,r){o===e.target&&(i=r,a(n,r,t))})),e.target.closest("#nav-arrow-popup-repair_right")&&(++i>=n.length&&(i=0),a(n,i,t)),e.target.closest("#nav-arrow-popup-repair_left")&&(--i<0&&(i=n.length-1),s(n,i,t))}}))})).catch((function(e){return console.error(e)}));var l=function(e,t){t.forEach((function(n,o){o==e?t[o].classList.add("active_btn"):o!==e&&t[o].classList.remove("active_btn")}))},s=function(e,t,n){r.textContent=r.textContent+"\n         @media (max-width: 1024px) {\n        .nav-list-popup-repair {\n            transform: translateX(-".concat(e[t].offsetLeft,"px)\n        }\n    }"),l(t,n)},a=function(e,t,n){r.textContent=r.textContent+"\n         @media (max-width: 1024px) {\n        .nav-list-popup-repair {\n            transform: translateX(-".concat(e[t].offsetLeft,"px)\n        } \n    }"),l(t,n)},c=function(t){e.textContent=t.date},d=function(e){var n=document.createElement("button");n.classList.add("button_o"),n.classList.add("popup-repair-types-nav__item"),n.textContent=e.title,t.append(n)},u=function(e){e.priceList.forEach((function(e){p(e)}))},p=function(e){var t=document.createElement("tbody");o.append(t);var r=document.createElement("tr"),i=document.createElement("td"),l=document.createElement("td"),s=document.createElement("td");r.classList.add("mobile-row"),r.classList.add("showHide"),i.classList.add("repair-types-name"),i.textContent=e.typeService,l.classList.add("repair-types-value"),l.innerHTML=e.units.replace(/\d/g,(function(e){return"<sup>".concat(e,"</sup>")})),n.append(r),s.classList.add("repair-types-value"),s.textContent="".concat(e.cost," руб."),t.append(r),r.append(i),r.append(l),r.append(s)}},C=function(){var e=document.querySelector(".popup-thank");i(e),document.addEventListener("click",(function(t){t.target.closest(".close-thank")&&l(e)}))},k=function(){var e=document.getElementById("feedback1"),t=document.getElementById("feedback2"),n=document.getElementById("feedback3"),o=document.getElementById("feedback4"),r=document.getElementById("feedback5"),i=document.getElementById("feedback6"),l=[];l.push(e,t,n,o,r,i),l.forEach((function(e){var t=e.querySelector(".feedback__input-input")||e.querySelector(".feedback-block__form-input_phone"),n=e.querySelector(".feedback-block__form-input_name"),o=e.querySelector(".checkbox__input"),r=e.querySelector("button");e.addEventListener("submit",(function(i){if(i.preventDefault(),""===t.value.trim()||null!==n&&""===n.value.trim()){var l=document.createElement("div");return l.classList.add("ac21"),l.style.cssText="\n                font-size:17px;\n                font-family:sans-serif;\n                margin:auto;\n                padding:4px 8px;\n                border-radius:8px;\n                background-color:#e8e8e8;\n                color:#f68741;",l.textContent="Заполните ВСЕ поля ввода перед отправкой",r.after(l),r.disabled=!0,void setTimeout((function(){r.disabled=!1,l.parentNode.removeChild(l)}),2e3)}if(o.checked){var a=new FormData(e),c={};a.forEach((function(e,t){c[t]=e})),s(c).then((function(e){if(200!==e.status)throw new Error("status network is not 200");t.value="",n.value="",C()})).catch((function(e){return console.error(e)}))}}))}));var s=function(e){return fetch("server.php",{method:"POST",headers:{"Content-Type":"application/JSON"},body:JSON.stringify(e)})}};o(),r(),s(),d("#feedback-input1"),d("#feedback-input2"),d("#feedback-input3"),d("#feedback-input4"),d("#feedback-input5"),d("#feedback-input6"),u(),p(),m(),f(),y(),g(),v(),h(),_(),b(),new q({main:".wrapper",wrap:".partners-slider",prev:"#partners-arrow_left",next:"#partners-arrow_right",slidesToShow:2,infinity:!0}).init(),L(),E(),k()}]);