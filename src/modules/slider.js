 const slider = () => {
     const dotsList = document.querySelector(".portfolio-dots"),
         slider = document.querySelector(".portfolio-content"),
         slide = document.querySelectorAll(".portfolio-item");
     let currentSlide = 0,
         interval;

     const addDots = () => {
         slide.forEach((item) => {
             const dot = document.createElement("li");
             dot.classList.add("dot");
             dotsList.append(dot);
         });
     };

     addDots();
     const dots = dotsList.querySelectorAll(".dot");
     dots[0].classList.add("dot-active");

     const nextSlide = (elem, index, strSelect) => {
         elem[index].classList.add(strSelect);
     };
     const prevSlide = (elem, index, strSelect) => {
         elem[index].classList.remove(strSelect);
     };

     const autoPlaySlide = () => {
         prevSlide(slide, currentSlide, "portfolio-item-active");
         prevSlide(dots, currentSlide, "dot-active");
         currentSlide++;
         if (currentSlide >= slide.length) {
             currentSlide = 0;
         }
         nextSlide(slide, currentSlide, "portfolio-item-active");
         nextSlide(dots, currentSlide, "dot-active");
     };

     const startSlide = (time = 3000) => {
         interval = setInterval(autoPlaySlide, time);
     };

     startSlide(3000);

     const stopSlide = () => {
         clearInterval(interval);
     };

     slider.addEventListener("click", (event) => {
         event.preventDefault();

         let target = event.target;

         if (!target.matches(".portfolio-btn, .dot")) {
             return;
         }

         prevSlide(slide, currentSlide, "portfolio-item-active");
         prevSlide(dots, currentSlide, "dot-active");

         if (target.matches("#arrow-left")) {
             currentSlide--;
         } else if (target.matches("#arrow-right")) {
             currentSlide++;
         } else if (target.matches(".dot")) {
             dots.forEach((item, i) => {
                 if (item === target) {
                     currentSlide = i;
                 }
             });
         }

         if (currentSlide >= slide.length) {
             currentSlide = 0;
         }
         if (currentSlide < 0) {
             currentSlide = slide.length - 1;
         }
         nextSlide(slide, currentSlide, "portfolio-item-active");
         nextSlide(dots, currentSlide, "dot-active");
     });

     slider.addEventListener("mouseover", (event) => {
         let target = event.target;

         if (target.matches(".portfolio-btn") || target.matches(".dot")) {
             stopSlide();
         }
     });

     slider.addEventListener("mouseout", (event) => {
         let target = event.target;

         if (target.matches(".portfolio-btn") || target.matches(".dot")) {
             startSlide();
         }
     });
 };

 export default slider;