"use strict";
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  start = function () {
    do {
      money = prompt("Ваш ежемесячный доход?");
    } while (!isNumber(money));
  };
start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  budget: money,
  mission: 100000,
  period: 3,
  budgetDay: 0,
  expensesMonth: 0,
  budgetMonth: 0,
  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += +appData.expenses[key];
    }
    return sum;
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.getExpensesMonth();
    return appData.budgetMonth;
  },
  getTargetMonth: function () {
    appData.budgetDay = Math.floor(accumulatedMonth / 30);
    appData.period = Math.ceil(appData.mission / accumulatedMonth);
    if (appData.period < 0) {
      return console.log("Цель не будет достигнута");
    } else {
      return console.log(
        "Цель будет достигнута за: " + appData.period + " месяцев"
      );
    }
  },
  asking: function () {
    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую"
    );
    appData.addExpenses = addExpenses.toLowerCase().split([, []]);
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
    let expensesIndex,
      amount = 0;
    for (let i = 0; i < 2; i++) {
      expensesIndex = prompt("Введите обязательную статью расходов?");
      if (expensesIndex == "") {
        expensesIndex = [i + 1];
      }
      console.log(expensesIndex);
      amount = prompt("Во сколько это обойдется?");
      while (!isNumber(amount)) {
        amount = prompt("Во сколько это обойдется?");
      }
      appData.expenses[expensesIndex] = amount;
      console.log(typeof amount);
    }
    return appData.expenses;
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return "У вас высокий уровень дохода";
    } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
      return "У вас средний уровень дохода";
    } else if (appData.budgetDay > 0 && appData.budgetDay < 600) {
      return "К сожалению у вас уровень дохода ниже среднего";
    } else {
      return "Что то пошло не так";
    }
  },
};
appData.asking();

appData.expensesMonth = appData.getExpensesMonth();

console.log("Расходы за месяц: " + appData.expensesMonth + " руб.");

let accumulatedMonth = appData.getBudget();

appData.getTargetMonth();

console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
    console.log('Свойство ' + key + ' Значение ' +appData[key]);
}
// console.log(appData.budgetMonth);
// console.log(appData.expensesMonth);
