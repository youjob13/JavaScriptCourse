const books = document.querySelectorAll('.book');
const booksCollect = document.querySelector('.books');
const promo = document.querySelector('.adv');
const title = document.querySelectorAll('a');
//1
booksCollect.prepend(books[1]);
booksCollect.append(books[2]);
books[4].insertAdjacentElement('afterend', books[3]);
//2
document.body.style.background = 'url(./image/open_book.jpg)';
//3
title[4].textContent = 'Книга 3. this и Прототипы Объектов';
//4
promo.remove();

//5
const bookOne = books[0].querySelectorAll('li');

bookOne[3].insertAdjacentElement('afterend', bookOne[2]);
bookOne[3].insertAdjacentElement('afterend', bookOne[6]);
bookOne[6].insertAdjacentElement('afterend', bookOne[8]);
bookOne[8].insertAdjacentElement('afterend', bookOne[4]);
bookOne[4].insertAdjacentElement('afterend', bookOne[5]);
bookOne[5].insertAdjacentElement('afterend', bookOne[7]);
bookOne[7].insertAdjacentElement('afterend', bookOne[9]);
bookOne[9].insertAdjacentElement('afterend', bookOne[2]);
bookOne[2].insertAdjacentElement('afterend', bookOne[10]);

const bookFive = books[5].querySelectorAll('li');

bookFive[1].insertAdjacentElement('afterend', bookFive[9]);
bookFive[9].insertAdjacentElement('afterend', bookFive[3]);
bookFive[3].insertAdjacentElement('afterend', bookFive[4]);
bookFive[4].insertAdjacentElement('afterend', bookFive[2]);
bookFive[2].insertAdjacentElement('afterend', bookFive[6]);
bookFive[6].insertAdjacentElement('afterend', bookFive[7]);
//6
const bookSix = books[2].querySelectorAll('li');
const bookSixTen = document.createElement('li');

bookSixTen.textContent = 'Глава 8: За пределами ES6';
bookSix[8].insertAdjacentElement('afterend', bookSixTen);
