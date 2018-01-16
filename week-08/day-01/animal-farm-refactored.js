function Animal(name) {
  this.name = name;
  this.hunger = 10;
  this.thirst = 10;
  this.eat = function() {
    this.hunger--;
  }
  this.drink = function() {
    this.thirst--;
  }
  this.play = function() {
    this.hunger++;
    this.thirst++;
  }
}

function Farm(slots) {
  this.freeSlots = slots;
  this.animals = [];
  this.animalID = 0;

  this.breed = function() {
    if (this.freeSlots > 0) {
      this.animals.push(new Animal('Animal ' + this.animalID++));
      this.freeSlots--;
    }
  }
  this.slaughter = function() {
    let hungerValues = this.animals.map(x => x.hunger);
    this.animals.splice(hungerValues.indexOf(Math.min(...hungerValues)), 1);
    this.freeSlots++;
  }

  this.report = function() {
    if (this.animals.length === 0) {
      return 'Bankrupt!'
    } else if (this.freeSlots === 0) {
      return 'FULL';
    } else {
      return 'We have ' + this.animals.length + ' living animals.';
    }
  }

  this.listOfAnimals = function() {
    this.animals.forEach(function(animal) {
      console.log(animal.name);
    });
  }

  this.progress = function() {
    this.animals.forEach(function(animal) {
      if (Math.random() >= 0.5) {
        animal.eat();
      }
      if (Math.random() >= 0.5) {
        animal.drink();
      }
      if (Math.random() >= 0.5) {
        animal.play();
      }
    });
    this.slaughter();
    this.breed();
  }
}

function messageRender(message) {
  messageField = document.getElementById('message');
  messageField.innerHTML = message;
}

function tableRender(myFarm) {
  var table = document.querySelector('table');
  table.innerHTML = `<tr>
  <th>Name</th>
  <th>Hunger</th>
  <th>Thirst</th> 
  </tr>`
  myFarm.animals.forEach(function(animal) {
    const markup = `<tr>
    <td>${animal.name}</td>
    <td>${animal.hunger}</td>
    <td>${animal.thirst}</td>
    </tr>
    `
    table.innerHTML += markup;
  });
}

function core() {
  messageRender('Press the breed button to fill up the farm!')
  var myFarm = new Farm(5);
  var breed = document.querySelector('.breed');
  var progress = document.querySelector('.progress');

  breed.addEventListener('click', function () {
    myFarm.breed();
    var message = myFarm.report();
    tableRender(myFarm);
    messageRender(message);
  });
  progress.addEventListener('click', function () {
    myFarm.progress();
    var message = myFarm.report();
    tableRender(myFarm);
    messageRender(message);
  });
}

core();