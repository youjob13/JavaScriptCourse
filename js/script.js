const btn = document.querySelector(".button"),
  box = document.querySelector(".box-block"),
  btnClose = document.querySelector(".button-close");
let count = -75,
  count2 = 0,
  boxAnimateId,
  animate = true;

const boxAnimate = () => {
  boxAnimateId = requestAnimationFrame(boxAnimate);
  count++;

  if (count < 75) {
    box.style.left = count * 5 + "px";
  } else if (count >= 75) {
    count = -75;
    box.style.left = count * 5 + "px";
  } else {
    cancelAnimationFrame(boxAnimateId);
  }
};

btn.addEventListener("click", () => {
  if (animate) {
    boxAnimateId = requestAnimationFrame(boxAnimate);
    animate = false;
    box.style.opacity = "1";

    btn.textContent = "Остановить загрузку";
  } else {
    cancelAnimationFrame(boxAnimateId);
    animate = true;
    btn.textContent = "Продолжить загрузку";
  }
});
btnClose.addEventListener("click", () => {
  box.style.opacity = "0";
  btn.textContent = "Начать загрузку";
  cancelAnimationFrame(boxAnimateId);
  (count = -75), (count2 = 0), (animate = true);
});
