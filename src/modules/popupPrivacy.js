const togglePopUpPrivacy = () => {
    const linkPrivacy = document.querySelector('.wrapper_middle').querySelector('.link-privacy'),
        popupPrivacy = document.querySelector('.popup-privacy'),
        closePopupPrivacy = popupPrivacy.querySelector('.close');

    document.addEventListener('click', (e) => {
        if (e.target === linkPrivacy) {
            popupPrivacy.style.visibility = 'visible';
        } else if (e.target === closePopupPrivacy) {
            popupPrivacy.style.visibility = 'hidden';
        }
    });

};

export default togglePopUpPrivacy;