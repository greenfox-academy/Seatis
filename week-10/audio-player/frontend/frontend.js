var xhr = new XMLHttpRequest();

var allTracks = document.getElementById('alltracks');
allTracks.addEventListener('click', function () {
  ajax('GET', 'http://localhost:8080/playlist-tracks/', renderTracklist, null);
});

var btnPrev = document.getElementById('btnPrev');
var btnNext = document.getElementById('btnNext');
btnPrev.addEventListener('click', function () {
  currentTrack();
});

function currentTrack () {
  var music = document.querySelector('audio');
  var result = ajax('GET', 'http://localhost:8080/playlist-tracks/', callbackMirror, null);
  console.log(result);
}

function callbackMirror (result) {
  return result;
}

function renderPlaylist (result) {
  console.log(result.playlists[0].id);
  var mainSection = document.querySelector('div.playlist ul');
  result.playlists.forEach(function(element, i) {
    var li = document.createElement('li');
    li.innerHTML = element.playlist;
    li.addEventListener('click', function () {
      var url = 'http://localhost:8080/playlist-tracks/' + element.id;
      testConsole(url);
      ajax('GET', url, renderTracklist, null);
      highlightPlaylist(li, i);
    });
    mainSection.appendChild(li);
  }, this);
}

function removeTracklist () {
  var mainSection = document.querySelector('div.tracklist ul');
  mainSection.innerHTML = '';
}

function renderTracklist (result) {
  removeTracklist();
  var mainSection = document.querySelector('div.tracklist ul');
  var counter = 1;
  result.tracks.forEach(function(element, i) {
    var li = document.createElement('li');
    var divIndex = document.createElement('div');
    var divSoundtrack = document.createElement('div');
    var divTime = document.createElement('div');
    divIndex.classList.add('index');
    divSoundtrack.classList.add('soundtrack');

    divSoundtrack.addEventListener('click', function () {
      changeAudio(element.path);
      highlight(divIndex, divSoundtrack, divTime, i);
      titleRender(element.path);
    });

    divTime.classList.add('time');
    divIndex.innerHTML = counter;
    divSoundtrack.innerHTML = element.path;
    divTime.innerHTML = '3:03';
    li.appendChild(divIndex);
    li.appendChild(divSoundtrack);
    li.appendChild(divTime);
    mainSection.appendChild(li);
    counter++;
  }, this);
}

function highlight (divIndex, divSoundtrack, divTime, index) {
  divIndexAll = document.querySelectorAll('div.index');
  divSoundtrackAll = document.querySelectorAll('div.soundtrack');
  divTimeAll = document.querySelectorAll('div.time');
  
  divIndexAll.forEach(function(element, i) {
    if (i != index) {
      element.classList.remove('highlight');
    }
  }, this);
  divSoundtrackAll.forEach(function(element, i) {
    if (i != index) {
      element.classList.remove('highlight');
    }
  }, this);
  divTimeAll.forEach(function(element, i) {
    if (i != index) {
      element.classList.remove('highlight');
    }
  }, this);

  divIndex.classList.add('highlight');
  divSoundtrack.classList.add('highlight');
  divTime.classList.add('highlight');
}

function highlightPlaylist (li, index) {
  liAll = document.querySelectorAll('div.playlist ul li');
  liAll.forEach(function(element, i) {
    if (i != index) {
      element.classList.remove('highlight');
    }
  }, this);
  li.classList.add('highlight');
}

function titleRender (title) {
  titleCut = title.slice(0, -4);
  var h3 = document.querySelector('div.title h3');
  h3.innerHTML = titleCut;
}

function changeAudio (title) {
  var music = document.querySelector('audio');
  console.log(title);
  var srcURL = 'mp3/';
  srcURL += decodeURI(title);
  music.setAttribute('src', srcURL);
  music.play();
}

function ajax (method, url, callback, data) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var requestAPI = JSON.parse(xhr.response);
      callback(requestAPI);
    }
  });
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send(data);
}

function testConsole (parameter) {
  console.log(parameter);
}

ajax('GET', 'http://localhost:8080/playlists', renderPlaylist, null);
ajax('GET', 'http://localhost:8080/playlist-tracks', renderTracklist, null);