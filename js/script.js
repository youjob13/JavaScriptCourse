document.addEventListener("DOMContentLoaded", function () {
    alert("DOM готов!");

    class DomElement {
        constructor(selector, height, width, bg, position) {
            this.selector = selector;
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.position = position;
            this.created = function () {

                let elem = document.createElement('id');
                elem.id = 'elem';
                elem.classList.add('elem');
                elem.style.cssText = `height: ${height}; width: ${width}; background: ${bg}; position: ${position};`;
                elem.innerHTML = '<br>    __人____人 <br> ≧(◕‿‿◕)≦ ';
                document.body.append(elem);

            };
        }
    }

    let bg1 = new DomElement(".blocked", '100px', '100px', 'grey', 'absolute');
    bg1.created('.blocked');
    document.addEventListener('keydown', function (e) {
        e.preventDefault();
        switch (event.key) {
            case "ArrowLeft":
                elem.style.transform += 'translateX(-10px)';
                break;
            case "ArrowRight":
                elem.style.transform += 'translateX(10px)';
                break;
            case "ArrowUp":
                elem.style.transform += 'translateY(-10px)';
                break;
            case "ArrowDown":
                elem.style.transform += 'translateY(10px)';
                break;
        }

    });


});