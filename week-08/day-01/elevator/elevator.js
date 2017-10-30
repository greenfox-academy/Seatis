class ElevatorController {
  
  constructor() {
    var myModel = new ElevatorModel(10, 10);
    var myView = new ElevatorView;
    myView.drawElevator();
  }
}

class ElevatorModel {

  constructor(maxFloor, maxPeople) {
    this.maxFloor = maxFloor;
    this.maxPeople = maxPeople;
    this.peopleInElevator = 0;
  }

  elevatorPosition() {
    var activeLevelBound = document.querySelector('div.green');
    var levels = document.querySelectorAll('div.level');
    var currentPosition;
    levels.forEach(function(element, i) {
      if (element === activeLevelBound) {
        currentPosition = i;
      }
    });
    return currentPosition;
  }

  elevatorDirection() {

  }
  // peopleInElevator() {

  // }
  addPeople() {
    if (this.peopleInElevator < this.maxPeople) {
      this.peopleInElevator++;      
    }
  }
  removePeople() {
    if (this.peopleInElevator > 0) {
      this.peopleInElevator--;      
    }
  }
}

class ElevatorView {

  drawElevator() {
    var rightContent = document.querySelector('div.right-content');
    for (let i = 0; i < myModel.maxFloor; i++) {
      var newLevel = document.createElement('div');
      newLevel.classList.add('level');
      rightContent.appendChild(newLevel);
    }
  }

  drawPeopleInElevator(index) {
    console.log(index);
    var levels = document.querySelectorAll('div.level');
    levels[index].classList.add('green');
    levels[index].textContent = myModel.peopleInElevator;
  }

  moveElevator(direction) {
    console.log("le");
    var levels = document.querySelectorAll('div.level');
    var currentPosition = myModel.elevatorPosition();
    console.log(currentPosition);
    if (direction === 0 && currentPosition < myModel.maxFloor-1) {
      levels[currentPosition].classList.remove('green');
      levels[currentPosition].textContent = "";
      this.drawPeopleInElevator(currentPosition+1);
    } else if (direction === 1 && currentPosition > 0) {
        levels[currentPosition].classList.remove('green');
        levels[currentPosition].textContent = "";
        this.drawPeopleInElevator(currentPosition-1);
    }
  }
}



var myModel = new ElevatorModel(10, 10);
var myView = new ElevatorView;
myView.drawElevator();
console.log(myModel.elevatorPosition());
myView.drawPeopleInElevator(0);
var addButton = document.querySelector('button.add');
var removeButton = document.querySelector('button.remove');

addButton.addEventListener('click', function() {
  myModel.addPeople();
  myView.drawPeopleInElevator(myModel.elevatorPosition());
});

removeButton.addEventListener('click', function() {
  myModel.removePeople();
  myView.drawPeopleInElevator(myModel.elevatorPosition());
});

var moveDownButton = document.querySelector('button.down');
var moveUpButton = document.querySelector('button.up');

moveDownButton.addEventListener('click', function() {
  myView.moveElevator(0);
});

moveUpButton.addEventListener('click', function() {
  myView.moveElevator(1);
});



// var myElevator = new ElevatorController();