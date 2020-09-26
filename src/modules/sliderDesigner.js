const sliderDesigner = () => {
  const sliders = document.querySelector(".designs-slider").children,
    popupSliders = document
    .querySelector(".popup-design-slider")
    .querySelectorAll("img"),
    popupDesignContent = document.querySelectorAll(".popup-design-text"),
    navigationBase = document
    .getElementById("designs-list")
    .querySelectorAll(".designs-nav__item"),
    navigationPopup = document
    .getElementById("nav-list-popup-designs")
    .querySelectorAll(".designs-nav__item_popup"),
    previewSlides = document.querySelectorAll(".preview-block"),
    currentNumSlide = document
    .querySelector("#designs-counter")
    .querySelector(".slider-counter-content__current"),
    totalNumSlide = document
    .querySelector("#designs-counter")
    .querySelector(".slider-counter-content__total"),
    currentNumSlidePopup = document
    .getElementById("popup-designs-counter")
    .querySelector(".slider-counter-content__current"),
    totalNumSlidePopup = document
    .getElementById("popup-designs-counter")
    .querySelector(".slider-counter-content__total"),
    popupDesigner = document.querySelector(".popup-design"),
    closePopupDesigner = popupDesigner.querySelector(".close"),
    closePopupDesignerSmall = document
    .querySelector(".popup-design-tab")
    .querySelector(".close"),
    style = document.querySelector("style");
  let currentSlider = 0;
  let currentSliderVal = sliders[currentSlider].querySelectorAll(
    ".designs-slider__style-slide"
  );
  let currentPreviewSlide = previewSlides[currentSlider].querySelectorAll(
    ".preview-block__item"
  );
  let currentSlide = 0;

  style.textContent =
    style.textContent +
    `.designs-slider__style-slide {
        display:none;
    }
        @media(max-width: 1080px) {
            #designs-list {
                overflow:hidden;
            }
        }`;
  currentSliderVal[0].style.display = "flex";
  const nextSlider = (elem, index, navigation, navBorder) => {
    if (document.body.clientWidth < 1024) {
      style.textContent =
        style.textContent +
        `
    @media(max-width: 1080px) {
      #nav-list-popup-designs {
            transform: translateX(-${navigation[index].offsetLeft}px);
      }
        #designs-list {
            transform: translateX(-${navigation[index].offsetLeft}px);
        };
    }`;
    }
    elem[index].style.display = "flex";
    navigation[index].classList.add("active");
    navBorder[index].classList.add("active");
    previewSlides[index].classList.add("visible");
    popupDesignContent[index].classList.add("visible-content-block");
  };
  const prevSlider = (elem, index, navigation, navBorder) => {
    elem[index].style.display = "none";
    navigation[index].classList.remove("active");
    navBorder[index].classList.remove("active");
    previewSlides[index].classList.remove("visible");
    popupDesignContent[index].classList.remove("visible-content-block");
  };
  const nextSlide = (elem, index) => {
    const currentPreviewSlideBorder = currentPreviewSlide[index].querySelector(
      ".preview-block__item-inner"
    );
    elem[index].style.display = "flex";
    currentPreviewSlideBorder.classList.add("preview_active");
    popupSliders[index].setAttribute('src', `${elem[index].querySelector('img').getAttribute('src')}`);
  };
  const prevSlide = (elem, index) => {
    const currentPreviewSlideBorder = currentPreviewSlide[index].querySelector(
      ".preview-block__item-inner"
    );
    elem[index].style.display = "none";
    currentPreviewSlideBorder.classList.remove("preview_active");
    popupSliders[index].removeAttribute('src');
  };

  const changeSliderVal = () => {
    currentSliderVal = sliders[currentSlider].querySelectorAll(
      ".designs-slider__style-slide"
    );
    currentSlide = 0;
    nextSlide(currentSliderVal, currentSlide);
  };

  const moveSlidesTab = (target, navigation, navBorder) => {
    prevSlide(currentSliderVal, currentSlide);

    navigation.forEach((item, i) => {
      if (target === item) {
        currentSlider = i;
        nextSlider(sliders, currentSlider, navigation, navBorder);
      } else {
        prevSlider(sliders, i, navigation, navBorder);
      }
    });
    changeSliderVal();
    totalNumSlide.textContent = currentSliderVal.length;
    currentNumSlide.textContent = 1;
    totalNumSlidePopup.textContent = currentSliderVal.length;
    currentNumSlidePopup.textContent = 1;
  };

  const moveSlidesArrow = (target, navigation, navBorder) => {
    prevSlide(currentSliderVal, currentSlide);
    prevSlider(sliders, currentSlider, navigation, navBorder);
    if (
      target.closest("#nav-arrow-designs_right") ||
      target.id === "nav-arrow-popup-designs_right"
    ) {
      currentSlider++;
    }
    if (
      target.closest("#nav-arrow-designs_left") ||
      target.id === "nav-arrow-popup-designs_left"
    ) {
      currentSlider--;
    }
    if (currentSlider >= sliders.length) {
      currentSlider = 0;
    }
    if (currentSlider < 0) {
      currentSlider = sliders.length - 1;
    }
    nextSlider(sliders, currentSlider, navigation, navBorder);
    changeSliderVal();
    totalNumSlide.textContent = currentSliderVal.length;
    currentNumSlide.textContent = 1;
    totalNumSlidePopup.textContent = currentSliderVal.length;
    currentNumSlidePopup.textContent = 1;
  };

  document.addEventListener("click", (e) => {
    //табы + слайдер для табов
    if (e.target.matches(".designs-nav__item_base")) {
      moveSlidesTab(e.target, navigationBase, navigationPopup);
    }
    if (
      e.target.closest("#nav-arrow-designs_right") ||
      e.target.closest("#nav-arrow-designs_left")
    ) {
      moveSlidesArrow(e.target, navigationBase, navigationPopup);
    }
    //пагинация + слайдер
    if (
      e.target.closest(".preview-block__item") ||
      e.target.closest("#design_right") ||
      e.target.closest("#design_left") ||
      e.target.closest("#popup_design_left") ||
      e.target.closest("#popup_design_right")
    ) {
      currentSliderVal = sliders[currentSlider].querySelectorAll(
        ".designs-slider__style-slide"
      );
      currentPreviewSlide = previewSlides[currentSlider].querySelectorAll(
        ".preview-block__item"
      );
      prevSlide(currentSliderVal, currentSlide);

      if (e.target.closest(".preview-block__item")) {
        currentPreviewSlide.forEach((item, i) => {
          if (e.target.closest(".preview-block__item") === item) {
            currentSlide = i;
          }
        });
      }
      //слайдер
      if (
        e.target.closest("#design_right") ||
        e.target.closest("#popup_design_right")
      ) {
        currentSlide++;
      }
      if (
        e.target.closest("#design_left") ||
        e.target.closest("#popup_design_left")
      ) {
        currentSlide--;
      }
      if (currentSlide >= currentSliderVal.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = currentSliderVal.length - 1;
      }
      nextSlide(currentSliderVal, currentSlide);
      currentNumSlide.textContent = currentSlide + 1;
      currentNumSlidePopup.textContent = currentSlide + 1;
    }
    //popup
    if (e.target.closest(".link-list-designs")) {
      popupDesigner.style.visibility = "visible";
      document.body.style.overflow = 'hidden';
      popupSliders[index].setAttribute('src', `${elem[index].querySelector('img').getAttribute('src')}`);
    }
    if (
      e.target === closePopupDesigner ||
      e.target === closePopupDesignerSmall
    ) {
      popupDesigner.style.visibility = "hidden";
      document.body.style.overflow = 'auto';
    }
    if (e.target.closest(".designs-nav__item_popup")) {
      moveSlidesTab(e.target, navigationPopup, navigationBase);
      moveSlidesPopup(e.target);
    }
    if (
      e.target.closest("#nav-arrow-popup-designs_right") ||
      e.target.closest("#nav-arrow-popup-designs_left")
    ) {
      moveSlidesArrow(e.target, navigationPopup, navigationBase);
    }
  });
};

export default sliderDesigner;