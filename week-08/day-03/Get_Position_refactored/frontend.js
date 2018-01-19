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

function updateCoordinates(result) {
  let myCoordinates = document.querySelector('section.coordinates');
  const markup = `<p>The city: ${result.Results[0].name}</p>
                  <p>Latitude: ${result.Results[0].lat}</p>
                  <p>Longitude: ${result.Results[0].lon}</p>`;
  myCoordinates.innerHTML = markup;
  console.log(result);
}

function core() {
  let myButton = document.querySelector('button');
  let myInput = document.querySelector('input');
  let currentMap = document.querySelector('iframe');
  myButton.addEventListener('click', function() {
    let url = "https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location="
    url += myInput.value.replace(" ", "+");
    console.log(url);
    ajax('GET', url, null, updateCoordinates);
  });
}

core();