import disableScroll from './disableScroll';
import allowScroll from './allowScroll';

const sliderPortfolio = () => {
  const slideColumn = document.querySelectorAll(".portfolio-slider__slide"),
    slides = document
    .querySelector("#portfolio")
    .querySelector(".desktop-hide")
    .querySelectorAll(".portfolio-slider__slide-frame"),
    slides2 = document
    .querySelector("#portfolio")
    .querySelector(".mobile-hide")
    .querySelectorAll(".portfolio-slider__slide-frame"),
    arrowLeft = document.getElementById("portfolio-arrow_left"),
    arrowRight = document.getElementById("portfolio-arrow_right"),
    popup = document.querySelector(".popup-portfolio"),
    sliderCounterTotal = document
    .getElementById("portfolio-counter")
    .querySelector(".slider-counter-content__total"),
    sliderCounterCurrent = document
    .getElementById("portfolio-counter")
    .querySelector(".slider-counter-content__current"),
    popupPortfolioSlides = document.querySelectorAll('.popup-portfolio-slider__slide'),
    popupPortfolioContent = document.querySelectorAll('.popup-portfolio-text'),
    popupPortfolioCounter = document.getElementById('popup-portfolio-counter').querySelector('.slider-counter-content__current'),
    popupPortfolioTotal = document.getElementById('popup-portfolio-counter').querySelector('.slider-counter-content__total'),
    style = document.querySelector("style");
  let currentSlideColumn = 0,
    currentSlide = 0,
    slideToShow = 0;
  popupPortfolioTotal.textContent = popupPortfolioSlides.length;
  style.textContent =
    style.textContent +
    `   .portfolio-slider__slide {
            transition: transform .5s!important;
            will-change: transform!important;
        }
         @media (max-width: 575px) {
           .portfolio-slider__slide {
            display: none;
        }
           .portfolio-slider__slide-frame:first-child {
            display:flex;
          }
          .portfolio-slider__slide-frame {
            display:none;
          }
          #portfolio-arrow_right {
            display:flex;
          }
          #portfolio-counter {
            z-index:999;
          }
        }
       
        `;

  popupPortfolioSlides[0].style.display = 'block';
  popupPortfolioContent[0].style.display = 'block';

  const nextSlide = (elem, index) => {
    style.textContent =
      style.textContent +
      `.portfolio-slider__slide {
            transform: translateX(-${elem[index].offsetLeft}px);
        }`;
    sliderCounterCurrent.textContent = index + 1;
  };
  const prevSlide = (elem, index) => {
    style.textContent =
      style.textContent +
      `.portfolio-slider__slide {
            transform: translateX(-${elem[index].offsetLeft}px);
        }`;
    sliderCounterCurrent.textContent = index + 1;
  };


  const prevSidePopup = (elem, index) => {
    elem[index].style.display = 'none';
    popupPortfolioCounter.textContent = index + 1;
  };
  const nextSidePopup = (elem, index) => {
    elem[index].style.display = 'flex';
    popupPortfolioCounter.textContent = index + 1;
  };

  const nextSlides = (elem, index) => {
    elem[index].style.display = 'flex';
    sliderCounterCurrent.textContent = index + 1;
  };
  const prevSlides = (elem, index) => {
    elem[index].style.display = 'none';
    sliderCounterCurrent.textContent = index + 1;
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest("#portfolio-arrow_left") ||
      e.target.closest("#portfolio-arrow_right")) {

      if (document.body.clientWidth < 575) {
        slideToShow = slides.length;
        sliderCounterTotal.textContent = slideToShow;
        prevSlides(slides, currentSlideColumn);
        if (e.target.closest("#portfolio-arrow_right")) {
          currentSlideColumn++;
        }
        if (e.target.closest("#portfolio-arrow_left")) {
          currentSlideColumn--;
        }
        arrowRight.style.display = "flex";
        if (currentSlideColumn === slides.length - 1) {
          arrowRight.style.display = "none";
        }
        arrowLeft.style.display = "flex";
        if (currentSlideColumn === 0) {
          arrowLeft.style.display = "none";
        }
        nextSlides(slides, currentSlideColumn);
      } else {
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
          ++currentSlideColumn;
          if (currentSlideColumn >= slideToShow - 1) {
            arrowRight.style.display = "none";
          }
          arrowLeft.style.display = "flex";
          nextSlide(slideColumn, currentSlideColumn);
        }
        if (e.target.closest("#portfolio-arrow_left")) {
          --currentSlideColumn;
          if (currentSlideColumn <= 0) {
            arrowLeft.style.display = "none";
          }
          arrowRight.style.display = "flex";
          prevSlide(slideColumn, currentSlideColumn);
        }
      }
    }

    if (e.target.closest(".portfolio-slider__slide-frame")) {
      disableScroll(popup);
    }
    if (e.target.closest('.popup-portfolio .close')) {
      allowScroll(popup);
    }
    if (e.target.closest('#popup_portfolio_right') ||
      e.target.closest('#popup_portfolio_left')) {

      prevSidePopup(popupPortfolioSlides, currentSlide);
      prevSidePopup(popupPortfolioContent, currentSlide);
      if (e.target.closest('#popup_portfolio_right')) {
        currentSlide++;
      }
      if (e.target.closest('#popup_portfolio_left')) {
        currentSlide--;
      }
      if (currentSlide >= popupPortfolioSlides.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = popupPortfolioSlides.length - 1;
      }
      nextSidePopup(popupPortfolioSlides, currentSlide);
      nextSidePopup(popupPortfolioContent, currentSlide);
    }

    // if (e.target.closest('#portfolio-arrow-mobile_left') ||
    //   e.target.closest('.portfolio-slider__slide-frame')) {
    //   prevSlides(slides, currentSlide);

    //   if (e.target.closest('#portfolio-arrow-mobile_left')) {
    //     currentSlide--;
    //   }
    //   if (e.target.matches('.portfolio-slider__slide-frame')) {
    //     console.log(e.target);
    //     currentSlide++;
    //   }
    //   if (currentSlide >= slides.length) {
    //     currentSlide = 0;
    //   }
    //   if (currentSlide < 0) {
    //     currentSlide = slides.length - 1;
    //   }
    //   nextSlides(slides, currentSlide);

    // }
  });
};

export default sliderPortfolio;