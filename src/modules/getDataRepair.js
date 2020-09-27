const getDataRepair = () => {
    const popupRepairDate = document.querySelector('.popup-repair-types-content__head-date');
    const popupRepairNavList = document.querySelector('.nav-list-popup-repair');
    const popupRepairContent = document.querySelector('.popup-repair-types-content-table__list');
    const table = document.querySelector('.popup-repair-types-content-table__list');
    const style = document.querySelector('style');
    let currentSlide = 0;



    fetch("db/db.json", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.status !== 200) {
                throw new Error("Ошибка");
            }
            const result = response.json();
            return result;
        })
        .then((result) => {
            getLastChange(result[0]);
            result.forEach(item => {
                if (item.title) {
                    getNavList(item);
                }
            });
            document.addEventListener('click', (e) => {
                if (e.target.closest('.popup-repair-types-nav__item')) {
                    result.forEach(item => {
                        if (e.target.textContent === item.title) {
                            table.textContent = '';
                            getContent(item);
                        }
                    });
                }
            });

            document.addEventListener('click', (e) => {
                if (e.target.closest('#nav-arrow-popup-repair_right') ||
                    e.target.closest('#nav-arrow-popup-repair_left')) {
                    const wrap = document.querySelector('.nav-popup-repair-types');
                    const slides = document.querySelector('.nav-list-popup-repair').children;
                    if (e.target.closest('#nav-arrow-popup-repair_right')) {
                        ++currentSlide;
                        if (currentSlide >= slides.length) {
                            currentSlide = 0;
                        }
                        nextSide(slides, currentSlide);
                    }
                    if (e.target.closest('#nav-arrow-popup-repair_left')) {
                        --currentSlide;
                        if (currentSlide < 0) {
                            currentSlide = slides.length - 1;
                        }
                        prevSide(slides, currentSlide);
                    }
                }
            });

        })
        .catch((error) => console.error(error));
    const prevSide = (elem, index) => {
        style.textContent = style.textContent + `
         @media (max-width: 1024px) {
        .nav-list-popup-repair {
            transform: translateX(-${elem[index].offsetLeft}px)
        }
    }`;
    };
    const nextSide = (elem, index) => {
        style.textContent = style.textContent + `
         @media (max-width: 1024px) {
        .nav-list-popup-repair {
            transform: translateX(-${elem[index].offsetLeft}px)
        } 
    }`;
    };
    const getLastChange = (date) => {
        popupRepairDate.textContent = date.date;
    };
    const getNavList = (date) => {
        const navItem = document.createElement('button');
        navItem.classList.add('button_o');
        navItem.classList.add('popup-repair-types-nav__item');
        navItem.textContent = date.title;
        popupRepairNavList.append(navItem);
    };
    const getContent = (item) => {
        const tbody = document.createElement('tbody');
        table.append(tbody);
        item.priceList.forEach(elem => {
            const itemContentRow = document.createElement('tr');
            const itemContentName = document.createElement('td');
            const itemContentUnits = document.createElement('td');
            const itemContentValue = document.createElement('td');
            itemContentRow.classList.add('mobile-row');
            itemContentRow.classList.add('showHide');
            itemContentName.classList.add('repair-types-name');
            itemContentName.textContent = elem.typeService;
            itemContentUnits.classList.add('repair-types-value');
            itemContentUnits.innerHTML = elem.units.replace(/\d/g, (match) => `<sup>${match}</sup>`);
            popupRepairContent.append(itemContentRow);
            itemContentValue.classList.add('repair-types-value');
            itemContentValue.textContent = `${elem.cost} руб.`;

            tbody.append(itemContentRow);
            itemContentRow.append(itemContentName);
            itemContentRow.append(itemContentUnits);
            itemContentRow.append(itemContentValue);
        });
    };
};

export default getDataRepair;