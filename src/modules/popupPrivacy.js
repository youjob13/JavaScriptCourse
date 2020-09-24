const togglePopUpPrivacy = () => {
    const popupPrivacy = document.querySelector('.popup-privacy'),
        closePopupPrivacy = popupPrivacy.querySelector('.close');

    document.addEventListener('click', (e) => {
        if (e.target.matches('.link-privacy')) {
            popupPrivacy.style.visibility = 'visible';
        } else if (e.target === closePopupPrivacy) {
            popupPrivacy.style.visibility = 'hidden';
        }
    });
};

export default togglePopUpPrivacy;