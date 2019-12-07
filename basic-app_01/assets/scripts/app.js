//create a defaultresult const to start the process with 0
// custom script file- **Start**
const defaultResult = 0;
let currentResult = defaultResult;
// gets input from input field and converts it into a int for calculation
function getUserNumberInput() {
	return parseInt(userInput.value);
}
// generate and write calculation
function createAndWriteLog(operator, resultBeforeCalculation, calcNumber) {
	const calcDescription = `${resultBeforeCalculation} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription);
}
// ADD functionality
function add() {
	const enteredNumber = getUserNumberInput();
	// const calcDescription = `${currentResult} + ${enteredNumber}`;
	const initialResult = currentResult;
	currentResult = currentResult + enteredNumber;
	// outputResult(currentResult, calcDescription);
	createAndWriteLog('+', initialResult, enteredNumber);
}
function subtract() {
	const enteredNumber = getUserNumberInput();
	// const calcDescription = `${currentResult} - ${enteredNumber}`;
	const initialResult = currentResult;
	currentResult = currentResult - enteredNumber;
	// outputResult(currentResult, calcDescription);
	createAndWriteLog('-', initialResult, enteredNumber);
}
function multiply() {
	const enteredNumber = getUserNumberInput();
	// const calcDescription = `${currentResult} * ${enteredNumber}`;
	const initialResult = currentResult;
	currentResult = currentResult * enteredNumber;
	// outputResult(currentResult, calcDescription);
	createAndWriteLog('*', initialResult, enteredNumber);
}
function divide() {
	const enteredNumber = getUserNumberInput();
	// const calcDescription = `${currentResult} / ${enteredNumber}`;
	const initialResult = currentResult;
	currentResult = currentResult / enteredNumber;
	// outputResult(currentResult, calcDescription);
	console.log(enteredNumber, calcDescription, outputResult);
	createAndWriteLog('/', initialResult, enteredNumber);
}
// add(1, 2);
// currentResult = add(1, 2);

// calculationDescription = `Addition with default value ${defaultResult}`;
// let errorMessage = 'An error \n occured';
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// let userInput = 1;
// let result;
// result = 18 + userInput;
// result = result - 3;
// result = result * 2;
// result = result / 2;
// alert(result);
// console.log(`User Input = ${userInput}`);
