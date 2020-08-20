function fixSeconds(num) {
  if (
    (num % 10 >= 5 && num % 10 <= 9) ||
    num % 10 === 0 ||
    (num >= 10 && num <= 20)
  ) {
    return " секунд ";
  } else if (num % 10 === 1) {
    return " секунда ";
  } else if (num % 10 >= 2 && num % 10 <= 4) {
    return " секунды ";
  }
}

function fixMinutes(num) {
  if (
    (num % 10 >= 5 && num % 10 <= 9) ||
    num % 10 === 0 ||
    (num >= 10 && num <= 20)
  ) {
    return " минут ";
  } else if (num % 10 === 1) {
    return " минута ";
  } else if (num % 10 >= 2 && num % 10 <= 4) {
    return " минуты ";
  }
}

function fixHours(num) {
  if (num >= 5 && num <= 20) {
    return " часов ";
  } else if (num % 10 === 1) {
    return " час ";
  } else if (num % 10 >= 2 && num % 10 <= 4) {
    return " часа ";
  } else if (num === 0) {
    return " часов ";
  }
}

function addEnd(num) {
  if (num === 'август' || num === 'март') {
    return num + "а";
  } else {
    return num.slice(0, num.length - 1) + 'я';
  }
}

function addNull(num) {
  if (num < 10) {
    return '0' + num;
  } else {
    return num;
  }
}

const optionsWeek = {
    weekday: "long",
  },
  optionsMonth = {
    month: "long",
  };
const str1 = document.createElement("h3"),
  str2 = document.createElement("h3");
(str1.className = "str1"), (str2.className = "str2");
document.body.append(str1, str2);

function getNum() {
  const dayValue = new Date();
  console.log(dayValue.toLocaleString("ru", optionsMonth));
  //A
  str1.textContent =
    "Сегодня " +
    dayValue.toLocaleString("ru", optionsWeek)[0].toLocaleUpperCase() +
    dayValue.toLocaleString("ru", optionsWeek).substr(1).toLowerCase() +
    ", " +
    dayValue.getDate() +
    " " +
    addEnd(dayValue.toLocaleString("ru", optionsMonth)) +
    " " +
    dayValue.getFullYear() +
    " года, " +
    addNull(dayValue.getHours()) +
    fixHours(dayValue.getHours()) +
    addNull(dayValue.getMinutes()) +
    fixMinutes(dayValue.getMinutes()) +
    addNull(dayValue.getSeconds()) +
    fixSeconds(dayValue.getSeconds());

  //B
  str2.textContent =
    dayValue.toLocaleDateString() + " - " + dayValue.toLocaleTimeString();

  return str1, str2;
}

const timerId = window.setInterval(getNum, 1000);