'use strict';

var express = require('express'),
	cors = require('cors'),
	http = require('http');

/**
 * Main application file
 */

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./lib/config/config');

// Setup Express
var app = express();
var http = http.Server(app);
var io = require('socket.io')(http);

app.use(cors());

require('./lib/config/express')(app);
require('./lib/routes')(app);

// Socket.io Communication
io.on('connection', function(socket) {
  console.log('a client connected');

  // Lab 3:TODO 1: Setup Server “tweet” Event Listener

  // Lab 3:TODO 2: Emit Server “broadcast” Event
});

// Start server
http.listen(config.port, config.ip, function () {
  console.log('Express server listening on %s:%d, in %s mode', config.ip, config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
