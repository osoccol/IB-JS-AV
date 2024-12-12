// Méthode BDD
// Ne pas toucher à ces fonctions, vous devez écrire les tests
function isOdd(number) {
    return number % 2 === 1;
}

function getFirstLetter(str) {
    return str.charAt(0);
}

function doubleNumber(number) {
    return number * 2;
}

function isEmptyString(str) {
    return str == '';
}

// Méthode TDD
// A partir des tests déjà écrits, veuillez coder les fonctions pour que les tests fonctionnent

module.exports = { isOdd, getFirstLetter, doubleNumber, isEmptyString };