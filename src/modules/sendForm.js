const sendForm = () => {
    const errorMessage = "Что-то пошло не так...",
        loadMessage = "Загрузка...",
        successMessage = "Спасибо, мы скоро с вами свяжимся";

    const form = document.getElementById("form1"),
        form2 = document.getElementById("form2"),
        form3 = document.getElementById("form3");

    const forms = [];

    let numLength = 0;

    forms.push(form, form2, form3);

    const statusMessage = document.createElement("div");
    statusMessage.style.cssText = `font-size: 2rem;
        color: #fff;`;

    forms.forEach((item) => {
        let input = item.querySelectorAll("input");
        const popUp = document.querySelector(".popup");

        popUp.addEventListener("click", (event) => {
            let target = event.target;
            let popUpTarget = target.closest(".popup-content");
            if (popUpTarget === null || target.matches('.popup-close')) {
                input.forEach((item) => {
                    item.value = "";
                });
                statusMessage.textContent = "";
            }
        });


        [...input].forEach((elem) => {
            elem.addEventListener("input", () => {
                if (elem.classList.contains("form-phone")) {
                    elem.value = elem.value.replace(/[^0-9+]/g, "");
                    numLength = elem.value.length;
                } else if (elem.classList.contains("form-email")) {
                    return;
                } else {
                    elem.value = elem.value.replace(/[^А-Я\s]/gi, "");
                }
            });
        });

        item.addEventListener("submit", (e) => {
            e.preventDefault();
            if (numLength < 11) {
                return;
            }
            const input = item.querySelectorAll("input");
            item.append(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(item);
            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body).then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network is not 200');
                }
                statusMessage.textContent = successMessage;
                if (item.id !== "form3") {
                    setTimeout(() => (statusMessage.textContent = ""), 2000);
                }

                input.forEach((item) => {
                    item.value = "";
                });
            }).catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });

        });
    });

    const postData = (body) => fetch('server.php', {
        method: 'POST',
        headers: {
            "Content-Type": "application/JSON"
        },
        body: JSON.stringify(body)
    });
};

export default sendForm;