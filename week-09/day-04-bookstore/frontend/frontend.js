"use strict"

function ajax (method, url, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var requestAPI = JSON.parse(xhr.response);
      callback(requestAPI);
    }
  });
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
}

function appendTable(result){
  var table = document.querySelector('section table');
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
  }, this);
}