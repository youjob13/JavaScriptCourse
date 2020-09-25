const getTabWork = () => {
    const slide = document
        .querySelector(".scheme-slider")
        .querySelectorAll(".scheme-slider__slide"),
        description = document.querySelectorAll(".scheme-description-block"),
        navigation = document
        .getElementById("scheme-list")
        .querySelectorAll(".scheme-nav__item"),
        style = document.querySelector("style");
    let currentSlide = 0;

    style.textContent =
        style.textContent +
        `
        .scheme-slider__slide {
            display: none;
        }
        `;
    slide[0].style.display = "block";

    const nextSlide = (elem, index) => {
        if (document.body.clientWidth < 1024) {
            style.textContent =
                style.textContent +
                `
      @media(max-width: 1080px) {
      #scheme-list {
        transform: translateX(-${navigation[index].offsetLeft}px);
      };
    }`;
        }
        elem[index].style.display = "block";
        navigation[index].classList.add("active");
        description[index].classList.add("visible-content-block");
    };
    const prevSlide = (elem, index) => {
        elem[index].style.display = "none";
        navigation[index].classList.remove("active");
        description[index].classList.remove("visible-content-block");
    };

    document.addEventListener("click", (e) => {
        //табы
        if (e.target.closest("#scheme-list")) {
            navigation.forEach((item, i) => {
                if (e.target === item) {
                    currentSlide = i;
                    nextSlide(slide, currentSlide);
                } else {
                    prevSlide(slide, i);
                }
            });
        }
        //слайдер
        if (e.target.closest("#nav-arrow-scheme_left") ||
            e.target.closest("#nav-arrow-scheme_right")) {
            prevSlide(slide, currentSlide);
            if (e.target.closest("#nav-arrow-scheme_left")) {
                currentSlide--;
            }
            if (e.target.closest("#nav-arrow-scheme_right")) {
                currentSlide++;
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide);
        }
    });
};

export default getTabWork;