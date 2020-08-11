'use strict'

let period,
    budgetDay,
    accumulatedMonth;
const income = 'Стипендия',
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
      deposit = confirm('Есть ли у вас депозит в банке?'),
      money = +prompt('Ваш ежемесячный доход?'),
      expenses1 = prompt('Введите обязательную статью расходов?'),
      expenses2 = prompt('Введите обязательную статью расходов?'),
      amount1 = +prompt('Во сколько это обойдется?'),
      amount2 = +prompt('Во сколько это обойдется?');
const mission = 100000;

function showTypeOf(data) {
    console.log(typeof (data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

function getExpensesMonth() {
    return amount1 + amount2;
 }
console.log('Расходы за месяц: ' + getExpensesMonth() + ' руб.');

console.log(addExpenses.toLowerCase().split([,[]]));

function getAccumulatedMonth() {
    return accumulatedMonth = money - amount1 - amount2;
}
getAccumulatedMonth();

function getTargetMonth() {
    return  period = Math.ceil(mission / accumulatedMonth);
}
getTargetMonth();
console.log('Цель будет достигнута за: ' + period + ' месяцев');

console.log('Ваш бюджет на день: ' + (budgetDay = Math.floor(accumulatedMonth / 30)) + ' руб.');

function getStatusIncome() {
    return income;
}
console.log(getStatusIncome());