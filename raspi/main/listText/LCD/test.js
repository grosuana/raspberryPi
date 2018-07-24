const Lcd = require('lcd');
const lcd = new Lcd({ rs: 12, e: 25, data: [6, 26, 24, 16], cols: 16, rows: 2 });

// lcd.noAutoscroll();
//lcd.clear();


function write(string, col = 0, row = 0, done) {
	return new Promise (function (resolve, reject)
	{
		lcd.setCursor(col, row);
	    console.log('i set cursor to:' + row + ' ' + col);
	    lcd.print(string, function() {
	        resolve();
	    });
	});
    




};

function on(callback) {
    lcd.on('ready', callback);
}

module.exports = {
    blink: lcd.blink,
    write: write,
    on: on
}