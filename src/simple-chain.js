const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: '',

  getLength() {
    return this.chain.split('~~').length
  },

  addLink(value) {

    if (arguments.length == 0) {
      value = '';
    }

    if (!this.chain) {
      this.chain = `( ${value} )~~`;
    } else {
      this.chain += `( ${value} )~~`;
    }

    return this;
  },

  removeLink(position) {

    if (!this.chain) {
      throw new Error('Nothing to remove');
    }

    this.chain = this.chain.split('~~');

    if (isNaN(position) || !Number.isInteger(position) || position - 1 < 0 || position - 1 > this.chain.length - 1) {
      this.chain = '';
      throw new Error('Nothing to remove');
    }

    this.chain.splice(position - 1, 1);
    this.chain = this.chain.join('~~');

    return this;
  },

  reverseChain() {

    if (!this.chain) {
      return this;
    }

    this.chain = this.chain
      .slice(0, -2)
      .split('~~')
      .reverse()
      .join('~~')
      + '~~';

    return this;

  },
  
  finishChain() {

    const finishedChain = this.chain.slice(0, -2);
    this.chain = '';

    return finishedChain;
  }
};

module.exports = chainMaker;
