const Lcd = require('lcd');
const lcd = new Lcd({ rs: 12, e: 25, data: [6, 26, 24, 16], cols: 16, rows: 2 });

//function whenReady(callback){
//	lcd.on('ready', callback);
//
//}

function setCursor(col, row) {

    lcd.setCursor(col, row);

};

function autoScroll(bool) {

    if (bool == 'true') {
        lcd.autoScroll();
    } else {
        lcd.noAutoscroll();
    }

};

function write(str, col, row) {

    setCursor(col, row);
    autoScroll(false);
    lcd.print('testest', function(err) {
        if (err) {
            throw err;
        }
    });

};

lcd.on('ready', write('abscsc', 0, 0));

module.exports = {
    lcd: lcd,
    setCursor: setCursor,
    autoScroll: autoScroll,
    write: write,
    whenReady: whenReady
}