const agreementSlider = () => {
    const agreementSlides = document.querySelectorAll('.transparency-item');
    const style = document.querySelector('style');
    let currentSlide = 0;
    style.textContent = style.textContent + `
    @media(max-width: 1080px) {
        .transparency-item {
            display: none;
        };
    }
    `;
    agreementSlides[0].style.display = 'flex';
    
    const nextSlide = (elem, index) => {
        elem[index].style.display = 'flex';
    };
    const prevSlide = (elem, index) => {
        elem[index].style.cssText = `@media(max-width: 1080px) {
        .transparency-item {
            display: none;
        };
    }`;
    };

    document.addEventListener('click', (e) => {
        prevSlide(agreementSlides, currentSlide);
        if (e.target.closest('#transparency-arrow_right')) {
            currentSlide++;
        } else if (e.target.closest('#transparency-arrow_left')) {
            currentSlide--;
        }
        if (currentSlide >= agreementSlides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = agreementSlides.length - 1;
        }
        nextSlide(agreementSlides, currentSlide);
    });
};

export default agreementSlider;