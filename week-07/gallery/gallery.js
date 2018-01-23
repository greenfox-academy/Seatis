var thumbContainer = document.querySelector('div.thumb');
database.forEach(function(element) {
  var newImg = document.createElement('img');
  newImg.setAttribute('src', element['minilink']);
  newImg.classList.add('img-small');
  thumbContainer.appendChild(newImg);
});

var textArea = document.querySelector('.text-area');
var h2Item = document.createElement('h2');
var pItem = document.createElement('p');
h2Item.textContent = database[0]['title'];
pItem.textContent = database[0]['content'];
textArea.appendChild(h2Item);
textArea.appendChild(pItem);

var smallImg = document.querySelectorAll('.img-small');
var mainImg = document.querySelector('img.main-img');
var arrow = document.querySelectorAll('a.left-arrow, a.right-arrow');


function onClick (index) {
  mainImg.setAttribute('src', database[index]['link']);
  h2Item.textContent = database[index]['title'];
}

arrow[0].addEventListener('click', function(){
  database.forEach(function(element, i) {
    if (mainImg.getAttribute('src') === element['link']) {
      if (i > 0) {
        onClick(i-1);
      }
    }
  });
}, false);

arrow[1].addEventListener('click', function(){
  for (let i = database.length-1; i >= 0; i--) {
    if (mainImg.getAttribute('src') === database[i]['link']) {
      if (i < database.length-1) {
        onClick(i+1);
      }
    }
  }
}, false);

smallImg.forEach(function(element, i) {
  element.addEventListener('click', function(){
    onClick(i);
  }, false);
});