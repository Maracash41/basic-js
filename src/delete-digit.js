const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let maxDigits = [];
  
  String(n).split('').forEach((digit, index, arr) => {
    let currentNumber = String(n).split('');
    currentNumber.splice(index, 1);
    maxDigits.push(Number(currentNumber.join('')));

  })
  return Math.max(...maxDigits);
}

module.exports = {
  deleteDigit
};
