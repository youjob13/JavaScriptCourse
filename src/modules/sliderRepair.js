const sliderRepair = () => {
  const slider = document.querySelector(".repair-types-slider"),
    style = document.querySelector("style"),
    btnRepair = document.querySelectorAll(".repair-types-nav__item"),
    counterSlider = document
    .querySelector(".repair-types-slider-wrap")
    .querySelector(".slider-counter-content__current"),
    slideArr = slider.querySelector(".types-repair1").querySelectorAll("img");
  let currentSlide = 0;

  slideArr[0].classList.add("slide-portfolio-active");
  style.textContent = style.textContent + `
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

  const nextSlide = (elem, index, link) => {
    if (document.body.clientWidth < 1024) {
      style.textContent = style.textContent + `
      @media(max-width: 1080px) {
      .nav-list-repair {
        transform: translateX(-${btnRepair[index].offsetWidth * index}px);
      };
    }`;
    }
    btnRepair[index].classList.add("active");
    elem[index].classList.add(link);
  };
  const prevSlide = (elem, index, link) => {
    btnRepair[index].classList.remove("active");
    elem[index].classList.remove(link);
  };

  document.addEventListener("click", (e) => {
    prevSlide(slideArr, currentSlide, "slide-portfolio-active");
    if (
      e.target.closest("#repair-types-arrow_right") ||
      e.target.closest("#nav-arrow-repair-right_base")
    ) {
      currentSlide++;
    } else if (
      e.target.closest("#repair-types-arrow_left") ||
      e.target.closest("#nav-arrow-repair-left_base")
    ) {
      currentSlide--;
    }

    btnRepair.forEach((item, i) => {
      if (e.target === item) {
        currentSlide = i;
      }
    });

    if (currentSlide >= slideArr.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slideArr.length - 1;
    }

    nextSlide(slideArr, currentSlide, "slide-portfolio-active");

    if (currentSlide >= 3) {
      counterSlider.textContent = currentSlide - 2;
    } else {
      counterSlider.textContent = currentSlide + 1;
    }
  });
};

export default sliderRepair;