const clients = [
    { id: 1, name: "Alice", balance: 1200 },
    { id: 2, name: "Bob", balance: -50 },
    { id: 3, name: "Charlie", balance: 3000 },
];

const positiveBalances = clients.filter(client => client.balance > 0);
const totalBalance = positiveBalances.reduce((acc, client) => acc + client.balance, 0);

console.log("Clients with positive balances:", positiveBalances);
console.log("Total positive balance:", totalBalance);
