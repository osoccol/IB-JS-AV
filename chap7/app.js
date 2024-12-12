// Vérification du Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(reg => console.log('Service Worker enregistré:', reg))
        .catch(err => console.error('Erreur lors de l\'enregistrement du Service Worker:', err));
}

users = [];

// Sélecteurs HTML
const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');

// Récupération des utilisateurs depuis LocalStorage
function getUsersFromLocalStorage() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

// Affichage des utilisateurs
function displayUsers(users) {
    userList.innerHTML = ''; // Réinitialise la liste avant chaque affichage

    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} (${user.email})`;
        userList.appendChild(li);
    });
}

// Sauvegarde des utilisateurs dans LocalStorage
function saveUsersToLocalStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Ajouter un utilisateur à la liste
userForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const useremail = document.getElementById('useremail').value;

    const newUser = { name: username, email: useremail };

    // Ajouter l'utilisateur à la liste existante
    users = getUsersFromLocalStorage();
    users.push(newUser);

    // Sauvegarder dans LocalStorage et mettre à jour l'affichage
    saveUsersToLocalStorage(users);
    displayUsers(users);

    // Réinitialiser le formulaire
    userForm.reset();
});

// Récupérer les utilisateurs depuis l'API
function fetchUsers() {
    console.log('fetch data...');
    
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            users = data;
            saveUsersToLocalStorage(users); // Sauvegarder les utilisateurs récupérés
            displayUsers(users); // Afficher les utilisateurs
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des utilisateurs:', error);
            displayOfflineUsers(); // Afficher les utilisateurs stockés localement si l'API échoue
        });
}

// Afficher les utilisateurs stockés en localStorage en mode hors ligne
function displayOfflineUsers() {
    users = getUsersFromLocalStorage();
    if (users.length > 0) {
        displayUsers(users); // Afficher les utilisateurs en local
    } else {
        const li = document.createElement('li');
        li.textContent = 'Aucun utilisateur disponible (Mode Hors ligne)';
        userList.appendChild(li);
    }
}

function displayOfflineMessage() {
    let paragraph = document.getElementById('offlineMessage');
    paragraph.innerHTML = 'Vous êtes actuellement hors ligne. Les données suivantes sont récupérées du localStorage.';
}

// Initialisation
if (navigator.onLine) {
    fetchUsers(); // Charger les utilisateurs depuis l'API si connecté
} else {
    displayOfflineUsers(); // Afficher les utilisateurs depuis LocalStorage si hors ligne
    displayOfflineMessage();
}
