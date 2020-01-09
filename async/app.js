function getData() {
	const data = axios.get('https://swapi.co/api/planets').then(res => {
		console.log(res);
	});
	console.log(data);
}
getData();
async function hello() {
	return 'Hey guy';
}
hello().then(val => {
	console.log('Promise resolved with: ', val);
});
// async function uhOh() {
// 	throw new Error('oh no!');
// }
// uhOh();

async function add(x, y) {
	// let sum = 0;
	// for (let num of params) sum += num;
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw 'X and Y must be numbers';
	}
	// return sum;
	return x + y;
}
// console.log(add(1, 2, 3));
add('e,r')
	.then(val => {
		console.log('Promise resolved with ', val);
	})
	.catch(e => {
		console.log('Promise rejected with ', e);
	});
// promise way
function add1(x, y) {
	return new Promise((resolve, reject) => {
		if (typeof x !== 'number' || typeof y !== 'number') {
			reject('X and Y must be numbers');
		} else {
			resolve(x + y);
		}
	});
}
add1(1, 2)
	.then(val => {
		console.log('Promise resolved with ', val);
	})
	.catch(e => {
		console.log('Promise rejected with ', e);
	});
// async await
async function getPlanets() {
	try {
		const res = await axios.get('https://swapi.co/api/planets');
		console.log(res.data.results);
	} catch (e) {
		console.log('In catch: ', e);
	}
}
getPlanets();
// getPlanets().catch(e => {
// 	console.log('In catch', e);
// });

// async function get3Pokemon() {
// 	const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
// 	const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
// 	const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
// 	console.log(poke1.data.name);
// 	console.log(poke2.data.name);
// 	console.log(poke3.data.name);
// }
async function get3Pokemon() {
	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
	const poke1 = await prom1;
	const poke2 = await prom2;
	const poke3 = await prom3;
	const results = Promise.all([prom1, prom2, prom3]);
	// console.log(poke1.data);
	// console.log(poke2.data);
	// console.log(poke3.data);
	console.log(results);
}
get3Pokemon();
function changeBodyColor(color, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve;
		}, delay);
	});
}
changeBodyColor('teal', 1000);
async function lightShow() {
	await changeBodyColor('blue', 1000);
	await changeBodyColor('pink', 1000);
}
