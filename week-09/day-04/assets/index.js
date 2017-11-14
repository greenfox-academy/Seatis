'use strict'
// console.log("Hello");



var xhr = new XMLHttpRequest();
var url = "http://localhost:4000/books";
// var url = "https://jsonplaceholder.typicode.com/posts";
var myResponse;
xhr.onreadystatechange = function () {
  console.log(this.readyState);
  if (this.readyState === 4) {
    console.log('hello');
    myResponse = JSON.parse(this.responseText);
    appendBody(myResponse);
  }
};

xhr.open("GET", url, true);
xhr.send(null);

function appendBody(response){
  response.forEach(function(element) {
    let tempElement = document.createElement('p');
    tempElement.innerText = element;
    // tempElement.innerText = element.title;
    document.body.appendChild(tempElement); 
  }, this);
}


// other code

// function ajax (command, url, callback) {
//   let xhr = new XMLHttpRequest();
//   xhr.open(command, url);
//   xhr.onload = function() {
//   console.log(xhr.responseText);
//     callback(JSON.parse(xhr.responseText));
//   };
//   xhr.send();
// };

// function appendBody(element){
//   let tempElement = document.createElement('p');
//   tempElement.innerText = element + "kkk";
//   document.body.appendChild(tempElement); 
// }

// function handleQueryResult(result){
//   result.forEach(function(element){appendBody(element)})
// }

// ajax('GET', 'http://127.0.0.0:3000/books', handleQueryResult)