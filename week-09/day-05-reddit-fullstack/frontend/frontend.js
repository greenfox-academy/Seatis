"use strict"
// const baseURL = 'http://secure-reddit.herokuapp.com/simple/posts';
// const baseURL = 'https://time-radish.glitch.me/posts';
const baseURL = 'http://localhost:5000/posts';

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

function elapsedTimeCalc(timestamp) {
  let currentDate = new Date();
  let postDate = new Date(timestamp);
  let timeInSec = Math.floor((currentDate - postDate) / 1000);
  let days = Math.floor(timeInSec / (3600 * 24));
  let hours   = Math.floor((timeInSec - (days * 24)) / 3600);
  let minutes = Math.floor((timeInSec - (hours * 3600)) / 60);
  let seconds = timeInSec - (hours * 3600) - (minutes * 60);
  if (days > 0) {
    return days + ' days';
  } else if (hours > 0) {
    return hours + ' hours';
  } else if (minutes > 0) {
    return minutes + ' minutes';
  } else {
    return seconds + ' seconds';
  }
}

function pageRender(result) {
  let mainSection = document.querySelector('section.main-container');
  if (result.status === 'OK') {
    mainSection.innerHTML = '';
    result.posts.forEach(function(element) {
      let elapsedTime = elapsedTimeCalc(element.timestamp);
      if (element.owner !== null) {
        var currentUser = element.owner;
      } else {
        var currentUser = "Anonymus"
      }
      const markup = `
      <div class="id">${element.id}</div>
      <div class="arrows">
        <div><img class="up" src="../assets/upvote.png" alt=""></div>
        <div class="score">${element.score}</div>
        <div><img class="down" src="../assets/downvote.png" alt=""></div>
      </div>
      <div class="title">
        <div class="head"><a href='${element.url}'>${element.title}</a></div>
        <div class="description">submitted ${elapsedTime} ago by ${currentUser}</div>
        <div><span class="modify"><a href="modify.html?id=${element.id}">modify</a></span><span class="remove">remove</span></div>
      </div>`
      mainSection.innerHTML += markup;
    });
  } else {
    mainSection.innerHTML = `<div>${result.error}</div>`;
  }
}

function orderBy(condition, result) {
  let sortedPosts;

  switch(condition) {
    case 'idA':
      sortedPosts = result.posts.sort(function(a, b){
        return a.id - b.id;
      });
      break;
    case 'idD':
      sortedPosts = result.posts.sort(function(a, b){
        return b.id - a.id;
      });
      break;
    // case 'idA':
    //     code block
    //     break;
    // case 'idA':
    //     code block
    //     break;
    // case 'idA':
    //     code block
    //     break;
    // case 'idA':
    //     code block
    //     break;
    // default:
    //     code block
  }

  // if (condition === 'idA') {
  //   sortedPosts = result.posts.sort(function(a, b){
  //     return a.id - b.id;
  //   });
  // } else if (condition === 'title') {
  //   sortedPosts = result.posts.sort(function(a, b){
  //     if(a.title < b.title) return -1;
  //     if(a.title > b.title) return 1;
  //     return 0;
  //   });
  // } else if (condition === 'score') {
  //   sortedPosts = result.posts.sort(function(a, b){
  //     return a.score - b.score;
  //   });
  // }
  pageRender({'status': 'OK', 'posts': sortedPosts})
}

function eventController(result) {
  var currentID = document.querySelectorAll('.id');
  var voteUp = document.querySelectorAll('.up');
  var voteDown = document.querySelectorAll('.down');
  var removeItem = document.querySelectorAll('.remove');
  var selectOrder = document.querySelector('select');
  
  selectOrder.addEventListener('change', function() {
    console.log(this.options[this.selectedIndex].value);
    orderBy(this.options[this.selectedIndex].value, result);
  })
  
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
      ajax('DELETE', currentURL, null, reLoad);
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
  score[index].textContent = result.post.score;
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

function core(result) {
  pageRender(result);
  updateLogin();
  loginController();
  eventController(result);
}

function reLoad() {
  ajax('GET', baseURL, null, core);
}

reLoad();