import * as add from './add.js';
import './sideeffect.js';

console.log(add.version);
const added = add.default(1, 2);
console.log(added);

hello('harin');