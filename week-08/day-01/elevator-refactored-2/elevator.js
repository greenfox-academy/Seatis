function ElevatorController(myView, myModel) {
  
  this.myView = myView;
  this.myModel = myModel;
  this.myView.drawElevator();
  this.myView.drawPeopleInElevator(0);

  this.eventHandler = function() {
    var addButton = document.querySelector('button.add');
    var removeButton = document.querySelector('button.remove');
    var moveDownButton = document.querySelector('button.down');
    var moveUpButton = document.querySelector('button.up');
    
    addButton.addEventListener('click', () => {
      this.myModel.addPeople();
      this.myView.drawPeopleInElevator(this.myModel.elevatorPosition());
    });
    
    removeButton.addEventListener('click', () => {
      this.myModel.removePeople();
      this.myView.drawPeopleInElevator(this.myModel.elevatorPosition());
    });
    
    moveDownButton.addEventListener('click', () => {
      this.myView.moveElevator('down');
    });
    
    moveUpButton.addEventListener('click', () => {
      this.myView.moveElevator('up');
    });   
  } 
}

function ElevatorModel(maxFloor, maxPeople) {

  this.maxFloor = maxFloor;
  this.maxPeople = maxPeople;
  this.peopleInElevator = 0;

  this.elevatorPosition = function() {
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

  this.addPeople = function() {
    if (this.peopleInElevator < this.maxPeople) {
      this.peopleInElevator++;      
    }
  }

  this.removePeople = function() {
    if (this.peopleInElevator > 0) {
      this.peopleInElevator--;      
    }
  }
}

function ElevatorView(model) {

  this.myModel = model;

  this.drawElevator = function() {
    var rightContent = document.querySelector('div.right-content');
    for (let i = 0; i < this.myModel.maxFloor; i++) {
      var newLevel = document.createElement('div');
      newLevel.classList.add('level');
      rightContent.appendChild(newLevel);
    }
  }

  this.drawPeopleInElevator = function(index) {
    var levels = document.querySelectorAll('div.level');
    levels[index].classList.add('green');
    levels[index].textContent = this.myModel.peopleInElevator;
  }

  this.moveElevator = function(direction) {
    var levels = document.querySelectorAll('div.level');
    var currentPosition = this.myModel.elevatorPosition();
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
  let myModel = new ElevatorModel(10, 10);
  let myView = new ElevatorView(myModel);
  let myElevator = new ElevatorController(myView, myModel);
  myElevator.eventHandler();
}

core();
