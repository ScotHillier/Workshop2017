//$ webpack ./server.js bundle.js
var http = require('http');
var port = process.env.port || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(require('./content.js'));
}).listen(port);