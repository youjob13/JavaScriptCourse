const signUpBtn = document.querySelector(".sign_up");
const signInBtn = document.querySelector(".sign_in");
const usersList = document.querySelector("#list");
const welcome = document.querySelector('.hello');

const optionsMonth = {
    month: "long",
};

const checkTime = (time) => {
    if (time < 10) {
        return "0" + time;
    } else {
        return time;
    }
};

const checkMonth = (value) => {
    if (value === 'август' || value === 'март') {
        return value + 'а';
    } else {
        return value.slice(0, -1) + 'я';
    }
};

const database = localStorage['database'] ? JSON.parse(localStorage['database']) : [];

const registration = () => {
    const regDate = new Date();

    const name = prompt("Введите через пробел Имя и Фамилию пользователя", "Адиль Жалелов");
    const names = name.split(" ");
    console.log(names);
    if (names === '' || names.length > 2 || names.length < 2) {
        alert('Введите корректные данные');
    } else {
        const usersAcc = {
            firstName: names[0],
            lastName: names[1],
            login: prompt("Придумайте логин", "YouJOB"),
            password: prompt("Придумайте пароль", "12345"),
            date: regDate.getDate() +
                " " +
                checkMonth(regDate.toLocaleString("ru", optionsMonth)) +
                " " +
                regDate.getFullYear() +
                " г. " +
                checkTime(regDate.getHours()) +
                ":" +
                checkTime(regDate.getMinutes()) +
                ":" +
                checkTime(regDate.getSeconds()),
        };

        database.push(usersAcc);
        render();
    }


};

const authorization = () => {
    const login = prompt('Введите логин:');
    const password = prompt('Введите пароль:');
    database.forEach((item, i, arr) => {
        if (login === arr[i].login && password === arr[i].password) {
            welcome.textContent = `Привет ${arr[i].firstName}`;
        } else if (login === arr[i].login || password === arr[i].password) {
            alert('Ошибка');
        }
    });
};

const render = () => {
    usersList.textContent = ''
    database.forEach((item, i, arr) => {
        const user = document.createElement("li");
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add('btn-delete')
        user.textContent = `Имя: ${arr[i].firstName}, Фамилия: ${arr[i].lastName}, Дата регистрации: ${arr[i].date}`;
        usersList.append(user);
        user.append(deleteBtn);

        deleteBtn.addEventListener('click', () => {
            delete database[i];
            localStorage.removeItem('database');
            welcome.textContent = 'Привет аноним';
            render();
        });
        localStorage['database'] = JSON.stringify(database);

    });
};

render();
signUpBtn.addEventListener("click", registration);
signInBtn.addEventListener("click", authorization);