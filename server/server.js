// modules
var express = require('express')
  , http = require('http')
  , morgan = require('morgan');

// configuration files
var configServer = require('./lib/config/server');

// app parameters
var app = express();
app.set('port', configServer.httpPort);
app.use(express.static(configServer.staticFolder));
app.use(morgan('dev'));
// app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
// serve index
require('./lib/routes').serveIndex(app, configServer.staticFolder);

// HTTP server
var server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log('HTTP server listening on port ' + app.get('port'));
});

//relay
const Relay = require('sainsmart-16-hid');
global.usbrelay = new Relay();

// WebSocket server
var io = require('socket.io')(server, {'pingInterval': 2000, 'pingTimeout': 5000});
io.on('connection', require('./lib/routes/socket'));
io.on('connection', function (socket) {
  console.log("Client Connected")
  socket.on('disconnect', function() {
    console.log('Client disconnected');
  });
});

//Schedule
var schedule = require('./lib/routes/schedule');

module.exports.app = app;
