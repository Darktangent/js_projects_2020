// alert('Hello from JS');
// 'hi'.toUpperCase();
// console.log('hi'.toUpperCase());
// console.error('Oh no!!!');
// if (true) {
// 	console.log('Condition met');
// }
// let rating = 2;
// let num = 37;

// if (num % 2 !== 0) {
// 	console.log('Odd number');
// }
// if (rating == 2) {
// 	console.log('Meets expectation');
// } else if (rating == 3) {
// 	console.log('You are a superstar');
// } else if (rating === 1) {
// 	console.log('Needs improvement');
// } else {
// 	console.log('Invalid rating');
// }

// let password = 'hellokitty';

// if (password.length >= 6 && password.indexOf(' ') === -1) {
// if (password.indexOf(' ') === -1) {
// 	console.log('valid password');
// } else {
// 	console.log('Password is long enough but cannot contain spaces');
// }
// 	console.log('Valid password');
// } else {
// 	console.log('password must be longer');
// }
// let num = 3;
// if (num >= 1 && num <= 10) {
// 	console.log('Number between 1 and 10');
// } else {
// 	console.log('Please pick a number between 1 and 10');
// }
// let loggedIn = 'thomas123';

// if (loggedIn) {
// 	console.log('Logged IN');
// } else {
// 	console.log('Please Login');
// }

// let age = 76;

// if (age < 6 || age >= 65) {
// 	console.log('You get in for free');
// } else {
// 	console.log('That will be $10 please');
// }
let loggedInUser = 'rohan123';

// if there isn't a logged in user

// if (!loggedInUser) {
// 	console.log('Get out of here');
// }
// let flavor = 'watermelon';
// if (flavor !== 'grape' && flavor !== 'cherry') {
// 	console.log("We don't have that flavor");
// }

// switch statement
// let day = 3;

// switch (day) {
// 	case 1:
// 		console.log('Monday');
// 		break;
// 	case 2:
// 		console.log('Tuesday');
// 		break;
// 	case 3:
// 		console.log('Wednesday');
// 		break;
// 	case 4:
// 		console.log('Thursday');
// 		break;
// 	case 5:
// 		console.log('Friday');
// 		break;
// 	case 6:
// 		console.log('Saturday');
// 		break;
// 	case 7:
// 		console.log('Sunday');
// 		break;
// 	default:
// 		console.log('Invalid day');
// 		break;
// }
// // ternary operator

// let number = 7;

// number === 7 ? console.log('lucky') : console.log('Not so lucky');

// let status = 'offline';
// let color = status === 'offline' ? 'red' : 'green';
// console.log(color);

// Array
let shoppingList = ['cereal', 'cheese', 'ice', 1, 23, true];
console.log(shoppingList[2]);
shoppingList.length;
shoppingList[shoppingList.length - 1];
shoppingList[6] = 'milk';
console.log(shoppingList);

let songs = [
	'God only knows',
	'A day in the life',
	'Life on Mars',
	'First time I ever saw your face'
];
songs.push('Umbrella');
// songs.pop();
songs.unshift('I want it this way');
// songs.shift();

let mergedSongs = songs.concat(['You', 'So sophisticated']);
let you = mergedSongs.indexOf('You');
mergedSongs.splice(1, 0, 'Hey You');
console.log(mergedSongs.slice(you));
console.log(mergedSongs.includes('You'));
console.log(mergedSongs.sort((a, b) => a - b));

// Objects
const fitbitData = {
	totlaSteps: 30870,
	totalMiles: 211.8,
	avgCalorieBurn: 5755,
	workoutsThisWeek: '5 of 7',
	avgGoodSleep: '7:12'
};
console.log(fitbitData.avgCalorieBurn);
// update props
fitbitData.workoutsThisWeek = '6 of 7';
fitbitData.avgCalorieBurn += 1000;

// add new prop to obj
fitbitData.heartStillBeating = true;
console.log(fitbitData);
const numbers = {
	100: 'one hundred',
	16: 'sixteen'
};
console.log(numbers[100]);
const palette = {
	red: '#eb4d4b',
	yellow: '#f9ca24',
	blue: '#30336b'
};
let color = 'yellow';
console.log(palette[color]);
const student = {
	firstName: 'David',
	lastName: 'Jones',
	strengths: ['Computer Science', 'Music'],
	exams: {
		midterm: 90,
		final: 88
	}
};
// loops
// for loop

for (let i = 0; i <= 10; i++) {
	console.log(i);
}

const animals = ['lions', 'tigers', 'bears'];
for (let i = 0; i < animals.length; i++) {
	console.log(i, animals[i]);
}
const students = [
	{
		firstName: 'Zeus',
		grade: 89
	},
	{
		firstName: 'Randy',
		grade: 84
	},
	{
		firstName: 'Paul',
		grade: 99
	}
];
for (let i = 0; i < students.length; i++) {
	console.log(i, students[i]);
	let student = students[i];
	console.log(`${student.firstName} scored  ${student.grade}`);
}
let str = 'Rohan Ganguly';
for (let i = 0; i <= 3; i++) {
	console.log('Outer', i);
	for (j = 0; j <= str.length; j++) {
		console.log('Inner:', str[j]);
	}
}
let gameBoard = [
	[4, 32, 10, 20],
	[3, 53, 38, 10],
	[2, 13, 23, 9],
	[9, 3, 4, 8]
];
let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
	let row = gameBoard[i];
	let sum = 0;
	console.log(row);
	for (let j = 0; j < row.length; j++) {
		console.log(row[j]);
		sum += row[j];
	}
	console.log(`${row} summed to ${sum}`);
}
const jeopardyWinnings = {
	regularPLay: 320000,
	watsonChallenge: 4000000,
	tournamentOfChampions: 6000000,
	battleOfTheDecades: 10000000
};

for (let props in jeopardyWinnings) {
	console.log(props);
	console.log(jeopardyWinnings[props]);
}
let totalWin = 0;
for (let props in jeopardyWinnings) {
	// console.log(props);
	totalWin += jeopardyWinnings[props];
	console.log(jeopardyWinnings[props]);
}
console.log(`Total winning is ${totalWin}`);
// functions
function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled, ${roll}`);
}
// rollDie();
function ThrowDie(numRolls) {
	for (let i = 0; i < numRolls; i++) {
		rollDie();
	}
}
ThrowDie(50);

function greet(name) {
	console.log(`Hi ${name}`);
}
greet('Rohan');
function square(num) {
	return num * num;
}
square(5);
function sum(x, y) {
	return x + y;
}
let totalSum = sum(4, 20);
console.log(totalSum);
function isPurple(color) {
	if (color.toLowerCase() === 'purple') {
		return true;
	}
	return false;
}
isPurple('blue');
function isValidPassword(pass, username) {
	return (
		pass.length >= 8 && pass.indexOf(' ') !== -1 && !pass.includes(username)
	);
}
const check = isValidPassword('123rohan', 'rohan');
console.log(check);

function findAvg(arr) {
	let avg;
	let total = 0;
	for (num of arr) {
		total += num;
	}
	avg = total / arr.length;
	return avg;
}
findAvg([1, 2, 3, 4, 5, 8]);

// pangram

function isPangram(params) {
	let arr = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];
	for (let char of arr) {
		if (params.toLowerCase().indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}
// practice
function pick(arr) {
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}
function getCard() {
	let val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
	let suit = ['clubs', 'spades', 'hearts', 'diamonds'];
	// let randIdx = Math.floor(Math.random() * val.length);
	// let randSuit = Math.floor(Math.random() * suit.length);
	const randValue = pick(val);
	const randSuit = pick(suit);
	// return { val: val[randIdx], suit: suit[randSuit] };
	return { val: randValue, suit: randSuit };
}
getCard();
// scope-variable visibility
// func scope
function lol() {
	let person = 'TOm'; //no available outside
	const age = 44; //not available outside
	var color = 'teal'; //not available outside
}
//fn expression
// const square = function(nums) {
// 	return num * num;
// };
// square(7);
// callback-pass fn into another fn
// setTimeout(() => {
// 	alert('Test Callback');
// }, 3000);

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
	alert('Testing Event firing');
});
// forEach
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
nums.forEach(function(num) {
	console.log(num * num);
});

nums.forEach((num, idx) => {
	if (num % 2 === 0) {
		console.log(num, idx);
	}
});
// map - new arraw from existing array
const texts = ['rofl', 'lol', 'lmao', 'omg'];
const caps = texts.map(function(text) {
	return text
		.toUpperCase()
		.split('')
		.join('.');
});
console.log(caps);
const numDetail = nums.map(num => {
	return {
		value: num,
		isEven: num % 2 === 0
	};
});
console.log(numDetail);

const mySquare = num => {
	return x * x;
};
const isEven = n => {
	return num % 2 === 0;
};
// find
let movies = [
	'The Fantastic Mr. Fox',
	'Mr. Deeds',
	'Mr. and Mrs. Fox',
	'Mrs. Doubtfire'
];
let movie = movies.find(movie => {
	return movie.includes('Mrs.');
});
console.log(movie);

const odds = nums.filter(n => {
	return n % 2 === 1;
});

const smallNums = nums.filter(n => n < 5);
// every and some
const myList1 = ['dog', 'dig', 'log', 'bag', 'wag'];

const threeLetWords = myList1.every(el => {
	return AudioWorkletNode.length === 3;
});
const endInG = myList1.every(el => {
	const last = myList1.length - 1;
	return myList1[last] === 'g';
});
// sort
const prices = [10, 30, 9, 200, 100, 130];

const sort = prices.sort((a, b) => a - b);
// reduce - combines array into single value
numsArr = [3, 5, 7, 9, 11];

const prod = numsArr.reduce((acc, curr) => {
	return acc * curr;
});
console.log(prod);

const maxNum = numsArr.reduce((max, curr) => {
	if (curr > max) {
		return curr;
	}
	return max;
});
const votes = ['y', 'n', 'y', 'n', 'n', 'y', 'n', 'present'];
const results = votes.reduce((tally, val) => {
	console.log(tally, val);
	if (tally[val]) {
		// short->tally[val]=(tally[val]||0)+1
		tally[val]++;
	} else {
		tally[val] = 1;
	}
	return tally;
}, {});
console.log(results);
