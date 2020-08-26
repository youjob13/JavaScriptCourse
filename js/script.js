class DomElement {
  constructor(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.created = function (selector) {
      const block =
        selector.trim().slice(0, 1) == "."
          ? document.createElement("div")
          : selector.trim().slice(0, 1) == "#"
          ? document.createElement("id")
          : alert("не то");
      block.classList.add("block");
      block.textContent = "Покушал, набрался сил";
      block.style.cssText = `height: ${height}; width: ${width}; background: ${bg}; font-size: ${fontSize};`;
      document.body.append(block);
    };
  }
}

const bg1 = new DomElement("#blocked", "150px", "100%", "brown", "45px");
console.log(bg1);
bg1.created("#blocked");
