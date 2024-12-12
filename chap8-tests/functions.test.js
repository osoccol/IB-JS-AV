const { add, fetchData, isEven } = require('./functions');

// Test unitaire : addition de deux nombres
test('addition de deux nombres', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
});

// Test d'intégration : appel à une API simulée
test('devrait récupérer des données depuis l\'API', async () => {
    const data = await fetchData('https://api.example.com/data');
    expect(data).toHaveLength(3);
    expect(data[0].name).toBe('Alice');
    expect(data[1].name).toBe('Bob');
    expect(data[2].name).toBe('Charlie');
});

// Test d'intégration : gestion des erreurs lors de l'appel API
test('devrait échouer si l\'URL est incorrecte', async () => {
    await expect(fetchData('https://api.example.com/invalid')).rejects.toBe('URL non valide');
});

// Test fonctionnel : vérification d'un nombre pair 
test('devrait vérifier si un nombre est pair', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(4)).toBe(true);
    expect(isEven(0)).toBe(true);
});

// Test fonctionnel : vérification d'un nombre impair
test('devrait vérifier si un nombre est impair', () => {
    expect(isEven(5)).toBe(false);
    expect(isEven(10)).toBe(true);
});
