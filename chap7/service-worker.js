const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    './index.html',
    './app.js',
    './style.css',
];

// Installation du Service Worker et mise en cache des fichiers
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Fichiers mis en cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Activation du Service Worker et nettoyage des anciens caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Interception des requêtes réseau et retour du cache en mode hors ligne
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
