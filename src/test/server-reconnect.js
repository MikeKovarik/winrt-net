import net from 'net';


var port1 = 8126;
var port2 = 22112;

var server = net.createServer();

server.on('connection', function(socket) {
	console.log('# server connection', socket.remoteAddress + ":" + socket.remotePort);

	socket.on('data', function(data) {
		console.log('# socket data |', data.length, '|', data.toString().trim());
	});

	socket.on('end', function () {
		console.log('# socket end');
	});

	socket.on('close', function() {
		console.log('# socket close');
	});

	socket.on('finish', function() {
		console.log('# socket finish');
	});

	socket.on('error', function(err) {
		console.log('# socket ERROR', JSON.stringify(err));
	});
});

server.on('close', function() {
	console.log('# server close');
});

server.on('error', function(err) {
	console.log('# server ERROR', JSON.stringify(err));
});

server.on('listening', function() {
	console.log('# server listening');
});

server.listen(port1);
setTimeout(function() {
	// this only fires callback of 'listening' event but server keeps listening only on the first port
	server.listen(port2);
}, 4000)
