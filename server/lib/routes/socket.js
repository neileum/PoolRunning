//var mraa = require('mraa');
//var m = require('mraa'); //require mraa
//console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console
//const Relay = require('sainsmart-16-hid');
//var usbrelay = new Relay();
//Map relays id to corresponding id in usb relay lib
var relays = {
  // id : usb relay id
  R1: 0,
  R2: 1,
  R3: 2,
  R4: 3,
  R5: 4,
  R6: 5,
  R7: 6,
  R8: 7,
  R9: 8,
  R10: 9,
  R11: 10,
  R12: 11,
  R13: 12,
  R14: 13,
  R15: 14,
  R16: 15
};


//sets relay state on switch change
 function toggleRelay(relay, state) {
  usbrelay.set(relay , state);
}

//turns off all relays on ctrl+c event
function toggleRelays(relays, state) {
  for(var id in relays) {
    usbrelay.set(relays[id] , false);
  }
}

//logs relay state in console on change
function printRelayState(id, state) {
  console.log('Relay: ' + id + ', state: ' + state);
}

// WebSocket communications
module.exports = function (socket) {
//sends relay state to client on load
  socket.on('hello', function() {
    console.log('hello');

    var data = {};
    for(var id in relays) {
     data[id] = usbrelay.stateArray[relays[id]];
	}
    console.log(data);
    socket.emit('init', data);
  });

  //controls relays
  socket.on('R1', function(data) {
    toggleRelay(relays['R1'], data.state);
    printRelayState('R1', data.state);
    socket.broadcast.emit('R1', data);
  });

  socket.on('R2', function(data) {
    toggleRelay(relays['R2'], data.state);
    printRelayState('R2', data.state);
    socket.broadcast.emit('R2', data);
  });

  socket.on('R3', function(data) {
    toggleRelay(relays['R3'], data.state);
    printRelayState('R3', data.state);
    socket.broadcast.emit('R3', data);
  });

  socket.on('R4', function(data) {
    toggleRelay(relays['R4'], data.state);
    printRelayState('R4', data.state);
    socket.broadcast.emit('R4', data);
  });

  socket.on('R5', function(data) {
    toggleRelay(relays['R5'], data.state);
    printRelayState('R5', data.state);
    socket.broadcast.emit('R5', data);
  });

  socket.on('R6', function(data) {
    toggleRelay(relays['R6'], data.state);
    printRelayState('R6', data.state);
    socket.broadcast.emit('R6', data);
  });

  socket.on('R7', function(data) {
    toggleRelay(relays['R7'], data.state);
    printRelayState('R7', data.state);
    socket.broadcast.emit('R7', data);
  });

  socket.on('R8', function(data) {
    toggleRelay(relays['R8'], data.state);
    printRelayState('R8', data.state);
    socket.broadcast.emit('R8', data);
  });

    socket.on('R9', function(data) {
    toggleRelay(relays['R9'], data.state);
    printRelayState('R9', data.state);
    socket.broadcast.emit('R9', data);
  });

  socket.on('R10', function(data) {
    toggleRelay(relays['R10'], data.state);
    printRelayState('R10', data.state);
    socket.broadcast.emit('R10', data);
  });

  socket.on('R11', function(data) {
    toggleRelay(relays['R11'], data.state);
    printRelayState('R11', data.state);
    socket.broadcast.emit('R11', data);
  });

  socket.on('R12', function(data) {
    toggleRelay(relays['R12'], data.state);
    printRelayState('R12', data.state);
    socket.broadcast.emit('R12', data);
  });

  socket.on('R13', function(data) {
    toggleRelay(relays['R13'], data.state);
    printRelayState('R13', data.state);
    socket.broadcast.emit('R13', data);
  });

  socket.on('R14', function(data) {
    toggleRelay(relays['R14'], data.state);
    printRelayState('R14', data.state);
    socket.broadcast.emit('R14', data);
  });

  socket.on('R15', function(data) {
    toggleRelay(relays['R15'], data.state);
    printRelayState('R15', data.state);
    socket.broadcast.emit('R15', data);
  });

  socket.on('R16', function(data) {
    toggleRelay(relays['R16'], data.state);
    printRelayState('R16', data.state);
    socket.broadcast.emit('R16', data);
  });

///Special commands that don't emit back to clients
    socket.on('plight', function(data) {
    toggleRelay(relays['R12'], data.state);
  });

  // Handle Ctrl+C event
  process.on('SIGINT', function() {
    toggleRelays(relays, false);
	for(var id in relays) {
	socket.broadcast.emit(relays[id], false)};
    socket.disconnect();
    process.exit();
  });
};
