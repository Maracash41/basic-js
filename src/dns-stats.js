const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 * 
 *
 */
function getDNSStats(domains) {
  const reverse = {};

  for (const domain of domains) {
    const parts = domain.split('.');
    let part = '';

    for (let i = parts.length; i--;) {
      part += '.' + parts[i];

      if (reverse[part]) {
        ++reverse[part];
      } else {
        reverse[part] = 1;
      }
    }
  }

  return reverse;
}

module.exports = {
  getDNSStats
};
