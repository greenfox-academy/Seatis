function ajax (method, url, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState < 4) {
      loading();
    } else if (this.readyState === 4) {
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
  let currentMap = document.querySelector('iframe');
  if (result.Results.length > 0) {
    const markup = `<p>The city: ${result.Results[0].name}</p>
                    <p>Latitude: ${result.Results[0].lat}</p>
                    <p>Longitude: ${result.Results[0].lon}</p>`;
    myCoordinates.innerHTML = markup;
    let baseMapURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCr5KoGCCUQ6-XzyRpmActyVjzYvXbB_Z4&";
    let newMapURL = baseMapURL += `q=${result.Results[0].name.split(', ').join('+')}&center=${result.Results[0].lat},${result.Results[0].lon}`;
    currentMap.src = newMapURL;
  } else {
    myCoordinates.innerHTML = 'Unknown city!'
  }
}

function loading () {
  let myCoordinates = document.querySelector('section.coordinates');
  let currentMap = document.querySelector('iframe');
  myCoordinates.innerHTML = `<img src="progress.gif" alt="Waiting...">`;
  currentMap.src = "progress.gif";
}

function core() {
  let myButton = document.querySelector('button');
  let myInput = document.querySelector('input');
  myButton.addEventListener('click', function() {
    let url = "https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location="
    url += myInput.value.replace(" ", "+");
    ajax('GET', url, null, updateCoordinates);
  });
}

core();