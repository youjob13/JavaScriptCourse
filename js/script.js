
'use strict';

const calcValue = function (itemsPrice, items, promocode) {
    if (itemsPrice >= 100000) {
        let priceOver = itemsPrice - 100000;
        itemsPrice = priceOver * 0.8;
    } else {
        if (items >= 5 && items <= 9) {
            itemsPrice *= 0.95;
        } else if (items >= 10) {
            itemsPrice *= 0.9;
        }

        if (promocode === 15 && itemsPrice >= 25000) {
            itemsPrice *= 0.85;
        } else if (promocode === 100) {
            if (itemsPrice < 100){
                itemsPrice = 0;
            } else {
                itemsPrice -= 100;
            }
        }
    }
    alert(itemsPrice);
};
calcValue(20, 6, 100);