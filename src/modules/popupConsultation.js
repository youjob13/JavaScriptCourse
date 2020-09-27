import disableScroll from './disableScroll';
import allowScroll from './allowScroll';

const popupConsultation = () => {
    const popupConsult = document.querySelector('.popup-consultation');
    document.addEventListener('click', (e) => {
        if (e.target.matches('.button_wide')) {
            disableScroll(popupConsult);
        }
        if (e.target.matches('.close-consultation')) {
            allowScroll(popupConsult);
        }
    });
};

export default popupConsultation;
