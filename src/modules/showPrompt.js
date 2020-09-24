const showPrompt = () => {
    const hiddenBlock = document.querySelectorAll('.formula-item-popup'),
        hiddenSlides = document.querySelector('.desktop-hide').querySelectorAll('.formula-item-popup'),
        formula = document.querySelector('.wrapper_small').querySelectorAll('.formula-item'),
        formulaSlide = document.querySelectorAll('.formula-slider__slide');

    formulaSlide.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            console.log(hiddenBlock[i]);
            hiddenSlides[i].style.visibility = 'visible';
            hiddenSlides[i].style.opacity = '1';
        });
        item.addEventListener('mouseout', () => {
            hiddenSlides[i].style.visibility = null;
            hiddenSlides[i].style.opacity = null;
        });
    });

    formula.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            hiddenBlock[i].style.visibility = 'visible';
            hiddenBlock[i].style.opacity = '1';
            hiddenBlock[i].style.top = null;
            if (hiddenBlock[i].getBoundingClientRect().top < 0) {
                hiddenBlock[i].style.top = '90px';
            }
        });
        item.addEventListener('mouseout', () => {
            hiddenBlock[i].style.visibility = null;
            hiddenBlock[i].style.opacity = null;
            hiddenSlides[i].style.visibility = null;
            hiddenSlides[i].style.opacity = null;
        });
    });
};

export default showPrompt;