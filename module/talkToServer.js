const axios = require('axios');
const info = require('./info')



async function getCommand() {
    try {
        await info.updateInfo();
        let whoAmI = info.information;
        let response = await axios.post('http://192.168.1.232:3000/', whoAmI);
        switch (response.data.com) {
            case 'reboot':
                console.log('Ma rebootez');
                break;
            case 'powerOff':
                console.log('Ma inchid');
                break;
            default:
                console.log('Nu am primit comanda valida');
                console.log(response.data);
        }

    } catch (error) {
        console.error(error);
    }
}

getCommand();