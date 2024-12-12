"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
// Exporter un module

// CommonJS, non supporté dans les navigateurs (utilisable côté serveur en NodeJS par exemple)
// module.exports = function add(a, b) {
//     return a + b;
// };

function add(a, b) {
  return a + b;
}