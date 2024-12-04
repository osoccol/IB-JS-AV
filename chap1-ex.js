// 1. Timer avec "this"
function Timer() {
    this.time = 0;
    let interval = setInterval(() => {
        this.time++;
        console.log(`Second: ${this.time}`);
        if (this.time >= 10) clearInterval(interval);  // Stop after 10 seconds
    }, 1000);
}

const myTimer = new Timer();

// 2. Exercice avec `call`
function greet(punctuation) {
    console.log(`Hello, ${this.name}${punctuation}`);
}

const person1 = { name: 'John' };
greet.call(person1, '!');

// 3. Exercice avec `apply`
function multiply(a, b, c) {
    console.log(a * b * c);
}

multiply.apply(null, [2, 3, 4]);

// 4. Exercice avec `bind`
function showName() {
    console.log(`My name is ${this.name}`);
}

const person2 = { name: 'Jane' };
const boundShowName = showName.bind(person2);
boundShowName();

// Bonus : Utilisation de `bind` pour un compteur
const counter = {
    value: 0,
    increment() {
        this.value++;
        console.log(this.value);
    }
};

const incrementCounter = counter.increment.bind(counter);
incrementCounter(); // 1
incrementCounter(); // 2
