var age = 30;
var firstname = "Alice";
var isActive = true;
var client1 = {
    id: 101,
    firstname: firstname,
    email: 'alice@example.com'
};
console.log('client1', client1);
// Fonction pour afficher un client dans le HTML
function displayClient(client) {
    var clientElement = document.createElement("div");
    clientElement.innerHTML = "\n        <h2>Client Information</h2>\n        <p><strong>ID:</strong> ".concat(client.id, "</p>\n        <p><strong>Firstname:</strong> ").concat(client.firstname, "</p>\n        <p><strong>Email:</strong> ").concat(client.email, "</p>\n    ");
    document.body.appendChild(clientElement);
}
// Appel de la fonction
displayClient(client1);
