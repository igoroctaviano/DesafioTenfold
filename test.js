

var alien = ['isk', 'vev', 'xesh', 'leth', 'cresh', 'dorn', 'mern'];
var roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
function getDecimal(roman) {
	if(roman == 'I')
		return 1;

	if(roman == 'V')
		return 5;

	if(roman == 'X')
		return 10;

	if(roman == 'L')
		return 50;

	if(roman == 'C')
		return 100;

	if(roman == 'D')
		return 500;

	if(roman == 'M')
		return 1000;
}

 // @TODO Implement
function getAmountInCredits(quotation, alienNumber) {
	let alienArray = alienNumber.split(' ');

	let curNumber = 0;
	let lastNumber = 0;

	for(var i in alienArray) {
		if(alien.indexOf(alienArray[i]) > -1) {

			let number = getDecimal(roman[alien.indexOf(alienArray[i])]);

			if(lastNumber < number) {
				curNumber = number - curNumber;
			} else {
				curNumber = number + curNumber;
			}
			lastNumber = number;

		} else {
			return NaN;
		}
	}


	return curNumber * quotation;

}

console.log(getAmountInCredits(1, 'isk isk'));
console.log(getAmountInCredits(2, 'isk isk'));
console.log(getAmountInCredits(3.14, 'isk isk'));
console.log(getAmountInCredits(1.2, 'isk vev'));
console.log(getAmountInCredits(1.2, 'isk not'));
console.log(getAmountInCredits(2, 'isk leth'));
console.log(getAmountInCredits(2, 'leth isk'));
console.log(getAmountInCredits(2, 'leth vev isk'));