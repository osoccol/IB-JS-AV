// Fonction de somme
function add(a, b) {
    return a + b;
}

// Fonction qui retourne des données à partir d'une URL (simulée ici)
function fetchData(url) {
    const mockData = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];
    if (url === 'https://api.example.com/data') {
        return Promise.resolve(mockData);
    }
    return Promise.reject('URL non valide');
}

// Fonction pour vérifier si un nombre est pair
function isEven(num) {
    return num % 2 === 0;
}

module.exports = { add, fetchData, isEven };
