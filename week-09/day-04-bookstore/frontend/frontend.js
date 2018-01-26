"use strict"

function ajax (method, url, data, callback) {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      let requestAPI = JSON.parse(xhr.response);
      callback(requestAPI);
    }
  });
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
}

function appendTable(result){
  let table = document.querySelector('section table');
  table.innerHTML = `<tr>
                      <th>Book</th>
                      <th>Athor</th> 
                      <th>Category</th>
                      <th>Publisher</th>
                      <th>Price</th>
                    </tr>
  `
  result.books.forEach(function(element) {
    const markup = `<tr>
                      <td>${element.title}</td>
                      <td>${element.author}</td>
                      <td>${element.category}</td>
                      <td>${element.publisher}</td>
                      <td>${element.price}</td>
                    </tr>
    `
    table.innerHTML += markup;
  });
}

function instantSearch(baseURL, button, category, publisher, priceLo, priceHi) {
  let url;
  button.classList.add('disabled');
  category.addEventListener('input', function() {
    url = baseURL + `?category=${this.value}&publisher=${publisher.value}&priceLo=${priceLo.value}&priceHi=${priceHi.value}`;
    ajax('GET', url, null, appendTable)
  });
  publisher.addEventListener('input', function() {
    url = baseURL + `?category=${category.value}&publisher=${this.value}&priceLo=${priceLo.value}&priceHi=${priceHi.value}`;
    ajax('GET', url, null, appendTable)
  });
  priceLo.addEventListener('input', function() {
    url = baseURL + `?category=${category.value}&publisher=${publisher.value}&priceLo=${this.value}&priceHi=${priceHi.value}`;
    ajax('GET', url, null, appendTable)
  });
  priceHi.addEventListener('input', function() {
    url = baseURL + `?category=${category.value}&publisher=${publisher.value}&priceLo=${priceLo.value}&priceHi=${this.value}`;
    ajax('GET', url, null, appendTable)
  });
}

function buttonSearch(baseURL, button, category, publisher, priceLo, priceHi) {
  
  button.addEventListener('click', function () {
    console.log('nan');
    let url = baseURL + '?';
    if (category.value.length) {
      url += `category=${category.value}`;
    }
    if (publisher.value.length) {
      url += `&publisher=${publisher.value}`;
    }
    if (priceLo.value.length) {
      url += `&priceLo=${priceLo.value}`;
    }
    if (priceHi.value.length) {
      url += `&priceHi=${priceHi.value}`;
    }
    url = url.replace('?&', '?');
    ajax('GET', url, null, appendTable);
  });
}

function eventHandler(baseURL) {
  let button = document.querySelector('button');
  let category = document.getElementById('category');
  let publisher = document.getElementById('publisher');
  let priceLo = document.getElementById('price-lo');
  let priceHi = document.getElementById('price-hi');

  instantSearch(baseURL, button, category, publisher, priceLo, priceHi);
  // buttonSearch(baseURL, button, category, publisher, priceLo, priceHi);
}

function core() {
  let baseURL = 'http://localhost:4000/books';
  ajax('GET', baseURL, null, appendTable);
  eventHandler(baseURL);
}

core();