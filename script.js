"use strict";
const outputHeroes = document.querySelector(".output-heroes"),
    header = document.querySelector(".link"),
    outputMovies = document.querySelector(".output-movies"),
    selectFilter = document.getElementById("filter"),
    btn = document.querySelector(".button"),
    genderCheck = document.querySelectorAll(".gender-check"),
    statusCheck = document.querySelectorAll(".status-check"),
    selectSpecies = document.getElementById('select-species'),
    selectMovies = document.getElementById("select-movies");

const linkHeroesArr = [];
const arrFilt1 = [];
const arrFilt2 = [];

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
    .catch((error) => console.log(error));


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
    console.log(arr);
    arr.forEach((item) => {
        selectMovies.options[selectMovies.selectIndex];
        let newOption = new Option(item, item);
        selectMovies.append(newOption);
        newOption.selected = true;
    });
    return arr;
};

const addCard = (item) => {
    const card = document.createElement("li");
    card.classList.add("heroes");
    card.innerHTML = `<div class="heroes-info"><strong>Имя:</strong> ${item.name}<br>
        <strong>Настоящее имя:</strong> ${item.realName} <br>
        <strong>Раса:</strong> ${item.species} <br>
        <strong>Гражданство:</strong> ${item.citizenship}<br>
        <strong>Гражданство:</strong> ${item.citizenship}<br>
        <strong>Пол:</strong> ${item.gender} <br>
        <strong>Дата рождения:</strong> ${item.birthDay} <br> 
        <strong>Статус:</strong> ${item.status} <br> 
        <strong>Актер:</strong> ${item.actors} <br>
        <strong>Фильмы:</strong> ${item.movies}</div>
        <img class = "photo" src = "${item.photo}">`;
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