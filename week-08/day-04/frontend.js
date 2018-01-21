"use strict"
const baseURL = 'http://secure-reddit.herokuapp.com/simple/posts';

function authService() {
  this.getLocalStorage = function() {
    return localStorage.getItem('user');
  }
  this.setLocalStorage = function(user) {
    localStorage.setItem('user', user);
  }
  this.clearLocalStorage = function() {
    localStorage.removeItem('user');
  }
}

var myService = new authService();

function pageRender(result) {
  let mainSection = document.querySelector('section.main-container');
  console.log(result);
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
      <div><span class="modify">modify</span><span class="remove">remove</span></div>
    </div>`
    mainSection.innerHTML += markup;
  });
  updateLogin();
  loginController();
  eventController();
}

function eventController() {
  var currentID = document.querySelectorAll('.id');
  var voteUp = document.querySelectorAll('.up');
  var voteDown = document.querySelectorAll('.down');
  var removeItem = document.querySelectorAll('.remove');
  voteUp.forEach(function(element, i) {
    element.addEventListener('click', function() {
      let currentURL = baseURL + '/' + currentID[i].textContent + '/upvote';
      ajax('PUT', currentURL, null, updateScore, i);
    });
  
  });
  voteDown.forEach(function(element, i) {
    element.addEventListener('click', function() {
      let currentURL = baseURL + '/' + currentID[i].textContent + '/downvote';
      ajax('PUT', currentURL, null, updateScore, i);
    });
  });
  removeItem.forEach(function(element, i) {
    element.addEventListener('click', function() {
      let currentURL = baseURL + '/' + currentID[i].textContent;
      console.log(currentURL);
      ajax('DELETE', currentURL, null);
    });
  });
}

function loginController() {
  var login = document.querySelector('.login-component .login');
  var inputField = document.querySelector('.login-component input');
  var logout = document.querySelector('.login-component .logout');
  if (login) {
    login.addEventListener('click', function() {
      myService.setLocalStorage(inputField.value);
      updateLogin();
    });
  } else if (logout) {
    logout.addEventListener('click', function() {
      myService.clearLocalStorage();
      updateLogin();
    });
  }
}

function updateScore(result, index) {
  var score = document.querySelectorAll('.score');
  score[index].textContent = result.score;
}

function updateLogin() {
  let loginSection = document.querySelector('.login-component');
  let currentUser = myService.getLocalStorage();
  if (currentUser) {
    var markup = `<div><span>LOGGED IN AS ${currentUser}</span></div>
                  <div class="logout">LOGOUT</div>`;
  } else {
    var markup = `<div><input type="text" placeholder="Please enter your name"></div>
                  <div class="login">LOGIN</div>`;
  }
  loginSection.innerHTML = markup;
  loginController();
}

function core() {
  ajax('GET', baseURL, null, pageRender);
}

core();