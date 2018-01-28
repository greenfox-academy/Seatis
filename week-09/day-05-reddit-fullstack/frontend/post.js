"use strict"

const baseURL = 'http://localhost:5000/posts';
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
      ajax('POST', baseURL, body, afterEvent);
    }
    else {
      alert('Please enter the url!');
    }
  });
}

function afterEvent(result) {
  if (result.status === 'OK') {
    document.querySelector('p.response').innerHTML = `The post has been sent! <a href="http://localhost:5000">Click to back</a>`;
    myTitle.value = '';
    myURL.value = '';
  } else {
    document.querySelector('p.response').textContent = result.error;
  }
}

core();