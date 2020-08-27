class DomElement {
  constructor(
    selector = "#div",
    height = "320px",
    width = "320px",
    bg = "red",
    fontSize = "32px"
  ) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }
}

DomElement.prototype.created = function () {
  const block =
    this.selector.trim().slice(0, 1) == "."
      ? document.createElement("div")
      : this.selector.trim().slice(0, 1) == "#"
        ? document.createElement("p")
        : alert("не то");
  block.classList.add("block");
  block.textContent = "Покушал, набрался сил";
  block.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
  document.body.append(block);
};

const bg1 = new DomElement(".blocked", "150px", "100%", "brown", "45px");

bg1.created();
