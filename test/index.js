/* eslint-disable no-console */
/* eslint-disable no-undef */
"use strict";

// Import external modules.
require("module-alias/register");
const assert = require("assert");

// Import internal modules.
const Module = require("@dist");

/* Defines */
const test = true;

/* Test */
// Example of a simple Mocha test.
describe("Module Mocha Test", function () {
	it("should return true if module is loaded.", function(){
		assert.equal(Module, test);
	});
});
