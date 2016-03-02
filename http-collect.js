var http = require('http');
var url = process.argv[2];

http.get(url, function (response) {
	var d = '';
	response.setEncoding('utf8');
	response.on('data', function (data) {
		d += data;
	});
	response.on('end', function () {
		console.log(d.length);
		console.log(d);
	})
});