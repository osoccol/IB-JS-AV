describe('Fonctions déjà codées', () => {
    // Ecrire les tests ici
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