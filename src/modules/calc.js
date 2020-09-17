const calc = (price) => {
    const calcType = document.querySelector(".calc-type"),
        calcBlock = document.querySelector(".calc-block"),
        calcSquare = document.querySelector(".calc-square"),
        calcCount = document.querySelector(".calc-count"),
        calcDay = document.querySelector(".calc-day"),
        totalValue = document.getElementById("total"),
        inputCalc = document.querySelectorAll(".calc-block>input");

    const countSum = () => {
        let total = 0,
            typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value,
            dayValue = 1,
            countValue = 1;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squareValue) {
            total = Math.ceil(
                price * typeValue * squareValue * dayValue * countValue
            );
        }

        totalValue.textContent = total;
    };

    calcBlock.addEventListener("input", (event) => {
        let target = event.target;
        if (target.matches("select") || target.matches("input")) {
            countSum();
        }
    });

    inputCalc.forEach((item) => {
        item.addEventListener("input", () => {
            item.value = item.value.replace(/\D/g, "");
        });
    });
};

export default calc;