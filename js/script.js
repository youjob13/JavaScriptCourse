    // объявление переменных

    const num = 266219;
    let arr = [];
    let sum = 1;
    
    // из num делаем массив

    stringNum = num + '';
    arr = stringNum.split([]);

    // Функция для расчета произведения значений массива (подсмотрел в интернете)
    
    sum = arr.reduce((first, last) => first * last); 
    console.log(sum);

    // Возведение в степень
    
    sum **= 3;

    // Отделяем первые 2 цифры sum
    
    stringSum = sum + '';
    stringSum = stringSum.slice(0,2);
    document.getElementById('figure').innerHTML = stringSum;


