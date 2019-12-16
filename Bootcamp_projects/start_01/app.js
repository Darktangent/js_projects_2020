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
