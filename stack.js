module.exports = function() {
	stack = [];

	this.pop = function() {
		return stack.pop();
	}

	this.push = function(elem) {
	 	stack.push(elem);
	}

	this.peek = function() {
		return stack[stack.length - 1];
	}

	return this;
}