const btn = document.querySelector('button');
// btn.addEventListener('click', function() {
// 	console.log('Clicked');
// });
// btn.addEventListener('mouseover', function() {
// 	btn.innerText = 'Stop Touching me';
// });
// btn.addEventListener('mouseout', function() {
// 	btn.innerText = 'Clicked';
// });

// btn.addEventListener('mouseover', function() {
// 	const h = Math.floor(Math.random() * window.innerHeight);
// 	const w = Math.floor(Math.random() * window.innerWidth);
// 	btn.style.left = `${w}px`;
// 	btn.style.top = `${h}px`;
// });
// btn.addEventListener('click', function() {
// 	btn.innerText = 'You got me';
// 	document.body.style.backgroundColor = 'green';
// });
// multiple elements

const colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'indigo',
	'violet'
];
const changeColor = function(evt) {
	console.log(evt);
	console.log(this);
	const h1 = document.querySelector('h1');
	h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector('#boxes');
for (let color of colors) {
	const box = document.createElement('div');
	box.style.backgroundColor = color;
	box.classList.add('box');
	container.appendChild(box);
	box.addEventListener('click', changeColor);
}
const input = document.querySelector('input');
input.addEventListener('keypress', function(e) {
	console.log(e.target.value);
});
const addItem = document.querySelector('#addItem');
const todoItems = document.querySelector('#items');
addItem.addEventListener('keypress', function(e) {
	// e.preventDefault();
	if (e.key === 'Enter') {
		if (!this.value) return;
		const newTodoText = this.value;
		const newItem = document.createElement('li');
		newItem.innerText = newTodoText;
		todoItems.appendChild(newItem);
		this.value = '';
	}
});
