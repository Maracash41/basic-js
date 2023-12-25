const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';

 let st = str;

  let adSepar = options.additionSeparator || '|';
  let addition =  (options.addition !== undefined) ? options.addition : '';
  let strSepar = options.separator || "+";
  let strRepeat = options.repeatTimes || 1;

  let additionRepeat =  options.additionRepeatTimes;

  while (strRepeat) {
    result += st;
  	result += addition;

		for (let i = 1; i < additionRepeat; i++) {
      result += adSepar + addition;
    }

    if (strRepeat > 1) {
      result += strSepar;
    }

   strRepeat--;
  }
  return result;
}
module.exports = {
  repeater
};
