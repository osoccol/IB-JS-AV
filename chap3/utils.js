function hello() {
    console.log('Hello World !');
}

(function () {
    var localVar = "Je suis une fonction console.log";
    console.log(localVar);
})();
// localVar n'est pas accessible en dehors de l'IIFE