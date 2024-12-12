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