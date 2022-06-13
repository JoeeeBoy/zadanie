import os from 'os'

console.log(os.homedir(), os.hostname(), os.version(), os.type());

import welcome from './welcome.js';

console.log(welcome())