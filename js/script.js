window.addEventListener("DOMContentLoaded", () => {
  //таймер

  const countTimer = (deadline) => {
    const timerHours = document.querySelector("#timer-hours"),
      timerMinutes = document.querySelector("#timer-minutes"),
      timerSeconds = document.querySelector("#timer-seconds");

    const getTimeRemaining = () => {
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
    };

    const checkTime = (value) => {
      if (value < 10) {
        return "0" + value;
      } else {
        return value;
      }
    };

    const updateClock = () => {
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
    };
    updateClock();
  };

  countTimer("16 september 2020");

  //меню
  const toggleMenu = () => {
    const menu = document.querySelector("menu"),
      handlerMenu = () => menu.classList.toggle("active-menu");
    document.addEventListener("click", (event) => {
      let target = event.target;
      if (target.matches(".menu a") || target.closest(".menu")) {
        handlerMenu();
        target = target.closest(".menu");
      } else if (menu.classList.contains("active-menu")) {
        handlerMenu();
      }
    });
  };
  toggleMenu();

  const scrollToBlock = () => {
    const btnScroll = document.querySelector("a"),
      menuList = document.querySelectorAll("menu li");

    const scrollFunc = (idBlock) => {
      document.querySelector(`${idBlock}`).scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    };

    btnScroll.addEventListener("click", (event) => {
      event.preventDefault();
      const startStr = document.querySelector("a").getAttribute("href");
      scrollFunc(startStr);
    });

    menuList.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        const startStr = item.querySelector("a").getAttribute("href");
        scrollFunc(startStr);
      });
    });
  };

  scrollToBlock();

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
      if (count <= 1) {
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

    popUp.addEventListener("click", (event) => {
      let target = event.target;
      if (target.classList.contains("popup-close")) {
        animateIdClose = requestAnimationFrame(animateClose);
      } else {
        target = target.closest(".popup-content");
        if (!target) {
          animateIdClose = requestAnimationFrame(animateClose);
        }
      }
    });
  };

  togglePopUp();

  //табы

  const tabs = () => {
    const tabHeader = document.querySelector(".service-header"),
      tab = tabHeader.querySelectorAll(".service-header-tab"),
      tabContent = document.querySelectorAll(".service-tab");
    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add("active");
          tabContent[i].classList.remove("d-none");
        } else {
          tab[i].classList.remove("active");
          tabContent[i].classList.add("d-none");
        }
      }
    };
    tabHeader.addEventListener("click", (event) => {
      let target = event.target;
      target = target.closest(".service-header-tab");
      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };

  tabs();

  //слайдер

  const slider = () => {
    const dotsList = document.querySelector(".portfolio-dots"),
      slider = document.querySelector(".portfolio-content"),
      slide = document.querySelectorAll(".portfolio-item");
    let currentSlide = 0,
      interval;

    const addDots = () => {
      slide.forEach((item) => {
        const dot = document.createElement("li");
        dot.classList.add("dot");
        dotsList.append(dot);
      });
    };

    addDots();
    const dots = dotsList.querySelectorAll(".dot");
    dots[0].classList.add("dot-active");

    const nextSlide = (elem, index, strSelect) => {
      elem[index].classList.add(strSelect);
    };
    const prevSlide = (elem, index, strSelect) => {
      elem[index].classList.remove(strSelect);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, "portfolio-item-active");
      prevSlide(dots, currentSlide, "dot-active");
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, "portfolio-item-active");
      nextSlide(dots, currentSlide, "dot-active");
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    startSlide(3000);

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener("click", (event) => {
      event.preventDefault();

      let target = event.target;

      if (!target.matches(".portfolio-btn, .dot")) {
        return;
      }

      prevSlide(slide, currentSlide, "portfolio-item-active");
      prevSlide(dots, currentSlide, "dot-active");

      if (target.matches("#arrow-left")) {
        currentSlide--;
      } else if (target.matches("#arrow-right")) {
        currentSlide++;
      } else if (target.matches(".dot")) {
        dots.forEach((item, i) => {
          if (item === target) {
            currentSlide = i;
          }
        });
      }

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, "portfolio-item-active");
      nextSlide(dots, currentSlide, "dot-active");
    });

    slider.addEventListener("mouseover", (event) => {
      let target = event.target;

      if (target.matches(".portfolio-btn") || target.matches(".dot")) {
        stopSlide();
      }
    });

    slider.addEventListener("mouseout", (event) => {
      let target = event.target;

      if (target.matches(".portfolio-btn") || target.matches(".dot")) {
        startSlide();
      }
    });
  };

  slider();

  //наша команда

  const changeImage = () => {
    const img = document.querySelectorAll(".command__photo");
    img.forEach((item, i) => {
      item.addEventListener("mouseenter", (event) => {
        event.target.src = event.target.dataset.img;
      });
      item.addEventListener("mouseleave", (event) => {
        event.target.src = `images/command/command-${i + 1}.jpg`;
      });
    });
  };

  changeImage();

  //калькулятор
  const calc = (price) => {
    const calcType = document.querySelector(".calc-type"),
      calcBlock = document.querySelector(".calc-block"),
      calcSquare = document.querySelector(".calc-square"),
      calcCount = document.querySelector(".calc-count"),
      calcDay = document.querySelector(".calc-day"),
      totalValue = document.getElementById("total"),
      inputCalc = document.querySelectorAll(".calc-block>input");

    const countSum = () => {
      let total = 0,
        typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value,
        dayValue = 1,
        countValue = 1,
        count = 0,
        countSpeed = 0,
        animateId;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = Math.ceil(
          price * typeValue * squareValue * dayValue * countValue
        );
      }

      countSpeed = 4**3;
      const animatePrice = () => {
        animateId = requestAnimationFrame(animatePrice);
        count += countSpeed;
        if (count <= total) {
          totalValue.textContent = count;
        } else {
          totalValue.textContent = total;
          cancelAnimationFrame(animateId);
        }
      };
      animateId = requestAnimationFrame(animatePrice);
    };

    calcBlock.addEventListener("input", (event) => {
      let target = event.target;
      if (target.matches("select") || target.matches("input")) {
        countSum();
      }
    });

    inputCalc.forEach((item) => {
      item.addEventListener("input", () => {
        item.value = item.value.replace(/\D/g, "");
      });
    });
  };

  calc(100);

  //send-ajax-form

  const sendForm = () => {
    const errorMessage = "Что-то пошло не так...",
      loadMessage = "Загрузка...",
      successMessage = "Спасибо, мы скоро с вами свяжимся";

    const form = document.getElementById("form1"),
      form2 = document.getElementById("form2"),
      form3 = document.getElementById("form3");

    const forms = [];

    let numLength = 0;

    forms.push(form, form2, form3);

    const statusMessage = document.createElement("div");
    statusMessage.style.cssText = `font-size: 2rem;
        color: #fff;`;

    forms.forEach((item) => {
      let input = item.querySelectorAll("input");
      const popUp = document.querySelector(".popup");

      popUp.addEventListener("click", (event) => {
        let target = event.target;
        let popUpTarget = target.closest(".popup-content");
        if (popUpTarget === null || target.matches(".popup-close")) {
          input.forEach((item) => {
            item.value = "";
          });
          statusMessage.textContent = "";
        }
      });

      [...input].forEach((elem) => {
        elem.addEventListener("input", () => {
          if (elem.classList.contains("form-phone")) {
            elem.value = elem.value.replace(/[^0-9+]/g, "");
            numLength = elem.value.length;
          } else if (elem.classList.contains("form-email")) {
            return;
          } else {
            elem.value = elem.value.replace(/[^А-Я\s]/gi, "");
          }
        });
      });

      item.addEventListener("submit", (e) => {
        e.preventDefault();
        if (numLength < 11) {
          return;
        }
        const input = item.querySelectorAll("input");
        item.append(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(item);
        let body = {};

        formData.forEach((val, key) => {
          body[key] = val;
        });
        const successSend = () => {
          statusMessage.textContent = successMessage;
          if (item.id !== "form3") {
            setTimeout(() => (statusMessage.textContent = ""), 2000);
          }

          input.forEach((item) => {
            item.value = "";
          });
        };
        const errorSend = () => {
          statusMessage.textContent = errorMessage;
        };
        postData(body).then(successSend).catch(errorSend);
      });
    });

    const postData = (body) => {
      return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
          if (request.readyState !== 4) {
            return;
          }
          if (request.status === 200) {
            resolve(request.responseText);
          } else {
            reject(request.statusText);
          }
        });
        request.open("POST", "server.php");
        request.setRequestHeader("Content-Type", "application/JSON");
        request.send(JSON.stringify(body));
      });
    };
  };
  sendForm();
});
