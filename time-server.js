var net     = require('net');

function fillWithZero (i) {
    return (i < 10 ? '0' : '') + i
}
var server  = net.createServer(function (socket) {
    var yy = new Date().getUTCFullYear(),
        mm = fillWithZero(new Date().getMonth() + 1),
        dd = fillWithZero(new Date().getDate()),
        hh = new Date().getHours(),
        min = new Date().getMinutes(),
        data = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + min + '\n';
    socket.end(data);
});
server.listen(process.argv[2]);

