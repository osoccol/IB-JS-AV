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
console.log('clients', clients);

const adults = clients.filter(el => el.age >= 18);
console.log('adults', adults);

const report = clients.map(el => `${el.name} a effectué ${el.purchases} achats.`);
console.log('report', report);

const totalPurchases = clients.reduce((sum, cli) => sum + cli.purchases, 0);
console.log(`Total des achats : ${totalPurchases}`);

// BONUs
const bonus = {
    France: clients.filter(cli => cli.country == 'France').map(el => el.name),
    USA: clients.filter(cli => cli.country == 'USA').map(el => el.name),
    Canada: clients.filter(cli => cli.country == 'Canada').map(el => el.name)
}
console.log('bonus', bonus);

