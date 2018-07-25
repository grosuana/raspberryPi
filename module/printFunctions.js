const board = require('./gpiolib')
const lcd = require('./lcdlib')

let array = [];
let index = 0;
let delay = 300;


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
        await lcd.init();
        await lcd.clear();
        await lcd.write(array[index].line1, 0, 0);
        await lcd.write(array[index].line2, 0, 1);
        resolve();
    });
};

function pop() {
    return array.pop();
}

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

function displayNext() {
    setTimeout(function() {
        if (index === array.length - 1) {
            writeObjectOnLcd(index = 0);
        } else {
            writeObjectOnLcd(++index);
        }
    }, delay)

}

function displayCurrent() {
    setTimeout(function() {
        writeObjectOnLcd(index);
    }, delay)
}

function displayPrevious() {
    setTimeout(function() {
        if (index === 0) {
            writeObjectOnLcd(index = array.length - 1);
        } else {
            writeObjectOnLcd(--index);
        }
    }, delay)

}

function displayOnce(obj) {
    setTimeout(function() {
        return new Promise(async function(resolve, reject) {
            await lcd.init();
            await lcd.clear();
            await lcd.write(obj.line1, 0, 0);
            await lcd.write(obj.line2, 0, 1);
            resolve();
        })
    }, delay)
}

module.exports = {
    removeById: removeById,
    removeByIndex: removeByIndex,
    push: push,
    pop: pop,
    displayOnce: displayOnce,
    displayPrevious: displayPrevious,
    displayNext: displayNext,
    displayCurrent: displayCurrent

}