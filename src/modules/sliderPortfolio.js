//доделать
const sliderPortfolio = () => {
  const slideColumn = document.querySelectorAll(".portfolio-slider__slide"),
    arrowLeft = document.getElementById("portfolio-arrow_left"),
    arrowRight = document.getElementById("portfolio-arrow_right"),
    popup = document.querySelector(".popup-portfolio"),
    style = document.querySelector("style");
  let currentSlide = 0,
    slideToShow = 0;
  style.textContent =
    style.textContent +
    `   .portfolio-slider__slide {
            transition: transform .5s!important;
            will-change: transform!important;
        }
        `;

  const nextSlide = (elem, index) => {
    style.textContent =
      style.textContent +
      `.portfolio-slider__slide {
            transform: translateX(-${elem[index].offsetLeft}px);
        }`;
  };
  const prevSlide = (elem, index) => {
    style.textContent =
      style.textContent +
      `.portfolio-slider__slide {
            transform: translateX(-${elem[index].offsetLeft}px);
        }`;
  };

  document.addEventListener("click", (e) => {
    if (document.body.clientWidth > 1024) {
      slideToShow = slideColumn.length - 2;
    }
    if (document.body.clientWidth < 1024) {
      slideToShow = slideColumn.length - 1;
    }
    if (document.body.clientWidth < 901) {
      slideToShow = slideColumn.length;
    }
    if (e.target.closest("#portfolio-arrow_right")) {
      ++currentSlide;
      if (currentSlide >= slideToShow - 1) {
        arrowRight.style.display = "none";
      }
      arrowLeft.style.display = "flex";
      nextSlide(slideColumn, currentSlide);
    }
    if (e.target.closest("#portfolio-arrow_left")) {
      --currentSlide;
      if (currentSlide <= 0) {
        arrowLeft.style.display = "none";
      }
      arrowRight.style.display = "flex";
      prevSlide(slideColumn, currentSlide);
    }
    if (e.target.closest(".portfolio-slider__slide-frame")) {
      popup.style.visibility = 'visible';
    }
  });
};

export default sliderPortfolio;
