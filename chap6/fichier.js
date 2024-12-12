var age = 30;
var firstname = "Alice";
var isActive = true;
// Tableau de clients
var clients = [
    { id: 101, firstname: "Alice", email: "alice@example.com" },
    { id: 102, firstname: "Bob", email: "bob@example.com" },
    { id: 103, firstname: "Charlie", email: "charlie@example.com" },
];
// Fonction pour afficher la liste des clients
function displayClients(clients) {
    var container = document.getElementById("client-list");
    if (!container)
        return;
    container.innerHTML = ""; // Réinitialiser le contenu
    clients.forEach(function (client) {
        var clientElement = document.createElement("div");
        clientElement.innerHTML = "\n            <h2>Client ID: ".concat(client.id, "</h2>\n            <p><strong>Firstname:</strong> ").concat(client.firstname, "</p>\n            <p><strong>Email:</strong> ").concat(client.email, "</p>\n        ");
        container.appendChild(clientElement);
    });
}
// Fonction pour filtrer les clients par e-mail
function filterClientsByEmail(email) {
    return clients.filter(function (client) { return client.email.includes(email); });
}
// Gestion de la recherche
var searchForm = document.getElementById("search-form");
searchForm === null || searchForm === void 0 ? void 0 : searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var emailInput = document.getElementById("email-input").value;
    var filteredClients = filterClientsByEmail(emailInput);
    displayClients(filteredClients);
});
// Affichage initial des clients
displayClients(clients);
// CHAPITRE 5 : LocalStorage / APIs / PWA
// Stocker une donnée
localStorage.setItem('username', 'Alice');
// Récupérer une donnée
var username = localStorage.getItem('username');
console.log(username);
// // Supprimer une donnée
setTimeout(function () {
    localStorage.removeItem('username');
}, 4000);
// Exemple d'une requête Fetch
var url = 'https://jsonplaceholder.typicode.com/users?_limit=5';
fetch(url)
    .then(function (response) { return response.json(); }) // Convertir la réponse en JSON
    .then(function (data) { return console.log(data); })
    .catch(function (error) { return console.error('Erreur:', error); });
// Vérification si le navigateur supporte les Service Workers
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(function (registration) { return console.log('Service Worker enregistré :', registration); })
        .catch(function (error) { return console.error('Échec de l\'enregistrement :', error); });
}
