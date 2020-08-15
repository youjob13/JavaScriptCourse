'use strict';
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const day = document.getElementsByClassName('weeks');
const todayDay = new Date();

function days() {
    week.forEach(function (item, i, week) {
        if (i === todayDay.getDay()) {
            day[i - 1].classList.add('today');
            day[i].classList.remove('today');
        }
    });
}

week.forEach(function (item, i, week) {
    days();
    if (item == 'Суббота' || item =='Воскресенье') {
        day[i].classList.add('italic');
        day[i].textContent = week[i];
    } else {
        day[i].textContent = week[i];
    }
});