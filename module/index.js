const lcd = require('./printFunctions');
const board = require('./gpiolib')



let index = 0;
obj1 = {
    id: 0,
    line1: 'acesta este',
    line2: 'primul ob'
};
obj2 = {
    id: 1,
    line1: 'acesta este',
    line2: 'al doilea ob'
};
obj3 = {
    id: 2,
    line1: 'acesta este',
    line2: 'al treilea ob'
};
obj4 = {
    id: 3,
    line1: 'acesta este',
    line2: 'al patrulea ob'
};

obj5 = {
    id: 4,
    line1: 'acesta este',
    line2: 'al cincilea ob'
};

obj6 = {
    id: 4,
    line1: 'afisez doar',
    line2: 'o data'
};


lcd.push(obj1);
lcd.push(obj2);
lcd.push(obj3);
lcd.push(obj4);
lcd.push(obj5);
// console.log(lcd.pop());
// lcd.displayCurrent();
// lcd.removeByIndex(2);
// lcd.displayOnce(obj6);


lcd.displayCurrent();

//stanga
board.button2.watch(async function(err, value) {
    board.ledGreen.writeSync(value);
    if (value) {
        await lcd.displayPrevious();
    }
});



//dreapta
board.button1.watch(async function(err, value) {
    board.ledRed.writeSync(value);
    if (value) {
        await lcd.displayNext();
    }

});