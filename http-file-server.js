var http = require('http'),
    fs   = require('fs');

var server = http.createServer(function (req, res) {
    var file = process.argv[3],
        readerStream = fs.createReadStream(file);
    
    readerStream.on('open',function () {
        readerStream.pipe(res);
    });
    
});

server.listen(process.argv[2]);
