'use strict';
const btn = document.querySelector('button');
const colorCode = document.querySelector('h2');
let result = '';
const changeBg = () => {
    let r,
        b,
        g,
        rgb;
    r = Math.floor(Math.random() * (256));
    g = Math.floor(Math.random() * (256));
    b = Math.floor(Math.random() * (256));
    rgb = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    console.log(rgb);
    colorCode.textContent = rgb;
    document.body.style.backgroundColor = rgb;
};
btn.addEventListener('click', () => changeBg());