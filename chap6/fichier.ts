let age: number = 30;
let firstname: string = "Alice";
let isActive: boolean = true;

type Client = {
    id: number;
    firstname: string;
    email: string;
}

let client1: Client = {
    id: 101,
    firstname: firstname,
    email: 'alice@example.com'
}

console.log('client1', client1);

// Fonction pour afficher un client dans le HTML
function displayClient(client: Client): void {
    const clientElement = document.createElement("div");
    clientElement.innerHTML = `
        <h2>Client Information</h2>
        <p><strong>ID:</strong> ${client.id}</p>
        <p><strong>Firstname:</strong> ${client.firstname}</p>
        <p><strong>Email:</strong> ${client.email}</p>
    `;
    document.body.appendChild(clientElement);
}

// Appel de la fonction
displayClient(client1);