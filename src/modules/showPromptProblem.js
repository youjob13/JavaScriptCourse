const showPromptProblem = () => {
    const hiddenBlock = document
        .querySelector("#problems")
        .querySelector(".wrapper_middle")
        .querySelectorAll(".problems-item-popup"),
        iconBg = document.querySelector("#problems")
        .querySelector(".wrapper_middle")
        .querySelectorAll('.problems-item__icon-inner'),
        iconInnerPlus = document.querySelectorAll('.svg-wrap'),
        hiddenSlides = document
        .querySelector("#problems")
        .querySelector(".wrapper_small")
        .querySelectorAll(".problems-item-popup"),
        problem = document
        .querySelector("#problems")
        .querySelector(".wrapper_middle")
        .querySelectorAll(".problems-item"),
        problemSlide = document
        .querySelector("#problems")
        .querySelector(".wrapper_small")
        .querySelectorAll(".problems-item"),
        style = document.querySelector("style");
    let currentSlide = 0;
    style.textContent =
        style.textContent +
        `
        .problems-item {
            opacity: 0.8;
        }
        @media (max-width: 1024px) {
            .problems-item {
                max-width: 340px;
                display: none;
            }
        }
        @media (min-width: 1024px) {
            .problems-item-popup-1 {
                top:-340px;
            }
            .problems-item-popup-1:before {
                transform: rotateZ(360deg);
            }
        .svg-wrap {
            transition: .2s;
        }
    }`;

    problemSlide[0].style.display = "flex";
    problemSlide.forEach(item => {
        item.classList.remove('active-item');
    });
    const nextSlide = (elem, index) => {
        elem[index].style.display = "flex";
    };
    const prevSlide = (elem, index) => {
        elem[index].style.display = "none";
    };

    document.addEventListener("click", (e) => {
        if (
            e.target.closest("#problems-arrow_right") ||
            e.target.closest("#problems-arrow_left")
        ) {
            prevSlide(problemSlide, currentSlide);
            if (e.target.closest("#problems-arrow_right")) {
                currentSlide++;
            }
            if (e.target.closest("#problems-arrow_left")) {
                currentSlide--;
            }
            if (currentSlide >= problemSlide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = problemSlide.length - 1;
            }
            nextSlide(problemSlide, currentSlide);
        }
    });

    problemSlide.forEach((item, i) => {
        item.addEventListener("mouseover", () => {
            hiddenSlides[i].classList.add("active-item");
            problemSlide[i].classList.add("active-item");
            problemSlide[i].style.opacity = '1';
        });
        item.addEventListener("mouseout", () => {
            hiddenSlides[i].classList.remove("active-item");
            problemSlide[i].classList.remove("active-item");
            problemSlide[i].style.opacity = '0.8';
        });
    });

    problem.forEach((item, i) => {
        item.addEventListener("mouseover", () => {
            iconBg[i].classList.add("active-item");
            iconInnerPlus[i].style.transform = 'rotate(45deg)';
            hiddenBlock[i].style.visibility = "visible";
            hiddenBlock[i].style.opacity = "1";
            problem[i].style.opacity = "1";
            problem[i].style.visibility = "visible";
            hiddenBlock[i].style.top = null;
            problem[i].classList.add('active-item');
            if (hiddenBlock[i].getBoundingClientRect().top < 0) {
                hiddenBlock[i].style.top = "90px";
                style.textContent =
                    style.textContent +
                    `@media (min-width: 1024px) {
            .problems-item-popup:before {
                transform: rotateZ(180deg);
            }
        }`;
            }
        });
        item.addEventListener("mouseout", () => {
            iconBg[i].classList.remove("active-item");
            iconInnerPlus[i].style.transform = 'rotate(0deg)';
            hiddenBlock[i].style.visibility = null;
            hiddenBlock[i].style.opacity = null;
            problem[i].style.opacity = '0.8';
            problem[i].style.visibility = null;
            problem[i].classList.remove('active-item');
            if (document.body.clientWidth > 1024) {
                style.textContent =
                    style.textContent +
                    `
        @media (min-width: 1024px) {
            .problems-item-popup:before {
                transform: rotateZ(360deg);
            }
        }`;
            }
        });
    });
};

export default showPromptProblem;