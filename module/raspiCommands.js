const { execSync } = require('child_process');

function shutDown() {
    console.log('MA INCHIIID <3');
    execSync('sudo poweroff');
}

function reboot() {
    console.log('MA RESTAREEZ <3');
    execSync('sudo reboot');
}

shutDown();