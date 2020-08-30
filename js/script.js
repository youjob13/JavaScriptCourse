"use strict";

const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
const isString = (k) => {
  return isNaN(parseFloat(k)) && !(k.trim() == "");
};

const checkString = /[^А-ЯЁ,\s.]/i;
let expensesItems = document.querySelectorAll(".expenses-items"),
  incomeItems = document.querySelectorAll(".income-items"),
  incomeTitle = document.querySelector(".income-title");

const start = document.getElementById("start"),
  btnPlus = document.getElementsByTagName("button"),
  incomePlus = btnPlus[0],
  expensesPlus = btnPlus[1],
  depositCheck = document.getElementById("deposit-check"),
  additionalIncomeItem = document.querySelectorAll(".additional_income-item"),
  budgetDayValue = document.querySelector(".budget_day-value"),
  expensesMonthValue = document.querySelector(".expenses_month-value"),
  additionalExpensesValue = document.querySelector(
    ".additional_expenses-value"
  ),
  additionalIncomeValue = document.querySelector(".additional_income-value"),
  incomePeriodValue = document.querySelector(".income_period-value"),
  targetMonthValue = document.querySelector(".target_month-value"),
  salaryAmount = document.querySelector(".salary-amount"),
  additionalExpensesItem = document.querySelectorAll(
    ".additional_expenses-item"
  ),
  targetAmount = document.querySelector(".target-amount"),
  periodSelect = document.querySelector(".period-select"),
  budgetMonthValue = document.querySelector(".budget_month-value"),
  expensesAmount = document.querySelector(".expenses-amount"),
  expensesTitle = document.querySelector(".expenses-title"),
  periodAmount = document.querySelector(".period-amount"),
  cancel = document.getElementById("cancel"),
  depositBank = document.querySelector(".deposit-bank"),
  depositAmount = document.querySelector(".deposit-amount"),
  depositPercent = document.querySelector(".deposit-percent");

class AppData {
  constructor() {
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.expensesMonth = 0;
    this.budgetMonth = 0;
  }

  start() {
    this.budget = parseFloat(salaryAmount.value);
    this.getIncExp();
    this.getExpensesMonth();
    this.getIncomeMonth();
    this.getInfoDeposit();
    this.getBudget();
    this.getAddIncExp();
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

  getAddIncExp() {
    const count = (item) => {
      const startStr = item.className.split("_")[1].split("-")[0];
      let itemValue = item.value.trim();

      if (item.value !== "" && startStr == "income") {
        this.addIncome.push(itemValue);
      } else if (item.value !== "" && startStr == "expenses") {
        itemValue = itemValue.split(",");
        itemValue.forEach((item, i) => {
          this.addExpenses.push(itemValue[i].trim());
        });
      }
    };
    additionalIncomeItem.forEach(count);
    additionalExpensesItem.forEach(count);
  }

  getIncExp() {
    const count = (item) => {
      const startStr = item.className.split("-")[0];
      const itemTitle = item.querySelector(`.${startStr}-title`).value;
      const itemAmount = item.querySelector(`.${startStr}-amount`).value;

      this[startStr][itemTitle] = itemAmount;
    };

    incomeItems.forEach(count);
    expensesItems.forEach(count);
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

  getIncomeMonth() {
    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  }

  getExpensesMonth() {
    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  }
  getBudget() {
    const monthDeposit = this.moneyDeposit * this.percentDeposit;
    this.budgetMonth =
      this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
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

  calcPeriod() {
    return this.budgetMonth * periodSelect.value;
  }

  reset() {
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
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

    depositBank.style.display = "none";
    depositAmount.style.display = "none";
    depositPercent.style.display = "none";
    depositCheck.checked = false;

    incomePlus.style.display = "block";
    expensesPlus.style.display = "block";
  }

  getInfoDeposit() {
    if (this.deposit) {
      if (depositBank.value === "other") {
        this.percentDeposit = depositPercent.value / 100;
      } else {
        this.percentDeposit = depositPercent.value;
      }
      this.moneyDeposit = depositAmount.value;
    }
  }

  changePercent() {
    const valueSelect = this.value;
    if (valueSelect === "other") {
      depositPercent.value = "";
      depositPercent.style.display = "inline-block";
      depositPercent.removeAttribute("disabled", "disabled");
    } else {
      depositPercent.style.display = "none";
      depositPercent.value = valueSelect;
    }
  }

  depositHandler() {
    if (depositCheck.checked) {
      depositBank.style.display = "inline-block";
      depositAmount.style.display = "inline-block";
      this.deposit = true;
      depositBank.addEventListener("change", this.changePercent);
    } else {
      depositBank.style.display = "none";
      depositAmount.style.display = "none";
      depositBank.value = 0;
      depositPercent.value = "";
      depositAmount.value = "";
      this.deposit = false;
      depositBank.removeEventListener("change", this.changePercent);
      depositPercent.style.display = "none";
    }
  }

  eventsListeners() {
    expensesPlus.addEventListener("click", this.addExpensesBlock);
    incomePlus.addEventListener("click", this.addIncomeBlock);

    start.addEventListener("click", () => {
      if (!isNumber(salaryAmount.value)) {
        alert('Заполните поле "Месячный доход"');
        salaryAmount.value = null;
      } else {
        this.start.call(this);
      }
    });

    cancel.addEventListener("click", () => {
      [].forEach.call(document.querySelectorAll("input"), (item) => {
        item.value = null;
      });
      [].forEach.call(document.querySelectorAll("input"), (item) => {
        item.removeAttribute("disabled", "disabled");
      });
      this.reset.call(this);
      start.style.display = "block";
      cancel.style.display = "none";
    });

    periodSelect.addEventListener("input", () => {
      periodAmount.textContent = periodSelect.value;
    });

    depositCheck.addEventListener("change", this.depositHandler.bind(this));

    depositPercent.addEventListener("input", () => {
      if (
        !isNumber(depositPercent.value) ||
        depositPercent.value < 0 ||
        depositPercent.value > 100
      ) {
        alert("Введите число от 0 до 100");
        depositPercent.value = "";
      }
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

    itemsName.forEach((item) => {
      item.addEventListener("input", () => {
        if (checkString.test(item.value)) {
          item.value = "";
        }
      });
    });

    itemsNum.forEach((item) => {
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
