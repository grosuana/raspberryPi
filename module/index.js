const lcd = require('./printFunctions.js');
const board = require('./gpiolib.js')


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

lcd.push(lcd.array, obj1);
lcd.push(lcd.array, obj2);
lcd.push(lcd.array, obj3);
console.log(lcd.array);

lcd.writeObjectOnLcd(lcd.array[0]);
setTimeout(function() { lcd.writeObjectOnLcd(lcd.array[1]);console.log('heeeey') }, 3000);



// //stanga
// board.button2.watch(async function(err, value) {
//     board.ledGreen.writeSync(value);
//     if (value) {
//         await lcd.writeObjectOnLcd(lcd.array[1]);
//         console.log(lcd.array[1])
//     }

//     // if (value) {
//     //     if (index === 0) {
//     //         index = lcd.array.length - 1;
//     //         await lcd.writeObjectOnLcd(lcd.array[index]);
//     //         console.log(lcd.array[index]);
//     //     } else {
//     //         index--;
//     //         await lcd.writeObjectOnLcd(lcd.array[index]);
//     //         console.log(lcd.array[index])
//     //     }
//     //     console.log(index);
//     // }

// });



// //dreapta
// board.button1.watch(async function(err, value) {
//     board.ledRed.writeSync(value);
//     if (value) {
//         await lcd.writeObjectOnLcd(lcd.array[2]);
//         console.log(lcd.array[2])
//     }
//     // if (value) {
//     //     if (index === lcd.array.length - 1) {
//     //         index = 0;
//     //        await lcd.writeObjectOnLcd(lcd.array[index]);
//     //        console.log(lcd.array[index]);
//     //     } else {
//     //         index++;
//     //         await lcd.writeObjectOnLcd(lcd.array[index]);
//     //         console.log(lcd.array[index]);
//     //     }
//     //     console.log(index);
//     // }

// });









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