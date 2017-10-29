class Animal {

  constructor() {
    this.hunger = 5;
    this.thirst = 5;
  }

  eat() {
    this.hunger--;
  }

  drink() {
    this.thirst--;
  }

  play() {
    this.hunger--;
    this.thirst--;    
  }
}

class Farm {

  constructor(slots) {
    this.slots = slots;
    this.animals = [];
  }

  breed() {
    if (this.slots > 0) {
      this.animals.push(new Animal());      
    }
    this.slots--;
  }

  slaughter() {
    var hungerIndex = [];
    this.animals.forEach(function(element) {
      hungerIndex.push(element.hunger);
    });
    this.animals.splice(hungerIndex.indexOf(Math.min(...hungerIndex)), 1);
  }

  report() {
    if (this.animals.length === 0) {
      console.log("We have no animals left, we are bankrupt!");
    } else if (this.animals.length === this.slots) {
      console.log("The farm has", this.animals.length, "living animals we are full!");            
    } else {
      console.log("The farm has", this.animals.length, "living animals!");            
    }
  }

  progress() {
    this.animals.forEach(function(element) {
      if (Math.random() >= 0.5) {
        element.eat();
      }
      if (Math.random() >= 0.5) {
        element.drink();
      }
      if (Math.random() >= 0.5) {
        element.play();
      }
    });
    this.breed();
    this.slaughter();
    this.report();
  }
}

const SheepFarm = new Farm(20);
for (let i = 0; i < 10; i++) {
  SheepFarm.breed();
}


// console.log(SheepFarm.progress());
var myDiv = document.querySelector('div');
const button = document.querySelector('button');
button.addEventListener('click', SheepFarm.progress);
