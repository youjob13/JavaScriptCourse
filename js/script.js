//Variable declaration
const arr = ['37','440','113','149','3','277','2'];
let k = 0;
let m = 0;

//Task 1
for (let i = 0; i < 7; i++) {
    if(arr[i].slice(0,1) == 2 || arr[i].slice(0,1) == 4) {
        console.log(arr[i]);
    }
}

//Task 2
for (let i = 0; i < 7; i++) {
    if (arr[i] <= 100) {
        for (let j = 1; j <= arr[i]; j++) {
            k = +arr[i] % j;
            if (k === 0) {
                m++;
            }
        }
        if (m === 2) {
            console.log(arr[i] + ' Делители этого числа: 1 и ' + arr[i]);
        }
        m = 0;
    }
}