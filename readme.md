# Overview

CombineKeys is a function that combines javascript objects key-wise. This module exposes a single function, combineKeys, which has the following interface:

	oResult = combineKeys(oSource, oTarget, bMutate = false)

This is hungarian notation to indicate types, where "o" means "object" and "b" means "boolean". The = false part means that a) the argument isn't required, and b) the default is false.

The action of the function is to combine source and target into a new object that has the keys of both. What is different about combineKeys is that it strives to be lossless. Target values with the same key aren't replaced, but rather the source and target is combined a controlled way that "makes sense".

To be honest it's a very short function, and I recommend you read the source. The tests are also important.

# How to use the function.

	npm install combine-keys
	var combineKeys = require('combineKeys')

# How to test, build, contribute.
	
	[install node]
	[open a terminal]
	git checkout combine-keys
	cd combine-keys
	npm install
	npm run test

You'll then want to edit combineKeys.js, and/or add tests to tests.js, then run `npm run test` again. (Actually you should fork this repo, create a branch, edit the branch, cleanup the branch, and issue a pull request. But that's beyond the scope of this document!)

