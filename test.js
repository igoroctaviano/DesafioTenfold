

var alien = ['isk', 
'vev',
'xesh',
'leth',
'cresh',
'dorn',
'mern'];

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

			if(lastNumber < getDecimal(roman[alien.indexOf(alienArray[i])])) {
				curNumber = getDecimal(roman[alien.indexOf(alienArray[i])]) - curNumber;
			} else {
				curNumber = getDecimal(roman[alien.indexOf(alienArray[i])]) + curNumber;
			}
			lastNumber = getDecimal(roman[alien.indexOf(alienArray[i])]);

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