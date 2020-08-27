"use strict";

const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
const isString = (k) => {
  return isNaN(parseFloat(k)) && !(k.trim() == "");
};

const checkString = /[^А-ЯЁ,\s.]/i;
let incomeItems = document.querySelectorAll(".income-items"),
  expensesItems = document.querySelectorAll(".expenses-items");
const start = document.getElementById("start"),
  btnPlus = document.getElementsByTagName("button"),
  incomePlus = btnPlus[0],
  expensesPlus = btnPlus[1],
  depositCheck = document.querySelector("#deposit-check"),
  additionalIncomeItem = document.querySelectorAll(".additional_income-item"),
  budgetDayValue = document.querySelector(".budget_day-value"),
  expensesMonthValue = document.querySelector(".expenses_month-value"),
  additionalIncomeValue = document.querySelector(".additional_income-value"),
  additionalExpensesValue = document.querySelector(
    ".additional_expenses-value"
  ),
  incomePeriodValue = document.querySelector(".income_period-value"),
  targetMonthValue = document.querySelector(".target_month-value"),
  salaryAmount = document.querySelector(".salary-amount"),
  incomeTitle = document.querySelector(".income-title"),
  additionalExpenses = document.querySelector(".additional_expenses-item"),
  targetAmount = document.querySelector(".target-amount"),
  periodSelect = document.querySelector(".period-select"),
  budgetMonthValue = document.querySelector(".budget_month-value"),
  expensesAmount = document.querySelector(".expenses-amount"),
  expensesTitle = document.querySelector(".expenses-title"),
  periodAmount = document.querySelector(".period-amount"),
  cancel = document.getElementById("cancel");

class AppData {
  constructor() {
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = true;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.expensesMonth = 0;
    this.budgetMonth = 0;
  }

  start() {
    this.budget = parseFloat(salaryAmount.value);
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getIncomeMonth();
    this.getBudget();
    this.getAddExpenses();
    this.getAddIncome();
    this.showResult();
    this.blockInput();
  }
  showResult() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(", ");
    additionalIncomeValue.value = this.addIncome.join(", ");
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
    periodSelect.addEventListener("input", () => {
      incomePeriodValue.value = this.calcPeriod();
    });
  }
  blockInput() {
    [].forEach.call(document.querySelectorAll("input"), (input) => {
      input.setAttribute("disabled", "disabled");
    });
    periodSelect.removeAttribute("disabled", "disabled");
    start.style.display = "none";
    cancel.style.display = "block";
  }

  getAddExpenses() {
    const addExpenses = additionalExpenses.value.split(",");
    addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== "") {
        this.addExpenses.push(item);
      }
    });
  }
  getIncomeMonth() {
    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  }
  getIncome() {
    incomeItems.forEach((item) => {
      const itemIncome = item.querySelector(".income-title").value;
      const cashIncome = item.querySelector(".income-amount").value;

      this.income[itemIncome] = cashIncome;
    });
  }
  addIncomeBlock() {
    const cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll(".income-items");
    if (incomeItems.length === 3) {
      incomePlus.style.display = "none";
    }
  }
  addExpensesBlock() {
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll(".expenses-items");
    if (expensesItems.length === 3) {
      expensesPlus.style.display = "none";
    }
  }
  getAddIncome() {
    additionalIncomeItem.forEach((item) => {
      const itemValue = item.value.trim();
      if (checkString.test(itemValue)) {
        alert('В поля "Наименование" вводить только кирилицу!');
      } else {
        this.addIncome.push(itemValue);
      }
    });
  }
  getExpenses() {
    expensesItems.forEach((item) => {
      const itemExpenses = item.querySelector(".expenses-title").value;
      const cashExpenses = item.querySelector(".expenses-amount").value;

      this.expenses[itemExpenses] = cashExpenses;
    });
  }
  getExpensesMonth() {
    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  }
  getBudget() {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  }
  getTargetMonth() {
    return targetAmount.value / this.budgetMonth;
  }
  getStatusIncome() {
    if (this.budgetDay >= 1200) {
      return "У вас высокий уровень дохода";
    } else if (this.budgetDay >= 600 && this.budgetDay < 1200) {
      return "У вас средний уровень дохода";
    } else if (this.budgetDay > 0 && this.budgetDay < 600) {
      return "К сожалению у вас уровень дохода ниже среднего";
    } else {
      return "Что то пошло не так";
    }
  }
  getInfoDeposit() {
    if (this.deposit) {
      do {
        this.percentDeposit = prompt("Какой годовой процент?");
      } while (!isNumber(this.percentDeposit));
      do {
        this.moneyDeposit = prompt("Какая сумма заложена?");
      } while (!isNumber(this.moneyDeposit));
    }
  }
  calcPeriod() {
    return this.budgetMonth * periodSelect.value;
  }

  reset() {
    (this.deposit = true), (this.income = {});
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = true;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.expensesMonth = 0;
    this.budgetMonth = 0;

    if (expensesItems.length > 1) {
      for (let i = 1; i < expensesItems.length; i++) {
        expensesItems[i].remove();
      }
    }
    if (incomeItems.length > 1) {
      for (let i = 1; i < incomeItems.length; i++) {
        incomeItems[i].remove();
      }
    }
    periodSelect.value = 1;
    periodAmount.textContent = 1;

    incomePlus.style.display = "block";
    expensesPlus.style.display = "block";
  }

  eventsListeners() {
    expensesPlus.addEventListener("click", this.addExpensesBlock);
    incomePlus.addEventListener("click", this.addIncomeBlock);

    start.addEventListener("click", () => {
      if (!isNumber(salaryAmount.value)) {
        alert('Заполните поле "Месячный доход"');
        salaryAmount.value = null;
      } else {
        appData.start.call(appData);
      }
    });

    cancel.addEventListener("click", () => {
      [].forEach.call(document.querySelectorAll("input"), (item) => {
        item.value = null;
      });
      [].forEach.call(document.querySelectorAll("input"), (item) => {
        item.removeAttribute("disabled", "disabled");
      });
      appData.reset.call(appData);
      start.style.display = "block";
      cancel.style.display = "none";
    });

    periodSelect.addEventListener("input", () => {
      periodAmount.textContent = periodSelect.value;
    });

    this.checkStr();
    incomePlus.addEventListener("click", this.checkStr);
    expensesPlus.addEventListener("click", this.checkStr);
  }
  checkStr() {
    let itemsName = document.querySelectorAll(
      'input[placeholder="Наименование"]'
    );
    let itemsNum = document.querySelectorAll('input[placeholder="Сумма"]');

    itemsName.forEach(function (item) {
      item.addEventListener("input", () => {
        if (checkString.test(item.value)) {
          item.value = "";
        }
      });
    });

    itemsNum.forEach(function (item) {
      item.addEventListener("input", () => {
        if (!isNumber(item.value)) {
          item.value = "";
        }
      });
    });
  }
}

const appData = new AppData();

appData.eventsListeners();
