'use strict';

const convert = () => {
    const select = document.getElementById('select-money'),
        select2 = document.getElementById('select-money2'),
        input = document.querySelector('.input-money'),
        input2 = document.querySelector('.input-money2'),
        output = document.querySelector('.output-money'),
        output2 = document.querySelector('.output-money2');
        
    document.addEventListener('input', (event) => {
        if (event.target.matches('.input-money')) {
            event.target.value = event.target.value.replace(/[^0-9]/g, '');
        } else if (event.target.matches('.input-money2')) {
            event.target.value = event.target.value.replace(/[^0-9]/g, '');
        }
    });

    document.addEventListener('click', (event) => {
        if (event.target.matches('.btn-money')) {
            output.textContent = (input.value * select.value).toFixed(2);
        } else if (event.target.matches('.btn-money2')) {
            output2.textContent = (input2.value / select2.value).toFixed(2);
        }
    });

    document.addEventListener('change', (event) => {
        if (event.target.matches('#select-money')) {
            output.textContent = (input.value * select.value).toFixed(2);
        } else if (event.target.matches('#select-money2')) {
            output2.textContent = (input2.value / select2.value).toFixed(2);
        }
    });

    const convertToRub = (data) => {
        let usd = 0,
            eur = 0;
        select.options[select.selectIndex];
        eur = data.rates.RUB;
        usd = eur / data.rates.USD;
        let newOption = new Option('Евро (EUR)', eur);
        select.append(newOption);
        newOption = new Option('Доллар США (USD)', usd);
        select.append(newOption);
        newOption.selected = true;
    };

    const convertFromRub = (data) => {
        let usd = 0,
            eur = 0;
        select2.options[select2.selectIndex];
        eur = data.rates.RUB;
        usd = eur / data.rates.USD;
        let newOption = new Option('Евро (EUR)', eur);
        select2.append(newOption);
        newOption = new Option('Доллар США (USD)', usd);
        select2.append(newOption);
        newOption.selected = true;
    };

    const getData = () => {
        return fetch('https://api.exchangeratesapi.io/latest', {
            method: "GET",
            mode: 'cors'
        });
    };

    getData()
        .then((response) => {
            if (response.status !== 200) {
                throw new Error('status network is not 200');
            }
            return (response.json());
        }).then((data) => {
            convertToRub(data);
            convertFromRub(data);
        })
        .catch((error) => {
            console.error(error);
        });
};
convert();