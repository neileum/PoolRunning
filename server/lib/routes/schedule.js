var schedule = require('node-schedule');
//var io = require('socket.io-client')
//var socket = io.connect('http://192.168.0.9:8080');
// var relays = {
//   // id : usb relay id
//   R1: 0,
//   R2: 1,
//   R3: 2,
//   R4: 3,
//   R5: 4,
//   R6: 5,
//   R7: 6,
//   R8: 7,
//   R9: 8,
//   R10: 9,
//   R11: 10,
//   R12: 11,
//   R13: 12,
//   R14: 13,
//   R15: 14,
//   R16: 15
// };
//
//
// //sets relay state on switch change
//  function toggleRelay(relay, state) {
//   usbrelay.set(relay , state);
//
// }
//
// //turns off all relays on ctrl+c event
// function toggleRelays(relays, state) {
//   for(var id in relays) {
//     usbrelay.set(relays[id] , false);
//   }
// }
//
// //logs relay state in console on change
// function printRelayState(id, state) {
//   console.log('Relay: ' + id + ', state: ' + state);
// }




//   var data = {};
//   for(var id in relays) {
//     data[id] = usbrelay.stateArray[relays[id]];
// }

module.exports = function (schedule) {
  var Test = schedule.scheduleJob('*/5 * * * * *', function(){
     socket.broadcast.emit('R1', { state: true });
     //toggleRelay(relays['R1'], 'state: true');
     //printRelayState('R1', data.state);
  console.log('5 Second Test');
});
//   var PumpLOWon = schedule.scheduleJob({hour: 6}, function(){
//      socket.emit('R1', { state: true });
// 	 console.log('6am filter low: on');
// });
//   var PumpLOWoff = schedule.scheduleJob({hour: 23}, function(){
//      socket.emit('R1', { state: false });
// 	 console.log('11pm filter low: off');
// });
//
//
//   var BugZapperOn = schedule.scheduleJob({hour: 18}, function(){
//      socket.emit('R15', { state: true });
// 	 console.log('6pm Bug Zapper: on');
// });
//   var BugZapperOff = schedule.scheduleJob({hour: 24}, function(){
//      socket.emit('R15', { state: false });
// 	 console.log('11pm Bug Zapper: off');
// });
};
