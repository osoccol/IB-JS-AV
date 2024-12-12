self.addEventListener('install', event => {
    console.log('Service Worker installé');
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([ 
                './index.html',
                './fichier.js'
            ]);
        })
    );
});

// Peut récupérer le résultat d'une reponse en cache si on est hors-ligne et permet donc à l'application de fonctionner
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
