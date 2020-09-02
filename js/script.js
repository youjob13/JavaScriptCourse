window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  //таймер
  function checkTime(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return value;
    }
  }

  function countTimer(deadline) {
    const timerHours = document.querySelector("#timer-hours"),
      timerMinutes = document.querySelector("#timer-minutes"),
      timerSeconds = document.querySelector("#timer-seconds");

    function getTimeRemaining() {
      const dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);
      return {
        timeRemaining,
        hours,
        minutes,
        seconds,
      };
    }

    function updateClock() {
      const timer = getTimeRemaining();

      timerHours.textContent = checkTime(timer.hours);
      timerMinutes.textContent = checkTime(timer.minutes);
      timerSeconds.textContent = checkTime(timer.seconds);
      if (timer.timeRemaining > 0) {
        setInterval(updateClock, 1000);
      } else if (timer.timeRemaining < 0) {
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
      }
    }
    updateClock();
  }

  countTimer("2 september 2020");

  //меню
  const toggleMenu = () => {
    const menuBtn = document.querySelector(".menu"),
      menu = document.querySelector("menu"),
      btnClose = document.querySelector(".close-btn"),
      menuList = menu.querySelectorAll("li"),
      handlerMenu = () => menu.classList.toggle("active-menu");

    const btn = document.querySelector("a");

    btn.addEventListener("click", () => {
      document.querySelector("#service-block").scrollIntoView({
         block: "center",
         behavior: "smooth",
      });
    });
    menuList.forEach((item) => {
      item.addEventListener("click", () => {
        //code
      });
    });

    menuBtn.addEventListener("click", handlerMenu);
    btnClose.addEventListener("click", handlerMenu);
    menuList.forEach((item) => item.addEventListener("click", handlerMenu));
  };

  toggleMenu();

  //popup
  const togglePopUp = () => {
    const popUpBtn = document.querySelectorAll(".popup-btn"),
      popUp = document.querySelector(".popup"),
      popUpClose = document.querySelector(".popup-close");
    let animateIdOpen, animateIdClose;
    let count = 0;

    const animateOpen = () => {
      animateIdOpen = requestAnimationFrame(animateOpen);
      count += 0.05;
      if (count < 1) {
        popUp.style.opacity = count;
      } else {
        cancelAnimationFrame(animateIdOpen);
      }
    };
    const animateClose = () => {
      animateIdClose = requestAnimationFrame(animateClose);
      count -= 0.05;
      if (count >= 0) {
        popUp.style.opacity = count;
      } else {
        cancelAnimationFrame(animateIdClose);
        popUp.style.display = "none";
      }
    };

    popUpBtn.forEach((item) => {
      item.addEventListener("click", () => {
        popUp.style.display = "block";
        popUp.style.opacity = "1";
        if (window.innerWidth > 768) {
          popUp.style.opacity = "0";
          animateIdOpen = requestAnimationFrame(animateOpen);
        }
      });
    });

    popUpClose.addEventListener("click", () => {
      if (window.innerWidth > 768) {
        animateIdClose = requestAnimationFrame(animateClose);
      } else {
        popUp.style.display = "none";
      }
    });
  };

  togglePopUp();
});
