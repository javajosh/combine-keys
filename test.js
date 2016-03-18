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
assert(b.a === 'bar');

//test the push object stuff
b = combineKeys({a:[]}, {a:{c:1}});
assert(b.a[0].c === 1);

//push
b = combineKeys({a:[]}, {a:0});
assert(b.a[0] === 0);
//pop
b = combineKeys({a:[0]}, {a:1});
assert(b.a.length === 0);
//inc last
b = combineKeys({a:[0]}, {a:2});
assert(b.a[0] === 1);
//dec last
b = combineKeys({a:[1]}, {a:3});
assert(b.a[0] === 0);

//Missing keys should be combined
b = combineKeys({a:1},{b:2});
assert(b.a === 1);
assert(b.b === 2);
