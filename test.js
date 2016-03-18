'use strict';
var assert = 		require('assert');
var combineKeys = 	require('./combineKeys.js');

//console.log(`Version: ${process.version}`);


var b;
//test the numeric stuff
b = combineKeys({a:1},{a:1});
assert(b.a === 2);
//test the string stuff
b = combineKeys({a:'foo'},{a:'bar'});
assert(b.a === 'foo');

//test pushing an object into an array
b = combineKeys({a:{c:1}},{a:[]});
assert(b.a[0].c === 1);

//test pushing a number into an array
b = combineKeys({a:0}, {a:[]});
assert(b.a[0] === 0);

try{
  b = combineKeys({a:[0]}, {a:1});
  assert(false, 'this combination should not be supported, array number');
} catch(e){}

try{
  b = combineKeys({a:[0]}, {a:{}});
  assert(false, 'this combination should not be supported, array object');
} catch(e){}

//Missing keys should be combined
b = combineKeys({a:1},{b:2});
assert(b.a === 1);
assert(b.b === 2);
