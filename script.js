"use strict";
const outputHeroes = document.querySelector(".output-heroes"),
  header = document.querySelector(".link"),
  outputMovies = document.querySelector(".output-movies"),
  selectFilter = document.getElementById("filter"),
  btn = document.querySelector(".button"),
  genderCheck = document.querySelectorAll(".gender-check"),
  statusCheck = document.querySelectorAll(".status-check"),
  selectSpecies = document.getElementById("select-species"),
  selectMovies = document.getElementById("select-movies");

const linkHeroesArr = [];
const arrFilt1 = [];
const arrFilt2 = [];
const obj = [];

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
    filterSpecies(result);
    choosedMovies(result);
    selectMovies.addEventListener("change", () => {
      filterMovies(result);
    });

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      filterCheckbox(result);
    });
  })
  .catch((error) => console.log(error));

const filterCheckbox = (arr) => {
  //обрабатывает input[type="radio"]
  statusCheck.forEach((item) => {
    if (item.checked && item.name === "status") {
      arrFilt1.length = 0;
      arr.forEach((elem) => {
        if (elem.status === item.value) {
          arrFilt1.push(elem);
        }
      });
      //   objOne.add = arrFilt1;
        obj[item.name] = arrFilt1;
    }
  });
  genderCheck.forEach((item) => {
    if (item.checked && item.name === "gender") {
      arrFilt1.length = 0;
      arr.forEach((elem) => {
        if (elem.gender === item.value) {
           arrFilt1.push(elem);
          //   arrFilt2.push(elem);
        }
      });
      //   objTwo.add = arrFilt2;
        obj[item.name] = arrFilt1;
    }
  });
  console.log(obj);
  //   let a = [...arrFilt2, ...arrFilt1];
  let res = arrFilt1.filter(function (number, index, a) {
    return (
      (!(a.lastIndexOf(number) == index) || !(a.indexOf(number) == index)) &&
      true
    );
  });
  console.log(res);
  const clone = [...new Set(res)];
  console.log(clone);

  outputMovies.textContent = "";
  //   const duplicatedValues = [...new Set(arrFilt1)].filter((item) =>
  //     arrFilt2.includes(item)
  //   );
  console.log(arrFilt1);

  if (clone.length === 0) {
    outputMovies.textContent = "";
  } else if (clone.length !== 0) {
    clone.forEach((item) => {
      if (item.movies) {
        addCard(item);
      }
    });
  } else {
    a.forEach((item) => {
      if (item.movies) {
        addCard(item);
      }
    });
  }

  //условия работы checkbox'ов
  //   if (arrFilt1.length !== 0 && arrFilt2.length !== 0) {
  //     filt.forEach((item) => {
  //       if (item.movies) {
  //         addCard(item);
  //       }
  //     });
  //   } else if (arrFilt1.length === 0 && arrFilt2.length !== 0) {
  //     arrFilt2.forEach((item) => {
  //       if (item.movies) {
  //         addCard(item);
  //       }
  //     });
  //   } else if (arrFilt2.length === 0 && arrFilt1.length !== 0) {
  //     arrFilt1.forEach((item) => {
  //       if (item.movies) {
  //         addCard(item);
  //       }
  //     });
  //   } else if (arrFilt1.length === 0 && arrFilt2.length === 0) {
  //     arr.forEach((item) => {
  //       if (item.movies) {
  //         addCard(item);
  //       }
  //     });
  //   }
};
//пока не работает
const filterSpecies = (array) => {
  let arr = [];
  array.forEach((item) => {
    arr.push(item.species);
  });

  arr = arr.filter((item, i) => arr.indexOf(item) === i);

  arr.forEach((item) => {
    selectSpecies.options[selectSpecies.selectIndex];
    let newOption = new Option(item, item);
    selectSpecies.append(newOption);
    newOption.selected = true;
  });
  // return arr;
};

const choosedMovies = (movies) => {
  const moviesArr = [];
  let arr = [];
  //создаем новый массив только с фильмами
  movies.forEach((item) => {
    moviesArr.push(item.movies);
  });
  //создаем новый одномерный массив со списком всех фильмов
  moviesArr.forEach((item) => {
    if (item) {
      item.forEach((elem) => {
        arr.push(elem);
      });
    }
  });
  //фильтрует массив со списком фильмов так, чтобы они не повторялись
  arr = arr.filter((item, i) => arr.indexOf(item) === i);
  //создает новые option для select
  arr.forEach((item) => {
    selectMovies.options[selectMovies.selectIndex];
    let newOption = new Option(item, item);
    selectMovies.append(newOption);
    newOption.selected = true;
  });
  return arr;
};
//создает и добавляет карточку на сайт
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
//фильтрует фильмы по выбранному option
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
