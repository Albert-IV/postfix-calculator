var Stack = require('./stack');

var args = process.argv.slice(2);

calcStack = new Stack();

args.forEach(function(token) {
	// isNaN checks for valid number
	if( !isNaN( parseFloat(token) ) ) {
		calcStack.push(parseFloat( token ));

	// If not valid, create string to eval
	} else {
		var rightNum = calcStack.pop();
		var leftNum = calcStack.pop();
		// initial "" ensures this will be a string.
		var evalStr = "" + leftNum + token + rightNum;

		calcStack.push( eval( evalStr ) );
	}
});

console.log(calcStack.peek())