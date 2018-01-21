"use strict"

var myURL = document.querySelector('input');
var myTitle = document.querySelector('textarea');

function core() {
  let myButton = document.querySelector('div.submit');
  myButton.addEventListener('click', function() {
    var body = JSON.stringify({
      "title": myTitle.value,
      "url": myURL.value
    });
    if (myURL.value) {
      ajax('POST', 'http://secure-reddit.herokuapp.com/simple/posts', body, afterEvent);
    }
    else {
      alert('Please enter the url!');
    }
  });
}

function afterEvent() {
  document.querySelector('p.response').textContent = 'The post has been sent!';
  myTitle.value = '';
  myURL.value = '';
}

core();