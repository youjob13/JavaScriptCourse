const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let day = document.getElementsByClassName('weeks');
let todayDay = new Date();
// textContent не подошел т.к. выводит чистый текст не преобразуя команды italics() и bold()
function days() {
    for (let i = 0; i < week.length; i++) {
        if (i === todayDay.getDay()) {
            day[i].innerHTML = week[i].bold().italics();
        }
    }
}

for (let i = 0; i < week.length; i++) {
    days();
    if (i > 4) {
        day[i].innerHTML = week[i].italics();
    } else {
        day[i].innerHTML = week[i];
    }
}