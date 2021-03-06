'use strict';

var watchlist = []

var security_alcohol_loot = 0

var queue = [
	{ 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
	{ 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
	{ 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
	{ 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
	{ 'name': 'Anna', 'alcohol': 10, 'guns': 0 },
	{ 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
	{ 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
]

// Queue of festivalgoers at entry
// no. of alcohol units 
// no. of guns

// Create a security_check function that returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to security_alcohol_loot) and let them enter the festival

function securityCheck(checkList) {
  let manOK = [];
  checkList.forEach(function(element) {
    if (element['guns'] === 0) {
      if (element['alcohol'] > 0) {
        security_alcohol_loot += element['alcohol'];
        checkList[checkList.indexOf(element)]['alcohol'] = 0;
      }
      manOK.push(element['name']);
    } else {
      watchlist.push(element['name']);
    }
  });
  // console.log("They can enter the festival:");
  // console.log(manOK);
  // console.log("They cannot enter the festival:");
  // console.log(watchlist);
  return manOK;
}

console.log("They can enter the festival:");
console.log(securityCheck(queue));