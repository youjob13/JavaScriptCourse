const showPhone = () => {
    const arrow = document.querySelector('.header-contacts__arrow'),
        numberPhoneAccord = document.querySelector('.header-contacts__phone-number-accord'),
        numberPhone = numberPhoneAccord.querySelector('.header-contacts__phone-number');

    const style = document.createElement('style');
    document.querySelector('head').append(style);

    style.textContent = style.textContent + `
    .position {
        position: relative!important;
    }
    .opacity {
        opacity: 1!important;
    }
    .arrow-rotate {
        transform: rotateZ(180deg) !important;
    }
    `;
    
    arrow.addEventListener('click', (e) => {
        debugger;
        e.preventDefault();
        numberPhoneAccord.classList.toggle('position');
        numberPhone.classList.toggle('opacity');
        arrow.classList.toggle('arrow-rotate');
    });
};

export default showPhone;