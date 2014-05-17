"use strict";

var socketIO = require('socket.io');

/**
 * socketServer.js
 * 
 * Socket.io
 *     http://socket.io/
 *     https://github.com/LearnBoost/Socket.IO/wiki/Configuring-Socket.IO
 *     https://github.com/LearnBoost/socket.io/wiki/Exposed-events
 */

exports.start = function (httpServer) {
    
    // start listening for socket connection requests to the server ('webServer.js')
    var io = socketIO.listen(httpServer);
    
    // configure the socket.io listener
    io.configure( function () {
    
        io.enable('browser client minification');  // send minified client
        io.set('log level', 1); // only log errors
        
        // transportation stack
        io.set('transports', [
               'websocket',
               'htmlfile',
               'xhr-polling',
               'jsonp-polling'
        ]);
    });
    
    return io;
}

