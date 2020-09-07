window.addEventListener("DOMContentLoaded", () => {
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

    countTimer("1 september 2020");

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

    scroll;
    const scrollFunc = (idBlock) => {
        document.querySelector(`${idBlock}`).scrollIntoView({
            block: "center",
            behavior: "smooth",
        });
    };

    const scrollToBlock = () => {
        const btnScroll = document.querySelector("a"),
            menuList = document.querySelectorAll("menu li");

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
            popUp = document.querySelector(".popup");
        let animateIdOpen, animateIdClose;
        let count = 0;

        const animateOpen = () => {
            animateIdOpen = requestAnimationFrame(animateOpen);
            count += 0.05;
            if (count <= 1) {
                console.log(count);

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
                animateIdOpen = requestAnimationFrame(animateOpen);
                popUp.style.display = "block";
            });
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
        //создаем точки для слайдера
        const addDots = () => {
            slide.forEach((item) => {
                const dot = document.createElement("li");
                dot.classList.add("dot");
                dotsList.append(dot);
            });
        };

        addDots();
        //получаем точки в переменную и присваеваем первой класс dot-active
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
                event.target.dataset.img = `images/command/command-${i + 1}.jpg`;
            });
            item.addEventListener("mouseleave", () => {
                event.target.src = event.target.dataset.img;
                event.target.dataset.img = `images/command/command-${i + 1}a.jpg`;
            });
        });
    };

    changeImage();

    //калькулятор
    const calc = () => {
        const inputCalc = document.querySelectorAll('.calc-block>input');
        inputCalc.forEach((item) => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/g, '');
            })
        })
    }

    calc();
});