export default class SliderCarousel {
    constructor({
        main,
        wrap,
        next,
        prev,
        position = 0,
        slidesToShow = 2,
        infinity
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            infinity,
            position,
            widthSlide: Math.floor(100 / this.slidesToShow),
        };
    }

    init() {
        this.addClass();
        this.addStyle();
        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
    }

    addClass() {
        this.main.classList.add("wrapper");
        this.wrap.classList.add("partners-slider");
        for (const item of this.slides) {
            item.classList.add("partners-slider__slide");
        }
    }

    addStyle() {
        const style = document.createElement("style");
        style.textContent = style.textContent + `
      #partners .wrapper {
        overflow: hidden !important;
      }
      @media (max-width: 1024px) {
        .partners-slider__slide {
            max-width: 360px;
            min-height: auto;
        }
      }
      .partners-slider {
        display: flex !important;
        transition: transform .5s !important;
        will-change: transform !important;
      }
      .partners-slider__slide {
        flex: 0 0 ${this.options.widthSlide}% !important;
        margin: auto 0 !important;
      }
    `;
        document.head.append(style);
    }

    controlSlider() {
        this.prev.addEventListener("click", this.prevSlider.bind(this));
        this.next.addEventListener("click", this.nextSlider.bind(this));
    }

    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.slides.length - this.slidesToShow;
                this.wrap.style.transform = `translateX(-${
                this.options.position * this.options.widthSlide
            }%)`;
            } else {
                this.wrap.style.transform = `translateX(-${
                this.options.position * this.options.widthSlide
            }%)`;
            }
        }
        
    }

    nextSlider() {
        if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
            ++this.options.position;
            if (this.options.position > this.slides.length - this.slidesToShow) {
                this.options.position = 0;
            }

            this.wrap.style.transform = `translateX(-${
          this.options.position * this.options.widthSlide
        }%)`;
        }
    }
}