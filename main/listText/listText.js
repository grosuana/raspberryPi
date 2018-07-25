const board = require('./gpio/gpiolib.js')
const lcd = require('./LCD/liblcd.js')


//WRITE ON LCD
// let array = [{
//         id: 0,
//         line1: 'acesta este',
//         line2: 'primul ob'
//     },
//     {
//         id: 1,
//         line1: 'acesta este',
//         line2: 'al doilea ob'
//     },
//     {
//         id: 2,
//         line1: 'acesta este',
//         line2: 'al treilea ob'
//     }
// ];
let array = [];

function doesIdExist(id) {
    let da = 0;
    for (let object of array) {
        if (object.id == id) {
            da = 1;
        }
    }
    if (da) {
        return true;
    } else {
        return false;
    };
}

async function writeObjectOnLcd(index) {
    return new Promise(async function(resolve, reject) {
        await lcd.init ();
        await lcd.clear();
        await lcd.write(array[index].line1, 0, 0);
        await lcd.write(array[index].line2, 0, 1);
        resolve();
    });


};

function push(object) {
    
    let index = array.length;
    if (object.id === undefined) {
        let i = 0;
        while (object.id === undefined) {

            if (doesIdExist(array, i)) {
                i++;
            } else {
                object.id = i;
            };
        }

    };

    if (object.line1 === undefined) {
        object.line1 = '';
    };

    if (object.line2 === undefined) {
        object.line2 = '';
    };

    array.splice(index, 0, object);
    return object;
}

function removeByIndex(index) {
    array.splice(index, 1);
}

function removeById(id) {
    array.forEach(function(object, index) {
        if (object.id === id) {
            array.splice(index, 1);
        }
    });
}

module.exports = {
    removeById: removeById,
    removeByIndex: removeByIndex,
    push: push,
    writeObjectOnLcd: writeObjectOnLcd,
    length: array.length
}

obj1 = {
    id: 0,
    line1: 'ababab',
    line2: 'ababab'
};

obj2 = {
    id: 0,
    line1: 'cdcdcdcd',
    line2: 'cdcdcdc'
};

// push(obj1)
// console.log(array);
// async function abc() {
    
//     await writeObjectOnLcd(obj1);
//     setTimeout(async function(){await writeObjectOnLcd(obj2); }, 3000);
// }

// abc();