document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const select = document.getElementById("cars"),
    output = document.getElementById("output");

  select.addEventListener("change", () => {
    const getRes = (link) => {
      return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", link);
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.addEventListener("readystatechange", () => {
          if (request.readyState !== 4) {
            return;
          }
          if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            resolve(data);
          } else {
            reject(request.statusText);
          }
        });
      });
    };

    const link = "./cars.json";

    const outputData = (data) => {
      console.log(data);
      data.cars.forEach((item) => {
        if (item.brand === select.value) {
          const { brand, model, price } = item;
          output.innerHTML = `Тачка: ${brand} серия: ${model}<br>
                цена: ${price} $`;
        }
      });
    };

    getRes(link)
      .then(outputData)
      .catch((error) => console.error(error));
  });
});
