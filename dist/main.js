!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.querySelector(".header-contacts__arrow"),t=document.querySelector(".header-contacts__phone-number-accord"),n=t.querySelector(".header-contacts__phone-number"),o=document.createElement("style");document.querySelector("head").append(o),o.textContent=o.textContent+"\n    .position {\n        position: relative!important;\n    }\n    .opacity {\n        opacity: 1!important;\n    }\n    .arrow-rotate {\n        transform: rotateZ(180deg) !important;\n    }\n    ",e.addEventListener("click",(function(){t.classList.toggle("position"),n.classList.toggle("opacity"),e.classList.toggle("arrow-rotate")}))},r=function(){var e=document.querySelector(".popup-dialog-menu");document.addEventListener("click",(function(t){t.target.matches(".menu__icon")&&(e.style.transform="translate3d(0, 0, 0)",e.style.opacity="1"),(t.target.matches(".close-menu")||t.target.matches(".popup-menu-nav__item a"))&&(e.style.transform=null,e.style.opacity="0")}));document.addEventListener("click",(function(e){var t;(e.target.matches(".button-footer a")||e.target.matches(".popup-menu-nav__item a"))&&(e.preventDefault(),t=e.target.getAttribute("href"),document.querySelector("".concat(t)).scrollIntoView({block:"center",behavior:"smooth"}))}))},i=function(e){e.style.visibility="visible",document.body.style.overflow="hidden"},l=function(e){e.style.visibility="hidden",document.body.style.overflow="auto"},s=function(){var e=document.querySelector(".popup-repair-types"),t=e.querySelectorAll(".close");document.addEventListener("click",(function(n){(n.target.matches(".no-overflow")||n.target.matches(".link-list-repair a"))&&(document.querySelector(".popup-dialog-menu").style.transform=null,document.querySelector(".popup-dialog-menu").style.opacity="0",i(e)),t.forEach((function(t){n.target===t&&l(e)}))}))},c=function(){var e=document.querySelector(".popup-privacy"),t=e.querySelector(".close"),n=e.querySelector(".desktop-hide");document.addEventListener("click",(function(o){o.target.matches(".link-privacy")?i(e):o.target!==t&&o.target!==n||l(e)}))},a=function(){var e=document.querySelectorAll(".formula-item-popup"),t=document.querySelector(".desktop-hide").querySelectorAll(".formula-item-popup"),n=document.querySelector(".wrapper_small").querySelectorAll(".formula-item"),o=document.querySelectorAll(".formula-slider__slide"),r=document.querySelector("style");o.forEach((function(n,o){n.addEventListener("mouseover",(function(){console.log(e[o]),t[o].style.visibility="visible",t[o].style.opacity="1"})),n.addEventListener("mouseout",(function(){t[o].style.visibility=null,t[o].style.opacity=null,document.body.clientWidth>1024&&(r.textContent=r.textContent+"\n        .formula-item-popup:before {\n            transform: rotateZ(360deg);\n        }")}))})),n.forEach((function(n,o){n.addEventListener("mouseover",(function(){e[o].style.visibility="visible",e[o].style.opacity="1",e[o].style.top=null,e[o].getBoundingClientRect().top<0&&(e[o].style.top="90px",r.textContent=r.textContent+"\n        .formula-item-popup:before {\n            transform: rotateZ(180deg);\n        }")})),n.addEventListener("mouseout",(function(){e[o].style.visibility=null,e[o].style.opacity=null,t[o].style.visibility=null,t[o].style.opacity=null,document.body.clientWidth>1024&&(r.textContent=r.textContent+"\n        .formula-item-popup:before {\n            transform: rotateZ(360deg);\n        }")}))}))},d=function(){var e=document.querySelector(".repair-types-slider").children,t=document.querySelector(".repair-types-nav").querySelectorAll(".repair-types-nav__item"),n=document.querySelector(".repair-types-slider-wrap").querySelector(".slider-counter-content__current"),o=document.querySelector("style"),r=document.querySelector(".repair-types-slider-wrap").querySelector(".slider-counter-content__total");o.textContent=o.textContent+"\n        .slide-portfolio-active {\n            display: block !important; \n        }\n        .repair-types-slider__slide img {\n            display: none;\n        }\n        @media(max-width: 1080px) {\n        .nav-list-repair {\n          overflow:hidden;\n        }\n    }";var i=0,l=e[0],s=l.children.length,c=l.querySelectorAll("img");r.textContent=s,c[0].classList.add("slide-portfolio-active");var a=function(n){document.body.clientWidth<1024&&(o.textContent=o.textContent+"\n      @media(max-width: 1080px) {\n      .nav-list-repair {\n        transform: translateX(-".concat(t[n].offsetLeft,"px);\n      };\n    }")),t[n].classList.add("active"),l=e[n],(c=l.querySelectorAll("img"))[0].classList.add("slide-portfolio-active"),s=l.children.length,i=0},d=function(e){t[e].classList.remove("active")};document.addEventListener("click",(function(e){if(e.target.closest(".repair-types-nav__item")||e.target.closest("#nav-arrow-repair-right_base")||e.target.closest("#nav-arrow-repair-left_base")){if(e.target.closest(".repair-types-nav__item")&&(c[i].classList.remove("slide-portfolio-active"),t.forEach((function(t,n){e.target===t?(c[i].classList.remove("slide-portfolio-active"),a(n)):d(n)}))),e.target.closest("#nav-arrow-repair-right_base")){var o=0;c[i].classList.remove("slide-portfolio-active"),t.forEach((function(e,t){e.classList.contains("active")&&(o=t)})),o>=t.length-1?(a(o=0),d(t.length-1)):(a(o+1),d(o))}if(e.target.closest("#nav-arrow-repair-left_base")){var u=0;c[i].classList.remove("slide-portfolio-active"),t.forEach((function(e,t){e.classList.contains("active")&&(u=t)})),u<=0?(u=t.length-1,d(0),a(u)):(d(u),a(u-1))}n.textContent=i+1,r.textContent=s}(e.target.closest("#repair-types-arrow_right")||e.target.closest("#repair-types-arrow_left"))&&(s=l.children.length,function(e,t,n){e[t].classList.remove(n)}(c=l.querySelectorAll("img"),i,"slide-portfolio-active"),e.target.closest("#repair-types-arrow_right")?i++:e.target.closest("#repair-types-arrow_left")&&i--,i>=c.length&&(i=0),i<0&&(i=c.length-1),function(e,t,n){e[t].classList.add(n)}(c,i,"slide-portfolio-active"),n.textContent=i+1,r.textContent=s)}))},u=function(){var e=document.querySelectorAll(".transparency-item"),t=document.querySelectorAll(".transparency-item__img"),n=document.querySelectorAll(".popup-transparency-slider__slide"),o=document.querySelector(".popup-transparency"),r=o.querySelector(".close"),s=o.querySelector(".desktop-hide"),c=o.querySelector(".slider-counter-content"),a=document.querySelector("style"),d=0;a.textContent=a.textContent+"\n    .popup-transparency-slider__slide {\n        display:none;\n    }\n    @media(max-width: 1080px) {\n        .transparency-item {\n            display: none;\n        };\n    }\n    ",e[0].style.display="flex";var u=function(e,t){e[t].style.display="flex"},p=function(e,t){e===n?e[t].style.display="none":e[t].style.cssText="@media(max-width: 1080px) {\n        .transparency-item {\n            display: none;\n        };\n    }"};document.addEventListener("click",(function(a){(a.target.closest("#transparency-arrow_right")||a.target.closest("#transparency-arrow_left"))&&(p(n,d),p(e,d),a.target.closest("#transparency-arrow_right")?d++:a.target.closest("#transparency-arrow_left")&&d--,d>=e.length&&(d=0),d<0&&(d=e.length-1),u(e,d),u(n,d)),t.forEach((function(e,t){a.target===e&&(i(o),n[t].style.display="flex",d=t),a.target!==r&&a.target!==s||(l(o),n[t].style.display="none")})),(a.target.closest("#transparency_right")||a.target.closest("#transparency_left"))&&(p(e,d),p(n,d),a.target.closest("#transparency_right")?d++:a.target.closest("#transparency_left")&&d--,d>=n.length&&(d=0),d<0&&(d=n.length-1),u(n,d),u(e,d)),c.textContent="".concat(d+1,"/").concat(e.length)}))},p=function(){var e=document.querySelector("#problems").querySelector(".wrapper_middle").querySelectorAll(".problems-item-popup"),t=document.querySelector("#problems").querySelector(".wrapper_small").querySelectorAll(".problems-item-popup"),n=document.querySelector("#problems").querySelector(".wrapper_middle").querySelectorAll(".problems-item"),o=document.querySelector("#problems").querySelector(".wrapper_small").querySelectorAll(".problems-item"),r=document.querySelector("style");o.forEach((function(e,n){e.addEventListener("mouseover",(function(){t[n].style.visibility="visible",t[n].style.opacity="1"})),e.addEventListener("mouseout",(function(){t[n].style.visibility=null,t[n].style.opacity=null,document.body.clientWidth>1024&&(r.textContent=r.textContent+"\n                .problems-item-popup:before {\n                    transform: rotateZ(360deg);\n                }\n                .problems-item-popup-1:before {\n                    transform: rotateZ(180deg);\n                }")}))})),n.forEach((function(n,o){n.addEventListener("mouseover",(function(){e[o].style.visibility="visible",e[o].style.opacity="1",e[o].style.top=null,e[o].getBoundingClientRect().top<0&&(e[o].style.top="90px",r.textContent=r.textContent+"\n        .problems-item-popup:before {\n            transform: rotateZ(180deg);\n        }\n        .problems-item-popup-1:before {\n                    transform: rotateZ(180deg);\n                }")})),n.addEventListener("mouseout",(function(){e[o].style.visibility=null,e[o].style.opacity=null,t[o].style.visibility=null,t[o].style.opacity=null,document.body.clientWidth>1024&&(r.textContent=r.textContent+"\n        .problems-item-popup:before {\n            transform: rotateZ(360deg);\n        }\n        .problems-item-popup-1:before {\n                    transform: rotateZ(180deg);\n                }")}))}))},y=function(){var e=document.querySelector(".popup-consultation");document.addEventListener("click",(function(t){t.target.matches(".button_wide")&&i(e),t.target.matches(".close-consultation")&&l(e)}))},f=function(){var e=document.querySelector(".accordion").querySelectorAll(".title_block");e.forEach((function(t,n){e[n].classList.remove("msg-active")})),document.addEventListener("click",(function(t){e.forEach((function(n,o){t.target===n?e[o].classList.add("msg-active"):e[o].classList.remove("msg-active")}))}))},m=function(){var e=document.querySelector(".scheme-slider").querySelectorAll(".scheme-slider__slide"),t=document.querySelectorAll(".scheme-description-block"),n=(document.getElementById("scheme-list"),document.getElementById("scheme-list").querySelectorAll(".scheme-nav__item")),o=document.querySelector("style"),r=0;o.textContent=o.textContent+".scheme-slider__slide {\n            display: none;\n        }",e[0].style.display="block";var i=function(e,r){document.body.clientWidth<1024&&(o.textContent=o.textContent+"\n      @media(max-width: 1080px) {\n      #scheme-list {\n        transform: translateX(-".concat(n[r].offsetLeft,"px);\n      };\n    }")),e[r].style.display="block",n[r].classList.add("active"),t[r].classList.add("visible-content-block")},l=function(e,o){e[o].style.display="none",n[o].classList.remove("active"),t[o].classList.remove("visible-content-block")};document.addEventListener("click",(function(t){t.target.closest("#scheme-list")&&n.forEach((function(n,o){t.target===n?i(e,r=o):l(e,o)})),(t.target.closest("#nav-arrow-scheme_left")||t.target.closest("#nav-arrow-scheme_right"))&&(l(e,r),t.target.closest("#nav-arrow-scheme_left")&&r--,t.target.closest("#nav-arrow-scheme_right")&&r++,r>=e.length&&(r=0),r<0&&(r=e.length-1),i(e,r))}))},g=function(){var e=document.getElementById("reviews").querySelectorAll(".reviews-slider__slide"),t=document.getElementById("reviews").querySelector(".slider-dots-reviews").querySelectorAll(".dot-reviews"),n=document.querySelector("style"),o=0;n.textContent=n.textContent+"\n    .reviews-slider__slide {\n        display:none;\n    }\n    .slider-dots-reviews {\n        display:flex;\n    }\n    ",e[0].style.display="flex";var r=function(e,n){e[n].style.display="flex",t[n].classList.add("dot_active")},i=function(e,n){e[n].style.display="none",t[n].classList.remove("dot_active")};document.addEventListener("click",(function(n){(n.target.closest("#reviews-arrow_right")||n.target.closest("#reviews-arrow_left"))&&(i(e,o),n.target.closest("#reviews-arrow_right")&&o++,n.target.closest("#reviews-arrow_left")&&o--,o>=e.length&&(o=0),o<0&&(o=e.length-1),r(e,o)),n.target.closest(".dot-reviews")&&t.forEach((function(t,l){n.target===t?r(e,o=l):i(e,l)}))}))},h=function(){var e=document.querySelector(".designs-slider").children,t=document.querySelector(".popup-design-slider").querySelectorAll("img"),n=document.querySelectorAll(".popup-design-text"),o=document.getElementById("designs-list").querySelectorAll(".designs-nav__item"),r=document.getElementById("nav-list-popup-designs").querySelectorAll(".designs-nav__item_popup"),i=document.querySelectorAll(".preview-block"),l=document.querySelector("#designs-counter").querySelector(".slider-counter-content__current"),s=document.querySelector("#designs-counter").querySelector(".slider-counter-content__total"),c=document.getElementById("popup-designs-counter").querySelector(".slider-counter-content__current"),a=document.getElementById("popup-designs-counter").querySelector(".slider-counter-content__total"),d=document.querySelector(".popup-design"),u=d.querySelector(".close"),p=document.querySelector(".popup-design-tab").querySelector(".close"),y=document.querySelector("style"),f=0,m=e[f].querySelectorAll(".designs-slider__style-slide"),g=i[f].querySelectorAll(".preview-block__item"),h=0;y.textContent=y.textContent+".designs-slider__style-slide {\n        display:none;\n    }\n        @media(max-width: 1080px) {\n            #designs-list {\n                overflow:hidden;\n            }\n        }",m[0].style.display="flex";var v=function(e,t,o,r){document.body.clientWidth<1024&&(y.textContent=y.textContent+"\n    @media(max-width: 1080px) {\n      #nav-list-popup-designs {\n            transform: translateX(-".concat(o[t].offsetLeft,"px);\n      }\n        #designs-list {\n            transform: translateX(-").concat(o[t].offsetLeft,"px);\n        };\n    }")),e[t].style.display="flex",o[t].classList.add("active"),r[t].classList.add("active"),i[t].classList.add("visible"),n[t].classList.add("visible-content-block")},_=function(e,t,o,r){e[t].style.display="none",o[t].classList.remove("active"),r[t].classList.remove("active"),i[t].classList.remove("visible"),n[t].classList.remove("visible-content-block")},b=function(e,n){var o=g[n].querySelector(".preview-block__item-inner");e[n].style.display="flex",o.classList.add("preview_active"),t[n].setAttribute("src","".concat(e[n].querySelector("img").getAttribute("src")))},S=function(e,n){var o=g[n].querySelector(".preview-block__item-inner");e[n].style.display="none",o.classList.remove("preview_active"),t[n].removeAttribute("src")},x=function(){m=e[f].querySelectorAll(".designs-slider__style-slide"),b(m,h=0)},w=function(t,n,o){S(m,h),n.forEach((function(r,i){t===r?v(e,f=i,n,o):_(e,i,n,o)})),x(),s.textContent=m.length,l.textContent=1,a.textContent=m.length,c.textContent=1},q=function(t,n,o){S(m,h),_(e,f,n,o),(t.closest("#nav-arrow-designs_right")||"nav-arrow-popup-designs_right"===t.id)&&f++,(t.closest("#nav-arrow-designs_left")||"nav-arrow-popup-designs_left"===t.id)&&f--,f>=e.length&&(f=0),f<0&&(f=e.length-1),v(e,f,n,o),x(),s.textContent=m.length,l.textContent=1,a.textContent=m.length,c.textContent=1};document.addEventListener("click",(function(n){n.target.matches(".designs-nav__item_base")&&w(n.target,o,r),(n.target.closest("#nav-arrow-designs_right")||n.target.closest("#nav-arrow-designs_left"))&&q(n.target,o,r),(n.target.closest(".preview-block__item")||n.target.closest("#design_right")||n.target.closest("#design_left")||n.target.closest("#popup_design_left")||n.target.closest("#popup_design_right"))&&(m=e[f].querySelectorAll(".designs-slider__style-slide"),g=i[f].querySelectorAll(".preview-block__item"),S(m,h),n.target.closest(".preview-block__item")&&g.forEach((function(e,t){n.target.closest(".preview-block__item")===e&&(h=t)})),(n.target.closest("#design_right")||n.target.closest("#popup_design_right"))&&h++,(n.target.closest("#design_left")||n.target.closest("#popup_design_left"))&&h--,h>=m.length&&(h=0),h<0&&(h=m.length-1),b(m,h),l.textContent=h+1,c.textContent=h+1),n.target.closest(".link-list-designs")&&(d.style.visibility="visible",document.body.style.overflow="hidden",t[index].setAttribute("src","".concat(elem[index].querySelector("img").getAttribute("src")))),n.target!==u&&n.target!==p||(d.style.visibility="hidden",document.body.style.overflow="auto"),n.target.closest(".designs-nav__item_popup")&&(w(n.target,r,o),moveSlidesPopup(n.target)),(n.target.closest("#nav-arrow-popup-designs_right")||n.target.closest("#nav-arrow-popup-designs_left"))&&q(n.target,r,o)}))};function v(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw i}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var S=function(){function e(t){var n=t.main,o=t.wrap,r=t.next,i=t.prev,l=t.position,s=void 0===l?0:l,c=t.slidesToShow,a=void 0===c?2:c,d=t.infinity;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.slides=document.querySelector(o).children,this.next=document.querySelector(r),this.prev=document.querySelector(i),this.slidesToShow=a,this.options={infinity:d,position:s,widthSlide:Math.floor(100/this.slidesToShow)}}var t,n,o;return t=e,(n=[{key:"init",value:function(){this.addClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider()}},{key:"addClass",value:function(){this.main.classList.add("wrapper"),this.wrap.classList.add("partners-slider");var e,t=v(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("partners-slider__slide")}catch(e){t.e(e)}finally{t.f()}}},{key:"addStyle",value:function(){var e=document.createElement("style");e.textContent=e.textContent+"\n      #partners .wrapper {\n        overflow: hidden !important;\n      }\n      .partners-slider {\n        display: flex !important;\n        transition: transform .5s !important;\n        will-change: transform !important;\n      }\n      .partners-slider__slide {\n        flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n        margin: auto 0 !important;\n      }\n    "),document.head.append(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0?(this.options.position=this.slides.length-this.slidesToShow,this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)")):this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}}])&&b(t.prototype,n),o&&b(t,o),e}(),x=function(){var e=document.querySelectorAll(".portfolio-slider__slide"),t=document.querySelector("#portfolio").querySelector(".desktop-hide").querySelectorAll(".portfolio-slider__slide-frame"),n=(document.querySelector("#portfolio").querySelector(".mobile-hide").querySelectorAll(".portfolio-slider__slide-frame"),document.getElementById("portfolio-arrow_left")),o=document.getElementById("portfolio-arrow_right"),r=document.querySelector(".popup-portfolio"),s=document.getElementById("portfolio-counter").querySelector(".slider-counter-content__total"),c=document.getElementById("portfolio-counter").querySelector(".slider-counter-content__current"),a=document.querySelectorAll(".popup-portfolio-slider__slide"),d=document.querySelectorAll(".popup-portfolio-text"),u=document.getElementById("popup-portfolio-counter").querySelector(".slider-counter-content__current"),p=document.getElementById("popup-portfolio-counter").querySelector(".slider-counter-content__total"),y=document.querySelector("style"),f=0,m=0,g=0;p.textContent=a.length,y.textContent=y.textContent+"   .portfolio-slider__slide {\n            transition: transform .5s!important;\n            will-change: transform!important;\n        }\n        .popup-portfolio-slider__slide {\n          display:none;\n        }\n        \n        @media (max-width: 575px) {\n          #portfolio .mobile-hide .portfolio-slider__slide-frame{\n            display:flex;\n            background-color:red;\n          }\n          #portfolio .mobile-hide {\n            display:flex;\n          }\n          .portfolio-slider-mobile {\n          display:none;\n        }\n        #portfolio-counter {\n          z-index:999;\n        }\n        }\n        ",a[0].style.display="block",d[0].style.display="block";var h=function(e,t){e[t].style.display="none",u.textContent=t+1},v=function(e,t){e[t].style.display="flex",u.textContent=t+1};document.addEventListener("click",(function(u){(u.target.closest("#portfolio-arrow_left")||u.target.closest("#portfolio-arrow_right"))&&(document.body.clientWidth<575?(g=t.length,console.log(g),s.textContent=g,function(e,t){y.textContent=y.textContent+"#portfolio .mobile-hide .portfolio-slider__slide-frame{\n            display:none;\n          }",c.textContent=t+1}(0,f),u.target.closest("#portfolio-arrow_right")&&f++,u.target.closest("#portfolio-arrow_left")&&f--,f>=t.length&&(o.style.display="none"),n.style.display="flex",f<=0&&(n.style.display="none"),o.style.display="flex",function(e,t){y.textContent=y.textContent+"#portfolio .mobile-hide .portfolio-slider__slide-frame{\n            display:flex;\n          }",c.textContent=t+1}(0,f)):(document.body.clientWidth>1024&&(g=e.length-2),document.body.clientWidth<1024&&(g=e.length-1),document.body.clientWidth<901&&(g=e.length),u.target.closest("#portfolio-arrow_right")&&(++f>=g-1&&(o.style.display="none"),n.style.display="flex",function(e,t){y.textContent=y.textContent+".portfolio-slider__slide {\n            transform: translateX(-".concat(e[t].offsetLeft,"px);\n        }"),c.textContent=t+1}(e,f)),u.target.closest("#portfolio-arrow_left")&&(--f<=0&&(n.style.display="none"),o.style.display="flex",function(e,t){y.textContent=y.textContent+".portfolio-slider__slide {\n            transform: translateX(-".concat(e[t].offsetLeft,"px);\n        }"),c.textContent=t+1}(e,f)))),u.target.closest(".portfolio-slider__slide-frame")&&i(r),u.target.closest(".popup-portfolio .close")&&l(r),(u.target.closest("#popup_portfolio_right")||u.target.closest("#popup_portfolio_left"))&&(h(a,m),h(d,m),u.target.closest("#popup_portfolio_right")&&m++,u.target.closest("#popup_portfolio_left")&&m--,m>=a.length&&(m=0),m<0&&(m=a.length-1),v(a,m),v(d,m))}))},w=function(){var e=document.querySelector(".popup-repair-types-content__head-date"),t=document.querySelector(".nav-list-popup-repair"),n=document.querySelector(".popup-repair-types-content-table__list"),o=document.querySelector(".popup-repair-types-content-table__list"),r=document.querySelector("style"),i=0;fetch("db/db.json",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status)throw new Error("Ошибка");return e.json()})).then((function(e){c(e[0]),e.forEach((function(e){e.title&&a(e)})),document.addEventListener("click",(function(t){t.target.closest(".popup-repair-types-nav__item")&&e.forEach((function(e){t.target.textContent===e.title&&(o.textContent="",d(e))}))})),document.addEventListener("click",(function(e){if(e.target.closest("#nav-arrow-popup-repair_right")||e.target.closest("#nav-arrow-popup-repair_left")){document.querySelector(".nav-popup-repair-types");var t=document.querySelector(".nav-list-popup-repair").children;e.target.closest("#nav-arrow-popup-repair_right")&&(++i>=t.length&&(i=0),s(t,i)),e.target.closest("#nav-arrow-popup-repair_left")&&(--i<0&&(i=t.length-1),l(t,i))}}))})).catch((function(e){return console.error(e)}));var l=function(e,t){r.textContent=r.textContent+"\n         @media (max-width: 1024px) {\n        .nav-list-popup-repair {\n            transform: translateX(-".concat(e[t].offsetLeft,"px)\n        }\n    }")},s=function(e,t){r.textContent=r.textContent+"\n         @media (max-width: 1024px) {\n        .nav-list-popup-repair {\n            transform: translateX(-".concat(e[t].offsetLeft,"px)\n        } \n    }")},c=function(t){e.textContent=t.date},a=function(e){var n=document.createElement("button");n.classList.add("button_o"),n.classList.add("popup-repair-types-nav__item"),n.textContent=e.title,t.append(n)},d=function(e){var t=document.createElement("tbody");o.append(t),e.priceList.forEach((function(e){var o=document.createElement("tr"),r=document.createElement("td"),i=document.createElement("td"),l=document.createElement("td");o.classList.add("mobile-row"),o.classList.add("showHide"),r.classList.add("repair-types-name"),r.textContent=e.typeService,i.classList.add("repair-types-value"),i.innerHTML=e.units.replace(/\d/g,(function(e){return"<sup>".concat(e,"</sup>")})),n.append(o),l.classList.add("repair-types-value"),l.textContent="".concat(e.cost," руб."),t.append(o),o.append(r),o.append(i),o.append(l)}))}},q=function(){var e=document.querySelector(".popup-thank");i(e),document.addEventListener("click",(function(t){t.target.closest(".close-thank")&&l(e)}))},C=function(){var e=document.getElementById("feedback1"),t=document.getElementById("feedback2"),n=document.getElementById("feedback3"),o=document.getElementById("feedback4"),r=document.getElementById("feedback5"),i=document.getElementById("feedback6"),l=[];l.push(e,t,n,o,r,i),l.forEach((function(e){e.querySelector(".feedback-block__form-input_name"),e.querySelector("#feedback-input2"),e.querySelector(".button-feedback-block");e.addEventListener("submit",(function(t){t.preventDefault();var n=new FormData(e),o={};n.forEach((function(e,t){o[t]=e})),s(o).then((function(e){if(200!==e.status)throw new Error("status network is not 200");q()})).catch((function(e){return console.error(e)}))}))}));var s=function(e){return fetch("server.php",{method:"POST",headers:{"Content-Type":"application/JSON"},body:JSON.stringify(e)})}};o(),r(),s(),c(),a(),d(),u(),p(),y(),f(),m(),g(),h(),new S({main:".wrapper",wrap:".partners-slider",prev:"#partners-arrow_left",next:"#partners-arrow_right",slidesToShow:2,infinity:!0}).init(),x(),w(),C()}]);