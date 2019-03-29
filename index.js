const express = require('express');
const port = process.env.port || 8081;

//Push Notification

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

server.listen(port, () => console.log("Running at Port " + port));

io.on("connection", function(socket){

	socket.on("textType", function(data){
		io.emit("isTyping", data);
	});

	socket.on("new message", function(message){
		io.emit("new message", message);
	});
});