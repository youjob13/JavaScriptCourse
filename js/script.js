document.addEventListener("DOMContentLoaded", function () {
  alert("DOM готов!");

  class DomElement {
    constructor(
      height = "100px",
      width = "100px",
      bg = "red",
      position = "relative"
    ) {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.position = position;
    }
  }

  const bg1 = new DomElement("100px", "100px", "grey", "absolute");

  DomElement.prototype.created = function () {
    const elem = document.createElement("div");
    elem.id = "elem";
    elem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; position: ${this.position};`;
    elem.innerHTML = ` 
    __人____人 
    ≧(◕‿‿◕)≦ `;
    document.body.append(elem);
  };

  bg1.created();

  document.addEventListener("keydown", function (e) {
    e.preventDefault();
    switch (event.key) {
      case "ArrowLeft":
        elem.style.transform += "translateX(-10px)";
        break;
      case "ArrowRight":
        elem.style.transform += "translateX(10px)";
        break;
      case "ArrowUp":
        elem.style.transform += "translateY(-10px)";
        break;
      case "ArrowDown":
        elem.style.transform += "translateY(10px)";
        break;
    }
  });
});
