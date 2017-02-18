"use strict"

var romanToDecimal = {
  "I" : 1,
  "V" : 5,
  "X" : 10,
  "L" : 50,
  "C" : 100,
  "D" : 500,
  "M" : 1000
};

var alianToRoman = {
  "isk" : "I",
  "vev" : "V",
  "xesh" : "X",
  "leth" : "L",
  "cresh" : "C",
  "dorn" : "D",
  "mern" : "M"
};

function getAmountInCredits(quotation, alianNumber) {
  if (alianNumber.split(' ').length == 1) {
    return quotation * romanToDecimal[alianToRoman[alianNumber]];
  } else {
      var romanNumber = alianNumber.split(' ').map(function (item) {
          return romanToDecimal[alianToRoman[item]];
        }),
        result = 0;
      for (var i = romanNumber.length - 1; i > -1; i--) {
        if (i - 1 >= 0) {
          if (romanNumber[i] > romanNumber[i - 1]) {
            result += (i - 2 < 0) ? romanNumber[i] - romanNumber[i - 1] : (romanNumber[i] - romanNumber[i - 1]) - romanNumber[i - 1] ;
          } else {
            result += (i - 2 < 0) ? romanNumber[i] + romanNumber[i - 1] : romanNumber[i];
          }
        }
      }
      return quotation * result;
    }
}

console.log(getAmountInCredits(1, 'isk isk'));
console.log(getAmountInCredits(2, 'isk isk'));
console.log(getAmountInCredits(3.14, 'isk isk'));
console.log(getAmountInCredits(1.2, 'isk vev'));
console.log(getAmountInCredits(1.2, 'isk not'));
console.log(getAmountInCredits(1, 'xesh isk vev'))