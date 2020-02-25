const chainMaker = {
  resultChain: [],
  getLength() {
    return this.resultChain.length;
  },
  addLink(value) {
    value === undefined ? this.resultChain.push('()') : this.resultChain.push('( '+value+' )');
    return this;
  },
  removeLink(position) {
    if (typeof position != 'number' || position > this.resultChain.length - 1 || position < 1) {
			this.resultChain = [];
			throw new Error("invalid position");
		}
		this.resultChain.splice(position - 1, 1);
		return this;
  },
  reverseChain() {
    this.resultChain.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    str = this.resultChain.join('~~');
    this.resultChain = [];
    return str;
  }
};

module.exports = chainMaker;
