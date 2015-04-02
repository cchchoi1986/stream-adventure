"use strict";

var split = require('split');
var through2 = require('through2');
var count = 0;

process.stdin
.pipe(split(/\n/))
.pipe(through2(function (line, _, next) {
	count++;
	if (count % 2 == 0) {
		console.dir(line.toString("utf8").toUpperCase());
    	next();
	} else {
		console.dir(line.toString("utf8").toLowerCase());
    	next();
	}
}))
.pipe(process.stdout);