//Variable declaration
let k = 0;
let m = 0;
let arr2 = [];
let num = 100;

//Task 1
let arr = ["127", "440", "113", "49", "3", "277", "2"];

arr.filter((item) => {
  if (item.startsWith("2") || item.startsWith("4")) {
    console.log(item);
  }
});

//Task 2
while (num !== 0) {
  arr2.push(num--);
}

for (let i = 0; i <= arr2.length; i++) {
  if (arr2[i] <= 100) {
    for (let j = 1; j <= arr2[i]; j++) {
      k = +arr2[i] % j;
      if (k === 0) {
        m++;
      }
    }
    if (m === 2) {
      console.log(arr2[i] + " Делители этого числа: 1 и " + arr2[i]);
    }
    m = 0;
  }
}
