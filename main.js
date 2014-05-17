var ip   = '127.0.0.1';
var port = 8080;
var server = require('./webServer').start(ip, port);
var io = require('./socketServer').start(server);

io.sockets.on('connection', function(socket){

  socket.on('disconnect', function () {
    console.log('client disconnected:' + socket.id);
  });

  socket.on('message', function (msg) {
      console.log('client: '+ msg);
      io.sockets.send(msg);
  });
});
