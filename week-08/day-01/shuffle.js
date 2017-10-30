const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function(amt) {
    this.cash += amt;    
  }
}

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function(amt) {
    this.cash += amt;
  }
}

const Shuffler = {
  cash: 10000,
  pick: function(name) {
    if (name === "panama") {
      Panama.deposit(1000);      
    } else if (name === "cyprus") {
        Cyprus.deposit(1000);    
    }
    this.cash -= 2000;
  }
}

Shuffler.pick("panama") // prints Panama got 1000
Shuffler.pick("cyprus") // prints Cyprus got 1000
Shuffler.pick("panama") // prints Panama got 1000
Shuffler.pick("cyprus") // prints Cyprus got 1000

console.log( Panama.cash ) // 2000 
console.log( Cyprus.cash ) // 2000 