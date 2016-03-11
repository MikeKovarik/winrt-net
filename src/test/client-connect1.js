import net from 'net';

var client = net.connect({port: 22112})

client.write('Wow, very message, so string, wow! Doge')

client.on('data', function (data) {
	console.log('# socket data |', data.length, '|', data.toString());
})
