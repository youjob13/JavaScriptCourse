const toggleMenu = () => {
  const menu = document.querySelector(".popup-dialog-menu");

  document.addEventListener("click", (e) => {
    if (e.target.matches(".menu__icon")) {
      menu.style.transform = "translate3d(0, 0, 0)";
      menu.style.opacity = "1";
    }
    if (e.target.matches(".close-menu")) {
      menu.style.transform = null;
      menu.style.opacity = "0";
    }
  });
};

export default toggleMenu;
