const { exec } = require('child_process');

function shutDown() {
    console.log('MA INCHIIID <3');
    exec('sudo shutdown -h now');
}

function reboot() {
    console.log('MA RESTAREEZ <3');
    exec('sudo shutdown -r now');
}

shutDown();