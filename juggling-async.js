var http = require('http');

printUrl();

function printUrl(){
    var d = [],
        url = process.argv;

    for (var i = 2; i < url.length; i++) {
        getText(url[i]);
    }

    printAll(d);

    function getText (url) {
        var daux = '';
        http.get(url, function (response) {
            response.setEncoding('utf8');
            response.on('data', function (data) {
                daux += data;
            });
            response.on('end', function () {
                d.push(daux);
                console.log(daux);
            })
        });
    }

    function printAll (arr){
        for (var i = 0; i < arr.length; i++) {
            console.log('print, ',d[i]);
        }
    }
}