const togglePopUpRepair = () => {
  const popupRepair = document.querySelector(".popup-repair-types"),
    popupRepairClose = popupRepair.querySelectorAll(".close");

  document.addEventListener("click", (e) => {
    if (
      e.target.matches(".no-overflow") ||
      e.target.matches(".link-list-repair a")
    ) {
      document.querySelector(".popup-dialog-menu").style.transform = null;
      document.querySelector(".popup-dialog-menu").style.opacity = "0";
      popupRepair.style.visibility = "visible";
    }
    popupRepairClose.forEach((item) => {
      if (e.target === item) {
        popupRepair.style.visibility = "hidden";
      }
    });
  });
};

export default togglePopUpRepair;
