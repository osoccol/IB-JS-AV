function hello() {
    alert('Hello World !');
}

(function () {
    var localVar = "Je suis une fonction alert ";
    console.log(localVar);
})();
// localVar n'est pas accessible en dehors de l'IIFE

const client = { name: "Alice", age: 30 };
const { name, age } = client;
console.log(name, age); // Alice 30

const scores = [10, 20, 30];
const [first, second] = scores;
console.log(first, second); // 10 20

const surname = "Bob";
console.log(`Bonjour, ${surname}!`); // Bonjour, Bob!

// Code à moderniser
// var person = { name: "John", age: 25 };
// var fruits = ["Apple", "Orange", "Banana"];
// console.log("Name: " + person.name + ", Age: " + person.age);
// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// Code modernisé en ES2015
const person = { name: "John", age: 25 };
const fruits = ["Apple", "Orange", "Banana"];
console.log(`Name: ${person.name}, Age: ${person.age}`);
for (const fruit of fruits) {
  console.log(fruit);
}

