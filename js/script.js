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
        const menuBtn = document.querySelector(".menu"),
            menu = document.querySelector("menu"),
            handlerMenu = () => menu.classList.toggle("active-menu");

        menuBtn.addEventListener("click", handlerMenu);
        menu.addEventListener("click", event => {
            let target = event.target;
            console.log(target);
            if (target.matches('a')) {
                handlerMenu();
            }
        });
    };
    toggleMenu();

    //popup
    const togglePopUp = () => {
        const popUpBtn = document.querySelectorAll(".popup-btn"),
            popUp = document.querySelector(".popup");

        popUpBtn.forEach(item => {
            item.addEventListener("click", () => {
                popUp.style.display = "block";
            });
        });

        popUp.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popUp.style.display = "none";
            } else {
                target = target.closest('.popup-content');

                if (!target) {

                    popUp.style.display = "none";
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
        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener("click", event => {
            let target = event.target;
            target = target.closest('.service-header-tab');
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
});
