function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.created = function (selector) {

        if (selector.trim().slice(0,1) == '.') {
            let elem = document.createElement('div');
            elem.classList.add('elem');
            elem.textContent = 'А теперь можно и покушать';
            elem.style.cssText = `height: ${height}; width: ${width}; background: ${bg}; font-size: ${fontSize};`;
            
            document.body.append(elem);
            
        } else if (selector.trim().slice(0, 1) == '#') {
            let elem = document.createElement('id');
            elem.id = 'elem';
            elem.classList.add('elem');
            elem.style.cssText = `height: ${height}; width: ${width}; background: ${bg}; font-size: ${fontSize};`;
            elem.textContent = 'Сегодня голодаем';
            document.body.append(elem);
        }

    };
}

let bg1 = new DomElement(".blocked", '150px', '100%', 'brown','45px');

bg1.created('.blocked');
