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

export default changeImage;