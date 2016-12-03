// MODIFY THIS WITH THE APPROPRIATE URL
var socket = io.connect('http://192.168.0.9:8080');

// Checkbox elements
var checkboxes = {
  R1: $('#checkbox-R1'),
  R2: $('#checkbox-R2'),
  R3: $('#checkbox-R3'),
  R4: $('#checkbox-R4'),
  R5: $('#checkbox-R5'),
  R6: $('#checkbox-R6'),
  R7: $('#checkbox-R7'),
  R8: $('#checkbox-R8'),
  R9: $('#checkbox-R9'),
  R10: $('#checkbox-R10'),
  spaHeat: $('#checkbox-spaHeat'),
  R11: $('#checkbox-R11'),
  poolHeat: $('#checkbox-poolHeat'),
  R12: $('#checkbox-R12'),
  R13: $('#checkbox-R13'),
  R14: $('#checkbox-R14'),
  R15: $('#checkbox-R15'),
  R16: $('#checkbox-R16'),
}

var buttons = {
  color: $('#button-color'),
  show: $('#button-show'),
  reset: $('#button-reset'),
}

// Use Bootstrap Switch to style checkboxes
for(var id in checkboxes) {
  checkboxes[id].bootstrapSwitch();
};


/// Send state of checkboxes to server via WebSockets

socket.on('connect', function() {
  socket.emit('hello');
});

socket.on('init', function(data) {
  for(var id in data) {
    checkboxes[id].bootstrapSwitch('state', data[id], true);
  }
});

socket.on('R1', function(data) {
  checkboxes['R1'].bootstrapSwitch('state', data.state, true);
});

socket.on('R2', function(data) {
  checkboxes['R2'].bootstrapSwitch('state', data.state, true);
});

socket.on('R3', function(data) {
  checkboxes['R3'].bootstrapSwitch('state', data.state, true);
});

socket.on('R11', function(data) {
  checkboxes['spaHeat'].bootstrapSwitch('state', data.state, true);
});

socket.on('R12', function(data) {
  checkboxes['R12'].bootstrapSwitch('state', data.state, true);
});

socket.on('R4', function(data) {
  checkboxes['R4'].bootstrapSwitch('state', data.state, true);
});

socket.on('R12', function(data) {
  checkboxes['R12'].bootstrapSwitch('state', data.state, true);
});

socket.on('R14', function(data) {
  checkboxes['R14'].bootstrapSwitch('state', data.state, true);
});

socket.on('R15', function(data) {
  checkboxes['R15'].bootstrapSwitch('state', data.state, true);
});

checkboxes['R1'].on('switchChange.bootstrapSwitch', function(event, state) {
  socket.emit('R1', { state: state });
});

checkboxes['R2'].on('switchChange.bootstrapSwitch', function(event, state) {
  socket.emit('R2', { state: state });
});

checkboxes['R3'].on('switchChange.bootstrapSwitch', function(event, state) {
  socket.emit('R3', { state: state });
});

checkboxes['R4'].on('switchChange.bootstrapSwitch', function(event, state) {
  socket.emit('R4', { state: state });
});

checkboxes['spaHeat'].on('switchChange.bootstrapSwitch', function(event, state) {
  socket.emit('R7', { state: state });
  socket.emit('R5', { state: state });
  socket.emit('R10', { state: state });
});

checkboxes['poolHeat'].on('switchChange.bootstrapSwitch', function(event, state) {
  socket.emit('R7', { state: false });
  socket.emit('R5', { state: false });
  socket.emit('R11', { state: state });
});

checkboxes['R12'].on('switchChange.bootstrapSwitch', function(event, state) {
  socket.emit('R12', { state: state });
    if (state = true){
      $('#button-color').prop('disabled', false);
	  $('#button-show').prop('disabled', false);
    }
    else {
      $('#button-color').prop('disabled', true);
	  $('#button-show').prop('disabled', true);
  }
});




buttons['color'].on('click.bootstrapButton', function(event, state) {
  socket.emit('plight', { state: false });
  setTimeout(function () {
    socket.emit('plight', { state: true });
  }, 1000)
});

buttons['show'].on('click.bootstrapButton', function(event, state) {
  socket.emit('plight', { state: false });
  setTimeout(function () {
    socket.emit('plight', { state: true });
  }, 3090)
});

buttons['reset'].on('click.bootstrapButton', function(event, state) {
  socket.emit('plight', { state: false });
  sleep(1000);
  socket.emit('plight', { state: true });
  sleep(1000);
  socket.emit('plight', { state: false });
  sleep(1000);
  socket.emit('plight', { state: true });
});

checkboxes['R14'].on('switchChange.bootstrapSwitch', function(event, state) {
  socket.emit('R14', { state: state });
});

checkboxes['R15'].on('switchChange.bootstrapSwitch', function(event, state) {
  socket.emit('R15', { state: state });
});