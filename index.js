console.log('Starting Rebase')

const github = require('@actions/github');

const payload = JSON.stringify(github.context, undefined, 2)
console.log(`The event context: ${payload}`);
