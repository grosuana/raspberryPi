const lcd = require('./printFunctions');
const board = require('./gpiolib')
const info = require('./info')


let index = 0;
// obj1 = {
//     id: 1,
//     line1: 'acesta este',
//     line2: 'primul ob'
// };
// obj2 = {
//     id: 2,
//     line1: 'acesta este',
//     line2: 'al doilea ob'
// };
// obj3 = {
//     id: 3,
//     line1: 'acesta este',
//     line2: 'al treilea ob'
// };
// obj4 = {
//     id: 4,
//     line1: 'acesta este',
//     line2: 'al patrulea ob'
// };

// obj5 = {
//     id: 5,
//     line1: 'acesta este',
//     line2: 'al cincilea ob'
// };

// obj6 = {
//     //id: 4,
//     line1: 'afisez dooar',
//     line2: 'o data'
// };


// lcd.push(obj1);
// lcd.push(obj2);
// lcd.push(obj3);
// lcd.push(obj4);
// lcd.push(obj5);
// lcd.push(obj6);
// console.log(lcd.pop());
// // console.log(lcd.pop());
// // lcd.displayCurrent();
// // lcd.removeByIndex(2);
// // lcd.displayOnce(obj6);
// lcd.removeById(1);

//punem info in array

async function run () {
    await info.updateInfo();
    let obj1 = {
        id: 1,
        line1: 'adresa ip',
        line2: info.information.ip
    };
    let obj2 = {
        id: 2,
        line1: 'id-ul placii',
        line2: info.information.id
    };
    lcd.push(obj1);
    lcd.push(obj2);
    lcd.displayCurrent();
}

run ();



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