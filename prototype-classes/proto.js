// Array.prototype;
// String.prototype.yell = function() {
// 	return `this.toUpperCase()`;
// };

// const navColor = new Color('carrot', [230, 126, 34]);
// const logoColor = new Color('emerald', [230, 126, 34]);

// function Color(r, g, b) {
// 	this.r = r;
// 	this.g = g;
// 	this.b = b;
// 	console.log(this);
// }
// Color.prototype.rgb = function() {
// 	const { r, g, b } = this;
// 	return `rgb${r},${g},${b}`;
// };
// Color.prototype.rgba = function(a = 1) {
// 	const { r, g, b, a } = this;
// 	return `rgba(${r},${g},${b},${a})`;
// };
// Color.prototype.hex = function(r, g, b) {
// 	const { r, g, b } = this;
// 	r = r.toString(16);
// 	g = g.toString(16);
// 	b = b.toString(16);
// 	if (r.length === 1) {
// 		r = '0' + r;
// 	}
// 	if (r.length === 1) {
// 		r = '0' + r;
// 	}
// 	if (g.length === 1) {
// 		g = '0' + g;
// 	}
// 	if (r.length === 1) {
// 		b = '0' + b;
// 	}
// 	return '#' + r + g + b;
// };
// new Color(255, 40, 100);

// const color1 = new Color(40, 255, 60);

class Color {
	constructor(r, g, b, name) {
		// super(props);
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
	}
	greet() {
		return `Hello from ${this.name}`;
	}
	rgb() {
		// const { r, g, b } = this;

		return `rgb(${this.innerRGB()})`;
	}

	hex() {
		let { r, g, b } = this;
		r = r.toString(16);
		g = g.toString(16);
		b = b.toString(16);
		if (r.length === 1) {
			r = '0' + r;
		}
		if (r.length === 1) {
			r = '0' + r;
		}
		if (g.length === 1) {
			g = '0' + g;
		}
		if (r.length === 1) {
			b = '0' + b;
		}
		return '#' + r + g + b;
	}
	rgba(a = 1.0) {
		// const { r, g, b } = this;
		return `rgba(${this.innerRGB()},${a})`;
	}
	innerRGB() {
		const { r, g, b } = this;
		return `${r},${g},${b}`;
	}
}
const c1 = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');
// subclassing
class Pet {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating`;
	}
}
class Cats extends Pet {
	constructor(name, age, livesLeft) {
		super(name, age);
		this.livesLeft = livesLeft;
	}

	meow() {
		return 'Meowww';
	}
}
class Dog extends Pet {
	bark() {
		return 'Woof';
	}
	eat() {
		return `${this.name} scarfs his food`;
	}
}

const monty = new Cats('monty', 9);
console.log(monty.eat());
const wyat = new Dog('Wyat', 10);
