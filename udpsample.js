/*
Send Message To ESP-WROOM-02
*/
var ESP_HOST = 'ip address';
var ESP_PORT = 8888;

var dgram = require('dgram');
var sender = dgram.createSocket('udp4');
var message = new Buffer('test message I have lol');

sender.send(message, 0, message.length, ESP_PORT, ESP_HOST, function(err, bytes) {
    if (err) throw err;
    sender.close();
    });

/*
Receive Message From ESP-WROOM-02
*/
var NODE_HOST = 'ip address';
var NODE_PORT = 8889;

var receiver = dgram.createSocket('udp4');

receiver.on('message', function (message, remote) {
    console.log('From ESP_Module Message : ' + message);

    });

receiver.bind(NODE_PORT, NODE_HOST);
