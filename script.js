
//task1
const task1 = document.getElementById("task1");
task1.innerHTML = task1.textContent.replace(/функци(я|и)?/g,(match) => `<strong>${match}</strong>`);

//task2
const task2 = document.getElementById('task2');
// task2.innerHTML = task2.textContent.replace(//g)

//task3
// const task3 = task2.querySelector('p');
// console.log(task3.textContent);
// task3.innerHTML = task3.textContent.replace(/("\W*.*")/g, (match) => `<mark>${match}</mark>`);

//task4
// const body = document.querySelector('body');
// body.innerHTML = body.textContent.replace(/\w{4}:\/{2}(\w*\.ru)/g, (match,val) =>`<a href="${match}">${val}</a>`);

//task5
// const body = document.querySelector('body');
// body.innerHTML = body.textContent.replace()

//task6
const body = document.querySelector('body');
body.innerHTML = body.textContent.replace(/\w{4}:\/{2}\w{0,3}\.{0,1}(\w*.ru)\/\w.*/g, (match, val) => `<a href="${match}">${val}</a>`);