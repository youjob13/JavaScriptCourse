import disableScroll from './disableScroll';
import allowScroll from './allowScroll';

const popupConsultation = () => {
    const popupConsult = document.querySelector('.popup-consultation');
    const popupThank = document.querySelector('.popup-thank');

    document.addEventListener('click', (e) => {
        if (e.target.matches('.button_wide')) {
            popupThank.classList.add('no_scroll');
            disableScroll(popupConsult);
        }
        if (e.target.matches('.close-consultation')) {
            popupThank.classList.remove('no_scroll');
            allowScroll(popupConsult);
        }
    });
};

export default popupConsultation;
