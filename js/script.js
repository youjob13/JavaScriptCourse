'use strict'
//запомнить
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let budgetDay,
    money,
    accumulatedMonth;
let expenses = [];
const income = 'Стипендия',
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
      deposit = confirm('Есть ли у вас депозит в банке?');
const mission = 100000;

do {
    money = prompt('Ваш ежемесячный доход?');
} while (!isNumber(money));

function showTypeOf(data) {
    console.log(typeof (data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split([,[]]));

let getExpensesMonth = function() {
    let sum = 0;
    let amount = 0;
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?');
        amount = prompt('Во сколько это обойдется?');
        while (!isNumber(amount)) {
            amount = prompt('Во сколько это обойдется?');
        }
        sum = sum + +amount;
    }
    console.log(expenses);
    return sum;
}
let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount + ' руб.');

function getAccumulatedMonth() {
    return money - expensesAmount;
}
accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
    const period = Math.ceil(mission / accumulatedMonth);
    if (period < 0) {
       return console.log('Цель не будет достигнута');
    } else {
       return console.log('Цель будет достигнута за: ' + period + ' месяцев');
    }
}
getTargetMonth();

console.log('Ваш бюджет на день: ' + (budgetDay = Math.floor(accumulatedMonth / 30)) + ' руб.');

function getStatusIncome() {
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600 && budgetDay < 1200) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay > 0 && budgetDay < 600) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return ('Что то пошло не так');
    }
}
console.log(getStatusIncome());