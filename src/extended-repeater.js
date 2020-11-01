const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let newStr = str;
  let newStrAdd = '';
  let repeatTimes = options.repeatTimes; // repeatTimes sets the number of repetitions of the str;
  let separator = options.separator; // separator is a string separating repetitions of the str;
  let addition = options.addition; // addition is an additional string that will be added to each repetition of the str;
  let additionRepeatTimes = options.additionRepeatTimes; // additionRepeatTimes sets the number of repetitions of the addition;
  let additionSeparator = options.additionSeparator; // additionSeparator is a string separating repetitions of the addition
  
  const createAddition = () => {
    let addStr = '';
    if (!additionRepeatTimes) {
      !addition ? addStr : addStr = addition; 
    } else {
      addStr = addition;
      for (i = 0; i < additionRepeatTimes - 1; i++) {
        !additionSeparator ? additionSeparator = '|' :  additionSeparator;
        addStr = `${addStr}${additionSeparator}${addition}`;
      }
    }
  return addStr;
  }
  
  if (!options) return newStr;
  if (!repeatTimes) {
    newStrAdd = createAddition();
    newStr += newStrAdd;
  } else {
    newStrAdd = createAddition();
    newStr += newStrAdd
    for (i = 0; i < repeatTimes - 1; i++) {
      !separator ? separator = '+' :  separator;
      newStr = `${newStr}${separator}${str}${newStrAdd}`;
    }

  }
  
  return newStr;  
};