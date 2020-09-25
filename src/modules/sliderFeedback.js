const sliderFeedback = () => {
    const reviewSlider = document
        .getElementById("reviews")
        .querySelectorAll(".reviews-slider__slide"),
        dots = document
        .getElementById("reviews")
        .querySelector(".slider-dots-reviews").querySelectorAll('.dot-reviews'),
        style = document.querySelector("style");
    let currentSlide = 0;
    
    style.textContent = style.textContent + `
    .reviews-slider__slide {
        display:none;
    }
    .slider-dots-reviews {
        display:flex;
    }
    `;
    reviewSlider[0].style.display = 'flex';

    const nextSlide = (elem, index) => {
        elem[index].style.display = 'flex';
        dots[index].classList.add('dot_active');
    };
    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
        dots[index].classList.remove('dot_active');
    };

    document.addEventListener('click', (e) => {
        if (e.target.closest('#reviews-arrow_right') ||
            e.target.closest('#reviews-arrow_left')) {
            prevSlide(reviewSlider, currentSlide);
            if (e.target.closest('#reviews-arrow_right')) {
                currentSlide++;
            }
            if (e.target.closest('#reviews-arrow_left')) {
                currentSlide--;
            }
            if (currentSlide >= reviewSlider.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = reviewSlider.length - 1;
            }
            nextSlide(reviewSlider, currentSlide);
        }
        if (e.target.closest('.dot-reviews'))
        dots.forEach((item, i) => {
            if (e.target === item) {
                currentSlide = i;
                nextSlide(reviewSlider, currentSlide);
            } else {
                prevSlide(reviewSlider, i);
            }
        });

    });
};

export default sliderFeedback;