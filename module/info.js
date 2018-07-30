let fs = require('fs');
const { exec } = require('child_process');
let _ = require('lodash');
let Ip = require('ip');
let information = {
    id: '',
    ip: ''
}

function getIp() {
    ip = Ip.address();
}

async function getId() {
    return new Promise(async function(resolve, reject) {
        await exec('cat /proc/cpuinfo | grep Serial | cut -d \' \' -f 2 > ./.id.txt');
        await fs.readFile('./.id.txt', function(err, data) {
            id = data;
            // console.log('aici data: ' + id);
            resolve();
        });
    })
}

async function updateInfo() {
    return new Promise(async function(resolve, reject) {
        await getIp();
        await getId();
        information.id = _.toString(id).trim();
        while (information.id[0] == 0) {
            information.id = _.drop(information.id);
            let i;
            let info = '';
            let length = information.id.length;
            for (i = 0; i < length; i++) {
                info = info + information.id[i];
            }
            information.id = info;

        }
        information.ip = ip;
        resolve();
    })
}

async function update (){
    await updateInfo();
    setTimeout(update, 5000);
}

update();

module.exports = {
    updateInfo: updateInfo,
    information: information
}