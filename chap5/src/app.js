// Importer un module

// CommonJS, non supporté dans les navigateurs (utilisable côté serveur en NodeJS par exemple)
// const add = require('./math.js');

import { add } from './math.js';
console.log(add(2, 3)); // 5
