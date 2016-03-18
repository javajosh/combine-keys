function combineKeys(oLeft, oRight, bMutate){
	'use strict';
	function clone(obj){return JSON.parse(JSON.stringify(obj));}

	if (typeof oRight != 'object' || oRight === null ) return oLeft;
	if (typeof bMutate !== 'boolean') bMutate = false;
	var result = bMutate ? oLeft : clone(oLeft);

	var leftKeys = Object.keys(result);
	var rightKeys = Object.keys(oRight);

	for (var i = 0; i < leftKeys.length; i++) {
		var leftKey = leftKeys[i];
		var leftValue = result[leftKey], leftType = typeof leftValue;
		var rightValue = oRight[leftKey], rightType = typeof rightValue;

		//Add numbers
		if ( leftType === 'number' && 
			rightType === 'number')

			result[leftKey] = leftValue + rightValue;
		//Replace strings
		else if ( leftType === 'string' && 
			rightType === 'string')

			result[leftKey] = rightValue;

		//Left array, right number interp as: push, pop, and inc/dec on the last value.
		else if ( Array.isArray(leftValue) && 
		    rightType === 'number')

			switch(rightValue){
				case 0: leftValue.push(0); break;
				case 1: leftValue.pop(); break;
				case 2: leftValue[leftValue.length-1]++; break;
				case 3: leftValue[leftValue.length-1]--; break;
			}

		//Left number, right string interp as increment
		else if ( leftType === 'number' && 
			rightType === 'string')
			result[leftKey] = +rightValue;

		//Combine objects into an array
		else if ( leftType === 'object' && 
			rightType === 'object')

			result[leftKey].push(rightValue);
	} //end for

	//Look through all the right keys that are missing, and just add them.
	for (var i = 0; i < rightKeys.length; i++) {
		var rightKey = rightKeys[i];
		var rightValue = oRight[rightKey];
		var leftValue = result[rightKey];
		if ( typeof leftValue === 'undefined')
			result[rightKey] = rightValue
	}
	return result;
}

//If we're in node, export the function,
//If we're in a browser, put the function in global scope.
if (typeof exports !== 'undefined' && this.exports !== exports)
  module.exports = combineKeys;
else if (typeof window !== 'undefined' && this.window !== window)
  window.combineKeys = combineKeys;
