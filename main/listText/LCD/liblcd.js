const RS = 12;
const E = 25;
const DATA = [6, 26, 24, 16];
const COLS = 16;
const ROWS = 2;

const Lcd = require('lcd');
const lcd = new Lcd({ rs: RS , e: E, data: DATA, cols: COLS, rows: ROWS });

var initialized = false;

lcd.on ('ready', function ()
{
	initialized = true;
});


////Utility functions
function write(string, col = 0, row = 0, done) {
	return new Promise (function (resolve, reject)
	{
		lcd.setCursor(col, row);
	    //console.log('i set cursor to:' + row + ' ' + col);
	    lcd.print(string, function() {
	        resolve();
	    });
	});
    
};

function clear(){
	lcd.clear();
}

function init ()
{
	return new Promise (function (resolve, reeject)
	{
		if (!initialized) lcd.on ('ready', resolve);
		else process.nextTick (resolve);
	});
}


module.exports = {
    blink: lcd.blink,
    write: write,
    clear: clear,
    init: init
}