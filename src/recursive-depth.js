const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) {
    let depth = 0;
    if (Array.isArray(arr)) {
      if (arr.length == 0) {
        depth += 1
      } else {
        depth = 1 + Math.max(...arr.map(value => this.calculateDepth(value)));
      }   
    } 
    return depth;
  }

};