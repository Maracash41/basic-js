const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let fC = [];
  try {
  members.forEach(mem=> {
  if (typeof mem === 'string') {
    fC.push(mem.toUpperCase().trimStart().trimEnd()[0][0]);  
  } 
  })
  }
  catch {
    return false;
  }
  let result = fC.sort();
  return result.join('');
}

module.exports = {
  createDreamTeam
};
