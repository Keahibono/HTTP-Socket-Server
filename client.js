var net = require('net');
var url = require('url');

var cliDomain = process.argv[2];
var serverPath = url.parse(cliDomain, false).pathname;
var serverHost = url.parse(cliDomain, false).host;

console.log(serverHost);
console.log(serverPath);

var client = net.createConnection({port:80, host: serverHost},function() {

  console.log('Connected');
  client.write('GET ' + serverPath + ' HTTP/1.1\r\n');
  client.write('Host: ' + serverHost + '\r\n');
  client.write('Connection: keep-alive\r\n');
  client.write('Cache-Control: max-age=0\r\n');
  client.write('Accept: text/html,application/xhtml+xml,application/xml;q=0.9,imagewebp,*/*;q=0.8\r\n');
  client.write('Upgrade-Insecure-Requests: 1\r\n');
  client.write('User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36\r\n');
  //client.write('Accept-Encoding: gzip, deflate, sdch\r\n');
  client.write('Accept-Language: en-US,en;q=0.8,it;q=0.\r\n\r\n');
});

client.setEncoding('utf-8');

client.on('data', function(data) {
  console.log(data);
  client.end();
});

client.on('end', function() {
  console.log('Connection closed');
});