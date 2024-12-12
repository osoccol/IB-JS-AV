// Importer le module http de Node.js
const http = require('http');

// Créer un serveur
const server = http.createServer((req, res) => {
    // Vérifier si l'URL est '/hello'
    if (req.url === '/hello') {
        // Répondre avec 'Hello World'
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World');
    } else if (req.url === '/json') {
        // Répondre avec 'Hello World'
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'JSON response' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

// Lancer le serveur sur le port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
