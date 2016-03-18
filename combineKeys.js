//Add source to target, mutating target according to certain rules.
function combineKeys(source, target, replace, reservedKeys){
  reservedKeys = (typeof reservedKeys === 'undefined') ? {} : reservedKeys;
	var result;
	var sourceType = Array.isArray(source) ? 'array' : typeof source;
	var targetType = Array.isArray(target) ? 'array' : typeof target;
	//console.log(sourceType, targetType, source, target === R ? 'R' : target);

	if (replace || (targetType === 'undefined'))
										result = source;
	else if (sourceType === 'string'
        && targetType === 'string')
										result = source;

	else if (sourceType === 'number'
	  	  && targetType === 'number')
										result = source + target;

	else if (sourceType === 'string'
	 	    && targetType === 'number')
										result = +source;

	else if (sourceType === 'object'
	 	    && targetType === 'object'){
										Object.keys(source).forEach(function(k){
											if (!reservedKeys[k])
											  target[k] = combineKeys(source[k], target[k])
										});
										result = target;
	}
	else if (sourceType === 'array' && targetType === 'array')
										result = target.concat(source);

	else if (targetType === 'array')
										{target.push(source); result = target;}

	else throw 'Combination not supported: ' + sourceType + ',' + targetType;

	return result;
}

//If we're in node, export the function,
//If we're in a browser, put the function in global scope.
if (typeof exports !== 'undefined' && this.exports !== exports)
  module.exports = combineKeys;
else if (typeof window !== 'undefined' && this.window !== window)
  window.combineKeys = combineKeys;
