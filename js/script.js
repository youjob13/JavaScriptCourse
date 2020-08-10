'use strict'

const income = 'Стипендия';
const mission = 100000;
let addExpenses = 'На покушать, На отдохнуть, На коммуналку',
    deposit = true,
    money = 10000,
    period = 4,
    expenses1,
    expenses2,
    amount1 = 0,
    amount2 = 0;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцам');
console.log('Цель заработать ' + mission + ' рублей');

addExpenses = addExpenses.toLowerCase();
console.log(addExpenses.split([,[]]));

let budgetDay = money / 30;

money = prompt('Ваш ежемесячный доход?');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');

expenses1 = prompt('Введите обязательную статью расходов?');
expenses2 = prompt('Введите обязательную статью расходов?');

amount1 = prompt('Во сколько это обойдется?');
amount2 = prompt('Во сколько это обойдется?');

let budgetMonth = money - amount1 - amount2;
console.log('Ваш бюджет на месяц: ' + budgetMonth);

period = Math.round(mission / budgetMonth)
console.log('Цель будет достигнута: ' + period + ' месяцев');

budgetDay = Math.floor(budgetMonth / 30);
console.log('Ваш бюджет на день: ' + budgetDay);

if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay > 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay > 0 && budgetDay < 600) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
}