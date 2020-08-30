const signUpBtn = document.querySelector('.sign_up');
const signInBtn = document.querySelector('.sign_in');
const usersList = document.querySelector('#list');

const regDate = new Date();
const database = [];

const optionsMonth = {
    month: "long",
};

const checkTime = (time) => {
    if (time < 10) {
        return '0' + time ;
    } else {
        return time;
    }
};

const dateToday = () => {
    let monthLength = regDate.toLocaleString("ru", optionsMonth).length;
    let today = regDate.getDate() + " " + regDate.toLocaleString("ru", optionsMonth) + " " + regDate.getFullYear() + ' г. ' +
        checkTime(regDate.getHours()) + ':' + checkTime(regDate.getMinutes()) + ':' + checkTime(regDate.getSeconds());
    return today;
};

const registration = () => {
    const name = prompt('Введите через пробел Имя и Фамилию пользователя', 'Данил Родионов');
    const firstName = name.split(' ');
    const login = prompt('Придумайте логин', 'YouJOB');
    const password = prompt('Придумайте пароль', '12345');
    const user = document.createElement('li');
    user.textContent = 'Имя: ' + firstName[0] + ', Фамилия: ' + firstName[1] + ', Дата регистрации: ' + dateToday();
    usersList.append(user);
    const usersAcc = {
        firstName: firstName[0],
        lastName: firstName[1],
        login,
        password,
        date: dateToday(),
    };
    database.push(usersAcc);
    console.log(database);

    console.log(usersAcc);
};
signUpBtn.addEventListener('click', registration);