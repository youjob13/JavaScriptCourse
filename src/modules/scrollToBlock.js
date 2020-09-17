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

export default scrollToBlock;