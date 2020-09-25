const popupConsultation = () => {
    const popupConsult = document.querySelector('.popup-consultation');

    document.addEventListener('click', (e) => {
        if (e.target.matches('.button_wide')) {
            popupConsult.style.visibility = 'visible';
            document.body.style.overflow = 'hidden';
        }
        if (e.target.matches('.close-consultation')) {
            popupConsult.style.visibility = 'hidden';
            document.body.style.overflow = 'auto';
        }
    });
};

export default popupConsultation;