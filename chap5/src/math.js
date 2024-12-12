// Exporter un module

// CommonJS, non supporté dans les navigateurs (utilisable côté serveur en NodeJS par exemple)
// module.exports = function add(a, b) {
//     return a + b;
// };

export function add(a, b) {
    return a + b;
}
