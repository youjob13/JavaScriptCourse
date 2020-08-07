    // объявление переменных

    let num = 266219;
    const Num = num;
    let i = 0;
    let num2 = 0;
    let arr = [];
    let sum2 = 1;
    
    // считаем кол-во цифр в числе

    while (num > 1) {
        num = num / 10;
        i++;
    }

    // необходимые жертвы) подругому не придумал
    i++;
    num = Num;
    num2 = num % 10;
    arr.push(num2);

    // Исходное число разбиваем на цифры и заносим в массив

    for (let j = 1; j !== i; j++) {
        num2 = num % Math.pow(10, j);
        if (num2 > 10) {
            num2 = Math.floor(num2 / Math.pow(10, j-1));
            arr.push(num2);
        }
    }

    console.log(arr);

    // Функция для расчета произведения значений массива (подсмотрел в интернете)
    
    sum2 = arr.reduce((first, last) => first * last); 
    console.log(sum2);

    // Возведение в степень
    
    let x = 3;

    sum2 = sum2 ** x;
    console.log(sum2);

    // Выводим первые 2 цифры sum2
    
    let k= 0;

    // Опять находим кол-во цифр в числе

    while (sum2 > 1) {
        sum2 = sum2 / 10;
        k++;
    }
    // Отделяем первые 2 цифры sum2
    sum2 = Math.floor(sum2 * 100);
    console.log(sum2);

