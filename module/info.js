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
        information.ip = ip;
        resolve();
    })
}


module.exports = {
	updateInfo: updateInfo,
	information: information
}