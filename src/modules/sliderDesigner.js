const sliderDesigner = () => {
    const slider = document.querySelector('.designs-slider'),
        slides = slider.children,
        style = document.querySelector('style'),
        slideElem = document.querySelectorAll('.preview-block'),
        slideCurrent = document.querySelector('.designs-slider-wrap').querySelector('.slider-counter-content__current'),
        designList = document.getElementById('designs-list'),
        designListItem = designList.children,
        slideTotal = document.querySelector('.designs-slider-wrap').querySelector('.slider-counter-content__total');
    [...slides].forEach(item => {
        item.style.display = 'none';
    })
    slides[0].style.display = 'block';

    let currentSlide = 0;
    style.textContent = style.textContent + `
        @media(max-width: 1080px) {
            .preview-block {
                display:none!important;
                visibility: hidden!important;
            }
        #designs-list {
          overflow:hidden;
        }
    }`;
    slideTotal.textContent = slides.length;
    const nextSlide = (elem, index) => {
            slideElem[index].classList.add('active');
            slideElem[index].style.visibility = 'visible';
            slideElem[index].style.display = 'flex';

        if (document.body.clientWidth < 1024) {
            style.textContent = style.textContent + `
      @media(max-width: 1080px) {
      .designs-nav__item {
        transform: translateX(-${designListItem[index].offsetWidth * index}px);
      };
    }`;
        }
        elem[index].style.display = "flex";
        designListItem[index].classList.add('active');
    };
    const prevSlide = (elem, index) => {
        slideElem[index].style.display = 'none';
        slideElem[index].style.visibility = 'hidden';
        elem[index].style.display = "none";
        designListItem[index].classList.remove('active');
    };

    const prevSlidePreview = (elem, index, link) => {
        link = link.replace(/_preview./g, '.');
        link = link.replace(/_prevew./g, '.');
        elem[index].querySelector('img').setAttribute('src', `${link}`);
    };
    document.addEventListener('click', (e) => {

        prevSlide(slides, currentSlide);
        if (e.target.closest('#design_right') ||
            e.target.closest('#nav-arrow-designs_right')
        ) {
            currentSlide++;
        } else if (e.target.closest('#design_left') ||
            e.target.closest('#nav-arrow-designs_left')) {
            currentSlide--;
        }
        [...designListItem].forEach((item, i) => {
            if (e.target === item) {
                currentSlide = i;
            }
        });

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        nextSlide(slides, currentSlide);
        slideCurrent.textContent = currentSlide + 1;

        if (e.target.closest('.preview-block__item')) {
            prevSlidePreview(slides, currentSlide, e.target.closest('.preview-block__item').querySelector('img').getAttribute('src'));
        }
    })
};

export default sliderDesigner;