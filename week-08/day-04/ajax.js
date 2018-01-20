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
  xhr.send(data);
}