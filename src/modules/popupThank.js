const popupThank = () => {
    const popup = document.querySelector('.popup-thank');

    document.addEventListener('click', (e) => {
        if (e.target.closest('form>button')) {
            popup.style.visibility = 'visible';
        }
        if (e.target.closest('.close-thank')) {
            popup.style.visibility = 'hidden';
        }
    });
};

export default popupThank;