const showPromptProblem = () => {
    const hiddenBlock = document
        .querySelector("#problems")
        .querySelector(".wrapper_middle")
        .querySelectorAll(".problems-item-popup"),
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
    @media (max-width: 1024px) {
        .problems-item {
            max-width: 340px;
            display: none;
        }
    }
        @media (min-width: 1024px) {
        .problems-item {
            opacity: 0.1;
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
        });
        item.addEventListener("mouseout", () => {
            hiddenSlides[i].classList.remove("active-item");
            problemSlide[i].classList.remove("active-item");
        });
    });

    problem.forEach((item, i) => {
        item.addEventListener("mouseover", () => {
            hiddenBlock[i].style.visibility = "visible";
            hiddenBlock[i].style.opacity = "1";
            problem[i].style.opacity = "1";
            hiddenBlock[i].style.top = null;

            if (hiddenBlock[i].getBoundingClientRect().top < 0) {
                hiddenBlock[i].style.top = "90px";
                style.textContent =
                    style.textContent +
                    `
        @media (min-width: 1024px) {

        .problems-item-popup:before {
            transform: rotateZ(180deg);
        }
        .problems-item-popup-1:before {
                    transform: rotateZ(180deg);
                }
            }`;
            }
        });
        item.addEventListener("mouseout", () => {
            hiddenBlock[i].style.visibility = null;
            hiddenBlock[i].style.opacity = null;
            problem[i].style.opacity = null;
            hiddenSlides[i].style.visibility = null;
            hiddenSlides[i].style.opacity = null;
            if (document.body.clientWidth > 1024) {
                style.textContent =
                    style.textContent +
                    `
        @media (min-width: 1024px) {

        .problems-item-popup:before {
            transform: rotateZ(360deg);
        }
        .problems-item-popup-1:before {
                    transform: rotateZ(180deg);
                }
            }`;
            }
        });
    });
};

export default showPromptProblem;