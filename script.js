"use strict";
const header = document.querySelector(".link"),
    outputMovies = document.querySelector(".output-movies"),
    selectMovies = document.getElementById("select-movies");

fetch("dbHeroes.json", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => {
        if (response.status !== 200) {
            throw new Error("Ошибка");
        }
        const result = response.json();
        return result;
    })
    .then((result) => {
        choosedMovies(result);
        selectMovies.addEventListener("change", () => {
            filterMovies(result);
        });
    })
    .catch((error) => console.error(error));

const choosedMovies = (movies) => {
    const moviesArr = [];
    let arr = [];
    movies.forEach((item) => {
        moviesArr.push(item.movies);
    });
    moviesArr.forEach((item) => {
        if (item) {
            item.forEach((elem) => {
                arr.push(elem);
            });
        }
    });
    arr = arr.filter((item, i) => arr.indexOf(item) === i);
    arr.forEach((item) => {
        selectMovies.options[selectMovies.selectIndex];
        let newOption = new Option(item, item);
        selectMovies.append(newOption);
        newOption.selected = true;
    });
    return arr;
};

const addCard = ({
    name = 'Неизвестно',
    realName = 'Неизвестно',
    species = 'Неизвестна',
    citizenship = 'Неизвестно',
    gender = 'Неизвестен',
    birthDay = 'Неизвестна',
    status = 'Неизвестен',
    actors = 'Неизвестен',
    movies = 'Нет данных',
    photo = 'dbimage/quest.jpg'
}) => {
    const card = document.createElement("li");
    card.classList.add("heroes");
    card.innerHTML = `<div class="heroes-info"><strong>Имя:</strong> ${name}<br>
        <strong>Настоящее имя:</strong> ${realName} <br>
        <strong>Раса:</strong> ${species} <br>
        <strong>Гражданство:</strong> ${citizenship}<br>
        <strong>Пол:</strong> ${gender} <br>
        <strong>Дата рождения:</strong> ${birthDay} <br> 
        <strong>Статус:</strong> ${status} <br> 
        <strong>Актер:</strong> ${actors} <br>
        <strong>Фильмы:</strong> ${movies}</div>
        <img class = "photo" src = "${photo}">`;
    outputMovies.append(card);
    header.textContent = selectMovies.value;
};

const filterMovies = (heroesArray) => {
    outputMovies.textContent = "";
    heroesArray.forEach((item) => {
        if (item.movies) {
            item.movies.filter((elem) => {
                if (elem === selectMovies.value) {
                    addCard(item);
                }
            });
        }
    });
};