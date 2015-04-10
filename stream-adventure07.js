var http = require('http');
var through = require('through');
var fs = require('fs');

var to_upper = function(buffer){
	this.queue(buffer.toString().toUpperCase());
};

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req
        .pipe(through(to_upper))
        .pipe(res);
    }
});
server.listen(process.argv[2]);