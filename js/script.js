"use strict";
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let isString = function (k) {
    return isNaN(parseFloat(k)) && !(k.trim() == '');
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
    deposit: true,
    percentDeposit: 0,
    moneyDeposit: 0,
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

        if (confirm('Есть ли у вас источник дополнительного заработка?')) {
            let itemIncome = prompt('Какой у вас источник дополнительного заработка?', 'Стипендия');
            while (!isString(itemIncome)) {
                itemIncome = prompt('Какой у вас источник дополнительного заработка?', 'Стипендия');
            }
            let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            while (!isNumber(cashIncome)) {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            }
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
        while (!isString(addExpenses)) {
            addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
        }
        appData.addExpenses = addExpenses.toLowerCase().split([, []]);
        for (let i = 0; i < appData.addExpenses.length; i++) {
            let re = appData.addExpenses[i].trim().slice(0, 1);
            appData.addExpenses[i] = appData.addExpenses[i].trim().replace(re, re.toUpperCase());
        }
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
    getInfoDeposit: function () {
        if (appData.deposit) {
            appData.percentDeposit = prompt('Какой годовой процент?', 10);
            while (!isNumber(appData.percentDeposit)) {
                appData.percentDeposit = prompt('Какой годовой процент?');
            }
            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            while (!isNumber(appData.moneyDeposit)) {
                appData.moneyDeposit = prompt('Какая сумма заложена?');
            }
        }
    },
    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period;
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
    console.log('Свойство ' + key + ' Значение ' + appData[key]);
}
appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit);
console.log(appData.calcSavedMoney());
console.log(appData.addExpenses);