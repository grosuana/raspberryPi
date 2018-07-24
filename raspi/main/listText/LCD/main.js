const lcd = require('./test.js');
lcd.on(async function() {
    await lcd.write('hey mama', 0, 0);
    await lcd.write('bbbbbc', 0, 1);

})