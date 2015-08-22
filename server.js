var http = require('http');
var net = require('net');
var url = require('url');

var server = http.createServer().listen(8080, 'localhost');
server.on('request', function(req, res) {
  var url_parts = url.parse(req.url, true);
  switch(url_parts.pathname) {
    case '/':
    case '/index.html':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<html><head><title>This is the Index Page</title></head><body><h1>This is the Index Page</h1></body>');
      //route to /index.html
      break;
    case '/hydrogen.html':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<html><head><title>This is the Hydrogen Page</title></head><body><h1>This is the Hydrogen Page</h1></body>');
      //route to hydrogen.html
      break;
    case '/helium.html':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<html><head><title>This is the Helium Page</title></head><body><h1>This is the Helium Page</h1></body>');
      //route to helium.html
      break;
    case '/404.html':
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end('<html><head><title>This is the 404 Page</title></head><body><h1>This is the 404 Page</h1></body>');
      //route to /404.html
      break;
    case '/css/styles.css':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<html><head><title>This is the CSS Page</title></head><body><h1>This is the CSS Page</h1></body>');
      //route to styles.css
    default:
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end('<html><head><title>This is the 404 Page</title></head><body><h1>This is the 404 Page</h1></body>');
      break;

  }

});