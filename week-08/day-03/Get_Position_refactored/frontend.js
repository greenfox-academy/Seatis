function ajax (method, url, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var responseData = JSON.parse(xhr.response);
      callback(responseData);
    }
  });
  xhr.open(method, url);
  xhr.setRequestHeader("X-Mashape-Key", "kjALftGIZ6mshmtVHprgyTTaxuRPp1u83gpjsnlaeZCHN1kTUM");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send(data);
}