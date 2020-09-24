const agreementSlider = () => {
  const agreementSlides = document.querySelectorAll(".transparency-item"),
    agreements = document.querySelectorAll(".transparency-item__img"),
    popupSlide = document.querySelectorAll(".popup-transparency-slider__slide"),
    popup = document.querySelector(".popup-transparency"),
    closePopup = popup.querySelector(".close"),
    closePopup2 = popup.querySelector(".desktop-hide"),
    style = document.querySelector("style");
  let currentSlide = 0;
  style.textContent =
    style.textContent +
    `
    .popup-transparency-slider__slide {
        display:none;
    }
    @media(max-width: 1080px) {
        .transparency-item {
            display: none;
        };
    }
    `;
  agreementSlides[0].style.display = "flex";

  const nextSlide = (elem, index) => {
    elem[index].style.display = "flex";
  };
  const prevSlide = (elem, index) => {
    if (elem === popupSlide) {
      elem[index].style.display = "none";
    } else {
      elem[index].style.cssText = `@media(max-width: 1080px) {
        .transparency-item {
            display: none;
        };
    }`;
    }
  };

  document.addEventListener("click", (e) => {
    //слайдер
    if (
      e.target.closest("#transparency-arrow_right") ||
      e.target.closest("#transparency-arrow_left")
    ) {
      prevSlide(popupSlide, currentSlide);
      prevSlide(agreementSlides, currentSlide);
      if (e.target.closest("#transparency-arrow_right")) {
        currentSlide++;
      } else if (e.target.closest("#transparency-arrow_left")) {
        currentSlide--;
      }
      if (currentSlide >= agreementSlides.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = agreementSlides.length - 1;
      }
      nextSlide(agreementSlides, currentSlide);
      nextSlide(popupSlide, currentSlide);
    }
    //popup окно
    agreements.forEach((item, i) => {
      if (e.target === item) {
        popup.style.visibility = "visible";
        popupSlide[i].style.display = "flex";
      }
      if (e.target === closePopup || e.target === closePopup2) {
        popup.style.visibility = "hidden";
        popupSlide[i].style.display = "none";
      }
    });
    //popup слайдер
    if (
      e.target.closest("#transparency_right") ||
      e.target.closest("#transparency_left")
    ) {
      prevSlide(agreementSlides, currentSlide);
      prevSlide(popupSlide, currentSlide);
      if (e.target.closest("#transparency_right")) {
        currentSlide++;
      } else if (e.target.closest("#transparency_left")) {
        currentSlide--;
      }
      if (currentSlide >= popupSlide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = popupSlide.length - 1;
      }
      nextSlide(popupSlide, currentSlide);
      nextSlide(agreementSlides, currentSlide);
    }
  });
};

export default agreementSlider;
