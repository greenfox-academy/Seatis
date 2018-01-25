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

function eventHandler(baseURL) {
  let button = document.querySelector('button');
  let category = document.querySelector('input');
  let url = baseURL + '?category=';
  button.addEventListener('click', function () {
    url += category.value;
    ajax('GET', url, null, appendTable)
  });
}

function core() {
  let baseURL = 'http://localhost:4000/books';
  ajax('GET', baseURL, null, appendTable);
  eventHandler(baseURL);
}

core();