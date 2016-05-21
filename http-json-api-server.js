var http = require('http');
var url  = require('url');

var server = http.createServer(function (req, res) {
    
    res.send();
    url.parse(req.url,true);
});

