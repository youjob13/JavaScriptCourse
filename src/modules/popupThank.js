import disableScroll from './disableScroll';
import allowScroll from './allowScroll';

const popupThank = () => {
    const popup = document.querySelector('.popup-thank');
    let indexTimeout;
    disableScroll(popup);
    document.addEventListener('click', (e) => {
        if (e.target.closest('.close-thank')) {
            allowScroll(popup);
            clearTimeout(indexTimeout);
        }
    });
    indexTimeout = setTimeout(() => allowScroll(popup), 5000);
};

export default popupThank;