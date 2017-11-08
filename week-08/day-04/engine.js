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
console.log(requestAPI.posts[0]);

if (document.querySelector('input') != null) {
  var myURL = document.querySelector('input');
  var myTitle = document.querySelector('textarea');
  var myButton = document.querySelector('div.submit')
  myButton.addEventListener('click', function() {
    var body = JSON.stringify({
      "title": myTitle.value,
      "url": myURL.value
    });
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        document.querySelector('p.response').textContent = 'The post has been sent!';
        myTitle.value = '';
        myURL.value = '';
      }
    });
    
    xhr.open("POST", "http://secure-reddit.herokuapp.com/simple/posts");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(body);
  });
}

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
    <div><img id="up" src="assets/upvote.png" alt=""></div>
    <div id="vote">${element.score}</div>
    <div><img id="down" src="assets/downvote.png" alt=""></div>
  </div>
  <div class="title">
    <div class="head">${element.title}</div>
    <div class="description">submitted ${element.timestamp} month ago by ${currentUser}</div>
    <div class="remove">modify remove</div>
  </div>
  `
  mainSection.innerHTML += markup;

}, this);
