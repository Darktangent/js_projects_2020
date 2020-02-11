const defaultResult = 0;
let currentResult = defaultResult;
// let result
let logEntries = [];

function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult
	};
	logEntries.push(logEntry);
	// console.log(logEntry.operation);
	console.log(logEntries);
}
function getUserNumberInput() {
	return +userInput.value;
}
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
	const description = `${resultBeforeCalc} ${operator}${calcNumber}`;
	outputResult(currentResult, description);
}
function calculateResult(calculationType) {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	let mathOperator;
	if (
		calculationType !== 'ADD' &&
		calculationType !== 'SUBTRACT' &&
		calculationType !== 'MULTIPLY' &&
		calculationType !== 'DIVIDE'
	) {
		return;
	}
	if (calculationType === 'ADD') {
		currentResult += enteredNumber;
		mathOperator = '+';
	} else if (calculationType === 'SUBTRACT') {
		currentResult -= enteredNumber;
		mathOperator = '-';
	} else if (calculationType === 'MULTIPLY') {
		currentResult *= enteredNumber;
		mathOperator = '*';
	} else if (calculationType === 'DIVIDE') {
		currentResult /= enteredNumber;
		mathOperator = '/';
	}

	createAndWriteLog(mathOperator, initialResult, enteredNumber);
	writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
	calculateResult('ADD');
}
function subtract() {
	calculateResult('SUBTRACT');
}
function multiply() {
	calculateResult('MULTIPLY');
}
function divide() {
	calculateResult('DIVIDE');
}

// currentResult = add(100, 121);
// let calculationDescription = `(${currentResult} + 10) *3/2-1`;

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
let errorMessage = `An error occured!`;
