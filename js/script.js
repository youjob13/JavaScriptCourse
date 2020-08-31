const signUpBtn = document.querySelector(".sign_up");
const signInBtn = document.querySelector(".sign_in");
const usersList = document.querySelector("#list");

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
    localStorage['database'] = JSON.stringify(database);

};

const render = () => {
    usersList.textContent = ''
    database.forEach((item, i, arr) => {
        const user = document.createElement("li");
        user.textContent = `Имя: ${arr[i].firstName}, Фамилия: ${arr[i].lastName}, Дата регистрации: ${arr[i].date}`;
        usersList.append(user);
    });
};

render();
signUpBtn.addEventListener("click", registration);