const numbers = [1, 2, 3, 4, 5];

// Utilisation de boucle for
// let squared = [];
// for (let i = 0; i < numbers.length; i++) {
//   squared.push(numbers[i] ** 2);
// }
// console.log('squared', squared);

// Utilisation de map
const squared = numbers.map(num => num ** 2);
console.log('squared', squared);
// Résultat : [1, 4, 9, 16, 25]

// Utilisation de filter
const even = numbers.filter(num => num % 2 === 0);
console.log('even', even);
// Résultat : [2, 4]

// Utilisation de reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('sum', sum);
// Résultat : 15

// EXERCICE
const clients = [
    { name: 'Alice', age: 25, purchases: 5, country: 'France' },
    { name: 'Bob', age: 17, purchases: 2, country: 'USA' },
    { name: 'Charlie', age: 30, purchases: 10, country: 'France' },
    { name: 'Diana', age: 45, purchases: 1, country: 'Canada' },
    { name: 'Eve', age: 20, purchases: 0, country: 'USA' }
];

const adults = clients.filter(/* Votre code ici */);
console.log(adults);

const report = adults.map(/* Votre code ici */);
console.log(report);

const totalPurchases = adults.reduce(/* Votre code ici */);
console.log(`Total des achats : ${totalPurchases}`);

// BONUs
const bonus = {
    France: [ /* Clients en France */],
    USA: [ /* Clients aux USA */],
    Canada: [ /* Clients au Canada */]
}
