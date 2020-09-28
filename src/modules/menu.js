const toggleMenu = () => {
  const menu = document.querySelector(".popup-dialog-menu"),
    style = document.querySelector('style');
    style.textContent= style.textContent + `
    .popup-dialog-menu {
      opacity:0;
    }
    `;
    
  document.addEventListener("click", (e) => {
    if (e.target.matches(".menu__icon")) {
      menu.style.transform = "translate3d(0, 0, 0)";
      menu.style.opacity = "1";
    }
    if (e.target.matches(".close-menu") ||e.target.matches(".popup-menu-nav__item a")) {
      menu.style.transform = null;
      menu.style.opacity = "0";
    }
  });

  const smoothScroll = (id) => {
    document.querySelector(`${id}`).scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches(".button-footer a") ||e.target.matches(".popup-menu-nav__item a")) {
      e.preventDefault();
      smoothScroll(e.target.getAttribute("href"));
    }
  });

};

export default toggleMenu;
