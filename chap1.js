// Incorrect
function Timer() {
    this.time = 0;
    setInterval(function () {
        this.time++; // Erreur : "this" ne référence pas l'objet Timer
        console.log(this.time); // NaN ou undefined
    }, 1000);
}

const myTimer = new Timer();

// Correct via BIND

// function Timer() {
//     this.time = 0;
//     setInterval(function () {
//         this.time++; // Erreur : "this" ne référence pas l'objet Timer
//         console.log(this.time); // NaN ou undefined
//     }.bind(this), 1000);
// }

// const myTimer = new Timer();

// OU via une CLOSURE

// function Timer() {
//     this.time = 0;
//     const self = this; // Capture "this" dans une variable
//     setInterval(function () {
//         self.time++;
//         console.log(self.time); // 1, 2, 3...
//     }, 1000);
// }

// const myTimer = new Timer();

// OU via une FONCTION FLECHEE (préférée)

// function Timer() {
//     this.time = 0;
//     setInterval(() => {
//         this.time++;
//         console.log(this.time);
//     }, 1000);
// }

// const myTimer = new Timer();


// // call, apply, bind
// function sayHello(punctuation) {
//     console.log(`Hello, ${this.name}${punctuation}`);
// }

// sayHello.call({ name: "Alice" }, "!");

// sayHello.apply({ name: "Bob" }, ["?"]);

// const boundSayHello = sayHello.bind({ name: "Charlie" }, '.');
// boundSayHello();
