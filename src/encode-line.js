const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (!str) return '';
  let count = 0;
  let result = '';
	for (let i = 0; i < str.length; i++) {
  const currentChar = str[i];
  const futureChar = str[i+1];
	count += 1;
  
  if(currentChar !== futureChar) {
    if (count === 1) {
      result += currentChar;
      count = 0;
    } else {
        result += count + currentChar;
    	  count = 0;
    }
  } 
} 
  return result;
}
module.exports = {
  encodeLine
};
