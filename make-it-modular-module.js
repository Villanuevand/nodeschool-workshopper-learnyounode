var fs = require('fs');
var path = require('path');

function Module (dir, ext, callback) {
	var arr = [];
	fs.readdir(dir,function (error, data) {
		if(error) return callback(error);
		data.forEach(function (file) {
			if(path.extname(file) === ext)
				arr.push(file)
		})
		callback(null,arr);
	})
}

module.exports = Module;