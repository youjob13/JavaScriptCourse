import disableScroll from './disableScroll';
import allowScroll from './allowScroll';

const popupThank = () => {
    const popup = document.querySelector('.popup-thank');

    document.addEventListener('click', (e) => {
        if (e.target.closest('form>button')) {
            disableScroll(popup);
        }
        if (e.target.closest('.close-thank')) {
            allowScroll(popup);
        }
    });
};

export default popupThank;