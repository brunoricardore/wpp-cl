const yargs = require('yargs');
const open = require('open');

const { argv } = yargs
	.usage("Usage: $0 -p num")
	.option('p', {
		describe: "Phone number to text in whatsapp",
		alias: 'phone',
		type: 'string',
		demandOption: 'The phone number is required!'
	})
	.describe("help", "Show help.")
	.check(({ phone }) => {
		if (phone.length < 7) throw new Error('Is this a valid phone number?');
		return true;
	})

const { phone } = argv;

const wppURL = 'https://api.whatsapp.com/send?phone=';

if (phone.length) {
	open(`${wppURL}${phone}`);
}