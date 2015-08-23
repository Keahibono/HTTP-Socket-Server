var net = require('net');
var client = new net.Socket();
var url = require('url');

var cliDomain = process.argv[2];
var serverPath = url.parse(cliDomain, false).pathname;
var serverHost = url.parse(cliDomain, false).host;

console.log(serverPath);
console.log(serverHost);

client.connect(80, serverHost, function() {

  console.log('Connected');
  client.write('GET ' +  serverPath + ' HTTP/1.1 200 OK\r\n'+ serverHost + '\r\nConnection:keep-alive\r\nCache-Control:max-age=0\r\nAccept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8\r\nUpgrade-Insecure-Requests:');
});

client.on('data', function(data) {
  console.log('Received: ' + data);
  client.destroy(); // kill client after server's response
});

client.on('close', function() {
  console.log('Connection closed');
});