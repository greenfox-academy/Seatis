'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account

// Create function that transfers an amount of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function balance(name) {
	let invalidName = true;
	accounts.forEach(function(element) {
		if (name === element['client_name']) {
			console.log(element['client_name'] + ": " + element['balance']);
			invalidName = false;
		} else if (name == 'all') {
			console.log(element['client_name'] + ": " + element['balance']);
			invalidName = false;
		}
	});
	if (invalidName) {
		console.log("Who is " + name + "?");
	}
}

function transfer(fromAccNum, toAccNum, amount) {
	let sourceFlag = false;
	let targetFlag = false;
	accounts.forEach(function(element) {
		if (fromAccNum === element['account_number']) {
			accounts[accounts.indexOf(element)]['balance'] -= amount;
			sourceFlag = true;
		}
	});
	accounts.forEach(function(element) {
		if (toAccNum === element['account_number']) {
			accounts[accounts.indexOf(element)]['balance'] += amount;
			targetFlag = true;
		}
	});
	if (!sourceFlag) {
		console.log("404 - source account not found");
	} else if (!targetFlag) {
		console.log("404 - target account not found");
	} else {
		console.log("The new status:");
		balance('all');
	}
}

balance('Vladimir');
transfer(43546731, 11234543, 5204100071.23);