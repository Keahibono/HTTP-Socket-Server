var net = require('net');
var url = require('url');

var optionMethod = process.argv[3];

var cliDomain = process.argv[2];
var serverPath = url.parse(cliDomain, false).pathname;
var serverHost = url.parse(cliDomain, false).host;

var client = net.createConnection({port:80, host: serverHost},function() {


  client.write(optionMethod + ' ' + serverPath + ' HTTP/1.1\r\n');
  client.write('Host: ' + serverHost + '\r\n');
  client.write(new Date().toUTCString());
  client.write('Connection: keep-alive\r\n');
  client.write('User-Agent : Keahi Client\r\n');
  client.write('Accept: text/html,application/xhtml+xml,application/xml;q=0.9,imagewebp,*/*;q=0.8\r\n');
  client.write('Accept-Language: en-US,en;q=0.8,it;q=0.\r\n\r\n');
});

client.setEncoding('utf-8');

client.on('data', function(data) {
  client.pipe(process.stdout);
  client.end();
});

client.on('end', function() {
  console.log('Connection closed');
});