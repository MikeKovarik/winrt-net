import net from 'net';


var port = 8126;

var server = net.createServer(function(socket) {
	console.log('# server connection1', socket.remoteAddress + ":" + socket.remotePort);

	socket.write('server says hello');
	socket.write('here\'s second message');
	setTimeout(() => {
		socket.write('hello +ěščřžýáíé=´)úpů§-.,ďťň');
	}, 400)

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

setTimeout(() => {
	console.log('closing server');
	server.close(err => {
		console.log('# close callback', err)
	});
}, 4000);

server.on('connection', function(socket) {
	console.log('# server connection2', socket.remoteAddress + ":" + socket.remotePort);
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

server.listen(port);
