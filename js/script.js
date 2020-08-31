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

const dateToday = () => {
    let monthLength = regDate.toLocaleString("ru", optionsMonth).length;
    let today =
        regDate.getDate() +
        " " +
        regDate.toLocaleString("ru", optionsMonth) +
        " " +
        regDate.getFullYear() +
        " г. " +
        checkTime(regDate.getHours()) +
        ":" +
        checkTime(regDate.getMinutes()) +
        ":" +
        checkTime(regDate.getSeconds());
    return today;
};


const regDate = new Date();
const database = localStorage['database'] ? JSON.parse(localStorage['database']) : [];


const registration = () => {
    const name = prompt(
        "Введите через пробел Имя и Фамилию пользователя",
        "Адиль Жалелов"
    );

    const firstName = name.split(" ");
    const login = prompt("Придумайте логин", "YouJOB");
    const password = prompt("Придумайте пароль", "12345");

    const usersAcc = {
        firstName: firstName[0],
        lastName: firstName[1],
        login,
        password,
        date: dateToday(),
    };
    database.push(usersAcc);

    const user = document.createElement("li");
    user.textContent = usersAcc.firstName + ' ' + usersAcc.lastName + ' ' + usersAcc.date;
    usersList.append(user);
    localStorage['database'] = JSON.stringify(database);

};

signUpBtn.addEventListener("click", registration);