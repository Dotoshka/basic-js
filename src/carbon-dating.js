const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (  arguments.length == 0 || //absence of argument function
        typeof sampleActivity !== 'string' || //wrong type
        Number.isNaN(parseFloat(sampleActivity)) || //not a number
        parseFloat(sampleActivity) <= 0 || //inadequate value
        parseFloat(sampleActivity) > 15 ) { //inadequate value

    return false;
  }

  const rateConst = Math.log(2) / HALF_LIFE_PERIOD;
  let elapsedTime = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / rateConst);

  return elapsedTime;
  
};
