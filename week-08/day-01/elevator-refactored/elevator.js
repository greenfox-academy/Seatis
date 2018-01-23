class ElevatorController {
  
  constructor() {
    this.myModel = new ElevatorModel(10, 10);
    this.myView = new ElevatorView(this.myModel);
    this.myView.drawElevator();
    this.myView.drawPeopleInElevator(0);
  }
  eventHandler() {
    console.log(this.myView);
    var addButton = document.querySelector('button.add');
    var removeButton = document.querySelector('button.remove');
    var moveDownButton = document.querySelector('button.down');
    var moveUpButton = document.querySelector('button.up');
    
    addButton.addEventListener('click', a => {
      this.myModel.addPeople();
      this.myView.drawPeopleInElevator(this.myModel.elevatorPosition());
    });
    
    removeButton.addEventListener('click', a => {
      this.myModel.removePeople();
      this.myView.drawPeopleInElevator(this.myModel.elevatorPosition());
    });
    
    moveDownButton.addEventListener('click', a => {
      this.myView.moveElevator('down');
    });
    
    moveUpButton.addEventListener('click', a => {
      this.myView.moveElevator('up');
    });   
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

  constructor(model) {
    this.myModel = model;
  }

  drawElevator() {
    var rightContent = document.querySelector('div.right-content');
    for (let i = 0; i < this.myModel.maxFloor; i++) {
      var newLevel = document.createElement('div');
      newLevel.classList.add('level');
      rightContent.appendChild(newLevel);
    }
  }

  drawPeopleInElevator(index) {
    console.log(index);
    var levels = document.querySelectorAll('div.level');
    levels[index].classList.add('green');
    levels[index].textContent = this.myModel.peopleInElevator;
  }

  moveElevator(direction) {
    var levels = document.querySelectorAll('div.level');
    var currentPosition = this.myModel.elevatorPosition();
    console.log(currentPosition);
    if (direction === 'down' && currentPosition < this.myModel.maxFloor-1) {
      levels[currentPosition].classList.remove('green');
      levels[currentPosition].textContent = "";
      this.drawPeopleInElevator(currentPosition+1);
    } else if (direction === 'up' && currentPosition > 0) {
        levels[currentPosition].classList.remove('green');
        levels[currentPosition].textContent = "";
        this.drawPeopleInElevator(currentPosition-1);
    }
  }
}

function core() {
  var myElevator = new ElevatorController();
  myElevator.eventHandler();
}

core();
