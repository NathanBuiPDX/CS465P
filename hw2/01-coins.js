/** Exercise 01 - Coins **/
const COIN_VALUES = [100, 25, 10, 5, 1];
const COIN_NAMES = ['dollars', 'quarters', 'dimes', 'nickels', 'pennies'];
const calculateChange = (input) => {
	// Add your code here
	if (input > 10) return "Error: the number is too large";
	input *= 100;
	let returnedValue = [];
	let remainder = 0;
	let quotient = 0;
	for (let i = 0; i < COIN_VALUES.length; i++) {
		quotient = (input / COIN_VALUES[i]) >> 0;
		remainder = input % COIN_VALUES[i];
		input = remainder;
		if (quotient > 0) returnedValue.push(`${quotient} ${COIN_NAMES[i]}`);
	}
	return returnedValue.join(', ');
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
