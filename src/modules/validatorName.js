const validatorName = () => {
    const nameInput = document.querySelectorAll('.feedback-block__form-input_name');

    nameInput.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^а-я-\s]/gi,'');
        });
    });
};

export default validatorName;