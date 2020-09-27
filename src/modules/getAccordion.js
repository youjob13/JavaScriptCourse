const getAccordion = () => {
  const accordionHeader = document
    .querySelector(".accordion")
    .querySelectorAll(".title_block");
  accordionHeader.forEach((item, i) => {
    accordionHeader[i].classList.remove("msg-active");
  });

  document.addEventListener("click", (e) => {
    accordionHeader.forEach((item, i) => {
      if (e.target === item) {
        accordionHeader[i].classList.add("msg-active");
      } else {
        accordionHeader[i].classList.remove("msg-active");
      }
    });
  });
};

export default getAccordion;