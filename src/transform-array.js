const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error('Invalid argument')
  }

  let transformedArr = arr.slice();

  for (i = 0; i < transformedArr.length; i++) {

    if (transformedArr[i] == '--discard-next') {
      transformedArr.splice(i, 2, null);

    } else if (transformedArr[i] == '--discard-prev') {

      if (i == 0) {
        transformedArr.splice(i, 1, null);
      } else {
        transformedArr.splice(i - 1, 2, null);
      }

    } else if (transformedArr[i] == '--double-next') {

      if (i == transformedArr.length - 1) {
        transformedArr.splice(i, 1);
      } else {
        transformedArr.splice(i, 1, transformedArr[i + 1]);
      }

    } else if (transformedArr[i] == '--double-prev') {

      if (i == 0) {
        transformedArr.splice(i, 1, null);
      } else {
        transformedArr.splice(i, 1, transformedArr[i - 1]);
      }
    }
  }

  return transformedArr.filter(currEl => currEl !== null);
};
