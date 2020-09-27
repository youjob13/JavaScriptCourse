import disableScroll from './disableScroll';
import allowScroll from './allowScroll';

const popupThank = () => {
    const popup = document.querySelector('.popup-thank');
    disableScroll(popup);
    document.addEventListener('click', (e) => {
        if (e.target.closest('.close-thank')) {
            allowScroll(popup);
        }
    });

};

export default popupThank;