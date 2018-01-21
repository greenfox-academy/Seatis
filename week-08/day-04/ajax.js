function ajax (method, url, data, callback, index) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var responseData = JSON.parse(xhr.response);
      callback(responseData, index);
    }
  });
  xhr.open(method, url, true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
  if (method === 'POST' && localStorage.getItem('user')) {
    console.log('ajax has been sent with username');
    console.log(localStorage.getItem('user'));
    xhr.setRequestHeader("Username", localStorage.getItem('user'));
  }
  xhr.send(data);
}