const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
	let newNames = [];
 	for (let i = 0; i < names.length; i++) {

		if (newNames.includes(names[i])) {
      let countNames = 1;
      const currentName = names[i];
      while(true) {
        if(!newNames.includes(`${currentName}(${countNames})`)) {
          console.log(countNames)
          newNames.push(`${currentName}(${countNames})`);
          console.log('push:'+`${currentName}(${countNames})`)
          break;
        }

       countNames += 1;

      }

    } else {
      newNames.push(names[i])
    }
  }
  return newNames;
}

renameFiles(["file", "file", "image", "file(1)", "file"])
module.exports = {
  renameFiles
};
