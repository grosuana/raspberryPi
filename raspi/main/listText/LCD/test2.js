const Lcd = require('lcd');
const lcd = new Lcd({ rs: 12, e: 25, data: [6, 26, 24, 16], cols: 16, rows: 2 });


async function write(string){
	lcd.on('ready', async function(){
	let finish = await lcd.print(string);
	})
	}

write('lal');
write('abc');