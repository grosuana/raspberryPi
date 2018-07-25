const lcd = require('./listText/listText');
const board = require('./listText/gpio/gpiolib.js')


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

lcd.push(obj1);
lcd.push(obj2);
lcd.push(obj3);


//stanga
board.button2.watch(async function(err, value) {
    board.ledGreen.writeSync(value);
    
    if (value) {
        if (index == 0) {
            index = lcd.length - 1;
            await lcd.writeObjectOnLcd(index);
            console.log('if verde' + lcd.length);
        } else {
            index--;
            await lcd.writeObjectOnLcd(index);
            console.log('else verde' + lcd.length)
        }
        
    }

});



//dreapta
board.button1.watch(async function(err, value) {
    board.ledRed.writeSync(value);
    
    if (value) {
        if (index == lcd.length - 1) {
            index = 0;
           await lcd.writeObjectOnLcd(index);
           console.log('if rosu' + index);
        } else {
            index++;
            await lcd.writeObjectOnLcd(index);
            console.log('else rosu' + index);
        }
        
    }

});









// // lcd.on(async function() {
// //     await lcd.write('hey ', 0, 0);
// //     await lcd.write('there', 0, 1);
// //     lcd.clear();
// // })



// // async function writeArrayOnLcd(array, buttonLeft, buttonRight, index) {
// //     lcd.on(async function() {
// //         await writeObjectOnLcd(array[index], lcd);
// //         await console.log(index);
// //     });


// //     buttonLeft.watch(async function(err, value) {
// //         if (value) {
// //             if (index == 0) {
// //                 await writeObjectOnLcd(array[index = array.length - 1], lcd);
// //             } else {
// //                 await writeObjectOnLcd(array[--index], lcd);
// //             }

// //         }

// //     });
// //     buttonRight.watch(async function(err, value) {
// //         if (value) {
// //             if (index == array.length - 1) {
// //                 await writeObjectOnLcd(array[index = 0], lcd);
// //             } else {
// //                 await writeObjectOnLcd(array[++index], lcd);
// //             }
// //         }
// //     });
// // }