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
        const checkboxInput = item.querySelector('.checkbox__input');
        item.addEventListener('submit', (e) => {
            e.preventDefault();
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