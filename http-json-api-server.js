var http = require("http");
var url = require("url");

http.createServer(function (request, response) {

    var dataSent = {};
    var urlObj = url.parse(request.url);
    var date = new Date(urlObj.query.replace("iso=", ""));

    switch(urlObj.pathname) {
        case "/api/parsetime":
            dataSent = {
                hour : date.getHours(),
                minute : date.getMinutes(),
                second : date.getSeconds()
            };
            break;

        case "/api/unixtime":
            dataSent = {
                unixtime : date.getTime()
            };
            break;
    }

    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(dataSent));

}).listen(process.argv[2]);