const { getFirstLetter, doubleNumber, isOdd, isEmptyString} = require('./exercice.js');


describe('Fonctions déjà codées', () => {
    // Ecrire les tests ici
    it('devrait retourner true si le nombre est impair', () => {
        expect(isOdd(3)).toBe(true);
        expect(isOdd(4)).toBe(false);
    });

    it('devrait retourner la première lettre d\'une chaîne', () => {
        expect(getFirstLetter('Bonjour')).toBe('B');
    });
});

describe('Fonctions à coder', () => {
    it('devrait retourner le double d\'un nombre', () => {
        expect(doubleNumber(2)).toBe(4);
        expect(doubleNumber(-5)).toBe(-10);
    });

    it('devrait vérifier si une chaîne est vide', () => {
        expect(isEmptyString('')).toBe(true);
        expect(isEmptyString('Hello')).toBe(false);
    });
});