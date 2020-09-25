const getAccordion = () => {
  const accordionHeader = document
      .querySelector(".accordion")
      .querySelectorAll(".title_block"),
    accordionContent = document
      .querySelector(".accordion")
      .querySelectorAll(".msg");
  accordionHeader.forEach((item, i) => {
    accordionHeader[i].classList.remove("msg-active");
    accordionContent[i].classList.remove(".msg-active");
  });

  document.addEventListener("click", (e) => {
    accordionHeader.forEach((item, i) => {
      if (e.target === item) {
        accordionHeader[i].classList.toggle("msg-active");
        accordionContent[i].classList.toggle(".msg-active");
      }
    });
  });
};

export default getAccordion;
