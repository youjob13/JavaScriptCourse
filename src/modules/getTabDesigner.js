const getTabDesigner = () => {
    const sliders = document.querySelector('.designs-slider').children,
        navigation = document.querySelector('#designs-list').querySelectorAll('.designs-nav__item'),
        previewSlides = document.querySelectorAll('.preview-block'),
        style = document.querySelector('style');
    let currentSlider = 0;

    style.textContent = style.textContent + `
        @media(max-width: 1080px) {
            #designs-list {
                overflow:hidden;
            }
        }`;
    const nextSlide = (elem, index) => {
        if (document.body.clientWidth < 1024) {
            style.textContent = style.textContent + `
    @media(max-width: 1080px) {
        #designs-list {
            transform: translateX(-${navigation[index].offsetLeft}px);
        };
    }`;
        }
        elem[index].style.display = 'flex';
        navigation[index].classList.add('active');
        previewSlides[index].classList.add('visible');
    };
    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
        navigation[index].classList.remove('active');
        previewSlides[index].classList.remove('visible');
    };

    document.addEventListener('click', (e) => {
        //табы + слайдер для табов
        if (e.target.matches('.designs-nav__item')) {
            navigation.forEach((item, i) => {
                if (e.target === item) {
                    currentSlider = i;
                    nextSlide(sliders, currentSlider);
                } else {
                    prevSlide(sliders, i);
                }
            });
        }
        if (e.target.closest('#nav-arrow-designs_right') ||
            e.target.closest('#nav-arrow-designs_left')) {
            prevSlide(sliders, currentSlider);
            if (e.target.closest('#nav-arrow-designs_right')) {
                currentSlider++;
            }
            if (e.target.closest('#nav-arrow-designs_left')) {
                currentSlider--;
            }
            if (currentSlider >= sliders.length) {
                currentSlider = 0;
            }
            if (currentSlider < 0) {
                currentSlider = sliders.length - 1;
            }
            nextSlide(sliders, currentSlider);
        }
    });
};

export default getTabDesigner;