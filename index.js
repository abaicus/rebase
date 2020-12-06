console.log('Starting Rebase')

const github = require('@actions/github');
const exec = require('./exec.js');

const run = async () => {

	exec.result("sh ./rebase.sh", (err, response) => {
		if (!err) {
			console.log(response);
		} else {
			console.log(err);
		}
	});

	const payload = JSON.stringify(github.context, undefined, 2)
	console.log(`The event context: ${payload}`);
}

run();
