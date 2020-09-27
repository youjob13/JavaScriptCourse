import disableScroll from './disableScroll';
import allowScroll from './allowScroll';

const togglePopUpPrivacy = () => {
    const popupPrivacy = document.querySelector('.popup-privacy'),
        closePopupPrivacy = popupPrivacy.querySelector('.close'),
        closePopupPrivacy2 = popupPrivacy.querySelector('.desktop-hide');
    document.addEventListener('click', (e) => {
        if (e.target.matches('.link-privacy')) {
            disableScroll(popupPrivacy);
        } else if (e.target === closePopupPrivacy || e.target === closePopupPrivacy2) {
            allowScroll(popupPrivacy);
        }
    });
};

export default togglePopUpPrivacy;