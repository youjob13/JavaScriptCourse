const sliderRepair = () => {
  const slider = document.querySelector(".repair-types-slider"),
    typesRepairSlider = slider.children,
    btnRepair = document
      .querySelector(".repair-types-nav")
      .querySelectorAll(".repair-types-nav__item"),
    sliderCounterCurrent = document
      .querySelector(".repair-types-slider-wrap")
      .querySelector(".slider-counter-content__current"),
    style = document.querySelector("style"),
    sliderCounterTotal = document
      .querySelector(".repair-types-slider-wrap")
      .querySelector(".slider-counter-content__total");

  style.textContent =
    style.textContent +
    `
        .slide-portfolio-active {
            display: block !important; 
        }
        .repair-types-slider__slide img {
            display: none;
        }
        @media(max-width: 1080px) {
        .nav-list-repair {
          overflow:hidden;
        }
    }`;
  let currentSlide = 0,
    currentSlider = typesRepairSlider[0],
    currentSliderLength = currentSlider.children.length,
    arraySlides = currentSlider.querySelectorAll("img");
  sliderCounterTotal.textContent = currentSliderLength;
  arraySlides[0].classList.add("slide-portfolio-active");

  const nextSlide = (elem, index, link) => {
    elem[index].classList.add(link);
  };
  const prevSlide = (elem, index, link) => {
    elem[index].classList.remove(link);
  };

  const activeBtnRepair = (index) => {
    if (document.body.clientWidth < 1024) {
      style.textContent =
        style.textContent +
        `
      @media(max-width: 1080px) {
      .nav-list-repair {
        transform: translateX(-${btnRepair[index].offsetLeft}px);
      };
    }`;
    }
    btnRepair[index].classList.add("active");

    currentSlider = typesRepairSlider[index];
    arraySlides = currentSlider.querySelectorAll("img");
    arraySlides[0].classList.add("slide-portfolio-active");
    currentSliderLength = currentSlider.children.length;
    currentSlide = 0;
  };
  const passiveBtnRepair = (index) => {
    btnRepair[index].classList.remove("active");
  };

  document.addEventListener("click", (e) => {
    //табы + слайдер для табов
    if (
      e.target.closest(".repair-types-nav__item") ||
      e.target.closest("#nav-arrow-repair-right_base") ||
      e.target.closest("#nav-arrow-repair-left_base")
    ) {
      if (e.target.closest(".repair-types-nav__item")) {
        arraySlides[currentSlide].classList.remove("slide-portfolio-active");
        btnRepair.forEach((item, i) => {
          if (e.target === item) {
            arraySlides[currentSlide].classList.remove(
              "slide-portfolio-active"
            );
            activeBtnRepair(i);
          } else {
            passiveBtnRepair(i);
          }
        });
      }

      if (e.target.closest("#nav-arrow-repair-right_base")) {
        let count = 0;
        arraySlides[currentSlide].classList.remove("slide-portfolio-active");
        btnRepair.forEach((item, i) => {
          if (item.classList.contains("active")) {
            count = i;
          }
        });

        if (count >= btnRepair.length - 1) {
          count = 0;
          activeBtnRepair(count);
          passiveBtnRepair(btnRepair.length - 1);
        } else {
          activeBtnRepair(count + 1);
          passiveBtnRepair(count);
        }
      }

      if (e.target.closest("#nav-arrow-repair-left_base")) {
        let count = 0;
        arraySlides[currentSlide].classList.remove("slide-portfolio-active");
        btnRepair.forEach((item, i) => {
          if (item.classList.contains("active")) {
            count = i;
          }
        });
        if (count <= 0) {
          count = btnRepair.length - 1;
          passiveBtnRepair(0);
          activeBtnRepair(count);
        } else {
          passiveBtnRepair(count);
          activeBtnRepair(count - 1);
        }
      }
      sliderCounterCurrent.textContent = currentSlide + 1;
      sliderCounterTotal.textContent = currentSliderLength;
    }
    //переключение слайдов
    if (
      e.target.closest("#repair-types-arrow_right") ||
      e.target.closest("#repair-types-arrow_left")
    ) {
      currentSliderLength = currentSlider.children.length;
      arraySlides = currentSlider.querySelectorAll("img");

      prevSlide(arraySlides, currentSlide, "slide-portfolio-active");
      if (e.target.closest("#repair-types-arrow_right")) {
        currentSlide++;
      } else if (e.target.closest("#repair-types-arrow_left")) {
        currentSlide--;
      }

      if (currentSlide >= arraySlides.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = arraySlides.length - 1;
      }
      nextSlide(arraySlides, currentSlide, "slide-portfolio-active");

      sliderCounterCurrent.textContent = currentSlide + 1;
      sliderCounterTotal.textContent = currentSliderLength;
    }
  });
};

export default sliderRepair;
