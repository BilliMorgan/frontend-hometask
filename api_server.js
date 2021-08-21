var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(4000);
