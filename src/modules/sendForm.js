import popupThank from './popupThank';

const sendForm = () => {
    const form1 = document.getElementById('feedback1');
    const form2 = document.getElementById('feedback2');
    const form3 = document.getElementById('feedback3');
    const form4 = document.getElementById('feedback4');
    const form5 = document.getElementById('feedback5');
    const form6 = document.getElementById('feedback6');

    const forms = [];
    forms.push(form1, form2, form3, form4, form5, form6);
    forms.forEach(item => {
        const phoneInput = item.querySelector('.feedback__input-input') || item.querySelector('.feedback-block__form-input_phone');
        const nameInput = item.querySelector('.feedback-block__form-input_name');
        const checkboxInput = item.querySelector('.checkbox__input');
        const btn = item.querySelector('button');
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            if (phoneInput.value.trim() === '' ||
                (nameInput !== null &&
                    nameInput.value.trim() === '')) {
                const message = document.createElement('div');
                message.classList.add('ac21');
                message.style.cssText = `
                font-size:17px;
                font-family:sans-serif;
                margin:auto;
                padding:4px 8px;
                border-radius:8px;
                background-color:#e8e8e8;
                color:#f68741;`
                message.textContent = 'Заполните ВСЕ поля ввода перед отправкой';
                btn.after(message);
                btn.disabled = true;
                setTimeout(() => {
                    btn.disabled = false;
                    message.parentNode.removeChild(message);
                }, 2000);
                return;
            }
            if (!checkboxInput.checked) {
                return;
            }
            const formData = new FormData(item);

            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body).then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network is not 200');
                }
                phoneInput.value = '';
                nameInput.value = '';
                popupThank();
            }).catch((error) => console.error(error));
        });
    });

    const postData = (body) => fetch('server.php', {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON"
        },
        body: JSON.stringify(body)
    });
};

export default sendForm;