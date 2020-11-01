const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members)) {
    return false
  }

  let teamName = members.filter(name => typeof name == 'string')
                        .map(name => name.trim()[0].toUpperCase())
                        .sort()
                        .join('');
  return teamName;

};
