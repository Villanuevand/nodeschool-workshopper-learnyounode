var fs = require('fs');

var buff = fs.readFileSync(process.argv[2]);
var n = buff.toString().split('\n').length - 1;
console.log(n);