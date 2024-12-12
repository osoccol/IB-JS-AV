"use strict";

var clients = [{
  id: 1,
  name: "Alice",
  balance: 1200
}, {
  id: 2,
  name: "Bob",
  balance: -50
}, {
  id: 3,
  name: "Charlie",
  balance: 3000
}];
var positiveBalances = clients.filter(function (client) {
  return client.balance > 0;
});
var totalBalance = positiveBalances.reduce(function (acc, client) {
  return acc + client.balance;
}, 0);
console.log("Clients with positive balances:", positiveBalances);
console.log("Total positive balance:", totalBalance);
