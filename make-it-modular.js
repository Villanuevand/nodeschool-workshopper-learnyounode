var module = require('./make-it-modular-module');
var dir = process.argv[2];
var path = '.' + process.argv[3];

module(dir,path,function (error, data){
	data.forEach(function (file) {
		console.log(file);
	})
})