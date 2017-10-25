'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const ingredients = [
	{ "name": "vodka", "in_stock": 1, "needs_cooling": true },
	{ "name": "coffee_liqueur", "in_stock": 0, "needs_cooling": true },
	{ "name": "fresh_cream", "in_stock": 1, "needs_cooling": true },
	{ "name": "captain_morgan_rum", "in_stock": 2, "needs_cooling": true },
	{ "name": "mint_leaves", "in_stock": 0, "needs_cooling": false },
	{ "name": "sugar", "in_stock": 0, "needs_cooling": false },
	{ "name": "lime juice", "in_stock": 0, "needs_cooling": true },
	{ "name": "soda", "in_stock": 0, "needs_cooling": true }
]

function printer(items) {
  let drinks = [];
  let cooling = [];
  let drinksLength = [];
  let lenColumn1;
  let lenColumn2 = 15;
  let lenColumn3 = 10;
  let borderLine = "+";
  let header = "|";
  items.forEach(function(element) {
    drinksLength.push(element['name'].length);
    drinks.push(element['name']);
    cooling.push(element['needs_cooling']);
  });
  if (Math.max(...drinksLength) <= "Ingredients".length) {
    lenColumn1 = "Ingredients" + 1;
  } else {
    lenColumn1 = Math.max(...drinksLength) + 1;
  }
  for (let i = 0; i < lenColumn1 + 1; i++) {
    borderLine += "-";
  }
  borderLine += "+";
  for (let i = 0; i < lenColumn2; i++) {
    borderLine += "-";
  }
  borderLine += "+";
  for (let i = 0; i < lenColumn3; i++) {
    borderLine += "-";
  }
  borderLine += "+";
  header += " Ingredient";
  for (let i = 0; i < lenColumn1 - "Ingerdients".length + 1; i++) {
    header += " ";
  }
  header += "| Needs cooling | In stock |";
  console.log(borderLine);
  console.log(header);
  console.log(borderLine);
  var row;
  items.forEach(function(element) {
    row = "| ";
    row += drinks[items.indexOf(element)];
    for (let i = 0; i < lenColumn1 - element['name'].length; i++) {
      row += " ";
    }
    row += "| ";
    
    if (element['needs_cooling']) {
      row += "Yes";
      for (let i = 0; i < lenColumn2 - "Yes".length - 1; i++) {
        row += " ";
      }
    } else {
      row += "No";
      for (let i = 0; i < lenColumn2 - "No".length - 1; i++) {
        row += " ";
      }
    }
    row += "| ";
    if (element['in_stock'] === 0) {
      row += "-";
    } else {
      row += element['in_stock'];
    }
    for (let i = 0; i < lenColumn3 - element['in_stock'].toString().length - 1; i++) {
      row += " ";
    }
    row += "|"
    console.log(row);
  });
  console.log(borderLine);
}

printer(ingredients);