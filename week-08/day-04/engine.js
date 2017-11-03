var mainSection = document.querySelector('section.main');

data.forEach(function(element) {
  var myIndex = document.createElement('div');
  myIndex.classList.add('index');
  myIndex.textContent = element.id;
  var myArrows = document.createElement('div');
  myArrows.classList.add('arrows');
  var myTitle = document.createElement('div');
  myTitle.classList.add('title');
  var upVoteDiv = document.createElement('div');
  var upVoteImg = document.createElement('img');
  upVoteImg.setAttribute('src', 'assets/upvote.png');
  var downVoteDiv = document.createElement('div');
  var downVoteImg = document.createElement('img');
  downVoteImg.setAttribute('src', 'assets/downvote.png');
  var voteDiv = document.createElement('div');
  voteDiv.textContent = element.vote;
  var myHead = document.createElement('div');
  myHead.classList.add('head');
  myHead.textContent = element.title;
  var myDescription = document.createElement('div');
  myDescription.classList.add('description');
  myDescription.textContent = "submitted " + element.submitted + " month ago by " + element.name;
  var myRemove = document.createElement('div');
  myRemove.classList.add('remove');
  myRemove.textContent = "modify remove";

  upVoteDiv.appendChild(upVoteImg);
  downVoteDiv.appendChild(downVoteImg);
  myArrows.appendChild(upVoteDiv);
  myArrows.appendChild(voteDiv);
  myArrows.appendChild(downVoteDiv);
  myTitle.appendChild(myHead);
  myTitle.appendChild(myDescription);
  myTitle.appendChild(myRemove);
  mainSection.appendChild(myIndex);
  mainSection.appendChild(myArrows);
  mainSection.appendChild(myTitle);

}, this);


// myButton.addEventListener('click', function() {
//   var url = "https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location="
//   var city = myInput.value;
//   var citySplit = city.split(" ");
//   var cityJoin = citySplit.join('+');
//   url += cityJoin;
//   console.log(url);

//   var myRequest = new XMLHttpRequest();
//   myRequest.open("GET", url, false);
//   myRequest.setRequestHeader("X-Mashape-Key", "kjALftGIZ6mshmtVHprgyTTaxuRPp1u83gpjsnlaeZCHN1kTUM");
//   myRequest.setRequestHeader("Accept", "application/json");
//   myRequest.send(null);


//   if (myRequest.readyState === XMLHttpRequest.DONE) {
//   console.log("Everything is good, the response was received.");
//   } else {
//     console.log("Not ready yet.");
//   }
//   console.log(myRequest.readyState);

  
//   var requestAPI = JSON.parse(myRequest.response);
//   console.log(requestAPI);
//   latCoor = requestAPI.Results[0].lat;
//   lonCoor = requestAPI.Results[0].lon;
//   console.log(latCoor);
//   console.log(lonCoor);
//   var myPs = document.querySelectorAll('p');
//   myPs[0].textContent = "Latitude: " + latCoor;
//   myPs[1].textContent = "Longitude: " + lonCoor;
  
//   var mapURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCr5KoGCCUQ6-XzyRpmActyVjzYvXbB_Z4&q=Space+Needle,Seattle+WA"
//   var currentMapURL = mapURL += "&center=" + latCoor + "," + lonCoor;
//   currentMap.setAttribute('src', currentMapURL);
// }); 
