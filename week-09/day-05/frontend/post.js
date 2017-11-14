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
    
    xhr.open("POST", "http://localhost:5000/posts", true);
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(body);
  });
}

