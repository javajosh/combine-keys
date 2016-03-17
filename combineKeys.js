'use strict';

function clone(obj){
	return JSON.parse(JSON.stringify(obj));
}
function combineKeys(oLeft, oRight, bMutate){
	if (typeof oRight != 'object' || oRight === null ) return oLeft;
	if (typeof bMutate !== 'boolean') bMutate = false;
	var result = bMutate ? oLeft : clone(oLeft);

	var keys = Object.keys(result);
	for (var i = 0; i < keys.length; i++) {
		var k = keys[i];
		var v = result[keys[i]];
		if (typeof v === 'number' && typeof oRight[k] === 'number')
			result[k] = v + oRight[k];
		if (typeof v === 'string' && typeof oRight[k] === 'string')
			result[k] = oRight[k];
		if (typeof v === 'object' && typeof oRight[k] === 'object')  // support new children
			result[k].push(oRight[k]);
		if (typeof v === 'object' && typeof oRight[k] === 'number') //support simple array commands
			switch(oRight[k]){
				case 0: v.push(0); break;
				case 1: v.pop(); break;
				case 2: v[v.length-1]++; break;
				case 3: v[v.length-1]--; break;
			}
		if (typeof v === 'number' && typeof oRight[k] === 'string') //support simple commands
			result[k] = +oRight[k];
	};
	return result;
}

module.exports = combineKeys;
