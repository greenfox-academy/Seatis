// Gallyer based on MVC pattern

function galleryController(myView, myModel) {

  this.myView = myView;
  this.myModel = myModel;
  this.myView.initGallery();
  this.myView.thumbRender();

  this.eventHandler = function() {
    let h2Item = document.querySelector('h2');
    let pItem = document.querySelector('p');
    let smallImg = document.querySelectorAll('.img-small');
    let mainImg = document.querySelector('img.main-img');
    let arrowLeft = document.querySelector('div.left-arrow');
    let arrowRight = document.querySelector('div.right-arrow');
  
    arrowLeft.addEventListener('click', () => {
      let currentIndex = this.myModel.currentPosition(mainImg.src);
      if (currentIndex > 0) {
        this.myModel.updateImage(currentIndex - 1, mainImg, h2Item);
      }
    });
    arrowRight.addEventListener('click', () => {
      let currentIndex = this.myModel.currentPosition(mainImg.src);
      if (currentIndex < database.length - 1) {
        this.myModel.updateImage(currentIndex + 1, mainImg, h2Item);
      }
    });
    smallImg.forEach((element, i) => {
      element.addEventListener('click', () => {
        this.myModel.updateImage(i, mainImg, h2Item);
      });
    });
  }
}

function galleryModel() {

  this.currentPosition = function(currentImage) {
    let index;
    database.filter((item, i) => { if (currentImage === item.link) index = i });
    return index;
  }
  this.updateImage = function(index, mainImg, h2Item) {
    mainImg.setAttribute('src', database[index].link);
    h2Item.textContent = database[index].title;
  }
}

function galleryView() {

  this.thumbRender = function() {
    let thumbContainer = document.querySelector('div.thumb');
    database.forEach(function(element) {
      const markup = `<img class="img-small" src="${element.minilink}" alt="">`;
      thumbContainer.innerHTML += markup;
    });
  }
  this.initGallery = function() {
    let image = document.querySelector('div.image');
    image.innerHTML = `<img class="main-img" src="${database[0].link}" alt="">
                       <div class="text-area">
                         <h2>${database[0].title}</h2>
                         <p>${database[0].content}</p>
                       </div>`;
  }
}

function execute() {
  let myModel = new galleryModel();
  let myView = new galleryView();
  let myGallery = new galleryController(myView, myModel);
  myGallery.eventHandler();
}

execute();