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

    popUpBtn.forEach(item => {
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

export default togglePopUp;