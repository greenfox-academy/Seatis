function ajax (method, url, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var responseData = JSON.parse(xhr.response);
      callback(responseData);
    }
  });
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
}

function gifRender(result) {
  var thumbContainer = document.querySelector('div.thumbnails');
  var mainImage = document.querySelector('div.mainimage img');
  for (let i = 0; i < 16; i++) {
    var newImg = document.createElement('img');
    newImg.src = result.data[i].images.fixed_width_small_still.url;
    newImg.addEventListener('click', function() {
      mainImage.src = result.data[i].images.downsized.url;
    });
    thumbContainer.appendChild(newImg);
  }
}

ajax('GET', 'https://api.giphy.com/v1/stickers/trending?api_key=vp8iFhbbVENwsx5cq6Vib7n9zDzad11U&limit=25&rating=G', null, gifRender);