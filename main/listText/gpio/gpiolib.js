const Gpio = require('onoff').Gpio;
const ledGreen = new Gpio(20, 'out');
const ledRed = new Gpio(21, 'out');
const button1 = new Gpio(13, 'in', 'both');
const button2 = new Gpio(19, 'in', 'both');


module.exports = {
	button1: button1,
	button2: button2,
	ledRed: ledRed,
	ledGreen: ledGreen
}