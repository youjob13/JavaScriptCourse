const str = document.querySelector('.task-a'),
    str2 = document.querySelector('.task-b');

let timerId = setInterval(function () {
        let dayValue = new Date();
        const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            month = ['Декабря', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября'];
        // A
        function fixSeconds(num) {
            if ((num % 10 >= 5 && num % 10 <= 9) || num % 10 === 0 || (num >= 10 && num <= 20)) {
                return ' секунд ';
            } else if (num % 10 === 1) {
                return ' секунда ';
            } else if (num % 10 >= 2 && num % 10 <= 4) {
                return ' секунды ';
            }
        }

        function fixMinutes(num) {
            if ((num % 10 >= 5 && num % 10 <= 9) || num % 10 === 0 || (num >= 10 && num <= 20)) {
                return ' минут ';
            } else if (num % 10 === 1) {
                return ' минута ';
            } else if (num % 10 >= 2 && num % 10 <= 4) {
                return ' минуты ';
            }
        }

        function fixHours(num) {
            switch (num) {
                case 1:
                    return ' час ';
                case 2:
                    return ' часа ';
                case 3:
                    return ' часа ';
                case 4:
                    return ' часа ';
                case 5:
                    return ' часов ';
                case 6:
                    return ' часов ';
                case 7:
                    return ' часов ';
                case 8:
                    return ' часов ';
                case 9:
                    return ' часов ';
                case 10:
                    return ' часов ';
                case 11:
                    return ' часов ';
                case 12:
                    return ' часов ';
                case 13:
                    return ' часов ';
                case 14:
                    return ' часов ';
                case 15:
                    return ' часов ';
                case 16:
                    return ' часов ';
                case 17:
                    return ' часов ';
                case 18:
                    return ' часов ';
                case 19:
                    return ' часов ';
                case 20:
                    return ' часов ';
                case 21:
                    return ' час ';
                case 22:
                    return ' часа ';
                case 23:
                    return ' часа ';
                case 24:
                    return ' часа ';
            }
        }

        week.forEach(function (item, i, week) {
            i = dayValue.getDay();
            month.forEach(function (item, j, month) {
                j = dayValue.getMonth();
                str2.textContent = 'Сегодня ' + week[i] + ', ' + dayValue.getDate() + ' ' + month[j] + ' ' + dayValue.getFullYear() + ' года, ' +
                    dayValue.getHours() + fixHours(dayValue.getHours()) + dayValue.getMinutes() + fixMinutes(dayValue.getMinutes()) +
                    dayValue.getSeconds() + fixSeconds(dayValue.getSeconds());
            });
        });



        // B
        function fixNum(num) {
            if (num < 10) {
                return '0' + num;
            } else {
                return num;
            }
        }

        str.textContent = (fixNum(dayValue.getDate()) + '.' + fixNum(dayValue.getMonth()) + '.' + fixNum(dayValue.getFullYear()) + ' - ' +
            fixNum(dayValue.getHours()) + ':' + fixNum(dayValue.getMinutes()) + ':' + fixNum(dayValue.getSeconds()));
    },1000);