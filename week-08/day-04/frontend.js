"use strict"

function pageRender(result) {
  var baseURL = 'http://secure-reddit.herokuapp.com/simple/posts';
  let mainSection = document.querySelector('section.main-container');
  result.posts.forEach(function(element) {
    if (element.user !== null) {
      var currentUser = element.user;
    } else {
      var currentUser = "Anonymus"
    }
    const markup = `
    <div class="id">${element.id}</div>
    <div class="arrows">
      <div><img class="up" src="assets/upvote.png" alt=""></div>
      <div class="score">${element.score}</div>
      <div><img class="down" src="assets/downvote.png" alt=""></div>
    </div>
    <div class="title">
      <div class="head"><a href='${element.url}'>${element.title}</a></div>
      <div class="description">submitted ${element.timestamp} month ago by ${currentUser}</div>
      <div class="remove">modify remove</div>
    </div>`
    mainSection.innerHTML += markup;
  });
  voteController(baseURL);
}

function voteController(url) {
  var currentID = document.querySelectorAll('.id');
  var voteUp = document.querySelectorAll('.up');
  console.log(voteUp);
  var voteDown = document.querySelectorAll('.down');
  voteUp.forEach(function(element, i) {
    element.addEventListener('click', function() {
      console.log(url);
      let currentURL = url + '/' + currentID[i].textContent + '/upvote'
      ajax('PUT', currentURL, null, updateScore, i);
    });
  
  });
  voteDown.forEach(function(element, i) {
    element.addEventListener('click', function() {
      let currentURL = url + '/' + currentID[i].textContent + '/downvote'
      ajax('PUT', currentURL, null, updateScore, i);
    });
  });
}

function updateScore(result, index) {
  var score = document.querySelectorAll('.score');
  score[index].textContent = result.score;
}

function core() {
  ajax('GET', 'http://secure-reddit.herokuapp.com/simple/posts', null, pageRender);
}

core();