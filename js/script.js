function getString(string) {
    if (typeof string !== 'string') {
        console.log('Это не строка');
    } else {
        console.log(string.trim());
        if (string.length > 30) {
            console.log(string.trim().slice(0, 30) + '...');
        }
    }
}
getString('          Privet Vasya Vakulenko ti krutoy reper');