// XHr
// function reqListener() {
// 	console.log(this.responseText);
// }
// var oReq = new XMLHttpRequest();
// oReq.addEventListener('load', reqListener);
// oReq.open('GET', 'http:www.example.org/example.txt');
// oReq.send();
// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('Worked!');
// 	const data = JSON.parse(this.responseText);
// console.log(data);
// for (let planet of data.results) {
// 	console.log(planet.name);
// }
// 	const filmURL = data.results[0].films[0];
// 	const filmReq = new XMLHttpRequest();
// 	filmReq.addEventListener('load', function() {
// 		console.log(this);
// 		const filmData = JSON.parse(this.responseText);
// 		console.log(filmData);
// 	});
// 	filmReq.addEventListener('error', function(e) {
// 		console.log('Error', e);
// 	});
// 	filmReq.open('GET', filmURL);
// 	filmReq.send();
// });
// firstReq.addEventListener('error', () => {
// 	console.log('Error!');
// });
// firstReq.open('GET', 'https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Sent');
// // fetch
// const printPlanets = data => {};
// const checkStatus = res => {
// 	if (!res.ok) {
// 		// console.log('Status is not 200!!');
// 		throw new Error(`Status code error:${res.status}`);
// 	} else {
// 		return res.json();
// 	}
// };
// fetch('https://swapi.co/api/planets/')
// 	.then(checkStatus)
// 	.then(data => {
// 		// console.log(data);
// 		for (let planet of data.results) {
// 			console.log(planet.name);
// 		}
// 		// console.log(data);
// 		const nextURL = data.next;
// 		// console.log(nextURL);

// 		const filmURL = data.results[0].films[0];
// 		return fetch(nextURL);
// 	})
// 	.then(checkStatus)
// 	.then(data => {
// 		console.log('Fetched next 10 planets');
// 		for (let planet of data.results) {
// 			console.log(planet.name);
// 		}
// 		console.log(data);
// 	})
// 	.catch(e => {
// 		console.log(e);
// 	});
// // Axios
const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
	return axios.get(url);
};
const printPlanets = ({ data }) => {};
fetchNextPlanets()
	.then(({ data }) => {
		console.log(data);
		for (let planet of data.results) {
			console.log(planet.name);
		}
		return fetchNextPlanets(data.next);
	})
	.then(({ data }) => {
		console.log(data);
		for (let planet of data.results) {
			console.log(planet.name);
		}
	})
	.catch(e => {
		console.log(e);
	});
