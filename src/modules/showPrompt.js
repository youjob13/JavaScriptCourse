const showPrompt = () => {
    const hiddenBlock = document.querySelectorAll('.formula-item-popup'),
        formula = document.querySelector('.wrapper_small').querySelectorAll('.formula-item'),
        formulaSlide = document.querySelectorAll('.formula-slider__slide'),
        style = document.querySelector('style');
    let currentSlide = 0;
    style.textContent =
        style.textContent +
        `
        .formula-slider__slide {
            opacity:0.8;
        }
    @media (max-width: 1024px) {
        .formula-item {
            max-width: 340px;
            display: none;
        }
    }`;
    formulaSlide[0].style.display = "flex";

    formula.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            formula[i].classList.add('active-item');
            hiddenBlock[i].style.top = null;
            if (hiddenBlock[i].getBoundingClientRect().top < 0) {
                hiddenBlock[i].style.top = '90px';
                style.textContent = style.textContent + `
                @media (min-width: 1024px) {
                    .formula-item-popup:before {
                        transform: rotateZ(180deg);
                    }
                }`;
            }
        });
        item.addEventListener('mouseout', () => {
            formula[i].classList.remove('active-item');
            if (document.body.clientWidth > 1024) {
                style.textContent = style.textContent + `
                @media (min-width: 1024px) {
                    .formula-item-popup:before {
                        transform: rotateZ(360deg);
                    }
                }`;
            }
        });
    });

    formulaSlide.forEach((item, i) => {
        item.addEventListener('mouseover', () => formulaSlide[i].classList.add('active-item'));
        item.addEventListener('mouseout', () => formulaSlide[i].classList.remove('active-item'));
    });

    const nextSlide = (elem, index) => {
        elem[index].style.display = "flex";
    };
    const prevSlide = (elem, index) => {
        elem[index].style.display = "none";
    };

    document.addEventListener("click", (e) => {
        if (
            e.target.closest("#formula-arrow_left") ||
            e.target.closest("#formula-arrow_right")
        ) {
            prevSlide(formulaSlide, currentSlide);
            if (e.target.closest("#formula-arrow_right")) {
                currentSlide++;
            }
            if (e.target.closest("#formula-arrow_left")) {
                currentSlide--;
            }
            if (currentSlide >= formulaSlide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = formulaSlide.length - 1;
            }
            nextSlide(formulaSlide, currentSlide);
        }
    });
};

export default showPrompt;