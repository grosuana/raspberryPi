const board = require('./gpiolib.js')
const lcd = require('./lcdlib.js')


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

function doesIdExist(array, id) {
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

async function writeObjectOnLcd(object) {
    return new Promise(async function(resolve, reject) {
        await lcd.clear();
        await lcd.write(object.line1, 0, 0);
        await lcd.write(object.line2, 0, 1);
        resolve();
    });


};

function push(array, recievedObject, index) {
    
    index = index || array.length;
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

function removeByIndex(array, index) {
    array.splice(index, 1);
}

function removeById(array, id) {
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
    init: lcd.init
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

async function abc() {
    await lcd.init ();
    await writeObjectOnLcd(obj1);
    setTimeout(async function(){await writeObjectOnLcd(obj2); console.log ('rewrewr');}, 3000);
}

abc();