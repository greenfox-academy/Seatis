"use strict"

function ajax (method, url, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var responseData = JSON.parse(xhr.response);
      callback(responseData);
    }
  });
  xhr.open(method, url, true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
}

ajax('GET', 'http://secure-reddit.herokuapp.com/simple/posts', null, pageRender);

function pageRender(result) {
  let mainSection = document.querySelector('section.main-container');
  result.posts.forEach(function(element) {
    if (element.user !== null) {
      var currentUser = element.user;
    } else {
      var currentUser = "Anonymus"
    }
    const markup = `
    <div class="index">${element.id}</div>
    <div class="arrows">
      <div><img class="up" src="assets/upvote.png" alt=""></div>
      <div class="vote">${element.score}</div>
      <div><img class="down" src="assets/downvote.png" alt=""></div>
    </div>
    <div class="title">
      <div class="head"><a href='${element.url}'>${element.title}</a></div>
      <div class="description">submitted ${element.timestamp} month ago by ${currentUser}</div>
      <div class="remove">modify remove</div>
    </div>`
    mainSection.innerHTML += markup;
  });
}