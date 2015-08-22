var http = require('http');
var net = require('net');
var url = require('url');

var server = http.createServer().listen(8080, 'localhost');
server.on('request', function(req, res) {
  var url_parts = url.parse(req.url, true);
  switch(url_parts.pathname) {
    case '/':
    case '/index.html':
      res.writeHead(200, {'Content-Type': 'text/html', 'Server-Name': 'Keahi'});
      res.end('<!DOCTYPE html><head><meta charset="UTF-8"><title>The Elements</title><link rel="stylesheet" href="/css/styles.css"></head><body><h1>The Elements</h1><h2>These are all the known elements.</h2><h3>These are 2</h3><ol><li><a href="/hydrogen.html">Hydrogen</a></li><li><a href="/helium.html">Helium</a></li></ol></body></html>');
      //route to /index.html
      break;
    case '/hydrogen.html':
      res.writeHead(200, {'Content-Type': 'text/html', 'Server-Name': 'Keahi'});
      res.end('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>The Elements - Hydrogen</title><link rel="stylesheet" href="/css/styles.css"></head><body><h1>Hydrogen</h1><h2>H</h2><h3>Atomic number 1</h3><p>Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the universe, constituting roughly 75% of all baryonic mass. Non-remnant stars are mainly composed of hydrogen in its plasma state. The most common isotope of hydrogen, termed protium (name rarely used, symbol 1H), has a single proton and zero neutrons.</p><p><a href="/">back</a></p></body></html>');
      //route to hydrogen.html
      break;
    case '/helium.html':
      res.writeHead(200, {'Content-Type': 'text/html', 'Server-Name': 'Keahi'});
      res.end('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>The Elements - Helium</title><link rel="stylesheet" href="/css/styles.css"></head><body><h1>Helium</h1><h2>H</h2><h3>Atomic number 2</h3><p>Helium is a chemical element with symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas that heads the noble gas group in the periodic table. Its boiling and melting points are the lowest among all the elements and it exists only as a gas except in extremely cold conditions.</p><p><a href="/">back</a></p></body></html>');
      //route to helium.html
      break;
    case '/404.html':
      res.writeHead(404, {'Content-Type': 'text/html', 'Server-Name': 'Keahi'});
      res.end('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Element not found!</title><link rel="stylesheet" href="/css/styles.css"></head><body><h1>404</h1><h2>Element not found!</h2><p><a href="/">back</a></p></body></html>');
      //route to /404.html
      break;
    case '/css/styles.css':
      res.writeHead(200, {'Content-Type': 'text/css', 'Server-Name': 'Keahi'});
      res.end();

    default:
      res.writeHead(404, {'Content-Type': 'text/html', 'Server-Name': 'Keahi'});
      res.end('<html><head><title>This is the 404 Page</title></head><body><h1>This is the 404 Page</h1></body>');
      break;

  }

});