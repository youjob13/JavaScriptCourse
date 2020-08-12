function getString(string) {
    if (typeof string !== 'string') {
        console.log('Это не строка');
    } else if (string.slice(0, 1) == 1 || string.slice(0, 1) == 2 || string.slice(0, 1) == 3 || string.slice(0, 1) == 4 || string.slice(0, 1) == 5
    || string.slice(0, 1) == 6 || string.slice(0, 1) == 7 || string.slice(0, 1) == 8 || string.slice(0, 1) == 9 || string.slice(0, 1) == '0') {
        console.log('Это не строка');
    } else {
        console.log(string.trim());
        if (string.length > 30) {
            console.log(string.trim().slice(0, 30) + '...');
        }
    }
}
getString('   Лучшее решение в голову не пришло)) ');