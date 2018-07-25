var Serialport = require("serialport");
var Board = require("firmata");

var board = new Board('/dev/ttyS0');
board.on("ready", () => {
  console.log('Found it!');
  //console.log(board.MODES);
  
  for (i = 2; i < 14; i++){
  	board.pinMode(i, board.MODES.OUTPUT);
  	board.digitalWrite(i, board.LOW);
  }
//   board.setSamplingInterval(1000)
// board.analogRead(5, function(value) {
//   console.log("The value of pin A0 is " + value + " as reported at the sampling interval");
// });
  // console.log(board.pins);
});