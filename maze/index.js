const { Engine, Render, Runner, World, Bodies } = Matter;
const width = 600;
const height = 600;
const cells = 3;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		wireframes: false,
		width,
		height
	}
});
Render.run(render);
Runner.run(Runner.create(), engine);

const walls = [
	Bodies.rectangle(width / 2, 0, width, 40, {
		isStatic: true
	}),
	Bodies.rectangle(width / 2, height, width, 40, {
		isStatic: true
	}),
	Bodies.rectangle(0, height / 2, 40, height, {
		isStatic: true
	}),
	Bodies.rectangle(width, height / 2, 40, height, {
		isStatic: true
	})
];
World.add(world, walls);

// maze generation

const shuffle = arr => {
	let counter = arr.length;
	while (counter > 0) {
		const index = Math.floor(Math.random() * counter);
		counter--;
		const temp = arr[counter];
		arr[counter] = arr[index];
		arr[index] = temp;
	}
	return arr;
};

const grid = Array(cells)
	.fill(null)
	.map(() => Array(cells).fill(false));
// for (let i = 0; i < 3; i++) {
// 	grid.push([]);
// 	for (let j = 0; j < 3; j++) {
// 		grid[i].push(false);
// 	}
// }
const verticals = Array(cells)
	.fill(null)
	.map(() => Array(cells - 1).fill(false));
const horizontals = Array(cells - 1)
	.fill(null)
	.map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);
// console.log(startRow, startColumn);
const stepThroughCell = (row, column) => {
	// if i have visited the cell[row,colum] return
	if (grid[row][column]) {
		return;
	}
	//martk cell as visited
	grid[row][column] = true;
	// assemble randomly ordered list of neighbor
	const neighbors = shuffle([
		[row - 1, column, 'up'],
		[row, column + 1, 'right'],
		[row + 1, column, 'down'],
		[row, column - 1, 'left']
	]);
	// console.log(neighbors);

	// for each neighbor...
	for (let neighbor of neighbors) {
		const [nextRow, nextColumn, direction] = neighbor;
		// console.log(nextRow, nextColumn);
		// console.log(grid[nextRow][nextColumn]);

		// see if neighbor is out of bounds
		if (
			nextRow < 0 ||
			nextRow >= cells ||
			nextColumn < 0 ||
			nextColumn >= cells
		) {
			continue;
		}

		// check if we have visited that neighbor continue to next neighbor
		if (grid[nextRow][nextColumn]) {
			continue;
		}

		// remove a wall from eighter horiOntal or vertical
		if (direction === 'left') {
			verticals[row][column - 1] = true;
		} else if (direction === 'right') {
			verticals[row][column] = true;
		} else if (direction === 'up') {
			horizontals[row - 1][column] = true;
		} else if (direction === 'down') {
			verticals[row][columns] = true;
		}
	}
	// visit next cell
};
// stepThroughCell(1, 1);
// console.log(grid);
stepThroughCell(startRow, startColumn);
