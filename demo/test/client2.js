'use strict';

System.register(['net'], function (_export, _context) {
	var net, port, socket;
	return {
		setters: [function (_net) {
			net = _net.default;
		}],
		execute: function () {
			port = 22112;
			socket = new net.Socket();

			socket.connect(port, 'localhost', function () {
				console.log('# connected to server!');
				socket.write('Hello server! This is me, client!');
				setTimeout(function () {
					console.log('ending');
					socket.end();
				}, 500);
			});

			socket.on('connect', function () {
				console.log('# socket connect');
			});

			socket.on('data', function (data) {
				console.log('# socket data |', data.length, '|', data.toString());
			});

			socket.on('end', function () {
				console.log('# socket end');
			});

			socket.on('finish', function () {
				console.log('# socket finish');
			});

			socket.on('error', function (err) {
				console.log('# socket ERROR', JSON.stringify(err));
			});

			//socket.write('arrayBufferToString hello +ěščřžýáíé=´)úpů§-.,ďťň');
			//socket.write('ďťň');
			/*setTimeout(function() {
   	console.log('reconnecting')
   	socket.connect(port, '192.168.0.105');
   }, 250)
   setTimeout(function() {
   	console.log('attempt to socket.end()')
   	socket.end();
   }, 500)*/

			String.prototype.padLeft = function (l, c) {
				return Array(l - this.length + 1).join(c || " ") + this;
			};
		}
	};
});