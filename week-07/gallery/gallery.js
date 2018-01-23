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

function updateImage (index, mainImg, h2Item) {
  mainImg.setAttribute('src', database[index].link);
  h2Item.textContent = database[index].title;
}

function currentPosition(currentImage) {
  let index;
  database.filter((item, i) => { if (currentImage === item.link) index = i });
  return index;
}

function eventHandler() {
  var h2Item = document.querySelector('h2');
  var pItem = document.querySelector('p');
  var smallImg = document.querySelectorAll('.img-small');
  var mainImg = document.querySelector('img.main-img');
  var arrowLeft = document.querySelector('div.left-arrow');
  var arrowRight = document.querySelector('div.right-arrow');

  arrowLeft.addEventListener('click', function(){
    var currentIndex = currentPosition(mainImg.src);
    if (currentIndex > 0) {
      updateImage(currentIndex - 1, mainImg, h2Item);
    }
  });
  
  arrowRight.addEventListener('click', function(){
    var currentIndex = currentPosition(mainImg.src);
    if (currentIndex < database.length - 1) {
      updateImage(currentIndex + 1, mainImg, h2Item);
    }
  });

  smallImg.forEach(function(element, i) {
    element.addEventListener('click', function(){
      updateImage(i, mainImg, h2Item);
    });
  });
}

initGallery();
eventHandler();

