function thumbRender() {
  let thumbContainer = document.querySelector('div.thumb');
  database.forEach(function(element) {
    const markup = `<img class="img-small" src="${element.minilink}" alt="">`;
    thumbContainer.innerHTML += markup;
  });
}

function initGallery() {
  let image = document.querySelector('div.image');
  image.innerHTML = `<img class="main-img" src="${database[0].link}" alt="">
                     <div class="text-area">
                       <h2>${database[0].title}</h2>
                       <p>${database[0].content}</p>
                     </div>`;
  thumbRender();
}

function onClick (index, mainImg, h2Item) {
  mainImg.setAttribute('src', database[index]['link']);
  h2Item.textContent = database[index]['title'];
}

function eventHandler() {
  var h2Item = document.querySelector('h2');
  var pItem = document.querySelector('p');
  var smallImg = document.querySelectorAll('.img-small');
  var mainImg = document.querySelector('img.main-img');
  var arrowLeft = document.querySelector('div.left-arrow');
  var arrowRight = document.querySelector('div.right-arrow');
  arrowLeft.addEventListener('click', function(){
    database.forEach(function(element, i) {
      if (mainImg.getAttribute('src') === element['link']) {
        if (i > 0) {
          onClick(i-1, mainImg, h2Item);
        }
      }
    });
  }, false);
  
  arrowRight.addEventListener('click', function(){
    for (let i = database.length-1; i >= 0; i--) {
      if (mainImg.getAttribute('src') === database[i]['link']) {
        if (i < database.length-1) {
          onClick(i+1, mainImg, h2Item);
        }
      }
    }
  }, false);

  smallImg.forEach(function(element, i) {
    element.addEventListener('click', function(){
      onClick(i, mainImg, h2Item);
    }, false);
  });
}

initGallery();
eventHandler();

