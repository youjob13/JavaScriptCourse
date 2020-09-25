//доделать
const showPromptProblem = () => {
    const hiddenBlock = document.querySelector('#problems').querySelector('.wrapper_middle').querySelectorAll('.problems-item-popup'),
        hiddenSlides = document.querySelector('#problems').querySelector('.wrapper_small').querySelectorAll('.problems-item-popup'),
        problem = document.querySelector('#problems').querySelector('.wrapper_middle').querySelectorAll('.problems-item'),
        problemSlide = document.querySelector('#problems').querySelector('.wrapper_small').querySelectorAll('.problems-item'),
        style = document.querySelector('style');

    problemSlide.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            console.log(hiddenBlock[i]);
            hiddenSlides[i].style.visibility = 'visible';
            hiddenSlides[i].style.opacity = '1';
        });
        item.addEventListener('mouseout', () => {
            hiddenSlides[i].style.visibility = null;
            hiddenSlides[i].style.opacity = null;
            if (document.body.clientWidth > 1024) {
                style.textContent = style.textContent + `
                .problems-item-popup:before {
                    transform: rotateZ(360deg);
                }
                .problems-item-popup-1:before {
                    transform: rotateZ(180deg);
                }`
            }
        });
    });

    problem.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            hiddenBlock[i].style.visibility = 'visible';
            hiddenBlock[i].style.opacity = '1';
            hiddenBlock[i].style.top = null;

            if (hiddenBlock[i].getBoundingClientRect().top < 0) {
                hiddenBlock[i].style.top = '90px';
                style.textContent = style.textContent + `
        .problems-item-popup:before {
            transform: rotateZ(180deg);
        }
        .problems-item-popup-1:before {
                    transform: rotateZ(180deg);
                }`
            }
        });
        item.addEventListener('mouseout', () => {
            hiddenBlock[i].style.visibility = null;
            hiddenBlock[i].style.opacity = null;
            hiddenSlides[i].style.visibility = null;
            hiddenSlides[i].style.opacity = null;
            if (document.body.clientWidth > 1024) {
                style.textContent = style.textContent + `
        .problems-item-popup:before {
            transform: rotateZ(360deg);
        }
        .problems-item-popup-1:before {
                    transform: rotateZ(180deg);
                }`
            }
        });
    });

};

export default showPromptProblem;