var myRequest = new XMLHttpRequest();
myRequest.open("GET", 'http://secure-reddit.herokuapp.com/simple/posts', false);
myRequest.send(null);


if (myRequest.readyState === XMLHttpRequest.DONE) {
console.log("Everything is good, the response was received.");
} else {
  console.log("Not ready yet.");
}
console.log(myRequest.readyState);

var requestAPI = JSON.parse(myRequest.response);
console.log(requestAPI.posts[0].score);

var mainSection = document.querySelector('section.main-container');

requestAPI.posts.forEach(function(element) {
  if (element.user === null) {
    var currentUser = 'Anonymus';
  } else {
    var currentUser = element.user;
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
  </div>
  `
  mainSection.innerHTML += markup;

}, this);

var myIndex = document.querySelectorAll('.index');
var myScore = document.querySelectorAll('.vote');
var voteUp = document.querySelectorAll('.up');
var voteDown = document.querySelectorAll('.down');

voteUp.forEach(function(element, i) {
  element.addEventListener('click', function() {
    console.log(myIndex[i].textContent);
    vote (i, '/upvote');
  });

}, this);

voteDown.forEach(function(element, i) {
  element.addEventListener('click', function() {
    console.log(myIndex[i].textContent);
    vote (i, '/downvote');
  });

}, this);

function vote (index, direction) {
  var xhrUp = new XMLHttpRequest();
  var url = "http://secure-reddit.herokuapp.com/simple/posts/" + myIndex[index].textContent + direction;
  console.log(url);
  var myResponse;
  xhrUp.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      myResponse = JSON.parse(this.responseText);
      console.log(myResponse.score);
      myScore[index].textContent = myResponse.score;
    }
  });
  
  xhrUp.open("PUT", url);
  xhrUp.setRequestHeader("accept", "application/json");
  xhrUp.send();
}

