const CACHE_NAME = 'flashcards-cache-v5';
const URLS_CACHE = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json',
    './icons/icon-192x192.png',
    './icons/icon-512x512.png',
    './screenshots/screenshot-desktop.png',
    './screenshots/screenshot-mobile.png',
];

// 1. Install - Primeira vez que o SW é instalado. (Ideal para cache inicial)
self.addEventListener("install", (event) => {
    console.log("Service Worker foi instalado.");
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(URLS_CACHE))
    );
});

// 2. Activate - Ativado após a instalação. (Pode limpar caches antigos)
self.addEventListener("activate", (event) => {
    console.log("Service Worker foi ativado.");
    event.waitUntil(
        caches.keys().then((keys) => {
            Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
        })
    );
});

// 3. Fetch - Interceptar todas as requisições da página e decide como responde-las
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((res) => res || fetch(event.request))
    );
})