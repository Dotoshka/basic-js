const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (arguments.length == 0) {
    return 'Unable to determine the time of year!'
  }

  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error('Invalid date!')
  }

  let month = date.getMonth();
  switch (true) {
    case month == 11 || month < 2:
      return 'winter'
      break;
    case month >= 2 && month < 5:
      return 'spring'
      break;
    case month >= 5 && month < 8:
      return 'summer'
      break;
    case month >= 8 && month < 11:
      return 'autumn'
      break;
  }

};