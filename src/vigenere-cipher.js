const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direction=true) {
    this.direction = direction;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(message, key) {

    let result = [];
    let mesLetterNumber = 0;
    let keyLetterNumber = 0;
    let encLetterNumber = 0;
    this.message = message.toUpperCase();
    this.key = key.toUpperCase();

    for (let i = 0, j = 0; i < this.message.length; i++) {
      if (this.message[i].match(/[A-Z]/)) {

        mesLetterNumber = this.alphabet.indexOf(this.message[i]);
        keyLetterNumber = this.alphabet.indexOf(this.key[j % key.length]);
        encLetterNumber = (mesLetterNumber + keyLetterNumber) % 26;
        result.push(this.alphabet[encLetterNumber]);
        j++;
      } else {
        result.push(this.message[i]);
      }
    }
    return this.direction ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {

    let result = [];
    let mesLetterNumber = 0;
    let keyLetterNumber = 0;
    let decLetterNumber = 0;
    this.message = message.toUpperCase();
    this.key = key.toUpperCase();

    for (let i = 0, j = 0; i < this.message.length; i++) {
      if (this.message[i].match(/[A-Z]/)) {

        mesLetterNumber = this.alphabet.indexOf(this.message[i]);
        keyLetterNumber = this.alphabet.indexOf(this.key[j % key.length]);
        decLetterNumber = (mesLetterNumber - keyLetterNumber >= 0)
        ? mesLetterNumber - keyLetterNumber
        : mesLetterNumber - keyLetterNumber + 26;

        result.push(this.alphabet[decLetterNumber]);
        j++;
      } else {
        result.push(this.message[i]);
      }
    }
    return this.direction ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;