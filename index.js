console.log('Starting Rebase')

import {context} from "@actions/github";

const payload = JSON.stringify(context, undefined, 2)
console.log(`The event context: ${payload}`);
