let age: number = 30;
let firstname: string = "Alice";
let isActive: boolean = true;

type Client = {
    id: number;
    firstname: string;
    email: string;
}

// Tableau de clients
let clients: Client[] = [
    { id: 101, firstname: "Alice", email: "alice@example.com" },
    { id: 102, firstname: "Bob", email: "bob@example.com" },
    { id: 103, firstname: "Charlie", email: "charlie@example.com" },
];

// Fonction pour afficher la liste des clients
function displayClients(clients: Client[]): void {
    const container = document.getElementById("client-list");
    if (!container) return;
    container.innerHTML = ""; // Réinitialiser le contenu
    clients.forEach(client => {
        const clientElement = document.createElement("div");
        clientElement.innerHTML = `
            <h2>Client ID: ${client.id}</h2>
            <p><strong>Firstname:</strong> ${client.firstname}</p>
            <p><strong>Email:</strong> ${client.email}</p>
        `;
        container.appendChild(clientElement);
    });
}

// Fonction pour filtrer les clients par e-mail
function filterClientsByEmail(email: string): Client[] {
    return clients.filter(client => client.email.includes(email));
}

// Gestion de la recherche
const searchForm = document.getElementById("search-form") as HTMLFormElement;
searchForm?.addEventListener("submit", event => {
    event.preventDefault();
    const emailInput = (document.getElementById("email-input") as HTMLInputElement).value;
    const filteredClients = filterClientsByEmail(emailInput);
    displayClients(filteredClients);
});

// Affichage initial des clients
displayClients(clients);

// CHAPITRE 5 : LocalStorage / APIs / PWA
// Stocker une donnée
localStorage.setItem('username', 'Alice');

// Récupérer une donnée
let username = localStorage.getItem('username');
console.log(username);

// // Supprimer une donnée
setTimeout(() => {
    localStorage.removeItem('username');
}, 4000)

// Exemple d'une requête Fetch
let url = 'https://jsonplaceholder.typicode.com/users?_limit=5';
fetch(url)
    .then(response => response.json())  // Convertir la réponse en JSON
    .then(data => console.log(data))
    .catch(error => console.error('Erreur:', error));

// Vérification si le navigateur supporte les Service Workers
if ('serviceWorker' in navigator) {    
    navigator.serviceWorker.register('./service-worker.js')
        .then(registration => console.log('Service Worker enregistré :', registration))
        .catch(error => console.error('Échec de l\'enregistrement :', error));
}
