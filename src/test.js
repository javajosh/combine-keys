var assert = 		require('assert');
var combineKeys = 	require('./combineKeys.js');

//console.log(`Version: ${process.version}`);

//test the numeric stuff
var b = combineKeys({a:1},{a:1});
assert(b.a === 2);
//test the string stuff
b = combineKeys({a:'foo'},{a:'bar'});
assert(b.a === 'bar');
//test the push object stuff
b = combineKeys({a:[]}, {a:{c:1}});
assert(b.a[0].c === 1);
//test the push pop inc dec stuff
b = combineKeys({a:[]}, {a:0});
assert(b.a[0] === 0);
b = combineKeys({a:[0]}, {a:1});
assert(b.a.length === 0);
b = combineKeys({a:[0]}, {a:2});
assert(b.a[0] === 1);
b = combineKeys({a:[1]}, {a:3});
assert(b.a[0] === 0);
