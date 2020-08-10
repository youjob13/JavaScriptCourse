'use strict'

let period = 4;
const income = 'Стипендия',
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
      deposit = confirm('Есть ли у вас депозит в банке?'),
      money = prompt('Ваш ежемесячный доход?'),
      expenses1 = prompt('Введите обязательную статью расходов?'),
      expenses2 = prompt('Введите обязательную статью расходов?'),
      amount1 = prompt('Во сколько это обойдется?'),
      amount2 = prompt('Во сколько это обойдется?');
const mission = 100000;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцам');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split([, []]));

let budgetMonth = money - amount1 - amount2;
console.log('Ваш бюджет на месяц: ' + budgetMonth);

period = Math.ceil(mission / budgetMonth)
console.log('Цель будет достигнута: ' + period + ' месяцев');

let budgetDay = Math.floor(budgetMonth / 30);
console.log('Ваш бюджет на день: ' + budgetDay);

if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay <= 1200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay <= 600) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
}