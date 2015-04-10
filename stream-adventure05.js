var split = require('split');
var through = require('through');

var count = 1;

process.stdin
.pipe(split())
.pipe(through(function(buf){
    var str = buf.toString();
    if (count % 2 == 0)
        str = str.toUpperCase();
    else
        str = str.toLowerCase();
    count++;
    this.queue(str+"\n");
}))
.pipe(process.stdout);




//// answers
// var through = require('through2');
// var split = require('split');

// var lineCount = 0;
// var tr = through(function (buf, _, next) {
//     var line = buf.toString();
//     this.push(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
//     next();
// });
// process.stdin
//     .pipe(split())
//     .pipe(tr)
//     .pipe(process.stdout)
// ;