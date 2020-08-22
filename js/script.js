"use strict";

let start = document.getElementById("start"),
    btnPlus = document.getElementsByTagName("button"),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    depositCheck = document.querySelector("#deposit-check"),
    additionalIncomeItem = document.querySelectorAll(".additional_income-item"),
    budgetDayValue = document.querySelector(".budget_day-value"),
    expensesMonthValue = document.querySelector(".expenses_month-value"),
    additionalIncomeValue = document.querySelector(
        ".additional_income-value"
    ),
    additionalExpensesValue = document.querySelector(
        ".additional_expenses-value"
    ),
    incomePeriodValue = document.querySelector(".income_period-value"),
    targetMonthValue = document.querySelector(".target_month-value"),
    salaryAmount = document.querySelector(".salary-amount"),
    incomeTitle = document.querySelector(".income-title"),
    incomeAmount = document.querySelector('.income-amount'),
    incomeItems = document.querySelectorAll(".income-items"),
    expensesTitle = document.querySelector(".expenses-title"),
    expensesAmount = document.querySelector('.expenses-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses = document.querySelector(".additional_expenses-item"),
    targetAmount = document.querySelector(".target-amount"),
    periodSelect = document.querySelector(".period-select"),
    budgetMonthValue = document.querySelector(".budget_month-value"),
    periodAmount = document.querySelector('.period-amount');

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let isString = function (k) {
    return isNaN(parseFloat(k)) && !(k.trim() == "");
};

let appData = {
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: true,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0,
    expensesMonth: 0,
    budgetMonth: 0,
    start: function () {
        appData.budget = parseFloat(salaryAmount.value);


        appData.checkInputNum();
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getIncomeMonth();
        appData.getBudget();
        appData.getAddExpenses();
        appData.getAddIncome();

        appData.showResult();
    },
    showResult: function () {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
        periodSelect.addEventListener('input', function () {
            incomePeriodValue.value = appData.calcPeriod();
        });

    },
    getAddExpenses: function () {
        let addExpenses = additionalExpenses.value.split(',');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    getIncomeMonth: function () {
        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        }
    },
    getIncome: function () {
        incomeItems.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            appData.income[itemIncome] = cashIncome;
        });
    },
    getAddIncome: function () {
        additionalIncomeItem.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },
    addIncomeBlock: function () {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    },
    addExpensesBlock: function () {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    getExpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            appData.expenses[itemExpenses] = cashExpenses;
        });
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        return targetAmount.value / appData.budgetMonth;
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
            do {
                appData.percentDeposit = prompt("Какой годовой процент?");
            } while (!isNumber(appData.percentDeposit));
            do {
                appData.moneyDeposit = prompt("Какая сумма заложена?");
            } while (!isNumber(appData.moneyDeposit));
        }
    },
    calcPeriod: function () {
        return appData.budgetMonth * periodSelect.value;
    },
    checkInputNum: function () {
        if (!isNumber(targetAmount.value) || !isNumber(incomeAmount.value) || !isNumber(expensesAmount.value) || !isNumber(salaryAmount.value)) {
            alert('В поля "Сумма" нужно вводить число!');
            incomeAmount.value = null;
            expensesAmount.value = null;
        }
    },
    checkInputStr: function() {
        if (isString(incomeTitle.value) || isString(additionalIncomeItem.value) || isString(expensesTitle.value)) {
            alert('В поля "Сумма" вводить число!');
            targetAmount.value = null;
            incomeTitle.value = null;
            additionalIncomeItem.value = null;
            expensesTitle.value = null;
        }
    },
};

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
// start.addEventListener('click', function () {
//     if (!isString(incomeTitle.value) || !isString(additionalIncomeItem.value) || !isString(expensesTitle.value)) {
//         alert('В поля "Сумма" вводить число!');
//         targetAmount.value = null;
//         incomeTitle.value = null;
//         additionalIncomeItem.value = null;
//         expensesTitle.value = null;
//     }
// })
start.addEventListener('click', function () {
    if (!isNumber(salaryAmount.value)) {
        alert('В поля "Сумма" нужно вводить число!');
        salaryAmount.value = null;
    } else {
        appData.start();
    }
})
// start.addEventListener('click', function() {
//     if (|| !isNumber(incomeAmount.value) || !isNumber(expensesAmount.value) || !isNumber(salaryAmount.value)) {
//         alert('В поля "Сумма" нужно вводить число!');
//         incomeAmount.value = null;
//         expensesAmount.value = null;
//     }
// });

periodSelect.addEventListener('input', function () {
    periodAmount.textContent = periodSelect.value;
});



// console.log("Наша программа включает в себя данные: ");
// for (let key in appData) {
//     console.log("Свойство " + key + " Значение " + appData[key]);
// }
// appData.getInfoDeposit();
// console.log(appData.percentDeposit, appData.moneyDeposit);
// console.log(appData.calcPeriod());
// console.log(appData.addExpenses);